export default {
    data () {
      return {
        editing_data:null,
        editable_keys:['title']
      }
    },
    methods:{
        generateUUID(){
            const uuidv4 = require('uuid/v4')
            return uuidv4();
        }
    }
  }