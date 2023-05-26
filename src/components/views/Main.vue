<script>
import Button from "../Button.vue";
export default {
    components: {
        Button,
    },
}
</script>

<template>
    <section class="main">
        <h1 class="title_main">Изучайте языки бесплатно,<br> эффективно и увлекательно! </h1>
        <router-link to="/sign">
            <Button class="btn_start">Начать изучать!</Button>
        </router-link>
    </section>
    <hr class="line_top" color="white" />
    <p class="text">Изучение иностранных языков дает огромное количество преимуществ: </p>
    <section class="contentMain">
        <hr class="line" color="grey" />
        <div class="title-top">
            <h2 class="left">
                Cвобода общения
            </h2>
            <h2 class="right">
                Карьерные перспективы
            </h2>
        </div>
        <img class="img img_lang" src="../icons/английский.jpg" />
        <h2>
            Образование и международный опыт
        </h2>

        <hr class="line_two" color="grey" />
    </section>
    <section class="three">
        <div class="content_three">
            <img class="img_test" src="../icons/test.png" />
            <div class="text_three">
                <h2 class="title_two">
                    Проверьте свои знания с ForeignSkills
                </h2>
                <p class="parag_two">
                    На нашем сайте вы можете проходить различные тесты для проверки уровня знаний/повторения материала
                </p>
            </div>

        </div>
        <hr class="line_three" color="grey" />

    </section>
    <section class="three">
        <div class="content_three">
            <div class="text_four">
                <h2 class="title_two">
                    Проверьте свои знания с ForeignSkills
                </h2>
                <p class="parag_two">
                    На нашем сайте вы можете проходить различные тесты для проверки уровня знаний/повторения материала
                </p>
            </div>
            <img class="img_card " src="../icons/cards.png" />
        </div>
        <hr class="line_three" color="grey" />

    </section>
</template>

<style scoped>
.main {
    background: url('src/components/icons/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    margin: 0px;
    text-align: center;
    z-index: 100;
}

.title_main {
    margin: 0px;
    padding-top: 17%;
    text-align: center;
    color: white;
    margin-bottom: 80px;
    font-size: 64px;
}

.btn_start {
    font-size: 60px;
    color: #7EAAD6;
    border-radius: 20px;
    border: none;
    padding: 30px 90px;
    background-color: #fff;
}

.btn_start:hover {
    transition: 800ms;
    color: #ffffff;
    background-color: #7EAAD6;
    border: 1px solid white;
}

.line_top {
    margin: 0px;
}

.text {
    text-align: center;
    background: #7EAAD6;
    height: 60px;
    margin: 0;
    padding-top: 40px;
    color: white;
    font-weight: medium;
    font-size: 25px;
}

.line_two {
    margin-top: 20px;
}

.contentMain {
    text-align: center;
    margin: 0px 100px;
    max-width: 1920px;
}

.line {
    margin: 20px 0px 100px 0px;
}

.line_two {
    margin: 115px 0px;
}

.img_lang {
    margin: 50px 100px;
    text-align: center;
}

h2 {
    font-size: 40px;
}

.left {
    float: left;
}

.right {
    float: right;
}

.img {
    width: 900px;
    height: 600px;
    border-radius: 20px;
}

.three {
    text-align: center;
    margin: 0px 100px;
    max-width: 1920px;
}

.content_three {
    text-align: center;
    text-align: left;
    display: inline-flex;
    margin: auto;

}

.title_two {
    font-size: 40px;
    text-align: right;
}

.img_test {
    margin-right: 86px;
    width: 600px;
    height: 300px;
}

.img_card {
    margin-left: 86px;
    width: 600px;
    height: 300px;
}

.parag_two {
    font-size: 30px;
    text-align: right;
}

.line_three {
    margin: 115px 0px;
}
</style>