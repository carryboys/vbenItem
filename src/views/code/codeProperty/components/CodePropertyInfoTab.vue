<template>
  <!--引用表格-->
  <BasicTable @register="registerTable" :rowSelection="rowSelection">
    <!--插槽:table标题-->
    <template #tableTitle>
      <a-button type="primary" preIcon="ant-design:save-outlined" @click="createUser"
        >保存</a-button
      >
      <a-button type="primary" @click="createUser">插入</a-button>
      <!-- <a-button type="primary" @click="createUser">获取数据</a-button> -->
      <a-button type="primary" @click="createUser">排序</a-button>
      <a-button type="primary" @click="createUser">导入</a-button>
      <a-button type="primary" @click="createUser">导出</a-button>
      <a-button type="primary" @click="createUser">打印</a-button>
      <a-switch
        v-model:checked="isEdit"
        checked-children="编辑"
        un-checked-children="编辑"
        style="margin-top: 4px"
      />
      <template v-if="selectedRowKeys.length > 0">
        <a-dropdown>
          <template #overlay>
            <a-menu>
              <a-menu-item key="1" @click="onUnlinkDepartUserBatch">
                <icon icon="bx:bx-unlink" />
                <span>删除</span>
              </a-menu-item>
            </a-menu>
          </template>
          <a-button>
            <span>批量操作 </span>
            <icon icon="akar-icons:chevron-down" />
          </a-button>
        </a-dropdown>
      </template>
    </template>
  </BasicTable>
  <!--子表表格tab-->
  <a-tabs defaultActiveKey="1" style="margin: 10px">
    <a-tab-pane tab="关联表" key="1">
      <CodePropertyInfoTabSub />
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts" setup>
  import { computed, inject, ref, unref, watch, provide } from 'vue';
  import { ActionItem, BasicTable, TableAction } from '/@/components/Table';
  import { useModal } from '/@/components/Modal';
  import { useDrawer } from '/@/components/Drawer';
  import { useListPage } from '/@/hooks/system/useListPage';

  import UserDrawer from '/@/views/system/user/UserDrawer.vue';
  import UserSelectModal from '/@/components/Form/src/hexagon/components/modal/UserSelectModal.vue';
  import { codePropertyDetail } from '../code.property.api';
  import {
    codePropertyDetailColumns,
    codePropertyDetailSearchFormSchema,
  } from '../code.property.data';
  import { ColEx } from '/@/components/Form/src/types';

  import CodePropertyInfoTabSub from './CodePropertyInfoTabSub.vue';

  const isEdit = ref(false);

  const prefixCls = inject('prefixCls');
  const props = defineProps({
    data: { require: true, type: Object },
  });
  // 当前选中的部门ID，可能会为空，代表未选择部门
  const departId = computed(() => props.data?.id);

  // 自适应列配置
  const adaptiveColProps: Partial<ColEx> = {
    xs: 24, // <576px
    sm: 24, // ≥576px
    md: 24, // ≥768px
    lg: 12, // ≥992px
    xl: 12, // ≥1200px
    xxl: 8, // ≥1600px
  };
  // 列表页面公共参数、方法
  const { tableContext, createMessage } = useListPage({
    tableProps: {
      api: codePropertyDetail,
      columns: codePropertyDetailColumns,
      canResize: false,
      showActionColumn: false, // 是否显示操作列
      formConfig: {
        schemas: codePropertyDetailSearchFormSchema,
        baseColProps: adaptiveColProps,
        labelAlign: 'left',
        labelCol: {
          xs: 24,
          sm: 24,
          md: 24,
          lg: 9,
          xl: 7,
          xxl: 5,
        },
        wrapperCol: {},
        // 操作按钮配置
        actionColOptions: {
          ...adaptiveColProps,
          style: { textAlign: 'left' },
        },
      },
      // 请求之前对参数做处理
      beforeFetch(params) {
        params.depId = departId.value;
      },
    },
  });

  // 注册 ListTable
  const [
    registerTable,
    { reload, setProps, setLoading, updateTableDataRecord },
    { rowSelection, selectedRowKeys },
  ] = tableContext;

  watch(
    () => props.data,
    () => reload(),
  );

  // Added By zzx 20230305 下发 id,子组件接收
  const id = computed(() => (unref(selectedRowKeys).length > 0 ? unref(selectedRowKeys)[0] : ''));
  provide('id', id);

  // 清空选择的行
  function clearSelection() {
    selectedRowKeys.value = [];
  }
</script>
