// append function to manage edit state of row.
export default {
  data () {
    return {
      // keep data in edit temprarily
      editing_data:null,

      // setting about which columns can be editable
      // can be override if the component allows to edit other key(e.g. response_type)
      editable_keys:['title']
    }
  },
  methods:{
    edit(){
      // init editing data object
      this.editing_data = {}
      for(let key of this.editable_keys){
        this.$set(this.editing_data, key,this.value[key])
      }
    },
    save(){
      // overwrite form data by editing data per key defined by editable_keys
      for(let key of this.editable_keys){
        this.value[key] = this.editing_data[key]
      }

      // quit editing mode
      this.editing_data = null
    },
    cancelEdit(){
      this.editing_data = null
    },
  },
  computed:{
    isEditing(){
      return this.editing_data != null
    }
  },
}