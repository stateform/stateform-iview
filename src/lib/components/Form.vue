<template>
  <Row class="sf-item--Form">
    <Form>
        <slot name="default"></slot>
        <FormItemLayout 
          class="sf-footer"
          v-if="footer"
          :layout="layout"
          :cols="footer.cols || cols"
        >
          <Button 
            class="sf-footer__submit"
            v-if="footer.showSubmit === true"
            @click="$emit('submit')" 
            type="primary"
            :disabled="submit.disableSubmit"
          >
            {{submit.submitText || 'Submit'}}
          </Button>
          <Button 
            class="sf-footer__reset"
            v-if="submit.showReset === true"
            @click="$emit('reset')" 
            :disabled="submit.disableReset"
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
  props: ['layout', 'cols', 'footer'],
}
</script>
