(()=>{"use strict";var e,o={398:()=>{const e=window.wp.blocks,o=window.wp.i18n,t=window.wp.element,r=window.wp.blockEditor,s=JSON.parse('{"u2":"bootstrap-blocks/carousel-item"}');(0,e.registerBlockType)(s.u2,{title:(0,o.__)("Carousel Slide","bootstrap-blocks"),supports:{color:{gradients:!0}},icon:"layout",category:"design",parent:["bootstrap-blocks/carousel-container"],attributes:{isFirstBlock:{type:"boolean",default:!1}},edit:function(e){let{attributes:s,setAttributes:l}=e;const{className:n,isFirstBlock:a}=s,i=(0,r.useBlockProps)();return(0,t.createElement)("div",i,(0,t.createElement)(r.InnerBlocks,{placeholder:(0,o.__)("Add blocks here","bootstrap-blocks")}))},save:function(){return(0,t.createElement)(r.InnerBlocks.Content,null)}})}},t={};function r(e){var s=t[e];if(void 0!==s)return s.exports;var l=t[e]={exports:{}};return o[e](l,l.exports,r),l.exports}r.m=o,e=[],r.O=(o,t,s,l)=>{if(!t){var n=1/0;for(p=0;p<e.length;p++){for(var[t,s,l]=e[p],a=!0,i=0;i<t.length;i++)(!1&l||n>=l)&&Object.keys(r.O).every((e=>r.O[e](t[i])))?t.splice(i--,1):(a=!1,l<n&&(n=l));if(a){e.splice(p--,1);var c=s();void 0!==c&&(o=c)}}return o}l=l||0;for(var p=e.length;p>0&&e[p-1][2]>l;p--)e[p]=e[p-1];e[p]=[t,s,l]},r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={278:0,994:0};r.O.j=o=>0===e[o];var o=(o,t)=>{var s,l,[n,a,i]=t,c=0;if(n.some((o=>0!==e[o]))){for(s in a)r.o(a,s)&&(r.m[s]=a[s]);if(i)var p=i(r)}for(o&&o(t);c<n.length;c++)l=n[c],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(p)},t=globalThis.webpackChunkbootstrap_blocks=globalThis.webpackChunkbootstrap_blocks||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var s=r.O(void 0,[994],(()=>r(398)));s=r.O(s)})();