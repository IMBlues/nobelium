(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{2774:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return r(9505)}])},6228:function(t,e,r){"use strict";var a=r(7997),n=r(1664),c=r.n(n),i=r(8670),s=r.n(i),l=r(5520);e.Z=function(t){var e,r=t.post;return(0,a.tZ)(c(),{href:"".concat(s().path,"/").concat(r.slug),children:(0,a.tZ)("a",{children:(0,a.BX)("article",{className:"mb-6 md:mb-8",children:[(0,a.BX)("header",{className:"flex flex-col justify-between md:flex-row md:items-baseline",children:[(0,a.tZ)("h2",{className:"text-lg md:text-xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100",children:r.title}),(0,a.tZ)("time",{className:"flex-shrink-0 text-gray-600 dark:text-gray-400",children:(0,l.Z)((null===r||void 0===r||null===(e=r.date)||void 0===e?void 0:e.start_date)||r.createdTime,s().lang)})]}),(0,a.tZ)("main",{children:(0,a.tZ)("p",{className:"hidden md:block leading-8 text-gray-700 dark:text-gray-300",children:r.summary})})]},r.id)})})}},3708:function(t,e,r){"use strict";r.d(e,{Z:function(){return g}});var a=r(7997),n=r(1720),c=r(6228),i=r(6407),s=r(1664),l=r.n(s),o=function(t){var e=t.tags,r=t.currentTag;return e?(0,a.tZ)("div",{className:"tag-container",children:(0,a.tZ)("ul",{className:"flex max-w-full mt-4 overflow-x-auto",children:Object.keys(e).map((function(t){var n=t===r;return(0,a.tZ)("li",{className:"mr-3 font-medium border whitespace-nowrap dark:text-gray-300 ".concat(n?"text-white bg-black border-black dark:bg-gray-600 dark:border-gray-600":"bg-gray-100 border-gray-100 text-gray-400 dark:bg-night dark:border-gray-800"),children:(0,a.tZ)(l(),{href:n?"/search":"/tag/".concat(encodeURIComponent(t)),children:(0,a.tZ)("a",{className:"px-4 py-2 block",children:"".concat(t," (").concat(e[t],")")})},t)},t)}))})}):null},d=r(5697),u=r.n(d),h=function(t){var e=t.tags,r=t.posts,s=t.currentTag,l=(0,n.useState)(""),d=l[0],u=l[1],h=[];return r&&(h=r.filter((function(t){var e=t.tags?t.tags.join(" "):"";return(t.title+t.summary+e).toLowerCase().includes(d.toLowerCase())}))),(0,a.BX)(i.Z,{children:[(0,a.BX)("div",{className:"relative",children:[(0,a.tZ)("input",{type:"text",placeholder:s?"Search in #".concat(s):"Search Articles",className:"block w-full border px-4 py-2 border-black bg-white text-black dark:bg-night dark:border-white dark:text-white",onChange:function(t){return u(t.target.value)}}),(0,a.tZ)("svg",{className:"absolute right-3 top-3 h-5 w-5 text-black dark:text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]}),(0,a.tZ)(o,{tags:e,currentTag:s}),(0,a.BX)("div",{className:"article-container my-8",children:[!h.length&&(0,a.tZ)("p",{className:"text-gray-500 dark:text-gray-300",children:"No posts found."}),h.slice(0,20).map((function(t){return(0,a.tZ)(c.Z,{post:t},t.id)}))]})]})};h.propTypes={posts:u().array.isRequired,tags:u().object.isRequired,currentTag:u().string};var g=h},9505:function(t,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return c},default:function(){return i}});var a=r(7997),n=r(3708),c=!0;function i(t){var e=t.tags,r=t.posts;return(0,a.tZ)(n.Z,{tags:e,posts:r})}}},function(t){t.O(0,[628,818,888,774,179],(function(){return e=2774,t(t.s=e);var e}));var e=t.O();_N_E=e}]);