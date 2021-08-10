


<script lang="ts">
	import { defineComponent, onMounted, ref } from 'vue'
    import { useStore } from 'vuex'

	export default defineComponent({
		name: 'DropdownComponent',
        props: {
            dropdownData : {
                type : Object,
                default : () => {/**/}, //comment to circumvent ts-lint bug 
            }
        },
		setup(props) {
            const store = useStore()
            const selectedDropdownValue = ref([])

            const selectNewDropdownValue = () => {
         
                store.dispatch('filterDropdownValue', selectedDropdownValue.value)
            }

            onMounted(() => {
                //console.log(props)
            })

            return {
                props,
                selectedDropdownValue,
                selectNewDropdownValue
            }
		}
})
</script>

<template>

	<div class="port-dropdown__wrapper" v-if="props.dropdownData.length > 1">
        <template v-for="(option, index) in props.dropdownData" :key="index">
            <article class="port-dropdown__popup">
                <input @change="selectNewDropdownValue" type="checkbox" :id="option" :value="option" v-model="selectedDropdownValue">
                <label :for="option">{{option.value}}</label>
            </article>
        </template>
        <div class="port-dropdown"></div>
    </div>
</template>


<style scoped lang="scss">
    @import '../../foundation/scss/variables.scss';

	.port-dropdown {
        cursor: pointer;
        border-radius: 0.8rem;
        height: 3.8rem;
        padding-left: 2rem;
        padding-right: 3rem;
        min-width: 12rem;
        border: none;
        background-color: $light-blue-opaque;
        font-family: "AirbnbCerealMedium", Arial, Helvetica, sans-serif;
        font-size: 1.2rem;
        color: rgba($dark-blue, 0.65);

        -moz-appearance: none;
        -webkit-appearance: none;

        &__popup {

        }

        &__wrapper {
            position: relative;
            max-width: fit-content;
            margin: 1rem;

             &:before {
                background-image: url("data:image/svg+xml; utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='3.8' viewBox='0 0 8.535 4.268'%3E%3Cpath id='Path_49' data-name='Path 49' d='M8,10.268,12.268,6v8.535Z' transform='translate(-6 12.268) rotate(-90)' fill='%23212e45'/%3E%3C/svg%3E");
                background-repeat: no-repeat;
                top: 1.8rem;
                right: 1rem;
                position: absolute;    
                height: 1rem;
                width: 1rem;    
                content: ""
            }
        }
	}

</style>
