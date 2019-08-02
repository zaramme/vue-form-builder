<template>
<div class="zpage">
<h4>{{value.title}}</h4>
</div></template>

<script>
export default {
  name: 'ZQuestion',
  props:[
    'value'
  ],
  data () {
    return {
      value:{},
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
