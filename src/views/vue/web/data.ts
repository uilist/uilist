import { ref } from 'vue';

interface GroupItem {
  title: string;
  icon: string;
  color: string;
  desc: string;
  group: string;
  github: string;
  star: number;
  site: string;
}

export const groupItems = ref<GroupItem[]>([
  {
    title: 'Element',
    icon: 'logos:element',
    color: '#1989fa',
    desc: 'Element，一套为开发者、设计师和产品经理准备的基于 Vue 2 的桌面端组件库。',
    group: '饿了么',
    site: 'https://element.eleme.cn',
    github: 'https://github.com/ElemeFE/element',
    star: 0,
  },
  {
    title: 'Element Plus',
    icon: 'ep:element-plus',
    color: '#409eff',
    desc: '基于 Vue3，面向设计师和开发者的组件库。',
    group: '饿了么',
    site: 'https://element-plus.org',
    github: 'https://github.com/element-plus/element-plus',
    star: 0,
  },
  {
    title: 'Ant Design of Vue (Vue 2)',
    icon: 'devicon:antdesign',
    color: '#1677ff',
    desc: '这里是 Ant Design 的 Vue2 实现，开发和服务于企业级后台产品。',
    group: 'Ant Design 社区',
    site: 'https://2x.antdv.com',
    github: 'https://github.com/vueComponent/ant-design-vue',
    star: 0,
  },
  {
    title: 'Ant Design of Vue (Vue 3)',
    icon: 'devicon:antdesign',
    color: '#1677ff',
    desc: '这里是 Ant Design 的 Vue3 实现，开发和服务于企业级后台产品。',
    group: 'Ant Design 社区',
    site: 'https://www.antdv.com',
    github: 'https://github.com/vueComponent/ant-design-vue',
    star: 0,
  },
  {
    title: 'View UI',
    icon: '',
    color: '#e18525',
    desc: 'View UI®，即原先的 iView，是一套基于 Vue2 的开源 UI 组件库，主要服务于 PC 界面的中后台产品。',
    group: 'View UI 团队',
    site: 'https://v4.iviewui.com/',
    github: 'https://github.com/view-design/ViewUI',
    star: 0,
  },
  {
    title: 'View UI Plus',
    icon: '',
    color: '#e18525',
    desc: 'View UI Plus 是 View Design 设计体系中基于 Vue3 的一套 UI 组件库，主要用于企业级中后台系统。',
    group: 'View UI 团队',
    site: 'https://www.iviewui.com/',
    github: 'https://github.com/view-design/ViewUIPlus',
    star: 0,
  },
  {
    title: 'Naive UI',
    icon: 'logos:naiveui',
    color: '#18A058',
    desc: 'Naive UI 是一个 Vue3 的组件库。',
    group: 'TuSimple',
    site: 'https://www.naiveui.com/',
    github: 'https://github.com/TuSimple/naive-ui',
    star: 0,
  },
  {
    title: 'Quasar Framework',
    icon: 'devicon:quasar',
    color: '#00b4ff',
    desc: '用于构建高性能 VueJS 用户界面，包括响应式单页应用、SSR 应用、PWA、浏览器扩展、混合移动应用和 Electron 应用等。',
    group: 'Quasar 团队',
    site: 'https://quasar.dev/',
    github: 'https://github.com/quasarframework/quasar',
    star: 0,
  },
  {
    title: 'Arco Design Vue',
    icon: '',
    color: '#4080ff',
    desc: '基于 Arco Design 的 Vue3 UI 组件库。',
    group: '字节跳动',
    site: 'https://arco.design/vue/docs/start',
    github: 'https://github.com/arco-design/arco-design',
    star: 0,
  },
]);
