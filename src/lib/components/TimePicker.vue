<template>
  <FormItemLayout
    :class="{
      'sf-item--input': true,
      'ivu-form-item-error': error
      }"
    :layout="layout"
    :cols="cols"
    :xs="xs"
    :sm="sm"
    :md="md"
    :lg="lg"
    :label="label"
    :error="error"
    :required="required"
  >
    <TimePicker
      :value="value"
      @on-change="$emit('input', $event)"
    >
    </TimePicker>
  </FormItemLayout>
</template>

<script>
import FormItem from './FormItem.js'
import FormItemLayout from './FormItemLayout.vue'
import {TimePicker} from 'iview'
export default {
  mixins: [FormItem],
  components: {
    FormItemLayout,
    TimePicker
  }
}
</script>
