import * as builtInComponents from './components'
import './stateform.styl'
import BaseStateForm from './StateForm'

export default function createStateForm(options = {}) {
  const {upload = {}, components = {}} = options
  const Upload = {
    extends: builtInComponents.Upload,
    methods: {
      onUpload: upload.handleUpload,
      onRemove: upload.handleRemove
    }
  }

  const UploadMulti = {
    extends: builtInComponents.UploadMulti,
    methods: {
      onUpload: upload.handleUpload,
      onRemove: upload.handleRemove
    }
  }

  const finalComponents = {};
  [builtInComponents, {Upload, UploadMulti}, components].forEach(item => {
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
