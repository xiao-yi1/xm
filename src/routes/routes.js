import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    redirect: 'Home',
    component: DashboardLayout,
    children: [
      {
        path: '/Home',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/Dashboard.vue')
      },
      {
        path: '/Venue',
        name: 'Venue',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Venue.vue')
      },
      {
        path: '/KeyDates',
        name: 'Key Dates',
        component: () => import(/* webpackChunkName: "demo" */ '../views/KeyDates.vue')
      },
      {
        path: '/CallForPapers',
        name: 'Call for Papers',
        component: () => import(/* webpackChunkName: "demo" */ '../views/CallForPapers.vue')
      },
      {
        path: '/PaperSubmission',
        name: 'Paper Submission',
        component: () => import(/* webpackChunkName: "demo" */ '../views/PaperSubmission.vue')
      },
      {
        path: '/Committees',
        name: 'Committees',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Committees.vue')
      },
      {
        path: '/Registration',
        name: 'Registration',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Registration.vue')
      },
      {
        path: '/Program',
        name: 'Program',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Program.vue')
      },
      {
        path: '/AboutIDASB',
        name: 'AboutIDASB',
        component: () => import(/* webpackChunkName: "demo" */ '../views/AboutIDASB.vue')
      },
      {
        path: '/Contact',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Contact.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Register.vue')
      },
      { path: '*', component: NotFound }
    ]
  }
];

export default routes;
