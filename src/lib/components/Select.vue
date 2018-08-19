<template>
  <FormItemLayout
    :class="{
      'sf-item--input': true,
      'ivu-form-item-error': error
      }"
    :layout="layout"
    :cols="cols"
    :help="help"
    :label="label"
    :error="error"
    :required="required"
  >
    <Select
      :value="value"
      :disabled="disabled"
      :multiple="multiple"
      :clearable="true"
      @input="$emit('input', $event)"
    >
      <Option 
        v-for="(val, key) in option" 
        :key="val" 
        :value="val"
        :disabled="disabledItems[key]"
      >
        {{ key }}
      </Option>
    </Select>
  </FormItemLayout>
</template>

<script>
import FormItem from './FormItem.js'
export default {
  mixins: [FormItem],
  props: {
    option: {
      type: Object
    },
    multiple: {
      type: Boolean
    },
    disabledItems: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
