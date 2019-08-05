<template>
<div class="page-container">
  <div class="row page">
  <template v-if="is_editing">
    <i class="el-icon-notebook-1"></i>
    <h2>
    <el-input v-model="editing_data.title"></el-input>
    </h2>
    <div class="editbox">
      <el-button icon="el-icon-check" circle @click="save"></el-button>
      <el-button icon="el-icon-close" circle @click="cancelEdit"></el-button>
    </div>
  </template>
  <template v-else>
    <i class="el-icon-notebook-1"></i>
    <h2>{{value.title}}</h2>
    <div class="editbox">
      <el-button icon="el-icon-edit" @click="edit" circle></el-button>
    </div>
  </template>
  </div>
  <z-form-container v-model="value.items"></z-form-container>
</div>
</template>

<script>
import ZFormContainer from './ZFormContainer'
import EditableMixin from '@/mixins/EditableMixin'

export default {
  name: 'ZPage',
  mixins: [EditableMixin],
  props:['value'],
  components:{
    // to avoid curculer refellence, import dinamicly
    ZFormContainer: () => import('./ZFormContainer')
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../scss/global.scss"
</style>
