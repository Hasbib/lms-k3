<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2 mt-5">
                <div class="card bg-danger text-white p-5">
                    <h3 class="text-center">Create New Item</h3>
                    <form @submit.prevent="submitForm">
                        <div class="mb-3">
                            <label for="title" class="form-label">Title</label>
                            <input type="text" class="form-control" id="title" v-model="form.title"
                                placeholder="Enter title" required>
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Answer</label>
                            <textarea class="form-control" id="description" v-model="form.answer" cols="30" rows="5"
                                placeholder="Enter answer" required></textarea>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-dark">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const form = ref({
    title: '',
    answer: '',
});

const submitForm = async () => {
    try {
        const response = await axios.post('/faqs', form.value,);
        console.log(response.data.message);
        router.push('/tabel-faq');
    } catch (error) {
        console.error('Error creating FAQ entry:', error.response?.data?.message || error.message);
    }
};
</script>
