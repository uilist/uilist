import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';

const REACT: AppRouteModule = {
  path: '/react',
  name: 'React',
  component: LAYOUT,
  redirect: '/react/web',
  meta: {
    icon: 'logos:react',
    title: 'React',
  },
  children: [
    {
      path: 'web',
      name: 'ReactWeb',
      component: () => import('@/views/react/web/index.vue'),
      meta: {
        // affix: true,
        title: 'web',
      },
    },
    {
      path: 'h5',
      name: 'ReactH5',
      component: () => import('@/views/react/h5/index.vue'),
      meta: {
        // affix: true,
        title: 'h5',
        hideMenu: false,
      },
    },
    {
      path: 'mini',
      name: 'ReactMini',
      component: () => import('@/views/react/mini/index.vue'),
      meta: {
        // affix: true,
        title: 'mini',
        hideMenu: false,
      },
    },
  ],
};

export default REACT;
