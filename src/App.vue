<template>
    <div v-if="errors">This city is not find in the database, try again</div>

    <form @submit.prevent="getWeather">
        <input type="text" placeholder="Write the text" v-model="city" required />
        <button type="submit" :disabled="isLoading">Get Weather</button>
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

export default {
    name: 'wa-home',
    data() {
        return {
            moment,
            city: '',
        };
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
