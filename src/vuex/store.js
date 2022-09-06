import Vuex from 'vuex'
import axios from "axios";

export const store = new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products
        }
    }, // sync
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            console.log("GET_PRODUCTS_FROM_API")
            return axios('http://localhost:3000/products', {
                method: "GET"
            }).then((products) => {
                console.log(products)
                commit('SET_PRODUCTS_TO_STATE', products.data)
                return products;
            }).catch((error) => {
                console.log(error)
                return error;
            })
        }
    }, // async
    getters: {
        PRODUCTS(state){
            return state.products;
        }
    },
});

export default store;