<script setup>
import Card from "../Card.vue";
import Link from "../Link.vue";
import { ref, onMounted } from 'vue';
import { supabase } from '../../lib/supabase.js';

const rubrics = ref([])
const cards = ref([])

async function getRubrics() {
    const { data } = await supabase.from('rubrics').select('*')
    rubrics.value = data
}

async function getCards() {
    const { data } = await supabase.from('cards').select('*')
    cards.value = data
}

async function getCardsForRubric(id) {
    const { data } = await supabase.from('cards').select('*').eq('rubric', `${id}`)
    cards.value = data
}


onMounted(() => {
    getRubrics(), getCards()
})


</script>

<template>
    <section class="content_cards">
        <section class="rubrics">
            <Link v-for="rubric in rubrics" :name="rubric.name" v-bind:key="rubric.id" :class="{ isActive: active }"
                @click="getCardsForRubric(rubric.id)" class="link">
            <p class="p_rubric">{{ rubric.name }}</p>
            </Link>
            <hr class="line_cards" />
        </section>
        <section class="cards">
            <Card :name="card.name" :translation="card.translation" v-for="card in cards" v-bind:key="card.id">
            </Card>
        </section>
    </section>
</template>

<style scoped></style>