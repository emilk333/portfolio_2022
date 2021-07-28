


<script lang="ts">
    import { defineComponent, computed } from 'vue'

    export default defineComponent({
        name: 'Tooltip',
        props: {
            tooltipData : Object
        },
        setup(props) {

            const levelColorClassDictionary: Record<string, string> = {
                1 : 'port-tooltip__level--good',
                2 : 'port-tooltip__level--decent',
                3 : 'port-tooltip__level--more-to-learn'
            }

            const levelColor = computed(() => {
                console.log(props.tooltipData ? levelColorClassDictionary[props.tooltipData.tooltipStrengthLevel] : "")
                return props.tooltipData ? levelColorClassDictionary[props.tooltipData.tooltipStrengthLevel] : ""
            })

            return {
                props,
                levelColor
            }
        }
})
</script>

<template>
	<article class="port-tooltip">
        <div class="port-tooltip__wrapper">
            <h4 class="port-tooltip__title port-extra-small-bold">{{props.tooltipData.name}}</h4>
            <p class="port-tooltip__text port-small-book">{{props.tooltipData.tooltipText}}</p>
            <p class="port-tooltip__level-label port-small-book port-small-book--dark">Compentence: <span class="port-medium-book port-tooltip__level" :class="levelColor">{{props.tooltipData.tooltipStrength}}</span></p>
        </div>
    </article>
</template>


<style scoped lang="scss">
    @import '../../foundation/scss/variables.scss';

    .port-tooltip {
        position: absolute;
        z-index: 6666;
        bottom: 6rem;
        left: -0.5rem;
        background-color: $color-white;
        
        &__wrapper {
            max-width: 22rem;
            min-width: 18rem;
            width: 100%;
            box-shadow: rgba($dark-blue, 0.1) 0px 4px 12px;
            padding: 1.7rem;
            text-align: left;
            border-radius: 0.8rem;
            position: relative;
        }

        &:after {
            content: "";
            height: 1.6rem;
            width: 1.6rem;
            box-shadow: rgba($dark-blue, 0.1) 10px 10px 12px;
            bottom: -0.6rem;
            left: 2rem;
            position: absolute;
            transform: rotate(45deg);
            background-color: $color-white;
        }

        &__title {
            margin: 0;
        }

        &__text {
            margin: 0.5rem 0;
        }

        &__level-label {
            margin-bottom: 0;
            margin-top: 1.8rem;
        }

        &__level {
            &--good {
                color: $accept-green;
            }

            &--decent {
                color: $orange;
            }

            &--more-to-learn {
                color: $more-to-learn-red;
            }
        }
    }

</style>
