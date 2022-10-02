<template>
    <div class="alert-box">
        <v-snackbar v-model=ShowAlert class="font-weight-thin" style="font-family: 'Microsoft JhengHei'"
            :timeout="AlertTO" :color=AlertColor>
            {{ Message }}
        </v-snackbar>
    </div>
    <v-row>
        <v-col class="d-flex justify-end">
            <v-toolbar dense floating height="48" rounded="lg">
                <v-autocomplete :items="olStore.Searchlist" :filter="searchFilter" v-model:search="search" color="blue"
                    item-title="name" item-value="value" prepend-icon="mdi-magnify" hide-no-data hide-details
                    return-object v-on:keydown.enter="SearchToFocus(search)" hide-selected>
                    <template v-slot:item:any="{ item }">
                        <v-item>{{item.title}}</v-item>

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
                                <v-icon>mdi-pencil-outline</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item v-for="(item, index) in drawItems" :key="index" @click="">
                                <v-list-item-title @click=item.event>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>

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

                <v-btn icon @click="print">
                    <v-icon>mdi-printer</v-icon>
                </v-btn>

                <div class="text-center">
                    <v-menu>
                        <template v-slot:activator="{ isActive, props }">
                            <v-btn icon rounded v-bind="props">
                                <v-icon>mdi-dots-horizontal</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item>
                                <v-switch v-model="swtichTheme" color="secondary" @change="changeTheme"
                                    :label="theme.global.name.value">
                                </v-switch>
                            </v-list-item>
                            <v-list-item href="https://github.com/MARKIR123">
                                <v-list-item-title class="text-light-blue darken-3">
                                    @Asukai
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>

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
            <v-expansion-panel v-for="(ol, i) in Overlays" :key="i" @click="focus(ol)">
                <div v-if="ol.type == 'Spot'">
                    <v-expansion-panel-title class="font-weight-thin">
                        <v-icon>
                            mdi-map-marker
                        </v-icon>
                        <v-list-item-title class="font-weight-thin">
                            {{(ol as Spot).infowindow.name}}
                        </v-list-item-title>
                    </v-expansion-panel-title>

                    <v-expansion-panel-text>
                        <v-text-field variant="underlined" v-model="ol.id" :disabled="true" hide-details
                            class="font-weight-thin" height="10">
                            ID:
                        </v-text-field>
                        <v-text-field variant="underlined" v-model="(ol as Spot).infowindow.name" color="red-lighten-1"
                            @update:model-value="() => {(ol as Spot).infowindow.setContent()}" :disabled="!ol.Onediting"
                            hide-details class="font-weight-thin">
                            地点:
                        </v-text-field>
                        <v-text-field variant="underlined" v-model="(ol as Spot).lnglat" :disabled="!ol.Onediting"
                            color="pink darken-4"
                            @update:model-value="() => {(ol as Spot).setPosition((ol as Spot).lnglat)}" hide-details
                            class="font-weight-thin">
                            坐标:
                        </v-text-field>
                        <v-text-field v-if="ol.Onediting" variant="underlined" color="purple lighten-1"
                            v-model="(ol as Spot).infowindow.photo.img"
                            @update:model-value="() => {(ol as Spot).infowindow.setContent()}" hide-details
                            class="font-weight-thin">
                            照片路径:
                        </v-text-field>
                        <v-text-field v-if="ol.Onediting" variant="underlined" color="indigo lighten-1"
                            v-model="(ol as Spot).infowindow.photo.author"
                            @update:model-value="() => {(ol as Spot).infowindow.setContent()}" hide-details
                            class="font-weight-thin">
                            照片拍摄:
                        </v-text-field>
                        <v-text-field v-if="ol.Onediting" variant="underlined" color="green lighten-1"
                            v-model="(ol as Spot).infowindow.photo.date"
                            @update:model-value="() => {(ol as Spot).infowindow.setContent()}" hide-details
                            class="font-weight-thin">
                            拍摄日期:
                        </v-text-field>

                        <v-textarea variant="underlined" v-model="(ol as Spot).infowindow.desc" color="orange lighten-1"
                            @update:model-value="() => {(ol as Spot).infowindow.setContent()}" :disabled="!ol.Onediting"
                            auto-grow class="font-weight-thin">
                        </v-textarea>

                        <v-container class="px-0">
                            <v-row>
                                <v-col>
                                    <v-switch v-model="ol.Onediting" @click.stop="(ol as Spot).onEdit()"
                                        color="secondary" label="Edit">
                                    </v-switch>
                                </v-col>
                                <v-col>
                                    <v-btn variant="text" color="red" class="mt-3" @click.stop="remove(ol, i)">
                                        Delete
                                    </v-btn>
                                </v-col>
                            </v-row>

                        </v-container>

                    </v-expansion-panel-text>


                </div>

                <div v-if="ol.type == 'Route'">
                    <v-expansion-panel-title class="font-weight-thin">
                        <v-icon>
                            mdi-vector-polyline
                        </v-icon>
                        <v-list-item-title class="font-weight-thin">
                            {{(ol as Route).name}}
                        </v-list-item-title>
                    </v-expansion-panel-title>

                    <v-expansion-panel-text>
                        <v-text-field variant="underlined" v-model="ol.id" :disabled="true" hide-details
                            class="font-weight-thin" height="10">
                            ID:
                        </v-text-field>
                        <v-text-field variant="underlined" v-model="(ol as Route).name" :disabled="!ol.Onediting"
                            @update:model-value="(ol as Route).textmarker.setContent((ol as Route).name)" hide-details
                            class="font-weight-thin">
                            地点:
                        </v-text-field>

                        <v-textarea variant="underlined" v-model="(ol as Route).desc" :disabled="!ol.Onediting"
                            @update:model-value="" auto-grow class="font-weight-thin">
                        </v-textarea>

                        <v-container class="px-0">
                            <v-row>
                                <v-col>
                                    <v-switch v-model="ol.Onediting" @click.stop="ol.onEdit(olStore.PolyEditor)"
                                        color="secondary" label="Edit">
                                    </v-switch>
                                </v-col>
                                <v-col>
                                    <v-btn variant="text" color="red" class="mt-3" @click.stop="remove(ol, i)">
                                        Delete
                                    </v-btn>
                                </v-col>
                            </v-row>

                        </v-container>

                    </v-expansion-panel-text>
                </div>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue';
import { useStore } from '../index/store';
import { useOlStore } from '../index/Olstore';
import { LoadSpots, LoadRoute } from '../utils/LoadOl';
import setSource from '../utils/setSource';
import { Spot, Route } from '../utils/type';
import { ref } from 'vue';
import { useTheme } from 'vuetify/lib/framework.mjs';
import { storeToRefs } from 'pinia';

const mapStore = useStore()

const olStore = useOlStore()

const theme = useTheme()

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

const drawSpot = () => {
    mapStore.Map.on('click', (e) => {
        let date = new Date();
        let sdate = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
        let ns = new Spot(olStore.Overlays.length, '请输入标记名~', [e.lnglat.lng, e.lnglat.lat], '请输入图片路径~', sdate, '输入拍摄者~', '输入一段描述~', olStore.Icon, olStore.IconSelect, mapStore.Map)
        olStore.Overlays.push(ns);
        mapStore.Map.clearEvents('click')
        Alert(`成功创建ID: ${olStore.Overlays.length} 标记~`, 'blue-lighten-2')
    })

}

const drawRoute = () => {
    let path: [number, number][] = [];
    //let nr = new Route(olStore.Overlays.length, '请输入路线名~', [], '请输入描述~', olStore.Linestyle, olStore.Linestylesl, mapStore.Map)
    let activeline = new AMap.Polyline();
    mapStore.Map.add(activeline)
    activeline.setOptions(olStore.Linestyle);
    mapStore.Map.on('click', (e) => {
        path.push([e.lnglat.lng, e.lnglat.lat])
        activeline.setPath(path)
    })
    mapStore.Map.on('mousemove', (e) => {
        if (path.length >= 1) {
            activeline.setPath([...path, [e.lnglat.lng, e.lnglat.lat]])
        }
    })
    mapStore.Map.on('rightclick', (e) => {
        console.log('mapright!!');
        activeline.remove()
        mapStore.Map.clearEvents('click')
        mapStore.Map.clearEvents('mousemove')
        olStore.Overlays.push(new Route(olStore.Overlays.length, '请输入路线名~', path, '请输入描述~', olStore.Linestyle, olStore.Linestylesl, mapStore.Map))
        mapStore.Map.clearEvents('rightclick')
        Alert(`成功创建ID: ${olStore.Overlays.length} 路线~`, 'blue-lighten-2')
    })

}

var drawItems = [
    { title: 'Draw Spot', event: drawSpot },
    { title: 'Draw Route', event: drawRoute }
]

var { Overlays } = storeToRefs(olStore)

var currentRoute = ref('')

var currentObj: Spot | Route;

var search = ref('');

var ShowAlert = ref(false)
var AlertTO = ref(2000);
var AlertColor = ref('red lighten-4')
var Message = ref('Alert Message here')

var swtichTheme = ref(false);

const instance = getCurrentInstance()

const emitCP = () => {
    instance?.proxy?.$Bus.emit("GetCP")
    console.log('请求当前位置:');
}

const globalView = () => {
    mapStore.Map.setFitView(olStore.Overlayslist, false, [20, 20, 10, 10])
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
        Alert('该路线已加载!', 'red-lighten-3');
    }
    else {
        let Loaded: Array<AMap.Marker | AMap.Polyline> = [];
        Loaded = [...LoadSpots(route, olStore.Overlays, olStore.Icon, olStore.IconSelect, mapStore.Map), LoadRoute(route, olStore.Overlays, olStore.Linestyle, olStore.Linestylesl, mapStore.Map)]
        currentRoute.value = routeName;
        routeItems[index].onloaded = true

        mapStore.Map.setFitView(Loaded, false, [50, 50, 50, 50])
        //提示路线加载成功
        Alert('路线加载成功!', 'light-green-lighten-2');
    }
}

const focus = (ol: Spot | Route) => {
    if (currentObj == undefined) {
        ol.onFocus(mapStore.Map)
        currentObj = ol;
    }
    else {
        currentObj.setNormal()
        ol.onFocus(mapStore.Map)
        currentObj = ol;
    }
}

const Alert = (message: string, color: string, timeout: number = 2000) => {
    Message.value = message;
    AlertColor.value = color;
    AlertTO.value = timeout;
    ShowAlert.value = true;
}

const remove = (ol: Spot | Route, index: number) => {
    ol.delete()
    olStore.Overlays.splice(index, 1)
}

const SearchToFocus = (name: string) => {
    Overlays.value.forEach((ol) => {
        if ((ol as Spot).infowindow.name == name || (ol as Route).name == name) {
            ol.onFocus(mapStore.Map)
        }
    })
}

const changeTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const print = () => {
    window.print()
}

const test_over = (s: any) => {
    console.log('AlertMessage:', Message, 'AlertColor:', AlertColor);
    console.log(routeItems);
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

/* .v-icon {
    color: #616161;
} */

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

.v-toolbar.v-icon {
    color: #616161;
}

.v-toolbar .v-input {
    font-weight: 300 !important;
    min-width: 240px;
}

.v-icon.mdi-magnify {
    margin-inline-start: 8px;
}

.v-toolbar .v-input__prepend {
    margin-inline-end: 6px !important;
}

.v-toolbar .v-input__prepend,
.v-input__append {
    display: flex;
    padding-top: 13px;
}

.v-toolbar .v-input--density-default .v-field--variant-solo,
.v-input--density-default .v-field--variant-filled {
    --v-input-control-height: 48px !important;
    --v-field-padding-bottom: 6px;
}

.v-toolbar .v-field__input {
    padding-inline-start: 16px;
    min-height: var(--v-input-control-height, 56px);
    padding-inline-start: var(--v-field-padding-start);
    padding-inline-end: var(--v-field-padding-end);
    padding-top: 14px;
    padding-bottom: var(--v-field-padding-bottom, 6px);
    width: 100%;
}

.v-toolbar .v-field__prepend-inner,
.v-field__append-inner,
.v-field__clearable {
    align-items: flex-start;
    display: flex;
    padding-top: 14px !important;
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

.v-theme--light {
    --v-disabled-opacity: 0.95 !important;
}
</style>