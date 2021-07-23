
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "ContactLink",
	props: {
		contactLink : Object
	},
	setup(props) {
		return {
			props
		}
	} 
});
</script>

<template>
	<a :href="props.contactLink.link" target="_blank" class="port-contact-link">
		<div class="port-contact-link__upper-container">
			<p class="port-medium-medium">{{props.contactLink.name}}</p>
			<div class="port-contact-link__svg-container" v-html="props.contactLink.icon"></div>
		</div>
		<p class="port-contact-link__value port-small-book">
			{{props.contactLink.value}}
		</p>
	</a>
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
			width: 2.3rem;
			padding-left: 0.8rem;
			margin-top: -0.3rem;
			display: flex;
			align-items: center;
		}

		&__value {
			margin-top: 0.7rem;
		}
	}
</style>
