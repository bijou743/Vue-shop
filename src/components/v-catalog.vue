<script setup>
// import reactive from 'vue';
import vCatalogItem from './v-catalog-item.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const addToCart = (product) => {
	store.dispatch('ADD_TO_CART', product);
};

store.dispatch('GET_PRODUCTS_FROM_API').then((response) => {
	if (!response.error) {
		// console.log('Data arrived');
	} else {
		// console.log('Error');
	}
});

// $store.state.products
// https://stackoverflow.com/questions/64010072/how-to-use-vuex-mapgetters-with-vue-3-sfc-script-setup-syntax
const products = computed(() => store.getters.PRODUCTS);
const cart = computed(() => store.getters.CART);
</script>

<template>
	<div class="v-catalog">
		<router-link v-if="cart.length > 0" :to="{ name: 'cart' }">
			<div class="v-catalog__link-to-cart btn">Cart: {{ cart.length }}</div>
		</router-link>

		<h1>Catalog</h1>
		<div class="v-catalog__list">
			<vCatalogItem
				v-for="product in products"
				:key="product.article"
				:productData="product"
				@addToCart="addToCart"
			/>
		</div>
	</div>
</template>

<style lang="scss">
.v-catalog {
	padding-top: 40px;
	text-align: center;

	&__link-to-cart {
		position: absolute;
		top: 10px;
		right: 0;
		padding: 13px 25px;
	}

	&__list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}
}
</style>
