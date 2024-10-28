<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const mediapartnersData = ref([]);
const router = useRouter();

const fetchAboutUsData = async () => {
    try {
        const response = await axios.get('/media-partners');
        mediapartnersData.value = response.data;
    } catch (error) {
        console.error('Error fetching About Us data:', error);
    }
};

const deleteAbout = async (id_media_partner) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this data about?");
    if (isConfirmed) {
        try {
            await axios.delete(`/media-partners/${id_media_partner}`);
            fetchAboutUsData();
        } catch (error) {
            console.error('Error deleting alat:', error);
        }
    }
};

const goToEdit = (id) => {
    router.push(`/edit-media-mp/${id}`);
};

onMounted(() => {
    fetchAboutUsData();
});
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="card bg-danger p-5 mt-5">
                <button class="btn btn-hijau w-15 h-40 mb-3" onclick="window.location.href='/add-media-mp'">Add</button>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Sosial Link</th>
                            <th>Address</th>
                            <th>File</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in mediapartnersData" :key="item.id">
                            <td>{{ item.name }}</td>
                            <td>{{ item.social_link }}</td>
                            <td>{{ item.address }}</td>
                            <td>
                                <img :src="`${axios.defaults.baseURL.replace('/api', '')}/uploads/${item.file}`" class="rectangle-img rounded-4">
                            </td>
                            <td>
                                <div>
                                    <button @click="goToEdit(item.id_media_partner)" class="btn btn-orange">Edit</button>
                                    <button @click="deleteAbout(item.id_media_partner)" class="btn btn-danger">Hapus</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
