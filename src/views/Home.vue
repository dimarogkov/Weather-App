<template>
    <wa-header @getCity="getWeather" :isLoading="isLoading" />

    <wa-banner :errors="errors" :data="data" />
</template>

<script>
import {mapState} from 'vuex';
import {actionsTypes} from '@/store/modules/weather';
import WaHeader from '@/components/Header';
import WaBanner from '@/components/Banner';

export default {
    name: 'wa-home',
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
        getWeather(city) {
            this.$store.dispatch(actionsTypes.getWeather, city);
        },
    },
};
</script>
