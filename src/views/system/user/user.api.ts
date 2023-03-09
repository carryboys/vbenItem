import { defHttp } from '/@/utils/http/axios';
import { Modal } from 'ant-design-vue';

enum Api {
  /* list = '/sys/user/list',
  save = '/sys/user/add',
  edit = '/sys/user/edit',
  getUserRole = '/sys/user/queryUserRole',
  duplicateCheck = '/sys/duplicate/check',
  deleteUser = '/sys/user/delete',
  deleteBatch = '/sys/user/deleteBatch',
  importExcel = '/sys/user/importExcel',
  exportXls = '/sys/user/exportXls',
  recycleBinList = '/sys/user/recycleBin',
  putRecycleBin = '/sys/user/putrecycleBin',
  deleteRecycleBin = '/sys/user/deleterecycleBin',
  allRolesList = '/sys/role/queryall',
  allTenantList = '/sys/tenant/queryList',
  allPostList = '/sys/position/list',
  userDepartList = '/sys/user/userDepartList',
  changePassword = '/sys/user/changePassword',
  frozenBatch = '/sys/user/frozenBatch', */

  getUserAgent = '/sys/sysUserAgent/queryByUserName',
  agentSave = '/sys/sysUserAgent/add',
  agentEdit = '/sys/sysUserAgent/edit',
  syncUser = '/act/process/extActProcess/doSyncUser',

  list = '/sys/user/list.json',
  save = '/sys/user/add.json',
  edit = '/sys/user/edit.json',
  getUserRole = '/sys/user/queryUserRole.json',
  duplicateCheck = '/sys/duplicate/check.json',
  deleteUser = '/sys/user/delete.json',
  deleteBatch = '/sys/user/deleteBatch.json',
  importExcel = '/sys/user/importExcel.json',
  exportXls = '/sys/user/exportXls.json',
  recycleBinList = '/sys/user/recycleBin.json',
  putRecycleBin = '/sys/user/putRecycleBin.json',
  deleteRecycleBin = '/sys/user/deleteRecycleBin.json',
  allRolesList = '/sys/role/queryall.json',
  allTenantList = '/sys/tenant/queryList.json',
  allPostList = '/sys/position/list.json',
  userDepartList = '/sys/user/departList.json',
  changePassword = '/sys/user/changePassword.json',
  frozenBatch = '/sys/user/frozenBatch.json',
}
/**
 * 导出api
 * @param params
 */
export const getExportUrl = Api.exportXls;
/**
 * 导入api
 */
export const getImportUrl = Api.importExcel;
/**
 * 列表接口
 * @param params
 */
export const list = (params) => defHttp.get({ url: Api.list, params });

/**
 * 用户角色接口
 * @param params
 */
export const getUserRoles = (params) =>
  defHttp.get({ url: Api.getUserRole, params }, { errorMessageMode: 'none' });

/**
 * 删除用户
 */
export const deleteUser = (params, handleSuccess) => {
  return defHttp.delete({ url: Api.deleteUser, params }, { joinParamsToUrl: true }).then(() => {
    handleSuccess();
  });
};
/**
 * 批量删除用户
 * @param params
 */
export const batchDeleteUser = (params, handleSuccess) => {
  Modal.confirm({
    title: '确认删除',
    content: '是否删除选中数据',
    okText: '确认',
    cancelText: '取消',
    onOk: () => {
      return defHttp
        .delete({ url: Api.deleteBatch, data: params }, { joinParamsToUrl: true })
        .then(() => {
          handleSuccess();
        });
    },
  });
};
/**
 * 保存或者更新用户
 * @param params
 */
export const saveOrUpdateUser = (params, isUpdate) => {
  const url = isUpdate ? Api.edit : Api.save;
  return defHttp.post({ url: url, params });
};
/**
 * 唯一校验
 * @param params
 */
export const duplicateCheck = (params) =>
  defHttp.get({ url: Api.duplicateCheck, params }, { isTransformResponse: false });
/**
 * 获取全部角色
 * @param params
 */
export const getAllRolesList = (params) => defHttp.get({ url: Api.allRolesList, params });
/**
 * 获取全部租户
 */
export const getAllTenantList = (params) => defHttp.get({ url: Api.allTenantList, params });
/**
 * 获取指定用户负责部门
 */
export const getUserDepartList = (params) =>
  defHttp.get({ url: Api.userDepartList, params }, { successMessageMode: 'none' });
/**
 * 获取全部职务
 */
export const getAllPostList = (params) => {
  return new Promise((resolve) => {
    defHttp.get({ url: Api.allPostList, params }).then((res) => {
      resolve(res.records);
    });
  });
};
/**
 * 回收站列表
 * @param params
 */
export const getRecycleBinList = (params) => defHttp.get({ url: Api.recycleBinList, params });
/**
 * 回收站还原
 * @param params
 */
export const putRecycleBin = (params, handleSuccess) => {
  // return defHttp.put({ url: Api.putRecycleBin, params }).then(() => {
  return defHttp.post({ url: Api.putRecycleBin, params }).then(() => {
    handleSuccess();
  });
};
/**
 * 回收站删除
 * @param params
 */
export const deleteRecycleBin = (params, handleSuccess) => {
  // return defHttp.delete({ url: Api.deleteRecycleBin, params }, { joinParamsToUrl: true })
  return defHttp.get({ url: Api.deleteRecycleBin, params }, { joinParamsToUrl: true }).then(() => {
    handleSuccess();
  });
};
/**
 * 修改密码
 * @param params
 */
export const changePassword = (params) => {
  return defHttp.put({ url: Api.changePassword, params });
};
/**
 * 冻结解冻
 * @param params
 */
export const frozenBatch = (params, handleSuccess) => {
  return defHttp.put({ url: Api.frozenBatch, params }).then(() => {
    handleSuccess();
  });
};
/**
 * 获取用户代理
 * @param params
 */
export const getUserAgent = (params) =>
  defHttp.get({ url: Api.getUserAgent, params }, { isTransformResponse: false });
/**
 * 保存或者更新用户代理
 * @param params
 */
export const saveOrUpdateAgent = (params) => {
  const url = params.id ? Api.agentEdit : Api.agentSave;
  return defHttp.post({ url: url, params });
};

/**
 * 用户同步流程
 * @param params
 */
export const syncUser = () => defHttp.put({ url: Api.syncUser });
