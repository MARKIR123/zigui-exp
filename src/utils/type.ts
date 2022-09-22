import AMapLoader from "@amap/amap-jsapi-loader";
import "@amap/amap-jsapi-types";
import { getAssetsImages } from './getImage'

type extData = {
    type: string,
    name: string,
    lnglat?: [number, number],
    id: number,
    author?: string,
    img?: string,
    date?: string,
    desc?: string,
    path?: Array<[number, number]>,
    del: () => void,
    onActive: () => void,
    onPassive: () => void,
    onFocus: (zoom: number) => void,
    onEdit: (name: string) => void
}

class InfoWindow {
    window: AMap.InfoWindow = {} as AMap.InfoWindow;
    name: string = '';
    img: string = '';
    date: string = '';
    author: string = '';
    desc: string = '';

    constructor(name: string = '', img: string = '', date: string = '', author: string = '', desc: string = '') {
        var w = this
        AMapLoader.load({
            key: "222fee29d8f3e925028190154bfb717d", // 申请好的Web端开发者Key，首次调用 load 时必填
            version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            Loca: {                // 是否加载 Loca， 缺省不加载
                "version": '2.0.0',  // Loca 版本，缺省 1.3.2
            },
        }).then((AMap) => {
            w.window = new AMap.InfoWindow({
                anchor: 'middle-right',
                autoMove: false,
                closeWhenClickMap: true
            });
            w.window.setContent();
            w.name = name;
            w.img = getAssetsImages(img);
            w.date = date;
            w.author = author;
            w.desc = desc;
        })
    }

    //设置InfoWindow位置
    setPosition(pos: [number, number]) {
        this.window.setPosition(pos);
    }

    //设置InfoWindow内容
    setContent(name: string = this.name, img: string = this.img, date: string = this.date, author: string = this.author, desc: string = this.desc) {
        this.window.setContent((
            `<div style="overflow: visible; width: 600px;height:min-content;background-color:#FFFFFF; border-radius: 30px;padding: 6px 0px 6px 0px;">
                <p style="padding-left: 2rem;font-size: 32px;font-family: 'Microsoft JhengHei'">${name}</p>
                <p style="padding-left: 2rem;font-size: 16px;font-family: 'Microsoft JhengHei';color: #424242">By  ${author}    ${date}</p>
                <div>
                    <img src=${img} style="margin-left: -6px;margin-right: -6px;"  width="612"/>
                </div>
                <p style="padding-left: 2rem;font-size: 16px;font-family: 'Microsoft JhengHei'"">${desc}</p>
            </div>`
        ));
    }

    //设置打开关闭
    open(map: AMap.Map, pos: [number, number]) {
        this.window.open(map, pos)
    }

    close() {
        this.window.close()
    }
}

class Spot {
    marker: AMap.Marker = {} as AMap.Marker;
    id: number = 0;
    name: string = '';
    img: string = '';
    date: string = '';
    author: string = '';
    desc: string = '';

    constructor(id: number = 0, name: string = '', img: string = '', date: string = '', author: string = '', desc: string = '', icon: AMap.Icon, iconselect: AMap.Icon) {
        var w = this
        AMapLoader.load({
            key: "222fee29d8f3e925028190154bfb717d", // 申请好的Web端开发者Key，首次调用 load 时必填
            version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            Loca: {                // 是否加载 Loca， 缺省不加载
                "version": '2.0.0',  // Loca 版本，缺省 1.3.2
            },
        }).then((AMap) => {
            w.marker = new AMap.InfoWindow({
                anchor: 'middle-right',
                autoMove: false,
                closeWhenClickMap: true
            });
            w.id = id;
            w.name = name;
            w.img = getAssetsImages(img);
            w.date = date;
            w.author = author;
            w.desc = desc;
        })
    }
}

class Route {

}

export type { Spot, Route, InfoWindow }