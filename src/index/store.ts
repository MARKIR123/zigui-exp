import { defineStore } from 'pinia'
import "@amap/amap-jsapi-types";
import { extData } from '../utils/type';

export const useStore = defineStore('mapstore', {
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      Map: {} as AMap.Map,
    }
  },
})