(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/quarterlygoals/quarterlygoals"],{"13c8":function(e,t,r){"use strict";var a,n=function(){var e=this,t=e.$createElement;e._self._c},u=[];r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return a}))},"2e50":function(e,t,r){"use strict";r.r(t);var a=r("13c8"),n=r("90a9");for(var u in n)"default"!==u&&function(e){r.d(t,e,(function(){return n[e]}))}(u);r("9229");var o,c=r("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);t["default"]=s.exports},"90a9":function(e,t,r){"use strict";r.r(t);var a=r("cb37"),n=r.n(a);for(var u in a)"default"!==u&&function(e){r.d(t,e,(function(){return a[e]}))}(u);t["default"]=n.a},9229:function(e,t,r){"use strict";var a=r("db38"),n=r.n(a);n.a},a052:function(e,t,r){"use strict";(function(e){r("d5ac");a(r("66fd"));var t=a(r("2e50"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("543d")["createPage"])},cb37:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(r("4795")),n=r("63d6");function u(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r,a,n,u,o){try{var c=e[u](o),s=c.value}catch(i){return void r(i)}c.done?t(s):Promise.resolve(s).then(a,n)}function c(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var u=e.apply(t,r);function c(e){o(u,a,n,c,s,"next",e)}function s(e){o(u,a,n,c,s,"throw",e)}c(void 0)}))}}var s={data:function(){return{tabs:[{id:1,name:"第一季度"},{id:2,name:"第二季度"},{id:3,name:"第三季度"},{id:4,name:"第四季度"}],table:[{id:1,name:"工作指标",children:[{complete:!1,content:"",importanceLevel:"",aimMeasures:"",quarter:"",quarterOrMonthFlag:"quarter",type:"工作指标",year:(new Date).getFullYear()},{complete:!1,content:"",importanceLevel:"",aimMeasures:"",quarter:"",quarterOrMonthFlag:"quarter",type:"工作指标",year:(new Date).getFullYear()},{complete:!1,content:"",importanceLevel:"",aimMeasures:"",quarter:"",quarterOrMonthFlag:"quarter",type:"工作指标",year:(new Date).getFullYear()},{complete:!1,content:"",importanceLevel:"",aimMeasures:"",quarter:"",quarterOrMonthFlag:"quarter",type:"工作指标",year:(new Date).getFullYear()},{complete:!1,content:"",importanceLevel:"",aimMeasures:"",quarter:"",quarterOrMonthFlag:"quarter",type:"工作指标",year:(new Date).getFullYear()}]},{id:2,name:"其他目标",children:[{complete:!1,content:"",importanceLevel:"学习计划",aimMeasures:"",quarter:"",quarterOrMonthFlag:"quarter",type:"其他目标",year:(new Date).getFullYear()},{complete:!1,content:"",importanceLevel:"健康计划",aimMeasures:"",quarter:"",quarterOrMonthFlag:"quarter",type:"其他目标",year:(new Date).getFullYear()},{complete:!1,content:"",importanceLevel:"本季度反省",aimMeasures:"",quarter:"",quarterOrMonthFlag:"quarter",type:"其他目标",year:(new Date).getFullYear()}]}],reasonArr:[{content:"",type:"未完成目标的障碍和原因"},{content:"",type:"客服障碍的对策和方法"},{content:"",type:"本季度创新与收获"}],update:!0,update1:!0,changeIndex:1}},methods:{changeTab:function(e){var t=this;return c(a.default.mark((function r(){return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.changeIndex=e,t.getUserQuarter(),t.getUserSummary();case 3:case"end":return r.stop()}}),r)})))()},handleReason:function(t,r){var u=this;return c(a.default.mark((function o(){var c,s,i;return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return c=t.detail.value,s={content:c,quarter:u.changeIndex,type:r.type,userid:e.getStorageSync("userID"),year:(new Date).getFullYear()},r.id&&(s.id=r.id),a.next=5,(0,n.myAxios)({method:"post",url:"/anonymous/updateSummarize",data:s});case 5:i=a.sent,200==i.data.statusCode?u.getUserSummary():e.showToast({title:"更新失败,请重试",icon:"none",duration:500});case 7:case"end":return a.stop()}}),o)})))()},handleComplete:function(t){var r=this;return c(a.default.mark((function u(){var o,c;return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(o={complete:!t.complete,content:t.content,importanceLevel:t.importanceLevel,aimMeasures:t.aimMeasures,type:t.type,quarter:r.changeIndex,userId:e.getStorageSync("userID"),year:t.year},!t.id){a.next=7;break}return o.id=t.id,a.next=5,(0,n.myAxios)({method:"post",url:"/anonymous/updateOrInsertAirms",data:o});case 5:c=a.sent,200==c.data.statusCode?r.getUserQuarter():e.showToast({title:"更新失败,请重试",icon:"none",duration:500});case 7:case"end":return a.stop()}}),u)})))()},handleMeasures:function(t,r){var u=this;return c(a.default.mark((function o(){var c,s,i;return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return c=t.detail.value,s={complete:r.complete,content:r.content,importanceLevel:r.importanceLevel,aimMeasures:c,type:r.type,quarter:u.changeIndex,userId:e.getStorageSync("userID"),year:r.year},r.id&&(s.id=r.id),a.next=5,(0,n.myAxios)({method:"post",url:"/anonymous/updateOrInsertAirms",data:s});case 5:i=a.sent,200==i.data.statusCode?u.getUserQuarter():e.showToast({title:"更新失败,请重试",icon:"none",duration:500});case 7:case"end":return a.stop()}}),o)})))()},handleContent:function(t,r){var u=this;return c(a.default.mark((function o(){var c,s,i;return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return c=t.detail.value,s={complete:r.complete,content:c,importanceLevel:r.importanceLevel,aimMeasures:r.aimMeasures,type:r.type,quarter:u.changeIndex,userId:e.getStorageSync("userID"),year:r.year},r.id&&(s.id=r.id),a.next=5,(0,n.myAxios)({method:"post",url:"/anonymous/updateOrInsertAirms",data:s});case 5:i=a.sent,200==i.data.statusCode?u.getUserQuarter():e.showToast({title:"更新失败,请重试",icon:"none",duration:500});case 7:case"end":return a.stop()}}),o)})))()},handleLevel:function(t,r){var u=this;return c(a.default.mark((function o(){var c,s,i;return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return c=t.detail.value,s={complete:r.complete,content:r.content,importanceLevel:c,aimMeasures:r.aimMeasures,type:r.type,quarter:u.changeIndex,userId:e.getStorageSync("userID"),year:r.year},r.id&&(s.id=r.id),a.next=5,(0,n.myAxios)({method:"post",url:"/anonymous/updateOrInsertAirms",data:s});case 5:i=a.sent,200==i.data.statusCode?u.getUserQuarter():e.showToast({title:"更新失败,请重试",icon:"none",duration:500});case 7:case"end":return a.stop()}}),o)})))()},getTime:function(){var e=new Date,t=e.getFullYear(),r=e.getMonth()+1,a=e.getDate();return r=r<10?"0"+r:r,a=a<10?"0"+a:a,t+"-"+r+"-"+a},getUserSummary:function(){var t=this;return c(a.default.mark((function r(){var u,o;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.update1=!1,r.next=3,(0,n.myAxios)({method:"post",url:"/anonymous/querySummarize",data:{quarter:t.changeIndex,userid:e.getStorageSync("userID"),year:(new Date).getFullYear()}});case 3:u=r.sent,200==u.data.statusCode&&u.data.result?(t.reasonArr=[{content:"",type:"未完成目标的障碍和原因"},{content:"",type:"客服障碍的对策和方法"},{content:"",type:"本季度创新与收获"}],o=u.data.result,o.forEach((function(e){for(var r=0;r<t.reasonArr.length;r++)e.type==t.reasonArr[r].type&&(t.reasonArr[r]=e)}))):e.showToast({title:"获取季度总结失败,请重试",icon:"none",duration:500}),t.update1=!0;case 6:case"end":return r.stop()}}),r)})))()},getUserQuarter:function(){var t=this;return c(a.default.mark((function r(){var u,o,c,s;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.update=!1,r.next=3,(0,n.myAxios)({method:"post",url:"/anonymous/findAimsByCondition",data:{quarter:t.changeIndex,userId:e.getStorageSync("userID"),year:(new Date).getFullYear()}});case 3:u=r.sent,200==u.data.statusCode&&u.data.otherTarget&&u.data.workIndex?(t.table=[{id:1,name:"工作指标",children:[{complete:!1,content:"",importanceLevel:"",aimMeasures:"",quarter:"",quarterOrMonthFlag:"quarter",type:"工作指标",year:(new Date).getFullYear()},{complete:!1,content:"",importanceLevel:"",aimMeasures:"",quarter:"",quarterOrMonthFlag:"quarter",type:"工作指标",year:(new Date).getFullYear()},{complete:!1,content:"",importanceLevel:"",aimMeasures:"",quarter:"",quarterOrMonthFlag:"quarter",type:"工作指标",year:(new Date).getFullYear()},{complete:!1,content:"",importanceLevel:"",aimMeasures:"",quarter:"",quarterOrMonthFlag:"quarter",type:"工作指标",year:(new Date).getFullYear()},{complete:!1,content:"",importanceLevel:"",aimMeasures:"",quarter:"",quarterOrMonthFlag:"quarter",type:"工作指标",year:(new Date).getFullYear()}]},{id:2,name:"其他目标",children:[{complete:!1,content:"",importanceLevel:"学习计划",aimMeasures:"",quarter:"",quarterOrMonthFlag:"quarter",type:"其他目标",year:(new Date).getFullYear()},{complete:!1,content:"",importanceLevel:"健康计划",aimMeasures:"",quarter:"",quarterOrMonthFlag:"quarter",type:"其他目标",year:(new Date).getFullYear()},{complete:!1,content:"",importanceLevel:"本季度反省",aimMeasures:"",quarter:"",quarterOrMonthFlag:"quarter",type:"其他目标",year:(new Date).getFullYear()}]}],o=u.data,c=o.otherTarget,s=o.workIndex,s.forEach((function(e,r){t.table[0].children[r]=e,t.table[0].children.length=5})),c.forEach((function(e,r){"学习计划"==e.importanceLevel?t.table[1].children[0]=e:"健康计划"==e.importanceLevel?t.table[1].children[1]=e:"本季度反省"==e.importanceLevel?t.table[1].children[2]=e:table[1].children.push(e),t.table[1].children.length=3}))):e.showToast({title:"获取季度信息失败,请重试",icon:"none",duration:500}),t.update=!0;case 6:case"end":return r.stop()}}),r)})))()}},onLoad:function(){this.getUserQuarter(),this.getUserSummary()}};t.default=s}).call(this,r("543d")["default"])},db38:function(e,t,r){}},[["a052","common/runtime","common/vendor"]]]);