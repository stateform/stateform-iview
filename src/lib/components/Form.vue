<template>
  <Row class="sf-item--form">
    <Form>
        <slot name="default"></slot>
        <FormItemLayout v-if="showSubmit !== false"
          class="sf--submit"
          :layout='layout'
          :cols='submitCols || cols'
        > 
          <Button @click="$emit('submit')">{{submitText || 'Submit'}}</Button>
        </FormItemLayout>
    </Form>
  </Row>
</template>

<script>
import { Row, Form, Button } from 'iview'
import FormItemLayout from './FormItemLayout.vue'
export default {
  components: {
    Form,
    Row,
    Button,
    FormItemLayout
  },
  props: ['showSubmit','submitCols', 'submitText', 'layout', 'cols']
}
</script>
