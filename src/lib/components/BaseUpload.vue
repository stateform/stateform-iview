<template>
  <FormItemLayout
    :class="{
      'sf-item--upload': true,
      'ivu-form-item-error': error
      }"
    :layout="layout"
    :cols="cols"
    :label="label"
    :error="error"
    :required="required"
  >
    <Upload 
      action="#"
      :accept="accept"
      :before-upload="handleUpload"
      :multiple="isMultiple"
    >
      <Button icon="ios-cloud-upload-outline">
       {{ uploadText || 'Select File' }}
      </Button>
    </Upload>
    <UploadFileList :listType="listType"  :fileList="fileList" @on-remove="handleRemove" />
  </FormItemLayout>
</template>

<script>
import FormItem from './FormItem.js'
import UploadFileList from './UploadFileList.vue'
export default {
  mixins: [FormItem],
  components: {
    UploadFileList,
  },
  data() {
    return {
      isMultiple: false,
      fileList: [],
      inputValue: undefined
    }
  },
  props: ['accept', 'listType', 'uploadText'],
  watch: {
    'value': 'handleReceiveValue'
  },
  methods: {
    handleUpload() {
      throw new Error('Not Implemented')
    },
    handleRemove(file){
      const fileList = this.fileList.filter(item => item !== file)
      this.fileList = fileList
      this.handleInput(fileList)
      this.onRemove(file)
    },
    createFileItem(info, status = 'done') {
      info = typeof info === 'string' ? {url: info} : info
      let {uid, name, url, thumbUrl} =  info
      uid = uid || ('file' + this.fileId++)
      name = name || url
      return {uid, name, url, thumbUrl, status}
    },
    createUploadCallback(fileItem) {
      return (result) => {
        Object.assign(fileItem, {
          status: result.status,
          value: result.value,
          url: result.url,
          thumbUrl: result.thumbUrl,
          error: result.error,
        })
        if (fileItem.status === 'done') {
          this.handleInput(this.fileList)
        }
      }
    },
    transformValueToFileList(value) {
      if(value) {
        if (this.isMultiple) {
          return value.map(this.createFileItem)
        } else {
          return [this.createFileItem(value)]
        }
      }
      return []
    },
    transformFileListToValue(fileList) {
      const value = []
      fileList.forEach(item => {
        if (item.status === 'done') {
          value.push(item.value || item.url)
        }
      })
      return this.isMultiple ? value : value[0]
    },
    handleInput(fileList) {
      const inputValue = this.transformFileListToValue(fileList)
      this.inputValue = inputValue
      this.$emit('input', inputValue)
    },
    handleReceiveValue(value) {
      if (value !== this.inputValue) {
        this.inputValue = value
        this.fileList = this.transformValueToFileList(value)
      }
    }
  }
}
</script>
