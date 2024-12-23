import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue")
    },
    {
      path: "/add-music",
      name: "add-music",
      component: () => import("@/views/AddMusicView.vue")
    },
    {
      path: "/add-film",
      name: "add-film",
      component: () => import("@/views/AddFilmView.vue")
    },
    {
      path: "/look-musics",
      name: "look-musics",
      component: () => import("@/views/LookMusicsView.vue")
    },
    {
      path: "/look-films",
      name: "look-films",
      component: () => import("@/views/LookFilmsView.vue")
    }
  ],
})

export default router
