<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <header class="header">
        <nav class="d-flex container align-items-center justify-content-between">
            <RouterLink class="d-flex align-items-center logo link" to="/">
                <img class="logo_img" src="./icons/favicon-32x32.png" alt="logo">
                <h1 class="link_text ps-2">Meow</h1>
            </RouterLink>
            <RouterLink class="link link_text" to="add-music">
                Добавить музыку
            </RouterLink>
            <RouterLink class="link link_text" to="add-film">
                Добавить фильм
            </RouterLink>
            <RouterLink class="link link_text" to="look-musics">
                Посмотреть музыки
            </RouterLink>
            <RouterLink class="link link_text" to="look-films">
                Посмотреть фильмы
            </RouterLink>
        </nav>
    </header>
</template>

<style scoped>
    .header {
        border-bottom: 1px solid #fff;
    }

    .logo, .link {
        color: #fff;
        text-decoration: none;
    }

    .logo > h1 {
        font-size: 20px; 
    }

    .link_text{
        margin: 0;
        font-weight: 500;
    }

    .link {
        padding: 20px;
    }

    .link:hover {
        background-color: rgb(20, 20, 20);
    }
</style>