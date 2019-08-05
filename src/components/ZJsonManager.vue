<template>
<div class="json-manager">
  <el-button icon="el-icon-download" type="primary" @click="openImportDialog">Import CSV</el-button>
  <el-dialog
    title="Import by CSV"
    :visible.sync="enableImportDialog"
    width="60%"
  >
    <span>
        <el-button @click="inputSampleJson" type="success" plain>Load Sample JSON</el-button>
        <el-input 
          :rows="13"
          type="textarea" 
          v-model="inputImportDialog" 
        ></el-input>
    </span>
    <span slot="footer" class="dialog-footer">
        <el-button @click="enableImportDialog=false" type="danger">Cancel</el-button>
        <el-button @click="importJson" type="primary">Import</el-button>
    </span>
  </el-dialog>
  <el-button icon="el-icon-upload2" type="danger" @click="openExportDialog">Export CSV</el-button>
  <el-dialog
    title="Export by CSV"
    :visible.sync="enableExportDialog"
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
        <el-button @click="enableExportDialog=false">Close</el-button>
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
        enableImportDialog: false,
        inputImportDialog:'',
        enableExportDialog: false,
        sampleJson: sampleJson
    }
  },
  methods:{
    openImportDialog(){
      this.enableImportDialog = true
    },
    openExportDialog(){
    this.enableExportDialog = true
    },
    importJson(){
      try{
        const convertedValue = JSON.parse(this.inputImportDialog)
        this.$emit('input', convertedValue)
        this.$message('loaded json successfully')
        this.enableImportDialog = false
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
