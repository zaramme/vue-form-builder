<template>
<div class="zpage">
  <template v-if="is_editing">
    <el-input v-model="editing_data.title"></el-input>
    <el-button icon="el-icon-check" circle @click="save"></el-button>
    <el-button icon="el-icon-close" circle @click="cancelEdit"></el-button>
  </template>
  <template v-else>
    <h2>{{value.title}}</h2>
    <el-button icon="el-icon-edit" @click="edit" circle></el-button>
  </template>
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
<style scoped></style>
