<script setup>
import Form from '../Form.vue';

</script>

<template>

    <section class="students">
        <h1 class="setting">Настройки профиля</h1>
        <hr class="line_student" />
        <section class="profile">
                 <img class="photo_profile" src="../icons/logob.png" />
            <section class="profile_right">
                <Form></Form>
            </section>
        </section>
        <hr class="line" />
    </section>
</template>

<style scoped>

.photo_profile{
    width: 500px;
    height: 150px;
    margin-top: 300px;
    justify-content: center;
}

p {
    font-size: 40px;
}

.students {
    border: 2px solid #AA9F9F;
    margin: 100px;
    border-radius: 40px;
}

.profile {
    display: flex;
    justify-content: space-around;
}

.setting {
    text-align: center;
}

.line_student {
    border: 1px solid #C6BBBB;
}

.profile_left {
    display: inline;
    text-align: center;
}

.photo_profile {
    display: flex;
}

.button_profile {
    margin-top: 45px;
    font-size: 30px;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid black;
    cursor: pointer;
    border: 2px solid #AA9F9F;
    width: 300px;
    height: 40px;
}

.button_profile:hover {
    transition: 400ms;
    font-size: 35px;
    width: 330px;
    height: 45px;
}


.exit {
    border-radius: 10px;
    width: 250px;
    height: 60px;
    background-color: #E85353;
    font-size: 24px;
    color: white;
    margin: 30px 0px;
    border: 2px solid #AA9F9F;
}

.exit:hover {
    transition: 300ms;
    background-color: #f03b3b;
}

.profile_bottom {
    text-align: right;
    margin-right: 60px
}
</style>