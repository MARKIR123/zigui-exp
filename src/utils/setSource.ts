import AMapLoader from "@amap/amap-jsapi-loader";

function setLayer(layern: any, map: any) {
    AMapLoader.load({
        key: "222fee29d8f3e925028190154bfb717d", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    }).then((AMap) => {
        if (layern == 'Google Satellite'){
            var layer = new AMap.TileLayer({
                getTileUrl: `http://mt{1,2,3,0}.google.cn/vt/lyrs=s@142&hl=zh-CN&gl=cn&x=[x]&y=[y]&z=[z]&s=Galil`,
                zIndex: 2
            });
        }
        else if (layern == 'Google Map'){
            var layer = new AMap.TileLayer({
                getTileUrl: `http://mt{1,2,3,0}.google.cn/vt/lyrs=y@142&hl=zh-CN&gl=cn&x=[x]&y=[y]&z=[z]&s=Galil`,
                zIndex: 2
            });
        }
        else if (layern == 'Google Terrain'){
            var layer = new AMap.TileLayer({
                getTileUrl: `http://mt{1,2,3,0}.google.cn/vt/lyrs=t@142&hl=zh-CN&gl=cn&x=[x]&y=[y]&z=[z]&s=Galil`,
                zIndex: 2
            });
        }
        else if (layern == 'Gaode Map'){
            var layer = new AMap.TileLayer();
        }
        else if (layern == 'Gaode Satellite'){
            var layer = new AMap.TileLayer.Satellite();
        }

        console.log("set layer", layern);
        
        map.setLayers([layer])
    })
}

export default { setLayer }