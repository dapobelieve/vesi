import Vue from "vue";
import Vuex from "vuex";
import { uuid, saveState } from './utils'

Vue.use(Vuex)

export default new Vuex.Store({
	plugins: [saveState],
	state: {
	},
	mutations: {},
	getters: {}
})