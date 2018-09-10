<template>
  <ISwitch
    :value="value"
    @input="$emit('input', $event)"
  >
    <span v-if="onText" slot="open">{{ onText }}</span>
    <span v-if="offText"  slot="close"> {{ offText }}</span>
  </ISwitch>
</template>

<script>
import FormItem from './FormItem.js'
export default {
  mixins: [FormItem],
  props: ['onText', 'offText'],
}
</script>
