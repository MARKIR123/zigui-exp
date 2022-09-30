import { Routes } from "../index/routeindex";
import { RouteSpots } from "../index/spotIndex";
import { Spot, Route } from "./type"

function LoadSpots(routeName: string, Overlays: Array<Spot | Route>, icon: AMap.Icon, iconselect: AMap.Icon, map: AMap.Map): Array<AMap.Marker> {
    var Loaded: Array<AMap.Marker> = [];
    //从RouteSpots中导入POI数据
    RouteSpots[routeName].forEach((s) => {
        let spot = new Spot(Overlays.length, s.sspot, [s.lon, s.lat], s.path, s.sdate, s.author, s.desc, icon, iconselect, map);
        
        Overlays.push(spot)
        Loaded.push(spot.marker)
    })
    return Loaded
}

function LoadRoute(routeName: string, Overlays: Array<Spot | Route>, style: AMap.PolylineOptions, astyle: AMap.PolylineOptions, map: AMap.Map): AMap.Polyline {
    var i = Overlays.length;
    let route = new Route(i, Routes[routeName].desc, Routes[routeName].path, Routes[routeName].desc, style, astyle, map)

    Overlays.push(route)
    return route.line
}

export { LoadSpots, LoadRoute }