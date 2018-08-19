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
    :help="help"
    :required="required"
  >
    <Input
      :type="type || 'text'"
      :value="value"
      :disabled="disabled"
      @input="$emit('input', $event)"
      :placeholder="placeholder"
    >
      <span 
        v-if="prepend" 
        slot="prepend"
      >
        {{prepend}}
      </span>
      <span 
        v-if="append" 
        slot="append"
      >
        {{append}}
      </span>
    </Input>
  </FormItemLayout>
</template>

<script>
import FormItem from './FormItem.js'
export default {
  mixins: [FormItem],
  props: ['type','append', 'prepend'] 
}
</script>
