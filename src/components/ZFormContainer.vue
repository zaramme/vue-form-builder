<template>
<div>
<template v-for="(entity,index) in value">
  <component :is="getComponentNameFrom(entity.type)" v-model="value[index]"></component>
</template>
</div>
</template>

<script>
import ZPage from './ZPage'
import ZSection from './ZSection'
import ZQuestion from './ZQuestion'

export default {
  name: 'ZFormContainer',
  components:{ZPage, ZSection, ZQuestion},
  props: ['value'],
  methods:{
    getComponentNameFrom(type){
      if(type === 'page'){
        return 'z-page'
      }
      if(type === 'section'){
        return 'z-section'
      }
      if(type === 'question'){
        return 'z-question'
      }
      // TODO: erro handling
      return 'z-section'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
