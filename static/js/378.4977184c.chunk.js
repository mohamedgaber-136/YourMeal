"use strict";(self.webpackChunkyourmeal=self.webpackChunkyourmeal||[]).push([[378],{1378:function(e,a,t){t.r(a),t.d(a,{default:function(){return o}});var s=t(9439),n=t(2791),r=t(9126),i=t(184),c=function(e){var a=e.data;return(0,i.jsx)("div",{className:"cardContainer",children:(0,i.jsxs)("div",{className:"mainCard d-flex flex-column",children:[(0,i.jsx)("div",{className:"top",children:(0,i.jsx)("img",{src:a.strCategoryThumb,alt:"CardProduct",width:"100%",height:"100%"})}),(0,i.jsx)("div",{className:"bottom bg-dark d-flex flex-column justify-content-center align-items-center",children:(0,i.jsxs)("div",{className:"productTitle text-center text-white ",children:[(0,i.jsx)("p",{children:a.strCategory}),(0,i.jsxs)("div",{className:"d-flex gap-2 align-items-center justify-content-center",children:[(0,i.jsxs)("div",{className:"d-flex gap-2",children:[(0,i.jsx)(r.kRm,{className:"text-warning star"}),(0,i.jsx)(r.kRm,{className:"text-warning star"}),(0,i.jsx)(r.kRm,{className:"text-warning star"}),(0,i.jsx)(r.kRm,{className:"text-warning star"}),(0,i.jsx)(r.kRm,{className:"text-dark star"})]}),(0,i.jsx)("div",{children:(0,i.jsxs)("p",{className:"bottomPara text-white m-0",children:["Rate(128 ",(0,i.jsx)("span",{className:"text-warning",children:"review"})," )"]})})]})]})})]})})},l=t(7689),d=t(3779),o=function(e){var a=e.categNames,t=e.singleCateg,r=(0,l.UO)().categName,o=(0,n.useState)([]),m=(0,s.Z)(o,2),x=m[0],u=m[1],f=(0,n.useState)(!0),j=(0,s.Z)(f,2),h=j[0],g=j[1],v=(0,n.useState)([]),N=(0,s.Z)(v,2),k=N[0],p=N[1];return(0,n.useEffect)((function(){null!=JSON.parse(sessionStorage.getItem("userData"))&&p(JSON.parse(sessionStorage.getItem("userData")))}),[]),(0,n.useEffect)((function(){"All"==r||void 0==r?(u(a),g(!0)):(u(t),g(!1))})),(0,i.jsx)("div",{className:"d-flex justify-content-center mt-2",children:(0,i.jsx)("div",{className:"d-flex gap-2  p-2 justify-content-center align-content-center flex-wrap CardsContainer",children:x.map((function(e,a){return h?(0,i.jsx)(c,{data:e},a):(0,i.jsx)(d.X,{data:e,UserData:k},a)}))})})}},3779:function(e,a,t){t.d(a,{X:function(){return o}});var s=t(3433),n=t(9439),r=t(1087),i=t(2791),c=t(2264),l=t(184),d=function(){return(0,l.jsx)("div",{children:(0,l.jsx)("img",{src:c,alt:"Loader"})})},o=function(e){var a=e.data,t=e.UserData,c=(0,i.useState)(!1),o=(0,n.Z)(c,2),m=o[0],x=o[1];return void 0==a?(0,l.jsx)(d,{}):(0,l.jsxs)("div",{className:"card",children:[(0,l.jsx)("i",{onClick:function(){if(void 0!=t[0]&&(x(!0),t[0].FavMeals.push(a)),m){x(!1);var e=t[0].FavMeals.filter((function(e){return e!=a}));t[0].FavMeals=(0,s.Z)(e)}},class:m?"fa-solid bookmark text-warning fa-bookmark":"fa-solid bookmark fa-bookmark"}),(0,l.jsx)("div",{className:"image",children:(0,l.jsx)("img",{src:a.strMealThumb,width:"100%",height:"100%",alt:"plateImg"})}),(0,l.jsx)("div",{className:"card-info ",children:(0,l.jsx)("span",{children:a.strMeal})}),(0,l.jsx)(r.rU,{to:"/PlateDetails",className:"button mb-1",state:a.idMeal,children:"More..."})]})}}}]);
//# sourceMappingURL=378.4977184c.chunk.js.map