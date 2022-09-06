import Vuex from 'vuex'
import axios from "axios";

export const store = new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_CART: (state, product) => {
            if (state.cart.length){
                // article - uniq key for iterate
                let isProductExists = false;
                state.cart.map((item) => {
                    if (item.article === product.article){
                        isProductExists = true;
                        item.quantity += 1;
                    }
                })
                if (!isProductExists){
                    state.cart.push(product);
                }
            } else {
                state.cart.push(product);
            }

        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
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
        },
        ADD_TO_CART({commit}, product){
            commit('SET_CART', product);
        },
        DELETE_FROM_CART({commit}, index){
            commit('REMOVE_FROM_CART', index);
        }
    }, // async
    getters: {
        PRODUCTS(state){
            return state.products;
        },
        CART(state){
            return state.cart
        }
    },
});

export default store;