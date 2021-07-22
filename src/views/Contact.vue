


<script lang="ts">
import { defineComponent } from 'vue'
import ContactLink from '../components/ContactLink/ContactLink.vue'

export default defineComponent({
	name: 'ContactView',
	components : {
		ContactLink
	}
})
</script>

<template>
	<article class="port-contact">
		<div class="port-contact__wrapper">
			<div class="port-contact__container">
				<h1 class="port-large-medium">
					Contact
				</h1>
				<div class="port-svg-background-container port-svg-background-container--contact-variant">
					<svg xmlns="http://www.w3.org/2000/svg" width="93.861" height="131.397" viewBox="0 0 93.861 131.397">
						<g id="_26432" data-name="26432" transform="translate(-205.012 338.817)" opacity="0.029">
							<path id="Path_19" data-name="Path 19" d="M241.7-328.483a10.477,10.477,0,0,0-6.52,7.283c-1.263,6.05,4.787,12.1,10.837,10.837,4.552-.94,8.076-5.58,7.636-9.956a10.348,10.348,0,0,0-5.58-7.694A9.739,9.739,0,0,0,241.7-328.483Z" transform="translate(-30 -10)" fill="#212e45"/>
							<path id="Path_20" data-name="Path 20" d="M279.291-328.483a10.477,10.477,0,0,0-6.52,7.283c-1.263,6.05,4.787,12.1,10.837,10.837,4.552-.94,8.076-5.58,7.636-9.956a10.348,10.348,0,0,0-5.58-7.694A9.739,9.739,0,0,0,279.291-328.483Z" transform="translate(-30 -10)" fill="#212e45"/>
							<path id="Path_29" data-name="Path 29" d="M241.7-290.892a10.477,10.477,0,0,0-6.52,7.283c-1.263,6.05,4.787,12.1,10.837,10.837,4.552-.94,8.076-5.58,7.636-9.956a10.348,10.348,0,0,0-5.58-7.694A9.739,9.739,0,0,0,241.7-290.892Z" transform="translate(-30 -10)" fill="#212e45"/>
							<path id="Path_30" data-name="Path 30" d="M279.291-290.892a10.477,10.477,0,0,0-6.52,7.283c-1.263,6.05,4.787,12.1,10.837,10.837,4.552-.94,8.076-5.58,7.636-9.956a10.348,10.348,0,0,0-5.58-7.694A9.739,9.739,0,0,0,279.291-290.892Z" transform="translate(-30 -10)" fill="#212e45"/>
							<path id="Path_39" data-name="Path 39" d="M241.7-253.3a10.477,10.477,0,0,0-6.52,7.283c-1.263,6.05,4.787,12.1,10.837,10.837,4.552-.94,8.076-5.58,7.636-9.956a10.348,10.348,0,0,0-5.58-7.694A9.739,9.739,0,0,0,241.7-253.3Z" transform="translate(-30 -10)" fill="#212e45"/>
							<path id="Path_40" data-name="Path 40" d="M279.291-253.3a10.477,10.477,0,0,0-6.52,7.283c-1.263,6.05,4.787,12.1,10.837,10.837,4.552-.94,8.076-5.58,7.636-9.956a10.348,10.348,0,0,0-5.58-7.694A9.739,9.739,0,0,0,279.291-253.3Z" transform="translate(-30 -10)" fill="#212e45"/>
							<path id="Path_41" data-name="Path 41" d="M316.883-253.3a10.477,10.477,0,0,0-6.52,7.283c-1.263,6.05,4.787,12.1,10.837,10.837,4.552-.94,8.076-5.58,7.636-9.956a10.348,10.348,0,0,0-5.58-7.694A9.739,9.739,0,0,0,316.883-253.3Z" transform="translate(-30 -10)" fill="#212e45"/>
							<path id="Path_49" data-name="Path 49" d="M241.7-215.709a10.477,10.477,0,0,0-6.52,7.283c-1.263,6.05,4.787,12.1,10.837,10.837,4.552-.94,8.076-5.58,7.636-9.956a10.348,10.348,0,0,0-5.58-7.694A9.739,9.739,0,0,0,241.7-215.709Z" transform="translate(-30 -10)" fill="#212e45"/>
							<path id="Path_50" data-name="Path 50" d="M279.291-215.709a10.477,10.477,0,0,0-6.52,7.283c-1.263,6.05,4.787,12.1,10.837,10.837,4.552-.94,8.076-5.58,7.636-9.956a10.348,10.348,0,0,0-5.58-7.694A9.739,9.739,0,0,0,279.291-215.709Z" transform="translate(-30 -10)" fill="#212e45"/>
							<path id="Path_51" data-name="Path 51" d="M316.883-215.709a10.477,10.477,0,0,0-6.52,7.283c-1.263,6.05,4.787,12.1,10.837,10.837,4.552-.94,8.076-5.58,7.636-9.956a10.348,10.348,0,0,0-5.58-7.694A9.739,9.739,0,0,0,316.883-215.709Z" transform="translate(-30 -10)" fill="#212e45"/>
						</g>
					</svg>
				</div>
			</div>
			<ul>
				<li class="port-contact__link-container">
					<ContactLink />
				</li>
				<li class="port-contact__link-container">
					<ContactLink />
				</li>
				<li class="port-contact__link-container">
					<ContactLink />
				</li>
				<li class="port-contact__link-container">
					<ContactLink />
				</li>
			</ul>
		</div>
	</article>
</template>


<style scoped lang="scss">

    .port-contact {
		width: 100%;
		margin: 0 auto;
		max-width: 80rem;
		min-width: 60rem;
		position: relative;
		height: 100vh;

		&__wrapper {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}

		&__container {
			position: relative;
			margin-top: 15rem; //correction for header 
			margin-bottom: 4.5rem;
		}

		&__link-container {
			margin-bottom: 2rem;

			&:nth-child(odd) {
				margin-top: 7rem;
			}
		}
	}

</style>

