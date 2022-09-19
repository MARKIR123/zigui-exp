import getAssetsImages from "./getImage"
import "@amap/amap-jsapi-types";
import AMapLoader from "@amap/amap-jsapi-loader";
import { RouteSpots } from "../index/spotIndex";

// function ContextMenu (map: AMap.ContextMenu) {

// }

function drawSpots(name: any, map: AMap.Map, overlays: AMap.OverlayGroup, icon: any, iconselect: any) {
    let spotList: Array<any> = RouteSpots[name]
    let markers: Array<AMap.Marker> = [];
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
                }
            });

            // 设置鼠标划过点标记显示的文字提示
            marker.setTitle(sspot);

            let infoWindow = new AMap.InfoWindow({
                anchor: 'middle-right',
                autoMove: false,
                closeWhenClickMap: true
            });

            infoWindow.setContent(
                `<div style="overflow: visible; width: 600px;height:min-content;background-color:#FFFFFF; border-radius: 30px;padding: 6px 0px 6px 0px;">
                <p style="padding-left: 2rem;font-size: 32px;font-family: 'Microsoft JhengHei'">${sspot}</p>
                <p style="padding-left: 2rem;font-size: 16px;font-family: 'Microsoft JhengHei';color: #424242">By  ${author}</p>
                <div>
                    <img src=${url} style="margin-left: -6px;margin-right: -6px;"  width="612"/>
                </div>
                <p style="padding-left: 2rem;font-size: 16px;font-family: 'Microsoft JhengHei'"">${desc}</p>
            </div>`
            );

            marker.on('mouseover', function () {
                marker.setIcon(iconselect)
                infoWindow.open(map, coord)
            })

            marker.on('mouseout', function () {
                marker.setIcon(icon)
                infoWindow.close(map)
            })

            marker.on('rightclick', function (e: any) {
                let spotMenu: AMap.ContextMenu = new AMap.ContextMenu({
                    isCustom: true,
                    
                    // content: "<div class='v-card v-theme--light v-card--density-default v-card--variant-elevated' style='max-width: 64px;'><!---->\
                    // <div class='v-card__loader'><div class='v-progress-linear v-theme--light' role='progressbar' aria-valuemin='0' aria-valuemax='100' style='height: 0px; --v-progress-linear-height:2px;'><!---->\
                    // <div class='v-progress-linear__background' style='width: 100%;'></div><div class='v-progress-linear__indeterminate'><div class='v-progress-linear__indeterminate long'></div><div class='v-progress-linear__indeterminate short'></div></div><!----></div></div><!----><!---->\
                    // <button onclick='del()' type='button' class='v-btn v-btn--elevated v-theme--light v-btn--density-default v-btn--size-default v-btn--variant-elevated'><span class='v-btn__overlay'></span><span class='v-btn__underlay'></span><!----><span class='v-btn__content' data-no-activator=''> delete </span><!----><!---->\
                    // </button><button type='button' class='v-btn v-btn--elevated v-theme--light v-btn--density-default v-btn--size-default v-btn--variant-elevated'><span class='v-btn__overlay'></span><span class='v-btn__underlay'></span><!----><span class='v-btn__content' data-no-activator=''> edit </span><!----><!----></button><!----><!----><span class=/v-card__underlay/></span></div>"
                });

                spotMenu.addItem("删除", function () {
                    marker.remove()
                    overlays.removeOverlay(marker)
                    spotMenu.close()
                }, 1)

                spotMenu.open(map, e.lnglat);
            });

            marker.setExtData({
                type: 'point',
                id: i++,
                name: sspot,
                lnglat: coord,
                desc: desc,
                del: () => {
                    marker.remove()
                },
                onActive: () => {
                    marker.setIcon(iconselect)
                    infoWindow.open(map, coord)
                },
                onPassive: () => {
                    marker.setIcon(icon)
                    infoWindow.close(map, coord)
                }
            })

            markers.push(marker)
            overlays.addOverlay(marker)
            map.add(marker)
        }
        map.setFitView(markers, false, [50, 50, 50, 50])
    })
}

export default { drawSpots }