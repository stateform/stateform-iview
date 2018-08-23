StateForm implementation of iview@^3.0.0

## Quick Start  
```js  
import {createStateForm} from '@stateform/iview'
import "@stateform/iview/dist/stateform-iview.css"

const StateForm = createStateForm({
  upload: {
    handleUpload(file, cb) {
      // You should upload the file by yourself,
      // and call `cb` when the upload is completed
      cb({

        // "uploading" | "done" | "error"
        status: "done", 

        // By default, we will use the value of the `url` as the input value of this upload,
        // thus the outside world will only receive the url string.
        // If you want to input more infomation, you can set a `value` property, see below
        url: "http://xxxxx",

        // when error happened
        // error: "error message",
        
        // if there is an `value` property, we will use its value as the input value
        // value: {
        //  name: 'custom file name',
        //  url: 'http://xxxx'
        // }
      })
    },
    handleRemove(file) {
      // on file remove
    }
  },
  // components: customComponents
})

// now you can use StateForm as a component in vue 
// e.g., <StateForm :state="yourFormState" @input="inputHandler" @submit="submitHandler" />
```

## Playground  
[![Edit Vue Template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/n1ky641y70?module=%2Fsrc%2FformState.js)

## Install   
```sh  
npm install @stateform/iview  --save
```
`vue` and `iview` are peerDependencies

## API  
### `createStateForm`  
```ts  
type createStateForm = (options?: StateFormOptions) => StateForm

interface StateFormOptions {
  // if you use Upload component, you should implement handleUpload and handleRemove 
  upload?: {
    handleUpload: (file: File, cb: UploadCallback) => void;
    handleRemove: (file: FileItem) => void;
  },
  // you are able to use custom components in StateForm
  components?: {
    [key: string]: React.Component;
  }
}

type UploadCallback = (FileItem) => void;

interface FileItem {
  url: string;
  status: "uploading" | "done" | "error";
  thumbUrl?: undefined
  name?: string;
  error?: string;
  value?: any;
  uid?: string;
}
```
Example  
see [QuickStart](#quick-start)

### `FormItemLayout`  
You can use this component in your custom component   
```ts  
interface FormItemLayoutProps {
  layout?: string;
  label?: string;
  cols?: StateForm.Cols;
  required?: boolean;
  className?: string;
  help?: string;
  error?: string;
  [key: string]: any;
}
interface FormItemLayout extends React.Component<FormItemLayoutProps> {
}
```
Here is an example to define a custom component 
```html   
<template>
  <FormItemLayout
    :layout="layout"
    :cols="cols"
    :label="label"
    :error="error"
    :required="required"
  >
    <Input
      :value="value"
      @input="$emit('input', $event)"
      :placeholder="placeholder"
    >
    </Input>
    <Button @click="sendCaptcha">Send</Button>
  </FormItemLayout>
</template>

<script>
import { Button , Input } from 'iview'
import { FormItemLayout } from '@stateform/iview'  
export default {
  components: {
    Button,
    Input,
    FormItemLayout
  },
  // Component will receive all props from the state node.
  // For example, below is the state object of the StateForm, 
  // then Captcha component will receive p1, p2 .... pn.
  // {
  //   // ....
  //   children: [
  //     // ....
  //     {
  //       component: 'Captcha',
  //       p1: '1',
  //       p2: '2',
  //       // ...
  //       pn: 'n'
  //     }
  //   ]
  // }
  methods: {
    sendCaptcha() {
      // ....
    }
  }
}
</script>

```

## TODO  
* test


## License  
MIT
