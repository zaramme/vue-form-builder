<template>
  <div class='content'>
  <h1>🐈Shawn's Nice Form builder🐈</h1>
  <z-json-manager v-model="value"></z-json-manager>
  <z-form v-model="value"></z-form>
  </div>
</template>

<script>
import ZForm from './ZForm'
import ZJsonManager from './ZJsonManager'
export default {
  name: 'Main',
  data () {
    return {
      // this is borderline between store based data-binding and v-model based data-binding.
      // below this, 'value' will be updated by v-model mechanism reactively and you should update store data by manually on this component.
      value: {}
    }
  },
  components:{
    ZForm,
    ZJsonManager
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../scss/global.scss";
</style>
