<template>
  <tr>
    <td>{{ name }}</td>
    <td>{{ parseInt(height) }}</td>
    <td>{{ mass }}</td>
    <td>{{ format_date(created) }}</td>
    <td>{{ format_date(edited) }}</td>
    <td><button type="button" class="btn" @click="showModal"  > {{ getPlanetName }}</button></td>
    <pop-up-model v-show="isModalVisible" :data="planetData" title="Planet Information" @close-me="closeMe"></pop-up-model>
  </tr>
</template>
<spinner :loading="loading"></spinner>
<script>
import moment from 'moment'

import popUpModel from '../components/ui/popUpModel.vue'
import Spinner from '../components/ui/Spinner.vue'


export default {
  components:{
    popUpModel,
    Spinner
  },
  props: {
    name: String,
    height: Number,
    mass: Number,
    created: String,
    edited: String,
    planet_url: String
  },

  data() {
    return {
      isModalVisible: false,
      users: null,
      loading: false,
      success: 0,
      planet_id: null,
      planet_name: null,
    }
  },

  methods: {
    format_date(value) {
      if (value) {
        return moment(String(value)).format('YYYY/MM/DD')
      }
    },

    showModal(){
      this.isModalVisible=true;
    },

    closeMe() {
      this.isModalVisible = false;
    },

    getPlanetDetails(planetId) {
      this.loading=true;
      this.$store.dispatch('planet/getPlanetDetails', {planetId: planetId})
          .then(resp => {
            this.planet_name = resp.data.name;
            this.loading=false;
          })
          .catch(error => {

          });
    }
  },

  computed: {
    getPlanetName() {
      let planetUrlArr = this.planet_url.split("/");
      this.planet_id = planetUrlArr[planetUrlArr.length - 2];
      this.getPlanetDetails(this.planet_id);
      return this.planet_name;
    },

    planetData() {
      let planetInfo = this.$store.getters['planet/planet'][this.planet_id];
      let str="";
      if(planetInfo !=undefined){
         str = "<div class='data-div'><div>Planet Name:" +planetInfo.name + "</div>" +
             "<div>" + "Diameter:" +planetInfo.diameter + "</div>" +
             "<div>" + "Population:" +planetInfo.population + "</div>" +
        "<div>" + "Climate: " + planetInfo.climate + "</div></div>";
      }
      return str;
    },

  },

  created() {

  }


}
</script>

<style scoped>
.data-div{
  padding:10px;
  font-size:12px !important;
}
.data-div div{
  padding:10px;

}
</style>
