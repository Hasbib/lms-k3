<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const aboutData = ref(null);

const fetchAboutUsData = () => {
    axios.get('/about-pages')
        .then((response) => {
            aboutData.value = response.data[0];
        })
        .catch((error) => {
            console.error('Error fetching About Us data:', error);
        });
};

// const fetchAboutUsData = async () => {
//     const cachedData = localStorage.getItem('aboutUsData');
//     if (cachedData) {
//         aboutData.value = JSON.parse(cachedData);
//     } else {
//         try {
//             const response = await axios.get('/about-us');
//             aboutData.value = response.data[0];
//             localStorage.setItem('aboutUsData', JSON.stringify(aboutData.value));
//         } catch (error) {
//             console.error('Error fetching About Us data:', error);
//         }
//     }
// };

onMounted(() => {
    fetchAboutUsData();
});
</script>

<template>
    <!-- ABOUT END -->
    <section class="bg-about mb-5 about-index">
        <div class="container" v-if="aboutData">
            <div class="row">
                <div class="text-left pt-5">
                    <h1 class="fs-40 fw-semibold mb-3" data-aos="fade-right" data-aos-duration="1000">About Us</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-7" data-aos="fade-right" data-aos-duration="1000">
                    <h3 class="fs-40 mb-3 fw-semibold">{{ aboutData.title
                        }}</h3>
                    <p class="fs-16 mt-4 mb-5 fw-light text-justify">{{
                        aboutData.short_description }}</p>
                </div>
                <div class="col-md-4">
                    <img :src="`${axios.defaults.baseURL.replace('/api', '')}/uploads/${aboutData.image}`"
                        class="mb-4 logo-about rounded-4" alt="foto">
                </div>
            </div>
        </div>
    </section>
    <!-- ABOUT END -->
</template>