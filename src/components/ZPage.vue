<template>
<div>
  <div class="row page">
    <template v-if="isEditing">
      <i class="el-icon-notebook-1"></i>
      <h2>
        <el-input v-model="editing_data.title"></el-input>
      </h2>
    </template>
    <template v-else>
      <i class="el-icon-notebook-1"></i>
      <h2>{{value.title}}</h2>
    </template>
    <div class="attribute"></div>
    <z-row-editor
      :is-editing="isEditing"
      @save="save"
      @cancelEdit="cancelEdit"
      @edit="edit"
      @addNewRow="addNewRow"
      @moveRowUpward="moveRowUpward"
      @moveRowDownward="moveRowDownward"
      @deleteSelf="deleteSelf"
    >
      <template v-slot:add-dropdown>  
        <el-dropdown-item command="page">Add new page</el-dropdown-item>
        <el-dropdown-item command="section">Add new section inside this page</el-dropdown-item>
        <el-dropdown-item command="question">Add new question inside this page</el-dropdown-item>
      </template>
    </z-row-editor>
  </div>
  <div class="page-container" v-if="value.items ">
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
  name: 'ZPage',
  mixins: [
    EditableMixin,
    AddableMixin
  ],
  props:[
    'value',
    'indexOfRaw'
  ],
  components:{
    ZRowEditor,
    // to avoid curculer refellence, import dinamicly
    ZFormContainer: () => import('./ZFormContainer')
  },
  methods:{
    addNewRow(command){
      if(command==='page'){
        this.$emit('add',{
          type: 'page',
          title: 'new page'
        }, this.indexOfRaw)
        return
      }
      if(command==='section'){
        this.addChildRow({
          type: 'section',
          title: 'new section'
        })
      }
      if(command==='question'){
        this.addChildRow({
          type: 'question',
          title: 'new question'
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../scss/global.scss"
</style>
