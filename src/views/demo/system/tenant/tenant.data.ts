import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import dayjs from 'dayjs';

// 列表
export const columns: BasicColumn[] = [
  {
    title: '租户名称',
    dataIndex: 'tenantName',
    width: 160,
    align: 'left',
  },
  {
    title: '租户编号',
    dataIndex: 'id',
    width: 180,
  },
  {
    title: '开始时间',
    dataIndex: 'beginDate',
    width: 180,
  },
  {
    title: '结束时间',
    dataIndex: 'endDate',
    width: 180,
  },
  {
    title: '排序',
    dataIndex: 'orderNo',
    width: 50,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 80,
    customRender: ({ record }) => {
      const status = record.status;
      const enable = ~~status === 0;
      const color = enable ? 'green' : 'red';
      const text = enable ? '启用' : '停用';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
];

// 搜索
export const searchFormSchema: FormSchema[] = [
  {
    field: 'tenantName',
    label: '租户名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '启用', value: '0' },
        { label: '停用', value: '1' },
      ],
    },
    colProps: { span: 8 },
  },
];

// 新增/编辑
export const formSchema: FormSchema[] = [
  {
    field: 'tenantName',
    label: '租户名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'id',
    label: '租户编号',
    component: 'Input',
    required: true,
    dynamicDisabled: true,
    // Added By zzx 20230203 判断是否新增编辑，如果新增不显示租户编号
    ifShow: (_column) => {
      if (_column.values.id) {
        return true;
      } else {
        return false;
      }
    },
    colProps: { span: 12 },
  },
  {
    field: 'beginDate',
    label: '开始时间',
    component: 'DatePicker',
    componentProps: {
      valueFormat: 'YYYY-MM-DD',
    },
    defaultValue: dayjs().format('YYYY-MM-DD'),
    required: true,
  },
  {
    field: 'endDate',
    label: '结束时间',
    component: 'DatePicker',
    componentProps: {
      valueFormat: 'YYYY-MM-DD',
    },
    defaultValue: dayjs().add(1, 'year').format('YYYY-MM-DD'),
    required: true,
  },
  /* {
    field: 'parentTenant',
    label: '上级租户',
    component: 'TreeSelect',

    componentProps: {
      fieldNames: {
        label: 'tenantName',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
    required: true,
  }, */
  {
    field: 'orderNo',
    label: '排序',
    component: 'InputNumber',
    defaultValue: '100',
    required: true,
    colProps: { span: 12 },
  },
  {
    field: 'status',
    label: '状态',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: '启用', value: '0' },
        { label: '停用', value: '1' },
      ],
    },
    required: true,
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
  },
];
