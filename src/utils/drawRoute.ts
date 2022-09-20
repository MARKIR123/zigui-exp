import AMapLoader from "@amap/amap-jsapi-loader";
import { extData } from "./type";

function drawRoute(polyline: AMap.Polyline, overlays: AMap.OverlayGroup, map: AMap.Map) {
    AMapLoader.load({
        key: "222fee29d8f3e925028190154bfb717d", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    }).then((AMap) => {
        polyline.getExtData.name

        let text = new AMap.Text({
            map: map,
            text: polyline.getExtData.name,
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

        polyline.on('mouseover', function (e: any) {
            polyline.setOptions({
                isOutline: true,
                borderWeight: 3,
                outlineColor: '#FFFFFF',
                strokeOpacity: 0.8
            })
            text.setPosition([e.lnglat.lng, e.lnglat.lat])
            text.show()
        })

        polyline.on('mouseout', function (e: any) {
            polyline.setOptions({
                isOutline: false,
            })
            text.hide()
        })

        polyline.getExtData().del = () => {
            polyline.remove()
            overlays.removeOverlay(polyline)
        }

        polyline.getExtData().onAcive = () => {
            polyline.setOptions({
                isOutline: true,
                borderWeight: 3,
                outlineColor: '#FFFFFF',
                strokeOpacity: 0.8
            })
            text.setPosition((polyline.getExtData().path as Array<[number, number]>)[0])
            text.show()
        }

        polyline.getExtData().onPassive = () => {
            polyline.setOptions({
                isOutline: false,
            })
            text.hide()
        }

        polyline.getExtData().onFocus = (zoom: number) => {
            map.setZoomAndCenter(zoom, (polyline.getExtData().path as Array<[number, number]>)[0])
        }

        map.add(polyline)
    })
}


export { drawRoute }