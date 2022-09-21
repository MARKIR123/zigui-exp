<template>
  <v-app>
    <Amap/>
    <v-main>
      <Myui />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { reactive, onBeforeMount, onMounted } from 'vue'
import Amap from './components/Amap.vue'
import Myui from './components/Myui.vue'

// const mapStore = useStore()

// var exlist:extData[] = reactive([])

// var layerItems = [
//   { title: 'Google Satellite' },
//   { title: 'Google Map' },
//   { title: 'Google Terrain' },
//   { title: 'Gaode Map' },
//   { title: 'Gaode Satellite' },
// ]
// var routeItems = [
//   { title: '三峡大坝实习路线', value: 'sanxia' },
//   { title: '张家冲实习路线', value: 'zhangjiachong' },
//   { title: '链子崖实习路线', value: 'lianziya' },
//   { title: '屈原故里实习路线', value: 'quyuan' },
//   { title: '泗溪公园实习路线', value: 'sixigongyuan' },
//   { title: '棺材岩实习路线', value: 'guancaiyan' },
// ]
// var currentRoute = ''

// const setLayer = (layer: string) => {
//   setSource.setLayer(layer, mapStore.Map)
// }

// const setRoute = (route: string) => {
//   let Loaded: AMap.OverlayGroup = new AMap.OverlayGroup();
//   Loaded = LoadOL(route, mapStore.Overlays)
//   Loaded.eachOverlay((ol: AMap.Marker | AMap.Polyline) => {
//     if (ol.className == 'AMap.Marker') {
//       drawSpot(ol, mapStore.Overlays, mapStore.Map, mapStore.Icon, mapStore.IconSelect)
//       exlist.push(ol.getExtData())
//     }
//     else if (ol.className == 'Overlay.Polyline') {
//       drawRoute(ol as unknown as AMap.Polyline, mapStore.Overlays, mapStore.Map)
//     }
//     mapStore.Map.setFitView(Loaded.getOverlays(), false, [50, 50, 50, 50])
//   })
// }

// const focus = (ol: extData) => {
//   ol.onFocus(18)
//   ol.onActive()
// }

// const test_over = () => {
//   console.log('Overlays in app:',mapStore.Overlays);
//   console.log('map in app:',mapStore.Map);
//   console.log('icon in app:',mapStore.Icon);
//   console.log('icons in app:',mapStore.IconSelect);
// }

// onBeforeMount( ()=>{
//   console.log('Overlays in app:',mapStore.Overlays);
//   console.log('map in app:',mapStore.Map);
//   console.log('icon in app:',mapStore.Icon);
//   console.log('icons in app:',mapStore.IconSelect);
// } )
console.log("App setup");

onBeforeMount(() => {
  console.log("App onBeforeMount");
  
})

onMounted(() => {
  console.log("App onMounted");
  
})
</script>

<style>
</style>
