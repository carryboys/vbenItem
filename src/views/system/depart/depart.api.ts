import { unref } from 'vue';
import { defHttp } from '/@/utils/http/axios';
import { useMessage } from '/@/hooks/web/useMessage';

const { createConfirm } = useMessage();

export enum Api {
  /* queryDepartTreeSync = '/sys/sysDepart/queryDepartTreeSync',
  save = '/sys/sysDepart/add',
  edit = '/sys/sysDepart/edit',
  delete = '/sys/sysDepart/delete',
  deleteBatch = '/sys/sysDepart/deleteBatch',
  exportXlsUrl = '/sys/sysDepart/exportXls',
  importExcelUrl = '/sys/sysDepart/importExcel',

  roleQueryTreeList = '/sys/role/queryTreeList',
  queryDepartPermission = '/sys/permission/queryDepartPermission',
  saveDepartPermission = '/sys/permission/saveDepartPermission',

  dataRule = '/sys/sysDepartPermission/datarule',

  getCurrentUserDeparts = '/sys/user/getCurrentUserDeparts',
  selectDepart = '/sys/selectDepart', */

  queryDepartTreeSync = '/sys/sysDepart/queryDepartTreeSync.json',
  queryDepartTreeSyncPid = '/sys/sysDepart/queryDepartTreeSyncPid.json', // 点击节点需要传Pid
  save = '/sys/sysDepart/add.json',
  edit = '/sys/sysDepart/edit.json',
  delete = '/sys/sysDepart/delete.json',
  deleteBatch = '/sys/sysDepart/deleteBatch.json',
  exportXlsUrl = '/sys/sysDepart/exportXls.json',
  importExcelUrl = '/sys/sysDepart/importExcel.json',

  roleQueryTreeList = '/sys/role/queryTreeList.json',
  queryDepartPermission = '/sys/permission/queryDepartPermission.json',
  saveDepartPermission = '/sys/permission/saveDepartPermission.json',

  dataRule = '/sys/sysDepartPermission/datarule.json',
  saveDataRule = '/sys/sysDepartPermission/savedatarule.json',

  getCurrentUserDeparts = '/sys/user/getCurrentUserDeparts.json',
  selectDepart = '/sys/selectDepart.json',
}

/**
 * 获取部门树列表
 */
export const queryDepartTreeSync = (params?) =>
  defHttp.get({ url: Api.queryDepartTreeSync, params });

/**
 * 保存或者更新部门角色
 */
export const saveOrUpdateDepart = (params, isUpdate) => {
  if (isUpdate) {
    return defHttp.put({ url: Api.edit, params });
  } else {
    return defHttp.post({ url: Api.save, params });
  }
};

/**
 * 批量删除部门角色
 */
export const deleteBatchDepart = (params, confirm = false) => {
  return new Promise((resolve, reject) => {
    const doDelete = () => {
      resolve(defHttp.delete({ url: Api.deleteBatch, params }, { joinParamsToUrl: true }));
    };
    if (confirm) {
      createConfirm({
        iconType: 'warning',
        title: '删除',
        content: '确定要删除吗？',
        onOk: () => doDelete(),
        onCancel: () => reject(),
      });
    } else {
      doDelete();
    }
  });
};

/**
 * 获取权限树列表
 */
export const queryRoleTreeList = (params?) => defHttp.get({ url: Api.roleQueryTreeList, params });
/**
 * 查询部门权限
 */
export const queryDepartPermission = (params?) =>
  defHttp.get({ url: Api.queryDepartPermission, params });
/**
 * 保存部门权限
 */
export const saveDepartPermission = (params) =>
  defHttp.post({ url: Api.saveDepartPermission, params });

/**
 *  查询部门数据权限列表
 */
export const queryDepartDataRule = (functionId, departId, params?) => {
  // const url = `${Api.dataRule}/${unref(functionId)}/${unref(departId)}`;
  const url = `${Api.dataRule}`;
  return defHttp.get({ url, params });
};
/**
 * 保存部门数据权限
 */
export const saveDepartDataRule = (params) => {
  // defHttp.post({ url: Api.saveDataRule, params });
  defHttp.post({ url: Api.saveDataRule, params });
};
/**
 * 获取登录用户部门信息
 */
export const getUserDeparts = (params?) => defHttp.get({ url: Api.getCurrentUserDeparts, params });
/**
 * 切换选择部门
 */
export const selectDepart = (params?) => defHttp.put({ url: Api.selectDepart, params });
