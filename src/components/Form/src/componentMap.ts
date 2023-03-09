import type { Component } from 'vue';
import type { ComponentType } from './types/index';

/**
 * Component list, register here to setting it in the form
 */
import {
  Input,
  Select,
  Radio,
  Checkbox,
  AutoComplete,
  Cascader,
  DatePicker,
  InputNumber,
  Switch,
  TimePicker,
  TreeSelect,
  Slider,
  Rate,
  Divider,
} from 'ant-design-vue';
import ApiRadioGroup from './components/ApiRadioGroup.vue';
import RadioButtonGroup from './components/RadioButtonGroup.vue';
import ApiSelect from './components/ApiSelect.vue';
import ApiTreeSelect from './components/ApiTreeSelect.vue';
import { BasicUpload } from '/@/components/Upload';
import { StrengthMeter } from '/@/components/StrengthMeter';
import { IconPicker } from '/@/components/Icon';
import { CountdownInput } from '/@/components/CountDown';
//自定义组件
import JAreaLinkage from './hexagon/components/JAreaLinkage.vue';
import JSelectUser from './hexagon/components/JSelectUser.vue';
import JSelectPosition from './hexagon/components/JSelectPosition.vue';
import JSelectRole from './hexagon/components/JSelectRole.vue';
import JImageUpload from './hexagon/components/JImageUpload.vue';
import JDictSelectTag from './hexagon/components/JDictSelectTag.vue';
import JSelectDept from './hexagon/components/JSelectDept.vue';
import JAreaSelect from './hexagon/components/JAreaSelect.vue';
import JEditor from './hexagon/components/JEditor.vue';
import JMarkdownEditor from './hexagon/components/JMarkdownEditor.vue';
import JSelectInput from './hexagon/components/JSelectInput.vue';
import JCodeEditor from './hexagon/components/JCodeEditor.vue';
import JCategorySelect from './hexagon/components/JCategorySelect.vue';
import JSelectMultiple from './hexagon/components/JSelectMultiple.vue';
import JPopup from './hexagon/components/JPopup.vue';
import JSwitch from './hexagon/components/JSwitch.vue';
import JTreeDict from './hexagon/components/JTreeDict.vue';
import JInputPop from './hexagon/components/JInputPop.vue';
import { JEasyCron } from './hexagon/components/JEasyCron';
import JCheckbox from './hexagon/components/JCheckbox.vue';
import JInput from './hexagon/components/JInput.vue';
import JTreeSelect from './hexagon/components/JTreeSelect.vue';
import JEllipsis from './hexagon/components/JEllipsis.vue';
import JSelectUserByDept from './hexagon/components/JSelectUserByDept.vue';
import JUpload from './hexagon/components/JUpload/JUpload.vue';
import JSearchSelect from './hexagon/components/JSearchSelect.vue';
import JAddInput from './hexagon/components/JAddInput.vue';
import { Time } from '/@/components/Time';
import JRangeNumber from './hexagon/components/JRangeNumber.vue';
import JRangeDate from './hexagon/components/JRangeDate.vue';

const componentMap = new Map<ComponentType, Component>();

componentMap.set('Time', Time);
componentMap.set('Input', Input);
componentMap.set('InputGroup', Input.Group);
componentMap.set('InputPassword', Input.Password);
componentMap.set('InputSearch', Input.Search);
componentMap.set('InputTextArea', Input.TextArea);
componentMap.set('InputNumber', InputNumber);
componentMap.set('AutoComplete', AutoComplete);

componentMap.set('Select', Select);
componentMap.set('ApiSelect', ApiSelect);
componentMap.set('TreeSelect', TreeSelect);
componentMap.set('ApiTreeSelect', ApiTreeSelect);
componentMap.set('ApiRadioGroup', ApiRadioGroup);
componentMap.set('Switch', Switch);
componentMap.set('RadioButtonGroup', RadioButtonGroup);
componentMap.set('RadioGroup', Radio.Group);
componentMap.set('Checkbox', Checkbox);
componentMap.set('CheckboxGroup', Checkbox.Group);
componentMap.set('Cascader', Cascader);
componentMap.set('Slider', Slider);
componentMap.set('Rate', Rate);

componentMap.set('DatePicker', DatePicker);
componentMap.set('MonthPicker', DatePicker.MonthPicker);
componentMap.set('RangePicker', DatePicker.RangePicker);
componentMap.set('WeekPicker', DatePicker.WeekPicker);
componentMap.set('TimePicker', TimePicker);
componentMap.set('StrengthMeter', StrengthMeter);
componentMap.set('IconPicker', IconPicker);
componentMap.set('InputCountDown', CountdownInput);

componentMap.set('Upload', BasicUpload);
componentMap.set('Divider', Divider);

//注册自定义组件
componentMap.set('JAreaLinkage', JAreaLinkage);
componentMap.set('JSelectPosition', JSelectPosition);
componentMap.set('JSelectUser', JSelectUser);
componentMap.set('JSelectRole', JSelectRole);
componentMap.set('JImageUpload', JImageUpload);
componentMap.set('JDictSelectTag', JDictSelectTag);
componentMap.set('JSelectDept', JSelectDept);
componentMap.set('JAreaSelect', JAreaSelect);
componentMap.set('JEditor', JEditor);
componentMap.set('JMarkdownEditor', JMarkdownEditor);
componentMap.set('JSelectInput', JSelectInput);
componentMap.set('JCodeEditor', JCodeEditor);
componentMap.set('JCategorySelect', JCategorySelect);
componentMap.set('JSelectMultiple', JSelectMultiple);
componentMap.set('JPopup', JPopup);
componentMap.set('JSwitch', JSwitch);
componentMap.set('JTreeDict', JTreeDict);
componentMap.set('JInputPop', JInputPop);
componentMap.set('JEasyCron', JEasyCron);
componentMap.set('JCheckbox', JCheckbox);
componentMap.set('JInput', JInput);
componentMap.set('JTreeSelect', JTreeSelect);
componentMap.set('JEllipsis', JEllipsis);
componentMap.set('JSelectUserByDept', JSelectUserByDept);
componentMap.set('JUpload', JUpload);
componentMap.set('JSearchSelect', JSearchSelect);
componentMap.set('JAddInput', JAddInput);
componentMap.set('JRangeNumber', JRangeNumber);
componentMap.set('RangeDate', JRangeDate);

export function add(compName: ComponentType, component: Component) {
  componentMap.set(compName, component);
}

export function del(compName: ComponentType) {
  componentMap.delete(compName);
}

export { componentMap };
