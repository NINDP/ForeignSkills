<script>
export default {
    name: 'Card',
    props: {
        name: String,
        translation: String
    },
    data() {
        return {
            on: true,
            clicked: false,
            rotationDuration: 60,
        }
    },
    methods: {
        rotate() {
            setTimeout(() => this.clicked = !this.clicked, this.rotationDuration);
            this.on = !this.on;
            this.clicked = !this.clicked
        }
    }
};
</script>

<template>
    <div :style="`--rotation-duration: ${rotationDuration}ms`" :class="{ clicked }" @click="rotate" name="mode-fade"
        mode="out-in" key="front" v-if="on" class="card">
        <div class="card_content">
            <p class="name">{{ name }}</p>
            <p class="ps">Кликните по карточке, чтобы увидеть перевод</p>
        </div>
    </div>

    <div :class="{ clicked }" @click="rotate" key="back" v-else class="card" to="/cardFamily">
        <div :class="{ clickedText }" class="card_content">
            <p class="translation"> {{ translation }}</p>
            <p class="ps">Кликните по карточке, чтобы увидеть перевод</p>
        </div>
    </div>
</template>

<style scoped>
.clickedText {
    transform: rotate(-360deg);
}

.clicked {
    transform: rotateX(100deg);
    backface-visibility: hidden;
}

.card {
    width: 500px;
    height: 315px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    border: 1px solid #AA9F9F;
    transition: 0.2s;
    position: relative;
    margin: 0px 50px 70px;
    color: black;
    cursor: pointer;
}


.card_content {
    display: inline;
    text-align: center;
    margin: 20px 40px;
}

.name {
    vertical-align: middle;
    font-size: 60px;
}

.card:hover {
    box-shadow: 4px 8px 16px rgba(103, 143, 230, 0.2);
}

.ps {
    font-size: 20px;
    color: #AA9F9F;
}


.translation {
    font-size: 60px;
}
</style>