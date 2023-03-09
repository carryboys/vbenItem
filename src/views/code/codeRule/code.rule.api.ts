import { unref } from 'vue';
import { defHttp } from '/@/utils/http/axios';
import { useMessage } from '/@/hooks/web/useMessage';

const { createConfirm } = useMessage();

enum Api {
  /* treeList = '/sys/sysDepart/queryMyDeptTreeList',
  queryIdTree = '/sys/sysDepart/queryIdTree',
  searchBy = '/sys/sysDepart/searchBy', */
  treeList = '/sys/code/queryCodeRuleTreeList.json',
  queryIdTree = '/sys/code/queryIdCodeRuleTree.json',
  searchBy = '/sys/code/searchCodeRuleBy.json',
}

// 编码规则API
enum CodeRuleApi {
  /* detail = '/sys/code/codeRuleDetail', */
  detail = '/sys/code/codeRuleDetail.json',
}

/**
 * 获取规则树列表
 */
export const queryCodeRuleTreeList = (params?) =>
  defHttp.get({ url: Api.treeList, params }, { isTransformResponse: false });

/**
 * 查询数据，以树结构形式加载所有规则的名称
 */
export const queryIdTree = (params?) => defHttp.get({ url: Api.queryIdTree, params });

/**
 * 根据关键字搜索规则
 */
export const searchByKeywords = (params) => defHttp.get({ url: Api.searchBy, params });

/**
 * 查询规则下的规则信息
 */
export const codeRuleDetail = (params) => defHttp.get({ url: CodeRuleApi.detail, params });
