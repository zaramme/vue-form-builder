<template>
<div>
  <div class="row section">
    <template v-if="is_editing">
      <h3>
        <el-input v-model="editing_data.title"></el-input>
      </h3>
      <div class="attribute"></div>
      <div class="editbox">
        <el-button icon="el-icon-check" circle @click="save"></el-button>
        <el-button icon="el-icon-close" circle @click="cancelEdit"></el-button>
      </div>
    </template>
    <template v-else>
      <h3>{{value.title}}</h3>
      <div class="attribute"></div>
      <div class="editbox">
        <el-button icon="el-icon-edit" @click="edit" circle></el-button>
        <el-dropdown @command="addNewRow">
          <el-button icon="el-icon-plus" circle></el-button>
          <el-dropdown-menu>
            <el-dropdown-item command="question">Add new question</el-dropdown-item>
            <el-dropdown-item command="section">Add new section inside</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </template>
  </div>
  <div class="section-container">
    <z-form-container v-model="value.items" name="foo" :addable="addable"></z-form-container>
  </div>
</div>
</template>

<script>
import ZFormContainer from './ZFormContainer'
import EditableMixin from '@/mixins/EditableMixin'
import AddableMixin from '@/mixins/AddableMixin'

export default {
  name: 'ZSection',
  mixins: [
    EditableMixin,
    AddableMixin
  ],
  props:[
    'value',
    'indexOfRaw'
  ],
  components:{
    // to avoid curculer refellence, import dinamicly
    ZFormContainer: () => import('./ZFormContainer')
  },
  data () {
    return {
      addable:['section', 'question']
    }
  },
  methods:{
    addNewRow(command){
      if(command==='section'){
        this.addChildRow({
          type: 'section'
        })
      }
      if(command==='question'){
        this.addChildRow({
          type: 'question'
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
