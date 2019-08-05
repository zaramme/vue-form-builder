<template>
<div class="row question">
  <template v-if="isEditing">
    <el-row>
    <el-col>
    <el-input v-model="editing_data.title"></el-input>
    </el-col>
    </el-row>
  </template>
  <template v-else>
    <i class="el-icon-question"></i>
    <h4>{{value.title}}</h4>
  </template>
  <div class="attribute">
    <el-select 
      v-if="isEditing" v-model="editing_data.response_type"
    >
      <el-option value="number" label="Number" :key="0"> </el-option>
      <el-option value="text" label="Text" :key="1"></el-option>
    </el-select>
    <el-tag v-else>{{value.response_type}}</el-tag>
  </div>
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
      <el-dropdown-item command="question">Add new question</el-dropdown-item>
    </template>
  </z-row-editor>

</div>
</template>

<script>
import EditableMixin from '@/mixins/EditableMixin'
import AddableMixin from '@/mixins/AddableMixin'
import ZRowEditor from './ZRowEditor'

export default {
  name: 'ZQuestion',
  mixins: [
    EditableMixin,
    AddableMixin
  ],
  components:{
    ZRowEditor
  },
  props:[
    'value',
    'indexOfRaw'
  ], 
  data(){
    return {
      editable_keys:[
        'title',
        'response_type'
      ]
    }
  },
  methods:{
    addNewRow(){
      this.$emit('add',{
          type: 'question',
          response_type: 'number'
        },
        this.indexOfRaw
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../scss/global.scss";
</style>
