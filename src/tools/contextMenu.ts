import { useContextMenu } from '/@/hooks/web/useContextMenu';
import type { ContextMenuItem } from '/@/components/ContextMenu';
import { message } from 'ant-design-vue';
const [createContextMenu] = useContextMenu();
function handleContext(e: MouseEvent, items: Array<ContextMenuItem>) {
  createContextMenu({
    event: e,
    items: items,
  });
}
export const contextmenu = (record, index,tableContext) => ({
  onContextmenu: (event) => {
    console.log(record,index,'console.log(record,index)')
    return handleContext(event, [
      {
        label: '撤销',
        icon: 'ant-design:undo-outlined',
        handler: () => {
          console.log(event);
        },
      },
      {
        label: '复制',
        icon: 'ant-design:copy-outlined',
        handler: () => {
          // console.log(event.innerHTML);
          navigator.clipboard.writeText(event.target.innerHTML);
          message.success('复制成功:'+event.target.innerHTML);
        },
      },
      {
        label: '粘贴',
        icon: 'ant-design:snippets-outlined',
        handler: () => {
          console.log(record);
        },
      },
      {
        label: '添加行',
        icon: 'ant-design:file-add-outlined',
        handler: () => {
          console.log(record);
        },
      },
      {
        label: '复制行',
        icon: 'ant-design:snippets-outlined',
        handler: () => {
          console.log(record);
          navigator.clipboard.writeText(record);
          message.success('复制成功:'+JSON.stringify(record) );
        },
      },
      {
        label: '删除',
        icon: 'ant-design:delete-outlined',
        handler: () => {
          tableContext[1].deleteTableDataRecord(record.id)
          message.success('删除成功,rowKey:'+record.id);
        },
      },
    ]);
  },
});
