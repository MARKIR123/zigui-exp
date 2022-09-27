import AMapLoader from "@amap/amap-jsapi-loader";
import "@amap/amap-jsapi-types";
import { setActivePinia } from "pinia";
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

class Photo {
    img: string = '';
    author: string = '';
    date: string = '';
    constructor(img: string, author: string, date: string) {
        this.img = getAssetsImages(img);
        this.author = author;
        this.date = date;
    }

    setPhoto(img: string) {
        this.img = getAssetsImages(img)
    }
}

class InfoWindow {
    window: AMap.InfoWindow = {} as AMap.InfoWindow;
    name: string = '';
    photo: Photo = {} as Photo;
    desc: string = '';

    constructor(name: string = '', img: string = '', date: string = '', author: string = '', desc: string = '') {
        this.name = name;
        this.photo = new Photo(img, date, author)
        this.desc = desc;
        this.window = new AMap.InfoWindow({
            anchor: 'middle-right',
            autoMove: false,
            closeWhenClickMap: true
        })
        this.window.setContent();
    }

    //设置InfoWindow位置
    setPosition(pos: [number, number]) {
        this.window.setPosition(pos);
    }

    //设置InfoWindow内容
    setContent(name: string = this.name, img: string = this.photo.img, date: string = this.photo.date, author: string = this.photo.author, desc: string = this.desc) {
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

export class Spot {
    marker: AMap.Marker = {} as AMap.Marker;
    id: number = 0;
    type: string = 'Spot';
    lnglat: [number, number] = [0, 0];
    infowindow: InfoWindow = {} as InfoWindow;
    icon: AMap.Icon = {} as AMap.Icon;
    iconSelect: AMap.Icon = {} as AMap.Icon;

    constructor(id: number = 0, name: string = '', lnglat: [number, number] = [0, 0], img: string = '', date: string = '', author: string = '', desc: string = '', icon: AMap.Icon, iconselect: AMap.Icon) {
        this.id = id;
        this.lnglat = lnglat;
        this.infowindow = new InfoWindow(name, img, date, author, desc)
        this.icon = icon;
        this.iconSelect = iconselect;
        this.marker = new AMap.Marker({
            icon: icon, // 自定义点标记
            position: lnglat, // 基点位置
            anchor: 'bottom-left', // 设置锚点方位
        })
    }

    //设置Marker Icon
    setIcon(icon: AMap.Icon = this.icon) {
        this.marker.setIcon(icon)
    }

    //Active
    setActive(map: AMap.Map) {
        this.setIcon(this.iconSelect);
        this.infowindow.open(map, this.lnglat)
    }

    //Normal
    setNormal() {
        this.setIcon(this.icon);
        this.infowindow.close()
    }

    //设定位置
    setPosition(pos: [number, number]) {
        this.lnglat = pos;
        this.marker.setPosition(pos);
    }

    //聚焦
    focus(map: AMap.Map, zoom: number) {
        map.setZoomAndCenter(zoom, this.lnglat, false)
    }

    delete() {
        this.marker.remove();
    }
}

class Textmark {

}

export class Route {
    id: number = 0;
    type: string = 'Route';
    name: string = '';
    line: AMap.Polyline = {} as AMap.Polyline;
    path: Array<[number, number]> = [];
    desc: string = '';
    style: AMap.PolylineOptions = {} as AMap.PolylineOptions;
    astyle: AMap.PolylineOptions = {} as AMap.PolylineOptions;

    constructor(id: number = 0, name: string = '', path: Array<[number, number]> = [], desc: string = '', style: AMap.PolylineOptions, astyle: AMap.PolylineOptions) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.style = style;
        this.astyle = astyle;
        this.line = new AMap.Polyline({
            path: path,
        })
        this.line.setOptions(style);
    }

    //设置Route样式
    setStyle(style: AMap.PolylineOptions = this.style) {
        this.line.setOptions(style);
    }

    //Active
    setActive() {
        this.setStyle(this.astyle);
    }

    //Normal
    setNormal() {
        this.setStyle();
    }
}