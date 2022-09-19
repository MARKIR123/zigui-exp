import AMapLoader from "@amap/amap-jsapi-loader";
import { Routes } from "../index/routeindex"

function drawRoute(name: any, map: any, overlay: AMap.OverlayGroup) {
    AMapLoader.load({
        key: "222fee29d8f3e925028190154bfb717d", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    }).then((AMap) => {
        let routeline = new AMap.Polyline({
            path: Routes[name].path,            // 设置线覆盖物路径
            showDir: true,
            strokeColor: '#3366bb',   // 线颜色
            strokeWeight: 10,          // 线宽
            lineJoin: 'round',
            lineCap: 'round',
            extData: {
            }
        });

        let text = new AMap.Text({
            map: map,
            text: Routes[name].desc,
            offset: [3, -3],
            style: {
                'padding': '.5rem .5rem',
                'margin-bottom': '1rem',
                'border-radius': '.8rem',
                'background-color': '#3366bb',
                'width': '6rem',
                'border-width': '3px',
                'box-shadow': '0 2px 6px 0 rgba(114, 124, 245, .5)',
                'text-align': 'center',
                'font-size': '4px',
                'color': 'white',
                'opacity': 0.8
            }
        })

        text.hide()
        routeline.on('mouseover', function (e: any) {
            routeline.setOptions({
                isOutline: true,
                borderWeight: 3,
                outlineColor: '#FFFFFF',
                strokeOpacity: 0.8
            })
            text.setPosition([e.lnglat.lng, e.lnglat.lat])
            text.show()
        })

        routeline.on('mouseout', function (e: any) {
            routeline.setOptions({
                isOutline: false,
            })
            text.hide()
        })

        routeline.setExtData({
            type: 'polyline',
            id: 0,
            name: Routes[name].desc,
            lnglat: Routes[name].path[0],
            desc: Routes[name].desc,
            del: () => {
                routeline.remove()
            },
            onActive: () => {
                routeline.setOptions({
                    isOutline: true,
                    borderWeight: 3,
                    outlineColor: '#FFFFFF',
                    strokeOpacity: 0.8
                })
                text.setPosition(Routes[name].path[0])
                text.show()
            },
            onPassive: () => {
                routeline.setOptions({
                    isOutline: false,
                })
                text.hide()
            }
        })
        overlay.addOverlay(routeline)
        map.add(routeline);
    })
}

export default { drawRoute }