import BaseUpload from './BaseUpload.vue'
export default {
  extends: BaseUpload,
  methods: {
    handleUpload(file) {
      const currentFile = this.createFileItem(file, 'uploading')
      this.fileList = [currentFile]
      this.onUpload(file, this.createUploadCallback(currentFile))
      return false
    }
  }
}
