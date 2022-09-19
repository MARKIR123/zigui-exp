import "@amap/amap-jsapi-types";

function fitView(map: AMap.Map) {
    map.setFitView(null, false,[50, 50, 50, 50])
}

export default { fitView }