import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/ssa-user/Desktop/study/nuxt-example/node_modules/.pnpm/nuxt@3.6.3_@types+node@18.16.19/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}