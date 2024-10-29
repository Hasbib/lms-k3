<script setup>
import ButtonOrange from '@/components/ButtonOrange.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const mediapartnersData = ref([]);

const fetchMediaPartnersData = async () => {
    try {
        const response = await axios.get('/media-partners');
        mediapartnersData.value = response.data;
    } catch (error) {
        console.error('Error fetching media partners data:', error);
    }
};

onMounted(() => {
    fetchMediaPartnersData();
});
</script>

<template>
    <section class="pt-55 tf__banner banner"
        :style="{ backgroundImage: `url(${require('@/assets/images/bg-login.png')})` }">
        <div class="container mt-5 mb-4">
            <div class="container border-0 rounded-4 second-banner custom-shadow3 ms--10 mb-5 mb-md-0">
                <div class="row">
                    <div class="col-xl-7 banner-index">
                        <h1
                            class="fs-semibold p-3 ps-md-5 pt-md-5 fs-42 mb--10 animate__animated animate__flipInX animate__delay-1s">
                            Build and Realize Your Mind
                            With Digitefa
                        </h1>
                        <p
                            class="text-black p-3 ps-md-5 pt-md-1 mt-xl-5 fs-18 animate__animated animate__fadeInUp animate__delay-1s">
                            Digitefa is a free online course and training service
                            which aims to help you achieve your goals in the field of technology.
                        </p>
                        <div class="ps-5 pt-1">
                            <ButtonOrange onclick="window.location.href='/courses'"
                                class="w-180 cbtn fs-16 rounded-3 mt-4 animate__animated animate__fadeInUp animate__delay-1s">
                                View Course
                            </ButtonOrange>
                        </div>
                    </div>
                    <div class="col-xl-5 hide-on-small">
                        <img src="../../../assets/images/logo-banner.png"
                            class="card-img-top s-image animate__animated animate__fadeInUp" alt="foto">
                    </div>
                </div>
            </div>
        </div>
        <div class="container timeline ">
            <div class="row d-flex justify-content-center mb-4 mb-md-0">
                <div class="col-2 text-center mt-0 cmt-48">
                    <h4 class="fs-32"><span class="timer">21.000</span>+</h4>
                    <p class="fs-16">Siswa terdaftar</p>
                </div>
                <div class="col-2 text-center mt-0 mx-5 mx-md-0 cmt-48">
                    <h4 class="fs-32"><span class="timer">100</span>+</h4>
                    <p class="fs-16">Instruktur Ahli</p>
                </div>
                <div class="col-2 text-center mt-0 cmt-48">
                    <h4 class="fs-32"><span class="timer">150</span>+</h4>
                    <p class="fs-16">Kursus Gratis</p>
                </div>
            </div>
            <div class="scrollable-row cmt-40 ms-5 me-5 ms-md-0 me-md-4" v-for="item in mediapartnersData"
                :key="item.id_media_partner">
                <div class="col-xl-2 d-flex justify-content-center me-3 me-xl-0">
                    <a :href="item.social" target="_blank" rel="noopener noreferrer" class="d-flex align-items-center garis- text-dark">
                        <img :src="`${axios.defaults.baseURL.replace('/api', '')}/uploads/${item.file}`"
                            alt="Media Partner Logo" width="28" height="28">
                        <h4 class="fw-bold mb--3">{{ item.name }}</h4>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>