(()=>{"use strict";var e,t={96:()=>{const e=window.wp.blocks,t=window.wp.i18n,o=window.wp.element,r=window.wp.blockEditor,n=window.wp.components,l=JSON.parse('{"u2":"bootstrap-blocks/collapse-button"}');(0,e.registerBlockType)(l.u2,{title:(0,t.__)("Collapse Button","bootstrap-blocks"),supports:{color:{gradients:!0}},icon:"layout",category:"design",attributes:{target:{type:"string"}},parent:["bootstrap-blocks/collapse-container"],edit:function(e){let{attributes:l,setAttributes:a}=e;const{target:s,className:c}=l,p=(0,r.useBlockProps)();return(0,o.createElement)("div",p,(0,o.createElement)(r.InspectorControls,{key:"setting"},(0,o.createElement)(n.PanelBody,{title:(0,t.__)("Target","bootstrap-blocks")},(0,o.createElement)(n.PanelRow,null,(0,o.createElement)(n.TextControl,{label:(0,t.__)("Enter target","bootstrap-blocks"),value:s,onChange:e=>a({target:e})})))),(0,o.createElement)(r.InnerBlocks,{allowedBlocks:["core/paragraph"],templateLock:!1,placeholder:(0,t.__)("Add blocks here","bootstrap-blocks")}))},save:function(){return(0,o.createElement)(r.InnerBlocks.Content,null)}})}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var l=o[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=(t,o,n,l)=>{if(!o){var a=1/0;for(i=0;i<e.length;i++){for(var[o,n,l]=e[i],s=!0,c=0;c<o.length;c++)(!1&l||a>=l)&&Object.keys(r.O).every((e=>r.O[e](o[c])))?o.splice(c--,1):(s=!1,l<a&&(a=l));if(s){e.splice(i--,1);var p=n();void 0!==p&&(t=p)}}return t}l=l||0;for(var i=e.length;i>0&&e[i-1][2]>l;i--)e[i]=e[i-1];e[i]=[o,n,l]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={281:0,778:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,l,[a,s,c]=o,p=0;if(a.some((t=>0!==e[t]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(c)var i=c(r)}for(t&&t(o);p<a.length;p++)l=a[p],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(i)},o=globalThis.webpackChunkbootstrap_blocks=globalThis.webpackChunkbootstrap_blocks||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=r.O(void 0,[778],(()=>r(96)));n=r.O(n)})();