<template>
<el-row class="zpage">
  <el-col :span=6>
    <el-input v-if="is_editing" v-model="editing_data.title"></el-input>
    <h4 v-else>{{value.title}}</h4>
  </el-col>
  <el-col :span=12>
    <el-select 
      v-if="is_editing" v-model="editing_data.response_type"
    >
      <el-option value="number" label="Number" :key="0"> </el-option>
      <el-option value="text" label="Text" :key="1"></el-option>
    </el-select>
    <el-tag v-else>{{value.response_type}}</el-tag>
  </el-col>
  <el-col :span=2>
    <template v-if="is_editing">
      <el-button icon="el-icon-check" circle @click="save"></el-button>
      <el-button icon="el-icon-close" circle @click="cancelEdit"></el-button>
    </template>
    <el-button v-else icon="el-icon-edit" circle @click="edit"></el-button>
  </el-col>
</el-row>
</template>

<script>
import EditableMixin from '@/mixins/EditableMixin'

export default {
  name: 'ZQuestion',
  mixins:[EditableMixin],
  props:[
    'value'
  ], 
  data(){
    return {
      editable_keys:[
        'title',
        'response_type'
      ]
    }
  },
  computed:{},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
