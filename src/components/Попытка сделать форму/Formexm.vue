<template>
    <h1>{{ h1 }}</h1>
    <Input />
    <Button>{{ button }}</Button>
</template>

<script>
import Input from '../Input.vue';
import Button from '../Button.vue';

export default {
    components: {
        Input, Button
    },
    props: {
        id: Number,
        p: String,
        h1: String,
        button: String
    }
}
</script>