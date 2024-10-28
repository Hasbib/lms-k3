<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';

import { coursesPage } from '@/data/index.js';

const coursesData = ref(coursesPage);
const currentPage = ref(1);
const itemsPerPage = 3;
const maxPages = 4;

const totalPages = computed(() => Math.min(Math.ceil(coursesData.value.length / itemsPerPage), maxPages));
const paginatedCourses = computed(() => {
    const start = currentPage.value - 1;
    const end = start + itemsPerPage;
    return coursesData.value.slice(start, end);
});
const goToPage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
};

const router = useRouter();
const handleNavigation = () => {
    const pointers = document.querySelectorAll('.pointer');
    const sections = document.querySelectorAll('.section');
    pointers.forEach(pointer => {
        pointer.addEventListener('click', () => {
            pointers.forEach(p => p.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            pointer.classList.add('active');
            const targetId = pointer.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });
};
onMounted(() => {
    handleNavigation();
    router.afterEach(() => {
        handleNavigation();
    });
});
onUnmounted(() => {
    const pointers = document.querySelectorAll('.pointer');
    pointers.forEach(pointer => {
        pointer.removeEventListener('click', handleNavigation);
    });
});
</script>

<template>
    <section class="recomend-index">
        <div class="container my-5">
            <div class="row">
                <h1 class="fs-40 fw-semibold" data-aos="zoom-in-right" data-aos-duration="1000">Recommended Course for
                    You</h1>
            </div>
            <div class="d-flex justify-content-between h4 mb-4 border-bottom border-success-subtle">
                <h5 class="me-3 opacity-50 pointer fs-16 active" data-target="ui">UI/UX</h5>
                <h5 class="me-3 opacity-50 pointer fs-16" data-target="fullstack">Fullstack</h5>
                <h5 class="me-3 opacity-50 pointer fs-16" data-target="backend">Backend</h5>
                <h5 class="me-3 opacity-50 pointer fs-16" data-target="frontend">Frontend</h5>
                <router-link to="/courses" class="ms-auto text-right opacity-50 fs-16 garis- text-dark">See
                    all</router-link>
            </div>
            <div id="ui">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row">
                                <div class="col-12 col-md-4" v-for="(course, index) in paginatedCourses"
                                    :key="course.id" :class="{ 'd-none d-md-block': index > 0 }">
                                    <div class="card img-thumbnail p-2 bg-biru mb-3 rounded-4 border-0">
                                        <div class="card w-100 border-0 rounded-4">
                                            <img :src="course.image" class="card-img-top rounded-4" alt="...">
                                            <p class="w-170 text-center fs-12 date">10/08/2024-15/09/2024</p>
                                            <div class="card-body">
                                                <div class="d-flex align-items-center">
                                                    <img :src="course.profil" class="rounded-circle me-3" alt="..."
                                                        height="48px">
                                                    <div>
                                                        <p class="fw-medium mb-0 fs-16">{{ course.nama }}</p>
                                                        <p class="text-muted mb-0 fs-16">{{ course.role }}</p>
                                                    </div>
                                                </div>
                                                <a href="/detail-courses" class="garis- text-dark">
                                                    <h5 class="mt-4 fs-16 fw-medium">{{ course.judul }}</h5>
                                                </a>
                                                <p class="text-justify opacity-75 fs-16">{{ course.deskripsi }}</p>
                                                <div class="d-flex justify-content-around">
                                                    <span class="bi bi-clock me-4 fs-16">
                                                        7 <span>day</span>
                                                    </span>
                                                    <span class="bi bi-people me-4 fs-16">80<span>/240</span></span>
                                                    <span class="bi bi-star-fill opacity-75 fs-16"> 4,8</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center mt-2">
                    <div v-for="(page, index) in totalPages" :key="index" class="pagination-circle"
                        :class="{ 'active-circle': currentPage === page }" @click="goToPage(page)">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>