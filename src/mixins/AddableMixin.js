import UuidGeneratableMixin from '@/mixins/UuidGeneratableMixin'
export default {
  mixins:[UuidGeneratableMixin],
  methods:{
    addSiblingRow(content, indexToInsert=0){
      console.log('adding')
      const newRaw = this._createNewRaw(content)
      this.value.splice(indexToInsert+1, 0, newRaw)
    },
    addChildRow(content, indexToInsert=0){
      if(!this.value['items']){
        this.$set(this.value, 'items', [])
      }
      const newRaw = this._createNewRaw(content)
      this.value.items.splice(0, 0, newRaw)
    },
    _createNewRaw(content){
      var newRaw = {
        "uuid": this.generateUUID(),
        "title": "new object",
      }
      for(let key in content){
        newRaw[key] = content[key]
      }
      return newRaw
    }
  }
}