import "@amap/amap-jsapi-types";
import AMapLoader from "@amap/amap-jsapi-loader";

function drawSpot(marker: AMap.Marker, overlays: AMap.OverlayGroup, map:AMap.Map, icon: AMap.Icon, iconselect: AMap.Icon) {
    AMapLoader.load({
        key: "222fee29d8f3e925028190154bfb717d", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    }).then((AMap) => {
        // 设置鼠标划过点标记显示的文字提示
        marker.setTitle(marker.getExtData().name);
        marker.setIcon(icon)

        let infoWindow = new AMap.InfoWindow({
            anchor: 'middle-right',
            autoMove: false,
            closeWhenClickMap: true
        });

        function infowinCon(sspot_: string = marker.getExtData().name, author_: string = marker.getExtData().author as string, sdate_: string = marker.getExtData().date as string, desc_: string = marker.getExtData().desc as string, url_: string = marker.getExtData().img as string) {
            infoWindow.setContent(
                `<div style="overflow: visible; width: 600px;height:min-content;background-color:#FFFFFF; border-radius: 30px;padding: 6px 0px 6px 0px;">
                    <p style="padding-left: 2rem;font-size: 32px;font-family: 'Microsoft JhengHei'">${sspot_}</p>
                    <p style="padding-left: 2rem;font-size: 16px;font-family: 'Microsoft JhengHei';color: #424242">By  ${author_} ${sdate_}</p>
                    <div>
                        <img src=${url_} style="margin-left: -6px;margin-right: -6px;"  width="612"/>
                    </div>
                    <p style="padding-left: 2rem;font-size: 16px;font-family: 'Microsoft JhengHei'"">${desc_}</p>
                </div>`
            );
        }

        infowinCon()

        marker.getExtData().del = () => {
            overlays.removeOverlay(marker)
            marker.remove()
        }

        marker.getExtData().onActive = () => {
            marker.setIcon(iconselect)
            infoWindow.open(map, marker.getExtData().lnglat)
        }

        marker.getExtData().onPassive = () => {
            marker.setIcon(icon)
            infoWindow.close(map)
        }

        marker.getExtData().onFocus = (zoom: number) => {
            map.setZoomAndCenter(zoom, [(marker.getExtData().lnglat as [number, number])[0] - 0.002, (marker.getExtData().lnglat as [number, number])[1]])
        }

        marker.on('mouseover', function () {
            marker.getExtData().onActive()
        })

        marker.on('mouseout', function () {
            marker.getExtData().onPassive()
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
                marker.getExtData().del()
                spotMenu.close()
            }, 1)
            spotMenu.addItem("编辑", function () {
                // marker.getExtData().focusOn()
                infowinCon('1', '1', '1', '1')

                spotMenu.close()
            }, 1)

            spotMenu.open(map, [(marker.getPosition() as AMap.LngLat).lng, (marker.getPosition() as AMap.LngLat).lat]);
        });

        map.add(marker)
    })
}

export { drawSpot }