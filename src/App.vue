

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
	<router-view/>
</template>

<style lang="scss">
	@import './main.scss';
</style>





