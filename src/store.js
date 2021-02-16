import Vue from "vue";
import Vuex from "vuex";
// import defaultData from './data'
import { uuid, saveState } from './utils'

Vue.use(Vuex)



const board = JSON.parse(localStorage.getItem('board')) || defaultData
export default new Vuex.Store({
	plugins: [saveState],
	state: {
		board
	},
	mutations: {},
	getters: {}
})