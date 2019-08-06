<template>
<div class="json-manager">

  <!-- json import button and dialog -->
  <el-button icon="el-icon-download" type="primary" @click="openImportDialog">Import CSV</el-button>
  <el-dialog
    title="Import by CSV"
    :visible.sync="visibleImportDialog"
    width="60%"
  >
    <span>
      <el-button @click="inputSampleJson" type="success" plain>Load Sample JSON</el-button>
      <el-input 
        :rows="13"
        type="textarea" 
        placeholder='(paste json here)'
        v-model="inputImportDialog" 
      ></el-input>
    </span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visibleImportDialog=false" type="danger">Cancel</el-button>
      <el-button @click="importJson" type="primary">Import</el-button>
    </span>
  </el-dialog>

  <!-- json export button and dialog -->
  <el-button icon="el-icon-upload2" type="danger" @click="openExportDialog">Export CSV</el-button>
  <el-dialog
    title="Export by CSV"
    :visible.sync="visibleExportDialog"
    width="60%"
  >
    <span>
      <el-input 
        :rows="13"
        type="textarea" 
        :value="valueByJson" 
        readonly
      ></el-input>
    </span>
    <span slot="footer" class="dialog-footer">
        <el-button @click="visibleExportDialog=false">Close</el-button>
    </span>
  </el-dialog>
</div>
</template>

<script>
import sampleJson from '@/sampleJson'
export default {
  name: 'ZJsonManager',
  props:['value'],
  data(){
    return {
        visibleImportDialog: false,
        inputImportDialog:'',
        visibleExportDialog: false,
        sampleJson: sampleJson
    }
  },
  methods:{
    openImportDialog(){
      this.visibleImportDialog = true
      this.inputImportDialog = ''
    },
    openExportDialog(){
      this.visibleExportDialog = true
      this.$store.commit('saveVForm', this.value)
    },
    importJson(){
      try{
        const convertedValue = JSON.parse(this.inputImportDialog) // TODO: more strict format check and error handling
        this.$store.commit('saveVForm', convertedValue)
        this.$emit('input', this.$store.state.v_form)
        this.$message('loaded json successfully')
        this.visibleImportDialog = false
      } catch(e) {
        this.$message.error('Error: failed to read JSON');
      }
    },
    inputSampleJson(){
        this.inputImportDialog = JSON.stringify(this.sampleJson, null, 4)
    }
  },
  computed:{
    valueByJson(){
    return JSON.stringify(this.value, null, 4)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../scss/global.scss";
</style>
