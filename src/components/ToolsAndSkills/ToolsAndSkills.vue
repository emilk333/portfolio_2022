


<script lang="ts">
    import { defineComponent, ref, computed } from 'vue'
    import { useStore } from 'vuex'
    import Tooltip from '../TooltipComponent/TooltipComponent.vue'

    interface ItooltipConfig {
        tooltipActiveState : boolean,
        title : string,
        text : string,
        strength : string
    }

    export default defineComponent({
        name: 'ToolsAndSkills',
        components : {
            Tooltip
        },
        props: {
            data: {
                default : () => {/**/}, //comment to circumvent ts-lint bug 
                type : Object
            },
        },
        setup(props) {

            const store = useStore()
            const publicPath = ref(process.env.BASE_URL)

            const showTooltip = computed(() => {
                return store.state.tooltip_config ? store.state.tooltip_config.tooltipActiveState : false
            })

            const svgDictionary: Record<string, string> = {
                Html : 'images/html-svg.svg',
                Sass : 'images/sass-svg.svg',
                Javascript : 'images/js-svg.svg',
                React : 'images/react-svg.svg',
                Vue : 'images/vue-svg.svg',
                Photoshop : 'images/ps-svg.svg',
                AdobeXD : 'images/xd-svg.svg',
                Zeplin : 'images/zeplin-svg.svg',
            }

            const identifySVGByNameValue = (key: string) :string => {
                return key ? publicPath.value + svgDictionary[key] : ''
            }

            const dispatchTooltipConfig = (value:boolean) :void => {
                const identifierKey = props.data.name
                store.dispatch('activateTooltip', identifierKey)
            }

            return {
                props,
                identifySVGByNameValue,
                dispatchTooltipConfig,
                showTooltip
            }
        }
})
</script>

<template>
	<button class="port-tools-and-skills" @click="dispatchTooltipConfig()">
        <div class="port-tools-and-skills__image-container">
            <img :src="identifySVGByNameValue(props.data.name)" alt="">
        </div>
        <p class="port-medium-book port-medium-book--wide">{{props.data.name}}</p>
        <transition name="slide-fade">
            <Tooltip v-if="props.data.tooltipShown" :tooltipData="props.data"/>
        </transition>
    </button>
</template>


<style scoped lang="scss">
    @import '../../foundation/scss/variables.scss';

    .port-tools-and-skills {
        position: relative;
        z-index: 5555;
        display: flex;
        align-items: center;
        background-color: transparent;
        border: none;
        cursor: pointer;
        
        p {
            transition: padding 0.15s ease-in-out;
        }

        &:hover {
            p {
                padding-left: 3rem;
            }
        }

        &__image-container {
            height: auto;
            width: 3.5rem;
        }
    }

</style>
