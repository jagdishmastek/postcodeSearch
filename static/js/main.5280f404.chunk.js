(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){},44:function(e,t){e.exports={apiBaseUrl:"https://api.postcodes.io/"}},49:function(e,t,a){e.exports=a(96)},56:function(e,t,a){},62:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},88:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(39),o=a.n(r),l=(a(56),a(10)),i=a(41),s=a(40),u=a.n(s),m=a(13),d=a(4),E={postCodesData:[],loading:!1,error:null,postCodeDetilas:{}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POSTCODES_SEARCH_REQUEST":return Object(d.a)({},e,{loading:!0,error:null});case"POSTCODES_SEARCH_SUCCESS":return Object(d.a)({},e,{loading:!1,postCodesData:t.data});case"POSTCODES_SEARCH_ERROR":return Object(d.a)({},e,{loading:!1,error:t.error,postCodesData:[]});case"POSTCODES_DETAILS_REQUEST":return Object(d.a)({},e,{loading:!0,error:null});case"POSTCODES_DETAILS_SUCCESS":return Object(d.a)({},e,{loading:!1,postCodeDetilas:t.data});case"POSTCODES_DETAILS_ERROR":return Object(d.a)({},e,{loading:!1,error:t.error,postCodeDetilas:{}});default:return e}},p={drawerOpen:!1},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DASHBOARD_DRAWER_OPEN":return Object(d.a)({},e,{drawerOpen:t.drawerOpen});default:return e}},O=Object(m.b)({postCodes:v,dashboard:f}),g=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):m.c)(Object(m.a)(i.a),Object(m.a)(u.a)),S=Object(m.d)(O,g),h=a(11),N=a(1),C=a(98),b=a(3),_=(a(62),a(29),a(19)),w=a.n(_),D=a(44),j=a.n(D),T={get:function(e){return w.a.get(j.a.apiBaseUrl+e,function(){var e={headers:{"Content-Type":"application/json"}};return e}()).then(function(e){return e}).catch(function(e){return e})}};var y=function(){return{type:"POSTCODES_SEARCH_REQUEST"}},R=function(e){return{type:"POSTCODES_SEARCH_SUCCESS",data:e.data.result}},P=function(e){return{type:"POSTCODES_SEARCH_ERROR",error:""}},A=function(){return{type:"POSTCODES_DETAILS_REQUEST"}},M=function(e){return{type:"POSTCODES_DETAILS_SUCCESS",data:e.data.result}},I=function(e){return{type:"POSTCODES_DETAILS_ERROR",error:""}},U=function(e){return function(t){t(function(e){return{type:"DASHBOARD_DRAWER_OPEN",drawerOpen:e}}(e))}},F=function(){var e=Object(h.b)(),t=Object(n.useState)(0),a=Object(b.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)([]),i=Object(b.a)(l,2),s=i[0],u=i[1],m=Object(n.useState)([]),d=Object(b.a)(m,2),E=d[0],v=d[1],p=Object(n.useState)(!0),f=Object(b.a)(p,2),O=f[0],g=f[1],S=Object(n.useState)(""),N=Object(b.a)(S,2),C=N[0],_=N[1],w=Object(h.c)(function(e){return{postCodesData:e.postCodes.postCodesData}}).postCodesData;Object(n.useEffect)(function(){w&&(v(w),u(w))},[w]);var D,j=function(t){var a;o(0),u([]),g(!1),e(U(!0)),e((a=t.currentTarget.innerText,function(e){e(A());var t="''";""!==a&&(t=a);var n="postcodes/".concat(t);T.get(n).then(function(t){e(M(t))}).catch(function(t){e(I(t))})})),_(t.currentTarget.innerText)};return O&&C&&(D=s.length&&E.length?c.a.createElement("ul",{className:"suggestions"},s.map(function(e,t){var a;return t===r&&(a="suggestion-active"),c.a.createElement("li",{className:a,key:e,"data-testid":"suggestion-active-".concat(t),onClick:j},e)})):c.a.createElement("div",{className:"no-suggestions"},c.a.createElement("em",null,"No suggestions, you're on your own!"))),c.a.createElement(n.Fragment,null,c.a.createElement("input",{type:"text",onChange:function(t){var a,n=t.currentTarget.value.trim();""!==n&&(e((a=n,function(e){e(y());var t="''";""!==a&&(t=a);var n="postcodes/".concat(t,"/autocomplete?limit=10000");T.get(n).then(function(t){e(R(t))}).catch(function(t){e(P(t))})})),o(0),e(U(!1)),g(!0)),_(t.currentTarget.value)},value:C,placeholder:"Enter postcode here..."}),D)},L=function(){return c.a.createElement("div",{className:"input-container"},c.a.createElement(F,null))},x=(a(85),function(e){var t=e.title;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{title:"Header",className:"header"},t))}),k=(a(86),a(47)),H=function(e,t){var a=Math.PI,n=.00669437999014,c=6378137;return e=e*a/180,t=t*a/180,{lat:1e3/(a*c*(1-n)/(180*Math.pow(1-n*Math.pow(Math.sin(e),2),1.5))),long:1e3/(a*c*Math.cos(t)/(180*Math.sqrt(1-n*Math.pow(Math.sin(t),2))))}},B=a(26),Q=function(e){var t=Object(n.useState)([]),a=Object(b.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)(12),i=Object(b.a)(l,2),s=i[0],u=i[1];return Object(n.useEffect)(function(){o(e.center),u(15)},[e.center]),c.a.createElement(c.a.Fragment,null,c.a.createElement(B.a,{center:r,defaultCenter:[51.509865,-.118092],zoom:s,width:500,height:250},c.a.createElement(B.b,{defaultWidth:50,anchor:r})))},X=function(){var e=Object(n.useState)({}),t=Object(b.a)(e,2),a=t[0],r=t[1],o=Object(h.c)(function(e){return{drawerOpenFlag:e.dashboard.drawerOpen,postCodeDetails:e.postCodes.postCodeDetilas,loading:e.postCodes.loading}}),l=o.drawerOpenFlag,i=o.postCodeDetails,s=o.loading,u=function(e){return e>10?parseInt(e):Math.round(100*e)/100},m=l,d=24902*Math.cos(a.latitude*Math.PI/180)/360,E=u(1.609344*d)+" kilometers",v=u(d)+" miles",p=function(e,t){var a=H(e,t);return{north:e+a.lat,south:e-a.lat,east:t+a.long,west:t-a.long}}(a.latitude,a.longitude),f=[a.latitude,a.longitude];return Object(n.useEffect)(function(){r(i)},[i]),c.a.createElement(c.a.Fragment,null,c.a.createElement(n.Suspense,{fallback:s&&c.a.createElement("h1",null,"Loading content...")},m&&c.a.createElement(k.a,{in:m},c.a.createElement("div",{className:"todolist-container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 col-md-offset-3"},c.a.createElement("div",{className:"postcode-container"},c.a.createElement("div",{className:"container "},c.a.createElement("div",{className:"row font-weight-bold py-2"},c.a.createElement("div",{className:"col todo-item-active"},"Country"),c.a.createElement("div",{className:"col todo-item-active"},a.country)),c.a.createElement("div",{className:"row py-2"},c.a.createElement("div",{className:"col todo-item-active"},"Region"),c.a.createElement("div",{className:"col todo-item-active"},a.region)),c.a.createElement("div",{className:"row py-2"},c.a.createElement("div",{className:"col todo-item-active"},"Admin District"),c.a.createElement("div",{className:"col todo-item-active"},a.admin_district)),c.a.createElement("div",{className:"row py-2"},c.a.createElement("div",{className:"col todo-item-active"},"Parliamentary Constituency"),c.a.createElement("div",{className:"col todo-item-active"},a.parliamentary_constituency)),c.a.createElement("div",{className:"row py-2"},c.a.createElement("div",{className:"col todo-item-active"},"South"),c.a.createElement("div",{className:"col todo-item-active"},"".concat(p.south," / ").concat(E))),c.a.createElement("div",{className:"row py-2"},c.a.createElement("div",{className:"col todo-item-active"},"North"),c.a.createElement("div",{className:"col todo-item-active"},"".concat(p.north," / ").concat(v)))))),c.a.createElement("div",{className:"col-md-6 col-md-offset-3"},c.a.createElement("div",{className:"map-container"},c.a.createElement(Q,{center:f}))))))))};a(88);var W=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",{className:"todo"},c.a.createElement(x,{title:"Postcode Search"}),c.a.createElement(L,{setTodos:r,todos:a}),c.a.createElement(X,null))};function G(){return c.a.createElement("div",null,c.a.createElement(C.a,null,c.a.createElement(W,null)))}var J=a(22),V=a(21);a(91);function q(){var e=V.b;return c.a.createElement("div",null,c.a.createElement(C.a,null,c.a.createElement("div",{className:"page-content"},c.a.createElement(x,{title:"Something went wrong"}),c.a.createElement("div",{className:"pagecontent-container"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("div",{className:"pagecontent-div"},c.a.createElement("div",null,c.a.createElement("h2",null,"Something went wrong")),c.a.createElement("div",null,c.a.createElement(J.a,{icon:e,style:{color:"grey",height:"200px"}})))))),c.a.createElement("div",{className:"pagecontent-footer"},c.a.createElement(l.b,{to:"/"},"Go Back"))))))}a(92);var z=function(){var e=V.a;return c.a.createElement("div",null,c.a.createElement(C.a,null,c.a.createElement("div",{className:"page-content"},c.a.createElement(x,{title:"Page Not Found"}),c.a.createElement("div",{className:"pagecontent-container"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("div",{className:"pagecontent-div"},c.a.createElement("div",null,c.a.createElement("h2",null,"The page you looking for dosen't exist.")),c.a.createElement("div",null,c.a.createElement(J.a,{icon:e,style:{color:"grey",height:"200px"}})))))),c.a.createElement("div",{className:"pagecontent-footer"},c.a.createElement(l.b,{to:"/"},"Go Back"))))))},K=function(e){function t(t){var a=Object(N.f)();return Object(n.useEffect)(function(){w.a.interceptors.response.use(function(e){return e},function(e){switch(console.log(e),e.response.status){case 400:case 401:case 404:case 500:case 503:a("/error-page")}return Promise.reject(e)})}),c.a.createElement(e,t)}return t}(function(){return c.a.createElement(N.c,null,c.a.createElement(N.a,{strict:!0,exact:!0,path:"/",element:c.a.createElement(G,null)}),c.a.createElement(N.a,{strict:!0,exact:!0,path:"/error-page",element:c.a.createElement(q,null)}),c.a.createElement(N.a,{path:"*",element:c.a.createElement(z,null)}))});a(93);function Y(){return c.a.createElement("div",{className:"banner"})}a(94);var Z=function(){return c.a.createElement(h.a,{store:S},c.a.createElement("div",{className:"App"},c.a.createElement(Y,null),c.a.createElement(l.a,null,c.a.createElement(K,null))))},$=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,99)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)})},ee=(a(95),document.getElementById("root")||document.createElement("div"));o.a.createRoot(ee).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Z,null))),$()}},[[49,1,2]]]);
//# sourceMappingURL=main.5280f404.chunk.js.map