<template>
  <v-app>
    <Amap />
    <v-main>
      <v-row style="height: px;">
        <v-col class="d-flex justify-end">
          <v-toolbar dense floating height="48" rounded="lg">
            <v-text-field hide-details prepend-icon="mdi-magnify" single-line width="128">
            </v-text-field>

            <v-btn icon @click="">
              <v-icon>mdi-crosshairs-gps</v-icon>
            </v-btn>

            <div class="text-center">
              <v-menu offset-y>
                <template v-slot:activator="{ isActive, props }">
                  <v-btn icon rounded v-bind="props">
                    <v-icon>mdi-map-marker-path</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in routeItems" :key="index" @click="setRoute(item.value)">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>

            <div class="text-center">
              <v-menu offset-y>
                <template v-slot:activator="{ isActive, props }">
                  <v-btn icon rounded v-bind="props">
                    <v-icon>mdi-layers-outline</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in layerItems" :key="index" @click="setLayer(item.title)">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>

            <v-btn icon @click="">
              <v-icon>mdi-printer</v-icon>
            </v-btn>

          </v-toolbar>
        </v-col>
      </v-row>

      <v-navigation-drawer expand-on-hover rail permanent width="300">
        <v-list-item class="px-2" prepend-icon="mdi-earth">
          <v-list-item-title v-if="currentRoute" style='font-size: 16px' class="font-weight-thin">
            当前路线: {{currentRoute}}
          </v-list-item-title>
          <v-list-item-title v-else>
            当前未选择路线
          </v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>
        <v-expansion-panels focusable>
          <v-expansion-panel v-for="(ol, i) in mapStore.Overlays.getOverlays" :key="i" @click="">
            <v-expansion-panel-title class="font-weight-thin">
              <v-icon v-if="1">
                mdi-map-marker
              </v-icon>
              <v-icon v-else-if="ol['type'] == 'polyline'">
                mdi-vector-polyline
              </v-icon>
              <v-list-item-title>
                {{ol['name']}}
              </v-list-item-title>

            </v-expansion-panel-title>
            <v-expansion-panel-text class="font-weight-thin">
              ID:{{ol['id']}}
            </v-expansion-panel-text>
            <v-expansion-panel-text class="font-weight-thin">
              地点:{{ol['name']}}
            </v-expansion-panel-text>
            <v-expansion-panel-text class="font-weight-thin">
              坐标:{{ol['lnglat']}}
            </v-expansion-panel-text>
            <v-expansion-panel-text class="font-weight-thin">
              描述:{{ol['desc']}}
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>

      </v-navigation-drawer>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import Amap from './components/Amap.vue'
import { useStore } from './index/store';
import { LoadOL } from './utils/LoadOl';
import setSource from './utils/setSource';
import { drawSpot } from './utils/drawSpots';
import { drawRoute } from './utils/drawRoute';

const mapStore = useStore()

var layerItems = [
  { title: 'Google Satellite' },
  { title: 'Google Map' },
  { title: 'Google Terrain' },
  { title: 'Gaode Map' },
  { title: 'Gaode Satellite' },
]
var routeItems = [
  { title: '三峡大坝实习路线', value: 'sanxia' },
  { title: '张家冲实习路线', value: 'zhangjiachong' },
  { title: '链子崖实习路线', value: 'lianziya' },
  { title: '屈原故里实习路线', value: 'quyuan' },
  { title: '泗溪公园实习路线', value: 'sixigongyuan' },
  { title: '棺材岩实习路线', value: 'guancaiyan' },
]
var currentRoute = ''

const setLayer = (layer: string) => {
  setSource.setLayer(layer, mapStore.Map)
}

const setRoute = (route: string) => {
  let Loaded: AMap.OverlayGroup = new AMap.OverlayGroup();
  Loaded = LoadOL(route, mapStore.Overlays)
  console.log(Loaded.getOverlays());
  
  Loaded.eachOverlay((ol: AMap.Marker | AMap.Polyline) => {
    if (ol.className == 'AMap.Marker') {
      drawSpot(ol, mapStore.Overlays, mapStore.Map, mapStore.Icon, mapStore.IconSelect)
    }
    else if (ol.className == 'Overlay.Polyline') {
      drawRoute(ol as unknown as AMap.Polyline, mapStore.Overlays, mapStore.Map)
    }
    mapStore.Map.setFitView(Loaded.getOverlays(), false, [50, 50, 50, 50])
  })
}
</script>

<style>
.v-toolbar {
  margin-top: 12px;
  margin-right: 12px;
}

.v-expansion-panel-title {
  padding: 16px 8px !important
}

.v-icon.mdi-earth {
  --v-icon-size-multiplier: 1.6;
}

.v-navigation-drawer__content {
  overflow-y: hidden !important;
}

.v-expansion-panel {
  flex: 1 0 100%;
  /* max-width: 100%; */
  position: relative;
  transition: 0.3s all cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: margin-top, border-radius, border, max-width;
  border-radius: 4px;
}

.v-expansion-panel .v-expansion-panel-title #text {
  overflow: hidden !important;
}

.v-icon {
  color: #616161;
}
</style>
