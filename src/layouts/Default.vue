<template>
  <the-header></the-header>


  <div class="wrapper">
    <div class="container-fluid">
      <div class="row">
        <div class="span3">
          <the-side-bar></the-side-bar>
        </div>
        <!--/.span3-->
        <div class="span11">
          <div class="content">

            <div class="module">

              <div class="module-body">
                <router-view></router-view>
              </div>
            </div><!--/.module-->
          </div><!--/.content-->
        </div><!--/.span9-->

      </div>
    </div>
    <!--/.container-->
  </div>
  <the-footer></the-footer>

</template>
<script>
import TheHeader from '../components/layout/TheHeader.vue';
import TheFooter from '../components/layout/TheFooter.vue';
import TheSideBar from "../components/layout/TheSideBar.vue";

export default {
  name: 'Default',
  components: {
    TheHeader,
    TheFooter,
    TheSideBar
  }
}
</script>

