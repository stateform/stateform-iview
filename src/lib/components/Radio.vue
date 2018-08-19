<template>
  <FormItemLayout
    :class="{
      'sf-item--input': true,
      'ivu-form-item-error': error
      }"
    :layout="layout"
    :cols="cols"
    :label="label"
    :help="help"
    :error="error"
    :required="required"
  >
    <RadioGroup
      :value="value"
      disabled="disabled"
      @input="$emit('input', $event)"
    >
      <Radio 
        v-for="(val, key) in option" 
        :key="val" 
        :label="val"
        :disabled="disabledItems[key]"
      >
        {{ key }}
      </Radio>
    </RadioGroup>
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
