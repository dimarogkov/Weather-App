<template>
    <wa-loader v-if="isLoading" />

    <wa-errors v-if="errors" :errors="errors" />

    <wa-banner v-if="data" :data="data" />

    <wa-info v-if="data" :data="data" />
</template>

<script>
import {useStore} from 'vuex';
import {computed, watch, onMounted} from 'vue';
import {useRoute} from 'vue-router/dist/vue-router';
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
    setup() {
        const store = useStore();
        const route = useRoute();

        const data = computed(() => store.state.weather.data);
        const errors = computed(() => store.state.weather.errors);
        const isLoading = computed(() => store.state.weather.isLoading);
        const slugCity = computed(() => route.params.slug);

        const currentWeather = () => store.dispatch(actionsTypes.getWeather, slugCity.value);

        watch(slugCity, currentWeather);
        onMounted(currentWeather);

        return {
            data,
            errors,
            isLoading,
            slugCity,
            currentWeather,
        };
    },
};
</script>
