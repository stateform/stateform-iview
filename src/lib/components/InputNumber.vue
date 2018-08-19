<template>
  <FormItemLayout
    :class="{
      'sf-item--input-number': true,
      'ivu-form-item-error': error
      }"
    :layout="layout"
    :cols="cols"
    :label="label"
    :error="error"
    :required="required"
  >
    <InputNumber
      :value="value"
      @input="$emit('input', $event)"
      :placeholder="placeholder"
    >
    </InputNumber>
  </FormItemLayout>
</template>

<script>
import FormItem from './FormItem.js'
export default {
  mixins: [FormItem]
}
</script>
