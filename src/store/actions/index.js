import axios from 'axios';

export default {
    ADD_TO_CART({commit}, product){
        commit('SET_CART', product)
    },
    DELETE_FROM_CART({commit}, index){
        commit('REMOVE_FROM_CART', index)
    },
    ADD_CART_ITEM({commit},index) {
        commit('ADD', index)
    },
    SUB_CART_ITEM({commit},index){
        commit('SUBTRACTION', index)
    },

}
