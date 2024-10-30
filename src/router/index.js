import { createRouter, createWebHistory } from 'vue-router';

//Homepage
import Index from '@/pages/Index.vue';
import About from '@/pages/About.vue';
import Courses from '@/pages/Courses.vue';
import DetailCourses from '@/pages/homepage/courses/DetailCourses.vue';
import DetailTeacher from '@/pages/homepage/teacher/Detailteacher.vue';
import Faq from '@/pages/Faq.vue';

//Student
import Overview from '@/pages/role/student/dashboard/Overview.vue';
import Myprofile from '@/pages/role/student/dashboard/settings/Myprofile.vue';
import Editpassword from '@/pages/role/student/dashboard/settings/Editpassword.vue';
import Active from '@/pages/role/student/dashboard/mycourse/Active.vue';
import History from '@/pages/role/student/dashboard/mycourse/History.vue';
import Helpdesk from '@/pages/role/student/dashboard/Helpdesk.vue';

import Installasitools from '@/pages/role/student/course/Installasitools.vue';
import Essay from '@/pages/role/student/course/Essay.vue';
import Questions from '@/pages/role/student/course/Questions.vue';
import Assignment from '@/pages/role/student/course/Assignment.vue';
import Tag from '@/pages/role/student/course/Tag.vue';

//Teacher
import DashboardTC from '@/pages/role/teacher/Dashboard.vue';

//Superadmin
import DashboardSA from '@/pages/role/superadmin/Dashboard.vue';
import Sponsor from '@/pages/role/superadmin/cms/Sponsor.vue';
import MediaPartner from '@/pages/role/superadmin/cms/MediaPartner.vue';
import SosialMedia from '@/pages/role/superadmin/cms/SosialMedia.vue';
import AboutUs from '@/pages/role/superadmin/cms/AboutUs.vue';

//Auth Student
import Chooserole from '@/pages/auth/Choose-role.vue';
import Login from '@/pages/auth/Login.vue';
import Registrasi from '@/pages/auth/Registrasi.vue';
import Forgetpassword from '@/pages/auth/Forgetpassword.vue';
import Verificationemail from '@/pages/auth/Verificationemail.vue';
import Resetpassword from '@/pages/auth/Resetpassword.vue';

//Auth Teacher
import RegistrasiTeacher from '@/pages/auth/Registrasi-teacher.vue';
import LoginTeacher from '@/pages/auth/Login-teacher.vue';


import LoginAdmin from '@/pages/auth/Login-admin.vue';


import Error from '@/pages/404/404.vue';

//TEST
import Test from '@/pages/Test.vue';

//Sementara Auth Teacher
import MasterData1 from '@/pages/role/superadmin/MasterData1.vue';
import MasterData2 from '@/pages/role/superadmin/MasterData2.vue';
import MasterData3 from '@/pages/role/superadmin/MasterData3.vue';

//BELAJAR /////////
import TabelAbout from '@/pages/belajar/about/Tabelabout.vue';
import Addabout from '@/pages/belajar/about/Addabout.vue';
import Editabout from '@/pages/belajar/about/Editabout.vue';

import TabelAboutPages from '@/pages/belajar/about_pages/Tabelaboutpages.vue';
import Addaboutpages from '@/pages/belajar/about_pages/Addaboutpages.vue';
import Editaboutpages from '@/pages/belajar/about_pages/Editaboutpages.vue';

import TabelSosialMedia from '@/pages/belajar/about_pages/sosial-media/Tabel-sosial-media.vue';
import AddSosmed from '@/pages/belajar/about_pages/sosial-media/Add.vue';
import EditSosmed from '@/pages/belajar/about_pages/sosial-media/Edit.vue';

import Tabelfaq from '@/pages/belajar/faq/Tabelfaq.vue';
import Addfaq from '@/pages/belajar/faq/Addfaq.vue';
import Editfaq from '@/pages/belajar/faq/Editfaq.vue';

import Tabelmp from '@/pages/belajar/media_patner/Tabelmp.vue';
import Add from '@/pages/belajar/media_patner/Add.vue';
import Edit from '@/pages/belajar/media_patner/Edit.vue';

const routes = [
  //Homepage
  { path: '/', component: Index },
  { path: '/about', component: About },
  { path: '/courses', component: Courses },
  { path: '/detail-courses', component: DetailCourses },
  { path: '/detail-teacher', component: DetailTeacher },
  { path: '/faq', component: Faq },

  //Student
  { path: '/overview', component: Overview, meta: { requiresAuth: true, role: 'student' } },
  { path: '/settings/my-profile', component: Myprofile, meta: { requiresAuth: true, role: 'student' } },
  { path: '/settings/edit-password', component: Editpassword, meta: { requiresAuth: true, role: 'student' } },
  { path: '/my-course/active', component: Active, meta: { requiresAuth: true, role: 'student' } },
  { path: '/my-course/history', component: History, meta: { requiresAuth: true, role: 'student' } },
  { path: '/help-desk', component: Helpdesk, meta: { requiresAuth: true, role: 'student' } },

  { path: '/room/installasi-tools', component: Installasitools, meta: { requiresAuth: true, role: 'student' } },
  { path: '/room/essay', component: Essay, meta: { requiresAuth: true, role: 'student' } },
  { path: '/room/questions', component: Questions, meta: { requiresAuth: true, role: 'student' } },
  { path: '/room/assignment', component: Assignment, meta: { requiresAuth: true, role: 'student' } },
  { path: '/room/tag', component: Tag, meta: { requiresAuth: true, role: 'student' } },

  //Teacher
  { path: '/dashboard-teacher', component: DashboardTC, meta: { requiresAuth: true, role: 'teacher' } },

  //Superadmin
  { path: '/dashboard-superadmin', component: DashboardSA },
  { path: '/cms/media-partner', component: MediaPartner },
  { path: '/cms/sosial-media', component: SosialMedia},
  { path: '/cms/sponsor', component: Sponsor},
  { path: '/cms/about-us', component: AboutUs},

  //Auth Student
  { path: '/choose-role', component: Chooserole },
  { path: '/login', component: Login },
  { path: '/registrasi', component: Registrasi },
  { path: '/forget-password/:token', component: Forgetpassword },
  { path: '/verification-email', component: Verificationemail },
  { path: '/reset-password', component: Resetpassword },
  { path: '/login-admin', component: LoginAdmin },


  //Auth Teacher
  { path: '/registrasi-teacher', component: RegistrasiTeacher },
  { path: '/login-teacher', component: LoginTeacher },

  { path: '/404', component: Error },

  //TEST
  { path: '/test', component: Test },

  //Sementara Auth Teacher
  { path: '/master-data-1', component: MasterData1 },
  { path: '/master-data-2', component: MasterData2 },
  { path: '/master-data-3', component: MasterData3 },
  //BELAJAR /////////
  //ABOTUS /
  {
    path: '/tabel-about',
    component: TabelAbout,
  },
  {
    path: '/add-about',
    component: Addabout,
  },
  {
    path: '/edit-about/:id',
    component: Editabout,
  },
  //ABOUT PAGE /
  {
    path: '/tabel-about-pages',
    component: TabelAboutPages,
  },
  {
    path: '/add-about-pages',
    component: Addaboutpages,
  },
  {
    path: '/edit-about-pages/:id',
    component: Editaboutpages,
  },
  //SOSIAL MEDIA /
  {
    path: '/tabel-sosial-media',
    component: TabelSosialMedia,
  },
  {
    path: '/add',
    component: AddSosmed,
  },
  {
    path: '/edit/:id',
    component: EditSosmed,
  },

  //FAQ /
  {
    path: '/tabel-faq',
    component: Tabelfaq,
  },
  {
    path: '/add-faq',
    component: Addfaq,
  },
  {
    path: '/edit-faq/:id',
    component: Editfaq,
  },

  //MEDIA PATNER /
  {
    path: '/tabel-mp',
    component: Tabelmp,
  },
  {
    path: '/add-media-mp',
    component: Add,
  },
  {
    path: '/edit-media-mp/:id',
    component: Edit,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));
  const userRole = user ? user.role : null;

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ path: '/login' });
  } else if (to.meta.requiresAuth && isAuthenticated) {
    if (to.meta.role && to.meta.role !== userRole) {
      if (userRole === 'student') {
        next({ path: '/overview' });
      } else if (userRole === 'teacher') {
        next({ path: '/dashboard' });
      }
    } else {
      next();
    }
  } else if ((to.path === '/login' && isAuthenticated) || (to.path === '/registrasi' && isAuthenticated) || (to.path === '/verification-code' && isAuthenticated) || (to.path === '/choose-role' && isAuthenticated)) {
    next({ path: '/' });
  } else {
    next();
  }
});

export default router;
