<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const aboutPagesData = ref([]);
const router = useRouter();

const fetchAboutUsData = async () => {
    try {
        const response = await axios.get('/about-pages');
        aboutPagesData.value = response.data;
    } catch (error) {
        console.error('Error fetching About Us data:', error);
    }
};

const deleteAbout = async (id_about_us) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this data about?");
    if (isConfirmed) {
        try {
            await axios.delete(`/about-pages/${id_about_us}`);
            fetchAboutUsData();
        } catch (error) {
            console.error('Error deleting alat:', error);
        }
    }
};

const goToEdit = (id) => {
    router.push(`/edit-about-pages/${id}`);
};

onMounted(() => {
    fetchAboutUsData();
});
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="card bg-danger p-5 mt-5">
                <button class="btn btn-hijau w-15 h-40 mb-3" onclick="window.location.href='/add-about-pages'">Add</button>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Deskripsi</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in aboutPagesData" :key="item.id">
                            <td>{{ item.title }}</td>
                            <td>
                                <img :src="`${axios.defaults.baseURL.replace('/api', '')}/uploads/${item.image}`" class="rectangle-img rounded-4" style="width: 100px;">
                            </td>
                            <td>{{ item.description }}</td>
                            <td>
                                <div>
                                    <button @click="goToEdit(item.id)" class="btn btn-orange">Edit</button>
                                    <button @click="deleteAbout(item.id)" class="btn btn-danger">Hapus</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
