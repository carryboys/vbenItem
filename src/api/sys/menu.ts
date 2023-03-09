import { defHttp } from '/@/utils/http/axios';
import { getMenuListResultModel } from './model/menuModel';

enum Api {
  // GetMenuList = '/sys/permission/getUserPermissionByToken',
  GetMenuList = '/sys/permission/getUserPermissionByToken.json',
}

/**
 * @description: Get user menu based on id
 */

export const getMenuList = () => {
  return new Promise((resolve) => {
    defHttp.get<getMenuListResultModel>({ url: Api.GetMenuList }).then((res) => {
      if (Array.isArray(res)) {
        resolve(res);
      } else {
        resolve(res['menu']);
      }
    });
  });
};
