<script setup>
// import axios from 'axios';
import NavbarStudent from '@/layout/NavbarStudent.vue';
import SidebarStudent from '@/layout/SidebarStudent.vue';
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
                    <div class="col-md-4 mt-4 mt-md-0">
                        <div class="card rounded-4 p-25 border-0 bg-pie">
                            <div>
                                <h5>Overview</h5>
                                <p>Student : 1.928</p>
                                <p>Course : 10</p>
                                <p>
                                    Rating :
                                    <span class="ms-1">4.8</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card rounded-4 p-25 border-0">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <h5 class="fw-semibold fs-24 mb-1">Overview</h5>
                                    <p class="opacity-50 fs-12">Video selesai (Hari)</p>
                                </div>
                            </div>
                            <div id="colors-example-2">
                                <table class="charts-css column hide-data data-spacing-3">
                                    <tbody>
                                        <tr>
                                            <td style="--size: 0.5; --color: #5527ff; margin-right: -2px !important;" class="rounded-5"></td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 1; --color: #fdc04e; margin-left: -4px !important; margin-right: 6px !important;"
                                                class="rounded-5"></td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 0.8; --color: #5527ff; margin-right: -2px !important;" class="rounded-5"><span
                                                    class="data"> 80 </span></td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 0.6; --color: #fdc04e; margin-left: -4px !important; margin-right: 6px !important;"
                                                class="rounded-5"></td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 0.6; --color: #5527ff; margin-right: -2px !important;" class="rounded-5"></td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 0.8; --color: #fdc04e;  margin-left: -4px !important; margin-right: 6px !important;"
                                                class="rounded-5"></td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 0.9; --color: #5527ff; margin-right: -2px !important;" class="rounded-5"></td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 0.3; --color: #fdc04e;  margin-left: -4px !important; margin-right: 6px !important;"
                                                class="rounded-5"></td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 0.3; --color: #5527ff; margin-right: -2px !important;" class="rounded-5"></td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 1; --color: #fdc04e;  margin-left: -4px !important; margin-right: 6px !important;"
                                                class="rounded-5"></td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 0.6; --color: #5527ff; margin-right: -2px !important;" class="rounded-5"></td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 0.8; --color: #fdc04e;  margin-left: -4px !important; margin-right: 6px !important;"
                                                class="rounded-5"></td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 0.5; --color: #5527ff; margin-right: -2px !important;" class="rounded-5"></td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 1; --color: #fdc04e;  margin-left: -4px !important; margin-right: 6px !important;"
                                                class="rounded-5"></td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 0.8; --color: #5527ff; margin-right: -2px !important;" class="rounded-5"><span
                                                    class="data"> 80 </span></td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 0.6; --color: #fdc04e;  margin-left: -4px !important; margin-right: 6px !important;"
                                                class="rounded-5"></td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 0.6; --color: #5527ff; margin-right: -2px !important;" class="rounded-5"></td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 0.8; --color: #fdc04e;  margin-left: -4px !important; margin-right: 6px !important;"
                                                class="rounded-5"></td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 0.9; --color: #5527ff; margin-right: -2px !important;" class="rounded-5"></td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 0.3; --color: #fdc04e;  margin-left: -4px !important; margin-right: 6px !important;"
                                                class="rounded-5"></td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 0.3; --color: #5527ff; margin-right: -2px !important;" class="rounded-5"></td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 1; --color: #fdc04e;  margin-left: -4px !important; margin-right: 6px !important;"
                                                class="rounded-5"></td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 0.6; --color: #5527ff; margin-right: -2px !important;" class="rounded-5"></td>
                                        </tr>
                                        <tr>
                                            <td style="--size: 0.8; --color: #fdc04e;  margin-left: -4px !important; margin-right: 6px !important;"
                                                class="rounded-5"></td>
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
                </div>
            </div>
        </div>
    </div>
</template>