import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('/src/components/HeroSection.vue');
const About = () => import('/src/components/Aboutme.vue');
const Projects = () => import('/src/components/Project.vue');
const Contact = () => import('/src/components/Contact.vue');

// import Home from './pages/Home.vue';
// import Company from '../pages/Company.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/my-portfolio/',
            component: Home,
            name: 'Home',
        },
        {
            path: '/my-portfolio/About',
            component: About,
            name: 'About',
        },
        {
            path: '/my-portfolio/Project',
            component: Projects,
            name: 'Project',
        },
        {
            path: '/my-portfolio/Contact',
            component: Contact,
            name: 'Contact',
        },
    ]
});

export default router;