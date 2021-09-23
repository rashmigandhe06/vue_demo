import api from '../../api.config.js';
export default {
    getUsers(context, payload) {

        return new Promise((resolve, reject) => {
             api.get('api/people')
                .then(response => {
                    resolve(response);
                    if(response.data){
                        context.commit('setUsers', {
                            data: response.data.results,
                        });
                    }
                })
                .catch(error => {
                    console.log("in catch", error);
                    reject(error);
                })
        });
    },

}
