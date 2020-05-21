import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        count: 1
    },
    getters: {
        getCount: function(state) {
            return state.count
        }
    },
    mutations: {
        add(state) {
            state.count = state.count + 1
        }
    },
    actions: {
        addFn(context) {
            context.commit('add')
        }
    }
})

export default store