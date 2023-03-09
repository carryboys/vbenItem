import { defHttp } from '/@/utils/http/axios';
import { LoginParams, LoginResultModel, GetUserInfoModel } from './model/userModel';

import { ErrorMessageMode } from '/#/axios';
import { useMessage } from '/@/hooks/web/useMessage';
import { useUserStore, useUserStoreWithOut } from '/@/store/modules/user';
import { setAuthCache } from '/@/utils/auth';
import { TOKEN_KEY } from '/@/enums/cacheEnum';
import { router } from '/@/router';
import { PageEnum } from '/@/enums/pageEnum';

const { createErrorModal } = useMessage();

enum Api {
  // Login = '/into3dbaseback/sys/login',
  // Logout = '/into3dbaseback/sys/logout',
  // GetUserInfo = '/into3dbaseback/getUserInfo',
  // GetPermCode = '/into3dbaseback/getPermCode', // 获取权限码？
  // getInputCode = '/into3dbaseback/sys/randomImage',

  Login = '/sys/login.json',
  Logout = '/sys/logout.json',
  getInputCode = '/sys/randomImage.json',
  GetUserInfo = '/sys/user/getUserInfo.json',
  GetPermCode = '/sys/permission/getPermCode.json', // 获取权限码？

  //获取短信验证码的接口
  getCaptcha = '/sys/sms',
  //注册接口
  registerApi = '/sys/user/register',
  //校验用户接口
  checkOnlyUser = '/sys/user/checkOnlyUser',
  //SSO登录校验
  validateCasLogin = '/sys/cas/client/validateLogin',
  //校验手机号
  phoneVerify = '/sys/user/phoneVerification',
  //修改密码
  passwordChange = '/sys/user/passwordChange',
  //第三方登录
  thirdLogin = '/sys/thirdLogin/getLoginUser',
  //第三方登录
  getThirdCaptcha = '/sys/thirdSms',
  //获取二维码信息
  getLoginQrcode = '/sys/getLoginQrcode',
  //监控二维码扫描状态
  getQrcodeToken = '/sys/getQrcodeToken',
  phoneLogin = '/sys/phoneLogin',

  // 获取项目接口数据
  getTopProject = '/sys/getTopProject.json',
  getUserProject = '/sys/getUserProject.json',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.get<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

// Added By zzx 20230306 登录获取项目数据
export const getTopProject = (params) => defHttp.get({ url: Api.getTopProject, params });
export const getUserProject = (params) => defHttp.get({ url: Api.getUserProject, params });

/**
 * @description: user phoneLogin api
 */
export function phoneLoginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.phoneLogin,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  /* const userStore = useUserStore();
  const result = {
    code: 0,
    result: {
      userId: '1',
      username: 'admin',
      realName: 'Admin',
      avatar: '',
      desc: 'manager',
      password: '',
      token: userStore.getToken,
      homePath: '/dashboard/analysis',
      roles: [
        {
          roleName: 'Super Admin',
          value: 'super',
        },
      ],
    },
    message: 'ok',
    type: 'success',
  };
  return result.result; */
  return defHttp
    .get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' })
    .catch((e) => {
      if (e && (e.message.includes('timeout') || e.message.includes('401'))) {
        //接口不通时跳转到登录界面
        const userStore = useUserStoreWithOut();
        userStore.setToken('');
        setAuthCache(TOKEN_KEY, null);
        router.push(PageEnum.BASE_LOGIN);
      }
    });
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  const userStore = useUserStore(); // 需要放到函数里面？
  const headers = { 'X-Access-Token': userStore.getToken };
  return defHttp.post({ url: Api.Logout, headers });
}

export function getCodeInfo(currdatetime) {
  // const url = Api.getInputCode + `/${currdatetime}`;
  const url = Api.getInputCode;
  return defHttp.get({ url: url });
}

/**
 * @description: 获取短信验证码
 */
export function getCaptcha(params) {
  return new Promise((resolve, reject) => {
    defHttp.post({ url: Api.getCaptcha, params }, { isTransformResponse: false }).then((res) => {
      console.log(res);
      if (res.success) {
        resolve(true);
      } else {
        createErrorModal({ title: '错误提示', content: res.message || '未知问题' });
        reject();
      }
    });
  });
}

/**
 * @description: 注册接口
 */
export function register(params) {
  return defHttp.post({ url: Api.registerApi, params }, { isReturnNativeResponse: true });
}

/**
 *校验用户是否存在
 * @param params
 */
export const checkOnlyUser = (params) =>
  defHttp.get({ url: Api.checkOnlyUser, params }, { isTransformResponse: false });
/**
 *校验手机号码
 * @param params
 */
export const phoneVerify = (params) =>
  defHttp.post({ url: Api.phoneVerify, params }, { isTransformResponse: false });
/**
 *密码修改
 * @param params
 */
export const passwordChange = (params) =>
  defHttp.get({ url: Api.passwordChange, params }, { isTransformResponse: false });
/**
 * @description: 第三方登录
 */
export function thirdLogin(params, mode: ErrorMessageMode = 'modal') {
  return defHttp.get<LoginResultModel>(
    {
      url: `${Api.thirdLogin}/${params.token}/${params.thirdType}`,
    },
    {
      errorMessageMode: mode,
    },
  );
}
/**
 * @description: 获取第三方短信验证码
 */
export function setThirdCaptcha(params) {
  return new Promise((resolve, reject) => {
    defHttp
      .post({ url: Api.getThirdCaptcha, params }, { isTransformResponse: false })
      .then((res) => {
        console.log(res);
        if (res.success) {
          resolve(true);
        } else {
          createErrorModal({ title: '错误提示', content: res.message || '未知问题' });
          reject();
        }
      });
  });
}

/**
 * 获取登录二维码信息
 */
export function getLoginQrcode() {
  const url = Api.getLoginQrcode;
  return defHttp.get({ url: url });
}

/**
 * 监控扫码状态
 */
export function getQrcodeToken(params) {
  const url = Api.getQrcodeToken;
  return defHttp.get({ url: url, params });
}

/**
 * SSO登录校验
 */
export async function validateCasLogin(params) {
  const url = Api.validateCasLogin;
  return defHttp.get({ url: url, params });
}
