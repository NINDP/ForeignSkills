<script>
import Link from './Link.vue';
import Button from './Button.vue';
import store from "../store/index.js";
import { computed } from "vue";
import { supabase } from "../lib/supabase";
import { useRouter } from "vue-router";


export default {
    components: {
        Link,
        Button,
    },

    setup() {
        const user = computed(() => store.state.user);
        const router = useRouter();
        const logout = async () => {
            await supabase.auth.signOut();
            router.push({ name: "Main" });
        };
        return { logout, user };
    },

}
</script>

<template>
    <header class="header">
        <section v-if="user" class="auth">
            <router-link class='logo' active-class="active" to="/student" exact>ForeignSkill</router-link>
            <router-link class='link' active-class="active" to="/tests">Тесты</router-link>
            <router-link class='link' active-class="active" to="/cards">Карточки</router-link>
            <router-link class='link' active-class="active" to="/student">Личный кабинет</router-link>
            <button class="btn_signout" @click="logout">Выход</button>
        </section>
        <section v-if="!user">
            <router-link class='logo no_auth' to="/" exact>ForeignSkill</router-link>
            <div class="left_head">
                <router-link class='btn_signout' to="/login">
                    ВОЙТИ
                </router-link>
                <router-link class='btn_login' to="/sign">
                    РЕГИСТРАЦИЯ
                </router-link>
            </div>

        </section>
    </header>
</template>

<style scoped> header {
     display: inline;
 }

 .left_head {
     float: right;
     font-size: 35px;
     padding: 50px 300px;
 }

 .auth,
 .no_auth {
     padding: 30px 200px;
     font-size: 30px;
 }

 .auth {
     background-color: #5C95CD;
 }

 .no_auth {
     display: inline;
     float: left;
 }

 .logo {
     font-size: 45px;
     display: inline;
     color: #ffffff;
     margin-right: 80px;
     text-decoration: none;
     float: left;
 }

 .link {
     text-decoration: none;
     margin-left: 80px;
     color: white;
     padding: 20px 10px;
 }

 .link:hover {
     background-color: #bbcae2;
     border-radius: 10px;
     /* color: #000; */
 }

 .active {
     border-bottom: 1px solid #ffffff;
 }

 .btn_signout {
     text-decoration: none;
     background-color: #fff;
     color: black;
     font-size: 25px;
     border: 1px solid #6EA0D6;
     border-radius: 30px;
     padding: 15px 40px;
     font-weight: 600;
     cursor: pointer;
     margin-left: 60px;
 }

  .btn_signout:hover{
    background-color: #f7f7f7;
  }

 .btn_login {
     text-decoration: none;
     background-color: #6EA0D6;
     color: rgb(255, 255, 255);
     font-size: 25px;
     border: 1px solid #ffffff;
     border-radius: 30px;
     padding: 15px 40px;
     font-weight: 600;
     cursor: pointer;
     margin-left: 40px;
 }

  .btn_login:hover{
    background-color: #7dade0;
  }

 /* .btn_signout {
     text-decoration: none;
     background-color: #fff;
     color: black;
     font-size: 25px;
     border: #5C95CD;
     border-radius: 15px;
     padding: 15px 30px;
     font-weight: 600;
     cursor: pointer;
     margin-left: 60px;
 } */
</style>