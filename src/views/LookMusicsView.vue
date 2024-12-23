<script setup>
    import axios from 'axios';
    import { ref, onMounted } from 'vue';
    import { RouterLink } from 'vue-router';
    import Music from '@/components/Music.vue';

    const data = ref([]);
    const isLoaded = ref(false);

    onMounted(async () => {
        try {
            const response = await axios.get('http://localhost:5031/api/music/all');
            data.value = response.data;
            isLoaded.value = true;
        } catch (e) {
            alert("При получение данных произошла ошибка!")
        }
    });
</script>

<template>
    <main class="container pt-5 pb-5">
        <div v-if="data.length == 0">Список музыки пока пусто, добавьте новые <RouterLink class="link" to="add-music">музыки</RouterLink></div>
        <Music class="mb-4" v-else v-for="(music, index) in data" :key="index" :music="music"/>
    </main>
</template>

<style scoped>
</style>