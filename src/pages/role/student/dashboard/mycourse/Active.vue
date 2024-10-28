<script setup>
import NavbarStudent from '@/layout/NavbarStudent.vue';
import SidebarStudent from '@/layout/SidebarStudent.vue';
import SearchComponent from '@/components/SearchComponent.vue';
import ButtonOrange from '@/components/ButtonOrange.vue';
import ButtonSuccess from '@/components/ButtonSuccess.vue';
import ButtonRed from '@/components/ButtonRed.vue';
import Swal from 'sweetalert2';
import { ref, onMounted, onUnmounted } from 'vue';

import { useRouter } from 'vue-router';

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

const router = useRouter();

const showModal = ref(false);

const submit = () => {
    showModal.value = false;

    Swal.fire({
        title: 'Are You Sure You Want to Add This Course?',
        text: 'By adding this course, you will start following the related learning materials. Are you sure you want to continue?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#06A73B',
        cancelButtonColor: '#F44336',
        confirmButtonText: 'Yes, Add Course',
        customClass: {
            confirmButton: 'custom-button',
            cancelButton: 'custom-button',
            title: 'custom-title',
            htmlContainer: 'custom-text',
        },
        didOpen: () => {
            const confirmButton = Swal.getConfirmButton();
            const cancelButton = Swal.getCancelButton();
            confirmButton.classList.add('custom-button');
            cancelButton.classList.add('custom-button');
        },
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Successful Course Added!',
                html: '<span class="custom-small-text">You have successfully added a new course to your learning list. Happy learning and improve your skills!</span>',
                icon: 'success',
                confirmButtonColor: '#F44336',
                confirmButtonText: 'Close',
                customClass: {
                    title: 'custom-title',
                    confirmButton: 'custom-button',
                },
                didOpen: () => {
                    const confirmButton = Swal.getConfirmButton();
                    confirmButton.classList.add('custom-button');
                },
            }).then(() => {
                router.push('/my-course/active');
            });
        } else {
            showModal.value = true;
        }
    });
};

const showToast = () => {
    Swal.fire({
        title: 'are you sure to unenroll this course?',
        text: 'By unenrolling, you will lose access to this course. Make sure you’ve completed all necessary steps.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#06A73B',
        cancelButtonColor: '#F44336',
        confirmButtonText: 'YES',
        cancelButtonText: 'No',
        customClass: {
            confirmButton: 'custom-button',
            cancelButton: 'custom-button',
            title: 'custom-title',
            htmlContainer: 'custom-text',
        },
        didOpen: () => {
            const confirmButton = Swal.getConfirmButton();
            const cancelButton = Swal.getCancelButton();
            confirmButton.classList.add('custom-button');
            cancelButton.classList.add('custom-button');
        },
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Successful Course Unenrolled!',
                html: '<span class="custom-small-text">You have successfully unenrolled from this course. If you change your mind, you can always re-enroll and continue learning.</span>',
                icon: 'success',
                confirmButtonColor: '#F44336',
                confirmButtonText: 'Close',
                customClass: {
                    title: 'custom-title',
                    confirmButton: 'custom-button',
                },
                didOpen: () => {
                    const confirmButton = Swal.getConfirmButton();
                    confirmButton.classList.add('custom-button');
                },
            }).then(() => {
                router.push('/my-course/active');
            });
        }
    });
};

const openModal = () => {
    showModal.value = true;
};

const selectedCourse = ref(null);

const selectCard = (course) => {
    selectedCourse.value = course;
};

</script>

<template>
    <div class="user-background2">
        <!-- NAVBAR START -->
        <NavbarStudent />
        <!-- NAVBAR END -->

        <!-- SIDEBAR START -->
        <SidebarStudent v-if="isSidebarVisible" />
        <!-- SIDEBAR END -->

        <div id="content" class="mycourse">
            <div class="container mt-80">
                <div class="row">
                    <div class="dashboard">
                        <div class="card rounded-4 p-25 border-0">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <h5 class="fw-semibold fs-24 mb-3 ms-2">Learning Activity</h5>
                                </div>
                            </div>
                            <div class="d-flex justify-content-end mb-2">
                                <div class="search-input w-330 me-1">
                                    <SearchComponent placeholder="Search" :classCustom="'h-40'" />
                                </div>
                                <ButtonSuccess class="h-38 ms-3 fs-12 me-12" @click="openModal">Add</ButtonSuccess>
                            </div>
                            <div v-if="showModal" class="modal fade show db" id="addCourseModal" tabindex="-1"
                                aria-labelledby="addCourseModalLabel" aria-hidden="true"
                                role="dialog" @click.self="showModal = false">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header justify-content-center">
                                            <h5 class="modal-title fs-24 fw-medium" id="addCourseModalLabel">Add New
                                                Course</h5>
                                        </div>
                                        <div class="modal-body">
                                            <div class="row mb-3">
                                                <div class="col-md-4">
                                                    <label for="searchCourse"
                                                        class="form-label fs-12 mb-0">Search</label>
                                                    <input type="text" class="form-control fs-12" id="searchCourse"
                                                        placeholder="Search">
                                                </div>
                                                <div class="col-md-4">
                                                    <label for="startDate" class="form-label fs-12 mb-0">Tanggal
                                                        Mulai</label>
                                                    <input type="date" class="form-control fs-12" id="startDate">
                                                </div>
                                                <div class="col-md-4">
                                                    <label for="endDate" class="form-label fs-12 mb-0">Tanggal
                                                        Berakhir</label>
                                                    <input type="date" class="form-control fs-12" id="endDate">
                                                </div>
                                            </div>

                                            <h5 class="mb-2 fs-16 fw-medium ">Course Name</h5>
                                            <p class="border-bottom border-black" />
                                            <div class="course-list">
                                                <div class="course-card me-2"
                                                    :class="{ 'selected': selectedCourse === 'course1' }"
                                                    @click="selectCard('course1')">
                                                    <img src="https://picsum.photos/60" alt="Random Image">
                                                    <div>
                                                        <h5 class="fs-16 fw-medium">Web Programming Basics</h5>
                                                        <p class="fs-12 fw-light">Learn the basics of website creation
                                                            for
                                                            beginners</p>
                                                    </div>
                                                </div>

                                                <div class="course-card me-2"
                                                    :class="{ 'selected': selectedCourse === 'course2' }"
                                                    @click="selectCard('course2')">
                                                    <img src="https://randomuser.me/api/portraits/men/10.jpg"
                                                        alt="Random User">
                                                    <div>
                                                        <h5 class="fs-16 fw-medium">Web Programming Basics</h5>
                                                        <p class="fs-12 fw-light">Learn the basics of website creation
                                                            for
                                                            beginners</p>
                                                    </div>
                                                </div>

                                                <div class="course-card me-2"
                                                    :class="{ 'selected': selectedCourse === 'course3' }"
                                                    @click="selectCard('course3')">
                                                    <img src="https://robohash.org/random?size=60x60"
                                                        alt="Random RoboHash Image">
                                                    <div>
                                                        <h5 class="fs-16 fw-medium">Web Programming Basics</h5>
                                                        <p class="fs-12 fw-light">Learn the basics of website creation
                                                            for
                                                            beginners</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div class="text-center mt-4">
                                                <ButtonSuccess class="h-40 fs-14 w-30" @click="submit">
                                                    Enroll
                                                </ButtonSuccess>
                                            </div>
                                        </div>
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
                                            <th class="fs-16 fw-medium">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <img src="../../../../../assets/images/bg-7.png" class="rounded me-3"
                                                        alt="Course Image" width="88px" height="56px" />
                                                    <div class="ms-0">
                                                        <h6 class="mb-1 fs-16 fw-medium">Dasar Pemrograman Web</h6>
                                                        <p class="mb-0 text-muted fs-12">Materi pembelajaran mengenai
                                                            pembuatan</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="me-5 w-200 position-relative">
                                                    <div class="progress mt-4 bg-progress h-8">
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
                                            <td>
                                                <ButtonRed class="fs-12 rounded-3 h-37 w-110 text-white"
                                                    @click="showToast">Delete</ButtonRed>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <img src="../../../../../assets/images/ak.png" class="rounded me-3"
                                                        alt="Course Image" width="88px" height="56px" />
                                                    <div class="ms-0">
                                                        <h6 class="mb-1 fs-16 fw-medium">Dasar Pemrograman Web</h6>
                                                        <p class="mb-0 text-muted fs-12">Materi pembelajaran mengenai
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
                                            <td>
                                                <ButtonRed class="fs-12 rounded-3 h-37 w-110 text-white" @click="showToast">Delete
                                                </ButtonRed>
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