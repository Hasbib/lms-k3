<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import ButtonOrange from '@/components/ButtonOrange.vue';
import { useStore } from 'vuex'; // Import Vuex store

const profileImage = ref('');

const router = useRouter();
const store = useStore();
const isSidebarOpen = ref(false);
const isIntroDropdownOpen = ref(false);
const isInstallasiDropdownOpen = ref(false);
const isDasarHTMLDropdownOpen = ref(false);

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
};

const user = computed(() => store.getters.getUser);

const logoutStudent = () => {
    localStorage.removeItem('token');
    router.push('/login');
};

// Dropdown toggles
const toggleIntroDropdown = () => {
    isIntroDropdownOpen.value = !isIntroDropdownOpen.value;
};

const toggleInstallasiDropdown = () => {
    isInstallasiDropdownOpen.value = !isInstallasiDropdownOpen.value;
};

const toggledasarHTMLDropdown = () => {
    isDasarHTMLDropdownOpen.value = !isDasarHTMLDropdownOpen.value;
};

onMounted(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.student) {
        // Access `student.image` only if it exists
        profileImage.value = storedUser.student.image
            ? `${process.env.VUE_APP_BACKEND_URL}/uploads/${storedUser.student.image}`
            : require('@/assets/images/my-profile.png');
    } else {
        profileImage.value = require('@/assets/images/my-profile.png');
    }
});
</script>
<template>
    <header class="navdua" :class="{ 'navbar-blur': isSidebarOpen }">
        <nav class="navbar  navbar-dashboard navbar-expand-lg navbar-light fixed-top">
            <div class="toggle">
                <button class="navbar-toggler border-0" @click="toggleSidebar" type="button" aria-controls="navbarNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="container-fluid">
                <span class="navbar-brand">
                    <a href="/">
                        <img src="../assets/images/logo-navbar.png" alt="Logo" class="img-navbar" />
                    </a>
                </span>
                <div class="dropdown profile-section dropdown-toggle-custom rounded-25 p-2 me-md-2" type="button" id="dropdownMenuButton"
                data-bs-toggle="dropdown">
                    <img :src="profileImage" alt="Profile Picture" class="rounded-circle ms-1" />
                    <span class="profile-name fs-16">{{ user.name }} <br /> <small class="d-block mt--3 fs-12">{{
                        user.role
                            }}</small></span>
                    <button class="btn border-0 dropdown-toggle" aria-expanded="false">
                        <i class="bi bi-chevron-down ms-0 me--8"></i>
                    </button>
                    <ul class="dropdown-menu border-0 mt--1 bg" aria-labelledby="dropdownMenuButton">
                        <li>
                            <a class="dropdown-item fs-14" @click="() => router.push('/overview')">
                                <i class="bi bi-house-door-fill me-2 fw-light"></i> Dashboard
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item fs-14" @click="() => router.push('/my-course/active')">
                                <i class="bi bi-map me-2 fw-light"></i> My Course
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item fs-14" @click="() => router.push('/settings/my-profile')">
                                <i class="bi bi-gear me-2 fw-light"></i> Settings
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item fs-14" @click="() => router.push('help-desk')">
                                <i class="bi bi-exclamation-circle-fill me-2 fw-light"></i> Help Desk
                            </a>
                        </li>
                        <li>
                            <hr class="dropdown-divider" />
                        </li>
                        <li>
                            <button class="dropdown-item fs-14" @click="logoutStudent">
                                <i class="bi  bi-box-arrow-right me-2 fw-light"></i> Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <div class="side">
        <transition name="slide">
            <div v-if="isSidebarOpen" class="sidebar">
                <div class="sidebar-content">
                    <div class="d-flex justify-content-between">
                        <h5 class="fs-16 fw-medium mt-12">Profil</h5>
                        <i @click="toggleSidebar" class="bi bi-x mt--18 mr--10"></i>
                    </div>
                    <div class="profile-section2 dropdown-toggle-custom rounded-5 p-2 ps-3 mb-3 ms--8" onclick="window.location.href='/overview'">
                        <img :src="profileImage" alt="Profile Picture"
                            class="rounded-circle profil-mobile" />
                        <div>
                            <span class="profile-name fs-18">{{ user.name }}</span> <br>
                            <small class="profile-role fs-14">{{ user.role }}</small>
                        </div>
                    </div>
                    <div id="sidebar-course" class="mt-5">
                        <ul>
                            <li class="ms-24 mt-2">
                                <span class="text fs-16 fw-medium p-absolute mb-4">Statistik</span>
                                <div class="d-flex align-items-center me-1">
                                    <div class="me-5 w-200 position-relative mt-5">
                                        <div class="progress mt-4 bg-progress h-8">
                                            <div class="h-8 w-20 bg-progress-progress" role="progressbar"
                                                aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <span class="progress-text fs-14 fw-medium">20%</span>
                                        <p class="fs-12 fw-normal">4 dari 20 video telah selesai </p>
                                    </div>
                                </div>
                            </li>
                            <li class="ms-10 mt-2">
                                <a href="#" @click.prevent="toggleIntroDropdown" class="text-biru-side">
                                    <span class="icon"></span>
                                    <span class="mt-2 text p-absolute text-biru-side fw-medium">Intro</span>
                                    <span class="bi text mt-2 mr--25 p-absolute r-8"
                                        :class="isIntroDropdownOpen ? 'bi-chevron-up' : 'bi-chevron-down'"></span>
                                </a>
                                <ul v-show="isIntroDropdownOpen" class="dropdown mt--3">
                                    <li class="ms-24 my-3">
                                        <router-link to="" class="text-biru-side2 text-decoration-none"
                                            exact-active-class="active-sidebar">
                                            <div class="d-flex align-items-center mb--20">
                                                <p class="bi bi-play-circle me-2"></p>
                                                <p class="fs-16 text">Perkenalan instruktur</p>
                                            </div>
                                        </router-link>
                                    </li>
                                </ul>
                            </li>
                            <li class="ms-10 mt-2">
                                <a href="#" @click.prevent="toggleInstallasiDropdown" class="text-biru-side">
                                    <span class="icon"></span>
                                    <span class="mt-2 text p-absolute text-biru-side fw-medium">Installasi</span>
                                    <span class="bi text mt-2 mr--25 p-absolute r-8"
                                        :class="isInstallasiDropdownOpen ? 'bi-chevron-up' : 'bi-chevron-down'"></span>
                                </a>
                                <ul v-show="isInstallasiDropdownOpen" class="dropdown mt--3">
                                    <li class="ms-24 my-3">
                                        <router-link to="" class="text-biru-side2 text-decoration-none"
                                            exact-active-class="active-sidebar">
                                            <div class="d-flex align-items-center">
                                                <p class="bi bi-play-circle me-2"></p>
                                                <p class="fs-16 text">Download Tools</p>
                                            </div>
                                        </router-link>
                                        <router-link to="/room/installasi-tools"
                                            class="text-biru-side2 text-decoration-none"
                                            exact-active-class="active-sidebar">
                                            <div class="d-flex align-items-center">
                                                <p class="bi bi-play-circle me-2"></p>
                                                <p class="fs-16 text">Installasi Tools</p>
                                            </div>
                                        </router-link>
                                        <router-link to="/room/essay" class="text-biru-side2 text-decoration-none"
                                            exact-active-class="active-sidebar">
                                            <div class="d-flex align-items-center">
                                                <p class="bi bi-file-earmark me-2"></p>
                                                <p class="fs-16 text">Essay</p>
                                            </div>
                                        </router-link>
                                        <router-link to="/room/assignment" class="text-biru-side2 text-decoration-none"
                                            exact-active-class="active-sidebar">
                                            <div class="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                                    viewBox="0 0 1024 1024" class="me-2 mt--18">
                                                    <path fill="currentColor"
                                                        d="M805.504 320L640 154.496V320zM832 384H576V128H192v768h640zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m318.4 582.144l180.992-180.992L704.64 510.4L478.4 736.64L320 578.304l45.248-45.312z" />
                                                </svg>
                                                <p class="fs-16 text">Assignment</p>
                                            </div>
                                        </router-link>
                                        <router-link to="" class="text-biru-side2 text-decoration-none"
                                            exact-active-class="active-sidebar">
                                            <div class="d-flex align-items-center">
                                                <p class="bi bi-play-circle me-2"></p>
                                                <p class="fs-16 text">Basic Penggunaan Tools</p>
                                            </div>
                                        </router-link>
                                    </li>
                                </ul>
                            </li>
                            <li class="ms-10 mt-2">
                                <a href="#" @click.prevent="toggledasarHTMLDropdown" class="text-biru-side">
                                    <span class="icon"></span>
                                    <span class="mt-2 text p-absolute text-biru-side fw-medium">Dasar HTML</span>
                                    <span class="bi text mt-2 mr--25 p-absolute r-8"
                                        :class="isDasarHTMLDropdownOpen ? 'bi-chevron-up' : 'bi-chevron-down'"></span>
                                </a>
                                <ul v-show="isDasarHTMLDropdownOpen" class="dropdown mt--3">
                                    <li class="ms-24 my-3">
                                        <router-link to="" class="text-biru-side2 text-decoration-none"
                                            exact-active-class="active-sidebar">
                                            <div class="d-flex align-items-center">
                                                <p class="bi bi-play-circle me-2"></p>
                                                <p class="fs-16 text">Tentang HTML</p>
                                            </div>
                                        </router-link>
                                        <router-link to="" class="text-biru-side2 text-decoration-none"
                                            exact-active-class="active-sidebar">
                                            <div class="d-flex align-items-center">
                                                <p class="bi bi-play-circle me-2"></p>
                                                <p class="fs-16 text">Menjalankan code</p>
                                            </div>
                                        </router-link>
                                        <router-link to="/room/tag" class="text-biru-side2 text-decoration-none"
                                            exact-active-class="active-sidebar">
                                            <div class="d-flex align-items-center">
                                                <p class="bi bi-play-circle me-2"></p>
                                                <p class="fs-16 text">Tag</p>
                                            </div>
                                        </router-link>
                                        <router-link to="" class="text-biru-side2 text-decoration-none"
                                            exact-active-class="active-sidebar">
                                            <div class="d-flex align-items-center">
                                                <p class="bi bi-play-circle me-2"></p>
                                                <p class="fs-16 text">Header dan Paragraf</p>
                                            </div>
                                        </router-link>
                                        <router-link to="" class="text-biru-side2 text-decoration-none"
                                            exact-active-class="active-sidebar">
                                            <div class="d-flex align-items-center">
                                                <p class="bi bi-play-circle me-2"></p>
                                                <p class="fs-16 text">List</p>
                                            </div>
                                        </router-link>
                                        <router-link to="" class="text-biru-side2 text-decoration-none"
                                            exact-active-class="active-sidebar">
                                            <div class="d-flex align-items-center">
                                                <p class="bi bi-play-circle me-2"></p>
                                                <p class="fs-16 text">Table</p>
                                            </div>
                                        </router-link>
                                    </li>
                                </ul>
                            </li>
                            <ButtonOrange class="w-96 h-43 mt-4 rounded-4 ms-2 text-left" @click="logoutStudent">Logout
                            </ButtonOrange>
                        </ul>
                    </div>
                </div>
            </div>
        </transition>
    </div>
    <div v-if="isSidebarOpen" class="overlay-blur" @click="toggleSidebar"></div>
</template>