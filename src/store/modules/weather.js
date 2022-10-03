import weatherApi from '@/api/weather';

const store = {
    data: null,
    isLoading: false,
    errors: null,
};

export const mutationsTypes = {
    getWeatherStart: '[weather] getWeatherStart',
    getWeatherSuccess: '[weather] getWeatherSuccess',
    getWeatherFailed: '[weather] getWeatherFailed',
};

export const actionsTypes = {
    getWeather: '[weather] getWeather',
};

const mutations = {
    [mutationsTypes.getWeatherStart](state) {
        state.isLoading = true;
        state.data = null;
        state.errors = null;
    },
    [mutationsTypes.getWeatherSuccess](state, data) {
        state.isLoading = false;
        state.data = data;
    },
    [mutationsTypes.getWeatherFailed](state, data) {
        state.isLoading = false;
        state.errors = data;
    },
};

const actions = {
    [actionsTypes.getWeather](context, data) {
        return new Promise((resolve) => {
            context.commit(mutationsTypes.getWeatherStart);

            weatherApi
                .getWeather(data)
                .then((response) => {
                    context.commit(mutationsTypes.getWeatherSuccess, response.data);
                    resolve(response.data);
                })
                .catch((errors) => context.commit(mutationsTypes.getWeatherFailed, errors));
        });
    },
};

export default {
    store,
    mutations,
    actions,
};
