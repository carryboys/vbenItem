import { defHttp } from '/@/utils/http/axios';
import { Modal } from 'ant-design-vue';

enum Api {
  /* list = '/sys/role/list',
  save = '/sys/role/add',
  edit = '/sys/role/edit',
  deleteRole = '/sys/role/delete',
  deleteBatch = '/sys/role/deleteBatch',
  exportXls = '/sys/role/exportXls',
  importExcel = '/sys/role/importExcel',
  isRoleExist = '/sys/role/checkRoleCode',
  queryTreeListForRole = '/sys/role/queryTreeList',
  queryRolePermission = '/sys/permission/queryRolePermission',
  saveRolePermission = '/sys/permission/saveRolePermission',
  queryDataRule = '/sys/role/datarule',
  getParentDesignList = '/act/process/extActDesignFlowData/getDesFormFlows',
  getRoleDegisnList = '/joa/designform/designFormCommuse/getRoleDegisnList',
  saveRoleDesign = '/joa/designform/designFormCommuse/sysRoleDesignAdd',
  userList = '/sys/user/userRoleList',
  deleteUserRole = '/sys/user/deleteUserRole',
  batchDeleteUserRole = '/sys/user/deleteUserRoleBatch',
  addUserRole = '/sys/user/addSysUserRole',
  saveRoleIndex = '/sys/sysRoleIndex/add',
  editRoleIndex = '/sys/sysRoleIndex/edit',
  queryIndexByCode = '/sys/sysRoleIndex/queryByCode', */

  list = '/sys/role/list.json',
  save = '/sys/role/add.json',
  edit = '/sys/role/edit.json',
  deleteRole = '/sys/role/delete.json',
  deleteBatch = '/sys/role/deleteBatch.json',
  exportXls = '/sys/role/exportXls.json',
  importExcel = '/sys/role/importExcel.json',
  isRoleExist = '/sys/role/checkRoleCode.json',
  queryTreeListForRole = '/sys/role/queryTreeList.json',
  queryRolePermission = '/sys/permission/queryRolePermission.json',
  saveRolePermission = '/sys/permission/saveRolePermission.json',
  queryDataRule = '/sys/role/datarule.json',
  // getParentDesignList = '/act/process/extActDesignFlowData/getDesFormFlows.json',
  // getRoleDegisnList = '/joa/designform/designFormCommuse/getRoleDegisnList.json',
  // saveRoleDesign = '/joa/designform/designFormCommuse/sysRoleDesignAdd.json',
  userList = '/sys/user/userRoleList.json',
  deleteUserRole = '/sys/user/deleteUserRole.json',
  batchDeleteUserRole = '/sys/user/deleteUserRoleBatch.json',
  addUserRole = '/sys/user/addSysUserRole.json',
  saveRoleIndex = '/sys/sysRoleIndex/add.json',
  editRoleIndex = '/sys/sysRoleIndex/edit.json',
  queryIndexByCode = '/sys/sysRoleIndex/queryByCode.json',
}
/**
 * ??????api
 */
export const getExportUrl = Api.exportXls;
/**
 * ??????api
 */
export const getImportUrl = Api.importExcel;
/**
 * ??????
 * @param params
 */
export const list = (params) => defHttp.get({ url: Api.list, params });

/**
 * ????????????
 */
export const deleteRole = (params, handleSuccess) => {
  return defHttp.delete({ url: Api.deleteRole, params }, { joinParamsToUrl: true }).then(() => {
    handleSuccess();
  });
};
/**
 * ??????????????????
 * @param params
 */
export const batchDeleteRole = (params, handleSuccess) => {
  Modal.confirm({
    title: '????????????',
    content: '????????????????????????',
    okText: '??????',
    cancelText: '??????',
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
 * ????????????????????????
 * @param params
 */
export const saveOrUpdateRole = (params, isUpdate) => {
  const url = isUpdate ? Api.edit : Api.save;
  return defHttp.post({ url: url, params });
};
/**
 * ????????????
 * @param params
 */
export const isRoleExist = (params) =>
  defHttp.get({ url: Api.isRoleExist, params }, { isTransformResponse: false });
/**
 * ???????????????????????????
 */
export const queryTreeListForRole = () => defHttp.get({ url: Api.queryTreeListForRole });
/**
 * ??????????????????
 */
export const queryRolePermission = (params) =>
  defHttp.get({ url: Api.queryRolePermission, params });
/**
 * ??????????????????
 */
export const saveRolePermission = (params) => defHttp.post({ url: Api.saveRolePermission, params });
/**
 * ????????????????????????
 */
export const queryDataRule = (params) =>
  defHttp.get(
    { url: `${Api.queryDataRule}/${params.functionId}/${params.roleId}` },
    { isTransformResponse: false },
  );
/**
 * ????????????????????????
 */
export const saveDataRule = (params) => defHttp.post({ url: Api.queryDataRule, params });
/**
 * ??????????????????
 * @return List<Map>
 */
export const getParentDesignList = () => defHttp.get({ url: Api.getParentDesignList });
/**
 * ????????????????????????
 * @return List<Map>
 */
export const getRoleDegisnList = (params) => defHttp.get({ url: Api.getRoleDegisnList, params });
/**
 * ????????????????????????
 */
export const saveRoleDesign = (params) => defHttp.post({ url: Api.saveRoleDesign, params });
/**
 * ??????????????????
 * @param params
 */
export const userList = (params) => defHttp.get({ url: Api.userList, params });
/**
 * ??????????????????
 */
export const deleteUserRole = (params, handleSuccess) => {
  return defHttp.delete({ url: Api.deleteUserRole, params }, { joinParamsToUrl: true }).then(() => {
    handleSuccess();
  });
};
/**
 * ????????????????????????
 * @param params
 */
export const batchDeleteUserRole = (params, handleSuccess) => {
  Modal.confirm({
    title: '????????????',
    content: '????????????????????????',
    okText: '??????',
    cancelText: '??????',
    onOk: () => {
      return defHttp
        .delete({ url: Api.batchDeleteUserRole, params }, { joinParamsToUrl: true })
        .then(() => {
          handleSuccess();
        });
    },
  });
};
/**
 * ??????????????????
 */
export const addUserRole = (params, handleSuccess) => {
  return defHttp.post({ url: Api.addUserRole, params }).then(() => {
    handleSuccess();
  });
};
/**
 * ??????????????????
 * @param params
 * @param isUpdate ?????????????????????
 */
export const saveOrUpdateRoleIndex = (params, isUpdate) => {
  const url = isUpdate ? Api.editRoleIndex : Api.saveRoleIndex;
  return defHttp.post({ url: url, params });
};
/**
 * ??????code??????????????????
 * @param params
 */
export const queryIndexByCode = (params) =>
  defHttp.get({ url: Api.queryIndexByCode, params }, { isTransformResponse: false });
