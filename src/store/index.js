import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index.js';

const store = createStore({
    data() {
        return {
            apiURL: process.env.VUE_APP_ROOT_API
        }
    },
    modules: {
        coaches: coachesModule,
        requests: requestsModule,
    },
    // dummy user id here
    state() {
        return {
            userId: 'c3'
        };
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
});

export default store;