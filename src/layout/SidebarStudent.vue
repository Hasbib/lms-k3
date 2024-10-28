<template>
    <div id="sidebar" class="sd" :class="['side', { collapsed }]" ref="sidebar">
        <ul>
            <li class="menu-header">
                <span class="menu-logo-text">Menu</span>
                <button id="toggle-btn" class="btn btn-primary" ref="toggleBtn">
                    <span class="toggle">&#9776;</span>
                </button>
            </li>
            <li class="ms-24 mt-12">
                <router-link to="/overview"
                    :class="['nav-link fs-16 bi bi-house-door-fill', isActive('/overview') ? 'active-sidebar' : 'color-sidebar']">
                    <span class="icon"></span>
                    <span class="mt-2 text p-absolute">Dashboard</span>
                </router-link>
            </li>
            <li class="ms-24 mt-2">
                <a href="#" @click.prevent="toggleMyCourseDropdown" class="nav-link bi bi-map color-sidebar">
                    <span class="icon"></span>
                    <span class="mt-2 text p-absolute">My Course</span>
                    <span class="bi text mt-2 p-absolute r-24"
                        :class="isMyCourseDropdownOpen ? 'bi-chevron-up' : 'bi-chevron-down'"></span>
                </a>
                <ul v-show="isMyCourseDropdownOpen" class="dropdown mt--3">
                    <li class="ms-24">
                        <router-link to="/my-course/active"
                            :class="['nav-link', isActive('/my-course/active') ? 'active-sidebar' : 'color-sidebar']">
                            <span class="icon"></span>
                            <span class="mt-2 text p-absolute">Active</span>
                        </router-link>
                    </li>
                    <li class="ms-24">
                        <router-link to="/my-course/history"
                            :class="['nav-link', isActive('/my-course/history') ? 'active-sidebar' : 'color-sidebar']">
                            <span class="icon"></span>
                            <span class="mt-2 text p-absolute">History</span>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="ms-24 mt-2">
                <a href="#" @click.prevent="toggleSettingsDropdown" class="nav-link bi bi-gear color-sidebar">
                    <span class="icon"></span>
                    <span class="mt-2 text p-absolute">Settings</span>
                    <span class="bi text mt-2 p-absolute r-24"
                        :class="isSettingsDropdownOpen ? 'bi-chevron-up' : 'bi-chevron-down'"></span>
                </a>
                <ul v-show="isSettingsDropdownOpen" class="dropdown mt--3">
                    <li class="ms-24">
                        <router-link to="/settings/my-profile"
                            :class="['nav-link', isActive('/settings/my-profile') ? 'active-sidebar' : 'color-sidebar']">
                            <span class="icon"></span>
                            <span class="mt-2 text p-absolute">My Profile</span>
                        </router-link>
                    </li>
                    <li class="ms-24">
                        <router-link to="/settings/edit-password"
                            :class="['nav-link', isActive('/settings/edit-password') ? 'active-sidebar' : 'color-sidebar']">
                            <span class="icon"></span>
                            <span class="mt-2 text p-absolute">Edit Password</span>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="ms-24 mt-2">
                <router-link to="/help-desk"
                    :class="['nav-link fs-16 bi bi-info-circle-fill', isActive('/help-desk') ? 'active-sidebar' : 'color-sidebar']">
                    <span class="icon"></span>
                    <span class="mt-2 text p-absolute">Help Desk</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isSettingsDropdownOpen: false,
            isMyCourseDropdownOpen: false,
            isSidebarCollapsed: false,
            collapsed: false
        };
    },
    mounted() {
        this.updateSidebar();
        this.setupToggle();

        if (this.$route.path.includes('/my-course')) {
            this.isMyCourseDropdownOpen = true;
        }
        if (this.$route.path.includes('/settings')) {
            this.isSettingsDropdownOpen = true;
        }
    },
    beforeUnmount() {
        this.removeToggle();
    },
    methods: {
        toggleSidebar() {
            this.collapsed = !this.collapsed;
            const sidebar = this.$refs.sidebar;
            const content = document.getElementById('content');
            sidebar.classList.toggle('collapsed', this.collapsed);
            content.classList.toggle('collapsed', this.collapsed);
        },
        setupToggle() {
            const toggleBtn = this.$refs.toggleBtn;
            toggleBtn.addEventListener('click', this.toggleSidebar);
        },
        removeToggle() {
            const toggleBtn = this.$refs.toggleBtn;
            toggleBtn.removeEventListener('click', this.toggleSidebar);
        },
        updateSidebar() {
            const sidebar = this.$refs.sidebar;
            if (window.innerWidth <= 769) {
                sidebar.classList.add('collapsed');
                this.collapsed = true;
            } else {
                sidebar.classList.remove('collapsed');
                this.collapsed = false;
            }
        },
        toggleSettingsDropdown() {
            this.isSettingsDropdownOpen = !this.isSettingsDropdownOpen;
        },
        toggleMyCourseDropdown() {
            this.isMyCourseDropdownOpen = !this.isMyCourseDropdownOpen;
        },
        isActive(path) {
            return this.$route.path === path;
        }
    },
    watch: {
        '$route.path'(newPath) {
            if (newPath.includes('/my-course')) {
                this.isMyCourseDropdownOpen = true;
            } else {
                this.isMyCourseDropdownOpen = false;
            }
            if (newPath.includes('/settings')) {
                this.isSettingsDropdownOpen = true;
            } else {
                this.isSettingsDropdownOpen = false;
            }
        }
    }
};
</script>