(this["webpackJsonpmenu-list"]=this["webpackJsonpmenu-list"]||[]).push([[0],{13:function(e,i,t){"use strict";t.r(i);var a=t(1),c=t.n(a),n=t(6),l=t.n(n),r=t(4),g=t(7),m=t(0),s=function(e){var i=e.items;return Object(m.jsx)("main",{className:"l-main",children:Object(m.jsx)("section",{className:"menu section bd-container",id:"menu",children:Object(m.jsx)("div",{className:"menu__container bd-grid",children:i.map((function(e){var i=e.id,t=e.title,a=e.img,c=e.price;return Object(m.jsxs)("div",{className:"menu__content",children:[Object(m.jsx)("img",{src:a,alt:"",className:"menu__img"}),Object(m.jsx)("h3",{className:"menu__name",children:t}),Object(m.jsx)("span",{className:"menu__detail",children:Object(m.jsx)("hr",{})}),Object(m.jsx)("span",{className:"menu__preci",children:c})]},i)}))})})})},o=function(e){var i=e.categories,t=e.filterItems,a=e.activeCategory;return Object(m.jsxs)("div",{children:[Object(m.jsx)("a",{href:"#",className:"scrolltop",id:"scroll-top",children:Object(m.jsx)("i",{className:"bx bx-chevron-up scrolltop__icon"})}),Object(m.jsx)("header",{className:"l-header",id:"header",children:Object(m.jsxs)("nav",{className:"nav bd-container",children:[Object(m.jsx)("a",{href:"https://n48331.github.io/restaurant-website/",className:"nav__logo",children:"Dine Out"}),Object(m.jsx)("div",{className:"nav__menu",id:"nav-menu",children:Object(m.jsxs)("ul",{className:"nav__list",children:[i.map((function(e,i){return Object(m.jsx)("li",{onClick:function(){return t(e)},className:"nav__item",children:Object(m.jsx)("a",{href:"#menu",className:"".concat(a===e?"nav__link active-link":"nav__link"),children:e})},i)})),Object(m.jsx)("li",{children:Object(m.jsx)("i",{className:"bx bx-moon change-theme",id:"theme-button"})})]})}),Object(m.jsx)("div",{className:"nav__toggle",id:"nav-toggle",children:Object(m.jsx)("i",{class:"bx bx-filter-alt"})})]})})]})},p=[{id:1,title:"Kuboos",category:"Breads",price:"\u20b9 15",img:"img/plate1.png"},{id:2,title:"Rotti",category:"Breads",price:"\u20b9 15",img:"img/plate2.png"},{id:3,title:"Butter rotti",category:"Breads",price:"\u20b9 15",img:"img/plate3.png"},{id:4,title:"Al Faham",category:"Al Faham",price:"\u20b9 400 | \u20b9 210 | \u20b9 110",img:"img/plate1.png"},{id:5,title:"Peri peri Al Faham",category:"Al Faham",price:"\u20b9 440 | \u20b9 220 | \u20b9 120",img:"img/plate2.png"},{id:6,title:"Kanthari Al Faham",category:"Al Faham",price:"\u20b9 440 | \u20b9 220 | \u20b9 120",img:"img/plate3.png"},{id:7,title:"Thanthoori Chicken",category:"Thanthoori",price:"\u20b9 400 | \u20b9 210 | \u20b9 110",img:"img/plate1.png"},{id:8,title:"Pothina thanthoori",category:"Thanthoori",price:"\u20b9 420 | \u20b9 220 | \u20b9 120",img:"img/plate1.png"},{id:9,title:"Chicken mandhi",category:"Mandhi",price:"\u20b9 550 | \u20b9 260 | \u20b9 160",img:"img/plate3.png"},{id:10,title:"Al faham mandhi",category:"Mandhi",price:"\u20b9 600 | \u20b9 320 | \u20b9 170",img:"img/plate3.png"},{id:11,title:"Peri peri mandhi",category:"Mandhi",price:"\u20b9 650 | \u20b9 330 | \u20b9 170",img:"img/plate3.png"},{id:12,title:"Chicken Tikka",category:"Kebab",price:"\u20b9 170",img:"img/plate3.png"},{id:13,title:"Hariyalli Kebab",category:"Kebab",price:"\u20b9 170",img:"img/plate3.png"},{id:14,title:"Malai Kebab",category:"Kebab",price:"\u20b9 180",img:"img/plate3.png"},{id:15,title:"Beef Ribs",category:"Beef",price:"\u20b9 180",img:"img/plate3.png"},{id:16,title:"Lemon Juice",category:"Juice",price:"\u20b9 15",img:"img/plate3.png"},{id:17,title:"Mint Lemon",category:"Juice",price:"\u20b9 15",img:"img/plate3.png"},{id:18,title:"Falooda",category:"Falooda",price:"\u20b9 100",img:"img/plate3.png"},{id:19,title:"Bombay Falooda",category:"Falooda",price:"\u20b9 120",img:"img/plate3.png"},{id:20,title:"Chikku",category:"Chocolate Shake",price:"\u20b9 60",img:"img/plate3.png"},{id:21,title:"Badam",category:"Mocktail",price:"\u20b9 70",img:"img/plate3.png"},{id:22,title:"Kit kat",category:"Chocolate Shake",price:"\u20b9 70",img:"img/plate3.png"},{id:23,title:"Oreo",category:"Chocolate Shake",price:"\u20b9 70",img:"img/plate3.png"},{id:24,title:"Kiwi",category:"Mocktail",price:"\u20b9 80",img:"img/plate3.png"},{id:25,title:"Green Apple",category:"Mocktail",price:"\u20b9 80",img:"img/plate3.png"}],d=["All"].concat(Object(g.a)(new Set(p.map((function(e){return e.category}))))),h=function(){var e=Object(a.useState)(p),i=Object(r.a)(e,2),t=i[0],c=i[1],n=Object(a.useState)(""),l=Object(r.a)(n,2),g=l[0],h=l[1],j=Object(a.useState)(d),b=Object(r.a)(j,2),u=b[0];b[1];return Object(m.jsx)("main",{className:"l-main",children:Object(m.jsxs)("section",{className:"menu",children:[Object(m.jsx)(o,{categories:u,activeCategory:g,filterItems:function(e){if(h(e),"All"!==e){var i=p.filter((function(i){return i.category===e}));c(i)}else c(p)}}),Object(m.jsx)(s,{items:t})]})})},j=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,14)).then((function(i){var t=i.getCLS,a=i.getFID,c=i.getFCP,n=i.getLCP,l=i.getTTFB;t(e),a(e),c(e),n(e),l(e)}))};l.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(h,{})}),document.getElementById("root")),j()}},[[13,1,2]]]);
//# sourceMappingURL=main.80127865.chunk.js.map