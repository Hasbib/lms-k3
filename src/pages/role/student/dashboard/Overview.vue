<script setup>
// import axios from 'axios';
import NavbarStudent from '@/layout/NavbarStudent.vue';
import SidebarStudent from '@/layout/SidebarStudent.vue';
import SearchComponent from '@/components/SearchComponent.vue';
import ButtonOrange from '@/components/ButtonOrange.vue';
import ButtonSuccess from '@/components/ButtonSuccess.vue';
import { ref, onUnmounted, onMounted } from 'vue';

const isSidebarVisible = ref(true);

const checkWindowSize = () => {
    isSidebarVisible.value = window.innerWidth >= 770;
};

onMounted(() => {
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);
});

onUnmounted(() => {
    window.removeEventListener('resize', checkWindowSize);
})

</script>
<template>
    <div class="user-background">
        <!-- NAVBAR START -->
        <NavbarStudent />
        <!-- NAVBAR END -->

        <!-- SIDEBAR START -->
        <SidebarStudent v-if="isSidebarVisible" />
        <!-- SIDEBAR END -->

        <div id="content" class="overview">
            <div class="container mt-80">
                <div class="row">
                    <div class="col-md-8">
                        <div class="card rounded-4 p-25 border-0">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <h5 class="fw-semibold fs-24 mb-1">Overview</h5>
                                    <p class="opacity-50 fs-12">Video selesai (Hari)</p>
                                </div>
                                <div class="dropdown">
                                    <button
                                        class="btn dropdown-toggle dropdown-toggle-custom2 border-0 opacity-75 fs-12 h-45 w-130 d-flex justify-content-between align-items-center"
                                        type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Kategori
                                        <i class="bi bi-chevron-down"></i>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li><a class="dropdown-item fs-12" href="#">Kategori 1</a></li>
                                        <li><a class="dropdown-item fs-12" href="#">Kategori 2</a></li>
                                        <li><a class="dropdown-item fs-12" href="#">Kategori 3</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div id="colors-example-2">
                                <table class="charts-css column hide-data data-spacing-3">
                                    <tbody>
                                        <tr>
                                            <td style="--size: 0.6;">
                                                <div class="tooltip">6 Videos</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 0.75;">
                                                <div class="tooltip">7.5 Videos</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 0.9;">
                                                <div class="tooltip">9 Videos</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 0.7; --color: #FDC04E;">
                                                <div class="tooltip">7 Videos</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 0.5;">
                                                <div class="tooltip">5 Videos</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 0.7;">
                                                <div class="tooltip">7 Videos</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 0.75;">
                                                <div class="tooltip">7.5 Videos</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 1;">
                                                <div class="tooltip">10 Videos</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 0.9;">
                                                <div class="tooltip">9 Videos</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 0.77;">
                                                <div class="tooltip">7.7 Videos</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 0.58;">
                                                <div class="tooltip">5.8 Videos</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 0.85;">
                                                <div class="tooltip">8.5 Videos</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="month-labels">
                                    <span>1 Jan</span>
                                    <span>2 Jan</span>
                                    <span>3 Jan</span>
                                    <span>4 Jan</span>
                                    <span>5 Jan</span>
                                    <span>6 Jan</span>
                                    <span>7 Jan</span>
                                    <span>8 Jan</span>
                                    <span>9 Jan</span>
                                    <span>10 Jan</span>
                                    <span>11 Jan</span>
                                    <span>12 Jan</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mt-4 mt-md-0">
                        <div class="card rounded-4 border-0 bg-pie">
                            <div class="mx-4 mt-4 mb-3">
                                <h5 class="fw-semibold fs-24 mb-1">Statistik</h5>
                                <p class="opacity-50 fs-12">Video selesai (Hari)</p>
                            </div>
                            <div class="chart-container mt-4 mb-4">
                                <svg viewBox="0 0 100 100">
                                    <circle class="progress-white" cx="50" cy="50" r="34"></circle>
                                    <circle class="progress-yellow" cx="50" cy="50" r="34"></circle>
                                    <circle class="progress-green" cx="50" cy="50" r="34"></circle>
                                </svg>
                                <div class="text-overlay">
                                    <h5 class="fs-24 fw-bold">65%</h5>
                                    <p class="f-13">Course progress</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 dashboard">
                        <div class="card rounded-4 p-25 border-0">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <h5 class="fw-semibold fs-24 mb-1 ms-2">Aktivitas Belajar</h5>
                                </div>
                                <div class="d-flex justify-content-end">
                                    <div class="search-input w-50 me-md-4 me-2 h-43">
                                        <SearchComponent placeholder="Search" :customClass="'h-40'" />
                                    </div>
                                    <div class="dropdown me-md-2">
                                        <button
                                            class="btn dropdown-toggle dropdown-toggle-custom2 border-0 opacity-75 fs-12 h-40 w-130 d-flex justify-content-between align-items-center"
                                            type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Kategori
                                            <i class="bi bi-chevron-down"></i>
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <li><a class="dropdown-item fs-12" href="#">Kategori 1</a></li>
                                            <li><a class="dropdown-item fs-12" href="#">Kategori 2</a></li>
                                            <li><a class="dropdown-item fs-12" href="#">Kategori 3</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table align-middle mb-0 bg-white rounded">
                                    <thead class="bg-light">
                                        <tr>
                                            <th class="fs-16 fw-medium">Course Name</th>
                                            <th class="fs-16 fw-medium">Progress</th>
                                            <th class="fs-16 fw-medium">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <img src="../../../../assets/images/bg-7.png" class="rounded me-3"
                                                        alt="Course Image" width="88px" height="56px" />
                                                    <div class="ms-0">
                                                        <h6 class="mb-1 fs-16 fw-medium">Dasar Pemrograman Web</h6>
                                                        <p class="mb-0 text-muted fs-12">Materi pembelajaran
                                                            mengenai
                                                            pembuatan</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="me-5 w-200 position-relative">
                                                    <div class="progress bg-progress h-8">
                                                        <div class="h-8 w-20 bg-progress-done" role="progressbar"
                                                            aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                        </div>
                                                    </div>
                                                    <span class="progress-text2 fs-14 fw-medium">20%</span>
                                                </div>
                                            </td>
                                            <td>
                                                <ButtonOrange class="fs-12 rounded-3 h-37 w-110">Continue
                                                </ButtonOrange>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <img src="../../../../assets/images/ak.png" class="rounded me-3"
                                                        alt="Course Image" width="88px" height="56px" />
                                                    <div class="ms-0">
                                                        <h6 class="mb-1 fs-16 fw-medium">Dasar Pemrograman Web</h6>
                                                        <p class="mb-0 text-muted fs-12">Materi pembelajaran
                                                            mengenai
                                                            pembuatan</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="w-200 position-relative">
                                                    <div class="progress bg-progress h-8">
                                                        <div class="h-8 w-100 bg-progress-succcess" role="progressbar"
                                                            aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                        </div>
                                                    </div>
                                                    <span class="progress-text2 fs-14 fw-medium">100%</span>
                                                </div>
                                            </td>
                                            <td>
                                                <ButtonSuccess class="fs-12 rounded-3 h-37 w-110">Certificate
                                                </ButtonSuccess>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>