(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{277:function(t,e,r){var content=r(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("95ba8014",content,!0,{sourceMap:!1})},291:function(t,e,r){"use strict";r(277)},292:function(t,e,r){var c=r(50)(!1);c.push([t.i,".blog-all[data-v-7dcde716]{min-height:90vh}ul[data-v-7dcde716]{margin:0;padding:0}ul li[data-v-7dcde716]{list-style:none}.article-card[data-v-7dcde716]{margin:8px;max-width:320px}.article-card a[data-v-7dcde716]:hover{text-decoration:none}.article-card a:hover img[data-v-7dcde716]{transform:scale(1.01)}.article-card img[data-v-7dcde716]{width:100%;height:220px;overflow:hidden;transition:.5s;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}.article-card p[data-v-7dcde716]{color:#212529;font-size:15px;margin-bottom:10px}.article-card h4[data-v-7dcde716]{margin:0}",""]),t.exports=c},320:function(t,e,r){"use strict";r.r(e);var c=r(26),n=(r(58),{asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,c=t.params,e.next=3,r("articles",c.slug).only(["title","description","img","slug","author"]).sortBy("createdAt","desc").fetch();case 3:return n=e.sent,e.abrupt("return",{articles:n});case 5:case"end":return e.stop()}}),e)})))()}}),o=(r(291),r(42)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"blog-all"},[r("div",{staticClass:"container py-5 my-5"},[r("h1",{staticClass:"font-weight-bold p-5 text-center"},[t._v("Artikel dan Berita")]),t._v(" "),r("ul",{staticClass:"d-flex flex-wrap justify-content-center"},t._l(t.articles,(function(article){return r("li",{key:article.slug,staticClass:"article-card"},[r("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[article.img?r("img",{staticClass:"rounded-sm",attrs:{src:article.img}}):t._e(),t._v(" "),r("div",{staticClass:"pb-3"},[r("h4",{staticClass:"py-3"},[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v("by "+t._s(article.author.name))]),t._v(" "),r("p",[t._v(t._s(article.description))])])])],1)})),0)])])}),[],!1,null,"7dcde716",null);e.default=component.exports}}]);