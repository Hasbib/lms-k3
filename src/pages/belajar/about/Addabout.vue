<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2 mt-5">
                <div class="card bg-danger text-white p-5">
                    <h3 class="text-center">Create New Item</h3>
                    <form @submit.prevent="submitForm">
                        <div class="mb-3">
                            <label for="title" class="form-label">Title</label>
                            <input type="text" class="form-control" id="title" v-model="form.title" placeholder="Enter title" required>
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <textarea class="form-control" id="description" v-model="form.description" cols="30" rows="5" placeholder="Enter description" required></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="image" class="form-label">Image</label>
                            <input type="file" class="form-control" id="image" @change="handleFileUpload" accept="image/*" required>
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
    description: '',
    image: null,
});

const handleFileUpload = (event) => {
    form.value.image = event.target.files[0];
};

const submitForm = async () => {
    const formData = new FormData();
    formData.append('title', form.value.title);
    formData.append('description', form.value.description);
    if (form.value.image) {
        formData.append('image', form.value.image);
    }

    try {
        const response = await axios.post('/about-us', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log(response.data.message);
        router.push('/tabel-about');
    } catch (error) {
        console.error('Error creating About Us entry:', error);
    }
};
</script>
