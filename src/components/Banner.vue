<template>
    <section class="section banner">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div v-if="errors">This city is not find in the database, try again</div>

                    <div class="banner__block" v-if="data">
                        <div>Banner</div>

                        <div>
                            <div>{{ data.name }} / {{ data.sys.country }}</div>
                            <div>{{ moment(new Date()).format('dddd MMMM YY') }}</div>
                            <div>{{ Math.round(data.main.temp) }}°</div>
                            <div>
                                Min - {{ Math.round(data.main.temp_min) }}° Max - {{ Math.round(data.main.temp_max) }}°
                            </div>
                            <div>{{ data.weather[0].main }} / {{ data.weather[0].description }}</div>
                        </div>
                    </div>
                    <div class="banner__info" v-else>Enter the city</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import moment from 'moment';

export default {
    name: 'wa-banner',
    data() {
        return {
            moment,
        };
    },
    props: {
        errors: {
            type: String,
            required: false,
        },
        data: {
            type: Object,
            required: false,
        },
    },
};
</script>
