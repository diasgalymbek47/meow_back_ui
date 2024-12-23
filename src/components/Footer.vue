<script setup></script>

<template>
    <footer class="footer">
        <div class="container d-flex align-items-center justify-content-between">
            <p class="item">Сайт <span>meow</span> создан в 2024</p>
            <a class="item link" target="_blank" href="https://github.com/diasgalymbek47">от <span>diasgalymbek47</span></a>
        </div>
    </footer>
</template>

<style scoped>
    .footer {
        border-top: 1px solid #fff;
    }

    .item {
        margin: 0;
        padding: 20px;
    }

    .item > span {
        font-weight: 500;
        color: orange;
    }

    .link {
        text-decoration: none;
        color: #fff;
    }

    .link:hover {
        background-color: rgb(20, 20, 20);
    }
</style>