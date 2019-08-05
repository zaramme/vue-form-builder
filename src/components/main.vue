<template>
  <z-form v-model="value"></z-form>
</template>

<script>
import ZForm from './ZForm'
export default {
  name: 'Main',
  data () {
    return {
      // this is borderline between store based data-binding and v-model based data-binding.
      // below this, 'value' will be updated by v-model mechanism reactively and you should update store data by manually on this component.
      value: this.$store.state.default
    }
  },
  components:{
    ZForm
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
