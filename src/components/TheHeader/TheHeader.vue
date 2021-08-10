


<script lang="ts">
    import { defineComponent, onMounted, ref } from 'vue';

    export default defineComponent({
        name: 'TheHeader',
        setup() {

            onMounted(() => {
                const areaToHover = ref((document.querySelector('.js-port-mouse-hover-effect') as HTMLElement) ?? "")
                document.body.onmousemove = function(e) {
                    areaToHover.value.style.setProperty('background-position',(e.clientX - 27)+'px '+(e.clientY - 23)+'px');
                }
            }) 
        }
});
</script>

<template>
	<header class="port-header">
        <div class="port-header__container">

            <section class="port-header__left-section">
                <a href="/somerere" class="port-header__circle-container">
                    <div class="port-header__img-container">
                        <img src="https://images.pexels.com/photos/3671091/pexels-photo-3671091.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
                    </div>
                </a>
                <div class="port-header__profile-mini-text-container">
                    <p class="port-header__profile-text-upper port-medium-medium">Emil Kristoffersen</p>
                    <span class="port-header__profile-text-lower port-small-book">Interface enthusiast</span>
                </div>
                <div class="port-svg-background-container port-svg-background-container--header-variant-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="131.452" height="168.988" viewBox="0 0 131.452 168.988">
                        <g id="_26432" data-name="26432" transform="translate(-167.421 376.409)" opacity="0.05">
                            <path id="Path_9" data-name="Path 9" d="M241.7-366.074a10.477,10.477,0,0,0-6.52,7.283c-1.263,6.05,4.787,12.1,10.837,10.837,4.552-.94,8.076-5.58,7.636-9.956a10.348,10.348,0,0,0-5.58-7.694A9.739,9.739,0,0,0,241.7-366.074Z" transform="translate(-30 -10)" fill="#212e45"/>
                            <path id="Path_57" data-name="Path 57" d="M241.7-366.074a10.477,10.477,0,0,0-6.52,7.283c-1.263,6.05,4.787,12.1,10.837,10.837,4.552-.94,8.076-5.58,7.636-9.956a10.348,10.348,0,0,0-5.58-7.694A9.739,9.739,0,0,0,241.7-366.074Z" transform="translate(-67.591 -10)" fill="#212e45"/>
                            <path id="Path_10" data-name="Path 10" d="M279.291-366.074a10.477,10.477,0,0,0-6.52,7.283c-1.263,6.05,4.787,12.1,10.837,10.837,4.552-.94,8.076-5.58,7.636-9.956a10.348,10.348,0,0,0-5.58-7.694A9.739,9.739,0,0,0,279.291-366.074Z" transform="translate(-30 -10)" fill="#212e45"/>
                            <path id="Path_19" data-name="Path 19" d="M241.7-328.483a10.477,10.477,0,0,0-6.52,7.283c-1.263,6.05,4.787,12.1,10.837,10.837,4.552-.94,8.076-5.58,7.636-9.956a10.348,10.348,0,0,0-5.58-7.694A9.739,9.739,0,0,0,241.7-328.483Z" transform="translate(-30 -10)" fill="#212e45"/>
                            <path id="Path_56" data-name="Path 56" d="M241.7-328.483a10.477,10.477,0,0,0-6.52,7.283c-1.263,6.05,4.787,12.1,10.837,10.837,4.552-.94,8.076-5.58,7.636-9.956a10.348,10.348,0,0,0-5.58-7.694A9.739,9.739,0,0,0,241.7-328.483Z" transform="translate(-67.591 -10)" fill="#212e45"/>
                            <path id="Path_20" data-name="Path 20" d="M279.291-328.483a10.477,10.477,0,0,0-6.52,7.283c-1.263,6.05,4.787,12.1,10.837,10.837,4.552-.94,8.076-5.58,7.636-9.956a10.348,10.348,0,0,0-5.58-7.694A9.739,9.739,0,0,0,279.291-328.483Z" transform="translate(-30 -10)" fill="#212e45"/>
                            <path id="Path_29" data-name="Path 29" d="M241.7-290.892a10.477,10.477,0,0,0-6.52,7.283c-1.263,6.05,4.787,12.1,10.837,10.837,4.552-.94,8.076-5.58,7.636-9.956a10.348,10.348,0,0,0-5.58-7.694A9.739,9.739,0,0,0,241.7-290.892Z" transform="translate(-30 -10)" fill="#212e45"/>
                            <path id="Path_55" data-name="Path 55" d="M241.7-290.892a10.477,10.477,0,0,0-6.52,7.283c-1.263,6.05,4.787,12.1,10.837,10.837,4.552-.94,8.076-5.58,7.636-9.956a10.348,10.348,0,0,0-5.58-7.694A9.739,9.739,0,0,0,241.7-290.892Z" transform="translate(-67.591 -10)" fill="#212e45"/>
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

            <section class="port-header__middle-section">
                <ul class="port-header__nav js-port-mouse-hover-effect">
                    <li class="port-header__nav-item port-nav-link">
                        <router-link to="/projects">
                            Work
                        </router-link>
                    </li>
                    <li class="port-header__nav-item port-nav-link">
                        <router-link to="/" exact>
                            About
                        </router-link>
                    </li>
                    <li class="port-header__nav-item port-nav-link">
                        <router-link to="/Contact">
                            Contact
                        </router-link>
                    </li>
                </ul>
            </section>

            <section class="port-header__right-section">
                <div class="port-header__svg-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66.095 35.507">
                        <g id="Group_70" data-name="Group 70" transform="translate(-166.456 30.36)">
                            <path id="Path_10" data-name="Path 10" d="M10.82,8.354V13.73A4.087,4.087,0,0,0,7.577,12.4a5.464,5.464,0,0,0-5.2,5.746,5.464,5.464,0,0,0,5.2,5.746,4.087,4.087,0,0,0,3.243-1.328v1.023h3.265V8.354ZM8.23,20.8a2.485,2.485,0,0,1-2.59-2.655,2.485,2.485,0,0,1,2.59-2.655,2.485,2.485,0,0,1,2.59,2.655A2.485,2.485,0,0,1,8.23,20.8Zm11.165-1.349h7.726a6.326,6.326,0,0,0,.131-1.306A5.494,5.494,0,0,0,21.724,12.4a5.579,5.579,0,0,0-5.789,5.746c0,3.243,2.307,5.746,6.028,5.746a5.522,5.522,0,0,0,4.744-2.242L24.1,20.15a2.841,2.841,0,0,1-2.089.827A2.477,2.477,0,0,1,19.395,19.454Zm-.065-2.438A2.246,2.246,0,0,1,21.7,15.3a2.24,2.24,0,0,1,2.307,1.719Zm12.427-1.132c0-.392.348-.609.914-.609a1.58,1.58,0,0,1,1.458.958l2.786-1.5A4.761,4.761,0,0,0,32.671,12.4c-2.263,0-4.266,1.2-4.266,3.569,0,3.765,5.354,3.134,5.354,4.331,0,.435-.392.675-1.175.675a1.787,1.787,0,0,1-1.85-1.284L27.9,21.3a4.766,4.766,0,0,0,4.679,2.59c2.35,0,4.527-1.066,4.527-3.569C37.11,16.3,31.757,17.125,31.757,15.884Zm8.618-4.135a1.959,1.959,0,1,0-1.959-1.959A1.979,1.979,0,0,0,40.375,11.749ZM38.743,23.589h3.265V12.707H38.743ZM52.388,12.707v1.11A3.866,3.866,0,0,0,49.211,12.4a5.389,5.389,0,0,0-5.354,5.528,5.389,5.389,0,0,0,5.354,5.528,3.866,3.866,0,0,0,3.177-1.415v1a2.169,2.169,0,0,1-2.459,2.329A2.487,2.487,0,0,1,47.448,24l-2.786,1.61a5.566,5.566,0,0,0,5.158,2.633c2.895,0,5.746-1.545,5.746-5.2V12.707Zm-2.633,7.748a2.527,2.527,0,1,1,2.633-2.525A2.463,2.463,0,0,1,49.755,20.455ZM64.336,12.4a3.722,3.722,0,0,0-3.112,1.328V12.707H57.96V23.589h3.265V17.647c0-1.545.827-2.242,2.024-2.242a1.8,1.8,0,0,1,1.893,1.98v6.2h3.265V16.907C68.406,13.969,66.535,12.4,64.336,12.4Z" transform="translate(164.08 -23.099)" fill="#292441" opacity="0.403"/>
                            <path id="Path_9" data-name="Path 9" d="M0,0H10.882V6.8H0Z" transform="translate(199.526 -17.193)" fill="#fff"/>
                            <path id="Path_8" data-name="Path 8" d="M33.964,19.392H41.69a6.326,6.326,0,0,0,.131-1.306,5.494,5.494,0,0,0-5.528-5.746A5.579,5.579,0,0,0,30.5,18.086c0,3.243,2.307,5.746,6.028,5.746a5.522,5.522,0,0,0,4.744-2.242l-2.612-1.5a2.841,2.841,0,0,1-2.089.827A2.477,2.477,0,0,1,33.964,19.392ZM33.9,16.955a2.451,2.451,0,0,1,4.679,0Zm21.959-4.614A3.584,3.584,0,0,0,52.7,13.777a3.238,3.238,0,0,0-2.851-1.436,3.34,3.34,0,0,0-2.916,1.306v-1H43.671V23.527h3.265V17.39c0-1.284.609-2.046,1.7-2.046,1.045,0,1.567.7,1.567,1.785v6.4h3.265V17.39c0-1.284.609-2.046,1.7-2.046,1.045,0,1.567.7,1.567,1.785v6.4h3.265V16.846C59.993,14.125,58.361,12.341,55.858,12.341Zm8.009-.653a1.959,1.959,0,1,0-1.959-1.959A1.979,1.979,0,0,0,63.867,11.688ZM62.235,23.527H65.5V12.646H62.235Zm5.658,0h3.265V7.64H67.894Zm7.508.3a2.068,2.068,0,1,0-2.068-2.068A2.081,2.081,0,0,0,75.4,23.832Z" transform="translate(155.082 -38)" fill="#292441"/>
                        </g>
                    </svg>
                </div>
                <div class="port-svg-background-container port-svg-background-container--header-variant-right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="131.452" height="168.988" viewBox="0 0 131.452 168.988">
                        <g id="_26432" data-name="26432" transform="translate(-167.421 376.409)" opacity="0.05">
                            <path id="Path_9" data-name="Path 9" d="M241.7-366.074a10.477,10.477,0,0,0-6.52,7.283c-1.263,6.05,4.787,12.1,10.837,10.837,4.552-.94,8.076-5.58,7.636-9.956a10.348,10.348,0,0,0-5.58-7.694A9.739,9.739,0,0,0,241.7-366.074Z" transform="translate(-30 -10)" fill="#212e45"/>
                            <path id="Path_57" data-name="Path 57" d="M241.7-366.074a10.477,10.477,0,0,0-6.52,7.283c-1.263,6.05,4.787,12.1,10.837,10.837,4.552-.94,8.076-5.58,7.636-9.956a10.348,10.348,0,0,0-5.58-7.694A9.739,9.739,0,0,0,241.7-366.074Z" transform="translate(-67.591 -10)" fill="#212e45"/>
                            <path id="Path_10" data-name="Path 10" d="M279.291-366.074a10.477,10.477,0,0,0-6.52,7.283c-1.263,6.05,4.787,12.1,10.837,10.837,4.552-.94,8.076-5.58,7.636-9.956a10.348,10.348,0,0,0-5.58-7.694A9.739,9.739,0,0,0,279.291-366.074Z" transform="translate(-30 -10)" fill="#212e45"/>
                            <path id="Path_19" data-name="Path 19" d="M241.7-328.483a10.477,10.477,0,0,0-6.52,7.283c-1.263,6.05,4.787,12.1,10.837,10.837,4.552-.94,8.076-5.58,7.636-9.956a10.348,10.348,0,0,0-5.58-7.694A9.739,9.739,0,0,0,241.7-328.483Z" transform="translate(-30 -10)" fill="#212e45"/>
                            <path id="Path_56" data-name="Path 56" d="M241.7-328.483a10.477,10.477,0,0,0-6.52,7.283c-1.263,6.05,4.787,12.1,10.837,10.837,4.552-.94,8.076-5.58,7.636-9.956a10.348,10.348,0,0,0-5.58-7.694A9.739,9.739,0,0,0,241.7-328.483Z" transform="translate(-67.591 -10)" fill="#212e45"/>
                            <path id="Path_20" data-name="Path 20" d="M279.291-328.483a10.477,10.477,0,0,0-6.52,7.283c-1.263,6.05,4.787,12.1,10.837,10.837,4.552-.94,8.076-5.58,7.636-9.956a10.348,10.348,0,0,0-5.58-7.694A9.739,9.739,0,0,0,279.291-328.483Z" transform="translate(-30 -10)" fill="#212e45"/>
                            <path id="Path_29" data-name="Path 29" d="M241.7-290.892a10.477,10.477,0,0,0-6.52,7.283c-1.263,6.05,4.787,12.1,10.837,10.837,4.552-.94,8.076-5.58,7.636-9.956a10.348,10.348,0,0,0-5.58-7.694A9.739,9.739,0,0,0,241.7-290.892Z" transform="translate(-30 -10)" fill="#212e45"/>
                            <path id="Path_55" data-name="Path 55" d="M241.7-290.892a10.477,10.477,0,0,0-6.52,7.283c-1.263,6.05,4.787,12.1,10.837,10.837,4.552-.94,8.076-5.58,7.636-9.956a10.348,10.348,0,0,0-5.58-7.694A9.739,9.739,0,0,0,241.7-290.892Z" transform="translate(-67.591 -10)" fill="#212e45"/>
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

        </div>
    </header>
</template>


<style scoped lang="scss">
    @import '../../foundation/scss/variables.scss';

    .port-header {
        width: 100%;
        height: 10rem;
        background-color: $base-color;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        z-index: 9999;

        &__nav {
            display: flex;
            background-size:0 0; 
            align-items: center;
            cursor: none;

            a {
                cursor: none;
            }

            &:before {
                opacity: 0.6;
                z-index: 8888;
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background:
                    radial-gradient(farthest-side, 
                    $base-light-grey-dots calc(100% - 1px),
                    transparent 100%) 
                    fixed /* Fixed to the screen*/ 
                    no-repeat; 
                background-size: 60px 60px;
                background-position: inherit;
            }
        }

        &__nav-item {
            margin: 0 4rem;
            z-index: 9999;
            position: relative;
            padding: 2rem 0;
        }
        
        &__container {
            max-width: $max-width;
            width: 100%;
            display: flex;
            align-items: center;
            position: relative;
            padding: 0 4rem;
            height: 100%;
        }

        &__left-section, &__right-section {
            position: relative;
            z-index: 10;
        }

        &__left-section {
            display: flex;
        }

        &__middle-section {
            position: absolute;
            left:0;
            right:0;
            width: 410px;
            margin-left: auto;
            margin-right: auto;
            height: 100%;
            display: flex;
        }

        &__right-section {
            display: flex;
            justify-content: flex-end;
            margin-left: auto;
        }

        &__profile-mini-text-container {
            display: flex;
            flex-direction: column;
            margin-top: 1.5rem;
            margin-left: 1.5rem;
        }

        &__svg-container {
            height: 3rem;
            width: 5rem;
        }

        &__img-container {
            height: 5rem;
            width: 5rem;
            border-radius: 50%;
            overflow: hidden;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        &__circle-container {
            border-radius: 50%;
            position: relative;
            border: 2px solid $blood-orange;
            height: 5.5rem;
            width: 5.5rem;
        }

        &__profile-text-upper {
            margin-top: 0;
            margin-bottom: 0.2rem;
        }

        &__profile-text-lower {
            display: block;
            
        }
    }

</style>
