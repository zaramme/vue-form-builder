<template>
<div>
  <div class="row section">
    <template v-if="isEditing">
      <i class="el-icon-postcard"></i>
      <h3>
        <el-input v-model="editing_data.title"></el-input>
      </h3>
    </template>
    <template v-else>
      <i class="el-icon-postcard"></i>
      <h3>{{value.title}}</h3>
    </template>
    <div class="attribute empty"></div>
    <z-row-editor
      :is-editing="isEditing"
      @save="save"
      @cancelEdit="cancelEdit"
      @edit="edit"
      @addNewRow="addNewRow"
      @moveMeUpward="moveMeUpward"
      @moveMeDownward="moveMeDownward"
      @deleteMe="deleteMe"
    >
      <template v-slot:add-dropdown>  
        <el-dropdown-item icon="el-icon-question" command="question">Add Question inside this section</el-dropdown-item>
        <el-dropdown-item icon="el-icon-postcard" command="section">Add Section inside this section</el-dropdown-item>
      </template>
    </z-row-editor>
  </div>
  <div class="section-container">
    <z-form-container v-model="value.items"></z-form-container>
  </div>
</div>
</template>

<script>
import ZFormContainer from './ZFormContainer'
import ZRowEditor from './ZRowEditor'
import EditableMixin from '@/mixins/EditableMixin'
import AddableMixin from '@/mixins/AddableMixin'

export default {
  name: 'ZSection',
  mixins: [
    EditableMixin,
    AddableMixin
  ],
  components:{
    ZRowEditor,
    ZFormContainer: () => import('./ZFormContainer') // to avoid curculer refellence, import dinamicly
  },
  props:[
    'value',
    'IndexOfRow'
  ],
  methods:{
    addNewRow(command){
      if(command==='section'){
        this.appendChildRow({
          type: 'section',
          title: 'new section'
        })
      }
      if(command==='question'){
        this.appendChildRow({
          type: 'question',
          title: 'new question',
          response_type: 'text'
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../scss/global.scss";
</style>
