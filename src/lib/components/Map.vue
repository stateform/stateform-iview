<template>
  <div>
    <slot name="default"></slot>
  </div>
</template>

<script>
import FormItemMixin from './FormItem.js'
export default {
  mixins: [FormItemMixin],
}
</script>
