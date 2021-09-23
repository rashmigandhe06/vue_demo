import api from '../../api.config.js';

export default {
    getPlanetDetails(context, PlanetData) {

        return new Promise((resolve, reject) => {
            api.get('api/planets/' + PlanetData.planetId)
                .then(response => {
                    resolve(response, PlanetData.planetId);
                    if (response.data) {
                        context.commit('setPlanetData', {
                            data: response.data,
                            planet_id: PlanetData.planetId
                        });
                    }
                })
                .catch(error => {

                    reject(error);
                })
        });
    },

}
