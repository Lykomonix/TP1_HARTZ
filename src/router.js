import { createRouter, createWebHistory } from "vue-router";
import AddItem from "./views/AddItem.vue";
import Admin from "./views/Admin.vue";
import Basket from "./views/Basket.vue";
import Home from "./views/Home.vue";
import ItemCard from "./views/ItemCard.vue";
import Items from "./views/Items.vue";
import Login from "./views/Login.vue";

const routes = [
    {path: "/", component: Home},
    {path: "/articles", component: Items},
    {path: "/articles/{:id}", component: ItemCard},
    {path: "/ajouter", component: AddItem},
    {path: "/panier", component: Basket},
    {path: "/login", component: Login},
    {path: "/admin", component: Admin}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;