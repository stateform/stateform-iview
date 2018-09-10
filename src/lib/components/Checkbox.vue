<template>
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
