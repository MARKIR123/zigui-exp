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
      PolyEditor: {},
      CurrentPos: [0, 0]
    }
  },
  getters: {
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

    Overlayslist(): (AMap.Marker | AMap.Polyline)[] {
      let Olist: (AMap.Marker | AMap.Polyline)[] = [];
      this.Overlays.forEach((ol) => {
        if (ol.type == 'Spot') {
          Olist.push((ol as Spot).marker)
        }
        else if (ol.type == 'Route') {
          Olist.push((ol as Route).line)
        }
      })
      return Olist
    }
  }
})