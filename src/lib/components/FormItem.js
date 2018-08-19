import {
  Col,
  Row,
  Form,
  FormItem, Button, Icon, Input, InputNumber, DatePicker, Upload, Checkbox, CheckboxGroup,
  Radio,
  RadioGroup,
  Select,
  Option,
  Switch,
} from 'iview'
import FormItemLayout from './FormItemLayout.vue'
export default {
  props: ['layout', 'cols','required', 'label', 'placeholder', 'value', 'help', 'error', 'help', 'disabled'],
  components: {
    FormItemLayout,
    Col,
    Row,
    Form,
    FormItem,
    Button,
    Icon,
    Input,
    InputNumber,
    DatePicker,
    Upload,
    Checkbox,
    CheckboxGroup,
    Radio,
    RadioGroup,
    Select,
    Option,
    ISwitch: Switch,
  }
}
