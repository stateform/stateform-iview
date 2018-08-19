StateForm implementation of iview@^3.0.0

## Quick Start  
```js  

import 'iview/dist/styles/iview.css'
import createStateForm from '@stateform/iview'
import "@stateform/iview/dist/stateform-iview.css"

const StateForm = createStateForm({
  upload: {
    handleUpload(file, cb) {
      // your upload implementation
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
see [StateForm](https://github.com/stateform/StateForm-Specification)

## TODO  
* test


## Lisense  
MIT
