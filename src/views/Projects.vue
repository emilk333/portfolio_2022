


<script lang="ts">
	import { defineComponent, onBeforeMount, computed, watch } from 'vue'
	import { useStore } from 'vuex'
	import FilterComponent from '../components/FilterComponent/FilterComponent.vue'
	import ProjectTemplate from '../components/ProjectTemplate/ProjectTemplate.vue'

	export default defineComponent({
		name: 'ProjectsView',
		components: {
			FilterComponent,
			ProjectTemplate
		},
		setup() {

			const store = useStore()
			const projectData = [
				{
					name : "Hotsreplay",
					id: 1,
					type: "UI Design",
					typeId : 1,
					year: "2021",
					association: "Hobby project",
					image: "https://pbs.twimg.com/media/C3vklvlWYAEInlR.jpg",
					link : "/somewhere",
					linkIcon : "<svg xmlns='http://www.w3.org/2000/svg' width='59.598' height='37.669' viewBox='0 0 59.598 37.669'><path id='Path_52' data-name='Path 52' d='M18.336,5.35a18.055,18.055,0,0,1,4.762.533,10.305,10.305,0,0,1,3.7,1.464,6.125,6.125,0,0,1,2.381,2.8,10.618,10.618,0,0,1,.794,4.259,7.46,7.46,0,0,1-1.321,4.657,9.577,9.577,0,0,1-3.7,3.062,8.861,8.861,0,0,1,5.026,3.46A10.524,10.524,0,0,1,31.7,31.438a10.655,10.655,0,0,1-1.06,4.792,8.833,8.833,0,0,1-2.911,3.328A13.663,13.663,0,0,1,23.5,41.421a19.489,19.489,0,0,1-4.762.667H1V5.35Zm-1.06,14.906a6,6,0,0,0,3.573-1.063,3.9,3.9,0,0,0,1.324-3.328,5.093,5.093,0,0,0-.4-2.128A3.762,3.762,0,0,0,20.585,12.4a6.592,6.592,0,0,0-1.722-.665,10.516,10.516,0,0,0-2.118-.135H9.072v8.653h8.206Zm.4,15.708a11.69,11.69,0,0,0,2.249-.266,4.628,4.628,0,0,0,1.851-.8A4.736,4.736,0,0,0,23.1,33.435a6.4,6.4,0,0,0,.53-2.395,5.147,5.147,0,0,0-1.587-4.127,6.954,6.954,0,0,0-4.235-1.2H9.072V35.967h8.6Zm25.539-.135a6.439,6.439,0,0,0,4.762,1.6,7.205,7.205,0,0,0,3.837-1.063,5.306,5.306,0,0,0,1.986-2.4h6.484a13,13,0,0,1-4.762,6.92,14.079,14.079,0,0,1-7.676,2.131,15.479,15.479,0,0,1-5.691-1.065,10.574,10.574,0,0,1-4.235-2.927,10.574,10.574,0,0,1-2.645-4.394,15.728,15.728,0,0,1-.928-5.723,15.505,15.505,0,0,1,.928-5.591,14.368,14.368,0,0,1,2.777-4.526,13.492,13.492,0,0,1,4.235-2.927A14.771,14.771,0,0,1,47.844,14.8,12.291,12.291,0,0,1,53.8,16.131a10.749,10.749,0,0,1,4.1,3.595,16.17,16.17,0,0,1,2.381,5.058,28.172,28.172,0,0,1,.264,5.855H41.359a7.671,7.671,0,0,0,1.854,5.193Zm8.336-13.975a5.713,5.713,0,0,0-4.1-1.464,6.3,6.3,0,0,0-2.911.665,7,7,0,0,0-1.851,1.466,3.557,3.557,0,0,0-.926,1.862,9.062,9.062,0,0,0-.266,1.73H53.4A7.082,7.082,0,0,0,51.549,21.854ZM39.9,7.879h14.82v3.595H39.906V7.879Z' transform='translate(-1 -5.35)' fill='#fff'/></svg>",
					about : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ipsum erat, euismod at mi congue, imperdiet commodo augue",
					goal : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ipsum erat, euismod at mi congue, imperdiet commodo augue",
					process: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ipsum erat, euismod at mi congue, imperdiet commodo augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ipsum erat, euismod at mi congue, imperdiet commodo augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ipsum erat, euismod at mi congue, imperdiet commodo augue",
					selected: false
				},
				{
					name : "Moonshine",
					id: 2,
					type: "UX/Service design",
					typeId : 2,
					year: "2020",
					association: "Hobby project",
					image: "https://pbs.twimg.com/media/C3vklvlWYAEInlR.jpg",
					link : "/somewhere",
					linkIcon : "<svg xmlns='http://www.w3.org/2000/svg' width='59.598' height='37.669' viewBox='0 0 59.598 37.669'><path id='Path_52' data-name='Path 52' d='M18.336,5.35a18.055,18.055,0,0,1,4.762.533,10.305,10.305,0,0,1,3.7,1.464,6.125,6.125,0,0,1,2.381,2.8,10.618,10.618,0,0,1,.794,4.259,7.46,7.46,0,0,1-1.321,4.657,9.577,9.577,0,0,1-3.7,3.062,8.861,8.861,0,0,1,5.026,3.46A10.524,10.524,0,0,1,31.7,31.438a10.655,10.655,0,0,1-1.06,4.792,8.833,8.833,0,0,1-2.911,3.328A13.663,13.663,0,0,1,23.5,41.421a19.489,19.489,0,0,1-4.762.667H1V5.35Zm-1.06,14.906a6,6,0,0,0,3.573-1.063,3.9,3.9,0,0,0,1.324-3.328,5.093,5.093,0,0,0-.4-2.128A3.762,3.762,0,0,0,20.585,12.4a6.592,6.592,0,0,0-1.722-.665,10.516,10.516,0,0,0-2.118-.135H9.072v8.653h8.206Zm.4,15.708a11.69,11.69,0,0,0,2.249-.266,4.628,4.628,0,0,0,1.851-.8A4.736,4.736,0,0,0,23.1,33.435a6.4,6.4,0,0,0,.53-2.395,5.147,5.147,0,0,0-1.587-4.127,6.954,6.954,0,0,0-4.235-1.2H9.072V35.967h8.6Zm25.539-.135a6.439,6.439,0,0,0,4.762,1.6,7.205,7.205,0,0,0,3.837-1.063,5.306,5.306,0,0,0,1.986-2.4h6.484a13,13,0,0,1-4.762,6.92,14.079,14.079,0,0,1-7.676,2.131,15.479,15.479,0,0,1-5.691-1.065,10.574,10.574,0,0,1-4.235-2.927,10.574,10.574,0,0,1-2.645-4.394,15.728,15.728,0,0,1-.928-5.723,15.505,15.505,0,0,1,.928-5.591,14.368,14.368,0,0,1,2.777-4.526,13.492,13.492,0,0,1,4.235-2.927A14.771,14.771,0,0,1,47.844,14.8,12.291,12.291,0,0,1,53.8,16.131a10.749,10.749,0,0,1,4.1,3.595,16.17,16.17,0,0,1,2.381,5.058,28.172,28.172,0,0,1,.264,5.855H41.359a7.671,7.671,0,0,0,1.854,5.193Zm8.336-13.975a5.713,5.713,0,0,0-4.1-1.464,6.3,6.3,0,0,0-2.911.665,7,7,0,0,0-1.851,1.466,3.557,3.557,0,0,0-.926,1.862,9.062,9.062,0,0,0-.266,1.73H53.4A7.082,7.082,0,0,0,51.549,21.854ZM39.9,7.879h14.82v3.595H39.906V7.879Z' transform='translate(-1 -5.35)' fill='#fff'/></svg>",
					about : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ipsum erat, euismod at mi congue, imperdiet commodo augue",
					goal : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ipsum erat, euismod at mi congue, imperdiet commodo augue",
					process: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ipsum erat, euismod at mi congue, imperdiet commodo augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ipsum erat, euismod at mi congue, imperdiet commodo augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ipsum erat, euismod at mi congue, imperdiet commodo augue",
					selected: false
				},
				{
					name : "Moonshine",
					id: 3,
					type: "UX/Service design",
					typeId : 2,
					year: "2020",
					association: "Hobby project",
					image: "https://pbs.twimg.com/media/C3vklvlWYAEInlR.jpg",
					link : "/somewhere",
					linkIcon : "<svg xmlns='http://www.w3.org/2000/svg' width='59.598' height='37.669' viewBox='0 0 59.598 37.669'><path id='Path_52' data-name='Path 52' d='M18.336,5.35a18.055,18.055,0,0,1,4.762.533,10.305,10.305,0,0,1,3.7,1.464,6.125,6.125,0,0,1,2.381,2.8,10.618,10.618,0,0,1,.794,4.259,7.46,7.46,0,0,1-1.321,4.657,9.577,9.577,0,0,1-3.7,3.062,8.861,8.861,0,0,1,5.026,3.46A10.524,10.524,0,0,1,31.7,31.438a10.655,10.655,0,0,1-1.06,4.792,8.833,8.833,0,0,1-2.911,3.328A13.663,13.663,0,0,1,23.5,41.421a19.489,19.489,0,0,1-4.762.667H1V5.35Zm-1.06,14.906a6,6,0,0,0,3.573-1.063,3.9,3.9,0,0,0,1.324-3.328,5.093,5.093,0,0,0-.4-2.128A3.762,3.762,0,0,0,20.585,12.4a6.592,6.592,0,0,0-1.722-.665,10.516,10.516,0,0,0-2.118-.135H9.072v8.653h8.206Zm.4,15.708a11.69,11.69,0,0,0,2.249-.266,4.628,4.628,0,0,0,1.851-.8A4.736,4.736,0,0,0,23.1,33.435a6.4,6.4,0,0,0,.53-2.395,5.147,5.147,0,0,0-1.587-4.127,6.954,6.954,0,0,0-4.235-1.2H9.072V35.967h8.6Zm25.539-.135a6.439,6.439,0,0,0,4.762,1.6,7.205,7.205,0,0,0,3.837-1.063,5.306,5.306,0,0,0,1.986-2.4h6.484a13,13,0,0,1-4.762,6.92,14.079,14.079,0,0,1-7.676,2.131,15.479,15.479,0,0,1-5.691-1.065,10.574,10.574,0,0,1-4.235-2.927,10.574,10.574,0,0,1-2.645-4.394,15.728,15.728,0,0,1-.928-5.723,15.505,15.505,0,0,1,.928-5.591,14.368,14.368,0,0,1,2.777-4.526,13.492,13.492,0,0,1,4.235-2.927A14.771,14.771,0,0,1,47.844,14.8,12.291,12.291,0,0,1,53.8,16.131a10.749,10.749,0,0,1,4.1,3.595,16.17,16.17,0,0,1,2.381,5.058,28.172,28.172,0,0,1,.264,5.855H41.359a7.671,7.671,0,0,0,1.854,5.193Zm8.336-13.975a5.713,5.713,0,0,0-4.1-1.464,6.3,6.3,0,0,0-2.911.665,7,7,0,0,0-1.851,1.466,3.557,3.557,0,0,0-.926,1.862,9.062,9.062,0,0,0-.266,1.73H53.4A7.082,7.082,0,0,0,51.549,21.854ZM39.9,7.879h14.82v3.595H39.906V7.879Z' transform='translate(-1 -5.35)' fill='#fff'/></svg>",
					about : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ipsum erat, euismod at mi congue, imperdiet commodo augue",
					goal : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ipsum erat, euismod at mi congue, imperdiet commodo augue",
					process: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ipsum erat, euismod at mi congue, imperdiet commodo augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ipsum erat, euismod at mi congue, imperdiet commodo augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ipsum erat, euismod at mi congue, imperdiet commodo augue",
					selected: false
				},
				{
					name : "Moonshine",
					id: 4,
					type: "UX/Service design",
					typeId : 2,
					year: "2020",
					association: "Hobby project",
					image: "https://pbs.twimg.com/media/C3vklvlWYAEInlR.jpg",
					link : "/somewhere",
					linkIcon : "<svg xmlns='http://www.w3.org/2000/svg' width='59.598' height='37.669' viewBox='0 0 59.598 37.669'><path id='Path_52' data-name='Path 52' d='M18.336,5.35a18.055,18.055,0,0,1,4.762.533,10.305,10.305,0,0,1,3.7,1.464,6.125,6.125,0,0,1,2.381,2.8,10.618,10.618,0,0,1,.794,4.259,7.46,7.46,0,0,1-1.321,4.657,9.577,9.577,0,0,1-3.7,3.062,8.861,8.861,0,0,1,5.026,3.46A10.524,10.524,0,0,1,31.7,31.438a10.655,10.655,0,0,1-1.06,4.792,8.833,8.833,0,0,1-2.911,3.328A13.663,13.663,0,0,1,23.5,41.421a19.489,19.489,0,0,1-4.762.667H1V5.35Zm-1.06,14.906a6,6,0,0,0,3.573-1.063,3.9,3.9,0,0,0,1.324-3.328,5.093,5.093,0,0,0-.4-2.128A3.762,3.762,0,0,0,20.585,12.4a6.592,6.592,0,0,0-1.722-.665,10.516,10.516,0,0,0-2.118-.135H9.072v8.653h8.206Zm.4,15.708a11.69,11.69,0,0,0,2.249-.266,4.628,4.628,0,0,0,1.851-.8A4.736,4.736,0,0,0,23.1,33.435a6.4,6.4,0,0,0,.53-2.395,5.147,5.147,0,0,0-1.587-4.127,6.954,6.954,0,0,0-4.235-1.2H9.072V35.967h8.6Zm25.539-.135a6.439,6.439,0,0,0,4.762,1.6,7.205,7.205,0,0,0,3.837-1.063,5.306,5.306,0,0,0,1.986-2.4h6.484a13,13,0,0,1-4.762,6.92,14.079,14.079,0,0,1-7.676,2.131,15.479,15.479,0,0,1-5.691-1.065,10.574,10.574,0,0,1-4.235-2.927,10.574,10.574,0,0,1-2.645-4.394,15.728,15.728,0,0,1-.928-5.723,15.505,15.505,0,0,1,.928-5.591,14.368,14.368,0,0,1,2.777-4.526,13.492,13.492,0,0,1,4.235-2.927A14.771,14.771,0,0,1,47.844,14.8,12.291,12.291,0,0,1,53.8,16.131a10.749,10.749,0,0,1,4.1,3.595,16.17,16.17,0,0,1,2.381,5.058,28.172,28.172,0,0,1,.264,5.855H41.359a7.671,7.671,0,0,0,1.854,5.193Zm8.336-13.975a5.713,5.713,0,0,0-4.1-1.464,6.3,6.3,0,0,0-2.911.665,7,7,0,0,0-1.851,1.466,3.557,3.557,0,0,0-.926,1.862,9.062,9.062,0,0,0-.266,1.73H53.4A7.082,7.082,0,0,0,51.549,21.854ZM39.9,7.879h14.82v3.595H39.906V7.879Z' transform='translate(-1 -5.35)' fill='#fff'/></svg>",
					about : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ipsum erat, euismod at mi congue, imperdiet commodo augue",
					goal : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ipsum erat, euismod at mi congue, imperdiet commodo augue",
					process: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ipsum erat, euismod at mi congue, imperdiet commodo augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ipsum erat, euismod at mi congue, imperdiet commodo augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ipsum erat, euismod at mi congue, imperdiet commodo augue",
					selected: false
				}
			]

			onBeforeMount(() => {
				store.dispatch('setProjectDataInStore', projectData)
			}) 

			const projectDataFromStore = computed(() => {
				return store.state.project_data
			})	

			const activateBackdrop = computed(() => {
                return store.getters.projectHasBeenSelected
            })

			const closeBackdrop = () => {
				store.commit('SET_PROJECT_SELECTED', false)
				store.dispatch('toggleProjectDetailState', null)
			}

			return {
				projectDataFromStore,
				activateBackdrop,
				closeBackdrop
			}
		}
})
</script>

<template>
	<div class="port-projects">
		<section class="port-projects__upper-container">
			<FilterComponent />
		</section>
		<section class="port-projects__lower-container">
			<template v-for="project in projectDataFromStore" :key="project">
				<ProjectTemplate :projectData="project"/>
			</template>
		</section>
		<div class="port-projects__backdrop" @click="closeBackdrop" v-if="activateBackdrop"></div>
	</div>
</template>


<style scoped lang="scss">
	@import '../foundation/scss/breakpoints.scss';

	.port-projects {
		margin-top: 10rem;
		padding-top: 3rem;

		&__backdrop {    
			z-index: 9999;
            display: block;
            position: fixed;
            top: 0;
            left: 0; 
            height: 120vh;
            width: 100vw; 
            background: rgb(94,88,191);
			background: linear-gradient(146deg, rgba(94,88,191,0.8029586834733894) 0%, rgba(12,15,57,0.8589810924369747) 100%);
        }

		@include mq('tablet') {
			margin-top: 15rem;
		}

		&__upper-container {
			margin-bottom: 5rem;

			@include mq('tablet') {
				margin-bottom: 0;
			}
		}

		&__lower-container {
			max-width: 115rem;
			margin: 0 auto;

			display: grid;
			grid-row-gap: 6px;
			grid-column-gap: 6px;
			grid-template-columns: repeat(6, [col] auto);
			grid-template-rows: repeat(3, [row] auto);
		}
	}

</style>
