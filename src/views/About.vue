


<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue'
import { useStore } from 'vuex'
import ToolsAndSkills from '../components/ToolsAndSkills/ToolsAndSkills.vue'

export default defineComponent({
	name: 'AboutView',
	components : {
		ToolsAndSkills
	},
	setup() {
		const store = useStore()

		const toolsData = ref([
			{
				name : "Html",
				tooltipText : "Intermediate semantic markup and accessibility understanding. Handlebars and Pug experience included.",
				tooltipStrength : "Intermediate - advanced",
				tooltipStrengthLevel : 1,
				tooltipShown : false,
				type : "tech"
			},
			{
				name : "Sass",
				tooltipText : "CSS, SCSS and SASS experience, through primarily a BEM methodology.",
				tooltipStrength : "Intermediate - Advanced",
				tooltipStrengthLevel : 1,
				tooltipShown : false,
				type : "tech"
			},
			{
				name : "Javascript",
				tooltipText : "Queue imposter syndrome: Intermediate understanding of core concepts (Syntax, closures, callbacks, DOM manipulation, ES6+, data structures etc).",
				tooltipStrength : "Intemediate",
				tooltipStrengthLevel : 1,
				tooltipShown : false,
				type : "tech"
			},
			{
				name : "React",
				tooltipText : "Basic to intermediate understanding on various React core concepts and syntax, such as JSX, Hooks, design patterns, context api, Virtual DOM etc.",
				tooltipStrength : "Intermediate",
				tooltipStrengthLevel : 1,
				tooltipShown : false,
				type : "tech"
			},
			{
				name : "Typescript",
				tooltipText : "Basic understanding of core typescript concepts, build-in types and usage",
				tooltipStrength : "Basic - Intermediate",
				tooltipStrengthLevel : 2,
				tooltipShown : false,
				type : "tech"
			},
			{
				name : "Vue",
				tooltipText : "Intermediate understanding of Vue 2/3.0 core concepts and syntax. This includes Vuex statemanagement",
				tooltipStrength : "Intermediate",
				tooltipStrengthLevel : 1,
				tooltipShown : false,
				type : "tech"
			},
			{
				name : "AdobeXD",
				tooltipText : "Although little experience with Figma, this is my primary mock tool. Primarily used for design and prototypes.",
				tooltipStrength : "Intermediate - Advanced",
				tooltipStrengthLevel : 1,
				tooltipShown : false,
				type : "design"
			},
			{
				name : "Photoshop",
				tooltipText : "Basic understanding of the most important features of Photoshop.",
				tooltipStrength : "Basic",
				tooltipStrengthLevel : 3,
				tooltipShown : false,
				type : "design"
			},
			{
				name : "Zeplin",
				tooltipText : "Primary tool for design delivery.",
				tooltipStrength : "Basic",
				tooltipStrengthLevel : 2,
				tooltipShown : false,
				type : "design"
			}
		])

		onMounted(() => {
			store.dispatch('setToolsDataInStore', toolsData)
		}) 

		const techToolsDataFromStore = computed(() => {
			return store.state.tools_data.filter((item:Record<string, string>) => item.type === 'tech')
		})

		const designToolsDataFromStore = computed(() => {
			return store.state.tools_data.filter((item:Record<string, string>) => item.type === 'design')
		})

		const activateBackdrop = computed(() => {
			return store.state.tooltip_is_active ? 'port-tooltip__backdrop--active' : ''
		})

		const closeAllTooltips = () => {
			store.dispatch('deactiveTooltip')
		}

		return {
			closeAllTooltips,
			activateBackdrop,
			designToolsDataFromStore,
			techToolsDataFromStore
		}
	}
})
</script>

<template>
	<div class="port-about">
		<div class="port-tooltip__backdrop" :class="activateBackdrop" @click="closeAllTooltips"></div>
		<article class="port-about__container">
			<section class="port-about__upper-wrapper">
				<div class="port-svg-background-container port-svg-background-container--about-left-variant">
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

				<p class="port-medium-bold">Greetings!</p>
				<h1 class="port-about__title port-large-bold">My name is <span class="port-about__title__emphasise">Emil</span> and I’m an interface designer and developer.</h1>

				<div class="port-svg-background-container port-svg-background-container--about-right-variant">
					<svg xmlns="http://www.w3.org/2000/svg" width="93.861" height="131.397" viewBox="0 0 93.861 131.397">
						<g id="_26432" data-name="26432" transform="translate(298.873 -207.421) rotate(180)" opacity="0.05">
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

			</section>
			<section class="port-about__lower-wrapper">
				<div class="port-about__lower-container">
					<div>
						<h3 class="port-small-bold">Strongsuit</h3>
						<p class="port-medium-book">Good technical understanding of web technologies combined with design knowledge, reaching from research to design processes to high fidelity mockups and more. Currently I’m working as a frontend developer for a consultancy in Copenhagen<br><br> 
						The code for this portfolio can be found at <a target="_blank" href="https://github.com/emilk333/portfolio_2022">https://github.com/emilk333/portfolio_2022</a></p>
					</div>
				</div>
				<div class="port-about__lower-container">
					<div>
						<h3 class="port-small-bold">Languages</h3>
						<p class="port-medium-book">Fluent in English and Danish</p>
					</div>
					<div class="port-about__text-container-top-margin">
						<h3 class="port-small-bold">Design tools</h3>
						<template v-for="designTool in designToolsDataFromStore" :key="designTool">
							<ToolsAndSkills :data="designTool"/>
						</template>
					</div>
				</div>
				<div class="port-about__lower-container">
					<div>
						<h3 class="port-small-bold">Familiar technology</h3>
						<template v-for="technology in techToolsDataFromStore" :key="technology">
							<ToolsAndSkills :data="technology"/>
						</template>
					</div>
				</div>
			</section>

		</article>
	</div>
</template>


<style scoped lang="scss">
	@import '../foundation/scss/variables.scss';
	@import '../foundation/scss/breakpoints.scss';

	.port-tooltip__backdrop {
		display: none;

		&--active {
			display: block;
			position: absolute;
			top: 0;
			left: 0; 
			height: 120vh;
			width: 100vw; 
			background-color: transparent;	

			@include mq('tablet-small') {
				height: 180vh;
			}
		}
	}

    .port-about {

		&__title {
			max-width: 60rem;
			margin-top: -1rem;

			&__emphasise {
				color : $blood-orange;
			}
		}

		&__container {
			max-width: 1080px;
			margin: 0 auto;
			padding-top: 30rem;
			margin-bottom: 15rem;

			@include mq('tablet') {
				padding-top: 22rem;
			}
		}

		&__upper-wrapper {
			margin-bottom: 8rem;
			position: relative;

			@include mq('tablet') {
				margin-bottom: 4rem;
			}
		}

		&__lower-wrapper {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: 1fr;
			grid-column-gap: 100px;
			grid-row-gap: px;

			@include mq('tablet') {
				grid-template-columns: repeat(1, 1fr);

				&+div {
					margin-bottom: 2rem;
				}
			}
		}

		&__lower-container {
			@include mq('tablet') {
				margin-bottom: 2rem;
			}
		}

        &__text-container-top-margin {
            margin-top: 6rem;

			@include mq('tablet') {
				margin-top: 4.5rem;
			}
        }
	}

</style>

