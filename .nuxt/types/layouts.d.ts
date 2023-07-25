import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/Users/longqiang.chen.CSCAD/Desktop/demo/nuxt-example/node_modules/.pnpm/nuxt@3.6.3_@types+node@18.16.19/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}