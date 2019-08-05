<template>
  <div class="editbox">
    <template v-if="isEditing">
      <el-button icon="el-icon-check" @click="$emit('save')" type="success"></el-button>
      <el-button icon="el-icon-close" @click="$emit('cancelEdit')" type="danger"></el-button>
    </template>
    <template v-else>
      <el-button icon="el-icon-edit" @click="$emit('edit')" type="primary" circle></el-button>
      <el-dropdown @command="addNewRow">
        <el-button icon="el-icon-plus" type="success" circle></el-button>
        <el-dropdown-menu>
          <slot name="add-dropdown"></slot>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button icon="el-icon-arrow-up" @click="$emit('moveRowUpward')" type="warning" circle></el-button>
      <el-button icon="el-icon-arrow-down" @click="$emit('moveRowDownward')" type="warning" circle></el-button>
      <el-button icon="el-icon-delete" @click="$emit('deleteSelf')" type="danger" circle></el-button>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ZRowEditor',
  props:['isEditing'],
  methods:{
    addNewRow(command){
      this.$emit('addNewRow', command)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../scss/global.scss";
</style>