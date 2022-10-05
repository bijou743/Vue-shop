<script setup>
import vCartItem from './v-cart-item.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const cartData = computed(() => store.getters.CART);

const deleteFromCart = (index) => {
	store.dispatch('DELETE_FROM_CART', index);
};
</script>

<template>
	<div class="v-cart">
		<router-link :to="{ name: 'catalog' }">
			<div class="v-cart__link-to-catalog btn">Catalog</div>
		</router-link>

		<h1>Cart</h1>
		<div class="v-cart__items" v-if="cartData.length > 0">
			<vCartItem
				v-for="(item, index) in cartData"
				:key="item.article"
				:cartItemData="item"
				@deleteFromCart="deleteFromCart(index)"
			></vCartItem>
		</div>

		<p v-else>Cart is empty.</p>
	</div>
</template>

<style lang="scss">
.v-cart {
	padding-top: 40px;
	text-align: center;
	margin-bottom: 100px;

	&__link-to-catalog {
		position: absolute;
		top: 10px;
		right: 0;
		padding: 13px 25px;
	}

	&__total {
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		padding: 20px;
		display: flex;
		justify-content: center;
		background-color: #26ae68;
		color: white;
		font-size: 20px;

		.total__name {
			margin-right: 16px;
		}
	}
}
</style>
