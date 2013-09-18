/*! jQuery v@1.8.0 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bX(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bV.length;while(e--){b=bV[e]+c;if(b in a)return b}return d}function bY(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function bZ(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bY(c)&&(e[f]=p._data(c,"olddisplay",cb(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b$(a,b,c){var d=bO.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function b_(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bU[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bU[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bU[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bU[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bU[e]+"Width"))||0));return f}function ca(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bP.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+b_(a,b,c||(f?"border":"content"),e)+"px"}function cb(a){if(bR[a])return bR[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bR[a]=c,c}function ch(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||cd.test(a)?d(a,e):ch(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ch(a+"["+e+"]",b[e],c,d);else d(a,b)}function cy(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cz(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cu;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cz(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cz(a,c,d,e,"*",g)),h}function cA(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cB(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cC(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cK(){try{return new a.XMLHttpRequest}catch(b){}}function cL(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cT(){return setTimeout(function(){cM=b},0),cM=p.now()}function cU(a,b){p.each(b,function(b,c){var d=(cS[b]||[]).concat(cS["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cV(a,b,c){var d,e=0,f=0,g=cR.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cM||cT(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cM||cT(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cW(k,j.opts.specialEasing);for(;e<g;e++){d=cR[e].call(j,a,k,j.opts);if(d)return d}return cU(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cW(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cX(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bY(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cb(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cO.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cY(a,b,c,d,e){return new cY.prototype.init(a,b,c,d,e)}function cZ(a,b){var c,d={height:a},e=0;for(;e<4;e+=2-b)c=bU[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function c_(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=r.test(" ")?/^[\s\xA0]+|[\s\xA0]+$/g:/^\s+|\s+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.0",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":a.toString().replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||f.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete"||e.readyState!=="loading"&&e.addEventListener)setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){p.isFunction(c)&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return typeof a=="object"?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length||!d)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/^(?:\{.*\}|\[.*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||++p.uuid:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")===0&&(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.shift(),e=p._queueHooks(a,b),f=function(){p.dequeue(a,b)};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),delete e.stop,d.call(a,f,e)),!c.length&&e&&e.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)(d=p._data(g[h],a+"queueHooks"))&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)~f.indexOf(" "+b[g]+" ")||(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>-1)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,""+d),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,k,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=[].slice.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click")){g=p(this),g.context=this;for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){i={},k=[],g[0]=f;for(d=0;d<q;d++)l=o[d],m=l.selector,i[m]===b&&(i[m]=g.is(m)),i[m]&&k.push(l);k.length&&u.push({elem:f,matches:k})}}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){j=u[d],c.currentTarget=j.elem;for(e=0;e<j.matches.length&&!c.isImmediatePropagationStopped();e++){l=j.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,h=((p.event.special[l.origType]||{}).handle||l.handler).apply(j.elem,r),h!==b&&(c.result=h,h===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{ready:{setup:p.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bd(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)Z(a,b[e],c,d)}function be(a,b,c,d,e,f){var g,h=$.setFilters[b.toLowerCase()];return h||Z.error(b),(a||!(g=e))&&bd(a||"*",d,g=[],e),g.length>0?h(g,c,f):[]}function bf(a,c,d,e,f){var g,h,i,j,k,l,m,n,p=0,q=f.length,s=L.POS,t=new RegExp("^"+s.source+"(?!"+r+")","i"),u=function(){var a=1,c=arguments.length-2;for(;a<c;a++)arguments[a]===b&&(g[a]=b)};for(;p<q;p++){s.exec(""),a=f[p],j=[],i=0,k=e;while(g=s.exec(a)){n=s.lastIndex=g.index+g[0].length;if(n>i){m=a.slice(i,g.index),i=n,l=[c],B.test(m)&&(k&&(l=k),k=e);if(h=H.test(m))m=m.slice(0,-5).replace(B,"$&*");g.length>1&&g[0].replace(t,u),k=be(m,g[1],g[2],l,k,h)}}k?(j=j.concat(k),(m=a.slice(i))&&m!==")"?B.test(m)?bd(m,j,d,e):Z(m,c,d,e?e.concat(k):k):o.apply(d,j)):Z(a,c,d,e)}return q===1?d:Z.uniqueSort(d)}function bg(a,b,c){var d,e,f,g=[],i=0,j=D.exec(a),k=!j.pop()&&!j.pop(),l=k&&a.match(C)||[""],m=$.preFilter,n=$.filter,o=!c&&b!==h;for(;(e=l[i])!=null&&k;i++){g.push(d=[]),o&&(e=" "+e);while(e){k=!1;if(j=B.exec(e))e=e.slice(j[0].length),k=d.push({part:j.pop().replace(A," "),captures:j});for(f in n)(j=L[f].exec(e))&&(!m[f]||(j=m[f](j,b,c)))&&(e=e.slice(j.shift().length),k=d.push({part:f,captures:j}));if(!k)break}}return k||Z.error(a),g}function bh(a,b,e){var f=b.dir,g=m++;return a||(a=function(a){return a===e}),b.first?function(b,c){while(b=b[f])if(b.nodeType===1)return a(b,c)&&b}:function(b,e){var h,i=g+"."+d,j=i+"."+c;while(b=b[f])if(b.nodeType===1){if((h=b[q])===j)return b.sizset;if(typeof h=="string"&&h.indexOf(i)===0){if(b.sizset)return b}else{b[q]=j;if(a(b,e))return b.sizset=!0,b;b.sizset=!1}}}}function bi(a,b){return a?function(c,d){var e=b(c,d);return e&&a(e===!0?c:e,d)}:b}function bj(a,b,c){var d,e,f=0;for(;d=a[f];f++)$.relative[d.part]?e=bh(e,$.relative[d.part],b):(d.captures.push(b,c),e=bi(e,$.filter[d.part].apply(null,d.captures)));return e}function bk(a){return function(b,c){var d,e=0;for(;d=a[e];e++)if(d(b,c))return!0;return!1}}var c,d,e,f,g,h=a.document,i=h.documentElement,j="undefined",k=!1,l=!0,m=0,n=[].slice,o=[].push,q=("sizcache"+Math.random()).replace(".",""),r="[\\x20\\t\\r\\n\\f]",s="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",t=s.replace("w","w#"),u="([*^$|!~]?=)",v="\\["+r+"*("+s+")"+r+"*(?:"+u+r+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+t+")|)|)"+r+"*\\]",w=":("+s+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|((?:[^,]|\\\\,|(?:,(?=[^\\[]*\\]))|(?:,(?=[^\\(]*\\))))*))\\)|)",x=":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)",y=r+"*([\\x20\\t\\r\\n\\f>+~])"+r+"*",z="(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|"+v+"|"+w.replace(2,7)+"|[^\\\\(),])+",A=new RegExp("^"+r+"+|((?:^|[^\\\\])(?:\\\\.)*)"+r+"+$","g"),B=new RegExp("^"+y),C=new RegExp(z+"?(?="+r+"*,|$)","g"),D=new RegExp("^(?:(?!,)(?:(?:^|,)"+r+"*"+z+")*?|"+r+"*(.*?))(\\)|$)"),E=new RegExp(z.slice(19,-6)+"\\x20\\t\\r\\n\\f>+~])+|"+y,"g"),F=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,G=/[\x20\t\r\n\f]*[+~]/,H=/:not\($/,I=/h\d/i,J=/input|select|textarea|button/i,K=/\\(?!\\)/g,L={ID:new RegExp("^#("+s+")"),CLASS:new RegExp("^\\.("+s+")"),NAME:new RegExp("^\\[name=['\"]?("+s+")['\"]?\\]"),TAG:new RegExp("^("+s.replace("[-","[-\\*")+")"),ATTR:new RegExp("^"+v),PSEUDO:new RegExp("^"+w),CHILD:new RegExp("^:(only|nth|last|first)-child(?:\\("+r+"*(even|odd|(([+-]|)(\\d*)n|)"+r+"*(?:([+-]|)"+r+"*(\\d+)|))"+r+"*\\)|)","i"),POS:new RegExp(x,"ig"),needsContext:new RegExp("^"+r+"*[>+~]|"+x,"i")},M={},N=[],O={},P=[],Q=function(a){return a.sizzleFilter=!0,a},R=function(a){return function(b){return b.nodeName.toLowerCase()==="input"&&b.type===a}},S=function(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}},T=function(a){var b=!1,c=h.createElement("div");try{b=a(c)}catch(d){}return c=null,b},U=T(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),V=T(function(a){a.id=q+0,a.innerHTML="<a name='"+q+"'></a><div name='"+q+"'></div>",i.insertBefore(a,i.firstChild);var b=h.getElementsByName&&h.getElementsByName(q).length===2+h.getElementsByName(q+0).length;return g=!h.getElementById(q),i.removeChild(a),b}),W=T(function(a){return a.appendChild(h.createComment("")),a.getElementsByTagName("*").length===0}),X=T(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==j&&a.firstChild.getAttribute("href")==="#"}),Y=T(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||a.getElementsByClassName("e").length===0?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length!==1)}),Z=function(a,b,c,d){c=c||[],b=b||h;var e,f,g,i,j=b.nodeType;if(j!==1&&j!==9)return[];if(!a||typeof a!="string")return c;g=ba(b);if(!g&&!d)if(e=F.exec(a))if(i=e[1]){if(j===9){f=b.getElementById(i);if(!f||!f.parentNode)return c;if(f.id===i)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(i))&&bb(b,f)&&f.id===i)return c.push(f),c}else{if(e[2])return o.apply(c,n.call(b.getElementsByTagName(a),0)),c;if((i=e[3])&&Y&&b.getElementsByClassName)return o.apply(c,n.call(b.getElementsByClassName(i),0)),c}return bm(a,b,c,d,g)},$=Z.selectors={cacheLength:50,match:L,order:["ID","TAG"],attrHandle:{},createPseudo:Q,find:{ID:g?function(a,b,c){if(typeof b.getElementById!==j&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==j&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==j&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:W?function(a,b){if(typeof b.getElementsByTagName!==j)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(K,""),a[3]=(a[4]||a[5]||"").replace(K,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||Z.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&Z.error(a[0]),a},PSEUDO:function(a){var b,c=a[4];return L.CHILD.test(a[0])?null:(c&&(b=D.exec(c))&&b.pop()&&(a[0]=a[0].slice(0,b[0].length-c.length-1),c=b[0].slice(0,-1)),a.splice(2,3,c||a[3]),a)}},filter:{ID:g?function(a){return a=a.replace(K,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(K,""),function(b){var c=typeof b.getAttributeNode!==j&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(K,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=M[a];return b||(b=M[a]=new RegExp("(^|"+r+")"+a+"("+r+"|$)"),N.push(a),N.length>$.cacheLength&&delete M[N.shift()]),function(a){return b.test(a.className||typeof a.getAttribute!==j&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return b?function(d){var e=Z.attr(d,a),f=e+"";if(e==null)return b==="!=";switch(b){case"=":return f===c;case"!=":return f!==c;case"^=":return c&&f.indexOf(c)===0;case"*=":return c&&f.indexOf(c)>-1;case"$=":return c&&f.substr(f.length-c.length)===c;case"~=":return(" "+f+" ").indexOf(c)>-1;case"|=":return f===c||f.substr(0,c.length+1)===c+"-"}}:function(b){return Z.attr(b,a)!=null}},CHILD:function(a,b,c,d){if(a==="nth"){var e=m++;return function(a){var b,f,g=0,h=a;if(c===1&&d===0)return!0;b=a.parentNode;if(b&&(b[q]!==e||!a.sizset)){for(h=b.firstChild;h;h=h.nextSibling)if(h.nodeType===1){h.sizset=++g;if(h===a)break}b[q]=e}return f=a.sizset-d,c===0?f===0:f%c===0&&f/c>=0}}return function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b,c,d){var e=$.pseudos[a]||$.pseudos[a.toLowerCase()];return e||Z.error("unsupported pseudo: "+a),e.sizzleFilter?e(b,c,d):e}},pseudos:{not:Q(function(a,b,c){var d=bl(a.replace(A,"$1"),b,c);return function(a){return!d(a)}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!$.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},contains:Q(function(a){return function(b){return(b.textContent||b.innerText||bc(b)).indexOf(a)>-1}}),has:Q(function(a){return function(b){return Z(a,b).length>0}}),header:function(a){return I.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:R("radio"),checkbox:R("checkbox"),file:R("file"),password:R("password"),image:R("image"),submit:S("submit"),reset:S("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return J.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b,c){return c?a.slice(1):[a[0]]},last:function(a,b,c){var d=a.pop();return c?a:[d]},even:function(a,b,c){var d=[],e=c?1:0,f=a.length;for(;e<f;e=e+2)d.push(a[e]);return d},odd:function(a,b,c){var d=[],e=c?0:1,f=a.length;for(;e<f;e=e+2)d.push(a[e]);return d},lt:function(a,b,c){return c?a.slice(+b):a.slice(0,+b)},gt:function(a,b,c){return c?a.slice(0,+b+1):a.slice(+b+1)},eq:function(a,b,c){var d=a.splice(+b,1);return c?a:d}}};$.setFilters.nth=$.setFilters.eq,$.filters=$.pseudos,X||($.attrHandle={href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}}),V&&($.order.push("NAME"),$.find.NAME=function(a,b){if(typeof b.getElementsByName!==j)return b.getElementsByName(a)}),Y&&($.order.splice(1,0,"CLASS"),$.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!==j&&!c)return b.getElementsByClassName(a)});try{n.call(i.childNodes,0)[0].nodeType}catch(_){n=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}var ba=Z.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},bb=Z.contains=i.compareDocumentPosition?function(a,b){return!!(a.compareDocumentPosition(b)&16)}:i.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc=Z.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=bc(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=bc(b);return c};Z.attr=function(a,b){var c,d=ba(a);return d||(b=b.toLowerCase()),$.attrHandle[b]?$.attrHandle[b](a):U||d?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},Z.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},[0,0].sort(function(){return l=0}),i.compareDocumentPosition?e=function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:(e=function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],g=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i)return f(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)g.unshift(j),j=j.parentNode;c=e.length,d=g.length;for(var l=0;l<c&&l<d;l++)if(e[l]!==g[l])return f(e[l],g[l]);return l===c?f(a,g[l],-1):f(e[l],b,1)},f=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),Z.uniqueSort=function(a){var b,c=1;if(e){k=l,a.sort(e);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1)}return a};var bl=Z.compile=function(a,b,c){var d,e,f,g=O[a];if(g&&g.context===b)return g;e=bg(a,b,c);for(f=0;d=e[f];f++)e[f]=bj(d,b,c);return g=O[a]=bk(e),g.context=b,g.runs=g.dirruns=0,P.push(a),P.length>$.cacheLength&&delete O[P.shift()],g};Z.matches=function(a,b){return Z(a,null,null,b)},Z.matchesSelector=function(a,b){return Z(b,null,null,[a]).length>0};var bm=function(a,b,e,f,g){a=a.replace(A,"$1");var h,i,j,k,l,m,p,q,r,s=a.match(C),t=a.match(E),u=b.nodeType;if(L.POS.test(a))return bf(a,b,e,f,s);if(f)h=n.call(f,0);else if(s&&s.length===1){if(t.length>1&&u===9&&!g&&(s=L.ID.exec(t[0]))){b=$.find.ID(s[1],b,g)[0];if(!b)return e;a=a.slice(t.shift().length)}q=(s=G.exec(t[0]))&&!s.index&&b.parentNode||b,r=t.pop(),m=r.split(":not")[0];for(j=0,k=$.order.length;j<k;j++){p=$.order[j];if(s=L[p].exec(m)){h=$.find[p]((s[1]||"").replace(K,""),q,g);if(h==null)continue;m===r&&(a=a.slice(0,a.length-r.length)+m.replace(L[p],""),a||o.apply(e,n.call(h,0)));break}}}if(a){i=bl(a,b,g),d=i.dirruns++,h==null&&(h=$.find.TAG("*",G.test(a)&&b.parentNode||b));for(j=0;l=h[j];j++)c=i.runs++,i(l,b)&&e.push(l)}return e};h.querySelectorAll&&function(){var a,b=bm,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[],f=[":active"],g=i.matchesSelector||i.mozMatchesSelector||i.webkitMatchesSelector||i.oMatchesSelector||i.msMatchesSelector;T(function(a){a.innerHTML="<select><option selected></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+r+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),T(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+r+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=e.length&&new RegExp(e.join("|")),bm=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a)))if(d.nodeType===9)try{return o.apply(f,n.call(d.querySelectorAll(a),0)),f}catch(i){}else if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){var j=d.getAttribute("id"),k=j||q,l=G.test(a)&&d.parentNode||d;j?k=k.replace(c,"\\$&"):d.setAttribute("id",k);try{return o.apply(f,n.call(l.querySelectorAll(a.replace(C,"[id='"+k+"'] $&")),0)),f}catch(i){}finally{j||d.removeAttribute("id")}}return b(a,d,f,g,h)},g&&(T(function(b){a=g.call(b,"div");try{g.call(b,"[test!='']:sizzle"),f.push($.match.PSEUDO)}catch(c){}}),f=new RegExp(f.join("|")),Z.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!ba(b)&&!f.test(c)&&(!e||!e.test(c)))try{var h=g.call(b,c);if(h||a||b.document&&b.document.nodeType!==11)return h}catch(i){}return Z(c,null,null,[b]).length>0})}(),Z.attr=p.attr,p.find=Z,p.expr=Z.selectors,p.expr[":"]=p.expr.pseudos,p.unique=Z.uniqueSort,p.text=Z.getText,p.isXMLDoc=Z.isXML,p.contains=Z.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=(c[0]||c).ownerDocument||c[0]||c,typeof c.createDocumentFragment=="undefined"&&(c=e),a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=0,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(g=b===e&&bA;(h=a[s])!=null;s++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{g=g||bk(b),l=l||g.appendChild(b.createElement("div")),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(f=n.length-1;f>=0;--f)p.nodeName(n[f],"tbody")&&!n[f].childNodes.length&&n[f].parentNode.removeChild(n[f])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l=g.lastChild}h.nodeType?t.push(h):t=p.merge(t,h)}l&&(g.removeChild(l),h=l=g=null);if(!p.support.appendChecked)for(s=0;(h=t[s])!=null;s++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(s=0;(h=t[s])!=null;s++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[s+1,0].concat(r)),s+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^margin/,bO=new RegExp("^("+q+")(.*)$","i"),bP=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bQ=new RegExp("^([-+])=("+q+")","i"),bR={},bS={position:"absolute",visibility:"hidden",display:"block"},bT={letterSpacing:0,fontWeight:400,lineHeight:1},bU=["Top","Right","Bottom","Left"],bV=["Webkit","O","Moz","ms"],bW=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return bZ(this,!0)},hide:function(){return bZ(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bW.apply(this,arguments):this.each(function(){(c?a:bY(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bX(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bQ.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bX(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bT&&(f=bT[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(a,b){var c,d,e,f,g=getComputedStyle(a,null),h=a.style;return g&&(c=g[b],c===""&&!p.contains(a.ownerDocument.documentElement,a)&&(c=p.style(a,b)),bP.test(c)&&bN.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=c,c=g.width,h.width=d,h.minWidth=e,h.maxWidth=f)),c}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bP.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0||bH(a,"display")!=="none"?ca(a,b,d):p.swap(a,bS,function(){return ca(a,b,d)})},set:function(a,c,d){return b$(a,c,d?b_(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bP.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bU[d]+b]=e[d]||e[d-2]||e[0];return f}},bN.test(a)||(p.cssHooks[a+b].set=b$)});var cc=/%20/g,cd=/\[\]$/,ce=/\r?\n/g,cf=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,cg=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||cg.test(this.nodeName)||cf.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(ce,"\r\n")}}):{name:b.name,value:c.replace(ce,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ch(d,a[d],c,f);return e.join("&").replace(cc,"+")};var ci,cj,ck=/#.*$/,cl=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cm=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,cn=/^(?:GET|HEAD)$/,co=/^\/\//,cp=/\?/,cq=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cr=/([?&])_=[^&]*/,cs=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,ct=p.fn.load,cu={},cv={},cw=["*/"]+["*"];try{ci=f.href}catch(cx){ci=e.createElement("a"),ci.href="",ci=ci.href}cj=cs.exec(ci.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&ct)return ct.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cq,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cA(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cA(a,b),a},ajaxSettings:{url:ci,isLocal:cm.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cw},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cy(cu),ajaxTransport:cy(cv),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cB(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cC(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=""+(c||y),k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cl.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(ck,"").replace(co,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=cs.exec(l.url.toLowerCase()),l.crossDomain=!(!i||i[1]==cj[1]&&i[2]==cj[2]&&(i[3]||(i[1]==="http:"?80:443))==(cj[3]||(cj[1]==="http:"?80:443)))),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cz(cu,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!cn.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cp.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cr,"$1_="+z);l.url=A+(A===l.url?(cp.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cw+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cz(cv,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cD=[],cE=/\?/,cF=/(=)\?(?=&|$)|\?\?/,cG=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cD.pop()||p.expando+"_"+cG++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cF.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cF.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cF,"$1"+f):m?c.data=i.replace(cF,"$1"+f):k&&(c.url+=(cE.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cD.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cH,cI=a.ActiveXObject?function(){for(var a in cH)cH[a](0,1)}:!1,cJ=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cK()||cL()}:cK,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cI&&delete cH[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cJ,cI&&(cH||(cH={},p(a).unload(cI)),cH[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cM,cN,cO=/^(?:toggle|show|hide)$/,cP=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cQ=/queueHooks$/,cR=[cX],cS={"*":[function(a,b){var c,d,e,f=this.createTween(a,b),g=cP.exec(b),h=f.cur(),i=+h||0,j=1;if(g){c=+g[2],d=g[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&i){i=p.css(f.elem,a,!0)||c||1;do e=j=j||".5",i=i/j,p.style(f.elem,a,i+d),j=f.cur()/h;while(j!==1&&j!==e)}f.unit=d,f.start=i,f.end=g[1]?i+(g[1]+1)*c:c}return f}]};p.Animation=p.extend(cV,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cS[c]=cS[c]||[],cS[c].unshift(b)},prefilter:function(a,b){b?cR.unshift(a):cR.push(a)}}),p.Tween=cY,cY.prototype={constructor:cY,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cY.propHooks[this.prop];return a&&a.get?a.get(this):cY.propHooks._default.get(this)},run:function(a){var b,c=cY.propHooks[this.prop];return this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration),this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cY.propHooks._default.set(this),this}},cY.prototype.init.prototype=cY.prototype,cY.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cY.propHooks.scrollTop=cY.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(cZ(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bY).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cV(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cQ.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:cZ("show"),slideUp:cZ("hide"),slideToggle:cZ("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cY.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cN&&(cN=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cN),cN=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c$=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j,k,l,m=this[0],n=m&&m.ownerDocument;if(!n)return;return(e=n.body)===m?p.offset.bodyOffset(m):(d=n.documentElement,p.contains(d,m)?(c=m.getBoundingClientRect(),f=c_(n),g=d.clientTop||e.clientTop||0,h=d.clientLeft||e.clientLeft||0,i=f.pageYOffset||d.scrollTop,j=f.pageXOffset||d.scrollLeft,k=c.top+i-g,l=c.left+j-h,{top:k,left:l}):{top:0,left:0})},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c$.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c$.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=c_(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);
/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;return!b.href||!g||f.nodeName.toLowerCase()!=="map"?!1:(h=a("img[usemap=#"+g+"]")[0],!!h&&d(h))}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}a.ui=a.ui||{};if(a.ui.version)return;a.extend(a.ui,{version:"1.8.23",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;return a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0),/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(c,d){function h(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)}),c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){return c===b?g["inner"+d].call(this):this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){return typeof b!="number"?g["outer"+d].call(this,b):this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));c.offsetHeight,a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.curCSS||(a.curCSS=a.css),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!d||!a.element[0].parentNode)return;for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;return b[d]>0?!0:(b[d]=1,e=b[d]>0,b[d]=0,e)},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}})})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.widget.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)try{a(e).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){return c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}}),d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e=="string",g=Array.prototype.slice.call(arguments,1),h=this;return e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e,f&&e.charAt(0)==="_"?h:(f?this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,g):d;if(f!==d&&f!==b)return h=f,!1}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))}),h)}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c=="string"){if(d===b)return this.options[c];e={},e[c]=d}return this._setOptions(e),this},_setOptions:function(b){var c=this;return a.each(b,function(a,b){c._setOption(a,b)}),this},_setOption:function(a,b){return this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.mouse.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c=!1;a(document).mouseup(function(a){c=!1}),a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent"))return a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(b){if(c)return;this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var d=this,e=b.which==1,f=typeof this.options.cancel=="string"&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:!1;if(!e||f||!this._mouseCapture(b))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=this._mouseStart(b)!==!1;if(!this._mouseStarted)return b.preventDefault(),!0}return!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),c=!0,!0},_mouseMove:function(b){return!a.browser.msie||document.documentMode>=9||!!b.button?this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted):this._mouseUp(b)},_mouseUp:function(b){return a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target==this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b)),!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(a){return this.mouseDelayMet},_mouseStart:function(a){},_mouseDrag:function(a){},_mouseStop:function(a){},_mouseCapture:function(a){return!0}})})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.position.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.ui=a.ui||{};var c=/left|center|right/,d=/top|center|bottom/,e="center",f={},g=a.fn.position,h=a.fn.offset;a.fn.position=function(b){if(!b||!b.of)return g.apply(this,arguments);b=a.extend({},b);var h=a(b.of),i=h[0],j=(b.collision||"flip").split(" "),k=b.offset?b.offset.split(" "):[0,0],l,m,n;return i.nodeType===9?(l=h.width(),m=h.height(),n={top:0,left:0}):i.setTimeout?(l=h.width(),m=h.height(),n={top:h.scrollTop(),left:h.scrollLeft()}):i.preventDefault?(b.at="left top",l=m=0,n={top:b.of.pageY,left:b.of.pageX}):(l=h.outerWidth(),m=h.outerHeight(),n=h.offset()),a.each(["my","at"],function(){var a=(b[this]||"").split(" ");a.length===1&&(a=c.test(a[0])?a.concat([e]):d.test(a[0])?[e].concat(a):[e,e]),a[0]=c.test(a[0])?a[0]:e,a[1]=d.test(a[1])?a[1]:e,b[this]=a}),j.length===1&&(j[1]=j[0]),k[0]=parseInt(k[0],10)||0,k.length===1&&(k[1]=k[0]),k[1]=parseInt(k[1],10)||0,b.at[0]==="right"?n.left+=l:b.at[0]===e&&(n.left+=l/2),b.at[1]==="bottom"?n.top+=m:b.at[1]===e&&(n.top+=m/2),n.left+=k[0],n.top+=k[1],this.each(function(){var c=a(this),d=c.outerWidth(),g=c.outerHeight(),h=parseInt(a.curCSS(this,"marginLeft",!0))||0,i=parseInt(a.curCSS(this,"marginTop",!0))||0,o=d+h+(parseInt(a.curCSS(this,"marginRight",!0))||0),p=g+i+(parseInt(a.curCSS(this,"marginBottom",!0))||0),q=a.extend({},n),r;b.my[0]==="right"?q.left-=d:b.my[0]===e&&(q.left-=d/2),b.my[1]==="bottom"?q.top-=g:b.my[1]===e&&(q.top-=g/2),f.fractions||(q.left=Math.round(q.left),q.top=Math.round(q.top)),r={left:q.left-h,top:q.top-i},a.each(["left","top"],function(c,e){a.ui.position[j[c]]&&a.ui.position[j[c]][e](q,{targetWidth:l,targetHeight:m,elemWidth:d,elemHeight:g,collisionPosition:r,collisionWidth:o,collisionHeight:p,offset:k,my:b.my,at:b.at})}),a.fn.bgiframe&&c.bgiframe(),c.offset(a.extend(q,{using:b.using}))})},a.ui.position={fit:{left:function(b,c){var d=a(window),e=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft();b.left=e>0?b.left-e:Math.max(b.left-c.collisionPosition.left,b.left)},top:function(b,c){var d=a(window),e=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop();b.top=e>0?b.top-e:Math.max(b.top-c.collisionPosition.top,b.top)}},flip:{left:function(b,c){if(c.at[0]===e)return;var d=a(window),f=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft(),g=c.my[0]==="left"?-c.elemWidth:c.my[0]==="right"?c.elemWidth:0,h=c.at[0]==="left"?c.targetWidth:-c.targetWidth,i=-2*c.offset[0];b.left+=c.collisionPosition.left<0?g+h+i:f>0?g+h+i:0},top:function(b,c){if(c.at[1]===e)return;var d=a(window),f=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop(),g=c.my[1]==="top"?-c.elemHeight:c.my[1]==="bottom"?c.elemHeight:0,h=c.at[1]==="top"?c.targetHeight:-c.targetHeight,i=-2*c.offset[1];b.top+=c.collisionPosition.top<0?g+h+i:f>0?g+h+i:0}}},a.offset.setOffset||(a.offset.setOffset=function(b,c){/static/.test(a.curCSS(b,"position"))&&(b.style.position="relative");var d=a(b),e=d.offset(),f=parseInt(a.curCSS(b,"top",!0),10)||0,g=parseInt(a.curCSS(b,"left",!0),10)||0,h={top:c.top-e.top+f,left:c.left-e.left+g};"using"in c?c.using.call(b,h):d.css(h)},a.fn.offset=function(b){var c=this[0];return!c||!c.ownerDocument?null:b?a.isFunction(b)?this.each(function(c){a(this).offset(b.call(this,c,a(this).offset()))}):this.each(function(){a.offset.setOffset(this,b)}):h.call(this)}),a.curCSS||(a.curCSS=a.css),function(){var b=document.getElementsByTagName("body")[0],c=document.createElement("div"),d,e,g,h,i;d=document.createElement(b?"div":"body"),g={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},b&&a.extend(g,{position:"absolute",left:"-1000px",top:"-1000px"});for(var j in g)d.style[j]=g[j];d.appendChild(c),e=b||document.documentElement,e.insertBefore(d,e.firstChild),c.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;",h=a(c).offset(function(a,b){return b}).offset(),d.innerHTML="",e.removeChild(d),i=h.top+h.left+(b?2e3:0),f.fractions=i>21&&i<22}()})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.draggable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},destroy:function(){if(!this.element.data("draggable"))return;return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy(),this},_mouseCapture:function(b){var c=this.options;return this.helper||c.disabled||a(b.target).is(".ui-resizable-handle")?!1:(this.handle=this._getHandle(b),this.handle?(c.iframeFix&&a(c.iframeFix===!0?"iframe":c.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(a(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(b){var c=this.options;return this.helper=this._createHelper(b),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),c.containment&&this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_mouseDrag:function(b,c){this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute");if(!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp({}),!1;this.position=d.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";return a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){var c=!1;a.ui.ddmanager&&!this.options.dropBehaviour&&(c=a.ui.ddmanager.drop(this,b)),this.dropped&&(c=this.dropped,this.dropped=!1);var d=this.element[0],e=!1;while(d&&(d=d.parentNode))d==document&&(e=!0);if(!e&&this.options.helper==="original")return!1;if(this.options.revert=="invalid"&&!c||this.options.revert=="valid"&&c||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,c)){var f=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){f._trigger("stop",b)!==!1&&f._clear()})}else this._trigger("stop",b)!==!1&&this._clear();return!1},_mouseUp:function(b){return this.options.iframeFix===!0&&a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(b){var c=!this.options.handle||!a(this.options.handle,this.element).length?!0:!1;return a(this.options.handle,this.element).find("*").andSelf().each(function(){this==b.target&&(c=!0)}),c},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b])):c.helper=="clone"?this.element.clone().removeAttr("id"):this.element;return d.parents("body").length||d.appendTo(c.appendTo=="parent"?this.element[0].parentNode:c.appendTo),d[0]!=this.element[0]&&!/(fixed|absolute)/.test(d.css("position"))&&d.css("position","absolute"),d},_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b=this.options;b.containment=="parent"&&(b.containment=this.helper[0].parentNode);if(b.containment=="document"||b.containment=="window")this.containment=[b.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,b.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(b.containment=="document"?0:a(window).scrollLeft())+a(b.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(b.containment=="document"?0:a(window).scrollTop())+(a(b.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(b.containment)&&b.containment.constructor!=Array){var c=a(b.containment),d=c[0];if(!d)return;var e=c.offset(),f=a(d).css("overflow")!="hidden";this.containment=[(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0),(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0),(f?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(f?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=c}else b.containment.constructor==Array&&(this.containment=b.containment)},_convertPositionTo:function(b,c){c||(c=this.position);var d=b=="absolute"?1:-1,e=this.options,f=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(b){var c=this.options,d=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(d[0].tagName),f=b.pageX,g=b.pageY;if(this.originalPosition){var h;if(this.containment){if(this.relative_container){var i=this.relative_container.offset();h=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]}else h=this.containment;b.pageX-this.offset.click.left<h[0]&&(f=h[0]+this.offset.click.left),b.pageY-this.offset.click.top<h[1]&&(g=h[1]+this.offset.click.top),b.pageX-this.offset.click.left>h[2]&&(f=h[2]+this.offset.click.left),b.pageY-this.offset.click.top>h[3]&&(g=h[3]+this.offset.click.top)}if(c.grid){var j=c.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/c.grid[1])*c.grid[1]:this.originalPageY;g=h?j-this.offset.click.top<h[1]||j-this.offset.click.top>h[3]?j-this.offset.click.top<h[1]?j+c.grid[1]:j-c.grid[1]:j:j;var k=c.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0]:this.originalPageX;f=h?k-this.offset.click.left<h[0]||k-this.offset.click.left>h[2]?k-this.offset.click.left<h[0]?k+c.grid[0]:k-c.grid[0]:k:k}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:d.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:d.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(b,c,d){return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d]),b=="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(a){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.extend(a.ui.draggable,{version:"1.8.23"}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c){var d=a(this).data("draggable"),e=d.options,f=a.extend({},c,{item:d.element});d.sortables=[],a(e.connectToSortable).each(function(){var c=a.data(this,"sortable");c&&!c.options.disabled&&(d.sortables.push({instance:c,shouldRevert:c.options.revert}),c.refreshPositions(),c._trigger("activate",b,f))})},stop:function(b,c){var d=a(this).data("draggable"),e=a.extend({},c,{item:d.element});a.each(d.sortables,function(){this.instance.isOver?(this.instance.isOver=0,d.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(b),this.instance.options.helper=this.instance.options._helper,d.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",b,e))})},drag:function(b,c){var d=a(this).data("draggable"),e=this,f=function(b){var c=this.offset.click.top,d=this.offset.click.left,e=this.positionAbs.top,f=this.positionAbs.left,g=b.height,h=b.width,i=b.top,j=b.left;return a.ui.isOver(e+c,f+d,i,j,g,h)};a.each(d.sortables,function(f){this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this.instance._intersectsWith(this.instance.containerCache)?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return c.helper[0]},b.target=this.instance.currentItem[0],this.instance._mouseCapture(b,!0),this.instance._mouseStart(b,!0,!0),this.instance.offset.click.top=d.offset.click.top,this.instance.offset.click.left=d.offset.click.left,this.instance.offset.parent.left-=d.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=d.offset.parent.top-this.instance.offset.parent.top,d._trigger("toSortable",b),d.dropped=this.instance.element,d.currentItem=d.element,this.instance.fromOutside=d),this.instance.currentItem&&this.instance._mouseDrag(b)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",b,this.instance._uiHash(this.instance)),this.instance._mouseStop(b,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),d._trigger("fromSortable",b),d.dropped=!1)})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c){var d=a("body"),e=a(this).data("draggable").options;d.css("cursor")&&(e._cursor=d.css("cursor")),d.css("cursor",e.cursor)},stop:function(b,c){var d=a(this).data("draggable").options;d._cursor&&a("body").css("cursor",d._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("opacity")&&(e._opacity=d.css("opacity")),d.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(b,c){var d=a(this).data("draggable");d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"&&(d.overflowOffset=d.scrollParent.offset())},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=!1;if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){if(!e.axis||e.axis!="x")d.overflowOffset.top+d.scrollParent[0].offsetHeight-b.pageY<e.scrollSensitivity?d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop-e.scrollSpeed);if(!e.axis||e.axis!="y")d.overflowOffset.left+d.scrollParent[0].offsetWidth-b.pageX<e.scrollSensitivity?d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft-e.scrollSpeed)}else{if(!e.axis||e.axis!="x")b.pageY-a(document).scrollTop()<e.scrollSensitivity?f=a(document).scrollTop(a(document).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<e.scrollSensitivity&&(f=a(document).scrollTop(a(document).scrollTop()+e.scrollSpeed));if(!e.axis||e.axis!="y")b.pageX-a(document).scrollLeft()<e.scrollSensitivity?f=a(document).scrollLeft(a(document).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<e.scrollSensitivity&&(f=a(document).scrollLeft(a(document).scrollLeft()+e.scrollSpeed))}f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c){var d=a(this).data("draggable"),e=d.options;d.snapElements=[],a(e.snap.constructor!=String?e.snap.items||":data(draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!=d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=e.snapTolerance,g=c.offset.left,h=g+d.helperProportions.width,i=c.offset.top,j=i+d.helperProportions.height;for(var k=d.snapElements.length-1;k>=0;k--){var l=d.snapElements[k].left,m=l+d.snapElements[k].width,n=d.snapElements[k].top,o=n+d.snapElements[k].height;if(!(l-f<g&&g<m+f&&n-f<i&&i<o+f||l-f<g&&g<m+f&&n-f<j&&j<o+f||l-f<h&&h<m+f&&n-f<i&&i<o+f||l-f<h&&h<m+f&&n-f<j&&j<o+f)){d.snapElements[k].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=!1;continue}if(e.snapMode!="inner"){var p=Math.abs(n-j)<=f,q=Math.abs(o-i)<=f,r=Math.abs(l-h)<=f,s=Math.abs(m-g)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n-d.helperProportions.height,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l-d.helperProportions.width}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m}).left-d.margins.left)}var t=p||q||r||s;if(e.snapMode!="outer"){var p=Math.abs(n-i)<=f,q=Math.abs(o-j)<=f,r=Math.abs(l-g)<=f,s=Math.abs(m-h)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o-d.helperProportions.height,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m-d.helperProportions.width}).left-d.margins.left)}!d.snapElements[k].snapping&&(p||q||r||s||t)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=p||q||r||s||t}}}),a.ui.plugin.add("draggable","stack",{start:function(b,c){var d=a(this).data("draggable").options,e=a.makeArray(a(d.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});if(!e.length)return;var f=parseInt(e[0].style.zIndex)||0;a(e).each(function(a){this.style.zIndex=f+a}),this[0].style.zIndex=f+e.length}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("zIndex")&&(e._zIndex=d.css("zIndex")),d.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("draggable").options;d._zIndex&&a(c.helper).css("zIndex",d._zIndex)}})})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.droppable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect"},_create:function(){var b=this.options,c=b.accept;this.isover=0,this.isout=1,this.accept=a.isFunction(c)?c:function(a){return a.is(c)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},a.ui.ddmanager.droppables[b.scope]=a.ui.ddmanager.droppables[b.scope]||[],a.ui.ddmanager.droppables[b.scope].push(this),b.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){var b=a.ui.ddmanager.droppables[this.options.scope];for(var c=0;c<b.length;c++)b[c]==this&&b.splice(c,1);return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"),this},_setOption:function(b,c){b=="accept"&&(this.accept=a.isFunction(c)?c:function(a){return a.is(c)}),a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),c&&this._trigger("activate",b,this.ui(c))},_deactivate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),c&&this._trigger("deactivate",b,this.ui(c))},_over:function(b){var c=a.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0])return;this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",b,this.ui(c)))},_out:function(b){var c=a.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0])return;this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",b,this.ui(c)))},_drop:function(b,c){var d=c||a.ui.ddmanager.current;if(!d||(d.currentItem||d.element)[0]==this.element[0])return!1;var e=!1;return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var b=a.data(this,"droppable");if(b.options.greedy&&!b.options.disabled&&b.options.scope==d.options.scope&&b.accept.call(b.element[0],d.currentItem||d.element)&&a.ui.intersect(d,a.extend(b,{offset:b.element.offset()}),b.options.tolerance))return e=!0,!1}),e?!1:this.accept.call(this.element[0],d.currentItem||d.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",b,this.ui(d)),this.element):!1},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}}),a.extend(a.ui.droppable,{version:"1.8.23"}),a.ui.intersect=function(b,c,d){if(!c.offset)return!1;var e=(b.positionAbs||b.position.absolute).left,f=e+b.helperProportions.width,g=(b.positionAbs||b.position.absolute).top,h=g+b.helperProportions.height,i=c.offset.left,j=i+c.proportions.width,k=c.offset.top,l=k+c.proportions.height;switch(d){case"fit":return i<=e&&f<=j&&k<=g&&h<=l;case"intersect":return i<e+b.helperProportions.width/2&&f-b.helperProportions.width/2<j&&k<g+b.helperProportions.height/2&&h-b.helperProportions.height/2<l;case"pointer":var m=(b.positionAbs||b.position.absolute).left+(b.clickOffset||b.offset.click).left,n=(b.positionAbs||b.position.absolute).top+(b.clickOffset||b.offset.click).top,o=a.ui.isOver(n,m,k,i,c.proportions.height,c.proportions.width);return o;case"touch":return(g>=k&&g<=l||h>=k&&h<=l||g<k&&h>l)&&(e>=i&&e<=j||f>=i&&f<=j||e<i&&f>j);default:return!1}},a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(b,c){var d=a.ui.ddmanager.droppables[b.options.scope]||[],e=c?c.type:null,f=(b.currentItem||b.element).find(":data(droppable)").andSelf();g:for(var h=0;h<d.length;h++){if(d[h].options.disabled||b&&!d[h].accept.call(d[h].element[0],b.currentItem||b.element))continue;for(var i=0;i<f.length;i++)if(f[i]==d[h].element[0]){d[h].proportions.height=0;continue g}d[h].visible=d[h].element.css("display")!="none";if(!d[h].visible)continue;e=="mousedown"&&d[h]._activate.call(d[h],c),d[h].offset=d[h].element.offset(),d[h].proportions={width:d[h].element[0].offsetWidth,height:d[h].element[0].offsetHeight}}},drop:function(b,c){var d=!1;return a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(!this.options)return;!this.options.disabled&&this.visible&&a.ui.intersect(b,this,this.options.tolerance)&&(d=this._drop.call(this,c)||d),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],b.currentItem||b.element)&&(this.isout=1,this.isover=0,this._deactivate.call(this,c))}),d},dragStart:function(b,c){b.element.parents(":not(body,html)").bind("scroll.droppable",function(){b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)})},drag:function(b,c){b.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(b,c),a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible)return;var d=a.ui.intersect(b,this,this.options.tolerance),e=!d&&this.isover==1?"isout":d&&this.isover==0?"isover":null;if(!e)return;var f;if(this.options.greedy){var g=this.element.parents(":data(droppable):eq(0)");g.length&&(f=a.data(g[0],"droppable"),f.greedyChild=e=="isover"?1:0)}f&&e=="isover"&&(f.isover=0,f.isout=1,f._out.call(f,c)),this[e]=1,this[e=="isout"?"isover":"isout"]=0,this[e=="isover"?"_over":"_out"].call(this,c),f&&e=="isout"&&(f.isout=0,f.isover=1,f._over.call(f,c))})},dragStop:function(b,c){b.element.parents(":not(body,html)").unbind("scroll.droppable"),b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)}}})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.resizable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.resizable",a.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1e3},_create:function(){var b=this,c=this.options;this.element.addClass("ui-resizable"),a.extend(this,{_aspectRatio:!!c.aspectRatio,aspectRatio:c.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:c.helper||c.ghost||c.animate?c.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(a('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("resizable",this.element.data("resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=c.handles||(a(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se");if(this.handles.constructor==String){this.handles=="all"&&(this.handles="n,e,s,w,se,sw,ne,nw");var d=this.handles.split(",");this.handles={};for(var e=0;e<d.length;e++){var f=a.trim(d[e]),g="ui-resizable-"+f,h=a('<div class="ui-resizable-handle '+g+'"></div>');h.css({zIndex:c.zIndex}),"se"==f&&h.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[f]=".ui-resizable-"+f,this.element.append(h)}}this._renderAxis=function(b){b=b||this.element;for(var c in this.handles){this.handles[c].constructor==String&&(this.handles[c]=a(this.handles[c],this.element).show());if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var d=a(this.handles[c],this.element),e=0;e=/sw|ne|nw|se|n|s/.test(c)?d.outerHeight():d.outerWidth();var f=["padding",/ne|nw|n/.test(c)?"Top":/se|sw|s/.test(c)?"Bottom":/^e$/.test(c)?"Right":"Left"].join("");b.css(f,e),this._proportionallyResize()}if(!a(this.handles[c]).length)continue}},this._renderAxis(this.element),this._handles=a(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){if(!b.resizing){if(this.className)var a=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);b.axis=a&&a[1]?a[1]:"se"}}),c.autoHide&&(this._handles.hide(),a(this.element).addClass("ui-resizable-autohide").hover(function(){if(c.disabled)return;a(this).removeClass("ui-resizable-autohide"),b._handles.show()},function(){if(c.disabled)return;b.resizing||(a(this).addClass("ui-resizable-autohide"),b._handles.hide())})),this._mouseInit()},destroy:function(){this._mouseDestroy();var b=function(b){a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){b(this.element);var c=this.element;c.after(this.originalElement.css({position:c.css("position"),width:c.outerWidth(),height:c.outerHeight(),top:c.css("top"),left:c.css("left")})).remove()}return this.originalElement.css("resize",this.originalResizeStyle),b(this.originalElement),this},_mouseCapture:function(b){var c=!1;for(var d in this.handles)a(this.handles[d])[0]==b.target&&(c=!0);return!this.options.disabled&&c},_mouseStart:function(b){var d=this.options,e=this.element.position(),f=this.element;this.resizing=!0,this.documentScroll={top:a(document).scrollTop(),left:a(document).scrollLeft()},(f.is(".ui-draggable")||/absolute/.test(f.css("position")))&&f.css({position:"absolute",top:e.top,left:e.left}),this._renderProxy();var g=c(this.helper.css("left")),h=c(this.helper.css("top"));d.containment&&(g+=a(d.containment).scrollLeft()||0,h+=a(d.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:g,top:h},this.size=this._helper?{width:f.outerWidth(),height:f.outerHeight()}:{width:f.width(),height:f.height()},this.originalSize=this._helper?{width:f.outerWidth(),height:f.outerHeight()}:{width:f.width(),height:f.height()},this.originalPosition={left:g,top:h},this.sizeDiff={width:f.outerWidth()-f.width(),height:f.outerHeight()-f.height()},this.originalMousePosition={left:b.pageX,top:b.pageY},this.aspectRatio=typeof d.aspectRatio=="number"?d.aspectRatio:this.originalSize.width/this.originalSize.height||1;var i=a(".ui-resizable-"+this.axis).css("cursor");return a("body").css("cursor",i=="auto"?this.axis+"-resize":i),f.addClass("ui-resizable-resizing"),this._propagate("start",b),!0},_mouseDrag:function(b){var c=this.helper,d=this.options,e={},f=this,g=this.originalMousePosition,h=this.axis,i=b.pageX-g.left||0,j=b.pageY-g.top||0,k=this._change[h];if(!k)return!1;var l=k.apply(this,[b,i,j]),m=a.browser.msie&&a.browser.version<7,n=this.sizeDiff;this._updateVirtualBoundaries(b.shiftKey);if(this._aspectRatio||b.shiftKey)l=this._updateRatio(l,b);return l=this._respectSize(l,b),this._propagate("resize",b),c.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"}),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),this._updateCache(l),this._trigger("resize",b,this.ui()),!1},_mouseStop:function(b){this.resizing=!1;var c=this.options,d=this;if(this._helper){var e=this._proportionallyResizeElements,f=e.length&&/textarea/i.test(e[0].nodeName),g=f&&a.ui.hasScroll(e[0],"left")?0:d.sizeDiff.height,h=f?0:d.sizeDiff.width,i={width:d.helper.width()-h,height:d.helper.height()-g},j=parseInt(d.element.css("left"),10)+(d.position.left-d.originalPosition.left)||null,k=parseInt(d.element.css("top"),10)+(d.position.top-d.originalPosition.top)||null;c.animate||this.element.css(a.extend(i,{top:k,left:j})),d.helper.height(d.size.height),d.helper.width(d.size.width),this._helper&&!c.animate&&this._proportionallyResize()}return a("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",b),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(a){var b=this.options,c,e,f,g,h;h={minWidth:d(b.minWidth)?b.minWidth:0,maxWidth:d(b.maxWidth)?b.maxWidth:Infinity,minHeight:d(b.minHeight)?b.minHeight:0,maxHeight:d(b.maxHeight)?b.maxHeight:Infinity};if(this._aspectRatio||a)c=h.minHeight*this.aspectRatio,f=h.minWidth/this.aspectRatio,e=h.maxHeight*this.aspectRatio,g=h.maxWidth/this.aspectRatio,c>h.minWidth&&(h.minWidth=c),f>h.minHeight&&(h.minHeight=f),e<h.maxWidth&&(h.maxWidth=e),g<h.maxHeight&&(h.maxHeight=g);this._vBoundaries=h},_updateCache:function(a){var b=this.options;this.offset=this.helper.offset(),d(a.left)&&(this.position.left=a.left),d(a.top)&&(this.position.top=a.top),d(a.height)&&(this.size.height=a.height),d(a.width)&&(this.size.width=a.width)},_updateRatio:function(a,b){var c=this.options,e=this.position,f=this.size,g=this.axis;return d(a.height)?a.width=a.height*this.aspectRatio:d(a.width)&&(a.height=a.width/this.aspectRatio),g=="sw"&&(a.left=e.left+(f.width-a.width),a.top=null),g=="nw"&&(a.top=e.top+(f.height-a.height),a.left=e.left+(f.width-a.width)),a},_respectSize:function(a,b){var c=this.helper,e=this._vBoundaries,f=this._aspectRatio||b.shiftKey,g=this.axis,h=d(a.width)&&e.maxWidth&&e.maxWidth<a.width,i=d(a.height)&&e.maxHeight&&e.maxHeight<a.height,j=d(a.width)&&e.minWidth&&e.minWidth>a.width,k=d(a.height)&&e.minHeight&&e.minHeight>a.height;j&&(a.width=e.minWidth),k&&(a.height=e.minHeight),h&&(a.width=e.maxWidth),i&&(a.height=e.maxHeight);var l=this.originalPosition.left+this.originalSize.width,m=this.position.top+this.size.height,n=/sw|nw|w/.test(g),o=/nw|ne|n/.test(g);j&&n&&(a.left=l-e.minWidth),h&&n&&(a.left=l-e.maxWidth),k&&o&&(a.top=m-e.minHeight),i&&o&&(a.top=m-e.maxHeight);var p=!a.width&&!a.height;return p&&!a.left&&a.top?a.top=null:p&&!a.top&&a.left&&(a.left=null),a},_proportionallyResize:function(){var b=this.options;if(!this._proportionallyResizeElements.length)return;var c=this.helper||this.element;for(var d=0;d<this._proportionallyResizeElements.length;d++){var e=this._proportionallyResizeElements[d];if(!this.borderDif){var f=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],g=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];this.borderDif=a.map(f,function(a,b){var c=parseInt(a,10)||0,d=parseInt(g[b],10)||0;return c+d})}if(!a.browser.msie||!a(c).is(":hidden")&&!a(c).parents(":hidden").length)e.css({height:c.height()-this.borderDif[0]-this.borderDif[2]||0,width:c.width()-this.borderDif[1]-this.borderDif[3]||0});else continue}},_renderProxy:function(){var b=this.element,c=this.options;this.elementOffset=b.offset();if(this._helper){this.helper=this.helper||a('<div style="overflow:hidden;"></div>');var d=a.browser.msie&&a.browser.version<7,e=d?1:0,f=d?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+f,height:this.element.outerHeight()+f,position:"absolute",left:this.elementOffset.left-e+"px",top:this.elementOffset.top-e+"px",zIndex:++c.zIndex}),this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(a,b,c){return{width:this.originalSize.width+b}},w:function(a,b,c){var d=this.options,e=this.originalSize,f=this.originalPosition;return{left:f.left+b,width:e.width-b}},n:function(a,b,c){var d=this.options,e=this.originalSize,f=this.originalPosition;return{top:f.top+c,height:e.height-c}},s:function(a,b,c){return{height:this.originalSize.height+c}},se:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},sw:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,c,d]))},ne:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},nw:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,c,d]))}},_propagate:function(b,c){a.ui.plugin.call(this,b,[c,this.ui()]),b!="resize"&&this._trigger(b,c,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),a.extend(a.ui.resizable,{version:"1.8.23"}),a.ui.plugin.add("resizable","alsoResize",{start:function(b,c){var d=a(this).data("resizable"),e=d.options,f=function(b){a(b).each(function(){var b=a(this);b.data("resizable-alsoresize",{width:parseInt(b.width(),10),height:parseInt(b.height(),10),left:parseInt(b.css("left"),10),top:parseInt(b.css("top"),10)})})};typeof e.alsoResize=="object"&&!e.alsoResize.parentNode?e.alsoResize.length?(e.alsoResize=e.alsoResize[0],f(e.alsoResize)):a.each(e.alsoResize,function(a){f(a)}):f(e.alsoResize)},resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.originalSize,g=d.originalPosition,h={height:d.size.height-f.height||0,width:d.size.width-f.width||0,top:d.position.top-g.top||0,left:d.position.left-g.left||0},i=function(b,d){a(b).each(function(){var b=a(this),e=a(this).data("resizable-alsoresize"),f={},g=d&&d.length?d:b.parents(c.originalElement[0]).length?["width","height"]:["width","height","top","left"];a.each(g,function(a,b){var c=(e[b]||0)+(h[b]||0);c&&c>=0&&(f[b]=c||null)}),b.css(f)})};typeof e.alsoResize=="object"&&!e.alsoResize.nodeType?a.each(e.alsoResize,function(a,b){i(a,b)}):i(e.alsoResize)},stop:function(b,c){a(this).removeData("resizable-alsoresize")}}),a.ui.plugin.add("resizable","animate",{stop:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d._proportionallyResizeElements,g=f.length&&/textarea/i.test(f[0].nodeName),h=g&&a.ui.hasScroll(f[0],"left")?0:d.sizeDiff.height,i=g?0:d.sizeDiff.width,j={width:d.size.width-i,height:d.size.height-h},k=parseInt(d.element.css("left"),10)+(d.position.left-d.originalPosition.left)||null,l=parseInt(d.element.css("top"),10)+(d.position.top-d.originalPosition.top)||null;d.element.animate(a.extend(j,l&&k?{top:l,left:k}:{}),{duration:e.animateDuration,easing:e.animateEasing,step:function(){var c={width:parseInt(d.element.css("width"),10),height:parseInt(d.element.css("height"),10),top:parseInt(d.element.css("top"),10),left:parseInt(d.element.css("left"),10)};f&&f.length&&a(f[0]).css({width:c.width,height:c.height}),d._updateCache(c),d._propagate("resize",b)}})}}),a.ui.plugin.add("resizable","containment",{start:function(b,d){var e=a(this).data("resizable"),f=e.options,g=e.element,h=f.containment,i=h instanceof a?h.get(0):/parent/.test(h)?g.parent().get(0):h;if(!i)return;e.containerElement=a(i);if(/document/.test(h)||h==document)e.containerOffset={left:0,top:0},e.containerPosition={left:0,top:0},e.parentData={element:a(document),left:0,top:0,width:a(document).width(),height:a(document).height()||document.body.parentNode.scrollHeight};else{var j=a(i),k=[];a(["Top","Right","Left","Bottom"]).each(function(a,b){k[a]=c(j.css("padding"+b))}),e.containerOffset=j.offset(),e.containerPosition=j.position(),e.containerSize={height:j.innerHeight()-k[3],width:j.innerWidth()-k[1]};var l=e.containerOffset,m=e.containerSize.height,n=e.containerSize.width,o=a.ui.hasScroll(i,"left")?i.scrollWidth:n,p=a.ui.hasScroll(i)?i.scrollHeight:m;e.parentData={element:i,left:l.left,top:l.top,width:o,height:p}}},resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.containerSize,g=d.containerOffset,h=d.size,i=d.position,j=d._aspectRatio||b.shiftKey,k={top:0,left:0},l=d.containerElement;l[0]!=document&&/static/.test(l.css("position"))&&(k=g),i.left<(d._helper?g.left:0)&&(d.size.width=d.size.width+(d._helper?d.position.left-g.left:d.position.left-k.left),j&&(d.size.height=d.size.width/d.aspectRatio),d.position.left=e.helper?g.left:0),i.top<(d._helper?g.top:0)&&(d.size.height=d.size.height+(d._helper?d.position.top-g.top:d.position.top),j&&(d.size.width=d.size.height*d.aspectRatio),d.position.top=d._helper?g.top:0),d.offset.left=d.parentData.left+d.position.left,d.offset.top=d.parentData.top+d.position.top;var m=Math.abs((d._helper?d.offset.left-k.left:d.offset.left-k.left)+d.sizeDiff.width),n=Math.abs((d._helper?d.offset.top-k.top:d.offset.top-g.top)+d.sizeDiff.height),o=d.containerElement.get(0)==d.element.parent().get(0),p=/relative|absolute/.test(d.containerElement.css("position"));o&&p&&(m-=d.parentData.left),m+d.size.width>=d.parentData.width&&(d.size.width=d.parentData.width-m,j&&(d.size.height=d.size.width/d.aspectRatio)),n+d.size.height>=d.parentData.height&&(d.size.height=d.parentData.height-n,j&&(d.size.width=d.size.height*d.aspectRatio))},stop:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.position,g=d.containerOffset,h=d.containerPosition,i=d.containerElement,j=a(d.helper),k=j.offset(),l=j.outerWidth()-d.sizeDiff.width,m=j.outerHeight()-d.sizeDiff.height;d._helper&&!e.animate&&/relative/.test(i.css("position"))&&a(this).css({left:k.left-h.left-g.left,width:l,height:m}),d._helper&&!e.animate&&/static/.test(i.css("position"))&&a(this).css({left:k.left-h.left-g.left,width:l,height:m})}}),a.ui.plugin.add("resizable","ghost",{start:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.size;d.ghost=d.originalElement.clone(),d.ghost.css({opacity:.25,display:"block",position:"relative",height:f.height,width:f.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof e.ghost=="string"?e.ghost:""),d.ghost.appendTo(d.helper)},resize:function(b,c){var d=a(this).data("resizable"),e=d.options;d.ghost&&d.ghost.css({position:"relative",height:d.size.height,width:d.size.width})},stop:function(b,c){var d=a(this).data("resizable"),e=d.options;d.ghost&&d.helper&&d.helper.get(0).removeChild(d.ghost.get(0))}}),a.ui.plugin.add("resizable","grid",{resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.size,g=d.originalSize,h=d.originalPosition,i=d.axis,j=e._aspectRatio||b.shiftKey;e.grid=typeof e.grid=="number"?[e.grid,e.grid]:e.grid;var k=Math.round((f.width-g.width)/(e.grid[0]||1))*(e.grid[0]||1),l=Math.round((f.height-g.height)/(e.grid[1]||1))*(e.grid[1]||1);/^(se|s|e)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l):/^(ne)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l,d.position.top=h.top-l):/^(sw)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l,d.position.left=h.left-k):(d.size.width=g.width+k,d.size.height=g.height+l,d.position.top=h.top-l,d.position.left=h.left-k)}});var c=function(a){return parseInt(a,10)||0},d=function(a){return!isNaN(parseInt(a,10))}})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.selectable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.selectable",a.ui.mouse,{options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch"},_create:function(){var b=this;this.element.addClass("ui-selectable"),this.dragged=!1;var c;this.refresh=function(){c=a(b.options.filter,b.element[0]),c.addClass("ui-selectee"),c.each(function(){var b=a(this),c=b.offset();a.data(this,"selectable-item",{element:this,$element:b,left:c.left,top:c.top,right:c.left+b.outerWidth(),bottom:c.top+b.outerHeight(),startselected:!1,selected:b.hasClass("ui-selected"),selecting:b.hasClass("ui-selecting"),unselecting:b.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=c.addClass("ui-selectee"),this._mouseInit(),this.helper=a("<div class='ui-selectable-helper'></div>")},destroy:function(){return this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"),this._mouseDestroy(),this},_mouseStart:function(b){var c=this;this.opos=[b.pageX,b.pageY];if(this.options.disabled)return;var d=this.options;this.selectees=a(d.filter,this.element[0]),this._trigger("start",b),a(d.appendTo).append(this.helper),this.helper.css({left:b.clientX,top:b.clientY,width:0,height:0}),d.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var d=a.data(this,"selectable-item");d.startselected=!0,!b.metaKey&&!b.ctrlKey&&(d.$element.removeClass("ui-selected"),d.selected=!1,d.$element.addClass("ui-unselecting"),d.unselecting=!0,c._trigger("unselecting",b,{unselecting:d.element}))}),a(b.target).parents().andSelf().each(function(){var d=a.data(this,"selectable-item");if(d){var e=!b.metaKey&&!b.ctrlKey||!d.$element.hasClass("ui-selected");return d.$element.removeClass(e?"ui-unselecting":"ui-selected").addClass(e?"ui-selecting":"ui-unselecting"),d.unselecting=!e,d.selecting=e,d.selected=e,e?c._trigger("selecting",b,{selecting:d.element}):c._trigger("unselecting",b,{unselecting:d.element}),!1}})},_mouseDrag:function(b){var c=this;this.dragged=!0;if(this.options.disabled)return;var d=this.options,e=this.opos[0],f=this.opos[1],g=b.pageX,h=b.pageY;if(e>g){var i=g;g=e,e=i}if(f>h){var i=h;h=f,f=i}return this.helper.css({left:e,top:f,width:g-e,height:h-f}),this.selectees.each(function(){var i=a.data(this,"selectable-item");if(!i||i.element==c.element[0])return;var j=!1;d.tolerance=="touch"?j=!(i.left>g||i.right<e||i.top>h||i.bottom<f):d.tolerance=="fit"&&(j=i.left>e&&i.right<g&&i.top>f&&i.bottom<h),j?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,c._trigger("selecting",b,{selecting:i.element}))):(i.selecting&&((b.metaKey||b.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),c._trigger("unselecting",b,{unselecting:i.element}))),i.selected&&!b.metaKey&&!b.ctrlKey&&!i.startselected&&(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,c._trigger("unselecting",b,{unselecting:i.element})))}),!1},_mouseStop:function(b){var c=this;this.dragged=!1;var d=this.options;return a(".ui-unselecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-unselecting"),d.unselecting=!1,d.startselected=!1,c._trigger("unselected",b,{unselected:d.element})}),a(".ui-selecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-selecting").addClass("ui-selected"),d.selecting=!1,d.selected=!0,d.startselected=!0,c._trigger("selected",b,{selected:d.element})}),this._trigger("stop",b),this.helper.remove(),!1}}),a.extend(a.ui.selectable,{version:"1.8.23"})})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.sortable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.sortable",a.ui.mouse,{widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3},_create:function(){var a=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?a.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},destroy:function(){a.Widget.prototype.destroy.call(this),this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var b=this.items.length-1;b>=0;b--)this.items[b].item.removeData(this.widgetName+"-item");return this},_setOption:function(b,c){b==="disabled"?(this.options[b]=c,this.widget()[c?"addClass":"removeClass"]("ui-sortable-disabled")):a.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(b,c){var d=this;if(this.reverting)return!1;if(this.options.disabled||this.options.type=="static")return!1;this._refreshItems(b);var e=null,f=this,g=a(b.target).parents().each(function(){if(a.data(this,d.widgetName+"-item")==f)return e=a(this),!1});a.data(b.target,d.widgetName+"-item")==f&&(e=a(b.target));if(!e)return!1;if(this.options.handle&&!c){var h=!1;a(this.options.handle,e).find("*").andSelf().each(function(){this==b.target&&(h=!0)});if(!h)return!1}return this.currentItem=e,this._removeCurrentsFromItems(),!0},_mouseStart:function(b,c,d){var e=this.options,f=this;this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(b),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!=this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),e.containment&&this._setContainment(),e.cursor&&(a("body").css("cursor")&&(this._storedCursor=a("body").css("cursor")),a("body").css("cursor",e.cursor)),e.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",e.opacity)),e.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",e.zIndex)),this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",b,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions();if(!d)for(var g=this.containers.length-1;g>=0;g--)this.containers[g]._trigger("activate",b,f._uiHash(this));return a.ui.ddmanager&&(a.ui.ddmanager.current=this),a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(b),!0},_mouseDrag:function(b){this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs);if(this.options.scroll){var c=this.options,d=!1;this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-b.pageY<c.scrollSensitivity?this.scrollParent[0].scrollTop=d=this.scrollParent[0].scrollTop+c.scrollSpeed:b.pageY-this.overflowOffset.top<c.scrollSensitivity&&(this.scrollParent[0].scrollTop=d=this.scrollParent[0].scrollTop-c.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-b.pageX<c.scrollSensitivity?this.scrollParent[0].scrollLeft=d=this.scrollParent[0].scrollLeft+c.scrollSpeed:b.pageX-this.overflowOffset.left<c.scrollSensitivity&&(this.scrollParent[0].scrollLeft=d=this.scrollParent[0].scrollLeft-c.scrollSpeed)):(b.pageY-a(document).scrollTop()<c.scrollSensitivity?d=a(document).scrollTop(a(document).scrollTop()-c.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<c.scrollSensitivity&&(d=a(document).scrollTop(a(document).scrollTop()+c.scrollSpeed)),b.pageX-a(document).scrollLeft()<c.scrollSensitivity?d=a(document).scrollLeft(a(document).scrollLeft()-c.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<c.scrollSensitivity&&(d=a(document).scrollLeft(a(document).scrollLeft()+c.scrollSpeed))),d!==!1&&a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(var e=this.items.length-1;e>=0;e--){var f=this.items[e],g=f.item[0],h=this._intersectsWithPointer(f);if(!h)continue;if(g!=this.currentItem[0]&&this.placeholder[h==1?"next":"prev"]()[0]!=g&&!a.ui.contains(this.placeholder[0],g)&&(this.options.type=="semi-dynamic"?!a.ui.contains(this.element[0],g):!0)){this.direction=h==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(f))this._rearrange(b,f);else break;this._trigger("change",b,this._uiHash());break}}return this._contactContainers(b),a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),this._trigger("sort",b,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(b,c){if(!b)return;a.ui.ddmanager&&!this.options.dropBehaviour&&a.ui.ddmanager.drop(this,b);if(this.options.revert){var d=this,e=d.placeholder.offset();d.reverting=!0,a(this.helper).animate({left:e.left-this.offset.parent.left-d.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:e.top-this.offset.parent.top-d.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){d._clear(b)})}else this._clear(b,c);return!1},cancel:function(){var b=this;if(this.dragging){this._mouseUp({target:null}),this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var c=this.containers.length-1;c>=0;c--)this.containers[c]._trigger("deactivate",null,b._uiHash(this)),this.containers[c].containerCache.over&&(this.containers[c]._trigger("out",null,b._uiHash(this)),this.containers[c].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),a.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?a(this.domPosition.prev).after(this.currentItem):a(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},a(c).each(function(){var c=(a(b.item||this).attr(b.attribute||"id")||"").match(b.expression||/(.+)[-=_](.+)/);c&&d.push((b.key||c[1]+"[]")+"="+(b.key&&b.expression?c[1]:c[2]))}),!d.length&&b.key&&d.push(b.key+"="),d.join("&")},toArray:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},c.each(function(){d.push(a(b.item||this).attr(b.attribute||"id")||"")}),d},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,d=this.positionAbs.top,e=d+this.helperProportions.height,f=a.left,g=f+a.width,h=a.top,i=h+a.height,j=this.offset.click.top,k=this.offset.click.left,l=d+j>h&&d+j<i&&b+k>f&&b+k<g;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?l:f<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<g&&h<d+this.helperProportions.height/2&&e-this.helperProportions.height/2<i},_intersectsWithPointer:function(b){var c=this.options.axis==="x"||a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,b.top,b.height),d=this.options.axis==="y"||a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,b.left,b.width),e=c&&d,f=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();return e?this.floating?g&&g=="right"||f=="down"?2:1:f&&(f=="down"?2:1):!1},_intersectsWithSides:function(b){var c=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,b.top+b.height/2,b.height),d=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,b.left+b.width/2,b.width),e=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();return this.floating&&f?f=="right"&&d||f=="left"&&!d:e&&(e=="down"&&c||e=="up"&&!c)},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return a!=0&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return a!=0&&(a>0?"right":"left")},refresh:function(a){return this._refreshItems(a),this.refreshPositions(),this},_connectWith:function(){var a=this.options;return a.connectWith.constructor==String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(b){var c=this,d=[],e=[],f=this._connectWith();if(f&&b)for(var g=f.length-1;g>=0;g--){var h=a(f[g]);for(var i=h.length-1;i>=0;i--){var j=a.data(h[i],this.widgetName);j&&j!=this&&!j.options.disabled&&e.push([a.isFunction(j.options.items)?j.options.items.call(j.element):a(j.options.items,j.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),j])}}e.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(var g=e.length-1;g>=0;g--)e[g][0].each(function(){d.push(this)});return a(d)},_removeCurrentsFromItems:function(){var a=this.currentItem.find(":data("+this.widgetName+"-item)");for(var b=0;b<this.items.length;b++)for(var c=0;c<a.length;c++)a[c]==this.items[b].item[0]&&this.items.splice(b,1)},_refreshItems:function(b){this.items=[],this.containers=[this];var c=this.items,d=this,e=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],b,{item:this.currentItem}):a(this.options.items,this.element),this]],f=this._connectWith();if(f&&this.ready)for(var g=f.length-1;g>=0;g--){var h=a(f[g]);for(var i=h.length-1;i>=0;i--){var j=a.data(h[i],this.widgetName);j&&j!=this&&!j.options.disabled&&(e.push([a.isFunction(j.options.items)?j.options.items.call(j.element[0],b,{item:this.currentItem}):a(j.options.items,j.element),j]),this.containers.push(j))}}for(var g=e.length-1;g>=0;g--){var k=e[g][1],l=e[g][0];for(var i=0,m=l.length;i<m;i++){var n=a(l[i]);n.data(this.widgetName+"-item",k),c.push({item:n,instance:k,width:0,height:0,left:0,top:0})}}},refreshPositions:function(b){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());for(var c=this.items.length-1;c>=0;c--){var d=this.items[c];if(d.instance!=this.currentContainer&&this.currentContainer&&d.item[0]!=this.currentItem[0])continue;var e=this.options.toleranceElement?a(this.options.toleranceElement,d.item):d.item;b||(d.width=e.outerWidth(),d.height=e.outerHeight());var f=e.offset();d.left=f.left,d.top=f.top}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(var c=this.containers.length-1;c>=0;c--){var f=this.containers[c].element.offset();this.containers[c].containerCache.left=f.left,this.containers[c].containerCache.top=f.top,this.containers[c].containerCache.width=this.containers[c].element.outerWidth(),this.containers[c].containerCache.height=this.containers[c].element.outerHeight()}return this},_createPlaceholder:function(b){var c=b||this,d=c.options;if(!d.placeholder||d.placeholder.constructor==String){var e=d.placeholder;d.placeholder={element:function(){var b=a(document.createElement(c.currentItem[0].nodeName)).addClass(e||c.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];return e||(b.style.visibility="hidden"),b},update:function(a,b){if(e&&!d.forcePlaceholderSize)return;b.height()||b.height(c.currentItem.innerHeight()-parseInt(c.currentItem.css("paddingTop")||0,10)-parseInt(c.currentItem.css("paddingBottom")||0,10)),b.width()||b.width(c.currentItem.innerWidth()-parseInt(c.currentItem.css("paddingLeft")||0,10)-parseInt(c.currentItem.css("paddingRight")||0,10))}}}c.placeholder=a(d.placeholder.element.call(c.element,c.currentItem)),c.currentItem.after(c.placeholder),d.placeholder.update(c,c.placeholder)},_contactContainers:function(b){var c=null,d=null;for(var e=this.containers.length-1;e>=0;e--){if(a.ui.contains(this.currentItem[0],this.containers[e].element[0]))continue;if(this._intersectsWith(this.containers[e].containerCache)){if(c&&a.ui.contains(this.containers[e].element[0],c.element[0]))continue;c=this.containers[e],d=e}else this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",b,this._uiHash(this)),this.containers[e].containerCache.over=0)}if(!c)return;if(this.containers.length===1)this.containers[d]._trigger("over",b,this._uiHash(this)),this.containers[d].containerCache.over=1;else if(this.currentContainer!=this.containers[d]){var f=1e4,g=null,h=this.positionAbs[this.containers[d].floating?"left":"top"];for(var i=this.items.length-1;i>=0;i--){if(!a.ui.contains(this.containers[d].element[0],this.items[i].item[0]))continue;var j=this.containers[d].floating?this.items[i].item.offset().left:this.items[i].item.offset().top;Math.abs(j-h)<f&&(f=Math.abs(j-h),g=this.items[i],this.direction=j-h>0?"down":"up")}if(!g&&!this.options.dropOnEmpty)return;this.currentContainer=this.containers[d],g?this._rearrange(b,g,null,!0):this._rearrange(b,null,this.containers[d].element,!0),this._trigger("change",b,this._uiHash()),this.containers[d]._trigger("change",b,this._uiHash(this)),this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[d]._trigger("over",b,this._uiHash(this)),this.containers[d].containerCache.over=1}},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b,this.currentItem])):c.helper=="clone"?this.currentItem.clone():this.currentItem;return d.parents("body").length||a(c.appendTo!="parent"?c.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0]),d[0]==this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(d[0].style.width==""||c.forceHelperSize)&&d.width(this.currentItem.width()),(d[0].style.height==""||c.forceHelperSize)&&d.height(this.currentItem.height()),d},_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b=this.options;b.containment=="parent"&&(b.containment=this.helper[0].parentNode);if(b.containment=="document"||b.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(b.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(b.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(b.containment)){var c=a(b.containment)[0],d=a(b.containment).offset(),e=a(c).css("overflow")!="hidden";this.containment=[d.left+(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(a(c).css("borderTopWidth"),10)||0)+(parseInt(a(c).css("paddingTop"),10)||0)-this.margins.top,d.left+(e?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(e?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(b,c){c||(c=this.position);var d=b=="absolute"?1:-1,e=this.options,f=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(b){var c=this.options,d=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(d[0].tagName);this.cssPosition=="relative"&&(this.scrollParent[0]==document||this.scrollParent[0]==this.offsetParent[0])&&(this.offset.relative=this._getRelativeOffset());var f=b.pageX,g=b.pageY;if(this.originalPosition){this.containment&&(b.pageX-this.offset.click.left<this.containment[0]&&(f=this.containment[0]+this.offset.click.left),b.pageY-this.offset.click.top<this.containment[1]&&(g=this.containment[1]+this.offset.click.top),b.pageX-this.offset.click.left>this.containment[2]&&(f=this.containment[2]+this.offset.click.left),b.pageY-this.offset.click.top>this.containment[3]&&(g=this.containment[3]+this.offset.click.top));if(c.grid){var h=this.originalPageY+Math.round((g-this.originalPageY)/c.grid[1])*c.grid[1];g=this.containment?h-this.offset.click.top<this.containment[1]||h-this.offset.click.top>this.containment[3]?h-this.offset.click.top<this.containment[1]?h+c.grid[1]:h-c.grid[1]:h:h;var i=this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0];f=this.containment?i-this.offset.click.left<this.containment[0]||i-this.offset.click.left>this.containment[2]?i-this.offset.click.left<this.containment[0]?i+c.grid[0]:i-c.grid[0]:i:i}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:d.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:d.scrollLeft())}},_rearrange:function(a,b,c,d){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],this.direction=="down"?b.item[0]:b.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var e=this,f=this.counter;window.setTimeout(function(){f==e.counter&&e.refreshPositions(!d)},0)},_clear:function(b,c){this.reverting=!1;var d=[],e=this;!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var f in this._storedCSS)if(this._storedCSS[f]=="auto"||this._storedCSS[f]=="static")this._storedCSS[f]="";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!c&&d.push(function(a){this._trigger("receive",a,this._uiHash(this.fromOutside))}),(this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!c&&d.push(function(a){this._trigger("update",a,this._uiHash())});if(!a.ui.contains(this.element[0],this.currentItem[0])){c||d.push(function(a){this._trigger("remove",a,this._uiHash())});for(var f=this.containers.length-1;f>=0;f--)a.ui.contains(this.containers[f].element[0],this.currentItem[0])&&!c&&(d.push(function(a){return function(b){a._trigger("receive",b,this._uiHash(this))}}.call(this,this.containers[f])),d.push(function(a){return function(b){a._trigger("update",b,this._uiHash(this))}}.call(this,this.containers[f])))}for(var f=this.containers.length-1;f>=0;f--)c||d.push(function(a){return function(b){a._trigger("deactivate",b,this._uiHash(this))}}.call(this,this.containers[f])),this.containers[f].containerCache.over&&(d.push(function(a){return function(b){a._trigger("out",b,this._uiHash(this))}}.call(this,this.containers[f])),this.containers[f].containerCache.over=0);this._storedCursor&&a("body").css("cursor",this._storedCursor),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex),this.dragging=!1;if(this.cancelHelperRemoval){if(!c){this._trigger("beforeStop",b,this._uiHash());for(var f=0;f<d.length;f++)d[f].call(this,b);this._trigger("stop",b,this._uiHash())}return this.fromOutside=!1,!1}c||this._trigger("beforeStop",b,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!=this.currentItem[0]&&this.helper.remove(),this.helper=null;if(!c){for(var f=0;f<d.length;f++)d[f].call(this,b);this._trigger("stop",b,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){a.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(b){var c=b||this;return{helper:c.helper,placeholder:c.placeholder||a([]),position:c.position,originalPosition:c.originalPosition,offset:c.positionAbs,item:c.currentItem,sender:b?b.element:null}}}),a.extend(a.ui.sortable,{version:"1.8.23"})})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.accordion.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:!0,clearStyle:!1,collapsible:!1,event:"click",fillSpace:!1,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:!1,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}},_create:function(){var b=this,c=b.options;b.running=0,b.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix"),b.headers=b.element.find(c.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){if(c.disabled)return;a(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){if(c.disabled)return;a(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){if(c.disabled)return;a(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){if(c.disabled)return;a(this).removeClass("ui-state-focus")}),b.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");if(c.navigation){var d=b.element.find("a").filter(c.navigationFilter).eq(0);if(d.length){var e=d.closest(".ui-accordion-header");e.length?b.active=e:b.active=d.closest(".ui-accordion-content").prev()}}b.active=b._findActive(b.active||c.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"),b.active.next().addClass("ui-accordion-content-active"),b._createIcons(),b.resize(),b.element.attr("role","tablist"),b.headers.attr("role","tab").bind("keydown.accordion",function(a){return b._keydown(a)}).next().attr("role","tabpanel"),b.headers.not(b.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide(),b.active.length?b.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}):b.headers.eq(0).attr("tabIndex",0),a.browser.safari||b.headers.find("a").attr("tabIndex",-1),c.event&&b.headers.bind(c.event.split(" ").join(".accordion ")+".accordion",function(a){b._clickHandler.call(b,a,this),a.preventDefault()})},_createIcons:function(){var b=this.options;b.icons&&(a("<span></span>").addClass("ui-icon "+b.icons.header).prependTo(this.headers),this.active.children(".ui-icon").toggleClass(b.icons.header).toggleClass(b.icons.headerSelected),this.element.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.children(".ui-icon").remove(),this.element.removeClass("ui-accordion-icons")},destroy:function(){var b=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex"),this.headers.find("a").removeAttr("tabIndex"),this._destroyIcons();var c=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");return(b.autoHeight||b.fillHeight)&&c.css("height",""),a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments),b=="active"&&this.activate(c),b=="icons"&&(this._destroyIcons(),c&&this._createIcons()),b=="disabled"&&this.headers.add(this.headers.next())[c?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")},_keydown:function(b){if(this.options.disabled||b.altKey||b.ctrlKey)return;var c=a.ui.keyCode,d=this.headers.length,e=this.headers.index(b.target),f=!1;switch(b.keyCode){case c.RIGHT:case c.DOWN:f=this.headers[(e+1)%d];break;case c.LEFT:case c.UP:f=this.headers[(e-1+d)%d];break;case c.SPACE:case c.ENTER:this._clickHandler({target:b.target},b.target),b.preventDefault()}return f?(a(b.target).attr("tabIndex",-1),a(f).attr("tabIndex",0),f.focus(),!1):!0},resize:function(){var b=this.options,c;if(b.fillSpace){if(a.browser.msie){var d=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}c=this.element.parent().height(),a.browser.msie&&this.element.parent().css("overflow",d),this.headers.each(function(){c-=a(this).outerHeight(!0)}),this.headers.next().each(function(){a(this).height(Math.max(0,c-a(this).innerHeight()+a(this).height()))}).css("overflow","auto")}else b.autoHeight&&(c=0,this.headers.next().each(function(){c=Math.max(c,a(this).height("").height())}).height(c));return this},activate:function(a){this.options.active=a;var b=this._findActive(a)[0];return this._clickHandler({target:b},b),this},_findActive:function(b){return b?typeof b=="number"?this.headers.filter(":eq("+b+")"):this.headers.not(this.headers.not(b)):b===!1?a([]):this.headers.filter(":eq(0)")},_clickHandler:function(b,c){var d=this.options;if(d.disabled)return;if(!b.target){if(!d.collapsible)return;this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header),this.active.next().addClass("ui-accordion-content-active");var e=this.active.next(),f={options:d,newHeader:a([]),oldHeader:d.active,newContent:a([]),oldContent:e},g=this.active=a([]);this._toggle(g,e,f);return}var h=a(b.currentTarget||c),i=h[0]===this.active[0];d.active=d.collapsible&&i?!1:this.headers.index(h);if(this.running||!d.collapsible&&i)return;var j=this.active,g=h.next(),e=this.active.next(),f={options:d,newHeader:i&&d.collapsible?a([]):h,oldHeader:this.active,newContent:i&&d.collapsible?a([]):g,oldContent:e},k=this.headers.index(this.active[0])>this.headers.index(h[0]);this.active=i?a([]):h,this._toggle(g,e,f,i,k),j.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header),i||(h.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected),h.next().addClass("ui-accordion-content-active"));return},_toggle:function(b,c,d,e,f){var g=this,h=g.options;g.toShow=b,g.toHide=c,g.data=d;var i=function(){if(!g)return;return g._completed.apply(g,arguments)};g._trigger("changestart",null,g.data),g.running=c.size()===0?b.size():c.size();if(h.animated){var j={};h.collapsible&&e?j={toShow:a([]),toHide:c,complete:i,down:f,autoHeight:h.autoHeight||h.fillSpace}:j={toShow:b,toHide:c,complete:i,down:f,autoHeight:h.autoHeight||h.fillSpace},h.proxied||(h.proxied=h.animated),h.proxiedDuration||(h.proxiedDuration=h.duration),h.animated=a.isFunction(h.proxied)?h.proxied(j):h.proxied,h.duration=a.isFunction(h.proxiedDuration)?h.proxiedDuration(j):h.proxiedDuration;var k=a.ui.accordion.animations,l=h.duration,m=h.animated;m&&!k[m]&&!a.easing[m]&&(m="slide"),k[m]||(k[m]=function(a){this.slide(a,{easing:m,duration:l||700})}),k[m](j)}else h.collapsible&&e?b.toggle():(c.hide(),b.show()),i(!0);c.prev().attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).blur(),b.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()},_completed:function(a){this.running=a?0:--this.running;if(this.running)return;this.options.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""}),this.toHide.removeClass("ui-accordion-content-active"),this.toHide.length&&(this.toHide.parent()[0].className=this.toHide.parent()[0].className),this._trigger("change",null,this.data)}}),a.extend(a.ui.accordion,{version:"1.8.23",animations:{slide:function(b,c){b=a.extend({easing:"swing",duration:300},b,c);if(!b.toHide.size()){b.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},b);return}if(!b.toShow.size()){b.toHide.animate({height:"hide",paddingTop:"hide",paddingBottom:"hide"},b);return}var d=b.toShow.css("overflow"),e=0,f={},g={},h=["height","paddingTop","paddingBottom"],i,j=b.toShow;i=j[0].style.width,j.width(j.parent().width()-parseFloat(j.css("paddingLeft"))-parseFloat(j.css("paddingRight"))-(parseFloat(j.css("borderLeftWidth"))||0)-(parseFloat(j.css("borderRightWidth"))||0)),a.each(h,function(c,d){g[d]="hide";var e=(""+a.css(b.toShow[0],d)).match(/^([\d+-.]+)(.*)$/);f[d]={value:e[1],unit:e[2]||"px"}}),b.toShow.css({height:0,overflow:"hidden"}).show(),b.toHide.filter(":hidden").each(b.complete).end().filter(":visible").animate(g,{step:function(a,c){c.prop=="height"&&(e=c.end-c.start===0?0:(c.now-c.start)/(c.end-c.start)),b.toShow[0].style[c.prop]=e*f[c.prop].value+f[c.prop].unit},duration:b.duration,easing:b.easing,complete:function(){b.autoHeight||b.toShow.css("height",""),b.toShow.css({width:i,overflow:d}),b.complete()}})},bounceslide:function(a){this.slide(a,{easing:a.down?"easeOutBounce":"swing",duration:a.down?1e3:200})}}})})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.autocomplete.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c=0;a.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var b=this,c=this.element[0].ownerDocument,d;this.isMultiLine=this.element.is("textarea"),this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(c){if(b.options.disabled||b.element.propAttr("readOnly"))return;d=!1;var e=a.ui.keyCode;switch(c.keyCode){case e.PAGE_UP:b._move("previousPage",c);break;case e.PAGE_DOWN:b._move("nextPage",c);break;case e.UP:b._keyEvent("previous",c);break;case e.DOWN:b._keyEvent("next",c);break;case e.ENTER:case e.NUMPAD_ENTER:b.menu.active&&(d=!0,c.preventDefault());case e.TAB:if(!b.menu.active)return;b.menu.select(c);break;case e.ESCAPE:b.element.val(b.term),b.close(c);break;default:clearTimeout(b.searching),b.searching=setTimeout(function(){b.term!=b.element.val()&&(b.selectedItem=null,b.search(null,c))},b.options.delay)}}).bind("keypress.autocomplete",function(a){d&&(d=!1,a.preventDefault())}).bind("focus.autocomplete",function(){if(b.options.disabled)return;b.selectedItem=null,b.previous=b.element.val()}).bind("blur.autocomplete",function(a){if(b.options.disabled)return;clearTimeout(b.searching),b.closing=setTimeout(function(){b.close(a),b._change(a)},150)}),this._initSource(),this.menu=a("<ul></ul>").addClass("ui-autocomplete").appendTo(a(this.options.appendTo||"body",c)[0]).mousedown(function(c){var d=b.menu.element[0];a(c.target).closest(".ui-menu-item").length||setTimeout(function(){a(document).one("mousedown",function(c){c.target!==b.element[0]&&c.target!==d&&!a.ui.contains(d,c.target)&&b.close()})},1),setTimeout(function(){clearTimeout(b.closing)},13)}).menu({focus:function(a,c){var d=c.item.data("item.autocomplete");!1!==b._trigger("focus",a,{item:d})&&/^key/.test(a.originalEvent.type)&&b.element.val(d.value)},selected:function(a,d){var e=d.item.data("item.autocomplete"),f=b.previous;b.element[0]!==c.activeElement&&(b.element.focus(),b.previous=f,setTimeout(function(){b.previous=f,b.selectedItem=e},1)),!1!==b._trigger("select",a,{item:e})&&b.element.val(e.value),b.term=b.element.val(),b.close(a),b.selectedItem=e},blur:function(a,c){b.menu.element.is(":visible")&&b.element.val()!==b.term&&b.element.val(b.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu"),a.fn.bgiframe&&this.menu.element.bgiframe(),b.beforeunloadHandler=function(){b.element.removeAttr("autocomplete")},a(window).bind("beforeunload",b.beforeunloadHandler)},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"),this.menu.element.remove(),a(window).unbind("beforeunload",this.beforeunloadHandler),a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments),b==="source"&&this._initSource(),b==="appendTo"&&this.menu.element.appendTo(a(c||"body",this.element[0].ownerDocument)[0]),b==="disabled"&&c&&this.xhr&&this.xhr.abort()},_initSource:function(){var b=this,c,d;a.isArray(this.options.source)?(c=this.options.source,this.source=function(b,d){d(a.ui.autocomplete.filter(c,b.term))}):typeof this.options.source=="string"?(d=this.options.source,this.source=function(c,e){b.xhr&&b.xhr.abort(),b.xhr=a.ajax({url:d,data:c,dataType:"json",success:function(a,b){e(a)},error:function(){e([])}})}):this.source=this.options.source},search:function(a,b){a=a!=null?a:this.element.val(),this.term=this.element.val();if(a.length<this.options.minLength)return this.close(b);clearTimeout(this.closing);if(this._trigger("search",b)===!1)return;return this._search(a)},_search:function(a){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.source({term:a},this._response())},_response:function(){var a=this,b=++c;return function(d){b===c&&a.__response(d),a.pending--,a.pending||a.element.removeClass("ui-autocomplete-loading")}},__response:function(a){!this.options.disabled&&a&&a.length?(a=this._normalize(a),this._suggest(a),this._trigger("open")):this.close()},close:function(a){clearTimeout(this.closing),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.deactivate(),this._trigger("close",a))},_change:function(a){this.previous!==this.element.val()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(b){return b.length&&b[0].label&&b[0].value?b:a.map(b,function(b){return typeof b=="string"?{label:b,value:b}:a.extend({label:b.label||b.value,value:b.value||b.label},b)})},_suggest:function(b){var c=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(c,b),this.menu.deactivate(),this.menu.refresh(),c.show(),this._resizeMenu(),c.position(a.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(new a.Event("mouseover"))},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(b,c){var d=this;a.each(c,function(a,c){d._renderItem(b,c)})},_renderItem:function(b,c){return a("<li></li>").data("item.autocomplete",c).append(a("<a></a>").text(c.label)).appendTo(b)},_move:function(a,b){if(!this.menu.element.is(":visible")){this.search(null,b);return}if(this.menu.first()&&/^previous/.test(a)||this.menu.last()&&/^next/.test(a)){this.element.val(this.term),this.menu.deactivate();return}this.menu[a](b)},widget:function(){return this.menu.element},_keyEvent:function(a,b){if(!this.isMultiLine||this.menu.element.is(":visible"))this._move(a,b),b.preventDefault()}}),a.extend(a.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},filter:function(b,c){var d=new RegExp(a.ui.autocomplete.escapeRegex(c),"i");return a.grep(b,function(a){return d.test(a.label||a.value||a)})}})})(jQuery),function(a){a.widget("ui.menu",{_create:function(){var b=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(c){if(!a(c.target).closest(".ui-menu-item a").length)return;c.preventDefault(),b.select(c)}),this.refresh()},refresh:function(){var b=this,c=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");c.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(c){b.activate(c,a(this).parent())}).mouseleave(function(){b.deactivate()})},activate:function(a,b){this.deactivate();if(this.hasScroll()){var c=b.offset().top-this.element.offset().top,d=this.element.scrollTop(),e=this.element.height();c<0?this.element.scrollTop(d+c):c>=e&&this.element.scrollTop(d+c-e+b.height())}this.active=b.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end(),this._trigger("focus",a,{item:b})},deactivate:function(){if(!this.active)return;this.active.children("a").removeClass("ui-state-hover").removeAttr("id"),this._trigger("blur"),this.active=null},next:function(a){this.move("next",".ui-menu-item:first",a)},previous:function(a){this.move("prev",".ui-menu-item:last",a)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(a,b,c){if(!this.active){this.activate(c,this.element.children(b));return}var d=this.active[a+"All"](".ui-menu-item").eq(0);d.length?this.activate(c,d):this.activate(c,this.element.children(b))},nextPage:function(b){if(this.hasScroll()){if(!this.active||this.last()){this.activate(b,this.element.children(".ui-menu-item:first"));return}var c=this.active.offset().top,d=this.element.height(),e=this.element.children(".ui-menu-item").filter(function(){var b=a(this).offset().top-c-d+a(this).height();return b<10&&b>-10});e.length||(e=this.element.children(".ui-menu-item:last")),this.activate(b,e)}else this.activate(b,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))},previousPage:function(b){if(this.hasScroll()){if(!this.active||this.first()){this.activate(b,this.element.children(".ui-menu-item:last"));return}var c=this.active.offset().top,d=this.element.height(),e=this.element.children(".ui-menu-item").filter(function(){var b=a(this).offset().top-c+d-a(this).height();return b<10&&b>-10});e.length||(e=this.element.children(".ui-menu-item:first")),this.activate(b,e)}else this.activate(b,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element[a.fn.prop?"prop":"attr"]("scrollHeight")},select:function(a){this._trigger("selected",a,{item:this.active})}})}(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.button.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c,d,e,f,g="ui-button ui-widget ui-state-default ui-corner-all",h="ui-state-hover ui-state-active ",i="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",j=function(){var b=a(this).find(":ui-button");setTimeout(function(){b.button("refresh")},1)},k=function(b){var c=b.name,d=b.form,e=a([]);return c&&(d?e=a(d).find("[name='"+c+"']"):e=a("[name='"+c+"']",b.ownerDocument).filter(function(){return!this.form})),e};a.widget("ui.button",{options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",j),typeof this.options.disabled!="boolean"?this.options.disabled=!!this.element.propAttr("disabled"):this.element.propAttr("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var b=this,h=this.options,i=this.type==="checkbox"||this.type==="radio",l="ui-state-hover"+(i?"":" ui-state-active"),m="ui-state-focus";h.label===null&&(h.label=this.buttonElement.html()),this.buttonElement.addClass(g).attr("role","button").bind("mouseenter.button",function(){if(h.disabled)return;a(this).addClass("ui-state-hover"),this===c&&a(this).addClass("ui-state-active")}).bind("mouseleave.button",function(){if(h.disabled)return;a(this).removeClass(l)}).bind("click.button",function(a){h.disabled&&(a.preventDefault(),a.stopImmediatePropagation())}),this.element.bind("focus.button",function(){b.buttonElement.addClass(m)}).bind("blur.button",function(){b.buttonElement.removeClass(m)}),i&&(this.element.bind("change.button",function(){if(f)return;b.refresh()}),this.buttonElement.bind("mousedown.button",function(a){if(h.disabled)return;f=!1,d=a.pageX,e=a.pageY}).bind("mouseup.button",function(a){if(h.disabled)return;if(d!==a.pageX||e!==a.pageY)f=!0})),this.type==="checkbox"?this.buttonElement.bind("click.button",function(){if(h.disabled||f)return!1;a(this).toggleClass("ui-state-active"),b.buttonElement.attr("aria-pressed",b.element[0].checked)}):this.type==="radio"?this.buttonElement.bind("click.button",function(){if(h.disabled||f)return!1;a(this).addClass("ui-state-active"),b.buttonElement.attr("aria-pressed","true");var c=b.element[0];k(c).not(c).map(function(){return a(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown.button",function(){if(h.disabled)return!1;a(this).addClass("ui-state-active"),c=this,a(document).one("mouseup",function(){c=null})}).bind("mouseup.button",function(){if(h.disabled)return!1;a(this).removeClass("ui-state-active")}).bind("keydown.button",function(b){if(h.disabled)return!1;(b.keyCode==a.ui.keyCode.SPACE||b.keyCode==a.ui.keyCode.ENTER)&&a(this).addClass("ui-state-active")}).bind("keyup.button",function(){a(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(b){b.keyCode===a.ui.keyCode.SPACE&&a(this).click()})),this._setOption("disabled",h.disabled),this._resetButton()},_determineButtonType:function(){this.element.is(":checkbox")?this.type="checkbox":this.element.is(":radio")?this.type="radio":this.element.is("input")?this.type="input":this.type="button";if(this.type==="checkbox"||this.type==="radio"){var a=this.element.parents().filter(":last"),b="label[for='"+this.element.attr("id")+"']";this.buttonElement=a.find(b),this.buttonElement.length||(a=a.length?a.siblings():this.element.siblings(),this.buttonElement=a.filter(b),this.buttonElement.length||(this.buttonElement=a.find(b))),this.element.addClass("ui-helper-hidden-accessible");var c=this.element.is(":checked");c&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.attr("aria-pressed",c)}else this.buttonElement=this.element},widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(g+" "+h+" "+i).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title"),a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments);if(b==="disabled"){c?this.element.propAttr("disabled",!0):this.element.propAttr("disabled",!1);return}this._resetButton()},refresh:function(){var b=this.element.is(":disabled");b!==this.options.disabled&&this._setOption("disabled",b),this.type==="radio"?k(this.element[0]).each(function(){a(this).is(":checked")?a(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):this.type==="checkbox"&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if(this.type==="input"){this.options.label&&this.element.val(this.options.label);return}var b=this.buttonElement.removeClass(i),c=a("<span></span>",this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),d=this.options.icons,e=d.primary&&d.secondary,f=[];d.primary||d.secondary?(this.options.text&&f.push("ui-button-text-icon"+(e?"s":d.primary?"-primary":"-secondary")),d.primary&&b.prepend("<span class='ui-button-icon-primary ui-icon "+d.primary+"'></span>"),d.secondary&&b.append("<span class='ui-button-icon-secondary ui-icon "+d.secondary+"'></span>"),this.options.text||(f.push(e?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||b.attr("title",c))):f.push("ui-button-text-only"),b.addClass(f.join(" "))}}),a.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(b,c){b==="disabled"&&this.buttons.button("option",b,c),a.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){var b=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(b?"ui-corner-left":"ui-corner-right").end().end()},destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy"),a.Widget.prototype.destroy.call(this)}})})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.dialog.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c="ui-dialog ui-widget ui-widget-content ui-corner-all ",d={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},e={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};a.widget("ui.dialog",{options:{autoOpen:!0,buttons:{},closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:!1,maxWidth:!1,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",collision:"fit",using:function(b){var c=a(this).css(b).offset().top;c<0&&a(this).css("top",b.top-c)}},resizable:!0,show:null,stack:!0,title:"",width:300,zIndex:1e3},_create:function(){this.originalTitle=this.element.attr("title"),typeof this.originalTitle!="string"&&(this.originalTitle=""),this.options.title=this.options.title||this.originalTitle;var b=this,d=b.options,e=d.title||"&#160;",f=a.ui.dialog.getTitleId(b.element),g=(b.uiDialog=a("<div></div>")).appendTo(document.body).hide().addClass(c+d.dialogClass).css({zIndex:d.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(c){d.closeOnEscape&&!c.isDefaultPrevented()&&c.keyCode&&c.keyCode===a.ui.keyCode.ESCAPE&&(b.close(c),c.preventDefault())}).attr({role:"dialog","aria-labelledby":f}).mousedown(function(a){b.moveToTop(!1,a)}),h=b.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g),i=(b.uiDialogTitlebar=a("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g),j=a('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){j.addClass("ui-state-hover")},function(){j.removeClass("ui-state-hover")}).focus(function(){j.addClass("ui-state-focus")}).blur(function(){j.removeClass("ui-state-focus")}).click(function(a){return b.close(a),!1}).appendTo(i),k=(b.uiDialogTitlebarCloseText=a("<span></span>")).addClass("ui-icon ui-icon-closethick").text(d.closeText).appendTo(j),l=a("<span></span>").addClass("ui-dialog-title").attr("id",f).html(e).prependTo(i);a.isFunction(d.beforeclose)&&!a.isFunction(d.beforeClose)&&(d.beforeClose=d.beforeclose),i.find("*").add(i).disableSelection(),d.draggable&&a.fn.draggable&&b._makeDraggable(),d.resizable&&a.fn.resizable&&b._makeResizable(),b._createButtons(d.buttons),b._isOpen=!1,a.fn.bgiframe&&g.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){var a=this;return a.overlay&&a.overlay.destroy(),a.uiDialog.hide(),a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"),a.uiDialog.remove(),a.originalTitle&&a.element.attr("title",a.originalTitle),a},widget:function(){return this.uiDialog},close:function(b){var c=this,d,e;if(!1===c._trigger("beforeClose",b))return;return c.overlay&&c.overlay.destroy(),c.uiDialog.unbind("keypress.ui-dialog"),c._isOpen=!1,c.options.hide?c.uiDialog.hide(c.options.hide,function(){c._trigger("close",b)}):(c.uiDialog.hide(),c._trigger("close",b)),a.ui.dialog.overlay.resize(),c.options.modal&&(d=0,a(".ui-dialog").each(function(){this!==c.uiDialog[0]&&(e=a(this).css("z-index"),isNaN(e)||(d=Math.max(d,e)))}),a.ui.dialog.maxZ=d),c},isOpen:function(){return this._isOpen},moveToTop:function(b,c){var d=this,e=d.options,f;return e.modal&&!b||!e.stack&&!e.modal?d._trigger("focus",c):(e.zIndex>a.ui.dialog.maxZ&&(a.ui.dialog.maxZ=e.zIndex),d.overlay&&(a.ui.dialog.maxZ+=1,d.overlay.$el.css("z-index",a.ui.dialog.overlay.maxZ=a.ui.dialog.maxZ)),f={scrollTop:d.element.scrollTop(),scrollLeft:d.element.scrollLeft()},a.ui.dialog.maxZ+=1,d.uiDialog.css("z-index",a.ui.dialog.maxZ),d.element.attr(f),d._trigger("focus",c),d)},open:function(){if(this._isOpen)return;var b=this,c=b.options,d=b.uiDialog;return b.overlay=c.modal?new a.ui.dialog.overlay(b):null,b._size(),b._position(c.position),d.show(c.show),b.moveToTop(!0),c.modal&&d.bind("keydown.ui-dialog",function(b){if(b.keyCode!==a.ui.keyCode.TAB)return;var c=a(":tabbable",this),d=c.filter(":first"),e=c.filter(":last");if(b.target===e[0]&&!b.shiftKey)return d.focus(1),!1;if(b.target===d[0]&&b.shiftKey)return e.focus(1),!1}),a(b.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus(),b._isOpen=!0,b._trigger("open"),b},_createButtons:function(b){var c=this,d=!1,e=a("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),f=a("<div></div>").addClass("ui-dialog-buttonset").appendTo(e);c.uiDialog.find(".ui-dialog-buttonpane").remove(),typeof b=="object"&&b!==null&&a.each(b,function(){return!(d=!0)}),d&&(a.each(b,function(b,d){d=a.isFunction(d)?{click:d,text:b}:d;var e=a('<button type="button"></button>').click(function(){d.click.apply(c.element[0],arguments)}).appendTo(f);a.each(d,function(a,b){if(a==="click")return;a in e?e[a](b):e.attr(a,b)}),a.fn.button&&e.button()}),e.appendTo(c.uiDialog))},_makeDraggable:function(){function f(a){return{position:a.position,offset:a.offset}}var b=this,c=b.options,d=a(document),e;b.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(d,g){e=c.height==="auto"?"auto":a(this).height(),a(this).height(a(this).height()).addClass("ui-dialog-dragging"),b._trigger("dragStart",d,f(g))},drag:function(a,c){b._trigger("drag",a,f(c))},stop:function(g,h){c.position=[h.position.left-d.scrollLeft(),h.position.top-d.scrollTop()],a(this).removeClass("ui-dialog-dragging").height(e),b._trigger("dragStop",g,f(h)),a.ui.dialog.overlay.resize()}})},_makeResizable:function(c){function h(a){return{originalPosition:a.originalPosition,originalSize:a.originalSize,position:a.position,size:a.size}}c=c===b?this.options.resizable:c;var d=this,e=d.options,f=d.uiDialog.css("position"),g=typeof c=="string"?c:"n,e,s,w,se,sw,ne,nw";d.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:d.element,maxWidth:e.maxWidth,maxHeight:e.maxHeight,minWidth:e.minWidth,minHeight:d._minHeight(),handles:g,start:function(b,c){a(this).addClass("ui-dialog-resizing"),d._trigger("resizeStart",b,h(c))},resize:function(a,b){d._trigger("resize",a,h(b))},stop:function(b,c){a(this).removeClass("ui-dialog-resizing"),e.height=a(this).height(),e.width=a(this).width(),d._trigger("resizeStop",b,h(c)),a.ui.dialog.overlay.resize()}}).css("position",f).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var a=this.options;return a.height==="auto"?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(b){var c=[],d=[0,0],e;if(b){if(typeof b=="string"||typeof b=="object"&&"0"in b)c=b.split?b.split(" "):[b[0],b[1]],c.length===1&&(c[1]=c[0]),a.each(["left","top"],function(a,b){+c[a]===c[a]&&(d[a]=c[a],c[a]=b)}),b={my:c.join(" "),at:c.join(" "),offset:d.join(" ")};b=a.extend({},a.ui.dialog.prototype.options.position,b)}else b=a.ui.dialog.prototype.options.position;e=this.uiDialog.is(":visible"),e||this.uiDialog.show(),this.uiDialog.css({top:0,left:0}).position(a.extend({of:window},b)),e||this.uiDialog.hide()},_setOptions:function(b){var c=this,f={},g=!1;a.each(b,function(a,b){c._setOption(a,b),a in d&&(g=!0),a in e&&(f[a]=b)}),g&&this._size(),this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",f)},_setOption:function(b,d){var e=this,f=e.uiDialog;switch(b){case"beforeclose":b="beforeClose";break;case"buttons":e._createButtons(d);break;case"closeText":e.uiDialogTitlebarCloseText.text(""+d);break;case"dialogClass":f.removeClass(e.options.dialogClass).addClass(c+d);break;case"disabled":d?f.addClass("ui-dialog-disabled"):f.removeClass("ui-dialog-disabled");break;case"draggable":var g=f.is(":data(draggable)");g&&!d&&f.draggable("destroy"),!g&&d&&e._makeDraggable();break;case"position":e._position(d);break;case"resizable":var h=f.is(":data(resizable)");h&&!d&&f.resizable("destroy"),h&&typeof d=="string"&&f.resizable("option","handles",d),!h&&d!==!1&&e._makeResizable(d);break;case"title":a(".ui-dialog-title",e.uiDialogTitlebar).html(""+(d||"&#160;"))}a.Widget.prototype._setOption.apply(e,arguments)},_size:function(){var b=this.options,c,d,e=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0}),b.minWidth>b.width&&(b.width=b.minWidth),c=this.uiDialog.css({height:"auto",width:b.width}).height(),d=Math.max(0,b.minHeight-c);if(b.height==="auto")if(a.support.minHeight)this.element.css({minHeight:d,height:"auto"});else{this.uiDialog.show();var f=this.element.css("height","auto").height();e||this.uiDialog.hide(),this.element.height(Math.max(f,d))}else this.element.height(Math.max(b.height-c,0));this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}}),a.extend(a.ui.dialog,{version:"1.8.23",uuid:0,maxZ:0,getTitleId:function(a){var b=a.attr("id");return b||(this.uuid+=1,b=this.uuid),"ui-dialog-title-"+b},overlay:function(b){this.$el=a.ui.dialog.overlay.create(b)}}),a.extend(a.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:a.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(a){return a+".dialog-overlay"}).join(" "),create:function(b){this.instances.length===0&&(setTimeout(function(){a.ui.dialog.overlay.instances.length&&a(document).bind(a.ui.dialog.overlay.events,function(b){if(a(b.target).zIndex()<a.ui.dialog.overlay.maxZ)return!1})},1),a(document).bind("keydown.dialog-overlay",function(c){b.options.closeOnEscape&&!c.isDefaultPrevented()&&c.keyCode&&c.keyCode===a.ui.keyCode.ESCAPE&&(b.close(c),c.preventDefault())}),a(window).bind("resize.dialog-overlay",a.ui.dialog.overlay.resize));var c=(this.oldInstances.pop()||a("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),height:this.height()});return a.fn.bgiframe&&c.bgiframe(),this.instances.push(c),c},destroy:function(b){var c=a.inArray(b,this.instances);c!=-1&&this.oldInstances.push(this.instances.splice(c,1)[0]),this.instances.length===0&&a([document,window]).unbind(".dialog-overlay"),b.remove();var d=0;a.each(this.instances,function(){d=Math.max(d,this.css("z-index"))}),this.maxZ=d},height:function(){var b,c;return a.browser.msie&&a.browser.version<7?(b=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),c=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight),b<c?a(window).height()+"px":b+"px"):a(document).height()+"px"},width:function(){var b,c;return a.browser.msie?(b=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth),c=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth),b<c?a(window).width()+"px":b+"px"):a(document).width()+"px"},resize:function(){var b=a([]);a.each(a.ui.dialog.overlay.instances,function(){b=b.add(this)}),b.css({width:0,height:0}).css({width:a.ui.dialog.overlay.width(),height:a.ui.dialog.overlay.height()})}}),a.extend(a.ui.dialog.overlay.prototype,{destroy:function(){a.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.slider.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c=5;a.widget("ui.slider",a.ui.mouse,{widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null},_create:function(){var b=this,d=this.options,e=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",g=d.values&&d.values.length||1,h=[];this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"+(d.disabled?" ui-slider-disabled ui-disabled":"")),this.range=a([]),d.range&&(d.range===!0&&(d.values||(d.values=[this._valueMin(),this._valueMin()]),d.values.length&&d.values.length!==2&&(d.values=[d.values[0],d.values[0]])),this.range=a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(d.range==="min"||d.range==="max"?" ui-slider-range-"+d.range:"")));for(var i=e.length;i<g;i+=1)h.push(f);this.handles=e.add(a(h.join("")).appendTo(b.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(a){a.preventDefault()}).hover(function(){d.disabled||a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")}).focus(function(){d.disabled?a(this).blur():(a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),a(this).addClass("ui-state-focus"))}).blur(function(){a(this).removeClass("ui-state-focus")}),this.handles.each(function(b){a(this).data("index.ui-slider-handle",b)}),this.handles.keydown(function(d){var e=a(this).data("index.ui-slider-handle"),f,g,h,i;if(b.options.disabled)return;switch(d.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:d.preventDefault();if(!b._keySliding){b._keySliding=!0,a(this).addClass("ui-state-active"),f=b._start(d,e);if(f===!1)return}}i=b.options.step,b.options.values&&b.options.values.length?g=h=b.values(e):g=h=b.value();switch(d.keyCode){case a.ui.keyCode.HOME:h=b._valueMin();break;case a.ui.keyCode.END:h=b._valueMax();break;case a.ui.keyCode.PAGE_UP:h=b._trimAlignValue(g+(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.PAGE_DOWN:h=b._trimAlignValue(g-(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(g===b._valueMax())return;h=b._trimAlignValue(g+i);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(g===b._valueMin())return;h=b._trimAlignValue(g-i)}b._slide(d,e,h)}).keyup(function(c){var d=a(this).data("index.ui-slider-handle");b._keySliding&&(b._keySliding=!1,b._stop(c,d),b._change(c,d),a(this).removeClass("ui-state-active"))}),this._refreshValue(),this._animateOff=!1},destroy:function(){return this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"),this._mouseDestroy(),this},_mouseCapture:function(b){var c=this.options,d,e,f,g,h,i,j,k,l;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),d={x:b.pageX,y:b.pageY},e=this._normValueFromMouse(d),f=this._valueMax()-this._valueMin()+1,h=this,this.handles.each(function(b){var c=Math.abs(e-h.values(b));f>c&&(f=c,g=a(this),i=b)}),c.range===!0&&this.values(1)===c.min&&(i+=1,g=a(this.handles[i])),j=this._start(b,i),j===!1?!1:(this._mouseSliding=!0,h._handleIndex=i,g.addClass("ui-state-active").focus(),k=g.offset(),l=!a(b.target).parents().andSelf().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:b.pageX-k.left-g.width()/2,top:b.pageY-k.top-g.height()/2-(parseInt(g.css("borderTopWidth"),10)||0)-(parseInt(g.css("borderBottomWidth"),10)||0)+(parseInt(g.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(b,i,e),this._animateOff=!0,!0))},_mouseStart:function(a){return!0},_mouseDrag:function(a){var b={x:a.pageX,y:a.pageY},c=this._normValueFromMouse(b);return this._slide(a,this._handleIndex,c),!1},_mouseStop:function(a){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(a){var b,c,d,e,f;return this.orientation==="horizontal"?(b=this.elementSize.width,c=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(b=this.elementSize.height,c=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=c/b,d>1&&(d=1),d<0&&(d=0),this.orientation==="vertical"&&(d=1-d),e=this._valueMax()-this._valueMin(),f=this._valueMin()+d*e,this._trimAlignValue(f)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};return this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("start",a,c)},_slide:function(a,b,c){var d,e,f;this.options.values&&this.options.values.length?(d=this.values(b?0:1),this.options.values.length===2&&this.options.range===!0&&(b===0&&c>d||b===1&&c<d)&&(c=d),c!==this.values(b)&&(e=this.values(),e[b]=c,f=this._trigger("slide",a,{handle:this.handles[b],value:c,values:e}),d=this.values(b?0:1),f!==!1&&this.values(b,c,!0))):c!==this.value()&&(f=this._trigger("slide",a,{handle:this.handles[b],value:c}),f!==!1&&this.value(c))},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("stop",a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("change",a,c)}},value:function(a){if(arguments.length){this.options.value=this._trimAlignValue(a),this._refreshValue(),this._change(null,0);return}return this._value()},values:function(b,c){var d,e,f;if(arguments.length>1){this.options.values[b]=this._trimAlignValue(c),this._refreshValue(),this._change(null,b);return}if(!arguments.length)return this._values();if(!a.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(b):this.value();d=this.options.values,e=arguments[0];for(f=0;f<d.length;f+=1)d[f]=this._trimAlignValue(e[f]),this._change(null,f);this._refreshValue()},_setOption:function(b,c){var d,e=0;a.isArray(this.options.values)&&(e=this.options.values.length),a.Widget.prototype._setOption.apply(this,arguments);switch(b){case"disabled":c?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.propAttr("disabled",!0),this.element.addClass("ui-disabled")):(this.handles.propAttr("disabled",!1),this.element.removeClass("ui-disabled"));break;case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(d=0;d<e;d+=1)this._change(null,d);this._animateOff=!1}},_value:function(){var a=this.options.value;return a=this._trimAlignValue(a),a},_values:function(a){var b,c,d;if(arguments.length)return b=this.options.values[a],b=this._trimAlignValue(b),b;c=this.options.values.slice();for(d=0;d<c.length;d+=1)c[d]=this._trimAlignValue(c[d]);return c},_trimAlignValue:function(a){if(a<=this._valueMin())return this._valueMin();if(a>=this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=(a-this._valueMin())%b,d=a-c;return Math.abs(c)*2>=b&&(d+=c>0?b:-b),parseFloat(d.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var b=this.options.range,c=this.options,d=this,e=this._animateOff?!1:c.animate,f,g={},h,i,j,k;this.options.values&&this.options.values.length?this.handles.each(function(b,i){f=(d.values(b)-d._valueMin())/(d._valueMax()-d._valueMin())*100,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",a(this).stop(1,1)[e?"animate":"css"](g,c.animate),d.options.range===!0&&(d.orientation==="horizontal"?(b===0&&d.range.stop(1,1)[e?"animate":"css"]({left:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({width:f-h+"%"},{queue:!1,duration:c.animate})):(b===0&&d.range.stop(1,1)[e?"animate":"css"]({bottom:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({height:f-h+"%"},{queue:!1,duration:c.animate}))),h=f}):(i=this.value(),j=this._valueMin(),k=this._valueMax(),f=k!==j?(i-j)/(k-j)*100:0,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",this.handle.stop(1,1)[e?"animate":"css"](g,c.animate),b==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[e?"animate":"css"]({width:f+"%"},c.animate),b==="max"&&this.orientation==="horizontal"&&this.range[e?"animate":"css"]({width:100-f+"%"},{queue:!1,duration:c.animate}),b==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[e?"animate":"css"]({height:f+"%"},c.animate),b==="max"&&this.orientation==="vertical"&&this.range[e?"animate":"css"]({height:100-f+"%"},{queue:!1,duration:c.animate}))}}),a.extend(a.ui.slider,{version:"1.8.23"})})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.tabs.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){function e(){return++c}function f(){return++d}var c=0,d=0;a.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:!1,cookie:null,collapsible:!1,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(!0)},_setOption:function(a,b){if(a=="selected"){if(this.options.collapsible&&b==this.options.selected)return;this.select(b)}else this.options[a]=b,this._tabify()},_tabId:function(a){return a.title&&a.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+e()},_sanitizeSelector:function(a){return a.replace(/:/g,"\\:")},_cookie:function(){var b=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+f());return a.cookie.apply(null,[b].concat(a.makeArray(arguments)))},_ui:function(a,b){return{tab:a,panel:b,index:this.anchors.index(a)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var b=a(this);b.html(b.data("label.tabs")).removeData("label.tabs")})},_tabify:function(c){function m(b,c){b.css("display",""),!a.support.opacity&&c.opacity&&b[0].style.removeAttribute("filter")}var d=this,e=this.options,f=/^#.+/;this.list=this.element.find("ol,ul").eq(0),this.lis=a(" > li:has(a[href])",this.list),this.anchors=this.lis.map(function(){return a("a",this)[0]}),this.panels=a([]),this.anchors.each(function(b,c){var g=a(c).attr("href"),h=g.split("#")[0],i;h&&(h===location.toString().split("#")[0]||(i=a("base")[0])&&h===i.href)&&(g=c.hash,c.href=g);if(f.test(g))d.panels=d.panels.add(d.element.find(d._sanitizeSelector(g)));else if(g&&g!=="#"){a.data(c,"href.tabs",g),a.data(c,"load.tabs",g.replace(/#.*$/,""));var j=d._tabId(c);c.href="#"+j;var k=d.element.find("#"+j);k.length||(k=a(e.panelTemplate).attr("id",j).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(d.panels[b-1]||d.list),k.data("destroy.tabs",!0)),d.panels=d.panels.add(k)}else e.disabled.push(b)}),c?(this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"),this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"),this.lis.addClass("ui-state-default ui-corner-top"),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"),e.selected===b?(location.hash&&this.anchors.each(function(a,b){if(b.hash==location.hash)return e.selected=a,!1}),typeof e.selected!="number"&&e.cookie&&(e.selected=parseInt(d._cookie(),10)),typeof e.selected!="number"&&this.lis.filter(".ui-tabs-selected").length&&(e.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))),e.selected=e.selected||(this.lis.length?0:-1)):e.selected===null&&(e.selected=-1),e.selected=e.selected>=0&&this.anchors[e.selected]||e.selected<0?e.selected:0,e.disabled=a.unique(e.disabled.concat(a.map(this.lis.filter(".ui-state-disabled"),function(a,b){return d.lis.index(a)}))).sort(),a.inArray(e.selected,e.disabled)!=-1&&e.disabled.splice(a.inArray(e.selected,e.disabled),1),this.panels.addClass("ui-tabs-hide"),this.lis.removeClass("ui-tabs-selected ui-state-active"),e.selected>=0&&this.anchors.length&&(d.element.find(d._sanitizeSelector(d.anchors[e.selected].hash)).removeClass("ui-tabs-hide"),this.lis.eq(e.selected).addClass("ui-tabs-selected ui-state-active"),d.element.queue("tabs",function(){d._trigger("show",null,d._ui(d.anchors[e.selected],d.element.find(d._sanitizeSelector(d.anchors[e.selected].hash))[0]))}),this.load(e.selected)),a(window).bind("unload",function(){d.lis.add(d.anchors).unbind(".tabs"),d.lis=d.anchors=d.panels=null})):e.selected=this.lis.index(this.lis.filter(".ui-tabs-selected")),this.element[e.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible"),e.cookie&&this._cookie(e.selected,e.cookie);for(var g=0,h;h=this.lis[g];g++)a(h)[a.inArray(g,e.disabled)!=-1&&!a(h).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");e.cache===!1&&this.anchors.removeData("cache.tabs"),this.lis.add(this.anchors).unbind(".tabs");if(e.event!=="mouseover"){var i=function(a,b){b.is(":not(.ui-state-disabled)")&&b.addClass("ui-state-"+a)},j=function(a,b){b.removeClass("ui-state-"+a)};this.lis.bind("mouseover.tabs",function(){i("hover",a(this))}),this.lis.bind("mouseout.tabs",function(){j("hover",a(this))}),this.anchors.bind("focus.tabs",function(){i("focus",a(this).closest("li"))}),this.anchors.bind("blur.tabs",function(){j("focus",a(this).closest("li"))})}var k,l;e.fx&&(a.isArray(e.fx)?(k=e.fx[0],l=e.fx[1]):k=l=e.fx);var n=l?function(b,c){a(b).closest("li").addClass("ui-tabs-selected ui-state-active"),c.hide().removeClass("ui-tabs-hide").animate(l,l.duration||"normal",function(){m(c,l),d._trigger("show",null,d._ui(b,c[0]))})}:function(b,c){a(b).closest("li").addClass("ui-tabs-selected ui-state-active"),c.removeClass("ui-tabs-hide"),d._trigger("show",null,d._ui(b,c[0]))},o=k?function(a,b){b.animate(k,k.duration||"normal",function(){d.lis.removeClass("ui-tabs-selected ui-state-active"),b.addClass("ui-tabs-hide"),m(b,k),d.element.dequeue("tabs")})}:function(a,b,c){d.lis.removeClass("ui-tabs-selected ui-state-active"),b.addClass("ui-tabs-hide"),d.element.dequeue("tabs")};this.anchors.bind(e.event+".tabs",function(){var b=this,c=a(b).closest("li"),f=d.panels.filter(":not(.ui-tabs-hide)"),g=d.element.find(d._sanitizeSelector(b.hash));if(c.hasClass("ui-tabs-selected")&&!e.collapsible||c.hasClass("ui-state-disabled")||c.hasClass("ui-state-processing")||d.panels.filter(":animated").length||d._trigger("select",null,d._ui(this,g[0]))===!1)return this.blur(),!1;e.selected=d.anchors.index(this),d.abort();if(e.collapsible){if(c.hasClass("ui-tabs-selected"))return e.selected=-1,e.cookie&&d._cookie(e.selected,e.cookie),d.element.queue("tabs",function(){o(b,f)}).dequeue("tabs"),this.blur(),!1;if(!f.length)return e.cookie&&d._cookie(e.selected,e.cookie),d.element.queue("tabs",function(){n(b,g)}),d.load(d.anchors.index(this)),this.blur(),!1}e.cookie&&d._cookie(e.selected,e.cookie);if(g.length)f.length&&d.element.queue("tabs",function(){o(b,f)}),d.element.queue("tabs",function(){n(b,g)}),d.load(d.anchors.index(this));else throw"jQuery UI Tabs: Mismatching fragment identifier.";a.browser.msie&&this.blur()}),this.anchors.bind("click.tabs",function(){return!1})},_getIndex:function(a){return typeof a=="string"&&(a=this.anchors.index(this.anchors.filter("[href$='"+a+"']"))),a},destroy:function(){var b=this.options;return this.abort(),this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"),this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"),this.anchors.each(function(){var b=a.data(this,"href.tabs");b&&(this.href=b);var c=a(this).unbind(".tabs");a.each(["href","load","cache"],function(a,b){c.removeData(b+".tabs")})}),this.lis.unbind(".tabs").add(this.panels).each(function(){a.data(this,"destroy.tabs")?a(this).remove():a(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "))}),b.cookie&&this._cookie(null,b.cookie),this},add:function(c,d,e){e===b&&(e=this.anchors.length);var f=this,g=this.options,h=a(g.tabTemplate.replace(/#\{href\}/g,c).replace(/#\{label\}/g,d)),i=c.indexOf("#")?this._tabId(a("a",h)[0]):c.replace("#","");h.addClass("ui-state-default ui-corner-top").data("destroy.tabs",!0);var j=f.element.find("#"+i);return j.length||(j=a(g.panelTemplate).attr("id",i).data("destroy.tabs",!0)),j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"),e>=this.lis.length?(h.appendTo(this.list),j.appendTo(this.list[0].parentNode)):(h.insertBefore(this.lis[e]),j.insertBefore(this.panels[e])),g.disabled=a.map(g.disabled,function(a,b){return a>=e?++a:a}),this._tabify(),this.anchors.length==1&&(g.selected=0,h.addClass("ui-tabs-selected ui-state-active"),j.removeClass("ui-tabs-hide"),this.element.queue("tabs",function(){f._trigger("show",null,f._ui(f.anchors[0],f.panels[0]))}),this.load(0)),this._trigger("add",null,this._ui(this.anchors[e],this.panels[e])),this},remove:function(b){b=this._getIndex(b);var c=this.options,d=this.lis.eq(b).remove(),e=this.panels.eq(b).remove();return d.hasClass("ui-tabs-selected")&&this.anchors.length>1&&this.select(b+(b+1<this.anchors.length?1:-1)),c.disabled=a.map(a.grep(c.disabled,function(a,c){return a!=b}),function(a,c){return a>=b?--a:a}),this._tabify(),this._trigger("remove",null,this._ui(d.find("a")[0],e[0])),this},enable:function(b){b=this._getIndex(b);var c=this.options;if(a.inArray(b,c.disabled)==-1)return;return this.lis.eq(b).removeClass("ui-state-disabled"),c.disabled=a.grep(c.disabled,function(a,c){return a!=b}),this._trigger("enable",null,this._ui(this.anchors[b],this.panels[b])),this},disable:function(a){a=this._getIndex(a);var b=this,c=this.options;return a!=c.selected&&(this.lis.eq(a).addClass("ui-state-disabled"),c.disabled.push(a),c.disabled.sort(),this._trigger("disable",null,this._ui(this.anchors[a],this.panels[a]))),this},select:function(a){a=this._getIndex(a);if(a==-1)if(this.options.collapsible&&this.options.selected!=-1)a=this.options.selected;else return this;return this.anchors.eq(a).trigger(this.options.event+".tabs"),this},load:function(b){b=this._getIndex(b);var c=this,d=this.options,e=this.anchors.eq(b)[0],f=a.data(e,"load.tabs");this.abort();if(!f||this.element.queue("tabs").length!==0&&a.data(e,"cache.tabs")){this.element.dequeue("tabs");return}this.lis.eq(b).addClass("ui-state-processing");if(d.spinner){var g=a("span",e);g.data("label.tabs",g.html()).html(d.spinner)}return this.xhr=a.ajax(a.extend({},d.ajaxOptions,{url:f,success:function(f,g){c.element.find(c._sanitizeSelector(e.hash)).html(f),c._cleanup(),d.cache&&a.data(e,"cache.tabs",!0),c._trigger("load",null,c._ui(c.anchors[b],c.panels[b]));try{d.ajaxOptions.success(f,g)}catch(h){}},error:function(a,f,g){c._cleanup(),c._trigger("load",null,c._ui(c.anchors[b],c.panels[b]));try{d.ajaxOptions.error(a,f,b,e)}catch(g){}}})),c.element.dequeue("tabs"),this},abort:function(){return this.element.queue([]),this.panels.stop(!1,!0),this.element.queue("tabs",this.element.queue("tabs").splice(-2,2)),this.xhr&&(this.xhr.abort(),delete this.xhr),this._cleanup(),this},url:function(a,b){return this.anchors.eq(a).removeData("cache.tabs").data("load.tabs",b),this},length:function(){return this.anchors.length}}),a.extend(a.ui.tabs,{version:"1.8.23"}),a.extend(a.ui.tabs.prototype,{rotation:null,rotate:function(a,b){var c=this,d=this.options,e=c._rotate||(c._rotate=function(b){clearTimeout(c.rotation),c.rotation=setTimeout(function(){var a=d.selected;c.select(++a<c.anchors.length?a:0)},a),b&&b.stopPropagation()}),f=c._unrotate||(c._unrotate=b?function(a){e()}:function(a){a.clientX&&c.rotate(null)});return a?(this.element.bind("tabsshow",e),this.anchors.bind(d.event+".tabs",f),e()):(clearTimeout(c.rotation),this.element.unbind("tabsshow",e),this.anchors.unbind(d.event+".tabs",f),delete this._rotate,delete this._unrotate),this}})})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.datepicker.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function($,undefined){function Datepicker(){this.debug=!1,this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},$.extend(this._defaults,this.regional[""]),this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function bindHover(a){var b="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return a.bind("mouseout",function(a){var c=$(a.target).closest(b);if(!c.length)return;c.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")}).bind("mouseover",function(c){var d=$(c.target).closest(b);if($.datepicker._isDisabledDatepicker(instActive.inline?a.parent()[0]:instActive.input[0])||!d.length)return;d.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),d.addClass("ui-state-hover"),d.hasClass("ui-datepicker-prev")&&d.addClass("ui-datepicker-prev-hover"),d.hasClass("ui-datepicker-next")&&d.addClass("ui-datepicker-next-hover")})}function extendRemove(a,b){$.extend(a,b);for(var c in b)if(b[c]==null||b[c]==undefined)a[c]=b[c];return a}function isArray(a){return a&&($.browser.safari&&typeof a=="object"&&a.length||a.constructor&&a.constructor.toString().match(/\Array\(\)/))}$.extend($.ui,{datepicker:{version:"1.8.23"}});var PROP_NAME="datepicker",dpuuid=(new Date).getTime(),instActive;$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){return extendRemove(this._defaults,a||{}),this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase(),inline=nodeName=="div"||nodeName=="span";target.id||(this.uuid+=1,target.id="dp"+this.uuid);var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{}),nodeName=="input"?this._connectDatepicker(target,inst):inline&&this._inlineDatepicker(target,inst)},_newInst:function(a,b){var c=a[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:c,input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:b?bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')):this.dpDiv}},_connectDatepicker:function(a,b){var c=$(a);b.append=$([]),b.trigger=$([]);if(c.hasClass(this.markerClassName))return;this._attachments(c,b),c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),this._autoSize(b),$.data(a,PROP_NAME,b),b.settings.disabled&&this._disableDatepicker(a)},_attachments:function(a,b){var c=this._get(b,"appendText"),d=this._get(b,"isRTL");b.append&&b.append.remove(),c&&(b.append=$('<span class="'+this._appendClass+'">'+c+"</span>"),a[d?"before":"after"](b.append)),a.unbind("focus",this._showDatepicker),b.trigger&&b.trigger.remove();var e=this._get(b,"showOn");(e=="focus"||e=="both")&&a.focus(this._showDatepicker);if(e=="button"||e=="both"){var f=this._get(b,"buttonText"),g=this._get(b,"buttonImage");b.trigger=$(this._get(b,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:g,alt:f,title:f}):$('<button type="button"></button>').addClass(this._triggerClass).html(g==""?f:$("<img/>").attr({src:g,alt:f,title:f}))),a[d?"before":"after"](b.trigger),b.trigger.click(function(){return $.datepicker._datepickerShowing&&$.datepicker._lastInput==a[0]?$.datepicker._hideDatepicker():$.datepicker._datepickerShowing&&$.datepicker._lastInput!=a[0]?($.datepicker._hideDatepicker(),$.datepicker._showDatepicker(a[0])):$.datepicker._showDatepicker(a[0]),!1})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var d=function(a){var b=0,c=0;for(var d=0;d<a.length;d++)a[d].length>b&&(b=a[d].length,c=d);return c};b.setMonth(d(this._get(a,c.match(/MM/)?"monthNames":"monthNamesShort"))),b.setDate(d(this._get(a,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())}a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,b){var c=$(a);if(c.hasClass(this.markerClassName))return;c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),$.data(a,PROP_NAME,b),this._setDate(b,this._getDefaultDate(b),!0),this._updateDatepicker(b),this._updateAlternate(b),b.settings.disabled&&this._disableDatepicker(a),b.dpDiv.css("display","block")},_dialogDatepicker:function(a,b,c,d,e){var f=this._dialogInst;if(!f){this.uuid+=1;var g="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+g+'" style="position: absolute; top: -100px; width: 0px;"/>'),this._dialogInput.keydown(this._doKeyDown),$("body").append(this._dialogInput),f=this._dialogInst=this._newInst(this._dialogInput,!1),f.settings={},$.data(this._dialogInput[0],PROP_NAME,f)}extendRemove(f.settings,d||{}),b=b&&b.constructor==Date?this._formatDate(f,b):b,this._dialogInput.val(b),this._pos=e?e.length?e:[e.pageX,e.pageY]:null;if(!this._pos){var h=document.documentElement.clientWidth,i=document.documentElement.clientHeight,j=document.documentElement.scrollLeft||document.body.scrollLeft,k=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[h/2-100+j,i/2-150+k]}return this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),f.settings.onSelect=c,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),$.blockUI&&$.blockUI(this.dpDiv),$.data(this._dialogInput[0],PROP_NAME,f),this},_destroyDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();$.removeData(a,PROP_NAME),d=="input"?(c.append.remove(),c.trigger.remove(),b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):(d=="div"||d=="span")&&b.removeClass(this.markerClassName).empty()},_enableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!1,c.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().removeClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b})},_disableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!0,c.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().addClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b}),this._disabledInputs[this._disabledInputs.length]=a},_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return!0;return!1},_getInst:function(a){try{return $.data(a,PROP_NAME)}catch(b){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(a,b,c){var d=this._getInst(a);if(arguments.length==2&&typeof b=="string")return b=="defaults"?$.extend({},$.datepicker._defaults):d?b=="all"?$.extend({},d.settings):this._get(d,b):null;var e=b||{};typeof b=="string"&&(e={},e[b]=c);if(d){this._curInst==d&&this._hideDatepicker();var f=this._getDateDatepicker(a,!0),g=this._getMinMaxDate(d,"min"),h=this._getMinMaxDate(d,"max");extendRemove(d.settings,e),g!==null&&e.dateFormat!==undefined&&e.minDate===undefined&&(d.settings.minDate=this._formatDate(d,g)),h!==null&&e.dateFormat!==undefined&&e.maxDate===undefined&&(d.settings.maxDate=this._formatDate(d,h)),this._attachments($(a),d),this._autoSize(d),this._setDate(d,f),this._updateAlternate(d),this._updateDatepicker(d)}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){var b=this._getInst(a);b&&this._updateDatepicker(b)},_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},_getDateDatepicker:function(a,b){var c=this._getInst(a);return c&&!c.inline&&this._setDateFromField(c,b),c?this._getDate(c):null},_doKeyDown:function(a){var b=$.datepicker._getInst(a.target),c=!0,d=b.dpDiv.is(".ui-datepicker-rtl");b._keyEvent=!0;if($.datepicker._datepickerShowing)switch(a.keyCode){case 9:$.datepicker._hideDatepicker(),c=!1;break;case 13:var e=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",b.dpDiv);e[0]&&$.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,e[0]);var f=$.datepicker._get(b,"onSelect");if(f){var g=$.datepicker._formatDate(b);f.apply(b.input?b.input[0]:null,[g,b])}else $.datepicker._hideDatepicker();return!1;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 34:$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 35:(a.ctrlKey||a.metaKey)&&$.datepicker._clearDate(a.target),c=a.ctrlKey||a.metaKey;break;case 36:(a.ctrlKey||a.metaKey)&&$.datepicker._gotoToday(a.target),c=a.ctrlKey||a.metaKey;break;case 37:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?1:-1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 38:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,-7,"D"),c=a.ctrlKey||a.metaKey;break;case 39:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?-1:1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 40:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,7,"D"),c=a.ctrlKey||a.metaKey;break;default:c=!1}else a.keyCode==36&&a.ctrlKey?$.datepicker._showDatepicker(this):c=!1;c&&(a.preventDefault(),a.stopPropagation())},_doKeyPress:function(a){var b=$.datepicker._getInst(a.target);if($.datepicker._get(b,"constrainInput")){var c=$.datepicker._possibleChars($.datepicker._get(b,"dateFormat")),d=String.fromCharCode(a.charCode==undefined?a.keyCode:a.charCode);return a.ctrlKey||a.metaKey||d<" "||!c||c.indexOf(d)>-1}},_doKeyUp:function(a){var b=$.datepicker._getInst(a.target);if(b.input.val()!=b.lastVal)try{var c=$.datepicker.parseDate($.datepicker._get(b,"dateFormat"),b.input?b.input.val():null,$.datepicker._getFormatConfig(b));c&&($.datepicker._setDateFromField(b),$.datepicker._updateAlternate(b),$.datepicker._updateDatepicker(b))}catch(d){$.datepicker.log(d)}return!0},_showDatepicker:function(a){a=a.target||a,a.nodeName.toLowerCase()!="input"&&(a=$("input",a.parentNode)[0]);if($.datepicker._isDisabledDatepicker(a)||$.datepicker._lastInput==a)return;var b=$.datepicker._getInst(a);$.datepicker._curInst&&$.datepicker._curInst!=b&&($.datepicker._curInst.dpDiv.stop(!0,!0),b&&$.datepicker._datepickerShowing&&$.datepicker._hideDatepicker($.datepicker._curInst.input[0]));var c=$.datepicker._get(b,"beforeShow"),d=c?c.apply(a,[a,b]):{};if(d===!1)return;extendRemove(b.settings,d),b.lastVal=null,$.datepicker._lastInput=a,$.datepicker._setDateFromField(b),$.datepicker._inDialog&&(a.value=""),$.datepicker._pos||($.datepicker._pos=$.datepicker._findPos(a),$.datepicker._pos[1]+=a.offsetHeight);var e=!1;$(a).parents().each(function(){return e|=$(this).css("position")=="fixed",!e}),e&&$.browser.opera&&($.datepicker._pos[0]-=document.documentElement.scrollLeft,$.datepicker._pos[1]-=document.documentElement.scrollTop);var f={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null,b.dpDiv.empty(),b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),$.datepicker._updateDatepicker(b),f=$.datepicker._checkOffset(b,f,e),b.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":e?"fixed":"absolute",display:"none",left:f.left+"px",top:f.top+"px"});if(!b.inline){var g=$.datepicker._get(b,"showAnim"),h=$.datepicker._get(b,"duration"),i=function(){var a=b.dpDiv.find("iframe.ui-datepicker-cover");if(!!a.length){var c=$.datepicker._getBorders(b.dpDiv);a.css({left:-c[0],top:-c[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})}};b.dpDiv.zIndex($(a).zIndex()+1),$.datepicker._datepickerShowing=!0,$.effects&&$.effects[g]?b.dpDiv.show(g,$.datepicker._get(b,"showOptions"),h,i):b.dpDiv[g||"show"](g?h:null,i),(!g||!h)&&i(),b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus(),$.datepicker._curInst=b}},_updateDatepicker:function(a){var b=this;b.maxRows=4;var c=$.datepicker._getBorders(a.dpDiv);instActive=a,a.dpDiv.empty().append(this._generateHTML(a)),this._attachHandlers(a);var d=a.dpDiv.find("iframe.ui-datepicker-cover");!d.length||d.css({left:-c[0],top:-c[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()}),a.dpDiv.find("."+this._dayOverClass+" a").mouseover();var e=this._getNumberOfMonths(a),f=e[1],g=17;a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),f>1&&a.dpDiv.addClass("ui-datepicker-multi-"+f).css("width",g*f+"em"),a.dpDiv[(e[0]!=1||e[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi"),a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),a==$.datepicker._curInst&&$.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&a.input[0]!=document.activeElement&&a.input.focus();if(a.yearshtml){var h=a.yearshtml;setTimeout(function(){h===a.yearshtml&&a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml),h=a.yearshtml=null},0)}},_getBorders:function(a){var b=function(a){return{thin:1,medium:2,thick:3}[a]||a};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},_checkOffset:function(a,b,c){var d=a.dpDiv.outerWidth(),e=a.dpDiv.outerHeight(),f=a.input?a.input.outerWidth():0,g=a.input?a.input.outerHeight():0,h=document.documentElement.clientWidth+(c?0:$(document).scrollLeft()),i=document.documentElement.clientHeight+(c?0:$(document).scrollTop());return b.left-=this._get(a,"isRTL")?d-f:0,b.left-=c&&b.left==a.input.offset().left?$(document).scrollLeft():0,b.top-=c&&b.top==a.input.offset().top+g?$(document).scrollTop():0,b.left-=Math.min(b.left,b.left+d>h&&h>d?Math.abs(b.left+d-h):0),b.top-=Math.min(b.top,b.top+e>i&&i>e?Math.abs(e+g):0),b},_findPos:function(a){var b=this._getInst(a),c=this._get(b,"isRTL");while(a&&(a.type=="hidden"||a.nodeType!=1||$.expr.filters.hidden(a)))a=a[c?"previousSibling":"nextSibling"];var d=$(a).offset();return[d.left,d.top]},_hideDatepicker:function(a){var b=this._curInst;if(!b||a&&b!=$.data(a,PROP_NAME))return;if(this._datepickerShowing){var c=this._get(b,"showAnim"),d=this._get(b,"duration"),e=function(){$.datepicker._tidyDialog(b)};$.effects&&$.effects[c]?b.dpDiv.hide(c,$.datepicker._get(b,"showOptions"),d,e):b.dpDiv[c=="slideDown"?"slideUp":c=="fadeIn"?"fadeOut":"hide"](c?d:null,e),c||e(),this._datepickerShowing=!1;var f=this._get(b,"onClose");f&&f.apply(b.input?b.input[0]:null,[b.input?b.input.val():"",b]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),$.blockUI&&($.unblockUI(),$("body").append(this.dpDiv))),this._inDialog=!1}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(a){if(!$.datepicker._curInst)return;var b=$(a.target),c=$.datepicker._getInst(b[0]);(b[0].id!=$.datepicker._mainDivId&&b.parents("#"+$.datepicker._mainDivId).length==0&&!b.hasClass($.datepicker.markerClassName)&&!b.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&(!$.datepicker._inDialog||!$.blockUI)||b.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=c)&&$.datepicker._hideDatepicker()},_adjustDate:function(a,b,c){var d=$(a),e=this._getInst(d[0]);if(this._isDisabledDatepicker(d[0]))return;this._adjustInstDate(e,b+(c=="M"?this._get(e,"showCurrentAtPos"):0),c),this._updateDatepicker(e)},_gotoToday:function(a){var b=$(a),c=this._getInst(b[0]);if(this._get(c,"gotoCurrent")&&c.currentDay)c.selectedDay=c.currentDay,c.drawMonth=c.selectedMonth=c.currentMonth,c.drawYear=c.selectedYear=c.currentYear;else{var d=new Date;c.selectedDay=d.getDate(),c.drawMonth=c.selectedMonth=d.getMonth(),c.drawYear=c.selectedYear=d.getFullYear()}this._notifyChange(c),this._adjustDate(b)},_selectMonthYear:function(a,b,c){var d=$(a),e=this._getInst(d[0]);e["selected"+(c=="M"?"Month":"Year")]=e["draw"+(c=="M"?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10),this._notifyChange(e),this._adjustDate(d)},_selectDay:function(a,b,c,d){var e=$(a);if($(d).hasClass(this._unselectableClass)||this._isDisabledDatepicker(e[0]))return;var f=this._getInst(e[0]);f.selectedDay=f.currentDay=$("a",d).html(),f.selectedMonth=f.currentMonth=b,f.selectedYear=f.currentYear=c,this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))},_clearDate:function(a){var b=$(a),c=this._getInst(b[0]);this._selectDate(b,"")},_selectDate:function(a,b){var c=$(a),d=this._getInst(c[0]);b=b!=null?b:this._formatDate(d),d.input&&d.input.val(b),this._updateAlternate(d);var e=this._get(d,"onSelect");e?e.apply(d.input?d.input[0]:null,[b,d]):d.input&&d.input.trigger("change"),d.inline?this._updateDatepicker(d):(this._hideDatepicker(),this._lastInput=d.input[0],typeof d.input[0]!="object"&&d.input.focus(),this._lastInput=null)},_updateAlternate:function(a){var b=this._get(a,"altField");if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),d=this._getDate(a),e=this.formatDate(c,d,this._getFormatConfig(a));$(b).each(function(){$(this).val(e)})}},noWeekends:function(a){var b=a.getDay();return[b>0&&b<6,""]},iso8601Week:function(a){var b=new Date(a.getTime());b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1},parseDate:function(a,b,c){if(a==null||b==null)throw"Invalid arguments";b=typeof b=="object"?b.toString():b+"";if(b=="")return null;var d=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff;d=typeof d!="string"?d:(new Date).getFullYear()%100+parseInt(d,10);var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,g=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,h=(c?c.monthNames:null)||this._defaults.monthNames,i=-1,j=-1,k=-1,l=-1,m=!1,n=function(b){var c=s+1<a.length&&a.charAt(s+1)==b;return c&&s++,c},o=function(a){var c=n(a),d=a=="@"?14:a=="!"?20:a=="y"&&c?4:a=="o"?3:2,e=new RegExp("^\\d{1,"+d+"}"),f=b.substring(r).match(e);if(!f)throw"Missing number at position "+r;return r+=f[0].length,parseInt(f[0],10)},p=function(a,c,d){var e=$.map(n(a)?d:c,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)}),f=-1;$.each(e,function(a,c){var d=c[1];if(b.substr(r,d.length).toLowerCase()==d.toLowerCase())return f=c[0],r+=d.length,!1});if(f!=-1)return f+1;throw"Unknown name at position "+r},q=function(){if(b.charAt(r)!=a.charAt(s))throw"Unexpected literal at position "+r;r++},r=0;for(var s=0;s<a.length;s++)if(m)a.charAt(s)=="'"&&!n("'")?m=!1:q();else switch(a.charAt(s)){case"d":k=o("d");break;case"D":p("D",e,f);break;case"o":l=o("o");break;case"m":j=o("m");break;case"M":j=p("M",g,h);break;case"y":i=o("y");break;case"@":var t=new Date(o("@"));i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"!":var t=new Date((o("!")-this._ticksTo1970)/1e4);i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"'":n("'")?q():m=!0;break;default:q()}if(r<b.length)throw"Extra/unparsed characters found in date: "+b.substring(r);i==-1?i=(new Date).getFullYear():i<100&&(i+=(new Date).getFullYear()-(new Date).getFullYear()%100+(i<=d?0:-100));if(l>-1){j=1,k=l;do{var u=this._getDaysInMonth(i,j-1);if(k<=u)break;j++,k-=u}while(!0)}var t=this._daylightSavingAdjust(new Date(i,j-1,k));if(t.getFullYear()!=i||t.getMonth()+1!=j||t.getDate()!=k)throw"Invalid date";return t},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1e7,formatDate:function(a,b,c){if(!b)return"";var d=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,e=(c?c.dayNames:null)||this._defaults.dayNames,f=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?c.monthNames:null)||this._defaults.monthNames,h=function(b){var c=m+1<a.length&&a.charAt(m+1)==b;return c&&m++,c},i=function(a,b,c){var d=""+b;if(h(a))while(d.length<c)d="0"+d;return d},j=function(a,b,c,d){return h(a)?d[b]:c[b]},k="",l=!1;if(b)for(var m=0;m<a.length;m++)if(l)a.charAt(m)=="'"&&!h("'")?l=!1:k+=a.charAt(m);else switch(a.charAt(m)){case"d":k+=i("d",b.getDate(),2);break;case"D":k+=j("D",b.getDay(),d,e);break;case"o":k+=i("o",Math.round(((new Date(b.getFullYear(),b.getMonth(),b.getDate())).getTime()-(new Date(b.getFullYear(),0,0)).getTime())/864e5),3);break;case"m":k+=i("m",b.getMonth()+1,2);break;case"M":k+=j("M",b.getMonth(),f,g);break;case"y":k+=h("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case"@":k+=b.getTime();break;case"!":k+=b.getTime()*1e4+this._ticksTo1970;break;case"'":h("'")?k+="'":l=!0;break;default:k+=a.charAt(m)}return k},_possibleChars:function(a){var b="",c=!1,d=function(b){var c=e+1<a.length&&a.charAt(e+1)==b;return c&&e++,c};for(var e=0;e<a.length;e++)if(c)a.charAt(e)=="'"&&!d("'")?c=!1:b+=a.charAt(e);else switch(a.charAt(e)){case"d":case"m":case"y":case"@":b+="0123456789";break;case"D":case"M":return null;case"'":d("'")?b+="'":c=!0;break;default:b+=a.charAt(e)}return b},_get:function(a,b){return a.settings[b]!==undefined?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()==a.lastVal)return;var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,e,f;e=f=this._getDefaultDate(a);var g=this._getFormatConfig(a);try{e=this.parseDate(c,d,g)||f}catch(h){this.log(h),d=b?"":d}a.selectedDay=e.getDate(),a.drawMonth=a.selectedMonth=e.getMonth(),a.drawYear=a.selectedYear=e.getFullYear(),a.currentDay=d?e.getDate():0,a.currentMonth=d?e.getMonth():0,a.currentYear=d?e.getFullYear():0,this._adjustInstDate(a)},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){var d=function(a){var b=new Date;return b.setDate(b.getDate()+a),b},e=function(b){try{return $.datepicker.parseDate($.datepicker._get(a,"dateFormat"),b,$.datepicker._getFormatConfig(a))}catch(c){}var d=(b.toLowerCase().match(/^c/)?$.datepicker._getDate(a):null)||new Date,e=d.getFullYear(),f=d.getMonth(),g=d.getDate(),h=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,i=h.exec(b);while(i){switch(i[2]||"d"){case"d":case"D":g+=parseInt(i[1],10);break;case"w":case"W":g+=parseInt(i[1],10)*7;break;case"m":case"M":f+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f));break;case"y":case"Y":e+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f))}i=h.exec(b)}return new Date(e,f,g)},f=b==null||b===""?c:typeof b=="string"?e(b):typeof b=="number"?isNaN(b)?c:d(b):new Date(b.getTime());return f=f&&f.toString()=="Invalid Date"?c:f,f&&(f.setHours(0),f.setMinutes(0),f.setSeconds(0),f.setMilliseconds(0)),this._daylightSavingAdjust(f)},_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null},_setDate:function(a,b,c){var d=!b,e=a.selectedMonth,f=a.selectedYear,g=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=g.getDate(),a.drawMonth=a.selectedMonth=a.currentMonth=g.getMonth(),a.drawYear=a.selectedYear=a.currentYear=g.getFullYear(),(e!=a.selectedMonth||f!=a.selectedYear)&&!c&&this._notifyChange(a),this._adjustInstDate(a),a.input&&a.input.val(d?"":this._formatDate(a))},_getDate:function(a){var b=!a.currentYear||a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return b},_attachHandlers:function(a){var b=this._get(a,"stepMonths"),c="#"+a.id.replace(/\\\\/g,"\\");a.dpDiv.find("[data-handler]").map(function(){var a={prev:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(c,-b,"M")},next:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(c,+b,"M")},hide:function(){window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+dpuuid].datepicker._gotoToday(c)},selectDay:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectDay(c,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(c,this,"M"),!1},selectYear:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(c,this,"Y"),!1}};$(this).bind(this.getAttribute("data-event"),a[this.getAttribute("data-handler")])})},_generateHTML:function(a){var b=new Date;b=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate()));var c=this._get(a,"isRTL"),d=this._get(a,"showButtonPanel"),e=this._get(a,"hideIfNoPrevNext"),f=this._get(a,"navigationAsDateFormat"),g=this._getNumberOfMonths(a),h=this._get(a,"showCurrentAtPos"),i=this._get(a,"stepMonths"),j=g[0]!=1||g[1]!=1,k=this._daylightSavingAdjust(a.currentDay?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(9999,9,9)),l=this._getMinMaxDate(a,"min"),m=this._getMinMaxDate(a,"max"),n=a.drawMonth-h,o=a.drawYear;n<0&&(n+=12,o--);if(m){var p=this._daylightSavingAdjust(new Date(m.getFullYear(),m.getMonth()-g[0]*g[1]+1,m.getDate()));p=l&&p<l?l:p;while(this._daylightSavingAdjust(new Date(o,n,1))>p)n--,n<0&&(n=11,o--)}a.drawMonth=n,a.drawYear=o;var q=this._get(a,"prevText");q=f?this.formatDate(q,this._daylightSavingAdjust(new Date(o,n-i,1)),this._getFormatConfig(a)):q;var r=this._canAdjustMonth(a,-1,o,n)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>":e?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>",s=this._get(a,"nextText");s=f?this.formatDate(s,this._daylightSavingAdjust(new Date(o,n+i,1)),this._getFormatConfig(a)):s;var t=this._canAdjustMonth(a,1,o,n)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>":e?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>",u=this._get(a,"currentText"),v=this._get(a,"gotoCurrent")&&a.currentDay?k:b;u=f?this.formatDate(u,v,this._getFormatConfig(a)):u;var w=a.inline?"":'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(a,"closeText")+"</button>",x=d?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?w:"")+(this._isInRange(a,v)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+u+"</button>":"")+(c?"":w)+"</div>":"",y=parseInt(this._get(a,"firstDay"),10);y=isNaN(y)?0:y;var z=this._get(a,"showWeek"),A=this._get(a,"dayNames"),B=this._get(a,"dayNamesShort"),C=this._get(a,"dayNamesMin"),D=this._get(a,"monthNames"),E=this._get(a,"monthNamesShort"),F=this._get(a,"beforeShowDay"),G=this._get(a,"showOtherMonths"),H=this._get(a,"selectOtherMonths"),I=this._get(a,"calculateWeek")||this.iso8601Week,J=this._getDefaultDate(a),K="";for(var L=0;L<g[0];L++){var M="";this.maxRows=4;for(var N=0;N<g[1];N++){var O=this._daylightSavingAdjust(new Date(o,n,a.selectedDay)),P=" ui-corner-all",Q="";if(j){Q+='<div class="ui-datepicker-group';if(g[1]>1)switch(N){case 0:Q+=" ui-datepicker-group-first",P=" ui-corner-"+(c?"right":"left");break;case g[1]-1:Q+=" ui-datepicker-group-last",P=" ui-corner-"+(c?"left":"right");break;default:Q+=" ui-datepicker-group-middle",P=""}Q+='">'}Q+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+P+'">'+(/all|left/.test(P)&&L==0?c?t:r:"")+(/all|right/.test(P)&&L==0?c?r:t:"")+this._generateMonthYearHeader(a,n,o,l,m,L>0||N>0,D,E)+'</div><table class="ui-datepicker-calendar"><thead>'+"<tr>";var R=z?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";for(var S=0;S<7;S++){var T=(S+y)%7;R+="<th"+((S+y+6)%7>=5?' class="ui-datepicker-week-end"':"")+">"+'<span title="'+A[T]+'">'+C[T]+"</span></th>"}Q+=R+"</tr></thead><tbody>";var U=this._getDaysInMonth(o,n);o==a.selectedYear&&n==a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,U));var V=(this._getFirstDayOfMonth(o,n)-y+7)%7,W=Math.ceil((V+U)/7),X=j?this.maxRows>W?this.maxRows:W:W;this.maxRows=X;var Y=this._daylightSavingAdjust(new Date(o,n,1-V));for(var Z=0;Z<X;Z++){Q+="<tr>";var _=z?'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(Y)+"</td>":"";for(var S=0;S<7;S++){var ba=F?F.apply(a.input?a.input[0]:null,[Y]):[!0,""],bb=Y.getMonth()!=n,bc=bb&&!H||!ba[0]||l&&Y<l||m&&Y>m;_+='<td class="'+((S+y+6)%7>=5?" ui-datepicker-week-end":"")+(bb?" ui-datepicker-other-month":"")+(Y.getTime()==O.getTime()&&n==a.selectedMonth&&a._keyEvent||J.getTime()==Y.getTime()&&J.getTime()==O.getTime()?" "+this._dayOverClass:"")+(bc?" "+this._unselectableClass+" ui-state-disabled":"")+(bb&&!G?"":" "+ba[1]+(Y.getTime()==k.getTime()?" "+this._currentClass:"")+(Y.getTime()==b.getTime()?" ui-datepicker-today":""))+'"'+((!bb||G)&&ba[2]?' title="'+ba[2]+'"':"")+(bc?"":' data-handler="selectDay" data-event="click" data-month="'+Y.getMonth()+'" data-year="'+Y.getFullYear()+'"')+">"+(bb&&!G?"&#xa0;":bc?'<span class="ui-state-default">'+Y.getDate()+"</span>":'<a class="ui-state-default'+(Y.getTime()==b.getTime()?" ui-state-highlight":"")+(Y.getTime()==k.getTime()?" ui-state-active":"")+(bb?" ui-priority-secondary":"")+'" href="#">'+Y.getDate()+"</a>")+"</td>",Y.setDate(Y.getDate()+1),Y=this._daylightSavingAdjust(Y)}Q+=_+"</tr>"}n++,n>11&&(n=0,o++),Q+="</tbody></table>"+(j?"</div>"+(g[0]>0&&N==g[1]-1?'<div class="ui-datepicker-row-break"></div>':""):""),M+=Q}K+=M}return K+=x+($.browser.msie&&parseInt($.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':""),a._keyEvent=!1,K},_generateMonthYearHeader:function(a,b,c,d,e,f,g,h){var i=this._get(a,"changeMonth"),j=this._get(a,"changeYear"),k=this._get(a,"showMonthAfterYear"),l='<div class="ui-datepicker-title">',m="";if(f||!i)m+='<span class="ui-datepicker-month">'+g[b]+"</span>";else{var n=d&&d.getFullYear()==c,o=e&&e.getFullYear()==c;m+='<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';for(var p=0;p<12;p++)(!n||p>=d.getMonth())&&(!o||p<=e.getMonth())&&(m+='<option value="'+p+'"'+(p==b?' selected="selected"':"")+">"+h[p]+"</option>");m+="</select>"}k||(l+=m+(f||!i||!j?"&#xa0;":""));if(!a.yearshtml){a.yearshtml="";if(f||!j)l+='<span class="ui-datepicker-year">'+c+"</span>";else{var q=this._get(a,"yearRange").split(":"),r=(new Date).getFullYear(),s=function(a){var b=a.match(/c[+-].*/)?c+parseInt(a.substring(1),10):a.match(/[+-].*/)?r+parseInt(a,10):parseInt(a,10);return isNaN(b)?r:b},t=s(q[0]),u=Math.max(t,s(q[1]||""));t=d?Math.max(t,d.getFullYear()):t,u=e?Math.min(u,e.getFullYear()):u,a.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';for(;t<=u;t++)a.yearshtml+='<option value="'+t+'"'+(t==c?' selected="selected"':"")+">"+t+"</option>";a.yearshtml+="</select>",l+=a.yearshtml,a.yearshtml=null}}return l+=this._get(a,"yearSuffix"),k&&(l+=(f||!i||!j?"&#xa0;":"")+m),l+="</div>",l},_adjustInstDate:function(a,b,c){var d=a.drawYear+(c=="Y"?b:0),e=a.drawMonth+(c=="M"?b:0),f=Math.min(a.selectedDay,this._getDaysInMonth(d,e))+(c=="D"?b:0),g=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(d,e,f)));a.selectedDay=g.getDate(),a.drawMonth=a.selectedMonth=g.getMonth(),a.drawYear=a.selectedYear=g.getFullYear(),(c=="M"||c=="Y")&&this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),e=c&&b<c?c:b;return e=d&&e>d?d:e,e},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");return b==null?[1,1]:typeof b=="number"?[1,b]:b},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,d){var e=this._getNumberOfMonths(a),f=this._daylightSavingAdjust(new Date(c,d+(b<0?b:e[0]*e[1]),1));return b<0&&f.setDate(this._getDaysInMonth(f.getFullYear(),f.getMonth())),this._isInRange(a,f)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!d||b.getTime()<=d.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");return b=typeof b!="string"?b:(new Date).getFullYear()%100+parseInt(b,10),{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);var e=b?typeof b=="object"?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),e,this._getFormatConfig(a))}}),$.fn.datepicker=function(a){if(!this.length)return this;$.datepicker.initialized||($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv),$.datepicker.initialized=!0);var b=Array.prototype.slice.call(arguments,1);return typeof a!="string"||a!="isDisabled"&&a!="getDate"&&a!="widget"?a=="option"&&arguments.length==2&&typeof arguments[1]=="string"?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b)):this.each(function(){typeof a=="string"?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this].concat(b)):$.datepicker._attachDatepicker(this,a)}):$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b))},$.datepicker=new Datepicker,$.datepicker.initialized=!1,$.datepicker.uuid=(new Date).getTime(),$.datepicker.version="1.8.23",window["DP_jQuery_"+dpuuid]=$})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.progressbar.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()}),this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this.oldValue=this._value(),this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove(),a.Widget.prototype.destroy.apply(this,arguments)},value:function(a){return a===b?this._value():(this._setOption("value",a),this)},_setOption:function(b,c){b==="value"&&(this.options.value=c,this._refreshValue(),this._value()===this.options.max&&this._trigger("complete")),a.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var a=this.options.value;return typeof a!="number"&&(a=0),Math.min(this.options.max,Math.max(this.min,a))},_percentage:function(){return 100*this._value()/this.options.max},_refreshValue:function(){var a=this.value(),b=this._percentage();this.oldValue!==a&&(this.oldValue=a,this._trigger("change")),this.valueDiv.toggle(a>this.min).toggleClass("ui-corner-right",a===this.options.max).width(b.toFixed(0)+"%"),this.element.attr("aria-valuenow",a)}}),a.extend(a.ui.progressbar,{version:"1.8.23"})})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
jQuery.effects||function(a,b){function c(b){var c;return b&&b.constructor==Array&&b.length==3?b:(c=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b))?[parseInt(c[1],10),parseInt(c[2],10),parseInt(c[3],10)]:(c=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b))?[parseFloat(c[1])*2.55,parseFloat(c[2])*2.55,parseFloat(c[3])*2.55]:(c=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b))?[parseInt(c[1],16),parseInt(c[2],16),parseInt(c[3],16)]:(c=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b))?[parseInt(c[1]+c[1],16),parseInt(c[2]+c[2],16),parseInt(c[3]+c[3],16)]:(c=/rgba\(0, 0, 0, 0\)/.exec(b))?e.transparent:e[a.trim(b).toLowerCase()]}function d(b,d){var e;do{e=(a.curCSS||a.css)(b,d);if(e!=""&&e!="transparent"||a.nodeName(b,"body"))break;d="backgroundColor"}while(b=b.parentNode);return c(e)}function h(){var a=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,b={},c,d;if(a&&a.length&&a[0]&&a[a[0]]){var e=a.length;while(e--)c=a[e],typeof a[c]=="string"&&(d=c.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),b[d]=a[c])}else for(c in a)typeof a[c]=="string"&&(b[c]=a[c]);return b}function i(b){var c,d;for(c in b)d=b[c],(d==null||a.isFunction(d)||c in g||/scrollbar/.test(c)||!/color/i.test(c)&&isNaN(parseFloat(d)))&&delete b[c];return b}function j(a,b){var c={_:0},d;for(d in b)a[d]!=b[d]&&(c[d]=b[d]);return c}function k(b,c,d,e){typeof b=="object"&&(e=c,d=null,c=b,b=c.effect),a.isFunction(c)&&(e=c,d=null,c={});if(typeof c=="number"||a.fx.speeds[c])e=d,d=c,c={};return a.isFunction(d)&&(e=d,d=null),c=c||{},d=d||c.duration,d=a.fx.off?0:typeof d=="number"?d:d in a.fx.speeds?a.fx.speeds[d]:a.fx.speeds._default,e=e||c.complete,[b,c,d,e]}function l(b){return!b||typeof b=="number"||a.fx.speeds[b]?!0:typeof b=="string"&&!a.effects[b]?!0:!1}a.effects={},a.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(b,e){a.fx.step[e]=function(a){a.colorInit||(a.start=d(a.elem,e),a.end=c(a.end),a.colorInit=!0),a.elem.style[e]="rgb("+Math.max(Math.min(parseInt(a.pos*(a.end[0]-a.start[0])+a.start[0],10),255),0)+","+Math.max(Math.min(parseInt(a.pos*(a.end[1]-a.start[1])+a.start[1],10),255),0)+","+Math.max(Math.min(parseInt(a.pos*(a.end[2]-a.start[2])+a.start[2],10),255),0)+")"}});var e={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},f=["add","remove","toggle"],g={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.effects.animateClass=function(b,c,d,e){return a.isFunction(d)&&(e=d,d=null),this.queue(function(){var g=a(this),k=g.attr("style")||" ",l=i(h.call(this)),m,n=g.attr("class")||"";a.each(f,function(a,c){b[c]&&g[c+"Class"](b[c])}),m=i(h.call(this)),g.attr("class",n),g.animate(j(l,m),{queue:!1,duration:c,easing:d,complete:function(){a.each(f,function(a,c){b[c]&&g[c+"Class"](b[c])}),typeof g.attr("style")=="object"?(g.attr("style").cssText="",g.attr("style").cssText=k):g.attr("style",k),e&&e.apply(this,arguments),a.dequeue(this)}})})},a.fn.extend({_addClass:a.fn.addClass,addClass:function(b,c,d,e){return c?a.effects.animateClass.apply(this,[{add:b},c,d,e]):this._addClass(b)},_removeClass:a.fn.removeClass,removeClass:function(b,c,d,e){return c?a.effects.animateClass.apply(this,[{remove:b},c,d,e]):this._removeClass(b)},_toggleClass:a.fn.toggleClass,toggleClass:function(c,d,e,f,g){return typeof d=="boolean"||d===b?e?a.effects.animateClass.apply(this,[d?{add:c}:{remove:c},e,f,g]):this._toggleClass(c,d):a.effects.animateClass.apply(this,[{toggle:c},d,e,f])},switchClass:function(b,c,d,e,f){return a.effects.animateClass.apply(this,[{add:c,remove:b},d,e,f])}}),a.extend(a.effects,{version:"1.8.23",save:function(a,b){for(var c=0;c<b.length;c++)b[c]!==null&&a.data("ec.storage."+b[c],a[0].style[b[c]])},restore:function(a,b){for(var c=0;c<b.length;c++)b[c]!==null&&a.css(b[c],a.data("ec.storage."+b[c]))},setMode:function(a,b){return b=="toggle"&&(b=a.is(":hidden")?"show":"hide"),b},getBaseline:function(a,b){var c,d;switch(a[0]){case"top":c=0;break;case"middle":c=.5;break;case"bottom":c=1;break;default:c=a[0]/b.height}switch(a[1]){case"left":d=0;break;case"center":d=.5;break;case"right":d=1;break;default:d=a[1]/b.width}return{x:d,y:c}},createWrapper:function(b){if(b.parent().is(".ui-effects-wrapper"))return b.parent();var c={width:b.outerWidth(!0),height:b.outerHeight(!0),"float":b.css("float")},d=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e=document.activeElement;try{e.id}catch(f){e=document.body}return b.wrap(d),(b[0]===e||a.contains(b[0],e))&&a(e).focus(),d=b.parent(),b.css("position")=="static"?(d.css({position:"relative"}),b.css({position:"relative"})):(a.extend(c,{position:b.css("position"),zIndex:b.css("z-index")}),a.each(["top","left","bottom","right"],function(a,d){c[d]=b.css(d),isNaN(parseInt(c[d],10))&&(c[d]="auto")}),b.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),d.css(c).show()},removeWrapper:function(b){var c,d=document.activeElement;return b.parent().is(".ui-effects-wrapper")?(c=b.parent().replaceWith(b),(b[0]===d||a.contains(b[0],d))&&a(d).focus(),c):b},setTransition:function(b,c,d,e){return e=e||{},a.each(c,function(a,c){var f=b.cssUnit(c);f[0]>0&&(e[c]=f[0]*d+f[1])}),e}}),a.fn.extend({effect:function(b,c,d,e){var f=k.apply(this,arguments),g={options:f[1],duration:f[2],callback:f[3]},h=g.options.mode,i=a.effects[b];return a.fx.off||!i?h?this[h](g.duration,g.callback):this.each(function(){g.callback&&g.callback.call(this)}):i.call(this,g)},_show:a.fn.show,show:function(a){if(l(a))return this._show.apply(this,arguments);var b=k.apply(this,arguments);return b[1].mode="show",this.effect.apply(this,b)},_hide:a.fn.hide,hide:function(a){if(l(a))return this._hide.apply(this,arguments);var b=k.apply(this,arguments);return b[1].mode="hide",this.effect.apply(this,b)},__toggle:a.fn.toggle,toggle:function(b){if(l(b)||typeof b=="boolean"||a.isFunction(b))return this.__toggle.apply(this,arguments);var c=k.apply(this,arguments);return c[1].mode="toggle",this.effect.apply(this,c)},cssUnit:function(b){var c=this.css(b),d=[];return a.each(["em","px","%","pt"],function(a,b){c.indexOf(b)>0&&(d=[parseFloat(c),b])}),d}});var m={};a.each(["Quad","Cubic","Quart","Quint","Expo"],function(a,b){m[b]=function(b){return Math.pow(b,a+2)}}),a.extend(m,{Sine:function(a){return 1-Math.cos(a*Math.PI/2)},Circ:function(a){return 1-Math.sqrt(1-a*a)},Elastic:function(a){return a===0||a===1?a:-Math.pow(2,8*(a-1))*Math.sin(((a-1)*80-7.5)*Math.PI/15)},Back:function(a){return a*a*(3*a-2)},Bounce:function(a){var b,c=4;while(a<((b=Math.pow(2,--c))-1)/11);return 1/Math.pow(4,3-c)-7.5625*Math.pow((b*3-2)/22-a,2)}}),a.each(m,function(b,c){a.easing["easeIn"+b]=c,a.easing["easeOut"+b]=function(a){return 1-c(1-a)},a.easing["easeInOut"+b]=function(a){return a<.5?c(a*2)/2:c(a*-2+2)/-2+1}})}(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.blind.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.blind=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"hide"),f=b.options.direction||"vertical";a.effects.save(c,d),c.show();var g=a.effects.createWrapper(c).css({overflow:"hidden"}),h=f=="vertical"?"height":"width",i=f=="vertical"?g.height():g.width();e=="show"&&g.css(h,0);var j={};j[h]=e=="show"?i:0,g.animate(j,b.duration,b.options.easing,function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(c[0],arguments),c.dequeue()})})}})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.bounce.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.bounce=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"effect"),f=b.options.direction||"up",g=b.options.distance||20,h=b.options.times||5,i=b.duration||250;/show|hide/.test(e)&&d.push("opacity"),a.effects.save(c,d),c.show(),a.effects.createWrapper(c);var j=f=="up"||f=="down"?"top":"left",k=f=="up"||f=="left"?"pos":"neg",g=b.options.distance||(j=="top"?c.outerHeight(!0)/3:c.outerWidth(!0)/3);e=="show"&&c.css("opacity",0).css(j,k=="pos"?-g:g),e=="hide"&&(g=g/(h*2)),e!="hide"&&h--;if(e=="show"){var l={opacity:1};l[j]=(k=="pos"?"+=":"-=")+g,c.animate(l,i/2,b.options.easing),g=g/2,h--}for(var m=0;m<h;m++){var n={},p={};n[j]=(k=="pos"?"-=":"+=")+g,p[j]=(k=="pos"?"+=":"-=")+g,c.animate(n,i/2,b.options.easing).animate(p,i/2,b.options.easing),g=e=="hide"?g*2:g/2}if(e=="hide"){var l={opacity:0};l[j]=(k=="pos"?"-=":"+=")+g,c.animate(l,i/2,b.options.easing,function(){c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments)})}else{var n={},p={};n[j]=(k=="pos"?"-=":"+=")+g,p[j]=(k=="pos"?"+=":"-=")+g,c.animate(n,i/2,b.options.easing).animate(p,i/2,b.options.easing,function(){a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments)})}c.queue("fx",function(){c.dequeue()}),c.dequeue()})}})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.clip.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.clip=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right","height","width"],e=a.effects.setMode(c,b.options.mode||"hide"),f=b.options.direction||"vertical";a.effects.save(c,d),c.show();var g=a.effects.createWrapper(c).css({overflow:"hidden"}),h=c[0].tagName=="IMG"?g:c,i={size:f=="vertical"?"height":"width",position:f=="vertical"?"top":"left"},j=f=="vertical"?h.height():h.width();e=="show"&&(h.css(i.size,0),h.css(i.position,j/2));var k={};k[i.size]=e=="show"?j:0,k[i.position]=e=="show"?0:j/2,h.animate(k,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(c[0],arguments),c.dequeue()}})})}})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.drop.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.drop=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right","opacity"],e=a.effects.setMode(c,b.options.mode||"hide"),f=b.options.direction||"left";a.effects.save(c,d),c.show(),a.effects.createWrapper(c);var g=f=="up"||f=="down"?"top":"left",h=f=="up"||f=="left"?"pos":"neg",i=b.options.distance||(g=="top"?c.outerHeight(!0)/2:c.outerWidth(!0)/2);e=="show"&&c.css("opacity",0).css(g,h=="pos"?-i:i);var j={opacity:e=="show"?1:0};j[g]=(e=="show"?h=="pos"?"+=":"-=":h=="pos"?"-=":"+=")+i,c.animate(j,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.explode.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.explode=function(b){return this.queue(function(){var c=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3,d=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3;b.options.mode=b.options.mode=="toggle"?a(this).is(":visible")?"hide":"show":b.options.mode;var e=a(this).show().css("visibility","hidden"),f=e.offset();f.top-=parseInt(e.css("marginTop"),10)||0,f.left-=parseInt(e.css("marginLeft"),10)||0;var g=e.outerWidth(!0),h=e.outerHeight(!0);for(var i=0;i<c;i++)for(var j=0;j<d;j++)e.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-j*(g/d),top:-i*(h/c)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:g/d,height:h/c,left:f.left+j*(g/d)+(b.options.mode=="show"?(j-Math.floor(d/2))*(g/d):0),top:f.top+i*(h/c)+(b.options.mode=="show"?(i-Math.floor(c/2))*(h/c):0),opacity:b.options.mode=="show"?0:1}).animate({left:f.left+j*(g/d)+(b.options.mode=="show"?0:(j-Math.floor(d/2))*(g/d)),top:f.top+i*(h/c)+(b.options.mode=="show"?0:(i-Math.floor(c/2))*(h/c)),opacity:b.options.mode=="show"?1:0},b.duration||500);setTimeout(function(){b.options.mode=="show"?e.css({visibility:"visible"}):e.css({visibility:"visible"}).hide(),b.callback&&b.callback.apply(e[0]),e.dequeue(),a("div.ui-effects-explode").remove()},b.duration||500)})}})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.fade.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.fade=function(b){return this.queue(function(){var c=a(this),d=a.effects.setMode(c,b.options.mode||"hide");c.animate({opacity:d},{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.fold.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.fold=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"hide"),f=b.options.size||15,g=!!b.options.horizFirst,h=b.duration?b.duration/2:a.fx.speeds._default/2;a.effects.save(c,d),c.show();var i=a.effects.createWrapper(c).css({overflow:"hidden"}),j=e=="show"!=g,k=j?["width","height"]:["height","width"],l=j?[i.width(),i.height()]:[i.height(),i.width()],m=/([0-9]+)%/.exec(f);m&&(f=parseInt(m[1],10)/100*l[e=="hide"?0:1]),e=="show"&&i.css(g?{height:0,width:f}:{height:f,width:0});var n={},p={};n[k[0]]=e=="show"?l[0]:f,p[k[1]]=e=="show"?l[1]:0,i.animate(n,h,b.options.easing).animate(p,h,b.options.easing,function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(c[0],arguments),c.dequeue()})})}})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.highlight.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.highlight=function(b){return this.queue(function(){var c=a(this),d=["backgroundImage","backgroundColor","opacity"],e=a.effects.setMode(c,b.options.mode||"show"),f={backgroundColor:c.css("backgroundColor")};e=="hide"&&(f.opacity=0),a.effects.save(c,d),c.show().css({backgroundImage:"none",backgroundColor:b.options.color||"#ffff99"}).animate(f,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){e=="hide"&&c.hide(),a.effects.restore(c,d),e=="show"&&!a.support.opacity&&this.style.removeAttribute("filter"),b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.pulsate.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.pulsate=function(b){return this.queue(function(){var c=a(this),d=a.effects.setMode(c,b.options.mode||"show"),e=(b.options.times||5)*2-1,f=b.duration?b.duration/2:a.fx.speeds._default/2,g=c.is(":visible"),h=0;g||(c.css("opacity",0).show(),h=1),(d=="hide"&&g||d=="show"&&!g)&&e--;for(var i=0;i<e;i++)c.animate({opacity:h},f,b.options.easing),h=(h+1)%2;c.animate({opacity:h},f,b.options.easing,function(){h==0&&c.hide(),b.callback&&b.callback.apply(this,arguments)}),c.queue("fx",function(){c.dequeue()}).dequeue()})}})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.scale.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.puff=function(b){return this.queue(function(){var c=a(this),d=a.effects.setMode(c,b.options.mode||"hide"),e=parseInt(b.options.percent,10)||150,f=e/100,g={height:c.height(),width:c.width()};a.extend(b.options,{fade:!0,mode:d,percent:d=="hide"?e:100,from:d=="hide"?g:{height:g.height*f,width:g.width*f}}),c.effect("scale",b.options,b.duration,b.callback),c.dequeue()})},a.effects.scale=function(b){return this.queue(function(){var c=a(this),d=a.extend(!0,{},b.options),e=a.effects.setMode(c,b.options.mode||"effect"),f=parseInt(b.options.percent,10)||(parseInt(b.options.percent,10)==0?0:e=="hide"?0:100),g=b.options.direction||"both",h=b.options.origin;e!="effect"&&(d.origin=h||["middle","center"],d.restore=!0);var i={height:c.height(),width:c.width()};c.from=b.options.from||(e=="show"?{height:0,width:0}:i);var j={y:g!="horizontal"?f/100:1,x:g!="vertical"?f/100:1};c.to={height:i.height*j.y,width:i.width*j.x},b.options.fade&&(e=="show"&&(c.from.opacity=0,c.to.opacity=1),e=="hide"&&(c.from.opacity=1,c.to.opacity=0)),d.from=c.from,d.to=c.to,d.mode=e,c.effect("size",d,b.duration,b.callback),c.dequeue()})},a.effects.size=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right","width","height","overflow","opacity"],e=["position","top","bottom","left","right","overflow","opacity"],f=["width","height","overflow"],g=["fontSize"],h=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],i=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],j=a.effects.setMode(c,b.options.mode||"effect"),k=b.options.restore||!1,l=b.options.scale||"both",m=b.options.origin,n={height:c.height(),width:c.width()};c.from=b.options.from||n,c.to=b.options.to||n;if(m){var p=a.effects.getBaseline(m,n);c.from.top=(n.height-c.from.height)*p.y,c.from.left=(n.width-c.from.width)*p.x,c.to.top=(n.height-c.to.height)*p.y,c.to.left=(n.width-c.to.width)*p.x}var q={from:{y:c.from.height/n.height,x:c.from.width/n.width},to:{y:c.to.height/n.height,x:c.to.width/n.width}};if(l=="box"||l=="both")q.from.y!=q.to.y&&(d=d.concat(h),c.from=a.effects.setTransition(c,h,q.from.y,c.from),c.to=a.effects.setTransition(c,h,q.to.y,c.to)),q.from.x!=q.to.x&&(d=d.concat(i),c.from=a.effects.setTransition(c,i,q.from.x,c.from),c.to=a.effects.setTransition(c,i,q.to.x,c.to));(l=="content"||l=="both")&&q.from.y!=q.to.y&&(d=d.concat(g),c.from=a.effects.setTransition(c,g,q.from.y,c.from),c.to=a.effects.setTransition(c,g,q.to.y,c.to)),a.effects.save(c,k?d:e),c.show(),a.effects.createWrapper(c),c.css("overflow","hidden").css(c.from);if(l=="content"||l=="both")h=h.concat(["marginTop","marginBottom"]).concat(g),i=i.concat(["marginLeft","marginRight"]),f=d.concat(h).concat(i),c.find("*[width]").each(function(){var c=a(this);k&&a.effects.save(c,f);var d={height:c.height(),width:c.width()};c.from={height:d.height*q.from.y,width:d.width*q.from.x},c.to={height:d.height*q.to.y,width:d.width*q.to.x},q.from.y!=q.to.y&&(c.from=a.effects.setTransition(c,h,q.from.y,c.from),c.to=a.effects.setTransition(c,h,q.to.y,c.to)),q.from.x!=q.to.x&&(c.from=a.effects.setTransition(c,i,q.from.x,c.from),c.to=a.effects.setTransition(c,i,q.to.x,c.to)),c.css(c.from),c.animate(c.to,b.duration,b.options.easing,function(){k&&a.effects.restore(c,f)})});c.animate(c.to,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){c.to.opacity===0&&c.css("opacity",c.from.opacity),j=="hide"&&c.hide(),a.effects.restore(c,k?d:e),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.shake.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.shake=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"effect"),f=b.options.direction||"left",g=b.options.distance||20,h=b.options.times||3,i=b.duration||b.options.duration||140;a.effects.save(c,d),c.show(),a.effects.createWrapper(c);var j=f=="up"||f=="down"?"top":"left",k=f=="up"||f=="left"?"pos":"neg",l={},m={},n={};l[j]=(k=="pos"?"-=":"+=")+g,m[j]=(k=="pos"?"+=":"-=")+g*2,n[j]=(k=="pos"?"-=":"+=")+g*2,c.animate(l,i,b.options.easing);for(var p=1;p<h;p++)c.animate(m,i,b.options.easing).animate(n,i,b.options.easing);c.animate(m,i,b.options.easing).animate(l,i/2,b.options.easing,function(){a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments)}),c.queue("fx",function(){c.dequeue()}),c.dequeue()})}})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.slide.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.slide=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"show"),f=b.options.direction||"left";a.effects.save(c,d),c.show(),a.effects.createWrapper(c).css({overflow:"hidden"});var g=f=="up"||f=="down"?"top":"left",h=f=="up"||f=="left"?"pos":"neg",i=b.options.distance||(g=="top"?c.outerHeight(!0):c.outerWidth(!0));e=="show"&&c.css(g,h=="pos"?isNaN(i)?"-"+i:-i:i);var j={};j[g]=(e=="show"?h=="pos"?"+=":"-=":h=="pos"?"-=":"+=")+i,c.animate(j,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.transfer.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.transfer=function(b){return this.queue(function(){var c=a(this),d=a(b.options.to),e=d.offset(),f={top:e.top,left:e.left,height:d.innerHeight(),width:d.innerWidth()},g=c.offset(),h=a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(b.options.className).css({top:g.top,left:g.left,height:c.innerHeight(),width:c.innerWidth(),position:"absolute"}).animate(f,b.duration,b.options.easing,function(){h.remove(),b.callback&&b.callback.apply(c[0],arguments),c.dequeue()})})}})(jQuery);;
/*!
 * elFinder - file manager for web
 * Version 2.0.2 (2013-04-26)
 * http://elfinder.org
 * 
 * Copyright 2009-2012, Studio 42
 * Licensed under a 3 clauses BSD license
 */
(function(e){window.elFinder=function(t,n){this.time("load");var i,r,a,o=this,t=e(t),s=e("<div/>").append(t.contents()),l=t.attr("style"),d=t.attr("id")||"",c="elfinder-"+(d||(""+Math.random()).substr(2,7)),p="mousedown."+c,u="keydown."+c,h="keypress."+c,f=!0,m=!0,g="",v={path:"",url:"",tmbUrl:"",disabled:[],separator:"/",archives:[],extract:[],copyOverwrite:!0,tmb:!1},b={},y=[],w={},x={},k=[],C=[],I=[],F=new o.command(o),T="auto",P=400,z=e(document.createElement("audio")).hide().appendTo("body")[0],O=function(t){if(t.init)b={};else for(var n in b)b.hasOwnProperty(n)&&"directory"!=b[n].mime&&b[n].phash==g&&-1===e.inArray(n,C)&&delete b[n];g=t.cwd.hash,A(t.files),b[g]||A([t.cwd]),o.lastDir(g)},A=function(e){for(var t,n=e.length;n--;)if(t=e[n],t.name&&t.hash&&t.mime){if(!t.phash){var i="volume_"+t.name,r=o.i18n(i);i!=r&&(t.i18=r)}b[t.hash]=t}},D=function(t){var n=t.keyCode,i=!(!t.ctrlKey&&!t.metaKey);f&&(e.each(x,function(e,r){r.type==t.type&&r.keyCode==n&&r.shiftKey==t.shiftKey&&r.ctrlKey==i&&r.altKey==t.altKey&&(t.preventDefault(),t.stopPropagation(),r.callback(t,o),o.debug("shortcut-exec",e+" : "+r.description))}),9!=n||e(t.target).is(":input")||t.preventDefault())},M=new Date;return this.api=null,this.newAPI=!1,this.oldAPI=!1,this.OS=-1!==navigator.userAgent.indexOf("Mac")?"mac":-1!==navigator.userAgent.indexOf("Win")?"win":"other",this.UA=function(){var e=!document.uniqueID&&!window.opera&&!window.sidebar&&window.localStorage&&window.orientation===void 0;return{ltIE6:window.addEventListener===void 0&&document.documentElement.style.maxHeight===void 0,ltIE7:window.addEventListener===void 0&&document.querySelectorAll===void 0,ltIE8:window.addEventListener===void 0&&document.getElementsByClassName===void 0,IE:document.uniqueID,Firefox:window.sidebar,Opera:window.opera,Webkit:e,Chrome:e&&window.chrome,Safari:e&&!window.chrome,Mobile:window.orientation!==void 0}}(),this.options=e.extend(!0,{},this._options,n||{}),n.ui&&(this.options.ui=n.ui),n.commands&&(this.options.commands=n.commands),n.uiOptions&&n.uiOptions.toolbar&&(this.options.uiOptions.toolbar=n.uiOptions.toolbar),e.extend(this.options.contextmenu,n.contextmenu),this.requestType=/^(get|post)$/i.test(this.options.requestType)?this.options.requestType.toLowerCase():"get",this.customData=e.isPlainObject(this.options.customData)?this.options.customData:{},this.id=d,this.uploadURL=n.urlUpload||n.url,this.namespace=c,this.lang=this.i18[this.options.lang]&&this.i18[this.options.lang].messages?this.options.lang:"en",a="en"==this.lang?this.i18.en:e.extend(!0,{},this.i18.en,this.i18[this.lang]),this.direction=a.direction,this.messages=a.messages,this.dateFormat=this.options.dateFormat||a.dateFormat,this.fancyFormat=this.options.fancyDateFormat||a.fancyDateFormat,this.today=new Date(M.getFullYear(),M.getMonth(),M.getDate()).getTime()/1e3,this.yesterday=this.today-86400,r=this.options.UTCDate?"UTC":"",this.getHours="get"+r+"Hours",this.getMinutes="get"+r+"Minutes",this.getSeconds="get"+r+"Seconds",this.getDate="get"+r+"Date",this.getDay="get"+r+"Day",this.getMonth="get"+r+"Month",this.getFullYear="get"+r+"FullYear",this.cssClass="ui-helper-reset ui-helper-clearfix ui-widget ui-widget-content ui-corner-all elfinder elfinder-"+("rtl"==this.direction?"rtl":"ltr")+" "+this.options.cssClass,this.storage=function(){try{return"localStorage"in window&&null!==window.localStorage?o.localStorage:o.cookie}catch(e){return o.cookie}}(),this.viewType=this.storage("view")||this.options.defaultView||"icons",this.sortType=this.storage("sortType")||this.options.sortType||"name",this.sortOrder=this.storage("sortOrder")||this.options.sortOrder||"asc",this.sortStickFolders=this.storage("sortStickFolders"),this.sortStickFolders=null===this.sortStickFolders?!!this.options.sortStickFolders:!!this.sortStickFolders,this.sortRules=e.extend(!0,{},this._sortRules,this.options.sortsRules),e.each(this.sortRules,function(e,t){"function"!=typeof t&&delete o.sortRules[e]}),this.compare=e.proxy(this.compare,this),this.notifyDelay=this.options.notifyDelay>0?parseInt(this.options.notifyDelay):500,this.draggable={appendTo:"body",addClasses:!0,delay:30,revert:!0,refreshPositions:!0,cursor:"move",cursorAt:{left:50,top:47},drag:function(e,t){t.helper.data("locked")||t.helper.toggleClass("elfinder-drag-helper-plus",e.shiftKey||e.ctrlKey||e.metaKey)},start:function(t,n){var i,r,a=e.map(n.helper.data("files")||[],function(e){return e||null});for(i=a.length;i--;)if(r=a[i],b[r].locked){n.helper.addClass("elfinder-drag-helper-plus").data("locked",!0);break}},stop:function(){o.trigger("focus").trigger("dragstop")},helper:function(t){var n,i,r=this.id?e(this):e(this).parents("[id]:first"),a=e('<div class="elfinder-drag-helper"><span class="elfinder-drag-helper-icon-plus"/></div>'),s=function(e){return'<div class="elfinder-cwd-icon '+o.mime2class(e)+' ui-corner-all"/>'};return o.trigger("dragstart",{target:r[0],originalEvent:t}),n=r.is("."+o.res("class","cwdfile"))?o.selected():[o.navId2Hash(r.attr("id"))],a.append(s(b[n[0]].mime)).data("files",n).data("locked",!1),(i=n.length)>1&&a.append(s(b[n[i-1]].mime)+'<span class="elfinder-drag-num">'+i+"</span>"),a}},this.droppable={tolerance:"pointer",accept:".elfinder-cwd-file-wrapper,.elfinder-navbar-dir,.elfinder-cwd-file",hoverClass:this.res("class","adroppable"),drop:function(t,n){var i,r,a,s=e(this),l=e.map(n.helper.data("files")||[],function(e){return e||null}),d=[],c="class";for(s.is("."+o.res(c,"cwd"))?r=g:s.is("."+o.res(c,"cwdfile"))?r=s.attr("id"):s.is("."+o.res(c,"navdir"))&&(r=o.navId2Hash(s.attr("id"))),i=l.length;i--;)a=l[i],a!=r&&b[a].phash!=r&&d.push(a);d.length&&(n.helper.hide(),o.clipboard(d,!(t.ctrlKey||t.shiftKey||t.metaKey||n.helper.data("locked"))),o.exec("paste",r),o.trigger("drop",{files:l}))}},this.enabled=function(){return t.is(":visible")&&f},this.visible=function(){return t.is(":visible")},this.root=function(e){for(var t,n=b[e||g];n&&n.phash;)n=b[n.phash];if(n)return n.hash;for(;t in b&&b.hasOwnProperty(t);)if(n=b[t],!n.phash&&"directory"==!n.mime&&n.read)return n.hash;return""},this.cwd=function(){return b[g]||{}},this.option=function(e){return v[e]||""},this.file=function(e){return b[e]},this.files=function(){return e.extend(!0,{},b)},this.parents=function(e){for(var t,n=[];t=this.file(e);)n.unshift(t.hash),e=t.phash;return n},this.path2array=function(e,t){for(var n,i=[];e&&(n=b[e])&&n.hash;)i.unshift(t&&n.i18?n.i18:n.name),e=n.phash;return i},this.path=function(e,t){return b[e]&&b[e].path?b[e].path:this.path2array(e,t).join(v.separator)},this.url=function(t){var n=b[t];if(!n||!n.read)return"";if(n.url)return n.url;if(v.url)return v.url+e.map(this.path2array(t),function(e){return encodeURIComponent(e)}).slice(1).join("/");var i=e.extend({},this.customData,{cmd:"file",target:n.hash});return this.oldAPI&&(i.cmd="open",i.current=n.phash),this.options.url+(-1===this.options.url.indexOf("?")?"?":"&")+e.param(i,!0)},this.tmb=function(e){var t=b[e],n=t&&t.tmb&&1!=t.tmb?v.tmbUrl+t.tmb:"";return n&&(this.UA.Opera||this.UA.IE)&&(n+="?_="+(new Date).getTime()),n},this.selected=function(){return y.slice(0)},this.selectedFiles=function(){return e.map(y,function(t){return b[t]?e.extend({},b[t]):null})},this.fileByName=function(e,t){var n;for(n in b)if(b.hasOwnProperty(n)&&b[n].phash==t&&b[n].name==e)return b[n]},this.validResponse=function(e,t){return t.error||this.rules[this.rules[e]?e:"defaults"](t)},this.request=function(t){var n,i,r,a=this,o=this.options,s=e.Deferred(),l=e.extend({},o.customData,{mimes:o.onlyMimes},t.data||t),d=l.cmd,c=!(t.preventDefault||t.preventFail),p=!(t.preventDefault||t.preventDone),u=e.extend({},t.notify),h=!!t.raw,f=t.syncOnFail,t=e.extend({url:o.url,async:!0,type:this.requestType,dataType:"json",cache:!1,data:l},t.options||{}),m=function(t){t.warning&&a.error(t.warning),"open"==d&&O(e.extend(!0,{},t)),t.removed&&t.removed.length&&a.remove(t),t.added&&t.added.length&&a.add(t),t.changed&&t.changed.length&&a.change(t),a.trigger(d,t),t.sync&&a.sync()},g=function(e,t){var n;switch(t){case"abort":n=e.quiet?"":["errConnect","errAbort"];break;case"timeout":n=["errConnect","errTimeout"];break;case"parsererror":n=["errResponse","errDataNotJSON"];break;default:n=403==e.status?["errConnect","errAccess"]:404==e.status?["errConnect","errNotFound"]:"errConnect"}s.reject(n,e,t)},b=function(t){return h?s.resolve(t):t?e.isPlainObject(t)?t.error?s.reject(t.error,i):a.validResponse(d,t)?(t=a.normalize(t),a.api||(a.api=t.api||1,a.newAPI=a.api>=2,a.oldAPI=!a.newAPI),t.options&&(v=e.extend({},v,t.options)),t.netDrivers&&(a.netDrivers=t.netDrivers),s.resolve(t),t.debug&&a.debug("backend-debug",t.debug),void 0):s.reject("errResponse",i):s.reject(["errResponse","errDataNotJSON"],i):s.reject(["errResponse","errDataEmpty"],i)};if(p&&s.done(m),s.fail(function(e){e&&(c?a.error(e):a.debug("error",a.i18n(e)))}),!d)return s.reject("errCmdReq");if(f&&s.fail(function(e){e&&a.sync()}),u.type&&u.cnt&&(n=setTimeout(function(){a.notify(u),s.always(function(){u.cnt=-(parseInt(u.cnt)||0),a.notify(u)})},a.notifyDelay),s.always(function(){clearTimeout(n)})),"open"==d)for(;r=I.pop();)"pending"==r.state()&&(r.quiet=!0,r.abort());return delete t.preventFail,i=this.transport.send(t).fail(g).done(b),"open"==d&&(I.unshift(i),s.always(function(){var t=e.inArray(i,I);-1!==t&&I.splice(t,1)})),s},this.diff=function(t){var n={},i=[],r=[],a=[],o=function(e){for(var t=a.length;t--;)if(a[t].hash==e)return!0};return e.each(t,function(e,t){n[t.hash]=t}),e.each(b,function(e){!n[e]&&r.push(e)}),e.each(n,function(t,n){var r=b[t];r?e.each(n,function(e){return n[e]!=r[e]?(a.push(n),!1):void 0}):i.push(n)}),e.each(r,function(t,i){var s=b[i],l=s.phash;l&&"directory"==s.mime&&-1===e.inArray(l,r)&&n[l]&&!o(l)&&a.push(n[l])}),{added:i,removed:r,changed:a}},this.sync=function(){var t=this,n=e.Deferred().done(function(){t.trigger("sync")}),i={data:{cmd:"open",init:1,target:g,tree:this.ui.tree?1:0},preventDefault:!0},r={data:{cmd:"tree",target:g==this.root()?g:this.file(g).phash},preventDefault:!0};return e.when(this.request(i),this.request(r)).fail(function(e){n.reject(e),e&&t.request({data:{cmd:"open",target:t.lastDir(""),tree:1,init:1},notify:{type:"open",cnt:1,hideCnt:!0},preventDefault:!0})}).done(function(e,i){var r=t.diff(e.files.concat(i&&i.tree?i.tree:[]));return r.added.push(e.cwd),r.removed.length&&t.remove(r),r.added.length&&t.add(r),r.changed.length&&t.change(r),n.resolve(r)}),n},this.upload=function(e){return this.transport.upload(e,this)},this.bind=function(e,t){var n;if("function"==typeof t)for(e=(""+e).toLowerCase().split(/\s+/),n=0;e.length>n;n++)void 0===w[e[n]]&&(w[e[n]]=[]),w[e[n]].push(t);return this},this.unbind=function(e,t){var n=w[(""+e).toLowerCase()]||[],i=n.indexOf(t);return i>-1&&n.splice(i,1),t=null,this},this.trigger=function(t,n){var i,t=t.toLowerCase(),r=w[t]||[];if(this.debug("event-"+t,n),r.length)for(t=e.Event(t),i=0;r.length>i;i++){t.data=e.extend(!0,{},n);try{if(r[i](t,this)===!1||t.isDefaultPrevented()){this.debug("event-stoped",t.type);break}}catch(a){window.console&&window.console.log&&window.console.log(a)}}return this},this.shortcut=function(t){var n,i,r,a,o;if(this.options.allowShortcuts&&t.pattern&&e.isFunction(t.callback))for(n=t.pattern.toUpperCase().split(/\s+/),a=0;n.length>a;a++)i=n[a],o=i.split("+"),r=1==(r=o.pop()).length?r>0?r:r.charCodeAt(0):e.ui.keyCode[r],r&&!x[i]&&(x[i]={keyCode:r,altKey:-1!=e.inArray("ALT",o),ctrlKey:-1!=e.inArray("CTRL",o),shiftKey:-1!=e.inArray("SHIFT",o),type:t.type||"keydown",callback:t.callback,description:t.description,pattern:i});return this},this.shortcuts=function(){var t=[];return e.each(x,function(e,n){t.push([n.pattern,o.i18n(n.description)])}),t},this.clipboard=function(t,n){var i=function(){return e.map(k,function(e){return e.hash})};return void 0!==t&&(k.length&&this.trigger("unlockfiles",{files:i()}),C=[],k=e.map(t||[],function(e){var t=b[e];return t?(C.push(e),{hash:e,phash:t.phash,name:t.name,mime:t.mime,read:t.read,locked:t.locked,cut:!!n}):null}),this.trigger("changeclipboard",{clipboard:k.slice(0,k.length)}),n&&this.trigger("lockfiles",{files:i()})),k.slice(0,k.length)},this.isCommandEnabled=function(t){return this._commands[t]?-1===e.inArray(t,v.disabled):!1},this.exec=function(t,n,i){return this._commands[t]&&this.isCommandEnabled(t)?this._commands[t].exec(n,i):e.Deferred().reject("No such command")},this.dialog=function(n,i){return e("<div/>").append(n).appendTo(t).elfinderdialog(i)},this.getUI=function(e){return this.ui[e]||t},this.command=function(e){return void 0===e?this._commands:this._commands[e]},this.resize=function(e,n){t.css("width",e).height(n).trigger("resize"),this.trigger("resize",{width:t.width(),height:t.height()})},this.restoreSize=function(){this.resize(T,P)},this.show=function(){t.show(),this.enable().trigger("show")},this.hide=function(){this.disable().trigger("hide"),t.hide()},this.destroy=function(){t&&t[0].elfinder&&(this.trigger("destroy").disable(),w={},x={},e(document).add(t).unbind("."+this.namespace),o.trigger=function(){},t.children().remove(),t.append(s.contents()).removeClass(this.cssClass).attr("style",l),t[0].elfinder=null,i&&clearInterval(i))},e.fn.selectable&&e.fn.draggable&&e.fn.droppable?t.length?this.options.url?(e.extend(e.ui.keyCode,{F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120}),this.dragUpload=!1,this.xhrUpload=("undefined"!=typeof XMLHttpRequestUpload||"undefined"!=typeof XMLHttpRequestEventTarget)&&"undefined"!=typeof File&&"undefined"!=typeof FormData,this.transport={},"object"==typeof this.options.transport&&(this.transport=this.options.transport,"function"==typeof this.transport.init&&this.transport.init(this)),"function"!=typeof this.transport.send&&(this.transport.send=function(t){return e.ajax(t)}),"iframe"==this.transport.upload?this.transport.upload=e.proxy(this.uploads.iframe,this):"function"==typeof this.transport.upload?this.dragUpload=!!this.options.dragUploadAllow:this.xhrUpload?(this.transport.upload=e.proxy(this.uploads.xhr,this),this.dragUpload=!0):this.transport.upload=e.proxy(this.uploads.iframe,this),this.error=function(){var e=arguments[0];return 1==arguments.length&&"function"==typeof e?o.bind("error",e):o.trigger("error",{error:e})},e.each(["enable","disable","load","open","reload","select","add","remove","change","dblclick","getfile","lockfiles","unlockfiles","dragstart","dragstop","search","searchend","viewchange"],function(t,n){o[n]=function(){var t=arguments[0];return 1==arguments.length&&"function"==typeof t?o.bind(n,t):o.trigger(n,e.isPlainObject(t)?t:{})}}),this.enable(function(){!f&&o.visible()&&o.ui.overlay.is(":hidden")&&(f=!0,e("textarea:focus,input:focus,button").blur(),t.removeClass("elfinder-disabled"))}).disable(function(){m=f,f=!1,t.addClass("elfinder-disabled")}).open(function(){y=[]}).select(function(t){y=e.map(t.data.selected||t.data.value||[],function(e){return b[e]?e:null})}).error(function(t){var n={cssClass:"elfinder-dialog-error",title:o.i18n(o.i18n("error")),resizable:!1,destroyOnClose:!0,buttons:{}};n.buttons[o.i18n(o.i18n("btnClose"))]=function(){e(this).elfinderdialog("close")},o.dialog('<span class="elfinder-dialog-icon elfinder-dialog-icon-error"/>'+o.i18n(t.data.error),n)}).bind("tree parents",function(e){A(e.data.tree||[])}).bind("tmb",function(t){e.each(t.data.images||[],function(e,t){b[e]&&(b[e].tmb=t)})}).add(function(e){A(e.data.added||[])}).change(function(t){e.each(t.data.changed||[],function(t,n){var i=n.hash;b[i]=b[i]?e.extend(b[i],n):n})}).remove(function(t){for(var n=t.data.removed||[],i=n.length,r=function(t){var n=b[t];n&&("directory"==n.mime&&n.dirs&&e.each(b,function(e,n){n.phash==t&&r(e)}),delete b[t])};i--;)r(n[i])}).bind("search",function(e){A(e.data.files)}).bind("rm",function(){var t=z.canPlayType&&z.canPlayType('audio/wav; codecs="1"');t&&""!=t&&"no"!=t&&e(z).html('<source src="./sounds/rm.wav" type="audio/wav">')[0].play()}),e.each(this.options.handlers,function(e,t){o.bind(e,t)}),this.history=new this.history(this),"function"==typeof this.options.getFileCallback&&this.commands.getfile&&(this.bind("dblclick",function(e){e.preventDefault(),o.exec("getfile").fail(function(){o.exec("open")})}),this.shortcut({pattern:"enter",description:this.i18n("cmdgetfile"),callback:function(){o.exec("getfile").fail(function(){o.exec("mac"==o.OS?"rename":"open")})}}).shortcut({pattern:"ctrl+enter",description:this.i18n("mac"==this.OS?"cmdrename":"cmdopen"),callback:function(){o.exec("mac"==o.OS?"rename":"open")}})),this._commands={},e.isArray(this.options.commands)||(this.options.commands=[]),e.each(["open","reload","back","forward","up","home","info","quicklook","getfile","help"],function(t,n){-1===e.inArray(n,o.options.commands)&&o.options.commands.push(n)}),e.each(this.options.commands,function(t,n){var i=o.commands[n];e.isFunction(i)&&!o._commands[n]&&(i.prototype=F,o._commands[n]=new i,o._commands[n].setup(n,o.options.commandsOptions[n]||{}))}),t.addClass(this.cssClass).bind(p,function(){!f&&o.enable()}),this.ui={workzone:e("<div/>").appendTo(t).elfinderworkzone(this),navbar:e("<div/>").appendTo(t).elfindernavbar(this,this.options.uiOptions.navbar||{}),contextmenu:e("<div/>").appendTo(t).elfindercontextmenu(this),overlay:e("<div/>").appendTo(t).elfinderoverlay({show:function(){o.disable()},hide:function(){m&&o.enable()}}),cwd:e("<div/>").appendTo(t).elfindercwd(this,this.options.uiOptions.cwd||{}),notify:this.dialog("",{cssClass:"elfinder-dialog-notify",position:{top:"12px",right:"12px"},resizable:!1,autoOpen:!1,title:"&nbsp;",width:280}),statusbar:e('<div class="ui-widget-header ui-helper-clearfix ui-corner-bottom elfinder-statusbar"/>').hide().appendTo(t)},e.each(this.options.ui||[],function(n,i){var r="elfinder"+i,a=o.options.uiOptions[i]||{};!o.ui[i]&&e.fn[r]&&(o.ui[i]=e("<"+(a.tag||"div")+"/>").appendTo(t)[r](o,a))}),t[0].elfinder=this,this.options.resizable&&e.fn.resizable&&t.resizable({handles:"se",minWidth:300,minHeight:200}),this.options.width&&(T=this.options.width),this.options.height&&(P=parseInt(this.options.height)),o.resize(T,P),e(document).bind("click."+this.namespace,function(n){f&&!e(n.target).closest(t).length&&o.disable()}).bind(u+" "+h,D),this.trigger("init").request({data:{cmd:"open",target:o.lastDir(),init:1,tree:this.ui.tree?1:0},preventDone:!0,notify:{type:"open",cnt:1,hideCnt:!0},freeze:!0}).fail(function(){o.trigger("fail").disable().lastDir(""),w={},x={},e(document).add(t).unbind("."+this.namespace),o.trigger=function(){}}).done(function(t){o.load().debug("api",o.api),t=e.extend(!0,{},t),O(t),o.trigger("open",t)}),this.one("load",function(){t.trigger("resize"),o.options.sync>1e3&&(i=setInterval(function(){o.sync()},o.options.sync))}),void 0):alert(this.i18n("errURL")):alert(this.i18n("errNode")):alert(this.i18n("errJqui"))},elFinder.prototype={res:function(e,t){return this.resources[e]&&this.resources[e][t]},i18:{en:{translator:"",language:"English",direction:"ltr",dateFormat:"d.m.Y H:i",fancyDateFormat:"$1 H:i",messages:{}},months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},kinds:{unknown:"Unknown",directory:"Folder",symlink:"Alias","symlink-broken":"AliasBroken","application/x-empty":"TextPlain","application/postscript":"Postscript","application/vnd.ms-office":"MsOffice","application/vnd.ms-word":"MsWord","application/vnd.openxmlformats-officedocument.wordprocessingml.document":"MsWord","application/vnd.ms-word.document.macroEnabled.12":"MsWord","application/vnd.openxmlformats-officedocument.wordprocessingml.template":"MsWord","application/vnd.ms-word.template.macroEnabled.12":"MsWord","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":"MsWord","application/vnd.ms-excel":"MsExcel","application/vnd.ms-excel.sheet.macroEnabled.12":"MsExcel","application/vnd.openxmlformats-officedocument.spreadsheetml.template":"MsExcel","application/vnd.ms-excel.template.macroEnabled.12":"MsExcel","application/vnd.ms-excel.sheet.binary.macroEnabled.12":"MsExcel","application/vnd.ms-excel.addin.macroEnabled.12":"MsExcel","application/vnd.ms-powerpoint":"MsPP","application/vnd.openxmlformats-officedocument.presentationml.presentation":"MsPP","application/vnd.ms-powerpoint.presentation.macroEnabled.12":"MsPP","application/vnd.openxmlformats-officedocument.presentationml.slideshow":"MsPP","application/vnd.ms-powerpoint.slideshow.macroEnabled.12":"MsPP","application/vnd.openxmlformats-officedocument.presentationml.template":"MsPP","application/vnd.ms-powerpoint.template.macroEnabled.12":"MsPP","application/vnd.ms-powerpoint.addin.macroEnabled.12":"MsPP","application/vnd.openxmlformats-officedocument.presentationml.slide":"MsPP","application/vnd.ms-powerpoint.slide.macroEnabled.12":"MsPP","application/pdf":"PDF","application/xml":"XML","application/vnd.oasis.opendocument.text":"OO","application/vnd.oasis.opendocument.text-template":"OO","application/vnd.oasis.opendocument.text-web":"OO","application/vnd.oasis.opendocument.text-master":"OO","application/vnd.oasis.opendocument.graphics":"OO","application/vnd.oasis.opendocument.graphics-template":"OO","application/vnd.oasis.opendocument.presentation":"OO","application/vnd.oasis.opendocument.presentation-template":"OO","application/vnd.oasis.opendocument.spreadsheet":"OO","application/vnd.oasis.opendocument.spreadsheet-template":"OO","application/vnd.oasis.opendocument.chart":"OO","application/vnd.oasis.opendocument.formula":"OO","application/vnd.oasis.opendocument.database":"OO","application/vnd.oasis.opendocument.image":"OO","application/vnd.openofficeorg.extension":"OO","application/x-shockwave-flash":"AppFlash","application/flash-video":"Flash video","application/x-bittorrent":"Torrent","application/javascript":"JS","application/rtf":"RTF","application/rtfd":"RTF","application/x-font-ttf":"TTF","application/x-font-otf":"OTF","application/x-rpm":"RPM","application/x-web-config":"TextPlain","application/xhtml+xml":"HTML","application/docbook+xml":"DOCBOOK","application/x-awk":"AWK","application/x-gzip":"GZIP","application/x-bzip2":"BZIP","application/zip":"ZIP","application/x-zip":"ZIP","application/x-rar":"RAR","application/x-tar":"TAR","application/x-7z-compressed":"7z","application/x-jar":"JAR","text/plain":"TextPlain","text/x-php":"PHP","text/html":"HTML","text/javascript":"JS","text/css":"CSS","text/rtf":"RTF","text/rtfd":"RTF","text/x-c":"C","text/x-csrc":"C","text/x-chdr":"CHeader","text/x-c++":"CPP","text/x-c++src":"CPP","text/x-c++hdr":"CPPHeader","text/x-shellscript":"Shell","application/x-csh":"Shell","text/x-python":"Python","text/x-java":"Java","text/x-java-source":"Java","text/x-ruby":"Ruby","text/x-perl":"Perl","text/x-sql":"SQL","text/xml":"XML","text/x-comma-separated-values":"CSV","image/x-ms-bmp":"BMP","image/jpeg":"JPEG","image/gif":"GIF","image/png":"PNG","image/tiff":"TIFF","image/x-targa":"TGA","image/vnd.adobe.photoshop":"PSD","image/xbm":"XBITMAP","image/pxm":"PXM","audio/mpeg":"AudioMPEG","audio/midi":"AudioMIDI","audio/ogg":"AudioOGG","audio/mp4":"AudioMPEG4","audio/x-m4a":"AudioMPEG4","audio/wav":"AudioWAV","audio/x-mp3-playlist":"AudioPlaylist","video/x-dv":"VideoDV","video/mp4":"VideoMPEG4","video/mpeg":"VideoMPEG","video/x-msvideo":"VideoAVI","video/quicktime":"VideoMOV","video/x-ms-wmv":"VideoWM","video/x-flv":"VideoFlash","video/x-matroska":"VideoMKV","video/ogg":"VideoOGG"},rules:{defaults:function(t){return!t||t.added&&!e.isArray(t.added)||t.removed&&!e.isArray(t.removed)||t.changed&&!e.isArray(t.changed)?!1:!0},open:function(t){return t&&t.cwd&&t.files&&e.isPlainObject(t.cwd)&&e.isArray(t.files)},tree:function(t){return t&&t.tree&&e.isArray(t.tree)},parents:function(t){return t&&t.tree&&e.isArray(t.tree)},tmb:function(t){return t&&t.images&&(e.isPlainObject(t.images)||e.isArray(t.images))},upload:function(t){return t&&(e.isPlainObject(t.added)||e.isArray(t.added))},search:function(t){return t&&t.files&&e.isArray(t.files)}},commands:{},parseUploadData:function(t){var n;if(!e.trim(t))return{error:["errResponse","errDataEmpty"]};try{n=e.parseJSON(t)}catch(i){return{error:["errResponse","errDataNotJSON"]}}return this.validResponse("upload",n)?(n=this.normalize(n),n.removed=e.map(n.added||[],function(e){return e.hash}),n):{error:["errResponse"]}},iframeCnt:0,uploads:{iframe:function(t,n){var i,r,a,o,s=n?n:this,l=t.input,d=e.Deferred().fail(function(e){e&&s.error(e)}).done(function(e){e.warning&&s.error(e.warning),e.removed&&s.remove(e),e.added&&s.add(e),e.changed&&s.change(e),s.trigger("upload",e),e.sync&&s.sync()}),c="iframe-"+s.namespace+ ++s.iframeCnt,p=e('<form action="'+s.uploadURL+'" method="post" enctype="multipart/form-data" encoding="multipart/form-data" target="'+c+'" style="display:none"><input type="hidden" name="cmd" value="upload" /></form>'),u=this.UA.IE,h=function(){o&&clearTimeout(o),a&&clearTimeout(a),r&&s.notify({type:"upload",cnt:-i}),setTimeout(function(){u&&e('<iframe src="javascript:false;"/>').appendTo(p),p.remove(),f.remove()},100)},f=e('<iframe src="'+(u?"javascript:false;":"about:blank")+'" name="'+c+'" style="position:absolute;left:-1000px;top:-1000px" />').bind("load",function(){f.unbind("load").bind("load",function(){var e=s.parseUploadData(f.contents().text());h(),e.error?d.reject(e.error):d.resolve(e)}),a=setTimeout(function(){r=!0,s.notify({type:"upload",cnt:i})},s.options.notifyDelay),s.options.iframeTimeout>0&&(o=setTimeout(function(){h(),d.reject([errors.connect,errors.timeout])},s.options.iframeTimeout)),p.submit()});return l&&e(l).is(":file")&&e(l).val()?(p.append(l),i=l.files?l.files.length:1,p.append('<input type="hidden" name="'+(s.newAPI?"target":"current")+'" value="'+s.cwd().hash+'"/>').append('<input type="hidden" name="html" value="1"/>').append(e(l).attr("name","upload[]")),e.each(s.options.onlyMimes||[],function(e,t){p.append('<input type="hidden" name="mimes[]" value="'+t+'"/>')}),e.each(s.options.customData,function(e,t){p.append('<input type="hidden" name="'+e+'" value="'+t+'"/>')}),p.appendTo("body"),f.appendTo("body"),d):d.reject()},xhr:function(t,n){var i,r=n?n:this,a=e.Deferred().fail(function(e){e&&r.error(e)}).done(function(e){e.warning&&r.error(e.warning),e.removed&&r.remove(e),e.added&&r.add(e),e.changed&&r.change(e),r.trigger("upload",e),e.sync&&r.sync()}).always(function(){i&&clearTimeout(i),p&&r.notify({type:"upload",cnt:-d,progress:100*d})}),o=new XMLHttpRequest,s=new FormData,l=t.input?t.input.files:t.files,d=l.length,c=5,p=!1,u=function(){return setTimeout(function(){p=!0,r.notify({type:"upload",cnt:d,progress:c*d})},r.options.notifyDelay)};return d?(o.addEventListener("error",function(){a.reject("errConnect")},!1),o.addEventListener("abort",function(){a.reject(["errConnect","errAbort"])},!1),o.addEventListener("load",function(){var e,t=o.status;return t>500?a.reject("errResponse"):200!=t?a.reject("errConnect"):4!=o.readyState?a.reject(["errConnect","errTimeout"]):o.responseText?(e=r.parseUploadData(o.responseText),e.error?a.reject(e.error):a.resolve(e),void 0):a.reject(["errResponse","errDataEmpty"])},!1),o.upload.addEventListener("progress",function(e){var t,n=c;e.lengthComputable&&(t=parseInt(100*e.loaded/e.total),t>0&&!i&&(i=u()),t-n>4&&(c=t,p&&r.notify({type:"upload",cnt:0,progress:(c-n)*d})))},!1),o.open("POST",r.uploadURL,!0),s.append("cmd","upload"),s.append(r.newAPI?"target":"current",r.cwd().hash),e.each(r.options.customData,function(e,t){s.append(e,t)}),e.each(r.options.onlyMimes,function(e,t){s.append("mimes["+e+"]",t)}),e.each(l,function(e,t){s.append("upload[]",t)}),o.onreadystatechange=function(){4==o.readyState&&0==o.status&&a.reject(["errConnect","errAbort"])},o.send(s),this.UA.Safari&&t.files||(i=u()),a):a.reject()}},one:function(t,n){var i=this,r=e.proxy(n,function(e){return setTimeout(function(){i.unbind(e.type,r)},3),n.apply(this,arguments)});return this.bind(t,r)},localStorage:function(e,t){var n=window.localStorage;if(e="elfinder-"+e+this.id,null===t)return console.log("remove",e),n.removeItem(e);if(void 0!==t)try{n.setItem(e,t)}catch(i){n.clear(),n.setItem(e,t)}return n.getItem(e)},cookie:function(t,n){var i,r,a,o;if(t="elfinder-"+t+this.id,void 0===n){if(document.cookie&&""!=document.cookie)for(a=document.cookie.split(";"),t+="=",o=0;a.length>o;o++)if(a[o]=e.trim(a[o]),a[o].substring(0,t.length)==t)return decodeURIComponent(a[o].substring(t.length));return""}return r=e.extend({},this.options.cookie),null===n&&(n="",r.expires=-1),"number"==typeof r.expires&&(i=new Date,i.setTime(i.getTime()+864e5*r.expires),r.expires=i),document.cookie=t+"="+encodeURIComponent(n)+"; expires="+r.expires.toUTCString()+(r.path?"; path="+r.path:"")+(r.domain?"; domain="+r.domain:"")+(r.secure?"; secure":""),n},lastDir:function(e){return this.options.rememberLastDir?this.storage("lastdir",e):""},_node:e("<span/>"),escape:function(e){return this._node.text(e).html()},normalize:function(t){var n=function(e){return e&&e.hash&&e.name&&e.mime?("application/x-empty"==e.mime&&(e.mime="text/plain"),e):null};return t.files&&(t.files=e.map(t.files,n)),t.tree&&(t.tree=e.map(t.tree,n)),t.added&&(t.added=e.map(t.added,n)),t.changed&&(t.changed=e.map(t.changed,n)),t.api&&(t.init=!0),t},setSort:function(e,t,n){this.storage("sortType",this.sortType=this.sortRules[e]?e:"name"),this.storage("sortOrder",this.sortOrder=/asc|desc/.test(t)?t:"asc"),this.storage("sortStickFolders",(this.sortStickFolders=!!n)?1:""),this.trigger("sortchange")},_sortRules:{name:function(e,t){return e.name.toLowerCase().localeCompare(t.name.toLowerCase())},size:function(e,t){var n=parseInt(e.size)||0,i=parseInt(t.size)||0;return n==i?0:n>i?1:-1},kind:function(e,t){return e.mime.localeCompare(t.mime)},date:function(e,t){var n=e.ts||e.date,i=t.ts||t.date;return n==i?0:n>i?1:-1}},compare:function(e,t){var n,i=this,r=i.sortType,a="asc"==i.sortOrder,o=i.sortStickFolders,s=i.sortRules,l=s[r],d="directory"==e.mime,c="directory"==t.mime;if(o){if(d&&!c)return-1;if(!d&&c)return 1}return n=a?l(e,t):l(t,e),"name"!=r&&0==n?n=a?s.name(e,t):s.name(t,e):n},sortFiles:function(e){return e.sort(this.compare)},notify:function(t){var n,i,r,a=t.type,o=this.messages["ntf"+a]?this.i18n("ntf"+a):this.i18n("ntfsmth"),s=this.ui.notify,l=s.children(".elfinder-notify-"+a),d='<div class="elfinder-notify elfinder-notify-{type}"><span class="elfinder-dialog-icon elfinder-dialog-icon-{type}"/><span class="elfinder-notify-msg">{msg}</span> <span class="elfinder-notify-cnt"/><div class="elfinder-notify-progressbar"><div class="elfinder-notify-progress"/></div></div>',c=t.cnt,p=t.progress>=0&&100>=t.progress?t.progress:0;return a?(l.length||(l=e(d.replace(/\{type\}/g,a).replace(/\{msg\}/g,o)).appendTo(s).data("cnt",0),p&&l.data({progress:0,total:0})),n=c+parseInt(l.data("cnt")),n>0?(!t.hideCnt&&l.children(".elfinder-notify-cnt").text("("+n+")"),s.is(":hidden")&&s.elfinderdialog("open"),l.data("cnt",n),100>p&&(i=l.data("total"))>=0&&(r=l.data("progress"))>=0&&(i=c+parseInt(l.data("total")),r=p+r,p=parseInt(r/i),l.data({progress:r,total:i}),s.find(".elfinder-notify-progress").animate({width:(100>p?p:100)+"%"},20))):(l.remove(),!s.children().length&&s.elfinderdialog("close")),this):this},confirm:function(t){var n,i=!1,r={cssClass:"elfinder-dialog-confirm",modal:!0,resizable:!1,title:this.i18n(t.title||"confirmReq"),buttons:{},close:function(){!i&&t.cancel.callback(),e(this).elfinderdialog("destroy")}},a=this.i18n("apllyAll");return t.reject&&(r.buttons[this.i18n(t.reject.label)]=function(){t.reject.callback(!(!n||!n.prop("checked"))),i=!0,e(this).elfinderdialog("close")}),r.buttons[this.i18n(t.accept.label)]=function(){t.accept.callback(!(!n||!n.prop("checked"))),i=!0,e(this).elfinderdialog("close")},r.buttons[this.i18n(t.cancel.label)]=function(){e(this).elfinderdialog("close")},t.all&&(t.reject&&(r.width=370),r.create=function(){n=e('<input type="checkbox" />'),e(this).next().children().before(e("<label>"+a+"</label>").prepend(n))
},r.open=function(){var t=e(this).next(),n=parseInt(t.children(":first").outerWidth()+t.children(":last").outerWidth());n>parseInt(t.width())&&e(this).closest(".elfinder-dialog").width(n+30)}),this.dialog('<span class="elfinder-dialog-icon elfinder-dialog-icon-confirm"/>'+this.i18n(t.text),r)},uniqueName:function(e,t){var n,i,r=0,a="";if(e=this.i18n(e),t=t||this.cwd().hash,-1!=(n=e.indexOf(".txt"))&&(a=".txt",e=e.substr(0,n)),i=e+a,!this.fileByName(i,t))return i;for(;1e4>r;)if(i=e+" "+ ++r+a,!this.fileByName(i,t))return i;return e+Math.random()+a},i18n:function(){var t,n,i,r=this,a=this.messages,o=[],s=[],l=function(e){var t;return 0===e.indexOf("#")&&(t=r.file(e.substr(1)))?t.name:e};for(t=0;arguments.length>t;t++)if(i=arguments[t],"string"==typeof i)o.push(l(i));else if(e.isArray(i))for(n=0;i.length>n;n++)"string"==typeof i[n]&&o.push(l(i[n]));for(t=0;o.length>t;t++)-1===e.inArray(t,s)&&(i=o[t],i=a[i]||i,i=i.replace(/\$(\d+)/g,function(e,n){return n=t+parseInt(n),n>0&&o[n]&&s.push(n),o[n]||""}),o[t]=i);return e.map(o,function(t,n){return-1===e.inArray(n,s)?t:null}).join("<br>")},mime2class:function(e){var t="elfinder-cwd-icon-";return e=e.split("/"),t+e[0]+("image"!=e[0]&&e[1]?" "+t+e[1].replace(/(\.|\+)/g,"-"):"")},mime2kind:function(e){var t,n="object"==typeof e?e.mime:e;return t=e.alias?"Alias":this.kinds[n]?this.kinds[n]:0===n.indexOf("text")?"Text":0===n.indexOf("image")?"Image":0===n.indexOf("audio")?"Audio":0===n.indexOf("video")?"Video":0===n.indexOf("application")?"App":n,this.messages["kind"+t]?this.i18n("kind"+t):n;var n,t},formatDate:function(e,t){var n,i,r,a,o,s,l,d,c,p,u,h=this,t=t||e.ts,f=h.i18;return h.options.clientFormatDate&&t>0?(n=new Date(1e3*t),d=n[h.getHours](),c=d>12?d-12:d,p=n[h.getMinutes](),u=n[h.getSeconds](),a=n[h.getDate](),o=n[h.getDay](),s=n[h.getMonth]()+1,l=n[h.getFullYear](),i=t>=this.yesterday?this.fancyFormat:this.dateFormat,r=i.replace(/[a-z]/gi,function(e){switch(e){case"d":return a>9?a:"0"+a;case"j":return a;case"D":return h.i18n(f.daysShort[o]);case"l":return h.i18n(f.days[o]);case"m":return s>9?s:"0"+s;case"n":return s;case"M":return h.i18n(f.monthsShort[s-1]);case"F":return h.i18n(f.months[s-1]);case"Y":return l;case"y":return(""+l).substr(2);case"H":return d>9?d:"0"+d;case"G":return d;case"g":return c;case"h":return c>9?c:"0"+c;case"a":return d>12?"pm":"am";case"A":return d>12?"PM":"AM";case"i":return p>9?p:"0"+p;case"s":return u>9?u:"0"+u}return e}),t>=this.yesterday?r.replace("$1",this.i18n(t>=this.today?"Today":"Yesterday")):r):e.date?e.date.replace(/([a-z]+)\s/i,function(e,t){return h.i18n(t)+" "}):h.i18n("dateUnknown")},perms2class:function(e){var t="";return e.read||e.write?e.read?e.write||(t="elfinder-ro"):t="elfinder-wo":t="elfinder-na",t},formatPermissions:function(e){var t=[];return e.read&&t.push(this.i18n("read")),e.write&&t.push(this.i18n("write")),t.length?t.join(" "+this.i18n("and")+" "):this.i18n("noaccess")},formatSize:function(e){var t=1,n="b";return"unknown"==e?this.i18n("unknown"):(e>1073741824?(t=1073741824,n="GB"):e>1048576?(t=1048576,n="MB"):e>1024&&(t=1024,n="KB"),e/=t,(e>0?t>=1048576?e.toFixed(2):Math.round(e):0)+" "+n)},navHash2Id:function(e){return"nav-"+e},navId2Hash:function(e){return"string"==typeof e?e.substr(4):!1},log:function(e){return window.console&&window.console.log&&window.console.log(e),this},debug:function(t,n){var i=this.options.debug;return("all"==i||i===!0||e.isArray(i)&&-1!=e.inArray(t,i))&&window.console&&window.console.log&&window.console.log("elfinder debug: ["+t+"] ["+this.id+"]",n),this},time:function(e){window.console&&window.console.time&&window.console.time(e)},timeEnd:function(e){window.console&&window.console.timeEnd&&window.console.timeEnd(e)}},elFinder.prototype.version="2.0.2",e.fn.elfinder=function(e){return"instance"==e?this.getElFinder():this.each(function(){var t="string"==typeof e?e:"";switch(this.elfinder||new elFinder(this,"object"==typeof e?e:{}),t){case"close":case"hide":this.elfinder.hide();break;case"open":case"show":this.elfinder.show();break;case"destroy":this.elfinder.destroy()}})},e.fn.getElFinder=function(){var e;return this.each(function(){return this.elfinder?(e=this.elfinder,!1):void 0}),e},elFinder.prototype._options={url:"",requestType:"get",transport:{},urlUpload:"",dragUploadAllow:"auto",iframeTimeout:0,customData:{},handlers:{},lang:"en",cssClass:"",commands:["open","reload","home","up","back","forward","getfile","quicklook","download","rm","duplicate","rename","mkdir","mkfile","upload","copy","cut","paste","edit","extract","archive","search","info","view","help","resize","sort","netmount"],commandsOptions:{getfile:{onlyURL:!1,multiple:!1,folders:!1,oncomplete:""},upload:{ui:"uploadbutton"},quicklook:{autoplay:!0,jplayer:"extensions/jplayer"},edit:{mimes:[],editors:[]},help:{view:["about","shortcuts","help"]}},getFileCallback:null,defaultView:"icons",ui:["toolbar","tree","path","stat"],uiOptions:{toolbar:[["back","forward"],["netmount"],["mkdir","mkfile","upload"],["open","download","getfile"],["info"],["quicklook"],["copy","cut","paste"],["rm"],["duplicate","rename","edit","resize"],["extract","archive"],["search"],["view","sort"],["help"]],tree:{openRootOnLoad:!0,syncTree:!0},navbar:{minWidth:150,maxWidth:500},cwd:{oldSchool:!1}},onlyMimes:[],sortRules:{},sortType:"name",sortOrder:"asc",sortStickFolders:!0,clientFormatDate:!0,UTCDate:!1,dateFormat:"",fancyDateFormat:"",width:"auto",height:400,resizable:!0,notifyDelay:500,allowShortcuts:!0,rememberLastDir:!0,showFiles:30,showThreshold:50,validName:!1,sync:0,loadTmbs:5,cookie:{expires:30,domain:"",path:"/",secure:!1},contextmenu:{navbar:["open","|","copy","cut","paste","duplicate","|","rm","|","info"],cwd:["reload","back","|","upload","mkdir","mkfile","paste","|","sort","|","info"],files:["getfile","|","open","quicklook","|","download","|","copy","cut","paste","duplicate","|","rm","|","edit","rename","resize","|","archive","extract","|","info"]},debug:["error","warning","event-destroy"]},elFinder.prototype.history=function(t){var n,i=this,r=!0,a=[],o=function(){a=[t.cwd().hash],n=0,r=!0},s=function(s){return s&&i.canForward()||!s&&i.canBack()?(r=!1,t.exec("open",a[s?++n:--n]).fail(o)):e.Deferred().reject()};this.canBack=function(){return n>0},this.canForward=function(){return a.length-1>n},this.back=s,this.forward=function(){return s(!0)},t.open(function(){var e=a.length,i=t.cwd().hash;r&&(n>=0&&e>n+1&&a.splice(n+1),a[a.length-1]!=i&&a.push(i),n=a.length-1),r=!0}).reload(o)},elFinder.prototype.command=function(t){this.fm=t,this.name="",this.title="",this.state=-1,this.alwaysEnabled=!1,this._disabled=!1,this.disableOnSearch=!1,this.updateOnSelect=!0,this._handlers={enable:function(){this.update(void 0,this.value)},disable:function(){this.update(-1,this.value)},"open reload load":function(){this._disabled=!(this.alwaysEnabled||this.fm.isCommandEnabled(this.name)),this.update(void 0,this.value),this.change()}},this.handlers={},this.shortcuts=[],this.options={ui:"button"},this.setup=function(t,n){var i,r,a=this,o=this.fm;for(this.name=t,this.title=o.messages["cmd"+t]?o.i18n("cmd"+t):t,this.options=e.extend({},this.options,n),this.listeners=[],this.updateOnSelect&&(this._handlers.select=function(){this.update(void 0,this.value)}),e.each(e.extend({},a._handlers,a.handlers),function(t,n){o.bind(t,e.proxy(n,a))}),i=0;this.shortcuts.length>i;i++)r=this.shortcuts[i],r.callback=e.proxy(r.callback||function(){this.exec()},this),!r.description&&(r.description=this.title),o.shortcut(r);this.disableOnSearch&&o.bind("search searchend",function(e){a._disabled="search"==e.type,a.update(void 0,a.value)}),this.init()},this.init=function(){},this.exec=function(){return e.Deferred().reject()},this.disabled=function(){return 0>this.state},this.enabled=function(){return this.state>-1},this.active=function(){return this.state>0},this.getstate=function(){return-1},this.update=function(e,t){var n=this.state,i=this.value;this.state=this._disabled?-1:void 0!==e?e:this.getstate(),this.value=t,(n!=this.state||i!=this.value)&&this.change()},this.change=function(e){var t,n;if("function"==typeof e)this.listeners.push(e);else for(n=0;this.listeners.length>n;n++){t=this.listeners[n];try{t(this.state,this.value)}catch(i){this.fm.debug("error",i)}}return this},this.hashes=function(n){return n?e.map(e.isArray(n)?n:[n],function(e){return t.file(e)?e:null}):t.selected()},this.files=function(t){var n=this.fm;return t?e.map(e.isArray(t)?t:[t],function(e){return n.file(e)||null}):n.selectedFiles()}},elFinder.prototype.resources={"class":{hover:"ui-state-hover",active:"ui-state-active",disabled:"ui-state-disabled",draggable:"ui-draggable",droppable:"ui-droppable",adroppable:"elfinder-droppable-active",cwdfile:"elfinder-cwd-file",cwd:"elfinder-cwd",tree:"elfinder-tree",treeroot:"elfinder-navbar-root",navdir:"elfinder-navbar-dir",navdirwrap:"elfinder-navbar-dir-wrapper",navarrow:"elfinder-navbar-arrow",navsubtree:"elfinder-navbar-subtree",navcollapse:"elfinder-navbar-collapsed",navexpand:"elfinder-navbar-expanded",treedir:"elfinder-tree-dir",placedir:"elfinder-place-dir",searchbtn:"elfinder-button-search"},tpl:{perms:'<span class="elfinder-perms"/>',symlink:'<span class="elfinder-symlink"/>',navicon:'<span class="elfinder-nav-icon"/>',navspinner:'<span class="elfinder-navbar-spinner"/>',navdir:'<div class="elfinder-navbar-wrapper"><span id="{id}" class="ui-corner-all elfinder-navbar-dir {cssclass}"><span class="elfinder-navbar-arrow"/><span class="elfinder-navbar-icon"/>{symlink}{permissions}{name}</span><div class="elfinder-navbar-subtree"/></div>'},mimes:{text:["application/x-empty","application/javascript","application/xhtml+xml","audio/x-mp3-playlist","application/x-web-config","application/docbook+xml","application/x-php","application/x-perl","application/x-awk","application/x-config","application/x-csh","application/xml"]},mixin:{make:function(){var t=this.fm,n=this.name,i=t.getUI("cwd"),r=e.Deferred().fail(function(e){i.trigger("unselectall"),e&&t.error(e)}).always(function(){c.remove(),d.remove(),t.enable()}),a="tmp_"+parseInt(1e5*Math.random()),o=t.cwd().hash,s=new Date,l={hash:a,name:t.uniqueName(this.prefix),mime:this.mime,read:!0,write:!0,date:"Today "+s.getHours()+":"+s.getMinutes()},d=i.trigger("create."+t.namespace,l).find("#"+a),c=e('<input type="text"/>').keydown(function(t){t.stopImmediatePropagation(),t.keyCode==e.ui.keyCode.ESCAPE?r.reject():t.keyCode==e.ui.keyCode.ENTER&&c.blur()}).mousedown(function(e){e.stopPropagation()}).blur(function(){var i=e.trim(c.val()),s=c.parent();if(s.length){if(!i)return r.reject("errInvName");if(t.fileByName(i,o))return r.reject(["errExists",i]);s.html(t.escape(i)),t.lockfiles({files:[a]}),t.request({data:{cmd:n,name:i,target:o},notify:{type:n,cnt:1},preventFail:!0,syncOnFail:!0}).fail(function(e){r.reject(e)}).done(function(e){r.resolve(e)})}});return this.disabled()||!d.length?r.reject():(t.disable(),d.find(".elfinder-cwd-filename").empty("").append(c.val(l.name)),c.select().focus(),r)}}},e.fn.dialogelfinder=function(t){var n="elfinderPosition",i="elfinderDestroyOnClose";if(this.not(".elfinder").each(function(){var r=(e(document),e('<div class="ui-widget-header dialogelfinder-drag ui-corner-top">'+(t.title||"Files")+"</div>")),a=(e('<a href="#" class="dialogelfinder-drag-close ui-corner-all"><span class="ui-icon ui-icon-closethick"/></a>').appendTo(r).click(function(e){e.preventDefault(),a.dialogelfinder("close")}),e(this).addClass("dialogelfinder").css("position","absolute").hide().appendTo("body").draggable({handle:".dialogelfinder-drag",containment:"window"}).elfinder(t).prepend(r));a.elfinder("instance"),a.width(parseInt(a.width())||840).data(i,!!t.destroyOnClose).find(".elfinder-toolbar").removeClass("ui-corner-top"),t.position&&a.data(n,t.position),t.autoOpen!==!1&&e(this).dialogelfinder("open")}),"open"==t){var r=e(this),a=r.data(n)||{top:parseInt(e(document).scrollTop()+(e(window).height()<r.height()?2:(e(window).height()-r.height())/2)),left:parseInt(e(document).scrollLeft()+(e(window).width()<r.width()?2:(e(window).width()-r.width())/2))},o=100;r.is(":hidden")&&(e("body").find(":visible").each(function(){var t,n=e(this);this!==r[0]&&"absolute"==n.css("position")&&(t=parseInt(n.zIndex()))>o&&(o=t+1)}),r.zIndex(o).css(a).show().trigger("resize"),setTimeout(function(){r.trigger("resize").mousedown()},200))}else if("close"==t){var r=e(this);r.is(":visible")&&(r.data(i)?r.elfinder("destroy").remove():r.elfinder("close"))}else if("instance"==t)return e(this).getElFinder();return this},elFinder&&elFinder.prototype&&"object"==typeof elFinder.prototype.i18&&(elFinder.prototype.i18.en={translator:"Troex Nevelin &lt;troex@fury.scancode.ru&gt;",language:"English",direction:"ltr",dateFormat:"M d, Y h:i A",fancyDateFormat:"$1 h:i A",messages:{error:"Error",errUnknown:"Unknown error.",errUnknownCmd:"Unknown command.",errJqui:"Invalid jQuery UI configuration. Selectable, draggable and droppable components must be included.",errNode:"elFinder requires DOM Element to be created.",errURL:"Invalid elFinder configuration! URL option is not set.",errAccess:"Access denied.",errConnect:"Unable to connect to backend.",errAbort:"Connection aborted.",errTimeout:"Connection timeout.",errNotFound:"Backend not found.",errResponse:"Invalid backend response.",errConf:"Invalid backend configuration.",errJSON:"PHP JSON module not installed.",errNoVolumes:"Readable volumes not available.",errCmdParams:'Invalid parameters for command "$1".',errDataNotJSON:"Data is not JSON.",errDataEmpty:"Data is empty.",errCmdReq:"Backend request requires command name.",errOpen:'Unable to open "$1".',errNotFolder:"Object is not a folder.",errNotFile:"Object is not a file.",errRead:'Unable to read "$1".',errWrite:'Unable to write into "$1".',errPerm:"Permission denied.",errLocked:'"$1" is locked and can not be renamed, moved or removed.',errExists:'File named "$1" already exists.',errInvName:"Invalid file name.",errFolderNotFound:"Folder not found.",errFileNotFound:"File not found.",errTrgFolderNotFound:'Target folder "$1" not found.',errPopup:"Browser prevented opening popup window. To open file enable it in browser options.",errMkdir:'Unable to create folder "$1".',errMkfile:'Unable to create file "$1".',errRename:'Unable to rename "$1".',errCopyFrom:'Copying files from volume "$1" not allowed.',errCopyTo:'Copying files to volume "$1" not allowed.',errUpload:"Upload error.",errUploadFile:'Unable to upload "$1".',errUploadNoFiles:"No files found for upload.",errUploadTotalSize:"Data exceeds the maximum allowed size.",errUploadFileSize:"File exceeds maximum allowed size.",errUploadMime:"File type not allowed.",errUploadTransfer:'"$1" transfer error.',errNotReplace:'Object "$1" already exists at this location and can not be replaced by object with another type.',errReplace:'Unable to replace "$1".',errSave:'Unable to save "$1".',errCopy:'Unable to copy "$1".',errMove:'Unable to move "$1".',errCopyInItself:'Unable to copy "$1" into itself.',errRm:'Unable to remove "$1".',errRmSrc:"Unable remove source file(s).",errExtract:'Unable to extract files from "$1".',errArchive:"Unable to create archive.",errArcType:"Unsupported archive type.",errNoArchive:"File is not archive or has unsupported archive type.",errCmdNoSupport:"Backend does not support this command.",errReplByChild:"The folder “$1” can’t be replaced by an item it contains.",errArcSymlinks:"For security reason denied to unpack archives contains symlinks or files with not allowed names.",errArcMaxSize:"Archive files exceeds maximum allowed size.",errResize:'Unable to resize "$1".',errUsupportType:"Unsupported file type.",errNotUTF8Content:'File "$1" is not in UTF-8 and cannot be edited.',errNetMount:'Unable to mount "$1".',errNetMountNoDriver:"Unsupported protocol.",errNetMountFailed:"Mount failed.",errNetMountHostReq:"Host required.",errSessionExpires:"Your session has expired due to inactivity.",errCreatingTempDir:'Unable to create temporary directory: "$1"',errFtpDownloadFile:'Unable to download file from FTP: "$1"',errFtpUploadFile:'Unable to upload file to FTP: "$1"',errFtpMkdir:'Unable to create remote directory on FTP: "$1"',errArchiveExec:'Error while archiving files: "$1"',errExtractExec:'Error while extracting files: "$1"',cmdarchive:"Create archive",cmdback:"Back",cmdcopy:"Copy",cmdcut:"Cut",cmddownload:"Download",cmdduplicate:"Duplicate",cmdedit:"Edit file",cmdextract:"Extract files from archive",cmdforward:"Forward",cmdgetfile:"Select files",cmdhelp:"About this software",cmdhome:"Home",cmdinfo:"Get info",cmdmkdir:"New folder",cmdmkfile:"New text file",cmdopen:"Open",cmdpaste:"Paste",cmdquicklook:"Preview",cmdreload:"Reload",cmdrename:"Rename",cmdrm:"Delete",cmdsearch:"Find files",cmdup:"Go to parent directory",cmdupload:"Upload files",cmdview:"View",cmdresize:"Resize & Rotate",cmdsort:"Sort",cmdnetmount:"Mount network volume",btnClose:"Close",btnSave:"Save",btnRm:"Remove",btnApply:"Apply",btnCancel:"Cancel",btnNo:"No",btnYes:"Yes",btnMount:"Mount",ntfopen:"Open folder",ntffile:"Open file",ntfreload:"Reload folder content",ntfmkdir:"Creating directory",ntfmkfile:"Creating files",ntfrm:"Delete files",ntfcopy:"Copy files",ntfmove:"Move files",ntfprepare:"Prepare to copy files",ntfrename:"Rename files",ntfupload:"Uploading files",ntfdownload:"Downloading files",ntfsave:"Save files",ntfarchive:"Creating archive",ntfextract:"Extracting files from archive",ntfsearch:"Searching files",ntfresize:"Resizing images",ntfsmth:"Doing something",ntfloadimg:"Loading image",ntfnetmount:"Mounting network volume",dateUnknown:"unknown",Today:"Today",Yesterday:"Yesterday",Jan:"Jan",Feb:"Feb",Mar:"Mar",Apr:"Apr",May:"May",Jun:"Jun",Jul:"Jul",Aug:"Aug",Sep:"Sep",Oct:"Oct",Nov:"Nov",Dec:"Dec",sortname:"by name",sortkind:"by kind",sortsize:"by size",sortdate:"by date",sortFoldersFirst:"Folders first",confirmReq:"Confirmation required",confirmRm:"Are you sure you want to remove files?<br/>This cannot be undone!",confirmRepl:"Replace old file with new one?",apllyAll:"Apply to all",name:"Name",size:"Size",perms:"Permissions",modify:"Modified",kind:"Kind",read:"read",write:"write",noaccess:"no access",and:"and",unknown:"unknown",selectall:"Select all files",selectfiles:"Select file(s)",selectffile:"Select first file",selectlfile:"Select last file",viewlist:"List view",viewicons:"Icons view",places:"Places",calc:"Calculate",path:"Path",aliasfor:"Alias for",locked:"Locked",dim:"Dimensions",files:"Files",folders:"Folders",items:"Items",yes:"yes",no:"no",link:"Link",searcresult:"Search results",selected:"selected items",about:"About",shortcuts:"Shortcuts",help:"Help",webfm:"Web file manager",ver:"Version",protocolver:"protocol version",homepage:"Project home",docs:"Documentation",github:"Fork us on Github",twitter:"Follow us on twitter",facebook:"Join us on facebook",team:"Team",chiefdev:"chief developer",developer:"developer",contributor:"contributor",maintainer:"maintainer",translator:"translator",icons:"Icons",dontforget:"and don't forget to take your towel",shortcutsof:"Shortcuts disabled",dropFiles:"Drop files here",or:"or",selectForUpload:"Select files to upload",moveFiles:"Move files",copyFiles:"Copy files",rmFromPlaces:"Remove from places",aspectRatio:"Aspect ratio",scale:"Scale",width:"Width",height:"Height",resize:"Resize",crop:"Crop",rotate:"Rotate","rotate-cw":"Rotate 90 degrees CW","rotate-ccw":"Rotate 90 degrees CCW",degree:"°",netMountDialogTitle:"Mount network volume",protocol:"Protocol",host:"Host",port:"Port",user:"User",pass:"Password",kindUnknown:"Unknown",kindFolder:"Folder",kindAlias:"Alias",kindAliasBroken:"Broken alias",kindApp:"Application",kindPostscript:"Postscript document",kindMsOffice:"Microsoft Office document",kindMsWord:"Microsoft Word document",kindMsExcel:"Microsoft Excel document",kindMsPP:"Microsoft Powerpoint presentation",kindOO:"Open Office document",kindAppFlash:"Flash application",kindPDF:"Portable Document Format (PDF)",kindTorrent:"Bittorrent file",kind7z:"7z archive",kindTAR:"TAR archive",kindGZIP:"GZIP archive",kindBZIP:"BZIP archive",kindZIP:"ZIP archive",kindRAR:"RAR archive",kindJAR:"Java JAR file",kindTTF:"True Type font",kindOTF:"Open Type font",kindRPM:"RPM package",kindText:"Text document",kindTextPlain:"Plain text",kindPHP:"PHP source",kindCSS:"Cascading style sheet",kindHTML:"HTML document",kindJS:"Javascript source",kindRTF:"Rich Text Format",kindC:"C source",kindCHeader:"C header source",kindCPP:"C++ source",kindCPPHeader:"C++ header source",kindShell:"Unix shell script",kindPython:"Python source",kindJava:"Java source",kindRuby:"Ruby source",kindPerl:"Perl script",kindSQL:"SQL source",kindXML:"XML document",kindAWK:"AWK source",kindCSV:"Comma separated values",kindDOCBOOK:"Docbook XML document",kindImage:"Image",kindBMP:"BMP image",kindJPEG:"JPEG image",kindGIF:"GIF Image",kindPNG:"PNG Image",kindTIFF:"TIFF image",kindTGA:"TGA image",kindPSD:"Adobe Photoshop image",kindXBITMAP:"X bitmap image",kindPXM:"Pixelmator image",kindAudio:"Audio media",kindAudioMPEG:"MPEG audio",kindAudioMPEG4:"MPEG-4 audio",kindAudioMIDI:"MIDI audio",kindAudioOGG:"Ogg Vorbis audio",kindAudioWAV:"WAV audio",AudioPlaylist:"MP3 playlist",kindVideo:"Video media",kindVideoDV:"DV movie",kindVideoMPEG:"MPEG movie",kindVideoMPEG4:"MPEG-4 movie",kindVideoAVI:"AVI movie",kindVideoMOV:"Quick Time movie",kindVideoWM:"Windows Media movie",kindVideoFlash:"Flash movie",kindVideoMKV:"Matroska movie",kindVideoOGG:"Ogg movie"}}),e.fn.elfinderbutton=function(t){return this.each(function(){var n,i="class",r=t.fm,a=r.res(i,"disabled"),o=r.res(i,"active"),s=r.res(i,"hover"),l="elfinder-button-menu-item",d="elfinder-button-menu-item-selected",c=e(this).addClass("ui-state-default elfinder-button").attr("title",t.title).append('<span class="elfinder-button-icon elfinder-button-icon-'+t.name+'"/>').hover(function(e){!c.is("."+a)&&c["mouseleave"==e.type?"removeClass":"addClass"](s)}).click(function(e){c.is("."+a)||(n&&t.variants.length>1?(n.is(":hidden")&&t.fm.getUI().click(),e.stopPropagation(),n.slideToggle(100)):t.exec())}),p=function(){n.hide()};e.isArray(t.variants)&&(c.addClass("elfinder-menubutton"),n=e('<div class="ui-widget ui-widget-content elfinder-button-menu ui-corner-all"/>').hide().appendTo(c).zIndex(12+c.zIndex()).delegate("."+l,"hover",function(){e(this).toggleClass(s)}).delegate("."+l,"click",function(n){n.preventDefault(),n.stopPropagation(),c.removeClass(s),t.exec(t.fm.selected(),e(this).data("value"))}),t.fm.bind("disable select",p).getUI().click(p),t.change(function(){n.html(""),e.each(t.variants,function(i,r){n.append(e('<div class="'+l+'">'+r[1]+"</div>").data("value",r[0]).addClass(r[0]==t.value?d:""))})})),t.change(function(){t.disabled()?c.removeClass(o+" "+s).addClass(a):(c.removeClass(a),c[t.active()?"addClass":"removeClass"](o))}).change()})},e.fn.elfindercontextmenu=function(t){return this.each(function(){var n=e(this).addClass("ui-helper-reset ui-widget ui-state-default ui-corner-all elfinder-contextmenu elfinder-contextmenu-"+t.direction).hide().appendTo("body").delegate(".elfinder-contextmenu-item","mouseenter mouseleave",function(){e(this).toggleClass("ui-state-hover")}),i="ltr"==t.direction?"left":"right",r=e.extend({},t.options.contextmenu),a='<div class="elfinder-contextmenu-item"><span class="elfinder-button-icon {icon} elfinder-contextmenu-icon"/><span>{label}</span></div>',o=function(t,n,i){return e(a.replace("{icon}",n?"elfinder-button-icon-"+n:"").replace("{label}",t)).click(function(e){e.stopPropagation(),e.stopPropagation(),i()})},s=function(r,a){var o=e(window),s=n.outerWidth(),l=n.outerHeight(),d=o.width(),c=o.height(),p=o.scrollTop(),u=o.scrollLeft(),h={top:(c>a+l?a:a-l>0?a-l:a)+p,left:(d>r+s?r:r-s)+u,"z-index":100+t.getUI("workzone").zIndex()};n.css(h).show(),h={"z-index":h["z-index"]+10},h[i]=parseInt(n.width()),n.find(".elfinder-contextmenu-sub").css(h)},l=function(){n.hide().empty()},d=function(i,a){var s=!1;e.each(r[i]||[],function(i,r){var d,c,p;if("|"==r&&s)return n.append('<div class="elfinder-contextmenu-separator"/>'),s=!1,void 0;if(d=t.command(r),d&&-1!=d.getstate(a)){if(d.variants){if(!d.variants.length)return;c=o(d.title,d.name,function(){}),p=e('<div class="ui-corner-all elfinder-contextmenu-sub"/>').appendTo(c.append('<span class="elfinder-contextmenu-arrow"/>')),c.addClass("elfinder-contextmenu-group").hover(function(){p.toggle()}),e.each(d.variants,function(t,n){p.append(e('<div class="elfinder-contextmenu-item"><span>'+n[1]+"</span></div>").click(function(e){e.stopPropagation(),l(),d.exec(a,n[0])}))})}else c=o(d.title,d.name,function(){l(),d.exec(a)});n.append(c),s=!0}})},c=function(t){e.each(t,function(e,t){var i;t.label&&"function"==typeof t.callback&&(i=o(t.label,t.icon,function(){l(),t.callback()}),n.append(i))})};t.one("load",function(){t.bind("contextmenu",function(e){var t=e.data;l(),t.type&&t.targets?d(t.type,t.targets):t.raw&&c(t.raw),n.children().length&&s(t.x,t.y)}).one("destroy",function(){n.remove()}).bind("disable select",l).getUI().click(l)})})},e.fn.elfindercwd=function(t,n){return this.not(".elfinder-cwd").each(function(){var i="list"==t.viewType,r="select."+t.namespace,a="unselect."+t.namespace,o="disable."+t.namespace,s="enable."+t.namespace,l="class",d=t.res(l,"cwdfile"),c="."+d,p="ui-selected",u=t.res(l,"disabled"),h=t.res(l,"draggable"),f=t.res(l,"droppable"),m=t.res(l,"hover"),g=t.res(l,"adroppable"),v=d+"-tmp",b=t.options.loadTmbs>0?t.options.loadTmbs:5,y="",w=[],x={icon:'<div id="{hash}" class="'+d+' {permsclass} {dirclass} ui-corner-all" title="{tooltip}"><div class="elfinder-cwd-file-wrapper ui-corner-all"><div class="elfinder-cwd-icon {mime} ui-corner-all" unselectable="on" {style}/>{marker}</div><div class="elfinder-cwd-filename" title="{name}">{name}</div></div>',row:'<tr id="{hash}" class="'+d+' {permsclass} {dirclass}" title="{tooltip}"><td><div class="elfinder-cwd-file-wrapper"><span class="elfinder-cwd-icon {mime}"/>{marker}<span class="elfinder-cwd-filename">{name}</span></div></td><td>{perms}</td><td>{date}</td><td>{size}</td><td>{kind}</td></tr>'},k=t.res("tpl","perms"),C=t.res("tpl","symlink"),I={permsclass:function(e){return t.perms2class(e)},perms:function(e){return t.formatPermissions(e)},dirclass:function(e){return"directory"==e.mime?"directory":""},mime:function(e){return t.mime2class(e.mime)},size:function(e){return t.formatSize(e.size)},date:function(e){return t.formatDate(e)},kind:function(e){return t.mime2kind(e)},marker:function(e){return(e.alias||"symlink-broken"==e.mime?C:"")+(e.read&&e.write?"":k)},tooltip:function(e){var n=t.formatDate(e)+(e.size>0?" ("+t.formatSize(e.size)+")":"");return e.tooltip?t.escape(e.tooltip).replace(/"/g,"&quot;").replace(/\r/g,"&#13;")+"&#13;"+n:n}},F=function(e){return e.name=t.escape(e.name),x[i?"row":"icon"].replace(/\{([a-z]+)\}/g,function(t,n){return I[n]?I[n](e):e[n]?e[n]:""})},T=!1,P=function(t,n){function o(e,t){return e[t+"All"]("[id]:not(."+u+"):not(.elfinder-cwd-parent):first")}var s,l,d,c,h,f=e.ui.keyCode,m=t==f.LEFT||t==f.UP,g=K.find("[id]."+p);if(g.length)if(s=g.filter(m?":first":":last"),d=o(s,m?"prev":"next"),d.length)if(i||t==f.LEFT||t==f.RIGHT)l=d;else if(c=s.position().top,h=s.position().left,l=s,m){do l=l.prev("[id]");while(l.length&&!(c>l.position().top&&h>=l.position().left));l.is("."+u)&&(l=o(l,"next"))}else{do l=l.next("[id]");while(l.length&&!(l.position().top>c&&l.position().left>=h));l.is("."+u)&&(l=o(l,"prev")),l.length||(d=K.find("[id]:not(."+u+"):last"),d.position().top>c&&(l=d))}else l=s;else l=K.find("[id]:not(."+u+"):not(.elfinder-cwd-parent):"+(m?"last":"first"));l&&l.length&&!l.is(".elfinder-cwd-parent")&&(n?l=s.add(s[m?"prevUntil":"nextUntil"]("#"+l.attr("id"))).add(l):g.trigger(a),l.trigger(r),S(l.filter(m?":first":":last")),M())},z=[],O=function(e){K.find("#"+e).trigger(r)},A=function(){var n=t.cwd().hash;K.find("[id]:not(."+p+"):not(.elfinder-cwd-parent)").trigger(r),z=e.map(t.files(),function(e){return e.phash==n?e.hash:null}),M()},D=function(){z=[],K.find("[id]."+p).trigger(a),M()},M=function(){t.trigger("select",{selected:z})},S=function(e){var t=e.position().top,n=e.outerHeight(!0),i=G.scrollTop(),r=G.innerHeight();t+n>i+r?G.scrollTop(parseInt(t+n-r)):i>t&&G.scrollTop(t)},E=[],j=function(e){for(var t=E.length;t--;)if(E[t].hash==e)return t;return-1},U="scroll."+t.namespace,R=function(){var n,a=[],o=!1,s=[],l={},d=K.find("[id]:last"),c=!d.length,u=i?K.children("table").children("tbody"):K;if(!E.length)return G.unbind(U);for(;(!d.length||d.position().top<=G.height()+G.scrollTop()+t.options.showThreshold)&&(n=E.splice(0,t.options.showFiles)).length;)a=e.map(n,function(e){return e.hash&&e.name?("directory"==e.mime&&(o=!0),e.tmb&&(1===e.tmb?s.push(e.hash):l[e.hash]=e.tmb),F(e)):null}),u.append(a.join("")),d=K.find("[id]:last"),c&&K.scrollTop(0);L(l),s.length&&N(s),o&&H(),z.length&&u.find("[id]:not(."+p+"):not(.elfinder-cwd-parent)").each(function(){var t=this.id;-1!==e.inArray(t,z)&&e(this).trigger(r)})},q=e.extend({},t.droppable,{over:function(n,i){var r=t.cwd().hash;e.each(i.helper.data("files"),function(e,n){return t.file(n).phash==r?(K.removeClass(g),!1):void 0})}}),H=function(){setTimeout(function(){K.find(".directory:not(."+f+",.elfinder-na,.elfinder-ro)").droppable(t.droppable)},20)},L=function(n){var i,r=t.option("tmbUrl"),a=!0;return e.each(n,function(t,n){var o=K.find("#"+t);o.length?function(t,n){e("<img/>").load(function(){t.find(".elfinder-cwd-icon").css("background","url('"+n+"') center center no-repeat")}).attr("src",n)}(o,r+n):(a=!1,-1!=(i=j(t))&&(E[i].tmb=n))}),a},N=function(e){var n=[];return t.oldAPI?(t.request({data:{cmd:"tmb",current:t.cwd().hash},preventFail:!0}).done(function(e){L(e.images||[])&&e.tmb&&N()}),void 0):(n=n=e.splice(0,b),n.length&&t.request({data:{cmd:"tmb",targets:n},preventFail:!0}).done(function(t){L(t.images||[])&&N(e)}),void 0)},_=function(e){for(var n,r,a,o,s=i?K.find("tbody"):K,l=e.length,d=[],c={},p=!1,u=function(e){for(var n,i=K.find("[id]:first");i.length;){if(n=t.file(i.attr("id")),!i.is(".elfinder-cwd-parent")&&n&&0>t.compare(e,n))return i;i=i.next("[id]")}},h=function(e){var n,i=E.length;for(n=0;i>n;n++)if(0>t.compare(e,E[n]))return n;return i||-1};l--;)n=e[l],r=n.hash,K.find("#"+r).length||((a=u(n))&&a.length?a.before(F(n)):(o=h(n))>=0?E.splice(o,0,n):s.append(F(n)),K.find("#"+r).length&&("directory"==n.mime?p=!0:n.tmb&&(1===n.tmb?d.push(r):c[r]=n.tmb)));L(c),d.length&&N(d),p&&H()},W=function(e){for(var n,i,r,a=e.length;a--;)if(n=e[a],(i=K.find("#"+n)).length)try{i.detach()}catch(o){t.debug("error",o)}else-1!=(r=j(n))&&E.splice(r,1)},V={name:t.i18n("name"),perm:t.i18n("perms"),mod:t.i18n("modify"),size:t.i18n("size"),kind:t.i18n("kind")},B=function(r,a){var o=t.cwd().hash;D();try{K.children("table,"+c).remove()}catch(s){K.html("")}if(K.removeClass("elfinder-cwd-view-icons elfinder-cwd-view-list").addClass("elfinder-cwd-view-"+(i?"list":"icons")),G[i?"addClass":"removeClass"]("elfinder-cwd-wrapper-list"),i&&K.html('<table><thead><tr class="ui-state-default"><td >'+V.name+"</td><td>"+V.perm+"</td><td>"+V.mod+"</td><td>"+V.size+"</td><td>"+V.kind+"</td></tr></thead><tbody/></table>"),E=e.map(r,function(e){return a||e.phash==o?e:null}),E=t.sortFiles(E),G.bind(U,R).trigger(U),o=t.cwd().phash,n.oldSchool&&o&&!y){var l=e.extend(!0,{},t.file(o),{name:"..",mime:"directory"});l=e(F(l)).addClass("elfinder-cwd-parent").bind("mousedown click mouseup dblclick mouseenter",function(e){e.preventDefault(),e.stopPropagation()}).dblclick(function(){t.exec("open",this.id)}),(i?K.find("tbody"):K).prepend(l)}},K=e(this).addClass("ui-helper-clearfix elfinder-cwd").attr("unselectable","on").delegate(c,"click."+t.namespace,function(t){var n,i=this.id?e(this):e(this).parents("[id]:first"),o=i.prevAll("."+p+":first"),s=i.nextAll("."+p+":first"),l=o.length,d=s.length;t.stopImmediatePropagation(),t.shiftKey&&(l||d)?(n=l?i.prevUntil("#"+o.attr("id")):i.nextUntil("#"+s.attr("id")),n.add(i).trigger(r)):t.ctrlKey||t.metaKey?i.trigger(i.is("."+p)?a:r):(D(),i.trigger(r)),M()}).delegate(c,"dblclick."+t.namespace,function(){t.dblclick({file:this.id})
}).delegate(c,"mouseenter."+t.namespace,function(){var n=e(this),r=i?n:n.children();n.is("."+v)||r.is("."+h+",."+u)||r.draggable(t.draggable)}).delegate(c,r,function(){var t=e(this),n=t.attr("id");T||t.is("."+u)||(t.addClass(p).children().addClass(m),-1===e.inArray(n,z)&&z.push(n))}).delegate(c,a,function(){var t,n=e(this),i=n.attr("id");T||(e(this).removeClass(p).children().removeClass(m),t=e.inArray(i,z),-1!==t&&z.splice(t,1))}).delegate(c,o,function(){var t=e(this).removeClass(p).addClass(u),n=(i?t:t.children()).removeClass(m);t.is("."+f)&&t.droppable("disable"),n.is("."+h)&&n.draggable("disable"),!i&&n.removeClass(u)}).delegate(c,s,function(){var t=e(this).removeClass(u),n=i?t:t.children();t.is("."+f)&&t.droppable("enable"),n.is("."+h)&&n.draggable("enable")}).delegate(c,"scrolltoview",function(){S(e(this))}).delegate(c,"hover",function(n){t.trigger("hover",{hash:e(this).attr("id"),type:n.type})}).bind("contextmenu."+t.namespace,function(n){var i=e(n.target).closest("."+d);i.length&&(n.stopPropagation(),n.preventDefault(),i.is("."+u)||(i.is("."+p)||(D(),i.trigger(r),M()),t.trigger("contextmenu",{type:"files",targets:t.selected(),x:n.clientX,y:n.clientY})))}).selectable({filter:c,stop:M,selected:function(t,n){e(n.selected).trigger(r)},unselected:function(t,n){e(n.unselected).trigger(a)}}).droppable(q).bind("create."+t.namespace,function(t,n){var r=i?K.find("tbody"):K,a=r.find(".elfinder-cwd-parent"),n=e(F(n)).addClass(v);D(),a.length?a.after(n):r.prepend(n),K.scrollTop(0)}).bind("unselectall",D).bind("selectfile",function(e,t){K.find("#"+t).trigger(r),M()}),G=e('<div class="elfinder-cwd-wrapper"/>').bind("contextmenu",function(e){e.preventDefault(),t.trigger("contextmenu",{type:"cwd",targets:[t.cwd().hash],x:e.clientX,y:e.clientY})}),$=function(){var t=0;G.siblings(".elfinder-panel:visible").each(function(){t+=e(this).outerHeight(!0)}),G.height(X.height()-t)},J=e(this).parent().resize($),X=J.children(".elfinder-workzone").append(G.append(this));t.dragUpload&&(G[0].addEventListener("dragenter",function(e){e.preventDefault(),e.stopPropagation(),G.addClass(g)},!1),G[0].addEventListener("dragleave",function(e){e.preventDefault(),e.stopPropagation(),e.target==K[0]&&G.removeClass(g)},!1),G[0].addEventListener("dragover",function(e){e.preventDefault(),e.stopPropagation()},!1),G[0].addEventListener("drop",function(e){e.preventDefault(),G.removeClass(g),e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files.length&&t.exec("upload",{files:e.dataTransfer.files})},!1)),t.bind("open",function(e){B(e.data.files)}).bind("search",function(e){w=e.data.files,B(w,!0)}).bind("searchend",function(){w=[],y&&(y="",B(t.files()))}).bind("searchstart",function(e){y=e.data.query}).bind("sortchange",function(){B(y?w:t.files(),!!y)}).bind("viewchange",function(){var n=t.selected(),r="list"==t.storage("view");r!=i&&(i=r,B(t.files()),e.each(n,function(e,t){O(t)}),M()),$()}).add(function(n){var i=t.cwd().hash,r=y?e.map(n.data.added||[],function(e){return-1===e.name.indexOf(y)?null:e}):e.map(n.data.added||[],function(e){return e.phash==i?e:null});_(r)}).change(function(n){var i=t.cwd().hash,r=t.selected();y?e.each(n.data.changed||[],function(t,n){W([n.hash]),-1!==n.name.indexOf(y)&&(_([n]),-1!==e.inArray(n.hash,r)&&O(n.hash))}):e.each(e.map(n.data.changed||[],function(e){return e.phash==i?e:null}),function(t,n){W([n.hash]),_([n]),-1!==e.inArray(n.hash,r)&&O(n.hash)}),M()}).remove(function(e){W(e.data.removed||[]),M()}).bind("open add search searchend",function(){K.css("height","auto"),K.outerHeight(!0)<G.height()&&K.height(G.height()-(K.outerHeight(!0)-K.height())-2)}).dragstart(function(t){var n=e(t.data.target),i=t.data.originalEvent;n.is(c)&&(n.is("."+p)||(!(i.ctrlKey||i.metaKey||i.shiftKey)&&D(),n.trigger(r),M()),K.droppable("disable")),K.selectable("disable").removeClass(u),T=!0}).dragstop(function(){K.selectable("enable").droppable("enable"),T=!1}).bind("lockfiles unlockfiles",function(e){for(var t="lockfiles"==e.type?o:s,n=e.data.files||[],i=n.length;i--;)K.find("#"+n[i]).trigger(t);M()}).bind("mkdir mkfile duplicate upload rename archive extract",function(n){var i=t.cwd().hash;D(),e.each(n.data.added||[],function(e,t){t&&t.phash==i&&O(t.hash)}),M()}).shortcut({pattern:"ctrl+a",description:"selectall",callback:A}).shortcut({pattern:"left right up down shift+left shift+right shift+up shift+down",description:"selectfiles",type:"keydown",callback:function(e){P(e.keyCode,e.shiftKey)}}).shortcut({pattern:"home",description:"selectffile",callback:function(){D(),S(K.find("[id]:first").trigger(r)),M()}}).shortcut({pattern:"end",description:"selectlfile",callback:function(){D(),S(K.find("[id]:last").trigger(r)),M()}})}),this},e.fn.elfinderdialog=function(t){var n;return"string"==typeof t&&(n=this.closest(".ui-dialog")).length&&("open"==t?"none"==n.css("display")&&n.fadeIn(120,function(){n.trigger("open")}):"close"==t?"none"!=n.css("display")&&n.hide().trigger("close"):"destroy"==t?n.hide().remove():"toTop"==t&&n.trigger("totop")),t=e.extend({},e.fn.elfinderdialog.defaults,t),this.filter(":not(.ui-dialog-content)").each(function(){var n,i=e(this).addClass("ui-dialog-content ui-widget-content"),r=i.parent(),a="elfinder-dialog-active",o="elfinder-dialog",s="elfinder-dialog-notify",l="ui-state-hover",d=parseInt(1e6*Math.random()),c=r.children(".elfinder-overlay"),p=e('<div class="ui-dialog-buttonset"/>'),u=e('<div class=" ui-helper-clearfix ui-dialog-buttonpane ui-widget-content"/>').append(p),h=e('<div class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable std42-dialog  '+o+" "+t.cssClass+'"/>').hide().append(i).appendTo(r).draggable({handle:".ui-dialog-titlebar",containment:"document"}).css({width:t.width,height:t.height}).mousedown(function(t){t.stopPropagation(),e(document).mousedown(),h.is("."+a)||(r.find("."+o+":visible").removeClass(a),h.addClass(a).zIndex(f()+1))}).bind("open",function(){t.modal&&c.elfinderoverlay("show"),h.trigger("totop"),"function"==typeof t.open&&e.proxy(t.open,i[0])(),h.is("."+s)||r.find("."+o+":visible").not("."+s).each(function(){var t=e(this),n=parseInt(t.css("top")),i=parseInt(t.css("left")),r=parseInt(h.css("top")),a=parseInt(h.css("left"));t[0]==h[0]||n!=r&&i!=a||h.css({top:n+10+"px",left:i+10+"px"})})}).bind("close",function(){var n=r.find(".elfinder-dialog:visible"),a=f();t.modal&&c.elfinderoverlay("hide"),n.length?n.each(function(){var t=e(this);return t.zIndex()>=a?(t.trigger("totop"),!1):void 0}):setTimeout(function(){r.mousedown().click()},10),"function"==typeof t.close?e.proxy(t.close,i[0])():t.destroyOnClose&&h.hide().remove()}).bind("totop",function(){e(this).mousedown().find(".ui-button:first").focus().end().find(":text:first").focus()}),f=function(){var t=r.zIndex()+10;return r.find("."+o+":visible").each(function(){var n;this!=h[0]&&(n=e(this).zIndex(),n>t&&(t=n))}),t};t.position||(n=parseInt((r.height()-h.outerHeight())/2-42),t.position={top:(n>0?n:0)+"px",left:parseInt((r.width()-h.outerWidth())/2)+"px"}),h.css(t.position),t.closeOnEscape&&e(document).bind("keyup."+d,function(t){t.keyCode==e.ui.keyCode.ESCAPE&&h.is("."+a)&&(i.elfinderdialog("close"),e(document).unbind("keyup."+d))}),h.prepend(e('<div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix">'+t.title+"</div>").prepend(e('<a href="#" class="ui-dialog-titlebar-close ui-corner-all"><span class="ui-icon ui-icon-closethick"/></a>').mousedown(function(e){e.preventDefault(),i.elfinderdialog("close")}))),e.each(t.buttons,function(t,n){var r=e('<button type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"><span class="ui-button-text">'+t+"</span></button>").click(e.proxy(n,i[0])).hover(function(t){e(this)["mouseenter"==t.type?"focus":"blur"]()}).focus(function(){e(this).addClass(l)}).blur(function(){e(this).removeClass(l)}).keydown(function(t){var n;t.keyCode==e.ui.keyCode.ENTER?e(this).click():t.keyCode==e.ui.keyCode.TAB&&(n=e(this).next(".ui-button"),n.length?n.focus():e(this).parent().children(".ui-button:first").focus())});p.append(r)}),p.children().length&&h.append(u),t.resizable&&e.fn.resizable&&h.resizable({minWidth:t.minWidth,minHeight:t.minHeight,alsoResize:this}),"function"==typeof t.create&&e.proxy(t.create,this)(),t.autoOpen&&i.elfinderdialog("open")}),this},e.fn.elfinderdialog.defaults={cssClass:"",title:"",modal:!1,resizable:!0,autoOpen:!0,closeOnEscape:!0,destroyOnClose:!1,buttons:{},position:null,width:320,height:"auto",minWidth:200,minHeight:110},e.fn.elfindernavbar=function(t,n){return this.not(".elfinder-navbar").each(function(){var i,r=e(this).addClass("ui-state-default elfinder-navbar"),a=r.parent().resize(function(){r.height(o.height()-s)}),o=a.children(".elfinder-workzone").append(r),s=r.outerHeight()-r.height(),l="ltr"==t.direction;e.fn.resizable&&(i=r.resizable({handles:l?"e":"w",minWidth:n.minWidth||150,maxWidth:n.maxWidth||500}).bind("resize scroll",function(){i.css({top:parseInt(r.scrollTop())+"px",left:parseInt(l?r.width()+r.scrollLeft()-i.width()-2:r.scrollLeft()+2)})}).find(".ui-resizable-handle").zIndex(r.zIndex()+10),l||r.resize(function(){r.css("left",null).css("right",0)}),t.one("open",function(){setTimeout(function(){r.trigger("resize")},150)}))}),this},e.fn.elfinderoverlay=function(t){if(this.filter(":not(.elfinder-overlay)").each(function(){t=e.extend({},t),e(this).addClass("ui-widget-overlay elfinder-overlay").hide().mousedown(function(e){e.preventDefault(),e.stopPropagation()}).data({cnt:0,show:"function"==typeof t.show?t.show:function(){},hide:"function"==typeof t.hide?t.hide:function(){}})}),"show"==t){var n=this.eq(0),i=n.data("cnt")+1,r=n.data("show");n.data("cnt",i),n.is(":hidden")&&(n.zIndex(n.parent().zIndex()+1),n.show(),r())}if("hide"==t){var n=this.eq(0),i=n.data("cnt")-1,a=n.data("hide");n.data("cnt",i),0==i&&n.is(":visible")&&(n.hide(),a())}return this},e.fn.elfinderpanel=function(t){return this.each(function(){var n=e(this).addClass("elfinder-panel ui-state-default ui-corner-all"),i="margin-"+("ltr"==t.direction?"left":"right");t.one("load",function(){var e=t.getUI("navbar");n.css(i,parseInt(e.outerWidth(!0))),e.bind("resize",function(){n.is(":visible")&&n.css(i,parseInt(e.outerWidth(!0)))})})})},e.fn.elfinderpath=function(t){return this.each(function(){var n=e(this).addClass("elfinder-path").html("&nbsp;").delegate("a","click",function(n){var i=e(this).attr("href").substr(1);n.preventDefault(),i!=t.cwd().hash&&t.exec("open",i)}).prependTo(t.getUI("statusbar").show());t.bind("open searchend",function(){var i=[];e.each(t.parents(t.cwd().hash),function(e,n){i.push('<a href="#'+n+'">'+t.escape(t.file(n).name)+"</a>")}),n.html(i.join(t.option("separator")))}).bind("search",function(){n.html(t.i18n("searcresult"))})})},e.fn.elfinderplaces=function(t,n){return this.each(function(){var i=[],r="class",a=t.res(r,"navdir"),o=t.res(r,"navcollapse"),s=t.res(r,"navexpand"),l=(t.res(r,"hover"),t.res(r,"treeroot")),d=t.res("tpl","navdir"),c=t.res("tpl","perms"),p=e(t.res("tpl","navspinner")),u=function(e){return e.substr(6)},h=function(e){return"place-"+e},f=function(){t.storage("places",i.join(","))},m=function(n){return e(d.replace(/\{id\}/,h(n.hash)).replace(/\{name\}/,t.escape(n.name)).replace(/\{cssclass\}/,t.perms2class(n)).replace(/\{permissions\}/,n.read&&n.write?"":c).replace(/\{symlink\}/,""))},g=function(n){var r=m(n);w.children().length&&e.each(w.children(),function(){var t=e(this);return 0>n.name.localeCompare(t.children("."+a).text())?!r.insertBefore(t):void 0}),i.push(n.hash),!r.parent().length&&w.append(r),y.addClass(o),r.draggable({appendTo:"body",revert:!1,helper:function(){var n=e(this);return n.children().removeClass("ui-state-hover"),e('<div class="elfinder-place-drag elfinder-'+t.direction+'"/>').append(n.clone()).data("hash",u(n.children(":first").attr("id")))},start:function(){e(this).hide()},stop:function(t,n){var i=x.offset().top,r=x.offset().left,a=x.width(),o=x.height(),s=t.clientX,l=t.clientY;s>r&&r+a>s&&l>i&&l+o>l?e(this).show():(v(n.helper.data("hash")),f())}})},v=function(t){var n=e.inArray(t,i);-1!==n&&(i.splice(n,1),w.find("#"+h(t)).parent().remove(),!w.children().length&&y.removeClass(o+" "+s))},b=m({hash:"root-"+t.namespace,name:t.i18n(n.name,"places"),read:!0,write:!0}),y=b.children("."+a).addClass(l).click(function(){y.is("."+o)&&(x.toggleClass(s),w.slideToggle(),t.storage("placesState",x.is("."+s)?1:0))}),w=b.children("."+t.res(r,"navsubtree")),x=e(this).addClass(t.res(r,"tree")+" elfinder-places ui-corner-all").hide().append(b).appendTo(t.getUI("navbar")).delegate("."+a,"hover",function(){e(this).toggleClass("ui-state-hover")}).delegate("."+a,"click",function(){t.exec("open",e(this).attr("id").substr(6))}).delegate("."+a+":not(."+l+")","contextmenu",function(n){var i=e(this).attr("id").substr(6);n.preventDefault(),t.trigger("contextmenu",{raw:[{label:t.i18n("rmFromPlaces"),icon:"rm",callback:function(){v(i),f()}}],x:n.clientX,y:n.clientY})}).droppable({tolerance:"pointer",accept:".elfinder-cwd-file-wrapper,.elfinder-tree-dir,.elfinder-cwd-file",hoverClass:t.res("class","adroppable"),drop:function(n,r){var a=!0;e.each(r.helper.data("files"),function(n,r){var o=t.file(r);o&&"directory"==o.mime&&-1===e.inArray(o.hash,i)?g(o):a=!1}),f(),a&&r.helper.hide()}});t.one("load",function(){t.oldAPI||(x.show().parent().show(),i=e.map(t.storage("places").split(","),function(e){return e||null}),i.length&&(y.prepend(p),t.request({data:{cmd:"info",targets:i},preventDefault:!0}).done(function(n){i=[],e.each(n.files,function(e,t){"directory"==t.mime&&g(t)}),f(),t.storage("placesState")>0&&y.click()}).always(function(){p.remove()})),t.remove(function(t){e.each(t.data.removed,function(e,t){v(t)}),f()}).change(function(t){e.each(t.data.changed,function(t,n){-1!==e.inArray(n.hash,i)&&(v(n.hash),"directory"==n.mime&&g(n))}),f()}).bind("sync",function(){i.length&&(y.prepend(p),t.request({data:{cmd:"info",targets:i},preventDefault:!0}).done(function(t){e.each(t.files||[],function(t,n){-1===e.inArray(n.hash,i)&&v(n.hash)}),f()}).always(function(){p.remove()}))}))})})},e.fn.elfindersearchbutton=function(t){return this.each(function(){var n=!1,i=e(this).hide().addClass("ui-widget-content elfinder-button "+t.fm.res("class","searchbtn")),r=function(){var i=e.trim(o.val());i?t.exec(i).done(function(){n=!0,o.focus()}):t.fm.trigger("searchend")},a=function(){o.val(""),n&&(n=!1,t.fm.trigger("searchend"))},o=e('<input type="text" size="42"/>').appendTo(i).keypress(function(e){e.stopPropagation()}).keydown(function(e){e.stopPropagation(),13==e.keyCode&&r(),27==e.keyCode&&(e.preventDefault(),a())});e('<span class="ui-icon ui-icon-search" title="'+t.title+'"/>').appendTo(i).click(r),e('<span class="ui-icon ui-icon-close"/>').appendTo(i).click(a),setTimeout(function(){if(i.parent().detach(),t.fm.getUI("toolbar").prepend(i.show()),t.fm.UA.ltIE7){var e=i.children("ltr"==t.fm.direction?".ui-icon-close":".ui-icon-search");e.css({right:"",left:parseInt(i.width())-e.outerWidth(!0)})}},200),t.fm.error(function(){o.unbind("keydown")}).select(function(){o.blur()}).bind("searchend",function(){o.val("")}).viewchange(a).shortcut({pattern:"ctrl+f f3",description:t.title,callback:function(){o.select().focus()}})})},e.fn.elfindersortbutton=function(t){return this.each(function(){var n=t.fm,i=t.name,r="class",a=n.res(r,"disabled"),o=n.res(r,"hover"),s="elfinder-button-menu-item",l=s+"-selected",d=l+"-asc",c=l+"-desc",p=e(this).addClass("ui-state-default elfinder-button elfinder-menubutton elfiner-button-"+i).attr("title",t.title).append('<span class="elfinder-button-icon elfinder-button-icon-'+i+'"/>').hover(function(){!p.is("."+a)&&p.toggleClass(o)}).click(function(e){p.is("."+a)||(e.stopPropagation(),u.is(":hidden")&&t.fm.getUI().click(),u.slideToggle(100))}),u=e('<div class="ui-widget ui-widget-content elfinder-button-menu ui-corner-all"/>').hide().appendTo(p).zIndex(12+p.zIndex()).delegate("."+s,"hover",function(){e(this).toggleClass(o)}).delegate("."+s,"click",function(e){e.preventDefault(),e.stopPropagation(),f()}),h=function(){u.children(":not(:last)").removeClass(l+" "+d+" "+c).filter('[rel="'+n.sortType+'"]').addClass(l+" "+("asc"==n.sortOrder?d:c)),u.children(":last").toggleClass(l,n.sortStickFolders)},f=function(){u.hide()};e.each(n.sortRules,function(t){u.append(e('<div class="'+s+'" rel="'+t+'"><span class="ui-icon ui-icon-arrowthick-1-n"/><span class="ui-icon ui-icon-arrowthick-1-s"/>'+n.i18n("sort"+t)+"</div>").data("type",t))}),u.children().click(function(){var i=e(this).attr("rel");t.exec([],{type:i,order:i==n.sortType?"asc"==n.sortOrder?"desc":"asc":n.sortOrder,stick:n.sortStickFolders})}),e('<div class="'+s+" "+s+'-separated"><span class="ui-icon ui-icon-check"/>'+n.i18n("sortFoldersFirst")+"</div>").appendTo(u).click(function(){t.exec([],{type:n.sortType,order:n.sortOrder,stick:!n.sortStickFolders})}),n.bind("disable select",f).getUI().click(f),n.bind("sortchange",h),u.children().length>1?t.change(function(){p.toggleClass(a,t.disabled()),h()}).change():p.addClass(a)})},e.fn.elfinderstat=function(t){return this.each(function(){var n=e(this).addClass("elfinder-stat-size"),i=e('<div class="elfinder-stat-selected"/>'),r=t.i18n("size").toLowerCase(),a=t.i18n("items").toLowerCase(),o=t.i18n("selected"),s=function(i,o){var s=0,l=0;e.each(i,function(e,t){o&&t.phash!=o||(s++,l+=parseInt(t.size)||0)}),n.html(a+": "+s+", "+r+": "+t.formatSize(l))};t.getUI("statusbar").prepend(n).append(i).show(),t.bind("open reload add remove change searchend",function(){s(t.files(),t.cwd().hash)}).search(function(e){s(e.data.files)}).select(function(){var n=0,a=0,s=t.selectedFiles();return 1==s.length?(n=s[0].size,i.html(t.escape(s[0].name)+(n>0?", "+t.formatSize(n):"")),void 0):(e.each(s,function(e,t){a++,n+=parseInt(t.size)||0}),i.html(a?o+": "+a+", "+r+": "+t.formatSize(n):"&nbsp;"),void 0)})})},e.fn.elfindertoolbar=function(t,n){return this.not(".elfinder-toolbar").each(function(){var i,r,a,o,s=t._commands,l=e(this).addClass("ui-helper-clearfix ui-widget-header ui-corner-top elfinder-toolbar"),d=n||[],c=d.length;for(l.prev().length&&l.parent().prepend(this);c--;)if(d[c]){for(a=e('<div class="ui-widget-content ui-corner-all elfinder-buttonset"/>'),i=d[c].length;i--;)(r=s[d[c][i]])&&(o="elfinder"+r.options.ui,e.fn[o]&&a.prepend(e("<div/>")[o](r)));a.children().length&&l.prepend(a),a.children(":gt(0)").before('<span class="ui-widget-content elfinder-toolbar-button-separator"/>')}l.children().length&&l.show()}),this},e.fn.elfindertree=function(t,n){var i=t.res("class","tree");return this.not("."+i).each(function(){var r="class",a=t.res(r,"treeroot"),o=n.openRootOnLoad,s=t.res(r,"navsubtree"),l=t.res(r,"treedir"),d=t.res(r,"navcollapse"),c=t.res(r,"navexpand"),p="elfinder-subtree-loaded",u=t.res(r,"navarrow"),h=t.res(r,"active"),f=t.res(r,"adroppable"),m=t.res(r,"hover"),g=t.res(r,"disabled"),v=t.res(r,"draggable"),b=t.res(r,"droppable"),y=function(e){var t=U.offset().left;return e>=t&&t+U.width()>=e},w=t.droppable.drop,x=e.extend(!0,{},t.droppable,{over:function(t){var n=e(this),i=m+" "+f;y(t.clientX)?(n.addClass(i),n.is("."+d+":not(."+c+")")&&setTimeout(function(){n.is("."+f)&&n.children("."+u).click()},500)):n.removeClass(i)},out:function(){e(this).removeClass(m+" "+f)},drop:function(e,t){y(e.clientX)&&w.call(this,e,t)}}),k=e(t.res("tpl","navspinner")),C=t.res("tpl","navdir"),I=t.res("tpl","perms"),F=t.res("tpl","symlink"),T={id:function(e){return t.navHash2Id(e.hash)},cssclass:function(e){return(e.phash?"":a)+" "+l+" "+t.perms2class(e)+" "+(e.dirs&&!e.link?d:"")},permissions:function(e){return e.read&&e.write?"":I},symlink:function(e){return e.alias?F:""}},P=function(e){return e.name=t.escape(e.i18||e.name),C.replace(/(?:\{([a-z]+)\})/gi,function(t,n){return e[n]||(T[n]?T[n](e):"")})},z=function(t){return e.map(t||[],function(e){return"directory"==e.mime?e:null})},O=function(e){return e?j.find("#"+t.navHash2Id(e)).next("."+s):j},A=function(n,i){for(var r,a=n.children(":first");a.length;){if(r=t.file(t.navId2Hash(a.children("[id]").attr("id"))),(r=t.file(t.navId2Hash(a.children("[id]").attr("id"))))&&0>i.name.toLowerCase().localeCompare(r.name.toLowerCase()))return a;a=a.next()}return e("")},D=function(e){for(var n,i,r,a,o=e.length,s=[],l=e.length;l--;)n=e[l],j.find("#"+t.navHash2Id(n.hash)).length||((r=O(n.phash)).length?(i=P(n),n.phash&&(a=A(r,n)).length?a.before(i):r[n.phash?"append":"prepend"](i)):s.push(n));return s.length&&o>s.length?D(s):(setTimeout(function(){S()},10),void 0)},M=function(){var e,i,r=t.cwd().hash,d=j.find("#"+t.navHash2Id(r));if(o&&(e=j.find("#"+t.navHash2Id(t.root())),e.is("."+p)&&e.addClass(c).next("."+s).show(),o=!1),d.is("."+h)||(j.find("."+l+"."+h).removeClass(h),d.addClass(h)),n.syncTree){if(d.length)return d.parentsUntil("."+a).filter("."+s).show().prev("."+l).addClass(c);if(t.newAPI){if(i=t.file(r),i&&i.phash&&j.find("#"+t.navHash2Id(i.phash)).length)return D([i]),M();t.request({data:{cmd:"parents",target:r},preventFail:!0}).done(function(e){var n=z(e.tree);D(n),E(n,p),r==t.cwd().hash&&M(!0)})}}},S=function(){j.find("."+l+":not(."+b+",.elfinder-ro,.elfinder-na)").droppable(x)},E=function(n,i){var r=i==p?"."+d+":not(."+p+")":":not(."+d+")";e.each(n,function(n,a){j.find("#"+t.navHash2Id(a.phash)+r).filter(function(){return e(this).next("."+s).children().length>0}).addClass(i)})},j=e(this).addClass(i).delegate("."+l,"hover",function(n){var i=e(this),r="mouseenter"==n.type;i.is("."+f+" ,."+g)||(r&&!i.is("."+a+",."+v+",.elfinder-na,.elfinder-wo")&&i.draggable(t.draggable),i.toggleClass(m,r))}).delegate("."+l,"dropover dropout drop",function(t){e(this)["dropover"==t.type?"addClass":"removeClass"](f+" "+m)}).delegate("."+l,"click",function(){var n=e(this),i=t.navId2Hash(n.attr("id")),r=t.file(i);t.trigger("searchend"),i==t.cwd().hash||n.is("."+g)?n.is("."+d)&&n.children("."+u).click():t.exec("open",r.thash||i)}).delegate("."+l+"."+d+" ."+u,"click",function(n){var i=e(this),r=i.parent("."+l),a=r.next("."+s);n.stopPropagation(),r.is("."+p)?(r.toggleClass(c),a.slideToggle()):(k.insertBefore(i),r.removeClass(d),t.request({cmd:"tree",target:t.navId2Hash(r.attr("id"))}).done(function(e){D(z(e.tree)),a.children().length&&(r.addClass(d+" "+c),a.slideDown()),M()}).always(function(){k.remove(),r.addClass(p)}))}).delegate("."+l,"contextmenu",function(n){n.preventDefault(),t.trigger("contextmenu",{type:"navbar",targets:[t.navId2Hash(e(this).attr("id"))],x:n.clientX,y:n.clientY})}),U=t.getUI("navbar").append(j).show();t.open(function(e){var t=e.data,n=z(t.files);t.init&&j.empty(),n.length&&(D(n),E(n,p)),M()}).add(function(e){var t=z(e.data.added);t.length&&(D(t),E(t,d))}).change(function(n){for(var i,r,a,o,d,u,h,f,m,g=z(n.data.changed),v=g.length;v--;)if(i=g[v],(r=j.find("#"+t.navHash2Id(i.hash))).length){if(i.phash){if(o=r.closest("."+s),d=O(i.phash),u=r.parent().next(),h=A(d,i),!d.length)continue;(d[0]!==o[0]||u.get(0)!==h.get(0))&&(h.length?h.before(r):d.append(r))}f=r.is("."+c),m=r.is("."+p),a=e(P(i)),r.replaceWith(a.children("."+l)),i.dirs&&(f||m)&&(r=j.find("#"+t.navHash2Id(i.hash)))&&r.next("."+s).children().length&&(f&&r.addClass(c),m&&r.addClass(p))}M(),S()}).remove(function(e){for(var n,i,r=e.data.removed,a=r.length;a--;)(n=j.find("#"+t.navHash2Id(r[a]))).length&&(i=n.closest("."+s),n.parent().detach(),i.children().length||i.hide().prev("."+l).removeClass(d+" "+c+" "+p))}).bind("search searchend",function(e){j.find("#"+t.navHash2Id(t.cwd().hash))["search"==e.type?"removeClass":"addClass"](h)}).bind("lockfiles unlockfiles",function(n){var i="lockfiles"==n.type,r=i?"disable":"enable",a=e.map(n.data.files||[],function(e){var n=t.file(e);return n&&"directory"==n.mime?e:null});e.each(a,function(e,n){var a=j.find("#"+t.navHash2Id(n));a.length&&(a.is("."+v)&&a.draggable(r),a.is("."+b)&&a.droppable(h),a[i?"addClass":"removeClass"](g))})})}),this},e.fn.elfinderuploadbutton=function(t){return this.each(function(){var n=e(this).elfinderbutton(t).unbind("click"),i=e("<form/>").appendTo(n),r=e('<input type="file" multiple="true"/>').change(function(){var n=e(this);n.val()&&(t.exec({input:n.remove()[0]}),r.clone(!0).appendTo(i))});i.append(r.clone(!0)),t.change(function(){i[t.disabled()?"hide":"show"]()}).change()})},e.fn.elfinderviewbutton=function(t){return this.each(function(){var n=e(this).elfinderbutton(t),i=n.children(".elfinder-button-icon");t.change(function(){var e="icons"==t.value;i.toggleClass("elfinder-button-icon-view-list",e),n.attr("title",t.fm.i18n(e?"viewlist":"viewicons"))})})},e.fn.elfinderworkzone=function(){var t="elfinder-workzone";return this.not("."+t).each(function(){var n=e(this).addClass(t),i=n.outerHeight(!0)-n.height(),r=n.parent();r.add(window).bind("resize",function(){var a=r.height();r.children(":visible:not(."+t+")").each(function(){var t=e(this);"absolute"!=t.css("position")&&(a-=t.outerHeight(!0))}),n.height(a-i)})}),this},elFinder.prototype.commands.archive=function(){var t=this,n=t.fm,i=[];this.variants=[],this.disableOnSearch=!0,n.bind("open reload",function(){t.variants=[],e.each(i=n.option("archivers").create||[],function(e,i){t.variants.push([i,n.mime2kind(i)])}),t.change()}),this.getstate=function(){return!this._disabled&&i.length&&n.selected().length&&n.cwd().write?0:-1},this.exec=function(t,r){var a,o=this.files(t),s=o.length,l=r||i[0],d=n.cwd(),c=["errArchive","errPerm","errCreatingTempDir","errFtpDownloadFile","errFtpUploadFile","errFtpMkdir","errArchiveExec","errExtractExec","errRm"],p=e.Deferred().fail(function(e){e&&n.error(e)});if(!(this.enabled()&&s&&i.length&&-1!==e.inArray(l,i)))return p.reject();if(!d.write)return p.reject(c);for(a=0;s>a;a++)if(!o[a].read)return p.reject(c);return n.request({data:{cmd:"archive",targets:this.hashes(t),type:l},notify:{type:"archive",cnt:1},syncOnFail:!0})}},elFinder.prototype.commands.back=function(){this.alwaysEnabled=!0,this.updateOnSelect=!1,this.shortcuts=[{pattern:"ctrl+left backspace"}],this.getstate=function(){return this.fm.history.canBack()?0:-1},this.exec=function(){return this.fm.history.back()}},elFinder.prototype.commands.copy=function(){this.shortcuts=[{pattern:"ctrl+c ctrl+insert"}],this.getstate=function(t){var t=this.files(t),n=t.length;return n&&e.map(t,function(e){return e.phash&&e.read?e:null}).length==n?0:-1},this.exec=function(t){var n=this.fm,i=e.Deferred().fail(function(e){n.error(e)});return e.each(this.files(t),function(e,t){return t.read&&t.phash?void 0:!i.reject(["errCopy",t.name,"errPerm"])}),"rejected"==i.state()?i:i.resolve(n.clipboard(this.hashes(t)))}},elFinder.prototype.commands.cut=function(){this.shortcuts=[{pattern:"ctrl+x shift+insert"}],this.getstate=function(t){var t=this.files(t),n=t.length;return n&&e.map(t,function(e){return e.phash&&e.read&&!e.locked?e:null}).length==n?0:-1},this.exec=function(t){var n=this.fm,i=e.Deferred().fail(function(e){n.error(e)});return e.each(this.files(t),function(e,t){return t.read&&t.phash?t.locked?!i.reject(["errLocked",t.name]):void 0:!i.reject(["errCopy",t.name,"errPerm"])}),"rejected"==i.state()?i:i.resolve(n.clipboard(this.hashes(t),!0))}},elFinder.prototype.commands.download=function(){var t=this,n=this.fm,i=function(n){return e.map(t.files(n),function(e){return"directory"==e.mime?null:e})};this.shortcuts=[{pattern:"shift+enter"}],this.getstate=function(){var e=this.fm.selected(),t=e.length;return this._disabled||!t||n.UA.IE&&1!=t||t!=i(e).length?-1:0},this.exec=function(t){var n,r=this.fm,a=r.options.url,o=i(t),s=e.Deferred(),l="",d="";if(this.disabled())return s.reject();if(r.oldAPI)return r.error("errCmdNoSupport"),s.reject();for(e.each(r.options.customData||{},function(e,t){d+="&"+e+"="+t}),a+=-1===a.indexOf("?")?"?":"&",n=0;o.length>n;n++)l+='<iframe class="downloader" id="downloader-'+o[n].hash+'" style="display:none" src="'+a+"cmd=file&target="+o[n].hash+"&download=1"+d+'"/>';return e(l).appendTo("body").ready(function(){setTimeout(function(){e(l).each(function(){e("#"+e(this).attr("id")).remove()})},r.UA.Firefox?2e4+1e4*n:1e3)}),r.trigger("download",{files:o}),s.resolve(t)}},elFinder.prototype.commands.duplicate=function(){var t=this.fm;this.getstate=function(n){var n=this.files(n),i=n.length;return!this._disabled&&i&&t.cwd().write&&e.map(n,function(e){return e.phash&&e.read?e:null}).length==i?0:-1},this.exec=function(t){var n=this.fm,i=this.files(t),r=i.length,a=e.Deferred().fail(function(e){e&&n.error(e)});return!r||this._disabled?a.reject():(e.each(i,function(e,t){return t.read&&n.file(t.phash).write?void 0:!a.reject(["errCopy",t.name,"errPerm"])}),"rejected"==a.state()?a:n.request({data:{cmd:"duplicate",targets:this.hashes(t)},notify:{type:"copy",cnt:r}}))}},elFinder.prototype.commands.edit=function(){var t=this,n=this.fm,i=n.res("mimes","text")||[],r=function(n){return e.map(n,function(n){return 0!==n.mime.indexOf("text/")&&-1===e.inArray(n.mime,i)||!n.mime.indexOf("text/rtf")||t.onlyMimes.length&&-1===e.inArray(n.mime,t.onlyMimes)||!n.read||!n.write?null:n})},a=function(i,r,a){var o=e.Deferred(),s=e('<textarea class="elfinder-file-edit" rows="20" id="'+i+'-ta">'+n.escape(a)+"</textarea>"),l=function(){s.editor&&s.editor.save(s[0],s.editor.instance),o.resolve(s.getContent()),s.elfinderdialog("close")},d=function(){o.reject(),s.elfinderdialog("close")},c={title:r.name,width:t.options.dialogWidth||450,buttons:{},close:function(){s.editor&&s.editor.close(s[0],s.editor.instance),e(this).elfinderdialog("destroy")},open:function(){n.disable(),s.focus(),s[0].setSelectionRange&&s[0].setSelectionRange(0,0),s.editor&&s.editor.load(s[0])}};return s.getContent=function(){return s.val()},e.each(t.options.editors||[],function(t,n){return-1!==e.inArray(r.mime,n.mimes||[])&&"function"==typeof n.load&&"function"==typeof n.save?(s.editor={load:n.load,save:n.save,close:"function"==typeof n.close?n.close:function(){},instance:null},!1):void 0}),s.editor||s.keydown(function(e){var t,n,i=e.keyCode;e.stopPropagation(),9==i&&(e.preventDefault(),this.setSelectionRange&&(t=this.value,n=this.selectionStart,this.value=t.substr(0,n)+"	"+t.substr(this.selectionEnd),n+=1,this.setSelectionRange(n,n))),(e.ctrlKey||e.metaKey)&&((81==i||87==i)&&(e.preventDefault(),d()),83==i&&(e.preventDefault(),l()))}),c.buttons[n.i18n("Save")]=l,c.buttons[n.i18n("Cancel")]=d,n.dialog(s,c).attr("id",i),o.promise()},o=function(t){var i,r=t.hash,o=(n.options,e.Deferred()),s=(n.url(r)||n.options.url,"edit-"+n.namespace+"-"+t.hash),l=n.getUI().find("#"+s);return l.length?(l.elfinderdialog("toTop"),o.resolve()):t.read&&t.write?(n.request({data:{cmd:"get",target:r},notify:{type:"openfile",cnt:1},syncOnFail:!0}).done(function(e){a(s,t,e.content).done(function(e){n.request({options:{type:"post"},data:{cmd:"put",target:r,content:e},notify:{type:"save",cnt:1},syncOnFail:!0}).fail(function(e){o.reject(e)}).done(function(e){e.changed&&e.changed.length&&n.change(e),o.resolve(e)})})}).fail(function(e){o.reject(e)}),o.promise()):(i=["errOpen",t.name,"errPerm"],n.error(i),o.reject(i))};this.shortcuts=[{pattern:"ctrl+e"}],this.init=function(){this.onlyMimes=this.options.mimes||[]},this.getstate=function(e){var e=this.files(e),t=e.length;return!this._disabled&&t&&r(e).length==t?0:-1},this.exec=function(t){var n,i=r(this.files(t)),a=[];if(this.disabled())return e.Deferred().reject();for(;n=i.shift();)a.push(o(n));return a.length?e.when.apply(null,a):e.Deferred().reject()}},elFinder.prototype.commands.extract=function(){var t=this,n=t.fm,i=[],r=function(t){return e.map(t,function(t){return t.read&&-1!==e.inArray(t.mime,i)?t:null})};this.disableOnSearch=!0,n.bind("open reload",function(){i=n.option("archivers").extract||[],t.change()}),this.getstate=function(e){var e=this.files(e),t=e.length;return!this._disabled&&t&&this.fm.cwd().write&&r(e).length==t?0:-1},this.exec=function(t){var r,a,o,s=this.files(t),l=e.Deferred(),d=s.length,c=!1,p=!1,u=e.map(n.files(t),function(e){return e.name}),h={};e.map(n.files(t),function(e){h[e.name]=e});var f=function(e){switch(e){case"overwrite_all":c=!0;break;case"omit_all":p=!0}},m=function(t){t.read&&n.file(t.phash).write?-1===e.inArray(t.mime,i)?(a=["errExtract",t.name,"errNoArchive"],n.error(a),l.reject(a)):n.request({data:{cmd:"extract",target:t.hash},notify:{type:"extract",cnt:1},syncOnFail:!0}).fail(function(e){l.isRejected()||l.reject(e)
}).done(function(){}):(a=["errExtract",t.name,"errPerm"],n.error(a),l.reject(a))},g=function(t,i){var a=t[i],s=a.name.replace(/\.((tar\.(gz|bz|bz2|z|lzo))|cpio\.gz|ps\.gz|xcf\.(gz|bz2)|[a-z0-9]{1,4})$/gi,""),v=e.inArray(s,u)>=0;v&&"directory"!=h[s].mime?n.confirm({title:n.i18n("ntfextract"),text:n.i18n(["errExists",s,"confirmRepl"]),accept:{label:"btnYes",callback:function(e){if(o=e?"overwrite_all":"overwrite",f(o),c||p){if(c){for(r=0;d>r;r++)m(t[r]);l.resolve()}}else"overwrite"==o&&m(a),d>i+1?g(t,i+1):l.resolve()}},reject:{label:"btnNo",callback:function(e){o=e?"omit_all":"omit",f(o),!c&&!p&&d>i+1?g(t,i+1):p&&l.resolve()}},cancel:{label:"btnCancel",callback:function(){l.resolve()}},all:d>1}):(m(a),d>i+1?g(t,i+1):l.resolve())};return this.enabled()&&d&&i.length?(d>0&&g(s,0),l):l.reject()}},elFinder.prototype.commands.forward=function(){this.alwaysEnabled=!0,this.updateOnSelect=!0,this.shortcuts=[{pattern:"ctrl+right"}],this.getstate=function(){return this.fm.history.canForward()?0:-1},this.exec=function(){return this.fm.history.forward()}},elFinder.prototype.commands.getfile=function(){var t=this,n=this.fm,i=function(n){var i=t.options;return n=e.map(n,function(e){return"directory"!=e.mime||i.folders?e:null}),i.multiple||1==n.length?n:[]};this.alwaysEnabled=!0,this.callback=n.options.getFileCallback,this._disabled="function"==typeof this.callback,this.getstate=function(e){var e=this.files(e),t=e.length;return this.callback&&t&&i(e).length==t?0:-1},this.exec=function(n){var i,r,a,o=this.fm,s=this.options,l=this.files(n),d=l.length,c=o.option("url"),p=o.option("tmbUrl"),u=e.Deferred().done(function(e){o.trigger("getfile",{files:e}),t.callback(e,o),"close"==s.oncomplete?o.hide():"destroy"==s.oncomplete&&o.destroy()}),h=function(){return s.onlyURL?s.multiple?e.map(l,function(e){return e.url}):l[0].url:s.multiple?l:l[0]},f=[];if(-1==this.getstate())return u.reject();for(i=0;d>i;i++){if(r=l[i],"directory"==r.mime&&!s.folders)return u.reject();r.baseUrl=c,r.url=o.url(r.hash),r.path=o.path(r.hash),r.tmb&&1!=r.tmb&&(r.tmb=p+r.tmb),r.width||r.height||(r.dim?(a=r.dim.split("x"),r.width=a[0],r.height=a[1]):-1!==r.mime.indexOf("image")&&f.push(o.request({data:{cmd:"dim",target:r.hash},preventDefault:!0}).done(e.proxy(function(e){e.dim&&(a=e.dim.split("x"),this.width=a[0],this.height=a[1]),this.dim=e.dim},l[i]))))}return f.length?(e.when.apply(null,f).always(function(){u.resolve(h(l))}),u):u.resolve(h(l))}},elFinder.prototype.commands.help=function(){var t,n=this.fm,i=this,r='<div class="elfinder-help-link"> <a href="{url}" target="_blank">{link}</a></div>',a='<div class="elfinder-help-team"><div>{author}</div>{work}</div>',o=/\{url\}/,s=/\{link\}/,l=/\{author\}/,d=/\{work\}/,c="replace",p="ui-priority-primary",u="ui-priority-secondary",h="elfinder-help-license",f='<li class="ui-state-default ui-corner-top"><a href="#{id}">{title}</a></li>',m=['<div class="ui-tabs ui-widget ui-widget-content ui-corner-all elfinder-help">','<ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all">'],g='<div class="elfinder-help-shortcut"><div class="elfinder-help-shortcut-pattern">{pattern}</div> {descrip}</div>',v='<div class="elfinder-help-separator"/>',b=function(){m.push('<div id="about" class="ui-tabs-panel ui-widget-content ui-corner-bottom"><div class="elfinder-help-logo"/>'),m.push("<h3>elFinder</h3>"),m.push('<div class="'+p+'">'+n.i18n("webfm")+"</div>"),m.push('<div class="'+u+'">'+n.i18n("ver")+": "+n.version+", "+n.i18n("protocolver")+': <span id="apiver"></span></div>'),m.push('<div class="'+u+'">jQuery/jQuery UI: '+e().jquery+"/"+e.ui.version+"</div>"),m.push(v),m.push(r[c](o,"http://elfinder.org/")[c](s,n.i18n("homepage"))),m.push(r[c](o,"https://github.com/Studio-42/elFinder/wiki")[c](s,n.i18n("docs"))),m.push(r[c](o,"https://github.com/Studio-42/elFinder")[c](s,n.i18n("github"))),m.push(r[c](o,"http://twitter.com/elrte_elfinder")[c](s,n.i18n("twitter"))),m.push(v),m.push('<div class="'+p+'">'+n.i18n("team")+"</div>"),m.push(a[c](l,'Dmitry "dio" Levashov &lt;dio@std42.ru&gt;')[c](d,n.i18n("chiefdev"))),m.push(a[c](l,"Troex Nevelin &lt;troex@fury.scancode.ru&gt;")[c](d,n.i18n("maintainer"))),m.push(a[c](l,"Alexey Sukhotin &lt;strogg@yandex.ru&gt;")[c](d,n.i18n("contributor"))),m.push(a[c](l,"Naoki Sawada &lt;hypweb@gmail.com&gt;")[c](d,n.i18n("contributor"))),n.i18[n.lang].translator&&m.push(a[c](l,n.i18[n.lang].translator)[c](d,n.i18n("translator")+" ("+n.i18[n.lang].language+")")),m.push(v),m.push('<div class="'+h+'">'+n.i18n("icons")+': Pixelmixer, <a href="http://p.yusukekamiyamane.com" target="_blank">Fugue</a></div>'),m.push(v),m.push('<div class="'+h+'">Licence: BSD Licence</div>'),m.push('<div class="'+h+'">Copyright © 2009-2011, Studio 42</div>'),m.push('<div class="'+h+'">„ …'+n.i18n("dontforget")+" ”</div>"),m.push("</div>")},y=function(){var t=n.shortcuts();m.push('<div id="shortcuts" class="ui-tabs-panel ui-widget-content ui-corner-bottom">'),t.length?(m.push('<div class="ui-widget-content elfinder-help-shortcuts">'),e.each(t,function(e,t){m.push(g.replace(/\{pattern\}/,t[0]).replace(/\{descrip\}/,t[1]))}),m.push("</div>")):m.push('<div class="elfinder-help-disabled">'+n.i18n("shortcutsof")+"</div>"),m.push("</div>")},w=function(){m.push('<div id="help" class="ui-tabs-panel ui-widget-content ui-corner-bottom">'),m.push('<a href="http://elfinder.org/forum/" target="_blank" class="elfinder-dont-panic"><span>DON\'T PANIC</span></a>'),m.push("</div>")};this.alwaysEnabled=!0,this.updateOnSelect=!1,this.state=0,this.shortcuts=[{pattern:"f1",description:this.title}],setTimeout(function(){var r=i.options.view||["about","shortcuts","help"];e.each(r,function(e,t){m.push(f[c](/\{id\}/,t)[c](/\{title\}/,n.i18n(t)))}),m.push("</ul>"),-1!==e.inArray("about",r)&&b(),-1!==e.inArray("shortcuts",r)&&y(),-1!==e.inArray("help",r)&&w(),m.push("</div>"),t=e(m.join("")),n.one("load",function(){t.find("#apiver").text(n.api)}),t.find(".ui-tabs-nav li").hover(function(){e(this).toggleClass("ui-state-hover")}).children().click(function(n){var i=e(this);n.preventDefault(),n.stopPropagation(),i.is(".ui-tabs-selected")||(i.parent().addClass("ui-tabs-selected ui-state-active").siblings().removeClass("ui-tabs-selected").removeClass("ui-state-active"),t.find(".ui-tabs-panel").hide().filter(i.attr("href")).show())}).filter(":first").click()},200),this.getstate=function(){return 0},this.exec=function(){this.dialog||(this.dialog=this.fm.dialog(t,{title:this.title,width:530,autoOpen:!1,destroyOnClose:!1})),this.dialog.elfinderdialog("open").find(".ui-tabs-nav li a:first").click()}},elFinder.prototype.commands.home=function(){this.title="Home",this.alwaysEnabled=!0,this.updateOnSelect=!1,this.shortcuts=[{pattern:"ctrl+home ctrl+shift+up",description:"Home"}],this.getstate=function(){var e=this.fm.root(),t=this.fm.cwd().hash;return e&&t&&e!=t?0:-1},this.exec=function(){return this.fm.exec("open",this.fm.root())}},elFinder.prototype.commands.info=function(){var t=this.fm,n="elfinder-info-spinner",i={calc:t.i18n("calc"),size:t.i18n("size"),unknown:t.i18n("unknown"),path:t.i18n("path"),aliasfor:t.i18n("aliasfor"),modify:t.i18n("modify"),perms:t.i18n("perms"),locked:t.i18n("locked"),dim:t.i18n("dim"),kind:t.i18n("kind"),files:t.i18n("files"),folders:t.i18n("folders"),items:t.i18n("items"),yes:t.i18n("yes"),no:t.i18n("no"),link:t.i18n("link")};this.tpl={main:'<div class="ui-helper-clearfix elfinder-info-title"><span class="elfinder-cwd-icon {class} ui-corner-all"/>{title}</div><table class="elfinder-info-tb">{content}</table>',itemTitle:'<strong>{name}</strong><span class="elfinder-info-kind">{kind}</span>',groupTitle:"<strong>{items}: {num}</strong>",row:"<tr><td>{label} : </td><td>{value}</td></tr>",spinner:'<span>{text}</span> <span class="'+n+'"/>'},this.alwaysEnabled=!0,this.updateOnSelect=!1,this.shortcuts=[{pattern:"ctrl+i"}],this.init=function(){e.each(i,function(e,n){i[e]=t.i18n(n)})},this.getstate=function(){return 0},this.exec=function(t){var r,a,o,s,l,d=this.fm,c=this.tpl,p=c.row,u=this.files(t),h=u.length,f=[],m=c.main,g="{label}",v="{value}",b={title:this.title,width:"auto",close:function(){e(this).elfinderdialog("destroy")}},y=[],w=function(e){k.find("."+n).parent().text(e)},x=d.namespace+"-info-"+e.map(u,function(e){return e.hash}).join("-"),k=d.getUI().find("#"+x);return h?k.length?(k.elfinderdialog("toTop"),e.Deferred().resolve()):(1==h?(o=u[0],m=m.replace("{class}",d.mime2class(o.mime)),s=c.itemTitle.replace("{name}",d.escape(o.i18||o.name)).replace("{kind}",d.mime2kind(o)),o.tmb&&(a=d.option("tmbUrl")+o.tmb),o.read?"directory"!=o.mime||o.alias?r=d.formatSize(o.size):(r=c.spinner.replace("{text}",i.calc),y.push(o.hash)):r=i.unknown,f.push(p.replace(g,i.size).replace(v,r)),o.alias&&f.push(p.replace(g,i.aliasfor).replace(v,o.alias)),f.push(p.replace(g,i.path).replace(v,d.escape(d.path(o.hash,!0)))),o.read&&f.push(p.replace(g,i.link).replace(v,'<a href="'+d.url(o.hash)+'" target="_blank">'+o.name+"</a>")),o.dim?f.push(p.replace(g,i.dim).replace(v,o.dim)):-1!==o.mime.indexOf("image")&&(o.width&&o.height?f.push(p.replace(g,i.dim).replace(v,o.width+"x"+o.height)):(f.push(p.replace(g,i.dim).replace(v,c.spinner.replace("{text}",i.calc))),d.request({data:{cmd:"dim",target:o.hash},preventDefault:!0}).fail(function(){w(i.unknown)}).done(function(e){w(e.dim||i.unknown)}))),f.push(p.replace(g,i.modify).replace(v,d.formatDate(o))),f.push(p.replace(g,i.perms).replace(v,d.formatPermissions(o))),f.push(p.replace(g,i.locked).replace(v,o.locked?i.yes:i.no))):(m=m.replace("{class}","elfinder-cwd-icon-group"),s=c.groupTitle.replace("{items}",i.items).replace("{num}",h),l=e.map(u,function(e){return"directory"==e.mime?1:null}).length,l?(f.push(p.replace(g,i.kind).replace(v,l==h?i.folders:i.folders+" "+l+", "+i.files+" "+(h-l))),f.push(p.replace(g,i.size).replace(v,c.spinner.replace("{text}",i.calc))),y=e.map(u,function(e){return e.hash})):(r=0,e.each(u,function(e,t){var n=parseInt(t.size);n>=0&&r>=0?r+=n:r="unknown"}),f.push(p.replace(g,i.kind).replace(v,i.files)),f.push(p.replace(g,i.size).replace(v,d.formatSize(r))))),m=m.replace("{title}",s).replace("{content}",f.join("")),k=d.dialog(m,b),k.attr("id",x),a&&e("<img/>").load(function(){k.find(".elfinder-cwd-icon").css("background",'url("'+a+'") center center no-repeat')}).attr("src",a),y.length&&d.request({data:{cmd:"size",targets:y},preventDefault:!0}).fail(function(){w(i.unknown)}).done(function(e){var t=parseInt(e.size);w(t>=0?d.formatSize(t):i.unknown)}),void 0):e.Deferred().reject()}},elFinder.prototype.commands.mkdir=function(){this.disableOnSearch=!0,this.updateOnSelect=!1,this.mime="directory",this.prefix="untitled folder",this.exec=e.proxy(this.fm.res("mixin","make"),this),this.shortcuts=[{pattern:"ctrl+shift+n"}],this.getstate=function(){return!this._disabled&&this.fm.cwd().write?0:-1}},elFinder.prototype.commands.mkfile=function(){this.disableOnSearch=!0,this.updateOnSelect=!1,this.mime="text/plain",this.prefix="untitled file.txt",this.exec=e.proxy(this.fm.res("mixin","make"),this),this.getstate=function(){return!this._disabled&&this.fm.cwd().write?0:-1}},elFinder.prototype.commands.netmount=function(){var t=this;this.alwaysEnabled=!0,this.updateOnSelect=!1,this.drivers=[],this.handlers={load:function(){this.drivers=this.fm.netDrivers}},this.getstate=function(){return this.drivers.length?0:-1},this.exec=function(){var n=t.fm,i=e.Deferred(),r=function(){var r={protocol:e("<select/>"),host:e('<input type="text"/>'),port:e('<input type="text"/>'),path:e('<input type="text" value="/"/>'),user:e('<input type="text"/>'),pass:e('<input type="password"/>')},a={title:n.i18n("netMountDialogTitle"),resizable:!1,modal:!0,destroyOnClose:!0,close:function(){delete t.dialog,"pending"==i.state()&&i.reject()},buttons:{}},o=e('<table class="elfinder-info-tb elfinder-netmount-tb"/>');return e.each(t.drivers,function(e,t){r.protocol.append('<option value="'+t+'">'+n.i18n(t)+"</option>")}),e.each(r,function(t,i){"protocol"!=t&&i.addClass("ui-corner-all"),o.append(e("<tr/>").append(e("<td>"+n.i18n(t)+"</td>")).append(e("<td/>").append(i)))}),a.buttons[n.i18n("btnMount")]=function(){var n={cmd:"netmount"};return e.each(r,function(t,i){var r=e.trim(i.val());r&&(n[t]=r)}),n.host?(t.fm.request({data:n,notify:{type:"netmount",cnt:1}}).done(function(){i.resolve()}).fail(function(e){i.reject(e)}),t.dialog.elfinderdialog("close"),void 0):t.fm.trigger("error",{error:"errNetMountHostReq"})},a.buttons[n.i18n("btnCancel")]=function(){t.dialog.elfinderdialog("close")},n.dialog(o,a)};return t.dialog||(t.dialog=r()),i.promise()}},elFinder.prototype.commands.open=function(){this.alwaysEnabled=!0,this._handlers={dblclick:function(e){e.preventDefault(),this.exec()},"select enable disable reload":function(e){this.update("disable"==e.type?-1:void 0)}},this.shortcuts=[{pattern:"ctrl+down numpad_enter"+("mac"!=this.fm.OS&&" enter")}],this.getstate=function(t){var t=this.files(t),n=t.length;return 1==n?0:n?e.map(t,function(e){return"directory"==e.mime?null:e}).length==n?0:-1:-1},this.exec=function(t){var n,i,r,a,o=this.fm,s=e.Deferred().fail(function(e){e&&o.error(e)}),l=this.files(t),d=l.length;if(!d)return s.reject();if(1==d&&(n=l[0])&&"directory"==n.mime)return n&&!n.read?s.reject(["errOpen",n.name,"errPerm"]):o.request({data:{cmd:"open",target:n.thash||n.hash},notify:{type:"open",cnt:1,hideCnt:!0},syncOnFail:!0});if(l=e.map(l,function(e){return"directory"!=e.mime?e:null}),d!=l.length)return s.reject();for(d=l.length;d--;){if(n=l[d],!n.read)return s.reject(["errOpen",n.name,"errPerm"]);if((i=o.url(n.hash))||(i=o.options.url,i=i+(-1===i.indexOf("?")?"?":"&")+(o.oldAPI?"cmd=open&current="+n.phash:"cmd=file")+"&target="+n.hash),n.dim?(r=n.dim.split("x"),a="width="+(parseInt(r[0])+20)+",height="+(parseInt(r[1])+20)):a="width="+parseInt(2*e(window).width()/3)+",height="+parseInt(2*e(window).height()/3),!window.open(i,"_blank",a+",top=50,left=50,scrollbars=yes,resizable=yes"))return s.reject("errPopup")}return s.resolve(t)}},elFinder.prototype.commands.paste=function(){this.updateOnSelect=!1,this.handlers={changeclipboard:function(){this.update()}},this.shortcuts=[{pattern:"ctrl+v shift+insert"}],this.getstate=function(t){if(this._disabled)return-1;if(t){if(e.isArray(t)){if(1!=t.length)return-1;t=this.fm.file(t[0])}}else t=this.fm.cwd();return this.fm.clipboard().length&&"directory"==t.mime&&t.write?0:-1},this.exec=function(t){var n,i,r=this,a=r.fm,t=t?this.files(t)[0]:a.cwd(),o=a.clipboard(),s=o.length,l=s?o[0].cut:!1,d=l?"errMove":"errCopy",c=[],p=[],u=e.Deferred().fail(function(e){e&&a.error(e)}),h=function(t){return t.length&&a._commands.duplicate?a.exec("duplicate",t):e.Deferred().resolve()},f=function(n){var i=e.Deferred(),o=[],s=function(t,n){for(var i=[],r=t.length;r--;)-1!==e.inArray(t[r].name,n)&&i.unshift(r);return i},d=function(e){var t=o[e],r=n[t],s=e==o.length-1;r&&a.confirm({title:a.i18n(l?"moveFiles":"copyFiles"),text:a.i18n(["errExists",r.name,"confirmRepl"]),all:!s,accept:{label:"btnYes",callback:function(t){s||t?p(n):d(++e)}},reject:{label:"btnNo",callback:function(t){var i;if(t)for(i=o.length;i-->e;)n[o[i]].remove=!0;else n[o[e]].remove=!0;s||t?p(n):d(++e)}},cancel:{label:"btnCancel",callback:function(){i.resolve()}}})},c=function(e){o=s(n,e),o.length?d(0):p(n)},p=function(n){var r,n=e.map(n,function(e){return e.remove?null:e}),o=n.length;return o?(r=n[0].phash,n=e.map(n,function(e){return e.hash}),a.request({data:{cmd:"paste",dst:t.hash,targets:n,cut:l?1:0,src:r},notify:{type:l?"move":"copy",cnt:o}}).always(function(){i.resolve(),a.unlockfiles({files:n})}),void 0):i.resolve()};return r._disabled||!n.length?i.resolve():(a.oldAPI?p(n):a.option("copyOverwrite")?t.hash==a.cwd().hash?c(e.map(a.files(),function(e){return e.phash==t.hash?e.name:null})):a.request({data:{cmd:"ls",target:t.hash},notify:{type:"prepare",cnt:1,hideCnt:!0},preventFail:!0}).always(function(e){c(e.list||[])}):p(n),i)};return s&&t&&"directory"==t.mime?t.write?(n=a.parents(t.hash),e.each(o,function(r,s){return s.read?l&&s.locked?!u.reject(["errLocked",s.name]):-1!==e.inArray(s.hash,n)?!u.reject(["errCopyInItself",s.name]):(i=a.parents(s.hash),-1!==e.inArray(t.hash,i)&&e.map(i,function(e){var n=a.file(e);return n.phash==t.hash&&n.name==s.name?n:null}).length?!u.reject(["errReplByChild",s.name]):(s.phash==t.hash?p.push(s.hash):c.push({hash:s.hash,phash:s.phash,name:s.name}),void 0)):!u.reject([d,o[0].name,"errPerm"])}),"rejected"==u.state()?u:e.when(h(p),f(c)).always(function(){l&&a.clipboard([])})):u.reject([d,o[0].name,"errPerm"]):u.reject()}},elFinder.prototype.commands.quicklook=function(){var t,n,i,r,a=this,o=a.fm,s=0,l=1,d=2,c=s,p="elfinder-quicklook-navbar-icon",u="elfinder-quicklook-fullscreen",h=function(t){e(document).trigger(e.Event("keydown",{keyCode:t,ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1}))},f=function(e){return{opacity:0,width:20,height:"list"==o.view?1:20,top:e.offset().top+"px",left:e.offset().left+"px"}},m=function(){var i=e(window);return{opacity:1,width:t,height:n,top:parseInt((i.height()-n)/2+i.scrollTop()),left:parseInt((i.width()-t)/2+i.scrollLeft())}},g=function(e){var t=document.createElement(e.substr(0,e.indexOf("/"))),n=!1;try{n=t.canPlayType&&t.canPlayType(e)}catch(i){}return n&&""!==n&&"no"!=n},v=e('<div class="elfinder-quicklook-title"/>'),b=e("<div/>"),y=e('<div class="elfinder-quicklook-info"/>'),w=e('<div class="'+p+" "+p+'-fullscreen"/>').mousedown(function(t){var n=a.window,r=n.is("."+u),s="scroll."+o.namespace,l=e(window);t.stopPropagation(),r?(n.css(n.data("position")).unbind("mousemove"),l.unbind(s).trigger(a.resize).unbind(a.resize),x.unbind("mouseenter").unbind("mousemove")):(n.data("position",{left:n.css("left"),top:n.css("top"),width:n.width(),height:n.height()}).css({width:"100%",height:"100%"}),e(window).bind(s,function(){n.css({left:parseInt(e(window).scrollLeft())+"px",top:parseInt(e(window).scrollTop())+"px"})}).bind(a.resize,function(){a.preview.trigger("changesize")}).trigger(s).trigger(a.resize),n.bind("mousemove",function(){x.stop(!0,!0).show().delay(3e3).fadeOut("slow")}).mousemove(),x.mouseenter(function(){x.stop(!0,!0).show()}).mousemove(function(e){e.stopPropagation()})),x.attr("style","").draggable(r?"destroy":{}),n.toggleClass(u),e(this).toggleClass(p+"-fullscreen-off"),e.fn.resizable&&i.add(n).resizable(r?"enable":"disable").removeClass("ui-state-disabled")}),x=e('<div class="elfinder-quicklook-navbar"/>').append(e('<div class="'+p+" "+p+'-prev"/>').mousedown(function(){h(37)})).append(w).append(e('<div class="'+p+" "+p+'-next"/>').mousedown(function(){h(39)})).append('<div class="elfinder-quicklook-navbar-separator"/>').append(e('<div class="'+p+" "+p+'-close"/>').mousedown(function(){a.window.trigger("close")}));this.resize="resize."+o.namespace,this.info=e('<div class="elfinder-quicklook-info-wrapper"/>').append(b).append(y),this.preview=e('<div class="elfinder-quicklook-preview ui-helper-clearfix"/>').bind("change",function(){a.info.attr("style","").hide(),b.removeAttr("class").attr("style",""),y.html("")}).bind("update",function(t){var n,i=a.fm,r=(a.preview,t.file),o='<div class="elfinder-quicklook-info-data">{value}</div>';r?(!r.read&&t.stopImmediatePropagation(),a.window.data("hash",r.hash),a.preview.unbind("changesize").trigger("change").children().remove(),v.html(i.escape(r.name)),y.html(o.replace(/\{value\}/,r.name)+o.replace(/\{value\}/,i.mime2kind(r))+("directory"==r.mime?"":o.replace(/\{value\}/,i.formatSize(r.size)))+o.replace(/\{value\}/,i.i18n("modify")+": "+i.formatDate(r))),b.addClass("elfinder-cwd-icon ui-corner-all "+i.mime2class(r.mime)),r.tmb&&e("<img/>").hide().appendTo(a.preview).load(function(){b.css("background",'url("'+n+'") center center no-repeat'),e(this).remove()}).attr("src",n=i.tmb(r.hash)),a.info.delay(100).fadeIn(10)):t.stopImmediatePropagation()}),this.window=e('<div class="ui-helper-reset ui-widget elfinder-quicklook" style="position:absolute"/>').click(function(e){e.stopPropagation()}).append(e('<div class="elfinder-quicklook-titlebar"/>').append(v).append(e('<span class="ui-icon ui-icon-circle-close"/>').mousedown(function(e){e.stopPropagation(),a.window.trigger("close")}))).append(this.preview.add(x)).append(a.info.hide()).draggable({handle:"div.elfinder-quicklook-titlebar"}).bind("open",function(){var e,t=a.window,n=a.value;a.closed()&&n&&(e=r.find("#"+n.hash)).length&&(x.attr("style",""),c=l,e.trigger("scrolltoview"),t.css(f(e)).show().animate(m(),550,function(){c=d,a.update(1,a.value)}))}).bind("close",function(){var e=a.window,t=a.preview.trigger("change"),n=(a.value,r.find("#"+e.data("hash"))),i=function(){c=s,e.hide(),t.children().remove(),a.update(0,a.value)};a.opened()&&(c=l,e.is("."+u)&&w.mousedown(),n.length?e.animate(f(n),500,i):i())}),this.alwaysEnabled=!0,this.value=null,this.handlers={select:function(){this.update(void 0,this.fm.selectedFiles()[0])},error:function(){a.window.is(":visible")&&a.window.data("hash","").trigger("close")},"searchshow searchhide":function(){this.opened()&&this.window.trigger("close")}},this.shortcuts=[{pattern:"space"}],this.support={audio:{ogg:g('audio/ogg; codecs="vorbis"'),mp3:g("audio/mpeg;"),wav:g('audio/wav; codecs="1"'),m4a:g("audio/x-m4a;")||g("audio/aac;")},video:{ogg:g('video/ogg; codecs="theora"'),webm:g('video/webm; codecs="vp8, vorbis"'),mp4:g('video/mp4; codecs="avc1.42E01E"')||g('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')}},this.closed=function(){return c==s},this.opened=function(){return c==d},this.init=function(){var s=this.options,l=this.window,d=this.preview;t=s.width>0?parseInt(s.width):450,n=s.height>0?parseInt(s.height):300,o.one("load",function(){i=o.getUI(),r=o.getUI("cwd"),l.appendTo("body").zIndex(100+i.zIndex()),e(document).keydown(function(e){27==e.keyCode&&a.opened()&&l.trigger("close")}),e.fn.resizable&&l.resizable({handles:"se",minWidth:350,minHeight:120,resize:function(){d.trigger("changesize")}}),a.change(function(){a.opened()&&(a.value?d.trigger(e.Event("update",{file:a.value})):l.trigger("close"))}),e.each(o.commands.quicklook.plugins||[],function(e,t){"function"==typeof t&&new t(a)}),d.bind("update",function(){a.info.show()})})},this.getstate=function(){return 1==this.fm.selected().length?c==d?1:0:-1},this.exec=function(){this.enabled()&&this.window.trigger(this.opened()?"close":"open")},this.hideinfo=function(){this.info.stop(!0).hide()}},elFinder.prototype.commands.quicklook.plugins=[function(t){var n=["image/jpeg","image/png","image/gif"],i=t.preview;e.each(navigator.mimeTypes,function(t,i){var r=i.type;0===r.indexOf("image/")&&e.inArray(r,n)&&n.push(r)}),i.bind("update",function(r){var a,o=r.file;-1!==e.inArray(o.mime,n)&&(r.stopImmediatePropagation(),a=e("<img/>").hide().appendTo(i).load(function(){setTimeout(function(){var e=(a.width()/a.height()).toFixed(2);i.bind("changesize",function(){var t,n,r=parseInt(i.width()),o=parseInt(i.height());(r/o).toFixed(2)>e?(n=o,t=Math.floor(n*e)):(t=r,n=Math.floor(t/e)),a.width(t).height(n).css("margin-top",o>n?Math.floor((o-n)/2):0)}).trigger("changesize"),t.hideinfo(),a.fadeIn(100)},1)}).attr("src",t.fm.url(o.hash)))})},function(t){var n=["text/html","application/xhtml+xml"],i=t.preview,r=t.fm;i.bind("update",function(a){var o,s=a.file;-1!==e.inArray(s.mime,n)&&(a.stopImmediatePropagation(),i.one("change",function(){"pending"==o.state()&&o.reject()}),o=r.request({data:{cmd:"get",target:s.hash,current:s.phash},preventDefault:!0}).done(function(n){t.hideinfo(),doc=e('<iframe class="elfinder-quicklook-preview-html"/>').appendTo(i)[0].contentWindow.document,doc.open(),doc.write(n.content),doc.close()}))})},function(t){var n=t.fm,i=n.res("mimes","text"),r=t.preview;r.bind("update",function(a){var o,s=a.file,l=s.mime;(0===l.indexOf("text/")||-1!==e.inArray(l,i))&&(a.stopImmediatePropagation(),r.one("change",function(){"pending"==o.state()&&o.reject()}),o=n.request({data:{cmd:"get",target:s.hash},preventDefault:!0}).done(function(i){t.hideinfo(),e('<div class="elfinder-quicklook-preview-text-wrapper"><pre class="elfinder-quicklook-preview-text">'+n.escape(i.content)+"</pre></div>").appendTo(r)}))})},function(t){var n=t.fm,i="application/pdf",r=t.preview,a=!1;n.UA.Safari&&"mac"==n.OS||n.UA.IE?a=!0:e.each(navigator.plugins,function(t,n){e.each(n,function(e,t){return t.type==i?!(a=!0):void 0})}),a&&r.bind("update",function(a){var o,s=a.file;s.mime==i&&(a.stopImmediatePropagation(),r.one("change",function(){o.unbind("load").remove()}),o=e('<iframe class="elfinder-quicklook-preview-pdf"/>').hide().appendTo(r).load(function(){t.hideinfo(),o.show()}).attr("src",n.url(s.hash)))})},function(t){var n=t.fm,i="application/x-shockwave-flash",r=t.preview,a=!1;e.each(navigator.plugins,function(t,n){e.each(n,function(e,t){return t.type==i?!(a=!0):void 0})}),a&&r.bind("update",function(a){var o,s=a.file;s.mime==i&&(a.stopImmediatePropagation(),t.hideinfo(),r.append(o=e('<embed class="elfinder-quicklook-preview-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" src="'+n.url(s.hash)+'" quality="high" type="application/x-shockwave-flash" />')))})},function(t){var n,i=t.preview,r=!!t.options.autoplay,a={"audio/mpeg":"mp3","audio/mpeg3":"mp3","audio/mp3":"mp3","audio/x-mpeg3":"mp3","audio/x-mp3":"mp3","audio/x-wav":"wav","audio/wav":"wav","audio/x-m4a":"m4a","audio/aac":"m4a","audio/mp4":"m4a","audio/x-mp4":"m4a","audio/ogg":"ogg"};i.bind("update",function(o){var s=o.file,l=a[s.mime];t.support.audio[l]&&(o.stopImmediatePropagation(),n=e('<audio class="elfinder-quicklook-preview-audio" controls preload="auto" autobuffer><source src="'+t.fm.url(s.hash)+'" /></audio>').appendTo(i),r&&n[0].play())}).bind("change",function(){n&&n.parent().length&&(n[0].pause(),n.remove(),n=null)})},function(t){var n,i=t.preview,r=!!t.options.autoplay,a={"video/mp4":"mp4","video/x-m4v":"mp4","video/ogg":"ogg","application/ogg":"ogg","video/webm":"webm"};i.bind("update",function(o){var s=o.file,l=a[s.mime];t.support.video[l]&&(o.stopImmediatePropagation(),t.hideinfo(),n=e('<video class="elfinder-quicklook-preview-video" controls preload="auto" autobuffer><source src="'+t.fm.url(s.hash)+'" /></video>').appendTo(i),r&&n[0].play())}).bind("change",function(){n&&n.parent().length&&(n[0].pause(),n.remove(),n=null)})},function(t){var n,i=t.preview,r=[];e.each(navigator.plugins,function(t,n){e.each(n,function(e,t){(0===t.type.indexOf("audio/")||0===t.type.indexOf("video/"))&&r.push(t.type)})}),i.bind("update",function(a){var o,s=a.file,l=s.mime;-1!==e.inArray(s.mime,r)&&(a.stopImmediatePropagation(),(o=0===l.indexOf("video/"))&&t.hideinfo(),n=e('<embed src="'+t.fm.url(s.hash)+'" type="'+l+'" class="elfinder-quicklook-preview-'+(o?"video":"audio")+'"/>').appendTo(i))}).bind("change",function(){n&&n.parent().length&&(n.remove(),n=null)})}],elFinder.prototype.commands.reload=function(){this.alwaysEnabled=!0,this.updateOnSelect=!0,this.shortcuts=[{pattern:"ctrl+shift+r f5"}],this.getstate=function(){return 0},this.exec=function(){var e=this.fm,t=e.sync(),n=setTimeout(function(){e.notify({type:"reload",cnt:1,hideCnt:!0}),t.always(function(){e.notify({type:"reload",cnt:-1})})},e.notifyDelay);return t.always(function(){clearTimeout(n),e.trigger("reload")})}},elFinder.prototype.commands.rename=function(){this.shortcuts=[{pattern:"f2"+("mac"==this.fm.OS?" enter":"")}],this.getstate=function(){var e=this.fm.selectedFiles();return this._disabled||1!=e.length||!e[0].phash||e[0].locked?-1:0},this.exec=function(){var t=this.fm,n=t.getUI("cwd"),i=t.selected(),r=i.length,a=t.file(i.shift()),o=".elfinder-cwd-filename",s=e.Deferred().fail(function(e){var i=l.parent(),r=t.escape(a.name);i.length?(l.remove(),i.html(r)):(n.find("#"+a.hash).find(o).html(r),setTimeout(function(){n.find("#"+a.hash).click()},50)),e&&t.error(e)}).always(function(){t.enable()}),l=e('<input type="text"/>').keydown(function(t){t.stopPropagation(),t.stopImmediatePropagation(),t.keyCode==e.ui.keyCode.ESCAPE?s.reject():t.keyCode==e.ui.keyCode.ENTER&&l.blur()}).mousedown(function(e){e.stopPropagation()}).dblclick(function(e){e.stopPropagation(),e.preventDefault()}).blur(function(){var n=e.trim(l.val()),i=l.parent();if(i.length){if(l[0].setSelectionRange&&l[0].setSelectionRange(0,0),n==a.name)return s.reject();if(!n)return s.reject("errInvName");if(t.fileByName(n,a.phash))return s.reject(["errExists",n]);i.html(t.escape(n)),t.lockfiles({files:[a.hash]}),t.request({data:{cmd:"rename",target:a.hash,name:n},notify:{type:"rename",cnt:1}}).fail(function(){s.reject(),t.sync()}).done(function(e){s.resolve(e)}).always(function(){t.unlockfiles({files:[a.hash]})})}}),d=n.find("#"+a.hash).find(o).empty().append(l.val(a.name)),c=l.val().replace(/\.((tar\.(gz|bz|bz2|z|lzo))|cpio\.gz|ps\.gz|xcf\.(gz|bz2)|[a-z0-9]{1,4})$/gi,"");return this.disabled()?s.reject():!a||r>1||!d.length?s.reject("errCmdParams",this.title):a.locked?s.reject(["errLocked",a.name]):(t.one("select",function(){l.parent().length&&a&&-1===e.inArray(a.hash,t.selected())&&l.blur()}),l.select().focus(),l[0].setSelectionRange&&l[0].setSelectionRange(0,c.length),s)}},elFinder.prototype.commands.resize=function(){this.updateOnSelect=!1,this.getstate=function(){var e=this.fm.selectedFiles();return!this._disabled&&1==e.length&&e[0].read&&e[0].write&&-1!==e[0].mime.indexOf("image/")?0:-1},this.exec=function(t){var n,i,r=this.fm,a=this.files(t),o=e.Deferred(),s=function(t,n){var i=e('<div class="elfinder-dialog-resize"/>'),a='<input type="text" size="5"/>',s='<div class="elfinder-resize-row"/>',l='<div class="elfinder-resize-label"/>',d=e('<div class="elfinder-resize-control"/>'),c=e('<div class="elfinder-resize-preview"/>'),p=e('<div class="elfinder-resize-spinner">'+r.i18n("ntfloadimg")+"</div>"),u=e('<div class="elfinder-resize-handle"/>'),h=e('<div class="elfinder-resize-handle"/>'),f=e('<div class="elfinder-resize-uiresize"/>'),m=e('<div class="elfinder-resize-uicrop"/>'),g='<div class="ui-widget-content ui-corner-all elfinder-buttonset"/>',v='<div class="ui-state-default elfinder-button"/>',b='<span class="ui-widget-content elfinder-toolbar-button-separator"/>',y=e('<div class="elfinder-resize-rotate"/>'),w=e(v).attr("title",r.i18n("rotate-cw")).append(e('<span class="elfinder-button-icon elfinder-button-icon-rotate-l"/>').click(function(){W-=90,Z.update(W)})),x=e(v).attr("title",r.i18n("rotate-ccw")).append(e('<span class="elfinder-button-icon elfinder-button-icon-rotate-r"/>').click(function(){W+=90,Z.update(W)})),k=e("<span />"),C=e('<div class="ui-state-default ui-corner-all elfinder-resize-reset"><span class="ui-icon ui-icon-arrowreturnthick-1-w"/></div>'),I=e('<div class="elfinder-resize-type"/>').append('<input type="radio" name="type" id="type-resize" value="resize" checked="checked" /><label for="type-resize">'+r.i18n("resize")+"</label>").append('<input type="radio" name="type" id="type-crop"   value="crop"/><label for="type-crop">'+r.i18n("crop")+"</label>").append('<input type="radio" name="type" id="type-rotate" value="rotate"/><label for="type-rotate">'+r.i18n("rotate")+"</label>"),F=(e("input",I).change(function(){var t=e("input:checked",I).val();J(),Q(!0),et(!0),tt(!0),"resize"==t?(f.show(),y.hide(),m.hide(),Q()):"crop"==t?(y.hide(),f.hide(),m.show(),et()):"rotate"==t&&(f.hide(),m.hide(),y.show(),tt())}),e('<input type="checkbox" checked="checked"/>').change(function(){q=!!F.prop("checked"),X.fixHeight(),Q(!0),Q()})),T=e(a).change(function(){var e=parseInt(T.val()),t=parseInt(q?e/E:P.val());e>0&&t>0&&(X.updateView(e,t),P.val(t))}),P=e(a).change(function(){var e=parseInt(P.val()),t=parseInt(q?e*E:T.val());t>0&&e>0&&(X.updateView(t,e),T.val(t))}),z=e(a),O=e(a),A=e(a),D=e(a),M=e('<input type="text" size="3" maxlength="3" value="0" />').change(function(){Z.update()}),S=e('<div class="elfinder-resize-rotate-slider"/>').slider({min:0,max:359,value:M.val(),animate:!0,change:function(e,t){t.value!=S.slider("value")&&Z.update(t.value)},slide:function(e,t){Z.update(t.value,!1)}}),E=1,j=1,U=0,R=0,q=!0,H=0,L=0,N=0,_=0,W=0,V=e("<img/>").load(function(){p.remove(),U=V.width(),R=V.height(),E=U/R,X.updateView(U,R),u.append(V.show()).show(),T.val(U),P.val(R);
var t=Math.min(H,L)/Math.sqrt(Math.pow(U,2)+Math.pow(R,2));N=U*t,_=R*t,d.find("input,select").removeAttr("disabled").filter(":text").keydown(function(t){var n,i=t.keyCode;return t.stopPropagation(),i>=37&&40>=i||i==e.ui.keyCode.BACKSPACE||i==e.ui.keyCode.DELETE||65==i&&(t.ctrlKey||t.metaKey)||27==i?void 0:(9==i&&(n=e(this).parent()[t.shiftKey?"prev":"next"](".elfinder-resize-row").children(":text"),n.length&&n.focus()),13==i?(nt(),void 0):(i>=48&&57>=i||i>=96&&105>=i||t.preventDefault(),void 0))}).filter(":first").focus(),Q(),C.hover(function(){C.toggleClass("ui-state-hover")}).click(J)}).error(function(){p.text("Unable to load image").css("background","transparent")}),B=e("<div/>"),K=e("<img/>"),G=e("<div/>"),$=e("<img/>"),J=function(){T.val(U),P.val(R),X.updateView(U,R)},X={update:function(){T.val(parseInt(V.width()/j)),P.val(parseInt(V.height()/j))},updateView:function(e,t){e>H||t>L?e/H>t/L?V.width(H).height(Math.ceil(V.width()/E)):V.height(L).width(Math.ceil(V.height()*E)):V.width(e).height(t),j=V.width()/e,k.text("1 : "+(1/j).toFixed(2)),X.updateHandle()},updateHandle:function(){u.width(V.width()).height(V.height())},fixWidth:function(){var e,t;q&&(t=P.val(),t=parseInt(t*E),X.updateView(e,t),T.val(e))},fixHeight:function(){var e,t;q&&(e=T.val(),t=parseInt(e/E),X.updateView(e,t),P.val(t))}},Y={update:function(){A.val(parseInt(h.width()/j)),D.val(parseInt(h.height()/j)),z.val(parseInt((h.offset().left-K.offset().left)/j)),O.val(parseInt((h.offset().top-K.offset().top)/j))},resize_update:function(){Y.update(),G.width(h.width()),G.height(h.height())}},Z={mouseStartAngle:0,imageStartAngle:0,imageBeingRotated:!1,update:function(e,t){e===void 0&&(W=e=parseInt(M.val())),t===void 0&&(t=!0),!t||r.UA.Opera||r.UA.ltIE8?$.rotate(e):$.animate({rotate:e+"deg"}),e%=360,0>e&&(e+=360),M.val(parseInt(e)),S.slider("value",M.val())},execute:function(e){if(Z.imageBeingRotated){var t=Z.getCenter($),n=e.pageX-t[0],i=e.pageY-t[1],r=Math.atan2(i,n),a=r-Z.mouseStartAngle+Z.imageStartAngle;return a=Math.round(180*parseFloat(a)/Math.PI),e.shiftKey&&(a=15*Math.round((a+6)/15)),$.rotate(a),a%=360,0>a&&(a+=360),M.val(a),S.slider("value",M.val()),!1}},start:function(t){Z.imageBeingRotated=!0;var n=Z.getCenter($),i=t.pageX-n[0],r=t.pageY-n[1];return Z.mouseStartAngle=Math.atan2(r,i),Z.imageStartAngle=parseFloat($.rotate())*Math.PI/180,e(document).mousemove(Z.execute),!1},stop:function(){return Z.imageBeingRotated?(e(document).unbind("mousemove",Z.execute),setTimeout(function(){Z.imageBeingRotated=!1},10),!1):void 0},getCenter:function(){var e=$.rotate();$.rotate(0);var t=$.offset(),n=t.left+$.width()/2,i=t.top+$.height()/2;return $.rotate(e),[n,i]}},Q=function(t){e.fn.resizable&&(t?(u.filter(":ui-resizable").resizable("destroy"),u.hide()):(u.show(),u.resizable({alsoResize:V,aspectRatio:q,resize:X.update,stop:X.fixHeight})))},et=function(t){e.fn.draggable&&e.fn.resizable&&(t?(h.filter(":ui-resizable").resizable("destroy"),h.filter(":ui-draggable").draggable("destroy"),B.hide()):(K.width(V.width()).height(V.height()),G.width(V.width()).height(V.height()),h.width(K.width()).height(K.height()).offset(K.offset()).resizable({containment:B,resize:Y.resize_update,handles:"all"}).draggable({handle:h,containment:K,drag:Y.update}),B.show().width(V.width()).height(V.height()),Y.update()))},tt=function(t){e.fn.draggable&&e.fn.resizable&&(t?$.hide():$.show().width(N).height(_).css("margin-top",(L-_)/2+"px").css("margin-left",(H-N)/2+"px"))},nt=function(){var n,a,s,l,d,c=e("input:checked",I).val();if(T.add(P).change(),"resize"==c)n=parseInt(T.val())||0,a=parseInt(P.val())||0;else if("crop"==c)n=parseInt(A.val())||0,a=parseInt(D.val())||0,s=parseInt(z.val())||0,l=parseInt(O.val())||0;else if(c="rotate"){if(n=U,a=R,d=parseInt(M.val())||0,0>d||d>360)return r.error("Invalid rotate degree");if(0==d||360==d)return r.error("Image dose not rotated")}if("rotate"!=c){if(0>=n||0>=a)return r.error("Invalid image size");if(n==U&&a==R)return r.error("Image size not changed")}i.elfinderdialog("close"),r.request({data:{cmd:"resize",target:t.hash,width:n,height:a,x:s,y:l,degree:d,mode:c},notify:{type:"resize",cnt:1}}).fail(function(e){o.reject(e)}).done(function(){o.resolve()})},it={},rt="elfinder-resize-handle-hline",at="elfinder-resize-handle-vline",ot="elfinder-resize-handle-point",st=r.url(t.hash);$.mousedown(Z.start),e(document).mouseup(Z.stop),f.append(e(s).append(e(l).text(r.i18n("width"))).append(T).append(C)).append(e(s).append(e(l).text(r.i18n("height"))).append(P)).append(e(s).append(e("<label/>").text(r.i18n("aspectRatio")).prepend(F))).append(e(s).append(r.i18n("scale")+" ").append(k)),m.append(e(s).append(e(l).text("X")).append(z)).append(e(s).append(e(l).text("Y")).append(O)).append(e(s).append(e(l).text(r.i18n("width"))).append(A)).append(e(s).append(e(l).text(r.i18n("height"))).append(D)),y.append(e(s).append(e(l).text(r.i18n("rotate"))).append(e('<div style="float:left; width: 130px;">').append(e('<div style="float:left;">').append(M).append(e("<span/>").text(r.i18n("degree")))).append(e(g).append(w).append(e(b)).append(x))).append(S)),i.append(I),d.append(e(s)).append(f).append(m.hide()).append(y.hide()).find("input,select").attr("disabled","disabled"),u.append('<div class="'+rt+" "+rt+'-top"/>').append('<div class="'+rt+" "+rt+'-bottom"/>').append('<div class="'+at+" "+at+'-left"/>').append('<div class="'+at+" "+at+'-right"/>').append('<div class="'+ot+" "+ot+'-e"/>').append('<div class="'+ot+" "+ot+'-se"/>').append('<div class="'+ot+" "+ot+'-s"/>'),c.append(p).append(u.hide()).append(V.hide()),h.css("position","absolute").append('<div class="'+rt+" "+rt+'-top"/>').append('<div class="'+rt+" "+rt+'-bottom"/>').append('<div class="'+at+" "+at+'-left"/>').append('<div class="'+at+" "+at+'-right"/>').append('<div class="'+ot+" "+ot+'-n"/>').append('<div class="'+ot+" "+ot+'-e"/>').append('<div class="'+ot+" "+ot+'-s"/>').append('<div class="'+ot+" "+ot+'-w"/>').append('<div class="'+ot+" "+ot+'-ne"/>').append('<div class="'+ot+" "+ot+'-se"/>').append('<div class="'+ot+" "+ot+'-sw"/>').append('<div class="'+ot+" "+ot+'-nw"/>'),c.append(B.css("position","absolute").hide().append(K).append(h.append(G))),c.append($.hide()),c.css("overflow","hidden"),i.append(c).append(d),it[r.i18n("btnCancel")]=function(){i.elfinderdialog("close")},it[r.i18n("btnApply")]=nt,r.dialog(i,{title:t.name,width:650,resizable:!1,destroyOnClose:!0,buttons:it,open:function(){c.zIndex(1+e(this).parent().zIndex())}}).attr("id",n),r.UA.ltIE8&&e(".elfinder-dialog").css("filter",""),C.css("left",T.position().left+T.width()+12),G.css({opacity:.2,"background-color":"#fff",position:"absolute"}),h.css("cursor","move"),h.find(".elfinder-resize-handle-point").css({"background-color":"#fff",opacity:.5,"border-color":"#000"}),$.css("cursor","pointer"),I.buttonset(),H=c.width()-(u.outerWidth()-u.width()),L=c.height()-(u.outerHeight()-u.height()),V.attr("src",st+(-1===st.indexOf("?")?"?":"&")+"_="+Math.random()),K.attr("src",V.attr("src")),$.attr("src",V.attr("src"))};return a.length&&-1!==a[0].mime.indexOf("image/")?(n="resize-"+r.namespace+"-"+a[0].hash,i=r.getUI().find("#"+n),i.length?(i.elfinderdialog("toTop"),o.resolve()):(s(a[0],n),o)):o.reject()}},function(e){var t=function(e,t){var n=0;for(n in t)if(e[t[n]]!==void 0)return t[n];return e[t[n]]="",t[n]};if(e.cssHooks.rotate={get:function(t){return e(t).rotate()},set:function(t,n){return e(t).rotate(n),n}},e.cssHooks.transform={get:function(e){var n=t(e.style,["WebkitTransform","MozTransform","OTransform","msTransform","transform"]);return e.style[n]},set:function(e,n){var i=t(e.style,["WebkitTransform","MozTransform","OTransform","msTransform","transform"]);return e.style[i]=n,n}},e.fn.rotate=function(e){if(e===void 0){if(window.opera){var t=this.css("transform").match(/rotate\((.*?)\)/);return t&&t[1]?Math.round(180*parseFloat(t[1])/Math.PI):0}var t=this.css("transform").match(/rotate\((.*?)\)/);return t&&t[1]?parseInt(t[1]):0}return this.css("transform",this.css("transform").replace(/none|rotate\(.*?\)/,"")+"rotate("+parseInt(e)+"deg)"),this},e.fx.step.rotate=function(t){0==t.state&&(t.start=e(t.elem).rotate(),t.now=t.start),e(t.elem).rotate(t.now)},window.addEventListener===void 0&&document.getElementsByClassName===void 0){var n=function(e){for(var t=e,n=t.offsetLeft,i=t.offsetTop;t.offsetParent&&(t=t.offsetParent,t==document.body||"static"==t.currentStyle.position);)t!=document.body&&t!=document.documentElement&&(n-=t.scrollLeft,i-=t.scrollTop),n+=t.offsetLeft,i+=t.offsetTop;return{x:n,y:i}},i=function(e){if("static"==e.currentStyle.position){var t=n(e);e.style.position="absolute",e.style.left=t.x+"px",e.style.top=t.y+"px"}},r=function(e,t){var n,r=1,a=1,o=1,s=1;if(e.style.msTransform!==void 0)return!0;i(e),n=t.match(/rotate\((.*?)\)/);var l=n&&n[1]?parseInt(n[1]):0;l%=360,0>l&&(l=360+l);var d=l*Math.PI/180,c=Math.cos(d),p=Math.sin(d);r*=c,a*=-p,o*=p,s*=c,e.style.filter=(e.style.filter||"").replace(/progid:DXImageTransform\.Microsoft\.Matrix\([^)]*\)/,"")+("progid:DXImageTransform.Microsoft.Matrix(M11="+r+",M12="+a+",M21="+o+",M22="+s+",FilterType='bilinear',sizingMethod='auto expand')");var u=parseInt(e.style.width||e.width||0),h=parseInt(e.style.height||e.height||0),d=l*Math.PI/180,f=Math.abs(Math.cos(d)),m=Math.abs(Math.sin(d)),g=(u-(u*f+h*m))/2,v=(h-(u*m+h*f))/2;return e.style.marginLeft=Math.floor(g)+"px",e.style.marginTop=Math.floor(v)+"px",!0},a=e.cssHooks.transform.set;e.cssHooks.transform.set=function(e,t){return a.apply(this,[e,t]),r(e,t),t}}}(jQuery),elFinder.prototype.commands.rm=function(){this.shortcuts=[{pattern:"delete ctrl+backspace"}],this.getstate=function(t){var n=this.fm;return t=t||n.selected(),!this._disabled&&t.length&&e.map(t,function(e){var t=n.file(e);return t&&t.phash&&!t.locked?e:null}).length==t.length?0:-1},this.exec=function(t){var n=this,i=this.fm,r=e.Deferred().fail(function(e){e&&i.error(e)}),a=this.files(t),o=a.length,s=i.cwd().hash,l=!1;return!o||this._disabled?r.reject():(e.each(a,function(e,t){return t.phash?t.locked?!r.reject(["errLocked",t.name]):(t.hash==s&&(l=i.root(t.hash)),void 0):!r.reject(["errRm",t.name,"errPerm"])}),"pending"==r.state()&&(a=this.hashes(t),i.confirm({title:n.title,text:"confirmRm",accept:{label:"btnRm",callback:function(){i.lockfiles({files:a}),i.request({data:{cmd:"rm",targets:a},notify:{type:"rm",cnt:o},preventFail:!0}).fail(function(e){r.reject(e)}).done(function(e){r.done(e),l&&i.exec("open",l)}).always(function(){i.unlockfiles({files:a})})}},cancel:{label:"btnCancel",callback:function(){r.reject()}}})),r)}},elFinder.prototype.commands.search=function(){this.title="Find files",this.options={ui:"searchbutton"},this.alwaysEnabled=!0,this.updateOnSelect=!1,this.getstate=function(){return 0},this.exec=function(t){var n=this.fm;return"string"==typeof t&&t?(n.trigger("searchstart",{query:t}),n.request({data:{cmd:"search",q:t},notify:{type:"search",cnt:1,hideCnt:!0}})):(n.getUI("toolbar").find("."+n.res("class","searchbtn")+" :text").focus(),e.Deferred().reject())}},elFinder.prototype.commands.sort=function(){this.options={ui:"sortbutton"},this.getstate=function(){return 0},this.exec=function(t,n){var i=this.fm,n=e.extend({type:i.sortType,order:i.sortOrder,stick:i.sortStickFolders},n);return this.fm.setSort(n.type,n.order,n.stick),e.Deferred().resolve()}},elFinder.prototype.commands.up=function(){this.alwaysEnabled=!0,this.updateOnSelect=!1,this.shortcuts=[{pattern:"ctrl+up"}],this.getstate=function(){return this.fm.cwd().phash?0:-1},this.exec=function(){return this.fm.cwd().phash?this.fm.exec("open",this.fm.cwd().phash):e.Deferred().reject()}},elFinder.prototype.commands.upload=function(){var t=this.fm.res("class","hover");this.disableOnSearch=!0,this.updateOnSelect=!1,this.shortcuts=[{pattern:"ctrl+u"}],this.getstate=function(){return!this._disabled&&this.fm.cwd().write?0:-1},this.exec=function(n){var i,r,a,o,s,l=this.fm,d=function(e){r.elfinderdialog("close"),l.upload(e).fail(function(e){i.reject(e)}).done(function(e){i.resolve(e)})};return this.disabled()?e.Deferred().reject():n&&(n.input||n.files)?l.upload(n):(i=e.Deferred(),a=e('<input type="file" multiple="true"/>').change(function(){d({input:a[0]})}),o=e('<div class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"><span class="ui-button-text">'+l.i18n("selectForUpload")+"</span></div>").append(e("<form/>").append(a)).hover(function(){o.toggleClass(t)}),r=e('<div class="elfinder-upload-dialog-wrapper"/>').append(o),l.dragUpload&&(s=e('<div class="ui-corner-all elfinder-upload-dropbox">'+l.i18n("dropFiles")+"</div>").prependTo(r).after('<div class="elfinder-upload-dialog-or">'+l.i18n("or")+"</div>")[0],s.addEventListener("dragenter",function(n){n.stopPropagation(),n.preventDefault(),e(s).addClass(t)},!1),s.addEventListener("dragleave",function(n){n.stopPropagation(),n.preventDefault(),e(s).removeClass(t)},!1),s.addEventListener("dragover",function(e){e.stopPropagation(),e.preventDefault()},!1),s.addEventListener("drop",function(e){e.stopPropagation(),e.preventDefault(),d({files:e.dataTransfer.files})},!1)),l.dialog(r,{title:this.title,modal:!0,resizable:!1,destroyOnClose:!0}),i)}},elFinder.prototype.commands.view=function(){this.value=this.fm.viewType,this.alwaysEnabled=!0,this.updateOnSelect=!1,this.options={ui:"viewbutton"},this.getstate=function(){return 0},this.exec=function(){var e=this.fm.storage("view","list"==this.value?"icons":"list");this.fm.viewchange(),this.update(void 0,e)}}})(jQuery);
/**
 * elFinder translation template
 * use this file to create new translation
 * submit new translation via https://github.com/Studio-42/elFinder/issues
 * or make a pull request
 */
 
/**
 * XXXXX translation
 * @author Translator Name <translator@email.tld>
 * @version 201x-xx-xx
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
	elFinder.prototype.i18.REPLACE_WITH_xx_OR_xx_YY_LANG_CODE = {
		translator : 'Translator name &lt;translator@email.tld&gt;',
		language   : 'Language of translation in your language',
		direction  : 'ltr',
		dateFormat : 'd.m.Y H:i',
		fancyDateFormat : '$1 H:i',
		messages   : {
			
			/********************************** errors **********************************/
			'error'                : 'Error',
			'errUnknown'           : 'Unknown error.',
			'errUnknownCmd'        : 'Unknown command.',
			'errJqui'              : 'Invalid jQuery UI configuration. Selectable, draggable and droppable components must be included.',
			'errNode'              : 'elFinder requires DOM Element to be created.',
			'errURL'               : 'Invalid elFinder configuration! URL option is not set.',
			'errAccess'            : 'Access denied.',
			'errConnect'           : 'Unable to connect to backend.',
			'errAbort'             : 'Connection aborted.',
			'errTimeout'           : 'Connection timeout.',
			'errNotFound'          : 'Backend not found.',
			'errResponse'          : 'Invalid backend response.',
			'errConf'              : 'Invalid backend configuration.',
			'errJSON'              : 'PHP JSON module not installed.',
			'errNoVolumes'         : 'Readable volumes not available.',
			'errCmdParams'         : 'Invalid parameters for command "$1".',
			'errDataNotJSON'       : 'Data is not JSON.',
			'errDataEmpty'         : 'Data is empty.',
			'errCmdReq'            : 'Backend request requires command name.',
			'errOpen'              : 'Unable to open "$1".',
			'errNotFolder'         : 'Object is not a folder.',
			'errNotFile'           : 'Object is not a file.',
			'errRead'              : 'Unable to read "$1".',
			'errWrite'             : 'Unable to write into "$1".',
			'errPerm'              : 'Permission denied.',
			'errLocked'            : '"$1" is locked and can not be renamed, moved or removed.',
			'errExists'            : 'File named "$1" already exists.',
			'errInvName'           : 'Invalid file name.',
			'errFolderNotFound'    : 'Folder not found.',
			'errFileNotFound'      : 'File not found.',
			'errTrgFolderNotFound' : 'Target folder "$1" not found.',
			'errPopup'             : 'Browser prevented opening popup window. To open file enable it in browser options.',
			'errMkdir'             : 'Unable to create folder "$1".',
			'errMkfile'            : 'Unable to create file "$1".',
			'errRename'            : 'Unable to rename "$1".',
			'errCopyFrom'          : 'Copying files from volume "$1" not allowed.',
			'errCopyTo'            : 'Copying files to volume "$1" not allowed.',
			'errUploadCommon'      : 'Upload error.',
			'errUpload'            : 'Unable to upload "$1".',
			'errUploadNoFiles'     : 'No files found for upload.',
			'errMaxSize'           : 'Data exceeds the maximum allowed size.',
			'errFileMaxSize'       : 'File exceeds maximum allowed size.',
			'errUploadMime'        : 'File type not allowed.',
			'errUploadTransfer'    : '"$1" transfer error.', 
			'errSave'              : 'Unable to save "$1".',
			'errCopy'              : 'Unable to copy "$1".',
			'errMove'              : 'Unable to move "$1".',
			'errCopyInItself'      : 'Unable to copy "$1" into itself.',
			'errRm'                : 'Unable to remove "$1".',
			'errExtract'           : 'Unable to extract files from "$1".',
			'errArchive'           : 'Unable to create archive.',
			'errArcType'           : 'Unsupported archive type.',
			'errNoArchive'         : 'File is not archive or has unsupported archive type.',
			'errCmdNoSupport'      : 'Backend does not support this command.',
			'errReplByChild'       : 'The folder “$1” can’t be replaced by an item it contains.',
			'errArcSymlinks'       : 'For security reason denied to unpack archives contains symlinks or files with not allowed names.', // edited 24.06.2012
			'errArcMaxSize'        : 'Archive files exceeds maximum allowed size.',
			'errResize'            : 'Unable to resize "$1".',
			'errUsupportType'      : 'Unsupported file type.',
			'errNotUTF8Content'    : 'File "$1" is not in UTF-8 and cannot be edited.',  // added 9.11.2011
			'errNetMount'          : 'Unable to mount "$1".',     // added 17.04.2012
			'errNetMountNoDriver'  : 'Unsupported protocol.',     // added 17.04.2012
			'errNetMountFailed'    : 'Mount failed.',             // added 17.04.2012
			'errNetMountHostReq'   : 'Host required.', // added 18.04.2012
			/******************************* commands names ********************************/
			'cmdarchive'   : 'Create archive',
			'cmdback'      : 'Back',
			'cmdcopy'      : 'Copy',
			'cmdcut'       : 'Cut',
			'cmddownload'  : 'Download',
			'cmdduplicate' : 'Duplicate',
			'cmdedit'      : 'Edit file',
			'cmdextract'   : 'Extract files from archive',
			'cmdforward'   : 'Forward',
			'cmdgetfile'   : 'Select files',
			'cmdhelp'      : 'About this software',
			'cmdhome'      : 'Home',
			'cmdinfo'      : 'Get info',
			'cmdmkdir'     : 'New folder',
			'cmdmkfile'    : 'New text file',
			'cmdopen'      : 'Open',
			'cmdpaste'     : 'Paste',
			'cmdquicklook' : 'Preview',
			'cmdreload'    : 'Reload',
			'cmdrename'    : 'Rename',
			'cmdrm'        : 'Delete',
			'cmdsearch'    : 'Find files',
			'cmdup'        : 'Go to parent directory',
			'cmdupload'    : 'Upload files',
			'cmdview'      : 'View',
			'cmdresize'    : 'Resize image',
			'cmdsort'      : 'Sort',
			
			/*********************************** buttons ***********************************/ 
			'btnClose'  : 'Close',
			'btnSave'   : 'Save',
			'btnRm'     : 'Remove',
			'btnApply'  : 'Apply',
			'btnCancel' : 'Cancel',
			'btnNo'     : 'No',
			'btnYes'    : 'Yes',
			
			/******************************** notifications ********************************/
			'ntfopen'     : 'Open folder',
			'ntffile'     : 'Open file',
			'ntfreload'   : 'Reload folder content',
			'ntfmkdir'    : 'Creating directory',
			'ntfmkfile'   : 'Creating files',
			'ntfrm'       : 'Delete files',
			'ntfcopy'     : 'Copy files',
			'ntfmove'     : 'Move files',
			'ntfprepare'  : 'Prepare to copy files',
			'ntfrename'   : 'Rename files',
			'ntfupload'   : 'Uploading files',
			'ntfdownload' : 'Downloading files',
			'ntfsave'     : 'Save files',
			'ntfarchive'  : 'Creating archive',
			'ntfextract'  : 'Extracting files from archive',
			'ntfsearch'   : 'Searching files',
			'ntfsmth'     : 'Doing something >_<',
			'ntfloadimg'  : 'Loading image',
			'ntfnetmount' : 'Mounting network volume', // added 18.04.2012
			
			/************************************ dates **********************************/
			'dateUnknown' : 'unknown',
			'Today'       : 'Today',
			'Yesterday'   : 'Yesterday',
			'Jan'         : 'Jan',
			'Feb'         : 'Feb',
			'Mar'         : 'Mar',
			'Apr'         : 'Apr',
			'May'         : 'May',
			'Jun'         : 'Jun',
			'Jul'         : 'Jul',
			'Aug'         : 'Aug',
			'Sep'         : 'Sep',
			'Oct'         : 'Oct',
			'Nov'         : 'Nov',
			'Dec'         : 'Dec',
			'January'     : 'January',
			'February'    : 'February',
			'March'       : 'March',
			'April'       : 'April',
			'May'         : 'May',
			'June'        : 'June',
			'July'        : 'July',
			'August'      : 'August',
			'September'   : 'September',
			'October'     : 'October',
			'November'    : 'November',
			'December'    : 'December',
			'Sunday'      : 'Sunday', 
			'Monday'      : 'Monday', 
			'Tuesday'     : 'Tuesday', 
			'Wednesday'   : 'Wednesday', 
			'Thursday'    : 'Thursday', 
			'Friday'      : 'Friday', 
			'Saturday'    : 'Saturday',
			'Sun'         : 'Sun', 
			'Mon'         : 'Mon', 
			'Tue'         : 'Tue', 
			'Wed'         : 'Wed', 
			'Thu'         : 'Thu', 
			'Fri'         : 'Fri', 
			'Sat'         : 'Sat',
			/******************************** sort variants ********************************/
			'sortname'          : 'by name', 
			'sortkind'          : 'by kind', 
			'sortsize'          : 'by size',
			'sortdate'          : 'by date',
			'sortFoldersFirst'  : 'Folders first', // added 22.06.2012
			
			/********************************** messages **********************************/
			'confirmReq'      : 'Confirmation required',
			'confirmRm'       : 'Are you sure you want to remove files?<br/>This cannot be undone!',
			'confirmRepl'     : 'Replace old file with new one?',
			'apllyAll'        : 'Apply to all',
			'name'            : 'Name',
			'size'            : 'Size',
			'perms'           : 'Permissions',
			'modify'          : 'Modified',
			'kind'            : 'Kind',
			'read'            : 'read',
			'write'           : 'write',
			'noaccess'        : 'no access',
			'and'             : 'and',
			'unknown'         : 'unknown',
			'selectall'       : 'Select all files',
			'selectfiles'     : 'Select file(s)',
			'selectffile'     : 'Select first file',
			'selectlfile'     : 'Select last file',
			'viewlist'        : 'List view',
			'viewicons'       : 'Icons view',
			'places'          : 'Places',
			'calc'            : 'Calculate', 
			'path'            : 'Path',
			'aliasfor'        : 'Alias for',
			'locked'          : 'Locked',
			'dim'             : 'Dimensions',
			'files'           : 'Files',
			'folders'         : 'Folders',
			'items'           : 'Items',
			'yes'             : 'yes',
			'no'              : 'no',
			'link'            : 'Link',
			'searcresult'     : 'Search results',  
			'selected'        : 'selected items',
			'about'           : 'About',
			'shortcuts'       : 'Shortcuts',
			'help'            : 'Help',
			'webfm'           : 'Web file manager',
			'ver'             : 'Version',
			'protocolver'     : 'protocol version',
			'homepage'        : 'Project home',
			'docs'            : 'Documentation',
			'github'          : 'Fork us on Github',
			'twitter'         : 'Follow us on twitter',
			'facebook'        : 'Join us on facebook',
			'team'            : 'Team',
			'chiefdev'        : 'chief developer',
			'developer'       : 'developer',
			'contributor'     : 'contributor',
			'maintainer'      : 'maintainer',
			'translator'      : 'translator',
			'icons'           : 'Icons',
			'dontforget'      : 'and don\'t forget to take your towel',
			'shortcutsof'     : 'Shortcuts disabled',
			'dropFiles'       : 'Drop files here',
			'or'              : 'or',
			'selectForUpload' : 'Select files to upload',
			'moveFiles'       : 'Move files',
			'copyFiles'       : 'Copy files',
			'rmFromPlaces'    : 'Remove from places',
			'untitled folder' : 'untitled folder',
			'untitled file.txt' : 'untitled file.txt',
			'aspectRatio'     : 'Aspect ratio',
			'scale'           : 'Scale',
			'width'           : 'Width',
			'height'          : 'Height',
			'mode'            : 'Mode',
			'resize'          : 'Resize',
			'crop'            : 'Crop',
			'rotate'          : 'Rotate',
			'rotate-cw'       : 'Rotate 90 degrees CW',
			'rotate-ccw'      : 'Rotate 90 degrees CCW',
			'degree'          : 'Degree',
			'netMountDialogTitle' : 'Mount network volume', // added 18.04.2012
			'protocol'            : 'Protocol', // added 18.04.2012
			'host'                : 'Host', // added 18.04.2012
			'port'                : 'Port', // added 18.04.2012
			'user'                : 'User', // added 18.04.2012
			'pass'                : 'Password', // added 18.04.2012
			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Unknown',
			'kindFolder'      : 'Folder',
			'kindAlias'       : 'Alias',
			'kindAliasBroken' : 'Broken alias',
			// applications
			'kindApp'         : 'Application',
			'kindPostscript'  : 'Postscript document',
			'kindMsOffice'    : 'Microsoft Office document',
			'kindMsWord'      : 'Microsoft Word document',
			'kindMsExcel'     : 'Microsoft Excel document',
			'kindMsPP'        : 'Microsoft Powerpoint presentation',
			'kindOO'          : 'Open Office document',
			'kindAppFlash'    : 'Flash application',
			'kindPDF'         : 'Portable Document Format (PDF)',
			'kindTorrent'     : 'Bittorrent file',
			'kind7z'          : '7z archive',
			'kindTAR'         : 'TAR archive',
			'kindGZIP'        : 'GZIP archive',
			'kindBZIP'        : 'BZIP archive',
			'kindZIP'         : 'ZIP archive',
			'kindRAR'         : 'RAR archive',
			'kindJAR'         : 'Java JAR file',
			'kindTTF'         : 'True Type font',
			'kindOTF'         : 'Open Type font',
			'kindRPM'         : 'RPM package',
			// texts
			'kindText'        : 'Text document',
			'kindTextPlain'   : 'Plain text',
			'kindPHP'         : 'PHP source',
			'kindCSS'         : 'Cascading style sheet',
			'kindHTML'        : 'HTML document',
			'kindJS'          : 'Javascript source',
			'kindRTF'         : 'Rich Text Format',
			'kindC'           : 'C source',
			'kindCHeader'     : 'C header source',
			'kindCPP'         : 'C++ source',
			'kindCPPHeader'   : 'C++ header source',
			'kindShell'       : 'Unix shell script',
			'kindPython'      : 'Python source',
			'kindJava'        : 'Java source',
			'kindRuby'        : 'Ruby source',
			'kindPerl'        : 'Perl script',
			'kindSQL'         : 'SQL source',
			'kindXML'         : 'XML document',
			'kindAWK'         : 'AWK source',
			'kindCSV'         : 'Comma separated values',
			'kindDOCBOOK'     : 'Docbook XML document',
			// images
			'kindImage'       : 'Image',
			'kindBMP'         : 'BMP image',
			'kindJPEG'        : 'JPEG image',
			'kindGIF'         : 'GIF Image',
			'kindPNG'         : 'PNG Image',
			'kindTIFF'        : 'TIFF image',
			'kindTGA'         : 'TGA image',
			'kindPSD'         : 'Adobe Photoshop image',
			'kindXBITMAP'     : 'X bitmap image',
			'kindPXM'         : 'Pixelmator image',
			// media
			'kindAudio'       : 'Audio media',
			'kindAudioMPEG'   : 'MPEG audio',
			'kindAudioMPEG4'  : 'MPEG-4 audio',
			'kindAudioMIDI'   : 'MIDI audio',
			'kindAudioOGG'    : 'Ogg Vorbis audio',
			'kindAudioWAV'    : 'WAV audio',
			'AudioPlaylist'   : 'MP3 playlist',
			'kindVideo'       : 'Video media',
			'kindVideoDV'     : 'DV movie',
			'kindVideoMPEG'   : 'MPEG movie',
			'kindVideoMPEG4'  : 'MPEG-4 movie',
			'kindVideoAVI'    : 'AVI movie',
			'kindVideoMOV'    : 'Quick Time movie',
			'kindVideoWM'     : 'Windows Media movie',
			'kindVideoFlash'  : 'Flash movie',
			'kindVideoMKV'    : 'Matroska movie',
			'kindVideoOGG'    : 'Ogg movie'
		}
	}
}


/**
 * Arabic translation (Syrian Localization, it may differ if you aren't from Syria or any Country in Middle East)
 * @author Tawfek Daghistani <tawfekov@gmail.com>
 * @version 2011-07-09
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
	elFinder.prototype.i18.ar = {
		translator : 'Tawfek Daghistani &lt;tawfekov@gmail.com&gt;',
		language   : 'العربية',
		direction  : 'rtl',
		messages   : {

			/********************************** errors **********************************/
			'error'                : 'خطأ',
			'errUnknown'           : 'خطأ غير معروف .',
			'errUnknownCmd'        : 'أمر غير معروف .',
			'errJqui'              : 'إعدادات jQuery UI غير كاملة الرجاء التأكد من وجود كل من selectable, draggable and droppable',
			'errNode'              : '. موجود DOM إلى عنصر  elFinder تحتاج  ',
			'errURL'               : 'إعدادات خاطئة , عليك وضع الرابط ضمن الإعدادات',
			'errAccess'            : 'وصول مرفوض .',
			'errConnect'           : 'غير قادر على الاتصال بالخادم الخلفي  (backend)',
			'errAbort'             : 'تم فصل الإتصال',
			'errTimeout'           : 'مهلة الإتصال قد إنتهت .',
			'errNotFound'          : 'الخادم الخلفي غير موجود .',
			'errResponse'          : 'رد غير مقبول من الخادم الخلفي',
			'errConf'              : 'خطأ في الإعدادات الخاصة بالخادم الخلفي ',
			'errJSON'              : 'الميزة PHP JSON module غير موجودة ',
			'errNoVolumes'         : 'لا يمكن القراءة من أي من الوسائط الموجودة ',
			'errCmdParams'         : 'البيانات المرسلة للأمر غير مقبولة "$1".',
			'errDataNotJSON'       : 'المعلومات المرسلة ليست من نوع JSON ',
			'errDataEmpty'         : 'لا يوجد معلومات مرسلة',
			'errCmdReq'            : 'الخادم الخلفي يطلب وجود اسم الأمر ',
			'errOpen'              : 'غير قادر على فتح  "$1".',
			'errNotFolder'         : 'العنصر المختار ليس مجلد',
			'errNotFile'           : 'العنصر المختار ليس ملف',
			'errRead'              : 'غير قادر على القراءة "$1".',
			'errWrite'             : 'غير قادر على الكتابة "$1".',
			'errPerm'              : 'وصول مرفوض ',
			'errLocked'            : ' محمي و لا يمكن التعديل أو النقل أو إعادة التسمية"$1"',
			'errExists'            : ' موجود مسبقاً "$1"',
			'errInvName'           : 'الاسم مرفوض',
			'errFolderNotFound'    : 'المجلد غير موجود',
			'errFileNotFound'      : 'الملف غير موجود',
			'errTrgFolderNotFound' : 'الملف الهدف  "$1" غير موجود ',
			'errPopup'             : 'يمنعني المتصفح من إنشاء نافذة منبثقة , الرجاء تعديل الخيارات الخاصة  من إعدادات المتصفح ',
			'errMkdir'             : ' غير قادر على إنشاء مجلد جديد "$1".',
			'errMkfile'            : ' غير قادر على إنشاء ملف جديد"$1".',
			'errRename'            : 'غير قادر على إعادة تسمية ال  "$1".',
			'errCopyFrom'          : 'نسخ الملفات من الوسط المحدد "$1"غير مسموح.',
			'errCopyTo'            : 'نسخ الملفات إلى الوسط المحدد "$1" غير مسموح .',
			'errUploadCommon'      : 'خطأ أثناء عملية الرفع',
			'errUpload'            : 'غير قادر على رفع "$1".',
			'errUploadNoFiles'     : 'لم يتم رفع أي ملف ',
			'errMaxSize'           : 'حجم البيانات أكبر من الحجم المسموح به ',
			'errFileMaxSize'       : 'حجم الملف أكبر من الحجم المسموح به',
			'errUploadMime'        : 'نوع ملف غير مسموح ',
			'errUploadTransfer'    : '"$1" خطأ أثناء عملية النقل', 
			'errSave'              : 'غير قادر على الحفظ في  "$1".',
			'errCopy'              : 'غير قادر على النسخ إلى"$1".',
			'errMove'              : 'غير قادر على القص إلى "$1".',
			'errCopyInItself'      : 'غير قادر على نسخ الملف "$1" ضمن الملف نفسه.',
			'errRm'                : 'غير قادر على الحذف "$1".',
			'errExtract'           : 'غير قادر على استخراج الملفات من  "$1".',
			'errArchive'           : 'غير قادر على إنشاء ملف  مضغوط',
			'errArcType'           : 'نوع الملف المضغوط غير مدعومة',
			'errNoArchive'         : 'هذا الملف ليس ملف مضغوط أو ذو صسغة غير مدعومة ',
			'errCmdNoSupport'      : 'الخادم الخلفي لا يدعم هذا الأمر ',
			'errReplByChild'       : 'The folder “$1” can’t be replaced by an item it contains.',
			'errArcSymlinks'       : 'For security reason denied to unpack archives contains symlinks.',
			'errArcMaxSize'        : 'Archive files exceeds maximum allowed size.',
			
			/******************************* commands names ********************************/
			'cmdarchive'   : 'أنشئ مجلد مضغوط',
			'cmdback'      : 'الخلف',
			'cmdcopy'      : 'نسخ',
			'cmdcut'       : 'قص',
			'cmddownload'  : 'تحميل',
			'cmdduplicate' : 'تكرار',
			'cmdedit'      : 'تعديل الملف',
			'cmdextract'   : 'استخراج الملفات',
			'cmdforward'   : 'الأمام',
			'cmdgetfile'   : 'أختيار الملفات',
			'cmdhelp'      : 'عن هذا المشروع',
			'cmdhome'      : 'المجلد الرئيسي',
			'cmdinfo'      : 'معلومات ',
			'cmdmkdir'     : 'مجلد جديد',
			'cmdmkfile'    : 'ملف نصي جديد',
			'cmdopen'      : 'فتح',
			'cmdpaste'     : 'لصق',
			'cmdquicklook' : 'معاينة',
			'cmdreload'    : 'إعادة تحميل',
			'cmdrename'    : 'إعادة تسمية',
			'cmdrm'        : 'حذف',
			'cmdsearch'    : 'بحث عن ملفات',
			'cmdup'        : 'تغيير المسار إلى مستوى أعلى',
			'cmdupload'    : 'رفع ملفات',
			'cmdview'      : 'عرض',

			/*********************************** buttons ***********************************/ 
			'btnClose'  : 'إغلاق',
			'btnSave'   : 'حفظ',
			'btnRm'     : 'إزالة',
			'btnCancel' : 'إلغاء',
			'btnNo'     : 'لا',
			'btnYes'    : 'نعم',

			/******************************** notifications ********************************/
			'ntfopen'     : 'فتح مجلد',
			'ntffile'     : 'فتح ملف',
			'ntfreload'   : 'إعادة عرض محتويات المجلد ',
			'ntfmkdir'    : 'ينشئ المجلدات',
			'ntfmkfile'   : 'ينشئ الملفات',
			'ntfrm'       : 'حذف الملفات',
			'ntfcopy'     : 'نسخ الملفات',
			'ntfmove'     : 'نقل الملفات',
			'ntfprepare'  : 'تحضير لنسخ الملفات',
			'ntfrename'   : 'إعادة تسمية الملفات',
			'ntfupload'   : 'رفع الملفات',
			'ntfdownload' : 'تحميل الملفات',
			'ntfsave'     : 'حفظ الملفات',
			'ntfarchive'  : 'ينشئ ملف مضغوط',
			'ntfextract'  : 'استخراج ملفات من الملف المضغوط ',
			'ntfsearch'   : 'يبحث عن ملفات',
			'ntfsmth'     : 'يحضر لشيء ما >_<',

			/************************************ dates **********************************/
			'dateUnknown' : 'غير معلوم',
			'Today'       : 'اليوم',
			'Yesterday'   : 'البارحة',
			'Jan'         : 'كانون الثاني',
			'Feb'         : 'شباط',
			'Mar'         : 'آذار',
			'Apr'         : 'نيسان',
			'May'         : 'أيار',
			'Jun'         : 'حزيران',
			'Jul'         : 'تموز',
			'Aug'         : 'آب',
			'Sep'         : 'أيلول',
			'Oct'         : 'تشرين الأول',
			'Nov'         : 'تشرين الثاني',
			'Dec'         : 'كانون الأول ',

			/********************************** messages **********************************/
			'confirmReq'      : 'يرجى التأكيد',
			'confirmRm'       : 'هل انت متأكد من انك تريد الحذف<br/>لا يمكن التراجع عن هذه العملية ',
			'confirmRepl'     : 'استبدال الملف القديم بملف جديد ؟',
			'apllyAll'        : 'تطبيق على الكل',
			'name'            : 'الأسم',
			'size'            : 'الحجم',
			'perms'           : 'الصلاحيات',
			'modify'          : 'أخر تعديل',
			'kind'            : 'نوع الملف',
			'read'            : 'قراءة',
			'write'           : 'كتابة',
			'noaccess'        : 'وصول ممنوع',
			'and'             : 'و',
			'unknown'         : 'غير معروف',
			'selectall'       : 'تحديد كل الملفات',
			'selectfiles'     : 'تحديد ملفات',
			'selectffile'     : 'تحديد الملف الاول',
			'selectlfile'     : 'تحديد الملف الأخير',
			'viewlist'        : 'اعرض ك قائمة',
			'viewicons'       : 'اعرض ك ايقونات',
			'places'          : 'المواقع',
			'calc'            : 'حساب', 
			'path'            : 'مسار',
			'aliasfor'        : 'Alias for',
			'locked'          : 'مقفول',
			'dim'             : 'الابعاد',
			'files'           : 'ملفات',
			'folders'         : 'مجلدات',
			'items'           : 'عناصر',
			'yes'             : 'نعم',
			'no'              : 'لا',
			'link'            : 'اربتاط',
			'searcresult'     : 'نتائج البحث',  
			'selected'        : 'العناصر المحددة',
			'about'           : 'عن البرنامج',
			'shortcuts'       : 'الاختصارات',
			'help'            : 'مساعدة',
			'webfm'           : 'مدير ملفات الويب',
			'ver'             : 'رقم الإصدار',
			'protocolver'     : 'اصدار البرتوكول',
			'homepage'        : 'الصفحة الرئيسية',
			'docs'            : 'التعليمات',
			'github'          : 'شاركنا بتطوير المشروع على Github',
			'twitter'         : 'تابعنا على تويتر',
			'facebook'        : 'انضم إلينا على الفيس بوك',
			'team'            : 'الفريق',
			'chiefdev'        : 'رئيس المبرمجين',
			'developer'       : 'مبرمح',
			'contributor'     : 'مبرمح',
			'maintainer'      : 'مشارك',
			'translator'      : 'مترجم',
			'icons'           : 'أيقونات',
			'dontforget'      : 'and don\'t forget to take your towel',
			'shortcutsof'     : 'الاختصارات غير مفعلة',
			'dropFiles'       : 'لصق الملفات هنا',
			'or'              : 'أو',
			'selectForUpload' : 'اختر الملفات التي تريد رفعها',
			'moveFiles'       : 'قص الملفات',
			'copyFiles'       : 'نسخ الملفات',
			'rmFromPlaces'    : 'Remove from places',
			'untitled folder' : 'untitled folder',
			'untitled file.txt' : 'untitled file.txt',
			
			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'غير معروف',
			'kindFolder'      : 'مجلد',
			'kindAlias'       : 'اختصار',
			'kindAliasBroken' : 'اختصار غير صالح',
			// applications
			'kindApp'         : 'برنامج',
			'kindPostscript'  : 'Postscript ملف',
			'kindMsOffice'    : 'Microsoft Office ملف',
			'kindMsWord'      : 'Microsoft Word ملف',
			'kindMsExcel'     : 'Microsoft Excel ملف',
			'kindMsPP'        : 'Microsoft Powerpoint عرض تقديمي ',
			'kindOO'          : 'Open Office ملف',
			'kindAppFlash'    : 'تطبيق فلاش',
			'kindPDF'         : 'ملف (PDF)',
			'kindTorrent'     : 'Bittorrent ملف',
			'kind7z'          : '7z ملف',
			'kindTAR'         : 'TAR ملف',
			'kindGZIP'        : 'GZIP ملف',
			'kindBZIP'        : 'BZIP ملف',
			'kindZIP'         : 'ZIP ملف',
			'kindRAR'         : 'RAR ملف',
			'kindJAR'         : 'Java JAR ملف',
			'kindTTF'         : 'True Type خط ',
			'kindOTF'         : 'Open Type خط ',
			'kindRPM'         : 'RPM ملف تنصيب',
			// texts
			'kindText'        : 'Text ملف',
			'kindTextPlain'   : 'مستند نصي',
			'kindPHP'         : 'PHP ملف نصي برمجي لـ',
			'kindCSS'         : 'Cascading style sheet',
			'kindHTML'        : 'HTML ملف',
			'kindJS'          : 'Javascript ملف نصي برمجي لـ',
			'kindRTF'         : 'Rich Text Format',
			'kindC'           : 'C ملف نصي برمجي لـ',
			'kindCHeader'     : 'C header ملف نصي برمجي لـ',
			'kindCPP'         : 'C++ ملف نصي برمجي لـ',
			'kindCPPHeader'   : 'C++ header ملف نصي برمجي لـ',
			'kindShell'       : 'Unix shell script',
			'kindPython'      : 'Python ملف نصي برمجي لـ',
			'kindJava'        : 'Java ملف نصي برمجي لـ',
			'kindRuby'        : 'Ruby ملف نصي برمجي لـ',
			'kindPerl'        : 'Perl script',
			'kindSQL'         : 'SQL ملف نصي برمجي لـ',
			'kindXML'         : 'XML ملف',
			'kindAWK'         : 'AWK ملف نصي برمجي لـ',
			'kindCSV'         : 'ملف CSV',
			'kindDOCBOOK'     : 'Docbook XML ملف',
			// images
			'kindصورة'       : 'صورة',
			'kindBMP'         : 'BMP صورة',
			'kindJPEG'        : 'JPEG صورة',
			'kindGIF'         : 'GIF صورة',
			'kindPNG'         : 'PNG صورة',
			'kindTIFF'        : 'TIFF صورة',
			'kindTGA'         : 'TGA صورة',
			'kindPSD'         : 'Adobe Photoshop صورة',
			'kindXBITMAP'     : 'X bitmap صورة',
			'kindPXM'         : 'Pixelmator صورة',
			// media
			'kindAudio'       : 'ملف صوتي',
			'kindAudioMPEG'   : 'MPEG ملف صوتي',
			'kindAudioMPEG4'  : 'MPEG-4 ملف صوتي',
			'kindAudioMIDI'   : 'MIDI ملف صوتي',
			'kindAudioOGG'    : 'Ogg Vorbis ملف صوتي',
			'kindAudioWAV'    : 'WAV ملف صوتي',
			'AudioPlaylist'   : 'MP3 قائمة تشغيل',
			'kindVideo'       : 'ملف فيديو',
			'kindVideoDV'     : 'DV ملف فيديو',
			'kindVideoMPEG'   : 'MPEG ملف فيديو',
			'kindVideoMPEG4'  : 'MPEG-4 ملف فيديو',
			'kindVideoAVI'    : 'AVI ملف فيديو',
			'kindVideoMOV'    : 'Quick Time ملف فيديو',
			'kindVideoWM'     : 'Windows Media ملف فيديو',
			'kindVideoFlash'  : 'Flash ملف فيديو',
			'kindVideoMKV'    : 'Matroska ملف فيديو',
			'kindVideoOGG'    : 'Ogg ملف فيديو'
		}
	}
}


 


/**
 * Bulgarian translation
 * @author Stamo Petkov <stamo.petkov@gmail.com>
 * @version 2012-02-18
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
	elFinder.prototype.i18.bg = {
		translator : 'Stamo Petkov &lt;stamo.petkov@gmail.com&gt;',
		language   : 'Български',
		direction  : 'ltr',
		messages   : {
			
			/********************************** errors **********************************/
			'error'                : 'Грешка',
			'errUnknown'           : 'Непозната грешка.',
			'errUnknownCmd'        : 'Непозната команда.',
			'errJqui'              : 'Грешна конфигурация на jQuery UI. Компонентите selectable, draggable и droppable трябва да са включени.',
			'errNode'              : 'elFinder изисква да бъде създаден DOM елемент.',
			'errURL'               : 'Грешка в настройките на elFinder! не е зададена стойност на URL.',
			'errAccess'            : 'Достъп отказан.',
			'errConnect'           : 'Няма връзка със сървъра.',
			'errAbort'             : 'Връзката е прекъсната.',
			'errTimeout'           : 'Просрочена връзка.',
			'errNotFound'          : 'Сървърът не е намерен.', 
			'errResponse'          : 'Грешен отговор от сървъра.',
			'errConf'              : 'Грешни настройки на сървъра.', 
			'errJSON'              : 'Не е инсталиран модул на PHP за JSON.',
			'errNoVolumes'         : 'Няма дялове достъпни за четене.',
			'errCmdParams'         : 'Грешни параметри на командата "$1".',
			'errDataNotJSON'       : 'Данните не са JSON.',
			'errDataEmpty'         : 'Липсват данни.',
			'errCmdReq'            : 'Запитването от сървъра изисква име на команда.',
			'errOpen'              : 'Не мога да отворя "$1".',
			'errNotFolder'         : 'Обектът не е папка.',
			'errNotFile'           : 'Обектът не е фаил.',
			'errRead'              : 'Не мога да прочета "$1".',
			'errWrite'             : 'Не мога да пиша в "$1".',
			'errPerm'              : 'Разрешение отказано.',
			'errLocked'            : '"$1" е заключен и не може да бъде преименуван, местен или премахван.',
			'errExists'            : 'Вече съществува файл с име "$1"',
			'errInvName'           : 'Грешно име на фаил.',
			'errFolderNotFound'    : 'Папката не е открита.',
			'errFileNotFound'      : 'Фаилът не е открит.',
			'errTrgFolderNotFound' : 'Целевата папка "$1" не е намерена.',
			'errPopup'             : 'Браузъра блокира отварянето на прозорец. За да отворите файла, разрешете отварянето в настройките на браузъра.',
			'errMkdir'             : 'Не мога да създам папка"$1".',
			'errMkfile'            : 'Не мога да създам файл "$1".',
			'errRename'            : 'Не мога да преименувам "$1".',
			'errCopyFrom'          : 'Копирането на файлове от том "$1" не е разрешено.',
			'errCopyTo'            : 'Копирането на файлове в том "$1" не е разрешено.',
			'errUploadCommon'      : 'Грешка при качване.',
			'errUpload'            : 'Не мога да кача "$1".',
			'errUploadNoFiles'     : 'Не са намерени файлове за качване.',
			'errMaxSize'           : 'Данните превишават максимално допостумия размер.',
			'errFileMaxSize'       : 'Файла превишава максимално допустимия размер.',
			'errUploadMime'        : 'Не е позволен тип на файла.',
			'errUploadTransfer'    : '"$1" грешка при предаване.', 
			'errSave'              : 'Не мога да запиша "$1".',
			'errCopy'              : 'Не мога да копирам "$1".',
			'errMove'              : 'Не мога да преместя "$1".',
			'errCopyInItself'      : 'Не мога да копирам "$1" върху самия него.',
			'errRm'                : 'Не мога да премахна "$1".',
			'errExtract'           : 'Не мога да извлеча файловете от "$1".',
			'errArchive'           : 'Не мога да създам архив.',
			'errArcType'           : 'Неподдържан тип на архива.',
			'errNoArchive'         : 'Файлът не е архив или е от неподдържан тип.',
			'errCmdNoSupport'      : 'Сървъра не поддържа тази команда.', 
			'errReplByChild'       : 'Папката “$1” не може да бъде заменена от съдържащ се в нея елемент.',
			'errArcSymlinks'       : 'От съображения за сигурност няма да бъдат разопаковани архиви съдържащи symlinks.',
			'errArcMaxSize'        : 'Архивните файлове превишават максимално допустимия размер.',
			'errResize'            : 'Не мога да преоразмеря "$1".',
			'errUsupportType'      : 'Неподдържан тип файл.',
			
			/******************************* commands names ********************************/
			'cmdarchive'   : 'Създай архив',
			'cmdback'      : 'Назад',
			'cmdcopy'      : 'Копирай',
			'cmdcut'       : 'Изрежи',
			'cmddownload'  : 'Свали',
			'cmdduplicate' : 'Дублирай',
			'cmdedit'      : 'Редактирай файл',
			'cmdextract'   : 'Извлечи файловете от архива',
			'cmdforward'   : 'Напред',
			'cmdgetfile'   : 'Избери файлове',
			'cmdhelp'      : 'За тази програма',
			'cmdhome'      : 'Начало',
			'cmdinfo'      : 'Информация',
			'cmdmkdir'     : 'Нова папка',
			'cmdmkfile'    : 'Нов текстови файл',
			'cmdopen'      : 'Отвори',
			'cmdpaste'     : 'Вмъкни',
			'cmdquicklook' : 'Преглед',
			'cmdreload'    : 'Презареди',
			'cmdrename'    : 'Преименувай',
			'cmdrm'        : 'Изтрий',
			'cmdsearch'    : 'Намери файлове',
			'cmdup'        : 'Една директория нагоре',
			'cmdupload'    : 'Качи файловете',
			'cmdview'      : 'Виж',
			'cmdresize'    : 'Размер на изображение',
			'cmdsort'      : 'Подреди',
			
			/*********************************** buttons ***********************************/ 
			'btnClose'  : 'Затвори',
			'btnSave'   : 'Запиши',
			'btnRm'     : 'Премахни',
			'btnApply'  : 'Приложи',
			'btnCancel' : 'Отказ',
			'btnNo'     : 'Не',
			'btnYes'    : 'Да',
			
			/******************************** notifications ********************************/
			'ntfopen'     : 'Отваряне на папка',
			'ntffile'     : 'Отваряне на файл',
			'ntfreload'   : 'Презареждане съдържанието на папка',
			'ntfmkdir'    : 'Създавам директория',
			'ntfmkfile'   : 'Създавам файл',
			'ntfrm'       : 'Изтриване на файлове',
			'ntfcopy'     : 'Копиране на файлове',
			'ntfmove'     : 'Преместване на файлове',
			'ntfprepare'  : 'Подготовка за копиране на файлове',
			'ntfrename'   : 'Преименуване на файлове',
			'ntfupload'   : 'Качвам файлове',
			'ntfdownload' : 'Свалям файлове',
			'ntfsave'     : 'Запис на файлове',
			'ntfarchive'  : 'Създавам архив',
			'ntfextract'  : 'Извличам файловете от архив',
			'ntfsearch'   : 'Търся файлове',
			'ntfsmth'     : 'Зает съм >_<',
			'ntfloadimg'  : 'Зареждам изображения',
			
			/************************************ dates **********************************/
			'dateUnknown' : 'неизвестна',
			'Today'       : 'Днес',
			'Yesterday'   : 'Вчера',
			'Jan'         : 'Яну',
			'Feb'         : 'Фев',
			'Mar'         : 'Мар',
			'Apr'         : 'Апр',
			'May'         : 'Май',
			'Jun'         : 'Юни',
			'Jul'         : 'Юли',
			'Aug'         : 'Авг',
			'Sep'         : 'Сеп',
			'Oct'         : 'Окт',
			'Nov'         : 'Ное',
			'Dec'         : 'Дек',
			
			/******************************** sort variants ********************************/
			'sortnameDirsFirst' : 'по име (първо папките)', 
			'sortkindDirsFirst' : 'по вид (първо папките)', 
			'sortsizeDirsFirst' : 'по размер (първо папките)', 
			'sortdateDirsFirst' : 'по дата (първо папките)', 
			'sortname'          : 'по име', 
			'sortkind'          : 'по вид', 
			'sortsize'          : 'по размер',
			'sortdate'          : 'по дата',
			
			/********************************** messages **********************************/
			'confirmReq'      : 'Изисква се подтвърждение',
			'confirmRm'       : 'Сигурни ли сте, че желаете да премахнете файловете?<br/>Това действие е необратимо!',
			'confirmRepl'     : 'Да заменя ли стария фаил с новия?',
			'apllyAll'        : 'Приложи за всички',
			'name'            : 'Име',
			'size'            : 'Размер',
			'perms'           : 'Привилегии',
			'modify'          : 'Променен',
			'kind'            : 'Вид',
			'read'            : 'четене',
			'write'           : 'запис',
			'noaccess'        : 'без достъп',
			'and'             : 'и',
			'unknown'         : 'непознат',
			'selectall'       : 'Избери всички файлове',
			'selectfiles'     : 'Избери фаил(ове)',
			'selectffile'     : 'Избери първият файл',
			'selectlfile'     : 'Избери последният файл',
			'viewlist'        : 'Изглед списък',
			'viewicons'       : 'Изглед икони',
			'places'          : 'Места',
			'calc'            : 'Изчисли', 
			'path'            : 'Път',
			'aliasfor'        : 'Връзка към',
			'locked'          : 'Заключен',
			'dim'             : 'Размери',
			'files'           : 'Файлове',
			'folders'         : 'Папки',
			'items'           : 'Елементи',
			'yes'             : 'да',
			'no'              : 'не',
			'link'            : 'Връзка',
			'searcresult'     : 'Резултати от търсенето',  
			'selected'        : 'Избрани елементи',
			'about'           : 'За',
			'shortcuts'       : 'преки пътища',
			'help'            : 'Помощ',
			'webfm'           : 'Файлов менаджер за web',
			'ver'             : 'Версия',
			'protocolver'        : 'версия на протокола',
			'homepage'        : 'Начало',
			'docs'            : 'Документация',
			'github'          : 'Разклонение в Github',
			'twitter'         : 'Последвайте ни в Twitter',
			'facebook'        : 'Присъединете се към нас във Facebook',
			'team'            : 'Екип',
			'chiefdev'        : 'Главен разработчик',
			'developer'       : 'разработчик',
			'contributor'     : 'сътрудник',
			'maintainer'      : 'поддръжка',
			'translator'      : 'преводач',
			'icons'           : 'Икони',
			'dontforget'      : 'и не забравяйте да си вземете кърпата',
			'shortcutsof'     : 'Преките пътища са изключени',
			'dropFiles'       : 'Пуснете файловете тук',
			'or'              : 'или',
			'selectForUpload' : 'Изберете файлове за качване',
			'moveFiles'       : 'Премести файлове',
			'copyFiles'       : 'Копирай файлове',
			'rmFromPlaces'    : 'Премахни от Места',
			'untitled folder' : 'Неозаглавена папка',
			'untitled file.txt' : 'неозаглавен_файл.txt',
			'aspectRatio'     : 'Отношение',
			'scale'           : 'Мащаб',
			'width'           : 'Ширина',
			'height'          : 'Височина',
			'mode'            : 'Режим',
			'resize'          : 'Преоразмери',
			'crop'            : 'Отрежи',

			
			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Непознат',
			'kindFolder'      : 'Папка',
			'kindAlias'       : 'Връзка',
			'kindAliasBroken' : 'Счупена връзка',
			// applications
			'kindApp'         : 'Приложение',
			'kindPostscript'  : 'Postscript документ',
			'kindMsOffice'    : 'Microsoft Office документ',
			'kindMsWord'      : 'Microsoft Word документ',
			'kindMsExcel'     : 'Microsoft Excel документ',
			'kindMsPP'        : 'Microsoft Powerpoint презентация',
			'kindOO'          : 'Open Office документ',
			'kindAppFlash'    : 'Flash приложение',
			'kindPDF'         : 'PDF документ',
			'kindTorrent'     : 'Bittorrent файл',
			'kind7z'          : '7z архив',
			'kindTAR'         : 'TAR архив',
			'kindGZIP'        : 'GZIP архив',
			'kindBZIP'        : 'BZIP архив',
			'kindZIP'         : 'ZIP архив',
			'kindRAR'         : 'RAR архив',
			'kindJAR'         : 'Java JAR файл',
			'kindTTF'         : 'True Type шрифт',
			'kindOTF'         : 'Open Type шрифт',
			'kindRPM'         : 'RPM пакет',
			// texts
			'kindText'        : 'Текстов документ',
			'kindTextPlain'   : 'Чист текст',
			'kindPHP'         : 'PHP изходен код',
			'kindCSS'         : 'CSS таблица със стилове',
			'kindHTML'        : 'HTML документ',
			'kindJS'          : 'Javascript изходен код',
			'kindRTF'         : 'RTF текстови файл',
			'kindC'           : 'C изходен код',
			'kindCHeader'     : 'C header изходен код',
			'kindCPP'         : 'C++ изходен код',
			'kindCPPHeader'   : 'C++ header изходен код',
			'kindShell'       : 'Unix shell script',
			'kindPython'      : 'Python изходен код',
			'kindJava'        : 'Java изходен код',
			'kindRuby'        : 'Ruby изходен код',
			'kindPerl'        : 'Perl изходен код',
			'kindSQL'         : 'SQL изходен код',
			'kindXML'         : 'XML документ',
			'kindAWK'         : 'AWK изходен код',
			'kindCSV'         : 'CSV стойности разделени със запетая',
			'kindDOCBOOK'     : 'Docbook XML документ',
			// images
			'kindImage'       : 'Изображение',
			'kindBMP'         : 'BMP изображение',
			'kindJPEG'        : 'JPEG изображение',
			'kindGIF'         : 'GIF изображение',
			'kindPNG'         : 'PNG изображение',
			'kindTIFF'        : 'TIFF изображение',
			'kindTGA'         : 'TGA изображение',
			'kindPSD'         : 'Adobe Photoshop изображение',
			'kindXBITMAP'     : 'X bitmap изображение',
			'kindPXM'         : 'Pixelmator изображение',
			// media
			'kindAudio'       : 'Аудио медия',
			'kindAudioMPEG'   : 'MPEG звук',
			'kindAudioMPEG4'  : 'MPEG-4 звук',
			'kindAudioMIDI'   : 'MIDI звук',
			'kindAudioOGG'    : 'Ogg Vorbis звук',
			'kindAudioWAV'    : 'WAV звук',
			'AudioPlaylist'   : 'MP3 списък за изпълнение',
			'kindVideo'       : 'Видео медия',
			'kindVideoDV'     : 'DV филм',
			'kindVideoMPEG'   : 'MPEG филм',
			'kindVideoMPEG4'  : 'MPEG-4 филм',
			'kindVideoAVI'    : 'AVI филм',
			'kindVideoMOV'    : 'Quick Time филм',
			'kindVideoWM'     : 'Windows Media филм',
			'kindVideoFlash'  : 'Flash филм',
			'kindVideoMKV'    : 'Matroska филм',
			'kindVideoOGG'    : 'Ogg филм'
		}
	}
}

/**
 * Catalan translation
 * @author Sergio Jovani <lesergi@gmail.com>
 * @version 2011-11-13
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
	elFinder.prototype.i18.ca = {
		translator : 'Sergio Jovani &lt;lesergi@gmail.com&gt;',
		language   : 'Català',
		direction  : 'ltr',
		messages   : {
			
			/********************************** errors **********************************/
			'error'                : 'Error',
			'errUnknown'           : 'Error desconegut.',
			'errUnknownCmd'        : 'Ordre desconeguda.',
			'errJqui'              : 'La configuració de jQuery UI no és vàlida. S\'han d\'incloure els components "selectable", "draggable" i "droppable".',
			'errNode'              : 'elFinder necessita crear elements DOM.',
			'errURL'               : 'La configuració de l\'elFinder no és vàlida! L\'opció URL no està configurada.',
			'errAccess'            : 'Accés denegat.',
			'errConnect'           : 'No s\'ha pogut connectar amb el rerefons.',
			'errAbort'             : 'S\'ha interromput la connexió.',
			'errTimeout'           : 'Temps de connexió excedit.',
			'errNotFound'          : 'No s\'ha trobat el rerefons.',
			'errResponse'          : 'La resposta del rerefons no és vàlida.',
			'errConf'              : 'La configuració del rerefons no és vàlida.',
			'errJSON'              : 'No està instal·lat el mòdul JSON del PHP.',
			'errNoVolumes'         : 'No s\'han trobat volums llegibles.',
			'errCmdParams'         : 'Els paràmetres per l\'ordre "$1" no són vàlids.',
			'errDataNotJSON'       : 'Les dades no són JSON.',
			'errDataEmpty'         : 'Les dades estan buides.',
			'errCmdReq'            : 'La sol·licitud del rerefons necessita el nom de l\'ordre.',
			'errOpen'              : 'No s\'ha pogut obrir "$1".',
			'errNotFolder'         : 'L\'objecte no és una carpeta.',
			'errNotFile'           : 'L\'objecte no és un fitxer.',
			'errRead'              : 'No s\'ha pogut llegir "$1".',
			'errWrite'             : 'No s\'ha pogut escriure a "$1".',
			'errPerm'              : 'Permís denegat.',
			'errLocked'            : '"$1" està bloquejat i no podeu canviar-li el nom, moure-lo ni suprimir-lo.',
			'errExists'            : 'Ja existeix un fitxer anomenat "$1".',
			'errInvName'           : 'El nom de fitxer no és vàlid.',
			'errFolderNotFound'    : 'No s\'ha trobat la carpeta.',
			'errFileNotFound'      : 'No s\'ha trobat el fitxer.',
			'errTrgFolderNotFound' : 'No s\'ha trobat la carpeta de destí "$1".',
			'errPopup'             : 'El navegador ha evitat obrir una finestra emergent. Autoritzeu-la per obrir el fitxer.',
			'errMkdir'             : 'No s\'ha pogut crear la carpeta "$1".',
			'errMkfile'            : 'No s\'ha pogut crear el fitxer "$1".',
			'errRename'            : 'No s\'ha pogut canviar el nom de "$1".',
			'errCopyFrom'          : 'No està permès copiar fitxers des del volum "$1".',
			'errCopyTo'            : 'No està permès copiar fitxers al volum "$1".',
			'errUploadCommon'      : 'S\'ha produït un error en la càrrega.',
			'errUpload'            : 'No s\'ha pogut carregar "$1".',
			'errUploadNoFiles'     : 'No s\'han trobat fitxers per carregar.',
			'errMaxSize'           : 'Les dades excedeixen la mida màxima permesa.',
			'errFileMaxSize'       : 'El fitxer excedeix la mida màxima permesa.',
			'errUploadMime'        : 'El tipus de fitxer no està permès.',
			'errUploadTransfer'    : 'S\'ha produït un error en transferir "$1".', 
			'errSave'              : 'No s\'ha pogut desar "$1".',
			'errCopy'              : 'No s\'ha pogut copiar "$1".',
			'errMove'              : 'No s\'ha pogut moure "$1".',
			'errCopyInItself'      : 'No s\'ha pogut copiar "$1" a si mateix.',
			'errRm'                : 'No s\'ha pogut suprimir "$1".',
			'errExtract'           : 'No s\'han pogut extreure els fitxers de "$1".',
			'errArchive'           : 'No s\'ha pogut crear l\'arxiu.',
			'errArcType'           : 'El tipus d\'arxiu no està suportat.',
			'errNoArchive'         : 'El fitxer no és un arxiu o és un tipus no suportat.',
			'errCmdNoSupport'      : 'El rerefons no suporta aquesta ordre.',
			'errReplByChild'       : 'No es pot reemplaçar la carpeta “$1” per un element que conté.',
			'errArcSymlinks'       : 'Per raons de seguretat, no es permet extreure arxius que contenen enllaços simbòlics.',
			'errArcMaxSize'        : 'Els fitxers de l\'arxiu excedeixen la mida màxima permesa.',
			'errResize'            : 'No s\'ha pogut redimensionar "$1".',
			'errUsupportType'      : 'El tipus de fitxer no està suportat.',
			
			/******************************* commands names ********************************/
			'cmdarchive'   : 'Crea arxiu',
			'cmdback'      : 'Enrere',
			'cmdcopy'      : 'Copia',
			'cmdcut'       : 'Retalla',
			'cmddownload'  : 'Descarrega',
			'cmdduplicate' : 'Duplica',
			'cmdedit'      : 'Edita el fitxer',
			'cmdextract'   : 'Extreu els fitxers de l\'arxiu',
			'cmdforward'   : 'Endavant',
			'cmdgetfile'   : 'Selecciona els fitxers',
			'cmdhelp'      : 'Quant a aquest programari',
			'cmdhome'      : 'Inici',
			'cmdinfo'      : 'Obté informació',
			'cmdmkdir'     : 'Nova carpeta',
			'cmdmkfile'    : 'Nou fitxer de text',
			'cmdopen'      : 'Obre',
			'cmdpaste'     : 'Enganxa',
			'cmdquicklook' : 'Previsualitza',
			'cmdreload'    : 'Torna a carregar',
			'cmdrename'    : 'Canvia el nom',
			'cmdrm'        : 'Suprimeix',
			'cmdsearch'    : 'Cerca fitxers',
			'cmdup'        : 'Vés al directori superior',
			'cmdupload'    : 'Carrega fitxers',
			'cmdview'      : 'Visualitza',
			'cmdresize'    : 'Redimensiona la imatge',
			'cmdsort'      : 'Ordena',
			
			/*********************************** buttons ***********************************/ 
			'btnClose'  : 'Tanca',
			'btnSave'   : 'Desa',
			'btnRm'     : 'Suprimeix',
			'btnApply'  : 'Aplica',
			'btnCancel' : 'Cancel·la',
			'btnNo'     : 'No',
			'btnYes'    : 'Sí',
			
			/******************************** notifications ********************************/
			'ntfopen'     : 'S\'està obrint la carpeta',
			'ntffile'     : 'S\'està obrint el fitxer',
			'ntfreload'   : 'S\'està tornant a carregar el contingut de la carpeta',
			'ntfmkdir'    : 'S\'està creant el directori',
			'ntfmkfile'   : 'S\'estan creant el fitxers',
			'ntfrm'       : 'S\'estan suprimint els fitxers',
			'ntfcopy'     : 'S\'estan copiant els fitxers',
			'ntfmove'     : 'S\'estan movent els fitxers',
			'ntfprepare'  : 'S\'està preparant per copiar fitxers',
			'ntfrename'   : 'S\'estan canviant els noms del fitxers',
			'ntfupload'   : 'S\'estan carregant els fitxers',
			'ntfdownload' : 'S\'estan descarregant els fitxers',
			'ntfsave'     : 'S\'estan desant els fitxers',
			'ntfarchive'  : 'S\'està creant l\'arxiu',
			'ntfextract'  : 'S\'estan extreient els fitxers de l\'arxiu',
			'ntfsearch'   : 'S\'estan cercant els fitxers',
			'ntfsmth'     : 'S\'estan realitzant operacions',
      'ntfloadimg'  : 'S\'està carregant la imatge',
			
			/************************************ dates **********************************/
			'dateUnknown' : 'desconegut',
			'Today'       : 'Avui',
			'Yesterday'   : 'Ahir',
			'Jan'         : 'gen.',
			'Feb'         : 'febr.',
			'Mar'         : 'març',
			'Apr'         : 'abr.',
			'May'         : 'maig',
			'Jun'         : 'juny',
			'Jul'         : 'jul.',
			'Aug'         : 'ag.',
			'Sep'         : 'set.',
			'Oct'         : 'oct.',
			'Nov'         : 'nov.',
			'Dec'         : 'des.',
			
			/******************************** sort variants ********************************/
			'sortnameDirsFirst' : 'per nom (carpetes primer)', 
			'sortkindDirsFirst' : 'per tipus (carpetes primer)', 
			'sortsizeDirsFirst' : 'per mida (carpetes primer)', 
			'sortdateDirsFirst' : 'per data (carpetes primer)', 
			'sortname'          : 'per nom', 
			'sortkind'          : 'per tipus', 
			'sortsize'          : 'per mida',
			'sortdate'          : 'per data',
			
			/********************************** messages **********************************/
			'confirmReq'      : 'Es necessita confirmació',
			'confirmRm'       : 'Voleu suprimir els fitxers?<br />L\'acció es podrà desfer!',
			'confirmRepl'     : 'Voleu reemplaçar el fitxer antic amb el nou?',
			'apllyAll'        : 'Aplica a tot',
			'name'            : 'Nom',
			'size'            : 'Mida',
			'perms'           : 'Permisos',
			'modify'          : 'Modificat',
			'kind'            : 'Tipus',
			'read'            : 'llegir',
			'write'           : 'escriure',
			'noaccess'        : 'sense accés',
			'and'             : 'i',
			'unknown'         : 'desconegut',
			'selectall'       : 'Selecciona tots els fitxers',
			'selectfiles'     : 'Selecciona el(s) fitxer(s)',
			'selectffile'     : 'Selecciona el primer fitxer',
			'selectlfile'     : 'Selecciona l\'últim fitxer',
			'viewlist'        : 'Vista en llista',
			'viewicons'       : 'Vista en icones',
			'places'          : 'Llocs',
			'calc'            : 'Calcula', 
			'path'            : 'Camí',
			'aliasfor'        : 'Àlies per',
			'locked'          : 'Bloquejat',
			'dim'             : 'Dimensions',
			'files'           : 'Fitxers',
			'folders'         : 'Carpetes',
			'items'           : 'Elements',
			'yes'             : 'sí',
			'no'              : 'no',
			'link'            : 'Enllaç',
			'searcresult'     : 'Resultats de la cerca',  
			'selected'        : 'Elements seleccionats',
			'about'           : 'Quant a',
			'shortcuts'       : 'Dreceres',
			'help'            : 'Ajuda',
			'webfm'           : 'Gestor de fitxers web',
			'ver'             : 'Versió',
			'protocolver'     : 'versió de protocol',
			'homepage'        : 'Pàgina del projecte',
			'docs'            : 'Documentació',
			'github'          : 'Bifurca\'ns a GitHub',
			'twitter'         : 'Segueix-nos a Twitter',
			'facebook'        : 'Uniu-vos a Facebook',
			'team'            : 'Equip',
			'chiefdev'        : 'cap desenvolupador',
			'developer'       : 'desenvolupador',
			'contributor'     : 'col·laborador',
			'maintainer'      : 'mantenidor',
			'translator'      : 'traductor',
			'icons'           : 'Icones',
			'dontforget'      : 'i no oblideu agafar la vostra tovallola',
			'shortcutsof'     : 'Les dreceres estan inhabilitades',
			'dropFiles'       : 'Arrossegueu els fitxers aquí',
			'or'              : 'o',
			'selectForUpload' : 'Seleccioneu els fitxer a carregar',
			'moveFiles'       : 'Mou els fitxers',
			'copyFiles'       : 'Copia els fitxers',
			'rmFromPlaces'    : 'Suprimeix dels llocs',
			'untitled folder' : 'carpeta sense nom',
			'untitled file.txt' : 'fitxer sense nom.txt',
			'aspectRatio'     : 'Relació d\'aspecte',
			'scale'           : 'Escala',
			'width'           : 'Amplada',
			'height'          : 'Alçada',
      'mode'            : 'Mode',
      'resize'          : 'Redimensiona',
      'crop'            : 'Retalla',
			
			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Desconegut',
			'kindFolder'      : 'Carpeta',
			'kindAlias'       : 'Àlies',
			'kindAliasBroken' : 'Àlies no vàlid',
			// applications
			'kindApp'         : 'Aplicació',
			'kindPostscript'  : 'Document Postscript',
			'kindMsOffice'    : 'Document del Microsoft Office',
			'kindMsWord'      : 'Document del Microsoft Word',
			'kindMsExcel'     : 'Document del Microsoft Excel',
			'kindMsPP'        : 'Presentació del Microsoft Powerpoint',
			'kindOO'          : 'Document de l\'Open Office',
			'kindAppFlash'    : 'Aplicació Flash',
			'kindPDF'         : 'Document PDF',
			'kindTorrent'     : 'Fitxer Bittorrent',
			'kind7z'          : 'Arxiu 7z',
			'kindTAR'         : 'Arxiu TAR',
			'kindGZIP'        : 'Arxiu GZIP',
			'kindBZIP'        : 'Arxiu BZIP',
			'kindZIP'         : 'Arxiu ZIP',
			'kindRAR'         : 'Arxiu RAR',
			'kindJAR'         : 'Fitxer JAR de Java',
			'kindTTF'         : 'Tipus de lletra True Type',
			'kindOTF'         : 'Tipus de lletra Open Type',
			'kindRPM'         : 'Paquet RPM',
			// texts
			'kindText'        : 'Document de text',
			'kindTextPlain'   : 'Document de text net',
			'kindPHP'         : 'Codi PHP',
			'kindCSS'         : 'Full d\'estils CSS',
			'kindHTML'        : 'Document HTML',
			'kindJS'          : 'Codi Javascript',
			'kindRTF'         : 'Document RTF',
			'kindC'           : 'Codi C',
			'kindCHeader'     : 'Codi de caçalera C',
			'kindCPP'         : 'Codi C++',
			'kindCPPHeader'   : 'Codi de caçalera C++',
			'kindShell'       : 'Script Unix',
			'kindPython'      : 'Codi Python',
			'kindJava'        : 'Codi Java',
			'kindRuby'        : 'Codi Ruby',
			'kindPerl'        : 'Script Perl',
			'kindSQL'         : 'Codi SQL',
			'kindXML'         : 'Document XML',
			'kindAWK'         : 'Codi AWK',
			'kindCSV'         : 'Document CSV',
			'kindDOCBOOK'     : 'Document XML de Docbook',
			// images
			'kindImage'       : 'Imatge',
			'kindBMP'         : 'Imatge BMP',
			'kindJPEG'        : 'Imatge JPEG',
			'kindGIF'         : 'Imatge GIF',
			'kindPNG'         : 'Imatge PNG',
			'kindTIFF'        : 'Imatge TIFF',
			'kindTGA'         : 'Imatge TGA',
			'kindPSD'         : 'Imatge Adobe Photoshop',
			'kindXBITMAP'     : 'Imatge X bitmap',
			'kindPXM'         : 'Imatge Pixelmator',
			// media
			'kindAudio'       : 'Fitxer d\'àudio',
			'kindAudioMPEG'   : 'Fitxer d\'àudio MPEG',
			'kindAudioMPEG4'  : 'Fitxer d\'àudio MPEG-4',
			'kindAudioMIDI'   : 'Fitxer d\'àudio MIDI',
			'kindAudioOGG'    : 'Fitxer d\'àudio Ogg Vorbis',
			'kindAudioWAV'    : 'Fitxer d\'àudio WAV',
			'AudioPlaylist'   : 'Llista de reproducció MP3',
			'kindVideo'       : 'Fitxer de vídeo',
			'kindVideoDV'     : 'Fitxer de vídeo DV',
			'kindVideoMPEG'   : 'Fitxer de vídeo MPEG',
			'kindVideoMPEG4'  : 'Fitxer de vídeo MPEG-4',
			'kindVideoAVI'    : 'Fitxer de vídeo AVI',
			'kindVideoMOV'    : 'Fitxer de vídeo Quick Time',
			'kindVideoWM'     : 'Fitxer de vídeo Windows Media',
			'kindVideoFlash'  : 'Fitxer de vídeo Flash',
			'kindVideoMKV'    : 'Fitxer de vídeo Matroska',
			'kindVideoOGG'    : 'Fitxer de vídeo Ogg'
		}
	}
}


/**
 * Czech translation
 * @author Jay Gridley <gridley.jay@hotmail.com>
 * @version 2012-03-23
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
	elFinder.prototype.i18.cs = {
		translator : 'Jay Gridley &lt;gridley.jay@hotmail.com&gt;',
		language   : 'čeština',
		direction  : 'ltr',
		dateFormat : 'd. m. Y H:i',
		fancyDateFormat : '$1 H:i',
		messages   : {

			/********************************** errors **********************************/
			'error'                : 'Chyba',
			'errUnknown'           : 'Neznámá chyba.',
			'errUnknownCmd'        : 'Neznámý příkaz.',
			'errJqui'              : 'Nedostačující konfigurace jQuery UI. Musí být zahrnuty komponenty Selectable, Draggable a Droppable.',
			'errNode'              : 'elFinder vyžaduje vytvořený DOM Element.',
			'errURL'               : 'Chybná konfigurace elFinderu! Není nastavena hodnota URL.',
			'errAccess'            : 'Přístup zamítnut.',
			'errConnect'           : 'Nepodařilo se připojit k backendu (konektoru).',
			'errAbort'             : 'Připojení zrušeno.',
			'errTimeout'           : 'Vypšel limit pro připojení.',
			'errNotFound'          : 'Backend nenalezen.',
			'errResponse'          : 'Nesprávná odpověď backendu.',
			'errConf'              : 'Nepsrávná konfigurace backendu.',
			'errJSON'              : 'PHP modul JSON není nainstalován.',
			'errNoVolumes'         : 'Není dostupný čitelný oddíl.',
			'errCmdParams'         : 'Nesprávné parametry příkazu "$1".',
			'errDataNotJSON'       : 'Data nejsou ve formátu JSON.',
			'errDataEmpty'         : 'Data jsou prázdná.',
			'errCmdReq'            : 'Dotaz backendu vyžaduje název příkazu.',
			'errOpen'              : 'Chyba při otevírání "$1".',
			'errNotFolder'         : 'Objekt není složka.',
			'errNotFile'           : 'Objekt není soubor.',
			'errRead'              : 'Chyba při čtení "$1".',
			'errWrite'             : 'Chyba při zápisu do "$1".',
			'errPerm'              : 'Přístup odepřen.',
			'errLocked'            : '"$1" je uzamčený a nemůže být přejmenován, přesunut nebo smazán.',
			'errExists'            : 'Soubor s názvem "$1" již existuje.',
			'errInvName'           : 'Nesprávný název souboru.',
			'errFolderNotFound'    : 'Složka nenalezena.',
			'errFileNotFound'      : 'Soubor nenalezen.',
			'errTrgFolderNotFound' : 'Cílová složka "$1" nenalezena.',
			'errPopup'             : 'Prohlížeč zabránil otevření vyskakovacího okna. K otevření souboru, povolte vyskakovací okno v prohlížeči.',
			'errMkdir'             : 'Nepodařilo se vytvořit složku "$1".',
			'errMkfile'            : 'Nepodařilo se vytvořit soubor "$1".',
			'errRename'            : 'Nepodařilo se přejmenovat "$1".',
			'errCopyFrom'          : 'Kopírování souborů z oddílu "$1" není povoleno.',
			'errCopyTo'            : 'Kopírování souborů do oddílu "$1" není povoleno.',
			'errUploadCommon'      : 'Chyba nahrávání.',
			'errUpload'            : 'Nepodařilo se nahrát "$1".',
			'errUploadNoFiles'     : 'Nejsou vybrány žádné soubory k nahrání.',
			'errMaxSize'           : 'Překročena maximální povolená velikost dat.',
			'errFileMaxSize'       : 'Překročena maximální povolená velikost souboru.',
			'errUploadMime'        : 'Nepovolený typ souboru.',
			'errUploadTransfer'    : '"$1" chyba přenosu.',
			'errSave'              : '"$1" nelze uložit.',
			'errCopy'              : '"$1" nelze zkopírovat.',
			'errMove'              : '"$1" nelze přemístit.',
			'errCopyInItself'      : '"$1" nelze zkopírovat do sebe sama.',
			'errRm'                : '"$1" nelze odstranit.',
			'errExtract'           : 'Nelze extrahovat soubory z "$1".',
			'errArchive'           : 'Nelze vytvořit archív.',
			'errArcType'           : 'Nepodporovaný typ archívu.',
			'errNoArchive'         : 'Soubor není archív nebo má nepodporovaný formát.',
			'errCmdNoSupport'      : 'Backend tento příkaz nepodporuje.',
			'errReplByChild'       : 'Složka "$1" nemůže být nahrazena souborem, který sama obsahuje.',
			'errArcSymlinks'       : 'Z bezpečnostních důvodů je zakázáno rozbalit archívy obsahující symlinky.',
			'errArcMaxSize'        : 'Soubory archívu překračují maximální povolenou velikost.',
			'errResize'            : 'Nepodařilo se změnit velikost obrázku "$1".',
			'errUsupportType'      : 'Nepodporovaný typ souboru.',

			/******************************* commands names ********************************/
			'cmdarchive'   : 'Vytvořit archív',
			'cmdback'      : 'Zpět',
			'cmdcopy'      : 'Kopírovat',
			'cmdcut'       : 'Vyjmout',
			'cmddownload'  : 'Stáhnout',
			'cmdduplicate' : 'Duplikovat',
			'cmdedit'      : 'Upravit soubor',
			'cmdextract'   : 'Rozbalit archív',
			'cmdforward'   : 'Vpřed',
			'cmdgetfile'   : 'Vybrat soubory',
			'cmdhelp'      : 'O softwaru',
			'cmdhome'      : 'Domů',
			'cmdinfo'      : 'Zobrazit informace',
			'cmdmkdir'     : 'Nová složka',
			'cmdmkfile'    : 'Nový textový soubor',
			'cmdopen'      : 'Otevřít',
			'cmdpaste'     : 'Vložit',
			'cmdquicklook' : 'Náhled',
			'cmdreload'    : 'Obnovit',
			'cmdrename'    : 'Přejmenovat',
			'cmdrm'        : 'Smazat',
			'cmdsearch'    : 'Najít soubory',
			'cmdup'        : 'Přejít do nadřazené složky',
			'cmdupload'    : 'Nahrát soubor(y)',
			'cmdview'      : 'Zobrazit',
			'cmdresize'    : 'Změnit velikost',
			'cmdsort'      : 'Seřadit',

			/*********************************** buttons ***********************************/
			'btnClose'  : 'Zavřít',
			'btnSave'   : 'Uložit',
			'btnRm'     : 'Odstranit',
			'btnApply'  : 'Použít',
			'btnCancel' : 'Zrušit',
			'btnNo'     : 'Ne',
			'btnYes'    : 'Ano',

			/******************************** notifications ********************************/
			'ntfopen'     : 'Otevírání složky',
			'ntffile'     : 'Otevírání souboru',
			'ntfreload'   : 'Obnovování obsahu složky',
			'ntfmkdir'    : 'Vytváření složky',
			'ntfmkfile'   : 'Vytváření souborů',
			'ntfrm'       : 'Mazání souborů',
			'ntfcopy'     : 'Kopírování souborů',
			'ntfmove'     : 'Přesunování souborů',
			'ntfprepare'  : 'Příprava ke kopírování souborů',
			'ntfrename'   : 'Přejmenovávání souborů',
			'ntfupload'   : 'Nahrávání souborů',
			'ntfdownload' : 'Stahování souborů',
			'ntfsave'     : 'Ukládání souborů',
			'ntfarchive'  : 'Vytváření archívu',
			'ntfextract'  : 'Rozbalování souborů z archívu',
			'ntfsearch'   : 'Vyhledávání souborů',
			'ntfsmth'     : 'Čekejte prosím...',
			'ntfloadimg'  : 'Načítání obrázků',

			/************************************ dates **********************************/
			'dateUnknown' : 'neznámý',
			'Today'       : 'Dnes',
			'Yesterday'   : 'Včera',
			'Jan'         : 'Led',
			'Feb'         : 'Úno',
			'Mar'         : 'Bře',
			'Apr'         : 'Dub',
			'May'         : 'Kvě',
			'Jun'         : 'Čer',
			'Jul'         : 'Čec',
			'Aug'         : 'Srp',
			'Sep'         : 'Zář',
			'Oct'         : 'Říj',
			'Nov'         : 'Lis',
			'Dec'         : 'Pro',
			'January'     : 'Leden',
			'February'    : 'Únor',
			'March'       : 'Březen',
			'April'       : 'Duben',
			'May'         : 'Květen',
			'June'        : 'Červen',
			'July'        : 'Červenec',
			'August'      : 'Srpen',
			'September'   : 'Září',
			'October'     : 'Říjen',
			'November'    : 'Listopad',
			'December'    : 'Prosinec',
			'Sunday'      : 'Neděle',
			'Monday'      : 'Pondělí',
			'Tuesday'     : 'Úterý',
			'Wednesday'   : 'Středa',
			'Thursday'    : 'Čtvrtek',
			'Friday'      : 'Pátek',
			'Saturday'    : 'Sobota',
			'Sun'         : 'Ne',
			'Mon'         : 'Po',
			'Tue'         : 'Út',
			'Wed'         : 'St',
			'Thu'         : 'Čt',
			'Fri'         : 'Pá',
			'Sat'         : 'So',
			/******************************** sort variants ********************************/
			'sortnameDirsFirst' : 'dle jména (složky přednostně)',
			'sortkindDirsFirst' : 'dle typu (složky přednostně)',
			'sortsizeDirsFirst' : 'dle veliksoti (složky přednostně)',
			'sortdateDirsFirst' : 'dle data (složky přednostně',
			'sortname'          : 'dle jména',
			'sortkind'          : 'dle typu',
			'sortsize'          : 'dle velikosti',
			'sortdate'          : 'dle data',

			/********************************** messages **********************************/
			'confirmReq'      : 'Požadováno potvržení',
			'confirmRm'       : 'Opravdu chcete odstranit tyto soubory?<br/>Operace nelze vrátit!',
			'confirmRepl'     : 'Nahradit staré soubory novými?',
			'apllyAll'        : 'Všem',
			'name'            : 'Název',
			'size'            : 'Velikost',
			'perms'           : 'Práva',
			'modify'          : 'Upravený',
			'kind'            : 'Typ',
			'read'            : 'čtení',
			'write'           : 'zápis',
			'noaccess'        : 'přístup nepovolen',
			'and'             : 'a',
			'unknown'         : 'neznámý',
			'selectall'       : 'Vybrat všechny soubory',
			'selectfiles'     : 'Vybrat soubor(y)',
			'selectffile'     : 'Vybrat první soubor',
			'selectlfile'     : 'Vybrat poslední soubor',
			'viewlist'        : 'Seznam',
			'viewicons'       : 'Ikony',
			'places'          : 'Místa',
			'calc'            : 'Vypočítat',
			'path'            : 'Cesta',
			'aliasfor'        : 'Zástupce pro',
			'locked'          : 'Uzamčený',
			'dim'             : 'Rozměry',
			'files'           : 'Soubory',
			'folders'         : 'Složky',
			'items'           : 'Položky',
			'yes'             : 'ano',
			'no'              : 'ne',
			'link'            : 'Odkaz',
			'searcresult'     : 'Výsledky hledání',
			'selected'        : 'vybrané položky',
			'about'           : 'O softwaru',
			'shortcuts'       : 'Zástupci',
			'help'            : 'Nápověda',
			'webfm'           : 'Webový správce souborů',
			'ver'             : 'Verze',
			'protocolver'     : 'verze protokolu',
			'homepage'        : 'Domovská stránka projektu',
			'docs'            : 'Dokumentace',
			'github'          : 'Fork us on Github',
			'twitter'         : 'Follow us on Twitter',
			'facebook'        : 'Join us on Facebook',
			'team'            : 'Tým',
			'chiefdev'        : 'séf vývojářů',
			'developer'       : 'vývojár',
			'contributor'     : 'spolupracovník',
			'maintainer'      : 'údržba',
			'translator'      : 'překlad',
			'icons'           : 'Ikony',
			'dontforget'      : 'a nezapomeňte si vzít plavky',
			'shortcutsof'     : 'Zástupci nejsou povoleni',
			'dropFiles'       : 'Přetáhněte soubory sem',
			'or'              : 'nebo',
			'selectForUpload' : 'Vyberte soubory',
			'moveFiles'       : 'Přesunout sobory',
			'copyFiles'       : 'Zkupírovat soubory',
			'rmFromPlaces'    : 'Odstranit z míst',
			'untitled folder' : 'bez názvu',
			'untitled file.txt' : 'nepojmenovaný soubor.txt',
			'aspectRatio'     : 'Poměr stran',
			'scale'           : 'Měřítko',
			'width'           : 'Šířka',
			'height'          : 'Výška',
			'mode'            : 'Mód',
			'resize'          : 'Změnit vel.',
			'crop'            : 'Ožezat',
			'rotate'          : 'Otočit',
			'rotate-cw'       : 'Otočit o +90 stupňů',
			'rotate-ccw'      : 'Otočit o -90 stupňů',
			'degree'          : ' stupňů',

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Neznámý',
			'kindFolder'      : 'Složka',
			'kindAlias'       : 'Odkaz',
			'kindAliasBroken' : 'Neplatný odkaz',
			// applications
			'kindApp'         : 'Aplikace',
			'kindPostscript'  : 'Dokument Postscriptu',
			'kindMsOffice'    : 'Dokument Microsoft Office',
			'kindMsWord'      : 'Dokument Microsoft Word',
			'kindMsExcel'     : 'Dokument Microsoft Excel',
			'kindMsPP'        : 'Prezentace Microsoft Powerpoint',
			'kindOO'          : 'Otevřít dokument Office',
			'kindAppFlash'    : 'Flash aplikace',
			'kindPDF'         : 'PDF',
			'kindTorrent'     : 'Soubor BitTorrent',
			'kind7z'          : 'Archív 7z',
			'kindTAR'         : 'Archív TAR',
			'kindGZIP'        : 'Archív GZIP',
			'kindBZIP'        : 'Archív BZIP',
			'kindZIP'         : 'Archív ZIP',
			'kindRAR'         : 'Archív RAR',
			'kindJAR'         : 'Soubor Java JAR',
			'kindTTF'         : 'True Type font',
			'kindOTF'         : 'Open Type font',
			'kindRPM'         : 'RPM balíček',
			// texts
			'kindText'        : 'Textový dokument',
			'kindTextPlain'   : 'Čistý text',
			'kindPHP'         : 'PHP zdrojový kód',
			'kindCSS'         : 'Kaskádové styly',
			'kindHTML'        : 'HTML dokument',
			'kindJS'          : 'Javascript zdrojový kód',
			'kindRTF'         : 'Rich Text Format',
			'kindC'           : 'C zdrojový kód',
			'kindCHeader'     : 'C hlavička',
			'kindCPP'         : 'C++ zdrojový kód',
			'kindCPPHeader'   : 'C++ hlavička',
			'kindShell'       : 'Unix shell skript',
			'kindPython'      : 'Python zdrojový kód',
			'kindJava'        : 'Java zdrojový kód',
			'kindRuby'        : 'Ruby zdrojový kód',
			'kindPerl'        : 'Perl skript',
			'kindSQL'         : 'SQL zdrojový kód',
			'kindXML'         : 'Dokument XML',
			'kindAWK'         : 'AWK zdrojový kód',
			'kindCSV'         : 'CSV',
			'kindDOCBOOK'     : 'Docbook XML dokument',
			// images
			'kindImage'       : 'Obrázek',
			'kindBMP'         : 'Obrázek BMP',
			'kindJPEG'        : 'Obrázek JPEG',
			'kindGIF'         : 'Obrázek GIF',
			'kindPNG'         : 'Obrázek PNG',
			'kindTIFF'        : 'Obrázek TIFF',
			'kindTGA'         : 'Obrázek TGA',
			'kindPSD'         : 'Obrázek Adobe Photoshop',
			'kindXBITMAP'     : 'Obrázek X bitmapa',
			'kindPXM'         : 'Obrázek Pixelmator',
			// media
			'kindAudio'       : 'Audio sobory',
			'kindAudioMPEG'   : 'MPEG audio',
			'kindAudioMPEG4'  : 'MPEG-4 audio',
			'kindAudioMIDI'   : 'MIDI audio',
			'kindAudioOGG'    : 'Ogg Vorbis audio',
			'kindAudioWAV'    : 'WAV audio',
			'AudioPlaylist'   : 'MP3 playlist',
			'kindVideo'       : 'Video sobory',
			'kindVideoDV'     : 'DV video',
			'kindVideoMPEG'   : 'MPEG video',
			'kindVideoMPEG4'  : 'MPEG-4 video',
			'kindVideoAVI'    : 'AVI video',
			'kindVideoMOV'    : 'Quick Time video',
			'kindVideoWM'     : 'Windows Media video',
			'kindVideoFlash'  : 'Flash video',
			'kindVideoMKV'    : 'Matroska video',
			'kindVideoOGG'    : 'Ogg video'
		}
	}
}

/**
 * German translation
 * @author JPG & Mace <dev@flying-datacenter.de>
 * @version 2011-07-26
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
	elFinder.prototype.i18.de = {
		translator : 'JPG & Mace &lt;dev@flying-datacenter.de&gt;',
		language   : 'Deutsch',
		direction  : 'ltr',
		messages   : {
			
			/********************************** errors **********************************/
			'error'                : 'Fehler',
			'errUnknown'           : 'Unbekannter Fehler.',
			'errUnknownCmd'        : 'Unbekannter Befehl.',
			'errJqui'              : 'Ungültige jQuery UI Konfiguration. Die Komponenten Selectable, draggable und droppable müssen inkludiert sein.',
			'errNode'              : 'Für elFinder muss das DOM Element erstellt werden.',
			'errURL'               : 'Ungültige elFinder Konfiguration! Die URL Option nicht gesetzt.',
			'errAccess'            : 'Zugriff verweigert.',
			'errConnect'           : 'Verbindung zum Backend fehlgeschlagen',
			'errAbort'             : 'Verbindung abgebrochen.',
			'errTimeout'           : 'Zeitüberschreitung der Verbindung.',
			'errNotFound'          : 'Backend nicht gefunden.',
			'errResponse'          : 'Ungültige Backend Antwort.',
			'errConf'              : 'Ungültige Backend Konfiguration.',
			'errJSON'              : 'PHP JSON Modul nicht vorhanden.',
			'errNoVolumes'         : 'Lesbare Volumes nicht vorhanden.',
			'errCmdParams'         : 'Ungültige Parameter für Befehl: "$1".',
			'errDataNotJSON'       : 'Daten nicht im JSON Format.',
			'errDataEmpty'         : 'Daten sind leer.',
			'errCmdReq'            : 'Backend Anfrage benötigt Befehl.',
			'errOpen'              : 'Kann "$1" nicht öffnen',
			'errNotFolder'         : 'Objekt ist kein Verzeichnis.',
			'errNotFile'           : 'Objekt ist keine Datei.',
			'errRead'              : 'Kann "$1" nicht öffnen.',
			'errWrite'             : 'Kann nicht in "$1" schreiben.',
			'errPerm'              : 'Zugriff verweigert.',
			'errLocked'            : '"$1" ist gelockt und kann nicht umbenannt, verschoben oder gelöscht werden.',
			'errExists'            : 'Die Datei "$1" existiert bereits.',
			'errInvName'           : 'Ungültiger Datei Name.',
			'errFolderNotFound'    : 'Verzeichnis nicht gefunden.',
			'errFileNotFound'      : 'Datei nicht gefunden.',
			'errTrgFolderNotFound' : 'Zielverzeichnis "$1" nicht gefunden.',
			'errPopup'             : 'Der Browser hat das Pop-Up-Fenster unterbunden. Um die Datei zu öffnen, Pop-Ups in den Browser Einstellungen aktivieren.',
			'errMkdir'             : 'Kann Verzeichnis "$1" nicht erstellen.',
			'errMkfile'            : 'Kann Datei "$1" nicht erstellen.',
			'errRename'            : 'Kann "$1" nicht umbenennen.',
			'errCopyFrom'          : 'Kopieren von Dateien von "$1" nicht erlaubt.',
			'errCopyTo'            : 'Kopieren von Dateien nach "$1" nicht erlaubt.',
			'errUploadCommon'      : 'Upload Fehler.',
			'errUpload'            : 'Kann "$1" nicht hochladen.',
			'errUploadNoFiles'     : 'Keine Dateien zum Hochladen gefunden.',
			'errMaxSize'           : 'Daten überschreiten die Maximalgröße.',
			'errFileMaxSize'       : 'Die Datei überschreitet die Maximalgröße',
			'errUploadMime'        : 'Dateityp nicht zulässig.',
			'errUploadTransfer'    : '"$1" Transfer Fehler.', 
			'errSave'              : 'Kann "$1" nicht speichern.',
			'errCopy'              : 'Kann "$1" nicht kopieren.',
			'errMove'              : 'Kann "$1" nicht verschieben.',
			'errCopyInItself'      : '"$1" kann sich nicht in sich selbst kopieren.',
			'errRm'                : 'Kann "$1" nicht enfernen.',
			'errExtract'           : 'Kann "$1" nicht entpacken .',
			'errArchive'           : 'Archiv konnte nicht erstellt werden.',
			'errArcType'           : 'Archivtyp nicht untersützt.',
			'errNoArchive'         : 'Bei der Datei handelt es nicht um ein Archiv oder der Archivtyp nicht unterstütz.',
			'errCmdNoSupport'      : 'Das Backend unterstütz diesen Befehl nicht.',
			'errSessionExpires'    : 'Ihre Sitzung ist aufgrund von Inaktivität abgelaufen',
			'errCreatingTempDir'   : 'Erstellung des temporären Verzeichnisses nicht möglich: "$1"',
			'errFtpDownloadFile'   : 'Download der Datei über FTP nicht möglich: "$1"',
			'errFtpUploadFile'     : 'Upload der Datei zu FTP nicht möglich: "$1"',
			'errFtpMkdir'          : 'Erstellung des Remote-Verzeichnisses auf FTP nicht möglich: "$1"',
			'errArchiveExec'       : 'Fehler bei der Archivierung der Dateien: "$1"',
			'errExtractExec'       : 'Fehler beim Extrahieren der Dateien: "$1"',
			'cmdsort'              : 'Sortieren',
			'sortkind'             : 'nach Typ',
			'sortname'             : 'nach Name',
			'sortsize'             : 'nach Größe',
			'sortdate'             : 'nach Datum',
			'sortFoldersFirst'     : 'Ordner zuerst',
			'errUploadFile'        : 'Upload von "$1" nicht möglich.',


			/******************************* commands names ********************************/
			'cmdarchive'   : 'Archiv erstellen',
			'cmdback'      : 'Zurück',
			'cmdcopy'      : 'Kopieren',
			'cmdcut'       : 'Ausschreiden',
			'cmddownload'  : 'Herunterladen',
			'cmdduplicate' : 'Duplizieren',
			'cmdedit'      : 'Datei bearbeiten',
			'cmdextract'   : 'Archiv entpacken',
			'cmdforward'   : 'Vorwärts',
			'cmdgetfile'   : 'Datei auswählen',
			'cmdhelp'      : 'über diese Software',
			'cmdhome'      : 'Startverzeichnis',
			'cmdinfo'      : 'Informationen',
			'cmdmkdir'     : 'Neues Verzeichnis',
			'cmdmkfile'    : 'Neue Textdatei',
			'cmdopen'      : 'öffnen',
			'cmdpaste'     : 'Einfügen',
			'cmdquicklook' : 'Vorschau',
			'cmdreload'    : 'Neuladen',
			'cmdrename'    : 'Umbenennen',
			'cmdrm'        : 'Löschen',
			'cmdsearch'    : 'Suchen',
			'cmdup'        : 'Ins übergeordnete Verzeichnis wechseln',
			'cmdupload'    : 'Datei hochladen',
			'cmdview'      : 'Ansehen',
			
			/*********************************** buttons ***********************************/ 
			'btnClose'  : 'Schließen',
			'btnSave'   : 'Speichern',
			'btnRm'     : 'Entfernen',
			'btnCancel' : 'Abbrechen',
			'btnNo'     : 'Nein',
			'btnYes'    : 'Ja',
			
			/******************************** notifications ********************************/
			'ntfopen'     : 'öffne Verzeichnis',
			'ntffile'     : 'öffne Datei',
			'ntfreload'   : 'Verzeichnisinhalt neu',
			'ntfmkdir'    : 'Erstelle Verzeichnis',
			'ntfmkfile'   : 'Erstelle Dateien',
			'ntfrm'       : 'Lösche Dateien',
			'ntfcopy'     : 'Kopiere Dateien files',
			'ntfmove'     : 'Verschiebe Dateien',
			'ntfprepare'  : 'Kopiervorgang initialisieren',
			'ntfrename'   : 'Benenne Dateien um',
			'ntfupload'   : 'Uploading files',
			'ntfdownload' : 'Downloading files',
			'ntfsave'     : 'Speichere Datei',
			'ntfarchive'  : 'Erstelle Archiv',
			'ntfextract'  : 'Entpacke Dateien',
			'ntfsearch'   : 'Suche',
			'ntfsmth'     : 'Bin beschäftigt',
			
			/************************************ dates **********************************/
			'dateUnknown' : 'unbekannt',
			'Today'       : 'Heute',
			'Yesterday'   : 'Gestern',
			'Jan'         : 'Jan',
			'Feb'         : 'Feb',
			'Mar'         : 'Mär',
			'Apr'         : 'Apr',
			'May'         : 'Mai',
			'Jun'         : 'Jun',
			'Jul'         : 'Jul',
			'Aug'         : 'Aug',
			'Sep'         : 'Sep',
			'Oct'         : 'Okt',
			'Nov'         : 'Nov',
			'Dec'         : 'Dez',

			/******************************** sort variants ********************************/
            'sortname'          : 'nach Name', 
            'sortkind'          : 'nach freundlicher', 
            'sortsize'          : 'nach Größe',
            'sortdate'          : 'nach Datum',
            'sortFoldersFirst'  : 'Ordner zuerst',

			/********************************** messages **********************************/
			'confirmReq'      : 'Bestätigung Benötigt',
			'confirmRm'       : 'Sollen die Dateien gelöscht werden?<br/>Dies kann nicht rückgängig gemacht werden!',
			'confirmRepl'     : 'Datei ersetzen?',
			'apllyAll'        : 'Alles bestätigen',
			'name'            : 'Name',
			'size'            : 'Größe',
			'perms'           : 'Berechtigungen',
			'modify'          : '&Auml;nderungsdatum',
			'kind'            : 'Typ',
			'read'            : 'lesen',
			'write'           : 'schreiben',
			'noaccess'        : 'Kein Zugriff',
			'and'             : 'und',
			'unknown'         : 'unbekannt',
			'selectall'       : 'Alle Dateien auswählen',
			'selectfiles'     : 'Dateien auswählen',
			'selectffile'     : 'Erste Datei auswhählen',
			'selectlfile'     : 'Letzte Datei auswählen',
			'viewlist'        : 'Spaltenansicht',
			'viewicons'       : 'Symbolansicht',
			'places'          : 'Orte',
			'calc'            : 'Berechne', 
			'path'            : 'Pfad',
			'aliasfor'        : 'Verknüpfund zu',
			'locked'          : 'Gesperrt',
			'dim'             : 'Bildgröße',
			'files'           : 'Dateien',
			'folders'         : 'Verzeichnise',
			'items'           : 'Objekte',
			'yes'             : 'ja',
			'no'              : 'nein',
			'link'            : 'Link',
			'searcresult'     : 'Suchergebnisse',  
			'selected'        : 'Objekte ausgewählt',
			'about'           : 'über',
			'shortcuts'       : 'Tastenkombinationen',
			'help'            : 'Hilfe',
			'webfm'           : 'Web Datei Manager',
			'ver'             : 'Version',
			'protocolver'     : 'Protokol Version',
			'homepage'        : 'Projekt Website',
			'docs'            : 'Dokumentation',
			'github'          : 'Forke uns auf Github',
			'twitter'         : 'Folge uns auf twitter',
			'facebook'        : 'Begleite uns auf facebook',
			'team'            : 'Team',
			'chiefdev'        : 'Chefentwickler',
			'developer'       : 'Entwickler',
			'contributor'     : 'Üntersützer',
			'maintainer'      : 'Maintainer',
			'translator'      : 'Übersetzer',
			'icons'           : 'Icons',
			'dontforget'      : 'und vergess dein Handtuch nicht',
			'shortcutsof'     : 'Shortcuts disabled',
			'dropFiles'       : 'Dateien hier ablegen',
			'or'              : 'oder',
			'selectForUpload' : 'Dateien zum Upload auswählen',
			'moveFiles'       : 'Dateien verschieben',
			'copyFiles'       : 'Dateien kopieren',
						
			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Unbekannt',
			'kindFolder'      : 'Verzeichnis',
			'kindAlias'       : 'Verknüpfung',
			'kindAliasBroken' : 'Defekte Verknüpfung',
			// applications
			'kindApp'         : 'Programm',
			'kindPostscript'  : 'Postscript Dokument',
			'kindMsOffice'    : 'Microsoft Office Dokument',
			'kindMsWord'      : 'Microsoft Word Dokument',
			'kindMsExcel'     : 'Microsoft Excel Dokument',
			'kindMsPP'        : 'Microsoft Powerpoint Präsentation',
			'kindOO'          : 'Open Office Dokument',
			'kindAppFlash'    : 'Flash Programm',
			'kindPDF'         : 'Portables Dokumentenformat (PDF)',
			'kindTorrent'     : 'Bittorrent Datei',
			'kind7z'          : '7z Archiv',
			'kindTAR'         : 'TAR Archiv',
			'kindGZIP'        : 'GZIP Archiv',
			'kindBZIP'        : 'BZIP Archiv',
			'kindZIP'         : 'ZIP Archiv',
			'kindRAR'         : 'RAR Archiv',
			'kindJAR'         : 'Java JAR Datei',
			'kindTTF'         : 'True Type Schrift',
			'kindOTF'         : 'Open Type Schrift',
			'kindRPM'         : 'RPM Paket',
			// texts
			'kindText'        : 'Text Dokument',
			'kindTextPlain'   : 'Text Dokument',
			'kindPHP'         : 'PHP Quelltext',
			'kindCSS'         : 'Cascading Stylesheet',
			'kindHTML'        : 'HTML Dokument',
			'kindJS'          : 'Javascript Quelltext',
			'kindRTF'         : 'Formatierte Textdatei',
			'kindC'           : 'C Quelltext',
			'kindCHeader'     : 'C Header Quelltext',
			'kindCPP'         : 'C++ Quelltext',
			'kindCPPHeader'   : 'C++ Header Quelltext',
			'kindShell'       : 'Unix-Shell-Skript',
			'kindPython'      : 'Python Quelltext',
			'kindJava'        : 'Java Quelltext',
			'kindRuby'        : 'Ruby Quelltext',
			'kindPerl'        : 'Perl Script',
			'kindSQL'         : 'SQL Quelltext',
			'kindXML'         : 'XML Dokument',
			'kindAWK'         : 'AWK Quelltext',
			'kindCSV'         : 'Komma getrennte Daten',
			'kindDOCBOOK'     : 'Docbook XML Dokument',
			// images
			'kindImage'       : 'Bild',
			'kindBMP'         : 'Bitmap Bild',
			'kindJPEG'        : 'JPEG Bild',
			'kindGIF'         : 'GIF Bild',
			'kindPNG'         : 'PNG Bild',
			'kindTIFF'        : 'TIFF Bild',
			'kindTGA'         : 'TGA Bild',
			'kindPSD'         : 'Adobe Photoshop Bild',
			'kindXBITMAP'     : 'X Bitmap Bild',
			'kindPXM'         : 'Pixelmator Bild',
			// media
			'kindAudio'       : 'Audiodatei',
			'kindAudioMPEG'   : 'MPEG Audio',
			'kindAudioMPEG4'  : 'MPEG-4 Audio',
			'kindAudioMIDI'   : 'MIDI Audio',
			'kindAudioOGG'    : 'Ogg Vorbis Audio',
			'kindAudioWAV'    : 'WAV Audio',
			'AudioPlaylist'   : 'MP3 Playlist',
			'kindVideo'       : 'Videodatei',
			'kindVideoDV'     : 'DV Film',
			'kindVideoMPEG'   : 'MPEG Film',
			'kindVideoMPEG4'  : 'MPEG-4 Film',
			'kindVideoAVI'    : 'AVI Film',
			'kindVideoMOV'    : 'Quick Time Film',
			'kindVideoWM'     : 'Windows Media Film',
			'kindVideoFlash'  : 'Flash Film',
			'kindVideoMKV'    : 'Matroska Film',
			'kindVideoOGG'    : 'Ogg Film'
		}
	}
}

/**
 * elFinder translation template
 * use this file to create new translation
 * submit new translation via https://github.com/Studio-42/elFinder/issues
 * or make a pull request
 */
 
/**
 * Greek translation
 * @author yawd <info@yawd.eu>
 * @version 2012-09-12
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
	elFinder.prototype.i18.el = {
		translator : 'yawd &lt;ingo@yawd.eu&gt;',
		language   : 'Ελληνικά',
		direction  : 'ltr',
		dateFormat : 'd.m.Y H:i',
		fancyDateFormat : '$1 H:i',
		messages   : {
			
			/********************************** errors **********************************/
			'error'                : 'Πρόβλημα',
			'errUnknown'           : 'Άγνωστο πρόβλημα.',
			'errUnknownCmd'        : 'Άγνωστη εντολή.',
			'errJqui'              : 'Μη έγκυρη ρύθμιση του jQuery UI. Τα components "selectable", "draggable" και "droppable" πρέπει να περιληφούν.',
			'errNode'              : 'το elFinder χρειάζεται να έχει δημιουργηθεί το DOM Element.',
			'errURL'               : 'Μη έγκυρες ρυθμίσεις για το elFinder! η επιλογή URL δεν έχει οριστεί.',
			'errAccess'            : 'Απαγορεύεται η πρόσβαση.',
			'errConnect'           : 'Δεν ήταν δυνατή η σύνδεση με το backend.',
			'errAbort'             : 'Η σύνδεση εγκαταλείφθηκε.',
			'errTimeout'           : 'Η σύνδεση έληξε.',
			'errNotFound'          : 'Δε βρέθηκε το backend.',
			'errResponse'          : 'Μή έγκυρη απάντηση από το backend.',
			'errConf'              : 'Μη έγκυρες ρυθμίσεις για το backend.',
			'errJSON'              : 'Το PHP JSON module δεν είναι εγκατεστημένο.',
			'errNoVolumes'         : 'Δεν βρέθηκαν αναγνώσιμα volumes.',
			'errCmdParams'         : 'Μη εέγκυρες παράμετροι για την εντολή "$1".',
			'errDataNotJSON'       : 'Τα δεδομένα δεν είναι JSON.',
			'errDataEmpty'         : 'Τα δεδομένα είναι άδεια.',
			'errCmdReq'            : 'Το Backend request χρειάζεται όνομα εντολής.',
			'errOpen'              : 'Δεν ήταν δυνατό να ανοίξει το "$1".',
			'errNotFolder'         : 'Το αντικείμενο δεν είναι φάκελος.',
			'errNotFile'           : 'Το αντικείμενο δεν είναι αρχείο.',
			'errRead'              : 'Δεν ήταν δυνατόν να διαβαστεί το "$1".',
			'errWrite'             : 'Δεν ήταν δυνατή η εγγραφή στο "$1".',
			'errPerm'              : 'Απαγορεύεται η πρόσβαση.',
			'errLocked'            : '"$1" είναι κλειδωμένο και δεν μπορεί να μετονομαστεί, μετακινηθεί ή διαγραφεί.',
			'errExists'            : 'Το αρχείο με όνομα "$1" υπάρχει ήδη.',
			'errInvName'           : 'Μη έγκυρο όνομα αρχείου.',
			'errFolderNotFound'    : 'Ο φάκελος δε βρέθηκε.',
			'errFileNotFound'      : 'Το αρχείο δε βρέθηκε.',
			'errTrgFolderNotFound' : 'Ο φάκελος "$1" δε βρεέθηκε.',
			'errPopup'             : 'Το πρόγραμμα πλήγησης αμπόδισε το άνοιγμα αναδυόμενου παραθύρου. Για ανοίξετε το αρχείο ενεργοποιήστε το στις επιλογές του περιηγητή.',
			'errMkdir'             : 'Η δυμιουργία του φακέλου "$1" δεν ήταν δυνατή.',
			'errMkfile'            : 'Η δημιουργία του αρχείου "$1" δεν ήταν δυνατή.',
			'errRename'            : 'Η μετονομασία του αρχείου "$1" δεν ήταν δυνατή.',
			'errCopyFrom'          : 'Δεν επιτρέπεται η αντιγραφή αρχείων από το volume "$1".',
			'errCopyTo'            : 'Δεν επιτρέπεται η αντιγραφή αρχείων στο volume "$1".',
			'errUploadCommon'      : 'Πρόβλημα κατά το upload.',
			'errUpload'            : 'Το αρχείο "$1" δεν μπόρεσε να γίνει upload.',
			'errUploadNoFiles'     : 'Δεν βρέθηκαν αρχεία για upload.',
			'errMaxSize'           : 'Τα δεδομένα υπερβαίνουν το επιτρεπόμενο μέγιστο μέγεθος δεδομένων.',
			'errFileMaxSize'       : 'Το αρχείο υπερβαίνει το επιτρεπόμενο μέγιστο μέγεθος.',
			'errUploadMime'        : 'Ο τύπος αρχείου δεν επιτρέπεται.',
			'errUploadTransfer'    : 'Πρόβλημα μεταφοράς για το "$1".', 
			'errSave'              : 'Το "$1" δεν ήταν δυνατόν να αποθηκευτεί.',
			'errCopy'              : 'Δεν ήταν δυνατή η αντιγραφή του "$1".',
			'errMove'              : 'Δεν ήταν δυνατή η μετακίνηση του "$1".',
			'errCopyInItself'      : 'Δεν είναι δυνατή η αντιγραφή του "$1" στον εαυτό του.',
			'errRm'                : 'Δεν ήταν δυνατή η αφαίρεση του "$1".',
			'errExtract'           : 'Δεν ήταν δυνατή η ανάγνωση των αρχείων από "$1".',
			'errArchive'           : 'Δεν ήταν δυνατή η δημιουργία του αρχείου.',
			'errArcType'           : 'Ο τύπος αρχείου δεν υποστηρίζεται.',
			'errNoArchive'         : 'Το αρχείο δεν είναι έγκυρο ή δεν υποστηρίζεται ο τύπος του.',
			'errCmdNoSupport'      : 'Το backend δεν υποστηρίζει αυτή την εντολή.',
			'errReplByChild'       : 'Ο φάκελος “$1” δεν μπορεί να αντικατασταθεί από οποιοδήποτε αρχείο περιέχεται σε αυτόν.',
			'errArcSymlinks'       : 'Για λόγους ασφαλείας δεν είναι δυνατόν να διαβαστούν αρχεία που περιέχουν symlinks orη αρχεία με μη επιτρεπτά ονόματα.', // edited 24.06.2012
			'errArcMaxSize'        : 'Το μέγεθος του αρχείου υπερβαίνει το μέγιστο επιτρεπτό όριο.',
			'errResize'            : 'Δεν ήταν δυνατή η αλλαγή μεγέθους του "$1".',
			'errUsupportType'      : 'Ο τύπος αρχείου δεν υποστηρίζεται.',
			'errNotUTF8Content'    : 'Το αρχείο "$1" δεν είναι UTF-8 και δεν μπορεί να επεξεργασθεί.',  // added 9.11.2011
			'errNetMount'          : 'Δεν ήταν δυνατή η φόρτωση του "$1".',     // added 17.04.2012
			'errNetMountNoDriver'  : 'Μη υποστηριζόμενο πρωτόκολο.',     // added 17.04.2012
			'errNetMountFailed'    : 'Η φόρτωση απέτυχε.',             // added 17.04.2012
			'errNetMountHostReq'   : 'Απαιτείται host εξυπηρετητής.', // added 18.04.2012
			/******************************* commands names ********************************/
			'cmdarchive'   : 'Δημιουργία archive αρχείου',
			'cmdback'      : 'Πίσω',
			'cmdcopy'      : 'Αντιγραφή',
			'cmdcut'       : 'Αφαίρεση',
			'cmddownload'  : 'Μεταφόρτωση',
			'cmdduplicate' : 'Αντίγραφο',
			'cmdedit'      : 'Επεξεργασία αρχείου',
			'cmdextract'   : 'Εξαγωγή αρχείων από archive',
			'cmdforward'   : 'Προώθηση',
			'cmdgetfile'   : 'Επιλέξτε αρχεία',
			'cmdhelp'      : 'Σχετικά με αυτό το λογισμικό',
			'cmdhome'      : 'Home',
			'cmdinfo'      : 'Πληροφορίες',
			'cmdmkdir'     : 'Νέος φάκελος',
			'cmdmkfile'    : 'Νέο αρχείο κειμένου',
			'cmdopen'      : 'Άνοιγμα',
			'cmdpaste'     : 'Επικόλληση',
			'cmdquicklook' : 'Προεπισκόπηση',
			'cmdreload'    : 'Ανανέωση',
			'cmdrename'    : 'Μετονομασία',
			'cmdrm'        : 'Διαγραφή',
			'cmdsearch'    : 'Έυρεση αρχείων',
			'cmdup'        : 'Μετάβαση στο γονικό φάκελο',
			'cmdupload'    : 'Ανέβασμα αρχείων',
			'cmdview'      : 'Προβολή',
			'cmdresize'    : 'Αλλαγή μεγέθους εικόνας',
			'cmdsort'      : 'Ταξινόμηση',
			
			/*********************************** buttons ***********************************/ 
			'btnClose'  : 'Κλείσιμο',
			'btnSave'   : 'Αποθήκευση',
			'btnRm'     : 'Αφαίρεση',
			'btnApply'  : 'Εφαρμογή',
			'btnCancel' : 'Ακύρωση',
			'btnNo'     : 'Όχι',
			'btnYes'    : 'Ναι',
			
			/******************************** notifications ********************************/
			'ntfopen'     : 'Άνοιγμα φακέλου',
			'ntffile'     : 'Άνοιγμα αρχείου',
			'ntfreload'   : 'Ανανέωση περιεχομένων φακέλου',
			'ntfmkdir'    : 'Δημιουργία φακέλου',
			'ntfmkfile'   : 'Δημιουργία αρχείων',
			'ntfrm'       : 'Διαγραφή αρχείων',
			'ntfcopy'     : 'Αντιγραφή αρχείων',
			'ntfmove'     : 'Μετακίνηση αρχείων',
			'ntfprepare'  : 'Προετοιμασία αντιγραφής αρχείων',
			'ntfrename'   : 'Μετονομασία αρχείων',
			'ntfupload'   : 'Ανέβασμα αρχείων',
			'ntfdownload' : 'Μεταφόρτωση αρχείων',
			'ntfsave'     : 'Αποθήκευση αρχείων',
			'ntfarchive'  : 'Δημιουργία αρχείου',
			'ntfextract'  : 'Εξαγωγή αρχείων από το archive',
			'ntfsearch'   : 'Αναζήτηση αρχείων',
			'ntfsmth'     : 'Σύστημα απασχολημένο>_<',
			'ntfloadimg'  : 'Φόρτωση εικόνας',
			'ntfnetmount' : 'Φόρτωση δικτυακού δίσκου', // added 18.04.2012
			
			/************************************ dates **********************************/
			'dateUnknown' : 'άγνωστο',
			'Today'       : 'Σήμερα',
			'Yesterday'   : 'Εχθές',
			'Jan'         : 'Ιαν',
			'Feb'         : 'Φεβ',
			'Mar'         : 'Μαρ',
			'Apr'         : 'Απρ',
			'May'         : 'Μαϊ',
			'Jun'         : 'Ιουν',
			'Jul'         : 'Ιουλ',
			'Aug'         : 'Αυγ',
			'Sep'         : 'Σεπ',
			'Oct'         : 'Οκτ',
			'Nov'         : 'Νοεμ',
			'Dec'         : 'Δεκ',
			'January'     : 'Ιανουάριος',
			'February'    : 'Φεβρουάριος',
			'March'       : 'Μάρτιος',
			'April'       : 'Απρίλιος',
			'May'         : 'Μάϊος',
			'June'        : 'Ιούνιος',
			'July'        : 'Ιούλιος',
			'August'      : 'Αύγουστος',
			'September'   : 'Σεπτέμβριος',
			'October'     : 'Οκτώβριος',
			'November'    : 'Νοέμβριος',
			'December'    : 'Δεκέμβριος',
			'Sunday'      : 'Κυριακή', 
			'Monday'      : 'Δευτέρα', 
			'Tuesday'     : 'Τρίτη', 
			'Wednesday'   : 'Τετάρτη', 
			'Thursday'    : 'Πέμπτη', 
			'Friday'      : 'Παρασκευή', 
			'Saturday'    : 'Σάββατο',
			'Sun'         : 'Κυρ', 
			'Mon'         : 'Δευ', 
			'Tue'         : 'Τρ', 
			'Wed'         : 'Τετ', 
			'Thu'         : 'Πεμ', 
			'Fri'         : 'Παρ', 
			'Sat'         : 'Σαβ',
			/******************************** sort variants ********************************/
			'sortname'          : 'κατά όνομα', 
			'sortkind'          : 'κατά είδος', 
			'sortsize'          : 'κατά μέγεθος',
			'sortdate'          : 'κατά ημερομηνία',
			'sortFoldersFirst'  : 'Πρώτα οι φάκελοι', // added 22.06.2012
			
			/********************************** messages **********************************/
			'confirmReq'      : 'Απαιτείται επιβεβαίωση',
			'confirmRm'       : 'Είστε σίγουροι πως θέλετε να διαγράψετε τα αρχεία?<br/>Οι αλλαγές θα είναι μόνιμες!',
			'confirmRepl'     : 'Αντικατάσταση του παλιού αρχείου με το νέο?',
			'apllyAll'        : 'Εφαρμογή σε όλλα',
			'name'            : 'Όνομα',
			'size'            : 'Μέγεθος',
			'perms'           : 'Δικαιώματα',
			'modify'          : 'Τροποποιήθηκε',
			'kind'            : 'Είδος',
			'read'            : 'ανάγνωση',
			'write'           : 'εγγραφή',
			'noaccess'        : 'δεν υπάρχει πρόσβαση',
			'and'             : 'και',
			'unknown'         : 'άγνωστο',
			'selectall'       : 'Επιλογή όλων',
			'selectfiles'     : 'Επιλογή αρχείων',
			'selectffile'     : 'Επιλογή πρώτου αρχείου',
			'selectlfile'     : 'Επιλογή τελευταίου αρχείου',
			'viewlist'        : 'Προβολή λίστας',
			'viewicons'       : 'Προβολή εικονιδίων',
			'places'          : 'Τοποθεσίες',
			'calc'            : 'Υπολογισμός', 
			'path'            : 'Διαδρομή',
			'aliasfor'        : 'Ψευδώνυμο για',
			'locked'          : 'Κλειδωμένο',
			'dim'             : 'Διαστάσεις',
			'files'           : 'Αρχεία',
			'folders'         : 'Φάκελοι',
			'items'           : 'Ατικείμενα',
			'yes'             : 'ναι',
			'no'              : 'όχι',
			'link'            : 'Σλυνδεσμος',
			'searcresult'     : 'Αποτελέσματα αναζήτησης',  
			'selected'        : 'επιλεγμένα αντικείμενα',
			'about'           : 'Σχετικά',
			'shortcuts'       : 'Συντομέυσεις',
			'help'            : 'Βοήθεια',
			'webfm'           : 'εργαλέιο διαχείρισης αρχείων από το web',
			'ver'             : 'ΈΚδοση',
			'protocolver'     : 'έκδοση πρωτοκόλλου',
			'homepage'        : 'Σελίδα του project',
			'docs'            : 'Τεκμηρίωση (documentation)',
			'github'          : 'Κάντε μας fork στο Github',
			'twitter'         : 'Ακολουθήστε μας στο twitter',
			'facebook'        : 'Βρείτε μας στο facebook',
			'team'            : 'Ομάδα',
			'chiefdev'        : 'κύριος προγραμματιστής',
			'developer'       : 'προγραμματισής',
			'contributor'     : 'συνισφορά',
			'maintainer'      : 'συντηρητής',
			'translator'      : 'μεταφραστής',
			'icons'           : 'Εικονίδια',
			'dontforget'      : 'και μην ξεχάσεις την πετσέτα σου!',
			'shortcutsof'     : 'Οι συντομεύσεις είναι απενεργοποιημένες',
			'dropFiles'       : 'Κάντε drop τα αρχεία εδώ',
			'or'              : 'ή',
			'selectForUpload' : 'Επιλογή αρχείων για ανέβασμα',
			'moveFiles'       : 'Μετακίνηση αρχείων',
			'copyFiles'       : 'Αντιγραφή αρχείων',
			'rmFromPlaces'    : 'Αντιγραφή από τοποθεσίες',
			'untitled folder' : 'untitled folder',
			'untitled file.txt' : 'untitled file.txt',
			'aspectRatio'     : 'Αναλογία διαστάσεων',
			'scale'           : 'Κλίμακα',
			'width'           : 'Πλάτος',
			'height'          : 'Ύψος',
			'mode'            : 'Κατάσταση',
			'resize'          : 'Αλλαγή μεγέθους',
			'crop'            : 'Crop',
			'rotate'          : 'Περιστροφή',
			'rotate-cw'       : 'Περιστροφή κατά 90 βαθμούς CW',
			'rotate-ccw'      : 'Περιστροφή κατά 90 βαθμούς CCW',
			'degree'          : 'Βαθμός',
			'netMountDialogTitle' : 'Φορτώστε δικτυακό δίσκο', // added 18.04.2012
			'protocol'            : 'Πρωτόκολλο', // added 18.04.2012
			'host'                : 'Host', // added 18.04.2012
			'port'                : 'Port', // added 18.04.2012
			'user'                : 'Χρήστης', // added 18.04.2012
			'pass'                : 'Κωδικός', // added 18.04.2012
			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Άγνωστο',
			'kindFolder'      : 'Φάκελος',
			'kindAlias'       : 'Ψευδώνυμο (alias)',
			'kindAliasBroken' : 'Μη έγκυρο ψευδώνυμο',
			// applications
			'kindApp'         : 'Εφαρμοφή',
			'kindPostscript'  : 'Έγγραφο Postscript',
			'kindMsOffice'    : 'Έγγραφο Microsoft Office',
			'kindMsWord'      : 'Έγγραφο Microsoft Word',
			'kindMsExcel'     : 'Έγγραφο Microsoft Excel',
			'kindMsPP'        : 'Παρουσίαση Microsoft Powerpoint',
			'kindOO'          : 'Έγγραφο Open Office',
			'kindAppFlash'    : 'Εφαρμογή Flash',
			'kindPDF'         : 'Portable Document Format (PDF)',
			'kindTorrent'     : 'Αρχείο Bittorrent',
			'kind7z'          : 'Αρχείο 7z',
			'kindTAR'         : 'Αρχείο TAR',
			'kindGZIP'        : 'Αρχείο GZIP',
			'kindBZIP'        : 'Αρχείο BZIP',
			'kindZIP'         : 'Αρχείο ZIP',
			'kindRAR'         : 'Αρχείο RAR',
			'kindJAR'         : 'Αρχείο Java JAR',
			'kindTTF'         : 'Γραμματοσειρά True Type',
			'kindOTF'         : 'Γραμματοσειρά Open Type',
			'kindRPM'         : 'Πακέτο RPM',
			// texts
			'kindText'        : 'Έγγραφο κειμένου',
			'kindTextPlain'   : 'Απλό κείμενο',
			'kindPHP'         : 'Κώδικας PHP',
			'kindCSS'         : 'Cascading style sheet',
			'kindHTML'        : 'Έγγραφο HTML',
			'kindJS'          : 'Κώδικας Javascript',
			'kindRTF'         : 'Rich Text Format',
			'kindC'           : 'Κώδικας C',
			'kindCHeader'     : 'Κώδικας κεφαλίδας C',
			'kindCPP'         : 'Κώδικας C++',
			'kindCPPHeader'   : 'Κώδικας κεφαλίδας C++',
			'kindShell'       : 'Unix shell script',
			'kindPython'      : 'Κώδικας Python',
			'kindJava'        : 'Κώδικας Java',
			'kindRuby'        : 'Κώδικας Ruby',
			'kindPerl'        : 'Perl script',
			'kindSQL'         : 'Κώδικας SQL',
			'kindXML'         : 'Έγγραφο XML',
			'kindAWK'         : 'Κώδικας AWK',
			'kindCSV'         : 'Τιμές χωρισμένες με κόμμα',
			'kindDOCBOOK'     : 'Έγγραφο Docbook XML',
			// images
			'kindImage'       : 'Εικόνα',
			'kindBMP'         : 'Εικόνα BMP',
			'kindJPEG'        : 'Εικόνα JPEG',
			'kindGIF'         : 'Εικόνα GIF',
			'kindPNG'         : 'Εικόνα PNG',
			'kindTIFF'        : 'Εικόνα TIFF',
			'kindTGA'         : 'Εικόνα TGA',
			'kindPSD'         : 'Εικόνα Adobe Photoshop',
			'kindXBITMAP'     : 'Εικόνα X bitmap',
			'kindPXM'         : 'Εικόνα Pixelmator',
			// media
			'kindAudio'       : 'Αρχεία ήχου',
			'kindAudioMPEG'   : 'Ήχος MPEG',
			'kindAudioMPEG4'  : 'Εικόνα MPEG-4',
			'kindAudioMIDI'   : 'Εικόνα MIDI',
			'kindAudioOGG'    : 'Εικόνα Ogg Vorbis',
			'kindAudioWAV'    : 'Εικόνα WAV',
			'AudioPlaylist'   : 'MP3 playlist',
			'kindVideo'       : 'Αρχεία media',
			'kindVideoDV'     : 'Ταινία DV',
			'kindVideoMPEG'   : 'Ταινία MPEG',
			'kindVideoMPEG4'  : 'Ταινία MPEG-4',
			'kindVideoAVI'    : 'Ταινία AVI',
			'kindVideoMOV'    : 'Ταινία Quick Time',
			'kindVideoWM'     : 'Ταινία Windows Media',
			'kindVideoFlash'  : 'Ταινία flash',
			'kindVideoMKV'    : 'Ταινία matroska',
			'kindVideoOGG'    : 'Ταινία ogg'
		}
	}
}


/**
 * Spanish translation
 * @author Julián Torres <julian.torres@pabernosmatao.com>
 * @version 2011-08-25
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
	elFinder.prototype.i18.es = {
		translator : 'Julián Torres &lt;julian.torres@pabernosmatao.com&gt;',
		language   : 'Español internacional',
		direction  : 'ltr',
		messages   : {
			
			/********************************** errors **********************************/
			'error'                : 'Error',
			'errUnknown'           : 'Error desconocido.',
			'errUnknownCmd'        : 'Comando desconocido.',
			'errJqui'              : 'Configuración no válida de jQuery UI. deben estar incluidos los componentes selectable, draggable y droppable.',
			'errNode'              : 'elFinder necesita crear elementos DOM.',
			'errURL'               : 'Configuración no válida de elFinder! La opción URL no está configurada.',
			'errAccess'            : 'Acceso denegado.',
			'errConnect'           : 'No se ha podido conectar con el backend.',
			'errAbort'             : 'Conexión cancelada.',
			'errTimeout'           : 'Conexión cancelada por timeout.',
			'errNotFound'          : 'Backend no encontrado.',
			'errResponse'          : 'Respuesta no válida del backend.',
			'errConf'              : 'Configuración no válida del backend .',
			'errJSON'              : 'El módulo PHP JSON no está instalado.',
			'errNoVolumes'         : 'No hay disponibles volúmenes legibles.',
			'errCmdParams'         : 'Parámetros no válidos para el comando "$1".',
			'errDataNotJSON'       : 'los datos no estñan en formato JSON.',
			'errDataEmpty'         : 'No hay datos.',
			'errCmdReq'            : 'La petición del backend necesita un nombre de comando.',
			'errOpen'              : 'No se puede abrir "$1".',
			'errNotFolder'         : 'El objeto no es una carpeta.',
			'errNotFile'           : 'El objeto no es un archivo.',
			'errRead'              : 'No se puede leer "$1".',
			'errWrite'             : 'No se puede escribir en "$1".',
			'errPerm'              : 'Permiso denegado.',
			'errLocked'            : '"$1" está bloqueado y no puede ser renombrado, movido o borrado.',
			'errExists'            : 'Ya existe un archivo llamado "$1".',
			'errInvName'           : 'Nombre de archivo no válido.',
			'errFolderNotFound'    : 'Carpeta no encontrada.',
			'errFileNotFound'      : 'Archivo no encontrado.',
			'errTrgFolderNotFound' : 'Carpeta de destino "$1" no encontrada.',
			'errPopup'             : 'El navegador impide abrir nuevas ventanas. Puede activarlo en las opciones del navegador.',
			'errMkdir'             : 'No se puede crear la carpeta "$1".',
			'errMkfile'            : 'No se puede crear el archivo "$1".',
			'errRename'            : 'No se puede renombrar "$1".',
			'errCopyFrom'          : 'No se permite copiar archivos desde el volumen "$1".',
			'errCopyTo'            : 'No se permite copiar archivos al volumen "$1".',
			'errUploadCommon'      : 'Error en el envñio.',
			'errUpload'            : 'No se puede subir "$1".',
			'errUploadNoFiles'     : 'No hay archivos para subir.',
			'errMaxSize'           : 'El tamaño de los datos excede el máximo permitido.',
			'errFileMaxSize'       : 'El tamaño del archivo excede el máximo permitido.',
			'errUploadMime'        : 'Tipo de archivo no permitidp.',
			'errUploadTransfer'    : 'Error al transferir "$1".', 
			'errSave'              : 'No se puede guadar "$1".',
			'errCopy'              : 'No se puede copiar "$1".',
			'errMove'              : 'No se puede mover "$1".',
			'errCopyInItself'      : 'No se puede copiar "$1" into itself.',
			'errRm'                : 'No se puede borrar "$1".',
			'errExtract'           : 'No se puede extraer archivos from "$1".',
			'errArchive'           : 'No se puede crear el archivo.',
			'errArcType'           : 'Tipo de archivo no soportado.',
			'errNoArchive'         : 'El archivo no es de tipo archivo o es de un tipo no soportado.',
			'errCmdNoSupport'      : 'El backend no soporta este comando.',
			'errReplByChild'       : 'La carpeta “$1” no puede ser reemplazada por un elemento contenido en ella.',
			'errArcSymlinks'       : 'Por razones de seguridad no se pueden descomprimir archivos que contengan symlinks.',
			'errArcMaxSize'        : 'El tamaño del archivo excede el máximo permitido.',

			'errSessionExpires'    : 'La sesión ha expirado por inactividad',
			'errCreatingTempDir'   : 'No se ha podido crear al directorio temporal: "$1"',
			'errFtpDownloadFile'   : 'No se ha podido descargar el archivo desde FTP: "$1"',
			'errFtpUploadFile'     : 'No se ha podido cargar el archivo a FTP: "$1"',
			'errFtpMkdir'          : 'No se ha podido crear el directorio remoto en FTP: "$1"',
			'errArchiveExec'       : 'Se ha producido un error durante la archivación: "$1"',
			'errExtractExec'       : 'Se ha producido un error durante la extracción de archivos: "$1"',
			'cmdsort'              : 'Clasificar',
			'sortkind'             : 'por tipo',
			'sortname'             : 'por nombre',
			'sortsize'             : 'por tamaño',
			'sortdate'             : 'por fecha',
			'sortFoldersFirst'     : 'Las carpetas en primer lugar',
			'errUploadFile'        : 'No se ha podido cargar "$1".',
			
			/******************************* commands names ********************************/
			'cmdarchive'   : 'Crear archivo',
			'cmdback'      : 'Atrás',
			'cmdcopy'      : 'Copiar',
			'cmdcut'       : 'Cortar',
			'cmddownload'  : 'Descargar',
			'cmdduplicate' : 'Duplicar',
			'cmdedit'      : 'Editar archivo',
			'cmdextract'   : 'Extraer elementos del archivo',
			'cmdforward'   : 'Adelante',
			'cmdgetfile'   : 'Seleccionar archivos',
			'cmdhelp'      : 'Acerca de este software',
			'cmdhome'      : 'Inicio',
			'cmdinfo'      : 'Obtener información',
			'cmdmkdir'     : 'Nueva arpeta',
			'cmdmkfile'    : 'Nuevo archivo de texto',
			'cmdopen'      : 'Abrir',
			'cmdpaste'     : 'Pegar',
			'cmdquicklook' : 'Previsualizar',
			'cmdreload'    : 'Recargar',
			'cmdrename'    : 'Cambiar nombre',
			'cmdrm'        : 'Eliminar',
			'cmdsearch'    : 'Buscar archivos',
			'cmdup'        : 'Ir a la carpeta raíz',
			'cmdupload'    : 'Subir archivos',
			'cmdview'      : 'Ver',
			
			/*********************************** buttons ***********************************/ 
			'btnClose'  : 'Cerrar',
			'btnSave'   : 'Guardar',
			'btnRm'     : 'Eliminar',
			'btnCancel' : 'Cancelar',
			'btnNo'     : 'No',
			'btnYes'    : 'Sí',
			
			/******************************** notifications ********************************/
			'ntfopen'     : 'Abrir carpeta',
			'ntffile'     : 'Abrir archivo',
			'ntfreload'   : 'Actualizar contenido de la carpeta',
			'ntfmkdir'    : 'Creando directorio',
			'ntfmkfile'   : 'Creando archivos',
			'ntfrm'       : 'Eliminndo archivos',
			'ntfcopy'     : 'Copiar archivos',
			'ntfmove'     : 'Mover archivos',
			'ntfprepare'  : 'Preparar copia de archivos',
			'ntfrename'   : 'Renombrar archivos',
			'ntfupload'   : 'Subiendo archivos',
			'ntfdownload' : 'Descargando archivos',
			'ntfsave'     : 'Guardar archivos',
			'ntfarchive'  : 'Creando archivo',
			'ntfextract'  : 'Extrayendo elementos del archivo',
			'ntfsearch'   : 'Buscando archivos',
			'ntfsmth'     : 'Haciendo algo',
			'ntfloadimg'  : 'Cargando imagen',
			
			/************************************ dates **********************************/
			'dateUnknown' : 'desconocida',
			'Today'       : 'Hoy',
			'Yesterday'   : 'Ayer',
			'Jan'         : 'Ene',
			'Feb'         : 'Feb',
			'Mar'         : 'Mar',
			'Apr'         : 'Abr',
			'May'         : 'May',
			'Jun'         : 'Jun',
			'Jul'         : 'Jul',
			'Aug'         : 'Ago',
			'Sep'         : 'Sep',
			'Oct'         : 'Oct',
			'Nov'         : 'Nov',
			'Dec'         : 'Dic',

			/********************************** messages **********************************/
			'confirmReq'      : 'Se necesita confirmación',
			'confirmRm'       : '¿Está seguro de querer eliminar archivos?<br/>Esto no tiene vuelta atrás!',
			'confirmRepl'     : '¿Reemplazar el antigüo archivo con el nuevo?',
			'apllyAll'        : 'Aplicar a todo',
			'name'            : 'Nombre',
			'size'            : 'Tamaño',
			'perms'           : 'Permisos',
			'modify'          : 'Modificado',
			'kind'            : 'Tipo',
			'read'            : 'lectura',
			'write'           : 'escritura',
			'noaccess'        : 'sin acceso',
			'and'             : 'y',
			'unknown'         : 'desconocido',
			'selectall'       : 'Seleccionar todos los archivos',
			'selectfiles'     : 'Seleccionar archivo(s)',
			'selectffile'     : 'Seleccionar primer archivo',
			'selectlfile'     : 'Seleccionar último archivo',
			'viewlist'        : 'ver como lista',
			'viewicons'       : 'Ver como iconos',
			'places'          : 'Lugares',
			'calc'            : 'Calcular', 
			'path'            : 'Ruta',
			'aliasfor'        : 'Alias para',
			'locked'          : 'Bloqueado',
			'dim'             : 'Dimensiones',
			'files'           : 'Archivos',
			'folders'         : 'Carpetas',
			'items'           : 'Elementos',
			'yes'             : 'si',
			'no'              : 'no',
			'link'            : 'Enlace',
			'searcresult'     : 'Resultados de la búsqueda',  
			'selected'        : 'elementos seleccionados',
			'about'           : 'Acerca',
			'shortcuts'       : 'Accesos directos',
			'help'            : 'Ayuda',
			'webfm'           : 'Administrador de archivos web',
			'ver'             : 'Version',
			'protocolver'     : 'versión del protocolo',
			'homepage'        : 'Project home',
			'docs'            : 'Documentación',
			'github'          : 'Fork us on Github',
			'twitter'         : 'Síguenos en Twitter',
			'facebook'        : 'Únete a nostros en Facebook',
			'team'            : 'Equipo',
			'chiefdev'        : 'desarrollador jefe',
			'developer'       : 'desarrollador',
			'contributor'     : 'contribuyente',
			'maintainer'      : 'mantenedor',
			'translator'      : 'traductor',
			'icons'           : 'Iconos',
			'dontforget'      : 'y no olvide traer su toalla',
			'shortcutsof'     : 'Accesos directos desactivados',
			'dropFiles'       : 'Arrastre archivos aquí',
			'or'              : 'o',
			'selectForUpload' : 'Seleccione archivos para subir',
			'moveFiles'       : 'Mover archivos',
			'copyFiles'       : 'Copiar archivos',
			'rmFromPlaces'    : 'Eliminar en sus ubicaciónes',
			'untitled folder' : 'carpeta sin título',
			'untitled archivo.txt' : 'archivo.txt sin título',
      'mode'            : 'Modo',
      'resize'          : 'Redimensionar',
      'crop'            : 'Recortar',
			
			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Desconocido',
			'kindFolder'      : 'Carpeta',
			'kindAlias'       : 'Alias',
			'kindAliasBroken' : 'Alias roto',
			// applications
			'kindApp'         : 'Aplicación',
			'kindPostscript'  : 'Documento Postscript',
			'kindMsOffice'    : 'Documento Microsoft Office',
			'kindMsWord'      : 'Documento Microsoft Word',
			'kindMsExcel'     : 'Documento Microsoft Excel',
			'kindMsPP'        : 'Presentación Microsoft Powerpoint',
			'kindOO'          : 'Documento Open Office',
			'kindAppFlash'    : 'Aplicación Flash',
			'kindPDF'         : 'Documento PDF',
			'kindTorrent'     : 'Archivo Bittorrent',
			'kind7z'          : 'Archivo 7z',
			'kindTAR'         : 'Archivo TAR',
			'kindGZIP'        : 'Archivo GZIP',
			'kindBZIP'        : 'Archivo BZIP',
			'kindZIP'         : 'Archivo ZIP',
			'kindRAR'         : 'Archivo RAR',
			'kindJAR'         : 'Archivo Java JAR',
			'kindTTF'         : 'Fuente True Type',
			'kindOTF'         : 'Fuente Open Type',
			'kindRPM'         : 'Paquete RPM',
			// texts
			'kindText'        : 'Documento de texto',
			'kindTextPlain'   : 'Texto plano',
			'kindPHP'         : 'Código PHP',
			'kindCSS'         : 'Hoja de estilo CSS',
			'kindHTML'        : 'Documento HTML',
			'kindJS'          : 'Código Javascript',
			'kindRTF'         : 'Documento RTF',
			'kindC'           : 'C source',
			'kindCHeader'     : 'Código C header',
			'kindCPP'         : 'Código C++',
			'kindCPPHeader'   : 'Código C++ header',
			'kindShell'       : 'Script Unix shell',
			'kindPython'      : 'Código Python',
			'kindJava'        : 'Código Java',
			'kindRuby'        : 'Código Ruby',
			'kindPerl'        : 'Código Perl',
			'kindSQL'         : 'SCódigo QL',
			'kindXML'         : 'Documento XML',
			'kindAWK'         : 'Código AWK source',
			'kindCSV'         : 'Documento CSV (valores separados por comas)',
			'kindDOCBOOK'     : 'Documento Docbook XML',
			// images
			'kindImage'       : 'Imagen',
			'kindBMP'         : 'Imagen BMP',
			'kindJPEG'        : 'Imagen JPEG',
			'kindGIF'         : 'Imagen GIF',
			'kindPNG'         : 'Imagen PNG',
			'kindTIFF'        : 'Imagen TIFF',
			'kindTGA'         : 'Imagen TGA',
			'kindPSD'         : 'Imagen Adobe Photoshop',
			'kindXBITMAP'     : 'Imagen X bitmap',
			'kindPXM'         : 'Imagen Pixelmator',
			// media
			'kindAudio'       : 'Audio media',
			'kindAudioMPEG'   : 'Audio MPEG',
			'kindAudioMPEG4'  : 'Audio MPEG-4',
			'kindAudioMIDI'   : 'Audio MIDI',
			'kindAudioOGG'    : 'Audio Ogg Vorbis',
			'kindAudioWAV'    : 'Audio WAV',
			'AudioPlaylist'   : 'Playlist MP3',
			'kindVideo'       : 'Video media',
			'kindVideoDV'     : 'Película DV',
			'kindVideoMPEG'   : 'Película MPEG',
			'kindVideoMPEG4'  : 'Película MPEG-4',
			'kindVideoAVI'    : 'Película AVI',
			'kindVideoMOV'    : 'Película Quick Time',
			'kindVideoWM'     : 'Película Windows Media',
			'kindVideoFlash'  : 'Película Flash',
			'kindVideoMKV'    : 'Película Matroska MKV',
			'kindVideoOGG'    : 'Película Ogg'
		}
	}
}


/**
 * Persian-Farsi Translation
 * @author Keyhan Mohammadpour <keyhan_universityworks@yahoo.com>
 * @version 2012-04-07
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
	elFinder.prototype.i18.fa = {
		translator : 'Keyhan Mohammadpour &lt;keyhan_universityworks@yahoo.com&gt;',
		language   : 'فارسی',
		direction  : 'rtl',
		dateFormat : 'd.m.Y H:i',
		fancyDateFormat : '$1 H:i',
		messages   : {

			/********************************** errors **********************************/
			'error'                : 'خطا',
			'errUnknown'           : 'خطای ناشناخته .',
			'errUnknownCmd'        : 'دستور ناشناخته .',
			'errJqui'              : 'تنظیمات کتابخانه JQuery UI شما به درستی تنظیم نشده است . این کتابخانه بایستی شامل Resizable ، Draggable و Droppable باشد .',
			'errNode'              : 'شی elfinder به درستی ایجاد نشده است .',
			'errURL'               : 'تنظیمات elfinder شما به درستی انجام نشده است . تنظیم Url را به درستی انجام دهید .',
			'errAccess'            : 'محدودیت سطح دسترسی',
			'errAbort'             : 'ارتباط قطع شده است .',
			'errTimeout'           : 'مهلت زمانی Connection شما به انتها رسیده ایت .',
			'errNotFound'          : 'تنظیم Backend یافت نشد .',
			'errResponse'          : 'پاسخ دریافتی از Backend صحیح نمی باشد .',
			'errConf'              : 'تنطیمات Backend به درستی انجام نشده است .',
			'errJSON'              : 'ماژول PHP JSON نصب نگردیده است .',
			'errNoVolumes'         : 'درایوهای قابل خواندن یافت نشدند .',
			'errCmdParams'         : 'پارامترهای دستور "$1" به صورت صحیح داده نشده است .',
			'errDataNotJSON'       : 'داده ها در قالب JSON نمی باشند .',
			'errDataEmpty'         : 'داده ها تهی می باشند .',
			'errCmdReq'            : 'درخواست از سمت Backend نیازمند نام دستور می باشد .',
			'errOpen'              : 'قادر به باز نمودن "$1" نمی باشد .',
			'errNotFolder'         : 'شی به صورت پوشه نمی باشد .',
			'errNotFile'           : 'شی به صورت فایل نمی باشد .',
			'errRead'              : 'قادر به خواندن "$1" نمی باشد .',
			'errWrite'             : 'قادر به نوشتن در درون "$1" نمی باشد .',
			'errPerm'              : 'شما مجاز به انجام این عمل نمی باشید .',
			'errLocked'            : '"$1"قفل گردیده است و شما قادر به تغییر نام ، حذف و یا جابجایی آن نمی باشید .',
			'errExists'            : 'فایلی با نام "$1" هم اکنون وجود دارد .',
			'errInvName'           : 'نام انتخابی شما صحیح نمی باشد .',
			'errFolderNotFound'    : 'پوشه مورد نظر شما یافت نشد .',
			'errFileNotFound'      : 'فایل مورد نظر شما یافت نشد .',
			'errTrgFolderNotFound' : 'پوشه مقصد با نام "$1" یافت نشد .',
			'errPopup'             : 'مرورگر شما ار باز شدن پنجره popup جلوگیری می نماید ، اطفا تنطیم مربوطه را در مرورگر خود فعال نمایید .',
			'errMkdir'             : 'قادر به ایجاد نمودن پوشه ای با نام "$1" نمی باشد .',
			'errMkfile'            : 'قادر به ابجاد نمودن فایلی با نبم "$1" نمی باشد .',
			'errRename'            : 'قادر به تغییر نام فایل "$1" نمی باشد .',
			'errCopyFrom'          : 'کپی نمودن از درایو با نام "$1" امکان پذیر نمی باشد .',
			'errCopyTo'            : 'کپی نمودن به درایو با نام "$1" امکان پذیر نمی باشد .',
			'errUploadCommon'      : 'خطای بارگذاری ',
			'errUpload'            : 'قادر به بارگذاری "$1" نمی باشد .',
			'errUploadNoFiles'     : 'هیچ فایلی برای بارگذاری یافت نشد .',
			'errMaxSize'           : 'حجم داده ها بیشتر از حد مجاز تعیین شده است .',
			'errFileMaxSize'       : 'حجم فایل بیشتر از حد مجاز تعیین شده است .',
			'errUploadMime'        : 'نوع فایل انتخابی شما مجاز نمی باشد .',
			'errUploadTransfer'    : 'در تبادل "$1" خطایی رخ داده است .',
			'errSave'              : 'قادر به دخیره کردن "$1" نمی باشد .',
			'errCopy'              : 'قادر به کپی نمودن "$1" نمی باشد .',
			'errMove'              : 'قادر به جابجایی "$1" نمی باشد .',
			'errCopyInItself'      : 'قادر به کپی نمودن "$1" در درون خودش نمی باشد .',
			'errRm'                : 'قادر به حذف نمودن "$1" نمی باشد .',
			'errExtract'           : 'قادر به استخراج فایل فشرده "$1" نمی باشد .',
			'errArchive'           : 'قادر به ایجاد آرشیو نمی باشد .',
			'errArcType'           : 'نوع ناشناخته برای آرشیو .',
			'errNoArchive'         : 'قادر به آرشیو نمودن فایل نمی باشد و یا نوع فایل در نوع های آرشیو تعیین نشده است .',
			'errCmdNoSupport'      : 'Backend قادر به پشتیبانی از این دستور نمی باشد .',
			'errReplByChild'       : 'پوشه با نام "$1"قادر به تغییر با محتویات درونی خود نمی باشد .',
			'errArcSymlinks'       : 'به دلایل مسائل امنیتی قادر به استخراج آرشیو های دارای symlinks نمی باشد .',
			'errArcMaxSize'        : 'فایل های آرشیو شده به حداکثر اندازه تعیین شده رسیده اند .',
			'errResize'            : 'قادر به تغییر اندازه "$1" نمی باشد .',
			'errUsupportType'      : 'نوع فایل شما قابل پشتیبانی نمی باشد .',

			/******************************* commands names ********************************/
			'cmdarchive'   : 'ساختن آرشیو',
			'cmdback'      : 'قبلی',
			'cmdcopy'      : 'کپی',
			'cmdcut'       : 'جابجایی',
			'cmddownload'  : 'بارگیری',
			'cmdduplicate' : 'تکثیر نمودن',
			'cmdedit'      : 'ویرایش فایل',
			'cmdextract'   : 'از حالت فشرده خارج نمودن',
			'cmdforward'   : 'بعدی',
			'cmdgetfile'   : 'انتخاب فایل ها',
			'cmdhelp'      : 'درباره این فایل',
			'cmdhome'      : 'صفحه اصلی',
			'cmdinfo'      : 'دریافت اطلاعات',
			'cmdmkdir'     : 'پوشه جدید',
			'cmdmkfile'    : 'فایل متنی جدید',
			'cmdopen'      : 'باز نمودن',
			'cmdpaste'     : 'چسباندن',
			'cmdquicklook' : 'پیش نمایش',
			'cmdreload'    : 'بارگذاری مجدد',
			'cmdrename'    : 'تغییر نام',
			'cmdrm'        : 'حذف',
			'cmdsearch'    : 'جستجو',
			'cmdup'        : 'رفتن به پوشه والد',
			'cmdupload'    : 'بارگذاری فایل ها',
			'cmdview'      : 'نمایش',
			'cmdresize'    : 'تغییر اندازه فایل',
			'cmdsort'      : 'مرتب سازی',

			/*********************************** buttons ***********************************/ 
			'btnClose'  : 'بستن',
			'btnSave'   : 'ذخیره',
			'btnRm'     : 'حذف',
			'btnApply'  : 'اعمال',
			'btnCancel' : 'انصراف',
			'btnNo'     : 'خیر',
			'btnYes'    : 'بلی',

			/******************************** notifications ********************************/
			'ntfopen'     : 'باز نمودن پوشه',
			'ntffile'     : 'باز نمدن فایل',
			'ntfreload'   : 'بازخوانی مجدد محتویات پوشه',
			'ntfmkdir'    : 'ساختن پوشه',
			'ntfmkfile'   : 'ساختن فایل',
			'ntfrm'       : 'حذف فایل',
			'ntfcopy'     : 'کپی فایل',
			'ntfmove'     : 'انتقال فایل',
			'ntfprepare'  : 'آماده شدن برای کپی نمودن فایل ها',
			'ntfrename'   : 'تغییر نام فایل',
			'ntfupload'   : 'بارگذاری فایل',
			'ntfdownload' : 'بارگیری فایل',
			'ntfsave'     : 'ذخیره نمودن فایل ها',
			'ntfarchive'  : 'در حال ساختن آرشیو',
			'ntfextract'  : 'استخراج فایل ها از آرشیو',
			'ntfsearch'   : 'در حال جستجو فایل ها',
			'ntfsmth'     : 'درحال انجام عملیات ....',
			'ntfloadimg'  : 'در حال لود نمودن تصویر',

			/************************************ dates **********************************/
			'dateUnknown' : 'ناشناخته',
			'Today'       : 'امروز',
			'Yesterday'   : 'دیروز',
			'Jan'         : 'بهمن',
			'Feb'         : 'اسفند',
			'Mar'         : 'فروردین',
			'Apr'         : 'اردیبهشت',
			'May'         : 'خرداد',
			'Jun'         : 'تیر',
			'Jul'         : 'مرداد',
			'Aug'         : 'شهریور',
			'Sep'         : 'مهر',
			'Oct'         : 'آبان',
			'Nov'         : 'آذر',
			'Dec'         : 'دی',
			'January'     : 'بهمن',
			'February'    : 'اسفند',
			'March'       : 'فروردین',
			'April'       : 'اردیبهشت',
			'May'         : 'خرداد',
			'June'        : 'تیر',
			'July'        : 'مرداد',
			'August'      : 'شهریور',
			'September'   : 'مهر',
			'October'     : 'آبان',
			'November'    : 'آذر',
			'December'    : 'دی',
			'Sunday'      : 'یک شنبه',
			'Monday'      : 'دوشنبه',
			'Tuesday'     : 'سه شنبه',
			'Wednesday'   : 'چهار شنبه',
			'Thursday'    : 'پنج شنبه',
			'Friday'      : 'جمعه',
			'Saturday'    : 'شنبه',
			'Sun'         : 'یک شنبه',
			'Mon'         : 'دو شنبه',
			'Tue'         : 'سه شنبه',
			'Wed'         : 'چهار شنبه',
			'Thu'         : 'پنج شنبه',
			'Fri'         : 'جمعه',
			'Sat'         : 'شنبه',
			/******************************** sort variants ********************************/
			'sortnameDirsFirst' : 'بر اساس نام (پوشه ها در ابتدا قرار می گیرند ) .',
			'sortkindDirsFirst' : 'بر اساس نوع (پوشه ها در ابتدا قرار می گیرند ) .',
			'sortsizeDirsFirst' : 'بر اساس اندازه (پوشه ها در ابتدا قرار می گیرند ) .',
			'sortdateDirsFirst' : 'بر اساس تاریخ (پوشه ها در ابتدا قرار می گیرند ) .',
			'sortname'          : 'بر اساس نام',
			'sortkind'          : 'بر اساس نوع',
			'sortsize'          : 'بر اساس اندازه',
			'sortdate'          : 'بر اساس تاریخ',

			/********************************** messages **********************************/
			'confirmReq'      : 'تاییدیه نهایی نیاز است .',
			'confirmRm'       : 'آیا مطمثن به انجام عملیات حذف می باشید ؟ آیتم های حدف شده قابل بازیابی نمی باشند  !',
			'confirmRepl'     : 'آیا فایل قدیم با فایل جدید جایگزین شود ؟',
			'apllyAll'        : 'اعمال تغییرات به همه',
			'name'            : 'نام',
			'size'            : 'اندازه',
			'perms'           : 'مجوزها',
			'modify'          : 'تغییر داده شده',
			'kind'            : 'نوع',
			'read'            : 'خواندن',
			'write'           : 'نوشتن',
			'noaccess'        : 'دسترسی وجود ندارد',
			'and'             : 'و',
			'unknown'         : 'ناشناخته',
			'selectall'       : 'انتخاب همه فایل ها',
			'selectfiles'     : 'انتخاب یکی یا همه فایل ها',
			'selectffile'     : 'انتخاب اولین فایل',
			'selectlfile'     : 'انتخاب آخرین فایل',
			'viewlist'        : 'نمایش به صورت لیست',
			'viewicons'       : 'نمایش با آیکون ها',
			'places'          : 'محل ها',
			'calc'            : 'محاسبه',
			'path'            : 'مسیر',
			'aliasfor'        : 'نام مستعار برای',
			'locked'          : 'قفل شده',
			'dim'             : 'ابعاد',
			'files'           : 'فایل ها',
			'folders'         : 'پوشه ها',
			'items'           : 'آیتم ها',
			'yes'             : 'بلی',
			'no'              : 'خیر',
			'link'            : 'پیوند',
			'searcresult'     : 'جستجو در نتایج',
			'selected'        : 'آیتم های انتخاب شده',
			'about'           : 'درباره',
			'shortcuts'       : 'میانبرها',
			'help'            : 'راهنما',
			'webfm'           : 'مدیر وب فایل',
			'ver'             : 'نسخه',
			'protocol'        : 'نسخه پروتکل',
			'homepage'        : 'صفحه اصلی پروژه',
			'docs'            : 'مستندات',
			'github'          : 'دنبال کردن ما بر روی Github',
			'twitter'         : 'دنبال کردن ما در Twitter',
			'facebook'        : 'به ما در facebook بپیوندید',
			'team'            : 'گروه',
			'chiefdev'        : 'سازنده اصلی برنامه',
			'developer'       : 'سازنده',
			'contributor'     : 'همکار',
			'maintainer'      : 'پشتیبان',
			'translator'      : 'مترجم',
			'icons'           : 'آیکون ها',
			'dontforget'      : 'فراموش نشود',
			'shortcutsof'     : 'میانبرها غیرفعال شده اند .',
			'dropFiles'       : 'فایل های خود را در این محل رها نمایید .',
			'or'              : 'یا',
			'selectForUpload' : 'انتخاب فایل ها برای بارگذاری',
			'moveFiles'       : 'انتقال فایل ها',
			'copyFiles'       : 'کپی فایل ها',
			'rmFromPlaces'    : 'حدف',
			'untitled folder' : 'پوشه بدون نام',
			'untitled file.txt' : 'فایل متنی بدون نام',
			'aspectRatio'     : 'نسبت تصویر',
			'scale'           : 'مقیاس',
			'width'           : 'طول',
			'height'          : 'ارتفاع',
			'mode'            : 'مد',
			'resize'          : 'تغییر اندازه',
			'crop'            : 'بریدن',
			'rotate'          : 'چرخاندن',
			'rotate-cw'       : 'چرخاندن 90 درجه در جهت عقربه های ساعت',
			'rotate-ccw'      : 'چرخاندن 90 درجه در جهت خلاف عقربه های ساعت',
			'degree'          : 'درجه',

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Unknown',
			'kindFolder'      : 'Folder',
			'kindAlias'       : 'Alias',
			'kindAliasBroken' : 'Broken alias',
			// applications
			'kindApp'         : 'Application',
			'kindPostscript'  : 'Postscript document',
			'kindMsOffice'    : 'Microsoft Office document',
			'kindMsWord'      : 'Microsoft Word document',
			'kindMsExcel'     : 'Microsoft Excel document',
			'kindMsPP'        : 'Microsoft Powerpoint presentation',
			'kindOO'          : 'Open Office document',
			'kindAppFlash'    : 'Flash application',
			'kindPDF'         : 'Portable Document Format (PDF)',
			'kindTorrent'     : 'Bittorrent file',
			'kind7z'          : '7z archive',
			'kindTAR'         : 'TAR archive',
			'kindGZIP'        : 'GZIP archive',
			'kindBZIP'        : 'BZIP archive',
			'kindZIP'         : 'ZIP archive',
			'kindRAR'         : 'RAR archive',
			'kindJAR'         : 'Java JAR file',
			'kindTTF'         : 'True Type font',
			'kindOTF'         : 'Open Type font',
			'kindRPM'         : 'RPM package',
			// texts
			'kindText'        : 'Text document',
			'kindTextPlain'   : 'Plain text',
			'kindPHP'         : 'PHP source',
			'kindCSS'         : 'Cascading style sheet',
			'kindHTML'        : 'HTML document',
			'kindJS'          : 'Javascript source',
			'kindRTF'         : 'Rich Text Format',
			'kindC'           : 'C source',
			'kindCHeader'     : 'C header source',
			'kindCPP'         : 'C++ source',
			'kindCPPHeader'   : 'C++ header source',
			'kindShell'       : 'Unix shell script',
			'kindPython'      : 'Python source',
			'kindJava'        : 'Java source',
			'kindRuby'        : 'Ruby source',
			'kindPerl'        : 'Perl script',
			'kindSQL'         : 'SQL source',
			'kindXML'         : 'XML document',
			'kindAWK'         : 'AWK source',
			'kindCSV'         : 'Comma separated values',
			'kindDOCBOOK'     : 'Docbook XML document',
			// images
			'kindImage'       : 'Image',
			'kindBMP'         : 'BMP image',
			'kindJPEG'        : 'JPEG image',
			'kindGIF'         : 'GIF Image',
			'kindPNG'         : 'PNG Image',
			'kindTIFF'        : 'TIFF image',
			'kindTGA'         : 'TGA image',
			'kindPSD'         : 'Adobe Photoshop image',
			'kindXBITMAP'     : 'X bitmap image',
			'kindPXM'         : 'Pixelmator image',
			// media
			'kindAudio'       : 'Audio media',
			'kindAudioMPEG'   : 'MPEG audio',
			'kindAudioMPEG4'  : 'MPEG-4 audio',
			'kindAudioMIDI'   : 'MIDI audio',
			'kindAudioOGG'    : 'Ogg Vorbis audio',
			'kindAudioWAV'    : 'WAV audio',
			'AudioPlaylist'   : 'MP3 playlist',
			'kindVideo'       : 'Video media',
			'kindVideoDV'     : 'DV movie',
			'kindVideoMPEG'   : 'MPEG movie',
			'kindVideoMPEG4'  : 'MPEG-4 movie',
			'kindVideoAVI'    : 'AVI movie',
			'kindVideoMOV'    : 'Quick Time movie',
			'kindVideoWM'     : 'Windows Media movie',
			'kindVideoFlash'  : 'Flash movie',
			'kindVideoMKV'    : 'Matroska movie',
			'kindVideoOGG'    : 'Ogg movie'
		}
	}
}
/**
 * French translation
 * @author Régis Guyomarch <regisg@gmail.com>
 * @version 2012-05-21
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
	elFinder.prototype.i18.fr = {
		translator : 'Régis Guyomarch &lt;regisg@gmail.com&gt;',
		language   : 'française',
		direction  : 'ltr',
		dateFormat : 'd M, Y H:i',
		fancyDateFormat : '$1 H:i',
		messages   : {
			
			/********************************** errors **********************************/
			'error'                : 'Erreur',
			'errUnknown'           : 'Erreur inconnue.',
			'errUnknownCmd'        : 'Commande inconnue.',
			'errJqui'              : 'Mauvaise configuration de jQuery UI. Les composants Selectable, draggable et droppable doivent être inclus.',
			'errNode'              : 'elFinder requiert que l\'élément DOM ait été créé.',
			'errURL'               : 'Mauvaise configuration d\'elFinder ! L\'option URL n\a pas été définie.',
			'errAccess'            : 'Accès refusé.',
			'errConnect'           : 'Impossible de se connecter au backend.',
			'errAbort'             : 'Connexion interrompue.',
			'errTimeout'           : 'Délai de connexion dépassé.',
			'errNotFound'          : 'Backend non trouvé.',
			'errResponse'          : 'Mauvaise réponse du backend.',
			'errConf'              : 'Mauvaise configuration du backend.',
			'errJSON'              : 'Le module PHP JSON n\'est pas installé.',
			'errNoVolumes'         : 'Aucun volume lisible.',
			'errCmdParams'         : 'Mauvais Paramétrage de la commande "$1".',
			'errDataNotJSON'       : 'Les données ne sont pas au format JSON.',
			'errDataEmpty'         : 'Données inexistantes.',
			'errCmdReq'            : 'La requête au Backend doit comporter le nom de la commande.',
			'errOpen'              : 'Impossible d\'ouvrir "$1".',
			'errNotFolder'         : 'Cet objet n\'est pas un dossier.',
			'errNotFile'           : 'Cet objet n\'est pas un fichier.',
			'errRead'              : 'Impossible de lire "$1".',
			'errWrite'             : 'Impossible d\'écrire dans "$1".',
			'errPerm'              : 'Permission refusée.',
			'errLocked'            : '"$1" est verrouillé et ne peut être déplace ou supprimé.',
			'errExists'            : 'Un fichier nommé "$1" existe déjà.',
			'errInvName'           : 'Nom de fichier incorrect.',
			'errFolderNotFound'    : 'Dossier non trouvé.',
			'errFileNotFound'      : 'Fichier non trouvé.',
			'errTrgFolderNotFound' : 'Dossier destination "$1" non trouvé.',
			'errPopup'             : 'Le navigateur web a empêché l\'ouverture d\'une fenêtre "popup". Pour ouvrir le fichier, modifiez les options du navigateur web.',
			'errMkdir'             : 'Impossible de créer le dossier "$1".',
			'errMkfile'            : 'impossible de créer le fichier "$1".',
			'errRename'            : 'Impossible de renommer "$1".',
			'errCopyFrom'          : 'Interdiction de copier des fichiers depuis le volume "$1".',
			'errCopyTo'            : 'Interdiction copier des fichiers vers le volume "$1".',
			'errUpload'            : 'Erreur lors de l\'envoi du fichier.',
			'errUploadFile'        : 'Impossible d\'envoyer "$1".',
			'errUploadNoFiles'     : 'Aucun fichier a envoyer.',
			'errUploadTotalSize'   : 'Les données dépassent la taille maximale allouée.',
			'errUploadFileSize'    : 'Le fichier dépasse la taille maximale allouée.',
			'errUploadMime'        : 'Type de fichier non autorisé.',
			'errUploadTransfer'    : '"$1" erreur transfert.', 
			'errNotReplace'        : 'L\'objet "$1" existe déjà à cet endroit et ne peut être remplacé par un objet d\'un type différent.', // new
			'errSave'              : 'Impossible de sauvegarder "$1".',
			'errCopy'              : 'Impossible de copier "$1".',
			'errMove'              : 'Impossible de déplacer "$1".',
			'errCopyInItself'      : 'Impossible de copier "$1" sur lui-même.',
			'errRm'                : 'Impossible de supprimer "$1".',
			'errExtract'           : 'Impossible d\'extraire les fichier de "$1".',
			'errArchive'           : 'Impossible de créer l\'archive.',
			'errArcType'           : 'Type d\'archive non supporté.',
			'errNoArchive'         : 'Le fichier n\'est pas une archive, ou c\'est un type d\'archive non supporté.',
			'errCmdNoSupport'      : 'Le Backend ne prend pas en charge cette commande.',
			'errReplByChild'       : 'Le dossier “$1” ne peut pas être remplacé par un élément qu\'il contient.',
			'errArcSymlinks'       : 'Par mesure de sécurité, il est défendu d\'extraire une archive contenant des liens symboliques.',
			'errArcMaxSize'        : 'Les fichiers de l\'archive excèdent la taille maximale autorisée.',
			'errResize'            : 'Impossible de redimensionner "$1".',
			'errUsupportType'      : 'Type de fichier non supporté.',
			'errNotUTF8Content'    : 'Le fichier "$1" n\'est pas en UTF-8, il ne peut être édité.',  // added 9.11.2011
			'errNetMount'          : 'Impossible de monter "$1".', // added 17.04.2012
			'errNetMountNoDriver'  : 'Protocol non supporté.',     // added 17.04.2012
			'errNetMountFailed'    : 'Echec du montage.',         // added 17.04.2012
			'errNetMountHostReq'   : 'Hôte requis.', // added 18.04.2012			
			'errSessionExpires'    : 'Votre session a expiré en raison de son inactivité',
			'errCreatingTempDir'   : 'Impossible de créer le répertoire temporaire : "$1"',
			'errFtpDownloadFile'   : 'Impossible de télécharger le file depuis l\'accès FTP : "$1"',
			'errFtpUploadFile'     : 'Impossible d\'envoyer le fichier vers l\'accès FTP : "$1"',
			'errFtpMkdir'          : 'Impossible de créer un répertoire distant sur l\'accès FTP :"$1"',
			'errArchiveExec'       : 'Erreur lors de l\'archivage des fichiers : "$1"',
			'errExtractExec'       : 'Erreur lors de l\'extraction des fichiers : "$1"',
			'errUploadFile'        : 'Envoi impossible de "$1"',
			
			/******************************* commands names ********************************/
			'cmdarchive'   : 'Créer une archive',
			'cmdback'      : 'Précédent',
			'cmdcopy'      : 'Copier',
			'cmdcut'       : 'Couper',
			'cmddownload'  : 'Télécharger',
			'cmdduplicate' : 'Dupliquer',
			'cmdedit'      : 'Éditer le fichier',
			'cmdextract'   : 'Extraire les fichiers de l\'archive',
			'cmdforward'   : 'Suivant',
			'cmdgetfile'   : 'Sélectionner les fichiers',
			'cmdhelp'      : 'À propose de ce logiciel',
			'cmdhome'      : 'Accueil',
			'cmdinfo'      : 'Informations',
			'cmdmkdir'     : 'Nouveau dossier',
			'cmdmkfile'    : 'Nouveau fichier texte',
			'cmdopen'      : 'Ouvrir',
			'cmdpaste'     : 'Coller',
			'cmdquicklook' : 'Prévisualiser',
			'cmdreload'    : 'Actualiser',
			'cmdrename'    : 'Renommer',
			'cmdrm'        : 'Supprimer',
			'cmdsearch'    : 'Trouver les fichiers',
			'cmdup'        : 'Remonter au dossier parent',
			'cmdupload'    : 'Envoyer les fichiers',
			'cmdview'      : 'Vue',
			'cmdresize'    : 'Redimensionner l\'image',
			'cmdsort'      : 'Trier',
			'cmdnetmount'  : 'Monter un volume réseau',
			
			/*********************************** buttons ***********************************/ 
			'btnClose'  : 'Fermer',
			'btnSave'   : 'Sauvegarder',
			'btnRm'     : 'Supprimer',
			'btnCancel' : 'Annuler',
			'btnNo'     : 'Non',
			'btnYes'    : 'Oui',
			'btnMount'  : 'Monter',  // added 18.04.2012
			
			/******************************** notifications ********************************/
			'ntfopen'     : 'Ouvrir le dossier',
			'ntffile'     : 'Ouvrir le fichier',
			'ntfreload'   : 'Actualiser le contenu du dossier',
			'ntfmkdir'    : 'Création du dossier',
			'ntfmkfile'   : 'Création des fichiers',
			'ntfrm'       : 'Supprimer les fichiers',
			'ntfcopy'     : 'Copier les fichiers',
			'ntfmove'     : 'Déplacer les fichiers',
			'ntfprepare'  : 'Préparation de la copie des fichiers',
			'ntfrename'   : 'Renommer les fichier',
			'ntfupload'   : 'Envoyer les fichiers',
			'ntfdownload' : 'Télécharger les fichiers',
			'ntfsave'     : 'Sauvegarde des fichiers',
			'ntfarchive'  : 'Création de l\'archive',
			'ntfextract'  : 'Extraction des fichiers de l\'archive',
			'ntfsearch'   : 'Recherche des fichiers',
			'ntfsmth'     : 'Fait quelque chose',
			'ntfloadimg'  : 'Chargement de l\' image',
			'ntfnetmount' : 'Monte le volume réseau', // added 18.04.2012			
			
			/************************************ dates **********************************/
			'dateUnknown' : 'Inconnue',
			'Today'       : 'Aujourd\'hui',
			'Yesterday'   : 'Hier',
			'Jan'         : 'Jan',
			'Feb'         : 'Fév',
			'Mar'         : 'Mar',
			'Apr'         : 'Avr',
			'May'         : 'Mai',
			'Jun'         : 'Jun',
			'Jul'         : 'Jul',
			'Aug'         : 'Aoû',
			'Sep'         : 'Sep',
			'Oct'         : 'Oct',
			'Nov'         : 'Nov',
			'Dec'         : 'Déc',

			/******************************** sort variants ********************************/
			'sortname'          : 'par nom', 
			'sortkind'          : 'par type', 
			'sortsize'          : 'par taille',
			'sortdate'          : 'par date',
			'sortFoldersFirst'  : 'Dossiers en premier',
			/********************************** messages **********************************/
			'confirmReq'      : 'Confirmation requise',
			'confirmRm'       : 'Êtes-vous certain de vouloir supprimer les fichiers?<br/>Cela ne peut être annulé!',
			'confirmRepl'     : 'Supprimer l\'ancien fichier par le nouveau?',
			'apllyAll'        : 'Appliquer à tous',
			'name'            : 'Nom',
			'size'            : 'Taille',
			'perms'           : 'Permissions',
			'modify'          : 'Modifié',
			'kind'            : 'Type',
			'read'            : 'Lecture',
			'write'           : 'Écriture',
			'noaccess'        : 'Pas d\'accès',
			'and'             : 'et',
			'unknown'         : 'inconnu',
			'selectall'       : 'Sélectionner tous les fichiers',
			'selectfiles'     : 'Sélectionner le(s) fichier(s)',
			'selectffile'     : 'Sélectionner le premier fichier',
			'selectlfile'     : 'Sélectionner le dernier fichier',
			'viewlist'        : 'Vue listing',
			'viewicons'       : 'Vue icônes',
			'places'          : 'Places',
			'calc'            : 'Calculer', 
			'path'            : 'Chemin',
			'aliasfor'        : 'Raccourcis pour',
			'locked'          : 'Verrouiller',
			'dim'             : 'Dimensions',
			'files'           : 'Fichiers',
			'folders'         : 'Dossiers',
			'items'           : 'Éléments',
			'yes'             : 'oui',
			'no'              : 'non',
			'link'            : 'Lien',
			'searcresult'     : 'Résultat de la recherche',  
			'selected'        : 'Éléments sélectionnés',
			'about'           : 'À propos',
			'shortcuts'       : 'Raccourcis',
			'help'            : 'Aide',
			'webfm'           : 'Gestionnaire de fichier Web',
			'ver'             : 'Version',
			'protocolver'     : 'Version du protocole',
			'homepage'        : 'Page du projet',
			'docs'            : 'Documentation',
			'github'          : 'Forker-nous sur Github',
			'twitter'         : 'Suivez nous sur twitter',
			'facebook'        : 'Joignez-nous facebook',
			'team'            : 'Équipe',
			'chiefdev'        : 'Développeur en chef',
			'developer'       : 'Développeur',
			'contributor'     : 'Contributeur',
			'maintainer'      : 'Mainteneur',
			'translator'      : 'Traducteur',
			'icons'           : 'Icônes',
			'dontforget'      : 'et n\'oubliez pas votre serviette',
			'shortcutsof'     : 'Raccourcis désactivés',
			'dropFiles'       : 'Déposez les fichiers ici',
			'or'              : 'ou',
			'selectForUpload' : 'Sélectionner les fichiers à envoyer',
			'moveFiles'       : 'Déplacer les fichiers',
			'copyFiles'       : 'Copier les fichiers',
			'rmFromPlaces'    : 'Remove from places',
			'aspectRatio'     : 'Aspect ratio',
			'scale'           : 'Mise à l\'échelle',
			'width'           : 'Largeur',
			'height'          : 'Hauteur',
			'resize'          : 'Redimensionner',
			'crop'            : 'Recadrer',
			'rotate'          : 'Rotate',
			'rotate-cw'       : 'Rotate 90 degrees CW',
			'rotate-ccw'      : 'Rotate 90 degrees CCW',
			'degree'          : '°',
			'netMountDialogTitle' : 'Monter un volume réseau', // added 18.04.2012
			'protocol'            : 'Protocole', // added 18.04.2012
			'host'                : 'Hote', // added 18.04.2012
			'port'                : 'Port', // added 18.04.2012
			'user'                : 'Utilisateur', // added 18.04.2012
			'pass'                : 'Mot de passe', // added 18.04.2012
			
			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Inconnu',
			'kindFolder'      : 'Dossier',
			'kindAlias'       : 'Raccourcis',
			'kindAliasBroken' : 'Raccourcis cassé',
			// applications
			'kindApp'         : 'Application',
			'kindPostscript'  : 'Document Postscript',
			'kindMsOffice'    : 'Document Microsoft Office',
			'kindMsWord'      : 'Document Microsoft Word',
			'kindMsExcel'     : 'Document Microsoft Excel',
			'kindMsPP'        : 'Présentation Microsoft Powerpoint',
			'kindOO'          : 'Document Open Office',
			'kindAppFlash'    : 'Application flash',
			'kindPDF'         : 'Portable Document Format (PDF)',
			'kindTorrent'     : 'Fichier Bittorrent',
			'kind7z'          : 'Archive 7z',
			'kindTAR'         : 'Archive TAR',
			'kindGZIP'        : 'Archive GZIP',
			'kindBZIP'        : 'Archive BZIP',
			'kindZIP'         : 'Archive ZIP',
			'kindRAR'         : 'Archive RAR',
			'kindJAR'         : 'Fichier Java JAR',
			'kindTTF'         : 'Police True Type',
			'kindOTF'         : 'Police Open Type',
			'kindRPM'         : 'Package RPM',
			// texts
			'kindText'        : 'Document Text',
			'kindTextPlain'   : 'Texte non formaté',
			'kindPHP'         : 'Source PHP',
			'kindCSS'         : 'Cascading style sheet',
			'kindHTML'        : 'Document HTML',
			'kindJS'          : 'Source Javascript',
			'kindRTF'         : 'Rich Text Format',
			'kindC'           : 'Source C',
			'kindCHeader'     : 'Source header C',
			'kindCPP'         : 'Source C++',
			'kindCPPHeader'   : 'Source header C++',
			'kindShell'       : 'Shell script Unix',
			'kindPython'      : 'Source Python',
			'kindJava'        : 'Source Java',
			'kindRuby'        : 'Source Ruby',
			'kindPerl'        : 'Script Perl',
			'kindSQL'         : 'Source SQL',
			'kindXML'         : 'Document XML',
			'kindAWK'         : 'Source AWK',
			'kindCSV'         : 'CSV',
			'kindDOCBOOK'     : 'Document Docbook XML',
			// images
			'kindImage'       : 'Image',
			'kindBMP'         : 'Image BMP',
			'kindJPEG'        : 'Image JPEG',
			'kindGIF'         : 'Image GIF',
			'kindPNG'         : 'Image PNG',
			'kindTIFF'        : 'Image TIFF',
			'kindTGA'         : 'Image TGA',
			'kindPSD'         : 'Image Adobe Photoshop',
			'kindXBITMAP'     : 'Image X bitmap',
			'kindPXM'         : 'Image Pixelmator',
			// media
			'kindAudio'       : 'Son',
			'kindAudioMPEG'   : 'Son MPEG',
			'kindAudioMPEG4'  : 'Son MPEG-4',
			'kindAudioMIDI'   : 'Son MIDI',
			'kindAudioOGG'    : 'Son Ogg Vorbis',
			'kindAudioWAV'    : 'Son WAV',
			'AudioPlaylist'   : 'Liste de lecture audio',
			'kindVideo'       : 'Vidéo',
			'kindVideoDV'     : 'Vidéo DV',
			'kindVideoMPEG'   : 'Vidéo MPEG',
			'kindVideoMPEG4'  : 'Vidéo MPEG-4',
			'kindVideoAVI'    : 'Vidéo AVI',
			'kindVideoMOV'    : 'Vidéo Quick Time',
			'kindVideoWM'     : 'Vidéo Windows Media',
			'kindVideoFlash'  : 'Vidéo Flash',
			'kindVideoMKV'    : 'Vidéo Matroska',
			'kindVideoOGG'    : 'Vidéo Ogg'
		}
	}
}

/**
 * Hungarian translation
 * @author Gáspár Lajos <info@glsys.eu>
 * @version 2011-09-10
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
	elFinder.prototype.i18.hu = {
		translator : 'Gáspár Lajos &lt;info@glsys.eu&gt;',
		language   : 'magyar',
		direction  : 'ltr',
		messages   : {
			
			/********************************** errors **********************************/
			'error'                : 'Hiba',
			'errUnknown'           : 'Ismeretlen hiba.',
			'errUnknownCmd'        : 'Ismeretlen parancs.',
			'errJqui'              : 'Hibás jQuery UI konfiguráció. A "selectable", "draggable" és a "droppable" komponensek szükségesek.',
			'errNode'              : 'elFinder requires DOM Element to be created.',
			'errURL'               : 'Hibás elFinder konfiguráció! "URL" paraméter nincs megadva.',
			'errAccess'            : 'Hozzáférés megtagadva.',
			'errConnect'           : 'Nem sikerült csatlakozni a kiszolgálóhoz.',
			'errAbort'             : 'Kapcsolat megszakítva.',
			'errTimeout'           : 'Kapcsolat időtúllépés.',
			'errNotFound'          : 'A backend nem elérhető.',
			'errResponse'          : 'Hibás backend válasz.',
			'errConf'              : 'Invalid backend configuration.',
			'errJSON'              : 'PHP JSON module not installed.',
			'errNoVolumes'         : 'Readable volumes not available.',
			'errCmdParams'         : 'Invalid parameters for command "$1".',
			'errDataNotJSON'       : 'A válasz nem JSON típusú adat.',
			'errDataEmpty'         : 'Nem érkezett adat.',
			'errCmdReq'            : 'Backend request requires command name.',
			'errOpen'              : '"$1" megnyitása nem sikerült.',
			'errNotFolder'         : 'Object is not a folder.',
			'errNotFile'           : 'Object is not a file.',
			'errRead'              : 'Unable to read "$1".',
			'errWrite'             : 'Unable to write into "$1".',
			'errPerm'              : 'Engedély megtagadva.',
			'errLocked'            : '"$1" is locked and can not be renamed, moved or removed.',
			'errExists'            : 'File named "$1" already exists.',
			'errInvName'           : 'Invalid file name.',
			'errFolderNotFound'    : 'Folder not found.',
			'errFileNotFound'      : 'File not found.',
			'errTrgFolderNotFound' : 'Target folder "$1" not found.',
			'errPopup'             : 'Browser prevented opening popup window. To open file enable it in browser options.',
			'errMkdir'             : 'Unable to create folder "$1".',
			'errMkfile'            : 'Unable to create file "$1".',
			'errRename'            : 'Unable to rename "$1".',
			'errCopyFrom'          : 'Copying files from volume "$1" not allowed.',
			'errCopyTo'            : 'Copying files to volume "$1" not allowed.',
			'errUploadCommon'      : 'Feltöltési hiba.',
			'errUpload'            : 'Nem sikerült a fájlt feltölteni. ($1)',
			'errUploadNoFiles'     : 'No files found for upload.',
			'errMaxSize'           : 'Data exceeds the maximum allowed size.',
			'errFileMaxSize'       : 'File exceeds maximum allowed size.',
			'errUploadMime'        : 'File type not allowed.',
			'errUploadTransfer'    : '"$1" transfer error.', 
			'errSave'              : '"$1" mentése nem sikerült.',
			'errCopy'              : '"$1" másolása nem sikerült.',
			'errMove'              : '"$1" áthelyezése nem sikerült.',
			'errCopyInItself'      : '"$1" nem másolható saját magára.',
			'errRm'                : '"$1" törlése nem sikerült.',
			'errExtract'           : 'Unable to extract files from "$1".',
			'errArchive'           : 'Unable to create archive.',
			'errArcType'           : 'Nem támogatott archívum típus.',
			'errNoArchive'         : 'File is not archive or has unsupported archive type.',
			'errCmdNoSupport'      : 'Backend does not support this command.',
			
			/******************************* commands names ********************************/
			'cmdarchive'   : 'Archívum létrehozása',
			'cmdback'      : 'Vissza',
			'cmdcopy'      : 'Másolás',
			'cmdcut'       : 'Kivágás',
			'cmddownload'  : 'Letöltés',
			'cmdduplicate' : 'Másolat készítés',
			'cmdedit'      : 'Szerkesztés',
			'cmdextract'   : 'Kibontás',
			'cmdforward'   : 'Előre',
			'cmdgetfile'   : 'Fájlok kijelölése',
			'cmdhelp'      : 'Erről a programról...',
			'cmdhome'      : 'Főkönyvtár',
			'cmdinfo'      : 'Tulajdonságok',
			'cmdmkdir'     : 'Új mappa',
			'cmdmkfile'    : 'Új szöveges dokumentum',
			'cmdopen'      : 'Megnyitás',
			'cmdpaste'     : 'Beillesztés',
			'cmdquicklook' : 'Előnézet',
			'cmdreload'    : 'Frissítés',
			'cmdrename'    : 'Átnevezés',
			'cmdrm'        : 'Törlés',
			'cmdsearch'    : 'Keresés',
			'cmdup'        : 'Ugrás a szülőmappába',
			'cmdupload'    : 'Feltöltés',
			'cmdview'      : 'View',
			
			/*********************************** buttons ***********************************/ 
			'btnClose'  : 'Bezár',
			'btnSave'   : 'Ment',
			'btnRm'     : 'Töröl',
			'btnCancel' : 'Mégsem',
			'btnNo'     : 'Nem',
			'btnYes'    : 'Igen',
			
			/******************************** notifications ********************************/
			'ntfopen'     : 'Mappa megnyitás',
			'ntffile'     : 'Fájl megnyitás',
			'ntfreload'   : 'Reload folder content',
			'ntfmkdir'    : 'Mappa létrehozása',
			'ntfmkfile'   : 'Creating files',
			'ntfrm'       : 'Fájlok törélse',
			'ntfcopy'     : 'Fájlok másolása',
			'ntfmove'     : 'Fájlok áthelyezése',
			'ntfprepare'  : 'Prepare to copy files',
			'ntfrename'   : 'Fájlok átnevezése',
			'ntfupload'   : 'Fájlok feltöltése',
			'ntfdownload' : 'Fájlok letöltése',
			'ntfsave'     : 'Fájlok mentése',
			'ntfarchive'  : 'Archívum létrehozása',
			'ntfextract'  : 'Kibontás archívumból',
			'ntfsearch'   : 'Fájlok keresése',
			'ntfsmth'     : 'Doing something >_<',
			
			/************************************ dates **********************************/
			'dateUnknown' : 'Ismeretlen',
			'Today'       : 'Ma',
			'Yesterday'   : 'Tegnap',
			'Jan'         : 'jan',
			'Feb'         : 'febr',
			'Mar'         : 'márc',
			'Apr'         : 'ápr',
			'May'         : 'máj',
			'Jun'         : 'jún',
			'Jul'         : 'júl',
			'Aug'         : 'aug',
			'Sep'         : 'szept',
			'Oct'         : 'okt',
			'Nov'         : 'nov',
			'Dec'         : 'dec',

			/********************************** messages **********************************/
			'confirmReq'      : 'Confirmation required',
			'confirmRm'       : 'Valóban törölni akarja a kijelölt adatokat?<br/>Ez később nem fordítható vissza!',
			'confirmRepl'     : 'Replace old file with new one?',
			'apllyAll'        : 'Apply to all',
			'name'            : 'Név',
			'size'            : 'Méret',
			'perms'           : 'Jogok',
			'modify'          : 'Módosítva',
			'kind'            : 'Típus',
			'read'            : 'olvasás',
			'write'           : 'írás',
			'noaccess'        : '-',
			'and'             : 'és',
			'unknown'         : 'ismeretlen',
			'selectall'       : 'Összes kijelölése',
			'selectfiles'     : 'Fájlok kijelölése',
			'selectffile'     : 'Első fájl kijelölése',
			'selectlfile'     : 'Utolsó fájl kijelölése',
			'viewlist'        : 'Lista nézet',
			'viewicons'       : 'Ikon nézet',
			'places'          : 'Helyek',
			'calc'            : 'Calculate',
			'path'            : 'Útvonal',
			'aliasfor'        : 'Cél',
			'locked'          : 'Zárolt',
			'dim'             : 'Méretek',
			'files'           : 'Fájlok',
			'folders'         : 'Mappák',
			'items'           : 'Elemek',
			'yes'             : 'igen',
			'no'              : 'nem',
			'link'            : 'Parancsikon',
			'searcresult'     : 'Keresés eredménye',
			'selected'        : 'kijelölt elemek',
			'about'           : 'Névjegy',
			'shortcuts'       : 'Gyorsbillenytyűk',
			'help'            : 'Súgó',
			'webfm'           : 'Web file manager',
			'ver'             : 'Verzió',
			'protocolver'     : 'protokol verzió',
			'homepage'        : 'Projekt honlap',
			'docs'            : 'Dokumentáció',
			'github'          : 'Hozz létre egy új verziót a Github-on',
			'twitter'         : 'Kövess minket a twitter-en',
			'facebook'        : 'Csatlakozz hozzánk a facebook-on',
			'team'            : 'Csapat',
			'chiefdev'        : 'vezető fejlesztő',
			'developer'       : 'fejlesztő',
			'contributor'     : 'külsős hozzájáruló',
			'maintainer'      : 'karbantartó',
			'translator'      : 'fordító',
			'icons'           : 'Ikonok',
			'dontforget'      : 'törölközőt ne felejts el hozni!',
			'shortcutsof'     : 'Shortcuts disabled',
			'dropFiles'       : 'Fájlok dobása ide',
			'or'              : 'vagy',
			'selectForUpload' : 'fájlok böngészése',
			'moveFiles'       : 'Fájlok áthelyezése',
			'copyFiles'       : 'Fájlok másolása',
			
			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Ismeretlen',
			'kindFolder'      : 'Mappa',
			'kindAlias'       : 'Parancsikon',
			'kindAliasBroken' : 'Hibás parancsikon',
			// applications
			'kindApp'         : 'Alkalmazás',
			'kindPostscript'  : 'Postscript dokumentum',
			'kindMsOffice'    : 'Microsoft Office dokumentum',
			'kindMsWord'      : 'Microsoft Word dokumentum',
			'kindMsExcel'     : 'Microsoft Excel dokumentum',
			'kindMsPP'        : 'Microsoft Powerpoint bemutató',
			'kindOO'          : 'Open Office dokumentum',
			'kindAppFlash'    : 'Flash alkalmazás',
			'kindPDF'         : 'Portable Document Format (PDF)',
			'kindTorrent'     : 'Bittorrent fájl',
			'kind7z'          : '7z archívum',
			'kindTAR'         : 'TAR archívum',
			'kindGZIP'        : 'GZIP archívum',
			'kindBZIP'        : 'BZIP archívum',
			'kindZIP'         : 'ZIP archívum',
			'kindRAR'         : 'RAR archívum',
			'kindJAR'         : 'Java JAR fájl',
			'kindTTF'         : 'True Type font',
			'kindOTF'         : 'Open Type font',
			'kindRPM'         : 'RPM csomag',
			// texts
			'kindText'        : 'Szöveges dokumentum',
			'kindTextPlain'   : 'Plain text',
			'kindPHP'         : 'PHP forráskód',
			'kindCSS'         : 'Cascading style sheet',
			'kindHTML'        : 'HTML dokumentum',
			'kindJS'          : 'Javascript forráskód',
			'kindRTF'         : 'Rich Text Format',
			'kindC'           : 'C forráskód',
			'kindCHeader'     : 'C header forráskód',
			'kindCPP'         : 'C++ forráskód',
			'kindCPPHeader'   : 'C++ header forráskód',
			'kindShell'       : 'Unix shell script',
			'kindPython'      : 'Python forráskód',
			'kindJava'        : 'Java forráskód',
			'kindRuby'        : 'Ruby forráskód',
			'kindPerl'        : 'Perl script',
			'kindSQL'         : 'SQL forráskód',
			'kindXML'         : 'XML dokumentum',
			'kindAWK'         : 'AWK forráskód',
			'kindCSV'         : 'Comma separated values',
			'kindDOCBOOK'     : 'Docbook XML dokumentum',
			// images
			'kindImage'       : 'Kép',
			'kindBMP'         : 'BMP kép',
			'kindJPEG'        : 'JPEG kép',
			'kindGIF'         : 'GIF kép',
			'kindPNG'         : 'PNG kép',
			'kindTIFF'        : 'TIFF kép',
			'kindTGA'         : 'TGA kép',
			'kindPSD'         : 'Adobe Photoshop kép',
			'kindXBITMAP'     : 'X bitmap image',
			'kindPXM'         : 'Pixelmator image',
			// media
			'kindAudio'       : 'Hangfájl',
			'kindAudioMPEG'   : 'MPEG hangfájl',
			'kindAudioMPEG4'  : 'MPEG-4 hangfájl',
			'kindAudioMIDI'   : 'MIDI hangfájl',
			'kindAudioOGG'    : 'Ogg Vorbis hangfájl',
			'kindAudioWAV'    : 'WAV hangfájl',
			'AudioPlaylist'   : 'MP3 playlist',
			'kindVideo'       : 'Film',
			'kindVideoDV'     : 'DV film',
			'kindVideoMPEG'   : 'MPEG film',
			'kindVideoMPEG4'  : 'MPEG-4 film',
			'kindVideoAVI'    : 'AVI film',
			'kindVideoMOV'    : 'Quick Time film',
			'kindVideoWM'     : 'Windows Media film',
			'kindVideoFlash'  : 'Flash film',
			'kindVideoMKV'    : 'Matroska film',
			'kindVideoOGG'    : 'Ogg film'
		}
	}
}

/**
 * Italian translation
 * @author Alberto Tocci <alberto.tocci@gmail.com>
 * @version 2012-05-09
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
	elFinder.prototype.i18.it = {
		translator : 'Alberto Tocci (alberto.tocci@gmail.com)',
		language   : 'Italiano',
		direction  : 'ltr',
		dateFormat : 'd.m.Y H:i',
		fancyDateFormat : '$1 H:i',
		messages   : {

			/********************************** errors **********************************/
			'error'                : 'Errore',
			'errUnknown'           : 'Errore sconosciuto.',
			'errUnknownCmd'        : 'Comando sconosciuto.',
			'errJqui'              : 'Configurazione JQuery UI non valida. Devono essere inclusi i plugin Selectable, Draggable e Droppable.',
			'errNode'              : 'elFinder necessita dell\'elemento DOM per essere inizializzato.',
			'errURL'               : 'Configurazione non valida.Il parametro URL non è settato.',
			'errAccess'            : 'Accesso non consentito.',
			'errConnect'           : 'Impossibile collegarsi al backend.',
			'errAbort'             : 'Connessione terminata.',
			'errTimeout'           : 'Timeout di connessione.',
			'errNotFound'          : 'Backend non trovato.',
			'errResponse'          : 'Risposta non valida dal backend.',
			'errConf'              : 'Configurazione backend non valida.',
			'errJSON'              : 'Modulo PHP JSON non installato.',
			'errNoVolumes'         : 'Non è stato possibile leggere i volumi.',
			'errCmdParams'         : 'Parametri non validi per il comando "$1".',
			'errDataNotJSON'       : 'I dati non sono nel formato JSON.',
			'errDataEmpty'         : 'Stringa vuota.',
			'errCmdReq'            : 'Backend request requires command name.',
			'errOpen'              : 'Impossibile aprire "$1".',
			'errNotFolder'         : 'L\'oggetto non è una cartella..',
			'errNotFile'           : 'L\'oggetto non è un file.',
			'errRead'              : 'Impossibile leggere "$1".',
			'errWrite'             : 'Non è possibile scrivere in "$1".',
			'errPerm'              : 'Permesso negato.',
			'errLocked'            : '"$1" è bloccato e non può essere rinominato, spostato o eliminato.',
			'errExists'            : 'Il file "$1" è già esistente.',
			'errInvName'           : 'Nome file non valido.',
			'errFolderNotFound'    : 'Cartella non trovata.',
			'errFileNotFound'      : 'File non trovato.',
			'errTrgFolderNotFound' : 'La cartella di destinazione"$1" non è stata trovata.',
			'errPopup'             : 'Il tuo Browser non consente di aprire finestre di pop-up. Per aprire il file abilita questa opzione nelle impostazioni del tuo Browser.',
			'errMkdir'             : 'Impossibile creare la cartella "$1".',
			'errMkfile'            : 'Impossibile creare il file "$1".',
			'errRename'            : 'Impossibile rinominare "$1".',
			'errCopyFrom'          : 'Non è possibile copiare file da "$1".',
			'errCopyTo'            : 'Non è possibile copiare file in "$1".',
			'errUploadCommon'      : 'Errore di Caricamento.',
			'errUpload'            : 'Impossibile Caricare "$1".',
			'errUploadNoFiles'     : 'Non sono stati specificati file da caricare.',
			'errMaxSize'           : 'La dimensione totale dei file supera il limite massimo consentito.',
			'errFileMaxSize'       : 'Le dimensioni del file superano il massimo consentito.',
			'errUploadMime'        : 'FileType non consentito.',
			'errUploadTransfer'    : 'Trasferimento errato del file "$1".', 
			'errSave'              : 'Impossibile salvare "$1".',
			'errCopy'              : 'Impossibile copiare "$1".',
			'errMove'              : 'Impossibile spostare "$1".',
			'errCopyInItself'      : 'Sorgente e destinazione risultato essere uguali.',
			'errRm'                : 'Impossibile rimuovere "$1".',
			'errExtract'           : 'Impossibile estrarre file da "$1".',
			'errArchive'           : 'Impossibile creare archivio.',
			'errArcType'           : 'Tipo di archivio non supportato.',
			'errNoArchive'         : 'Il file non è un archivio o contiene file non supportati.',
			'errCmdNoSupport'      : 'Il Backend non supporta questo comando.',
			'errReplByChild'       : 'La cartella $1 non può essere sostituita da un oggetto in essa contenuto.',
			'errArcSymlinks'       : 'Per questioni di sicurezza non è possibile estrarre archivi che contengono collegamenti..',
			'errArcMaxSize'        : 'La dimensione dell\'archivio supera le massime dimensioni consentite.',
			'errResize'            : 'Impossibile ridimensionare "$1".',
			'errUsupportType'      : 'FileType non supportato.',

			/******************************* commands names ********************************/
			'cmdarchive'   : 'Crea Archivio',
			'cmdback'      : 'Indietro',
			'cmdcopy'      : 'Copia',
			'cmdcut'       : 'Taglia',
			'cmddownload'  : 'Download',
			'cmdduplicate' : 'Duplica',
			'cmdedit'      : 'Modifica File',
			'cmdextract'   : 'Estrai Archivio',
			'cmdforward'   : 'Avanti',
			'cmdgetfile'   : 'Seleziona File',
			'cmdhelp'      : 'About',
			'cmdhome'      : 'Home',
			'cmdinfo'      : 'Informazioni',
			'cmdmkdir'     : 'Nuova cartella',
			'cmdmkfile'    : 'Nuovo file di testo',
			'cmdopen'      : 'Apri',
			'cmdpaste'     : 'Incolla',
			'cmdquicklook' : 'Anteprima',
			'cmdreload'    : 'Ricarica',
			'cmdrename'    : 'Rinomina',
			'cmdrm'        : 'Cancella',
			'cmdsearch'    : 'Ricerca file',
			'cmdup'        : 'Vai alla directory padre',
			'cmdupload'    : 'Carica File',
			'cmdview'      : 'Visualizza',
			'cmdresize'    : 'Ridimensiona Immagine',
			'cmdsort'      : 'Ordina',

			/*********************************** buttons ***********************************/ 
			'btnClose'  : 'Chiudi',
			'btnSave'   : 'Salva',
			'btnRm'     : 'Rimuovi',
			'btnApply'  : 'Applica',
			'btnCancel' : 'Cancella',
			'btnNo'     : 'No',
			'btnYes'    : 'Si',

			/******************************** notifications ********************************/
			'ntfopen'     : 'Apri cartella',
			'ntffile'     : 'Apri file',
			'ntfreload'   : 'Ricarica il contenuto della cartella',
			'ntfmkdir'    : 'Creazione delle directory in corso',
			'ntfmkfile'   : 'Creazione dei files in corso',
			'ntfrm'       : 'Cancellazione files in corso',
			'ntfcopy'     : 'Copia file in corso',
			'ntfmove'     : 'Spostamento file in corso',
			'ntfprepare'  : 'Inizializzando la copia dei file.',
			'ntfrename'   : 'Sto rinominando i file',
			'ntfupload'   : 'Caricamento file in corso',
			'ntfdownload' : 'Downloading file in corso',
			'ntfsave'     : 'Salvataggio file in corso',
			'ntfarchive'  : 'Creazione archivio in corso',
			'ntfextract'  : 'Estrazione file dall\'archivio in corso',
			'ntfsearch'   : 'Ricerca files in corso',
			'ntfsmth'     : 'Operazione in corso. Attendere...',
			'ntfloadimg'  : 'Caricamento immagine in corso',

			/************************************ dates **********************************/
			'dateUnknown' : 'sconosciuto',
			'Today'       : 'Oggi',
			'Yesterday'   : 'Ieri',
			'Jan'         : 'Gen',
			'Feb'         : 'Feb',
			'Mar'         : 'Mar',
			'Apr'         : 'Apr',
			'May'         : 'Mag',
			'Jun'         : 'Giu',
			'Jul'         : 'Lug',
			'Aug'         : 'Ago',
			'Sep'         : 'Set',
			'Oct'         : 'Ott',
			'Nov'         : 'Nov',
			'Dec'         : 'Dic',
			'January'     : 'Gennaio',
			'February'    : 'Febbraio',
			'March'       : 'Marzo',
			'April'       : 'Aprile',
			'May'         : 'Maggio',
			'June'        : 'Giugno',
			'July'        : 'Luglio',
			'August'      : 'Agosto',
			'September'   : 'Settembre',
			'October'     : 'Ottobre',
			'November'    : 'Novembre',
			'December'    : 'Dicembre',
			'Sunday'      : 'Domenica', 
			'Monday'      : 'Lunedì', 
			'Tuesday'     : 'Martedì', 
			'Wednesday'   : 'Mercoledì', 
			'Thursday'    : 'Giovedì', 
			'Friday'      : 'Venerdì', 
			'Saturday'    : 'Sabato',
			'Sun'         : 'Dom', 
			'Mon'         : 'Lun', 
			'Tue'         : 'Mar', 
			'Wed'         : 'Mer', 
			'Thu'         : 'Gio', 
			'Fri'         : 'Ven', 
			'Sat'         : 'Sab',
			/******************************** sort variants ********************************/
			'sortnameDirsFirst' : 'per nome (cartelle in testa)', 
			'sortkindDirsFirst' : 'per tipo (cartelle in testa)', 
			'sortsizeDirsFirst' : 'per dimensione (cartelle in testa)', 
			'sortdateDirsFirst' : 'per data (cartelle in testa)', 
			'sortname'          : 'per nome', 
			'sortkind'          : 'per tipo', 
			'sortsize'          : 'per dimensione',
			'sortdate'          : 'per data',

			/********************************** messages **********************************/
			'confirmReq'      : 'Conferma richiesta',
			'confirmRm'       : 'Sei sicuro di voler rimuovere i file?<br />L\'operazione non è reversibile!',
			'confirmRepl'     : 'Sostituire i file ?',
			'apllyAll'        : 'Applica a tutti',
			'name'            : 'Nome',
			'size'            : 'Dimensione',
			'perms'           : 'Permessi',
			'modify'          : 'Modificato il',
			'kind'            : 'Tipo',
			'read'            : 'lettura',
			'write'           : 'scrittura',
			'noaccess'        : 'nessun accesso',
			'and'             : 'e',
			'unknown'         : 'sconosciuto',
			'selectall'       : 'Seleziona tutti i file',
			'selectfiles'     : 'Seleziona file',
			'selectffile'     : 'Seleziona il primo file',
			'selectlfile'     : 'Seleziona l\'ultimo file',
			'viewlist'        : 'Visualizza Elenco',
			'viewicons'       : 'Visualizza Icone',
			'places'          : 'Places',
			'calc'            : 'Calcola', 
			'path'            : 'Percorso',
			'aliasfor'        : 'Alias per',
			'locked'          : 'Bloccato',
			'dim'             : 'Dimensioni',
			'files'           : 'File',
			'folders'         : 'Cartelle',
			'items'           : 'Oggetti',
			'yes'             : 'si',
			'no'              : 'no',
			'link'            : 'Collegamento',
			'searcresult'     : 'Risultati ricerca',  
			'selected'        : 'oggetti selezionati',
			'about'           : 'About',
			'shortcuts'       : 'Scorciatoie',
			'help'            : 'Help',
			'webfm'           : 'Web file manager',
			'ver'             : 'Versione',
			'protocol'        : 'versione protocollo',
			'homepage'        : 'Home del progetto',
			'docs'            : 'Documentazione',
			'github'          : 'Seguici su Github',
			'twitter'         : 'Seguici su Twitter',
			'facebook'        : 'Seguici su Facebook',
			'team'            : 'Team',
			'chiefdev'        : 'sviluppatore capo',
			'developer'       : 'sviluppatore',
			'contributor'     : 'collaboratore',
			'maintainer'      : 'maintainer',
			'translator'      : 'traduttore',
			'icons'           : 'Icone',
			'dontforget'      : 'e non dimenticate di portare l\'asciugamano',
			'shortcutsof'     : 'Scorciatoie disabilitate',
			'dropFiles'       : 'Trascina i file qui',
			'or'              : 'o',
			'selectForUpload' : 'Seleziona file da caricare',
			'moveFiles'       : 'Sposta file',
			'copyFiles'       : 'Copia file',
			'rmFromPlaces'    : 'Rimuovi da places',
			'untitled folder' : 'cartella senza titolo',
			'untitled file.txt' : 'file senza titolo.txt',
			'aspectRatio'     : 'Proporzioni',
			'scale'           : 'Scala',
			'width'           : 'Larghezza',
			'height'          : 'Altezza',
			'mode'            : 'Modalità',
			'resize'          : 'Ridimensione',
			'crop'            : 'Ritaglia',
			'rotate'          : 'Ruota',
			'rotate-cw'       : 'Ruota di 90° in senso orario',
			'rotate-ccw'      : 'Ruota di 90° in senso antiorario',
			'degree'          : 'Gradi',

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Sconosciuto',
			'kindFolder'      : 'Cartella',
			'kindAlias'       : 'Alias',
			'kindAliasBroken' : 'Alias guasto',
			// applications
			'kindApp'         : 'Applicazione',
			'kindPostscript'  : 'Documento Postscript',
			'kindMsOffice'    : 'Documento Microsoft Office',
			'kindMsWord'      : 'Documento Microsoft Word',
			'kindMsExcel'     : 'Documento Microsoft Excel',
			'kindMsPP'        : 'Presentazione Microsoft Powerpoint',
			'kindOO'          : 'Documento Open Office',
			'kindAppFlash'    : 'Applicazione Flash',
			'kindPDF'         : 'Documento PDF',
			'kindTorrent'     : 'File Bittorrent',
			'kind7z'          : 'Archivio 7z',
			'kindTAR'         : 'Archivio TAR',
			'kindGZIP'        : 'Archivio GZIP',
			'kindBZIP'        : 'Archivio BZIP',
			'kindZIP'         : 'Archivio ZIP',
			'kindRAR'         : 'Archivio RAR',
			'kindJAR'         : 'File Java JAR',
			'kindTTF'         : 'Font True Type',
			'kindOTF'         : 'Font Open Type',
			'kindRPM'         : 'Pacchetto RPM',
			// texts
			'kindText'        : 'Documento di testo',
			'kindTextPlain'   : 'Testo Semplice',
			'kindPHP'         : 'File PHP',
			'kindCSS'         : 'File CSS (Cascading Style Sheet)',
			'kindHTML'        : 'Documento HTML',
			'kindJS'          : 'File Javascript',
			'kindRTF'         : 'File RTF (Rich Text Format)',
			'kindC'           : 'File C',
			'kindCHeader'     : 'File C (header)',
			'kindCPP'         : 'File C++',
			'kindCPPHeader'   : 'File C++ (header)',
			'kindShell'       : 'Script Unix shell',
			'kindPython'      : 'File Python',
			'kindJava'        : 'File Java',
			'kindRuby'        : 'File Ruby',
			'kindPerl'        : 'File Perl',
			'kindSQL'         : 'File SQL',
			'kindXML'         : 'File XML',
			'kindAWK'         : 'File AWK',
			'kindCSV'         : 'File CSV (Comma separated values)',
			'kindDOCBOOK'     : 'File Docbook XML',
			// images
			'kindImage'       : 'Immagine',
			'kindBMP'         : 'Immagine BMP',
			'kindJPEG'        : 'Immagine JPEG',
			'kindGIF'         : 'Immagine GIF',
			'kindPNG'         : 'Immagine PNG',
			'kindTIFF'        : 'Immagine TIFF',
			'kindTGA'         : 'Immagine TGA',
			'kindPSD'         : 'Immagine Adobe Photoshop',
			'kindXBITMAP'     : 'Immagine X bitmap',
			'kindPXM'         : 'Immagine Pixelmator',
			// media
			'kindAudio'       : 'File Audio',
			'kindAudioMPEG'   : 'Audio MPEG',
			'kindAudioMPEG4'  : 'Audio MPEG-4',
			'kindAudioMIDI'   : 'Audio MIDI',
			'kindAudioOGG'    : 'Audio Ogg Vorbis',
			'kindAudioWAV'    : 'Audio WAV',
			'AudioPlaylist'   : 'Playlist MP3',
			'kindVideo'       : 'File Video',
			'kindVideoDV'     : 'Filmato DV',
			'kindVideoMPEG'   : 'Filmato MPEG',
			'kindVideoMPEG4'  : 'Filmato MPEG-4',
			'kindVideoAVI'    : 'Filmato AVI',
			'kindVideoMOV'    : 'Filmato Quick Time',
			'kindVideoWM'     : 'Filmato Windows Media',
			'kindVideoFlash'  : 'Filmato Flash',
			'kindVideoMKV'    : 'Filmato Matroska',
			'kindVideoOGG'    : 'Filmato Ogg'
		}
	}
}
/**
 * Japanese translation
 * @author Tomoaki Yoshida <info@yoshida-studio.jp>, Naoki Sawada <hypweb@gmail.com>
 * @version 2012-08-15
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
	elFinder.prototype.i18.jp = {
		translator : 'Tomoaki Yoshida &lt;info@yoshida-studio.jp&gt;',
		language   : 'Japanese',
		direction  : 'ltr',
		dateFormat : 'Y/m/d h:i A', // 2012/04/11 05:27 PM
		fancyDateFormat : '$1 h:i A', // will produce smth like: 今日 12:25 PM
		messages   : {
			
			/********************************** errors **********************************/
			'error'                : 'エラー',
			'errUnknown'           : '不明なエラーです',
			'errUnknownCmd'        : '不明なコマンドです',
			'errJqui'              : '無効なjQuery UI コンフィグレーションです。セレクタブルコンポーネント、ドラッガブルコンポーネント、ドロッパブルコンポーネントがあるかを確認して下さい',
			'errNode'              : 'elFinderはDOM Elementが必要です',
			'errURL'               : '無効なelFinder コンフィグレーションです! URLを設定してください',
			'errAccess'            : 'アクセスが拒否されました',
			'errConnect'           : 'バックエンドとの接続ができません',
			'errAbort'             : '接続が中断されました',
			'errTimeout'           : '接続がタイムアウトしました.',
			'errNotFound'          : 'バックエンドが見つかりません',
			'errResponse'          : '無効なバックエンドコンフィグレーションです',
			'errConf'              : '無効なバックエンドコンフィグレーションです',
			'errJSON'              : 'PHP JSON モジュールがインストールされていません',
			'errNoVolumes'         : '読み込み可能なボリュームが入手できません',
			'errCmdParams'         : 'コマンド "$1"のパラメーターが無効です',
			'errDataNotJSON'       : 'JSONデータではありません',
			'errDataEmpty'         : '空のデータです',
			'errCmdReq'            : 'バックエンドリクエストがコマンド名を要求しています',
			'errOpen'              : '"$1"を開くことができません',
			'errNotFolder'         : 'オブジェクトがフォルダーではありません',
			'errNotFile'           : 'オブジェクトがファイルではありません',
			'errRead'              : '"$1"を読むことができません',
			'errWrite'             : '"$1"に書きこむことができません',
			'errPerm'              : '権限がありません',
			'errLocked'            : '"$1" はロックされているので名前の変更、移動、削除ができません',
			'errExists'            : '"$1"というファイル名はすでに存在しています',
			'errInvName'           : '無効なファイル名です',
			'errFolderNotFound'    : 'フォルダーが見つかりません',
			'errFileNotFound'      : 'ファイルが見つかりません',
			'errTrgFolderNotFound' : 'ターゲットとするフォルダー "$1" が見つかりません',
			'errPopup'             : 'ポップアップウィンドウが開けません。ファイルを開くにはブラウザの設定を変更してください',
			'errMkdir'             : '"$1"フォルダーを作成することができません',
			'errMkfile'            : '"$1"ファイルを作成することができません',
			'errRename'            : '"$1"の名前を変更することができません',
			'errCopyFrom'          : '"$1"からのファイルコピーが許可されていません',
			'errCopyTo'            : '"$1"へのファイルコピーが許可されていません',
			'errUpload'            : 'アップロードエラー',  // old name - errUploadCommon
			'errUploadFile'        : '"$1"がアップロードできません', // old name - errUpload
			'errUploadNoFiles'     : 'アップロードされたファイルがありません',
			'errUploadTotalSize'   : 'データが許容サイズを超えています', // old name - errMaxSize
			'errUploadFileSize'    : 'ファイルが許容サイズを超えています', //  old name - errFileMaxSize
			'errUploadMime'        : '許可されていないファイル形式です',
			'errUploadTransfer'    : '"$1" 転送エラーです', 
			'errNotReplace'        : 'アイテム "$1" は、すでにこの場所にありますがアイテムのタイプが違うので置き換えることはできません', // new
			'errReplace'           : '"$1"を置き換えることができません',
			'errSave'              : '"$1"を保存することができません',
			'errCopy'              : '"$1"をコピーすることができません',
			'errMove'              : '"$1"を移動することができません',
			'errCopyInItself'      : '"$1"をそれ自身の中にコピーすることはできません',
			'errRm'                : '"$1"を削除することができません',
			'errRmSrc'             : 'Unable remove source file(s).',
			'errExtract'           : '"$1"を解凍することができません',
			'errArchive'           : 'アーカイブを作成することができません',
			'errArcType'           : 'サポート外のアーカイブ形式です',
			'errNoArchive'         : 'アーカイブでないかサポートされていないアーカイブ形式です',
			'errCmdNoSupport'      : 'サポートされていないコマンドです',
			'errReplByChild'       : 'フォルダ "$1" に含まれてるアイテムを置き換えることはできません',
			'errArcSymlinks'       : 'シンボリックリンクまたは許容されないファイル名を含むアーカイブはセキュリティ上、解凍できません', // edited 25.06.2012
			'errArcMaxSize'        : 'アーカイブが許容されたサイズを超えています',
			'errResize'            : '"$1"をリサイズできません',
			'errUsupportType'      : 'このファイルタイプはサポートされません',
			'errNotUTF8Content'    : 'ファイル "$1" には UTF-8 以外の文字が含まれているので編集できません',  // added 9.11.2011
			'errNetMount'          : '"$1"をマウントできません', // added 17.04.2012
			'errNetMountNoDriver'  : 'サポートされていないプロトコルです',     // added 17.04.2012
			'errNetMountFailed'    : 'マウントに失敗しました',         // added 17.04.2012
			'errNetMountHostReq'   : 'ホスト名は必須です', // added 18.04.2012
			'errSessionExpires'    : 'アクションがなかったため、セッションが期限切れになりました',
			'errCreatingTempDir'   : '一時ディレクトリを作成できません："$1"',
			'errFtpDownloadFile'   : 'FTP からファイルをダウンロードできません："$1"',
			'errFtpUploadFile'     : 'FTP へファイルをアップロードできません："$1"',
			'errFtpMkdir'          : 'FTP にリモートディレクトリを作成できません："$1"',
			'errArchiveExec'       : 'ファイルのアーカイブ中にエラーが発生しました："$1"',
			'errExtractExec'       : 'ファイルの抽出中にエラーが発生しました："$1"',
			
			/******************************* commands names ********************************/
			'cmdarchive'   : 'アーカイブ作成',
			'cmdback'      : '戻る',
			'cmdcopy'      : 'コピー',
			'cmdcut'       : 'カット',
			'cmddownload'  : 'ダウンロード',
			'cmdduplicate' : '複製',
			'cmdedit'      : 'ファイル編集',
			'cmdextract'   : 'アーカイブを解凍',
			'cmdforward'   : '進む',
			'cmdgetfile'   : 'ファイル選択',
			'cmdhelp'      : 'このソフトウェアについて',
			'cmdhome'      : 'ホーム',
			'cmdinfo'      : '情報',
			'cmdmkdir'     : '新規フォルダー',
			'cmdmkfile'    : '新規テキストファイル',
			'cmdopen'      : '開く',
			'cmdpaste'     : 'ペースト',
			'cmdquicklook' : 'プレビュー',
			'cmdreload'    : 'リロード',
			'cmdrename'    : 'リネーム',
			'cmdrm'        : '削除',
			'cmdsearch'    : 'ファイルを探す',
			'cmdup'        : '親ディレクトリーへ移動',
			'cmdupload'    : 'ファイルアップロード',
			'cmdview'      : 'ビュー',
			'cmdresize'    : 'リサイズと回転',
			'cmdsort'      : 'ソート',
			'cmdnetmount'  : 'ネットワークボリュームをマウント', // added 18.04.2012
			
			/*********************************** buttons ***********************************/ 
			'btnClose'  : '閉じる',
			'btnSave'   : '保存',
			'btnRm'     : '削除',
			'btnApply'  : '適用',
			'btnCancel' : 'キャンセル',
			'btnNo'     : 'いいえ',
			'btnYes'    : 'はい',
			'btnMount'  : 'マウント',  // added 18.04.2012
			/******************************** notifications ********************************/
			'ntfopen'     : 'フォルダーを開く',
			'ntffile'     : 'ファイルを開く',
			'ntfreload'   : 'フォルダーを再読込',
			'ntfmkdir'    : 'ディレクトリーを作成',
			'ntfmkfile'   : 'ファイルを作成',
			'ntfrm'       : 'ファイルを削除',
			'ntfcopy'     : 'ファイルをコピー',
			'ntfmove'     : 'ファイルを移動',
			'ntfprepare'  : 'ファイルコピーを準備',
			'ntfrename'   : 'ファイル名を変更',
			'ntfupload'   : 'ファイルをアップロード',
			'ntfdownload' : 'ファイルをダウンロード',
			'ntfsave'     : 'ファイルを保存',
			'ntfarchive'  : 'アーカイブ作成',
			'ntfextract'  : 'アーカイブを解凍',
			'ntfsearch'   : 'ファイル検索',
			'ntfresize'   : 'リサイズしています',
			'ntfsmth'     : '何かしています',
      		'ntfloadimg'  : 'イメージを読み込んでいます',
      		'ntfnetmount' : 'ネットワークボリュームをマウントしています', // added 18.04.2012
			
			/************************************ dates **********************************/
			'dateUnknown' : '不明',
			'Today'       : '今日',
			'Yesterday'   : '昨日',
			'Jan'         : '1月',
			'Feb'         : '2月',
			'Mar'         : '3月',
			'Apr'         : '4月',
			'May'         : '5月',
			'Jun'         : '6月',
			'Jul'         : '7月',
			'Aug'         : '8月',
			'Sep'         : '9月',
			'Oct'         : '10月',
			'Nov'         : '11月',
			'Dec'         : '12月',

			/******************************** sort variants ********************************/
			'sortname'          : '名前順', 
			'sortkind'          : '種類順', 
			'sortsize'          : 'サイズ順',
			'sortdate'          : '日付順',
			'sortFoldersFirst'  : 'フォルダ優先', // added 21.06.2012

			/********************************** messages **********************************/
			'confirmReq'      : '確認必須です',
			'confirmRm'       : '本当にファイルを削除しますか?<br/>この操作は取り消せません!',
			'confirmRepl'     : '古いファイルを新しいファイルで上書きしますか?',
			'apllyAll'        : '全てに適用します',
			'name'            : '名前',
			'size'            : 'サイズ',
			'perms'           : '権限',
			'modify'          : '更新',
			'kind'            : '種類',
			'read'            : '読み取り',
			'write'           : '書き込み',
			'noaccess'        : 'アクセス禁止',
			'and'             : ',',
			'unknown'         : '不明',
			'selectall'       : '全てのファイルを選択',
			'selectfiles'     : 'ファイル選択',
			'selectffile'     : '最初のファイルを選択',
			'selectlfile'     : '最後のファイルを選択',
			'viewlist'        : 'リスト形式で見る',
			'viewicons'       : 'アイコン形式で見る',
			'places'          : 'Places',
			'calc'            : '計算', 
			'path'            : 'パス',
			'aliasfor'        : 'エイリアス',
			'locked'          : 'ロックされています',
			'dim'             : 'サイズ',
			'files'           : 'ファイル',
			'folders'         : 'フォルダー',
			'items'           : 'アイテム',
			'yes'             : 'はい',
			'no'              : 'いいえ',
			'link'            : 'リンク',
			'searcresult'     : '検索結果',  
			'selected'        : '選択されたアイテム',
			'about'           : 'アバウト',
			'shortcuts'       : 'ショートカット',
			'help'            : 'ヘルプ',
			'webfm'           : 'ウェブファイルマネージャー',
			'ver'             : 'バージョン',
			'protocolver'     : 'プロトコルバージョン',
			'homepage'        : 'プロジェクトホーム',
			'docs'            : 'ドキュメンテーション',
			'github'          : 'Github でフォーク',
			'twitter'         : 'Twitter でフォロー',
			'facebook'        : 'Facebookグループ に参加',
			'team'            : 'チーム',
			'chiefdev'        : 'チーフデベロッパー',
			'developer'       : 'デベロッパー',
			'contributor'     : 'コントリビュータ',
			'maintainer'      : 'メインテナー',
			'translator'      : '翻訳者',
			'icons'           : 'アイコン',
			'dontforget'      : 'タオル忘れちゃだめよー。',
			'shortcutsof'     : 'ショートカットは利用できません',
			'dropFiles'       : 'ここにファイルをドロップ',
			'or'              : 'または',
			'selectForUpload' : 'アップロードするファイルを選択',
			'moveFiles'       : 'ファイルを移動',
			'copyFiles'       : 'ファイルをコピー',
			'rmFromPlaces'    : 'ここから削除',
			'aspectRatio'     : '縦横比維持',
			'scale'           : '表示縮尺',
			'width'           : '幅',
			'height'          : '高さ',
			'resize'          : 'リサイズ',
			'crop'            : '切り抜き',
			'rotate'          : '回転',
			'rotate-cw'       : '90度左回転',
			'rotate-ccw'      : '90度右回転',
			'degree'          : '度',
			'netMountDialogTitle' : 'ネットワークボリュームのマウント', // added 18.04.2012
			'protocol'            : 'プロトコル', // added 18.04.2012
			'host'                : 'ホスト名', // added 18.04.2012
			'port'                : 'ポート', // added 18.04.2012
			'user'                : 'ユーザー名', // added 18.04.2012
			'pass'                : 'パスワード', // added 18.04.2012

			/********************************** mimetypes **********************************/
			'kindUnknown'     : '不明',
			'kindFolder'      : 'フォルダー',
			'kindAlias'       : '別名',
			'kindAliasBroken' : '宛先不明の別名',
			// applications
			'kindApp'         : 'アプリケーション',
			'kindPostscript'  : 'Postscript ドキュメント',
			'kindMsOffice'    : 'Microsoft Office ドキュメント',
			'kindMsWord'      : 'Microsoft Word ドキュメント',
			'kindMsExcel'     : 'Microsoft Excel ドキュメント',
			'kindMsPP'        : 'Microsoft Powerpoint プレゼンテーション',
			'kindOO'          : 'Open Office ドキュメント',
			'kindAppFlash'    : 'Flash アプリケーション',
			'kindPDF'         : 'PDF',
			'kindTorrent'     : 'Bittorrent ファイル',
			'kind7z'          : '7z アーカイブ',
			'kindTAR'         : 'TAR アーカイブ',
			'kindGZIP'        : 'GZIP アーカイブ',
			'kindBZIP'        : 'BZIP アーカイブ',
			'kindZIP'         : 'ZIP アーカイブ',
			'kindRAR'         : 'RAR アーカイブ',
			'kindJAR'         : 'Java JAR ファイル',
			'kindTTF'         : 'True Type フォント',
			'kindOTF'         : 'Open Type フォント',
			'kindRPM'         : 'RPM パッケージ',
			// texts
			'kindText'        : 'Text ドキュメント',
			'kindTextPlain'   : 'プレインテキスト',
			'kindPHP'         : 'PHP ソース',
			'kindCSS'         : 'Cascading style sheet',
			'kindHTML'        : 'HTML ドキュメント',
			'kindJS'          : 'Javascript ソース',
			'kindRTF'         : 'Rich Text フォーマット',
			'kindC'           : 'C ソース',
			'kindCHeader'     : 'C ヘッダーソース',
			'kindCPP'         : 'C++ ソース',
			'kindCPPHeader'   : 'C++ ヘッダーソース',
			'kindShell'       : 'Unix shell スクリプト',
			'kindPython'      : 'Python ソース',
			'kindJava'        : 'Java ソース',
			'kindRuby'        : 'Ruby ソース',
			'kindPerl'        : 'Perl スクリプト',
			'kindSQL'         : 'SQL ソース',
			'kindXML'         : 'XML ドキュメント',
			'kindAWK'         : 'AWK ソース',
			'kindCSV'         : 'CSV',
			'kindDOCBOOK'     : 'Docbook XML ドキュメント',
			// images
			'kindImage'       : 'イメージ',
			'kindBMP'         : 'BMP イメージ',
			'kindJPEG'        : 'JPEG イメージ',
			'kindGIF'         : 'GIF イメージ',
			'kindPNG'         : 'PNG イメージ',
			'kindTIFF'        : 'TIFF イメージ',
			'kindTGA'         : 'TGA イメージ',
			'kindPSD'         : 'Adobe Photoshop イメージ',
			'kindXBITMAP'     : 'X bitmap イメージ',
			'kindPXM'         : 'Pixelmator イメージ',
			// media
			'kindAudio'       : 'オーディオメディア',
			'kindAudioMPEG'   : 'MPEG オーディオ',
			'kindAudioMPEG4'  : 'MPEG-4 オーディオ',
			'kindAudioMIDI'   : 'MIDI オーディオ',
			'kindAudioOGG'    : 'Ogg Vorbis オーディオ',
			'kindAudioWAV'    : 'WAV オーディオ',
			'AudioPlaylist'   : 'MP3 プレイリスト',
			'kindVideo'       : 'ビデオメディア',
			'kindVideoDV'     : 'DV ムービー',
			'kindVideoMPEG'   : 'MPEG ムービー',
			'kindVideoMPEG4'  : 'MPEG-4 ムービー',
			'kindVideoAVI'    : 'AVI ムービー',
			'kindVideoMOV'    : 'Quick Time ムービー',
			'kindVideoWM'     : 'Windows Media ムービー',
			'kindVideoFlash'  : 'Flash ムービー',
			'kindVideoMKV'    : 'Matroska ムービー',
			'kindVideoOGG'    : 'Ogg ムービー'
		}
	};
}


/**
 * Korean translation
 * @author Hwang Ahreum 황아름 <luckmagic@naver.com>
 * @version 2012-06-27
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
	elFinder.prototype.i18.ko = {
		translator : 'Hwang Ahreum; &lt;luckmagic@naver.com&gt;',
		language   : 'Korea-한국어',
		direction  : 'ltr',
		dateFormat : 'd.m.Y H:i',
		fancyDateFormat : '$1 H:i',
		messages   : {

			/********************************** errors **********************************/
			'error'                : '에러',
			'errUnknown'           : '알 수 없는 에러',
			'errUnknownCmd'        : '알 수 없는 명령어',
			'errJqui'              : 'jQuery UI 환경설정이 올바르지 않습니다. 선택,드래그앤드롭 컴포넌트가 포함되어야합니다',
			'errNode'              : 'elFinder를 생성하기 위해서는 DOM Element를 요구합니다',
			'errURL'               : 'elFinder 환경설정이 올바르지 않습니다! URL 옵션이 설정되지 않았습니다',
			'errAccess'            : '액세스 할 수 없습니다',
			'errConnect'           : 'Backend에 연결할 수 없습니다',
			'errAbort'             : '연결 실패',
			'errTimeout'           : '연결시간 초과',
			'errNotFound'          : 'Backend를 찾을 수 없습니다',
			'errResponse'          : 'Backend가 응답하지 않습니다',
			'errConf'              : 'Backend 환경설정이 올바르지 않습니다',
			'errJSON'              : 'PHP JSON 모듈이 설치되지 않았습니다',
			'errNoVolumes'         : '읽기 가능한 볼률이 없습니다',
			'errCmdParams'         : ' "$1" 명령어는 잘못된 인수입니다',
			'errDataNotJSON'       : '데이터는 JSON이 아닙니다',
			'errDataEmpty'         : '빈 데이터 입니다',
			'errCmdReq'            : 'Backend는 필요한 명령어 이름을 요청합니다',
			'errOpen'              : ' "$1" 열 수 없습니다',
			'errNotFolder'         : '폴더가 아닙니다',
			'errNotFile'           : '파일이 아닙니다',
			'errRead'              : ' "$1" 읽을 수 없습니다',
			'errWrite'             : ' "$1" 쓸 수 없습니다',
			'errPerm'              : '권한이 없습니다',
			'errLocked'            : ' "$1" 잠겨 있습니다, 이동,삭제가 불가능합니다',
			'errExists'            : ' "$1" 존재합니다',
			'errInvName'           : '이름에 올바르지 않은 문자가 포함되었습니다',
			'errFolderNotFound'    : '폴더를 찾을 수 없습니다',
			'errFileNotFound'      : '파일을 찾을 수 없습니다',
			'errTrgFolderNotFound' : ' "$1" 폴더를 찾을 수 없습니다',
			'errPopup'             : '브라우저에서 팝업을 차단하였습니다.팝업을 허용하려면 브라우저 옵션을 변경하세요',
			'errMkdir'             : ' "$1" 폴더를 생성할 수 없습니다',
			'errMkfile'            : ' "$1" 파일을 생성할 수 없습니다',
			'errRename'            : ' "$1" 이름을 변경할 수 없습니다',
			'errCopyFrom'          : '볼률 "$1" 로부터 파일을 복사할 수 없습니다',
			'errCopyTo'            : '볼률 "$1" 에 파일을 복사할 수 없습니다',
			'errUploadCommon'      : '업로드 에러',
			'errUpload'            : ' "$1" 업로드할 수 없습니다',
			'errUploadNoFiles'     : '업로드할 파일이 없습니다',
			'errMaxSize'           : '데이터가 허용된 최대크기를 초과하였습니다',
			'errFileMaxSize'       : '파일이 허용된 최대크기를 초과하였습니다',
			'errUploadMime'        : '잘못된 파일형식입니다',
			'errUploadTransfer'    : ' "$1" 전송 에러', 
			'errSave'              : ' "$1" 저장할 수 없습니다',
			'errCopy'              : ' "$1" 복사할 수 없습니다',
			'errMove'              : ' "$1" 이동할 수 없습니다',
			'errCopyInItself'      : ' "$1" 이곳에 복사 할 수 없습니다',
			'errRm'                : ' "$1" 이름을 변경할 수 없습니다',
			'errExtract'           : ' "$1" 에 압축을 풀 수 없습니다',
			'errArchive'           : '압축파일을 생성할 수 없습니다',
			'errArcType'           : '지원하지 않는 압축파일 형식입니다',
			'errNoArchive'         : '압축파일이 아니거나 지원하지 않는 압축파일 형식입니다',
			'errCmdNoSupport'      : '이 명령어는 Backend를 지원하지 않습니다',
			'errReplByChild'       : ' "$1" 폴더에 덮어쓸수 없습니다',
			'errArcSymlinks'       : '보안을 위해 시스템 호출을 포함한 압축파일인지를 분석합니다',
			'errArcMaxSize'        : '압축파일이 허용된 최대크기를 초과하였습니다',
			'errResize'            : ' "$1" 크기 변경을 할 수 없습니다',
			'errUsupportType'      : '지원하지 않는 파일 형식',

			/******************************* commands names ********************************/
			'cmdarchive'   : '압축파일생성',
			'cmdback'      : '뒤로',
			'cmdcopy'      : '복사',
			'cmdcut'       : '자르기',
			'cmddownload'  : '다운로드',
			'cmdduplicate' : '사본',
			'cmdedit'      : '편집',
			'cmdextract'   : '압축풀기',
			'cmdforward'   : '앞으로',
			'cmdgetfile'   : '선택',
			'cmdhelp'      : '이 소프트웨어는',
			'cmdhome'      : '홈',
			'cmdinfo'      : '파일정보',
			'cmdmkdir'     : '새 폴더',
			'cmdmkfile'    : '새 텍스트파일',
			'cmdopen'      : '열기',
			'cmdpaste'     : '붙여넣기',
			'cmdquicklook' : '미리보기',
			'cmdreload'    : '새로고침',
			'cmdrename'    : '이름바꾸기',
			'cmdrm'        : '삭제',
			'cmdsearch'    : '파일찾기',
			'cmdup'        : '상위폴더',
			'cmdupload'    : '업로드',
			'cmdview'      : '보기',
			'cmdresize'    : '이미지 사이즈변경',
			'cmdsort'      : '정렬',

			/*********************************** buttons ***********************************/ 
			'btnClose'  : '닫기',
			'btnSave'   : '저장',
			'btnRm'     : '삭제',
			'btnApply'  : '적용',
			'btnCancel' : '취소',
			'btnNo'     : '아니오',
			'btnYes'    : '예',

			/******************************** notifications ********************************/
			'ntfopen'     : '폴더 열기',
			'ntffile'     : '파일 열기',
			'ntfreload'   : '새로고침',
			'ntfmkdir'    : '폴더 생성',
			'ntfmkfile'   : '파일 생성',
			'ntfrm'       : '삭제',
			'ntfcopy'     : '복사',
			'ntfmove'     : '이동',
			'ntfprepare'  : '복사 준비',
			'ntfrename'   : '이름바꾸기',
			'ntfupload'   : '업로드',
			'ntfdownload' : '다운로드',
			'ntfsave'     : '저장하기',
			'ntfarchive'  : '압축파일만들기',
			'ntfextract'  : '압축풀기',
			'ntfsearch'   : '검색',
			'ntfsmth'     : '작업중 >_<',
			'ntfloadimg'  : '이미지 불러오기',

			/************************************ dates **********************************/
			'dateUnknown' : '알수없음',
			'Today'       : '오늘',
			'Yesterday'   : '내일',
			'Jan'         : '1월',
			'Feb'         : '2월',
			'Mar'         : '3월',
			'Apr'         : '4월',
			'May'         : '5월',
			'Jun'         : '6월',
			'Jul'         : '7월',
			'Aug'         : '8월',
			'Sep'         : '9월',
			'Oct'         : '10월',
			'Nov'         : '11월',
			'Dec'         : '12월',
			'January'     : '1월',
			'February'    : '2월',
			'March'       : '3월',
			'April'       : '4월',
			'May'         : '5월',
			'June'        : '6월',
			'July'        : '7월',
			'August'      : '8월',
			'September'   : '9월',
			'October'     : '10월',
			'November'    : '11월',
			'December'    : '12월',
			'Sunday'      : '일요일', 
			'Monday'      : '월요일', 
			'Tuesday'     : '화요일', 
			'Wednesday'   : '수요일', 
			'Thursday'    : '목요일', 
			'Friday'      : '금요일', 
			'Saturday'    : '토요일',
			'Sun'         : '일', 
			'Mon'         : '월', 
			'Tue'         : '화', 
			'Wed'         : '수', 
			'Thu'         : '목', 
			'Fri'         : '금', 
			'Sat'         : '토',
			/******************************** sort variants ********************************/
			'sortnameDirsFirst' : '이름 (폴더 먼저)', 
			'sortkindDirsFirst' : '종류 (폴더 먼저)', 
			'sortsizeDirsFirst' : '크기 (폴더 먼저)', 
			'sortdateDirsFirst' : '날짜 (폴더 먼저)', 
			'sortname'          : '이름', 
			'sortkind'          : '종류', 
			'sortsize'          : '크기',
			'sortdate'          : '날짜',

			/********************************** messages **********************************/
			'confirmReq'      : '확인',
			'confirmRm'       : '이 파일을 정말 삭제 하겠습니까?<br/>실행 후 되돌릴 수 없습니다!',
			'confirmRepl'     : '파일을 덮어쓰겠습니까?',
			'apllyAll'        : '모두 적용',
			'name'            : '이름',
			'size'            : '크기',
			'perms'           : '권한',
			'modify'          : '수정된 시간',
			'kind'            : '종류',
			'read'            : '읽기',
			'write'           : '쓰기',
			'noaccess'        : '액세스 불가',
			'and'             : '와',
			'unknown'         : '알 수 없음',
			'selectall'       : '모든 파일 선택',
			'selectfiles'     : '파일 선택',
			'selectffile'     : '첫번째 파일 선택',
			'selectlfile'     : '마지막 파일 선택',
			'viewlist'        : '리스트 보기',
			'viewicons'       : '아이콘 보기',
			'places'          : '위치',
			'calc'            : '계산', 
			'path'            : '경로',
			'aliasfor'        : '별명',
			'locked'          : '잠금',
			'dim'             : '크기',
			'files'           : '파일',
			'folders'         : '폴더',
			'items'           : '아이템',
			'yes'             : '예',
			'no'              : '아니오',
			'link'            : '링크',
			'searcresult'     : '검색 결과',  
			'selected'        : '아이템 선택',
			'about'           : 'About',
			'shortcuts'       : '단축아이콘',
			'help'            : '도움말',
			'webfm'           : '웹 파일매니저',
			'ver'             : '버전',
			'protocol'        : '프로토콜 버전',
			'homepage'        : '홈페이지',
			'docs'            : '문서',
			'github'          : 'Fork us on Github',
			'twitter'         : '트위터따라가기',
			'facebook'        : '페이스북 가입하기',
			'team'            : '팀',
			'chiefdev'        : '개발팀장',
			'developer'       : '개발자',
			'contributor'     : '공헌자',
			'maintainer'      : '관리자',
			'translator'      : '번역',
			'icons'           : '아이콘',
			'dontforget'      : 'and don\'t forget to take your towel',
			'shortcutsof'     : '단축아이콘 사용불가',
			'dropFiles'       : '여기로 이동하기',
			'or'              : '또는',
			'selectForUpload' : '업로드 파일 선택',
			'moveFiles'       : '파일 이동',
			'copyFiles'       : '파일 복사',
			'rmFromPlaces'    : '현재 폴더에서 삭제하기',
			'untitled folder' : '새 폴더',
			'untitled file.txt' : '새 텍스트.txt',
			'aspectRatio'     : '화면비율',
			'scale'           : '크기',
			'width'           : '가로',
			'height'          : '세로',
			'mode'            : '모드',
			'resize'          : '사이즈 변경',
			'crop'            : '자르기',
			'rotate'          : '회전',
			'rotate-cw'       : '반시계방향 90도 회전',
			'rotate-ccw'      : '시계방향 90도 회전',
			'degree'          : '각도',

			/********************************** mimetypes **********************************/
			'kindUnknown'     : '알수없음',
			'kindFolder'      : '폴더',
			'kindAlias'       : 'Alias',
			'kindAliasBroken' : '손상된 Alias',
			// applications
			'kindApp'         : '응용프로그램',
			'kindPostscript'  : 'Postscript 문서',
			'kindMsOffice'    : 'Microsoft Office 문서',
			'kindMsWord'      : 'Microsoft Word 문서',
			'kindMsExcel'     : 'Microsoft Excel 문서',
			'kindMsPP'        : 'Microsoft Powerpoint',
			'kindOO'          : 'Office 문서 열기',
			'kindAppFlash'    : '플래쉬',
			'kindPDF'         : 'PDF(PDF)',
			'kindTorrent'     : 'Bittorrent 파일',
			'kind7z'          : '7z 압축파일',
			'kindTAR'         : 'TAR 압축파일',
			'kindGZIP'        : 'GZIP 압축파일',
			'kindBZIP'        : 'BZIP 압축파일',
			'kindZIP'         : 'ZIP 압축파일',
			'kindRAR'         : 'RAR 압축파일',
			'kindJAR'         : 'Java JAR 파일',
			'kindTTF'         : '트루타입 글꼴',
			'kindOTF'         : '오픈타입 글꼴',
			'kindRPM'         : 'RPM 패키지',
			// texts
			'kindText'        : 'Text 문서',
			'kindTextPlain'   : '보통 텍스트',
			'kindPHP'         : 'PHP 소스',
			'kindCSS'         : 'CSS 문서',
			'kindHTML'        : 'HTML 문서',
			'kindJS'          : '자바스크립트 소스',
			'kindRTF'         : 'RTF 형식',
			'kindC'           : 'C 소스',
			'kindCHeader'     : 'C 헤더소스',
			'kindCPP'         : 'C++ 소스',
			'kindCPPHeader'   : 'C++ 헤더소스',
			'kindShell'       : 'Unix shell 스크립트',
			'kindPython'      : 'Python 소스',
			'kindJava'        : 'Java 소스',
			'kindRuby'        : 'Ruby 소스',
			'kindPerl'        : 'Perl 스크립트',
			'kindSQL'         : 'SQL 소스',
			'kindXML'         : 'XML 문서',
			'kindAWK'         : 'AWK 소스',
			'kindCSV'         : 'CSV 형식',
			'kindDOCBOOK'     : 'XML 닥북 문서',
			// images
			'kindImage'       : '이미지',
			'kindBMP'         : 'BMP 이미지',
			'kindJPEG'        : 'JPEG 이미지',
			'kindGIF'         : 'GIF 이미지',
			'kindPNG'         : 'PNG 이미지',
			'kindTIFF'        : 'TIFF 이미지',
			'kindTGA'         : 'TGA 이미지',
			'kindPSD'         : 'Adobe Photoshop 이미지',
			'kindXBITMAP'     : 'X bitmap 이미지',
			'kindPXM'         : 'Pixelmator 이미지',
			// media
			'kindAudio'       : '오디오 미디어',
			'kindAudioMPEG'   : 'MPEG 오디오',
			'kindAudioMPEG4'  : 'MPEG-4 오디오',
			'kindAudioMIDI'   : 'MIDI 오디오',
			'kindAudioOGG'    : 'Ogg Vorbis 오디오',
			'kindAudioWAV'    : 'WAV 오디오',
			'AudioPlaylist'   : 'MP3 플레이 리스트',
			'kindVideo'       : 'Video 미디어',
			'kindVideoDV'     : 'DV 동영상',
			'kindVideoMPEG'   : 'MPEG 동영상',
			'kindVideoMPEG4'  : 'MPEG-4 동영상',
			'kindVideoAVI'    : 'AVI 동영상',
			'kindVideoMOV'    : '퀵타임 동영상',
			'kindVideoWM'     : '윈도우 미디어 플레이어 동영상',
			'kindVideoFlash'  : '플래쉬 동영상',
			'kindVideoMKV'    : 'Matroska 동영상',
			'kindVideoOGG'    : 'Ogg 동영상'
		}
	}
}
/**
 * Dutch translation
 * @author Barry vd. Heuvel <barry@fruitcakestudio.nl>
 * @version 2012-04-02
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
	elFinder.prototype.i18.nl = {
		translator : 'Barry vd. Heuvel &lt;barry@fruitcakestudio.nl&gt;',
		language   : 'Nederlands',
		direction  : 'ltr',
		dateFormat : 'd-m-Y H:i',
		fancyDateFormat : '$1 H:i',
		messages   : {
			
			/********************************** errors **********************************/
			'error'                : 'Fout',
			'errUnknown'           : 'Onbekend fout.',
			'errUnknownCmd'        : 'Onbekend commando.',
			'errJqui'              : 'Ongeldige jQuery UI configuratie. Selectable, draggable en droppable componenten moeten aanwezig zijn.',
			'errNode'              : 'Voor elFinder moet een DOM Element gemaakt worden.',
			'errURL'               : 'Ongeldige elFinder configuratie! URL optie is niet ingesteld.',
			'errAccess'            : 'Toegang geweigerd.',
			'errConnect'           : 'Kan geen verbinding met de backend maken.',
			'errAbort'             : 'Verbinding afgebroken.',
			'errTimeout'           : 'Verbinding time-out.',
			'errNotFound'          : 'Backend niet gevonden.',
			'errResponse'          : 'Ongeldige reactie van de backend.',
			'errConf'              : 'Ongeldige backend configuratie.',
			'errJSON'              : 'PHP JSON module niet geïnstalleerd.',
			'errNoVolumes'         : 'Leesbaar volume is niet beschikbaar.',
			'errCmdParams'         : 'Ongeldige parameters voor commando "$1".',
			'errDataNotJSON'       : 'Data is niet JSON.',
			'errDataEmpty'         : 'Data is leeg.',
			'errCmdReq'            : 'Backend verzoek heeft een commando naam nodig.',
			'errOpen'              : 'Kan "$1" niet openen.',
			'errNotFolder'         : 'Object is geen map.',
			'errNotFile'           : 'Object is geen bestand.',
			'errRead'              : 'Kan "$1" niet lezen.',
			'errWrite'             : 'Kan niet schrijven in "$1".',
			'errPerm'              : 'Toegang geweigerd.',
			'errLocked'            : '"$1" is vergrendeld en kan niet hernoemd, verplaats of verwijderd worden.',
			'errExists'            : 'Bestand "$1" bestaat al.',
			'errInvName'           : 'Ongeldige bestandsnaam.',
			'errFolderNotFound'    : 'Map niet gevonden.',
			'errFileNotFound'      : 'Bestand niet gevonden.',
			'errTrgFolderNotFound' : 'Doelmap"$1" niet gevonden.',
			'errPopup'             : 'De browser heeft voorkomen dat de pop-up is geopend. Pas de browser instellingen aan om de popup te kunnen openen.',
			'errMkdir'             : 'Kan map "$1" niet aanmaken.',
			'errMkfile'            : 'Kan bestand "$1" niet aanmaken.',
			'errRename'            : 'Kan "$1" niet hernoemen.',
			'errCopyFrom'          : 'Bestanden kopiëren van "$1" is niet toegestaan.',
			'errCopyTo'            : 'Bestanden kopiëren naar "$1" is niet toegestaan.',
			'errUploadCommon'      : 'Upload fout.',
			'errUpload'            : 'Kan "$1" niet uploaden.',
			'errUploadNoFiles'     : 'Geen bestanden gevonden om te uploaden.',
			'errMaxSize'           : 'Data overschrijdt de maximale grootte.',
			'errFileMaxSize'       : 'Bestand overschrijdt de maximale grootte.',
			'errUploadMime'        : 'Bestandstype niet toegestaan.',
			'errUploadTransfer'    : '"$1" overdrachtsfout.', 
			'errSave'              : 'Kan "$1" niet opslaan.',
			'errCopy'              : 'Kan "$1" niet kopiëren.',
			'errMove'              : 'Kan "$1" niet verplaatsen.',
			'errCopyInItself'      : 'Kan "$1" niet in zichzelf kopiëren.',
			'errRm'                : 'Kan "$1" niet verwijderen.',
			'errExtract'           : 'Kan de bestanden van "$1" niet uitpakken.',
			'errArchive'           : 'Kan het archief niet maken.',
			'errArcType'           : 'Archief type is niet ondersteund.',
			'errNoArchive'         : 'Bestand is geen archief of geen ondersteund archief type.',
			'errCmdNoSupport'      : 'Backend ondersteund dit commando niet.',
			'errReplByChild'       : 'De map "$1" kan niet vervangen worden door een item uit die map.',
			'errArcSymlinks'       : 'Om veiligheidsredenen kan een bestand met symlinks of bestanden met niet toegestane namen niet worden uitgepakt .',
			'errArcMaxSize'        : 'Archief overschrijdt de maximale bestandsgrootte.',
			'errResize'            : 'Kan het formaat van "$1" niet wijzigen.',
			'errUsupportType'      : 'Bestandstype wordt niet ondersteund.',
			'errNotUTF8Content'    : 'Bestand "$1" is niet in UTF-8 and kan niet aangepast worden.', 
			'errNetMount'          : 'Kan "$1" niet mounten.',   
			'errNetMountNoDriver'  : 'Niet ondersteund protocol.',   
			'errNetMountFailed'    : 'Mount mislukt.',    
			'errNetMountHostReq'   : 'Host is verplicht.',
			'errSessionExpires'    : 'Uw sessie is verlopen vanwege inactiviteit.',
			'errCreatingTempDir'   : 'Kan de tijdelijke map niet aanmaken: "$1" ',
			'errFtpDownloadFile'   : 'Kan het bestand niet downloaden vanaf FTP: "$1"',
			'errFtpUploadFile'     : 'Kan het bestand niet uploaden naar FTP: "$1"',
			'errFtpMkdir'          : 'Kan het externe map niet aanmaken op de FTP-server: "$1"',
			'errArchiveExec'       : 'Er is een fout opgetreden bij het archivering van de bestanden: "$1" ',
			'errExtractExec'       : 'Er is een fout opgetreden bij het uitpakken van de bestanden: "$1" ',
			'errUploadFile'        : 'Kan "$1" niet uploaden',
			
			/******************************* commands names ********************************/
			'cmdarchive'   : 'Maak archief',
			'cmdback'      : 'Vorige',
			'cmdcopy'      : 'Kopieer',
			'cmdcut'       : 'Knip',
			'cmddownload'  : 'Download',
			'cmdduplicate' : 'Dupliceer',
			'cmdedit'      : 'Pas bestand aan',
			'cmdextract'   : 'Bestanden uit archief uitpakken',
			'cmdforward'   : 'Volgende',
			'cmdgetfile'   : 'Kies bestanden',
			'cmdhelp'      : 'Over deze software',
			'cmdhome'      : 'Home',
			'cmdinfo'      : 'Bekijk info',
			'cmdmkdir'     : 'Nieuwe map',
			'cmdmkfile'    : 'Nieuw tekstbestand',
			'cmdopen'      : 'Open',
			'cmdpaste'     : 'Plak',
			'cmdquicklook' : 'Voorbeeld',
			'cmdreload'    : 'Vernieuwen',
			'cmdrename'    : 'Naam wijzigen',
			'cmdrm'        : 'Verwijder',
			'cmdsearch'    : 'Zoek bestanden',
			'cmdup'        : 'Ga een map hoger',
			'cmdupload'    : 'Upload bestanden',
			'cmdview'      : 'Bekijk',
			'cmdresize'    : 'Formaat wijzigen',
			'cmdsort'      : 'Sorteren',
			'cmdnetmount'  : 'Mount netwerk volume',
			
			/*********************************** buttons ***********************************/ 
			'btnClose'  : 'Sluit',
			'btnSave'   : 'Opslaan',
			'btnRm'     : 'Verwijder',
			'btnApply'  : 'Toepassen',
			'btnCancel' : 'Annuleren',
			'btnNo'     : 'Nee',
			'btnYes'    : 'Ja',
			'btnMount'  : 'Mount',
			
			/******************************** notifications ********************************/
			'ntfopen'     : 'Bezig met openen van map',
			'ntffile'     : 'Bezig met openen bestand',
			'ntfreload'   : 'Herladen map inhoud',
			'ntfmkdir'    : 'Bezig met map maken',
			'ntfmkfile'   : 'Bezig met Bestanden maken',
			'ntfrm'       : 'Verwijderen bestanden',
			'ntfcopy'     : 'Kopieer bestanden',
			'ntfmove'     : 'Verplaats bestanden',
			'ntfprepare'  : 'Voorbereiden kopiëren',
			'ntfrename'   : 'Hernoem bestanden',
			'ntfupload'   : 'Bestanden uploaden actief',
			'ntfdownload' : 'Bestanden downloaden actief',
			'ntfsave'     : 'Bestanden opslaan',
			'ntfarchive'  : 'Archief aan het maken',
			'ntfextract'  : 'Bestanden uitpakken actief',
			'ntfsearch'   : 'Zoeken naar bestanden',
			'ntfsmth'     : 'Iets aan het doen',
			'ntfloadimg'  : 'Laden van plaatje',
			'ntfnetmount' : 'Verhogen netwerk volume',
			
			/************************************ dates **********************************/
			'dateUnknown' : 'onbekend',
			'Today'       : 'Vandaag',
			'Yesterday'   : 'Gisteren',
			'Jan'         : 'Jan',
			'Feb'         : 'Feb',
			'Mar'         : 'Mar',
			'Apr'         : 'Apr',
			'May'         : 'Mei',
			'Jun'         : 'Jun',
			'Jul'         : 'Jul',
			'Aug'         : 'Aug',
			'Sep'         : 'Sep',
			'Oct'         : 'Okt',
			'Nov'         : 'Nov',
			'Dec'         : 'Dec',
			'January'     : 'Januari',
			'February'    : 'Februari',
			'March'       : 'Maart',
			'April'       : 'April',
			'May'         : 'Mei',
			'June'        : 'Juni',
			'July'        : 'Juli',
			'August'      : 'Augustus',
			'September'   : 'September',
			'October'     : 'Oktober',
			'November'    : 'November',
			'December'    : 'December',
			'Sunday'      : 'Zondag', 
			'Monday'      : 'Maandag', 
			'Tuesday'     : 'Dinsdag', 
			'Wednesday'   : 'Woensdag', 
			'Thursday'    : 'Donderdag', 
			'Friday'      : 'Vrijdag', 
			'Saturday'    : 'Zaterdag',
			'Sun'         : 'Zo', 
			'Mon'         : 'Ma', 
			'Tue'         : 'Di', 
			'Wed'         : 'Wo', 
			'Thu'         : 'Do', 
			'Fri'         : 'Vr', 
			'Sat'         : 'Za',
			
			/******************************** sort variants ********************************/
			'sortname'          : 'op naam', 
			'sortkind'          : 'op type', 
			'sortsize'          : 'op grootte',
			'sortdate'          : 'op datum',
			'sortFoldersFirst'  : 'Mappen eerst',

			/********************************** messages **********************************/
			'confirmReq'      : 'Bevestiging nodig',
			'confirmRm'       : 'Weet u zeker dat u deze bestanden wil verwijderen?<br/>Deze actie kan niet ongedaan gemaakt worden!',
			'confirmRepl'     : 'Oud bestand vervangen door het nieuwe bestand?',
			'apllyAll'        : 'Toepassen op alles',
			'name'            : 'Naam',
			'size'            : 'Grootte',
			'perms'           : 'Rechten',
			'modify'          : 'Aangepast',
			'kind'            : 'Type',
			'read'            : 'lees',
			'write'           : 'schrijf',
			'noaccess'        : 'geen toegang',
			'and'             : 'en',
			'unknown'         : 'onbekend',
			'selectall'       : 'Selecteer alle bestanden',
			'selectfiles'     : 'Selecteer bestand(en)',
			'selectffile'     : 'Selecteer eerste bestand',
			'selectlfile'     : 'Selecteer laatste bestand',
			'viewlist'        : 'Lijst weergave',
			'viewicons'       : 'Icoon weergave',
			'places'          : 'Plaatsen',
			'calc'            : 'Bereken', 
			'path'            : 'Pad',
			'aliasfor'        : 'Alias voor',
			'locked'          : 'Vergrendeld',
			'dim'             : 'Dimensies',
			'files'           : 'Bestanden',
			'folders'         : 'Mappen',
			'items'           : 'Items',
			'yes'             : 'ja',
			'no'              : 'nee',
			'link'            : 'Link',
			'searcresult'     : 'Zoek resultaten',  
			'selected'        : 'geselecteerde items',
			'about'           : 'Over',
			'shortcuts'       : 'Snelkoppelingen',
			'help'            : 'Help',
			'webfm'           : 'Web bestandsmanager',
			'ver'             : 'Versie',
			'protocolver'     : 'protocol versie',
			'homepage'        : 'Project home',
			'docs'            : 'Documentatie',
			'github'          : 'Fork ons op Github',
			'twitter'         : 'Volg ons op twitter',
			'facebook'        : 'Wordt lid op facebook',
			'team'            : 'Team',
			'chiefdev'        : 'Hoofd ontwikkelaar',
			'developer'       : 'ontwikkelaar',
			'contributor'     : 'bijdrager',
			'maintainer'      : 'onderhouder',
			'translator'      : 'vertaler',
			'icons'           : 'Iconen',
			'dontforget'      : 'En vergeet je handdoek niet!',
			'shortcutsof'     : 'Snelkoppelingen uitgeschakeld',
			'dropFiles'       : 'Sleep hier uw bestanden heen',
			'or'              : 'of',
			'selectForUpload' : 'Selecteer bestanden om te uploaden',
			'moveFiles'       : 'Verplaats bestanden',
			'copyFiles'       : 'Kopieer bestanden',
			'rmFromPlaces'    : 'Verwijder uit Plaatsen',
			'untitled folder' : 'Nieuwe map',
			'untitled file.txt' : 'nieuw bestand.txt',
			'aspectRatio'     : 'Aspect ratio',
			'scale'           : 'Schaal',
			'width'           : 'Breedte',
			'height'          : 'Hoogte',
			'mode'		  : 'Modus',
			'resize'	  : 'Verkleinen', //Or: Vergroten/verkleinen
			'crop'		  : 'Bijsnijden',
			'rotate'	  : 'Draaien',
			'rotate-cw'	  : 'Draai 90 graden rechtsom',
			'rotate-ccw'	  : 'Draai 90 graden linksom',
			'degree'	  : '°',
			'netMountDialogTitle' : 'Mount network volume',
			'protocol'        : 'Protocol', 
			'host'            : 'Host', 
			'port'            : 'Poort',
			'user'            : 'Gebruikersnaams', 
			'pass'            : 'Wachtwoord', 
			
			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Onbekend',
			'kindFolder'      : 'Map',
			'kindAlias'       : 'Alias',
			'kindAliasBroken' : 'Kapot alias',
			// applications
			'kindApp'         : 'Applicatie',
			'kindPostscript'  : 'Postscript document',
			'kindMsOffice'    : 'Microsoft Office document',
			'kindMsWord'      : 'Microsoft Word document',
			'kindMsExcel'     : 'Microsoft Excel document',
			'kindMsPP'        : 'Microsoft Powerpoint presentation',
			'kindOO'          : 'Open Office document',
			'kindAppFlash'    : 'Flash applicatie',
			'kindPDF'         : 'Portable Document Format (PDF)',
			'kindTorrent'     : 'Bittorrent bestand',
			'kind7z'          : '7z archief',
			'kindTAR'         : 'TAR archief',
			'kindGZIP'        : 'GZIP archief',
			'kindBZIP'        : 'BZIP archief',
			'kindZIP'         : 'ZIP archief',
			'kindRAR'         : 'RAR archief',
			'kindJAR'         : 'Java JAR bestand',
			'kindTTF'         : 'True Type font',
			'kindOTF'         : 'Open Type font',
			'kindRPM'         : 'RPM package',
			// texts
			'kindText'        : 'Tekst bestand',
			'kindTextPlain'   : 'Tekst',
			'kindPHP'         : 'PHP bronbestand',
			'kindCSS'         : 'Cascading style sheet',
			'kindHTML'        : 'HTML document',
			'kindJS'          : 'Javascript bronbestand',
			'kindRTF'         : 'Rich Text Format',
			'kindC'           : 'C bronbestand',
			'kindCHeader'     : 'C header bronbestand',
			'kindCPP'         : 'C++ bronbestand',
			'kindCPPHeader'   : 'C++ header bronbestand',
			'kindShell'       : 'Unix shell script',
			'kindPython'      : 'Python bronbestand',
			'kindJava'        : 'Java bronbestand',
			'kindRuby'        : 'Ruby bronbestand',
			'kindPerl'        : 'Perl bronbestand',
			'kindSQL'         : 'SQL bronbestand',
			'kindXML'         : 'XML document',
			'kindAWK'         : 'AWK bronbestand',
			'kindCSV'         : 'Komma gescheiden waardes',
			'kindDOCBOOK'     : 'Docbook XML document',
			// images
			'kindImage'       : 'Afbeelding',
			'kindBMP'         : 'BMP afbeelding',
			'kindJPEG'        : 'JPEG afbeelding',
			'kindGIF'         : 'GIF afbeelding',
			'kindPNG'         : 'PNG afbeelding',
			'kindTIFF'        : 'TIFF afbeelding',
			'kindTGA'         : 'TGA afbeelding',
			'kindPSD'         : 'Adobe Photoshop afbeelding',
			'kindXBITMAP'     : 'X bitmap afbeelding',
			'kindPXM'         : 'Pixelmator afbeelding',
			// media
			'kindAudio'       : 'Audio media',
			'kindAudioMPEG'   : 'MPEG audio',
			'kindAudioMPEG4'  : 'MPEG-4 audio',
			'kindAudioMIDI'   : 'MIDI audio',
			'kindAudioOGG'    : 'Ogg Vorbis audio',
			'kindAudioWAV'    : 'WAV audio',
			'AudioPlaylist'   : 'MP3 playlist',
			'kindVideo'       : 'Video media',
			'kindVideoDV'     : 'DV video',
			'kindVideoMPEG'   : 'MPEG video',
			'kindVideoMPEG4'  : 'MPEG-4 video',
			'kindVideoAVI'    : 'AVI video',
			'kindVideoMOV'    : 'Quick Time video',
			'kindVideoWM'     : 'Windows Media video',
			'kindVideoFlash'  : 'Flash video',
			'kindVideoMKV'    : 'Matroska video',
			'kindVideoOGG'    : 'Ogg video'
		}
	}
}


/**
 * Norwegian translation
 * @author Stian Jacobsen <stian@promonorge.no>
 * @version 2012-07-03
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
	elFinder.prototype.i18.no = {
		translator : 'Stian Jacobsen &lt;stian@promonorge.no&gt;',
		language   : 'Norwegian Bokmål',
		direction  : 'ltr',
		messages   : {
			
			/********************************** errors **********************************/
			'error'                : 'Feil',
			'errUnknown'           : 'Ukjent feil.',
			'errUnknownCmd'        : 'Ukjent kommando.',
			'errJqui'              : 'Ugyldig jQuery UI konfigurasjon. Selectable, draggable og droppable komponentene må være inkludert.',
			'errNode'              : 'elFinder påkrever at DOM Elementer kan opprettes.',
			'errURL'               : 'Ugyldig elFinder konfigurasjon! URL-valget er ikke satt.',
			'errAccess'            : 'Ingen adgang.',
			'errConnect'           : 'Kunne ikke koble til.',
			'errAbort'             : 'Tilkoblingen avbrutt.',
			'errTimeout'           : 'Tilkoblingen tidsavbrudd.',
			'errNotFound'          : 'Backend ble ikke funnet',
			'errResponse'          : 'Ugyldig backend respons.',
			'errConf'              : 'Ugyldig backend konfigurasjon.',
			'errJSON'              : 'PHP JSON modul er ikke installert.',
			'errNoVolumes'         : 'Lesbar volum er ikke tilgjennelig.',
			'errCmdParams'         : 'Ugyldig parameter for kommando "$1".',
			'errDataNotJSON'       : 'Innhold er ikke JSON.',
			'errDataEmpty'         : 'Innholdet er tomt.',
			'errCmdReq'            : 'Backend spørringen påkrever kommando.',
			'errOpen'              : 'Kunne ikke åpne "$1".',
			'errNotFolder'         : 'Objektet er ikke en mappe.',
			'errNotFile'           : 'Objektet er ikke en fil.',
			'errRead'              : 'Kunne ikke lese "$1".',
			'errWrite'             : 'Kunne ikke skrive til "$1".',
			'errPerm'              : 'Du har ikke rettigheter.',
			'errLocked'            : '"$1" er låst og kan ikke flyttes, slettes eller endres',
			'errExists'            : 'Filen "$1" finnes allerede.',
			'errInvName'           : 'Ugyldig filnavn.',
			'errFolderNotFound'    : 'Mappen finnes ikke.',
			'errFileNotFound'      : 'Filen finnes ikke.',
			'errTrgFolderNotFound' : 'Målmappen "$1" ble ikke funnet.',
			'errPopup'             : 'Nettleseren din blokkerte et pop-up vindu. For å åpne filen må du aktivere pop-up i din nettlesers innstillinger.',
			'errMkdir'             : 'Kunne ikke opprette mappen "$1".',
			'errMkfile'            : 'Kunne ikke opprette filen "$1".',
			'errRename'            : 'Kunne ikke gi nytt navn til "$1".',
			'errCopyFrom'          : 'Kopiere filer fra "$1" er ikke tillatt.',
			'errCopyTo'            : 'Kopiere filer til "$1" er ikke tillatt.',
			'errUploadCommon'      : 'Feil under opplasting.',
			'errUpload'            : 'Kunne ikke laste opp "$1".',
			'errUploadNoFiles'     : 'Ingen filer funnet til opplasting.',
			'errMaxSize'           : 'Innholdet overgår maksimum tillatt størrelse.',
			'errFileMaxSize'       : 'Filen vergår maksimum tillatt størrelse.',
			'errUploadMime'        : 'Filtypen ikke tillatt.',
			'errUploadTransfer'    : '"$1" overførings feil.', 
			'errSave'              : 'Kunne ikke lagre "$1".',
			'errCopy'              : 'Kunne ikke kopiere "$1".',
			'errMove'              : 'Kunne ikke flytte "$1".',
			'errCopyInItself'      : 'Kunne ikke kopiere "$1" til seg selv.',
			'errRm'                : 'Kunne ikke slette "$1".',
			'errExtract'           : 'Kunne ikke pakke ut filer fra "$1".',
			'errArchive'           : 'Kunne ikke opprette arkiv.',
			'errArcType'           : 'akriv-typen er ikke støttet.',
			'errNoArchive'         : 'Filen er ikke et arkiv eller et arkiv som ikke er støttet.',
			'errCmdNoSupport'      : 'Backend støtter ikke denne kommandoen.',
			
			/******************************* commands names ********************************/
			'cmdarchive'   : 'Opprett arkiv',
			'cmdback'      : 'Tilbake',
			'cmdcopy'      : 'Kopier',
			'cmdcut'       : 'Klipp ut',
			'cmddownload'  : 'Last ned',
			'cmdduplicate' : 'Dupliser',
			'cmdedit'      : 'Rediger fil',
			'cmdextract'   : 'Pakk ut filer fra arkiv',
			'cmdforward'   : 'Frem',
			'cmdgetfile'   : 'Velg filer',
			'cmdhelp'      : 'Om',
			'cmdhome'      : 'Hjem',
			'cmdinfo'      : 'Vis info',
			'cmdmkdir'     : 'Ny mappe',
			'cmdmkfile'    : 'Ny tekst-fil',
			'cmdopen'      : 'Åpne',
			'cmdpaste'     : 'Lim inn',
			'cmdquicklook' : 'Forhåndsvis',
			'cmdreload'    : 'Last inn på nytt',
			'cmdrename'    : 'Gi nytt navn',
			'cmdrm'        : 'Slett',
			'cmdsearch'    : 'Find filer',
			'cmdup'        : 'Opp et nivå',
			'cmdupload'    : 'Last opp filer',
			'cmdview'      : 'Vis',
			
			/*********************************** buttons ***********************************/ 
			'btnClose'  : 'Lukk',
			'btnSave'   : 'Lagre',
			'btnRm'     : 'Slett',
			'btnCancel' : 'Avbryt',
			'btnNo'     : 'Nei',
			'btnYes'    : 'Ja',
			
			/******************************** notifications ********************************/
			'ntfopen'     : 'Åpne mappe',
			'ntffile'     : 'Åpne fil',
			'ntfreload'   : 'Last inn mappen på nytt',
			'ntfmkdir'    : 'Oppretter mappe',
			'ntfmkfile'   : 'Oppretter filer',
			'ntfrm'       : 'Sletter filer',
			'ntfcopy'     : 'Kopierer filer',
			'ntfmove'     : 'Flytter filer',
			'ntfprepare'  : 'Gjør klar til kopiering av filer',
			'ntfrename'   : 'Gir nytt navn til filer',
			'ntfupload'   : 'Laster opp filer',
			'ntfdownload' : 'Laster ned filer',
			'ntfsave'     : 'Lagrer filer',
			'ntfarchive'  : 'Oppretter arkiv',
			'ntfextract'  : 'Pakker ut filer fra arkiv',
			'ntfsearch'   : 'Søker i filer',
			'ntfsmth'     : 'Gjør noe... >_<',
			
			/************************************ dates **********************************/
			'dateUnknown' : 'Ukjent',
			'Today'       : 'I dag',
			'Yesterday'   : 'I går',
			'Jan'         : 'Jan',
			'Feb'         : 'Feb',
			'Mar'         : 'Mar',
			'Apr'         : 'Apr',
			'May'         : 'Mai',
			'Jun'         : 'Jun',
			'Jul'         : 'Jul',
			'Aug'         : 'Aug',
			'Sep'         : 'Sep',
			'Oct'         : 'Okt',
			'Nov'         : 'Nov',
			'Dec'         : 'Des',

			/********************************** messages **********************************/
			'confirmReq'      : 'Bekreftelse nødvendig',
			'confirmRm'       : 'Er du sikker på at du ønsker å slette filene?',
			'confirmRepl'     : 'Erstatt fil?',
			'apllyAll'        : 'Apply to all',
			'name'            : 'Navn',
			'size'            : 'Størrelse',
			'perms'           : 'Rettigheter',
			'modify'          : 'Endret',
			'kind'            : 'Type',
			'read'            : 'les',
			'write'           : 'skriv',
			'noaccess'        : 'ingen adgang',
			'and'             : 'og',
			'unknown'         : 'ukjent',
			'selectall'       : 'Velg alle filene',
			'selectfiles'     : 'Velg fil(er)',
			'selectffile'     : 'Velg første fil',
			'selectlfile'     : 'Velg siste fil',
			'viewlist'        : 'Listevisning',
			'viewicons'       : 'Ikoner',
			'places'          : 'Områder',
			'calc'            : 'Beregn', 
			'path'            : 'Bane',
			'aliasfor'        : 'Alias for',
			'locked'          : 'Låst',
			'dim'             : 'Størrelser',
			'files'           : 'Filer',
			'folders'         : 'Mapper',
			'items'           : 'objekter',
			'yes'             : 'ja',
			'no'              : 'nei',
			'link'            : 'Link',
			'searcresult'     : 'Søkeresultater',  
			'selected'        : 'valgte filer',
			'about'           : 'Om',
			'shortcuts'       : 'Snarveier',
			'help'            : 'Hjelp',
			'webfm'           : 'Web-filbehandler',
			'ver'             : 'Versjon',
			'protocolver'     : 'protokol versjon',
			'homepage'        : 'Project home',
			'docs'            : 'dokumentasjon',
			'github'          : 'Fork us on Github',
			'twitter'         : 'Follow us on twitter',
			'facebook'        : 'Join us on facebook',
			'team'            : 'Team',
			'chiefdev'        : 'chief developer',
			'developer'       : 'developer',
			'contributor'     : 'contributor',
			'maintainer'      : 'maintainer',
			'translator'      : 'translator',
			'icons'           : 'Ikoner',
			'dontforget'      : 'and don\'t forget to bring a towel',
			'shortcutsof'     : 'Snarveier avslått',
			'dropFiles'       : 'Slipp filer her',
			'or'              : 'eller',
			'selectForUpload' : 'Velg filer til opplasting',
			'moveFiles'       : 'Flytt filer',
			'copyFiles'       : 'Kopier filer',
			
			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Ukjent',
			'kindFolder'      : 'Mappe',
			'kindAlias'       : 'Snarvei',
			'kindAliasBroken' : 'Ugyldig snarvei',
			// applications
			'kindApp'         : 'Programfil',
			'kindPostscript'  : 'Postscript dokument',
			'kindMsOffice'    : 'Microsoft Office dokument',
			'kindMsWord'      : 'Microsoft Word dokument',
			'kindMsExcel'     : 'Microsoft Excel dokument',
			'kindMsPP'        : 'Microsoft Powerpoint presentation',
			'kindOO'          : 'Open Office dokument',
			'kindAppFlash'    : 'Flash',
			'kindPDF'         : 'Portabelt dokument (PDF)',
			'kindTorrent'     : 'Bittorrent file',
			'kind7z'          : '7z arkiv',
			'kindTAR'         : 'TAR arkiv',
			'kindGZIP'        : 'GZIP arkiv',
			'kindBZIP'        : 'BZIP arkiv',
			'kindZIP'         : 'ZIP arkiv',
			'kindRAR'         : 'RAR ar',
			'kindJAR'         : 'Java JAR file',
			'kindTTF'         : 'True Type font',
			'kindOTF'         : 'Open Type font',
			'kindRPM'         : 'RPM package',
			// texts
			'kindText'        : 'Tekst dokument',
			'kindTextPlain'   : 'Plain text',
			'kindPHP'         : 'PHP kilde',
			'kindCSS'         : 'Cascading style sheet',
			'kindHTML'        : 'HTML dokument',
			'kindJS'          : 'Javascript',
			'kindRTF'         : 'Rikt Tekst Format',
			'kindC'           : 'C kilde',
			'kindCHeader'     : 'C header kilde',
			'kindCPP'         : 'C++ kilde',
			'kindCPPHeader'   : 'C++ header kilde',
			'kindShell'       : 'Unix shell script',
			'kindPython'      : 'Python kilde',
			'kindJava'        : 'Java kilde',
			'kindRuby'        : 'Ruby kilde',
			'kindPerl'        : 'Perl script',
			'kindSQL'         : 'SQL skilde',
			'kindXML'         : 'XML dokument',
			'kindAWK'         : 'AWK kilde',
			'kindCSV'         : 'Comma separated values',
			'kindDOCBOOK'     : 'Docbook XML dokument',
			// Images
			'kindimage'       : 'Bilde',
			'kindBMP'         : 'BMP bilde',
			'kindJPEG'        : 'JPEG bilde',
			'kindGIF'         : 'GIF bilde',
			'kindPNG'         : 'PNG bilde',
			'kindTIFF'        : 'TIFF bilde',
			'kindTGA'         : 'TGA bilde',
			'kindPSD'         : 'Adobe Photoshop bilde',
			'kindXBITMAP'     : 'X bitmap bilde',
			'kindPXM'         : 'Pixelmator bilde',
			// media
			'kindAudio'       : 'Audio media',
			'kindAudioMPEG'   : 'MPEG audio',
			'kindAudioMPEG4'  : 'MPEG-4 audio',
			'kindAudioMIDI'   : 'MIDI audio',
			'kindAudioOGG'    : 'Ogg Vorbis audio',
			'kindAudioWAV'    : 'WAV audio',
			'AudioPlaylist'   : 'MP3 spilleliste',
			'kindVideo'       : 'Video media',
			'kindVideoDV'     : 'DV film',
			'kindVideoMPEG'   : 'MPEG film',
			'kindVideoMPEG4'  : 'MPEG-4 film',
			'kindVideoAVI'    : 'AVI film',
			'kindVideoMOV'    : 'Quick Time film',
			'kindVideoWM'     : 'Windows Media film',
			'kindVideoFlash'  : 'Flash film',
			'kindVideoMKV'    : 'Matroska film',
			'kindVideoOGG'    : 'Ogg film'
		}
	}
}
/**
 * Polish translation
 * @author Marcin Mikołajczyk <marcin@pjwstk.edu.pl>
 * @version 2012-01-28
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
	elFinder.prototype.i18.pl = {
		translator : 'Marcin Mikołajczyk &lt;marcin@pjwstk.edu.pl&gt;',
		language   : 'Polski',
		direction  : 'ltr',
		messages   : {

			/********************************** errors **********************************/
			'error'                : 'Błąd',
			'errUnknown'           : 'Nieznany błąd.',
			'errUnknownCmd'        : 'Nieznane polecenie.',
			'errJqui'              : 'Niepoprawna konfiguracja jQuery UI. Muszą być zawarte komponenty selectable, draggable i droppable.',
			'errNode'              : 'elFinder wymaga utworzenia obiektu DOM.',
			'errURL'               : 'Niepoprawna konfiguracja elFinder! Pole URL nie jest ustawione.',
			'errAccess'            : 'Dostęp zabroniony.',
			'errConnect'           : 'Błąd połączenia z backend.',
			'errAbort'             : 'Połączenie zostało przerwane.',
			'errTimeout'           : 'Upłynął czas oczekiwania na połączenie.',
			'errNotFound'          : 'Backend nie został znaleziony.',
			'errResponse'          : 'Nieprawidłowa odpowiedź backend.',
			'errConf'              : 'Niepoprawna konfiguracja backend.',
			'errJSON'              : 'Moduł PHP JSON nie jest zainstalowany.',
			'errNoVolumes'         : 'Brak możliwości odczytu katalogów.',
			'errCmdParams'         : 'Nieprawidłowe parametry dla polecenia "$1".',
			'errDataNotJSON'       : 'Dane nie są JSON.',
			'errDataEmpty'         : 'Dane są puste.',
			'errCmdReq'            : 'Backend wymaga podania nazwy polecenia.',
			'errOpen'              : 'Nie można otworzyć "$1".',
			'errNotFolder'         : 'Obiekt nie jest folderem.',
			'errNotFile'           : 'Obiekt nie jest plikiem.',
			'errRead'              : 'Nie można odczytać "$1".',
			'errWrite'             : 'Nie można zapisać do "$1".',
			'errPerm'              : 'Brak uprawnień.',
			'errLocked'            : '"$1" jest zablokowany i nie może zostać zmieniony, przeniesiony lub usunięty.',
			'errExists'            : 'Plik "$1" już istnieje.',
			'errInvName'           : 'Nieprawidłowa nazwa pliku.',
			'errFolderNotFound'    : 'Katalog nie został znaleziony.',
			'errFileNotFound'      : 'Plik nie został znaleziony.',
			'errTrgFolderNotFound' : 'Katalog docelowy "$1" nie został znaleziony.',
			'errPopup'             : 'Przeglądarka zablokowała otwarcie nowego okna. Aby otworzyć plik, zmień ustawienia przeglądarki.',
			'errMkdir'             : 'Nie można utworzyć katalogu "$1".',
			'errMkfile'            : 'Nie można utworzyć pliku "$1".',
			'errRename'            : 'Nie można zmienić nazwy "$1".',
			'errCopyFrom'          : 'Kopiowanie z katalogu "$1" nie jest możliwe.',
			'errCopyTo'            : 'Kopiowanie do katalogu "$1" nie jest możliwe.',
			'errUploadCommon'      : 'Błąd wysyłania.',
			'errUpload'            : 'Nie można wysłać "$1".',
			'errUploadNoFiles'     : 'Nie znaleziono plików do wysłania.',
			'errMaxSize'           : 'Przekroczono dopuszczalny rozmiar wysyłanych plików.',
			'errFileMaxSize'       : 'Plik przekracza dopuszczalny rozmiar.',
			'errUploadMime'        : 'Niedozwolony typ pliku.',
			'errUploadTransfer'    : 'Błąd przesyłania "$1".',
			'errSave'              : 'Nie można zapisać "$1".',
			'errCopy'              : 'Nie można skopiować "$1".',
			'errMove'              : 'Nie można przenieść "$1".',
			'errCopyInItself'      : 'Nie można skopiować "$1" w miejsce jego samego.',
			'errRm'                : 'Nie można usunąć "$1".',
			'errExtract'           : 'Nie można wypakować plików z "$1".',
			'errArchive'           : 'Nie można utworzyć archiwum.',
			'errArcType'           : 'Nieobsługiwany typ archiwum.',
			'errNoArchive'         : 'Plik nie jest prawidłowym typem archiwum.',
			'errCmdNoSupport'      : 'Backend nie obsługuje tego polecenia.',
			'errReplByChild'       : 'Nie można zastąpić katalogu "$1" elementem w nim zawartym',
			'errArcSymlinks'       : 'Ze względów bezpieczeństwa rozpakowywanie archiwów zawierających dowiązania symboliczne (symlinks) jest niedozwolone.',
			'errArcMaxSize'        : 'Archiwum przekracza maksymalny dopuszczalny rozmiar.',
			'errResize'            : 'Nie można zmienić rozmiaru "$1".',
			'errUsupportType'      : 'Nieobsługiwany typ pliku.',

			/******************************* commands names ********************************/
			'cmdarchive'   : 'Utwórz archiwum',
			'cmdback'      : 'Wstecz',
			'cmdcopy'      : 'Kopiuj',
			'cmdcut'       : 'Wytnij',
			'cmddownload'  : 'Pobierz',
			'cmdduplicate' : 'Duplikuj',
			'cmdedit'      : 'Edytuj plik',
			'cmdextract'   : 'Wypakuj pliki z archiwum',
			'cmdforward'   : 'Dalej',
			'cmdgetfile'   : 'Wybierz pliki',
			'cmdhelp'      : 'Informacje o programie',
			'cmdhome'      : 'Katalog główny',
			'cmdinfo'      : 'Właściwości',
			'cmdmkdir'     : 'Nowy folder',
			'cmdmkfile'    : 'Nowy plik tekstowy',
			'cmdopen'      : 'Otwórz',
			'cmdpaste'     : 'Wklej',
			'cmdquicklook' : 'Podgląd',
			'cmdreload'    : 'Odśwież',
			'cmdrename'    : 'Zmień nazwę',
			'cmdrm'        : 'Usuń',
			'cmdsearch'    : 'Wyszukaj pliki',
			'cmdup'        : 'W górę',
			'cmdupload'    : 'Wyślij pliki',
			'cmdview'      : 'Widok',
			'cmdresize'    : 'Zmień rozmiar obrazu',
			'cmdsort'      : 'Sortuj',

			/*********************************** buttons ***********************************/
			'btnClose'  : 'Zamknij',
			'btnSave'   : 'Zapisz',
			'btnRm'     : 'Usuń',
			'btnApply'  : 'Zastosuj',
			'btnCancel' : 'Anuluj',
			'btnNo'     : 'Nie',
			'btnYes'    : 'Tak',

			/******************************** notifications ********************************/
			'ntfopen'     : 'Otwórz folder',
			'ntffile'     : 'Otwórz plik',
			'ntfreload'   : 'Odśwież zawartość folderu',
			'ntfmkdir'    : 'Tworzenie katalogu',
			'ntfmkfile'   : 'Tworzenie plików',
			'ntfrm'       : 'Usuwanie plików',
			'ntfcopy'     : 'Kopiowanie plików',
			'ntfmove'     : 'Przenoszenie plików',
			'ntfprepare'  : 'Przygotowanie do kopiowania plików',
			'ntfrename'   : 'Zmiana nazw plików',
			'ntfupload'   : 'Wysyłanie plików',
			'ntfdownload' : 'Pobieranie plików',
			'ntfsave'     : 'Zapisywanie plików',
			'ntfarchive'  : 'Tworzenie archiwum',
			'ntfextract'  : 'Wypakowywanie plików z archiwum',
			'ntfsearch'   : 'Wyszukiwanie plików',
			'ntfsmth'     : 'Robienie czegoś >_<',
			'ntfloadimg'  : 'Ładowanie obrazu',

			/************************************ dates **********************************/
			'dateUnknown' : 'nieznana',
			'Today'       : 'Dzisiaj',
			'Yesterday'   : 'Wczoraj',
			'Jan'         : 'sty',
			'Feb'         : 'lut',
			'Mar'         : 'mar',
			'Apr'         : 'kwi',
			'May'         : 'maj',
			'Jun'         : 'cze',
			'Jul'         : 'lip',
			'Aug'         : 'sie',
			'Sep'         : 'wrz',
			'Oct'         : 'paź',
			'Nov'         : 'lis',
			'Dec'         : 'gru',

			/******************************** sort variants ********************************/
			'sortnameDirsFirst' : 'po nazwie (foldery pierwsze)', 
			'sortkindDirsFirst' : 'po typie (foldery pierwsze)', 
			'sortsizeDirsFirst' : 'po rozmiarze (foldery pierwsze)', 
			'sortdateDirsFirst' : 'po dacie (foldery pierwsze)', 
			'sortname'          : 'po nazwie', 
			'sortkind'          : 'po typie', 
			'sortsize'          : 'po rozmiarze',
			'sortdate'          : 'po dacie',

			/********************************** messages **********************************/
			'confirmReq'      : 'Wymagane potwierdzenie',
			'confirmRm'       : 'Czy na pewno chcesz usunąć pliki?<br/>Tej operacji nie można cofnąć!',
			'confirmRepl'     : 'Zastąpić stary plik nowym?',
			'apllyAll'        : 'Zastosuj do wszystkich',
			'name'            : 'Nazwa',
			'size'            : 'Rozmiar',
			'perms'           : 'Uprawnienia',
			'modify'          : 'Zmodyfikowany',
			'kind'            : 'Typ',
			'read'            : 'odczyt',
			'write'           : 'zapis',
			'noaccess'        : 'brak dostępu',
			'and'             : 'i',
			'unknown'         : 'nieznany',
			'selectall'       : 'Zaznacz wszystkie pliki',
			'selectfiles'     : 'Zaznacz plik(i)',
			'selectffile'     : 'Zaznacz pierwszy plik',
			'selectlfile'     : 'Zaznacz ostatni plik',
			'viewlist'        : 'Widok listy',
			'viewicons'       : 'Widok ikon',
			'places'          : 'Ulubione',
			'calc'            : 'Oblicz',
			'path'            : 'Ścieżka',
			'aliasfor'        : 'Alias do',
			'locked'          : 'Zablokowany',
			'dim'             : 'Wymiary',
			'files'           : 'Pliki',
			'folders'         : 'Foldery',
			'items'           : 'Elementy',
			'yes'             : 'tak',
			'no'              : 'nie',
			'link'            : 'Odnośnik',
			'searcresult'     : 'Wyniki wyszukiwania',
			'selected'        : 'Zaznaczonych obiektów',
			'about'           : 'Informacje o programie',
			'shortcuts'       : 'Skróty klawiaturowe',
			'help'            : 'Pomoc',
			'webfm'           : 'Menedżer plików sieciowych',
			'ver'             : 'Wersja',
			'protocolver'     : 'wersja wydania',
			'homepage'        : 'Strona główna projektu',
			'docs'            : 'Dokumentacja',
			'github'          : 'Obserwuj rozwój projektu na Github',
			'twitter'         : 'Śledź nas na Twitterze',
			'facebook'        : 'Dołącz do nas na Facebooku',
			'team'            : 'Autorzy',
			'chiefdev'        : 'główny programista',
			'developer'       : 'programista',
			'contributor'     : 'współautor',
			'maintainer'      : 'koordynator',
			'translator'      : 'tłumacz',
			'icons'           : 'Ikony',
			'dontforget'      : 'i nie zapomnij zabrać ręcznika',
			'shortcutsof'     : 'Skróty klawiaturowe są wyłączone',
			'dropFiles'       : 'Upuść pliki tutaj',
			'or'              : 'lub',
			'selectForUpload' : 'Wybierz pliki do wysłania',
			'moveFiles'       : 'Przenieś pliki',
			'copyFiles'       : 'Kopiuj pliki',
			'rmFromPlaces'    : 'Usuń z ulubionych',
			'untitled folder' : 'nowy folder',
			'untitled file.txt' : 'nowy plik.txt',
			'aspectRatio'     : 'Zachowaj proporcje',
			'scale'           : 'Skala',
			'width'           : 'Szerokość',
			'height'          : 'Wysokość',
			'mode'            : 'Tryb',
			'resize'          : 'Zmień rozmiar',
			'crop'            : 'Przytnij',

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Nieznany',
			'kindFolder'      : 'Folder',
			'kindAlias'       : 'Alias',
			'kindAliasBroken' : 'Utracony alias',
			// applications
			'kindApp'         : 'Aplikacja',
			'kindPostscript'  : 'Dokument Postscript',
			'kindMsOffice'    : 'Dokument Office',
			'kindMsWord'      : 'Dokument Word',
			'kindMsExcel'     : 'Dokument Excel',
			'kindMsPP'        : 'Prezentacja PowerPoint',
			'kindOO'          : 'Dokument OpenOffice',
			'kindAppFlash'    : 'Aplikacja Flash',
			'kindPDF'         : 'Dokument przenośny PDF',
			'kindTorrent'     : 'Plik BitTorrent',
			'kind7z'          : 'Archiwum 7z',
			'kindTAR'         : 'Archiwum TAR',
			'kindGZIP'        : 'Archiwum GZIP',
			'kindBZIP'        : 'Archiwum BZIP',
			'kindZIP'         : 'Archiwum ZIP',
			'kindRAR'         : 'Archiwum RAR',
			'kindJAR'         : 'Java JAR file',
			'kindTTF'         : 'Czcionka TrueType',
			'kindOTF'         : 'Czcionka OpenType',
			'kindRPM'         : 'Pakiet RPM',
			// texts
			'kindText'        : 'Dokument tekstowy',
			'kindTextPlain'   : 'Zwykły tekst',
			'kindPHP'         : 'Kod źródłowy PHP',
			'kindCSS'         : 'Kaskadowe arkusze stylów',
			'kindHTML'        : 'Dokument HTML',
			'kindJS'          : 'Kod źródłowy Javascript',
			'kindRTF'         : 'Tekst sformatowany RTF',
			'kindC'           : 'Kod źródłowy C',
			'kindCHeader'     : 'Plik nagłówka C',
			'kindCPP'         : 'Kod źródłowy C++',
			'kindCPPHeader'   : 'Plik nagłówka C++',
			'kindShell'       : 'Skrypt powłoki Unix',
			'kindPython'      : 'Kod źródłowy Python',
			'kindJava'        : 'Kod źródłowy Java',
			'kindRuby'        : 'Kod źródłowy Ruby',
			'kindPerl'        : 'Skrypt Perl',
			'kindSQL'         : 'Kod źródłowy SQL',
			'kindXML'         : 'Dokument XML',
			'kindAWK'         : 'Kod źródłowy AWK',
			'kindCSV'         : 'Tekst rozdzielany przecinkami CSV',
			'kindDOCBOOK'     : 'Dokument Docbook XML',
			// images
			'kindImage'       : 'Obraz',
			'kindBMP'         : 'Obraz BMP',
			'kindJPEG'        : 'Obraz JPEG',
			'kindGIF'         : 'Obraz GIF',
			'kindPNG'         : 'Obraz PNG',
			'kindTIFF'        : 'Obraz TIFF',
			'kindTGA'         : 'Obraz TGA',
			'kindPSD'         : 'Obraz Adobe Photoshop',
			'kindXBITMAP'     : 'Obraz X BitMap',
			'kindPXM'         : 'Obraz Pixelmator',
			// media
			'kindAudio'       : 'Plik dźwiękowy',
			'kindAudioMPEG'   : 'Plik dźwiękowy MPEG',
			'kindAudioMPEG4'  : 'Plik dźwiękowy MPEG-4',
			'kindAudioMIDI'   : 'Plik dźwiękowy MIDI',
			'kindAudioOGG'    : 'Plik dźwiękowy Ogg Vorbis',
			'kindAudioWAV'    : 'Plik dźwiękowy WAV',
			'AudioPlaylist'   : 'Lista odtwarzania MP3',
			'kindVideo'       : 'Plik wideo',
			'kindVideoDV'     : 'Plik wideo DV',
			'kindVideoMPEG'   : 'Plik wideo MPEG',
			'kindVideoMPEG4'  : 'Plik wideo MPEG-4',
			'kindVideoAVI'    : 'Plik wideo AVI',
			'kindVideoMOV'    : 'Plik wideo Quick Time',
			'kindVideoWM'     : 'Plik wideo Windows Media',
			'kindVideoFlash'  : 'Plik wideo Flash',
			'kindVideoMKV'    : 'Plik wideo Matroska',
			'kindVideoOGG'    : 'Plik wideo Ogg'
		}
	}
}
/**
 * Brazilian Portuguese translation
 * @author Leandro Carvalho <contato@leandrowebdev.net>
 * @version 2013-01-22
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
	elFinder.prototype.i18.pt_BR = {
		translator : 'Leandro Carvalho &lt;contato@leandrowebdev.net&gt;',
		language   : 'Português',
		direction  : 'ltr',
		dateFormat : 'd M Y H:i', // Mar 13, 2012 05:27 PM
		fancyDateFormat : '$1 H:i', // will produce smth like: Today 12:25 PM
		messages   : {

			/********************************** errors **********************************/
			'error'                : 'Erro',
			'errUnknown'           : 'Erro desconhecido.',
			'errUnknownCmd'        : 'Comando desconhecido.',
			'errJqui'              : 'Configuração inválida do JQuery UI. Verifique os componentes selectable, draggable e droppable incluidos.',
			'errNode'              : 'elFinder requer um elemento DOM para ser criado.',
			'errURL'               : 'Configuração inválida do elFinder! Você deve setar a opção da URL.',
			'errAccess'            : 'Acesso negado.',
			'errConnect'           : 'Incapaz de conectar ao backend.',
			'errAbort'             : 'Conexão abortada.',
			'errTimeout'           : 'Connection timeout.',
			'errNotFound'          : 'Backend não encontrado.',
			'errResponse'          : 'Resposta inválida do backend.',
			'errConf'              : 'Configuração inválida do backend.',
			'errJSON'              : 'Módulo PHP JSON não está instalado.',
			'errNoVolumes'         : 'Não existe nenhum volume legível disponivel.',
			'errCmdParams'         : 'Parâmetro inválido para o comando "$1".',
			'errDataNotJSON'       : 'Dados não estão no formato JSON.',
			'errDataEmpty'         : 'Dados vazios.',
			'errCmdReq'            : 'Requisição do Backend requer nome de comando.',
			'errOpen'              : 'Incapaz de abrir "$1".',
			'errNotFolder'         : 'Objeto não é uma pasta.',
			'errNotFile'           : 'Objeto não é um arquivo.',
			'errRead'              : 'Incapaz de ler "$1".',
			'errWrite'             : 'Incapaz de escrever em "$1".',
			'errPerm'              : 'Permissão negada.',
			'errLocked'            : '"$1" está bloqueado e não pode ser renomeado, movido ou removido.',
			'errExists'            : 'O nome do arquivo "$1" já existe neste local.',
			'errInvName'           : 'Nome do arquivo inválido.',
			'errFolderNotFound'    : 'Pasta não encontrada.',
			'errFileNotFound'      : 'Arquivo não encontrado.',
			'errTrgFolderNotFound' : 'Pasta de destino "$1" não encontrada.',
			'errPopup'             : 'Navegador impediu abertura da janela popup, Para abrir o arquivo desabilite está  opção no navegador.',
			'errMkdir'             : 'Incapaz de criar a pasta "$1".',
			'errMkfile'            : 'Incapaz de criar o arquivo "$1".',
			'errRename'            : 'Incapaz de renomear "$1".',
			'errCopyFrom'          : 'Copia dos arquivos do volume "$1" não permitida.',
			'errCopyTo'            : 'Copia dos arquivos para o volume "$1" não permitida.',
			'errUploadCommon'      : 'Erro no upload.',
			'errUpload'            : 'Incapaz de fazer o upload de "$1".',
			'errUploadNoFiles'     : 'Não foi encontrado nenhum arquivo para upload.',
			'errMaxSize'           : 'Os dados excedem o tamanho máximo permitido.',
			'errFileMaxSize'       : 'Arquivo excede o tamanho máximo permitido.',
			'errUploadMime'        : 'Tipo de arquivo não permitido.',
			'errUploadTransfer'    : '"$1" erro na transferência.', 
			'errSave'              : 'Incapaz de salvar "$1".',
			'errCopy'              : 'Incapaz de copiar "$1".',
			'errMove'              : 'Incapaz de mover "$1".',
			'errCopyInItself'      : 'Incapaz de copiar "$1" nele mesmo.',
			'errRm'                : 'Incapaz de remover "$1".',
			'errExtract'           : 'Incapaz de extrair os arquivos de "$1".',
			'errArchive'           : 'Incapaz de criar o arquivo.',
			'errArcType'           : 'Tipo de arquivo não suportado.',
			'errNoArchive'         : 'Arquivo inválido ou é um tipo sem suporte.',
			'errCmdNoSupport'      : 'Backend não suporta este comando.',
			'errNotUTF8Content'    : 'Arquivo "$1" não está em UTF-8 e não pode ser editado.',  // added 9.11.2011
			'errNetMount'          : 'Habilitar montagem "$1".', // added 17.04.2012
			'errNetMountNoDriver'  : 'Protocolo não suportado.',     // added 17.04.2012
			'errNetMountFailed'    : 'Monagem falhou.',         // added 17.04.2012
			'errNetMountHostReq'   : 'Servidor requerido.', // added 18.04.2012
			'errSessionExpires'    : 'Sua sessão expirou por inatividade',
			'errCreatingTempDir'   : 'Não foi possível criar um diretório temporário: "$1"',
			'errFtpDownloadFile'   : 'Não foi possível fazer o download do arquivo do FTP: "$1"',
			'errFtpUploadFile'     : 'Não foi possível fazer o upload do arquivo para o FTP: "$1"',
			'errFtpMkdir'          : 'Não foi possível criar um diretório remoto no FTP: "$1"',
			'errArchiveExec'       : 'Erro no arquivamento: "$1"',
			'errExtractExec'       : 'Erro na extração dos arquivos: "$1"',
			'cmdsort'              : 'Ordenar',
			'sortkind'             : 'por tipo',
			'sortname'             : 'por nome',
			'sortsize'             : 'por tamanho',
			'sortdate'             : 'por data',
			'sortFoldersFirst'     : 'Pastas primeiro',
			'errUploadFile'        : 'Não foi possível fazer o upload "$1".',

			/******************************* commands names ********************************/
			'cmdarchive'   : 'Criar arquivo',
			'cmdback'      : 'Voltar',
			'cmdcopy'      : 'Copiar',
			'cmdcut'       : 'Cortar',
			'cmddownload'  : 'Baixar',
			'cmdduplicate' : 'Duplicar',
			'cmdedit'      : 'Editar arquivo',
			'cmdextract'   : 'Extrair arquivo de ficheiros',
			'cmdforward'   : 'Avançar',
			'cmdgetfile'   : 'Selecionar arquivos',
			'cmdhelp'      : 'Sobre este software',
			'cmdhome'      : 'Home',
			'cmdinfo'      : 'propriedades',
			'cmdmkdir'     : 'Nova pasta',
			'cmdmkfile'    : 'Novo arquivo de texto',
			'cmdopen'      : 'Abrir',
			'cmdpaste'     : 'Colar',
			'cmdquicklook' : 'Pré-vizualização',
			'cmdreload'    : 'Recarregar',
			'cmdrename'    : 'Renomear',
			'cmdrm'        : 'Deletar',
			'cmdsearch'    : 'Achar arquivos',
			'cmdup'        : 'Ir para o diretório pai',
			'cmdupload'    : 'Fazer upload de arquivo',
			'cmdview'      : 'Vizualizar',
			'cmdresize'    : 'Redimencionar & Rodar',
			'cmdsort'      : 'Ordenar',
			'cmdnetmount'  : 'Montar unidade de rede', // added 18.04.2012

			/*********************************** buttons ***********************************/ 
			'btnClose'  : 'Fechar',
			'btnSave'   : 'Salvar',
			'btnRm'     : 'Remover',
			'btnCancel' : 'Cancelar',
			'btnNo'     : 'Não',
			'btnYes'    : 'Sim',
			'btnMount'  : 'Montar',  // added 18.04.2012

			/******************************** notifications ********************************/
			'ntfopen'     : 'Abrir Pasta',
			'ntffile'     : 'Abrir arquivo',
			'ntfreload'   : 'Recarregar conteudo da pasta',
			'ntfmkdir'    : 'Criar diretório',
			'ntfmkfile'   : 'Criar arquivos',
			'ntfrm'       : 'Deletar arquivos',
			'ntfcopy'     : 'Copiar arquivos',
			'ntfmove'     : 'Mover arquivos',
			'ntfprepare'  : 'Preparando para copiar',
			'ntfrename'   : 'Renomear arquivos',
			'ntfupload'   : 'Subindo arquivos',
			'ntfdownload' : 'Baixando os arquivos',
			'ntfsave'     : 'Slvando os arquivos',
			'ntfarchive'  : 'Criando os arquivos',
			'ntfextract'  : 'Extraindo arquivos',
			'ntfsearch'   : 'Procurando arquivos',
			'ntfsmth'     : 'Fazendo alguma coisa',
			'ntfnetmount' : 'Montando unidade de rede', // added 18.04.2012


			/************************************ dates **********************************/
			'dateUnknown' : 'Desconhecido',
			'Today'       : 'Hoje',
			'Yesterday'   : 'Ontem',
			'Jan'         : 'Jan',
			'Feb'         : 'Fev',
			'Mar'         : 'Mar',
			'Apr'         : 'Abr',
			'May'         : 'Mai',
			'Jun'         : 'Jun',
			'Jul'         : 'Jul',
			'Aug'         : 'Ago',
			'Sep'         : 'Set',
			'Oct'         : 'Out',
			'Nov'         : 'Nov',
			'Dec'         : 'Dez',

			/******************************** sort variants ********************************/
			'sortname'          : 'por nome', 
			'sortkind'          : 'por tipo', 
			'sortsize'          : 'por tam.',
			'sortdate'          : 'por data',
			'sortFoldersFirst'  : 'Pastas primeiro',
			
			/********************************** messages **********************************/
			'confirmReq'      : 'Confirmação requerida',
			'confirmRm'       : 'Você tem certeza que quer remover os arquivos?<br />Isto não pode ser desfeito!',
			'confirmRepl'     : 'Substituir arquivo velho com este novo?',
			'apllyAll'        : 'Aplicar a todos',
			'name'            : 'Nome',
			'size'            : 'Tamanho',
			'perms'           : 'Permissões',
			'modify'          : 'Modificado',
			'kind'            : 'Tipo',
			'read'            : 'Ler',
			'write'           : 'Escrever',
			'noaccess'        : 'Inacessível',
			'and'             : 'e',
			'unknown'         : 'Desconhecido',
			'selectall'       : 'Selecionar todos arquivos',
			'selectfiles'     : 'Selecionar arquivo(s)',
			'selectffile'     : 'Selecionar primeiro arquivo',
			'selectlfile'     : 'Slecionar último arquivo',
			'viewlist'        : 'Exibir como lista',
			'viewicons'       : 'Exibir como ícones',
			'places'          : 'Lugares',
			'calc'            : 'Calcular', 
			'path'            : 'Caminho',
			'aliasfor'        : 'Alias para',
			'locked'          : 'Bloqueado',
			'dim'             : 'Dimesões',
			'files'           : 'Arquivos',
			'folders'         : 'Pastas',
			'items'           : 'Itens',
			'yes'             : 'sim',
			'no'              : 'não',
			'link'            : 'Link',
			'searcresult'     : 'resultados da pesquisa',  
			'selected'        : 'itens selecionados',
			'about'           : 'Sobre',
			'shortcuts'       : 'Atalhos',
			'help'            : 'Ajuda',
			'webfm'           : 'Gerenciador de arquivos web',
			'ver'             : 'Versão',
			'protocolver'     : 'Versão do protocolo',
			'homepage'        : 'Home do projeto',
			'docs'            : 'Documentação',
			'github'          : 'Fork us on Github',
			'twitter'         : 'Siga-nos no twitter',
			'facebook'        : 'Junte-se a nós no Facebook',
			'team'            : 'Time',
			'chiefdev'        : 'Desenvolvedor chefe',
			'developer'       : 'Desenvolvedor',
			'contributor'     : 'Contribuinte',
			'maintainer'      : 'Mantenedor',
			'translator'      : 'Tradutor',
			'icons'           : 'Ícones',
			'dontforget'      : 'e não se esqueça de levar sua toalha',
			'shortcutsof'     : 'Atalhos desabilitados',
			'dropFiles'       : 'Solte os arquivos aqui',
			'or'              : 'ou',
			'selectForUpload' : 'Selecione arquivos para upload',
			'moveFiles'       : 'Mover arquivos',
			'copyFiles'       : 'Copiar arquivos',
			'rmFromPlaces'    : 'Remover de Lugares',
			'aspectRatio'     : 'Manter aspecto',
			'scale'           : 'Tamanho',
			'width'           : 'Largura',
			'height'          : 'Altura',
			'resize'          : 'Redimencionar',
			'crop'            : 'Cortar',
			'rotate'          : 'Rotacionar',
			'rotate-cw'       : 'Girar 90 graus CW',
			'rotate-ccw'      : 'Girar 90 graus CCW',
			'degree'          : '°',
			'netMountDialogTitle' : 'Montar Unidade de rede', // added 18.04.2012
			'protocol'            : 'Protocolo', // added 18.04.2012
			'host'                : 'Servidor', // added 18.04.2012
			'port'                : 'Porta', // added 18.04.2012
			'user'                : 'Usuário', // added 18.04.2012
			'pass'                : 'Senha', // added 18.04.2012

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Desconhecio',
			'kindFolder'      : 'Pasta',
			'kindAlias'       : 'Alias',
			'kindAliasBroken' : 'Alias inválido',
			// applications
			'kindApp'         : 'Aplicação',
			'kindPostscript'  : 'Documento Postscript',
			'kindMsOffice'    : 'Documento Microsoft Office',
			'kindMsWord'      : 'Documento Microsoft Word',
			'kindMsExcel'     : 'Documento Microsoft Excel',
			'kindMsPP'        : 'Apresentação Microsoft Powerpoint',
			'kindOO'          : 'Documento Open Office',
			'kindAppFlash'    : 'Aplicação Flash',
			'kindPDF'         : 'Portable Document Format (PDF)',
			'kindTorrent'     : 'Arquivo Bittorrent',
			'kind7z'          : 'Arquivo 7z',
			'kindTAR'         : 'Arquivo TAR',
			'kindGZIP'        : 'Arquivo GZIP',
			'kindBZIP'        : 'Arquivo BZIP',
			'kindZIP'         : 'Arquivo ZIP',
			'kindRAR'         : 'Arquivo RAR',
			'kindJAR'         : 'Arquivo JAR',
			'kindTTF'         : 'True Type font',
			'kindOTF'         : 'Open Type font',
			'kindRPM'         : 'Pacote RPM',
			// texts
			'kindText'        : 'Arquivo de texto',
			'kindTextPlain'   : 'Texto simples',
			'kindPHP'         : 'PHP',
			'kindCSS'         : 'CSS',
			'kindHTML'        : 'Documento HTML',
			'kindJS'          : 'Javascript',
			'kindRTF'         : 'Formato Rich Text',
			'kindC'           : 'C',
			'kindCHeader'     : 'C cabeçalho',
			'kindCPP'         : 'C++',
			'kindCPPHeader'   : 'C++ cabeçalho',
			'kindShell'       : 'Unix shell script',
			'kindPython'      : 'Python',
			'kindJava'        : 'Java',
			'kindRuby'        : 'Ruby',
			'kindPerl'        : 'Perl script',
			'kindSQL'         : 'SQL',
			'kindXML'         : 'Documento XML',
			'kindAWK'         : 'AWK',
			'kindCSV'         : 'Valores separados por vírgula',
			'kindDOCBOOK'     : 'Documento Docbook XML',
			// images
			'kindImage'       : 'Imagem',
			'kindBMP'         : 'Imagem BMP',
			'kindJPEG'        : 'Imagem JPEG',
			'kindGIF'         : 'Imagem GIF',
			'kindPNG'         : 'Imagem PNG',
			'kindTIFF'        : 'Imagem TIFF',
			'kindTGA'         : 'Imagem TGA',
			'kindPSD'         : 'Imagem Adobe Photoshop',
			'kindXBITMAP'     : 'Imagem X bitmap',
			'kindPXM'         : 'Imagem Pixelmator',
			// media
			'kindAudio'       : 'Audio media',
			'kindAudioMPEG'   : 'Audio MPEG',
			'kindAudioMPEG4'  : 'Audio MPEG-4',
			'kindAudioMIDI'   : 'Audio MIDI',
			'kindAudioOGG'    : 'Audio Ogg Vorbis',
			'kindAudioWAV'    : 'Audio WAV',
			'AudioPlaylist'   : 'MP3 playlist',
			'kindVideo'       : 'Video media',
			'kindVideoDV'     : 'DV filme',
			'kindVideoMPEG'   : 'Video MPEG',
			'kindVideoMPEG4'  : 'Video MPEG-4',
			'kindVideoAVI'    : 'Video AVI',
			'kindVideoMOV'    : 'Quick Time movie',
			'kindVideoWM'     : 'Video Windows Media',
			'kindVideoFlash'  : 'Video Flash',
			'kindVideoMKV'    : 'Video Matroska',
			'kindVideoOGG'    : 'Video Ogg'
		}
	}
}

/**
 * Russian translation
 * @author Dmitry "dio" Levashov <dio@std42.ru>
 * @version 2011-07-15
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
	elFinder.prototype.i18.ru = {
		translator : 'Dmitry "dio" Levashov &lt;dio@std42.ru&gt;',
		language   : 'Русский язык',
		direction  : 'ltr',
		dateFormat : 'd M Y H:i',
		fancyDateFormat : '$1 H:i',
		messages   : {

			/********************************** errors **********************************/
			'error'                : 'Ошибка',
			'errUnknown'           : 'Неизвестная ошибка.',
			'errUnknownCmd'        : 'Неизвестная комманда.',
			'errJqui'              : 'Отсутствуют необходимые компоненты jQuery UI - selectable, draggable и droppable.',
			'errNode'              : 'Отсутствует DOM элемент для инициализации elFinder.',
			'errURL'               : 'Некорректная настройка. Необходимо указать URL сервера.',
			'errAccess'            : 'Доступ запрещен.',
			'errConnect'           : 'Не удалось соединиться с сервером.',
			'errAbort'             : 'Соединение прервано.',
			'errTimeout'           : 'Таймаут соединения.',
			'errNotFound'          : 'Сервер не найден.',
			'errResponse'          : 'Некорректный ответ сервера.',
			'errConf'              : 'Некорректная настройка сервера.',
			'errJSON'              : 'Модуль PHP JSON не установлен.',
			'errNoVolumes'         : 'Отсутствуют корневые директории достуные для чтения.',
			'errCmdParams'         : 'Некорректные параметры комманды "$1".',
			'errDataNotJSON'       : 'Данные не формате JSON.',
			'errDataEmpty'         : 'Данные отсутствуют.',
			'errCmdReq'            : 'Для запроса к серверу необходимо указать имя комманды.',
			'errOpen'              : 'Не удалось открыть "$1".',
			'errNotFolder'         : 'Объект не является папкой.',
			'errNotFile'           : 'Объект не является файлом.',
			'errRead'              : 'Ошибка чтения "$1".',
			'errWrite'             : 'Ошибка записи "$1".',
			'errPerm'              : 'Доступ запрещен.',
			'errLocked'            : '"$1" защищен и не может быть переименован, перемещен или удален.',
			'errExists'            : 'В папке уже существует объект с именем "$1".',
			'errInvName'           : 'Недопустимое имя файла.',
			'errFolderNotFound'    : 'Папка не найдена.',
			'errFileNotFound'      : 'Файл не найден.',
			'errTrgFolderNotFound' : 'Целевая папка "$1" не найдена.',
			'errPopup'             : 'Браузер заблокировал открытие нового окна. Чтобы окрыть файл, измените настройки браузера.',
			'errMkdir'             : 'Ошибка создания папки "$1".',
			'errMkfile'            : 'Ошибка создания файла "$1".',
			'errRename'            : 'Ошибка переименования "$1".',
			'errCopyFrom'          : 'Копирование из корневой директории "$1" запрещено.',
			'errCopyTo'            : 'Копирование в корневую директорию "$1" запрещено.',
			'errUploadCommon'      : 'Ошибка загрузки файлов.',
			'errUpload'            : 'Ошибка загрузки "$1".',
			'errUploadNoFiles'     : 'Отсутствуют загруженые файлы.',
			'errMaxSize'           : 'Превышен допустимый размер загружаемых файлов.',
			'errFileMaxSize'       : 'Размер файла превышает допустимый.',
			'errUploadMime'        : 'Недопустимый тип файла.',
			'errUploadTransfer'    : 'Ошибка передачи файла "$1".', 
			'errSave'              : 'Ошибка сохранения "$1".',
			'errCopy'              : 'Ошибка копирования "$1".',
			'errMove'              : 'Ошибка перемещения "$1".',
			'errCopyInItself'      : 'Невозможно скопировать "$1" в самого себя.',
			'errRm'                : 'Ошибка удаления "$1".',
			'errExtract'           : 'Ошибка извлечения файлов из архива "$1".',
			'errArchive'           : 'Ошибка создания архива.',
			'errArcType'           : 'Неподдерживаемый тип архива.',
			'errNoArchive'         : 'Файл не является архивом допустимого типа.',
			'errCmdNoSupport'      : 'Сервер не поддерживает эту комманду.',
			'errReplByChild'       : 'Невозможно заменить папку "$1" содержащимся в ней объектом.',
			'errArcSymlinks'       : 'По соображениям безопасности запрещена распаковка архивов, содержащих ссылки (symlinks) или файлы с недопустимыми именами.', // edited 24.06.2012
			'errArcMaxSize'        : 'Размер файлов в архиве превышает максимально разрешенный.',
			'errResize'            : 'Не удалось изменить размер "$1".',
			'errUsupportType'      : 'Неподдерживаемый тип файла.',
			'errNotUTF8Content'    : 'Файл "$1" содержит текст в кодировке отличной от UTF-8 и не может быть отредактирован.',  // added 9.11.2011
			'errNetMount'          : 'Не удалось подключить "$1".',    // added 17.04.2012
			'errNetMountNoDriver'  : 'Неподдерживаемый протокол.',     // added 17.04.2012
			'errNetMountFailed'    : 'Ошибка монтирования.',           // added 17.04.2012
			'errNetMountHostReq'   : 'Host required.', // added 18.04.2012
			'errSessionExpires'    : 'Сессия была завершена так как превышено время отсутствия активности',
			'errCreatingTempDir'   : 'Ошибка при создании временной директории: "$1"',
			'errFtpDownloadFile'   : 'Ошибка при скачивании файла с FTP: "$1"',
			'errFtpUploadFile'     : 'Ошибка при загрузке файла на FTP: "$1"',
			'errFtpMkdir'          : 'Ошибка при создании директории на FTP: "$1"',
			'errArchiveExec'       : 'Ошибка при выполнении архивации: "$1"',
			'errExtractExec'       : 'Ошибка при выполнении распаковки: "$1"',

			'errUploadFile'        : 'Невозможно загрузить файл "$1"',


			/******************************* commands names ********************************/
			'cmdarchive'   : 'Создать архив',
			'cmdback'      : 'Назад',
			'cmdcopy'      : 'Копировать',
			'cmdcut'       : 'Вырезать',
			'cmddownload'  : 'Скачать',
			'cmdduplicate' : 'Сделать копию',
			'cmdedit'      : 'Редактировать',
			'cmdextract'   : 'Распаковать архив',
			'cmdforward'   : 'Вперед',
			'cmdgetfile'   : 'Выбрать',
			'cmdhelp'      : 'О программе',
			'cmdhome'      : 'Домой',
			'cmdinfo'      : 'Свойства',
			'cmdmkdir'     : 'Новая папка',
			'cmdmkfile'    : 'Новый файл',
			'cmdopen'      : 'Открыть',
			'cmdpaste'     : 'Вставить',
			'cmdquicklook' : 'Быстрый просмотр',
			'cmdreload'    : 'Обновить',
			'cmdrename'    : 'Переименовать',
			'cmdrm'        : 'Удалить',
			'cmdsearch'    : 'Поиск',
			'cmdup'        : 'Наверх',
			'cmdupload'    : 'Загрузить файлы',
			'cmdview'      : 'Вид',
			'cmdresize'    : 'Размер изображения',
			'cmdsort'      : 'Сортировать',
			
			/*********************************** buttons ***********************************/ 
			'btnClose'  : 'Закрыть',
			'btnSave'   : 'Сохранить',
			'btnRm'     : 'Удалить',
			'btnCancel' : 'Отмена',
			'btnApply'  : 'Применить',
			'btnNo'     : 'Нет',
			'btnYes'    : 'Да',
			'btnMount'  : 'Подключить',  // added 18.04.2012
			/******************************** notifications ********************************/
			'ntfopen'     : 'Открытие папки',
			'ntffile'     : 'Открытие файла',
			'ntfreload'   : 'Обновление текущей папки',
			'ntfmkdir'    : 'Создание папки',
			'ntfmkfile'   : 'Создание файла',
			'ntfrm'       : 'Удаление файлов',
			'ntfcopy'     : 'Копирование файлов',
			'ntfmove'     : 'Перемещение файлов',
			'ntfprepare'  : 'Подготовка к копированию',
			'ntfrename'   : 'Переименование файлов',
			'ntfupload'   : 'Загрузка файлов',
			'ntfdownload' : 'Скачивание файлов',
			'ntfsave'     : 'Сохранение файлов',
			'ntfarchive'  : 'Создание архива',
			'ntfextract'  : 'Распаковка архива',
			'ntfsearch'   : 'Поиск файлов',
			'ntfsmth'     : 'Занят важным делом',
			'ntfnetmount' : 'Монтирую сетевой диск', // added 18.04.2012

			/************************************ dates **********************************/
			'dateUnknown' : 'Незвестно',
			'Today'       : 'Сегодня',
			'Yesterday'   : 'Вчера',
			'Jan'         : 'Янв',
			'Feb'         : 'Фев',
			'Mar'         : 'Мар',
			'Apr'         : 'Апр',
			'May'         : 'Май',
			'Jun'         : 'Июнь',
			'Jul'         : 'Июль',
			'Aug'         : 'Авг',
			'Sep'         : 'Сен',
			'Oct'         : 'Окт',
			'Nov'         : 'Ноя',
			'Dec'         : 'Дек',
			'January'     : 'Январь',
			'February'    : 'Февраль',
			'March'       : 'Март',
			'April'       : 'Апрель',
			'May'         : 'Май',
			'June'        : 'Июнь',
			'July'        : 'Июль',
			'August'      : 'Август',
			'September'   : 'Сентябрь',
			'October'     : 'Октябрь',
			'November'    : 'Ноябрь',
			'December'    : 'Декабрь',
			'Sunday'      : 'Воскресенье', 
			'Monday'      : 'Понедельник', 
			'Tuesday'     : 'Вторник', 
			'Wednesday'   : 'Среда', 
			'Thursday'    : 'Четверг', 
			'Friday'      : 'Пятница', 
			'Saturday'    : 'Суббота',
			'Sun'         : 'Вск', 
			'Mon'         : 'Пнд', 
			'Tue'         : 'Втр', 
			'Wed'         : 'Срд', 
			'Thu'         : 'Чтв', 
			'Fri'         : 'Птн', 
			'Sat'         : 'Сбт',

			/******************************** sort variants ********************************/
			'sortname'          : 'по имени', 
			'sortkind'          : 'по типу', 
			'sortsize'          : 'по размеру',
			'sortdate'          : 'по дате',
			'sortFoldersFirst'  : 'Папки в начале',

			/********************************** messages **********************************/
			'confirmReq'      : 'Необходимо подтверждение.',
			'confirmRm'       : 'Хотите удалить файлы?<br>Действие необратимо.',
			'confirmRepl'     : 'Заменить старый файл новым?',
			'apllyAll'        : 'для всех',
			'name'            : 'Имя файла',
			'size'            : 'Размер',
			'perms'           : 'Доступ',
			'modify'          : 'Изменен',
			'kind'            : 'Тип',
			'read'            : 'чтение',
			'write'           : 'запись',
			'noaccess'        : 'нет доступа',
			'and'             : 'и',
			'unknown'         : 'неизвестно',
			'selectall'       : 'Выбрать все файлы',
			'selectfiles'     : 'Выбрать файл(ы)',
			'selectffile'     : 'Выбрать первый файл',
			'selectlfile'     : 'Выбрать последний файл',
			'viewlist'        : 'В виде списка',
			'viewicons'       : 'В виде иконок',
			'places'          : 'Избранное',
			'calc'            : 'вычисляю', 
			'path'            : 'Путь',
			'aliasfor'        : 'Указывает на',
			'locked'          : 'Защита',
			'dim'             : 'Разрешение',
			'files'           : 'Файлы',
			'folders'         : 'Папки',
			'items'           : 'Объекты',
			'yes'             : 'да',
			'no'              : 'нет',
			'link'            : 'Ссылка',
			'searcresult'     : 'Результаты поиска',  
			'selected'        : 'выбрано',
			'about'           : 'О программе',
			'shortcuts'       : 'Горячие клавиши',
			'help'            : 'Помощь',
			'webfm'           : 'Файловый менеджер для web',
			'ver'             : 'Версия',
			'protocolver'     : 'версия протокола',
			'homepage'        : 'Сайт проекта',
			'docs'            : 'Документация',
			'github'          : 'Fork us on Github',
			'twitter'         : 'Follow us in twitter',
			'facebook'        : 'Join us on facebook',
			'team'            : 'Авторы',
			'chiefdev'        : 'ведущий разработчик',
			'developer'       : 'разработчик',
			'contributor'     : 'участник',
			'maintainer'      : 'сопровождение проекта',
			'translator'      : 'переводчик',
			'icons'           : 'Иконки',
			'dontforget'      : 'и не забудьте взять своё полотенце',
			'shortcutsof'     : 'Горячие клавиши отключены',
			'dropFiles'       : 'Бросить файлы',
			'or'              : 'или',
			'selectForUpload' : 'Выбрать файлы для загрузки',
			'moveFiles'       : 'Перемещение файлов',
			'copyFiles'       : 'Копирование файлов',
			'rmFromPlaces'    : 'Удалить из избранного',
			'untitled folder' : 'новая папка',
			'untitled file.txt' : 'новый файл.txt',
			'aspectRatio'     : 'Сохранять пропорции',
			'scale'           : 'Масштаб',
			'width'           : 'Ширина',
			'height'          : 'Высота',
			'resize'          : 'Размер',
			'crop'            : 'Кадрировать',
			'rotate'          : 'Поворот',
			'rotate-cw'       : 'Поворот на 90 градусов по часовой стрелке',
			'rotate-ccw'      : 'Поворот на 90 градусов против часовой стрелке',
			'degree'          : '°',
			'netMountDialogTitle' : 'Подключить сетевой диск', // added 18.04.2012
			'protocol'            : 'Протокол', // added 18.04.2012
			'host'                : 'Хост', // added 18.04.2012
			'port'                : 'Порт', // added 18.04.2012
			'user'                : 'Пользователь', // added 18.04.2012
			'pass'                : 'Пароль', // added 18.04.2012
			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Неизвестный',
			'kindFolder'      : 'Папка',
			'kindAlias'       : 'Ссылка',
			'kindAliasBroken' : 'Битая ссылка',
			// applications
			'kindApp'         : 'Приложение',
			'kindPostscript'  : 'Документ Postscript',
			'kindMsOffice'    : 'Документ Microsoft Office',
			'kindMsWord'      : 'Документ Microsoft Word',
			'kindMsExcel'     : 'Документ Microsoft Excel',
			'kindMsPP'        : 'Презентация Microsoft Powerpoint',
			'kindOO'          : 'Документ Open Office',
			'kindAppFlash'    : 'Приложение Flash',
			'kindPDF'         : 'Документ PDF',
			'kindTorrent'     : 'Файл Bittorrent',
			'kind7z'          : 'Архив 7z',
			'kindTAR'         : 'Архив TAR',
			'kindGZIP'        : 'Архив GZIP',
			'kindBZIP'        : 'Архив BZIP',
			'kindZIP'         : 'Архив ZIP',
			'kindRAR'         : 'Архив RAR',
			'kindJAR'         : 'Файл Java JAR',
			'kindTTF'         : 'Шрифт True Type',
			'kindOTF'         : 'Шрифт Open Type',
			'kindRPM'         : 'Пакет RPM',
			// texts
			'kindText'        : 'Текстовый документ',
			'kindTextPlain'   : 'Простой текст',
			'kindPHP'         : 'Исходник PHP',
			'kindCSS'         : 'Таблицы стилей CSS',
			'kindHTML'        : 'Документ HTML',
			'kindJS'          : 'Исходник Javascript',
			'kindRTF'         : 'Rich Text Format',
			'kindC'           : 'Исходник C',
			'kindCHeader'     : 'Заголовочный файл C',
			'kindCPP'         : 'Исходник C++',
			'kindCPPHeader'   : 'Заголовочный файл C++',
			'kindShell'       : 'Unix shell script',
			'kindPython'      : 'Исходник Python',
			'kindJava'        : 'Исходник Java',
			'kindRuby'        : 'Исходник Ruby',
			'kindPerl'        : 'Исходник Perl',
			'kindSQL'         : 'Исходник SQL',
			'kindXML'         : 'XML document',
			'kindAWK'         : 'Исходник AWK',
			'kindCSV'         : 'Текст с разделителями',
			'kindDOCBOOK'     : 'Документ Docbook XML',
			// images
			'kindImage'       : 'Изображение',
			'kindBMP'         : 'Изображение BMP',
			'kindJPEG'        : 'Изображение JPEG',
			'kindGIF'         : 'Изображение GIF',
			'kindPNG'         : 'Изображение PNG',
			'kindTIFF'        : 'Изображение TIFF',
			'kindTGA'         : 'Изображение TGA',
			'kindPSD'         : 'Изображение Adobe Photoshop',
			'kindXBITMAP'     : 'Изображение X bitmap',
			'kindPXM'         : 'Изображение Pixelmator',
			// media
			'kindAudio'       : 'Аудио файл',
			'kindAudioMPEG'   : 'Аудио MPEG',
			'kindAudioMPEG4'  : 'Аудио MPEG-4',
			'kindAudioMIDI'   : 'Аудио MIDI',
			'kindAudioOGG'    : 'Аудио Ogg Vorbis',
			'kindAudioWAV'    : 'Аудио WAV',
			'AudioPlaylist'   : 'Плейлист MP3',
			'kindVideo'       : 'Видео файл',
			'kindVideoDV'     : 'Видео DV',
			'kindVideoMPEG'   : 'Видео MPEG',
			'kindVideoMPEG4'  : 'Видео MPEG-4',
			'kindVideoAVI'    : 'Видео AVI',
			'kindVideoMOV'    : 'Видео Quick Time',
			'kindVideoWM'     : 'Видео Windows Media',
			'kindVideoFlash'  : 'Видео Flash',
			'kindVideoMKV'    : 'Видео Matroska',
			'kindVideoOGG'    : 'Видео Ogg'
			,'volume_files' : 'Файлы '
		}
	}
}


 


/**
 * Turkish translation
 * @author I.Taskinoglu & A.Kaya <alikaya@armsyazilim.com>
 * @version 2012-06-15
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
	elFinder.prototype.i18.tr = {
		translator : 'I.Taskinoglu & A.Kaya &lt;alikaya@armsyazilim.com&gt;',
		language   : 'Türkçe',
		direction  : 'ltr',
		dateFormat : 'd.m.Y H:i',
		fancyDateFormat : '$1 H:i',
		messages   : {

			/********************************** errors **********************************/
			'error'                : 'Hata',
			'errUnknown'           : 'Bilinmeyen hata.',
			'errUnknownCmd'        : 'Bilinmeyen komut.',
			'errJqui'              : 'Geçersiz Jquery configurasyonu.',
			'errNode'              : 'DOM objesine ihtiyaç duyuluyor.',
			'errURL'               : 'Geçersiz konfigurasyon, URL ayarlanmamış.',
			'errAccess'            : 'Erişim yok.',
			'errConnect'           : 'Sunucya bağlanamadı.',
			'errAbort'             : 'Bağlantı kesildi.',
			'errTimeout'           : 'Bağlantı zaman aşımına uğradı.',
			'errNotFound'          : 'Sunucu bulunamadı.',
			'errResponse'          : 'Sunucu cevabı geçersiz.',
			'errConf'              : 'Sunucu ayarları geçersiz.',
			'errJSON'              : 'PHP JSON modülü kurulmamış.',
			'errNoVolumes'         : 'Okunabilir fiziksel disk yok.',
			'errCmdParams'         : '"$1" komutu için geçersiz parametre.',
			'errDataNotJSON'       : 'Veri JSON formatında değil.',
			'errDataEmpty'         : 'Veri Boş.',
			'errCmdReq'            : 'Sunucu isteği komut gerektiriyor.',
			'errOpen'              : '"$1" açılamadı.',
			'errNotFolder'         : 'Obje Klasör değil.',
			'errNotFile'           : 'Obje Dosya değil.',
			'errRead'              : '"$1" okunamadı.',
			'errWrite'             : '"$1" Dosyasına yazılamadı.',
			'errPerm'              : 'Yetki Yok.',                        
			'errLocked'            : '"$1" dosyası kilitli olduğu için adı değiştirilemedi, taşındı veya silindi.',
			'errExists'            : '"$1" adlı dosya var zaten.',
			'errInvName'           : 'Geçersiz dosya adı.',
			'errFolderNotFound'    : 'Dizin bulunamadı.',
			'errFileNotFound'      : 'Dosya bulunamadı.',
			'errTrgFolderNotFound' : 'Hedef klasör ["$1"] bulunamadı.',
			'errPopup'             : 'İnternet gezgininiz açılır pencereleri engellememeli. Ayarlardan izin verip tekrar deneyin.',
			'errMkdir'             : '"$1" dizin oluşturulamadı.',
			'errMkfile'            : '"$1" dosya oluşturulamadı.',
			'errRename'            : '"$1" adı değiştirilemedi.',
			'errCopyFrom'          : '"$1" dizininden kopyalamaya izin verilmedi.',
			'errCopyTo'            : '"$1" dizinine kopyalamaya izin verilmedi.',
			'errUploadCommon'      : 'Dosya gönderme hatası.',
			'errUpload'            : '"$1" dosya gönderilemedi.',
			'errUploadNoFiles'     : 'Göndermek için dosya bulunamadı.',
			'errMaxSize'           : 'Data izin verilen boyuttan büyük.',
			'errFileMaxSize'       : 'Dosya izin verilen boyuttan büyük.',
			'errUploadMime'        : 'Dosya tipine izin verilmiyor.',
			'errUploadTransfer'    : '"$1" transfer hatası.', 
			'errSave'              : '"$1" kaydedilemez.',
			'errCopy'              : '"$1" kopylanamaz.',
			'errMove'              : '"$1" taşınamaz.',
			'errCopyInItself'      : '"$1" kendi içinde kopyalanamaz.',
			'errRm'                : '"$1" silinemedi.',
			'errExtract'           : '"$1" arşivi açılamadı.',
			'errArchive'           : 'Arşiv oluşturulamadı.',
			'errArcType'           : 'Desteklenmeyen Arşiv Tipi.',
			'errNoArchive'         : 'Dosya arşiv değil veya desteklenmiyor.',
			'errCmdNoSupport'      : 'Bu komut desteklenmiyor.',
			'errReplByChild'       : 'Klasör “$1” içerdiği dosyadan dolayı değiştirilemedi',
			'errArcSymlinks'       : 'Güvenlik nedeni ile arşiv açılamadı.',
			'errArcMaxSize'        : 'Arşiv dosyası izin verilen maksimum boyutun üstünde.',
			'errResize'            : 'Boyutlandırılamadı "$1".',
			'errUsupportType'      : 'Desteklenmeyen Dosya Tipi.',

			/******************************* commands names ********************************/
			'cmdarchive'   : 'Arşiv Oluştur',
			'cmdback'      : 'Geri',
			'cmdcopy'      : 'Kopyala',
			'cmdcut'       : 'Kes',
			'cmddownload'  : 'İndir',
			'cmdduplicate' : 'Dosyayı Çoğalt',
			'cmdedit'      : 'Dosyayı Düzenle',
			'cmdextract'   : 'Dosyaları Arşivden Çıkar',
			'cmdforward'   : 'İleri',
			'cmdgetfile'   : 'Dosyayı Seç',
			'cmdhelp'      : 'elFinde Hakkında',
			'cmdhome'      : 'Ana Sayfa',
			'cmdinfo'      : 'Bilgi',
			'cmdmkdir'     : 'Yeni Klasör',
			'cmdmkfile'    : 'Yeni Boş Dosya',
			'cmdopen'      : 'Aç',
			'cmdpaste'     : 'Yapıştır',
			'cmdquicklook' : 'Önizleme',
			'cmdreload'    : 'Yenile',
			'cmdrename'    : 'Adını Değiştir',
			'cmdrm'        : 'Sil',
			'cmdsearch'    : 'Dosya Ara',
			'cmdup'        : 'Üst Klasöre Git',
			'cmdupload'    : 'Dosya Gönder',
			'cmdview'      : 'Aç',
			'cmdresize'    : 'Resmi Yeniden Boyutlandır',
			'cmdsort'      : 'Sırala',

			/*********************************** buttons ***********************************/
			'btnClose'  : 'Kapat',
			'btnSave'   : 'Kaydet',
			'btnRm'     : 'Sil',
			'btnApply'  : 'Uygula',
			'btnCancel' : 'Vazgeç',
			'btnNo'     : 'Hayır',
			'btnYes'    : 'Evet',

			/******************************** notifications ********************************/
			'ntfopen'     : 'Klasör Aç',
			'ntffile'     : 'Dosya Aç',
			'ntfreload'   : 'Klasörü Yenile',
			'ntfmkdir'    : 'Klasör Oluşuturuluyor',
			'ntfmkfile'   : 'Dosya Oluşturuluyor',
			'ntfrm'       : 'Dosyaları Sil',
			'ntfcopy'     : 'Dosyaları Kopyala',
			'ntfmove'     : 'Dosyaları Taşı',
			'ntfprepare'  : 'Kopyalamak için Hazırla',
			'ntfrename'   : 'Dosyaları Adlandır',
			'ntfupload'   : 'Dosyalar Yükleniyor',
			'ntfdownload' : 'Dosyalar İndiriliyor',
			'ntfsave'     : 'Dosyalar Kaydediliyor',
			'ntfarchive'  : 'Arşiv Oluşturuluyor',
			'ntfextract'  : 'Dosyalar Arşivde Çıkarılıyor',
			'ntfsearch'   : 'Dosyalar Aranıyor',
			'ntfsmth'     : 'Birşeyler Yapılıyor >_<',
			'ntfloadimg'  : 'Resim Yükleniyor',

			/************************************ dates **********************************/
			'dateUnknown' : 'bilinmiyor',
			'Today'       : 'Bugün',
			'Yesterday'   : 'Dün',
			'Jan'         : 'Oca',
			'Feb'         : 'Şub',
			'Mar'         : 'Mar',
			'Apr'         : 'Nis',
			'May'         : 'May',
			'Jun'         : 'Haz',
			'Jul'         : 'Tem',
			'Aug'         : 'Ağu',
			'Sep'         : 'Eyl',
			'Oct'         : 'Ekm',
			'Nov'         : 'Kas',
			'Dec'         : 'Ara',
			'January'     : 'Ocak',
			'February'    : 'Şubat',
			'March'       : 'Mart',
			'April'       : 'Nisan',
			'May'         : 'Mayıs',
			'June'        : 'Haziran',
			'July'        : 'Temmuz',
			'August'      : 'Ağustos',
			'September'   : 'Eylül',
			'October'     : 'Ekim',
			'November'    : 'Kasım',
			'December'    : 'Aralık',
			'Sunday'      : 'Pazar', 
			'Monday'      : 'Pazartesi', 
			'Tuesday'     : 'Salı', 
			'Wednesday'   : 'Çarşamba', 
			'Thursday'    : 'Perşembe', 
			'Friday'      : 'Cuma', 
			'Saturday'    : 'Cumartesi',
			'Sun'         : 'Paz', 
			'Mon'         : 'Pzt', 
			'Tue'         : 'Sal', 
			'Wed'         : 'Çar', 
			'Thu'         : 'Per', 
			'Fri'         : 'Cum', 
			'Sat'         : 'Cmt',
			/******************************** sort variants ********************************/
			'sortnameDirsFirst' : 'Ada göre (önce klasörler)', 
			'sortkindDirsFirst' : 'Türe göre (önce klasörler)', 
			'sortsizeDirsFirst' : 'Boyuta göre (önce klasörler)', 
			'sortdateDirsFirst' : 'Tarihe göre (önce klasörler)', 
			'sortname'          : 'Ada göre', 
			'sortkind'          : 'Türe göre', 
			'sortsize'          : 'Boyuta göre',
			'sortdate'          : 'Tarihe göre',

			/********************************** messages **********************************/
			'confirmReq'      : 'Onay gerekli',
			'confirmRm'       : 'Dosyaları silmek istediğinize emin misiniz?<br/>Bu geri alınamaz!',
			'confirmRepl'     : 'Eski dosyaları yenileriyle değiştir?',
			'apllyAll'        : 'Tümünü uygula',
			'name'            : 'Ad',
			'size'            : 'Boyut',
			'perms'           : 'Yetkiler',
			'modify'          : 'Değiştildi',
			'kind'            : 'Tür',
			'read'            : 'oku',
			'write'           : 'yaz',
			'noaccess'        : 'yetki yok',
			'and'             : 've',
			'unknown'         : 'bilinmeyen',
			'selectall'       : 'Tüm Dosyaları Seç',
			'selectfiles'     : 'Dosyaları Seç',
			'selectffile'     : 'İlk Dosyayı Seç',
			'selectlfile'     : 'Son Dosyayı Seç',
			'viewlist'        : 'Liste görünümü',
			'viewicons'       : 'İkon görünümü',
			'places'          : 'Klasörler',
			'calc'            : 'Hesapla', 
			'path'            : 'Dizin',
			'aliasfor'        : 'Takma adı :',
			'locked'          : 'Kilitli',
			'dim'             : 'Ölçüler',
			'files'           : 'Dosyalar',
			'folders'         : 'Klasörler',
			'items'           : 'Nesneler',
			'yes'             : 'evet',
			'no'              : 'hayır',
			'link'            : 'Bağlantı',
			'searcresult'     : 'Arama Sonuçları',  
			'selected'        : 'Şeçili Nesne',
			'about'           : 'Hakkında',
			'shortcuts'       : 'Kısayollar',
			'help'            : 'Yardım',
			'webfm'           : 'Dosya Yöneticisi',
			'ver'             : 'Versiyon',
			'protocol'        : 'protocol versiyonu',
			'homepage'        : 'Proje Ana Sayfası',
			'docs'            : 'Yardım',
			'github'          : 'Fork us on Github',
			'twitter'         : 'twittwer da takip et',
			'facebook'        : 'facebookda bize katıl',
			'team'            : 'Takım',
			'chiefdev'        : 'Yapımcı',
			'developer'       : 'yapımcı',
			'contributor'     : 'katkı',
			'maintainer'      : 'geliştirici',
			'translator'      : 'çeviri',
			'icons'           : 'İkonlar',
			'dontforget'      : 'Ve... havlunuzu almayı unutmayın',
			'shortcutsof'     : 'Kısayollar Kapalı',
			'dropFiles'       : 'Dosyaları buraya sürükleyin',
			'or'              : 'veya',
			'selectForUpload' : 'Yüklenecek Dosyaları Seçin',
			'moveFiles'       : 'Dosyaları Taşı',
			'copyFiles'       : 'Dosyaları Kopyala',
			'rmFromPlaces'    : 'Klasörlerden Sil',
			'untitled folder' : 'basliksiz_klasor',
			'untitled file.txt' : 'basliksiz_dosya.txt',
			'aspectRatio'     : 'Oran',
			'scale'           : 'Ölçekle',
			'width'           : 'Genişlik',
			'height'          : 'Yükseklik',
			'mode'            : 'Mod',
			'resize'          : 'Boyutlandır',
			'crop'            : 'Kes',
			'rotate'          : 'Döndür',
			'rotate-cw'       : '90 Derece Sağa Döndür',
			'rotate-ccw'      : '90 Derece Sola Döndür',
			'degree'          : 'Açı',

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Bilinmiyor',
			'kindFolder'      : 'Klasör',
			'kindAlias'       : 'Takma Ad',
			'kindAliasBroken' : 'Bozuk Takma Ad',
			// applications
			'kindApp'         : 'Uygulama',
			'kindPostscript'  : 'Postscript Döküman',
			'kindMsOffice'    : 'Microsoft Office Dökümanı',
			'kindMsWord'      : 'Microsoft Word Dökümanı',
			'kindMsExcel'     : 'Microsoft Excel Dökümanı',
			'kindMsPP'        : 'Microsoft Powerpoint Sunum',
			'kindOO'          : 'Open Office Dökümanı',
			'kindAppFlash'    : 'Flash Uygulaması',
			'kindPDF'         : 'Adobe Acrobat (PDF)',
			'kindTorrent'     : 'Bittorrent dosyası',
			'kind7z'          : '7z arşivi',
			'kindTAR'         : 'TAR arşivi',
			'kindGZIP'        : 'GZIP arşivi',
			'kindBZIP'        : 'BZIP arşivi',
			'kindZIP'         : 'ZIP arşivi',
			'kindRAR'         : 'RAR arşivi',
			'kindJAR'         : 'Java JAR dosyası',
			'kindTTF'         : 'True Type font',
			'kindOTF'         : 'Open Type font',
			'kindRPM'         : 'RPM paketi',
			// texts
			'kindText'        : 'Text Dökümanı',
			'kindTextPlain'   : 'Plain text',
			'kindPHP'         : 'PHP dosyası',
			'kindCSS'         : 'CSS dosyası',
			'kindHTML'        : 'HTML dosyası',
			'kindJS'          : 'Javascript dosyası',
			'kindRTF'         : 'RTF dosyası',
			'kindC'           : 'C dosyası',
			'kindCHeader'     : 'C başlık dosyası',
			'kindCPP'         : 'C++ dosyası',
			'kindCPPHeader'   : 'C++ başlık dosyası',
			'kindShell'       : 'Unix shell dosyası',
			'kindPython'      : 'Python dosyası',
			'kindJava'        : 'Java dosyası',
			'kindRuby'        : 'Ruby dosyası',
			'kindPerl'        : 'Perl dosyası',
			'kindSQL'         : 'SQL dosyası',
			'kindXML'         : 'XML dosyası',
			'kindAWK'         : 'AWK dosyası',
			'kindCSV'         : 'CSV dosyası',
			'kindDOCBOOK'     : 'Docbook XML dosyası',
			// images
			'kindImage'       : 'Resim',
			'kindBMP'         : 'BMP Resim',
			'kindJPEG'        : 'JPEG Resim',
			'kindGIF'         : 'GIF Resim',
			'kindPNG'         : 'PNG Resim',
			'kindTIFF'        : 'TIFF Resim',
			'kindTGA'         : 'TGA Resim',
			'kindPSD'         : 'Adobe Photoshop Resim',
			'kindXBITMAP'     : 'X bitmap Resim',
			'kindPXM'         : 'Pixelmator Resim',
			// media
			'kindAudio'       : 'Ses Dosyası',
			'kindAudioMPEG'   : 'MPEG ses',
			'kindAudioMPEG4'  : 'MPEG-4 ses',
			'kindAudioMIDI'   : 'MIDI ses',
			'kindAudioOGG'    : 'Ogg Vorbis ses',
			'kindAudioWAV'    : 'WAV ses',
			'AudioPlaylist'   : 'MP3 Çalma Listesi',
			'kindVideo'       : 'Video Dosyası',
			'kindVideoDV'     : 'DV video',
			'kindVideoMPEG'   : 'MPEG video',
			'kindVideoMPEG4'  : 'MPEG-4 video',
			'kindVideoAVI'    : 'AVI video',
			'kindVideoMOV'    : 'Quick Time video',
			'kindVideoWM'     : 'Windows Media video',
			'kindVideoFlash'  : 'Flash video',
			'kindVideoMKV'    : 'Matroska video',
			'kindVideoOGG'    : 'Ogg video'
		}
	}
}
/**

Bản dịch Việt Nam
@Được dịch bởi Chung Thủy f
@Phiên bản 16-01-2013 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
elFinder.prototype.i18.vi = {
translator : 'Chung Thủy f <chungthuyf@gmail.com>',
language : 'Ngôn ngữ Việt Nam',
direction : 'ltr',
dateFormat : 'd.m.Y H:i',
fancyDateFormat : '$1 H:i',
messages : {

        /********************************** errors **********************************/
        'error'                : 'Lỗi',
        'errUnknown'           : 'Lỗi không xác định được.',
        'errUnknownCmd'        : 'Lỗi không rõ lệnh.',
        'errJqui'              : 'Invalid jQuery UI configuration. Selectable, draggable and droppable components must be included.',
        'errNode'              : 'elFinder requires DOM Element to be created.',
        'errURL'               : 'Cấu elFinder không hợp lệ! URL không được thiết lập tùy chọn.',
        'errAccess'            : 'Truy cập bị từ chối.',
        'errConnect'           : 'Unable to connect to backend.',
        'errAbort'             : 'Kết nối bị hủy bỏ.',
        'errTimeout'           : 'Connection timeout.',
        'errNotFound'          : 'Backend not found.',
        'errResponse'          : 'Invalid backend response.',
        'errConf'              : 'Invalid backend configuration.',
        'errJSON'              : 'PHP JSON module not installed.',
        'errNoVolumes'         : 'Readable volumes not available.',
        'errCmdParams'         : 'Invalid parameters for command "$1".',
        'errDataNotJSON'       : 'Data is not JSON.',
        'errDataEmpty'         : 'Data is empty.',
        'errCmdReq'            : 'Backend request requires command name.',
        'errOpen'              : 'Unable to open "$1".',
        'errNotFolder'         : 'Object is not a folder.',
        'errNotFile'           : 'Object is not a file.',
        'errRead'              : 'Unable to read "$1".',
        'errWrite'             : 'Unable to write into "$1".',
        'errPerm'              : 'Permission denied.',
        'errLocked'            : '"$1" is locked and can not be renamed, moved or removed.',
        'errExists'            : 'File named "$1" already exists.',
        'errInvName'           : 'Invalid file name.',
        'errFolderNotFound'    : 'Folder not found.',
        'errFileNotFound'      : 'File not found.',
        'errTrgFolderNotFound' : 'Target folder "$1" not found.',
        'errPopup'             : 'Browser prevented opening popup window. To open file enable it in browser options.',
        'errMkdir'             : 'Unable to create folder "$1".',
        'errMkfile'            : 'Unable to create file "$1".',
        'errRename'            : 'Unable to rename "$1".',
        'errCopyFrom'          : 'Copying files from volume "$1" not allowed.',
        'errCopyTo'            : 'Copying files to volume "$1" not allowed.',
        'errUploadCommon'      : 'Upload error.',
        'errUpload'            : 'Unable to upload "$1".',
        'errUploadNoFiles'     : 'No files found for upload.',
        'errMaxSize'           : 'Data exceeds the maximum allowed size.',
        'errFileMaxSize'       : 'File exceeds maximum allowed size.',
        'errUploadMime'        : 'File type not allowed.',
        'errUploadTransfer'    : '"$1" transfer error.', 
        'errSave'              : 'Unable to save "$1".',
        'errCopy'              : 'Unable to copy "$1".',
        'errMove'              : 'Unable to move "$1".',
        'errCopyInItself'      : 'Unable to copy "$1" into itself.',
        'errRm'                : 'Unable to remove "$1".',
        'errExtract'           : 'Unable to extract files from "$1".',
        'errArchive'           : 'Unable to create archive.',
        'errArcType'           : 'Unsupported archive type.',
        'errNoArchive'         : 'File is not archive or has unsupported archive type.',
        'errCmdNoSupport'      : 'Backend does not support this command.',
        'errReplByChild'       : 'The folder “$1” can’t be replaced by an item it contains.',
        'errArcSymlinks'       : 'For security reason denied to unpack archives contains symlinks.',
        'errArcMaxSize'        : 'Archive files exceeds maximum allowed size.',
        'errResize'            : 'Unable to resize "$1".',
        'errUsupportType'      : 'Unsupported file type.',

        /******************************* commands names ********************************/
        'cmdarchive'   : 'Tạo tập tin nén',
        'cmdback'      : 'Trở lại',
        'cmdcopy'      : 'Sao chép',
        'cmdcut'       : 'Cắt',
        'cmddownload'  : 'Tải về',
        'cmdduplicate' : 'Bản sao',
        'cmdedit'      : 'Sửa tập tin',
        'cmdextract'   : 'Giải nén tập tin',
        'cmdforward'   : 'Trước',
        'cmdgetfile'   : 'Chọn tập tin',
        'cmdhelp'      : 'Giới thiệu phần mềm',
        'cmdhome'      : 'Home',
        'cmdinfo'      : 'Thông tin',
        'cmdmkdir'     : 'Thư mục',
        'cmdmkfile'    : 'Tạo tập tin Text',
        'cmdopen'      : 'Mở',
        'cmdpaste'     : 'Paste',
        'cmdquicklook' : 'Xem trước',
        'cmdreload'    : 'Nạp lại',
        'cmdrename'    : 'Đổi tên',
        'cmdrm'        : 'Xóa',
        'cmdsearch'    : 'Tìm tập tin',
        'cmdup'        : 'Go to parent directory',
        'cmdupload'    : 'Tải tập tin lên',
        'cmdview'      : 'Xem',
        'cmdresize'    : 'Resize image',
        'cmdsort'      : 'Sắp xếp',

        /*********************************** buttons ***********************************/ 
        'btnClose'  : 'Đóng',
        'btnSave'   : 'Lưu',
        'btnRm'     : 'Gỡ bỏ',
        'btnApply'  : 'Áp dụng',
        'btnCancel' : 'Hủy bỏ',
        'btnNo'     : 'Không',
        'btnYes'    : 'Đồng ý',

        /******************************** notifications ********************************/
        'ntfopen'     : 'Mở thư mục',
        'ntffile'     : 'Mở tập tin',
        'ntfreload'   : 'Nạp lại nội dung thư mục',
        'ntfmkdir'    : 'Tạo thư mục',
        'ntfmkfile'   : 'Tạo tập tin',
        'ntfrm'       : 'Xóa tập tin',
        'ntfcopy'     : 'Sao chép tập tin',
        'ntfmove'     : 'Di chuyển tập tin',
        'ntfprepare'  : 'Chuẩn bị để sao chép các tập tin',
        'ntfrename'   : 'Đổi tên tập tin',
        'ntfupload'   : 'Tải tập tin lên',
        'ntfdownload' : 'Tải tập tin',
        'ntfsave'     : 'Lưu tập tin',
        'ntfarchive'  : 'Tạo tập tin nén',
        'ntfextract'  : 'Giải nén tập tin',
        'ntfsearch'   : 'Tìm kiếm tập tin',
        'ntfsmth'     : 'Doing something >_<',
        'ntfloadimg'  : 'Đang tải hình ảnh',

        /************************************ dates **********************************/
        'dateUnknown' : 'Chưa biết',
        'Today'       : 'Hôm nay',
        'Yesterday'   : 'Yesterday',
        'Jan'         : 'Jan',
        'Feb'         : 'Feb',
        'Mar'         : 'Mar',
        'Apr'         : 'Apr',
        'May'         : 'May',
        'Jun'         : 'Jun',
        'Jul'         : 'Jul',
        'Aug'         : 'Aug',
        'Sep'         : 'Sep',
        'Oct'         : 'Oct',
        'Nov'         : 'Nov',
        'Dec'         : 'Dec',
        'January'     : 'January',
        'February'    : 'February',
        'March'       : 'March',
        'April'       : 'April',
        'May'         : 'May',
        'June'        : 'June',
        'July'        : 'July',
        'August'      : 'August',
        'September'   : 'September',
        'October'     : 'October',
        'November'    : 'November',
        'December'    : 'December',
        'Sunday'      : 'Sunday', 
        'Monday'      : 'Monday', 
        'Tuesday'     : 'Tuesday', 
        'Wednesday'   : 'Wednesday', 
        'Thursday'    : 'Thursday', 
        'Friday'      : 'Friday', 
        'Saturday'    : 'Saturday',
        'Sun'         : 'Sun', 
        'Mon'         : 'Mon', 
        'Tue'         : 'Tue', 
        'Wed'         : 'Wed', 
        'Thu'         : 'Thu', 
        'Fri'         : 'Fri', 
        'Sat'         : 'Sat',
        /******************************** sort variants ********************************/
        'sortnameDirsFirst' : 'by name (folders first)', 
        'sortkindDirsFirst' : 'by kind (folders first)', 
        'sortsizeDirsFirst' : 'by size (folders first)', 
        'sortdateDirsFirst' : 'by date (folders first)', 
        'sortname'          : 'by name', 
        'sortkind'          : 'by kind', 
        'sortsize'          : 'by size',
        'sortdate'          : 'by date',

        /********************************** messages **********************************/
        'confirmReq'      : 'Confirmation required',
        'confirmRm'       : 'Are you sure you want to remove files?<br/>This cannot be undone!',
        'confirmRepl'     : 'Replace old file with new one?',
        'apllyAll'        : 'Apply to all',
        'name'            : 'Name',
        'size'            : 'Size',
        'perms'           : 'Permissions',
        'modify'          : 'Modified',
        'kind'            : 'Kind',
        'read'            : 'read',
        'write'           : 'write',
        'noaccess'        : 'no access',
        'and'             : 'and',
        'unknown'         : 'unknown',
        'selectall'       : 'Select all files',
        'selectfiles'     : 'Select file(s)',
        'selectffile'     : 'Select first file',
        'selectlfile'     : 'Select last file',
        'viewlist'        : 'List view',
        'viewicons'       : 'Icons view',
        'places'          : 'Places',
        'calc'            : 'Calculate', 
        'path'            : 'Path',
        'aliasfor'        : 'Alias for',
        'locked'          : 'Locked',
        'dim'             : 'Dimensions',
        'files'           : 'Files',
        'folders'         : 'Folders',
        'items'           : 'Items',
        'yes'             : 'yes',
        'no'              : 'no',
        'link'            : 'Link',
        'searcresult'     : 'Search results',  
        'selected'        : 'selected items',
        'about'           : 'About',
        'shortcuts'       : 'Shortcuts',
        'help'            : 'Help',
        'webfm'           : 'Web file manager',
        'ver'             : 'Version',
        'protocol'        : 'protocol version',
        'homepage'        : 'Project home',
        'docs'            : 'Documentation',
        'github'          : 'Fork us on Github',
        'twitter'         : 'Follow us on twitter',
        'facebook'        : 'Join us on facebook',
        'team'            : 'Team',
        'chiefdev'        : 'chief developer',
        'developer'       : 'developer',
        'contributor'     : 'contributor',
        'maintainer'      : 'maintainer',
        'translator'      : 'translator',
        'icons'           : 'Icons',
        'dontforget'      : 'and don\'t forget to take your towel',
        'shortcutsof'     : 'Shortcuts disabled',
        'dropFiles'       : 'Drop files here',
        'or'              : 'or',
        'selectForUpload' : 'Select files to upload',
        'moveFiles'       : 'Move files',
        'copyFiles'       : 'Copy files',
        'rmFromPlaces'    : 'Remove from places',
        'untitled folder' : 'untitled folder',
        'untitled file.txt' : 'untitled file.txt',
        'aspectRatio'     : 'Aspect ratio',
        'scale'           : 'Scale',
        'width'           : 'Width',
        'height'          : 'Height',
        'mode'            : 'Mode',
        'resize'          : 'Resize',
        'crop'            : 'Crop',
        'rotate'          : 'Rotate',
        'rotate-cw'       : 'Rotate 90 degrees CW',
        'rotate-ccw'      : 'Rotate 90 degrees CCW',
        'degree'          : 'Degree',

        /********************************** mimetypes **********************************/
        'kindUnknown'     : 'Unknown',
        'kindFolder'      : 'Folder',
        'kindAlias'       : 'Alias',
        'kindAliasBroken' : 'Broken alias',
        // applications
        'kindApp'         : 'Application',
        'kindPostscript'  : 'Postscript document',
        'kindMsOffice'    : 'Microsoft Office document',
        'kindMsWord'      : 'Microsoft Word document',
        'kindMsExcel'     : 'Microsoft Excel document',
        'kindMsPP'        : 'Microsoft Powerpoint presentation',
        'kindOO'          : 'Open Office document',
        'kindAppFlash'    : 'Flash application',
        'kindPDF'         : 'Portable Document Format (PDF)',
        'kindTorrent'     : 'Bittorrent file',
        'kind7z'          : '7z archive',
        'kindTAR'         : 'TAR archive',
        'kindGZIP'        : 'GZIP archive',
        'kindBZIP'        : 'BZIP archive',
        'kindZIP'         : 'ZIP archive',
        'kindRAR'         : 'RAR archive',
        'kindJAR'         : 'Java JAR file',
        'kindTTF'         : 'True Type font',
        'kindOTF'         : 'Open Type font',
        'kindRPM'         : 'RPM package',
        // texts
        'kindText'        : 'Text document',
        'kindTextPlain'   : 'Plain text',
        'kindPHP'         : 'PHP source',
        'kindCSS'         : 'Cascading style sheet',
        'kindHTML'        : 'HTML document',
        'kindJS'          : 'Javascript source',
        'kindRTF'         : 'Rich Text Format',
        'kindC'           : 'C source',
        'kindCHeader'     : 'C header source',
        'kindCPP'         : 'C++ source',
        'kindCPPHeader'   : 'C++ header source',
        'kindShell'       : 'Unix shell script',
        'kindPython'      : 'Python source',
        'kindJava'        : 'Java source',
        'kindRuby'        : 'Ruby source',
        'kindPerl'        : 'Perl script',
        'kindSQL'         : 'SQL source',
        'kindXML'         : 'XML document',
        'kindAWK'         : 'AWK source',
        'kindCSV'         : 'Comma separated values',
        'kindDOCBOOK'     : 'Docbook XML document',
        // images
        'kindImage'       : 'Image',
        'kindBMP'         : 'BMP image',
        'kindJPEG'        : 'JPEG image',
        'kindGIF'         : 'GIF Image',
        'kindPNG'         : 'PNG Image',
        'kindTIFF'        : 'TIFF image',
        'kindTGA'         : 'TGA image',
        'kindPSD'         : 'Adobe Photoshop image',
        'kindXBITMAP'     : 'X bitmap image',
        'kindPXM'         : 'Pixelmator image',
        // media
        'kindAudio'       : 'Audio media',
        'kindAudioMPEG'   : 'MPEG audio',
        'kindAudioMPEG4'  : 'MPEG-4 audio',
        'kindAudioMIDI'   : 'MIDI audio',
        'kindAudioOGG'    : 'Ogg Vorbis audio',
        'kindAudioWAV'    : 'WAV audio',
        'AudioPlaylist'   : 'MP3 playlist',
        'kindVideo'       : 'Video media',
        'kindVideoDV'     : 'DV movie',
        'kindVideoMPEG'   : 'MPEG movie',
        'kindVideoMPEG4'  : 'MPEG-4 movie',
        'kindVideoAVI'    : 'AVI movie',
        'kindVideoMOV'    : 'Quick Time movie',
        'kindVideoWM'     : 'Windows Media movie',
        'kindVideoFlash'  : 'Flash movie',
        'kindVideoMKV'    : 'Matroska movie',
        'kindVideoOGG'    : 'Ogg movie'
    }
}
}
/**
 * Simplified Chinese translation
 * @author deerchao <deerchao@gmail.com>
 * @author Andy Hu <andyhu7@yahoo.com.hk>
 * @version 2013-01-29
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
	elFinder.prototype.i18.zh_CN = {
		translator : '翻译者 deerchao &lt;deerchao@gmail.com&gt;, Andy Hu &lt;andyhu7@yahoo.com.hk&gt;',
		language   : '简体中文',
		direction  : 'ltr',
		dateFormat : 'Y-m-d H:i',
		fancyDateFormat : '$1 H:i',
		messages   : {
			
			/********************************** errors **********************************/
			'error'                : '错误',
			'errUnknown'           : '未知的错误.',
			'errUnknownCmd'        : '未知的命令.',
			'errJqui'              : '无效的 jQuery UI 配置. 必须包含 Selectable, draggable 以及 droppable 组件.',
			'errNode'              : 'elFinder 需要能创建 DOM 元素.',
			'errURL'               : '无效的 elFinder 配置! URL 选项未配置.',
			'errAccess'            : '访问被拒绝.',
			'errConnect'           : '不能连接到后端.',
			'errAbort'             : '连接中止.',
			'errTimeout'           : '连接超时.',
			'errNotFound'          : '未找到后端.',
			'errResponse'          : '无效的后端响应.',
			'errConf'              : '无效的后端配置.',
			'errJSON'              : 'PHP JSON 模块未安装.',
			'errNoVolumes'         : '无可读的卷.',
			'errCmdParams'         : '无效的参数, 命令: "$1".',
			'errDataNotJSON'       : '响应不符合 JSON 格式.',
			'errDataEmpty'         : '响应为空.',
			'errCmdReq'            : '后端请求需要命令名称.',
			'errOpen'              : '无法打开 "$1".',
			'errNotFolder'         : '对象不是文件夹.',
			'errNotFile'           : '对象不是文件.',
			'errRead'              : '无法读取 "$1".',
			'errWrite'             : '无法写入 "$1".',
			'errPerm'              : '无权限.',
			'errLocked'            : '"$1" 被锁定,不能重命名, 移动或删除.',
			'errExists'            : '文件 "$1" 已经存在了.',
			'errInvName'           : '无效的文件名.',
			'errFolderNotFound'    : '未找到文件夹.',
			'errFileNotFound'      : '未找到文件.',
			'errTrgFolderNotFound' : '未找到目标文件夹 "$1".',
			'errPopup'             : '浏览器拦截了弹出窗口. 请在选项中允许弹出窗口.',
			'errMkdir'             : '不能创建文件夹 "$1".',
			'errMkfile'            : '不能创建文件 "$1".',
			'errRename'            : '不能重命名 "$1".',
			'errCopyFrom'          : '不允许从卷 "$1" 复制.',
			'errCopyTo'            : '不允许向卷 "$1" 复制.',
			'errUpload'            : '上传出错.',
			'errUploadFile'        : '无法上传 "$1".',
			'errUploadNoFiles'     : '未找到要上传的文件.',
			'errUploadTotalSize'   : '数据超过了允许的最大大小.',
			'errUploadFileSize'    : '文件超过了允许的最大大小.',
			'errUploadMime'        : '不允许的文件类型.',
			'errUploadTransfer'    : '"$1" 传输错误.', 
			'errNotReplace'        : '对象 "$1" 已经在此位置存在, 不能被其他对象替换.', // new
			'errReplace'           : '无法替换 "$1".',
			'errSave'              : '无法保存 "$1".',
			'errCopy'              : '无法复制 "$1".',
			'errMove'              : '无法移动 "$1".',
			'errCopyInItself'      : '不能移动 "$1" 到原有位置.',
			'errRm'                : '无法删除 "$1".',
			'errRmSrc'             : '不能删除源文件.',
			'errExtract'           : '无法从 "$1" 提取文件.',
			'errArchive'           : '无法创建压缩包.',
			'errArcType'           : '不支持的压缩格式.',
			'errNoArchive'         : '文件不是压缩包, 或者不支持该压缩格式.',
			'errCmdNoSupport'      : '后端不支持该命令.',
			'errReplByChild'       : '文件夹 “$1” 不能被它所包含的项目替换.',
			'errArcSymlinks'       : '出于安全上的考虑，不允许解压包含符号链接的压缩包.',
			'errArcMaxSize'        : '压缩包文件超过最大允许文件大小范围.',
			'errResize'            : '无法重新调整大小 "$1".',
			'errUsupportType'      : '不被支持的文件格式.',
			'errNotUTF8Content'    : '文件 "$1" 不是 UTF-8 格式, 不能编辑.',  // added 9.11.2011
			'errNetMount'          : '无法装载 "$1".', // added 17.04.2012
			'errNetMountNoDriver'  : '不支持该协议.',     // added 17.04.2012
			'errNetMountFailed'    : '装载失败.',         // added 17.04.2012
			'errNetMountHostReq'   : '需要指定主机.', // added 18.04.2012
			/******************************* commands names ********************************/
			'cmdarchive'   : '创建压缩包',
			'cmdback'      : '后退',
			'cmdcopy'      : '复制',
			'cmdcut'       : '剪切',
			'cmddownload'  : '下载',
			'cmdduplicate' : '创建复本',
			'cmdedit'      : '编辑文件',
			'cmdextract'   : '从压缩包提取文件',
			'cmdforward'   : '前进',
			'cmdgetfile'   : '选择文件',
			'cmdhelp'      : '关于本软件',
			'cmdhome'      : '首页',
			'cmdinfo'      : '查看信息',
			'cmdmkdir'     : '新建文件夹',
			'cmdmkfile'    : '新建文本文件',
			'cmdopen'      : '打开',
			'cmdpaste'     : '粘贴',
			'cmdquicklook' : '预览',
			'cmdreload'    : '刷新',
			'cmdrename'    : '重命名',
			'cmdrm'        : '删除',
			'cmdsearch'    : '查找文件',
			'cmdup'        : '转到上一级文件夹',
			'cmdupload'    : '上传文件',
			'cmdview'      : '查看',
			'cmdresize'    : '重新调整大小',
			'cmdsort'      : '排序',
			'cmdnetmount'  : '装载网络卷', // added 18.04.2012
			
			/*********************************** buttons ***********************************/ 
			'btnClose'  : '关闭',
			'btnSave'   : '保存',
			'btnRm'     : '删除',
			'btnApply'  : '应用',
			'btnCancel' : '取消',
			'btnNo'     : '否',
			'btnYes'    : '是',
			'btnMount'  : '装载',  // added 18.04.2012
			/******************************** notifications ********************************/
			'ntfopen'     : '打开文件夹',
			'ntffile'     : '打开文件',
			'ntfreload'   : '刷新文件夹内容',
			'ntfmkdir'    : '创建文件夹',
			'ntfmkfile'   : '创建文件',
			'ntfrm'       : '删除文件',
			'ntfcopy'     : '复制文件',
			'ntfmove'     : '移动文件',
			'ntfprepare'  : '准备复制文件',
			'ntfrename'   : '重命名文件',
			'ntfupload'   : '上传文件',
			'ntfdownload' : '下载文件',
			'ntfsave'     : '保存文件',
			'ntfarchive'  : '创建压缩包',
			'ntfextract'  : '从压缩包提取文件',
			'ntfsearch'   : '搜索文件',
			'ntfresize'   : '正在更改尺寸',
			'ntfsmth'     : '正在忙 >_<',
			'ntfloadimg'  : '正在加载图片',
      		'ntfnetmount' : '正在装载网络卷', // added 18.04.2012
			
			/************************************ dates **********************************/
			'dateUnknown' : '未知',
			'Today'       : '今天',
			'Yesterday'   : '昨天',
			'Jan'         : '一月',
			'Feb'         : '二月',
			'Mar'         : '三月',
			'Apr'         : '四月',
			'May'         : '五月',
			'Jun'         : '六月',
			'Jul'         : '七月',
			'Aug'         : '八月',
			'Sep'         : '九月',
			'Oct'         : '十月',
			'Nov'         : '十一月',
			'Dec'         : '十二月',
			'January'     : '一月',
			'February'    : '二月',
			'March'       : '三月',
			'April'       : '四月',
			'May'         : '五月',
			'June'        : '六月',
			'July'        : '七月',
			'August'      : '八月',
			'September'   : '九月',
			'October'     : '十月',
			'November'    : '十一月',
			'December'    : '十二月',
			'Sunday'      : '星期日',
			'Monday'      : '星期一',
			'Tuesday'     : '星期二',
			'Wednesday'   : '星期三',
			'Thursday'    : '星期四',
			'Friday'      : '星期五',
			'Saturday'    : '星期六',
			'Sun'         : '周日', 
			'Mon'         : '周一', 
			'Tue'         : '周二', 
			'Wed'         : '周三', 
			'Thu'         : '周四', 
			'Fri'         : '周五', 
			'Sat'         : '周六',
			/******************************** sort variants ********************************/
			'sortnameDirsFirst' : '按名称 (文件夹在最前)', 
			'sortkindDirsFirst' : '按类型 (文件夹在最前)', 
			'sortsizeDirsFirst' : '按大小 (文件夹在最前)', 
			'sortdateDirsFirst' : '按日期 (文件夹在最前)', 
			'sortname'          : '按名称', 
			'sortkind'          : '按类型', 
			'sortsize'          : '按大小',
			'sortdate'          : '按日期',

			/********************************** messages **********************************/
			'confirmReq'      : '请确认',
			'confirmRm'       : '确定要删除文件吗?<br/>该操作不可撤销!',
			'confirmRepl'     : '用新的文件替换原有文件?',
			'apllyAll'        : '全部应用',
			'name'            : '名称',
			'size'            : '大小',
			'perms'           : '权限',
			'modify'          : '修改于',
			'kind'            : '类别',
			'read'            : '读取',
			'write'           : '写入',
			'noaccess'        : '无权限',
			'and'             : '和',
			'unknown'         : '未知',
			'selectall'       : '选择所有文件',
			'selectfiles'     : '选择文件',
			'selectffile'     : '选择第一个文件',
			'selectlfile'     : '选择最后一个文件',
			'viewlist'        : '列表视图',
			'viewicons'       : '图标视图',
			'places'          : '位置',
			'calc'            : '计算', 
			'path'            : '路径',
			'aliasfor'        : '别名',
			'locked'          : '锁定',
			'dim'             : '尺寸',
			'files'           : '文件',
			'folders'         : '文件夹',
			'items'           : '项目',
			'yes'             : '是',
			'no'              : '否',
			'link'            : '链接',
			'searcresult'     : '搜索结果',  
			'selected'        : '选中的项目',
			'about'           : '关于',
			'shortcuts'       : '快捷键',
			'help'            : '帮助',
			'webfm'           : '网络文件管理器',
			'ver'             : '版本',
			'protocolver'     : '协议版本',
			'homepage'        : '项目主页',
			'docs'            : '文档',
			'github'          : 'Fork us on Github',
			'twitter'         : 'Follow us on twitter',
			'facebook'        : 'Join us on facebook',
			'team'            : '团队',
			'chiefdev'        : '首席开发',
			'developer'       : '开发',
			'contributor'     : '贡献',
			'maintainer'      : '维护',
			'translator'      : '翻译',
			'icons'           : '图标',
			'dontforget'      : '别忘了带上你擦汗的毛巾',
			'shortcutsof'     : '快捷键已禁用',
			'dropFiles'       : '把文件拖到这里',
			'or'              : '或者',
			'selectForUpload' : '选择要上传的文件',
			'moveFiles'       : '移动文件',
			'copyFiles'       : '复制文件',
			'rmFromPlaces'    : '从位置中删除',
			'untitled folder' : '未命名文件夹',
			'untitled file.txt' : '未命名文件.txt',
			'aspectRatio'     : '保持比例',
			'scale'           : '高宽比',
			'width'           : '宽',
			'height'          : '高',
			'mode'            : '模式',
			'resize'          : '重新调整大小',
			'crop'            : '裁切',
			'rotate'          : '旋转',
			'rotate-cw'       : '顺时针旋转90度',
			'rotate-ccw'      : '逆时针旋转90度',
			'degree'          : '度',
			'port'            : '端口', // added 18.04.2012
			'user'            : '用户', // added 18.04.2012
			'pass'            : '密码', // added 18.04.2012
			
			/********************************** mimetypes **********************************/
			'kindUnknown'     : '未知',
			'kindFolder'      : '文件夹',
			'kindAlias'       : '别名',
			'kindAliasBroken' : '错误的别名',
			// applications
			'kindApp'         : '程序',
			'kindPostscript'  : 'Postscript 文档',
			'kindMsOffice'    : 'Microsoft Office 文档',
			'kindMsWord'      : 'Microsoft Word 文档',
			'kindMsExcel'     : 'Microsoft Excel 文档',
			'kindMsPP'        : 'Microsoft Powerpoint 演示',
			'kindOO'          : 'Open Office 文档',
			'kindAppFlash'    : 'Flash 程序',
			'kindPDF'         : 'Portable Document Format (PDF)',
			'kindTorrent'     : 'Bittorrent 文件',
			'kind7z'          : '7z 压缩包',
			'kindTAR'         : 'TAR 压缩包',
			'kindGZIP'        : 'GZIP 压缩包',
			'kindBZIP'        : 'BZIP 压缩包',
			'kindZIP'         : 'ZIP 压缩包',
			'kindRAR'         : 'RAR 压缩包',
			'kindJAR'         : 'Java JAR 文件',
			'kindTTF'         : 'True Type 字体',
			'kindOTF'         : 'Open Type 字体',
			'kindRPM'         : 'RPM 包',
			// texts
			'kindText'        : '文本文件',
			'kindTextPlain'   : '纯文本',
			'kindPHP'         : 'PHP 源代码',
			'kindCSS'         : '层叠样式表(CSS)',
			'kindHTML'        : 'HTML 文档',
			'kindJS'          : 'Javascript 源代码',
			'kindRTF'         : '富文本格式(RTF)',
			'kindC'           : 'C 源代码',
			'kindCHeader'     : 'C 头文件',
			'kindCPP'         : 'C++ 源代码',
			'kindCPPHeader'   : 'C++ 头文件',
			'kindShell'       : 'Unix 外壳脚本',
			'kindPython'      : 'Python 源代码',
			'kindJava'        : 'Java 源代码',
			'kindRuby'        : 'Ruby 源代码',
			'kindPerl'        : 'Perl 源代码',
			'kindSQL'         : 'SQL 脚本',
			'kindXML'         : 'XML 文档',
			'kindAWK'         : 'AWK 源代码',
			'kindCSV'         : '逗号分隔值文件(CSV)',
			'kindDOCBOOK'     : 'Docbook XML 文档',
			// images
			'kindImage'       : '图片',
			'kindBMP'         : 'BMP 图片',
			'kindJPEG'        : 'JPEG 图片',
			'kindGIF'         : 'GIF 图片',
			'kindPNG'         : 'PNG 图片',
			'kindTIFF'        : 'TIFF 图片',
			'kindTGA'         : 'TGA 图片',
			'kindPSD'         : 'Adobe Photoshop 图片',
			'kindXBITMAP'     : 'X bitmap 图片',
			'kindPXM'         : 'Pixelmator 图片',
			// media
			'kindAudio'       : '音频',
			'kindAudioMPEG'   : 'MPEG 音频',
			'kindAudioMPEG4'  : 'MPEG-4 音频',
			'kindAudioMIDI'   : 'MIDI 音频',
			'kindAudioOGG'    : 'Ogg Vorbis 音频',
			'kindAudioWAV'    : 'WAV 音频',
			'AudioPlaylist'   : 'MP3 播放列表',
			'kindVideo'       : '视频',
			'kindVideoDV'     : 'DV 视频',
			'kindVideoMPEG'   : 'MPEG 视频',
			'kindVideoMPEG4'  : 'MPEG-4 视频',
			'kindVideoAVI'    : 'AVI 视频',
			'kindVideoMOV'    : 'Quick Time 视频',
			'kindVideoWM'     : 'Windows Media 视频',
			'kindVideoFlash'  : 'Flash 视频',
			'kindVideoMKV'    : 'Matroska 视频',
			'kindVideoOGG'    : 'Ogg 视频'
		}
	}
}
