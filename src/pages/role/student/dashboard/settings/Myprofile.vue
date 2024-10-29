<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import NavbarStudent from '@/layout/NavbarStudent.vue';
import SidebarStudent from '@/layout/SidebarStudent.vue';
import ButtonSuccess from '@/components/ButtonSuccess.vue';
import axios from 'axios'; // Import Axios

const isSidebarVisible = ref(true);
const isToastVisible = ref(false);

// Initialize user data with defaults, including student data
const user = ref({
    name: '',
    email: '',
    student: {
        date_of_birth: '',
        address: '',
        phone: '',
        image: ''
    }
});

const profileImage = ref('');  // Profile image URL
const imageFile = ref(null);

const checkWindowSize = () => {
    isSidebarVisible.value = window.innerWidth >= 770;
};

// Fetch user data from localStorage or backend
onMounted(async () => {
    try {
        // Ambil data pengguna dari localStorage
        const savedUser = JSON.parse(localStorage.getItem('user'));

        if (savedUser) {
            // Set user data from localStorage
            user.value.name = savedUser.name;
            user.value.email = savedUser.email;
            user.value.student.date_of_birth = savedUser.student.date_of_birth || '';
            user.value.student.address = savedUser.student.address || '';
            user.value.student.phone = savedUser.student.phone || '';
            user.value.student.image = savedUser.student.image || '';

            // Set profile image from localStorage data
            profileImage.value = savedUser.student.image
                ? `${process.env.VUE_APP_BACKEND_URL}/uploads/${savedUser.student.image}`
                : require('@assets/images/my-profile.png');
        } else {
            // If no local data, fetch from backend
            const response = await axios.get('/user');
            const userData = response.data.user;

            // Set user data from backend response
            user.value.name = userData.name;
            user.value.email = userData.email;
            user.value.student.date_of_birth = userData.student.date_of_birth || '';
            user.value.student.address = userData.student.address || '';
            user.value.student.phone = userData.student.phone || '';
            user.value.student.image = userData.student.image || '';

            // Set profile image from backend
            profileImage.value = userData.student.image
                ? `${axios.defaults.baseURL.replace('/api', '')}/uploads/${userData.student.image}`
                : require('@assets/images/my-profile.png');

            // Save the fetched user data to localStorage
            localStorage.setItem('user', JSON.stringify(userData));
        }

        checkWindowSize();
        window.addEventListener('resize', checkWindowSize);
    } catch (error) {
        console.error('Error fetching user data:', error);
        alert('Failed to load user data.');
    }
});

onUnmounted(() => {
    window.removeEventListener('resize', checkWindowSize);
});

// Function to handle file input change
const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        imageFile.value = file; // Store the file
        const reader = new FileReader();
        reader.onload = () => {
            profileImage.value = reader.result; // Show the preview
        };
        reader.readAsDataURL(file);
    }
};

const saveProfile = async () => {
    try {
        // Ambil data pengguna dari localStorage
        const savedUser = JSON.parse(localStorage.getItem('user'));

        // Periksa apakah user dan student data ada
        if (savedUser && savedUser.student) {
            const userId = savedUser.id_user;

            // Kirim data yang diperbarui ke server
            const formData = new FormData();
            formData.append('name', user.value.name);
            formData.append('date_of_birth', user.value.student.date_of_birth);
            formData.append('address', user.value.student.address);
            formData.append('phone', user.value.student.phone);
            if (imageFile.value) {
                formData.append('image', imageFile.value);
            }

            // Kirim data ke server dan dapatkan respons
            const response = await axios.post(`/students/${userId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Periksa apakah respons berhasil dan mengandung data terbaru
            if (response.data && response.data.student) {
                // Update user data in localStorage
                const updatedStudent = {
                    ...savedUser.student, // Pertahankan data student yang ada
                    date_of_birth: response.data.student.date_of_birth, // Update date_of_birth
                    address: response.data.student.address, // Update address
                    phone: response.data.student.phone, // Update phone
                    image: response.data.student.image // Update image jika ada perubahan
                };

                const updatedUser = {
                    ...savedUser, // Pertahankan data user lainnya
                    name: user.value.name, // Update name
                    student: updatedStudent // Update bagian student
                };

                // Pastikan URL gambar diperbarui dengan benar
                profileImage.value = updatedStudent.image
                    ? `${axios.defaults.baseURL.replace('/api', '')}/uploads/${updatedStudent.image}`
                    : require('@assets/images/my-profile.png');

                // Save updated user data to localStorage
                localStorage.setItem('user', JSON.stringify(updatedUser));
                showToast();
            } else {
                alert('Failed to retrieve updated data from server.');
            }
        } else {
            alert('User or student data not found.');
        }
    } catch (error) {
        console.error('Error updating profile:', error);
        alert('Failed to update profile. Please try again.');
    }
};


const showToast = () => {
    isToastVisible.value = true;
    setTimeout(() => {
        isToastVisible.value = false;
    }, 3000);
};

const closeToast = () => {
    isToastVisible.value = false;
};
</script>

<template>
    <div class="user-background">
        <!-- NAVBAR START -->
        <NavbarStudent />
        <!-- NAVBAR END -->

        <!-- SIDEBAR START -->
        <SidebarStudent v-if="isSidebarVisible" />
        <!-- SIDEBAR END -->

        <div id="content" class="mycourse">
            <div class="container mt-80">
                <div class="row">
                    <div class="col-md-4 mb-4">
                        <div class="card rounded-4 p-4 border-0">
                            <div
                                class="d-flex align-items-center justify-content-center justify-content-md-center justify-content-sm-between flex-sm-row flex-md-column">
                                <img :src="profileImage" alt="Profile Image"
                                    class="rounded-circle mb-3 ms-2 me-4 size-profil">
                                <div class="ms-sm-3 mt-md-2">
                                    <div class="my-2">
                                        <input class="form-control fs-12" type="file" id="formFile"
                                            @change="handleFileChange">
                                    </div>
                                    <div>
                                        <p class="fs-12 mb-0 opacity-50">Max file size : 2Mb</p>
                                        <p class="fs-12 opacity-50 mb-1">Format : .jpg, .png , .jpeg</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-8">
                        <div class="card rounded-4 p-4 border-0">
                            <form @submit.prevent="saveProfile">
                                <div class="row mb-3 mt-3 align-items-center">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0 fs-16">Full Name</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="text" class="form-control h-48 fs-16" v-model="user.name">
                                    </div>
                                </div>
                                <div class="row mb-3 align-items-center">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0 fs-16">Email</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="email" class="form-control h-48 fs-16" v-model="user.email"
                                            readonly>
                                    </div>
                                </div>
                                <div class="row mb-3 align-items-center">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0 fs-16">Tanggal lahir</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="date" class="form-control h-48 fs-16 fs-16"
                                            v-model="user.student.date_of_birth">
                                    </div>
                                </div>
                                <div class="row mb-3 align-items-center">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0 fs-16">Alamat</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="text" class="form-control h-48 fs-16"
                                            v-model="user.student.address" placeholder="alamat">
                                    </div>
                                </div>
                                <div class="row mb-3 align-items-center">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0 fs-16">Nomor Telpon</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="text" class="form-control h-48 fs-16" v-model="user.student.phone"
                                            placeholder="nomor telpon">
                                    </div>
                                </div>
                                <div class="text-center">
                                    <ButtonSuccess class="w-25 fs-12 h-40" type="submit">Save</ButtonSuccess>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div aria-live="polite" aria-atomic="true" class="position-fixed bs-toast">
                        <div v-if="isToastVisible"
                            class="toast align-items-center text-white bg-light-success border-0 show" role="alert">
                            <div class="d-flex">
                                <div class="toast-body">
                                    Paasword Update successfully!
                                </div>
                                <button type="button" class="btn-close btn-close-white me-2 m-auto" @click="closeToast"
                                    aria-label="Close"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
