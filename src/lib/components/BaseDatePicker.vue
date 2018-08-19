<template>
  <FormItemLayout
    :class="{
      'sf-item--datepicker': true,
      'ivu-form-item-error': error
      }"
    :layout="layout"
    :cols="cols"
    :label="label"
    :error="error"
    :required="required"
  >
    <DatePicker
      :type="type || 'date'"
      :format="format"
      v-model="inputValue"
      @input="updateValue"
      @on-clear="updateValue"
    >
    </DatePicker>
  </FormItemLayout>
</template>

<script>
import FormItem from './FormItem.js'
export default {
  mixins: [FormItem],
  data() {
    return {
      type: 'date',
      inputValue: undefined,
      outputValue: undefined
    }
  },
  props: ['format', 'valueType'],
  methods: {
    updateInputValue(value) {
      if (value !== this.outputValue){
        this.inputValue = value == null ? null :  new Date(value) 
      }
    },
    updateValue(dateInstance) {
      if (dateInstance === '') {
        // iview bug
      } else if (dateInstance == null) {
        this.outputValue = undefined
        this.$emit('input', undefined)
      } else {
        const valueType = this.valueType
        const outputValue = valueType === 'millisecond'
          ? dateInstance.valueOf() 
          : valueType === 'second' 
            ? Math.floor(dateInstance.valueOf()/1000)
            : dateInstance.toISOString()

        this.outputValue = outputValue
        this.$emit('input', outputValue)
      }
    }
  },
  created() {
    if (this.value) {
      this.updateInputValue(this.value)
    }
    this.$watch('value', this.updateInputValue)
  }
}
</script>
