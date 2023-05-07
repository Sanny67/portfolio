import { createStore } from "vuex";

const store = createStore({
    state: {
        'user': 'new user'
    },
    getters: {},
    mutations: {
        SET_USER(state, payload){
            state.user = payload
        }
    },
    actions: {
        set_user({commit}, payload){
            commit('SET_USER', payload)
        }
    }
});

export default store