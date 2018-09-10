<template>
  <InputNumber
    :value="value"
    @input="$emit('input', $event)"
    :placeholder="placeholder"
  >
  </InputNumber>
</template>

<script>
import FormItem from './FormItem.js'
export default {
  mixins: [FormItem]
}
</script>
