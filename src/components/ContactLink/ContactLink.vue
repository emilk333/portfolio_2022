
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'ContactLink',
});
</script>

<template>
	<article class="port-contact-link">
		<div class="port-contact-link__upper-container">
			<p class="port-medium-medium">Mail</p>
			<div class="port-contact-link__svg-container">
				<svg id="mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.59 18.59">
					<path id="Path_5" data-name="Path 5" d="M0,0H18.59V18.59H0Z" fill="none"/>
					<line id="Line_13" data-name="Line 13" y1="8.52" x2="8.52" transform="translate(7.746 2.324)" fill="none" stroke="#212e45" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
					<path id="Path_6" data-name="Path 6" d="M16.87,3,11.835,16.942a.426.426,0,0,1-.775,0L8.35,11.52,2.928,8.809a.426.426,0,0,1,0-.775L16.87,3" transform="translate(-0.604 -0.676)" fill="none" stroke="#212e45" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
				</svg>
			</div>
		</div>
		<p class="port-contact-link__value port-small-book">emilkristoffersen93@gmail.com</p>
	</article>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

	.port-contact-link {
		display: flex;
		flex-direction: column;

		&__upper-container {
			display: flex;

			p {
				margin: 0;
			}
		}

		&__svg-container {
			height: 1.8rem;
			width: 1.8rem;
    		padding-left: 0.7rem;
			margin-top: -0.3rem;
		}

		&__value {
			margin-top: 0.7rem;
		}
	}

</style>
