<template>
  <FormItemLayout
    :class="{
      'sf-item--boolcheck': true,
      'ivu-form-item-error': error
      }"
    :layout="layout"
    :cols="cols"
    :label="label"
    :help="help"
    :error="error"
    :required="required"
  >
    <Checkbox 
      :value="value"
      @input="$emit('input', $event)"
    >
      <span v-html="content"></span>
    </Checkbox>
  </FormItemLayout>
</template>

<script>
import FormItem from './FormItem.js'
export default {
  mixins: [FormItem],
  props: ['option', 'content'],
}
</script>
