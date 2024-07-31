import type { AppRouteRecordRaw } from '@/router/types';

import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from '@/router/routes/basic';
import VUE from './modules/vue';
import REACT from './modules/react';
import about from './modules/about';

import { PageEnum } from '@/enums/pageEnum';

// import.meta.glob() 直接引入所有的模块 Vite 独有的功能
// const modules = import.meta.glob('./modules/**/*.ts', { eager: true });
// const routeModuleList: AppRouteModule[] = [];

// 加入到路由集合中  -文件名称不能保证顺序
// Object.keys(modules).forEach((key) => {
//   const mod = (modules as Recordable)[key].default || {};
//   const modList = Array.isArray(mod) ? [...mod] : [mod];
//   routeModuleList.push(...modList);
// });

export const asyncRoutes = [PAGE_NOT_FOUND_ROUTE, VUE, REACT, about];

// 根路由
export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
};

// Basic routing without permission
// 未经许可的基本路由
export const basicRoutes = [RootRoute, REDIRECT_ROUTE, PAGE_NOT_FOUND_ROUTE];
