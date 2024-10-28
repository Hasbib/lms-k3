<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import NavbarLayout from '@/layout/NavbarLayout.vue';
import FooterLayout from '@/layout/FooterLayout.vue';
import SearchComponent from '@/components/SearchComponent.vue';
// import PaginationComponent from '@/components/PaginationComponent.vue';

import { coursesPage } from '@/data/index.js';

const coursesData = ref(coursesPage)
const currentPage = ref(1);
const itemsPerPage = 6;

const totalPages = computed(() => Math.ceil(coursesData.value.length / itemsPerPage));

const paginatedCourses = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
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
    <!-- NAVBAR START -->
    <NavbarLayout />
    <!-- NAVBAR END -->

    <!-- COURSES START -->
    <section class="bg-about-isi fw-semibold mt-100">
        <div class="container">
            <div class="row">
                <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);"
                    aria-label="breadcrumb">
                    <ol class="breadcrumb my-4 ms-1">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Courses</li>
                    </ol>
                </nav>
            </div>
        </div>
    </section>

    <section class="coursespage">
        <div class="container my-5">
            <div class="my-4 d-flex justify-content-center">
                <div class="search-input w-100">
                    <SearchComponent placeholder="Search" :customClass="'h-43'" />
                </div>
            </div>
            <div
                class="choose-section d-flex justify-content-between align-items-start h4 mb-4 border-bottom border-success-subtle choose">
                <h5 class="me-3 mt-md-3 opacity-50 pointer fs-16 active" data-target="all">All</h5>
                <h5 class="me-3 mt-md-3 opacity-50 pointer fs-16" data-target="desainer">UI/UX</h5>
                <h5 class="me-3 mt-md-3 opacity-50 pointer fs-16" data-target="fullstack">Fullstack</h5>
                <h5 class="me-3 mt-md-3 opacity-50 pointer fs-16" data-target="backend">Backend</h5>
                <h5 class="me-3 mt-md-3 opacity-50 pointer fs-16" data-target="frontend">Frontend</h5>
                <div class="ms-auto d-flex align-items-center">
                    <div class="d-flex flex-column me-3">
                        <label for="startDate" class="form-label fs-12 mb-1 fw-normal">Tanggal Mulai</label>
                        <input type="date" id="startDate" class="form-control rounded-3 mb-1 c-border fs-12"
                            placeholder="Pilih tanggal mulai" aria-label="Tanggal Mulai">
                    </div>
                    <div class="d-flex flex-column">
                        <label for="endDate" class="form-label fs-12 mb-1 fw-normal">Tanggal Berakhir</label>
                        <input type="date" id="endDate" class="form-control rounded-3 mb-1 c-border fs-12"
                            placeholder="Pilih tanggal berakhir" aria-label="Tanggal Berakhir">
                    </div>
                </div>
            </div>
            <div id="ui">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row">
                                <div class="col-md-4" v-for="course in paginatedCourses" :key="course.id">
                                    <div class="card img-thumbnail p-2 bg-biru mb-4 rounded-4 border-0">
                                        <div class="card w-100 border-0 rounded-4">
                                            <img :src="course.image" class="card-img-top rounded-4" alt="...">
                                            <p class="w-170 text-center fs-12 date">10/08/2024-15/09/2024</p>
                                            <div class="card-body">
                                                <div class="d-flex align-items-center">
                                                    <img :src="course.profil" class="rounded-circle me-3" alt="..."
                                                        height="48px">
                                                    <div>
                                                        <p class="fw-medium mb-0 fs-16">{{ course.nama }}</p>
                                                        <p class="text-muted mb-0">{{ course.role }}</p>
                                                    </div>
                                                </div>
                                                <a href="/detail-courses" class="garis- text-dark">
                                                    <h5 class="mt-4 fs-16 fw-medium">{{ course.judul }}</h5>
                                                </a>
                                                <p class="text-justify opacity-75">{{ course.deskripsi }}</p>
                                                <div class="d-flex justify-content-around">
                                                    <span class="bi bi-clock me-4">
                                                        7 <span>day</span>
                                                    </span>
                                                    <span class="bi bi-people me-4">80<span>/240</span></span>
                                                    <span class="bi bi-star-fill opacity-75"> 4,8</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav aria-label="Page navigation example">
                    <ul class="pagination d-flex justify-content-center">
                        <li v-for="page in totalPages" :key="page"
                            :class="['page-item', { active: currentPage === page }]">
                            <a class="page-link" href="#" @click.prevent="goToPage(page)">
                                {{ page }}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
    <!-- COURSES END -->

    <!-- FOOTER START -->
    <FooterLayout />
    <!-- FOOTER END -->
</template>