import { defineStore } from 'pinia'
import AMapLoader from "@amap/amap-jsapi-loader";
import "@amap/amap-jsapi-types";
import { getAssetsImages } from "../utils/getImage"

export const useStore = defineStore('olstore', {
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      Map: {} as AMap.Map,
      Overlays: {} as AMap.OverlayGroup,
      Icon: {} as AMap.Icon,
      IconSelect: {} as AMap.Icon
    }
  },
})