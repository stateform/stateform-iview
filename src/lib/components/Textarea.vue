<template>
  <FormItemLayout
    :class="{
      'sf-item--input': true,
      'ivu-form-item-error': error
      }"
    :layout="layout"
    :cols="cols"
    :label="label"
    :error="error"
    :required="required"
  >
    <Input
      type="textarea"
      :value="value"
      @input="$emit('input', $event)"
      :placeholder="placeholder"
    >
    </Input>
  </FormItemLayout>
</template>

<script>
import FormItem from './FormItem.js'
export default {
  mixins: [FormItem],
}
</script>
