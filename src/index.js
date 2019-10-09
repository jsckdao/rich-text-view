import showdown from './wxParse/showdown.js';
import HtmlToJson from './wxParse/html2json.js';

var realWindowWidth = 0;
var realWindowHeight = 0;
wx.getSystemInfo({
  success: function (res) {
    realWindowWidth = res.windowWidth
    realWindowHeight = res.windowHeight
  }
});

Component({
  properties: {
    data: {
      type: String,
      value: `<p class=\"p1\" style=\"text-align: left;\">Bee+是蜜蜂科技旗下定位于高端的空间产品打造和运营商。Bee+致力于探索和定义人们每一天中2/3的时间（8小时工作＋8小时生活）该如何度过，通过Beeplus品牌，革新和升级地产空间产品，从办公、生活、居住等方面入 手，为人们提供创新型的空间产品， 致力于引领和改变未来人们的生活方式。</p>\n<p class=\"p1\">Bee+ is the high-end space product development and operator of Bee technology. Bee + is committed to explore and define the two-thirds of the time people every day (8 hours of work + 8 hours of life) how to spend, through Beeplus brand, product innovation and upgrade the real estate space, from the office, living, provide people with the space of the innovative products, to lead and change people's way of lisfe in the future.</p>\n<p class=\"p1\">&nbsp;</p>\n<p class=\"p1\">现阶段Bee+共开发有2条空间产品线，分别是联合办公空间Bee+ Coworking Space：为企业客户提供具有颠覆精神和极致的联合办公空间产品，以及创新的消费场景Bee+ Lifestyle：为个人客户提供面向未来的创新零售业态和消费场景。At present, Bee+ has developed 2 spatial product lines in total, which are the co-working Space Bee+ hub king Space: providing corporate customers with subversive and extreme co-working Space products, and the innovative consumption scene Bee+ Lifestyle: providing individual customers with future innovative retail formats and consumption scenes.</p>\n<p><img src=\"http://bw-qiniu.beeplus.xyz/1548739218150.png\" alt=\"\" width=\"914\" height=\"312\" /></p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<p><img src=\"http://bw-qiniu.beeplus.xyz/1547993473031.png\" alt=\"\" /></p>\n<p>&nbsp; &nbsp; &nbsp; 珠海市蜜蜂科技有限公司成立于2015年9月，是一家以互联网技术、创新科技产品为工具，协助传统地产商革新和升级地产空间产品的公司。蜜蜂科技通过极致空间产品的打造和空间内容的运营，为商务人群、白领、青年创业者提供创 新型的体验式空间产品并引领青年人的生活方式。&nbsp;</p>\n<p>Established in September 2015, zhuhai bee technology co., ltd. is a company that USES Internet technology and innovative technology products as tools to assist traditional real estate developers to innovate and upgrade real estate space products. Bee technology, through the creation of extreme space products and the operation of space content, provides business people, white-collar workers and young entrepreneurs with new experiential space products and guides the lifestyle of young people.</p>\n<p>&nbsp;</p>\n<p>&nbsp; &nbsp; 经过两年的发展，目前我们已在珠海市高新区、广州市海珠区T.I.T创意园、深圳市福田CBD、深圳市南山区蛇口自贸区G&amp;G 创意社区、广州天河CBD国际金融中心成功布局5个联合办公空间。更多的项目已经在建设或筹备中，即将开放。</p>\n<p>After two years of development, we have successfully arranged five joint office Spaces in zhuhai high-tech zone, guangzhou haizhu district T.I.T. creative park, shenzhen futian CBD, shenzhen shekou free trade zone G&amp;G creative community in nanshan district, and guangzhou tianhe CBD international financial center. More projects are under construction or preparation and will be open soon。</p>\n<p>&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp;2018年底，Bee+Lifestyle全新新零售消费场景&ldquo;Beeplus超级烘焙工坊&rdquo;在深圳南山海岸城已经开启营业，标示着Beeplus品牌在生活领域的覆盖进一步落地。。</p>\n<p>By the end of 2018, Bee+Lifestyle's new new retail consumption scene \" Beeplus super baking workshop\" have opened in COASTAL CITY&nbsp; of&nbsp; Nanshan district, Shenzhen.It marked the Beeplus brand coverage in the areas of life further landing</p>\n<p>&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp; Bee+目前是首家在华南区广州、深圳、珠海实现三地布局的高端联合办公空间运营商，管理总面积近50000平米，提供5000余个工位。 展望：预计到2019年底，Bee+管理的联合办公空间、超级烘焙工坊项目在广州、深圳将至少达到15个。可容纳办公人数超过10000人，线上会员超过100000人。</p>\n<p>Bee+ is currently the first high-end joint office space operator to achieve the layout of three locations in guangzhou, shenzhen and zhuhai in south China, managing a total area of nearly 50,000 square meters and providing more than 5,000 work stations. Prospecting: Bee+ managed co-working space, beeplus&nbsp; super baking workshop&nbsp; are expected to reach at least 15 in guangzhou and shenzhen by the end of 2019. It can accommodate more than 10000 employees and reach 100000 online members.</p>\n<p><img src=\"http://bw-qiniu.beeplus.xyz/1548739263590.png\" alt=\"\" width=\"449\" height=\"304\" /></p>\n<p>&nbsp;</p>\n<p><img src=\"http://bw-qiniu.beeplus.xyz/1547993432320.png\" alt=\"\" width=\"956\" height=\"76\" /></p>\n<p>&nbsp;</p>\n<p>我们的品牌理念是：探索和定义未来一个人一天 24 小时中 2/3 时间(8 小时生活+8 小时工作) 该如何度过。</p>\n<p>2018年9月10号，Bee+发布全新品牌口号：TODAY BEEPLUS！</p>\n<p>Our brand philosophy is: Explore and define how a person in the future will spend 2/3 of his or her 24 hours a day (8 hours of life +8 hours of work).</p>\n<p>On September 10, 2018, Bee+ released its brand new slogan: TODAY BEEPLUS!</p>\n<p>&nbsp;</p>\n<p>Bee+希望自己可以成为一个引领生活方式的世界级品牌，并非只聚焦于联合办公产品，而是以空间产品为主轴，以人们2/3的时间为切入点，思考如何更好地服务城市，服务城市中的人。Bee+希望可以结合WeWork的模式+星巴克的理念+苹果的产品，为人们创造多元的、具有颠覆色彩的空间场景体验。</p>\n<p>Bee+ hopes to become a world-class brand leading the way of life. Instead of focusing on co-working products, Bee takes space products as the main axis and takes 2/3 of people's time as the entry point to think about how to better serve the city and the people in the city. Bee+ hopes to create diversified and subversive space scene experience for people by combining WeWork mode, starbucks concept and apple products.</p>\n<p>&nbsp;</p>\n<p><img src=\"http://bw-qiniu.beeplus.xyz/1548739292493.png\" alt=\"\" /></p>\n<p style=\"text-align: center;\">即刻致电官方客服热线</p>\n<p style=\"text-align: center;\">400-888-7000</p>\n<p style=\"text-align: center;\">体验颠覆式的办公与生活方式</p>\n<p style=\"text-align: center;\">&nbsp;</p>\n<p style=\"text-align: center;\">Call the official customer service hotline immediately</p>\n<p style=\"text-align: center;\">The 400-888-7000</p>\n<p style=\"text-align: center;\">&nbsp;</p>\n<p style=\"text-align: center;\">Experience a disruptive way of working and living</p>`
    },
    type: {
      type: String,
      value: 'html'
    }
  },
  data: {
    transData: {},
  },

  lifetimes: {
    attached() {
      const {
        data,
        type
      } = this.data
      let transData = {} //存放转化后的数据
      if (type === 'html') {
        transData = HtmlToJson.html2json(data, 'transData')
      } else if (type === 'md' || type === 'markdown') {
        var converter = new showdown.Converter()
        var html = converter.makeHtml(data)
        transData = HtmlToJson.html2json(html, 'transData')
      }
      transData.view = {}
      transData.view.imagePadding = 0
      if (typeof (imagePadding) !== 'undefined') {
        transData.view.imagePadding = imagePadding
      }
      this.setData({
        transData
      })
    }
  },

  methods: {
    // 图片点击事件
    wxParseImgTap(e) {
      var that = this;
      var nowImgUrl = e.target.dataset.src;
      var tagFrom = e.target.dataset.from;
      if (typeof (tagFrom) != 'undefined' && tagFrom.length > 0) {
        wx.previewImage({
          current: nowImgUrl, // 当前显示图片的http链接
          urls: that.data[tagFrom].imageUrls // 需要预览的图片http链接列表
        })
      }
    },

    /**
     * 图片视觉宽高计算函数区
     **/
    wxParseImgLoad(e) {
      var that = this;
      var tagFrom = e.target.dataset.from;
      var idx = e.target.dataset.idx;
      if (typeof (tagFrom) != 'undefined' && tagFrom.length > 0) {
        calMoreImageInfo(e, idx, that, tagFrom)
      }
    }
  }
});

// 假循环获取计算图片视觉最佳宽高
function calMoreImageInfo(e, idx, that, bindName) {
  var temData = that.data[bindName];
  if (!temData || temData.images.length == 0) {
    return;
  }
  var temImages = temData.images;
  //因为无法获取view宽度 需要自定义padding进行计算，稍后处理
  var recal = wxAutoImageCal(e.detail.width, e.detail.height, that, bindName);
  // temImages[idx].width = recal.imageWidth;
  // temImages[idx].height = recal.imageheight;
  // temData.images = temImages;
  // var bindData = {};
  // bindData[bindName] = temData;
  // that.setData(bindData);
  var index = temImages[idx].index
  var key = `${bindName}`
  for (var i of index.split('.')) key += `.nodes[${i}]`
  var keyW = key + '.width'
  var keyH = key + '.height'
  that.setData({
    [keyW]: recal.imageWidth,
    [keyH]: recal.imageheight,
  })
}

// 计算视觉优先的图片宽高
function wxAutoImageCal(originalWidth, originalHeight, that, bindName) {
  //获取图片的原始长宽
  var windowWidth = 0,
    windowHeight = 0;
  var autoWidth = 0,
    autoHeight = 0;
  var results = {};
  var padding = that.data[bindName].view.imagePadding;
  windowWidth = realWindowWidth - 2 * padding;
  windowHeight = realWindowHeight;
  //判断按照那种方式进行缩放
  // // console.log("windowWidth" + windowWidth);
  if (originalWidth > windowWidth) { //在图片width大于手机屏幕width时候
    autoWidth = windowWidth;
    // // console.log("autoWidth" + autoWidth);
    autoHeight = (autoWidth * originalHeight) / originalWidth;
    // // console.log("autoHeight" + autoHeight);
    results.imageWidth = autoWidth;
    results.imageheight = autoHeight;
  } else { //否则展示原来的数据
    results.imageWidth = originalWidth;
    results.imageheight = originalHeight;
  }
  return results;
}