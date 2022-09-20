<template>
  <v-app>
    <Amap />
    <v-main>
      <v-row style="height: px;">
        <v-col class="d-flex justify-end">
          <v-toolbar dense floating height="48" rounded="lg">
            <v-text-field hide-details prepend-icon="mdi-magnify" single-line width="128">
            </v-text-field>

            <v-btn icon @click="emitFV">
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
                  <v-list-item v-for="(item, index) in routes" :key="index" @click="emitLS(item.value)">
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
                  <v-list-item v-for="(item, index) in layeritems" :key="index" @click="emitSL(item.title)">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>

            <v-btn icon @click="print">
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
          <v-expansion-panel v-for="(ol, i) in Overlays" :key="i" @click="emitFO(ol)">
            <v-expansion-panel-title class="font-weight-thin">
              <v-icon v-if="ol.type == 'point'">
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

<script lang="ts">
import { defineComponent, getCurrentInstance, reactive, ref } from 'vue'
import Amap from './components/Amap.vue'
import { extData } from './utils/type'

export default defineComponent({
  name: 'App',

  components: {
    Amap,
  },

  data() {
    return {
      layeritems: [
        { title: 'Google Satellite' },
        { title: 'Google Map' },
        { title: 'Google Terrain' },
        { title: 'Gaode Map' },
        { title: 'Gaode Satellite' },
      ],
      routes: [
        { title: '三峡大坝实习路线', value: 'sanxia' },
        { title: '张家冲实习路线', value: 'zhangjiachong' },
        { title: '链子崖实习路线', value: 'lianziya' },
        { title: '屈原故里实习路线', value: 'quyuan' },
        { title: '泗溪公园实习路线', value: 'sixigongyuan' },
        { title: '棺材岩实习路线', value: 'guancaiyan' },
      ],
    }
  },

  setup() {
    const instance = getCurrentInstance();
    var currentRoute = ref('')
    var Overlays: extData[] = reactive([])
    const emitSL = (ln: string) => {
      instance?.proxy?.$Bus.emit('ln', ln)
    }

    const emitFV = () => {
      instance?.proxy?.$Bus.emit('sfv')
    }

    const emitLS = (r: string) => {
      instance?.proxy?.$Bus.emit('sr', r)
      if (r == 'sanxia') {
        currentRoute.value = '三峡实习路线';
      }
      else if (r == 'zhangjiachong') {
        currentRoute.value = '张家冲实习路线';
      }
      else if (r == 'sixigongyuan') {
        currentRoute.value = '泗溪公园实习路线';
      }
      else if (r == 'quyuan') {
        currentRoute.value = '屈原故里实习路线';
      }
      else if (r == 'lianziya') {
        currentRoute.value = '链子崖实习路线';
      }
      else if (r == 'guancaiyan') {
        currentRoute.value = '花鸡坡-棺材岩实习路线';
      }
    }

    const emitFO = (ol: extData) => {
      Overlays.forEach((each: extData) => {
        each.onPassive()
      })
      instance?.proxy?.$Bus.emit('fo', ol['lnglat'])
      ol['onActive']()
    }

    instance?.proxy?.$Bus.on('udl', (l) => {
      Overlays.splice(0)
      for (let data of l) {
        console.log(data);

        Overlays.push(data)
      }
    })

    function focus(ol: extData) {
      ol['onActive']()
    }

    return {
      emitSL,
      emitFV,
      emitLS,
      emitFO,
      print,
      focus,
      currentRoute,
      Overlays
    }
  }
})
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
