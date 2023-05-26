<script>
export default {
    name: 'Test',
    props: {
        id: Number,
        img: String,
        name: String,
        count: Number,
    },
    
};
</script>

<template>
    <section class="tests">
    <router-link :to="{ name: 'testPage', params: { id } }" class="test" >
        <div class="test__top">
            <div class="img_tests">
                <img class="img_test" :src="img"/>
            </div>
            <div class="test_content">
                <!-- {{ id }} -->
                <p>{{ name }}</p>
                <hr class="line_test" width="200px" />
                <p> {{ count }} вопрос(ов)</p>
            </div>
        </div>
        <div class="test__bottom">
            <!-- <hr class="line" width="100%" /> -->
        </div>
    </router-link>
    </section>
</template>

<style scoped>

.tests{
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    grid-row: row;
}
.line_test {
    margin: 0px;
    border: 1px solid rgb(212, 212, 212);
}

.test {
    margin: 0px 30px 70px;
    padding: 10px;
    width: 520px;
    height: 215px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    transition: 0.2s;
    position: relative;
    color: black;
    text-decoration: none;
    border: 2px solid #AA9F9F ;
}

.test_content {
    text-align: left;
    font-size: 24px;
    margin: 10px 20px;
}

.test:hover {
    box-shadow: 4px 8px 16px rgba(103, 143, 230, 0.2);
}

.test__top {
    display: flex;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
}

.img_tests {
    text-align: left;
    /* width: 250px; */
}

.img_test {
    margin-top: 30px;
    text-align: left;
    width: 200px;
    height: 150px;
    object-fit: contain;
    transition: 0.2s;
}

.test__bottom {
    display: flex;
    flex-direction: column;
    padding: 10px;
}

.tegs {
    font-size: 24px;
}

.teg {
    background-color: #EEEEEE;
    padding: 10px 30px;
    border-radius: 30px;
    border: 1px solid #948A8A;
    display: inline-block;
    margin-left: 50px;
}
</style>