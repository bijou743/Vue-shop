<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
	<div class="v-main-wrapper">
		<router-view></router-view>
	</div>
</template>

<style>
.v-main-wrapper {
	max-width: 900px;
	margin: 0 auto;
	position: relative;
}
</style>
