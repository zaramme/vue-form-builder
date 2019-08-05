<template>
<div class="section-container">
  <div class="row section">
    <template v-if="is_editing">
      <h3>
        <el-input v-model="editing_data.title"></el-input>
      </h3>
      <div class="editbox">
        <el-button icon="el-icon-check" circle @click="save"></el-button>
        <el-button icon="el-icon-close" circle @click="cancelEdit"></el-button>
      </div>
    </template>
    <template v-else>
      <h3>{{value.title}}</h3>
      <div class="editbox">
        <el-button icon="el-icon-edit" @click="edit" circle></el-button>
      </div>
    </template>
  </div>
  <z-form-container v-model="value.items" name="foo" :addable="addable"></z-form-container>
</div>
</template>

<script>
import ZFormContainer from './ZFormContainer'
import EditableMixin from '@/mixins/EditableMixin'

export default {
  name: 'ZSection',
  mixins: [EditableMixin],
  props:['value'],
  components:{
    // to avoid curculer refellence, import dinamicly
    ZFormContainer: () => import('./ZFormContainer')
  },
  data () {
    return {
      addable:['section', 'question']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../scss/global.scss";
</style>
