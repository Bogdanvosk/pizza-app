(this["webpackJsonpreact-pizza"]=this["webpackJsonpreact-pizza"]||[]).push([[0],{46:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var i=c(0),a=c.n(i),n=c(20),s=c.n(n),r=c(11),o=(c(46),c(4)),l=c(16),d=c.n(l),j=c(1),b=function(e){var t=e.outline,c=e.className,i=e.children,a=e.onClick;return Object(j.jsx)("button",{onClick:a,className:d()("button",c,{"button--outline":t}),children:i})},u=c(6),h=c.p+"static/media/pizza-logo.56ac8703.svg",p=function(){var e=Object(u.c)((function(e){return e.cart})),t=e.totalPrice,c=e.totalCount;return Object(j.jsx)("div",{className:"header",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(r.b,{to:"/",children:Object(j.jsxs)("div",{className:"header__logo",children:[Object(j.jsx)("img",{width:"38",src:h,alt:"Pizza logo"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"React Pizza"}),Object(j.jsx)("p",{children:"\u0441\u0430\u043c\u0430\u044f \u0432\u043a\u0443\u0441\u043d\u0430\u044f \u043f\u0438\u0446\u0446\u0430 \u0432\u043e \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439"})]})]})}),Object(j.jsx)("div",{className:"header__cart",children:Object(j.jsx)(r.b,{to:"/cart",children:Object(j.jsxs)(b,{className:"button--cart",children:[Object(j.jsxs)("span",{children:[t," \u20bd"]}),Object(j.jsx)("div",{className:"button__delimiter"}),Object(j.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(j.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(j.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(j.jsx)("span",{children:c})]})})})]})})},m=a.a.memo((function(e){var t=e.items,c=e.onClickCategory,i=e.activeCategory;return Object(j.jsx)("div",{className:"categories",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{className:null===i?"active":"",onClick:function(){return c(null)},children:"\u0412\u0441\u0435"}),t&&t.map((function(e,t){return Object(j.jsx)("li",{className:i===t?"active":"",onClick:function(){c(t)},children:e},"".concat(e,"_").concat(t))}))]})})})),O=m;m.defaultProps={activeCategory:null,items:[]};var x=c(19),g=a.a.memo((function(e){var t=e.items,c=e.onClickSortType,a=e.activeSortType,n=Object(i.useState)(!1),s=Object(x.a)(n,2),r=s[0],o=s[1],l=t.find((function(e){return e.type===a})).name,d=Object(i.useRef)();Object(i.useEffect)((function(){document.body.addEventListener("click",b)}),[]);var b=function(e){(e.path||e.composedPath&&e.composedPath()).includes(d.current)||o(!1)},u=function(){o(!r)};return Object(j.jsxs)("div",{className:"sort",ref:d,children:[Object(j.jsxs)("div",{className:"sort__label",children:[Object(j.jsx)("svg",{className:r?"":"rotate",width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})}),Object(j.jsx)("b",{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e:"}),Object(j.jsx)("span",{onClick:u,children:l})]}),r&&Object(j.jsx)("div",{className:"sort__popup",children:Object(j.jsx)("ul",{children:t&&t.map((function(e,t){return Object(j.jsx)("li",{className:a===e.type?"active":"",onClick:function(){c(e),u()},children:e.name},"".concat(e.type,"_").concat(t))}))})})]})})),f=g;g.defaultProps={items:[]};var C=function(e){var t=e.imageUrl,c=e.name,a=e.price,n=e.types,s=e.sizes,r=e.onClickAddPizza,o=e.id,l=e.addedCount,u=["\u0442\u043e\u043d\u043a\u043e\u0435","\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435"],h=Object(i.useState)(n[0]),p=Object(x.a)(h,2),m=p[0],O=p[1],g=Object(i.useState)(s[0]),f=Object(x.a)(g,2),C=f[0],v=f[1];return Object(j.jsxs)("div",{className:"pizza-block",children:[Object(j.jsx)("img",{className:"pizza-block__image",src:t,alt:"Pizza"}),Object(j.jsx)("h4",{className:"pizza-block__title",children:c}),Object(j.jsxs)("div",{className:"pizza-block__selector",children:[Object(j.jsx)("ul",{children:u.map((function(e,t){return Object(j.jsx)("li",{className:d()({active:m===t,disabled:!n.includes(t)}),onClick:function(){return function(e){O(e)}(t)},children:e},"".concat(e,"_").concat(t))}))}),Object(j.jsx)("ul",{children:[26,30,40].map((function(e,t){return Object(j.jsxs)("li",{onClick:function(){return function(e){v(e)}(e)},className:d()({active:C===e,disabled:!s.includes(e)}),children:[e," \u0441\u043c."]},"".concat(e,"_").concat(t))}))})]}),Object(j.jsxs)("div",{className:"pizza-block__bottom",children:[Object(j.jsxs)("div",{className:"pizza-block__price",children:["\u043e\u0442 ",a," \u20bd"]}),Object(j.jsxs)(b,{className:"button--add",onClick:function(){var e={id:o,name:c,imageUrl:t,price:a,type:u[m],size:C};r(e)},outline:!0,children:[Object(j.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})}),Object(j.jsx)("span",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),l&&Object(j.jsx)("i",{children:l})]})]})]})},v=C;C.defaultProps={name:"---",price:"0",types:[],sizes:[],isLoading:!1};var z=c(38),y=function(){return Object(j.jsxs)(z.a,{className:"pizza-block",speed:2,width:280,height:460,viewBox:"0 0 280 460",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(j.jsx)("circle",{cx:"132",cy:"142",r:"115"}),Object(j.jsx)("rect",{x:"0",y:"273",rx:"6",ry:"6",width:"280",height:"26"}),Object(j.jsx)("rect",{x:"0",y:"310",rx:"6",ry:"6",width:"280",height:"84"}),Object(j.jsx)("rect",{x:"0",y:"418",rx:"6",ry:"6",width:"91",height:"31"}),Object(j.jsx)("rect",{x:"137",y:"408",rx:"25",ry:"25",width:"140",height:"46"})]})},_=c(2),k="SET_SORT_BY",w="SET_CATEGORY",L=c(39),N=c.n(L),P="SET_LOADED",E="SET_PIZZAS",B=function(e,t){return function(c){c({type:P,payload:!1}),N.a.get("http://localhost:3000/pizzas?".concat(null!==t?"category=".concat(t):"","&_sort=").concat(e.type,"&_order=").concat(e.order)).then((function(e){var t=e.data;c(M(t))})).catch((function(){c(M([{id:0,imageUrl:"https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",name:"\u041f\u0435\u043f\u043f\u0435\u0440\u043e\u043d\u0438 \u0424\u0440\u0435\u0448 \u0441 \u043f\u0435\u0440\u0446\u0435\u043c",types:[0,1],sizes:[26,30,40],price:803,category:0,rating:4},{id:1,imageUrl:"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",name:"\u0421\u044b\u0440\u043d\u0430\u044f",types:[0],sizes:[26,40],price:245,category:1,rating:6},{id:2,imageUrl:"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",name:"\u0426\u044b\u043f\u043b\u0435\u043d\u043e\u043a \u0431\u0430\u0440\u0431\u0435\u043a\u044e",types:[0],sizes:[26,40],price:295,category:1,rating:4},{id:3,imageUrl:"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg",name:"\u041a\u0438\u0441\u043b\u043e-\u0441\u043b\u0430\u0434\u043a\u0438\u0439 \u0446\u044b\u043f\u043b\u0435\u043d\u043e\u043a",types:[1],sizes:[26,30,40],price:275,category:2,rating:2},{id:4,imageUrl:"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",name:"\u0427\u0438\u0437\u0431\u0443\u0440\u0433\u0435\u0440-\u043f\u0438\u0446\u0446\u0430",types:[0,1],sizes:[26,30,40],price:415,category:3,rating:8},{id:5,imageUrl:"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg",name:"\u041a\u0440\u044d\u0439\u0437\u0438 \u043f\u0435\u043f\u043f\u0435\u0440\u043e\u043d\u0438",types:[0],sizes:[30,40],price:580,category:2,rating:2},{id:6,imageUrl:"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg",name:"\u041f\u0435\u043f\u043f\u0435\u0440\u043e\u043d\u0438",types:[0,1],sizes:[26,30,40],price:675,category:1,rating:9},{id:7,imageUrl:"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",name:"\u041c\u0430\u0440\u0433\u0430\u0440\u0438\u0442\u0430",types:[0,1],sizes:[26,30,40],price:450,category:4,rating:10},{id:8,imageUrl:"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",name:"\u0427\u0435\u0442\u044b\u0440\u0435 \u0441\u0435\u0437\u043e\u043d\u0430",types:[0,1],sizes:[26,30,40],price:395,category:5,rating:10},{id:9,imageUrl:"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg",name:"\u041e\u0432\u043e\u0449\u0438 \u0438 \u0433\u0440\u0438\u0431\u044b \ud83c\udf31",types:[0,1],sizes:[26,30,40],price:285,category:5,rating:7}]))}))}},M=function(e){return{type:E,payload:e}},U="ADD_PIZZA_CART",V="CLEAR_CART",R="REMOVE_CART_ITEM",A="PLUS_CART_ITEM",T="MINUS_CART_ITEM",S=["\u041c\u044f\u0441\u043d\u044b\u0435","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0438\u0435","\u0413\u0440\u0438\u043b\u044c","\u041e\u0441\u0442\u0440\u044b\u0435","\u0417\u0430\u043a\u0440\u044b\u0442\u044b\u0435"],I=[{name:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438",type:"rating",order:"desc"},{name:"\u0446\u0435\u043d\u0435",type:"price",order:"desc"},{name:"\u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443",type:"name",order:"asc"}],Z=function(){var e=Object(u.c)((function(e){return e.pizzas.items})),t=Object(u.c)((function(e){return e.pizzas.isLoaded})),c=Object(u.c)((function(e){return e.filters})),i=c.category,n=c.sortBy,s=Object(u.c)((function(e){return e.cart.items})),r=Object(u.b)();a.a.useEffect((function(){r(B(n,i))}),[n,i]);var o=a.a.useCallback((function(e){r({type:w,payload:e})}),[]),l=a.a.useCallback((function(e){r({type:k,payload:e})}),[]),d=function(e){r({type:U,payload:e})};return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"content__top",children:[Object(j.jsx)(O,{activeCategory:i,onClickCategory:o,items:S}),Object(j.jsx)(f,{onClickSortType:l,items:I,activeSortType:n.type})]}),Object(j.jsxs)("h2",{className:"content__title",children:[null===i?"\u0412\u0441\u0435":S[i]," \u043f\u0438\u0446\u0446\u044b"]}),Object(j.jsx)("div",{className:"content__items",children:t?e.map((function(e){return Object(j.jsx)(v,Object(_.a)({addedCount:s[e.id]&&s[e.id].items.length,onClickAddPizza:d},e),e.id)})):Array(12).fill(0).map((function(e,t){return Object(j.jsx)(y,{},t)}))})]})},H=Z;Z.defaultProps={pizzas:[]};var W=function(e){var t=e.name,c=e.type,i=e.size,a=e.imageUrl,n=e.totalPrice,s=e.totalCount,r=e.id,o=e.onRemove,l=e.onPlus,d=e.onMinus;return Object(j.jsxs)("div",{className:"cart__item",children:[Object(j.jsx)("div",{className:"cart__item-img",children:Object(j.jsx)("img",{className:"pizza-block__image",src:a,alt:"Pizza"})}),Object(j.jsxs)("div",{className:"cart__item-info",children:[Object(j.jsx)("h3",{children:t}),Object(j.jsxs)("p",{children:[c," \u0442\u0435\u0441\u0442\u043e, ",i," \u0441\u043c."]})]}),Object(j.jsxs)("div",{className:"cart__item-count",children:[Object(j.jsx)(b,{className:"button--circle cart__item-count-minus",outline:!0,onClick:function(){d(r)},children:Object(j.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(j.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})}),Object(j.jsx)("b",{children:s}),Object(j.jsx)(b,{className:"button--circle cart__item-count-plus",outline:!0,onClick:function(){l(r)},children:Object(j.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(j.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})]}),Object(j.jsx)("div",{className:"cart__item-price",children:Object(j.jsxs)("b",{children:[n," \u20bd"]})}),Object(j.jsx)("div",{className:"cart__item-remove",children:Object(j.jsx)(b,{className:" button--circle",onClick:function(){o(r)},outline:!0,children:Object(j.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(j.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})})]})},D=c.p+"static/media/empty-cart.db905d1f.png",J=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.cart})),c=t.items,i=t.totalCount,a=t.totalPrice,n=Object.keys(c).map((function(e){return c[e].items[0]})),s=function(t){window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0438\u0446\u0446\u0443?")&&e(function(e){return{type:R,payload:e}}(t))},o=function(t){e(function(e){return{type:A,payload:e}}(t))},l=function(t){e(function(e){return{type:T,payload:e}}(t))};return Object(j.jsx)("div",{className:"container container--cart",children:i?Object(j.jsxs)("div",{className:"cart",children:[Object(j.jsxs)("div",{className:"cart__top",children:[Object(j.jsxs)("h2",{className:"content__title",children:[Object(j.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(j.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(j.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"]}),Object(j.jsxs)("div",{className:"cart__clear",children:[Object(j.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsx)("path",{d:"M2.5 5H4.16667H17.5",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(j.jsx)("path",{d:"M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(j.jsx)("path",{d:"M8.33337 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(j.jsx)("path",{d:"M11.6666 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(j.jsx)("span",{onClick:function(){window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443?")&&e({type:V})},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]}),Object(j.jsx)("div",{className:"content__items",children:n.map((function(e){return Object(j.jsx)(W,{id:e.id,name:e.name,type:e.type,size:e.size,imageUrl:e.imageUrl,totalPrice:c[e.id].totalPrice,totalCount:c[e.id].items.length,onRemove:s,onPlus:o,onMinus:l},e.id)}))}),Object(j.jsxs)("div",{className:"cart__bottom",children:[Object(j.jsxs)("div",{className:"cart__bottom-details",children:[Object(j.jsxs)("span",{children:["\u0412\u0441\u0435\u0433\u043e \u043f\u0438\u0446\u0446: ",Object(j.jsxs)("b",{children:[i," \u0448\u0442."]})]}),Object(j.jsxs)("span",{children:["\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ",Object(j.jsxs)("b",{children:[a," \u20bd"]})]})]}),Object(j.jsxs)("div",{className:"cart__bottom-buttons",children:[Object(j.jsxs)(r.b,{to:"/",className:"button button--outline button--add go-back-btn",children:[Object(j.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{d:"M7 13L1 6.93015L6.86175 1",stroke:"#D3D3D3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Object(j.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]}),Object(j.jsx)(b,{className:"pay-btn",onClick:function(){console.log("\u0412\u0410\u0428 \u0417\u0410\u041a\u0410\u0417",c)},children:Object(j.jsx)("span",{children:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441"})})]})]})]}):Object(j.jsxs)("div",{className:"cart cart--empty",children:[Object(j.jsxs)("h2",{children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f ",Object(j.jsx)("span",{children:"\ud83d\ude15"})]}),Object(j.jsxs)("p",{children:["\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u0435\u0439 \u0432\u0441\u0435\u0433\u043e, \u0432\u044b \u043d\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u043b\u0438 \u0435\u0449\u0451 \u043f\u0438\u0446\u0446\u0443.",Object(j.jsx)("br",{}),"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0438\u0446\u0446\u0443, \u043f\u0435\u0440\u0435\u0439\u0434\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."]}),Object(j.jsx)("img",{src:D,alt:"Empty cart"}),Object(j.jsx)(r.b,{to:"/",className:"button button--black",children:Object(j.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})})]})})};var X=function(){return Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)(p,{}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)(o.a,{exact:!0,path:"/",component:H}),Object(j.jsx)(o.a,{path:"/cart",component:J})]})]})},Y=c(15),G=c(40),q={category:null,sortBy:{type:"rating",order:"desc"}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(_.a)(Object(_.a)({},e),{},{sortBy:t.payload});case w:return Object(_.a)(Object(_.a)({},e),{},{category:t.payload});default:return Object(_.a)({},e)}},K={items:[],isLoaded:!1},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(_.a)(Object(_.a)({},e),{},{items:t.payload,isLoaded:!0});case P:return Object(_.a)(Object(_.a)({},e),{},{isLoaded:t.payload});default:return Object(_.a)({},e)}},$=c(14),ee=c(25),te=c(41),ce={items:{},totalPrice:0,totalCount:0},ie=function(e){return e.reduce((function(e,t){return t.price+e}),0)},ae=function(e,t){return Object.values(e).reduce((function(e,c){return e+function(e,t){var c=t.split("."),i=Object(te.a)(c),a=i[0];return i.slice(1).reduce((function(e,t){return e[t]}),e[a])}(c,t)}),0)},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:var c=e.items[t.payload.id]?[].concat(Object(ee.a)(e.items[t.payload.id].items),[t.payload]):[t.payload],i=Object(_.a)(Object(_.a)({},e.items),{},Object($.a)({},t.payload.id,{items:c,totalPrice:ie(c)})),a=ae(i,"items.length"),n=ae(i,"totalPrice");return Object(_.a)(Object(_.a)({},e),{},{items:i,totalCount:a,totalPrice:n});case R:var s=Object(_.a)({},e.items),r=s[t.payload].totalPrice,o=s[t.payload].items.length;return delete s[t.payload],Object(_.a)(Object(_.a)({},e),{},{items:s,totalPrice:e.totalPrice-r,totalCount:e.totalCount-o});case A:var l=[].concat(Object(ee.a)(e.items[t.payload].items),[e.items[t.payload].items[0]]),d=Object(_.a)(Object(_.a)({},e.items),{},Object($.a)({},t.payload,{items:l,totalPrice:ie(l)})),j=ae(d,"items.length"),b=ae(d,"totalPrice");return Object(_.a)(Object(_.a)({},e),{},{items:d,totalCount:j,totalPrice:b});case T:var u=Object(ee.a)(e.items[t.payload].items),h=u.length>1?u.slice(1):u,p=Object(_.a)(Object(_.a)({},e.items),{},Object($.a)({},t.payload,{items:h,totalPrice:ie(h)})),m=ae(p,"items.length"),O=ae(p,"totalPrice");return Object(_.a)(Object(_.a)({},e),{},{items:p,totalCount:m,totalPrice:O});case V:return Object(_.a)(Object(_.a)({},e),{},{items:{},totalCount:0,totalPrice:0});default:return Object(_.a)({},e)}},se=Object(Y.b)({filters:F,pizzas:Q,cart:ne}),re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y.c,oe=Object(Y.d)(se,re(Object(Y.a)(G.a)));s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(r.a,{children:Object(j.jsx)(u.a,{store:oe,children:Object(j.jsx)(X,{})})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.059739c7.chunk.js.map