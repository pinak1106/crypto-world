(this["webpackJsonpcrypto-app"]=this["webpackJsonpcrypto-app"]||[]).push([[0],{273:function(e,t,c){},279:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(28),i=c.n(n),r=c(19),l=c(32),o=c(282),j=c(284),d=c(291),h=c(288),b=c(290),u=c(292),x=c(293),O=c(294),p=c(295),m=c.p+"static/media/cryptocurrency.1548aced.png",v=c(4),g=function(){return Object(v.jsxs)("div",{className:"nav-container",children:[Object(v.jsxs)("div",{className:"logo-container",children:[Object(v.jsx)(h.a,{src:m,size:"large"}),Object(v.jsx)(j.a.Title,{level:2,className:"logo",children:Object(v.jsx)(l.b,{to:"/",children:"Crypto World"})})]}),Object(v.jsxs)(b.a,{theme:"dark",children:[Object(v.jsx)(b.a.Item,{icon:Object(v.jsx)(u.a,{}),children:Object(v.jsx)(l.b,{to:"/",children:"Home"})}),Object(v.jsx)(b.a.Item,{icon:Object(v.jsx)(x.a,{}),children:Object(v.jsx)(l.b,{to:"/cryptocurrencies",children:"Cryptocurrencies"})}),Object(v.jsx)(b.a.Item,{icon:Object(v.jsx)(O.a,{}),children:Object(v.jsx)(l.b,{to:"/exchanges",children:"Exchanges"})}),Object(v.jsx)(b.a.Item,{icon:Object(v.jsx)(p.a,{}),children:Object(v.jsx)(l.b,{to:"/news",children:"News"})})]})]})},y=c(29),f=c.n(y),N=c(83),C=c(49),w=c(285),k=c(281),S=function(){return Object(v.jsx)("div",{className:"loader",children:Object(v.jsx)(k.a,{})})},T=c(110),P=c(41),F={"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"d66c3433afmsh2f40f49c5806a62p1e0a45jsn9a022227589e"},M=function(e){return{url:e,headers:F}},q=Object(T.a)({reducerPath:"cryptoApi",baseQuery:Object(P.d)({baseUrl:"https://coinranking1.p.rapidapi.com"}),endpoints:function(e){return{getCryptos:e.query({query:function(e){return M("/coins?limit=".concat(e))}}),getCryptoDetails:e.query({query:function(e){return M("/coin/".concat(e))}}),getCryptoHistory:e.query({query:function(e){var t=e.coinId,c=e.timeperiod;return M("/coin/".concat(t,"/history/").concat(c))}}),getExchanges:e.query({query:function(){return M("/exchanges")}})}}}),I=q.useGetCryptosQuery,A=q.useGetCryptoDetailsQuery,D=q.useGetCryptoHistoryQuery,E=q.useGetExchangesQuery,U=j.a.Title,L=function(){var e,t=I(10),c=t.data,a=t.isFetching,s=null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.stats;return a?Object(v.jsx)(S,{}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(U,{level:2,className:"heading",children:"Global Crypto Stats"}),Object(v.jsxs)(N.a,{children:[Object(v.jsx)(C.a,{span:12,children:Object(v.jsx)(w.a,{title:"Total Cryptocurrencies",value:s.total})}),Object(v.jsx)(C.a,{span:12,children:Object(v.jsx)(w.a,{title:"Total Exchanges",value:f()(s.totalExchanges)})}),Object(v.jsx)(C.a,{span:12,children:Object(v.jsx)(w.a,{title:"Total Market Cap",value:f()(s.totalMarketCap)})}),Object(v.jsx)(C.a,{span:12,children:Object(v.jsx)(w.a,{title:"Total 24h Volume",value:f()(s.total24hVolume)})}),Object(v.jsx)(C.a,{span:12,children:Object(v.jsx)(w.a,{title:"Total Markets",value:f()(s.totalMarkets)})})]}),Object(v.jsxs)("div",{className:"home-heading-container",children:[Object(v.jsx)(U,{level:2,className:"home-title",children:"Top 10 Cryptocurrencies in the world"}),Object(v.jsx)(U,{level:3,className:"show-more",children:Object(v.jsx)(l.b,{to:"/cryptocurrencies",children:"Show More"})})]}),Object(v.jsx)(se,{simplified:!0}),Object(v.jsxs)("div",{className:"home-heading-container",children:[Object(v.jsx)(U,{level:2,className:"home-title",children:"Latest Crypto News"}),Object(v.jsx)(U,{level:3,className:"show-more",children:Object(v.jsx)(l.b,{to:"/news",children:"Show More"})})]}),Object(v.jsx)(me,{simplified:!0})]})},V=c(35),H=c(113),Q=c(287),$=c(296),G=c(297),R=c(298),W=c(299),z=c(114),B=c(300),J=c(161),Z=c(156),_=j.a.Title,K=function(e){for(var t,c=e.coinHistory,a=e.currentPrice,s=e.coinName,n=[],i=[],r=0;r<(null===c||void 0===c||null===(l=c.data)||void 0===l||null===(o=l.history)||void 0===o?void 0:o.length);r+=1){var l,o,j;n.push(null===c||void 0===c||null===(j=c.data)||void 0===j?void 0:j.history[r].price)}for(var d=0;d<(null===c||void 0===c||null===(h=c.data)||void 0===h||null===(b=h.history)||void 0===b?void 0:b.length);d+=1){var h,b,u;i.push(new Date(null===c||void 0===c||null===(u=c.data)||void 0===u?void 0:u.history[d].timestamp).toLocaleDateString())}var x={labels:i,datasets:[{label:"Price In USD",data:n,fill:!1,backgroundColor:"#0071bd",borderColor:"#0071bd"}]};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(N.a,{className:"chart-header",children:[Object(v.jsxs)(_,{level:2,className:"chart-title",children:[s," Price Chart "]}),Object(v.jsxs)(C.a,{className:"price-container",children:[Object(v.jsxs)(_,{level:5,className:"price-change",children:["Change: ",null===c||void 0===c||null===(t=c.data)||void 0===t?void 0:t.change,"%"]}),Object(v.jsxs)(_,{level:5,className:"current-price",children:["Current ",s," Price: $ ",a]})]})]}),Object(v.jsx)(Z.a,{data:x,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})},X=j.a.Title,Y=j.a.Text,ee=Q.a.Option,te=function(){var e,t,c,s,n=Object(r.g)().coinId,i=Object(a.useState)("7d"),l=Object(V.a)(i,2),o=l[0],j=l[1],d=A(n),h=d.data,b=d.isFetching,u=D({coinId:n,timeperiod:o}).data,p=null===h||void 0===h||null===(e=h.data)||void 0===e?void 0:e.coin;if(b)return Object(v.jsx)(S,{});var m=[{title:"Price to USD",value:"$ ".concat(p.price&&f()(p.price)),icon:Object(v.jsx)($.a,{})},{title:"Rank",value:p.rank,icon:Object(v.jsx)(G.a,{})},{title:"24h Volume",value:"$ ".concat(p.volume&&f()(p.volume)),icon:Object(v.jsx)(R.a,{})},{title:"Market Cap",value:"$ ".concat(p.marketCap&&f()(p.marketCap)),icon:Object(v.jsx)($.a,{})},{title:"All-time-high(daily avg.)",value:"$ ".concat(f()(p.allTimeHigh.price)),icon:Object(v.jsx)(W.a,{})}],g=[{title:"Number Of Markets",value:p.numberOfMarkets,icon:Object(v.jsx)(x.a,{})},{title:"Number Of Exchanges",value:p.numberOfExchanges,icon:Object(v.jsx)(O.a,{})},{title:"Aprroved Supply",value:p.approvedSupply?Object(v.jsx)(z.a,{}):Object(v.jsx)(B.a,{}),icon:Object(v.jsx)(J.a,{})},{title:"Total Supply",value:"$ ".concat(f()(p.totalSupply)),icon:Object(v.jsx)(J.a,{})},{title:"Circulating Supply",value:"$ ".concat(f()(p.circulatingSupply)),icon:Object(v.jsx)(J.a,{})}];return Object(v.jsxs)(C.a,{className:"coin-detail-container",children:[Object(v.jsxs)(C.a,{className:"coin-heading-container",children:[Object(v.jsxs)(X,{level:2,className:"coin-name",children:[null===h||void 0===h||null===(t=h.data)||void 0===t?void 0:t.coin.name," (",null===h||void 0===h||null===(c=h.data)||void 0===c?void 0:c.coin.slug,") Price"]}),Object(v.jsxs)("p",{children:[p.name," live price in US Dollar (USD). View value statistics, market cap and supply."]})]}),Object(v.jsx)(Q.a,{defaultValue:"7d",className:"select-timeperiod",placeholder:"Select Timeperiod",onChange:function(e){return j(e)},children:["3h","24h","7d","30d","1y","3m","3y","5y"].map((function(e){return Object(v.jsx)(ee,{children:e},e)}))}),Object(v.jsx)(K,{coinHistory:u,currentPrice:f()(p.price),coinName:p.name}),Object(v.jsxs)(C.a,{className:"stats-container",children:[Object(v.jsxs)(C.a,{className:"coin-value-statistics",children:[Object(v.jsxs)(C.a,{className:"coin-value-statistics-heading",children:[Object(v.jsxs)(X,{level:3,className:"coin-details-heading",children:[p.name," Value Statistics"]}),Object(v.jsxs)("p",{children:["An overview showing the statistics of ",p.name,", such as the base and quote currency, the rank, and trading volume."]})]}),m.map((function(e){var t=e.icon,c=e.title,a=e.value;return Object(v.jsxs)(C.a,{className:"coin-stats",children:[Object(v.jsxs)(C.a,{className:"coin-stats-name",children:[Object(v.jsx)(Y,{children:t}),Object(v.jsx)(Y,{children:c})]}),Object(v.jsx)(Y,{className:"stats",children:a})]})}))]}),Object(v.jsxs)(C.a,{className:"other-stats-info",children:[Object(v.jsxs)(C.a,{className:"coin-value-statistics-heading",children:[Object(v.jsx)(X,{level:3,className:"coin-details-heading",children:"Other Stats Info"}),Object(v.jsxs)("p",{children:["An overview showing the statistics of ",p.name,", such as the base and quote currency, the rank, and trading volume."]})]}),g.map((function(e){var t=e.icon,c=e.title,a=e.value;return Object(v.jsxs)(C.a,{className:"coin-stats",children:[Object(v.jsxs)(C.a,{className:"coin-stats-name",children:[Object(v.jsx)(Y,{children:t}),Object(v.jsx)(Y,{children:c})]}),Object(v.jsx)(Y,{className:"stats",children:a})]})}))]})]}),Object(v.jsxs)(C.a,{className:"coin-desc-link",children:[Object(v.jsxs)(N.a,{className:"coin-desc",children:[Object(v.jsxs)(X,{level:3,className:"coin-details-heading",children:["What is ",p.name,"?"]}),Object(H.a)(p.description)]}),Object(v.jsxs)(C.a,{className:"coin-links",children:[Object(v.jsxs)(X,{level:3,className:"coin-details-heading",children:[p.name," Links"]}),null===(s=p.links)||void 0===s?void 0:s.map((function(e){return Object(v.jsxs)(N.a,{className:"coin-link",children:[Object(v.jsx)(X,{level:5,className:"link-name",children:e.type}),Object(v.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name})]},e.name)}))]})]})]})},ce=c(286),ae=c(283),se=function(e){var t,c=e.simplified,s=I(c?10:100),n=s.data,i=s.isFetching,r=Object(a.useState)(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.coins),o=Object(V.a)(r,2),j=o[0],d=o[1],h=Object(a.useState)(""),b=Object(V.a)(h,2),u=b[0],x=b[1];return Object(a.useEffect)((function(){var e,t=null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.coins.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}));d(t)}),[n,u]),i?Object(v.jsx)(S,{}):Object(v.jsxs)(v.Fragment,{children:[!c&&Object(v.jsx)("div",{className:"search-crypto",children:Object(v.jsx)(ce.a,{placeholder:"Search Crypto",onChange:function(e){return x(e.target.value)}})}),Object(v.jsx)(N.a,{gutter:[32,32],className:"crypto-card-container",children:null===j||void 0===j?void 0:j.map((function(e){return Object(v.jsx)(C.a,{xs:24,sm:12,large:6,className:"crypto-card",children:Object(v.jsx)(l.b,{to:"/crypto/".concat(e.id),children:Object(v.jsxs)(ae.a,{title:"".concat(e.rank,". ").concat(e.name),extra:Object(v.jsx)("img",{className:"crypto-image",src:e.iconUrl,alt:""}),hoverable:!0,children:[Object(v.jsxs)("p",{children:["Price: ",f()(e.price)]}),Object(v.jsxs)("p",{children:["Market Cap: ",f()(e.marketCap)]}),Object(v.jsxs)("p",{children:["Daily Change: ",f()(e.change),"%"]})]})})},e.id)}))})]})},ne=c(289),ie=j.a.Text,re=ne.a.Panel,le=function(){var e,t=E(),c=t.data,a=t.isFetching,s=null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.exchanges;return a?Object(v.jsx)(S,{}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(N.a,{children:[Object(v.jsx)(C.a,{span:6,children:"Exchanges"}),Object(v.jsx)(C.a,{span:6,children:"24h Trade Volume"}),Object(v.jsx)(C.a,{span:6,children:"Markets"}),Object(v.jsx)(C.a,{span:6,children:"Change"})]}),Object(v.jsx)(N.a,{children:null===s||void 0===s?void 0:s.map((function(e){return Object(v.jsx)(C.a,{span:24,children:Object(v.jsx)(ne.a,{children:Object(v.jsx)(re,{showArrow:!1,header:Object(v.jsxs)(N.a,{children:[Object(v.jsxs)(C.a,{span:6,children:[Object(v.jsx)(ie,{children:Object(v.jsxs)("strong",{children:[e.rank,"."]})}),Object(v.jsx)(h.a,{className:"exchange-image",src:e.iconUrl}),Object(v.jsx)(ie,{children:Object(v.jsx)("strong",{children:e.name})})]}),Object(v.jsxs)(C.a,{span:6,children:["$",f()(e.volume)]}),Object(v.jsx)(C.a,{span:6,children:f()(e.numberOfMarkets)}),Object(v.jsxs)(C.a,{span:6,children:[f()(e.marketShare),"%"]})]},e.id),children:Object(H.a)(e.description||"")},e.id)})})}))})]})},oe=c(155),je=c.n(oe),de={"x-bingapis-sdk":"true","x-rapidapi-host":"bing-news-search1.p.rapidapi.com","x-rapidapi-key":"d66c3433afmsh2f40f49c5806a62p1e0a45jsn9a022227589e"},he=Object(T.a)({reducerPath:"cryptoNewsApi",baseQuery:Object(P.d)({baseUrl:"https://bing-news-search1.p.rapidapi.com"}),endpoints:function(e){return{getCryptoNews:e.query({query:function(e){var t=e.newsCategory,c=e.count;return{url:"/news/search?q=".concat(t,"&safeSearch=Off&textFormat=Raw&freshness=Day&count=").concat(c),headers:de}}})}}}),be=he.useGetCryptoNewsQuery,ue=j.a.Text,xe=j.a.Title,Oe=Q.a.Option,pe="https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News",me=function(e){var t,c=e.simplified,s=Object(a.useState)("Cryptocurrency"),n=Object(V.a)(s,2),i=n[0],r=n[1],l=be({newsCategory:i,count:c?6:12}).data,o=I(100).data;return(null===l||void 0===l?void 0:l.value)?Object(v.jsxs)(N.a,{gutter:[24,24],children:[!c&&Object(v.jsx)(C.a,{children:Object(v.jsxs)(Q.a,{showSearch:!0,className:"select-news",placeholder:"Select a Crypto",optionFilterProp:"children",onChange:function(e){return r(e)},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:[Object(v.jsx)(Oe,{value:"Cryptocurrency",children:"Cryptocurrency"}),null===o||void 0===o||null===(t=o.data)||void 0===t?void 0:t.coins.map((function(e){return Object(v.jsx)(Oe,{value:e.name,children:e.name})}))]})}),null===l||void 0===l?void 0:l.value.map((function(e,t){var c,a,s,n,i,r;return Object(v.jsx)(C.a,{xs:24,sm:12,lg:8,children:Object(v.jsx)(ae.a,{hoverable:!0,className:"news-card",children:Object(v.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[Object(v.jsxs)("div",{className:"news-image-container",children:[Object(v.jsx)(xe,{className:"news-title",level:4,children:e.name}),Object(v.jsx)("img",{style:{maxWidth:"200px",maxHeight:"100px"},src:(null===e||void 0===e||null===(c=e.image)||void 0===c||null===(a=c.thumbnail)||void 0===a?void 0:a.contentUrl)||pe,alt:"news"})]}),Object(v.jsx)("p",{children:e.description>100?"".concat(e.description.substring(0,100)," ...."):e.description}),Object(v.jsxs)("div",{className:"provider-container",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)(h.a,{src:(null===(s=e.provider[0])||void 0===s||null===(n=s.image)||void 0===n||null===(i=n.thumbnail)||void 0===i?void 0:i.contentUrl)||pe,alt:""}),Object(v.jsx)(ue,{className:"provider-name",children:null===(r=e.provider[0])||void 0===r?void 0:r.name})]}),Object(v.jsx)(ue,{children:je()(e.datePublished).startOf("ss").fromNow()})]})]})})},t)}))]}):Object(v.jsx)(S,{})};c(273);var ve,ge=function(){return Object(v.jsxs)("div",{className:"app",children:[Object(v.jsx)("div",{className:"navbar",children:Object(v.jsx)(g,{})}),Object(v.jsxs)("div",{className:"main",children:[Object(v.jsx)(o.a,{children:Object(v.jsx)("div",{className:"routes",children:Object(v.jsxs)(r.c,{children:[Object(v.jsx)(r.a,{exact:!0,path:"/",element:Object(v.jsx)(L,{})}),Object(v.jsx)(r.a,{exact:!0,path:"/exchanges",element:Object(v.jsx)(le,{})}),Object(v.jsx)(r.a,{exact:!0,path:"/cryptocurrencies",element:Object(v.jsx)(se,{})}),Object(v.jsx)(r.a,{exact:!0,path:"/Crypto/:coinId",element:Object(v.jsx)(te,{})}),Object(v.jsx)(r.a,{exact:!0,path:"/news",element:Object(v.jsx)(me,{})})]})})}),Object(v.jsxs)("div",{className:"footer",children:[Object(v.jsxs)(j.a.Title,{level:5,style:{color:"white",textAlign:"center"},children:["Crypto World",Object(v.jsx)("br",{}),"All Rights Reserved"]}),Object(v.jsxs)(d.b,{children:[Object(v.jsx)(l.b,{to:"/",children:"Home"}),Object(v.jsx)(l.b,{to:"/exchanges",children:"Exchanges"}),Object(v.jsx)(l.b,{to:"/news",children:"News"})]})]})]})]})},ye=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,301)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))},fe=(c(274),c(38)),Ne=c(30),Ce=c(11),we=Object(Ce.a)({reducer:(ve={},Object(Ne.a)(ve,q.reducerPath,q.reducer),Object(Ne.a)(ve,he.reducerPath,he.reducer),ve)});c(275).config(),console.log("d66c3433afmsh2f40f49c5806a62p1e0a45jsn9a022227589e"),i.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(l.a,{children:Object(v.jsx)(fe.a,{store:we,children:Object(v.jsx)(ge,{})})})}),document.getElementById("root")),ye()}},[[279,1,2]]]);
//# sourceMappingURL=main.4df5f736.chunk.js.map