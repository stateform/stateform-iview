<template>
  <FormItemLayout
    class="sf-item-map"
    :layout="layout"
    :cols="cols"
    :label="label"
    :help="help"
    :required="required"
    :error="error"
  >
    <slot name="default"></slot>
  </FormItemLayout>
</template>

<script>
import FormItemMixin from './FormItem.js'
export default {
  mixins: [FormItemMixin],
}
</script>
