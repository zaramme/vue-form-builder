<template>
<div class="row question">
  <template v-if="is_editing">
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
      v-if="is_editing" v-model="editing_data.response_type"
    >
      <el-option value="number" label="Number" :key="0"> </el-option>
      <el-option value="text" label="Text" :key="1"></el-option>
    </el-select>
    <el-tag v-else>{{value.response_type}}</el-tag>
  </div>
  <div class="editbox">
    <template v-if="is_editing">
      <el-button icon="el-icon-check" circle @click="save"></el-button>
      <el-button icon="el-icon-close" circle @click="cancelEdit"></el-button>
    </template>
    <template v-else>
      <el-button icon="el-icon-edit" circle @click="edit"></el-button>
      <el-dropdown @command="addNewRow">
        <el-button icon="el-icon-plus" circle></el-button>
        <el-dropdown-menu>
          <el-dropdown-item command="question">Add new question</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </template>
  </div>
</div>
</template>

<script>
import EditableMixin from '@/mixins/EditableMixin'
import AddableMixin from '@/mixins/AddableMixin'

export default {
  name: 'ZQuestion',
  mixins: [
    EditableMixin,
    AddableMixin
  ],
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
