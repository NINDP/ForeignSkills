<template>
<Formexm :p="form.p" :h1="form.h1" :button="form.button" v-for="form in forms" v-bind:key="form.id"></Formexm>
</template>

<script>
import Formexm from './Formexm.vue';

export default {
    components: {
        Formexm
    },
    data(){
        return {
            forms :[
                {
                    id: 1,
                    h1: "Hello",
                    p: "fllflf", 
                    button: "fpfpf"
                }
            ]
        }
    }
}
</script>
