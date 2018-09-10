<template>
  <Input
    type="textarea"
    :value="value"
    @input="$emit('input', $event)"
    :placeholder="placeholder"
  >
  </Input>
</template>

<script>
import FormItem from './FormItem.js'
export default {
  mixins: [FormItem],
}
</script>
