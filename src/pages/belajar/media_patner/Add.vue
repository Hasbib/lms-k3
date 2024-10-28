<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2 mt-5">
                <div class="card bg-danger text-white p-5">
                    <h3 class="text-center">Create New Item</h3>
                    <form @submit.prevent="submitForm">
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" v-model="form.name"
                                placeholder="Enter name" required>
                        </div>
                        <div class="mb-3">
                            <label for="social_link" class="form-label">Social Link</label>
                            <input type="url" class="form-control" id="social_link" v-model="form.social_link"
                                placeholder="Enter social link" />
                        </div>
                        <div class="mb-3">
                            <label for="address" class="form-label">Address</label>
                            <input type="text" class="form-control" id="address" v-model="form.address"
                                placeholder="Enter address" required>
                        </div>

                        <div class="mb-3">
                            <label for="file" class="form-label">File</label>
                            <input type="file" class="form-control" id="file" @change="handleFileUpload"
                                accept="image/*" required>
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
    name: '',
    social_link: '',
    address: '',
    file: null,
});

const handleFileUpload = (event) => {
    form.value.file = event.target.files[0];
};

const submitForm = async () => {
    const formData = new FormData();
    formData.append('name', form.value.name);
    formData.append('social_link', form.value.social_link);
    formData.append('address', form.value.address);
    if (form.value.file) {
        formData.append('file', form.value.file);
    }

    try {
        const response = await axios.post('/media-partners', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log(response.data.message);
        router.push('/tabel-mp');
    } catch (error) {
        console.error('Error creating Media Partner entry:', error.response ? error.response.data : 'An error occurred');
    }
};
</script>
