//import "@amap/amap-jsapi-types";
import { getAssetsImages } from './getImage'

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

    constructor(name: string = '', img: string = '', date: string = '', author: string = '', desc: string = '', map: AMap.Map, lnglat: [number, number]) {
        this.name = name;
        this.photo = new Photo(img, author, date)
        this.desc = desc;
        this.window = new AMap.InfoWindow({
            anchor: 'middle-right',
            autoMove: false,
            closeWhenClickMap: true
        })
        this.setContent();
    }

    //设置InfoWindow位置
    setPosition(pos: [number, number]) {
        this.window.setPosition(pos);
        return this;
    }

    //设置InfoWindow内容
    setContent(name: string = this.name, img: string = this.photo.img, date: string = this.photo.date, author: string = this.photo.author, desc: string = this.desc) {
        this.window.setContent((
            `<div id='InfoWindow' style="overflow: visible; width: 600px;height:min-content; border-radius: 30px;padding: 6px 0px 6px 0px;">
                <p style="padding-left: 2rem;font-size: 32px;font-family: 'Microsoft JhengHei'">${name}</p>
                <p style="padding-left: 2rem;font-size: 16px;font-family: 'Microsoft JhengHei'">By  ${author}    ${date}</p>
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
    show() {
        this.window.show()
    }
    hide() {
        this.window.hide()
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
    Onediting: boolean = false;

    constructor(id: number = 0, name: string = '', lnglat: [number, number] = [0, 0], img: string = '', date: string = '', author: string = '', desc: string = '', icon: AMap.Icon, iconselect: AMap.Icon, map: AMap.Map) {
        this.id = id;
        this.lnglat = lnglat;
        this.infowindow = new InfoWindow(name, img, date, author, desc, map, lnglat)
        this.icon = icon;
        this.iconSelect = iconselect;
        this.marker = new AMap.Marker({
            icon: icon, // 自定义点标记
            position: lnglat, // 基点位置
            anchor: 'bottom-left', // 设置锚点方位
            draggable: false,
        })
        this.addOverEvent(map);
        this.addOutEvent();
        this.addRightEvent();
        this.addDragEvent()
        map.add(this.marker)
    }

    //设置Marker Icon
    setIcon(icon: AMap.Icon = this.icon) {
        this.marker.setIcon(icon)
        return this
    }

    //Active
    setActive() {
        this.setIcon(this.iconSelect);
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
        this.setNormal();
        this.marker.remove();
    }

    //添加鼠标事件
    addOverEvent(map: AMap.Map) {
        this.marker.on('mouseover', () => {
            this.setActive()
            this.infowindow.open(map, this.lnglat)
        })
    }

    addOutEvent() {
        this.marker.on('mouseout', () => {
            this.setNormal();
        })
    }

    addRightEvent() {

    }

    addMoveEvent() {
        this.marker.on('mousemove', () => {

        })
    }

    addDragEvent() {
        this.marker.on('dragging', (e) => {
            this.setPosition(e.lnglat)
            console.log(this.marker.getPosition());
        })
    }

    onFocus(map: AMap.Map, zoom: number = 18) {
        map.setZoomAndCenter(zoom, [this.lnglat[0] - 0.002, this.lnglat[1]])
        this.setActive()
        this.infowindow.open(map, this.lnglat)
    }

    onEdit() {
        if (this.marker.getDraggable()) {
            this.marker.setDraggable(false)
            this.marker.off('dragstart', (e) => {

            })
            this.marker.off('dragging', (e) => {

            })
            this.marker.off('dragend', (e) => {

            })
        }
        else {
            this.marker.setDraggable(true)
            this.marker.on('dragstart', (e) => {

            })
            this.marker.on('dragging', (e) => {

            })
            this.marker.on('dragend', (e) => {
                this.setPosition(e.lnglat)
            })
        }
    }
}

class Textmark {
    content: string = '';
    text: AMap.Text = {} as AMap.Text;
    constructor(content: string, map: AMap.Map) {
        this.content = content;
        this.text = new AMap.Text({
            map: map,
            text: content,
            offset: [3, -3],
            style: {
                'padding': '.5rem .5rem',
                'margin-bottom': '1rem',
                'border-radius': '.8rem',
                'background-color': '#3366bb',
                'border-width': '3px',
                'box-shadow': '0 2px 6px 0 rgba(114, 124, 245, .5)',
                'text-align': 'center',
                'font-size': '4px',
                'color': 'white',
                'opacity': 0.8
            }
        })
    }
    setContent(name: string) {
        this.content = name;
        this.text.setText(name)
    }

    setPos(lnglat: [number, number]) {
        this.text.setPosition(lnglat)
        return this;
    }

    hide() {
        this.text.hide()
    }

    show() {
        this.text.show()
    }
}

export class Route {
    id: number = 0;
    type: string = 'Route';
    name: string = '';
    line: AMap.Polyline = {} as AMap.Polyline;
    textmarker: Textmark = {} as Textmark;
    path: Array<[number, number]> = [];
    desc: string = '';
    style: AMap.PolylineOptions = {} as AMap.PolylineOptions;
    astyle: AMap.PolylineOptions = {} as AMap.PolylineOptions;
    Onediting: boolean = false;

    constructor(id: number = 0, name: string = '', path: Array<[number, number]> = [], desc: string = '', style: AMap.PolylineOptions, astyle: AMap.PolylineOptions, map: AMap.Map) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.style = style;
        this.astyle = astyle;
        this.line = new AMap.Polyline({
            path: path,
        })
        this.textmarker = new Textmark(name, map)
        this.textmarker.hide();
        this.line.setOptions(style);
        this.addOverEvent();
        this.addOutEvent();
        this.addRightEvent();
        map.add(this.line)
    }

    //设置Route样式
    setStyle(style: AMap.PolylineOptions = this.style) {
        this.line.setOptions(style);
    }

    //Active
    setActive() {
        this.setStyle(this.astyle);
        this.textmarker.setPos([this.line.getPath()[0].lng, this.line.getPath()[0].lat]).show()
    }

    //Normal
    setNormal() {
        this.setStyle();
        this.textmarker.hide();
    }

    //添加鼠标事件
    addOverEvent() {
        this.line.on('mouseover', (e) => {
            this.setStyle(this.astyle);
            this.textmarker.setPos([e.lnglat.lng, e.lnglat.lat]).show()
        })
    }

    addOutEvent() {
        this.line.on('mouseout', () => {
            this.setNormal()
        })
    }

    addRightEvent() {

    }

    addPolyEditor() {
    }

    onFocus(map: AMap.Map, zoom: number = 18) {
        map.setZoomAndCenter(zoom, this.line.getPath()[0])
        this.setActive()
    }

    delete() {
        this.setNormal()
        this.line.remove()
    }

    onEdit(editor: any) {
        if (this.Onediting) {
            this.Onediting = false;
            this.addOutEvent();
            this.addOverEvent();
            editor.close()
        }
        else {
            this.Onediting = true;
            this.line.clearEvents();
            editor.setTarget(this.line)
            editor.open()
        }
    }
}