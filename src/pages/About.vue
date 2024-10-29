<script setup>
import NavbarLayout from '@/layout/NavbarLayout.vue';
import FooterLayout from '@/layout/FooterLayout.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const aboutData = ref(null);
const sosmedData = ref(null);
const fetchAboutUsData = () => {
    axios.get('/about-pages')
        .then((response) => {
            aboutData.value = response.data[0];
        })
        .catch((error) => {
            console.error('Error fetching About Us data:', error);
        });
    axios.get('/social-media')
        .then((response) => {
            sosmedData.value = response.data;
        })
        .catch((error) => {
            console.error('Error fetching Sosial Media data:', error);
        });
};

// const fetchAboutUsData = async () => {
//     const cachedData = localStorage.getItem('aboutUsData');
//     if (cachedData) {
//         aboutData.value = JSON.parse(cachedData);
//     } else {
//         try {
//             const response = await axios.get('/about-pages');
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
    <!-- NAVBAR START -->
    <NavbarLayout />
    <!-- NAVBAR END -->

    <!-- ABOUT START -->
    <section class="bg-about-isi fw-semibold mt-100">
        <div class="container">
            <div class="row">
                <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);"
                    aria-label="breadcrumb">
                    <ol class="breadcrumb my-4 ms-1">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">About</li>
                    </ol>
                </nav>
            </div>
        </div>
    </section>

    <section class="page-about" v-if="aboutData">
        <div class="container">
            <div class="row">
                <div class="ps-3 my-3 d-flex justify-content-center">
                    <h1 class="fs-40 fw-semibold">{{ aboutData.title }}</h1>
                </div>
                <div class="d-flex justify-content-center">
                    <img :src="`${axios.defaults.baseURL.replace('/api', '')}/uploads/${aboutData.image}`"
                        alt="E-Learning" class="rectangle-img rounded-4">
                </div>
                <div class="me-md-5">
                    <p class="mt-4 mt-md-5 text-justify fs-16 ms-md-1" data-aos="fade-up" data-aos-duration="2000">
                        {{ aboutData.description }}
                    </p>
                </div>
                <div class="me-md-4" v-for="(subsection, index) in aboutData.subsections" :key="index">
                    <h3 class="mt-3 fs-20 fw-semibold ms-md-1" data-aos="fade-up" data-aos-duration="2000">
                        {{ subsection.subtitle }}
                    </h3>
                    <p class="mt-2 text-justify fs-16 ms-md-1 me-md-5" data-aos="fade-up" data-aos-duration="2000">
                        {{ subsection.description }}
                    </p>
                </div>
                <h3 class="mt-3 fs-20 fw-semibold ms-md-1" data-aos="fade-up" data-aos-duration="2000">Sosial Media</h3>
                <div class="fs-16">
                    <ul data-aos="fade-up" data-aos-duration="2000">
                        <li v-for="(sosmed, index) in sosmedData" :key="index">
                            <span class="platform mb-0 ms-md-2">{{ sosmed.name }}</span>
                            <span>: </span>
                            <a :href="sosmed.link" target="_blank">@Digitefa</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER START -->
    <FooterLayout />
    <!-- FOOTER END -->
</template>
