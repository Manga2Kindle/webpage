(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(t,a,e){},212:function(t,a,e){"use strict";var n=e(137);e.n(n).a},255:function(t,a,e){"use strict";e(177);var n,s=e(178),o=e(151),i=e(195),r=e.n(i),c={components:{NavLink:o.a},data:function(){return{tagName:""}},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}},mounted:(n=Object(s.a)(regeneratorRuntime.mark((function t(){var a,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("https://api.github.com/repos/EduFdezSoy/Manga2Kindle/releases");case 2:a=t.sent,e=a.data,this.$data.tagName=e[0].tag_name;case 5:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},l=(e(212),e(2)),d=Object(l.a)(c,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),e("p",{staticClass:"description"},[t._v(t._s(t.data.tagline||t.$description||"Welcome to your VuePress site"))]),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("a",{staticClass:"action-button",attrs:{rel:"noopener noreferrer",href:"https://play.google.com/store/apps/details?id=es.edufdezsoy.manga2kindle&hl=es",title:"Download latest release"}},[e("font-awesome-icon",{attrs:{icon:"download"}}),t._v(" "),e("span",[t._v("Download "+t._s(t.tagName||"from Google Play"))])],1),t._v(" "),e("NavLink",{staticClass:"action-button secondary",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(a,n){return e("div",{key:n,staticClass:"feature"},[e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.details))])])})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?e("footer",{staticClass:"footer"},[t._v(t._s(t.data.footer))]):t._e()],1)}),[],!1,null,null,null);a.a=d.exports}}]);