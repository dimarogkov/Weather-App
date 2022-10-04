<template>
    <wa-banner v-if="data" :data="data" :colorTheme="colorTheme" />
</template>

<script>
import {mapState} from 'vuex';
import WaBanner from '@/components/Banner';
import {actionsTypes} from '@/store/modules/weather';

export default {
    name: 'wa-weather',
    components: {
        WaBanner,
    },
    computed: {
        ...mapState({
            data: (state) => state.weather.data,
            errors: (state) => state.weather.errors,
            isLoading: (state) => state.weather.isLoading,
        }),
        slugCity() {
            return this.$route.params.slug;
        },
        colorTheme() {
            if (this.data.weather[0].main === 'Clear') {
                return (document.body.className = 'clear');
            }

            if (this.data.weather[0].main === 'Clouds') {
                return (document.body.className = 'clouds');
            }

            if (this.data.weather[0].main === 'Snow') {
                return (document.body.className = 'snow');
            }

            if (this.data.weather[0].main === 'Rain') {
                return (document.body.className = 'rain');
            }

            if (this.data.weather[0].main === 'Drizzle') {
                return (document.body.className = 'drizzle');
            }

            if (this.data.weather[0].main === 'Thunderstorm') {
                return (document.body.className = 'thunderstorm');
            }

            return (document.body.className = '');
        },
    },
    methods: {
        currentWeather() {
            this.$store.dispatch(actionsTypes.getWeather, this.slugCity);
        },
    },
    watch: {
        slugCity() {
            this.currentWeather();
        },
    },
    mounted() {
        this.currentWeather();
    },
};
</script>
