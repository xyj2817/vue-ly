webpackJsonp([1],{"4zvR":function(t,e){},"5hLt":function(t,e){},"6a55":function(t,e){},BjtM:function(t,e){},D8qM:function(t,e){},EWdL:function(t,e){},GPKa:function(t,e){},In6S:function(t,e){},Jx29:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("IvJb"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("C7Lr")({name:"App"},n,!1,function(t){i("a+L9")},null,null).exports,r=i("zO6J"),o=i("4YfN"),c=i.n(o),l=i("9rMa"),d={name:"HomeHeader",computed:c()({},Object(l.b)(["city"]))},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[this._v("\n      "+this._s(this.city)+"\n      "),e("span",{staticClass:"iconfont arrow-icon"},[this._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("span",{staticClass:"iconfont back-icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n         输入城市/景点/游玩主题\n  ")])}]};var h=i("C7Lr")(d,u,!1,function(t){i("EWdL")},"data-v-0dae441c",null).exports,p={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0}}},computed:{showSwiper:function(){return this.list.length}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.showSwiper?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var v=i("C7Lr")(p,m,!1,function(t){i("D8qM")},"data-v-11280134",null).exports,f={name:"HomeIcons",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination"}}},computed:{pages:function(){var t=[];return this.list.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.swiperOption}},[t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.index,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl}})]),t._v(" "),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])}))}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var C=i("C7Lr")(f,_,!1,function(t){i("RJJG")},"data-v-225acce2",null).exports,g={name:"HomeRecommend",props:{list:Array}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"recommend-title"},[t._v("热销推荐")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])}))])},staticRenderFns:[]};var w=i("C7Lr")(g,y,!1,function(t){i("gQEO")},"data-v-f8da6228",null).exports,b={name:"HomeWeekend",props:{list:Array}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"recommend-title"},[t._v("周末去哪儿")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-warpper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}))])},staticRenderFns:[]};var L=i("C7Lr")(b,k,!1,function(t){i("W5SP")},"data-v-13f18a77",null).exports,$=i("aozt"),x=i.n($),S={name:"Home",components:{HomeHeader:h,HomeSwiper:v,HomeIcons:C,HomeRecommend:w,HomeWeekend:L},data:function(){return{lastCity:"",swiperList:[],iconList:[],recommendList:[],weekendList:[]}},computed:c()({},Object(l.b)(["city"])),methods:{getHomeInfo:function(){x.a.get("/static/mock/index.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},I={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header"),t._v(" "),i("home-swiper",{attrs:{list:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{list:t.iconList}}),t._v(" "),i("home-recommend",{attrs:{list:t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{list:t.weekendList}})],1)},staticRenderFns:[]};var E=i("C7Lr")(S,I,!1,function(t){i("mLD/")},null,null).exports,R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._v("\n  城市选择\n  "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-back"},[this._v("")])])],1)},staticRenderFns:[]};var H=i("C7Lr")({name:"CityHeader"},R,!1,function(t){i("PYc9")},"data-v-c8810160",null).exports,A=i("yKqG"),F={name:"CitySearch",props:{cities:Object},data:function(){return{keyword:"",list:[],timer:null}},methods:{handleClickCity:function(t){this.$store.dispatch("changeCity",t),this.$router.push("/")}},computed:{hasNoData:function(){return!this.list.length}},watch:{keyword:function(){var t=this;this.timer&&clearInterval(this.timer),this.keyword?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e},100):this.list=[]}},mounted:function(){this.scroll=new A.a(this.$refs.search)}},j={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search-item border-bottom",on:{click:function(i){t.handleClickCity(e.name)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-item border-bottom"},[t._v("没有找到匹配数据")])],2)])])},staticRenderFns:[]};var D=i("C7Lr")(F,j,!1,function(t){i("In6S")},"data-v-76689058",null).exports,N={name:"CityList",props:{hot:Array,cities:Object,letter:String},methods:{handleClickCity:function(t){this.$store.dispatch("changeCity",t),this.$router.push("/")}},watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];console.log(this.$refs[this.letter][0]),this.scroll.scrollToElement(t)}}},mounted:function(){this.scroll=new A.a(this.$refs.warpper)}},T={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"warpper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-warpper"},[i("div",{staticClass:"button"},[t._v(t._s(this.$store.state.city))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.hot,function(e){return i("div",{key:e.id,staticClass:"button-warpper",on:{click:function(i){t.handleClickCity(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}))]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),t._l(e,function(e){return i("div",{key:e.id,staticClass:"item-list"},[i("div",{staticClass:"item border-bottom",on:{click:function(i){t.handleClickCity(e.name)}}},[t._v(t._s(e.name))])])})],2)})],2)])},staticRenderFns:[]};var O=i("C7Lr")(N,T,!1,function(t){i("YKLe")},"data-v-2c52320c",null).exports,G={name:"CityAlphabet",props:{cities:Object},data:function(){return{touchStatus:!1,startY:0,timer:null}},updated:function(){this.startY=this.$refs.A[0].offsetTop},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},methods:{handleLetterClick:function(t){this.$emit("change",t.target.innerText)},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t){var e=this;this.touchStatus&&(this.timer&&clearInterval(this.timer),this.timer=setTimeout(function(){var i=t.touches[0].clientY-80,s=Math.floor((i-e.startY)/20);s>=0&&s<=e.letters.length&&e.$emit("change",e.letters[s])},16))},handleTouchEnd:function(){this.touchStatus=!1}}},M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{click:t.handleLetterClick,touchstart:t.handleTouchStart,touchmove:t.handleTouchMove,touchend:t.handleTouchEnd}},[t._v("\n    "+t._s(e)+"\n  ")])}))},staticRenderFns:[]};var P={name:"City",components:{CityHeader:H,CitySearch:D,CityList:O,CityAlphabet:i("C7Lr")(G,M,!1,function(t){i("Ybg5")},"data-v-2c30a848",null).exports},data:function(){return{cities:{},hotCities:[],letter:""}},methods:{getCityInfo:function(){x.a.get("/static/mock/city.json").then(this.handleGetCityInfoSucc)},handleGetCityInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.cities=e.cities,this.hotCities=e.hotCities}},handleLetterChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},Y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{hot:t.hotCities,cities:t.cities,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.handleLetterChange}})],1)},staticRenderFns:[]};var B=i("C7Lr")(P,Y,!1,function(t){i("4zvR")},"data-v-2d24aa9e",null).exports,J={name:"CommonGallary",props:{imgs:{type:Array,default:function(){return[]}},gallaryImgs:Array},data:function(){return{swiperOptions:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}},methods:{handleGallaryClick:function(){this.$emit("close")}}},z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.handleGallaryClick}},[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOptions}},[this._l(this.gallaryImgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"gallary-img",attrs:{src:t}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var U=i("C7Lr")(J,z,!1,function(t){i("GPKa")},"data-v-083d9a9e",null).exports,W={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var q={name:"DetailBanner",components:{FadeAnimation:i("C7Lr")({name:"FadeAnimation"},W,!1,function(t){i("jovs")},"data-v-54171555",null).exports,CommonGallary:U},props:{sightName:String,bannerImg:String,gallaryImgs:Array},data:function(){return{showGallary:!1,imgUrl:["http://img1.qunarzz.com/sight/p0/1411/38/217a6ffc968923cd95404a9b1e9e85e8.water.jpg_r_800x800_a67f524e.jpg","http://img1.qunarzz.com/sight/p0/1411/e2/054836aeec12503879a5a4efa9c0ca75.water.jpg_r_800x800_2b124f5d.jpg"]}},methods:{handleBannerClick:function(){this.showGallary=!0},handleGallaryClick:function(){this.showGallary=!1}}},K={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.handleBannerClick}},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerImg}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-title"},[t._v("\n        "+t._s(this.sightName)+"\n      ")]),t._v(" "),i("div",{staticClass:"banner-number"},[i("span",{staticClass:"iconfont banner-icon"},[t._v("")]),t._v("\n        "+t._s(this.gallaryImgs.length)+"\n      ")])])]),t._v(" "),i("fade-animation",[i("common-gallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{imgs:t.imgUrl,gallaryImgs:t.gallaryImgs},on:{close:t.handleGallaryClick}})],1)],1)},staticRenderFns:[]};var Q=i("C7Lr")(q,K,!1,function(t){i("6a55")},"data-v-33d44e5a",null).exports,X={name:"DetailHeader",data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t>60){var e=t/140;e=e>1?1:e,this.opacityStyle={opacity:e},this.showAbs=!1}else this.showAbs=!0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},unmounted:function(){window.removeEventListener("scroll",this.handleScroll)}},V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:this.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{tag:"div",to:"/"}},[e("div",{staticClass:"iconfont header-abs-back"},[this._v("")])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:this.opacityStyle},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-fixed-back"},[this._v("")])]),this._v("\n    景点详情\n  ")],1)],1)},staticRenderFns:[]};var Z=i("C7Lr")(X,V,!1,function(t){i("b4EL")},"data-v-5e011656",null).exports,tt={name:"DetailList",props:{list:Array}},et={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"item"},[i("div",{staticClass:"item-title border-bottom"},[i("span",{staticClass:"item-title-icon"}),t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),e.children?i("div",{staticClass:"item-chilren"},[i("detail-list",{attrs:{list:e.children}})],1):t._e()])}))},staticRenderFns:[]};var it={name:"Detail",components:{DetailBanner:Q,DetailHeader:Z,DetailList:i("C7Lr")(tt,et,!1,function(t){i("5hLt")},"data-v-b44eeb5a",null).exports},data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],categoryList:[]}},methods:{getDetailInfo:function(){x.a.get("/static/mock/detail.json?id="+this.$route.params.id).then(this.getDetailInfoSucc)},getDetailInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.gallaryImgs=e.gallaryImgs,this.categoryList=e.categoryList}}},mounted:function(){this.getDetailInfo()}},st={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detail-banner",{attrs:{sightName:this.sightName,bannerImg:this.bannerImg,gallaryImgs:this.gallaryImgs}}),this._v(" "),e("detail-header"),this._v(" "),e("detail-list",{attrs:{list:this.categoryList}}),this._v(" "),e("div",{staticClass:"showdiv"})],1)},staticRenderFns:[]};var nt=i("C7Lr")(it,st,!1,function(t){i("Jx29")},"data-v-7be8b37b",null).exports;s.a.config.productionTip=!1,s.a.use(r.a);var at=new r.a({routes:[{path:"/",name:"Home",component:E},{path:"/city",name:"City",component:B},{path:"/detail/:id",name:"Detail",component:nt}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),rt=i("iDdd"),ot=i.n(rt),ct=i("41jX"),lt=i.n(ct);s.a.use(l.a);var dt="上海";try{localStorage.city&&(dt=localStorage.city)}catch(t){}var ut=new l.a.Store({state:{city:dt},actions:{changeCity:function(t,e){t.commit("changeCity",e)}},mutations:{changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}}});i("m0iu"),i("cjdf"),i("BjtM"),i("aEDl");s.a.config.productionTip=!1,s.a.use(lt.a),ot.a.attach(document.body),new s.a({el:"#app",router:at,store:ut,components:{App:a},template:"<App/>"})},PYc9:function(t,e){},RJJG:function(t,e){},UGy7:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("C7Lr")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},W5SP:function(t,e){},YKLe:function(t,e){},Ybg5:function(t,e){},"a+L9":function(t,e){},aEDl:function(t,e){},b4EL:function(t,e){},cjdf:function(t,e){},gQEO:function(t,e){},jovs:function(t,e){},m0iu:function(t,e){},"mLD/":function(t,e){},syvT:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("Bnvi"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("C7Lr")(n,a,!1,null,null,null);e.default=r.exports}},["NHnr"]);
//# sourceMappingURL=app.19ead30124669a84c637.js.map