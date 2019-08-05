<template>
<div class="zform">
  <template v-if="isFormEmpty">
    <div class="row page">
      <el-button icon="el-icon-plus" @click="addNewRow" round>Add first page</el-button>
    </div>
  </template>
  <template v-else>
    <z-form-container v-model="value.items"></z-form-container>
  </template>
</div>
</template>

<script>
import ZFormContainer from './ZFormContainer'
import AddableMixin from '@/mixins/AddableMixin'

export default {
  name: 'ZForm',
  props: ['value'],
  mixins:[AddableMixin],
  components:{ZFormContainer},
  methods:{
    addNewRow(){
      this.addChildRow({
        type: 'page',
        title: 'new page'
      })
    }
  },
  computed:{
    isFormEmpty(){
      return !Object.keys(this.value).length;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../scss/global.scss";
</style>
