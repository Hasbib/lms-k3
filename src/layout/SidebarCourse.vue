<template>
    <div id="sidebar-course">
        <ul>
            <li class="ms-24 mt-50">
                <span class="text fs-16 fw-medium p-absolute mb-4">Statistik</span>
                <div class="d-flex align-items-center me-1">
                    <div class="me-5 w-200 position-relative mt-5">
                        <div class="progress mt-4 bg-progress h-8">
                            <div class="h-8 w-20 bg-progress-progress" role="progressbar" aria-valuenow="20"
                                aria-valuemin="0" aria-valuemax="100"></div>
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
                    <span class="bi text mt-2 mr--25 p-absolute r-24"
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
                    <span class="bi text mt-2 mr--25 p-absolute r-24"
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
                        <router-link to="/room/installasi-tools" class="text-biru-side2 text-decoration-none"
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"
                                    class="me-2 mt--18">
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
                    <span class="bi text mt-2 mr--25 p-absolute r-24"
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
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isIntroDropdownOpen: false,
            isInstallasiDropdownOpen: false,
            isDasarHTMLDropdownOpen: false
        };
    },
    mounted() {
        if (this.$route.path.includes('/room/installasi-tools') ||
            this.$route.path.includes('/room/essay') ||
            this.$route.path.includes('/room/assignment')) {
            this.isInstallasiDropdownOpen = true;
        }
        if (this.$route.path.includes('/room/tag')) {
            this.isDasarHTMLDropdownOpen = true;
        }
    },
    methods: {
        toggleIntroDropdown() {
            this.isIntroDropdownOpen = !this.isIntroDropdownOpen;
        },
        toggleInstallasiDropdown() {
            this.isInstallasiDropdownOpen = !this.isInstallasiDropdownOpen;
        },
        toggledasarHTMLDropdown() {
            this.isDasarHTMLDropdownOpen = !this.isDasarHTMLDropdownOpen;
        }
    },
    watch: {
        '$route.path'(newPath) {
            if (newPath.includes('/room/installasi-tools') ||
                newPath.includes('/room/essay') ||
                newPath.includes('/room/assignment')) {
                this.isInstallasiDropdownOpen = true;
            } else {
                this.isInstallasiDropdownOpen = false;
            }

            if (newPath.includes('/room/tag')) {
                this.isDasarHTMLDropdownOpen = true;
            } else {
                this.isDasarHTMLDropdownOpen = false;
            }
        }
    }
};
</script>
