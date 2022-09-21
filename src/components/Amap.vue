<template>
    <div id="container"></div>
</template>
  
<script lang='ts' setup>
import { reactive, onBeforeMount, onMounted } from 'vue'
import AMapLoader from "@amap/amap-jsapi-loader";
import "@amap/amap-jsapi-types";
import { getAssetsImages } from "../utils/getImage"
import { useStore } from "../index/store"

const mapStore = useStore()

var Overlays: AMap.OverlayGroup;

var Map: AMap.Map;

var Icon: AMap.Icon;

var IconSelect: AMap.Icon;

//进行地图初始化
function initMap() {
    AMapLoader.load({
        key: "222fee29d8f3e925028190154bfb717d", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        Loca: {                // 是否加载 Loca， 缺省不加载
            "version": '2.0.0',  // Loca 版本，缺省 1.3.2
        },
    })
        .then((AMap) => {
            //谷歌地图图层
            var googleLayer = new AMap.TileLayer({
                getTileUrl: 'http://mt{1,2,3,0}.google.cn/vt/lyrs=y@142&hl=zh-CN&gl=cn&x=[x]&y=[y]&z=[z]&s=Galil',
                zIndex: 2
            });

            Map = new AMap.Map("container", {
                //设置地图容器id
                viewMode: "3D", //是否为3D地图模式
                terrain: true,
                zooms: [2, 23],
                zoom: 10, //初始化地图级别
                center: [111.274722, 30.738333], //初始化地图中心点位置
                layers: [
                    googleLayer,
                ],
            });

            Overlays = new AMap.OverlayGroup();

            Icon = new AMap.Icon({
                size: new AMap.Size(40, 50),
                image: getAssetsImages('locate.png'),
                imageSize: new AMap.Size(40, 50)
            });

            IconSelect = new AMap.Icon({
                size: new AMap.Size(40, 50),
                image: getAssetsImages('locate-select.png'),
                imageSize: new AMap.Size(40, 50)
            });

            mapStore.$state = {
                Map: Map,
                Overlays: Overlays,
                Icon: Icon,
                IconSelect: IconSelect
            }

            console.log('Overlays in amap:', mapStore.Overlays);
            console.log('map in amap:', mapStore.Map);
            console.log('icon in amap:', mapStore.Icon);
            console.log('icons in amap:', mapStore.IconSelect);

            // mapStore.$patch((state) => {
            //     state.Map = Map

            //     state.Overlays = Overlays

            //     state.Icon = new AMap.Icon({
            //         size: new AMap.Size(40, 50),
            //         image: getAssetsImages('locate.png'),
            //         imageSize: new AMap.Size(40, 50)
            //     });
            //     state.IconSelect = new AMap.Icon({
            //         size: new AMap.Size(40, 50),
            //         image: getAssetsImages('locate-select.png'),
            //         imageSize: new AMap.Size(40, 50)
            //     });
            // })

            //添加插件
            AMap.plugin(["AMap.Scale"], function () {
                //异步同时加载多个插件
                mapStore.Map.addControl(new AMap.Scale({
                    position: { right: '3px', bottom: '7px' }
                })); //显示当前地图中心的比例尺
            });

            //var path: any[] = []

            mapStore.Map.on('click', function (e: any) {

                console.log([e.lnglat.lng, e.lnglat.lat]);
                // path.push([e.lnglat.lng, e.lnglat.lat])
                // console.log(path)
            })

            console.log('inAmap:', mapStore.Overlays);


            // watch(Overlays, (newv, oldv) => {
            //     let oll: extData[] = [];
            //     newv.eachOverlay((overlay: AMap.Polyline | AMap.Marker, index: number, collections: any) => {
            //         // let t: ol = { type: '', name: '', lnglat: [0, 0], id: 0, desc: '' }
            //         // let extData = overlay.getExtData();
            //         // t.type = extData['type']
            //         // t.name = extData['name']
            //         // t.lnglat = extData['lnglat']
            //         // t.id = extData['id']
            //         // t.desc = extData['desc']
            //         oll.push(overlay.getExtData())
            //     })
            //     emitUplist(oll)
            // })

        }).catch((e) => {
            console.error(e);  //加载错误提示
        });
}

// const instance = getCurrentInstance()
// instance?.proxy?.$Bus.on('ln', (ln) => {
//     setSource.setLayer(ln, map)
// })

// instance?.proxy?.$Bus.on('sfv', () => {
//     fitView.fitView(map)
// })

// instance?.proxy?.$Bus.on('sr', (r) => {
//     map.clearMap();
//     //console.log(Overlays.getOverlays());
//     Overlays.clearOverlays();
//     drawSpots.drawSpots(r, map, Overlays, Sicon, Siconselect)
//     drawRoute.drawRoute(r, map, Overlays)
// })

// instance?.proxy?.$Bus.on('fo', (lnglat) => {
//     map.setZoomAndCenter(18, [lnglat[0] - 0.002, lnglat[1]], false)
// })

// const emitUplist = (l: any) => {
//     instance?.proxy?.$Bus.emit('udl', l)
// }


console.log("Amap setup");
console.log(mapStore.Overlays.CLASS_NAME);

onBeforeMount(() => {
    console.log("Amap onBeforeMount");
    console.log(mapStore.Overlays.CLASS_NAME);

})

onMounted(() => {
    console.log("Amap onMounted");
    console.log(mapStore.Overlays.CLASS_NAME);
})

initMap();
</script>
  
<style>
.amap-info-close {
    display: none;
}

#container {
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    position: absolute;
}

.amap-logo {
    display: none;
    opacity: 0;
}

.amap-copyright {
    display: none;
    opacity: 0;
}

.amap-info-content {
    position: relative;
    background: #fff;
    padding: 0px 0px 0px 0px;
    line-height: 1.4;
    overflow: hidden;
    border-radius: 30px;
}
</style>
