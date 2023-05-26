<template>
    <section class="contentt">
        <section class="content">
            <section class="center">
                <div v-if="errorMsg">
                    <p>{{ errorMsg }}</p>
                </div>
                <form class="popup" @submit.prevent="register">
                    <h1>Регистрация</h1>
                        <h2>
                            Nickname
                        </h2>
                        <input placeholder="nickname" required id="nickname" v-model="nickname" />
                        <h2>
                            Email
                        </h2>
                        <input placeholder="email" required id="email" v-model="email" />
                        <h2>
                            Пароль
                        </h2>
                        <input type="password" required id="password" v-model="password" placeholder="password" />

                        <h2 for="confirmPassword">Подтвердите пароль</h2>
                        <input type="password" placeholder="Подтвердите пароль" required id="confirmPassword"
                            v-model="confirmPassword">
                        <p>Если у вас уже есть аккаунт
                            <router-link to="/login" class="link">войдите</router-link>
                        </p>
                        <!-- <Button @click="close" class="button">ЗАРЕГИСТРИРОВАТЬСЯ</Button> -->
                        <Button type="submit" class="button"> ЗАРЕГИСТРИРОВАТЬСЯ</Button>
                </form>
            </section>
        </section>
    </section>
    <hr class="line_login" />
</template>

<script>
import Button from '../Button.vue';
import Link from '../Link.vue';
import { ref } from 'vue'
import { supabase } from '../../lib/supabase.js'
import { useRouter } from 'vue-router'



export default {
    components: {
        Button,
        Link,
    },
    setup() {
        const router = useRouter();
        const name = ref(null);
        const surname = ref(null);
        const nickname = ref(null);
        const email = ref(null);
        const password = ref(null);
        const confirmPassword = ref(null);
        const errorMsg = ref(null);

        const register = async () => {
            if (password.value === confirmPassword.value) {
                try {
                    const { data, error } = await supabase.auth.signUp({
                        email: email.value,
                        password: password.value
                    });
                    if (data) {
                        const user = data.user;

                        const { error } = await supabase.from("users").insert({
                            id: user.id,
                            email: user.email,
                            password: password.value,
                            nickname: nickname.value,
                        });

                        if (error) throw error;

                        router.push({ name: "Login" })
                    }
                }
                catch (error) {
                    errorMsg.value = error.message;
                    setTimeout(() => {
                        errorMsg.value = null;
                    }, 5000)
                }
                return;
            }
            errorMsg = "Error: Пароли не совпадают";
            setTimeout(() => {
                errorMsg.value = null;
            }, 5000)
        };


        return {
            email, password, nickname, surname, name, confirmPassword, errorMsg, register
        }
    }
};
</script>

<style scoped>
.line_login {
    border: 2px solid white;
    margin: 0px;
}

.link {
    color: #6384f0;
}

.popup {
    padding: 40px;
    background-color: white;
    border-radius: 10px;
}

.popup h2 {
    font-size: 30px;
    text-align: left;
    font-weight: normal;
}

.popup p {
    font-size: 24px;
}

.popup input {
    width: 500px;
    height: 30px;
    font-size: 20px;
    border: none;
    border-bottom: 1px solid #000;
}

.popup h1 {
    text-align: center;
    margin: 0;
    font-size: 40px;
    font-weight: normal;
}

.button {
    font-size: 16px;
    background-color: #6EA0D6;
    color: white;
    border: 2px solid white;
    border-radius: 30px;
    padding: 20px 100px;
}
</style>
