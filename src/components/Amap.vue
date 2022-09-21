<template>
    <div id="container"></div>
</template>
  
<script lang='ts' setup>
import AMapLoader from "@amap/amap-jsapi-loader";
import "@amap/amap-jsapi-types";
import { getAssetsImages } from "../utils/getImage"
import { useStore } from "../index/store"
import { getCurrentInstance } from "vue";

const mapStore = useStore()

var geolocation: any;

var GetCurrentPos: () => void;

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

            mapStore.$state = {
                Map: new AMap.Map("container", {
                    //设置地图容器id
                    viewMode: "3D", //是否为3D地图模式
                    terrain: true,
                    zooms: [2, 23],
                    pitch: 30,
                    jogEnable: true,
                    animateEnable: true,
                    zoom: 10, //初始化地图级别
                    center: [111.274722, 30.738333], //初始化地图中心点位置
                    layers: [
                        googleLayer,
                    ],
                }),

                Overlays: new AMap.OverlayGroup(),

                Icon: new AMap.Icon({
                    size: new AMap.Size(40, 50),
                    image: getAssetsImages('locate.png'),
                    imageSize: new AMap.Size(40, 50)
                }),

                IconSelect: new AMap.Icon({
                    size: new AMap.Size(40, 50),
                    image: getAssetsImages('locate-select.png'),
                    imageSize: new AMap.Size(40, 50)
                }),

                CurrentPos: [0, 0]
            }

            //添加插件
            AMap.plugin(["AMap.Scale", "AMap.Geolocation"], function () {
                //异步同时加载多个插件
                mapStore.Map.addControl(new AMap.Scale({
                    position: { right: '3px', bottom: '7px' }
                })); //显示当前地图中心的比例尺

                geolocation = new AMap.Geolocation({
                    // 是否使用高精度定位，默认：true
                    enableHighAccuracy: true,
                    // 设置定位超时时间，默认：无穷大
                    timeout: 10000,
                    // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
                    buttonOffset: new AMap.Pixel(10, 20),
                    //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                    zoomToAccuracy: true,
                    //  定位按钮的排放位置,  RB表示右下
                    buttonPosition: 'RB'
                })

                AMap.Event.addListener(geolocation, 'complete', onComplete)
                AMap.Event.addListener(geolocation, 'error', onError)

                GetCurrentPos = () => {
                    geolocation.getCurrentPosition()
                }


                function onComplete(data: any) {
                    // data是具体的定位信息
                    console.log('当前位置:', data.position);
                    mapStore.CurrentPos = [data.position.lng, data.position.lat]
                    mapStore.Map.setZoomAndCenter(19, mapStore.CurrentPos, false)
                }

                function onError(data: any) {
                    // 定位出错
                    console.log(data);
                }
            });

            //var path: any[] = []

            mapStore.Map.on('click', function (e: any) {

                console.log([e.lnglat.lng, e.lnglat.lat]);
                // path.push([e.lnglat.lng, e.lnglat.lat])
                // console.log(path)
            })

        }).catch((e) => {
            console.error(e);  //加载错误提示
        });
}

const instance = getCurrentInstance()

instance?.proxy?.$Bus.on('GetCP', () => {
    GetCurrentPos()
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
