export default {
  path: '/',
  component: 'Form',
  layout: 'horizontal',
  cols: {
    label: 5,
    wrapper: 18
  },
  submit: {
    cols: {
      label: {
        span: 3,
        offset: 2
      },
      wrapper: 19
    },
    submitText: 'Submit Text',
  },
  children: [
    {
      path: '/boolcheck',
      component: 'BoolCheck',
      label: 'BoolCheck',
      content: 'Agree to <a href="#">link</a>'
    },
    {
      path: '/custom',
      component: 'Custom',
      label: 'Custom',
      value: 5,
      step: 10
    },
    {
      path: '/checkbox',
      component: 'Checkbox',
      label: 'Checkbox',
      option: {
        Apple: 1,
        Orange: 2,
        Banana: 3
      },
      disabledItems: {
        Banana: true
      }
    },
    {
      path: '/datepicker',
      component: 'DatePicker',
      label: 'DatePicker',
    },
    {
      path: '/DateTimePicker',
      component: 'DateTimePicker',
      label: 'DateTimePicker',
    },
    {
      path: '/Timestamp',
      component: 'DateTimePicker',
      valueType: 'millisecond',
      label: 'Timestamp',
    },
    {
      path: '/TimestampSeconds',
      component: 'DateTimePicker',
      valueType: 'second',
      label: 'TimestampSeconds',
    },
    {
      path: '/input',
      component: 'Input',
      label: 'Input',
      value: 'input value',
      placeholder: 'input placeholder'
    },
    {
      path: '/inputWithPend',
      component: 'Input',
      label: 'InputWithPend',
      prepend: 'prepend',
      append: 'append',
      value: 'input value',
      placeholder: 'input placeholder'
    },
    {
      path: '/inputNumber',
      component: 'InputNumber',
      label: 'InputNumber',
      value: 2,
      placeholder: 'inputNumber placeholder'
    },
    {
      path: '/radio',
      component: 'Radio',
      label: 'Radio',
      option: {
        Apple: 1,
        Orange: 2,
        Banana: 3,
      },
      disabledItems: {
        Banana: true
      }
    },
    {
      path: '/select',
      component: 'Select',
      label: 'Select',
      value: [1],
      placeholder: 'select placeholder',
      option: {
        Apple: 1,
        Orange: 2,
        Banana: 3
      },
      disabledItems: {
        Banana: true
      }
    },
    {
      path: '/selectMulti',
      component: 'Select',
      label: 'SelectMulti',
      placeholder: 'select placeholder',
      value: [1],
      multiple: true,
      option: {
        Apple: 1,
        Orange: 2,
        Banana: 3
      },
      disabledItems: {
        Banana: true
      }
    },
    {
      path: '/switch',
      component: 'Switch',
      label: 'Switch',
      onText: 'onText',
      offText: 'offText',
      value: false,
    },
    {
      path: '/name',
      component: 'Map',
      label: 'name(Map)',
      class: 'user-name',
      // error: 'one is required',
      children: [
        {
          path: '/name/first',
          component: 'Input',
          layout: 'inline',
          cols: {
            item: 5,
            label: 0,
            wrapper: 20
          },
          label: '',
          required: true,
          error: 'required',
          placeholder: 'first name'
        },
        {
          path: '/name/last',
          component: 'Input',
          layout: 'inline',
          cols: {
            item: 5,
            label: 0,
            wrapper: 24
          },
          label: '',
          required: true,
          //                error: 'This field is required',
          placeholder: 'last name'
        }
      ]
    },
    {
      path: '/password',
      component: 'Input',
      type: 'password',
      label: 'password',
      required: true,
      error: 'can not be blank',
      help: 'this is password',
      //   cols: {
      //     label: 6,
      //     wrapper: 6
      //   },
    },
    {
      path: '/address',
      component: 'List',
      label: 'address(List)',
      value: ['address'],
      addText: 'Custom Add Text',
      error: 'Address at least have 3 item',
      children: [
        {
          path: '/address/0',
          component: 'Input',
          cols: {
            label: 0,
            wrapper: 24
          },
          value: 'address'
        },
        {
          path: '/address/1',
          component: 'Input',
          error: 'invalid format',
          cols: {
            label: 0,
            wrapper: 24
          },
          value: ''
        }
      ]
    },
    {
      path: '/nested',
      component: 'List',
      label: 'Nested',
      value: [
        {
          Input: '',
          InputNumber: 2
        }
      ],
      children: [
        {
          path: '/nested/0',
          component: 'Map',
          cols: {
            label: 0,
            wrapper: 24
          },
          children: [
            {
              path: '/nested/0/Input',
              component: 'Input',
              label: 'Input',
              value: '',
              placeholder: 'input placeholder'
            },
            {
              path: '/nested/0/InputNumber',
              component: 'InputNumber',
              label: 'InputNumber',
              value: 2,
              placeholder: 'inputNumber placeholder'
            }
          ]
        }
      ]
    },
    {
      path: '/textarea',
      component: 'Textarea',
      label: 'Textarea',
      required: true,
      error: 'can not be blank',
      placeholder: 'your story...'
    },
    {
      path: '/upload',
      component: 'Upload',
      listType: 'picture',
      label: 'Upload',
      required: true,
    },
    {
      path: '/uploadList',
      component: 'UploadList',
      listType: 'text',
      uploadText: 'Upload',
      label: 'UploadList',
      required: true,
    },
  ]
}
