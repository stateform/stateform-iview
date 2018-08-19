<template>
  <div class="main-form">
    <h1 class="main-form__title"> Test Form</h1>
    <StateForm 
      :state="formState"
      @input="handleInput"
      @submit="handleSubmit"
    >
      <button>Custom Submit</button>
    </StateForm>
  </div>

</template>

<script>
import 'iview/dist/styles/iview.css'
import createStateForm from './lib'
import formState from './formState'
const StateForm = createStateForm({
  upload: {
    handleUpload: (file, cb) => {
      setTimeout(() => {
        const result = {}
        if (Math.random() > 0.5) {
          const reader = new FileReader();
          reader.onload = function(e) {
              result.status = 'done'
              result.url = e.target.result
              result.value = {
                name: file.name,
                url: result.url
              }
              cb(result)
          }
          reader.readAsDataURL(file);
        } else {
          result.status = 'error'
          result.error = 'Here is the error message'
          cb(result)
        }
      }, 2000)
    },
    handleRemove: (file) => {
      // eslint-disable-next-line
      console.log(file)
    }
  }
})
export default {
  components: {
    StateForm
  },
  data() {
    return {
      formState
    }
  },
  methods: {
    handleInput(path, value, index) { 
      // eslint-disable-next-line
      console.log(path, value, index) 
    },
    handleSubmit() {
      // eslint-disable-next-line
      console.log('submit')
    }
  }
}
</script>
<style lang="stylus" scoped>
.main-form
  width 800px
  margin 30px auto
  padding 20px 40px
  border 1px solid #eee
  >>> .user-name
    margin-bottom 0
  >>> .user-name.sf-item--error
    margin-bottom 24px
.main-form__title
  padding 10px 0
  margin-bottom 20px
  border-bottom 1px solid #ccc
</style>
