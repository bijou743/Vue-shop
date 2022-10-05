<script setup>
import { onMounted } from '@vue/runtime-core';
import { getImageUrl } from '../global/index.js';
import { defineEmits } from 'vue';

const emits = defineEmits(['deleteFromCart']);

const { cartItemData } = defineProps({
	cartItemData: {
		type: Object,
		default() {
			return {};
		},
	},
});

onMounted(() => {
	// $set(cartItemData, 'quantity', 1);
	// cartItemData.quantity = 1;
});

const deleteFromCart = () => {
	emits('deleteFromCart');
};
</script>

<template>
	<div class="v-cart-item">
		<img
			class="v-cart-item__image"
			:src="getImageUrl('../assets/images/' + cartItemData.image)"
			alt=""
		/>
		<div class="v-cart-item__info">
			<p>
				<b>{{ cartItemData.name }}</b>
			</p>
			<p>Price: ${{ cartItemData.price.toFixed(0) }}</p>
			<p>{{ cartItemData.article }}</p>
		</div>
		<div class="v-cart-item__quantity">
			<p>Qty:</p>
			{{ cartItemData.quantity }}
		</div>
		<button class="btn" @click="deleteFromCart">Delete</button>
	</div>
</template>

<style lang="scss">
.v-cart-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: nowrap;
	margin-bottom: 20px;
	box-shadow: 0 0 8px 0 #e0e0e0;
	border-radius: 10px;
	padding: 15px;

	&__image {
		max-width: 50px;
	}
}
</style>
