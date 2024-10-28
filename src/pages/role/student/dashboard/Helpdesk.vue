<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import NavbarStudent from '@/layout/NavbarStudent.vue';
import SidebarStudent from '@/layout/SidebarStudent.vue';
import SearchComponent from '@/components/SearchComponent.vue';
import PaginationComponent from '@/components/PaginationComponent.vue'
import ButtonSuccess from '@/components/ButtonSuccess.vue';
import { helpDesk } from '@/data/index.js';

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
});
const helpData = helpDesk;

const currentPage = ref(1);
const itemsPerPage = 4;

const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return helpData.slice(start, end);
});

const changePage = (pageNumber) => {
    currentPage.value = pageNumber;
};

const totalPages = computed(() => {
    return Math.ceil(helpData.length / itemsPerPage);
});
</script>
<template>
    <div class="user-background">
        <!-- NAVBAR START -->
        <NavbarStudent />
        <!-- NAVBAR END -->

        <!-- SIDEBAR START -->
        <SidebarStudent v-if="isSidebarVisible" />
        <!-- SIDEBAR END -->

        <div id="content" class="help">
            <div class="container mt-80">
                <div class="row">
                    <div class="col mb-4">
                        <h4 class="fs-40 mb-4">Search FAQ</h4>
                        <div class="my-3 mb-3 d-flex justify-content-center">
                            <div class="search-input w-100 me-md-1">
                                <SearchComponent placeholder="Type your question..." :customClass="'h-43'" />
                            </div>
                        </div>
                        <p class="border-bottom border-dark mb--6" />
                    </div>
                </div>

                <div class="row cmx-4">
                    <div v-for="help in paginatedData" :key="help.id"
                        class="card my-2 ms-md-3 p-4 border-0 bg-help rounded-4">
                        <div>
                            <h4 class="fs-16">{{ help.title }}</h4>
                            <p class="fs-16">{{ help.deskripsi }}</p>
                            <p class="fs-12 opacity-25">{{ help.date }}</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col text-center my-4">
                        <PaginationComponent :currentPage="currentPage" :totalPages="totalPages"
                            @page-change="changePage" />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="card border-0 rounded-4">
                            <div class="row d-flex justify-content-between">
                                <div class="col-md-2">
                                </div>
                                <div class="col-md-8">
                                    <div class="p-4 rounded mx-1">
                                        <h3 class="text-center pt-4 fs-24">“Need Help? Contact Us!”</h3>
                                        <h5 class="fs-16 fw-light text-center">“If your question has not been answered
                                            in the FAQ section, please contact us via the form below.”</h5>
                                        <form class="mx-4">
                                            <div class="mt-2">
                                                <label for="exampleInputName" class="form-labe fs-16 ms-30">Name</label>
                                                <input type="text" class="form-control h-48 mx-auto rounded-3 fs-16"
                                                    id="exampleInputName" placeholder="Enter Your Name Here">
                                            </div>
                                            <div class="form-group mt-2">
                                                <label for="exampleFormControlTextarea1"
                                                    class="form-labe fs-16 ms-30">Your Question</label>
                                                <textarea class="form-control w-75 mx-auto rounded-3 fs-16"
                                                    id="exampleFormControlTextarea1" rows="4"
                                                    placeholder="Write your question here..."></textarea>
                                            </div>
                                            <div class="text-center mt-3">
                                                <ButtonSuccess class="w-25 h-40 fs-14">Submit</ButtonSuccess>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>