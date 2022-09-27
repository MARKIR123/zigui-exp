import { Routes } from "../index/routeindex";
import { RouteSpots } from "../index/spotIndex";
import { Spot, Route } from "./type"

function LoadSpots(routeName: string, Overlays: Array<Spot | Route>, icon: AMap.Icon, iconselect: AMap.Icon, map: AMap.Map): Array<Spot> {
    var Loaded: Array<Spot> = [];
    var i = Overlays.length;
    //从RouteSpots中导入POI数据
    RouteSpots[routeName].forEach((s) => {
        let spot = new Spot(i, s.sspot, [s.lon, s.lat], s.path, s.sdate, s.author, s.desc, icon, iconselect);
        
        Overlays.push(spot)
        Loaded.push(spot)
        map.add(spot.marker)
    })
    return Loaded
}

function LoadRoute(routeName: string, Overlays: Array<Spot | Route>, style: AMap.PolylineOptions, astyle: AMap.PolylineOptions, map: AMap.Map) {
    var i = Overlays.length;
    let route = new Route(i, Routes[routeName].desc, Routes[routeName].path, Routes[routeName].desc, style, astyle)

    Overlays.push(route)
    map.add(route.line)
    return route
}

export { LoadSpots, LoadRoute }