import { createStore } from 'vuex';
import userModule from '../store/user/index.js';
import PlanetModule from '../store/planet/index.js';



const store = createStore({
    modules: {
        users: userModule,
        planet: PlanetModule,
    }

});

export default store;
