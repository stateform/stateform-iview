<template>
  <Checkbox 
    :value="value"
    @input="$emit('input', $event)"
  >
    <span v-html="content"></span>
  </Checkbox>
</template>

<script>
import FormItem from './FormItem.js'
export default {
  mixins: [FormItem],
  props: ['option', 'content'],
}
</script>
