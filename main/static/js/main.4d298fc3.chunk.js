(this["webpackJsonppat-trials"]=this["webpackJsonppat-trials"]||[]).push([[0],{48:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),r=c(15),s=c.n(r),i=c(4),l=c(1),o=c(3),d="border border-3 shadow shadow-3 m-3 p-3",j=c(0);function b(e){var t=e.col;return Object(j.jsxs)("div",{className:"".concat(d," d-none"),children:[Object(j.jsxs)("h5",{children:[" QuantFilter for ",t," "]}),Object(j.jsx)("p",{className:"fst-italic",children:" Coming soon "})]})}var h=c(16),u=c.n(h),O=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useRef)(null);Object(n.useEffect)((function(){a(new u.a(r.current,{}))}),[r]);var s=function(){c&&c.toggle()};return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{ref:r,class:"modal",tabindex:"-1",children:Object(j.jsx)("div",{class:"modal-dialog",children:Object(j.jsxs)("div",{class:"modal-content",children:[Object(j.jsxs)("div",{class:"modal-header",children:[Object(j.jsx)("h5",{class:"modal-title",children:"Country Specific Season Information"}),Object(j.jsx)("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:s})]}),Object(j.jsx)("div",{class:"modal-body",children:Object(j.jsxs)("table",{class:"table",children:[Object(j.jsxs)("thead",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col"}),Object(j.jsx)("th",{class:"table-active text-center",colspan:"2",scope:"col",children:"Season 1"}),Object(j.jsx)("th",{class:"table-active text-center",colspan:"2",scope:"col",children:"Season 2"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"Country"}),Object(j.jsx)("th",{scope:"col",children:"Name"}),Object(j.jsx)("th",{scope:"col",children:"Planting"}),Object(j.jsx)("th",{scope:"col",children:"Name"}),Object(j.jsx)("th",{scope:"col",children:"Planting"})]})]}),Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"row",children:"Kenya"}),Object(j.jsx)("td",{children:"Long Rain"}),Object(j.jsx)("td",{className:"",children:"March"}),Object(j.jsx)("td",{children:"Short Rain"}),Object(j.jsx)("td",{children:"September"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"row",children:"Malawi"}),Object(j.jsx)("td",{children:"Winter"}),Object(j.jsx)("td",{className:"",children:"June"}),Object(j.jsx)("td",{children:"Summer"}),Object(j.jsx)("td",{children:"November"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"row",children:"Zimbabwe"}),Object(j.jsx)("td",{children:"Winter"}),Object(j.jsx)("td",{className:"",children:"June"}),Object(j.jsx)("td",{children:"Summer"}),Object(j.jsx)("td",{children:"November"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"row",children:"Uganda"}),Object(j.jsx)("td",{children:"A"}),Object(j.jsx)("td",{className:"",children:"May"}),Object(j.jsx)("td",{children:"B"}),Object(j.jsx)("td",{children:"October"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"row",children:"Rawanda"}),Object(j.jsx)("td",{children:"-"}),Object(j.jsx)("td",{className:"",children:"March"}),Object(j.jsx)("td",{children:"-"}),Object(j.jsx)("td",{children:"October"})]})]})]})}),Object(j.jsx)("div",{class:"modal-footer",children:Object(j.jsx)("button",{type:"button",class:"btn btn-secondary",onClick:s,children:"Close"})})]})})}),Object(j.jsxs)("button",{className:"btn btn-primary my-1",onClick:s,children:[" ","View Season Information"," "]})]})};function f(e){return[function(){return new Set},function(t,c,n,a){return(n||a)&&c.add(t[e]),c}]}function p(e){var t,c=e.col,a=e.struct,r=e.dispatch;t={countryDisplay:g,seasonDisplay:y,locationDisplay:w}.countryDisplay?"COUNTRY_DISPLAY_UPDATE":"FILTER_UPDATE";var s=Object(i.a)(a.values()).sort(),l=Object(n.useState)([]),b=Object(o.a)(l,2),h=b[0],u=b[1];return Object(n.useEffect)((function(){if(0===h.length)r({type:"FILTER_UPDATE",col:c,filter:function(e){return!0}});else if(1===h.length)r({type:"FILTER_UPDATE",col:c,filter:function(e){for(var t=0;t<h.length;t++)if(e[c]===h[t])return!0}});else{var e=new Set(h);r({type:t,col:c,selected:e,filter:function(e){for(var t=0;t<h.length;t++)if(e[c]===h[t])return!0;return!1}})}}),[c,r,h]),Object(j.jsxs)("div",{className:d,children:[Object(j.jsxs)("h5",{children:[" Filter for ",c," "]}),Object(j.jsx)("select",{multiple:!0,className:"form-select",value:h,onChange:function(e){return u(Object(i.a)(e.target.options).filter((function(e){return e.selected})).map((function(e){return e.value})))},children:s.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))}),"Season"===c&&Object(j.jsx)(O,{}),Object(j.jsxs)("div",{className:"btn btn-danger",onClick:function(){return u([])},children:[" ","clear"," "]})]})}function x(e){var t=e.col;return Object(j.jsxs)("div",{className:"".concat(d," d-none"),children:[Object(j.jsxs)("h5",{children:[" TimeFilter for ",t," "]}),Object(j.jsx)("p",{className:"fst-italic",children:" Coming soon "})]})}var v=c(7);function m(e,t){var c=[];c.push(t.map((function(e){return e.accessor})));for(var n=0;n<e.length;n++){for(var a=[],r=0;r<t.length;r++)a.push('"'.concat(e[n][t[r].accessor],'"'));c.push(a.join(","))}return new Blob([c.join("\n")],{type:"text/csv"})}var g,y,w,k=function(e){var t=e.data,c=e.keys,a=Object(n.useMemo)((function(){return c.map((function(e){return{Header:e,accessor:e}}))}),[c]),r=Object(v.useTable)({columns:a,data:t},v.useSortBy,v.usePagination),s=r.getTableProps,i=r.getTableBodyProps,o=r.headerGroups,d=r.prepareRow,b=r.pageOptions,h=r.page,u=r.state,O=u.pageIndex,f=u.pageSize,p=r.gotoPage,x=r.previousPage,g=r.nextPage,y=r.setPageSize,w=r.canPreviousPage,k=r.canNextPage;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"d-flex align-items-end justify-content-between",children:[Object(j.jsxs)("div",{className:"d-flex flex-row align-items-end",children:[Object(j.jsxs)("div",{className:"d-flex flex-column",children:[Object(j.jsxs)("div",{children:["Page"," ",Object(j.jsxs)("em",{children:[O+1," of ",b.length]})]}),Object(j.jsx)("div",{children:"Go to page:"}),Object(j.jsx)("input",{type:"number",defaultValue:O+1||1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;p(t)}})]}),Object(j.jsx)("select",{className:"form-select",style:{width:"max-content"},value:f,onChange:function(e){y(Number(e.target.value))},children:[10,20,30,40,50].map((function(e){return Object(j.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]}),Object(j.jsxs)("a",{className:"btn btn-primary",href:window.URL.createObjectURL(m(t,a)),download:"pat-filtered-export.csv",children:[" ","Download as CSV"," "]})]}),Object(j.jsx)("div",{style:{width:"100%","overflow-x":"scroll"},children:Object(j.jsxs)("table",Object(l.a)(Object(l.a)({className:"table",style:{width:"max-content"}},s()),{},{children:[Object(j.jsx)("thead",{children:o.map((function(e){return Object(j.jsx)("tr",Object(l.a)(Object(l.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(j.jsxs)("th",Object(l.a)(Object(l.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(j.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(j.jsx)("i",{class:"bi bi-arrow-down-square-fill"}):Object(j.jsx)("i",{class:"bi bi-arrow-up-square-fill"}):""})]}))}))}))}))}),Object(j.jsx)("tbody",Object(l.a)(Object(l.a)({},i()),{},{children:h.map((function(e){return d(e),Object(j.jsx)("tr",Object(l.a)(Object(l.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(j.jsx)("td",Object(l.a)(Object(l.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))}),Object(j.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-start",children:[Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){return x()},disabled:!w,children:"Previous Page"}),Object(j.jsx)("button",{className:"btn btn-primary order-5",onClick:function(){return g()},disabled:!k,children:"Next Page"})]})]})},S=c.p+"static/media/sil.05e9e8c0.png";function P(e,t){for(var c=e.columns,n=e.data,a=[],r=0,s=Object.keys(c);r<s.length;r++){var i=s[r];c[i].display&&a.push(i)}for(var o=[],d={},j=0,b=Object.keys(c);j<b.length;j++){var h=b[j];d[h]="function"===typeof c[h].initdata&&c[h].initdata()}for(var u=0;u<n.length;u++){for(var O=!0,f=null,p=0,x=Object.keys(c);p<x.length;p++){var v=x[p];c[v].filter(n[u])||(O=!1,f=null===f?v:void 0)}for(var m=0,g=Object.keys(c);m<g.length;m++){var y=g[m];c[y].builder&&(d[y]=c[y].builder(n[u],d[y],O,y===f))}O&&o.push(n[u])}return Object(l.a)(Object(l.a)({},e),{},{visibleData:o,visibleKeys:a,colLoopData:d})}function T(e,t){var c=e.columns;switch(t.type){case"DATA":e=function(e,t){for(var c=t.keys,n={},a=0,r=Object.keys(c);a<r.length;a++){var s=r[a],i=void 0,d=void 0,j=void 0,h=c[s];switch(h.filterType){case"Q":j=b;var u=[function(){return[]},function(e,t,c,n){return t}],O=Object(o.a)(u,2);i=O[0],d=O[1];break;case"C":j=p;var v=f(s),m=Object(o.a)(v,2);i=m[0],d=m[1];break;case"T":j=x;var g=[function(){return[]},function(e,t,c,n){return t}],y=Object(o.a)(g,2);i=y[0],d=y[1]}n[s]={filter:function(e){return!0},display:h.display,el:j,builder:d,initdata:i}}for(var w=[],k=0;k<t.data.length;k++){for(var S={},T=0,N=Object.keys(t.data[k]);T<N.length;T++){var C=N[T];switch(c[C].filterType){case"Q":S[C]=t.data[k][C];break;case"C":S[C]="".concat(t.data[k][C]);break;case"T":default:S[C]=t.data[k][C]}}w.push(S)}return P(e=Object(l.a)(Object(l.a)({},e),{},{data:w,keys:t.keys,columns:n}))}(e,t);break;case"ERROR":e=Object(l.a)(Object(l.a)({},e),{},{error:t.error});break;case"DATA_DISPLAY_UPDATE":e=P(e);break;case"FILTER_UPDATE":c[t.col].filter=t.filter,e=P(e=Object(l.a)(Object(l.a)({},e),{},{columns:c}));break;case"COUNTRY_DISPLAY_UPDATE":c[t.col].filter=t.filter,e=function(e,t){for(var c=e.columns,n=e.data,a=e.selected,r=[],s=0,o=Object.keys(c);s<o.length;s++){var d=o[s];c[d].display&&r.push(d)}for(var j=[],b={},h=0,u=Object.keys(c);h<u.length;h++){var O=u[h];b[O]="function"===typeof c[O].initdata&&c[O].initdata()}for(var f=0;f<n.length;f++){for(var p=!0,x=null,v=0,m=Object.keys(c);v<m.length;v++){var g=m[v];c[g].filter(n[f])||(p=!1,x=null===x?g:void 0)}for(var y=0,w=Object.keys(c);y<w.length;y++){var k=w[y];c[k].builder&&(b[k]=c[k].builder(n[f],b[k],p,k===x))}p&&j.push(n[f])}for(var S=Array.from(a),P=[],T=0;T<S.length;T++){for(var N=[],C=0;C<j.length;C++)j[C].Entry===S[T]&&N.push(j[C]);P.push(N)}for(var D=["Country","Season","Location"],A=[],L=0;L<D.length;L++){for(var R=[],E=[],I=0;I<P.length;I++){for(var U=[],F=0;F<P[I].length;F++)U.push(P[I][F][D[L]]);E.push(U)}for(var _=E.reduce((function(e,t){return e.filter((function(e){return t.includes(e)}))})),M=Object(i.a)(new Set(_)),B=0;B<P.length;B++)for(var K=0;K<P[B].length;K++)M.includes(P[B][K][D[L]])&&R.push(P[B][K]);for(var V=new Set,Y=0;Y<R.length;Y++)b[D[L]].has(R[Y][D[L]])&&V.add(R[Y][D[L]]);b[D[L]]=V,A.push(R)}var q=A.reduce((function(e,t){return e.filter((function(e){return t.includes(e)}))})),z=Object(i.a)(new Set(q));return console.log(A),console.log(z),j=z,Object(l.a)(Object(l.a)({},e),{},{visibleData:j,visibleKeys:r,colLoopData:b})}(e=Object(l.a)(Object(l.a)({},e),{},{columns:c,selected:t.selected}))}return e}var N=function(){var e=a.a.useState(!1),t=Object(o.a)(e,2),c=t[0],r=t[1],s=a.a.useState(!1),i=Object(o.a)(s,2),l=i[0],d=(i[1],a.a.useState(!1)),b=Object(o.a)(d,2),h=b[0],u=(b[1],function(e){var t=e.label,c=e.value,n=e.onChange;return Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"checkbox",checked:c,onChange:n}),t]})});g=c,y=l,w=h;var O=Object(n.useReducer)(T,{data:[],keys:{},error:null,columns:{},colLoopData:{},visibleKeys:[]}),f=Object(o.a)(O,2),p=f[0],x=p.data,v=p.error,m=p.columns,P=p.visibleData,N=p.colLoopData,C=p.visibleKeys,D=f[1];if(Object(n.useEffect)((function(){fetch("https://sil-interactive-soybean-map-data-1.s3.amazonaws.com/pat_db.json").then((function(e){return e.json()})).then((function(e){D({type:"DATA",data:e.data,keys:e.keys})})).catch((function(e){D({type:"ERROR",error:e})}))}),[]),v)return Object(j.jsxs)("h5",{children:[" Error Occurred ",v," "]});if(0===x.length)return Object(j.jsx)("h5",{children:" Loading "});for(var A=[],L=0,R=Object.keys(m);L<R.length;L++){var E=R[L],I=m[E];I.el&&A.push(a.a.createElement(I.el,{key:E,col:E,struct:N[E],dispatch:D}))}return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("img",{src:S,className:"mx-auto d-block",alt:"SIL logo",style:{"max-width":"300px"}}),Object(j.jsxs)("h1",{className:"display-1 text-center",children:["Pan-African Soybean Variety Trials (PAT) Database"," "]}),Object(j.jsx)("h1",{class:"display-6",children:"Introduction"}),Object(j.jsx)("p",{children:"The Soybean Innovation Lab\u2019s Pan-African Soybean Variety Trials (PAT) fast-track the introduction and testing of commercial soybean varieties sourced from across Africa, the U.S., Australia, and Latin America to provide the private sector, farmers, and processors with access to a broader selection of seed than what is currently available. The program consortium leverages its role as an independent third party and its unique access to international, regional, and national supplies of high-yielding germplasm to swiftly bring new varieties to market."}),Object(j.jsxs)("p",{children:["The PAT database covers results from trials in Benin, Cameroon, Ethiopia, Ghana, Kenya, Malawi, Mali, Mozambique, Nigeria, Rwanda, Sudan, Uganda, Zambia and Zimbabwe from 2015 to 2020."," ",Object(j.jsx)("b",{children:"The tool will be continuously updated to include other countries and seasons of testing."})]}),Object(j.jsx)("h1",{class:"display-6",children:"Instructions"}),Object(j.jsxs)("p",{children:["To explore the PAT database start with selecting one of the filters below. The filters are connected, and the first selection will determine the options available in the other filters. You can select multiple options by holding the Ctrl key while clicking. If you decide to change the filter, you can click on another option within the same filter or select the option ",Object(j.jsx)("b",{children:"clear"}),". The result of the selected filters will show up as a table at the bottom of the screen. Please click"," ",Object(j.jsx)("b",{children:"Download as CSV"})," to download the data."]}),Object(j.jsxs)("p",{children:[" ","Questions about this data?"," ",Object(j.jsxs)("a",{href:"mailto:soybeaninnovationlab@illinois.edu",children:[" ","Please Contact SIL"," "]})," "]}),Object(j.jsx)("div",{class:"checkbox",children:Object(j.jsxs)("div",{class:"center-text",children:[Object(j.jsx)("p",{children:" If you wish to check for overlaps in multiple entries, check the box below. If you want to display all of the data, leave the checkbox blank."}),Object(j.jsx)(u,{value:c,onChange:function(){r(!c)}})]})}),Object(j.jsx)("div",{className:"d-flex flex-wrap justify-content-evenly",children:A}),Object(j.jsx)("div",{className:"mb-5",children:Object(j.jsx)(k,{keys:C,data:P})})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,50)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};c(48);s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root")),C()}},[[49,1,2]]]);
//# sourceMappingURL=main.4d298fc3.chunk.js.map