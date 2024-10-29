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
                            <label for="isi" class="form-label">Deskirpsi Singkat</label>
                            <textarea class="form-control" id="isi" v-model="form.short_description" cols="30" rows="5"
                                placeholder="Enter content"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="isi" class="form-label">Deskirpsi</label>
                            <textarea class="form-control" id="isi" v-model="form.description" cols="30" rows="5"
                                placeholder="Enter content"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="image" class="form-label">Image</label>
                            <input type="file" class="form-control" id="image" @change="handleFileUpload"
                                accept="image/*" required>
                        </div>
                        <div v-for="(subtitle, index) in form.subtitles" :key="index" class="mb-3">
                            <label for="subtitle" class="form-label">Subtitle {{ index + 1 }}</label>
                            <input type="text" class="form-control" :id="'subtitle_' + index"
                                v-model="form.subtitles[index].subtitle" placeholder="Enter subtitle">
                            <label for="subtitleDescription" class="form-label mt-2">Subtitle Description</label>
                            <textarea class="form-control" :id="'subtitleDescription_' + index"
                                v-model="form.subtitles[index].description" cols="30" rows="3"
                                placeholder="Enter subtitle description"></textarea>
                        </div>

                        <button type="button" class="btn btn-dark" @click="addSubtitle">Add Subtitle</button>

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
    image: null,
    description: '',
    short_description: '',
    subtitles: [{ subtitle: '', description: '' }],
});

const addSubtitle = () => {
    form.value.subtitles.push({ subtitle: '', description: '' });
};

const handleFileUpload = (event) => {
    form.value.image = event.target.files[0];
};

const submitForm = async () => {
    const formData = new FormData();
    formData.append('title', form.value.title);
    formData.append('description', form.value.description);
    formData.append('short_description', form.value.short_description);
    if (form.value.image) {
        formData.append('image', form.value.image);
    }

    // Append subtitles to FormData
    form.value.subtitles.forEach((subtitle, index) => {
        formData.append(`subtitles[${index}][subtitle]`, subtitle.subtitle);
        formData.append(`subtitles[${index}][description]`, subtitle.description);
    });

    try {
        const response = await axios.post('/about-pages', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log(response.data.message);
        router.push('/tabel-about-pages');
    } catch (error) {
        console.error('Error creating About Us entry:', error);
    }
};

</script>