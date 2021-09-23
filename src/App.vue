<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
import TheSideBar from './components/layout/TheSideBar.vue';
const default_layout="default";

export default {
  computed:{
    layout(){
      //console.log((this.$route.meta.layout || default_layout) + "-layout");
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  },
  components: {
    TheHeader,
    TheFooter,
    TheSideBar
  }
}
</script>

