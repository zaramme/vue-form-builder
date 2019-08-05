export default {
  data () {
    return {
      editing_data:null, // keep data in edit temprarily
      editable_keys:['title']
    }
  },
  methods:{
    edit(){
      this.editing_data = {}
      for(let key of this.editable_keys){
        this.$set(this.editing_data, key,this.value[key])
      }
    },
    save(){
      for(let key of this.editable_keys){
          console.log(key)
        this.value[key] = this.editing_data[key]
      }
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