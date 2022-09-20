import { defineStore } from 'pinia'
import "@amap/amap-jsapi-types";

export const useStore = defineStore('olstore', {
    state: () => {
        return {
          // 所有这些属性都将自动推断其类型
            Map: {} as AMap.Map,
            Overlays: 
        }
      },
})