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
                            <label for="description" class="form-label">Description</label>
                            <textarea class="form-control" id="description" v-model="form.short_description" cols="30"
                                rows="5" placeholder="Enter description" required></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <textarea class="form-control" id="description" v-model="form.description" cols="30"
                                rows="5" placeholder="Enter description" required></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="image" class="form-label">Image</label>
                            <input type="file" class="form-control" id="image" @change="handleFileUpload"
                                accept="image/*">
                        </div>
                        <div class="text-center mb-3">
                            <img v-if="imagePreview" :src="imagePreview" alt="Image Preview" class="img-fluid mb-2"
                                style="max-height: 200px;">
                        </div>
                        <div v-for="(subsection, index) in form.subsections" :key="index" class="mb-3">
                            <h5>Subtitle {{ index + 1 }}</h5>
                            <input type="text" class="form-control mb-2" v-model="subsection.subtitle"
                                placeholder="Enter subtitle" />
                            <textarea class="form-control" v-model="subsection.description" cols="30" rows="3"
                                placeholder="Enter subtitle description"></textarea>
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
    short_description: '',
    description: '',
    image: null,
    subsections: [],
});

const imagePreview = ref(null);
const route = useRoute();
const router = useRouter();

const fetchAboutUsData = async () => {
    const id = route.params.id;
    try {
        const response = await axios.get(`/about-pages/${id}`);
        form.value.title = response.data.title;
        form.value.short_description = response.data.short_description;
        form.value.description = response.data.description;
        form.value.subsections = response.data.subsections;
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
    formData.append('title', form.value.title);
    formData.append('short_description', form.value.short_description);
    formData.append('description', form.value.description);
    if (form.value.image) {
        formData.append('image', form.value.image);
    }

    // Kirim subsections sebagai array
    form.value.subsections.forEach((subsection, index) => {
        formData.append(`subtitles[${index}][subtitle]`, subsection.subtitle);
        formData.append(`subtitles[${index}][description]`, subsection.description);
    });

    try {
        await axios.post(`/about-pages/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        router.push('/tabel-about-pages');
    } catch (error) {
        console.error('Error updating data:', error);
    }
};


onMounted(() => {
    fetchAboutUsData();
});
</script>
