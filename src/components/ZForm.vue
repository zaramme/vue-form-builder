<template>
<el-input v-model="vtest"></el-input>
</template>

<script>
export default {
  name: 'ZForm',
  data () {
    return {
      msg: ''
    }
  },
  computed:{
    vtest (){
      return this.$store.state.test
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
