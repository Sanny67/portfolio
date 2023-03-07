import './bootstrap';
import { createApp } from 'vue';
import app from './components/App.vue';
import router from './router';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import '../sass/app.scss';
{/* <style lang='scss'>
</style> */}

createApp(app).use(router).mount('#app');