<template>
    <div class="login_form_outer">
        <div class="login_form bg-light col-lg-4 col-md-5 col-sm-8">
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
                        @blur="labelInactive('email')" 
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
                        @blur="labelInactive('password')"
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
    
    export default {
        name: "Login",
        setup(){
            const router = useRouter()
            let error = ref('');
            let formData = reactive({
                email: '',
                password: '',
            });

            console.log(themedForm)

            const login = async() => {
                await axios.post('/api/login', formData)
                .then(response => {
                    if(response.status === 200){
                        localStorage.setItem('token', response.data.data.token);
                        router.push('/dashboard');
                    } else {
                        error.value = response.data.message;
                    }
                })
            }
            
            return { formData, login }
        }
    }
</script>