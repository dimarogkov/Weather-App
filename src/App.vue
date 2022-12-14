<template>
    <div class="page" :class="setColorTheme">
        <wa-header />

        <router-view />
    </div>
</template>

<script>
import {computed} from 'vue';
import {useRoute} from 'vue-router/dist/vue-router';
import {useStore} from 'vuex';
import WaHeader from '@/components/Header';

export default {
    name: 'wa-app',
    components: {
        WaHeader,
    },
    setup() {
        const route = useRoute();
        const store = useStore();

        const colorTheme = computed(() => store.state.weather.colorTheme);
        const pageName = computed(() => route.name);
        const setColorTheme = computed(() => {
            if (pageName.value !== 'home') {
                return colorTheme.value;
            }

            return '';
        });

        return {
            colorTheme,
            pageName,
            setColorTheme,
        };
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

:root {
    --color-white: #fff;
    --color-black: #282828;
    --color-grey: #ecf0f1;
    --color-theme: #282828;
    --color-theme-grad: linear-gradient(135deg, var(--color-black) 50%, #2c3e50 100%);
    --header-height: 70px;
}
* {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    -webkit-text-size-adjust: none;
    box-sizing: border-box;
}
html::-webkit-scrollbar,
html *::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}
html::-webkit-scrollbar-track,
html *::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
}
html::-webkit-scrollbar-thumb,
html *::-webkit-scrollbar-thumb {
    background: var(--color-theme);
}
:focus,
:active,
:visited {
    outline: none;
}
body {
    width: 100%;
    font-family: 'Poppins', sans-serif;
    color: var(--color-black);
    margin: 0;
    padding: 0;
}
.page {
    position: relative;
    width: 100%;
}
.page.clear {
    --color-theme: #6e45e2;
    --color-theme-grad: linear-gradient(to top, #88d3ce 0%, #6e45e2 100%);
}
.page.clouds {
    --color-theme: #ff057c;
    --color-theme-grad: linear-gradient(-225deg, #ff057c 0%, #7c64d5 48%, #4cc3ff 100%);
}
.page.snow {
    --color-theme: #13547a;
    --color-theme-grad: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
}
.page.rain {
    --color-theme: #764ba2;
    --color-theme-grad: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
.page.drizzle {
    --color-theme: #596164;
    --color-theme-grad: linear-gradient(to right, #868f96 0%, #596164 100%);
}
.page.thunderstorm {
    --color-theme: #09203f;
    --color-theme-grad: linear-gradient(to top, #09203f 0%, #537895 100%);
}
.page.mist,
.page.fog {
    --color-theme: #29323c;
    --color-theme-grad: linear-gradient(60deg, #29323c 0%, #485563 100%);
}
.page.smoke,
.page.haze,
.page.dust {
    --color-theme: #616161;
    --color-theme-grad: linear-gradient(-20deg, #616161 0%, #9bc5c3 100%);
}
.page.sand,
.page.ash {
    --color-theme: #c1c161;
    --color-theme-grad: linear-gradient(to right, #c1c161 0%, #c1c161 0%, #d4d4b1 100%);
}
.page.squall,
.page.tornado {
    --color-theme: #3584a7;
    --color-theme-grad: linear-gradient(-225deg, #473b7b 0%, #3584a7 51%, #30d2be 100%);
}
.section {
    position: relative;
    width: 100%;
}
a {
    color: var(--color-black);
    text-decoration: none;
}
ol,
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
h1,
.h1 {
    position: relative;
    font-size: 40px;
    line-height: 1em;
}
h2,
.h2 {
    position: relative;
    font-size: 34px;
    line-height: 1em;
}
h3,
.h3 {
    position: relative;
    font-size: 28px;
    line-height: 1em;
}
h4,
.h4 {
    position: relative;
    font-size: 26px;
    line-height: 1em;
}
.text {
    position: relative;
    font-size: 17px;
    color: var(--color-black);
}
.text.size-2 {
    font-size: 19px;
}
.text-center {
    text-align: center;
}
.text-right {
    text-align: right;
}
.bold {
    font-weight: 700;
}
.media {
    font-weight: 500;
}
.btn {
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 50px;
    text-align: center;
    font-size: 15px;
    color: var(--color-white);
    text-transform: uppercase;
    border: 2px solid var(--color-black);
    background-color: var(--color-black);
    transition: all 0.4s;
}
.btn:hover {
    color: var(--color-black);
    background-color: transparent;
}
.btn:active {
    transform: translateY(5px);
}
.btn[disabled] {
    opacity: 0.7;
    pointer-events: none;
}
@media (min-width: 1441px) and (max-width: 1640px) {
    .container {
        max-width: 1340px;
    }
}
@media (min-width: 1200px) and (max-width: 1440px) {
    .container {
        max-width: 1240px;
    }
}
@media (min-width: 1200px) and (max-width: 1730px) {
    .col-lt-12 {
        flex: 0 0 100%;
        max-width: 100%;
    }
    .col-lt-11 {
        flex: 0 0 91.666667%;
        max-width: 91.666667%;
    }
    .col-lt-10 {
        flex: 0 0 83.333333%;
        max-width: 83.333333%;
    }
    .col-lt-9 {
        flex: 0 0 75%;
        max-width: 75%;
    }
    .col-lt-8 {
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }
    .col-lt-7 {
        flex: 0 0 58.333333%;
        max-width: 58.333333%;
    }
    .col-lt-6 {
        flex: 0 0 50%;
        max-width: 50%;
    }
    .col-lt-5 {
        max-width: 41.666667%;
        flex: 0 0 41.666667%;
    }
    .col-lt-4 {
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }
    .col-lt-3 {
        flex: 0 0 25%;
        max-width: 25%;
    }
    .col-lt-2 {
        flex: 0 0 16.666667%;
        max-width: 16.666667%;
    }
    .offset-lt-0 {
        margin-left: 0;
    }
    .offset-lt-3 {
        margin-left: 25%;
    }
    .offset-lt-2 {
        margin-left: 16.666667%;
    }
    .offset-lt-1 {
        margin-left: 8.333333%;
    }
}
@media (max-width: 1199px) {
    h1,
    .h1 {
        font-size: 36px;
    }
    h2,
    .h2 {
        font-size: 32px;
    }
    h3,
    .h3 {
        font-size: 26px;
    }
    h4,
    .h4 {
        font-size: 24px;
    }
    .text.size-2 {
        font-size: 17px;
    }
}
@media (max-width: 767px) {
    :root {
        --header-height: 60px;
    }
}
@media (max-width: 575px) {
    h1,
    .h1 {
        font-size: 32px;
    }
    h2,
    .h2 {
        font-size: 28px;
    }
    h3,
    .h3 {
        font-size: 24px;
    }
    h4,
    .h4 {
        font-size: 22px;
    }
    .text,
    .text.size-2 {
        font-size: 16px;
    }
}
</style>
