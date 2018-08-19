<template>
  <FormItemLayout
    :class="{
      'sf-item--checkbox': true,
      'ivu-form-item-error': error
      }"
    :layout="layout"
    :cols="cols"
    :label="label"
    :help="help"
    :error="error"
    :required="required"
  >
    <CheckboxGroup
      :value="value"
      @input="$emit('input', $event)"
    >
      <Checkbox 
        v-for="(val, key) in option" 
        :key="val" 
        :label="val"
        :disabled="disabledItems[key]"
      >
        {{ key }}
      </Checkbox>
    </CheckboxGroup>
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
    disabledItems: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
