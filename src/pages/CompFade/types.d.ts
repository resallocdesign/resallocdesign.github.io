 import { ReactComponentElement } from "react";

declare module '*.png' {
  export default '' as string;
}
declare module "*.svg" {
  const content: any;
  export default content;
}