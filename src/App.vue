<script >
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import { ref } from "vue";
import { supabase } from './lib/supabase.js';
import store from './store/index.js';

export default {
  components: {
    Footer, Header
  },
  setup() {
    const appReady = ref(null);
    //
    const user = supabase.auth.getUser();

    if (!user) {
      appReady.value = true;
    }

    supabase.auth.onAuthStateChange((_, session) => {
      store.methods.setUser(session);
      appReady.value = true;
    })

    return { appReady };
  },
}
</script>

<template>
  <body>
    <Header></Header>
    <router-view />
    
    <Footer></Footer>
  </body>
  
</template>

<style scoped>

</style>
