<template>
    <section class="test_page_content">
        <h1 class="title_testpage">
            Тест на тему {{ test.name }}
        </h1>
        <div class="test_page">
            <div class="question" v-for="(question, index) in questions" v-if="questionIndex < test.count">
                <div v-show="index == questionIndex">
                    <p>Вопрос {{ questionIndex + 1 }} из {{ test.count }}</p>
                    <p>{{ question.content }}</p>
                    <label class="answer" :for="answers" v-for="answer in question.answers" :class="{ selected: answer.id == selectedAnswer }
                        ">
                        {{ answer.content }}
                        <input class="input" type="radio" :name="`answer-` + question.id" :value="answer.id"
                            @change="answered" v-model="selectedAnswer" :disabled="selectedAnswer != ''">
                    </label>
                </div>
            </div>

            <div class="result_answered" v-if="isSelectedCorrect">
                    Правильно!
                </div>

                <div class="result_answered" v-if="isSelectedWrong">
                    Неправильно!
                </div>


            <div class="results" v-if="questionIndex == test.count">
                <p>
                    Количество правильных ответов:
                    <span>{{ correctAnswer }}</span>
                </p>
                <p>
                    Количество неправильных ответов:
                    <span>{{ wrongAnswer }}</span>
                </p>

                <Button class="btn after" @click="resetQuiz">
                    Пройти тест заново
                </Button>
                <router-link to="/tests">
                    <Button class="btn after">
                        Вернуться к тестам
                    </Button>
                </router-link>
            </div>
            <div>
                <Button class="btn" @click="nextQuestion" v-show="selectedAnswer != '' && questionIndex < test.count - 1">
                    Следующий вопрос
                </Button>
                <Button class="btn" v-show="selectedAnswer != '' && questionIndex == test.count - 1" @click="showResults">
                    К результату!
                </Button>
            </div>
        </div>
    </section>
</template>

<script>

import Button from '../Button.vue';
export default {
    name: "testPage",
    components: {
        Button
    },
    data() {
        return {
            isSelectedCorrect: false,
            isSelectedWrong: false,
            questionIndex: 0,
            selectedAnswer: '',
            correctAnswer: 0,
            wrongAnswer: 0,
            selectedUserAnswers: [],
            arrayCorrectAnswers: [],
        }
    },
    methods: {
        answered() {
            this.selectedUserAnswers.push(this.selectedAnswer)
            let ar = this.arrayCorrectAnswers[0];
            ar.includes(this.selectedAnswer) ? this.isSelectedCorrect = true : this.isSelectedWrong = true

        },
        nextQuestion() {
            this.isSelectedCorrect = false,
            this.isSelectedWrong = false,
            this.questionIndex++
            this.selectedAnswer = ''
        },
        showResults() {
            this.isSelectedCorrect = false,
            this.isSelectedWrong = false,
            this.questionIndex++;
            let array = this.arrayCorrectAnswers[0];
            array.forEach(element =>
                this.selectedUserAnswers.includes(element) ? this.correctAnswer++ : this.wrongAnswer++)

        },
        resetQuiz() {
            this.questionIndex = 0
            this.selectedAnswer = ''
            this.correctAnswer = 0
            this.wrongAnswer = 0
            this.selectedUserAnswers = [];
        }
    },
    mounted() {
        const createArr = async (id) => {
            const { data: allCorrectAnswers } = await supabase
                .from('questions')
                .select('answers(id)')
                .eq('test', id)
                .eq('answers.is_correct', true)

            let CorrectAnswers = allCorrectAnswers.flatMap(el => {
                return el.answers.map(answer => {
                    return answer.id
                })
            }
            );
            return CorrectAnswers;
        }

        const promiseArray = createArr(this.$route.params.id)
        promiseArray.then(value => {
            this.arrayCorrectAnswers.push(value);
        });
    }
}
</script>

<script setup>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import { supabase } from '../../lib/supabase';

const route = useRoute()

let test = reactive({})
let questions = reactive({})


const getTest = async (id) => {
    let { data, error } = await supabase
        .from('tests')
        .select()
        .eq('id', id)
        .single()

    if (error) throw new Error(error)

    Object.assign(test, data)
}

const getQuestions = async (id) => {
    let { data, error } = await supabase
        .from('questions')
        .select('id, content, answers (id, content, is_correct)')
        .eq('test', id)
    questions.value = data
    if (error) throw new Error(error)

    Object.assign(questions, data)
}



getTest(route.params.id)
getQuestions(route.params.id)


</script>

<style scoped>
.btn {
    font-size: 24px;
    border: 2px solid #6EA0D6;
    background-color: white;
    margin: 50px 40px 0px;
    border-radius: 30px;
    padding: 15px 50px;
}

.input {
    display: block;
    appearance: none;
}

.title_testpage {
    margin: 0px;
    padding: 50px;
    font-size: 50px;
    text-align: center;
}

.test_page {
    margin-left: 30%;
    margin-bottom: 100px;
    border: 1px solid black;
    border-radius: 15px;
    width: 800px;
    min-height: 550px;
    text-align: center;
}

.question {
    font-size: 30px;
}

.answer {
    display: block;
    /* text-align: center; */
    border: 2px solid gray;
    border-radius: 20px;
    /* width: 600px; */
    height: 45px;
    font-size: 25px;
    cursor: pointer;
    margin: 20px 40px;
}


.selected {
    background-color: rgba(129, 124, 124, 0.726);
}

.results {
    text-align: center;
    font-size: 30px;
}

.result_answered{
    font-size:  30px;
}
</style>