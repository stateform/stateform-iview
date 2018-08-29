import * as builtInComponents from './components'
import './stateform.styl'
import BaseStateForm from './StateForm'
import FormItemLayout from './components/FormItemLayout'

function noop(){}

function createStateForm(options = {}) {
  const {upload = {}, components = {}} = options
  const {handleUpload = noop, handleRemove = noop} = upload
  const Upload = {
    extends: builtInComponents.Upload,
    methods: {
      onUpload: handleUpload,
      onRemove: handleRemove
    }
  }

  const UploadList = {
    extends: builtInComponents.UploadList,
    methods: {
      onUpload: handleUpload,
      onRemove: handleRemove
    }
  }

  const finalComponents = {};
  [builtInComponents, {Upload, UploadList}, components].forEach(item => {
    Object.keys(item).forEach(key => {
      finalComponents['StateForm' + key] = item[key]
    })
  })
  const StateForm = {
    extends: BaseStateForm,
    components: finalComponents
  }

  return StateForm
}

export default createStateForm
export {createStateForm, FormItemLayout}