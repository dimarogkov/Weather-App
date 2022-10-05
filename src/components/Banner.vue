<template>
    <section class="section banner">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="banner__block">
                        <span class="banner__img">
                            <img :src="weatherIcon" :alt="data.weather[0].icon" />
                        </span>
                        <div>
                            <div class="text size-2">
                                {{ data.weather[0].main }} , {{ data.weather[0].description }}
                            </div>
                            <div class="h1 title">{{ Math.round(data.main.temp) }}°</div>
                            <div class="h4">{{ data.name }} , {{ data.sys.country }}</div>
                        </div>
                        <div class="text size-2 text-right">
                            <div>{{ moment(new Date()).format('LT') }}</div>
                            <div>{{ moment(new Date()).format('dddd MMMM YY') }}</div>
                        </div>
                    </div>
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
        data: {
            type: Object,
            required: false,
        },
    },
    computed: {
        weatherIcon() {
            return `http://openweathermap.org/img/wn/${this.data.weather[0].icon}@2x.png`;
        },
    },
};
</script>

<style>
.banner {
    position: relative;
    width: 100%;
    margin: 50px 0;
}
.banner__info,
.banner__block {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 300px;
    border-radius: 20px;
    background-image: var(--color-theme-grad);
    padding: 40px;
}
.banner__info .title {
    font-weight: 500;
    color: var(--color-white);
}
.banner__block {
    justify-content: space-between;
    align-items: flex-end;
    color: var(--color-white);
}
.banner__img {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid var(--color-white);
}
.banner__img img {
    position: relative;
    width: 100%;
    height: 100%;
}
.banner__block div {
    position: relative;
}
.banner__block div * {
    margin-bottom: 5px;
}
.banner__block div *:last-child {
    margin-bottom: 0;
}
.banner__block .text {
    color: var(--color-white);
    text-transform: capitalize;
}
.banner__block .title {
    font-size: 72px;
    font-weight: 300;
    margin: 10px 0;
}
@media (max-width: 1199px) {
    .banner {
        margin: 40px 0;
    }
    .banner__info,
    .banner__block {
        padding: 30px;
    }
    .banner__block .title {
        font-size: 68px;
    }
}
@media (max-width: 767px) {
    .banner {
        margin: 30px 0;
    }
    .banner__info,
    .banner__block {
        height: 270px;
        padding: 25px;
    }
    .banner__img {
        width: 90px;
        height: 90px;
    }
    .banner__block .title {
        font-size: 64px;
    }
}
@media (max-width: 575px) {
    .banner {
        margin: 20px 0;
    }
    .banner__info,
    .banner__block {
        height: 250px;
        padding: 20px;
    }
    .banner__img {
        top: 15px;
        right: 15px;
        width: 80px;
        height: 80px;
    }
    .banner__block .title {
        font-size: 56px;
    }
}
</style>
