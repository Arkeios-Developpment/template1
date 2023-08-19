import HomePage from '@/pages/index';
import AboutPage from '@/pages/about';
import LightAndShibaPage  from "@/pages/LightAndShiba";

const routes = [
    { path: '/', page: HomePage },
    { path: '/about', page: AboutPage },
    { path: '/shiba', page: LightAndShibaPage },
    // Add more routes as needed
];

export default routes;
