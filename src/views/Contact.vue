


<script lang="ts">
import { defineComponent, ref } from 'vue'
import ContactLink from '../components/ContactLink/ContactLink.vue'

export default defineComponent({
	name: 'ContactView',
	components : {
		ContactLink
	},
	setup() {

		const contactData = ref([
			{
				name : "Mail",
				value : "emilkristoffersen93@gmail.com",
				icon : "<svg id='mail' xmlns='http://www.w3.org/2000/svg' width='18.59' height='18.59' viewBox='0 0 18.59 18.59'><path id='Path_5' data-name='Path 5' d='M0,0H18.59V18.59H0Z' fill='none'/><line id='Line_13' data-name='Line 13' y1='8.52' x2='8.52' transform='translate(7.746 2.324)' fill='none' stroke='#212e45' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path id='Path_6' data-name='Path 6' d='M16.87,3,11.835,16.942a.426.426,0,0,1-.775,0L8.35,11.52,2.928,8.809a.426.426,0,0,1,0-.775L16.87,3' transform='translate(-0.604 -0.676)' fill='none' stroke='#212e45' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/></svg>",
				link : "mailto:emilkristoffersen93@gmail.com"
			},
			{
				name : "Linkedin",
				value : "Click to redirect",
				icon : "<svg id='linkedin' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path id='Path_1' data-name='Path 1' d='M0,0H24V24H0Z' fill='none'/><rect id='Rectangle_27' data-name='Rectangle 27' width='16' height='16' rx='2' transform='translate(4 4)' fill='none' stroke='#2c3e50' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><line id='Line_10' data-name='Line 10' y2='5' transform='translate(8 11)' fill='none' stroke='#2c3e50' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><line id='Line_11' data-name='Line 11' y2='0.01' transform='translate(8 8)' fill='none' stroke='#2c3e50' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><line id='Line_12' data-name='Line 12' y1='5' transform='translate(12 11)' fill='none' stroke='#2c3e50' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path id='Path_2' data-name='Path 2' d='M16,16V13a2,2,0,0,0-4,0' fill='none' stroke='#2c3e50' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/></svg>",
				link : "https://www.linkedin.com/in/emil-kristoffersen-95a890b8/"
			},
			{
				name : "Behance",
				value : "Click to redirect",
				icon : "<svg xmlns='http://www.w3.org/2000/svg' width='19.709' height='12.457' viewBox='0 0 19.709 12.457'><path id='Path_52' data-name='Path 52' d='M6.733,5.35a5.971,5.971,0,0,1,1.575.176,3.408,3.408,0,0,1,1.225.484,2.026,2.026,0,0,1,.787.924,3.511,3.511,0,0,1,.262,1.409,2.467,2.467,0,0,1-.437,1.54A3.167,3.167,0,0,1,8.921,10.9a2.93,2.93,0,0,1,1.662,1.144,3.48,3.48,0,0,1,.569,1.937,3.523,3.523,0,0,1-.351,1.585,2.921,2.921,0,0,1-.963,1.1,4.518,4.518,0,0,1-1.4.616,6.445,6.445,0,0,1-1.575.221H1V5.35Zm-.351,4.929a1.985,1.985,0,0,0,1.182-.351A1.288,1.288,0,0,0,8,8.827a1.684,1.684,0,0,0-.132-.7,1.244,1.244,0,0,0-.393-.44,2.18,2.18,0,0,0-.569-.22,3.478,3.478,0,0,0-.7-.044H3.669V10.28H6.383Zm.132,5.195a3.866,3.866,0,0,0,.744-.088,1.53,1.53,0,0,0,.612-.264,1.566,1.566,0,0,0,.438-.484,2.116,2.116,0,0,0,.175-.792,1.7,1.7,0,0,0-.525-1.365,2.3,2.3,0,0,0-1.4-.4H3.669v3.39H6.514Zm8.446-.044a2.129,2.129,0,0,0,1.575.529,2.383,2.383,0,0,0,1.269-.351,1.755,1.755,0,0,0,.657-.793H20.6A4.3,4.3,0,0,1,19.03,17.1a4.656,4.656,0,0,1-2.539.7,5.119,5.119,0,0,1-1.882-.352,3.5,3.5,0,0,1-1.4-.968,3.5,3.5,0,0,1-.875-1.453,5.2,5.2,0,0,1-.307-1.893,5.128,5.128,0,0,1,.307-1.849,4.751,4.751,0,0,1,.918-1.5,4.462,4.462,0,0,1,1.4-.968,4.885,4.885,0,0,1,1.838-.352,4.064,4.064,0,0,1,1.969.44A3.555,3.555,0,0,1,19.817,10.1a5.348,5.348,0,0,1,.787,1.673,9.316,9.316,0,0,1,.087,1.936H14.347a2.537,2.537,0,0,0,.613,1.717Zm2.757-4.622a1.889,1.889,0,0,0-1.357-.484,2.082,2.082,0,0,0-.963.22,2.315,2.315,0,0,0-.612.485,1.176,1.176,0,0,0-.306.616,3,3,0,0,0-.088.572h3.938A2.342,2.342,0,0,0,17.716,10.808ZM13.865,6.186h4.9V7.375h-4.9V6.186Z' transform='translate(-1 -5.35)' fill='#212e45'/></svg>",
				link : "https://www.behance.net/emilkristo8644"
			},
			{
				name : "Github",
				value : "Click to redirect",
				icon : "<svg id='Group_107' data-name='Group 107' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path id='Path_53' data-name='Path 53' d='M0,0H24V24H0Z' fill='none'/><path id='Path_54' data-name='Path 54' d='M12,2A10,10,0,0,0,8.838,21.488c.5.087.687-.213.687-.476,0-.237-.013-1.024-.013-1.862C7,19.613,6.35,18.538,6.15,17.975a3.643,3.643,0,0,0-1.025-1.413c-.35-.187-.85-.65-.013-.662A2,2,0,0,1,6.65,16.925a2.138,2.138,0,0,0,2.912.825,2.1,2.1,0,0,1,.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938A3.892,3.892,0,0,1,6.675,8.787a3.593,3.593,0,0,1,.1-2.65s.837-.262,2.75,1.026a9.428,9.428,0,0,1,5,0c1.912-1.3,2.75-1.024,2.75-1.024a3.593,3.593,0,0,1,.1,2.65A3.87,3.87,0,0,1,18.4,11.475c0,3.838-2.337,4.688-4.562,4.938a2.368,2.368,0,0,1,.675,1.85c0,1.337-.013,2.412-.013,2.75,0,.262.188.574.688.474A10.005,10.005,0,0,0,12,2Z' fill='#212e45'/></svg>",
				link : "https://github.com/emilk333"
			}
		])

		return {
			contactData
		}
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
						<g id="_26432" data-name="26432" transform="translate(-205.012 338.817)" opacity="0.05">
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
				<template v-for="contactLink in contactData" :key="contactLink">
					<li class="port-contact__link-container">
						<ContactLink :contactLink="contactLink"/>
					</li>
				</template>
			</ul>
		</div>
	</article>
</template>


<style scoped lang="scss">
	@import '../foundation/scss/breakpoints.scss';

    .port-contact {
		width: 100%;
		margin: 0 auto;
		max-width: 80rem;
		min-width: 60rem;
		position: relative;
		height: 100vh;

		@include mq('desktop') {
			max-width: 50rem;
			padding-top: 10rem;
		}

		@include mq('tablet') {
			min-width: unset;
			padding-left: 4rem;
		}

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

