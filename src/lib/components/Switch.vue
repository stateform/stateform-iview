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
    <ISwitch
      :value="value"
      @input="$emit('input', $event)"
    >
      <span v-if="onText" slot="open">{{ onText }}</span>
      <span v-if="offText"  slot="close"> {{ offText }}</span>
    </ISwitch>
  </FormItemLayout>
</template>

<script>
import FormItem from './FormItem.js'
export default {
  mixins: [FormItem],
  props: ['onText', 'offText'],
}
</script>
