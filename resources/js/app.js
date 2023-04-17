import './bootstrap';
import { createApp } from 'vue';
import app from './components/App.vue';
import router from './router';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import '../sass/app.scss';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faLaravel } from '@fortawesome/free-brands-svg-icons'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(faLaravel, faVuejs)
{/* <style lang='scss'>
</style> */}

createApp(app)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router).mount('#app');