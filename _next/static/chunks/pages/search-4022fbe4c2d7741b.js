(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{8161:function(t,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return e(9505)}])},3708:function(t,r,e){"use strict";e.d(r,{Z:function(){return g}});var a=e(7997),n=e(1720),c=e(6228),o=e(6407),s=e(1664),i=function(t){var r=t.tags,e=t.currentTag;return r?(0,a.tZ)("div",{className:"tag-container",children:(0,a.tZ)("ul",{className:"flex max-w-full mt-4 overflow-x-auto",children:Object.keys(r).map((function(t){var n=t===e;return(0,a.tZ)("li",{className:"mr-3 font-medium border whitespace-nowrap dark:text-gray-300 ".concat(n?"text-white bg-black border-black dark:bg-gray-600 dark:border-gray-600":"bg-gray-100 border-gray-100 text-gray-400 dark:bg-night dark:border-gray-800"),children:(0,a.tZ)(s.default,{href:n?"/search":"/tag/".concat(encodeURIComponent(t)),children:(0,a.tZ)("a",{className:"px-4 py-2 block",children:"".concat(t," (").concat(r[t],")")})},t)},t)}))})}):null},u=e(5697),l=e.n(u),d=function(t){var r=t.tags,e=t.posts,s=t.currentTag,u=(0,n.useState)(""),l=u[0],d=u[1],g=[];return e&&(g=e.filter((function(t){var r=t.tags?t.tags.join(" "):"";return(t.title+t.summary+r).toLowerCase().includes(l.toLowerCase())}))),(0,a.BX)(o.Z,{children:[(0,a.BX)("div",{className:"relative",children:[(0,a.tZ)("input",{type:"text",placeholder:s?"Search in #".concat(s):"Search Articles",className:"block w-full border px-4 py-2 border-black bg-white text-black dark:bg-night dark:border-white dark:text-white",onChange:function(t){return d(t.target.value)}}),(0,a.tZ)("svg",{className:"absolute right-3 top-3 h-5 w-5 text-black dark:text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]}),(0,a.tZ)(i,{tags:r,currentTag:s}),(0,a.BX)("div",{className:"article-container my-8",children:[!g.length&&(0,a.tZ)("p",{className:"text-gray-500 dark:text-gray-300",children:"No posts found."}),g.slice(0,20).map((function(t){return(0,a.tZ)(c.Z,{post:t},t.id)}))]})]})};d.propTypes={posts:l().array.isRequired,tags:l().object.isRequired,currentTag:l().string};var g=d},9505:function(t,r,e){"use strict";e.r(r),e.d(r,{__N_SSG:function(){return c},default:function(){return o}});var a=e(7997),n=e(3708),c=!0;function o(t){var r=t.tags,e=t.posts;return(0,a.tZ)(n.Z,{tags:r,posts:e})}}},function(t){t.O(0,[684,624,888,179],(function(){return r=8161,t(t.s=r);var r}));var r=t.O();_N_E=r}]);