<template>
    <div class="navbar navbar-fixed-top">
        <div class="navbar-inner">
            <div class="container">
                <a class="btn btn-navbar" data-toggle="collapse" data-target=".navbar-inverse-collapse">
                    <i class="icon-reorder shaded"></i></a><span class="brand" href="index.html">My Product </span>
                <div class="nav-collapse collapse navbar-inverse-collapse">
                    <ul class="nav pull-right">
                        <li><router-link to="/home" active-link="active">Home</router-link></li>
                      <li><router-link to="/users" active-link="active">Users</router-link></li>
                        <li><router-link to="/about" active-link="active">About</router-link></li>
                        <li><router-link to="/contact" active-link="active">Contact </router-link></li>
                    </ul>
                </div>
                <!-- /.nav-collapse -->
            </div>
        </div>
        <!-- /navbar-inner -->
    </div>
</template>


<script>

export default {
    mounted() {
        if(sessionStorage.getItem('user')){
            this.loggedIn = true;
        }
    },
    computed: {
        isLoggedInVal () {
            if(this.$store.state.users.isLoggedIn || sessionStorage.getItem('user') !=null){
                if(sessionStorage.getItem('user')){
                    return true;
                }
            }

        }
    },
    methods:{
        logoutMe(){
            this.$store.dispatch("logout")
                .then(resp => {
                        this.$router.push('/');
                })
                .catch(error => {
                    this.$router.push('/');
                });
        }
    }
}
</script>
<style scoped>

.router-link-exact-active{
    color: blue !important;
}

</style>
