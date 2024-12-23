<script setup>
import { ref } from 'vue';
import axios from 'axios';

const formData = ref({
    name: "",
    artists: "",
    genre: "",
    album: "",
    img: null,
    music: null
})
const img = ref(null);
const music = ref(null);

const uploadImg = (event) => formData.value.img = event.target.files[0]; 
const uploadMusic = (event) => formData.value.music = event.target.files[0];
const submit = async () => {
    if(!formData.value.name || !formData.value.artists || !formData.value.genre || !formData.value.album || !formData.value.img || !formData.value.music) {
        alert("Данные не заполнены!");
        return;
    }

    const data = new FormData();
    data.append('name', formData.value.name);
    data.append('genre', formData.value.genre);
    data.append('album', formData.value.album);
    data.append('img', formData.value.img);
    data.append('music', formData.value.music);
    const artists = formData.value.artists.split(',');
    for (let i = 0; i < artists.length; i++) {
        data.append('artists', artists[i]);
    }

    try {
        const response = await axios.post('http://localhost:5031/api/music/add', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })

        clearData();
        alert("Данные успешно загружены!");
    } catch (e) {
        alert("Провал о май гад --> ", e)
    }
};
const clearData = () => {
    formData.value.name = '';
    formData.value.artists = '';
    formData.value.genre = '';
    formData.value.album = '';
    formData.value.img = null;
    formData.value.music = null;
    img.value.value = '';
    music.value.value = '';
}
</script>

<template>
    <main class="container pt-5 pb-5">
        <div class="form d-flex flex-column">
            <input class="input mb-4" type="text" name="name" placeholder="Название песни" autocomplete="off" required v-model="formData.name">
            <input class="input mb-4" type="text" name="artists" placeholder="Артисты" autocomplete="off" required v-model="formData.artists">
            <input class="input mb-4" type="text" name="genre" placeholder="Жанр" autocomplete="off" required v-model="formData.genre">
            <input class="input mb-4" type="text" name="album" placeholder="Название альбома" autocomplete="off" required v-model="formData.album">
            <div>Картинка</div>
            <input class="mb-4" type="file" name="img" required @change="uploadImg" ref="img">
            <div>Музыка</div>
            <input class="mb-4" type="file" name="music" required @change="uploadMusic" ref="music">
            <button class="btn" @click="submit">Добавить</button>
        </div>
    </main>
</template>

<style scoped>
    input {
        cursor: pointer;
    }

    .input {
        padding: 10px;
        color: #000;
    }

    .btn {
        width: max-content;
        font-size: 18px;
        color: #000;
        background-color: #fff;
    }
</style>