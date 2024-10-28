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
});

const route = useRoute();
const router = useRouter();

const fetchAboutUsData = async () => {
    const id = route.params.id;
    try {
        const response = await axios.get(`/sosial-media/${id}`);
        form.value.name = response.data.name;
        form.value.link = response.data.link;
    } catch (error) {
        console.error('Error fetching data for edit:', error);
    }
};

const submitFormEdit = async () => {
    const id = route.params.id;
    const formData = new FormData();
    formData.append('name', form.value.name);
    formData.append('link', form.value.link);
    try {
        await axios.post(`/sosial-media/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        router.push('/tabel-sosial-media');
    } catch (error) {
        console.error('Error updating data:', error);
    }
};

onMounted(() => {
    fetchAboutUsData();
});
</script>
