<template>
  <!--引用表格-->
  <BasicTable
    @row-contextmenu="handleContext"
    @register="registerTable"
    :rowSelection="rowSelection"
    @row-click="rowClick"
  >
    <!--插槽:table标题-->
    <template #tableTitle>
      <a-button type="primary" preIcon="ant-design:save-outlined" @click=""
        >保存</a-button
      >
      <a-button type="primary" @click="">插入</a-button>
      <!-- <a-button type="primary" @click="">获取数据</a-button> -->
      <!-- <a-button type="primary" @click="">排序</a-button> -->
      <a-button type="primary" @click="">导入</a-button>
      <a-button type="primary" @click="onExportXls">导出</a-button>
      <a-button type="primary" @click="">打印</a-button>
      <!-- <a-button type="primary" @click="getSelectRowKeys">获取keys</a-button> -->
      <!-- <a-switch
        v-model:checked="isEdit"
        checked-children="编辑"
        un-checked-children="编辑"
        style="margin-top: 4px"
      /> -->
      <a-switch
        v-model:checked="isShrink"
        checked-children="收缩"
        un-checked-children="收缩"
        style="margin-top: 4px"
      />
      <template v-if="selectedRowKeys.length > 0">
        <a-dropdown>
          <template #overlay>
            <a-menu>
              <a-menu-item key="1" @click="deleteByKey">
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
</template>

<script lang="ts" setup>
  import { computed, inject, ref, unref, watch } from 'vue';
  import { ActionItem, BasicTable, TableAction } from '/@/components/Table';
  // import { useModal } from '/@/components/Modal';
  // import { useDrawer } from '/@/components/Drawer';
  // import { useContextMenu } from '/@/hooks/web/useContextMenu';
  // import { useMessage } from '/@/hooks/web/useMessage';
  import { useListPage } from '/@/hooks/system/useListPage';
  // import { ContextMenuItem } from '/@/components/Tree';
  // import UserDrawer from '/@/views/system/user/UserDrawer.vue';
  // import UserSelectModal from '/@/components/Form/src/hexagon/components/modal/UserSelectModal.vue';
  import { codeRuleDetail } from '../code.rule.api';
  import { userInfoColumns, userInfoSearchFormSchema } from '../code.rule.data';
  import { ColEx } from '/@/components/Form/src/types';
  import { contextmenu } from '/@/tools/contextMenu';
  // import { operateFn } from '/@/tools/operate';

  const isEdit = ref(false);
  const isShrink = ref(false);

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
  // 切换是否可以编辑
  // function editStatusChange() {
  //   userInfoColumns.map((item) => {
  //     if (item.edit != undefined) {
  //       item.edit = isEdit.value;
  //     }
  //   });
  //   console.log(userInfoColumns);
  //   reload();
  // }
  // 列表页面公共参数、方法
  const { tableContext } = useListPage({
    tableProps: {
      api: codeRuleDetail,
      columns: userInfoColumns,
      canResize: true,
      showActionColumn: false, // 是否显示操作列
      formConfig: {
        schemas: userInfoSearchFormSchema,
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
    { reload, setProps, setLoading, updateTableDataRecord,deleteSelectRowByKey,getSelectRows,deleteTableDataRecord,clearSelectedRowKeys},
    { rowSelection, selectedRowKeys},
  ] = tableContext;

  watch(
    () => props.data,
    () => reload(),
  );
  // 清空选择的行
  function clearSelection() {
    selectedRowKeys.value = [];
  }
  // 行单击触发
  function rowClick(record, index) {
    selectedRowKeys.value = [];
    selectedRowKeys.value.push(record.id);
  }
  // 右键菜单
  function handleContext(record,index,e: MouseEvent) {
    contextmenu(record,index,tableContext).onContextmenu(e)
  }
  // 获取选中key
  // function getSelectRowKeys(){
  //   console.log(rowSelection)
  //   console.log(clearSelectedRowKeys())
  // }
  // 删除选中
  function deleteByKey(){
    deleteTableDataRecord(selectedRowKeys.value)
    clearSelectedRowKeys()
  }
</script>
