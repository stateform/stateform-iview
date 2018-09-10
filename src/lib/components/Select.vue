<template>
  <Select
    :value="value"
    :disabled="disabled"
    :multiple="multiple"
    :placeholder="placeholder"
    :clearable="true"
    @input="$emit('input', $event)"
  >
    <Option 
      v-for="(val, key) in option" 
      :key="val" 
      :value="val"
      :disabled="disabledItems[key]"
    >
      {{ key }}
    </Option>
  </Select>
</template>

<script>
import FormItem from './FormItem.js'
export default {
  mixins: [FormItem],
  props: {
    option: {
      type: Object
    },
    multiple: {
      type: Boolean
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
