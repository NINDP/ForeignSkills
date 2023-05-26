<template>
        <div v-if="isOpen" class="backdrop" @click="close">
            <div class="popup" @click.stop>
                <h1>Регистрация</h1>
                <h2>
                    Имя
                </h2>
                <input placeholder="name" />
                <h2>
                    Почта
                </h2>
                <input placeholder="email" />
                <h2>
                    Логин
                </h2>
                <input placeholder="login" />
                <h2>
                    Пароль
                </h2>
                <input placeholder="password" />
                <p>Если у вас уже есть аккаунт
                    <Link @click="fff" class="link">войдите</Link>
                </p>
                <LogIn ref="confirmationPopup"></LogIn>
                <!-- <Button @click="close" class="button">ЗАРЕГИСТРИРОВАТЬСЯ</Button> -->
                <Link href="/cards" class="button">ЗАРЕГИСТРИРОВАТЬСЯ</Link>
            </div>
        </div>
</template>

<script>
import LogIn from './views/LogIn.vue';
import Button from './Button.vue';
import Link from './Link.vue';

export default {
    components: {
        Button,
        Link,
    },

    data() {
        return { isOpen: false };
    },

    methods: {
        open() {
            this.isOpen = true;
        },

        close() {
            this.isOpen = false;
        },

        fff1() {

        },

        async fff() {

            await this.$refs.confirmationPopup.open();
            // await this.$refs.confirmationPopup.open();
            // await this.close();
        }
    },
};
</script>

<style scoped>
.link {
    margin: 0px 10px;
    color: #6384f0;
}

.popup {
    top: 100px;
    padding: 40px;
    left: 50%;
    transform: translateX(-50%);
    position: fixed;
    z-index: 101;
    background-color: white;
    border-radius: 10px;
    width: 500px;
    /* height: 300px; */
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

.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 100;
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
