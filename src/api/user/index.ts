import { defHttp } from '@/utils/http/axios';
import type { Result } from '#/axios';
import {
  LoginParamsModel,
  LoginResultModel,
  MerchantListParamsModel,
  MerchantListModel,
  PasswordParamsModel,
  CheckBindParamsModel,
  CheckBindResultModel,
  AuthWhiteParamsModel,
  AuthWhiteResultModel,
  ChooseLoginParamsModel,
  ChooseLoginResultModel,
  CaptchaParamsModel,
  CaptchaResultModel,
  BindUserParamsModel,
  DashboardResultModel,
} from './model';
import type { UserInfo } from '#/store';

export enum Api {
  Login = 'tenant/auth/v1/password',
  auth = 'tenant/auth/v1/auth',
  logOut = 'tenant/auth/v1/logOut',
  merchantList = 'open/app/v1/list',
  password = 'tenant/user/v1/password', // 密码登录
  checkBind = 'tenant/auth/thirdapp/v1/check/bind', // 查看绑定关系
  chooseLogin = 'tenant/auth/thirdapp/v1/choose/user/login', // 选择账号登录
  bindUser = 'tenant/auth/thirdapp/v1/bind/user', // 绑定账号
  authWhite = 'base/thirdapp/auth/v1/white', // 根据Oauth Code 获取openId
  captcha = 'base/resource/captcha/v1/create', // 图形验证码

  machineCount = 'machine/data/v1/index/count', // 首页设备状态统计
  doorLine = 'machine/data/v1/index/door/line', // 首页开关门状态统计折线
  doorPie = 'machine/data/v1/index/door/pie', // 首页开关门状态统计饼图
  monitorLine = 'machine/data/v1/index/monitor/line', // 首页故障统计折现图
  monitorPie = 'machine/data/v1/index/monitor/pie', // 首页故障统计折现图
  monitorRanking = 'machine/data/v1/index/monitor/ranking', // 首页机器故障排行

  channelDashboard = 'goods/data/channel/v1/dashboard', // 识别通道统计看板展示(比例和折线图)
  durationDashboard = 'goods/data/duration/v1/dashboard', // 识别时长分布看板展示
}

export function loginApi(data: LoginParamsModel) {
  return defHttp.post<Result<LoginResultModel>>({
    url: Api.Login,
    data,
  });
}
export function authApi() {
  return defHttp.post<Result<UserInfo>>(
    {
      url: Api.auth,
    },
    { errorMessageMode: 'message' },
  );
}
export function logOutApi() {
  return defHttp.post<Result>(
    {
      url: Api.logOut,
    },
    { errorMessageMode: 'message' },
  );
}
export function merchantListApi(data: MerchantListParamsModel) {
  return defHttp.post<Result<MerchantListModel>>({
    url: Api.merchantList,
    data,
  });
}
export function passwordApi(data: PasswordParamsModel) {
  return defHttp.post<Result<MerchantListModel>>({
    url: Api.password,
    data,
  });
}
export function checkBindApi(data: CheckBindParamsModel) {
  return defHttp.post<Result<CheckBindResultModel>>({
    url: Api.checkBind,
    data,
  });
}
export function authWhiteApi(data: AuthWhiteParamsModel) {
  return defHttp.post<Result<AuthWhiteResultModel>>({
    url: Api.authWhite,
    data,
  });
}
export function chooseLoginApi(data: ChooseLoginParamsModel) {
  return defHttp.post<Result<ChooseLoginResultModel>>({
    url: Api.chooseLogin,
    data,
  });
}
export function bindUserApi(data: BindUserParamsModel) {
  return defHttp.post<Result<ChooseLoginResultModel>>({
    url: Api.bindUser,
    data,
  });
}
export function captchaApi(data: CaptchaParamsModel) {
  return defHttp.post<Result<CaptchaResultModel>>({
    url: Api.captcha,
    data,
  });
}
export function machineCountApi() {
  return defHttp.post<Result>({
    url: Api.machineCount,
  });
}
export function channelDashboardApi(data: DashboardResultModel) {
  return defHttp.post<Result>({
    url: Api.channelDashboard,
    data,
  });
}
export function durationDashboardApi(data: DashboardResultModel) {
  return defHttp.post<Result>({
    url: Api.durationDashboard,
    data,
  });
}
export function doorLineApi(data: DashboardResultModel) {
  return defHttp.post<Result>({
    url: Api.doorLine,
    data,
  });
}
export function doorPieApi(data: DashboardResultModel) {
  return defHttp.post<Result>({
    url: Api.doorPie,
    data,
  });
}
export function monitorLineApi(data: DashboardResultModel) {
  return defHttp.post<Result>({
    url: Api.monitorLine,
    data,
  });
}
export function monitorPieApi(data: DashboardResultModel) {
  return defHttp.post<Result>({
    url: Api.monitorPie,
    data,
  });
}
export function monitorRankingeApi(data: {
  timeSpan: string;
  ruleType?: string | undefined;
  topNum: number;
}) {
  return defHttp.post<Result>({
    url: Api.monitorRanking,
    data,
  });
}
