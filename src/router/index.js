import { createRouter, createWebHistory } from 'vue-router';
import LayoutNeed from '../components/LayoutNeed.vue';
import HomePage from '../views/HomePage.vue';
import CoursesPage from '../views/CoursePage.vue';
import AdminPage from '../views/AdminPage.vue';
import CourseDetails from '../views/CourseDetails.vue';
import UserProfile from "@/views/ProfilePage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import LoginPage from "@/views/LoginPage.vue";

const routes = [
    {
        path: '/',
        component: LayoutNeed,
        children: [
            { path: '', component: HomePage },
            { path: 'courses', component: CoursesPage },
            { path: 'profile', component: UserProfile },
            { path: 'admin', component: AdminPage },
            { path: 'courses/:id', component: CourseDetails },
        ],
    },
    { path: '/register', component: RegisterPage },
    { path: '/login', component: LoginPage }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;