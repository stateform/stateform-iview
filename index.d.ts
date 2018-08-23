import * as StateForm from './stateformInterface'

declare module "StateFormAntd" {

  type VueComponent = any

  export interface StateFormComponent extends VueComponent {

  }

  export interface StateFormOptions {
    upload?: {
      handleUpload: (file: File, cb: UploadCallback) => void;
      handleRemove: (file: FileItem) => void;
    },
    components?: {
      [key: string]: VueComponent;
    }
  }

  export type UploadCallback = (FileItem) => void;

  export interface FileItem {
    url: string;
    status: "uploading" | "done" | "error";
    thumbUrl?: undefined
    name?: string;
    error?: string;
    value?: any;
    uid?: string;
  }

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

  export interface FormItemLayout extends VueComponent {

  }

  export type createStateForm = (options?: StateFormOptions) => StateFormComponent
  export = createStateForm
}