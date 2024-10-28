<template> 
    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2 mt-5">
                <div class="card bg-danger text-white p-5">
                    <h3 class="text-center">Edit Item</h3>
                    <form @submit.prevent="submitFormEdit">
                        <div class="mb-3">
                            <label for="title" class="form-label">Title</label>
                            <input type="text" class="form-control" id="title" v-model="form.title"
                                placeholder="Enter title" required>
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Answer</label>
                            <textarea class="form-control" id="description" v-model="form.answer" cols="30" rows="5"
                                placeholder="Enter description" required></textarea>
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
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const form = ref({
    title: '',
    answer: '',
});

const route = useRoute();
const router = useRouter();

const fetchAboutUsData = async () => {
    const id = route.params.id;
    try {
        const response = await axios.get(`/faqs/${id}`);
        form.value.title = response.data.title;
        form.value.answer = response.data.answer;
    } catch (error) {
        console.error('Error fetching data for edit:', error);
    }
};

const submitFormEdit = async () => {
    const id = route.params.id;
    try {
        await axios.post(`/faqs/${id}`, form.value);
        router.push('/tabel-faq');
    } catch (error) {
        console.error('Error updating data:', error);
    }
};

onMounted(() => {
    fetchAboutUsData();
});
</script>
