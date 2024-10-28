<script setup>
import NavbarCourses from '@/layout/NavbarCourses.vue';
import SidebarCourse from '@/layout/SidebarCourse.vue';
import ButtonSuccess from '@/components/ButtonSuccess.vue';
import ButtonTransparanComponen from '@/components/ButtonTransparanComponen.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const activeTab = ref('about');

const isSidebarVisible = ref(true);

const checkWindowSize = () => {
    isSidebarVisible.value = window.innerWidth >= 768;
};

onMounted(() => {
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);
});

onUnmounted(() => {
    window.removeEventListener('resize', checkWindowSize);
});


const handleNavigation = () => {
    const pointers = document.querySelectorAll('.pointer');
    const sections = document.querySelectorAll('.section');

    pointers.forEach(pointer => {
        pointer.addEventListener('click', () => {
            pointers.forEach(p => p.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            pointer.classList.add('active');
            const targetId = pointer.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
                activeTab.value = targetId;
            }
        });
    });
};

onMounted(() => {
    handleNavigation();
});
</script>

<template>
    <div class="bg-room">
        <!-- NAVBAR START -->
        <NavbarCourses />
        <!-- NAVBAR END -->

        <!-- SIDEBAR START -->
        <SidebarCourse v-if="isSidebarVisible" />
        <!-- SIDEBAR END -->

        <div id="room" class="essay">
            <div class="container mt-md-2 pe-md-4">
                <div class="row">
                    <div class="tab-pane">
                        <div class="card ms-2 ps-1 border-0 rounded-4 asigg">
                            <ul class=" nav">
                                <li class="nav-item">
                                    <a class="nav-link fs-16" :class="{ 'active': activeTab === 'about' }" href="#about"
                                        @click.prevent="activeTab = 'about'">
                                        About
                                    </a>
                                </li>
                                <li class="nav-item fs-16">
                                    <a class="nav-link" :class="{ 'active': activeTab === 'resources' }"
                                        href="#resources" @click.prevent="activeTab = 'resources'">
                                        Resources
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="tab-content">
                        <div class="tab-pane" :class="{ active: activeTab === 'about' }" id="about">
                            <div class="card text-left rounded-4 p-md-4 p-1 border-0 mt-35">
                                <div class="card-body">
                                    <h4 class="card-title fs-16 fw-semibold">Pengantar Pembuatan Dasar Website:
                                        Struktur, Desain, dan Fungsionalitas</h4>
                                    <p class="card-text fs-16 fw-normal text-justify mb-4">Esai ini mengulas
                                        langkah-langkah dasar
                                        dalam pembuatan website, mulai dari struktur HTML, penggunaan CSS untuk tata
                                        letak dan desain, hingga integrasi
                                        JavaScript untuk fungsionalitas dasar. Fokus utama dari tugas ini adalah
                                        memahami elemen-elemen inti yang diperlukan untuk membangun sebuah website yang
                                        responsif dan berfungsi dengan baik.</p>
                                    <div class="ul">
                                        <h4 class="card-title fs-16 fw-semibold">Submission Status</h4>
                                        <ul class="card-text fs-16 fw-light">
                                            <li>
                                                <span class="platform">Submission Status</span>
                                                <span class="separator">:</span>
                                                <a class="garis- text-dark" href="#">Not submitted</a>
                                            </li>
                                            <li>
                                                <span class="platform">Grading Status</span>
                                                <span class="separator">:</span>
                                                <a class="garis- text-dark" href="#">0/100</a>
                                            </li>
                                            <li>
                                                <span class="platform">Due Date</span>
                                                <span class="separator">:</span>
                                                <a class="garis- text-dark" href="#">Friday, October 4, 2024, 11:59
                                                    PM</a>
                                            </li>
                                            <li>
                                                <span class="platform">Time Remaining</span>
                                                <span class="separator">:</span>
                                                <a class="garis- text-dark" href="#">Assignment is due in 2 weeks</a>
                                            </li>
                                            <li>
                                                <span class="platform">Completion Time</span>
                                                <span class="separator">:</span>
                                                <a class="garis- text-dark" href="#">2 hours to complete the task</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="text-center">
                                        <ButtonSuccess class="mt-md-5 mt-4 h-38 w-20 fs-16"
                                            onclick="window.location.href='/room/questions'">Start</ButtonSuccess>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" :class="{ active: activeTab === 'resources' }" id="resources">
                            <div class="card text-left rounded-4 p-md-4 p-1 border-0 mt-35">
                                <div class="card-body">
                                    <h4 class="card-title fs-16 fw-semibold">Pengantar Pembuatan Dasar Website:
                                        Struktur, Desain, dan Fungsionalitas</h4>
                                    <p class="card-text fs-16 fw-normal text-justify mb-4">Esai ini mengulas
                                        langkah-langkah dasar dalam pembuatan website, mulai dari struktur HTML,
                                        penggunaan CSS untuk tata letak dan desain, hingga integrasi JavaScript untuk
                                        fungsionalitas dasar. Fokus utama dari tugas ini adalah memahami elemen-elemen
                                        inti yang diperlukan untuk membangun sebuah website yang responsif dan berfungsi
                                        dengan baik.</p>
                                    <h4 class="card-title fs-16 fw-semibold">Download the required assets </h4>
                                    <div class="text-center">
                                        <ButtonTransparanComponen
                                            class="mt-5 my-0 h-45 w-20 rounded-3 c-border bg-white fs-16"> <i
                                                class="bi bi-download me-2"></i>Download
                                        </ButtonTransparanComponen>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>