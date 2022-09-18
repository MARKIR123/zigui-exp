interface Spot {
    path: string,
    sspot: string,
    sdate: string,
    lon: number,
    lat: number,
    author?: string,
    desc?: string
}

let SanxiaSpots: Array<Spot> = [
    { path: 'sanxia/rukou.jpg', sspot: '三峡公园入口', sdate: '2022.8.30', lon: 111.025838, lat: 30.830783, author: '刘劼' },
    { path: 'sanxia/sanjifuti.jpg', sspot: '三峡大坝入口三级扶梯', sdate: '2022.8.30', lon: 111.024937, lat: 30.831637, author: '刘劼' },
    { path: 'sanxia/tanzilin.jpg', sspot: '坛子岭', sdate: '2022.8.30', lon: 111.024931, lat: 30.832463, author: '刘劼' },
    { path: 'sanxia/chuanzhaplatform.jpg', sspot: '船闸观景平台', sdate: '2022.8.30', lon: 111.021542, lat: 30.834398, author: '胡哲' },
    { path: 'sanxia/185.jpg', sspot: '三峡大坝185观景平台', sdate: '2022.8.30', lon: 111.017544, lat: 30.830339, author: '胡哲' },
    { path: 'sanxia/wujichuanzha.jpg', sspot: '三峡五级船闸', sdate: '2022.8.30', lon: 111.033605, lat: 30.831248, author: '胡哲' },
    { path: 'sanxia/jieliurukou.jpg', sspot: '截流纪念园', sdate: '2022.8.30', lon: 111.025903, lat: 30.812121, author: '刘劼' },
    { path: 'sanxia/jieliuguangchang.jpg', sspot: '截流纪念园广场', sdate: '2022.8.30', lon: 111.022593, lat: 30.812588, author: '刘劼' }
]

let ZhongjiachongSpots: Array<Spot> = [
    { path: 'zhangjiachong/xiuxidian.jpg', sspot: '张家冲休息点', sdate: '2022.8.31', lon: 110.96305, lat: 30.780217, author: '刘劼' },
    { path: 'zhangjiachong/shiyantian.jpg', sspot: '张家冲水土流失治理试验田', sdate: '2022.8.31', lon: 110.963169, lat: 30.779521, author: '刘劼' },
    { path: 'zhangjiachong/minbaozhan.jpg', sspot: '民爆站', sdate: '2022.8.31', lon: 110.949631, lat: 30.76774, author: '刘劼' },
    { path: 'zhangjiachong/gangou.jpg', sspot: '干沟', sdate: '2022.8.31', lon: 110.948073, lat: 30.768518, author: '刘劼' },
    { path: 'zhangjiachong/doushantuo.jpg', sspot: '陡山沱组岩层', sdate: '2022.8.31', lon: 110.941298, lat: 30.756202, author: '刘劼' },
    { path: 'zhangjiachong/riyuedong.jpg', sspot: '泗溪河流侵蚀地貌观察', sdate: '2022.8.31', lon: 110.939705, lat: 30.75554, author: '刘劼' },
    { path: 'zhangjiachong/jiancezhan.jpg', sspot: '张家冲水土流失监测站', sdate: '2022.8.31', lon: 110.964393, lat: 30.777775, author: '刘劼' },
]

let SixigongyuanSpots: Array<Spot> = [
    { path: 'sixigongyuan/boliqiao.jpg', sspot: '泗溪公园玻璃桥', sdate: '2022.9.4', lon: 110.912239, lat: 30.712138, author: '蔡昀江' },
    { path: 'sixigongyuan/caiyuanpu.jpg', sspot: '泗溪公园财源瀑', sdate: '2022.9.4', lon: 110.913371, lat: 30.719501, author: '蔡昀江' },
    { path: 'sixigongyuan/jingguan.jpg', sspot: '泗溪公园景观', sdate: '2022.9.4', lon: 110.91382, lat: 30.720015, author: '蔡昀江' },
    { path: 'sixigongyuan/mengkou.jpg', sspot: '泗溪公园门口', sdate: '2022.9.4', lon: 110.914819, lat: 30.7219, author: '蔡昀江' },
    { path: 'sixigongyuan/sandieshui.jpg', sspot: '三叠水瀑布', sdate: '2022.9.4', lon: 110.910994, lat: 30.71016, author: '蔡昀江' },
    { path: 'sixigongyuan/tongqian.jpg', sspot: '泗溪公园铜钱石', sdate: '2022.9.4', lon: 110.913472, lat: 30.716554, author: '蔡昀江' },
    { path: 'sixigongyuan/wudieshui.jpg', sspot: '五叠水瀑布', sdate: '2022.9.4', lon: 110.912155, lat: 30.711057, author: '胡哲' },
    { path: 'sixigongyuan/yuxiaoqiao.jpg', sspot: '泗溪公园玉箫桥', sdate: '2022.9.4', lon: 110.91382, lat: 30.720015, author: '蔡昀江' },
    { path: 'sixigongyuan/zuhaijingguan.jpg', sspot: '泗溪公园竹海景观', sdate: '2022.9.4', lon:110.914427, lat: 30.720613, author: '蔡昀江' },
]

let quyuanSpots: Array<Spot> = [
    { path: 'quyuan/rukou.jpg', sspot: '屈原故里广场', sdate: '2022.9.3', lon: 110.985482, lat: 30.824673, author: '胡哲' },
    { path: 'quyuan/gj.jpg', sspot: '屈原祠', sdate: '2022.9.3', lon: 110.987401, lat: 30.825609, author: '蔡昀江' },
    { path: 'quyuan/hudie.jpg', sspot: '蝴蝶馆', sdate: '2022.9.3', lon: 110.991547, lat: 30.828484, author: '蔡昀江' },
    { path: 'quyuan/jiangdumiao.jpg', sspot: '江渎庙', sdate: '2022.9.3', lon: 110.99133, lat: 30.828084, author: '胡哲' },
    { path: 'quyuan/paifang.jpg', sspot: '屈原故里牌坊', sdate: '2022.9.3', lon: 110.990625, lat: 30.828606, author: '付龄' },
    { path: 'quyuan/quyuancidamen.jpg', sspot: '屈原祠大门', sdate: '2022.9.3', lon: 110.990625, lat: 30.828606, author: '蔡昀江' },
    { path: 'quyuan/guangchang.jpg', sspot: '屈原祠广场', sdate: '2022.9.3', lon: 110.988446, lat: 30.825533, author: '胡哲' },
    { path: 'quyuan/piying.jpg', sspot: '蒙馆', sdate: '2022.9.3', lon: 110.990761, lat: 30.827882, author: '胡哲' },
]

let lianziyaSpots:Array<Spot> =[
    {path:'lianziya/shanding.jpg',sspot:'链子崖山顶',sdate:'2022.9.1',lon: 110.797708,lat: 30.936407,author:'蔡昀江'},
    {path:'lianziya/rukou.jpg',sspot:'链子崖入口',sdate:'2022.9.1',lon: 110.802687,lat: 30.930428,author:'蔡昀江'},
    {path:'lianziya/guixiang.jpg',sspot:'归乡寺',sdate:'2022.9.1',lon: 110.800258,lat: 30.932737,author:'蔡昀江'},
    {path:'lianziya/jisi.jpg',sspot:'链子崖祭祀',sdate:'2022.9.1',lon: 110.801892,lat: 30.930932,author:'蔡昀江'},
    {path:'lianziya/lianziya.jpg',sspot:'“链子崖”浮雕',sdate:'2022.9.1',lon: 110.798756,lat: 30.936101,author:'蔡昀江'},
    {path:'lianziya/diaoshen.jpg',sspot:'“奇怪的石头”',sdate:'2022.9.1',lon: 110.799114,lat: 30.935516,author:'刘劼'},
]

let guancaiyanSpots:Array<Spot> =[
    {path:'guancaiyan/guancaiyan.jpg',sspot:'棺材岩危岩体',sdate:'2022.9.5',lon: 111.043757,lat: 30.777876,author:'胡哲'},
    {path:'guancaiyan/wuhe.jpg',sspot:'雾河村平台',sdate:'2022.9.1',lon: 111.044845,lat: 30.777418,author:'蔡昀江'},
    {path:'guancaiyan/hegu.jpg',sspot:'高家溪河谷',sdate:'2022.9.1',lon: 111.023786,lat: 30.768798,author:'胡哲'},
    {path:'guancaiyan/liantuo.jpg',sspot:'莲沱组',sdate:'2022.9.1',lon: 111.025041,lat: 30.769563,author:'胡哲'},
]


let RouteSpots: { [key: string]: Array<Spot> } = {
    'sanxia': SanxiaSpots,
    'zhangjiachong': ZhongjiachongSpots,
    'sixigongyuan': SixigongyuanSpots,
    'quyuan': quyuanSpots,
    'lianziya': lianziyaSpots,
    'guancaiyan': guancaiyanSpots
}

export { RouteSpots }

