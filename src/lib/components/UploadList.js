import BaseUpload from './BaseUpload.vue'

export default {
  extends: BaseUpload,
  data() {
    return {
      isMultiple: true
    }
  },
  methods: {
    handleUpload(file) {
      const currentFile = this.createFileItem(file, 'uploading')
      this.fileList.push(currentFile)
      this.onUpload(file, this.$props, this.createUploadCallback(currentFile))
      return false
    }
  }
}
