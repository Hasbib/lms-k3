<script setup>
import { ref } from 'vue';
import NavbarTeacher from '@/layout/NavbarTeacher.vue';
import SidebarTeacher from '@/layout/SidebarTeacher.vue';
import SearchComponent from '@/components/SearchComponent.vue';
import ButtonSuccess from '@/components/ButtonSuccess.vue';
import { category } from '@/data/index.js';

const Category = ref(category);
</script>

<template>
    <div class="navbg-sa">
        <!-- NAVBAR START -->
        <NavbarTeacher />
        <!-- NAVBAR END -->

        <!-- SIDEBAR START -->
        <SidebarTeacher />
        <!-- SIDEBAR END -->

        <div id="content">
            <div class="container mt-80">
                <div class="row">
                    <div class="d-flex justify-content-between mb-3">
                        <div class="search-input w-25 me-md-4 me-2 h-43">
                            <SearchComponent placeholder="Search" :customClass="'h-40'" />
                        </div>
                        <ButtonSuccess class="fs-16 px-2 rounded-3 h-37">Add Category</ButtonSuccess>
                    </div>
                    <div class="col-md-12 mt-4 mt-md-0">
                        <div class="table-responsive">
                            <table class="table custom-table rounded-4">
                                <thead class="table-danger">
                                    <tr class="ps-4">
                                        <th class="ps-3">No</th>
                                        <th>Category Name</th>
                                        <th class="ps-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(category, index) in Category" :key="index">
                                        <td class="ps-4">{{ index + 1 }}</td>
                                        <td>{{ category.name }}</td>
                                        <td class="ps-4">
                                            <div class="dropdown ps-2">
                                                <button class="btn border-0 dropdown-toggle" type="button"
                                                    data-bs-toggle="dropdown">
                                                    <p class="bi bi-three-dots-vertical" style="margin-bottom: -18px;"></p>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="#">Edit</a></li>
                                                    <li><a class="dropdown-item" href="#">Delete</a></li>
                                                </ul>
                                            </div>
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
</template>

