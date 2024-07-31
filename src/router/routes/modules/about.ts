import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';

const about: AppRouteModule = {
  path: '/about',
  name: 'About',
  component: LAYOUT,
  redirect: '/about/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'ion:grid-outline',
    title: '关于',
    orderNo: 100000,
    code: '',
  },
  children: [
    {
      path: 'index',
      name: 'AboutPage',
      component: () => import('@/views/about/index.vue'),
      meta: {
        title: '关于',
        icon: 'simple-icons:aboutdotme',
        hideMenu: true,
        code: '',
      },
    },
  ],
};

export default about;
