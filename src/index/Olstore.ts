import { defineStore } from 'pinia'
import "@amap/amap-jsapi-types";
import { Spot, Route } from '../utils/type';

export const useOlStore = defineStore('olstore', {
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      Overlays: [] as Array<Spot | Route>,
      Icon: {} as AMap.Icon,
      IconSelect: {} as AMap.Icon,
      Linestyle: {} as AMap.PolylineOptions,
      Linestylesl: {} as AMap.PolylineOptions,
      CurrentPos: [0, 0]
    }
  },
  getters: {
    // Overlayslist(): extData[] {
    //   if (this.Overlays.CLASS_NAME == undefined) {
    //     return []
    //   }
    //   else {
    //     var exlist: extData[] = [];
    //     this.Overlays.getOverlays().forEach((ol: AMap.Marker | AMap.Polyline) => {
    //       exlist.push(ol.getExtData())
    //     })
    //     return exlist
    //   }
    // },

    Searchlist(): { name: string, value: number }[] {
      let Slist: Array<{ name: string, value: number }> = [];
      this.Overlays.forEach((ol) => {
        if (ol.type == 'Spot') {
          Slist.push({ name: (ol as Spot).infowindow.name, value: ol.id })
        }
        else if (ol.type == 'Route') {
          Slist.push({ name: (ol as Route).name, value: ol.id })
        }
      })
      return Slist
    },
  }
})