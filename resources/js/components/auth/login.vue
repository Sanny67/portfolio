<template>
    <div class="themed_form_outer">
        <div class="themed_form bg-light col-lg-4 col-md-5 col-sm-8">
            <form class="form" runat="server" autocomplete="off" @submit.prevent="login">
                <div class="form-group">
                    <label 
                        class="label" 
                        for="email" 
                        :style="{fontSize: labels.email.fontSize, transform: `translateY(${labels.email.translateY})`}"
                    >Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        class="form-control" 
                        @focus="labelActive('email')" 
                        @active="labelActive('email')" 
                        @blur="labelInactive('email', formData.email ? 1 : 0)" 
                        v-model="formData.email"
                        autocomplete="off"
                    >
                </div>

                <div class="form-group">
                    <label 
                        class="label" 
                        for="password" 
                        :style="{fontSize: labels.password.fontSize, transform: `translateY(${labels.password.translateY})`}"
                    >Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        class="form-control" 
                        @focus="labelActive('password')" 
                        @active="labelActive('password')" 
                        @blur="labelInactive('password', formData.password ? 1 : 0)"
                        v-model="formData.password"
                        autocomplete="off"
                    >
                </div>

                <div>
                    <button type="submit" class="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { reactive, ref } from "vue";
    import { useRouter } from "vue-router";
    import themedForm from '../../config/form.js';
    import axiosCalls from '../../config/axios.js'
    
    export default {
        name: "Login",
        setup(){
            const router = useRouter()
            let error = ref('');
            let formData = reactive({
                email: '',
                password: '',
            });

            let { labels, labelActive, labelInactive } = themedForm()
            let Axios = axiosCalls()

            const login = () => {
                console.log('hit');
                Axios.post('login', formData)
                .then((response) => {
                    console.log(response)
                    if(response.data.status === 200){
                        this.setUser(response.data.data.user);
                        localStorage.setItem('token', response.data.data.token);
                        router.push('/dashboard');
                    } else {
                        error.value = response.data.message;
                    }
                })
            }

            
            return { formData, login, labels, labelActive, labelInactive }
        },
        methods:{
            setUser: (user) => {
                this.$store.dispatch('set_user', user);
            }
        }
    }
</script>