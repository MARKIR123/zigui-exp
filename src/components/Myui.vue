<template>
    <div class="alert-box">
        <v-alert type="success" elevation="12">I'm a success alert.</v-alert>
    </div>
    <v-row>
        <v-col class="d-flex justify-end">
            <v-toolbar dense floating height="45" rounded="lg">
                <v-autocomplete :items="mapStore.Searchlist" :filter="searchFilter" v-model:search="search" color="blue"
                    item-title="name" item-value="value" prepend-icon="mdi-magnify" hide-no-data hide-details
                    return-object v-on:keydown.enter="findOl(search)" hide-selected>
                    <!-- <template v-slot:no-data>
                        <v-list-item>
                            <v-list-item-title>
                                搜索。。。
                                <strong>Cryptocurrency</strong>
                            </v-list-item-title>
                        </v-list-item>
                    </template> -->
                    <template v-slot:item:any="{ item }">
                        <v-item>{{item.title}}</v-item>
                        <!-- <v-list-item-avatar color="indigo" class="headline font-weight-light white--text">
                                {{ item['title'] }}
                            </v-list-item-avatar> -->
                        <!-- <v-list-item-title v-text="item['title']"></v-list-item-title>
                            <v-list-item-action>
                                <v-icon>mdi-coin</v-icon>
                            </v-list-item-action> -->

                    </template>
                </v-autocomplete>

                <v-btn icon @click="emitCP()">
                    <v-icon>mdi-crosshairs-gps</v-icon>
                </v-btn>

                <v-btn icon @click="globalView()">
                    <v-icon>mdi-overscan</v-icon>
                </v-btn>

                <div class="text-center">
                    <v-menu offset-y>
                        <template v-slot:activator="{ isActive, props }">
                            <v-btn icon rounded v-bind="props">
                                <v-icon>mdi-map-marker-path</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item v-for="(item, index) in routeItems" :key="index"
                                @click="setRoute(item.title, item.value, item.onloaded, index)">
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

                <v-btn icon @click="test_over()">
                    <v-icon>mdi-printer</v-icon>
                </v-btn>

            </v-toolbar>
        </v-col>
    </v-row>

    <v-navigation-drawer expand-on-hover rail permanent width="300">
        <v-list-item class="px-2" prepend-icon="mdi-earth">
            <v-list-item-title v-if="currentRoute" style='font-size: 16px' class="font-weight-thin">
                {{currentRoute}}
            </v-list-item-title>
            <v-list-item-title v-else>
                当前未选择路线
            </v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>
        <v-expansion-panels focusable>
            <v-expansion-panel v-for="(ol, i) in mapStore.Overlayslist" :key="i" @click="focus(ol)">
                <v-expansion-panel-title class="font-weight-thin">
                    <v-icon v-if="ol.type == 'point'">
                        mdi-map-marker
                    </v-icon>
                    <v-icon v-else-if="ol.type == 'polyline'">
                        mdi-vector-polyline
                    </v-icon>
                    <v-list-item-title>
                        {{ol.name}}
                    </v-list-item-title>

                </v-expansion-panel-title>
                <v-expansion-panel-text class="font-weight-thin">
                    ID:{{ol.id}}
                </v-expansion-panel-text>
                <v-expansion-panel-text class="font-weight-thin">
                    地点:{{ol.name}}
                </v-expansion-panel-text>
                <v-expansion-panel-text class="font-weight-thin">
                    坐标:{{ol.lnglat}}
                </v-expansion-panel-text>
                <v-expansion-panel-text class="font-weight-thin">
                    描述:{{ol.desc}}
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue';
import { useStore } from '../index/store';
import { LoadOL } from '../utils/LoadOl';
import setSource from '../utils/setSource';
import { drawSpot } from '../utils/drawSpots';
import { drawRoute } from '../utils/drawRoute';
import { extData } from '../utils/type';
import { ref } from 'vue';

const mapStore = useStore()

var layerItems = [
    { title: 'Google Satellite' },
    { title: 'Google Map' },
    { title: 'Google Terrain' },
    { title: 'Gaode Map' },
    { title: 'Gaode Satellite' },
]
var routeItems = [
    { title: '三峡大坝实习路线', value: 'sanxia', onloaded: false },
    { title: '张家冲实习路线', value: 'zhangjiachong', onloaded: false },
    { title: '链子崖实习路线', value: 'lianziya', onloaded: false },
    { title: '屈原故里实习路线', value: 'quyuan', onloaded: false },
    { title: '泗溪公园实习路线', value: 'sixigongyuan', onloaded: false },
    { title: '棺材岩实习路线', value: 'guancaiyan', onloaded: false },
]
var currentRoute = ref('')

var currentObj: extData;

var search = ref('');

const instance = getCurrentInstance()

const emitCP = () => {
    instance?.proxy?.$Bus.emit("GetCP")
    console.log('请求当前位置:');
}

const globalView = () => {
    mapStore.Map.setFitView(mapStore.Overlays.getOverlays(), false, [20, 20, 10, 10])
}

const searchFilter = (item: { name: string, value: string }, queryText: string, itemText: string) => {
    const textOne = item.name
    const textTwo = item.value
    const stext = queryText
    //const spinyin = pinyin(queryText, { toneType: 'none' })

    return textOne.indexOf(stext) > -1 || textTwo.indexOf(stext)
}

const setLayer = (layer: string) => {
    setSource.setLayer(layer, mapStore.Map)
}

const setRoute = (routeName: string, route: string, onloaded: boolean, index: number) => {
    if (onloaded) {
        //提示路线已被加载
    }
    else {
        let Loaded: AMap.OverlayGroup = new AMap.OverlayGroup();
        Loaded = LoadOL(route, mapStore.Overlays)
        Loaded.eachOverlay((ol: AMap.Marker | AMap.Polyline) => {
            if (ol.className == 'AMap.Marker') {
                drawSpot(ol, mapStore.Overlays, mapStore.Map, mapStore.Icon, mapStore.IconSelect)
            }
            else if (ol.className == 'Overlay.Polyline') {
                drawRoute(ol as unknown as AMap.Polyline, mapStore.Overlays, mapStore.Map)
            }
            mapStore.Map.setFitView(Loaded.getOverlays(), false, [50, 50, 50, 50])
        })
        currentRoute.value = routeName;
        routeItems[index].onloaded = true
    }
    //提示路线加载成功
}

const focus = (ol: extData) => {
    if (currentObj == undefined) {
        ol.onFocus(18)
        ol.onActive()
        currentObj = ol;
    }
    else {
        currentObj.onPassive()
        ol.onFocus(18)
        ol.onActive()
        currentObj = ol;
    }
}

const findOl = (name: string): boolean => {
    mapStore.Overlayslist.forEach((ol) => {
        if (ol.name == name) {
            focus(ol)
            return true;
        }
    })
    return false;
}

const test_over = () => {
    console.log(mapStore.Searchlist);
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
    overflow-y: auto !important;
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

.v-toolbar .v-icon {
    color: #616161;
}

.v-input {
    font-weight: 300 !important;
    min-width: 240px;
}

.v-input__control {
    display: flex;
    grid-area: control;
    height: 46px;
}

.v-input--horizontal .v-input__prepend {
    margin-inline-end: 8px !important;
    margin-inline-start: 8px !important;
    padding-top: 12px !important;
}

.v-input--density-default {
    --v-input-control-height: 56px;
    --v-input-padding-top: 0px !important;
}

.v-field {
    display: grid;
    grid-template-areas: "prepend-inner field clear append-inner";
    grid-template-columns: min-content minmax(0, 1fr) min-content min-content;
    font-size: 16px;
    letter-spacing: 0.009375em;
    max-width: 100%;
    border-radius: 4px;
    contain: layout;
    flex: 1 0;
    grid-area: control;
    position: relative;
    --v-field-padding-start: 16px;
    --v-field-padding-end: 16px;
    --v-field-padding-top: 12px !important;
    --v-field-padding-bottom: 6px;
}

.v-field-input {
    padding-top: 12px !important;
}

.v-field__prepend-inner,
.v-field__append-inner,
.v-field__clearable {
    padding-top: 12px !important;
}

.v-input--density-default .v-field--variant-solo,
.v-input--density-default .v-field--variant-filled {
    --v-input-control-height: 45px !important;
}

.v-alert {
    border-radius: 30px;
}

.alert-box {
    display: none;
    width: 400px;
    height: 64px;
    left: 40%;
    position: absolute;
    padding-top: 16px;
}

.selectbox {
    max-width: 400px;
}
</style>