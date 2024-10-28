<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import NavbarLayout from '@/layout/NavbarLayout.vue';
import FooterLayout from '@/layout/FooterLayout.vue';
import ButtonSuccess from '@/components/ButtonSuccess.vue';

import { reviewCourse } from '@/data/index.js';

const reviewData = ref(reviewCourse);

const itemsPerPage = 4;
const currentPage = ref(1);
const isModalVisible = ref(false);

const totalPages = computed(() => Math.ceil(reviewData.value.length / itemsPerPage));

const paginatedReviews = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return reviewData.value.slice(start, end);
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

const showModal = () => {
    isModalVisible.value = true;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '15px';
};

const closeModal = () => {
    isModalVisible.value = false;
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
};

</script>

<template>
    <!-- NAVBAR START -->
    <NavbarLayout />
    <!-- NAVBAR END -->

    <!-- DETAIL COURSES START -->
    <section class="bg-about-isi fw-semibold mt-100">
        <div class="container">
            <div class="row">
                <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);"
                    aria-label="breadcrumb">
                    <ol class="breadcrumb my-4 ms-1">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Course</li>
                        <li class="breadcrumb-item active" aria-current="page">Detail Course</li>
                    </ol>
                </nav>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="row dc">
                <h5 class="mb-3 mt-4 fs-20 opacity-75 fw-medium">Web design dan development</h5>
                <h1 class="mb-3 fw-semibold fs-40">Basic Web Programming</h1>
                <p class="mb-5 fs-16 opacity-75 fw-medium">Learn the basics of website creation for beginners</p>
                <div class="position-relative" @click="showModal">
                    <div class="play-button">
                        <div class="triangle"></div>
                    </div>
                    <img class="img-fluid rounded c-iframe" src="../../../assets/images/course.png"
                        alt="Basic Web Programming">
                </div>
                <div v-if="isModalVisible" class="modal-backdrop" @click="closeModal"></div>
                <div v-if="isModalVisible" class="modal fade show d-block" role="dialog"
                    aria-labelledby="videoModalLabel" aria-hidden="true" @click.self="closeModal">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-body">
                                <iframe id="modalIframe" class="dc-height" height="315"
                                    src="https://www.youtube.com/embed/poZtdyC24P4?autoplay=1" title="YouTube Video"
                                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                        encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-start h4 my-4 border-bottom border-dark sub-nav">
                <h5 class="me-3 pointer fs-16 active" data-target="deskripsi">Description</h5>
                <h5 class="me-3 pointer fs-16" data-target="teacher">Teacher</h5>
                <h5 class="me-3 pointer fs-16" data-target="rules">Rules & Conditions</h5>
                <h5 class="me-3 pointer fs-16" data-target="review">Review Course</h5>
            </div>
            <div id="deskripsi" class="section active dc-isi">
                <h3 class="fs-20 mb-3 fw-semibold">Course Overview</h3>
                <p class="fs-16 fw-normal text-justify">Web programming is foundational to creating and maintaining the
                    websites
                    and
                    online services we use
                    every day. As the backbone of the World Wide Web (WWW), web programming equips you with the skills
                    to build and enhance digital platforms.
                    In this introductory course, you will explore the fundamental aspects of web development, learning
                    how to create websites using essential technologies such as HTML, CSS, and JavaScript. These tools
                    are crucial for anyone looking to build functional and visually appealing web pages.<br>
                    Benefits of Learning Web Programming: <br>
                    &emsp;• Develop custom web solutions tailored to various business needs.<br>
                    &emsp;• Create and manage your own website with confidence. <br>
                    &emsp;• Open doors to career opportunities in web development and technology.</p>
                <p class="mb-sm-4 fs-16 fw-semibold mt-md-4">Duration :August 10, 2024 to September 30, 2024</p>
                <p class="fs-20 fw-semibold">Tags</p>
                <div class="d-flex justify-content-start mb-5">
                    <button class="rounded-3 c-border bg-white w-120 h-43 fs-16 fw-normal">Fullstack</button>
                    <button class="mx-3 rounded-3 c-border bg-white w-120 h-43 fs-16 fw-normal">Frontend</button>
                </div>
                <div class="bg-about2">
                    <div class="row">
                        <div class="text-center">
                            <h1 class="fs-20 fw-semibold mb-3 mt-5">Explore Your Passion – Enroll in Our
                                Exclusive Courses Now!
                            </h1>
                            <p class="fs-16 mb-3">Dive into learning at no cost by clicking the button below.
                            </p>
                            <div class="d-flex justify-content-center">
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                    <label class="form-check-label fs-16 fw-light opacity-75" for="exampleCheck1">"I
                                        agree to the Course
                                        Terms and
                                        Data Policy"</label>
                                </div>
                            </div>
                            <ButtonSuccess class="mb-5 h-45 col-6 col-md-2 rounded-4 fs-16 fw-normal">
                                START LEARNING
                            </ButtonSuccess>
                        </div>
                    </div>
                </div>
            </div>
            <div id="teacher" class="section dc-teacher">
                <div class="row">
                    <div class="col-md-2">
                        <img src="../../../assets/images/avatar.png" class="rounded-circle me-3" alt="..."
                            height="160px">
                    </div>
                    <div class="col-md-10">
                        <div class="p-absolute name">
                            <p class="fw-semibold fs-16 mb-1 mt-3">Wina salim</p>
                            <p class="fs-16 mb-4 fw-medium">Fullstack programer - kodegiri</p>
                        </div>
                        <p class="text-justify mb-5 fs-16 fw-light opacity-75 mt-95">Wina Salim adalah seorang Fullstack
                            Programmer
                            dengan pengalaman
                            lebih dari 7 tahun di dunia teknologi. Ia berfokus pada pengembangan aplikasi web dengan
                            menggunakan teknologi terbaru seperti React.js dan Node.js. Wina memiliki passion besar
                            dalam mengajar pemula dan membimbing mereka melalui proses belajar pemrograman. Dengan
                            pengalaman bekerja di beberapa proyek besar, ia juga sering menjadi pembicara di berbagai
                            acara teknologi.</p>
                    </div>
                </div>
            </div>
            <div id="rules" class="section dc-rules">
                <h3 class="fs-20 mb-3 fw-semibold">Course Terms & Conditions</h3>
                <p class="fs-16 fw-normal mb-4">By taking this course, you agree to the following terms and
                    conditions:<br>
                    Complete all course materials to obtain a certificate.</p>
                <p class="fs-16 fw-normal mb-5">1. Complete all course materials to obtain a certificate.<br>
                    2. Each video lesson must be completed in order before moving on to the next lesson.<br>
                    3. Assignments must be submitted by the given deadline.<br>
                    4. No refunds after the course has been purchased.<br>
                    5. Follow all community rules when discussing with other students in the discussion forum.<br>
                    6. Certificates will be awarded once all assignments are completed and earned the specified minimum
                    grade.</p>
            </div>
            <div id="review" class="section dc-review">
                <div v-for="review in paginatedReviews" :key="review.id"
                    class="card bg-review-course mb-3 border-0 rounded-4">
                    <div class="d-flex justify-content-start">
                        <div class="col-md-1">
                            <img :src="review.profil" class="rounded-circle mx-3 my-3" alt="Profile" height="70px">
                        </div>
                        <div class="col-3 col-md-1 mt-4 ms-md-2">
                            <p class="fw-bold mb-0 fs-16">{{ review.nama }}</p>
                            <div class="d-flex justify-content-start">
                                <i v-for="star in review.stars" :key="star" class="bi bi-star-fill color-start"></i>
                            </div>
                        </div>
                        <div class="col-md-9 ms-md-5 ms-0">
                            <p class="mx-3 mx-md-0 my-4 text-justify fs-16">{{ review.review }}</p>
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
    <!-- DETAIL COURSES END -->

    <!-- FOOTER START -->
    <FooterLayout />
    <!-- FOOTER END -->
</template>