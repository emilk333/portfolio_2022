


<script lang="ts">
	import { defineComponent, computed } from 'vue'
    import { useStore } from 'vuex'
	import DropdownComponent from '../InputElements/DropdownComponent.vue'

	export default defineComponent({
		name: 'ProjectsView',
		components: {
			DropdownComponent
		},
		setup() {
            const store = useStore()

            const projectTypeDataFromStore = computed(() => {
                
                const types = store.state.project_type_data ?? {}
                const year = store.state.project_year_data ?? {}
                const association = store.state.project_association_data ?? {}
                
                const projectCategories = [
                    {
                        category : "type",
                        data : types
                    },
                    {
                        category : "year",
                        data : year
                    },
                    {
                        category : "association",
                        data : association
                    },
                ]
                return projectCategories
			})	

            return {
                projectTypeDataFromStore
            }
		}
})
</script>

<template>
	<article class="port-filter">
        <div class="port-filter__dropdown-container">
            <template v-for="(dropdownFilter, index) in projectTypeDataFromStore" :key="index">
                <DropdownComponent :dropdownData="dropdownFilter"/>
            </template>
        </div>
        <div class="port-filter__tag-container">
            <span class="port-filter__tag port-small-medium">UI design</span>
            <span class="port-filter__tag port-small-medium">UI design</span>
            <span class="port-filter__tag port-small-medium">UI design</span>
        </div>
    </article>
</template>


<style scoped lang="scss">
    @import '../../foundation/scss/variables.scss';

	.port-filter {
        max-width: 65rem;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        &__dropdown-container, &__tag-container {
            display: flex;
        }
        
        &__tag {
            margin: 0 0.5rem;
            cursor: pointer;
            border-radius: 2.5rem;
            background-color: $light-blue-opaque;
            padding-left: 2rem;
            padding-right: 3.2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 3rem;
            position: relative;

            &:before {
                background-image: url("data:image/svg+xml; utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='7.5' height='7.5' viewBox='0 0 8.728 8.728'%3E%3Cpath id='Path_37' data-name='Path 37' d='M10,9.03l3.394-3.394.97.97L10.97,10l3.394,3.394-.97.97L10,10.97,6.606,14.364l-.97-.97L9.03,10,5.636,6.606l.97-.97Z' transform='translate(-5.636 -5.636)' fill='%23212e45'/%3E%3C/svg%3E%0A");
                background-repeat: no-repeat;
                top: 1.1rem;
                right: 1.3rem;
                position: absolute;    
                height: 1rem;
                width: 1rem;    
                content: ""
            }
        }
	}

</style>
