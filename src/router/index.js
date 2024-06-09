import { createRouter, createWebHistory } from 'vue-router';
import LayoutNeed from '../components/LayoutNeed.vue';
import HomePage from '../views/HomePage.vue';
import CoursePage from "@/views/CoursesPage/CoursePage.vue";
import AdminPage from '../views/AdminPage.vue';
import CourseDetails from '../views/CoursesPage/CourseDetails.vue';
import UserProfile from "@/views/ProfilePage.vue";
import AddLessons from '../views/AddLesons.vue';
import RegisterPage from "@/views/RegisterPage.vue";
import LoginPage from "@/views/LoginPage.vue";

const routes = [
    {
        path: '/',
        component: LayoutNeed,
        children: [
            { path: '', component: HomePage },
            { path: 'courses', component: CoursePage },
            { path: 'profile', component: UserProfile },
            { path: 'admin', component: AdminPage },
            { path: 'admin/add-lessons/:courseId', component: AddLessons },
            { path: 'courses/:id', component: CourseDetails }, // Исправленный путь
        ],
    },
    { path: '/register', component: RegisterPage },
    { path: '/login', component: LoginPage }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
