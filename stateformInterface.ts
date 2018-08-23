export type Cols = {
  span: number;
  offset: number;
}

export interface FormItemCols {
  item?: Cols | number; // when layout=inline, `item` cols is needed
  label?: Cols | number;
  wrapper?: Cols | number;

  xsItem?: Cols;
  xsLabel?: Cols;
  xsWrapper?: Cols;

  smItem?: Cols;
  smLabel?: Cols;
  smWrapper?: Cols;

  mdItem?: Cols;
  mdLabel?: Cols;
  mdWrapper?: Cols;

  lgItem?: Cols;
  lgLabel?: Cols;
  lgWrapper?: Cols;

}


export interface FormItem {
  component: string;
  path: string;
  hidden?: boolean;
  class?: string | {
    [key: string]: boolean
  }

  layout: "vertical" | "horizontal" | "inline";
  cols: FormItemCols;

  label?: string;
  required?: boolean;
  placeholder?: string;
  help?: string;
  disabled?: boolean;


  value?: any;
  error?: any;

  children?: FormItem[]

}

export interface Form {
  component: "Form";
  path: '/';
  children: FormItem[];
  cols: FormItemCols;
  submitCols?: FormItemCols;
  submitText?: string;
  showSubmit?: boolean;
}

export interface Input extends FormItem {
  type?: 'text' | 'password';
  prepend?: string;
  append?: string;
}

export interface Textarea extends FormItem{

}

export interface DatePicker extends FormItem {
  valueType?: "iso" | "second" | "millsecond";
  format?: string; // displaying format
}

export interface DateTimePicker extends FormItem {
  valueType?: "iso" | "second" | "millsecond";
  format?: string; // displaying format
}

export interface Upload extends FormItem {
  listType?: "text" | "picture";
  uploadText: string;
}
export interface UploadList extends FormItem {
  listType?: "text" | "picture";
  uploadText: string;
}

export interface InputNumber extends FormItem {
}

export interface Switch extends FormItem {
}

export interface BoolCheck extends FormItem {
  content: string
}


export interface Map extends FormItem {
}

export interface List extends FormItem {
  showAddButton?: boolean;
  AddText?: string;
}

type Option =
  | string
  | {
    [key: string]: any;
  };

export interface Radio extends FormItem {
  option: Option;
  disabledItems: {
    [key: string]: boolean
  };
}

export interface Checkbox extends FormItem {
  option: Option;
  disabledItems: {
    [key: string]: boolean
  };
}

export interface Select extends FormItem {
  multiple?: boolean;
  option: Option;
  disabledItems: {
    [key: string]: boolean
  };
}
