interface Route {
    path: Array<[number, number]>,
    desc?: string
}

let sanxiaRoute: Route = {
    path: [[111.025833, 30.830802], [111.025659, 30.831073], [111.025331, 30.831354],
    [111.02518, 30.831501], [111.025069, 30.831387], [111.024839, 30.831276], [111.024807, 30.831311],
    [111.024893, 30.831604], [111.024959, 30.831637], [111.02484, 30.832007], [111.024713, 30.832275],
    [111.024934, 30.832454], [111.02507, 30.832584], [111.024827, 30.832676], [111.024556, 30.832579],
    [111.024259, 30.8325], [111.023366, 30.832725], [111.023145, 30.832806], [111.021536, 30.833229],
    [111.021542, 30.833324], [111.021306, 30.833313], [111.021284, 30.833457], [111.021397, 30.833465],
    [111.021385, 30.833852], [111.021504, 30.833882], [111.021407, 30.834305], [111.021611, 30.834379],
    [111.021813, 30.834422], [111.022128, 30.834306], [111.022128, 30.834195], [111.021693, 30.8341],
    [111.02103, 30.833894], [111.020759, 30.833786], [111.02038, 30.833783], [111.020257, 30.834022],
    [111.019976, 30.834173], [111.01967, 30.834317], [111.019339, 30.83445], [111.017765, 30.834981],
    [111.017525, 30.834888], [111.016941, 30.835059], [111.016755, 30.835027], [111.016471, 30.834382],
    [111.015881, 30.834048], [111.016074, 30.833018], [111.01637, 30.832333], [111.016506, 30.831718],
    [111.016686, 30.830905], [111.017023, 30.830699], [111.017595, 30.830555], [111.01778, 30.830498],
    [111.018679, 30.830469], [111.024046, 30.82922], [111.024389, 30.828962], [111.024423, 30.828461],
    [111.024098, 30.827873], [111.023844, 30.827314], [111.024098, 30.826708], [111.024708, 30.826249],
    [111.026133, 30.825507], [111.028621, 30.82456], [111.030456, 30.82572], [111.031438, 30.826531],
    [111.034759, 30.833846], [111.038597, 30.832573], [111.039609, 30.832465], [111.047524, 30.834779],
    [111.048194, 30.834434], [111.054513, 30.821412], [111.054266, 30.820361], [111.053186, 30.819769],
    [111.051979, 30.819186], [111.050289, 30.81893], [111.049186, 30.819038], [111.048174, 30.819384],
    [111.042316, 30.816521], [111.032196, 30.813362], [111.028142, 30.812385], [111.026062, 30.811941],
    [111.025763, 30.812563], [111.024911, 30.812004], [111.024297, 30.811773], [111.024043, 30.811763],
    [111.023853, 30.812602], [111.024041, 30.813039], [111.022398, 30.812818]],
    desc: "三峡实习路线"
}

let ZhangjiachongRoute: Route = {
    path: [[110.964184, 30.77769],[110.964339, 30.777921],[110.964487, 30.778197] , [110.964656, 30.778437]
    ,[110.964877, 30.778641],[110.965039, 30.778787],[110.965129, 30.778914],[110.96506, 30.779278], [110.964894, 30.779376]
    , [110.964641, 30.779805],[110.96463, 30.780015],[110.964547, 30.780142],[110.964106, 30.780228], [110.963827, 30.780297]
    ,[110.963292, 30.780297], [110.963061, 30.780418],[110.962423, 30.780163], [110.962499, 30.779897],[110.962526, 30.779787]
    ,[110.962661, 30.779731],[110.962826, 30.779725], [110.963026, 30.779719] , [110.963226, 30.779728], [110.963354, 30.779654]
    ,[110.963395, 30.779585], [110.963371, 30.77955], [110.963364, 30.779621], [110.962964, 30.779695], [110.962611, 30.779716]
    , [110.962446, 30.780151] , [110.962635, 30.780261] , [110.963035, 30.780442], [110.963263, 30.780308],[110.963566, 30.780279]
    ,[110.963849, 30.780285], [110.964239, 30.78022], [110.964539, 30.780163] , [110.964648, 30.779799], [110.964769, 30.779529]
    , [110.964845, 30.77939], [110.965058, 30.779295],[110.965124, 30.778954] , [110.964965, 30.778741], [110.9648, 30.778601]
    , [110.964631, 30.778423] , [110.964493, 30.778246] , [110.964182, 30.777707], [110.964127, 30.777588],[110.963165, 30.777185]
    , [110.961859, 30.776633], [110.960738, 30.776058] , [110.959157, 30.77494] ,[110.958619, 30.774386] , [110.958336, 30.773917]
    , [110.957998, 30.773298]  , [110.957841, 30.773079]  ,[110.95765, 30.772908]  , [110.957531, 30.772651]  , [110.957501, 30.772493]
    ,[110.957278, 30.772263] , [110.9566, 30.771529], [110.955225, 30.77039], [110.95383, 30.769373] , [110.953044, 30.76876]
    , [110.952916, 30.768603] , [110.952719, 30.768185], [110.952609, 30.767589], [110.952437, 30.767189], [110.952368, 30.767103],
     [110.952308, 30.767066], [110.951766, 30.767242] , [110.951615, 30.767224] , [110.951383, 30.76715] ,[110.951009, 30.767275]
    , [110.950312, 30.767553] , [110.949912, 30.767633],[110.949624, 30.767745], [110.949378, 30.767947] , [110.949235, 30.768094]
    , [110.948699, 30.768404] , [110.948449, 30.768491] , [110.948142, 30.768465],[110.9469, 30.768805], [110.948206, 30.768461]
    , [110.948466, 30.768494] ,[110.94925, 30.768085] , [110.949548, 30.767811] , [110.950252, 30.767587], [110.95094, 30.767316]
    , [110.951336, 30.767163],[110.952261, 30.767119], [110.952346, 30.767115] , [110.952121, 30.766812] , [110.951602, 30.766443]
    ,[110.951185, 30.766187], [110.950777, 30.765942], [110.94976, 30.765121], [110.949645, 30.764803],[110.949496, 30.764587]
    , [110.949288, 30.764089], [110.949093, 30.763586], [110.948696, 30.763118], [110.948094, 30.762167] , [110.946507, 30.76096]
    ,[110.945098, 30.760105],[110.944798, 30.759634],[110.944594, 30.759514], [110.943814, 30.75958] ,[110.943406, 30.759218]
    ,[110.943085, 30.758979] , [110.942993, 30.758869] ,[110.9418, 30.756427], [110.94147, 30.756204],[110.9409, 30.756115],
     [110.940015, 30.755904], [110.93965, 30.755723],[110.939201, 30.755433]],
    desc: "张家冲实习路线"
}

let SixigongyuanRoute: Route = {
    path: [[ 110.914638, 30.721896 ], [ 110.914193, 30.721156 ], [ 110.914486, 30.721039 ], [ 110.914385, 30.720728 ], 
    [ 110.913888, 30.720341 ], [ 110.913445, 30.720083 ], [ 110.913357, 30.719106 ], [ 110.913703, 30.71855 ], 
    [ 110.913824, 30.718281 ], [ 110.913711, 30.717897 ], [ 110.913631, 30.717449 ], [ 110.913651, 30.717045 ], 
    [ 110.913647, 30.716734 ], [ 110.913374, 30.716013 ], [ 110.91374, 30.715768 ], [ 110.912718, 30.714495 ], 
    [ 110.912598, 30.713898 ], [ 110.912144, 30.713718 ], [ 110.911871, 30.713452 ], [ 110.911678, 30.713155 ],
     [ 110.912026, 30.712281 ], [ 110.911934, 30.712136 ], [ 110.91089, 30.711514 ], [ 110.910817, 30.711366 ], 
     [ 110.910638, 30.710825 ], [ 110.910855, 30.710335 ], [ 110.910959, 30.710393 ], [ 110.91309, 30.712646 ], 
     [ 110.912684, 30.71285 ], [ 110.912447, 30.710214 ], [ 110.912467, 30.710662 ], [ 110.912447, 30.711197 ], 
     [ 110.912142, 30.712451 ], [ 110.912787, 30.713793 ], [ 110.913056, 30.714475 ], [ 110.913172, 30.71464 ], 
     [ 110.913814, 30.714897 ], [ 110.913766, 30.716429 ], [ 110.913907, 30.716757 ], [ 110.913868, 30.717628 ], 
     [ 110.913936, 30.7179 ], [ 110.91404, 30.718104 ], [ 110.914052, 30.718321 ], [ 110.91353, 30.719426 ], 
     [ 110.913534, 30.719585 ], [ 110.913749, 30.719757 ], [ 110.913994, 30.719981 ], [ 110.914541, 30.720587 ], 
     [ 110.914553, 30.721009 ], [ 110.914288, 30.72115 ], [ 110.914467, 30.721601 ], [ 110.914809, 30.721705 ]],
    desc: "泗溪公园实习路线"
}

let quyuanRoute: Route = {
    path: [[110.985482, 30.824673],[110.985861, 30.824471],[110.986263, 30.824117],[110.986536, 30.823846],
    [110.986816, 30.823653], [110.987282, 30.823517], [110.987787, 30.823377], [110.987917, 30.823322],
    [110.988204, 30.823244], [110.988385, 30.823212], [110.988543, 30.823222], [110.988707, 30.82327],
    [110.988839, 30.823386],[110.988985, 30.823528],[110.989114, 30.823707],[110.989151, 30.823916],
    [110.989149, 30.82405],[110.989145, 30.824157],[110.989012, 30.824455],[110.988923, 30.82465],
    [110.988812, 30.824921],[110.988754, 30.825129],[110.988745, 30.825386],[110.988804, 30.825607],
    [110.988906, 30.825817],[110.989054, 30.825966],[110.989215, 30.826118],[110.989409, 30.82628],
    [110.989652, 30.826484],[110.9898, 30.826577],[110.989931, 30.826616],[110.990059, 30.826626],
    [110.990238, 30.826572],[110.990704, 30.826367],[110.990826, 30.826389],[110.990932, 30.826425],
    [110.991028, 30.826509],[110.991204, 30.826789],[110.991391, 30.827075],[110.991531, 30.827299],
    [110.991696, 30.827577],[110.991911, 30.82793],[110.992009, 30.828098],[110.992055, 30.82827],
    [110.991989, 30.82847],[110.991924, 30.82858],[110.991743, 30.828698],[110.991572, 30.828733],
    [110.991443, 30.828743],[110.990971, 30.8287],[110.990717, 30.8287],[110.990636, 30.828694]],
    desc: "屈原故居实习路线"
}

let lianziyaRoute: Route ={
    path:[[110.802738, 30.930363],[110.802423, 30.930609],[110.801892, 30.930932],[110.801409, 30.931146],
          [110.801312, 30.931422],[110.801277, 30.931725],[110.801126, 30.931987],[110.800659, 30.932207],[110.800258, 30.932737],
          [110.800151, 30.93287],[110.800002, 30.933194],[110.799904, 30.933638],[110.799886, 30.93389],
          [110.799961, 30.934309],[110.799721, 30.934891],[110.799551, 30.935249],[110.799585, 30.935155],
          [110.798756, 30.936101],[110.798201, 30.936301],[110.797708, 30.936407]],
    desc:"链子崖实习路线"
}

let guancaiyanRoute: Route ={
    path:[ [ 111.044845, 30.777418 ], [ 111.044487, 30.777556 ],
     [ 111.043757, 30.777876 ], [ 111.043626, 30.778036 ], [ 111.043473, 30.778335 ], [ 111.043171, 30.778652 ],
      [ 111.042431, 30.779224 ], [ 111.041827, 30.779877 ], [ 111.041261, 30.780998 ], [ 111.040692, 30.781891 ],
       [ 111.03955, 30.782039 ], [ 111.039399, 30.781992 ], [ 111.039727, 30.781845 ], [ 111.040326, 30.781795 ], 
       [ 111.040615, 30.78137 ], [ 111.040679, 30.781006 ], [ 111.04082, 30.780751 ], [ 111.041109, 30.780522 ], 
       [ 111.041055, 30.779981 ], [ 111.041219, 30.779372 ], [ 111.041019, 30.778611 ], [ 111.040502, 30.77822 ], 
       [ 111.040245, 30.777985 ], [ 111.040711, 30.777228 ], [ 111.040941, 30.776843 ], [ 111.041052, 30.77673 ], 
       [ 111.041439, 30.776767 ], [ 111.042026, 30.777025 ], [ 111.04242, 30.776933 ], [ 111.04294, 30.776502 ], 
       [ 111.042746, 30.776314 ], [ 111.042146, 30.776732 ], [ 111.041041, 30.776272 ], [ 111.040526, 30.776846 ], 
       [ 111.039973, 30.777648 ], [ 111.039665, 30.778017 ], [ 111.040252, 30.778591 ], [ 111.040256, 30.778877 ], 
       [ 111.039842, 30.779296 ], [ 111.039374, 30.779634 ], [ 111.039471, 30.780371 ], [ 111.038261, 30.781134 ], 
       [ 111.037122, 30.781366 ], [ 111.035975, 30.781582 ], [ 111.035197, 30.782363 ], [ 111.034228, 30.782828 ], 
       [ 111.03394, 30.782956 ], [ 111.03334, 30.782386 ], [ 111.032495, 30.782764 ], [ 111.03231, 30.782862 ], 
       [ 111.03142, 30.78275 ], [ 111.031461, 30.782532 ], [ 111.032658, 30.78225 ], [ 111.033623, 30.781162 ], 
       [ 111.034107, 30.780658 ], [ 111.034941, 30.780783 ], [ 111.034991, 30.780576 ], [ 111.034491, 30.78031 ], 
       [ 111.034105, 30.780288 ], [ 111.03328, 30.78089 ], [ 111.032297, 30.780401 ], [ 111.031638, 30.780079 ], 
       [ 111.030894, 30.780015 ], [ 111.030145, 30.780634 ], [ 111.029763, 30.780611 ], [ 111.029279, 30.780225 ], 
       [ 111.030242, 30.779854 ], [ 111.030482, 30.779132 ], [ 111.031007, 30.778457 ], [ 111.031025, 30.777897 ],
        [ 111.032494, 30.778403 ], [ 111.032676, 30.778277 ], [ 111.03193, 30.777653 ], [ 111.031239, 30.776729 ], 
        [ 111.030202, 30.776451 ], [ 111.030209, 30.77619 ], [ 111.032546, 30.776352 ], [ 111.034168, 30.776712 ], 
        [ 111.034503, 30.776631 ], [ 111.034986, 30.775767 ], [ 111.035155, 30.775048 ], [ 111.035868, 30.774779 ],
         [ 111.035834, 30.774344 ], [ 111.03534, 30.774053 ], [ 111.035396, 30.774082 ], [ 111.035146, 30.772909 ], 
         [ 111.034795, 30.771291 ], [ 111.035018, 30.770951 ], [ 111.034919, 30.77085 ], [ 111.033943, 30.771828 ], 
         [ 111.033585, 30.772267 ], [ 111.033407, 30.772155 ], [ 111.034269, 30.770821 ], [ 111.034609, 30.770251 ], 
         [ 111.0343, 30.770025 ], [ 111.033563, 30.770166 ], [ 111.032724, 30.770599 ], [ 111.032177, 30.770497 ], 
         [ 111.031293, 30.77098 ], [ 111.030112, 30.772296 ], [ 111.029872, 30.772491 ], [ 111.028405, 30.772851 ], 
         [ 111.027879, 30.773204 ], [ 111.027371, 30.772545 ], [ 111.026955, 30.771656 ], [ 111.025621, 30.771133 ], 
         [ 111.025128, 30.770468 ], [ 111.024876, 30.770081 ], [ 111.025041, 30.769563 ], [ 111.024705, 30.77063 ], 
         [ 111.024427, 30.76994 ], [ 111.023786, 30.768798 ] ],
    desc:"棺材岩-花鸡坡实习路线"
}


var Routes: {[name: string]: Route} = {
    'sanxia': sanxiaRoute,
    'zhangjiachong': ZhangjiachongRoute,
    'sixigongyuan': SixigongyuanRoute,
    'quyuan': quyuanRoute,
    'lianziya': lianziyaRoute,
    'guancaiyan': guancaiyanRoute
}

export { Routes }