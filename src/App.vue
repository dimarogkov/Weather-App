<template>
    <div>
        <wa-header />

        <wa-banner />
    </div>

    <div v-if="errors">This city is not find in the database, try again</div>

    <form @submit.prevent="getWeather">
        <input type="text" placeholder="Write the text" v-model="city" required />
        <button type="submit" class="btn" :disabled="isLoading">
            <i class="las la-search"></i>
        </button>
    </form>

    <div v-if="data">
        <div>{{ data.name }} / {{ data.sys.country }}</div>
        <div>{{ moment(new Date()).format('dddd MMMM YY') }}</div>
        <div>{{ Math.round(data.main.temp) }}</div>
        <div>Min - {{ Math.round(data.main.temp_min) }} / Max - {{ Math.round(data.main.temp_max) }}</div>
        <div>{{ data.weather[0].main }} / {{ data.weather[0].description }}</div>
    </div>
</template>

<script>
import moment from 'moment';
import {mapState} from 'vuex';
import {actionsTypes} from '@/store/modules/weather';
import WaHeader from '@/components/Header';
import WaBanner from '@/components/Banner';

export default {
    name: 'wa-app',
    data() {
        return {
            moment,
            city: '',
        };
    },
    components: {
        WaHeader,
        WaBanner,
    },
    computed: {
        ...mapState({
            data: (state) => state.weather.data,
            isLoading: (state) => state.weather.isLoading,
            errors: (state) => state.weather.errors,
        }),
    },
    methods: {
        getWeather() {
            this.$store.dispatch(actionsTypes.getWeather, this.city.toLowerCase());
            this.city = '';
        },
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

:root {
    --color-white: #fff;
    --color-black: #282828;
    --color-grey: #ecf0f1;
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
    background: var(--color-black);
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
.link {
    position: relative;
    display: inline-block;
    font-size: 17px;
    font-weight: 500;
    color: var(--color-black);
}
.link::before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-black);
    transition: all 0.3s;
}
.link:hover::before {
    left: auto;
    right: 0;
    width: 0;
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
.form {
    position: relative;
    width: 100%;
}
.form input {
    position: relative;
    width: 100%;
    height: 50px;
    font-size: 16px;
    color: var(--color-black);
    padding: 0 20px;
    border: 2px solid var(--color-black);
}
@media (max-width: 767px) {
    :root {
        --header-height: 60px;
    }
}
</style>
