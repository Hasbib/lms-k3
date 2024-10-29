<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const role = ref('admin');

const router = useRouter();

const loginAdmin = async () => {
    try {
        const response = await axios.post('/login', {
            email: email.value,
            password: password.value,
            role: role.value
        });

        if (response.data.success) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            router.push('/');
        }
    } catch (error) {
        console.error('Error during login:', error.response.data);
    }
};

</script>

<!-- <template>
    <form @submit.prevent="loginAdmin">
        <div class="my-2">
            <label for="">email</label>
            <input type="email" v-model="email">
        </div>
        <div class="my-2">
            <label for="">Password</label>
            <input type="password" v-model="password">
        </div>
        <button class="btn btn-primary">Login</button>
    </form>
</template> -->



<template>
    <div class="body-login-nobg">
        <div class="card border-0 rounded-3 custom-shadow2 w-500 mx-3 mx-md-0">
            <div class="p-4 rounded mx-1 text-center">
                <h3 class="fs-24 fw-semibold">Forget Password</h3>
                <p class="fs-16 mb-0">Enter your email account to reset password</p>
                <div class="card-body">
                    <img src="../../assets/images/fp.png" alt="" class="image-reset">
                    <form class="mx-4" @submit.prevent="loginAdmin">
                        <div class="mb-3 mt-4 text-start">
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                            <input type="email" class="form-control h-48 rounded-3" id="exampleInputEmail1"
                                placeholder="Enter Your Email Here" required v-model="email">
                        </div>
                        <ButtonSuccess class="mb-2 h-48 w-100 fs-16 mt-3" type="submit">
                            Continue
                        </ButtonSuccess>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
