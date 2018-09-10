<script>
import FormItemLayout from './components/FormItemLayout.vue'
export default {
  components: {},
  props: ['state'],
  methods: {
    handleSubmit() {
      this.$emit('submit')
    },
    handleReset() {
      this.$emit('reset')
    },
    handleInput(path) {
      return (value, index) => {
        this.$emit('input', path, value, index)
      }
    },
    renderFormItem(state) {
      const path = state.path
      const customElement = this.customElements[path]
      let finalComponent 
      let component
      let children
      if (customElement) {
        finalComponent = customElement
        component = 'Custom'
      } else {
        component = state.component
        finalComponent = 'StateForm' + component
        children = state.children
        if(children) {
          children = children.map((item) => {
            if (item == null) {
              return 
            }
            if (!item.cols) {
              item.cols = this.cols
            }
            if (!item.layout) {
              item.layout = this.layout
            }
            return this.renderFormItem(item)
          })
        }
      }
      const h = this.$createElement
      const itemClass = Object.assign({
        ['sf-item--' + component]: true,
        'ivu-form-item-error': state.error
      }, state.class)
      const props = Object.assign({}, state)
      const on = {
        input: this.handleInput(path)
      }

      if (path === '/') {
        on.submit = this.handleSubmit
        on.reset = this.handleReset
        return h(finalComponent, {
          key: path,
          class: itemClass,
          props,
          on,
        }, children)
      } else {
        return h(FormItemLayout, {
            key: path,
            class: itemClass,
            props,
            on,
          }, [
            component === 'Custom'
              ? finalComponent
              : h(finalComponent, {
                  props,
                  on
                }, children)
          ]
        )
      }
    }
  },
  render() {
    const state = this.state
    if (!state) {
      return
    }
    const {layout = 'horizontal', cols = {label: 4, wrapper: 18}} = state
    this.layout = state.layout = layout
    this.cols = state.cols = cols
    if (state.component) {
      state.component = 'Form'
    }
    const customElements = {}
    const defaultSlots = this.$slots.default || []
    defaultSlots.forEach((item) => {
      customElements[item.key] = item
    })
    this.customElements = customElements
    return this.renderFormItem(state)
  }
}
</script>
