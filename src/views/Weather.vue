<template>
    <wa-loader v-if="isLoading" />

    <wa-errors v-if="errors" :errors="errors" />

    <wa-banner v-if="data" :data="data" />

    <wa-info v-if="data" :data="data" />
</template>

<script>
import {mapState} from 'vuex';
import {actionsTypes} from '@/store/modules/weather';
import WaBanner from '@/components/Banner';
import WaLoader from '@/components/Loader';
import WaErrors from '@/components/Errors';
import WaInfo from '@/components/Info';

export default {
    name: 'wa-weather',
    components: {
        WaLoader,
        WaErrors,
        WaBanner,
        WaInfo,
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
