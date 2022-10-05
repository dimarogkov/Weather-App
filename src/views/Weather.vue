<template>
    <wa-banner v-if="data" :data="data" />
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
