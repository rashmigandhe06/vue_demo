<template>
    <div v-show="msg" class="msg" :class="flag ? 'success' : 'error'" v-html="createMsg"></div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader";

export default {
    data () {

    },
    props:["msg", "flag"],

    computed:{

        createMsg(){
            if(typeof this.msg=="string"){
                 return this.msg;
            }
            if(typeof this.msg=="object"){
                let str="";
                for (var key in this.msg) {
                    if (this.msg.hasOwnProperty(key)) {
                      str+= key + ": " + this.msg[key] + "<br>";
                    }
                }
                return str;
            }

        }
    },

}
</script>

<style scoped>
.msg{
    padding:10px;
}
.error{
    color:red;
}

.success{
    color:green;
}

</style>
