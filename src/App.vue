

<script lang="ts">
    import { defineComponent } from 'vue';
	import TheHeader from './components/TheHeader/TheHeader.vue'

    export default defineComponent({
        name: 'App',
		components: {
			TheHeader
		}
	});
</script>

<template>
	<TheHeader />
	<router-view v-slot="{ Component }">
		<transition name="fade">
			<component :is="Component" />
		</transition>
	</router-view>
</template>

<style lang="scss">
	@import './main.scss';

	// PAGE TRANSITION CLASSES 
	.fade-enter-from, .fade-leave-to {
		opacity: 0;
	}

	.fade-enter-active, .fade-leave-active {
		transition: opacity 0.25s ease-in-out;
	}

</style>





