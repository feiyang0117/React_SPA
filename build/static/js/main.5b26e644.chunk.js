(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(56)},39:function(e,t,n){},41:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(28),r=n.n(o),i=(n(39),n(14)),u=n(15),l=n(19),s=n(16),m=n(20),p=(n(41),n(11)),E=function(e){return c.a.createElement("ul",{className:"nav"},e.list.map(function(e,t){return c.a.createElement("li",{key:t},c.a.createElement(p.b,{to:{pathname:"".concat(e.url)}},e.text))}))},O=function(e){return c.a.createElement("h1",null,"Welcome!")},d=n(18),f=n(24),h=n.n(f),b=n(31),g=n(58),j=[{name:"iPhone 7",price:"6,888",amount:37},{name:"iPad",price:"3,488",amount:82},{name:"MacBook Pro",price:"11,888",amount:15}],v=Object(g.a)("REQUEST_GOODS"),w=Object(g.a)("RECEIVE_GOODS"),y=function(){return function(){var e=Object(b.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(v()),e.next=3,new Promise(function(e,t){setTimeout(function(){e(j)},1e3)});case 3:n=e.sent,t(w(n));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()};console.log(y());var _=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)(y())}},{key:"render",value:function(){return this.props.isFetching?c.a.createElement("h1",null,"Loading\u2026"):c.a.createElement("ul",{className:"goods"},this.props.goods.map(function(e,t){return c.a.createElement("li",{key:t,style:{marginBottom:20,listStyle:"none"}},c.a.createElement("span",null,e.name)," |",c.a.createElement("span",null,"\uffe5 ",e.price)," |",c.a.createElement("span",null,"\u5269\u4f59 ",e.amount," \u4ef6"))}))}}]),t}(a.Component),S=Object(d.b)(function(e,t){return{isFetching:e.goods.isFetching,goods:e.goods.data}})(_),k=n(12),D=(n(54),[{text:"welcome",url:"/welcome"},{text:"goods",url:"/goods"}]),N=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"nav_bar"},c.a.createElement(E,{list:D})),c.a.createElement("div",{className:"conent"},c.a.createElement(k.a,{path:"/welcome",component:O}),c.a.createElement(k.a,{path:"/goods",component:S})))}}]),t}(a.Component),x=n(8),F=n(25),C=n(57),P=Object(C.a)({REQUEST_GOODS:function(e,t){return Object(F.a)({},e,{isFetching:!0})},RECEIVE_GOODS:function(e,t){return Object(F.a)({},e,{isFetching:!1,data:t.payload})}},{isFetching:!1,data:[]}),R=Object(x.c)({goods:P}),T=[n(32).a],G=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||x.d,I=Object(x.e)(R,G(x.a.apply(void 0,T)));r.a.render(c.a.createElement(d.a,{store:I},c.a.createElement(p.a,null,c.a.createElement(k.a,{path:"/",component:N}))),document.getElementById("root"))}},[[34,2,1]]]);
//# sourceMappingURL=main.5b26e644.chunk.js.map