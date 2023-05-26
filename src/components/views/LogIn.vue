<template>
    <section class="contentt">
        <section class="content">
            <div v-if="errorMsg">
                <p>{{ errorMsg }}</p>
            </div>
            <section class="center">

                <form @submit.prevent="login" class="popup">
                    <h1>Вход</h1>
                    <h2>
                        Email
                    </h2>
                    <input placeholder="email" required id="email" v-model="email" />
                    <h2>
                        Пароль
                    </h2>
                    <input type="password" required id="password" v-model="password" placeholder="password" />
                    <p>Если у вас ещё нет аккаунта
                        <router-link to="/sign" class="link">зарегистируйтесь</router-link >
                    </p>
                    <!-- <Button @click="close" class="button">ВХОД</Button> -->
                    <Button type="submit" class="button">ВХОД</Button>
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
        const email = ref(null);
        const password = ref(null);
        const errorMsg = ref(null);

        const login = async () => {
            try {
                const { error } = await supabase.auth.signInWithPassword({
                    email: email.value,
                    password: password.value
                })
                if (error) throw error;
                router.push({ name: 'Student' });
            }
            catch (error) {
                errorMsg.value = `Error: ${error.message}`;
                setTimeout(() => {
                    errorMsg.value = null;
                }, 5000)
            }
        }

        return {
            email, password, errorMsg, login
        }
    }
};
</script>

<style scoped>
.line_login {
    border: 2px solid white;
    margin: 0px;
}

.contentt {
    background: url('src/components/icons/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
}


.link {
    color: #6384f0;
}

.popup {
    padding: 40px;
    background-color: white;
    border-radius: 10px;
    width: 500px;
}

.popup h2 {
    font-size: 33px;
    text-align: left;
    font-weight: normal;
}

.popup p {
    font-size: 24px;
}

.popup input {
    width: 500px;
    height: 30px;
    font-size: 30px;
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
    font-size: 18px;
    background-color: #6EA0D6;
    color: white;
    border: 2px solid white;
    border-radius: 30px;
    padding: 20px 100px;
}
</style>
