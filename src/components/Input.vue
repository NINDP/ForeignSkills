<template>
    <section class="inputs">
    <slot></slot>
    <input class="input" type="text"/>
    </section>
</template>

<style>
.inputs{
    margin-top: 30px;
}

.input{
    width: 500px;
    font-size: 24px;
    border-radius: 5px;
}
</style>