(this["webpackJsonppat-trials"]=this["webpackJsonppat-trials"]||[]).push([[0],{18:function(e,t,r){},19:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r.n(n),c=r(9),s=r.n(c),i=r(1),o=r(3),l="border border-3 shadow shadow-3 m-3 p-3",u=r(0);function b(e){var t=e.col;return Object(u.jsxs)("div",{className:l,children:[Object(u.jsxs)("h5",{children:[" QuantFilter for ",t," "]}),Object(u.jsx)("p",{className:"fst-italic",children:" Coming soon "})]})}var j=r(8);function d(e){return[function(){return new Set},function(t,r,n,a){return(n||a)&&r.add(t[e]),r}]}function f(e){var t=e.col,r=e.struct,a=e.dispatch,c=Object(j.a)(r.values()).sort(),s=Object(n.useState)([]),i=Object(o.a)(s,2),b=i[0],d=i[1];return Object(n.useEffect)((function(){0===b.length?a({type:"FILTER_UPDATE",col:t,filter:function(e){return!0}}):a({type:"FILTER_UPDATE",col:t,filter:function(e){return b.some((function(r){return r===e[t]}))}})}),[t,a,b]),Object(u.jsxs)("div",{className:l,children:[Object(u.jsxs)("h5",{children:[" CatFilter for ",t," "]}),Object(u.jsx)("select",{multiple:!0,className:"form-select",value:b,onChange:function(e){return d(Object(j.a)(e.target.options).filter((function(e){return e.selected})).map((function(e){return e.value})))},children:c.map((function(e){return Object(u.jsx)("option",{value:e,children:e},e)}))}),Object(u.jsxs)("div",{className:"btn btn-danger",onClick:function(){return d([])},children:[" ","clear"," "]})]})}function O(e){var t=e.col;return Object(u.jsxs)("div",{className:l,children:[Object(u.jsxs)("h5",{children:[" TimeFilter for ",t," "]}),Object(u.jsx)("p",{className:"fst-italic",children:" Coming soon "})]})}var h=r(6);var p=function(e){var t=e.data,r=e.keys,a=Object(n.useMemo)((function(){return r.map((function(e){return{Header:e,accessor:e}}))}),[r]),c=Object(h.useTable)({columns:a,data:t},h.useSortBy,h.usePagination),s=c.getTableProps,o=c.getTableBodyProps,l=c.headerGroups,b=c.prepareRow,j=c.pageOptions,d=c.page,f=c.state,O=f.pageIndex,p=f.pageSize,v=c.gotoPage,g=c.previousPage,m=c.nextPage,x=c.setPageSize,y=c.canPreviousPage,k=c.canNextPage;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("table",Object(i.a)(Object(i.a)({className:"table"},s()),{},{children:[Object(u.jsx)("thead",{children:l.map((function(e){return Object(u.jsx)("tr",Object(i.a)(Object(i.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(u.jsxs)("th",Object(i.a)(Object(i.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(u.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(u.jsx)("i",{class:"bi bi-arrow-down-square-fill"}):Object(u.jsx)("i",{class:"bi bi-arrow-up-square-fill"}):""})]}))}))}))}))}),Object(u.jsx)("tbody",Object(i.a)(Object(i.a)({},o()),{},{children:d.map((function(e){return b(e),Object(u.jsx)("tr",Object(i.a)(Object(i.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(u.jsx)("td",Object(i.a)(Object(i.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]})),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){return g()},disabled:!y,children:"Previous Page"}),Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){return m()},disabled:!k,children:"Next Page"}),Object(u.jsxs)("div",{children:["Page"," ",Object(u.jsxs)("em",{children:[O+1," of ",j.length]})]}),Object(u.jsx)("div",{children:"Go to page:"}),Object(u.jsx)("input",{type:"number",defaultValue:O+1||1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;v(t)}}),Object(u.jsx)("select",{className:"form-select",value:p,onChange:function(e){x(Number(e.target.value))},children:[10,20,30,40,50].map((function(e){return Object(u.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]})]})};function v(e,t){for(var r=e.columns,n=e.data,a=[],c=0,s=Object.keys(r);c<s.length;c++){var o=s[c];r[o].display&&a.push(o)}for(var l=[],u={},b=0,j=Object.keys(r);b<j.length;b++){var d=j[b];u[d]="function"===typeof r[d].initdata&&r[d].initdata()}for(var f=0;f<n.length;f++){for(var O=!0,h=null,p=0,v=Object.keys(r);p<v.length;p++){var g=v[p];r[g].filter(n[f])||(O=!1,h=null===h?g:void 0)}for(var m=0,x=Object.keys(r);m<x.length;m++){var y=x[m];r[y].builder&&(u[y]=r[y].builder(n[f],u[y],O,y===h))}O&&l.push(n[f])}return Object(i.a)(Object(i.a)({},e),{},{visibleData:l,visibleKeys:a,colLoopData:u})}function g(e,t){switch(t.type){case"DATA":e=function(e,t){for(var r=t.keys,n={},a=0,c=Object.keys(r);a<c.length;a++){var s=c[a],l=void 0,u=void 0,j=void 0,h=r[s];switch(h.filterType){case"Q":j=b;var p=[function(){return[]},function(e,t,r,n){return t}],g=Object(o.a)(p,2);l=g[0],u=g[1];break;case"C":j=f;var m=d(s),x=Object(o.a)(m,2);l=x[0],u=x[1];break;case"T":j=O;var y=[function(){return[]},function(e,t,r,n){return t}],k=Object(o.a)(y,2);l=k[0],u=k[1]}n[s]={filter:function(e){return!0},display:h.display,el:j,builder:u,initdata:l}}for(var P=[],T=0;T<t.data.length;T++){for(var N={},C=0,w=Object.keys(t.data[T]);C<w.length;C++){var D=w[C];switch(r[D].filterType){case"Q":N[D]=t.data[T][D];break;case"C":N[D]="".concat(t.data[T][D]);break;case"T":default:N[D]=t.data[T][D]}}P.push(N)}return v(e=Object(i.a)(Object(i.a)({},e),{},{data:P,keys:t.keys,columns:n}))}(e,t);break;case"ERROR":e=Object(i.a)(Object(i.a)({},e),{},{error:t.error});break;case"DATA_DISPLAY_UPDATE":e=v(e);break;case"FILTER_UPDATE":var r=e.columns;r[t.col].filter=t.filter,e=v(e=Object(i.a)(Object(i.a)({},e),{},{columns:r}))}return e}var m=function(){var e=Object(n.useReducer)(g,{data:[],keys:{},error:null,columns:{},colLoopData:{},visibleKeys:[]}),t=Object(o.a)(e,2),r=t[0],c=r.data,s=r.error,i=r.columns,l=r.visibleData,b=r.colLoopData,j=r.visibleKeys,d=t[1];if(Object(n.useEffect)((function(){fetch("data.json").then((function(e){return e.json()})).then((function(e){d({type:"DATA",data:e.data,keys:e.keys})})).catch((function(e){d({type:"ERROR",error:e})}))}),[]),s)return Object(u.jsxs)("h5",{children:[" Error Occurred ",s," "]});if(0===c.length)return Object(u.jsx)("h5",{children:" Loading "});for(var f=[],O=0,h=Object.keys(i);O<h.length;O++){var v=h[O],m=i[v];m.el&&f.push(a.a.createElement(m.el,{key:v,col:v,struct:b[v],dispatch:d}))}return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"d-flex flex-wrap justify-content-center",children:f}),Object(u.jsx)("div",{children:Object(u.jsx)(p,{keys:j,data:l})})]})},x=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,20)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))};r(18);s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),x()}},[[19,1,2]]]);
//# sourceMappingURL=main.5c2c04e0.chunk.js.map