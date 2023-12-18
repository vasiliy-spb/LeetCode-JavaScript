// Правильное решение (моё) (принято)

var FoodRatings = function (foods, cuisines, ratings) {
    this.foods = foods;
    this.cuisines = cuisines;
    this.ratings = ratings;

    this.foodMap = new Map(); // Map<food, {cuisines, food, ratings}>
    this.cuisinesMap = new Map();  // Map<cuisine, {cuisines, food, ratings}>

    for (let i = 0; i < foods.length; i++) {
        const cuisine = cuisines[i];
        const food = foods[i];
        const foodEntity = {
            cuisine: cuisines[i],
            food: foods[i],
            rating: ratings[i]
        }

        if (!this.foodMap.has(food)) {
            this.foodMap.set(food, [])
        }
        this.foodMap.get(food).push(foodEntity);

        if (!this.cuisinesMap.has(cuisine)) {
            this.cuisinesMap.set(cuisine, [])
        }
        this.cuisinesMap.get(cuisine).push(foodEntity);
    }
};

FoodRatings.prototype.changeRating = function (food, newRating) {

    const foodEntityArray = this.foodMap.get(food);
    foodEntityArray.forEach(foodEntity => foodEntity.rating = newRating);
    
};

FoodRatings.prototype.highestRated = function (cuisine) {
    let highRate = 0;
    let resultFood;

    const cuiseneEntityArray = this.cuisinesMap.get(cuisine);

    cuiseneEntityArray.forEach(foodEntity => {
        if (foodEntity.rating > highRate) {
            highRate = foodEntity.rating;
            resultFood = foodEntity.food;
        } else if (foodEntity.rating === highRate) {
            resultFood = resultFood.localeCompare(foodEntity.food) <= 0 ? resultFood : foodEntity.food;
        }
    })

    return resultFood;
};



let foodR = new FoodRatings(
    [
    "evnjkp", "hhtjkqphfn", "cwqgm", "qhannytoh", "fkwkmvcpb", "utlowkql", "nfqzizfe", "ktynxzhe", "wtyllqgg", "etbcuwdcbg", "jwmhivpssr", "zcscozlty", "jhbqsixshs", "gmhzjcxmo", "otuiynl", "hdeaugplu", "ylsop", "jhdojdvj", "mcakvgyixw", "fawebb", "kolzshl", "ekxgsmwwbh", "nupkfopmt", "vtnwdzljsr", "jpywaaovdo", "qpajdkny", "wiahe", "cjuapxxqil", "yxtjd", "uqlehao", "wzonu", "ytjbkhu", "crhzfxcj", "fpwfvjwlu", "asu", "enrr", "aybeynu", "zjhrtcblqs", "heteg", "anuychqvg", "tjsbgne", "rx", "fuwltbpo", "qzehowm", "zvieeg", "zmgqijulgd", "bfip", "uxocmwta", "yhijls", "jrrigeik", "lmqtf", "ky", "ldbnpckax", "lkvxev", "ztbpvhzdnz", "aeejw", "mevswapa", "ecgmfjujur", "cfcwarlcnt", "svqszweuyh", "ociloc", "faevwpeh", "grg", "beuf", "qzqyeuvst", "jxepjos", "fxnvkpful", "rhktxpqcb", "glmviewuk", "rnlvhbif", "vvtpswg", "mdzeuvwtw", "zessrvwyk", "yhkjfkb", "ovdgsaaubz", "aetlfxv", "jglyjbnmz", "nrcx", "xnufiiajpb", "kty", "kaqjcajhkj", "ckgputqyw", "slh", "xoxoiuy", "ojussbd", "rqomopzf", "mtfdoub", "xydvftba", "ffbmbbwy", "ntgizewupp", "hcincfy", "tcoz", "gpuyzyjh", "hjhqpucase", "wulzejr", "wmyhqjubp", "jvbfoodjpv", "knlu", "hpefsaf", "hbvfrrkrvc", "anwwyd", "cgzb", "udgvwqsxxt", "vzsr", "nfuozg", "ivmmsnfly", "mtsrbhmtr", "bhlzmkowen", "srsljilcy", "trdzsj", "nvlhhd", "qpgoxituqf", "dwoj", "emtfqw", "lmywnalx", "rxickji", "jbbcmhtv", "vsspekgg", "utmbozkn", "tcjoybxlf", "wffskjkp", "vicyedbxsx", "agln", "ntaybrvern", "nhnpvan", "sxqhl", "bdnik", "axjgazygjx", "kouqzgf", "tuyviopdlf", "httogm", "oftiwo", "pcgkbc", "eumrnyu", "kzrk", "yvpuprym", "atbpgushkr", "sgidwmhcx", "tmmrfjusl", "tmxcbctoh", "qxrkjufcw", "ykqck", "khczyujc", "fntrfqpta", "ogtql", "paazuweuas", "kiknpxpum", "ceuwzrlxc", "zeenqixywx", "zrnurytaaj", "myrqdorfc", "whgwhfhq", "okpzigtnxc", "vv", "xekilvpza", "ltbsffrwh", "dwemqxie", "rubtpkfai", "lquja", "qumfvv", "htjtdj", "uhzumtct", "vpudtv", "ienumastdn", "kyxgytptf", "ojjaoh", "cclolwkk", "vazl", "likfvwcm", "ifzdvtvmuu", "tomtfy", "kiwitwrlyp", "ohnxu", "elotkciooy", "sih", "colrpafvxa", "gmyzmgvva", "ljsiz", "jtpu", "hffhqm", "uably", "xmzpzqjg", "orkiordk", "ducug", "xxnuzgef", "aiavpege", "aifgmxl", "czqbrvq", "zuguvdzuja", "azjhynuwe", "bvavpxsveb", "wdtuwrnj", "zrtk", "xmmrsvzn", "xvzowojqp", "nradhwqoez", "khscddcgtj", "cvaie", "pg", "sjp", "mjezwcvim", "sjh", "xxnlndx", "gabisse", "wrlnitdwie", "qtpctbyzlw", "tqqvyekn", "c", "acu", "xppvdkpz", "iaxtzbpcht", "sdgnqsiv", "ruys", "guithahoc", "ljusiuoif", "wocyzyi", "bpzfpgpu", "vu", "hjhhkvyd", "buim", "rpvxyogf", "yfzzlhpo", "stbepauk", "ffkhrtjbl", "vnanketmoh", "mpkzzcxkw", "bjeoqmmtj", "jirfwma", "pucs", "pwwtihlj", "cseid", "tiipv", "ebcvodzm", "faln", "mho", "uvoc", "yex", "gxr", "zflhdsoil", "khtuxyyeq", "ggtoxitm", "oecdmpur", "wilfekxjb", "wbehon", "xlfionpawg", "p", "nttb", "buxncuvbil", "ehogii", "grpstyer", "kdnktt", "uzknkvjay", "urg", "myopjaby", "hmvqmmaq", "owzemu", "mwcso", "xparoyeurg", "uzqfkkp", "uukbkinll", "ztnijy", "gqxjthppp", "xpyrrmqldu", "hvedgvm", "bqeunfwea", "lxivuchlg", "eynfm", "rdncc", "htlbktw", "oezaosxmy", "wwgb", "ulmlhrkgxl", "qou", "osdkaaw", "nctlcjf", "buynl", "sdhvagauq", "rti", "jswecsf", "iilmjgut", "tntkhfpwwb", "nznulebpsq", "ybbon", "amdc", "whgr", "zkbjxclnl", "kgljpvs", "dzyioreli", "ddcrwsqt", "ogrtrme", "xwffssmap", "yfrdemyckz", "gipjizgb", "cktpl", "xptbv", "pmzabfg", "zwnwfkdie", "wozjuacixq", "kiuzydklel", "unoigjtyt", "oyzolihr", "duhuhyl", "gzibkuube", "vnwphmvv", "stisaqaqfu", "duluwvz", "uitivwyqp", "aqv", "msvmkeed", "adp", "cuodpwmj", "aybjpwyogy", "umbyitvnmg", "hiihfma", "borufn", "szbiyfovs", "eoey", "xhxjxlqmy", "abj", "tdtlcx", "rwkvlvnvw", "rrrlj", "vsroxribo", "lvqvte", "ohoixqprk", "yhs", "omhwbcof", "nymnnbuslp", "dpprvgzpq", "inpinfo", "kpy", "dbfkghjfw", "vegqimxeda", "vqwfbbtpbz", "azvggydfm", "xgcg", "hld", "rsvid", "kmfphtonzn", "gfpmlujgv", "vqjrbmks", "qpewvbej", "jupsl", "gtqccqfgqh", "sjvpqaf", "ijfkmdye", "fpcien", "pfit", "yzrrxilxtf", "qzdo", "ejbg", "ulhq", "qvtbbeeybr", "irjme", "csx", "csnbolq", "metlmhg", "fxoflnkvip", "tabhq", "dtpk", "vtgtmpqjgv", "mcmktqorit", "xpagxpta", "ydrme", "trnx", "ddunxcoh", "ztpwowd", "qqwlkyule", "ebwa", "esgoggdwo", "cnugykucf", "ktjzy", "pdqhtxtfsi", "rogpz", "gprwxxjcn", "iqemvbkq", "stwbzmqit", "wpyryoc", "pz", "biuwqgox", "ekblhuhc", "cwaurol", "bifmtbt", "dwxxxiu", "bcemjibsc", "uwxsuksip", "vose", "hnzibpy", "saxvwpaicb", "gvitq", "uvklihukfe", "utymkpkhxs", "sjrwclxw", "psnufnmagy", "llztzhiqad", "hhacmxx", "wwxlnpmhu", "vgamaxyml", "qfgywgex", "sfwybuqj", "nqdfzgm", "owbhzosy", "fnkymsbbh", "pkntgdfp", "vlqumoinxf", "nod", "tlpuwuvpyj", "tseneazug", "azzqwkwts", "kdawd", "jlnrewsp", "prjd", "tgjbcdxskv", "hdvzlfsgst", "hlqauwmdz", "wythpuz", "beo", "tultwclsj", "vwun", "uxmrbkf", "uukinrgbh", "vocxv", "lgxlcce", "zihdgeozhb", "xaywrzchyp", "gpqbtbefcn", "uvkxccbp", "leyrn", "rqlulbsjib", "amygojrqj", "wnbiccte", "scoueo", "obcba", "yy", "fiewy", "mxg", "cotzq", "xqtapzilvx", "qpccjvgr", "swetefhx", "xigeohqlhd", "lcxykojobu", "ujtejuink", "tiaydtj", "lyeo", "x", "mbiwpyvu", "jrspnzgyt", "fzcy", "yyccaihgyq", "ksufwfic", "hpmvwyroww", "ornyznmyw", "zpnovzdjbr", "xqhcuxc", "mgeyqkypi", "zqodsqjq", "zlgejqw", "dyasge", "mrxjsfsxn", "rxfac", "npxna"
], 

[
    "kfeqaialtq", "wrnrdozowb", "kminh", "wrnrdozowb", "ituif", "snahxyzp", "sgimwvk", "jryhqcw", "vgbnbtb", "vgbnbtb", "vgbnbtb", "vgbnbtb", "snahxyzp", "hhiebtzmti", "vgbnbtb", "jukatd", "vgbnbtb", "qj", "kfeqaialtq", "kfeqaialtq", "kfeqaialtq", "hhiebtzmti", "vztvk", "sgimwvk", "ituif", "kminh", "prheawzc", "wrnrdozowb", "wrnrdozowb", "gtbn", "snahxyzp", "kminh", "jukatd", "qj", "rciukxyft", "qj", "hhiebtzmti", "snahxyzp", "kminh", "gksdhoay", "wrnrdozowb", "gksdhoay", "ituif", "prheawzc", "hhiebtzmti", "gksdhoay", "vgbnbtb", "rciukxyft", "prheawzc", "ituif", "rciukxyft", "kfeqaialtq", "jryhqcw", "wkvnls", "qj", "wrnrdozowb", "kfeqaialtq", "qj", "wkvnls", "rciukxyft", "ituif", "snahxyzp", "vgbnbtb", "qj", "sgimwvk", "wrnrdozowb", "snahxyzp", "kfeqaialtq", "snahxyzp", "qj", "kminh", "gksdhoay", "sgimwvk", "prheawzc", "snahxyzp", "gtbn", "jryhqcw", "rciukxyft", "ituif", "rciukxyft", "wkvnls", "jukatd", "jukatd", "hhiebtzmti", "wrnrdozowb", "qj", "vgbnbtb", "rciukxyft", "jukatd", "rciukxyft", "gksdhoay", "vgbnbtb", "kminh", "jryhqcw", "snahxyzp", "ituif", "gksdhoay", "vztvk", "jukatd", "snahxyzp", "prheawzc", "rciukxyft", "ituif", "jukatd", "kfeqaialtq", "jukatd", "kfeqaialtq", "wrnrdozowb", "prheawzc", "prheawzc", "jukatd", "jryhqcw", "rciukxyft", "kminh", "gtbn", "rciukxyft", "kfeqaialtq", "ituif", "gtbn", "prheawzc", "snahxyzp", "kminh", "hhiebtzmti", "prheawzc", "kminh", "gtbn", "jryhqcw", "prheawzc", "jryhqcw", "jryhqcw", "jukatd", "kminh", "vgbnbtb", "prheawzc", "snahxyzp", "wkvnls", "jryhqcw", "wrnrdozowb", "wrnrdozowb", "rciukxyft", "wkvnls", "jryhqcw", "wrnrdozowb", "snahxyzp", "vgbnbtb", "ituif", "vztvk", "gtbn", "kfeqaialtq", "jryhqcw", "hhiebtzmti", "wkvnls", "sgimwvk", "rciukxyft", "gtbn", "vgbnbtb", "gksdhoay", "hhiebtzmti", "kminh", "hhiebtzmti", "prheawzc", "vztvk", "hhiebtzmti", "rciukxyft", "gtbn", "qj", "jukatd", "gtbn", "prheawzc", "prheawzc", "ituif", "kminh", "kminh", "jukatd", "wrnrdozowb", "gksdhoay", "wkvnls", "sgimwvk", "vztvk", "vztvk", "qj", "rciukxyft", "wrnrdozowb", "gksdhoay", "vgbnbtb", "hhiebtzmti", "gksdhoay", "rciukxyft", "rciukxyft", "vgbnbtb", "jryhqcw", "ituif", "rciukxyft", "vztvk", "ituif", "kminh", "gtbn", "ituif", "prheawzc", "wrnrdozowb", "jryhqcw", "ituif", "snahxyzp", "jukatd", "kfeqaialtq", "kminh", "vztvk", "snahxyzp", "prheawzc", "sgimwvk", "jukatd", "wrnrdozowb", "rciukxyft", "rciukxyft", "jryhqcw", "vgbnbtb", "ituif", "qj", "gtbn", "kminh", "kminh", "jukatd", "rciukxyft", "snahxyzp", "qj", "prheawzc", "jukatd", "gksdhoay", "gtbn", "rciukxyft", "kminh", "vgbnbtb", "gtbn", "gksdhoay", "wrnrdozowb", "jukatd", "jukatd", "kfeqaialtq", "rciukxyft", "jryhqcw", "kminh", "wrnrdozowb", "prheawzc", "jukatd", "ituif", "prheawzc", "rciukxyft", "snahxyzp", "vztvk", "vztvk", "rciukxyft", "rciukxyft", "gksdhoay", "sgimwvk", "vgbnbtb", "sgimwvk", "snahxyzp", "jryhqcw", "wkvnls", "vztvk", "qj", "jukatd", "prheawzc", "gtbn", "wkvnls", "qj", "ituif", "gksdhoay", "kminh", "vgbnbtb", "sgimwvk", "snahxyzp", "rciukxyft", "gtbn", "snahxyzp", "kfeqaialtq", "wrnrdozowb", "ituif", "sgimwvk", "snahxyzp", "gksdhoay", "jryhqcw", "wrnrdozowb", "sgimwvk", "gksdhoay", "ituif", "jryhqcw", "hhiebtzmti", "qj", "vgbnbtb", "wkvnls", "gksdhoay", "prheawzc", "rciukxyft", "kfeqaialtq", "vztvk", "gksdhoay", "prheawzc", "ituif", "rciukxyft", "kfeqaialtq", "wrnrdozowb", "jryhqcw", "wkvnls", "wkvnls", "vztvk", "ituif", "gksdhoay", "rciukxyft", "jryhqcw", "jryhqcw", "wrnrdozowb", "hhiebtzmti", "kminh", "kminh", "kfeqaialtq", "snahxyzp", "jryhqcw", "wkvnls", "jryhqcw", "kfeqaialtq", "snahxyzp", "snahxyzp", "vztvk", "snahxyzp", "qj", "sgimwvk", "prheawzc", "jryhqcw", "vztvk", "kfeqaialtq", "gtbn", "jryhqcw", "sgimwvk", "kfeqaialtq", "wrnrdozowb", "vgbnbtb", "gksdhoay", "jukatd", "wrnrdozowb", "sgimwvk", "kfeqaialtq", "gtbn", "jukatd", "kfeqaialtq", "wrnrdozowb", "snahxyzp", "kfeqaialtq", "wrnrdozowb", "prheawzc", "vgbnbtb", "snahxyzp", "wrnrdozowb", "vgbnbtb", "vgbnbtb", "vgbnbtb", "gksdhoay", "qj", "gtbn", "qj", "rciukxyft", "kfeqaialtq", "gtbn", "rciukxyft", "vgbnbtb", "jryhqcw", "snahxyzp", "wkvnls", "gksdhoay", "sgimwvk", "wrnrdozowb", "snahxyzp", "sgimwvk", "hhiebtzmti", "hhiebtzmti", "rciukxyft", "qj", "rciukxyft", "qj", "vztvk", "qj", "vztvk", "qj", "snahxyzp", "snahxyzp", "gksdhoay", "vztvk", "rciukxyft", "gtbn", "gksdhoay", "rciukxyft", "jryhqcw", "wkvnls", "vgbnbtb", "kfeqaialtq", "gksdhoay", "kfeqaialtq", "jryhqcw", "prheawzc", "sgimwvk", "wrnrdozowb", "hhiebtzmti", "wrnrdozowb", "wrnrdozowb", "gksdhoay", "jryhqcw", "hhiebtzmti", "sgimwvk", "snahxyzp", "prheawzc", "ituif", "rciukxyft", "kfeqaialtq", "prheawzc", "qj", "kfeqaialtq", "vgbnbtb", "gksdhoay", "vztvk", "sgimwvk", "kfeqaialtq", "vgbnbtb", "rciukxyft", "sgimwvk", "qj", "wrnrdozowb", "ituif", "hhiebtzmti", "hhiebtzmti", "ituif", "prheawzc", "kminh", "gtbn", "prheawzc", "prheawzc", "jukatd", "prheawzc", "wrnrdozowb", "jryhqcw", "rciukxyft", "vgbnbtb", "wrnrdozowb", "jryhqcw", "hhiebtzmti", "vgbnbtb", "kminh", "hhiebtzmti", "kfeqaialtq", "qj", "wrnrdozowb", "snahxyzp", "gtbn", "hhiebtzmti", "jryhqcw", "rciukxyft", "jukatd", "wrnrdozowb", "rciukxyft", "kfeqaialtq", "kminh", "ituif", "sgimwvk"
], 

[
    49611096, 94204569, 64787309, 23642002, 43727472, 63009310, 94986692, 6935455, 52595221, 11745934, 39454781, 98086839, 624045, 64332760, 42061667, 30311609, 68326368, 38465931, 32997060, 1633361, 31604685, 33325602, 47993315, 80625285, 2908660, 97426945, 3570076, 46464005, 17732229, 18010432, 2922972, 42864341, 65803647, 56411985, 7683785, 64654054, 15841029, 69655645, 51365188, 11568092, 91371309, 60432887, 44111718, 23245957, 74192394, 30661286, 36412494, 79098398, 24404431, 6808956, 99394922, 34999, 97973640, 22651983, 51242766, 13608113, 63594377, 1904064, 71399217, 91103439, 234765, 26891845, 22047783, 81783155, 35817185, 61688187, 47976854, 83548136, 39346356, 2285972, 54780142, 27823091, 39400661, 16214410, 76740981, 47905327, 57201072, 33130380, 27941166, 70240062, 93414755, 19966612, 95708965, 20350345, 96300999, 35511449, 38450233, 53145032, 38304414, 46859312, 67306114, 88546644, 77593544, 87455113, 89857212, 84054253, 83894282, 82063747, 25409788, 79511114, 2789066, 69614617, 41022956, 76386383, 5627819, 35003361, 42393672, 38445694, 17824339, 2141355, 94077575, 46443947, 96206408, 51529029, 63595813, 23354701, 57861050, 55943693, 44920999, 78864970, 35276627, 99929931, 63612528, 58116582, 66828581, 10415493, 41306557, 62451874, 82457213, 81455398, 4699922, 2912687, 85830370, 77281116, 10836967, 68744377, 3628822, 46396751, 84344338, 4289585, 72066294, 14424825, 76144029, 78595789, 24406760, 41654589, 82753613, 95309588, 92107441, 89978193, 8213308, 1816519, 17190880, 54500341, 41183090, 14727820, 24473235, 19479806, 6098251, 61190279, 50801764, 73272182, 41559073, 15722897, 7339278, 85302133, 52134586, 7041511, 62372949, 40500803, 53530876, 17561297, 31348115, 99175531, 72698203, 8649832, 26687703, 18942221, 19871401, 89660804, 4728460, 32528565, 44825107, 7820278, 75847818, 63863571, 88223818, 92562324, 23725196, 32168943, 90510475, 79692212, 38944196, 81703815, 72295123, 74314987, 9770994, 32015280, 71663933, 65724262, 27937360, 22812064, 99060381, 19406648, 52900816, 70257507, 36712209, 93385026, 55041847, 38594514, 77396620, 24936036, 77881850, 82777611, 54463311, 3965438, 50664162, 31261323, 31687228, 92278137, 81844376, 33894286, 24651630, 73432444, 39954213, 91688230, 83362581, 37987217, 21072158, 27428062, 91708310, 85790960, 48528208, 91401188, 2715821, 15203675, 71410819, 82434390, 51284995, 74384386, 29038923, 77335562, 3498498, 81840882, 34261114, 97150303, 6155486, 24686048, 70329590, 80439468, 52910356, 96741713, 85411322, 52441758, 57955366, 37074736, 92337972, 48584565, 96602067, 83750363, 80953901, 11735751, 12703959, 51448793, 47164227, 21103316, 7498208, 4917305, 42615780, 79204708, 33391867, 51976226, 64862710, 687638, 72979865, 26765052, 47333604, 74354167, 22542436, 43261232, 59303694, 23367969, 95535959, 72897572, 61171955, 51003754, 42571852, 66421597, 6370664, 76164952, 1309302, 22111819, 54358842, 77658150, 51801744, 58475668, 30930429, 98933335, 14433217, 1866448, 12830709, 90776841, 40142286, 28414990, 69101693, 3328279, 25966335, 67575183, 31247788, 47176259, 78887555, 61755586, 14430091, 34886812, 92344003, 75627288, 33593801, 96598551, 79088110, 78686690, 22653925, 33557772, 19809292, 83754555, 91682498, 68231105, 6512442, 43645396, 6996039, 34202032, 78562018, 20560103, 73415563, 15768502, 19083897, 37535190, 54965505, 62320602, 21076984, 32392774, 84321353, 43473674, 1478236, 89548705, 80820252, 1021230, 56429169, 80970049, 64609207, 27261487, 95823061, 51783404, 7724623, 44782003, 4180489, 30653609, 93394149, 63548680, 4841296, 16643816, 46984141, 40075102, 56333830, 36161811, 15556378, 52673393, 36713772, 45258464, 29789339, 91899844, 91942454, 39307884, 82989094, 32156903, 59570359, 39367898, 36349897, 77416458, 72960847, 41074357, 55767614, 99446641, 92120795, 14749143, 67081523, 84744911, 7450582, 43633336, 7940967, 32076282, 89392237, 81470226, 15542093, 74042018, 70692546, 59865699, 69182996, 43076719, 29126556, 47417141, 4384880, 75879991, 74763185, 35179466, 5032906, 67422529, 30563462, 78665375, 43838297, 26444308, 70071353, 52038682, 99354695, 66981313, 83051, 74329159, 88879128, 88769290, 29832650, 5548338, 14994047, 12748770, 35719023, 19630057, 32825610, 68907406, 21211083, 4188477, 1423320, 81010622, 14490737, 31388203, 79552671, 11102470, 67435515, 39943522, 11829313, 4502510, 28721394, 37730753, 21750463, 2802455, 79078966, 72843649, 3028829, 55979946, 23030606, 74966174, 27750657, 16979636, 31894295, 20823430, 28790602, 81052602, 60539495, 83400007, 66074337, 31764506, 33611355, 58113950, 27567654, 53664150
]);

console.log(foodR.highestRated('gtbn'))                 // ceuwzrlxc
console.log(foodR.changeRating('lxivuchlg', 41404149))  // undefined
console.log(foodR.changeRating('biuwqgox', 53119818))   // undefined
console.log(foodR.highestRated('wrnrdozowb'))           // ojussbd
console.log(foodR.changeRating('kzrk', 15504963))       // undefined
console.log(foodR.changeRating('qtpctbyzlw', 80894821)) // undefined
console.log(foodR.changeRating('utymkpkhxs', 80625734)) // undefined
console.log(foodR.changeRating('ecgmfjujur', 86263645)) // undefined
console.log(foodR.changeRating('vose', 6663265))        // undefined
console.log(foodR.highestRated('kminh'))                // vicyedbxsx
console.log(foodR.changeRating('jhdojdvj', 407183))     // undefined
console.log(foodR.highestRated('hhiebtzmti'))           // owbhzosy
console.log(foodR.changeRating('axjgazygjx', 38219137)) // undefined
console.log(foodR.highestRated('rciukxyft'))            // lmqtf
console.log(foodR.highestRated('kminh'))                // vicyedbxsx
console.log(foodR.highestRated('qj'))                   // bifmtbt


