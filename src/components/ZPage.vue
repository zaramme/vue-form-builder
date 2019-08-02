<template>
<div class="zpage">
<h2>{{value.title}}</h2>
<z-form-container v-model="value.items" name="foo"></z-form-container>
</div>
</template>

<script>
import ZFormContainer from './ZFormContainer'

export default {
  name: 'ZPage',
  props:['value'],
  components:{
    ZFormContainer: () => import('./ZFormContainer')
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
