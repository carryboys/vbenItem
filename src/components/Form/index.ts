import BasicForm from './src/BasicForm.vue';

export * from './src/types/form';
export * from './src/types/formItem';

export { useComponentRegister } from './src/hooks/useComponentRegister';
export { useForm } from './src/hooks/useForm';

export { default as ApiSelect } from './src/components/ApiSelect.vue';
export { default as RadioButtonGroup } from './src/components/RadioButtonGroup.vue';
export { default as ApiTreeSelect } from './src/components/ApiTreeSelect.vue';
export { default as ApiRadioGroup } from './src/components/ApiRadioGroup.vue';
//hexagon自定义组件
export { default as JAreaLinkage } from './src/hexagon/components/JAreaLinkage.vue';
export { default as JSelectUser } from './src/hexagon/components/JSelectUser.vue';
export { default as JSelectDept } from './src/hexagon/components/JSelectDept.vue';
export { default as JCodeEditor } from './src/hexagon/components/JCodeEditor.vue';
export { default as JCategorySelect } from './src/hexagon/components/JCategorySelect.vue';
export { default as JSelectMultiple } from './src/hexagon/components/JSelectMultiple.vue';
export { default as JPopup } from './src/hexagon/components/JPopup.vue';
export { default as JAreaSelect } from './src/hexagon/components/JAreaSelect.vue';
export {
  JEasyCron,
  JEasyCronInner,
  JEasyCronModal,
} from '/@/components/Form/src/hexagon/components/JEasyCron';
export { default as JCheckbox } from './src/hexagon/components/JCheckbox.vue';
export { default as JInput } from './src/hexagon/components/JInput.vue';
export { default as JEllipsis } from './src/hexagon/components/JEllipsis.vue';
export { default as JDictSelectTag } from './src/hexagon/components/JDictSelectTag.vue';
export { default as JTreeSelect } from './src/hexagon/components/JTreeSelect.vue';
export { default as JSearchSelect } from './src/hexagon/components/JSearchSelect.vue';
export { default as JSelectUserByDept } from './src/hexagon/components/JSelectUserByDept.vue';
export { default as JEditor } from './src/hexagon/components/JEditor.vue';
export { default as JImageUpload } from './src/hexagon/components/JImageUpload.vue';
// hexagon自定义校验
export { JCronValidator } from '/@/components/Form/src/hexagon/components/JEasyCron';

export { BasicForm };
