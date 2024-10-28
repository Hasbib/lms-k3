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



const fileInput = ref(null);

const openFileDialog = () => {
    fileInput.value.click();
};

const uploadFile = () => {
    const file = fileInput.value.files[0];
    if (file) {
        console.log('File yang dipilih:', file);
    } else {
        alert('Silakan pilih file terlebih dahulu.');
    }
};
</script>

<template>
    <div class="bg-room">
        <!-- NAVBAR START -->
        <NavbarCourses />
        <!-- NAVBAR END -->

        <!-- SIDEBAR START -->
        <SidebarCourse v-if="isSidebarVisible" />
        <!-- SIDEBAR END -->

        <div id="room" class="assignment">
            <div class="container mt-md-2 pe-md-4">
                <div class="row">
                    <div class="tab-pane">
                        <div class="card ms-2 ps-1 border-0 rounded-4 asigg">
                            <ul class="nav">
                                <li class="nav-item fs-16">
                                    <a class="nav-link" :class="{ 'active': activeTab === 'about' }" href="#about"
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
                                    <h4 class="card-title fs-16 fw-semibold mb-1">Pengantar Pembuatan Dasar Website:
                                        Struktur, Desain, dan Fungsionalitas</h4>
                                    <p class="card-text fs-16 fw-normal text-justify mb-md-4 mb-3">Esai ini mengulas
                                        langkah-langkah dasar
                                        dalam pembuatan website, mulai dari struktur HTML, penggunaan CSS untuk tata
                                        letak dan desain, hingga integrasi
                                        JavaScript untuk fungsionalitas dasar. Fokus utama dari tugas ini adalah
                                        memahami elemen-elemen inti yang diperlukan untuk membangun sebuah website yang
                                        responsif dan berfungsi dengan baik.</p>
                                    <div class="ul">
                                        <h4 class="card-title fs-16 fw-semibold mb-1">Submission Status</h4>
                                        <ul class="card-text fs-16 fw-light">
                                            <li>
                                                <span class="platform card-text fs-16 fw-light">Submission Status</span>
                                                <span class="separator">:</span>
                                                <a class="garis- text-dark" href="#">Not submitted</a>
                                            </li>
                                            <li>
                                                <span class="platform card-text fs-16 fw-light">Grading Status</span>
                                                <span class="separator">:</span>
                                                <a class="garis- text-dark" href="#">0/100</a>
                                            </li>
                                            <li>
                                                <span class="platform card-text fs-16 fw-light">Due Date</span>
                                                <span class="separator">:</span>
                                                <a class="garis- text-dark" href="#">Friday, October 4, 2024, 11:59
                                                    PM</a>
                                            </li>
                                            <li>
                                                <span class="platform card-text fs-16 fw-light">Time Remaining</span>
                                                <span class="separator">:</span>
                                                <a class="garis- text-dark" href="#">Assignment is due in 2 weeks</a>
                                            </li>
                                            <li>
                                                <span class="platform card-text fs-16 fw-light">Completion Time</span>
                                                <span class="separator">:</span>
                                                <a class="garis- text-dark" href="#">2 hours to complete the task</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <form action="">
                                        <div class="file-upload mt-md-5 mt-3 mb-3" @click="openFileDialog">
                                            <input type="file" ref="fileInput" class="fp" />
                                            <div class="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50"
                                                    height="50" viewBox="0 0 48 48">
                                                    <path
                                                        d="M 8.5 8 C 6.019 8 4 10.019 4 12.5 L 4 35.5 C 4 37.981 6.019 40 8.5 40 L 39.5 40 C 41.981 40 44 37.981 44 35.5 L 44 17.5 C 44 15.019 41.981 13 39.5 13 L 24.042969 13 L 19.572266 9.2734375 C 18.586266 8.4514375 17.335734 8 16.052734 8 L 8.5 8 z M 24 19 C 24.552 19 25 19.448 25 20 L 25 30.5 C 25 30.538 24.982516 30.570422 24.978516 30.607422 L 28.292969 27.292969 C 28.683969 26.901969 29.316031 26.901969 29.707031 27.292969 C 30.098031 27.683969 30.098031 28.316031 29.707031 28.707031 L 24.707031 33.707031 C 24.512031 33.902031 24.256 34 24 34 C 23.744 34 23.487969 33.902031 23.292969 33.707031 L 18.292969 28.707031 C 17.901969 28.316031 17.901969 27.683969 18.292969 27.292969 C 18.683969 26.901969 19.316031 26.901969 19.707031 27.292969 L 23.021484 30.607422 C 23.017484 30.570422 23 30.538 23 30.5 L 23 20 C 23 19.448 23.448 19 24 19 z M 23.892578 31.478516 L 24 31.585938 L 24.107422 31.478516 C 24.070422 31.482516 24.038 31.5 24 31.5 C 23.962 31.5 23.929578 31.482516 23.892578 31.478516 z">
                                                    </path>
                                                </svg>
                                            </div>
                                            <p class="fw-semibold fs-16 opacity-50 mb-0">Drag and drop your files here
                                            </p>
                                            <p class="fs-12 opacity-50">or click to select files</p>
                                        </div>
                                        <div class="text-center">
                                            <ButtonSuccess class="mt-2 my-0 h-38 w-15 fs-16"
                                                @click.prevent="uploadFile">
                                                Upload</ButtonSuccess>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" :class="{ active: activeTab === 'resources' }" id="resources">
                            <div class="card text-left rounded-4 p-md-4 p-1 border-0 mt-35">
                                <div class="card-body">
                                    <h4 class="card-title fs-16 fw-semibold">Membangun Website Pertama Anda: Dasar-dasar
                                        HTML, CSS, dan JavaScript</h4>
                                    <p class="card-text fs-16 fw-normal text-justify mb-3">Dalam assignment ini, Anda
                                        akan mempelajari bagaimana membangun sebuah website dasar menggunakan HTML, CSS,
                                        dan JavaScript. Anda akan melalui proses pembuatan halaman web yang melibatkan
                                        pembuatan struktur menggunakan HTML, mengatur gaya dan tampilan dengan CSS,
                                        serta menambahkan interaktivitas dengan JavaScript. Tugas ini juga mencakup
                                        prinsip-prinsip desain web modern dan penerapan praktik terbaik dalam
                                        pengembangan web.</p>
                                    <h4 class="card-title fs-16 fw-semibold">Download the required assets </h4>
                                    <div class="text-center">
                                        <ButtonTransparanComponen
                                            class="mt-md-5 mt-4 my-0 h-45 w-20 rounded-3 c-border bg-white fs-16"> <i
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