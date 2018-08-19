<script>
export default {
  components: {},
  props: ['state', 'showSubmit', 'submitText'],
  methods: {
    handleSubmit() {
      this.$emit('submit')
    },
    handleInput(path) {
      return (value, index) => {
        this.$emit('input', path, value, index)
      }
    },
    renderFormItem(state) {
      let children = state.children
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
      const itemClass = state.class
      const path = state.path
      const props = Object.assign({}, state)
      const on = {
        input: this.handleInput(path)
      }
      if (path === '/') {
        children = children.concat(this.$slots.default)
        on.submit = this.handleSubmit
      }
      return this.$createElement('StateForm' + state.component, {
        key: path,
        class: itemClass,
        props,
        on
      }, children)
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
    return this.renderFormItem(state)
  }
}
</script>
