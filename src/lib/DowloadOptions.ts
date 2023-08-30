import type { JSONSchema7 } from "json-schema";

export type DataTransform = (data: { [prop: string]: any }, schema: JSONSchema7) => any;
type DownloadOptions = {
  validate?: boolean,
  transform?: DataTransform
};

namespace DownloadOptions {
  export const Default = {
    validate: true
  };

  export function withDefaults(options: DownloadOptions | undefined) {
    return Object.assign(Default, options);
  }
}

export default DownloadOptions
