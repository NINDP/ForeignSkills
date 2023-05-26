<script setup>
import Button from './Button.vue';
import store from "../store/index.js";
import { ref, onMounted } from 'vue';
import { supabase } from '../lib/supabase';

const loading = ref(true)
const data = ref([]);
const dataLoaded = ref(null);
const nickname = ref('');
const name = ref('');
const surname = ref('');
const number = ref('');
const email = ref('');
const password = ref('');

onMounted(() => {
    getProfile();
})

async function getProfile() {
    try {
        const user = store.state.user;
        const userId = user.id;

        const { data: users, error } = await supabase
            .from('users')
            .select('nickname, name, surname, number, password, email')
            .eq('id', userId)
            .limit(1)
            .single();

        if (data) {
            data.value = users;
            nickname.value = users.nickname
            email.value = users.email
            name.value = users.name
            surname.value = users.surname
            number.value = users.number
            password.value = users.password
            dataLoaded.value = true;
        }
        if (error) throw error;
    }
    catch (error) {
        console.warn(error.message)
    }
}

async function updateProfile() {
    try {
        loading.value = true
        const user = store.state.user;
        const userId = user.id;

        let { error } = await supabase.from('users').upsert({
            id: userId,
            name: name.value,
            surname: surname.value,
            email: email.value,
            nickname: nickname.value,
            number: number.value,
            password: password.value
        })
        alert('Данные успешно обновлены')
        if (error) throw error
    } catch (error) {
        alert(error.message)
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <form @submit.prevent="updateProfile()">
        <div>
            <label for="name">Имя</label>
            <input class="input" type="text" v-model="name" placeholder="Введите имя" />
        </div>

        <div>
            <label>Фамилия</label>
            <input class="input" type="text" v-model="surname" placeholder="Введите фамилию" />
        </div>

        <div>
            <label>Email</label>
            <input class="input" type="text" :value="email" disabled placeholder="Введите почту" />
        </div>

        <div>
            <label>Телефон</label>
            <input class="input" type="text" v-model="number" placeholder="Введите номер" />
        </div>

        <div>
            <label>Nickname</label>
            <input class="input" type="text" v-model="nickname" placeholder="Введите nickname" />
        </div>

        <div>
            <label>Пароль</label>
            <input type="password" disabled class="input" v-model="password" placeholder="*********" />
        </div>
        <Button class="btn_pr" type="submit">Сохранить изменения</Button>
    </form>
</template>

<style scoped>
.btn_pr {
    border-radius: 10px;
    padding: 15px 10px;
    background-color: #6EA0D6;
    font-size: 24px;
    color: white;
    margin: 30px 0px;
    float: right;
    border: 2px solid #AA9F9F;
}

.btn_pr:hover {
    transition: 300ms;
    background-color: #338be9;
}
form {
    margin-top: 100px;
}

div {
    margin-top: 58px;
}

label {
    font-size: 40px;
    margin-right: 30px;
}

.input {
    width: 300px;
    height: 25px;
    border: 2px solid #AA9F9F;
    border-radius: 5px;
    float: right;
    font-size: 24px;
}
</style>

