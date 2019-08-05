import UuidGeneratableMixin from '@/mixins/UuidGeneratableMixin'
export default {
  mixins:[UuidGeneratableMixin],
  methods:{
    addSiblingRow(content, indexToInsert=0){
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
    deleteSelf(){
      // if it does NOT has child item, delete directly
      if(!this.value['items']){
        // deligate to parent component(usually v-form-container)
        this.$emit('delete', this.indexOfRaw)
        return
      }
      // if if has child item, confirm by dialog 
      this.$confirm('This command will also delete items inside. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        // deligate to parent component(usually v-form-container)
        this.$emit('delete', this.indexOfRaw)
        return
      }).catch(() => {
        // nothing to do
      })
    },
    deleteSiblingRow(indexToDelete){
      this.value.splice(indexToDelete, 1)
    },
    swapSiblingRow(indexA, indexB){
      if(!this.value[indexA] || !this.value[indexB]){
        return
      }
      var tmp = this.value[indexA]
      this.$set(this.value, indexA ,this.value[indexB])
      this.$set(this.value, indexB ,tmp)
    },
    moveRowUpward(){
      this.$emit('swap', this.indexOfRaw, this.indexOfRaw-1)
    },
    moveRowDownward(){
      this.$emit('swap', this.indexOfRaw, this.indexOfRaw+1)
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