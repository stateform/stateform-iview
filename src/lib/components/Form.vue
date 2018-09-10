<template>
  <Row class="sf-item--form">
    <Form>
        <slot name="default"></slot>
        <FormItemLayout 
          v-if="submit && submit.showSubmit !== false"
          :layout="layout"
          :cols="submit.cols || cols"
        >
          <Button 
            class="sf-submit"
            @click="$emit('submit')" 
            type="primary"
            :disabled="submit.disabled">
              {{submit.submitText || 'Submit'}}
          </Button>
          <Button 
            class="sf-reset"
            v-if="submit.showReset === true"
            @click="$emit('reset')" 
          >
            {{submit.resetText || 'Reset'}}
          </Button>
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
  props: ['layout', 'cols', 'submit'],
}
</script>
