<script setup>
import Test from '../Test.vue';
import Link from '../Link.vue';
import store from '../../store'
import { ref, onMounted, computed } from 'vue';
import { supabase } from '../../lib/supabase.js';

const sortedTests = []
const rubrics = ref([])
const tests = ref([])
// const levels = ref([])

// async function getLevel() {
//     const { data } = await supabase.from('levels').select('*')
//     levels.value = data
// }

async function getRubrics() {
    const { data } = await supabase.from('rubrics').select('*')
    rubrics.value = data
}

async function getTests() {
    const { data } = await supabase.from('tests').select().order("id")
    tests.value = data
    store.tests = data
}

async function getTestForRubric(id) {
    const { data } = await supabase.from('tests').select().eq('rubric', `${id}`)
    tests.value = data
}


// computed(() => {
//     async function sortByLevel(level) {
//         this.sortedTests = [];
//         console.log(tests)
//         this.tests.map(function (item) {
//             {
//                 if (item.level === level.name) {
//                     this.sortedTests.push(item)
//                 }
//             }
//         })
//         console.log(sortedTests);
//     }
// }
// )

onMounted(() => {
    getTests(), getRubrics()
})
</script>

<template>
    <section class="testsMain">
        <section class="contentTests">
            <section class="rubrics">
                <div class="rubric">
                    <Link v-for="rubric in rubrics" :name="rubric.name" v-bind:key="rubric.id" :class="{ isActive: active }"
                        @click="getTestForRubric(rubric.id)" class="link">
                    <p>{{ rubric.name }}</p>
                    </Link>
                </div>
            </section>
            <hr class="line_tests" />
            <section class="tests_test">
                <Test v-for="test in tests" v-bind:key="test.id" :name="test.name" :img="test.photo" :count="test.count"
                    :id="test.id">
                </Test>
            </section>
        </section>
    </section>
</template>

<style scoped>
.testsMain{
    min-height:72vh;
}
.contentTests {
    margin: 0px 100px;
}

p {
    display: inline-block;
    margin-left: 50px;
}

.levels {
    margin: 45px 45px 0px;
    font-size: 30px;
    background-color: #fff;
    margin-bottom: 70px;
    border: 1px solid #AA9F9F;
}

.tests_test {
    display: flex;
    flex-flow: row wrap;
    grid-row: row;
}

.link {
    color: #A39D9D;
}

.line_tests {
    margin-bottom: 70px;
}
</style>