<template>
  <the-header></the-header>

  <div class="wrapper">
    <div class="container">
      <div class="row">
        <div class="module span12 ">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <!--/.container-->
  </div>
  <the-footer></the-footer>

</template>

<script>
import TheHeader from '../components/layout/TheHeader.vue';
import TheFooter from '../components/layout/TheFooter.vue';

export default {
  name: 'NoSidebar',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

