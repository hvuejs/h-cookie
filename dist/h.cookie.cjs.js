"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t=function(e,t,o){if(arguments.length>1&&"[object Object]"!==String(t)){if(o=r({path:"/",expires:new Date((new Date).getTime()+864e5)},o),null==t&&(o.expires=-1),"number"==typeof o.expires){var i=o.expires,c=o.expires=new Date;c.setDate(c.getDate()+i)}return t=String(t),document.cookie=[encodeURIComponent(e),"=",o.raw?t:n(t),o.expires?"; expires="+o.expires.toUTCString():"",o.path?"; path="+o.path:"",o.domain?"; domain="+o.domain:"",o.secure?"; secure":""].join("")}var u,p=(o=t||{}).raw?function(e){return e}:decodeURIComponent;return(u=new RegExp("(?:^|; )"+encodeURIComponent(e)+"=([^;]*)").exec(document.cookie))?p(u[1]):null};function n(e){return encodeURIComponent(e).replace(/(%7B|%7D|%3A|%22|%23|%5B|%5D)/g,(function(e){return decodeURIComponent(e)}))}var r=function t(){var n,r,o,i,c,p,a=arguments[0]||{},s=1,f=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"===e(a)||isFunction(a)||(a={}),s===f&&(a=this,s--);s<f;s++)if(null!=(n=arguments[s]))for(r in n)i=n[r],"__proto__"!==r&&a!==i&&(l&&i&&(u(i)||(c=Array.isArray(i)))?(o=a[r],p=c&&!Array.isArray(o)?[]:c||u(o)?o:{},c=!1,a[r]=t(l,p,i)):void 0!==i&&(a[r]=i));return a},o=Object.getPrototypeOf,i={}.hasOwnProperty,c=i.toString,u=function(e){var t,n;return!(!e||"[object Object]"!==toString.call(e))&&(!(t=o(e))||"function"==typeof(n=i.call(t,"constructor")&&t.constructor)&&c.call(n)===ObjectFunctionString)},p={set:function(e,n,r){var o=r&&r.path||"/",i=r&&r.expires||1,c=isNaN(Number(i))?1:Number(i),u=new Date((new Date).getTime()+864e5*c);return t(e,JSON.stringify(n),{path:o,expires:u})},get:function(e){return t(e)?JSON.parse(t(e)):null},del:function(e){return t(e,null,{expires:-1})}};module.exports=p;