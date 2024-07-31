/**
 * @description: Login interface parameters
 */
export interface LoginParamsModel {
  username: string;
  password: string;
  picSessionId?: string;
  picCode?: string;
}
/**
 * @description: Login interface response
 */
export interface LoginResultModel {
  accessToken: string;
  exp: number;
  picSessionId?: string;
}
export interface AuthResultModel {
  ruleSet: Array<string>;
}

export interface MerchantItemModel {
  pkId?: string;
  appId?: string;
  tenantId?: string;
  gTenantId?: string;
  companyName?: string;
  gmtCreate?: string;
}
export interface MerchantListModel {
  totalSize: number;
  currentList: MerchantItemModel[];
}
export interface MerchantListParamsModel {
  appName?: string;
}
export interface PasswordParamsModel {
  vcode: string;
  password: string;
  confirmPassword: string;
}
export interface CheckBindParamsModel {
  openId: string;
  unionId: string;
  thirdUserType: number;
}

export interface UserListModel {
  userId: string;
  userName: string;
  chineseName: string;
  nickName: string;
  headImgUrl: string;
  phone: string;
  userType: string;
  threeNo: string;
  unionId: string;
  thirdUserId?: string;
  openId: string;
  loginBussinessType?: number | undefined;
}
export interface CheckBindResultModel {
  num: number;
  exp?: number;
  accessToken: string;
  userList: UserListModel[];
}

export interface AuthWhiteParamsModel {
  thirdPlatform: number; //1微信，2支付宝
  businessSource: number; //业务来源1：AI管理系统2：客服识别
  thirdPlatformSource: number; // 1：公众号(支付宝服务窗，生活号)2：小程序3：微信网站应用
  code: string; // 扫码登录返回的code
}

export interface AuthWhiteResultModel {
  success: boolean;
  thirdUserId: string;
  unionId: string;
  userName: string;
  nickName: string;
  headImgUrl: string;
  simpleName: string;
  accessTocken: string;
  errorMsg: string;
  type?: number;
}
export interface ChooseLoginParamsModel {
  userId: string;
  unionId: string;
  openId: string;
  threeNo: string;
  thirdUserType: number;
}
export interface BindUserParamsModel {
  userId: string;
  unionId: string;
  openId: string;
  nickName: string;
  headImgUrl: string;
  code: string;
  thirdUserType: number;
}
export interface CaptchaParamsModel {
  type: string;
}
export interface CaptchaResultModel {
  sessionId: string;
  picBase64: string;
}
export interface ChooseLoginResultModel {
  accessToken: string;
  exp: number;
}
export interface DashboardResultModel {
  timeSpan: string;
}
