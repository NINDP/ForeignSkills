<template>
    <div class="inputы">
    <slot></slot>
    <input class="input" type="text"/>
    </div>
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