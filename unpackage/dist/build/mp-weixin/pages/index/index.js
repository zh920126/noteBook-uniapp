(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"01c5":function(e,t,n){"use strict";(function(e){n("d5ac");a(n("66fd"));var t=a(n("c9cd"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},3394:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n("4795")),r=n("63d6");function u(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,a,r,u,o){try{var s=e[u](o),i=s.value}catch(c){return void n(c)}s.done?t(i):Promise.resolve(i).then(a,r)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var u=e.apply(t,n);function s(e){o(u,a,r,s,i,"next",e)}function i(e){o(u,a,r,s,i,"throw",e)}s(void 0)}))}}var i={data:function(){return{userDream:[{name:"人生蓝图",url:"/pages/blueprint/blueprint"},{name:"季度目标",url:"/pages/quarterlygoals/quarterlygoals"},{name:"月度目标",url:"/pages/monthygoals/monthygoals"},{name:"周目标",url:"/pages/weekgoals/weekgoals"}],userInfo:e.getStorageInfoSync("userInfo")||{},update:!0}},onLoad:function(e){console.log(e),this.getUserInfo()},methods:{handleUserEmail:function(t,n){var u=this;return s(a.default.mark((function o(){var s,i,c;return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=t.detail.value,i={address:n.address,email:s,mobile:+n.mobile,name:n.name,qqNumber:n.qqNumber,wechatNumber:n.wechatNumber,userid:e.getStorageSync("userID")},a.next=4,(0,r.myAxios)({method:"post",url:"/anonymous/updateUserInfo",data:i});case 4:c=a.sent,200==c.data.statusCode?u.getUserInfo():e.showToast({title:"更新失败,请重试",icon:"none",duration:500});case 6:case"end":return a.stop()}}),o)})))()},handleUserWechat:function(t,n){var u=this;return s(a.default.mark((function o(){var s,i,c;return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=t.detail.value,i={address:n.address,email:n.email,mobile:+n.mobile,name:n.name,qqNumber:n.qqNumber,wechatNumber:s,userid:e.getStorageSync("userID")},a.next=4,(0,r.myAxios)({method:"post",url:"/anonymous/updateUserInfo",data:i});case 4:c=a.sent,200==c.data.statusCode?u.getUserInfo():e.showToast({title:"更新失败,请重试",icon:"none",duration:500});case 6:case"end":return a.stop()}}),o)})))()},handleUserQQ:function(t,n){var u=this;return s(a.default.mark((function o(){var s,i,c;return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=t.detail.value,i={address:n.address,email:n.email,mobile:n.mobile,name:n.name,qqNumber:+s,wechatNumber:n.wechatNumber,userid:e.getStorageSync("userID")},a.next=4,(0,r.myAxios)({method:"post",url:"/anonymous/updateUserInfo",data:i});case 4:c=a.sent,200==c.data.statusCode?u.getUserInfo():e.showToast({title:"更新失败,请重试",icon:"none",duration:500});case 6:case"end":return a.stop()}}),o)})))()},handleUserAddress:function(t,n){var u=this;return s(a.default.mark((function o(){var s,i,c;return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=t.detail.value,i={address:s,email:n.email,mobile:n.mobile,name:n.name,qqNumber:n.qqNumber,userid:e.getStorageSync("userID"),wechatNumber:n.wechatNumber},a.next=4,(0,r.myAxios)({method:"post",url:"/anonymous/updateUserInfo",data:i});case 4:c=a.sent,200==c.data.statusCode?u.getUserInfo():e.showToast({title:"更新失败,请重试",icon:"none",duration:500});case 6:case"end":return a.stop()}}),o)})))()},getUserInfo:function(){var t=this;return s(a.default.mark((function n(){var u;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.update=!1,n.next=3,(0,r.myAxios)({method:"post",url:"/anonymous/queryUserInfo",data:{userid:e.getStorageSync("userID")}});case 3:u=n.sent,200==u.statusCode&&u.data?t.userInfo=u.data:e.showToast({title:"获取用户信息失败,请重试",icon:"none",duration:500}),t.update=!0;case 6:case"end":return n.stop()}}),n)})))()},goToelsePage:function(t){console.log(t),e.navigateTo({url:t})}}};t.default=i}).call(this,n("543d")["default"])},3487:function(e,t,n){"use strict";var a,r=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return a}))},3736:function(e,t,n){},"525e":function(e,t,n){"use strict";var a=n("3736"),r=n.n(a);r.a},c9cd:function(e,t,n){"use strict";n.r(t);var a=n("3487"),r=n("e6a2");for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n("525e");var o,s=n("f0c5"),i=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"0885fc33",null,!1,a["a"],o);t["default"]=i.exports},e6a2:function(e,t,n){"use strict";n.r(t);var a=n("3394"),r=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=r.a}},[["01c5","common/runtime","common/vendor"]]]);