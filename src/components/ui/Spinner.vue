<template>
  <div class="loader" v-if="loading">
    <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
  </div>
</template>

<script>

import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  data () {

  },
  props:["loading"],

  components: {
    PulseLoader,
  },
}
</script>
<style scoped>
.loader{
  position: fixed;
  left: 50%;
  top: 35%;
  z-index: 1000;
  height: 31px;
  width: 100%;
}

</style>
