<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2 mt-5">
                <div class="card bg-danger text-white p-5">
                    <h3 class="text-center">Edit Item</h3>
                    <form @submit.prevent="submitFormEdit">
                        <div class="mb-3">
                            <label for="title" class="form-label">Name</label>
                            <input type="text" class="form-control" id="title" v-model="form.name"
                                placeholder="Enter title" required>
                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label">Link</label>
                            <input type="url" class="form-control" id="title" v-model="form.link"
                                placeholder="Enter title" required>
                        </div>
                        <div class="mb-3">
                            <label for="image" class="form-label">Image</label>
                            <input type="file" class="form-control" id="image" @change="handleFileUpload" accept="image/*">
                        </div>
                        <div class="text-center mb-3">
                            <img v-if="imagePreview" :src="imagePreview" alt="Image Preview" class="img-fluid mb-2" style="max-height: 200px;">
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
    name: '',
    link: '',
    image: null,
});

const imagePreview = ref(null);
const route = useRoute();
const router = useRouter();

const fetchAboutUsData = async () => {
    const id = route.params.id;
    try {
        const response = await axios.get(`/social-media/${id}`);
        form.value.name = response.data.name;
        form.value.link = response.data.link;
        imagePreview.value = `${axios.defaults.baseURL.replace('/api', '')}/uploads/${response.data.image}`;
    } catch (error) {
        console.error('Error fetching data for edit:', error);
    }
};

const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        form.value.image = file;
        imagePreview.value = URL.createObjectURL(file);
    } else {
        form.value.image = null;
        imagePreview.value = null;
    }
};

const submitFormEdit = async () => {
    const id = route.params.id;
    const formData = new FormData();
    formData.append('name', form.value.name);
    formData.append('link', form.value.link);
    if (form.value.image) {
        formData.append('image', form.value.image);
    }

    try {
        await axios.post(`/social-media/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        router.push('/tabel-social-media');
    } catch (error) {
        console.error('Error updating data:', error);
    }
};

onMounted(() => {
    fetchAboutUsData();
});
</script>
