import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store =  new Vuex.Store({
	state: {
  		accountName: "You",
	  	timeOfDay() {
			return new Date().getHours();
	  	},
	  	showingAccountModal: false,
	    showingBar1: true,
	    showingBar2: true
  	},
  	getters: {
  		accountName: state => {
  			return state.accountName;
  		},
  		timeOfDay: state => {
  			return state.timeOfDay;
  		},
  		showingAccountModal: state => {
  			return state.showingAccountModal;
  		},
  		showingBar1: state => {
  			return state.showingBar1;
  		},
  		showingBar2: state => {
  			return state.showingBar2;
  		}
	},
	mutations: {
		toggleAccountModal: state => {
			if(state.showingAccountModal) state.showingAccountModal = false;
			else state.showingAccountModal = true;
		},
		toggleBar1: state => {
			if(state.showingBar1) state.showingBar1 = false;
			else state.showingBar1 = true;
		},
		toggleBar2: state => {
			if(state.showingBar2) state.showingBar2 = false;
			else state.showingBar2 = true;
		}
	}
})