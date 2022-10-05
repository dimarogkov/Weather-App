<template>
    <section class="section info">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 info__col">
                    <div class="info__block">
                        <div class="info__title">
                            <div class="h3 title">Wind <i class="las la-wind"></i></div>
                        </div>
                        <ul class="info__items">
                            <li v-if="data.wind.speed">
                                <p>Speed -</p>
                                <span>{{ data.wind.speed }}</span>
                            </li>
                            <li v-if="data.wind.deg">
                                <p>Deg -</p>
                                <span>{{ data.wind.deg }}</span>
                            </li>
                            <li v-if="data.wind.gust">
                                <p>Gust -</p>
                                <span>{{ data.wind.gust }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-8 info__col">
                    <div class="info__block">
                        <div class="info__title">
                            <div class="h3 title">Main <i class="las la-temperature-low"></i></div>
                        </div>
                        <ul class="info__items style-2">
                            <li v-if="data.main.temp_min">
                                <p>Temp Min -</p>
                                <span>{{ Math.round(data.main.temp_min) }}°</span>
                            </li>
                            <li v-if="data.main.temp_max">
                                <p>Temp Max -</p>
                                <span>{{ Math.round(data.main.temp_max) }}°</span>
                            </li>
                            <li v-if="data.main.pressure">
                                <p>Pressure -</p>
                                <span>{{ data.main.pressure }}</span>
                            </li>
                            <li v-if="data.main.humidity">
                                <p>Humidity -</p>
                                <span>{{ data.main.humidity }}</span>
                            </li>
                            <li v-if="data.main.sea_level">
                                <p>Sea Level -</p>
                                <span>{{ data.main.sea_level }}</span>
                            </li>
                            <li v-if="data.main.grnd_level">
                                <p>Grnd Level -</p>
                                <span>{{ data.main.grnd_level }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'wa-info',
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style>
.info {
    position: relative;
    width: 100%;
    margin-bottom: 50px;
}
.info__block {
    position: relative;
    width: 100%;
    border-radius: 10px;
    border: 1px solid var(--color-grey);
    overflow: hidden;
}
.info__title {
    position: relative;
    width: 100%;
    padding: 15px;
    color: var(--color-theme);
    border-bottom: 1px solid var(--color-grey);
}
.info__title .las {
    margin-left: 5px;
}
.info__items {
    position: relative;
    width: 100%;
}
.info__items li {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 17px;
    padding: 15px;
    border-bottom: 1px solid var(--color-grey);
}
.info__items li:last-child {
    border-bottom: none;
}
.info__items li p {
    font-weight: 500;
    color: var(--color-theme);
    margin-right: 10px;
}
.info__items.style-2 {
    display: flex;
    flex-wrap: wrap;
}
.info__items.style-2 li {
    width: 50%;
}
.info__items.style-2 li:nth-child(2n) {
    border-left: 1px solid var(--color-grey);
}
.info__items.style-2 li:nth-last-child(2) {
    border-bottom: none;
}
@media (max-width: 1199px) {
    .info {
        margin-bottom: 40px;
    }
}
@media (max-width: 991px) {
    .info__col {
        margin-bottom: 20px;
    }
    .info__col:last-child {
        margin-bottom: 0;
    }
}
@media (max-width: 767px) {
    .info {
        margin-bottom: 30px;
    }
}
@media (max-width: 575px) {
    .info {
        margin-bottom: 20px;
    }
    .info__items li {
        font-size: 16px;
    }
    .info__items.style-2 li {
        width: 100%;
    }
    .info__items.style-2 li:nth-child(2n) {
        border-left: none;
    }
    .info__items.style-2 li:nth-last-child(2) {
        border-bottom: 1px solid var(--color-grey);
    }
}
</style>
