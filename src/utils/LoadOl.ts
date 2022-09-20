import { Routes } from "../index/routeindex";
import { RouteSpots } from "../index/spotIndex";
import { getAssetsImages } from './getImage'

function LoadOL(routeName: string, Overlays: AMap.OverlayGroup): AMap.OverlayGroup {
    var Loaded: AMap.OverlayGroup = new AMap.OverlayGroup();
    var i = Overlays.getOverlays.length;
    //从RouteSpots中导入POI数据
    RouteSpots[routeName].forEach((s) => {
        let marker: AMap.Marker = new AMap.Marker({
            icon: undefined, // 自定义点标记
            position: [s.lon, s.lat], // 基点位置
            anchor: 'bottom-left', // 设置锚点方位
            extData: {
                id: i++,
                name: s.sspot,
                type: 'point',
                lnglat: [s.lon, s.lat],
                img: getAssetsImages(s.path),
                author: s.author,
                desc: s.desc,
                date: s.sdate,
                del: () => {},
                onAcive: () => {},
                onPassive: () => {},
                focusOn: () => {},
                edit: () => {}
            }
        })
        Overlays.addOverlay(marker)
        Loaded.addOverlay(marker)
    })

    let polyline: AMap.Polyline = new AMap.Polyline({
        path: Routes[routeName].path,            // 设置线覆盖物路径
        showDir: true,
        strokeColor: '#3366bb',   // 线颜色
        strokeWeight: 10,          // 线宽
        lineJoin: 'round',
        lineCap: 'round',
        extData: {
            id: i++,
            name: Routes[routeName].desc,
            type: 'polyline',
            lnglat: Routes[routeName].path[0],
            desc: Routes[routeName].desc,
            del: () => {},
            onAcive: () => {},
            onPassive: () => {},
            focusOn: () => {},
        }
    })
    Overlays.addOverlay(polyline)
    Loaded.addOverlay(polyline)

    return Loaded
}

export { LoadOL }