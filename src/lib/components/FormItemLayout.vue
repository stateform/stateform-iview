<script>
import {Row, Col, Icon} from 'iview'
export default {
  props: ['layout', 'cols', 'label', 'help', 'error', 'required'],
  render() {
    const {$props: props, layout, cols, label, error, required, help} = this
    const children = this.$slots.default
    const {item: itemCols, label: labelCols, wrapper: wrapperCols} = cols
    if (typeof labelCols !== 'object') {
      cols.label = {
        span: labelCols
      }
    }
    if (typeof wrapperCols !== 'object') {
      cols.wrapper = {
        span: wrapperCols
      }
    }
    if (typeof itemCols !== 'object') {
      cols.item = {
        span: itemCols
      }
    }
    // iview span 0 bug
    if (cols.label.span === 0) {
      cols.label.span = '0'
    }
    if (cols.wrapper.span === 0) {
      cols.wrapper.span = '0'
    }
    if (cols.item.span === 0) {
      cols.item.span = '0'
    }
    const Label = (
      <Col
        class="sf-item__label"
        span={cols.label.span}
        offset={cols.label.offset}
        xs={cols.xsLabel}
        sm={cols.smLabel}
        md={cols.mdLabel}
        lg={cols.lgLabel}
      >
        { label && (
          <span
            class={"sf-item__label-text" + (required ? " sf-item__label-text--required": "")}
          >
              { label }
          </span>
        )}
        {help && (
          <Icon
            class="sf-item__help-icon"
            type="question-circle-o"
            title={help}
          />
        )}
      </Col>
    )
    const Wrapper = (
      <Col
        class="sf-item__wrapper"
        span={cols.wrapper.span}
        offset={cols.wrapper.offset}
        xs={cols.xsWrapper}
        sm={cols.smWrapper}
        md={cols.mdWrapper}
        lg={cols.lgWrapper}
      >
        {children}
        <div class="sf-item__error">
          { error }
        </div>
      </Col>
    )
    if (layout === 'vertical') {
      return (
        <div class={Object.assign({
          'sf-item': true,
          'sf-item--vertical': true,
          'sf-item--error': error
        }, props.class)}>
          <Row>
            {Label}
          </Row>
          <Row>
            {Wrapper}
          </Row>
        </div>
      )
    } else if (layout === 'inline') {
      return (
        <Col
          span={cols.item.span}
          offset={cols.item.offset}
          xs={cols.xsItem}
          sm={cols.smItem}
          md={cols.mdItem}
          lg={cols.lgItem}
          class={Object.assign({
            'sf-item': true,
            'sf-item--inline': true,
            'sf-item--error': error
          }, props.class)}
        >
          {Label}
          {Wrapper}
        </Col>
      )
    } else {
      return (
        <Row
          class={Object.assign({
            'sf-item': true,
            'sf-item--horizontal': true,
            'sf-item--error': error
          }, props.class)}
        >
          {Label}
          {Wrapper}
        </Row>
      )
    }
 


  }
}
</script>
