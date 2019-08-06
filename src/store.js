import Vue from 'vue'
import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    /** 
      this is a store for whole form data, 
      but basically it doesn't managed by store but by v-model 2-way data-binding, for keeping logic simple.
      form data will only sync on store when user import/export json.
      through store, form data can be accessed by outside of this page.
    */
    v_form:{}
  },
  mutations:{
    saveVForm(state, vForm){
      state.v_form = vForm
    },
  }
})