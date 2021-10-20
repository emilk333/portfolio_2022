


<script lang="ts">
    import { defineComponent, ref, computed } from 'vue';
    import { useStore } from 'vuex'

    interface IscrollIntoViewFunction {
        scrollIntoView: (scrollObject:Record<string, unknown>) => void
    }

    export default defineComponent({
        name: 'ProjectTemplate',
        props: {
            projectData: {
                type : Object,
                default : () => {/**/}, //comment to circumvent ts-lint bug 
            }
        },
        setup(props) {
            const store = useStore()
            const projectToScrollTo = ref<null | IscrollIntoViewFunction >(null)

            const seeProjectDetailsClass = computed(() => {
                return props.projectData.selected ? 'port-project-template--selected' : ''
            })

            const inspectProjectText = computed(() => {
                return props.projectData.selected ? "Click button to see project" : "Click for more details"
            })

            const typeDotIndicator: Record<string, string> = {
                1 : 'port-project-template__type-dot-indicator--ui-design',
                2 : 'port-project-template__type-dot-indicator--ux-design',
            }

            const typeButtonIcon: Record<string, string> = {
                1 : 'Zeplin',
                2 : 'Github',
            }

            const selectTypeDotIndicatorColor = (typeId:number):string => {
                return typeDotIndicator[typeId]
            }

             const selectTypeButtonIcon = (typeId:number):string => {
                return typeButtonIcon[typeId]
            }

            const toggleProjectDetails = (selectedState: boolean, projectId:boolean):void => {
                store.commit('SET_PROJECT_SELECTED', selectedState)
                store.dispatch('toggleProjectDetailState', projectId)
            }

            return {
                props,
                projectToScrollTo,
                seeProjectDetailsClass,
                inspectProjectText,
                selectTypeButtonIcon,
                selectTypeDotIndicatorColor,
                toggleProjectDetails,
            }
        }
});
</script>

<template>
	<article class="port-project-template " :class="seeProjectDetailsClass" ref="projectToScrollTo" @click="toggleProjectDetails(true, props.projectData.id)">

            <div class="port-project-template__main-container">
                <div class="port-project-template__image-container" :style="{'background-image': `url(${props.projectData.image})`}"></div>

                <div class="port-project-template__text-container">
                    <div class="port-project-template__title-container">
                        <h2 class="port-medium-extra-bold port-project-template__title">{{props.projectData.name}}</h2>
                        <p class="port-small-book">{{inspectProjectText}}</p>
                    </div>

                    <section class="port-project-template__details-container" v-if="props.projectData.selected">
                        <div class="port-button-wrapper">
                            <div class="port-button-container">
                                <a class="port-button port-button--primary-link" :href="props.projectData.link" target="_blank">
                                    <div v-html="props.projectData.linkIcon" class="port-button__project-link"></div>
                                    <p class="port-medium-medium">{{selectTypeButtonIcon(props.projectData.typeId)}}</p>
                                </a>
                            </div>
                            <a v-if="props.projectData.demoLink" class="port-button port-button--secondary-link port-medium-medium" :href="props.projectData.demoLink" target="_blank">Demo</a>
                        </div>
                        <section class="port-project-template__detail-text-container">
                            <div>
                                <h3 class="port-small-bold">About</h3>
                                <p class="port-medium-book">{{props.projectData.about}}</p>
                            </div>
                            <div>
                                <h3 class="port-small-bold">Goal</h3>
                                <p class="port-medium-book">{{props.projectData.goal}}</p>
                            </div>
                            <div>
                                <h3 class="port-small-bold">Process</h3>
                                <p class="port-medium-book">{{props.projectData.process}}</p>
                            </div>
                        </section>
                        <button class="port-button port-button--collapse" @click.stop="toggleProjectDetails(false, null)">
                            <div class="port-project-template__collapse-svg-container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10.71" height="11.016" viewBox="0 0 10.71 11.016">
                                    <path id="Path_4" data-name="Path 4" d="M6.635,8.888h8.38v1.377H6.635l3.693,3.693-.973.973L4,9.577,9.355,4.222l.973.973Z" transform="translate(14.932 -4) rotate(90)" fill="#fff"/>
                                </svg>
                            </div>
                            <p class="port-extra-small-bold">collapse</p>
                        </button>
                    </section>

                    <ul class="port-project-template__info-wrapper">
                        <li class="port-project-template__info-container">
                            <div class="port-project-template__type-dot-indicator" :class="selectTypeDotIndicatorColor(props.projectData.typeId)"></div>
                            <p class="port-extra-small-bold">type</p>
                            <span class="port-medium-book port-medium-book--opaque">{{props.projectData.type}}</span>
                        </li>
                        <li class="port-project-template__info-container">
                            <p class="port-extra-small-bold">year</p>
                            <span class="port-medium-book port-medium-book--opaque">{{props.projectData.year}}</span>
                        </li>
                        <li class="port-project-template__info-container">
                            <p class="port-extra-small-bold">association</p>
                            <span class="port-medium-book port-medium-book--opaque">{{props.projectData.association}}</span>
                        </li>
                    </ul>
                </div>

            </div>
    </article>
</template>


<style scoped lang="scss">
    @import '../../foundation/scss/variables.scss';
    @import '../../foundation/scss/breakpoints.scss';

    .port-project-template {
        width: 100%;
        height: 42rem;
        cursor: pointer;
        position: relative;

        &--selected {
            cursor: default;
            position: fixed;
            width: 100%;
            min-width: 115rem;
            max-width: 120rem;
            height: 45rem;
            z-index: 9999;
            margin: auto;
            inset: 0;
            z-index: 999999;

            .port-project-template__text-container {
                justify-content: flex-start;
            }

            @include mq('tablet-small') {
                height: 100%;
                z-index: 999999;
                border-radius: 0;
                min-width: 100%;

                .port-project-template__image-container {
                    height: 130vh;
                }

                .port-project-template__title-container {
                    padding-left: 1rem;
                }

                .port-project-template__image-container, .port-project-template__main-container {
                    border-radius: 0;
                    overflow: auto;
                }

                .port-project-template__info-container {
                    padding-bottom: 3rem;

                    &:last-child {
                        padding-bottom: 0;
                    }
                }

                .port-project-template__details-container {
                    padding-left: 1rem;
                    height: 100%;
                }

                .port-project-template__detail-text-container {
                    flex-direction: column;

                    div {
                        width: 100%;
                    }
                }
            }
        }

        &:nth-child(1) {
            grid-column: col / span 6;
            grid-row: row;
        }

        &:nth-child(2) {
            grid-column: col / span 2;
            grid-row: row 2;

            .port-project-template__info-wrapper {
                display: flex;
                flex-wrap: wrap;
            }

            .port-project-template__info-container {
                padding-bottom: 3rem;

                &:last-child {
                    padding-bottom: 0;
                }
            }

            .port-project-template--selected {
                .port-project-template__info-container {
                    padding-bottom: 0;
                }
            }
        }

        &:nth-child(3) {
            grid-column: col 3 / span 4;
            grid-row: row 2 ;
        }

        &:nth-child(4) {
            grid-column: col / span 6;
            grid-row: row 3;
        }

        &:nth-child(5) {
            grid-column: col / span 4;
            grid-row: row 4;
        }

        &:nth-child(6) {
            grid-column: col 5 / span 2;
            grid-row: row 4;
        }

        &:nth-child(7) {
            grid-column: span 6;
            grid-row: row 5;
        }

        &__main-container {
            overflow: hidden;
            border-radius: 0.4rem;
            position: relative;
            height: 100%;
        }

        &__collapse-svg-container {
            transition: padding 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
            svg {
                height: 1.3rem;
                width: auto;
                transform: rotate(-90deg);
                padding-bottom: 3rem;
            }
        }

        &__detail-text-container {
            display: flex;
            margin: 4rem -3rem;
            width: calc(100% - 1rem);

            div {
                margin: 0 3rem;
                flex-grow: 1;
                flex-basis: 0;

                p {
                    padding-left: 0;
                }
            }
        }

        &__details-container {
            top: -2rem;
            position: relative;
            padding-left: 3.2rem;
            height: 22.5rem;
            //transition: height 0.35s cubic-bezier(0.075, 0.82, 0.165, 1) 0.2s, opacity 0.25s ease-in-out;

            .port-medium-book {
                margin-top: -1rem;
            }

            p {
                padding-left: 1rem;
                margin: 0;
            }
        }

        &__title {
            margin-top: 2.5rem;
            margin-bottom: -0.5rem;
        }

        &__title-container {
            padding-left: 3rem;
            padding-bottom: 2.5rem;

            @include mq('tablet') {
                padding-left: 2.2rem;
                margin-top: -1rem;
            }
        }

        &__text-container {
            padding: 2.2rem 2.2rem 2.5rem 1.4rem;
            display: flex;
            position: absolute;
            flex-direction: column;
            justify-content: flex-end;
            inset: 0;

            @include mq('tablet') {
                flex-direction: column;
            }

            .port-extra-small-bold, .port-medium-book, .port-small-book, .port-medium-extra-bold, .port-small-bold {
                color: $color-white;
            }
        }

        &__info-wrapper {
            display: flex;   
            
            @include mq('tablet') {
                padding-top: 0;
                margin-left: unset;
            }
        }
        
        &__info-container {
            margin: 0 3.5rem;
            display: flex;
            flex-direction: column;
            position: relative;

            @include mq('tablet') {
                margin: 0 2.5rem;
            }

            &:last-child {
                margin-right: 0;
            }

            p {
                margin-top: 0;
                margin-bottom: 0.5rem;
            }
        }

        &__type-dot-indicator {
            height: 0.6rem;
            width: 0.6rem;
            left: -2rem;
            top: 0.3rem;
            border-radius: 50%;
            position: absolute;
            background-color: $base-color;

            &--ui-design {
                background-color: $blood-orange;
            }

            &--ux-design {
                background-color: $royal-purple;
            }
        }
        
        &__image-container {
            border-radius: 0.4rem;
            position: relative;
            height: 100%;
            background-position: center;
            background-repeat: no-repeat;
            background-color: #fff;
            transition: transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            background-size: cover;

            &:hover {
                transform: scale(1.05);
            }

            &:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                // background-image: linear-gradient(to bottom right,#002f4b, #dc4225);
                background-image: linear-gradient(146deg, rgba(94, 88, 191, 0.8029586835) 0%, rgba(12, 15, 57, 0.8589810924) 100%);
                opacity: .6; 
            }
        }
    }

</style>
