import './bootstrap';
import { createApp } from 'vue';
import app from './components/App.vue';
import router from './router';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import '../sass/app.scss';
import store from './store';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faLaravel } from '@fortawesome/free-brands-svg-icons'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faLaravel, faVuejs, faPowerOff)
{/* <style lang='scss'>
</style> */}

const appconfig = createApp(app);

appconfig.use(router);
appconfig.use(store);
appconfig.component('fa-icon', FontAwesomeIcon);
appconfig.mount('#app');

// createApp(app).use(router).use(store).component('fa-icon', FontAwesomeIcon).mount('#app');