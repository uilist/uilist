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
    title: 'Taro UI',
    icon: '',
    color: '#007acc',
    desc: '适用于多端（微信小程序、支付宝小程序、H5 等）的 UI 组件库。',
    group: '凹凸实验室',
    site: 'https://taro-ui.jd.com',
    github: 'https://github.com/NervJS/taro-ui',
    star: 0,
  },
  {
    title: 'uView',
    icon: '',
    color: '#3c9cff',
    desc: '全面的高质量跨平台 UI 组件库，适用于多端（微信小程序、支付宝小程序、H5 等）。',
    group: 'uView 团队',
    site: 'https://uviewui.com',
    github: 'https://github.com/YanxinNet/uView',
    star: 0,
  },
  {
    title: 'Uni UI',
    icon: '',
    color: '#42b983',
    desc: '基于 uni-app 的 UI 组件库，适用于微信小程序和支付宝小程序。',
    group: 'DCloud',
    site: 'https://uniapp.dcloud.net.cn/component/',
    github: 'https://github.com/dcloudio/uni-ui',
    star: 0,
  },
  {
    title: 'WeUI',
    icon: 'ant-design:wechat-filled',
    color: '#07c160',
    desc: 'WeUI 是一套同微信原生视觉体验一致的基础样式库，主要服务于微信小程序。',
    group: '腾讯',
    site: 'https://weui.io',
    github: 'https://github.com/Tencent/weui',
    star: 0,
  },
  {
    title: 'Vant Weapp',
    icon: '',
    color: '#ee0a24',
    desc: '轻量、可靠的小程序 UI 组件库，适用于微信和支付宝小程序。',
    group: '有赞',
    site: 'https://youzan.github.io/vant-weapp',
    github: 'https://github.com/youzan/vant-weapp',
    star: 0,
  },
  {
    title: 'Ant Design Mini',
    icon: 'devicon:antdesign',
    color: '#1677ff',
    desc: 'Ant Design 的小程序实现，适用于支付宝小程序。',
    group: '蚂蚁金服',
    site: 'https://mini.ant.design',
    github: 'https://github.com/ant-design/ant-design-mini',
    star: 0,
  },

  {
    title: 'ColorUI',
    icon: '',
    color: '#e9546b',
    desc: '高颜值的小程序 UI 库，适用于微信和支付宝小程序。',
    group: 'ColorUI 团队',
    site: 'https://www.color-ui.com',
    github: 'https://github.com/weilanwl/ColorUI',
    star: 0,
  },
  {
    title: 'iView Weapp',
    icon: '',
    color: '#4caf50',
    desc: '一套高质量的微信小程序 UI 组件库。',
    group: 'TalkingData',
    site: 'https://weapp.iviewui.com',
    github: 'https://github.com/TalkingData/iview-weapp',
    star: 0,
  },
  {
    title: 'Lin UI',
    icon: '',
    color: '#3963bc',
    desc: '京东风格的小程序 UI 组件库，适用于微信小程序。',
    group: '京东',
    site: 'https://doc.mini.talelin.com/',
    github: 'https://github.com/TaleLin/lin-ui',
    star: 0,
  },
]);
