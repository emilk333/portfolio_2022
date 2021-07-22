


<script lang="ts">
    import { defineComponent, ref } from 'vue'


    export default defineComponent({
        name: 'ToolsAndSkills',
        props: {
            nameValue: String
        },
        setup(props) {

            const publicPath = ref(process.env.BASE_URL)

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

            return {
                identifySVGByNameValue,
                props
            }
        }
})
</script>

<template>
	<div class="port-tools-and-skills">
        <div class="port-tools-and-skills__image-container">
            <img :src="identifySVGByNameValue(props.nameValue)" alt="">
        </div>
        <p class="port-medium-book port-medium-book--wide">{{props.nameValue}}</p>
    </div>
</template>


<style scoped lang="scss">
    @import '../../foundation/scss/variables.scss';

    .port-tools-and-skills {
        display: flex;
        align-items: center;

        &__image-container {
            height: auto;
            width: 3.5rem;
        }
    }

</style>
