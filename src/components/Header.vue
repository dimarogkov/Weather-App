<template>
    <header class="header">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="header__block">
                        <router-link :to="{name: 'home'}" class="header__logo">
                            Weather App
                            <i class="las la-cloud"></i>
                        </router-link>

                        <form class="header__form" @submit.prevent="onSubmit">
                            <input type="text" placeholder="Enter city name..." v-model="city" required />
                            <button type="submit" :disabled="isLoading">
                                <i class="las la-search"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="header__margin"></div>
</template>

<script>
import {useStore} from 'vuex';
import {useRouter} from 'vue-router/dist/vue-router';
import {ref, computed} from 'vue';

export default {
    name: 'wa-header',
    emits: ['update:modelValue'],
    setup() {
        const store = useStore();
        const router = useRouter();

        const city = ref('');
        const isLoading = computed(() => store.state.weather.isLoading);
        const onSubmit = () => {
            router.push({name: 'weather', params: {slug: city.value.toLowerCase()}});
            city.value = '';
        };

        return {
            city,
            isLoading,
            onSubmit,
        };
    },
};
</script>

<style>
.header {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--header-height);
    background-color: var(--color-white);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
}
.header__margin {
    height: var(--header-height);
}
.header .container,
.header .row {
    height: 100%;
}
.header__block {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
}
.header__logo {
    position: relative;
    display: flex;
    align-items: center;
    width: fit-content;
    font-size: 26px;
    font-weight: 700;
    color: var(--color-theme);
    transition: all 0.4s;
}
.header__logo:hover {
    opacity: 0.7;
}
.header__logo .las {
    font-size: 32px;
    margin-left: 10px;
}
.header__form {
    position: relative;
    display: flex;
    width: fit-content;
    height: 50px;
    border-radius: 10px;
    border: 1px solid var(--color-grey);
    overflow: hidden;
}
.header__form input {
    position: relative;
    display: block;
    width: 220px;
    height: 100%;
    padding: 0 20px;
    transition: all 0.4s;
}
.header__form button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 100%;
    font-size: 20px;
    color: var(--color-black);
    cursor: pointer;
    border-radius: 0 10px 10px 0;
    background-color: transparent;
}
@media (max-width: 1199px) {
    .header__logo {
        font-size: 24px;
    }
    .header__logo .las {
        font-size: 30px;
    }
}
@media (max-width: 767px) {
    .header__logo {
        font-size: 22px;
    }
    .header__logo .las {
        font-size: 28px;
    }
    .header__form {
        height: 44px;
    }
    .header__form input {
        width: 200px;
    }
    .header__form button {
        width: 44px;
    }
}
@media (max-width: 575px) {
    .header__logo {
        justify-content: center;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: 1px solid var(--color-theme);
        font-size: 0;
    }
    .header__logo .las {
        margin: 0;
    }
    .header__form input {
        width: 180px;
    }
}
</style>
