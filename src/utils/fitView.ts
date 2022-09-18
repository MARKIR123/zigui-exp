import "@amap/amap-jsapi-types";

function fitView(map: AMap.Map) {
    map.setFitView(map.getAllOverlays(), false,[50, 50, 50, 50])
}

export default { fitView }