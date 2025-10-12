/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
// Extend Vue component props to accept all HTML attributes
// declare module "@vue/runtime-dom" {
//   interface ComponentCustomProps {
//     [key: string]: any;
//   }
// }
