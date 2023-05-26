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
    <div class="cards_pages">
        <div class="content_cards">
            <div class="rubrics">
                <div class="rubric">
                    <Link v-for="rubric in rubrics" :name="rubric.name" v-bind:key="rubric.id" :class="{ isActive: active }"
                        @click="getCardsForRubric(rubric.id)" class="link">
                    <p class="p_rubric">{{ rubric.name }}</p>
                    </Link>
                </div>
                <hr class="line_cards" />
            </div>
            <div class="cards">
                <Card :name="card.name" :translation="card.translation" v-for="card in cards" v-bind:key="card.id">
                </Card>
            </div>
        </div>
    </div>
</template>

<style scoped>


</style>