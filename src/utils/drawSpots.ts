import getAssetsImages from "./getImage"
import "@amap/amap-jsapi-types";
import AMapLoader from "@amap/amap-jsapi-loader";
import { RouteSpots } from "../index/spotIndex";

var markers: Array<AMap.Marker> = [];

function drawSpots(name: any, map: any, overlays: AMap.OverlayGroup, icon: any, iconselect: any) {
    let spotList: Array<any> = RouteSpots[name]
    AMapLoader.load({
        key: "222fee29d8f3e925028190154bfb717d", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    }).then((AMap) => {
        let i = 0
        for (let spot of spotList) {
            let coord = [spot.lon, spot.lat];
            let sspot = spot.sspot;
            let sdate = spot.sdate;
            let author = spot.author;
            let desc = spot.desc;
            let path = spot.path;
            let url = getAssetsImages.getAssetsImages(path)

            let marker: AMap.Marker = new AMap.Marker({
                icon: icon, // 自定义点标记
                position: coord, // 基点位置
                anchor: 'bottom-left', // 设置锚点方位
                extData: {
                    type: 'point',
                    id: i++,
                    name: sspot,
                    lnglat: coord,
                    desc: ''
                }
            });

            // 设置鼠标划过点标记显示的文字提示
            marker.setTitle(sspot);

            let infoWindow = new AMap.InfoWindow({
                anchor: 'middle-right',
                autoMove: false,
                closeWhenClickMap: true
            });

            marker.on('mouseover', function () {
                infoWindow.setContent(
                    `<img src=${url} width='350' height='250' >\
                <div>\
                    <p>拍摄地点: ${sspot}</p>\
                    <p>拍摄时间: ${sdate}</p>\
                    <p>拍摄者: ${author}</p>\
                    <p>描述: ${desc}</p>\
                </div>\
                `
                );
                marker.setIcon(iconselect)
                infoWindow.open(map, coord)
            })

            marker.on('mouseout', function () {
                marker.setIcon(icon)
                infoWindow.close(map, coord)
            })

            marker.on('rightclick', function (e: any) {
                let spotMenu: AMap.ContextMenu = new AMap.ContextMenu({
                    isCustom: true,
                });
    
                spotMenu.addItem("删除", function() {
                    marker.remove()
                    overlays.removeOverlay(marker)
                    spotMenu.close()
                }, 1)

                spotMenu.addItem("编辑", function() {
                    spotMenu.close()
                }, 2)
                spotMenu.open(map, e.lnglat);   
            });

            markers.push(marker)
            overlays.addOverlay(marker)
        }
        map.add(markers)
        map.setFitView(markers, false, [50, 50, 50, 50])
    })
}

export default { drawSpots }