"use strict";(self.webpackChunkyourmeal=self.webpackChunkyourmeal||[]).push([[159],{3779:function(e,a,t){t.d(a,{X:function(){return u}});var s=t(3433),n=t(9439),r=t(1087),c=t(2791),i=t(2264),l=t(184),o=function(){return(0,l.jsx)("div",{children:(0,l.jsx)("img",{src:i,alt:"Loader"})})},u=function(e){var a=e.data,t=e.UserData,i=(0,c.useState)(!1),u=(0,n.Z)(i,2),d=u[0],f=u[1];return void 0==a?(0,l.jsx)(o,{}):(0,l.jsxs)("div",{className:"card",children:[(0,l.jsx)("i",{onClick:function(){if(void 0!=t[0]&&(f(!0),t[0].FavMeals.push(a)),d){f(!1);var e=t[0].FavMeals.filter((function(e){return e!=a}));t[0].FavMeals=(0,s.Z)(e)}},class:d?"fa-solid bookmark text-warning fa-bookmark":"fa-solid bookmark fa-bookmark"}),(0,l.jsx)("div",{className:"image",children:(0,l.jsx)("img",{src:a.strMealThumb,width:"100%",height:"100%",alt:"plateImg"})}),(0,l.jsx)("div",{className:"card-info ",children:(0,l.jsx)("span",{children:a.strMeal})}),(0,l.jsx)(r.rU,{to:"/PlateDetails",className:"button mb-1",state:a.idMeal,children:"More..."})]})}},3159:function(e,a,t){t.r(a),t.d(a,{default:function(){return d}});var s=t(4165),n=t(5861),r=t(9439),c=t(2791),i=t(565),l=t(1243),o=t(3779),u=t(184),d=function(){var e=(0,c.useContext)(i.P).searchText;console.log(e);var a=(0,c.useState)([]),t=(0,r.Z)(a,2),d=t[0],f=t[1],h=function(){var a=(0,n.Z)((0,s.Z)().mark((function a(){var t,n;return(0,s.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.Z.get("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(e));case 2:t=a.sent,n=t.data,f(n.meals);case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return(0,c.useEffect)((function(){h()}),[]),(0,u.jsx)("div",{className:"searchParent",children:(0,u.jsx)("div",{className:"d-flex h-100 px-4 justify-content-center align-items-center ",children:(0,u.jsx)("div",{className:"d-flex  searchChild justify-content-start align-items-center gap-2",children:d.map((function(e,a){return(0,u.jsx)("div",{className:"",children:(0,u.jsx)(o.X,{data:e})},a)}))})})})}}}]);
//# sourceMappingURL=159.1644d4e1.chunk.js.map