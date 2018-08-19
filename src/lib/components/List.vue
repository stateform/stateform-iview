<script>
import FormItemMixin from './FormItem.js'
import FormItemLayout from './FormItemLayout.vue'
import { Icon, Button } from 'iview'
export default {
  mixins: [FormItemMixin],
  props: ['isAddable', 'addText'],
  methods: {
    removeItem(index) {
      return () => {
        this.$emit('input', this.value.filter((_, idx) => idx !== index ), index)
      }
    },
    addItem() {
      this.$emit('input', (this.value || []).concat(null))
    }
  },
  render() {
    const {layout, cols, label, required, error, help, isAddable, addText} = this
    const slotDefault = this.$slots.default
    const children = slotDefault && slotDefault.map((vnode, index) => {
      return (
        <div
          key={vnode.key}
          class="sf-item-list__item"
        >
          {vnode}
          <a
            class="sf-item-list__remove"
            onClick={this.removeItem(index)}
          >
            <Icon type="ios-remove-circle-outline" />
          </a>
        </div>
      )
    })
    return (
        <FormItemLayout
          class="sf-item--list"
          layout={layout}
          cols={cols}
          help={help}
          label={label}
          required={required}
          error={error}
        >
          { children }
          { isAddable !== false && (
            <Button
              long
              type='dashed'
              icon="md-add"
              onClick={this.addItem}
            >
              { addText || 'Add Item'}
            </Button>
          )}
        </FormItemLayout>
    )
  }
}
</script>
