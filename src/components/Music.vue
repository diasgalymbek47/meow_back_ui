<script setup>
    defineProps({
        music: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <div class="d-flex align-items-center">
        <div class="img me-4">
            <img :src="music.srcImage">
        </div>
        <div class="name me-5">
            <h2>{{ music.name }}</h2>
            <p>
                <span v-for="(artist, index) in music.artists" :key="index">{{ artist }}{{ index < music.artists.length - 1 ? ", " : "" }}</span>
            </p>
        </div>
        <div class="box d-flex flex-column me-5">
            <div class="head">Альбом</div>
            <div>{{ music.album }}</div>
        </div>
        <div class="box d-flex flex-column me-5">
            <div class="head">Жанр</div>
            <div>{{ music.genre }}</div>
        </div>
        <div class="flex-grow-1">
            <audio class="w-100" :src="music.srcMusic" controls></audio>
        </div>
    </div>
</template>

<style scoped>
    .img img{
        width: 80px;
        height: 80px;
        aspect-ratio: 1/1;
        border-radius: 10px;
    }

    .name {
        flex-basis: 200px;
        white-space: normal;
    }

    .name h2 {
        font-weight: 700;
        font-size: 20px;
    }

    h2, p {
        margin: 0;
    }

    .head {
        font-weight: 600;
    }

    .box {
        flex-basis: 100px;
    }
</style>