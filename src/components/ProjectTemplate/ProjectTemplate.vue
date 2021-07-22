


<script lang="ts">
    import { defineComponent, ref, computed } from 'vue';

    export default defineComponent({
        name: 'ProjectTemplate',
        props: {
            projectData: String
        },
        setup(props) {
            const expandedState = ref(false)

            const isExpanded = computed(() => {
                return expandedState.value ? 'port-project-template__lower-container--accordion-is-expanded' : ''
            })

            const typeDotIndicator: Record<string, string> = {
                1 : 'port-project-template__type-dot-indicator--ui-design',
                2 : 'port-project-template__type-dot-indicator--ux-design',
            }

            const typeButtonColor: Record<string, string> = {
                1 : 'port-button--behance-link',
                2 : 'port-button--github-link',
            }

            const selectTypeDotIndicatorColor = (typeId:number):string => {
                return typeDotIndicator[typeId]
            }

            const selectTypeButtonColor = (typeId:number):string => {
                return typeButtonColor[typeId]
            }

            const toggleAccordion = (value:boolean):void => {
                value ? expandedState.value = true : expandedState.value = false
            }

            return {
                props,
                isExpanded,
                selectTypeDotIndicatorColor,
                selectTypeButtonColor,
                toggleAccordion
            }
        }
});
</script>

<template>
	<article class="port-project-template">

        <section class="port-project-template__upper-container" @click="toggleAccordion(true)">
            <div class="port-project-template__image-container" :style="{'background-image': `url(${props.projectData.image})`}"></div>
            <div class="port-project-template__text-container">
                <div class="port-project-template__title-container">
                    <h2 class="port-medium-extra-bold port-project-template__title">{{props.projectData.name}}</h2>
                    <p class="port-small-book">Click to see project</p>
                </div>
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
        </section>

        <section class="port-project-template__lower-container port-project-template__accordion-is-expanded" :class="isExpanded">
            <a class="port-button" :class="selectTypeButtonColor(props.projectData.typeId)" :href="props.projectData.link" v-html="props.projectData.linkIcon"></a>
            <div class="port-project-template__lower-text-info-divider">
                <div>
                    <h3 class="port-small-bold">About</h3>
                    <p class="port-medium-book">{{props.projectData.about}}</p>
                </div>
                <div>
                    <h3 class="port-small-bold">Goal</h3>
                    <p class="port-medium-book">{{props.projectData.goal}}</p>
                </div>
            </div>
            <div>
                <h3 class="port-small-bold">Process</h3>
                <p class="port-medium-book">{{props.projectData.process}}</p>
            </div>
            <button class="port-button port-button--collapse" @click="toggleAccordion(false)">
                <div class="port-project-template__collapse-svg-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10.71" height="11.016" viewBox="0 0 10.71 11.016">
                        <path id="Path_4" data-name="Path 4" d="M6.635,8.888h8.38v1.377H6.635l3.693,3.693-.973.973L4,9.577,9.355,4.222l.973.973Z" transform="translate(14.932 -4) rotate(90)" fill="#212e45"/>
                    </svg>
                </div>
                <p class="port-extra-small-bold">collapse</p>
            </button>
        </section>

    </article>
</template>


<style scoped lang="scss">
    @import '../../foundation/scss/variables.scss';

    .port-project-template {
        margin-bottom: 10rem;

        &__upper-container {
            cursor: pointer;
        }

        &__collapse-svg-container {
            svg {
                height: 1.3rem;
                width: auto;
            }
        }

        &__lower-text-info-divider {
            display: flex;
            margin: 0 -2rem;
            padding-top: 3rem;
            padding-bottom: 0.5rem;
            
            div {
                width: 50%;
                margin: 0 2rem;
            }
        }

        &__lower-container {
            opacity: 0;
            height: 0;
            transition: height 0.25 cubic-bezier(0.075, 0.82, 0.165, 1);

            &--accordion-is-expanded {
                transition: height 0.25 cubic-bezier(0.075, 0.82, 0.165, 1);
                opacity: 1;
                height: 100%;
            }

            .port-medium-book {
                margin-top: -1rem;
            }
        }

        &__title {
            margin-top: 2.5rem;
            margin-bottom: -0.5rem;
        }

        &__text-container {
            display: flex;
        }

        &__info-wrapper {
            display: flex;   
            margin-left: auto;
            padding-top: 2rem;
        }
        
        &__info-container {
            margin: 0 3.5rem;
            display: flex;
            flex-direction: column;
            position: relative;

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
            height: 20rem;
            border-radius: 1.2rem;
            background-position: center;
            background-repeat: no-repeat;
        }
    }

</style>
