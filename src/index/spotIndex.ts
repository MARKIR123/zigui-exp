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
    { path: 'sanxia/rukou.jpg', sspot: '三峡公园入口', sdate: '2022.8.30', lon: 111.025838, lat: 30.830783, author: '刘劼', desc:'三峡大坝旅游区，占15.28平方公里，目前对游客开放的有三个观景点：坛子岭、185平台、截流纪念园。' },
    { path: 'sanxia/sanjifuti.jpg', sspot: '三峡大坝入口三级扶梯', sdate: '2022.8.30', lon: 111.024937, lat: 30.831637, author: '刘劼', desc: '从入口乘坐三级扶梯到达三峡坛子岭公园，从上可以俯瞰三峡大坝的五级船闸'},
    { path: 'sanxia/tanzilin.jpg', sspot: '坛子岭', sdate: '2022.8.30', lon: 111.024931, lat: 30.832463, author: '刘劼', desc:'因其顶端观景台形似一个倒扣的坛子而得名，该景区所在地为大坝建设勘测点，海拔262.48米，是观赏三峡工程全景的位置，不仅仅能欣赏到三峡大坝的雄浑壮伟，还能观看壁立干仞的“长江第四峡”双向五级船闸。整个园区以高度的递增从上至下分为三层，主要由模型展示厅、万年江底石、大江截流石、三峡坝址基石、银版天书及坛子岭观景台等景观，还有壮观的喷泉、秀美的瀑布、蜿蜒的溪水翠绿的草坪贯穿其间，放眼望去，静中有动，动中有静仿佛置身于美妙的乐园。' },
    { path: 'sanxia/chuanzhaplatform.jpg', sspot: '船闸观景平台', sdate: '2022.8.30', lon: 111.021542, lat: 30.834398, author: '胡哲', desc: '从这可以近距离观看三峡大坝五级船闸' },
    { path: 'sanxia/185.jpg', sspot: '三峡大坝185观景平台', sdate: '2022.8.30', lon: 111.017544, lat: 30.830339, author: '胡哲', desc: '185观景点位于三峡大坝坝顶公路的左岸端口处，因与三峡坝顶齐高，同为海拔185米而得名。站在平台上向下俯看，就如同身临坝顶，可以近距离感受大坝雄姿，同时领略高峡出平湖的壮丽景观' },
    { path: 'sanxia/wujichuanzha.jpg', sspot: '三峡五级船闸', sdate: '2022.8.30', lon: 111.033605, lat: 30.831248, author: '胡哲', desc: '三峡双线五级船闸，规模举世无双，是世界上第二大的船闸。它全长6.4公里，其中船闸主体部分1.6公里，引航道4.8公里。三峡大坝坝前正常蓄水位为海拔175米高程，而坝下通航最低水位62米高程，这就是说，船闸上下落差达113米，船舶通过船闸要翻越40层楼房的高度。已入选中国世界纪录协会世界第二大的船闸世界纪录。' },
    { path: 'sanxia/jieliurukou.jpg', sspot: '截流纪念园', sdate: '2022.8.30', lon: 111.025903, lat: 30.812121, author: '刘劼', desc:'这里曾是“心连心”艺术团演出过的地方。如今，在规划者的精心打造下，曾经荒芜一片的地方已经焕然一新，成为了截流纪念园的观景门户。背倚青山，面朝大坝，在领略三峡自然风光的同时，还可以享受到巍巍大坝的雄伟壮阔，及大坝泄洪时的荡气回肠。' },
    { path: 'sanxia/jieliuguangchang.jpg', sspot: '截流纪念园广场', sdate: '2022.8.30', lon: 111.022593, lat: 30.812588, author: '刘劼', desc: '截流纪念广场正对三峡大坝，从这可以获得最佳的拍摄视野' }
]

let ZhongjiachongSpots: Array<Spot> = [
    { path: 'zhangjiachong/jiancezhan.jpg', sspot: '张家冲水土流失监测站', sdate: '2022.8.31', lon: 110.964393, lat: 30.777775, author: '刘劼', desc: '降雨是影响区内水土流失的主要因素之一。流域下游汇流区设置径流泥沙观测站，以记录河水的每月携沙总量，并结合降雨资料，定量分析流域降雨量与水土流失量的关系' },
    { path: 'zhangjiachong/xiuxidian.jpg', sspot: '张家冲休息点', sdate: '2022.8.31', lon: 110.96305, lat: 30.780217, author: '刘劼', desc: '无' },
    { path: 'zhangjiachong/shiyantian.jpg', sspot: '张家冲水土流失治理试验田', sdate: '2022.8.31', lon: 110.963169, lat: 30.779521, author: '刘劼', desc: '研究土地利用类型对区内水土流失的影响。自左至右依次为石坎梯田玉米小区、土坎梯田柑橘小区、土坎柑橘小区、坡篱柑橘小区、坡篱茶小区、坡篱柑橘小区、坡篱玉米小区、坡地茶小区、坡地柑橘小区和荒坡地小区。' },
    { path: 'zhangjiachong/minbaozhan.jpg', sspot: '民爆站', sdate: '2022.8.31', lon: 110.949631, lat: 30.76774, author: '刘劼', desc: '无' },
    { path: 'zhangjiachong/gangou.jpg', sspot: '干沟', sdate: '2022.8.31', lon: 110.948073, lat: 30.768518, author: '刘劼', desc: '无' },
    { path: 'zhangjiachong/doushantuo.jpg', sspot: '陡山沱组岩层', sdate: '2022.8.31', lon: 110.941298, lat: 30.756202, author: '刘劼', desc: '陡山沱组原称“陡山沱层”，属中国南方震旦系上统中部,以黑色页岩、泥岩、泥灰岩、砂页岩等为主。个别地区顶部含磷块岩，部分地区底部以碳酸盐为主,命名剖面位于湖北宜昌县莲沱镇大桥东端之山坡，参考剖面位于宜昌县三斗坪镇田家园子。' },
    { path: 'zhangjiachong/riyuedong.jpg', sspot: '泗溪河流侵蚀地貌观察', sdate: '2022.8.31', lon: 110.939705, lat: 30.75554, author: '刘劼', desc: '泗溪原本是条地下河，河水在地下流淌，上面有厚厚的岩层覆盖，岩层中发育不少垂直的落水洞，像天窗一样联通地表和地下河。随着溶蚀作用和坍塌的进行，落水洞逐渐扩大成为天坑，数个天坑串联，最终让泗溪从地下河变成了普通的地表河流' },

]

let SixigongyuanSpots: Array<Spot> = [
    { path: 'sixigongyuan/mengkou.jpg', sspot: '泗溪公园门口', sdate: '2022.9.4', lon: 110.914819, lat: 30.7219, author: '蔡昀江', desc:'三峡竹海生态风景区，地处长江南岸，距长江三峡大坝坝址和秭归县城12公里' },
    { path: 'sixigongyuan/zuhaijingguan.jpg', sspot: '泗溪公园竹海景观', sdate: '2022.9.4', lon:110.914427, lat: 30.720613, author: '蔡昀江', desc:'三峡竹海内有翠竹万亩，名竹三百，沿溪沿路，漫山遍野，有风拂过，竹浪如海，因以为名。远者苍翠连绵、近者竹横笛竖萧，如诗意画卷，美不胜收。景观：养生在竹海，畅游其中，犹如置身世外，空气清新，令人神清气爽。' },
    { path: 'sixigongyuan/jingguan.jpg', sspot: '泗溪公园景观', sdate: '2022.9.4', lon: 110.91382, lat: 30.720015, author: '蔡昀江', desc:'无' },
    { path: 'sixigongyuan/yuxiaoqiao.jpg', sspot: '泗溪公园玉箫桥', sdate: '2022.9.4', lon: 110.91382, lat: 30.720015, author: '蔡昀江', desc:'客醉倚河桥，清光愁玉箫。' },
    { path: 'sixigongyuan/caiyuanpu.jpg', sspot: '泗溪公园财源瀑', sdate: '2022.9.4', lon: 110.913371, lat: 30.719501, author: '蔡昀江', desc:'无' },
    { path: 'sixigongyuan/boliqiao.jpg', sspot: '泗溪公园玻璃桥', sdate: '2022.9.4', lon: 110.912239, lat: 30.712138, author: '胡哲', desc:'投资3000多万元开发,该玻璃天桥长320米，高140米，是湖北最惊险最刺激，体验感最好的玻璃天桥。' },
    { path: 'sixigongyuan/wudieshui.jpg', sspot: '五叠水瀑布', sdate: '2022.9.4', lon: 110.912155, lat: 30.711057, author: '胡哲', desc:'天挂五叠水，五级瀑布似天边直挂谷底，高达491米，是亚洲最高的瀑布。' },
    { path: 'sixigongyuan/sandieshui.jpg', sspot: '三叠水瀑布', sdate: '2022.9.4', lon: 110.910994, lat: 30.71016, author: '蔡昀江', desc:'圣水天上来，水似天上奔腾而下，却难以探明其源头' },
]

let quyuanSpots: Array<Spot> = [
    { path: 'quyuan/guangchang.jpg', sspot: '屈原祠广场', sdate: '2022.9.3', lon: 110.988446, lat: 30.825533, author: '胡哲', desc:'气势恢宏的屈原广场，中心圆的铺装采用经典凤纹纹样，恰好与主入口雏凤的主题相呼应;广场跌台边，设计有屈原生平和表现其作品意境的大型浮雕长卷，游人能直观地了解屈原的生平事迹和艺术成果。' },
    { path: 'quyuan/quyuancidamen.jpg', sspot: '屈原祠大门', sdate: '2022.9.3', lon: 110.990625, lat: 30.828606, author: '蔡昀江', desc:'门建筑风格独特，歇山重檐，三面牌楼，六柱五间，三级压顶。大门门储匾额上闪烁着“光争日月”四个金光灿灿的大字。山门色彩匠心独具，立柱土红色，墙面白色，屋面绿色琉璃瓦。山门两侧配房为硬山顶，滚龙背，面墙正中有一巨大圆弧浮雕，中饰“龙凤呈祥”图案。' },
    { path: 'quyuan/rukou.jpg', sspot: '屈原故里广场', sdate: '2022.9.3', lon: 110.985482, lat: 30.824673, author: '胡哲', desc:'雏凤广场地面的图案是凤尾。屈原大夫生活在战国时期的楚国，而楚人最为崇尚的就是凤凰。广场边的自然山体，是按凤身造型进行绿化的，整个凤身顺山体一直绵延向前，并与旅游区检票口凤头石雕相连，就形成了“雏凤展翅”的造型。其浪漫意境，寓意屈原在秭归诞生以及他在青少年时期就已蕴含在心中的远大抱负。'},
    { path: 'quyuan/gj.jpg', sspot: '屈原祠', sdate: '2022.9.3', lon: 110.987401, lat: 30.825609, author: '蔡昀江', desc:'屈原祠以屈原文化为统领，是三峡库区能够把物质文化遗产和非物质文化遗产保护利用并充分结合起来的重点区域，里面有山门、前殿、大殿、左右配房、屈原铜像、碑廊、展览大楼及衣冠冢等建筑物。' },
    { path: 'quyuan/hudie.jpg', sspot: '蝴蝶馆', sdate: '2022.9.3', lon: 110.991547, lat: 30.828484, author: '蔡昀江',desc:'三峡蝴蝶馆是三峡首家集蝴蝶标本及昆虫标本为一体的综合展馆。展馆以“蝴蝶”为主题，设蝶之最、蝶之彩、蝶之赞、蝶之密、蝶之赏等8个展厅，是面向大众普及中国蝶12科蝴蝶标本和三峡蝴蝶标本以及蝴蝶探密、世界蝴蝶之最、摄影作品等知识的园地。馆内布置共计12科、227类、2000多只蝴蝶标本，展出世界名蝶十余种，中国名蝶十几种，有许多属国家一二级保护动物，甚至有被国际濒危动物保护委员会列为K级的蝴蝶品种。' },
    { path: 'quyuan/piying.jpg', sspot: '蒙馆', sdate: '2022.9.3', lon: 110.990761, lat: 30.827882, author: '胡哲', desc:'原来称为郑万琅老屋。原址位于屈原镇桂林村。建筑坐南向北，四合院式布局，有前厅、正屋和厢房构成。建筑沿坡地逐渐升高，为砖木混合结构。厅屋三开间，为两层，一明两暗布置，内有皮影等诸多非物质文化遗产。' },
    { path: 'quyuan/jiangdumiao.jpg', sspot: '江渎庙', sdate: '2022.9.3', lon: 110.99133, lat: 30.828084, author: '胡哲', desc:'四大渎庙之首的江渎庙，是古代舟船主人专为祭祀长江渎神而修建，以求佑护平安。江、河、淮、济也指四大独流入海的河川神。该庙是目前我国四大渎庙中唯一保留下来的祭祀长江神的渎庙' },
    { path: 'quyuan/paifang.jpg', sspot: '屈原故里牌坊', sdate: '2022.9.3', lon: 110.990625, lat: 30.828606, author: '付龄', desc:'屈原故里牌坊原址位于归州镇古城东城门外300米处的洗马桥上。牌坊坐南朝北，为四柱三间三楼庑(wǔ)殿顶木结构，分别刻有“楚大夫屈原故里”、“汉昭君王嫱故里”楷书，落款是“大清光绪十二年正月吉日立”，即公元1886年建造，说明该牌坊距今已有130多年的历史。' },
]

let lianziyaSpots:Array<Spot> =[
    {path:'lianziya/rukou.jpg',sspot:'链子崖入口(青滩)',sdate:'2022.9.1',lon: 110.802687,lat: 30.930428,author:'蔡昀江',desc:'青滩、亦称“新滩”。解放以前，是长江三峡中最繁华的一个集镇，岩崩和滑坡，造成了长江巨滩，新滩便成了长江重要的转运港，新滩人通过了放滩、绞滩、领江、拉纤、商贸等生计，发展起来河铺子、饭馆、酒馆、茶馆、旅馆、手工业榨坊、磨坊、染坊、铁铺银坊等。通过恢复青滩吊脚楼、古民居、古作坊等，倾听峡江民歌，展现古代峡江居民的欢快的质朴生活和青滩古镇悠久的人文历史。'},
    {path:'lianziya/jisi.jpg',sspot:'链子崖祭坛',sdate:'2022.9.1',lon: 110.801892,lat: 30.930932,author:'蔡昀江',desc:'宏大祭地仪式和傩面舞蹈表演，把游客带到了洪荒的远古时代，进入至纯至净的幻花境地，穿越二千年的时空，演释万却不复的生命轮回。以神道、祭坛、图腾石柱为依托，通过火神化链、神道敬祖等表现形式，再现了古代三峡的楚俗民风。雄伟的图腾柱都是花岗岩雕刻而成，周围是苍龙、玄武、白虎、朱雀天然四象和二十八星宿，中间是一个中国最大的天灯。站在属于自己的星宿上放飞一个祈福的天灯，将心愿写在天灯上，随着天灯的冉冉升起，凝望星空便能实现心中美好的愿望。'},
    {path:'lianziya/guixiang.jpg',sspot:'归乡寺',sdate:'2022.9.1',lon: 110.800258,lat: 30.932737,author:'蔡昀江',desc:'归乡寺因纪念屈原归乡而得名，已经有2000多年历史了，经过重新恢复,有财神殿、顺星殿、观音殿,供人们祈福许愿。并且通过观看纪念屈原的大型招魂表演，感受屈原忧国忧民和为理想而献身的精神。'},
    {path:'lianziya/lianziya.jpg',sspot:'“链子崖”浮雕',sdate:'2022.9.1',lon: 110.798756,lat: 30.936101,author:'蔡昀江',desc:'"链子崖"三个红色字体刻在山上，远远看去好不威风。'},
    {path:'lianziya/diaoshen.jpg',sspot:'“奇怪的石头”',sdate:'2022.9.1',lon: 110.799114,lat: 30.935516,author:'刘劼',desc:'这块岩石受到江风的侵蚀，形成了一块顶部大于底部的风蚀蘑菇。'},
    {path:'lianziya/shanding.jpg',sspot:'链子崖山顶',sdate:'2022.9.1',lon: 110.797708,lat: 30.936407,author:'蔡昀江',desc:'链子崖海拔近千米，站在山顶，山顶的风吹拂而来，令人感受到一丝凉意。站在山顶平台远眺，滚滚长江、远处的群山丘陵、梯田和村庄映入眼帘，好似一幅美好的山水画。'},
]
let guancaiyanSpots:Array<Spot> =[
    {path:'guancaiyan/hegu.jpg',sspot:'高家溪河谷',sdate:'2022.9.1',lon: 111.023786,lat: 30.768798,author:'胡哲',desc:'河谷分布大量花岗岩岩石、含碳页岩、紫红色矿岩等。河道右侧的岩石为连沱组紫红色砂砾岩，河流的侵蚀作用较大，基岩为花岗岩并且已经裸露出来。'},
    {path:'guancaiyan/liantuozu.jpg',sspot:'莲沱组',sdate:'2022.9.1',lon: 111.025041,lat: 30.769563,author:'胡哲',desc:'该点为南沱组和陡山沱组的交界点，点东的南沱组岩石为灰绿色的冰渍砾岩，点西的陡山沱组岩石为灰白色的薄层状白云岩，称为盖帽白云岩。'},
    {path:'guancaiyan/guancaiyan.jpg',sspot:'棺材岩危岩体',sdate:'2022.9.5',lon: 111.043757,lat: 30.777876,author:'胡哲',desc:'棺材岩危岩体三面临空，岌岌可危，体积约14万m³，直接威胁坡下的居民生命安全。该危岩体是陡山沱组与灯影组接触，天然良好弱风化'},
    {path:'guancaiyan/wuhe.jpg',sspot:'雾河村平台',sdate:'2022.9.1',lon: 111.044845,lat: 30.777418,author:'蔡昀江',desc:'位于棺材岩危岩体旁，可看到陡山沱组与灯影组的接触关系'},
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

