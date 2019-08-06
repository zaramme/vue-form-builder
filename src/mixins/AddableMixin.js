// append manupurating-row function to like insert/delete/swap
import UuidGeneratableMixin from '@/mixins/UuidGeneratableMixin'
export default {
  mixins:[UuidGeneratableMixin],
  methods:{
    addSiblingRow(content, indexToInsert=0){
      const newRow = this._createNewRow(content)
      this.value.splice(indexToInsert+1, 0, newRow)
    },
    addChildRow(content, indexToInsert=0){
      if(!this.value['items']){
        this.$set(this.value, 'items', [])
      }
      const newRow = this._createNewRow(content)
      this.value.items.splice(0, 0, newRow)
    },
    deleteSelf(){
      // if it does NOT has child item, delete directly
      if(!this.value['items']){
        // deligate to parent component(usually v-form-container)
        this.$emit('delete', this.IndexOfRow)
        return
      }
      // if if has child item, confirm by dialog 
      this.$confirm('This command will also delete items inside. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        // deligate to parent component(usually v-form-container)
        this.$emit('delete', this.IndexOfRow)
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
      this.$emit('swap', this.IndexOfRow, this.IndexOfRow-1)
    },
    moveRowDownward(){
      this.$emit('swap', this.IndexOfRow, this.IndexOfRow+1)
    },
    _createNewRow(content){
      var newRow = {
        "uuid": this.generateUUID(),
        "title": "new object",
      }
      for(let key in content){
        newRow[key] = content[key]
      }
      return newRow
    }
  }
}