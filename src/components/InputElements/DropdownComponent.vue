


<script lang="ts">
	import { defineComponent, watch, computed, ref } from 'vue'
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
            const dropdownPopupShownStatus = ref(false)

            const tagsToBeRemoved = computed(() => {
                return store.getters.removeFilterChoiceByTag
            })

            const showDropdownPopup = computed(() => {
                return dropdownPopupShownStatus.value ? 'port-dropdown__popup--active' : ''
            })

            watch(tagsToBeRemoved, (newValue, oldValue) => {

                if (selectedDropdownValue.value.length) {
                    const filteredArray = selectedDropdownValue.value.filter((item:Record<string, unknown>) => {
                        return item.value !== newValue
                    })
                    selectedDropdownValue.value = filteredArray
                }
                updateNewDropdownValue()
            })

            const toggleDropdownPopup = () => {
                dropdownPopupShownStatus.value = !dropdownPopupShownStatus.value 
            }

            const updateNewDropdownValue = () => {
                const filterConfig = {
                    value : selectedDropdownValue.value,
                    category : props.dropdownData.category
                }
                store.dispatch('filterDropdownValue', filterConfig)
            }

            return {
                props,
                selectedDropdownValue,
                showDropdownPopup,
                dropdownPopupShownStatus,
                updateNewDropdownValue,
                toggleDropdownPopup
            }
		}
})
</script>

<template>

	<div class="port-dropdown__wrapper" v-if="props.dropdownData.data.length > 1">
        <transition name="slide-fade">
            <article class="port-dropdown__popup" :class="showDropdownPopup">
                <template v-for="(option, index) in props.dropdownData.data" :key="index">
                    <div class="port-dropdown__popup-check-wrapper">
                        <input @change="updateNewDropdownValue" type="checkbox" :id="option.value+index" :value="option" v-model="selectedDropdownValue">
                        <label class="port-medium-book" :for="option.value+index">{{option.value}}</label>
                    </div>
                </template>
            </article>
        </transition>

        <div class="port-dropdown" @click="toggleDropdownPopup">Select a {{props.dropdownData.category}}</div>
        <div class="port-dropdown__backdrop" v-if="dropdownPopupShownStatus" @click="toggleDropdownPopup"></div>
    </div>
</template>


<style scoped lang="scss">
    @import '../../foundation/scss/variables.scss';
    @import '../../foundation/scss/breakpoints.scss';

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
        display: flex;
        align-items: center;

        -moz-appearance: none;
        -webkit-appearance: none;

        &__backdrop {
            top: -9rem;
            left: -99rem;
            height: 100vh;
            width: 9999rem;
            position: absolute;
            background-color: transparent;
        }

        &__wrapper {
            position: relative;
            max-width: fit-content;
            margin: 7rem 0.5rem 0.5rem 0.5rem;

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

            @include mq('phone-wide') {
                max-width: unset;
                width: 100%;
                margin: 0.5rem 0;
            }
        }

        &__popup {
            box-shadow: rgb($dark-blue, 0.12) 0px 2px 8px 0px;
            border-radius: 0.6rem;
            padding: 1.5rem 1.5rem 1.5rem 1.8rem;
            position: absolute;
            inset: 0;
            background-color: $color-white;
            height: fit-content;
            top: 4rem;
            opacity: 0;
            z-index: -1;

            &--active {
                opacity: 1;
                z-index: 6666;
            }
        }

        &__popup-check-wrapper {
            padding: 0.8rem 0;
            display: flex;

            @include mq('tablet') {
                padding: 1.8rem 0;   
            }

            &>* {
                cursor: pointer;
            }

            label {
                padding-left: 1rem;
                width: 100%;
                display: inline-block;
                margin-top: -0.1rem;
            }
        }
	}

</style>
