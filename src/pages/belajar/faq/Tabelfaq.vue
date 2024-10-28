<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const faqData = ref([]);
const router = useRouter();

const fetchAboutUsData = async () => {
    try {
        const response = await axios.get('/faqs');
        faqData.value = response.data;
    } catch (error) {
        console.error('Error fetching About Us data:', error);
    }
};

const deleteAbout = async (id_faq) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this data faq?");
    if (isConfirmed) {
        try {
            await axios.delete(`/faqs/${id_faq}`);
            fetchAboutUsData();
        } catch (error) {
            console.error('Error deleting alat:', error);
        }
    }
};

const goToEdit = (id) => {
    router.push(`/edit-faq/${id}`);
};

onMounted(() => {
    fetchAboutUsData();
});
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="card bg-danger p-5 mt-5">
                <button class="btn btn-hijau w-15 h-40 mb-3" onclick="window.location.href='/add-faq'">Add</button>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Answer</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in faqData" :key="item.id">
                            <td>{{ item.title }}</td>
                            <td>{{ item.answer }}</td>
                            <td>
                                <div>
                                    <button @click="goToEdit(item.id_faq)" class="btn btn-orange">Edit</button>
                                    <button @click="deleteAbout(item.id_faq)" class="btn btn-danger">Hapus</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
