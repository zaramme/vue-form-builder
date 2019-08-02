<template>
<div class="zsection">
<h3>{{value.title}}</h3>
<z-form-container v-model="value.items" name="foo"></z-form-container>
</div>
</template>

<script>
import ZFormContainer from './ZFormContainer'

export default {
  name: 'ZSection',
  props:['value'],
  components:{
    // to avoid curculer refellence, import dinamicly
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
