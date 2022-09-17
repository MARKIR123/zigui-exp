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

let RouteSpots: { [key: string]: Array<Spot> } = {
    'sanxia': SanxiaSpots,
}

export { RouteSpots }

