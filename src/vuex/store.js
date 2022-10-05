import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
	state: {
		products: [],
		cart: [],
		cartTotal: 0,
	},
	// синхронны
	mutations: {
		SET_PRODUCTS_TO_STATE: (state, products) => {
			state.products = products;
		},
		SET_CART: (state, product) => {
			let isProductExist = false;
			state.cart.map(function (item) {
				if (item.article === product.article) {
					isProductExist = true;
					item.quantity++;
				}
			});
			isProductExist || state.cart.push({ ...product, quantity: 1 });
		},
		REMOVE_FROM_CART: (state, index) => {
			state.cart.splice(index, 1);
		},
	},
	// асинхронны
	actions: {
		GET_PRODUCTS_FROM_API({ commit }) {
			return axios('http://localhost:3000/products', {
				method: 'GET',
			})
				.then((products) => {
					commit('SET_PRODUCTS_TO_STATE', products.data);
					return products.data;
				})
				.catch((error) => {
					console.log(error);
					return error;
				});
		},
		ADD_TO_CART({ commit }, product) {
			commit('SET_CART', product);
		},
		DELETE_FROM_CART({ commit }, index) {
			commit('REMOVE_FROM_CART', index);
		},
	},
	getters: {
		PRODUCTS(state) {
			return state.products;
		},
		CART(state) {
			return state.cart;
		},
	},
});

export default store;
