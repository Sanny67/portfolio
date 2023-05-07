<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm bg-white rounded">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <p>{{ user }}</p>
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <div class="login-section" v-if="!hasToken()">
                    <router-link to="/login" class="btn btn-primary mx-1">Login</router-link>
                    <router-link to="/login" class="btn btn-primary mx-1">Sign Up</router-link>
                </div>
                <form class="d-flex" v-if="hasToken()">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-primary" type="submit">Search</button>
                    <fa-icon icon="fa-solid fa-power-off" @click="logout"/>
                </form>
            </div>
        </div>
    </nav>
</template>
<script>
import { useRouter } from 'vue-router';
import { mapState } from 'vuex';

    export default {
        name: "Topbar",
        computed: {
            ...mapState({
                user: (state) => { return state.user}
            })
        },
        setup(){
            const router = useRouter()
            const logout = async() => {
                // await axios.get('/api/logout')
                // .then(response => {
                //     if(response.status === 200){
                //         // store.dispatch('set_user', null);
                //         localStorage.removeItem('token');
                //         router.push('/');
                //     } else {
                //         error.value = response.data.message;
                //     }
                // })
                localStorage.removeItem('token');
                this.$store.dispatch('set_user', null);
                router.push('/');
            }

            const hasToken = () => {
                return localStorage.getItem('token')
            }

            return { hasToken, logout }
        }
    }
</script>