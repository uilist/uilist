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
    title: 'Vant',
    icon: '',
    color: '#1989fa',
    desc: '轻量、可靠的移动端 Vue 组件库，适用于 Vue 2 和 Vue 3。',
    group: '有赞',
    site: 'https://youzan.github.io/vant',
    github: 'https://github.com/youzan/vant',
    star: 0,
  },
  {
    title: 'Mint UI',
    icon: '',
    color: '#26a2ff',
    desc: '基于 Vue.js 的移动端组件库，适用于 Vue 2。',
    group: '饿了么',
    site: 'https://mint-ui.github.io/#!/zh-cn',
    github: 'https://github.com/ElemeFE/mint-ui',
    star: 0,
  },
  {
    title: 'Cube UI',
    icon: '',
    color: '#f66',
    desc: '为 Vue.js 开发的精致移动端组件库，适用于 Vue 2。',
    group: '滴滴',
    site: 'https://didi.github.io/cube-ui',
    github: 'https://github.com/didi/cube-ui',
    star: 0,
  },
  {
    title: 'NutUI',
    icon: '',
    color: '#fa2c19',
    desc: 'NutUI-Vue 组件库，开箱即用，帮助研发快速开发用户界面，提升开发效率，改善开发体验,适用于 Vue 2 和 Vue 3。',
    group: '京东',
    site: 'https://nutui.jd.com',
    github: 'https://github.com/jdf2e/nutui',
    star: 0,
  },
  {
    title: 'Mand Mobile',
    icon: '',
    color: '#007bff',
    desc: '面向金融场景的 Vue 移动端组件库，适用于 Vue 2。',
    group: '滴滴',
    site: 'https://didi.github.io/mand-mobile',
    github: 'https://github.com/didi/mand-mobile',
    star: 0,
  },
  {
    title: 'Framework7-Vue',
    icon: 'logos:framework7',
    color: '#ff5a5f',
    desc: '使用 Framework7 构建的 Vue 移动端 UI 库，适用于 Vue 2 和 Vue 3。',
    group: 'Framework7 团队',
    site: 'https://framework7.io/vue',
    github: 'https://github.com/framework7io/framework7',
    star: 0,
  },
  {
    title: 'Ionic Vue',
    icon: 'logos:ionic',
    color: '#3880ff',
    desc: '与 Ionic 结合的 Vue 组件库，适用于构建高质量的移动应用，适用于 Vue 3。',
    group: 'Ionic 团队',
    site: 'https://ionicframework.com/',
    github: 'https://github.com/ionic-team/ionic-framework',
    star: 0,
  },
  {
    title: 'Quasar Framework',
    icon: 'devicon:quasar',
    color: '#00b4ff',
    desc: '用于构建高性能 VueJS 用户界面，包括响应式单页应用、SSR 应用、PWA、浏览器扩展、混合移动应用和 Electron 应用等，适用于 Vue 2 和 Vue 3。',
    group: 'Quasar 团队',
    site: 'https://quasar.dev/',
    github: 'https://github.com/quasarframework/quasar',
    star: 0,
  },
  {
    title: 'Vux',
    icon: 'https://camo.githubusercontent.com/3b6d884dcce794002effb4c2571eee8599e86292c511b579f2fa02ec2f30618a/68747470733a2f2f692e6c6f6c692e6e65742f323031372f31312f32302f356131323138376562663265302e706e67',
    color: '#ffe26d',
    desc: '基于 WeUI 和 Vue 的移动端组件库，适用于 Vue 2。',
    group: '个人开发者',
    site: 'https://vux.li',
    github: 'https://github.com/airyland/vux',
    star: 0,
  },
  {
    title: 'Varlet',
    icon: 'https://avatars.githubusercontent.com/u/97020275?s=48&v=4',
    color: '#FF9E05',
    desc: '社区驱动的 Material 风格的移动端组件库，适用于 Vue 3。',
    group: '社区开发者',
    site: 'https://varletjs.org/',
    github: 'https://github.com/varletjs/varlet',
    star: 0,
  },
]);
