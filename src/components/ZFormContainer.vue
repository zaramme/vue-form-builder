<template>
<div>
<template v-for="(entity,index) in value">
  <component 
    :is="getComponentNameFrom(entity.type)" 
    v-model="value[index]" 
    :key="entity.uuid"
    @add="addSiblingRow"
    @delete="deleteSiblingRow"
    @swap="swapSiblingRow"
    :index-of-row="index"
  ></component>
</template>
</div>
</template>

<script>
import ZPage from './ZPage'
import ZSection from './ZSection'
import ZQuestion from './ZQuestion'
import AddableMixin from '@/mixins/AddableMixin'

export default {
  name: 'ZFormContainer',
  mixins: [AddableMixin],
  components:{ZPage, ZSection, ZQuestion},
  props: ['value'],
  methods:{
    // get component name dinamicly from "type" attribute in JSON
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
      // TODO: error handling
      return 'z-section'
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../scss/global.scss";
</style>
