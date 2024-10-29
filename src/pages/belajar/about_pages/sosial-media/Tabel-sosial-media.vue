<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const sosmedData = ref([]);
const router = useRouter();

const fetchAboutUsData = async () => {
    try {
        const response = await axios.get('/social-media');
        sosmedData.value = response.data;
    } catch (error) {
        console.error('Error fetching About Us data:', error);
    }
};

const deleteAbout = async (id_social_media) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this data sosial media?");
    if (isConfirmed) {
        try {
            await axios.delete(`/social-media/${id_social_media}`);
            fetchAboutUsData();
        } catch (error) {
            console.error('Error deleting alat:', error);
        }
    }
};

const goToEdit = (id) => {
    router.push(`/edit/${id}`);
};

onMounted(() => {
    fetchAboutUsData();
});
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="card bg-danger p-5 mt-5">
                <button class="btn btn-hijau w-15 h-40 mb-3" onclick="window.location.href='/add'">Add</button>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Link</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in sosmedData" :key="item.id">
                            <td>{{ item.name }}</td>
                            <td>{{ item.link }}</td>
                            <td>
                                <div>
                                    <button @click="goToEdit(item.id_social_media)" class="btn btn-orange">Edit</button>
                                    <button @click="deleteAbout(item.id_social_media)"
                                        class="btn btn-danger">Hapus</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
