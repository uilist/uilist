import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';

const VUE: AppRouteModule = {
  path: '/vue',
  name: 'Vue',
  component: LAYOUT,
  redirect: '/vue/web',
  meta: {
    icon: 'logos:vue',
    title: 'Vue',
  },
  children: [
    {
      path: 'web',
      name: 'VueWeb',
      component: () => import('@/views/vue/web/index.vue'),
      meta: {
        // affix: true,
        title: 'web',
        hideMenu: false,
      },
    },
    {
      path: 'h5',
      name: 'VueH5',
      component: () => import('@/views/vue/h5/index.vue'),
      meta: {
        // affix: true,
        title: 'h5',
        hideMenu: false,
      },
    },
    {
      path: 'mini',
      name: 'VueMini',
      component: () => import('@/views/vue/mini/index.vue'),
      meta: {
        // affix: true,
        title: 'mini',
        hideMenu: false,
      },
    },
  ],
};

export default VUE;
