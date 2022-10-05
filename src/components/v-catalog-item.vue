<script setup>
import { getImageUrl } from '../global/index.js';
// то, что передаем родителю
const emits = defineEmits(['addToCart']);

// метод вызывается по клику на кнопку
const addToCart = () => {
	emits('addToCart', productData);
};

// то, что получаем от родителя
const { productData } = defineProps({
	productData: {
		type: Object,
		default() {
			return {};
		},
	},
});
</script>

<template>
	<div class="v-catalog-item">
		<img
			class="v-catalog-item__image"
			:src="getImageUrl('../assets/images/' + productData.image)"
			alt=""
		/>
		<p class="v-catalog-item__name">
			{{ productData.name }}
		</p>
		<p class="v-catalog-item__price">
			Price: ${{ productData.price.toFixed(0) }}
		</p>
		<button class="v-catalog-item_add_to_cart_btn btn" @click="addToCart">
			Add to cart
		</button>
	</div>
</template>

<style lang="scss">
.v-catalog-item {
	flex-basis: 25%;
	box-shadow: 0 0 8px 0 #e0e0e0;
	padding: 16px;
	margin-bottom: 16px;
	text-align: center;
	border-radius: 10px;

	&__name {
		font-weight: bold;
	}

	&__image {
		width: 100px;
	}
}
</style>
