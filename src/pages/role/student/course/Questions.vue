<script setup>
import NavbarCourses from '@/layout/NavbarCourses.vue';
import SidebarCourse from '@/layout/SidebarCourse.vue';
import ButtonSuccess from '@/components/ButtonSuccess.vue';
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { Questions } from '@/data/index.js';

const isSidebarVisible = ref(true);
const currentPage = ref(1);
const perPage = 5;

const totalPages = computed(() => {
    return Math.ceil(Questions.length / perPage);
});

const paginatedQuestions = computed(() => {
    const start = (currentPage.value - 1) * perPage;
    const end = start + perPage;
    return Questions.slice(start, end);
});

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

const goToNextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
        console.log('Moved to page:', currentPage.value);
        scrollToTop();
    }
};

const goToPreviousPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
        console.log('Moved to page:', currentPage.value);
        scrollToTop();
    }
};
const scrollToTop = () => {
    window.scrollTo({
        top: 0, // Scroll ke atas halaman
        behavior: 'smooth' // Animasi halus
    });
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

        <div id="room" class="quiz">
            <div class="container pe-md-4">
                <div class="row">
                    <div class="card p-4 border-0 rounded-4">
                        <p class="text-end fs-12 fw-light mb-md-3">remaining time: 1 hour 30 minutes</p>
                        <form action="">
                            <div id="scroll-target"></div>
                            <div v-for="(question, index) in paginatedQuestions" :key="index"
                                class="mb-4 question-container">
                                <div class="question-wrapper">
                                    <span class="question-number fs-16">{{ (currentPage - 1) * perPage + index + 1
                                        }}.</span>
                                    <label class="question-text fs-16 fw-semibold">{{ question.soal }}</label>
                                </div>
                                <div class="form-group mt-2">
                                    <template v-if="question.type === 'essay'">
                                        <textarea class="form-control ms-md-4 me-4 ms-4 rounded-3 w-96 mb--6 fs-12"
                                            :id="'question-' + index" rows="3"
                                            placeholder="Write your review"></textarea>
                                    </template>
                                    <template v-else-if="question.type === 'multiple-choice'">
                                        <div class="d-flex flex-column">
                                            <div v-for="(option, optionIndex) in question.options" :key="optionIndex"
                                                class="form-check d-flex align-items-center"
                                                :class="(question.id <= 9) ? ' ms--2' : 'ms-1'">
                                                <input class="form-check-input fs-16 ms-1" type="radio"
                                                    :name="'question-' + index"
                                                    :id="'option-' + index + '-' + optionIndex" :value="option">
                                                <label class="form-check-label ms-2 mb--5 fs-16"
                                                    :for="'option-' + index + '-' + optionIndex">
                                                    {{ option }}
                                                </label>
                                            </div>
                                        </div>
                                    </template>
                                    <template v-else-if="question.type === 'checkbok'">
                                        <div class="d-flex flex-column">
                                            <div v-for="(option, optionIndex) in question.options" :key="optionIndex"
                                                class="form-check d-flex align-items-center"
                                                :class="(question.id <= 9) ? ' ms--2' : 'ms-1'">
                                                <input class="form-check-input fs-16 ms-1" type="radio"
                                                    :name="'question-' + index"
                                                    :id="'option-' + index + '-' + optionIndex" :value="option">
                                                <label class="form-check-label ms-2 mb--5 fs-16"
                                                    :for="'option-' + index + '-' + optionIndex">
                                                    {{ option }}
                                                </label>
                                            </div>
                                        </div>
                                    </template>
                                    <template v-else-if="question.type === 'checkbox'">
                                        <div class="d-flex flex-column">
                                            <div class="ms-2">
                                                <p class="mt-1 ms-4 mb-1 fs-16 ligh">Pilih lebih dari satu jawaban.</p>
                                            </div>
                                            <div v-for="(option, optionIndex) in question.options" :key="optionIndex"
                                                class="form-check d-flex align-items-center"
                                                :class="(question.id <= 9) ? 'ms-1' : 'ms-1'">
                                                <input class="form-check-input fs-16 ms-1" type="checkbox"
                                                    :name="'question-' + index + '-option-' + optionIndex"
                                                    :id="'option-' + index + '-' + optionIndex" :value="option">
                                                <label class="form-check-label ms-2 mb--5 fs-16"
                                                    :for="'option-' + index + '-' + optionIndex">
                                                    {{ option }}
                                                </label>
                                            </div>
                                        </div>
                                    </template>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mt-4">
                                <div class="d-flex justify-content-center align-items-center" style="flex-grow: 1;">
                                    <button @click.prevent="goToPreviousPage"
                                        class="btn btn-warning border-0 me-2 ukuran">
                                        <i class=" bi bi-chevron-left"></i>
                                    </button>

                                    <span
                                        class="pagination-number btn-hijau text-white d-flex justify-content-center align-items-center ukuran">
                                        {{ currentPage }}
                                    </span>

                                    <button @click.prevent="goToNextPage" class="btn btn-warning border-0 ms-2 ukuran">
                                        <i class="bi bi-chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="text-end me-md-3">
                                <ButtonSuccess class="fs-14 fw-medium h-40 w-11"
                                    onclick="window.location.href='/room/essay'">Submit
                                </ButtonSuccess>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>