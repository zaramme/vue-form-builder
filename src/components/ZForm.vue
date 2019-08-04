<template>
<div class="zform">
  <z-form-container v-model="value.items"></z-form-container>
</div>
</template>

<script>
import ZFormContainer from './ZFormContainer'

export default {
  name: 'ZForm',
  props: ['value'],
  components:{ZFormContainer}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
