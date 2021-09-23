export default {
    setPlanetData(state, planetData, planetId) {
        let PlanetObj = {
            [planetData.planet_id]: planetData.data
        };
        state.planet[planetData.planet_id] = planetData.data;
    },
}
