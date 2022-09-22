import { defineStore } from 'pinia'
import "@amap/amap-jsapi-types";
import { extData } from '../utils/type';

export const useOlStore = defineStore('olstore', {
    state: () => {
      return {
        // 所有这些属性都将自动推断其类型
        Overlays: {} as AMap.OverlayGroup,
        Icon: {} as AMap.Icon,
        IconSelect: {} as AMap.Icon,
        CurrentPos: [0, 0]
      }
    },
    getters: {
      Overlayslist(): extData[] {
        if (this.Overlays.CLASS_NAME == undefined) {
          return []
        }
        else {
          var exlist: extData[] = [];
          this.Overlays.getOverlays().forEach((ol: AMap.Marker | AMap.Polyline) => {
            exlist.push(ol.getExtData())
          })
          return exlist
        }
      },
  
      Searchlist(): { name: string, value: string }[] {
        let Slist: Array<{ name: string, value: string }> = [];
        if (this.Overlays.CLASS_NAME == undefined) {
          return []
        }
        else {
          this.Overlays.getOverlays().forEach((ol: AMap.Marker | AMap.Polyline) => {
            Slist.push({ name: ol.getExtData().name, value: ol.getExtData().desc })
            //Slist.push({ name: ol.getExtData().name, value: ol.getExtData().name })
          })
        }
        return Slist
      },
      Editing(): string[] {
        return[]
      }
  
    }
  })