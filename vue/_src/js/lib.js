/*! Jewell Net - v0.0.1 - 2018-08-30 @ 12:08
* https://www.davidjewell.nyc
* Copyright (c) 2018 David Jewell; Licensed MIT */

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(T,e){"use strict";var t=[],C=T.document,r=Object.getPrototypeOf,s=t.slice,v=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,m=n.hasOwnProperty,a=m.toString,c=a.call(Object),g={},y=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},b=function(e){return null!=e&&e===e.window},l={type:!0,src:!0,noModule:!0};function x(e,t,n){var r,i=(t=t||C).createElement("script");if(i.text=e,n)for(r in l)n[r]&&(i[r]=n[r]);t.head.appendChild(i).parentNode.removeChild(i)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var k=function(e,t){return new k.fn.init(e,t)},f=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!y(e)&&!b(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:"3.3.1",constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,c=!1;for("boolean"==typeof a&&(c=a,a=arguments[s]||{},s++),"object"==typeof a||y(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(c&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&k.isPlainObject(n)?n:{},a[t]=k.extend(c,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e)||(t=r(e))&&("function"!=typeof(n=m.call(t,"constructor")&&t.constructor)||a.call(n)!==c))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){x(e)},each:function(e,t){var n,r=0;if(p(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(f,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return v.apply([],a)},guid:1,support:g}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,x,o,i,h,f,v,w,u,c,_,T,a,C,m,s,l,g,k="sizzle"+1*new Date,y=n.document,A=0,r=0,p=ae(),b=ae(),E=ae(),S=function(e,t){return e===t&&(c=!0),0},$={}.hasOwnProperty,t=[],O=t.pop,N=t.push,j=t.push,D=t.slice,L=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},I="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",P="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",R="\\["+M+"*("+P+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+P+"))|)"+M+"*\\]",H=":("+P+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+R+")*)|.*)\\)|)",q=new RegExp(M+"+","g"),F=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),B=new RegExp("^"+M+"*,"+M+"*"),W=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),z=new RegExp(H),V=new RegExp("^"+P+"$"),X={ID:new RegExp("^#("+P+")"),CLASS:new RegExp("^\\.("+P+")"),TAG:new RegExp("^("+P+"|[*])"),ATTR:new RegExp("^"+R),PSEUDO:new RegExp("^"+H),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+I+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,G=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/[+~]/,Q=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){_()},ie=ye(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{j.apply(t=D.call(y.childNodes),y.childNodes),t[y.childNodes.length].nodeType}catch(n){j={apply:t.length?function(e,t){N.apply(e,D.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function oe(e,t,n,r){var i,o,a,s,u,c,l,f=t&&t.ownerDocument,p=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==p&&9!==p&&11!==p)return n;if(!r&&((t?t.ownerDocument||t:y)!==T&&_(t),t=t||T,C)){if(11!==p&&(u=G.exec(e)))if(i=u[1]){if(9===p){if(!(a=t.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&g(t,a)&&a.id===i)return n.push(a),n}else{if(u[2])return j.apply(n,t.getElementsByTagName(e)),n;if((i=u[3])&&d.getElementsByClassName&&t.getElementsByClassName)return j.apply(n,t.getElementsByClassName(i)),n}if(d.qsa&&!E[e+" "]&&(!m||!m.test(e))){if(1!==p)f=t,l=e;else if("object"!==t.nodeName.toLowerCase()){for((s=t.getAttribute("id"))?s=s.replace(te,ne):t.setAttribute("id",s=k),o=(c=h(e)).length;o--;)c[o]="#"+s+" "+ge(c[o]);l=c.join(","),f=Z.test(e)&&ve(t.parentNode)||t}if(l)try{return j.apply(n,f.querySelectorAll(l)),n}catch(e){}finally{s===k&&t.removeAttribute("id")}}}return v(e.replace(F,"$1"),t,n,r)}function ae(){var r=[];return function e(t,n){return r.push(t+" ")>x.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function se(e){return e[k]=!0,e}function ue(e){var t=T.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ce(e,t){for(var n=e.split("|"),r=n.length;r--;)x.attrHandle[n[r]]=t}function le(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function fe(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function pe(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function de(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ie(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function he(a){return se(function(o){return o=+o,se(function(e,t){for(var n,r=a([],e.length,o),i=r.length;i--;)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&void 0!==e.getElementsByTagName&&e}for(e in d=oe.support={},i=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},_=oe.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:y;return r!==T&&9===r.nodeType&&r.documentElement&&(a=(T=r).documentElement,C=!i(T),y!==T&&(n=T.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",re,!1):n.attachEvent&&n.attachEvent("onunload",re)),d.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ue(function(e){return e.appendChild(T.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(T.getElementsByClassName),d.getById=ue(function(e){return a.appendChild(e).id=k,!T.getElementsByName||!T.getElementsByName(k).length}),d.getById?(x.filter.ID=function(e){var t=e.replace(Q,ee);return function(e){return e.getAttribute("id")===t}},x.find.ID=function(e,t){if(void 0!==t.getElementById&&C){var n=t.getElementById(e);return n?[n]:[]}}):(x.filter.ID=function(e){var n=e.replace(Q,ee);return function(e){var t=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},x.find.ID=function(e,t){if(void 0!==t.getElementById&&C){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];for(i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),x.find.TAG=d.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},x.find.CLASS=d.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&C)return t.getElementsByClassName(e)},s=[],m=[],(d.qsa=K.test(T.querySelectorAll))&&(ue(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||m.push("\\["+M+"*(?:value|"+I+")"),e.querySelectorAll("[id~="+k+"-]").length||m.push("~="),e.querySelectorAll(":checked").length||m.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||m.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=T.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&m.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:")})),(d.matchesSelector=K.test(l=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ue(function(e){d.disconnectedMatch=l.call(e,"*"),l.call(e,"[s!='']:x"),s.push("!=",H)}),m=m.length&&new RegExp(m.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),g=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},S=t?function(e,t){if(e===t)return c=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===T||e.ownerDocument===y&&g(y,e)?-1:t===T||t.ownerDocument===y&&g(y,t)?1:u?L(u,e)-L(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return c=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===T?-1:t===T?1:i?-1:o?1:u?L(u,e)-L(u,t):0;if(i===o)return le(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)s.unshift(n);for(;a[r]===s[r];)r++;return r?le(a[r],s[r]):a[r]===y?-1:s[r]===y?1:0}),T},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==T&&_(e),t=t.replace(U,"='$1']"),d.matchesSelector&&C&&!E[t+" "]&&(!s||!s.test(t))&&(!m||!m.test(t)))try{var n=l.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){}return 0<oe(t,T,null,[e]).length},oe.contains=function(e,t){return(e.ownerDocument||e)!==T&&_(e),g(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==T&&_(e);var n=x.attrHandle[t.toLowerCase()],r=n&&$.call(x.attrHandle,t.toLowerCase())?n(e,t,!C):void 0;return void 0!==r?r:d.attributes||!C?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,n=[],r=0,i=0;if(c=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(S),c){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return u=null,e},o=oe.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=o(t);return n},(x=oe.selectors={cacheLength:50,createPseudo:se,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Q,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Q,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return X.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&z.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Q,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=oe.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(q," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,v,m){var g="nth"!==h.slice(0,3),y="last"!==h.slice(-4),b="of-type"===e;return 1===v&&0===m?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,c=g!==y?"nextSibling":"previousSibling",l=e.parentNode,f=b&&e.nodeName.toLowerCase(),p=!n&&!b,d=!1;if(l){if(g){for(;c;){for(a=e;a=a[c];)if(b?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=c="only"===h&&!u&&"nextSibling"}return!0}if(u=[y?l.firstChild:l.lastChild],y&&p){for(d=(s=(r=(i=(o=(a=l)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===A&&r[1])&&r[2],a=s&&l.childNodes[s];a=++s&&a&&a[c]||(d=s=0)||u.pop();)if(1===a.nodeType&&++d&&a===e){i[h]=[A,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===A&&r[1]),!1===d)for(;(a=++s&&a&&a[c]||(d=s=0)||u.pop())&&((b?a.nodeName.toLowerCase()!==f:1!==a.nodeType)||!++d||(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[A,d]),a!==e)););return(d-=m)===v||d%v==0&&0<=d/v}}},PSEUDO:function(e,o){var t,a=x.pseudos[e]||x.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],x.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,t){for(var n,r=a(e,o),i=r.length;i--;)e[n=L(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:se(function(e){var r=[],i=[],s=f(e.replace(F,"$1"));return s[k]?se(function(e,t,n,r){for(var i,o=s(e,null,r,[]),a=e.length;a--;)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:se(function(t){return function(e){return 0<oe(t,e).length}}),contains:se(function(t){return t=t.replace(Q,ee),function(e){return-1<(e.textContent||e.innerText||o(e)).indexOf(t)}}),lang:se(function(n){return V.test(n||"")||oe.error("unsupported lang: "+n),n=n.replace(Q,ee).toLowerCase(),function(e){var t;do{if(t=C?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===T.activeElement&&(!T.hasFocus||T.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!x.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Y.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;0<=--r;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=x.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[e]=fe(e);for(e in{submit:!0,reset:!0})x.pseudos[e]=pe(e);function me(){}function ge(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function ye(s,e,t){var u=e.dir,c=e.next,l=c||u,f=t&&"parentNode"===l,p=r++;return e.first?function(e,t,n){for(;e=e[u];)if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[A,p];if(n){for(;e=e[u];)if((1===e.nodeType||f)&&s(e,t,n))return!0}else for(;e=e[u];)if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),c&&c===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[l])&&r[0]===A&&r[1]===p)return a[2]=r[2];if((i[l]=a)[2]=s(e,t,n))return!0}return!1}}function be(i){return 1<i.length?function(e,t,n){for(var r=i.length;r--;)if(!i[r](e,t,n))return!1;return!0}:i[0]}function xe(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,c=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),c&&t.push(s)));return a}function we(d,h,v,m,g,e){return m&&!m[k]&&(m=we(m)),g&&!g[k]&&(g=we(g,e)),se(function(e,t,n,r){var i,o,a,s=[],u=[],c=t.length,l=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?l:xe(l,s,d,n,r),p=v?g||(e?d:c||m)?[]:t:f;if(v&&v(f,p,n,r),m)for(i=xe(p,u),m(i,[],n,r),o=i.length;o--;)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a));if(e){if(g||d){if(g){for(i=[],o=p.length;o--;)(a=p[o])&&i.push(f[o]=a);g(null,p=[],i,r)}for(o=p.length;o--;)(a=p[o])&&-1<(i=g?L(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=xe(p===t?p.splice(c,p.length):p),g?g(null,t,p,r):j.apply(t,p)})}function _e(e){for(var i,t,n,r=e.length,o=x.relative[e[0].type],a=o||x.relative[" "],s=o?1:0,u=ye(function(e){return e===i},a,!0),c=ye(function(e){return-1<L(i,e)},a,!0),l=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):c(e,t,n));return i=null,r}];s<r;s++)if(t=x.relative[e[s].type])l=[ye(be(l),t)];else{if((t=x.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r&&!x.relative[e[n].type];n++);return we(1<s&&be(l),1<s&&ge(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(F,"$1"),t,s<n&&_e(e.slice(s,n)),n<r&&_e(e=e.slice(n)),n<r&&ge(e))}l.push(t)}return be(l)}return me.prototype=x.filters=x.pseudos,x.setFilters=new me,h=oe.tokenize=function(e,t){var n,r,i,o,a,s,u,c=b[e+" "];if(c)return t?0:c.slice(0);for(a=e,s=[],u=x.preFilter;a;){for(o in n&&!(r=B.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=W.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(F," ")}),a=a.slice(n.length)),x.filter)!(r=X[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?oe.error(e):b(e,s).slice(0)},f=oe.compile=function(e,t){var n,m,g,y,b,r,i=[],o=[],a=E[e+" "];if(!a){for(t||(t=h(e)),n=t.length;n--;)(a=_e(t[n]))[k]?i.push(a):o.push(a);(a=E(e,(m=o,g=i,y=0<g.length,b=0<m.length,r=function(e,t,n,r,i){var o,a,s,u=0,c="0",l=e&&[],f=[],p=w,d=e||b&&x.find.TAG("*",i),h=A+=null==p?1:Math.random()||.1,v=d.length;for(i&&(w=t===T||t||i);c!==v&&null!=(o=d[c]);c++){if(b&&o){for(a=0,t||o.ownerDocument===T||(_(o),n=!C);s=m[a++];)if(s(o,t||T,n)){r.push(o);break}i&&(A=h)}y&&((o=!s&&o)&&u--,e&&l.push(o))}if(u+=c,y&&c!==u){for(a=0;s=g[a++];)s(l,f,t,n);if(e){if(0<u)for(;c--;)l[c]||f[c]||(f[c]=O.call(r));f=xe(f)}j.apply(r,f),i&&!e&&0<f.length&&1<u+g.length&&oe.uniqueSort(r)}return i&&(A=h,w=p),l},y?se(r):r))).selector=e}return a},v=oe.select=function(e,t,n,r){var i,o,a,s,u,c="function"==typeof e&&e,l=!r&&h(e=c.selector||e);if(n=n||[],1===l.length){if(2<(o=l[0]=l[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&C&&x.relative[o[1].type]){if(!(t=(x.find.ID(a.matches[0].replace(Q,ee),t)||[])[0]))return n;c&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=X.needsContext.test(e)?0:o.length;i--&&(a=o[i],!x.relative[s=a.type]);)if((u=x.find[s])&&(r=u(a.matches[0].replace(Q,ee),Z.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&ge(o)))return j.apply(n,r),n;break}}return(c||f(e,l))(r,t,!C,n,!t||Z.test(e)&&ve(t.parentNode)||t),n},d.sortStable=k.split("").sort(S).join("")===k,d.detectDuplicates=!!c,_(),d.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(T.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ce("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ce("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||ce(I,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(T);k.find=d,k.expr=d.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=d.uniqueSort,k.text=d.getText,k.isXMLDoc=d.isXML,k.contains=d.contains,k.escapeSelector=d.escape;var h=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},_=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},A=k.expr.match.needsContext;function E(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var S=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function $(e,n,r){return y(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack($(this,e||[],!1))},not:function(e){return this.pushStack($(this,e||[],!0))},is:function(e){return!!$(this,"string"==typeof e&&A.test(e)?k(e):e||[],!1).length}});var O,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||O,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:N.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:C,!0)),S.test(r[1])&&k.isPlainObject(t))for(r in t)y(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=C.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):y(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,O=k(C);var j=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};function L(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!A.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return L(e,"nextSibling")},prev:function(e){return L(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return _((e.parentNode||{}).firstChild,e)},children:function(e){return _(e.firstChild)},contents:function(e){return E(e,"iframe")?e.contentDocument:(E(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(D[r]||k.uniqueSort(n),j.test(r)&&n.reverse()),this.pushStack(n)}});var I=/[^\x20\t\r\n\f]+/g;function M(e){return e}function P(e){throw e}function R(e,t,n,r){var i;try{e&&y(i=e.promise)?i.call(e).done(t).fail(n):e&&y(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(I)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],c=-1,l=function(){for(a=a||r.once,o=i=!0;u.length;c=-1)for(t=u.shift();++c<s.length;)!1===s[c].apply(t[0],t[1])&&r.stopOnFalse&&(c=s.length,t=!1);r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(c=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){y(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&l()),this},remove:function(){return k.each(arguments,function(e,t){for(var n;-1<(n=k.inArray(t,s,n));)s.splice(n,1),n<=c&&c--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||l()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},catch:function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=y(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&y(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function c(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,y(t)?s?t.call(e,c(u,o,M,s),c(u,o,P,s)):(u++,t.call(e,c(u,o,M,s),c(u,o,P,s),c(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==P&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),T.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(c(0,e,y(r)?r:M,e.notifyWith)),o[1][3].add(c(0,e,y(t)?t:M)),o[2][3].add(c(0,e,y(n)?n:P))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(R(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||y(i[t]&&i[t].then)))return o.then();for(;t--;)R(i[t],a(t),o.reject);return o.promise()}});var H=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){T.console&&T.console.warn&&e&&H.test(e.name)&&T.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){T.setTimeout(function(){throw e})};var q=k.Deferred();function F(){C.removeEventListener("DOMContentLoaded",F),T.removeEventListener("load",F),k.ready()}k.fn.ready=function(e){return q.then(e).catch(function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||((k.isReady=!0)!==e&&0<--k.readyWait||q.resolveWith(C,[k]))}}),k.ready.then=q.then,"complete"===C.readyState||"loading"!==C.readyState&&!C.documentElement.doScroll?T.setTimeout(k.ready):(C.addEventListener("DOMContentLoaded",F),T.addEventListener("load",F));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,c=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,y(r)||(a=!0),c&&(a?(t.call(e,r),t=null):(c=t,t=function(e,t,n){return c.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:c?t.call(e):u?t(e[0],n):o},W=/^-ms-/,U=/-([a-z])/g;function z(e,t){return t.toUpperCase()}function V(e){return e.replace(W,"ms-").replace(U,z)}var X=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},X(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(I)||[]).length;for(;n--;)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var J=new Y,K=new Y,G=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function Q(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:G.test(i)?JSON.parse(i):i)}catch(e){}K.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){for(t=a.length;t--;)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),Q(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){K.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e){if(void 0!==(t=K.get(o,n)))return t;if(void 0!==(t=Q(o,n)))return t}else this.each(function(){K.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:k.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&k.contains(e.ownerDocument,e)&&"none"===k.css(e,"display")},ie=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function oe(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),c=n&&n[3]||(k.cssNumber[t]?"":"px"),l=(k.cssNumber[t]||"px"!==c&&+u)&&te.exec(k.css(e,t));if(l&&l[3]!==c){for(u/=2,c=c||l[3],l=+u||1;a--;)k.style(e,t,l+c),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),l/=o;l*=2,k.style(e,t,l+c),n=n||[]}return n&&(l=+l||+u||0,i=n[1]?l+(n[1]+1)*n[2]:+n[2],r&&(r.unit=c,r.start=l,r.end=i)),i}var ae={};function se(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&re(r)&&(i[o]=(f=c=u=void 0,c=(s=r).ownerDocument,l=s.nodeName,(f=ae[l])||(u=c.body.appendChild(c.createElement(l)),f=k.css(u,"display"),u.parentNode.removeChild(u),"none"===f&&(f="block"),ae[l]=f)))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));var s,u,c,l,f;for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}k.fn.extend({show:function(){return se(this,!0)},hide:function(){return se(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){re(this)?k(this).show():k(this).hide()})}});var ue=/^(?:checkbox|radio)$/i,ce=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,le=/^$|^module$|\/(?:java|ecma)script/i,fe={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function pe(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&E(e,t)?k.merge([e],n):n}function de(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}fe.optgroup=fe.option,fe.tbody=fe.tfoot=fe.colgroup=fe.caption=fe.thead,fe.th=fe.td;var he,ve,me=/<|&#?\w+;/;function ge(e,t,n,r,i){for(var o,a,s,u,c,l,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(me.test(o)){for(a=a||f.appendChild(t.createElement("div")),s=(ce.exec(o)||["",""])[1].toLowerCase(),u=fe[s]||fe._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],l=u[0];l--;)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));for(f.textContent="",d=0;o=p[d++];)if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(c=k.contains(o.ownerDocument,o),a=pe(f.appendChild(o),"script"),c&&de(a),n)for(l=0;o=a[l++];)le.test(o.type||"")&&n.push(o);return f}he=C.createDocumentFragment().appendChild(C.createElement("div")),(ve=C.createElement("input")).setAttribute("type","radio"),ve.setAttribute("checked","checked"),ve.setAttribute("name","t"),he.appendChild(ve),g.checkClone=he.cloneNode(!0).cloneNode(!0).lastChild.checked,he.innerHTML="<textarea>x</textarea>",g.noCloneChecked=!!he.cloneNode(!0).lastChild.defaultValue;var ye=C.documentElement,be=/^key/,xe=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,we=/^([^.]*)(?:\.(.+)|)/;function _e(){return!0}function Te(){return!1}function Ce(){try{return C.activeElement}catch(e){}}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,c,l,f,p,d,h,v,m=J.get(t);if(m)for(n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ye,i),n.guid||(n.guid=k.guid++),(u=m.events)||(u=m.events={}),(a=m.handle)||(a=m.handle=function(e){return void 0!==k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),c=(e=(e||"").match(I)||[""]).length;c--;)d=v=(s=we.exec(e[c])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},l=k.extend({type:d,origType:v,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,l),l.handler.guid||(l.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,l):p.push(l),k.event.global[d]=!0)},remove:function(e,t,n,r,i){var o,a,s,u,c,l,f,p,d,h,v,m=J.hasData(e)&&J.get(e);if(m&&(u=m.events)){for(c=(t=(t||"").match(I)||[""]).length;c--;)if(d=v=(s=we.exec(t[c])||[])[1],h=(s[2]||"").split(".").sort(),d){for(f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)l=p[o],!i&&v!==l.origType||n&&n.guid!==l.guid||s&&!s.test(l.namespace)||r&&r!==l.selector&&("**"!==r||!l.selector)||(p.splice(o,1),l.selector&&p.delegateCount--,f.remove&&f.remove.call(e,l));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,m.handle)||k.removeEvent(e,d,m.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[c],n,r,!0);k.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),c=(J.get(this,"events")||{})[s.type]||[],l=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!l.preDispatch||!1!==l.preDispatch.call(this,s)){for(a=k.event.handlers.call(this,s,c),t=0;(i=a[t++])&&!s.isPropagationStopped();)for(s.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!s.isImmediatePropagationStopped();)s.rnamespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,c=e.target;if(u&&c.nodeType&&!("click"===e.type&&1<=e.button))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==e.type||!0!==c.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(c):k.find(i,this,null,[c]).length),a[i]&&o.push(r);o.length&&s.push({elem:c,handlers:o})}return c=this,u<t.length&&s.push({elem:c,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:y(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Ce()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Ce()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&E(this,"input"))return this.click(),!1},_default:function(e){return E(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?_e:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=_e,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=_e,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=_e,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&xe.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){k.event.remove(this,e,n,t)})}});var Ae=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ee=/<script|<style|<link/i,Se=/checked\s*(?:[^=]|=\s*.checked.)/i,$e=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return E(e,"table")&&E(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Ne(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function je(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function De(e,t){var n,r,i,o,a,s,u,c;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),c=o.events))for(i in delete a.handle,a.events={},c)for(n=0,r=c[i].length;n<r;n++)k.event.add(t,i,c[i][n]);K.hasData(e)&&(s=K.access(e),u=k.extend({},s),K.set(t,u))}}function Le(n,r,i,o){r=v.apply([],r);var e,t,a,s,u,c,l=0,f=n.length,p=f-1,d=r[0],h=y(d);if(h||1<f&&"string"==typeof d&&!g.checkClone&&Se.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Le(t,r,i,o)});if(f&&(t=(e=ge(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(pe(e,"script"),Ne)).length;l<f;l++)u=e,l!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,pe(u,"script"))),i.call(n[l],u,l);if(s)for(c=a[a.length-1].ownerDocument,k.map(a,je),l=0;l<s;l++)u=a[l],le.test(u.type||"")&&!J.access(u,"globalEval")&&k.contains(c,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&k._evalUrl(u.src):x(u.textContent.replace($e,""),c,u))}return n}function Ie(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(pe(r)),r.parentNode&&(n&&k.contains(r.ownerDocument,r)&&de(pe(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(Ae,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,c,l=e.cloneNode(!0),f=k.contains(e.ownerDocument,e);if(!(g.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=pe(l),r=0,i=(o=pe(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(c=u.nodeName.toLowerCase())&&ue.test(s.type)?u.checked=s.checked:"input"!==c&&"textarea"!==c||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||pe(e),a=a||pe(l),r=0,i=o.length;r<i;r++)De(o[r],a[r]);else De(e,l);return 0<(a=pe(l,"script")).length&&de(a,!f&&pe(e,"script")),l},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(X(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),k.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return B(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Le(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Le(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Le(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Le(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(pe(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ee.test(e)&&!fe[(ce.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(pe(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Le(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(pe(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Pe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=T),t.getComputedStyle(e)},Re=new RegExp(ne.join("|"),"i");function He(e,t,n){var r,i,o,a,s=e.style;return(n=n||Pe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||k.contains(e.ownerDocument,e)||(a=k.style(e,t)),!g.pixelBoxStyles()&&Me.test(a)&&Re.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function qe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ye.appendChild(s).appendChild(u);var e=T.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=36===u.offsetWidth||"absolute",ye.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=C.createElement("div"),u=C.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",g.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(g,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Fe=/^(none|table(?!-c[ea]).+)/,Be=/^--/,We={position:"absolute",visibility:"hidden",display:"block"},Ue={letterSpacing:"0",fontWeight:"400"},ze=["Webkit","Moz","ms"],Ve=C.createElement("div").style;function Xe(e){var t=k.cssProps[e];return t||(t=k.cssProps[e]=function(e){if(e in Ve)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=ze.length;n--;)if((e=ze[n]+t)in Ve)return e}(e)||e),t}function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Je(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+ne[a]+"Width",!0,i))):(u+=k.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=k.css(e,"border"+ne[a]+"Width",!0,i):s+=k.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function Ke(e,t,n){var r=Pe(e),i=He(e,t,r),o="border-box"===k.css(e,"boxSizing",!1,r),a=o;if(Me.test(i)){if(!n)return i;i="auto"}return a=a&&(g.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===k.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Je(e,t,n||(o?"border":"content"),a,r,i)+"px"}function Ge(e,t,n,r,i){return new Ge.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=He(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Be.test(t),c=e.style;if(u||(t=Xe(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:c[t];"string"==(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=oe(e,t,i),o="number"),null!=n&&n==n&&("number"===o&&(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),g.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?c.setProperty(t,n):c[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Be.test(t)||(t=Xe(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=He(e,t,r)),"normal"===i&&t in Ue&&(i=Ue[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,s){k.cssHooks[s]={get:function(e,t,n){if(t)return!Fe.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ke(e,s,n):ie(e,We,function(){return Ke(e,s,n)})},set:function(e,t,n){var r,i=Pe(e),o="border-box"===k.css(e,"boxSizing",!1,i),a=n&&Je(e,s,n,o,i);return o&&g.scrollboxSize()===i.position&&(a-=Math.ceil(e["offset"+s[0].toUpperCase()+s.slice(1)]-parseFloat(i[s])-Je(e,s,"border",!1,i)-.5)),a&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[s]=t,t=k.css(e,s)),Ye(0,t,a)}}}),k.cssHooks.marginLeft=qe(g.reliableMarginLeft,function(e,t){if(t)return(parseFloat(He(e,"marginLeft"))||e.getBoundingClientRect().left-ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ye)}),k.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Pe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=Ge).prototype={constructor:Ge,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=Ge.propHooks[this.prop];return e&&e.get?e.get(this):Ge.propHooks._default.get(this)},run:function(e){var t,n=Ge.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ge.propHooks._default.set(this),this}}).init.prototype=Ge.prototype,(Ge.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[k.cssProps[e.prop]]&&!k.cssHooks[e.prop]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ge.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=Ge.prototype.init,k.fx.step={};var Ze,Qe,et,tt,nt=/^(?:toggle|show|hide)$/,rt=/queueHooks$/;function it(){Qe&&(!1===C.hidden&&T.requestAnimationFrame?T.requestAnimationFrame(it):T.setTimeout(it,k.fx.interval),k.fx.tick())}function ot(){return T.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function at(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function st(e,t,n){for(var r,i=(ut.tweeners[t]||[]).concat(ut.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ut(o,e,t){var n,a,r=0,i=ut.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||ot(),t=Math.max(0,c.startTime+c.duration-e),n=1-(t/c.duration||0),r=0,i=c.tweens.length;r<i;r++)c.tweens[r].run(n);return s.notifyWith(o,[c,n,t]),n<1&&i?t:(i||s.notifyWith(o,[c,1,0]),s.resolveWith(o,[c]),!1)},c=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||ot(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,c.opts,e,t,c.opts.specialEasing[e]||c.opts.easing);return c.tweens.push(n),n},stop:function(e){var t=0,n=e?c.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)c.tweens[t].run(1);return e?(s.notifyWith(o,[c,1,0]),s.resolveWith(o,[c,e])):s.rejectWith(o,[c,e]),this}}),l=c.props;for(function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(l,c.opts.specialEasing);r<i;r++)if(n=ut.prefilters[r].call(c,o,l,c.opts))return y(n.stop)&&(k._queueHooks(c.elem,c.opts.queue).stop=n.stop.bind(n)),n;return k.map(l,st,c),y(c.opts.start)&&c.opts.start.call(o,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:c,queue:c.opts.queue})),c}k.Animation=k.extend(ut,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return oe(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){y(e)?(t=e,e=["*"]):e=e.match(I);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ut.tweeners[n]=ut.tweeners[n]||[],ut.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,c,l,f="width"in t||"height"in t,p=this,d={},h=e.style,v=e.nodeType&&re(e),m=J.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],nt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(v?"hide":"show")){if("show"!==i||!m||void 0===m[r])continue;v=!0}d[r]=m&&m[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(c=m&&m.display)&&(c=J.get(e,"display")),"none"===(l=k.css(e,"display"))&&(c?l=c:(se([e],!0),c=e.style.display||c,l=k.css(e,"display"),se([e]))),("inline"===l||"inline-block"===l&&null!=c)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=c}),null==c&&(l=h.display,c="none"===l?"":l)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(m?"hidden"in m&&(v=m.hidden):m=J.access(e,"fxshow",{display:c}),o&&(m.hidden=!v),v&&se([e],!0),p.done(function(){for(r in v||se([e]),J.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=st(v?m[r]:0,r,p),r in m||(m[r]=u.start,v&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ut.prefilters.unshift(e):ut.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||y(e)&&e,duration:e,easing:n&&t||t&&!y(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){y(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(re).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=ut(this,k.extend({},t),o);(i||J.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=J.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&rt.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=J.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(at(r,!0),e,t,n)}}),k.each({slideDown:at("show"),slideUp:at("hide"),slideToggle:at("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),Ze=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){Qe||(Qe=!0,it())},k.fx.stop=function(){Qe=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=T.setTimeout(e,r);t.stop=function(){T.clearTimeout(n)}})},et=C.createElement("input"),tt=C.createElement("select").appendChild(C.createElement("option")),et.type="checkbox",g.checkOn=""!==et.value,g.optSelected=tt.selected,(et=C.createElement("input")).value="t",et.type="radio",g.radioValue="t"===et.value;var ct,lt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return B(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!g.radioValue&&"radio"===t&&E(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(I);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=lt[t]||k.find.attr;lt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=lt[o],lt[o]=r,r=null!=a(e,t,n)?o:null,lt[o]=i),r}});var ft=/^(?:input|select|textarea|button)$/i,pt=/^(?:a|area)$/i;function dt(e){return(e.match(I)||[]).join(" ")}function ht(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(I)||[]}k.fn.extend({prop:function(e,t){return B(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):ft.test(e.nodeName)||pt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),g.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(y(t))return this.each(function(e){k(this).addClass(t.call(this,e,ht(this)))});if((e=vt(t)).length)for(;n=this[u++];)if(i=ht(n),r=1===n.nodeType&&" "+dt(i)+" "){for(a=0;o=e[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=dt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(y(t))return this.each(function(e){k(this).removeClass(t.call(this,e,ht(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)for(;n=this[u++];)if(i=ht(n),r=1===n.nodeType&&" "+dt(i)+" "){for(a=0;o=e[a++];)for(;-1<r.indexOf(" "+o+" ");)r=r.replace(" "+o+" "," ");i!==(s=dt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):y(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,ht(this),t),t)}):this.each(function(){var e,t,n,r;if(a)for(t=0,n=k(this),r=vt(i);e=r[t++];)n.hasClass(e)?n.removeClass(e):n.addClass(e);else void 0!==i&&"boolean"!==o||((e=ht(this))&&J.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&-1<(" "+dt(ht(n))+" ").indexOf(t))return!0;return!1}});var mt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=y(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(mt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:dt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!E(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=k.makeArray(t),a=i.length;a--;)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},g.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),g.focusin="onfocusin"in T;var gt=/^(?:focusinfocus|focusoutblur)$/,yt=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,c,l,f,p=[n||C],d=m.call(e,"type")?e.type:e,h=m.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||C,3!==n.nodeType&&8!==n.nodeType&&!gt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),l=k.event.special[d]||{},r||!l.trigger||!1!==l.trigger.apply(n,t))){if(!r&&!l.noBubble&&!b(n)){for(s=l.delegateType||d,gt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||C)&&p.push(a.defaultView||a.parentWindow||T)}for(i=0;(o=p[i++])&&!e.isPropagationStopped();)f=o,e.type=1<i?s:l.bindType||d,(c=(J.get(o,"events")||{})[e.type]&&J.get(o,"handle"))&&c.apply(o,t),(c=u&&o[u])&&c.apply&&X(o)&&(e.result=c.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||l._default&&!1!==l._default.apply(p.pop(),t)||!X(n)||u&&y(n[d])&&!b(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,yt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,yt),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),g.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=J.access(e,r);t||e.addEventListener(n,i,!0),J.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=J.access(e,r)-1;t?J.access(e,r,t):(e.removeEventListener(n,i,!0),J.remove(e,r))}}});var bt=T.location,xt=Date.now(),wt=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new T.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var _t=/\[\]$/,Tt=/\r?\n/g,Ct=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||_t.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=y(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&kt.test(this.nodeName)&&!Ct.test(e)&&(this.checked||!ue.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(Tt,"\r\n")}}):{name:t.name,value:n.replace(Tt,"\r\n")}}).get()}});var Et=/%20/g,St=/#.*$/,$t=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Nt=/^(?:GET|HEAD)$/,jt=/^\/\//,Dt={},Lt={},It="*/".concat("*"),Mt=C.createElement("a");function Pt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(I)||[];if(y(t))for(;n=i[r++];)"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Rt(t,i,o,a){var s={},u=t===Lt;function c(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),c(n),!1)}),r}return c(i.dataTypes[0])||!s["*"]&&c("*")}function Ht(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Mt.href=bt.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ht(Ht(e,k.ajaxSettings),t):Ht(k.ajaxSettings,e)},ajaxPrefilter:Pt(Dt),ajaxTransport:Pt(Lt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var l,f,p,n,d,r,h,v,i,o,m=k.ajaxSetup({},t),g=m.context||m,y=m.context&&(g.nodeType||g.jquery)?k(g):k.event,b=k.Deferred(),x=k.Callbacks("once memory"),w=m.statusCode||{},a={},s={},u="canceled",_={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n)for(n={};t=Ot.exec(p);)n[t[1].toLowerCase()]=t[2];t=n[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(m.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)_.always(e[_.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return l&&l.abort(t),c(0,t),this}};if(b.promise(_),m.url=((e||m.url||bt.href)+"").replace(jt,bt.protocol+"//"),m.type=t.method||t.type||m.method||m.type,m.dataTypes=(m.dataType||"*").toLowerCase().match(I)||[""],null==m.crossDomain){r=C.createElement("a");try{r.href=m.url,r.href=r.href,m.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=k.param(m.data,m.traditional)),Rt(Dt,m,t,_),h)return _;for(i in(v=k.event&&m.global)&&0==k.active++&&k.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!Nt.test(m.type),f=m.url.replace(St,""),m.hasContent?m.data&&m.processData&&0===(m.contentType||"").indexOf("application/x-www-form-urlencoded")&&(m.data=m.data.replace(Et,"+")):(o=m.url.slice(f.length),m.data&&(m.processData||"string"==typeof m.data)&&(f+=(wt.test(f)?"&":"?")+m.data,delete m.data),!1===m.cache&&(f=f.replace($t,"$1"),o=(wt.test(f)?"&":"?")+"_="+xt+++o),m.url=f+o),m.ifModified&&(k.lastModified[f]&&_.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&_.setRequestHeader("If-None-Match",k.etag[f])),(m.data&&m.hasContent&&!1!==m.contentType||t.contentType)&&_.setRequestHeader("Content-Type",m.contentType),_.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+It+"; q=0.01":""):m.accepts["*"]),m.headers)_.setRequestHeader(i,m.headers[i]);if(m.beforeSend&&(!1===m.beforeSend.call(g,_,m)||h))return _.abort();if(u="abort",x.add(m.complete),_.done(m.success),_.fail(m.error),l=Rt(Lt,m,t,_)){if(_.readyState=1,v&&y.trigger("ajaxSend",[_,m]),h)return _;m.async&&0<m.timeout&&(d=T.setTimeout(function(){_.abort("timeout")},m.timeout));try{h=!1,l.send(a,c)}catch(e){if(h)throw e;c(-1,e)}}else c(-1,"No Transport");function c(e,t,n,r){var i,o,a,s,u,c=t;h||(h=!0,d&&T.clearTimeout(d),l=void 0,p=r||"",_.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(m,_,n)),s=function(e,t,n,r){var i,o,a,s,u,c={},l=e.dataTypes.slice();if(l[1])for(a in e.converters)c[a.toLowerCase()]=e.converters[a];for(o=l.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=l.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=c[u+" "+o]||c["* "+o]))for(i in c)if((s=i.split(" "))[1]===o&&(a=c[u+" "+s[0]]||c["* "+s[0]])){!0===a?a=c[i]:!0!==c[i]&&(o=s[0],l.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(m,s,_,i),i?(m.ifModified&&((u=_.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=_.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===m.type?c="nocontent":304===e?c="notmodified":(c=s.state,o=s.data,i=!(a=s.error))):(a=c,!e&&c||(c="error",e<0&&(e=0))),_.status=e,_.statusText=(t||c)+"",i?b.resolveWith(g,[o,c,_]):b.rejectWith(g,[_,c,a]),_.statusCode(w),w=void 0,v&&y.trigger(i?"ajaxSuccess":"ajaxError",[_,m,i?o:a]),x.fireWith(g,[_,c]),v&&(y.trigger("ajaxComplete",[_,m]),--k.active||k.event.trigger("ajaxStop")))}return _},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return y(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(y(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return y(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=y(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new T.XMLHttpRequest}catch(e){}};var qt={0:200,1223:204},Ft=k.ajaxSettings.xhr();g.cors=!!Ft&&"withCredentials"in Ft,g.ajax=Ft=!!Ft,k.ajaxTransport(function(i){var o,a;if(g.cors||Ft&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(qt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&T.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain)return{send:function(e,t){r=k("<script>").prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),C.head.appendChild(r[0])},abort:function(){i&&i()}}});var Bt,Wt=[],Ut=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Wt.pop()||k.expando+"_"+xt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=y(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(wt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=T[r],T[r]=function(){o=arguments},n.always(function(){void 0===i?k(T).removeProp(r):T[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Wt.push(r)),o&&y(i)&&i(o[0]),o=i=void 0}),"script"}),g.createHTMLDocument=((Bt=C.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Bt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(g.createHTMLDocument?((r=(t=C.implementation.createHTMLDocument("")).createElement("base")).href=C.location.href,t.head.appendChild(r)):t=C),o=!n&&[],(i=S.exec(e))?[t.createElement(i[1])]:(i=ge([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=dt(e.slice(s)),e=e.slice(0,s)),y(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,c=k.css(e,"position"),l=k(e),f={};"static"===c&&(e.style.position="relative"),s=l.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===c||"fixed"===c)&&-1<(o+u).indexOf("auto")?(a=(r=l.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),y(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):l.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===k.css(e,"position");)e=e.offsetParent;return e||ye})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return B(this,function(e,t,n){var r;if(b(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=qe(g.pixelPosition,function(e,t){if(t)return t=He(e,n),Me.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return b(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),y(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=E,k.isFunction=y,k.isWindow=b,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var zt=T.jQuery,Vt=T.$;return k.noConflict=function(e){return T.$===k&&(T.$=Vt),e&&T.jQuery===k&&(T.jQuery=zt),k},e||(T.jQuery=T.$=k),k}),
/*
 * jQuery ScrollSpy Plugin
 * Author: @sxalexander, softwarespot
 * Licensed under the MIT license
 */
function(n,g){
// Plugin Logic
g.fn.extend({scrollspy:function(h,e){
// If the options parameter is a string, then assume it's an 'action', therefore swap the parameters around
if(o(h)){var t=e;
// Set the action as the option parameter
e=h,
// Set to be the reference action pointed to
h=t}
// override the default options with those passed to the plugin
// sanitize the following option with the default value if the predicate fails
a(h=g.extend({},r,h),r,"container",i);
// cache the jQuery object
var v=g(h.container);
// check if it's a valid jQuery selector
if(0===v.length)return this;
// sanitize the following option with the default value if the predicate fails
// check if the action is set to DESTROY/destroy
if(a(h,r,"namespace",o),o(e)&&"DESTROY"===e.toUpperCase())return v.off("scroll."+h.namespace),this;
// sanitize the following options with the default values if the predicates fails
a(h,r,"buffer",g.isNumeric),a(h,r,"max",g.isNumeric),a(h,r,"min",g.isNumeric),
// callbacks
a(h,r,"onEnter",g.isFunction),a(h,r,"onLeave",g.isFunction),a(h,r,"onLeaveTop",g.isFunction),a(h,r,"onLeaveBottom",g.isFunction),a(h,r,"onTick",g.isFunction),g.isFunction(h.max)&&(h.max=h.max()),g.isFunction(h.min)&&(h.min=h.min());
// check if the mode is set to VERTICAL/vertical
var m="VERTICAL"===n.String(h.mode).toUpperCase();return this.each(function(){
// cache this
var c=this,l=g(c),f=0,p=!1,d=0;
// cache the jQuery object
// create a scroll listener for the container
v.on("scroll."+h.namespace,function(){
// cache the jQuery object
var e=g(this),t={top:e.scrollTop(),left:e.scrollLeft()},n=v.height(),r=h.max,i=h.min,o=m?t.top+h.buffer:t.left+h.buffer;
// create a position object literal
// if we have reached the minimum bound, though are below the max
if(0===r&&(
// get the maximum value based on either the height or the outer width
r=m?n:v.outerWidth()+l.outerWidth()),i<=o&&o<=r)
// trigger the 'scrollEnter' event
p||(p=!0,f++,
// trigger the 'scrollEnter' event
l.trigger("scrollEnter",{position:t}),
// call the 'onEnter' function
null!==h.onEnter&&h.onEnter(c,t)),
// trigger the 'scrollTick' event
l.trigger("scrollTick",{position:t,inside:p,enters:f,leaves:d}),
// call the 'onTick' function
null!==h.onTick&&h.onTick(c,t,p,f,d);else if(p)p=!1,d++,
// trigger the 'scrollLeave' event
l.trigger("scrollLeave",{position:t,leaves:d}),
// call the 'onLeave' function
null!==h.onLeave&&h.onLeave(c,t),o<=i?(
// trigger the 'scrollLeaveTop' event
l.trigger("scrollLeaveTop",{position:t,leaves:d}),
// call the 'onLeaveTop' function
null!==h.onLeaveTop&&h.onLeaveTop(c,t)):r<=o&&(
// trigger the 'scrollLeaveBottom' event
l.trigger("scrollLeaveBottom",{position:t,leaves:d}),
// call the 'onLeaveBottom' function
null!==h.onLeaveBottom&&h.onLeaveBottom(c,t));else{
// Idea taken from: http://stackoverflow.com/questions/5353934/check-if-element-is-visible-on-screen
var a=v.scrollTop(),s=l.height(),u=l.offset().top;
// Get the element height
u<n+a&&a-s<u&&(
// trigger the 'scrollView' event
l.trigger("scrollView",{position:t}),
// call the 'onView' function
null!==h.onView&&h.onView(c,t))}})})}});
// Fields (Private)
// Defaults
// default options
var r={
// the offset to be applied to the left and top positions of the container
buffer:0,
// the element to apply the 'scrolling' event to (default window)
container:n,
// the maximum value of the X or Y coordinate, depending on mode the selected
max:0,
// the maximum value of the X or Y coordinate, depending on mode the selected
min:0,
// whether to listen to the X (horizontal) or Y (vertical) scrolling
mode:"vertical",
// namespace to append to the 'scroll' event
namespace:"scrollspy",
// call the following callback function every time the user enters the min / max zone
onEnter:null,
// call the following callback function every time the user leaves the min / max zone
onLeave:null,
// call the following callback function every time the user leaves the top zone
onLeaveTop:null,
// call the following callback function every time the user leaves the bottom zone
onLeaveBottom:null,
// call the following callback function on each scroll event within the min and max parameters
onTick:null,
// call the following callback function on each scroll event when the element is inside the viewable view port
onView:null};
// Methods (Private)
// check if a value is an object datatype
function i(e){return"object"===g.type(e)}
// check if a value is a string datatype with a length greater than zero when whitespace is stripped
function o(e){return"string"===g.type(e)&&0<g.trim(e).length}
// check if an option is correctly formatted using a predicate; otherwise, return the default value
function a(e,t,n,r){
// set the property to the default value if the predicate returned false
r(e[n])||(e[n]=t[n])}}(window,window.jQuery),function(o,s,e,w){"use strict";function u(e,t,n){return setTimeout(i(e,n),t)}function r(e,t,n){return!!Array.isArray(e)&&(a(e,n[t],n),!0)}function a(e,t,n){var r;if(e)if(e.forEach)e.forEach(t,n);else if(e.length!==w)for(r=0;r<e.length;)t.call(n,e[r],r,e),r++;else for(r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r,e)}function t(r,e,t){var i="DEPRECATED METHOD: "+e+"\n"+t+" AT \n";return function(){var e=new Error("get-stack-trace"),t=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",n=o.console&&(o.console.warn||o.console.log);return n&&n.call(o.console,i,t),r.apply(this,arguments)}}function n(e,t,n){var r,i=t.prototype;(r=e.prototype=Object.create(i)).constructor=e,r._super=i,n&&G(r,n)}function i(e,t){return function(){return e.apply(t,arguments)}}function c(e,t){return typeof e==ee?e.apply(t&&t[0]||w,t):e}function l(e,t){return e===w?t:e}function f(t,e,n){a(h(e),function(e){t.addEventListener(e,n,!1)})}function p(t,e,n){a(h(e),function(e){t.removeEventListener(e,n,!1)})}function _(e,t){for(;e;){if(e==t)return!0;e=e.parentNode}return!1}function d(e,t){return-1<e.indexOf(t)}function h(e){return e.trim().split(/\s+/g)}function v(e,t,n){if(e.indexOf&&!n)return e.indexOf(t);for(var r=0;r<e.length;){if(n&&e[r][n]==t||!n&&e[r]===t)return r;r++}return-1}function m(e){return Array.prototype.slice.call(e,0)}function g(e,n,t){for(var r=[],i=[],o=0;o<e.length;){var a=n?e[o][n]:e[o];v(i,a)<0&&r.push(e[o]),i[o]=a,o++}return t&&(r=n?r.sort(function(e,t){return e[n]>t[n]}):r.sort()),r}function y(e,t){for(var n,r,i=t[0].toUpperCase()+t.slice(1),o=0;o<Z.length;){if((r=(n=Z[o])?n+i:t)in e)return r;o++}return w}function b(e){var t=e.ownerDocument||e;return t.defaultView||t.parentWindow||o}function x(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){c(t.options.enable,[t])&&n.handler(e)},this.init()}function T(e,t,n){var r=n.pointers.length,i=n.changedPointers.length,o=t&de&&r-i==0,a=t&(he|ve)&&r-i==0;n.isFirst=!!o,n.isFinal=!!a,o&&(e.session={}),n.eventType=t,function(e,t){var n=e.session,r=t.pointers,i=r.length;n.firstInput||(n.firstInput=C(t)),1<i&&!n.firstMultiple?n.firstMultiple=C(t):1===i&&(n.firstMultiple=!1);var o=n.firstInput,a=n.firstMultiple,s=a?a.center:o.center,u=t.center=k(r);t.timeStamp=re(),t.deltaTime=t.timeStamp-o.timeStamp,t.angle=$(s,u),t.distance=S(s,u),c=n,l=t,f=l.center,p=c.offsetDelta||{},d=c.prevDelta||{},h=c.prevInput||{},l.eventType!==de&&h.eventType!==he||(d=c.prevDelta={x:h.deltaX||0,y:h.deltaY||0},p=c.offsetDelta={x:f.x,y:f.y}),l.deltaX=d.x+(f.x-p.x),l.deltaY=d.y+(f.y-p.y),t.offsetDirection=E(t.deltaX,t.deltaY);var c,l,f,p,d,h;var v=A(t.deltaTime,t.deltaX,t.deltaY);t.overallVelocityX=v.x,t.overallVelocityY=v.y,t.overallVelocity=ne(v.x)>ne(v.y)?v.x:v.y,t.scale=a?(y=a.pointers,b=r,S(b[0],b[1],ke)/S(y[0],y[1],ke)):1,t.rotation=a?(m=a.pointers,g=r,$(g[1],g[0],ke)+$(m[1],m[0],ke)):0,t.maxPointers=n.prevInput?t.pointers.length>n.prevInput.maxPointers?t.pointers.length:n.prevInput.maxPointers:t.pointers.length,function(e,t){var n,r,i,o,a=e.lastInterval||t,s=t.timeStamp-a.timeStamp;if(t.eventType!=ve&&(pe<s||a.velocity===w)){var u=t.deltaX-a.deltaX,c=t.deltaY-a.deltaY,l=A(s,u,c);r=l.x,i=l.y,n=ne(l.x)>ne(l.y)?l.x:l.y,o=E(u,c),e.lastInterval=t}else n=a.velocity,r=a.velocityX,i=a.velocityY,o=a.direction;t.velocity=n,t.velocityX=r,t.velocityY=i,t.direction=o}(n,t);var m,g;var y,b;var x=e.element;_(t.srcEvent.target,x)&&(x=t.srcEvent.target),t.target=x}(e,n),e.emit("hammer.input",n),e.recognize(n),e.session.prevInput=n}function C(e){for(var t=[],n=0;n<e.pointers.length;)t[n]={clientX:te(e.pointers[n].clientX),clientY:te(e.pointers[n].clientY)},n++;return{timeStamp:re(),pointers:t,center:k(t),deltaX:e.deltaX,deltaY:e.deltaY}}function k(e){var t=e.length;if(1===t)return{x:te(e[0].clientX),y:te(e[0].clientY)};for(var n=0,r=0,i=0;i<t;)n+=e[i].clientX,r+=e[i].clientY,i++;return{x:te(n/t),y:te(r/t)}}function A(e,t,n){return{x:t/e||0,y:n/e||0}}function E(e,t){return e===t?me:ne(e)>=ne(t)?e<0?ge:ye:t<0?be:xe}function S(e,t,n){n||(n=Ce);var r=t[n[0]]-e[n[0]],i=t[n[1]]-e[n[1]];return Math.sqrt(r*r+i*i)}function $(e,t,n){n||(n=Ce);var r=t[n[0]]-e[n[0]],i=t[n[1]]-e[n[1]];return 180*Math.atan2(i,r)/Math.PI}function O(){this.evEl=Ee,this.evWin=Se,this.pressed=!1,x.apply(this,arguments)}function N(){this.evEl=Ne,this.evWin=je,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function j(){this.evTarget="touchstart",this.evWin="touchstart touchmove touchend touchcancel",this.started=!1,x.apply(this,arguments)}function D(){this.evTarget=Ie,this.targetIds={},x.apply(this,arguments)}function L(){x.apply(this,arguments);var e=i(this.handler,this);this.touch=new D(this.manager,e),this.mouse=new O(this.manager,e),this.primaryTouch=null,this.lastTouches=[]}function I(e){var t=e.changedPointers[0];if(t.identifier===this.primaryTouch){var n={x:t.clientX,y:t.clientY};this.lastTouches.push(n);var r=this.lastTouches;setTimeout(function(){var e=r.indexOf(n);-1<e&&r.splice(e,1)},Me)}}function M(e,t){this.manager=e,this.set(t)}function P(e){this.options=G({},this.defaults,e||{}),this.id=ae++,this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=ze,this.simultaneous={},this.requireFail=[]}function R(e){return 16&e?"cancel":8&e?"end":4&e?"move":2&e?"start":""}function H(e){return e==xe?"down":e==be?"up":e==ge?"left":e==ye?"right":""}function q(e,t){var n=t.manager;return n?n.get(e):e}function F(){P.apply(this,arguments)}function B(){F.apply(this,arguments),this.pX=null,this.pY=null}function W(){F.apply(this,arguments)}function U(){P.apply(this,arguments),this._timer=null,this._input=null}function z(){F.apply(this,arguments)}function V(){F.apply(this,arguments)}function X(){P.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function Y(e,t){return(t=t||{}).recognizers=l(t.recognizers,Y.defaults.preset),new J(e,t)}function J(e,t){var n;this.options=G({},Y.defaults,t||{}),this.options.inputTarget=this.options.inputTarget||e,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=e,this.input=new((n=this).options.inputClass||(ue?N:ce?D:se?L:O))(n,T),this.touchAction=new M(this,this.options.touchAction),K(this,!0),a(this.options.recognizers,function(e){var t=this.add(new e[0](e[1]));e[2]&&t.recognizeWith(e[2]),e[3]&&t.requireFailure(e[3])},this)}function K(n,r){var i,o=n.element;o.style&&(a(n.options.cssProps,function(e,t){i=y(o.style,t),r?(n.oldCssProps[i]=o.style[i],o.style[i]=e):o.style[i]=n.oldCssProps[i]||""}),r||(n.oldCssProps={}))}var G,Z=["","webkit","Moz","MS","ms","o"],Q=s.createElement("div"),ee="function",te=Math.round,ne=Math.abs,re=Date.now;G="function"!=typeof Object.assign?function(e){if(e===w||null===e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n];if(r!==w&&null!==r)for(var i in r)r.hasOwnProperty(i)&&(t[i]=r[i])}return t}:Object.assign;var ie=t(function(e,t,n){for(var r=Object.keys(t),i=0;i<r.length;)(!n||n&&e[r[i]]===w)&&(e[r[i]]=t[r[i]]),i++;return e},"extend","Use `assign`."),oe=t(function(e,t){return ie(e,t,!0)},"merge","Use `assign`."),ae=1,se="ontouchstart"in o,ue=y(o,"PointerEvent")!==w,ce=se&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),le="touch",fe="mouse",pe=25,de=1,he=4,ve=8,me=1,ge=2,ye=4,be=8,xe=16,we=ge|ye,_e=be|xe,Te=we|_e,Ce=["x","y"],ke=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&f(this.element,this.evEl,this.domHandler),this.evTarget&&f(this.target,this.evTarget,this.domHandler),this.evWin&&f(b(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&p(this.element,this.evEl,this.domHandler),this.evTarget&&p(this.target,this.evTarget,this.domHandler),this.evWin&&p(b(this.element),this.evWin,this.domHandler)}};var Ae={mousedown:de,mousemove:2,mouseup:he},Ee="mousedown",Se="mousemove mouseup";n(O,x,{handler:function(e){var t=Ae[e.type];t&de&&0===e.button&&(this.pressed=!0),2&t&&1!==e.which&&(t=he),this.pressed&&(t&he&&(this.pressed=!1),this.callback(this.manager,t,{pointers:[e],changedPointers:[e],pointerType:fe,srcEvent:e}))}});var $e={pointerdown:de,pointermove:2,pointerup:he,pointercancel:ve,pointerout:ve},Oe={2:le,3:"pen",4:fe,5:"kinect"},Ne="pointerdown",je="pointermove pointerup pointercancel";o.MSPointerEvent&&!o.PointerEvent&&(Ne="MSPointerDown",je="MSPointerMove MSPointerUp MSPointerCancel"),n(N,x,{handler:function(e){var t=this.store,n=!1,r=e.type.toLowerCase().replace("ms",""),i=$e[r],o=Oe[e.pointerType]||e.pointerType,a=o==le,s=v(t,e.pointerId,"pointerId");i&de&&(0===e.button||a)?s<0&&(t.push(e),s=t.length-1):i&(he|ve)&&(n=!0),s<0||(t[s]=e,this.callback(this.manager,i,{pointers:t,changedPointers:[e],pointerType:o,srcEvent:e}),n&&t.splice(s,1))}});var De={touchstart:de,touchmove:2,touchend:he,touchcancel:ve};n(j,x,{handler:function(e){var t=De[e.type];if(t===de&&(this.started=!0),this.started){var n=function(e,t){var n=m(e.touches),r=m(e.changedTouches);return t&(he|ve)&&(n=g(n.concat(r),"identifier",!0)),[n,r]}.call(this,e,t);t&(he|ve)&&n[0].length-n[1].length==0&&(this.started=!1),this.callback(this.manager,t,{pointers:n[0],changedPointers:n[1],pointerType:le,srcEvent:e})}}});var Le={touchstart:de,touchmove:2,touchend:he,touchcancel:ve},Ie="touchstart touchmove touchend touchcancel";n(D,x,{handler:function(e){var t=Le[e.type],n=function(e,t){var n=m(e.touches),r=this.targetIds;if(t&(2|de)&&1===n.length)return r[n[0].identifier]=!0,[n,n];var i,o,a=m(e.changedTouches),s=[],u=this.target;if(o=n.filter(function(e){return _(e.target,u)}),t===de)for(i=0;i<o.length;)r[o[i].identifier]=!0,i++;for(i=0;i<a.length;)r[a[i].identifier]&&s.push(a[i]),t&(he|ve)&&delete r[a[i].identifier],i++;return s.length?[g(o.concat(s),"identifier",!0),s]:void 0}.call(this,e,t);n&&this.callback(this.manager,t,{pointers:n[0],changedPointers:n[1],pointerType:le,srcEvent:e})}});var Me=2500;n(L,x,{handler:function(e,t,n){var r=n.pointerType==le,i=n.pointerType==fe;if(!(i&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(r)(function(e,t){e&de?(this.primaryTouch=t.changedPointers[0].identifier,I.call(this,t)):e&(he|ve)&&I.call(this,t)}).call(this,t,n);else if(i&&function(e){for(var t=e.srcEvent.clientX,n=e.srcEvent.clientY,r=0;r<this.lastTouches.length;r++){var i=this.lastTouches[r],o=Math.abs(t-i.x),a=Math.abs(n-i.y);if(o<=25&&a<=25)return!0}return!1}.call(this,n))return;this.callback(e,t,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Pe=y(Q.style,"touchAction"),Re=Pe!==w,He="compute",qe="manipulation",Fe="none",Be="pan-x",We="pan-y",Ue=function(){if(!Re)return!1;var t={},n=o.CSS&&o.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(e){t[e]=!n||o.CSS.supports("touch-action",e)}),t}();M.prototype={set:function(e){e==He&&(e=this.compute()),Re&&this.manager.element.style&&Ue[e]&&(this.manager.element.style[Pe]=e),this.actions=e.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return a(this.manager.recognizers,function(e){c(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),function(e){if(d(e,Fe))return Fe;var t=d(e,Be),n=d(e,We);return t&&n?Fe:t||n?t?Be:We:d(e,qe)?qe:"auto"}(t.join(" "))},preventDefaults:function(e){var t=e.srcEvent,n=e.offsetDirection;if(!this.manager.session.prevented){var r=this.actions,i=d(r,Fe)&&!Ue[Fe],o=d(r,We)&&!Ue[We],a=d(r,Be)&&!Ue[Be];if(i){var s=1===e.pointers.length,u=e.distance<2,c=e.deltaTime<250;if(s&&u&&c)return}return a&&o?void 0:i||o&&n&we||a&&n&_e?this.preventSrc(t):void 0}t.preventDefault()},preventSrc:function(e){this.manager.session.prevented=!0,e.preventDefault()}};var ze=1;P.prototype={defaults:{},set:function(e){return G(this.options,e),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(e){if(r(e,"recognizeWith",this))return this;var t=this.simultaneous;return t[(e=q(e,this)).id]||(t[e.id]=e).recognizeWith(this),this},dropRecognizeWith:function(e){return r(e,"dropRecognizeWith",this)||(e=q(e,this),delete this.simultaneous[e.id]),this},requireFailure:function(e){if(r(e,"requireFailure",this))return this;var t=this.requireFail;return-1===v(t,e=q(e,this))&&(t.push(e),e.requireFailure(this)),this},dropRequireFailure:function(e){if(r(e,"dropRequireFailure",this))return this;e=q(e,this);var t=v(this.requireFail,e);return-1<t&&this.requireFail.splice(t,1),this},hasRequireFailures:function(){return 0<this.requireFail.length},canRecognizeWith:function(e){return!!this.simultaneous[e.id]},emit:function(t){function e(e){n.manager.emit(e,t)}var n=this,r=this.state;r<8&&e(n.options.event+R(r)),e(n.options.event),t.additionalEvent&&e(t.additionalEvent),8<=r&&e(n.options.event+R(r))},tryEmit:function(e){return this.canEmit()?this.emit(e):void(this.state=32)},canEmit:function(){for(var e=0;e<this.requireFail.length;){if(!(this.requireFail[e].state&(32|ze)))return!1;e++}return!0},recognize:function(e){var t=G({},e);return c(this.options.enable,[this,t])?(56&this.state&&(this.state=ze),this.state=this.process(t),void(30&this.state&&this.tryEmit(t))):(this.reset(),void(this.state=32))},process:function(e){},getTouchAction:function(){},reset:function(){}},n(F,P,{defaults:{pointers:1},attrTest:function(e){var t=this.options.pointers;return 0===t||e.pointers.length===t},process:function(e){var t=this.state,n=e.eventType,r=6&t,i=this.attrTest(e);return r&&(n&ve||!i)?16|t:r||i?n&he?8|t:2&t?4|t:2:32}}),n(B,F,{defaults:{event:"pan",threshold:10,pointers:1,direction:Te},getTouchAction:function(){var e=this.options.direction,t=[];return e&we&&t.push(We),e&_e&&t.push(Be),t},directionTest:function(e){var t=this.options,n=!0,r=e.distance,i=e.direction,o=e.deltaX,a=e.deltaY;return i&t.direction||(t.direction&we?(i=0===o?me:o<0?ge:ye,n=o!=this.pX,r=Math.abs(e.deltaX)):(i=0===a?me:a<0?be:xe,n=a!=this.pY,r=Math.abs(e.deltaY))),e.direction=i,n&&r>t.threshold&&i&t.direction},attrTest:function(e){return F.prototype.attrTest.call(this,e)&&(2&this.state||!(2&this.state)&&this.directionTest(e))},emit:function(e){this.pX=e.deltaX,this.pY=e.deltaY;var t=H(e.direction);t&&(e.additionalEvent=this.options.event+t),this._super.emit.call(this,e)}}),n(W,F,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Fe]},attrTest:function(e){return this._super.attrTest.call(this,e)&&(Math.abs(e.scale-1)>this.options.threshold||2&this.state)},emit:function(e){if(1!==e.scale){var t=e.scale<1?"in":"out";e.additionalEvent=this.options.event+t}this._super.emit.call(this,e)}}),n(U,P,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return["auto"]},process:function(e){var t=this.options,n=e.pointers.length===t.pointers,r=e.distance<t.threshold,i=e.deltaTime>t.time;if(this._input=e,!r||!n||e.eventType&(he|ve)&&!i)this.reset();else if(e.eventType&de)this.reset(),this._timer=u(function(){this.state=8,this.tryEmit()},t.time,this);else if(e.eventType&he)return 8;return 32},reset:function(){clearTimeout(this._timer)},emit:function(e){8===this.state&&(e&&e.eventType&he?this.manager.emit(this.options.event+"up",e):(this._input.timeStamp=re(),this.manager.emit(this.options.event,this._input)))}}),n(z,F,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Fe]},attrTest:function(e){return this._super.attrTest.call(this,e)&&(Math.abs(e.rotation)>this.options.threshold||2&this.state)}}),n(V,F,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:we|_e,pointers:1},getTouchAction:function(){return B.prototype.getTouchAction.call(this)},attrTest:function(e){var t,n=this.options.direction;return n&(we|_e)?t=e.overallVelocity:n&we?t=e.overallVelocityX:n&_e&&(t=e.overallVelocityY),this._super.attrTest.call(this,e)&&n&e.offsetDirection&&e.distance>this.options.threshold&&e.maxPointers==this.options.pointers&&ne(t)>this.options.velocity&&e.eventType&he},emit:function(e){var t=H(e.offsetDirection);t&&this.manager.emit(this.options.event+t,e),this.manager.emit(this.options.event,e)}}),n(X,P,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[qe]},process:function(e){var t=this.options,n=e.pointers.length===t.pointers,r=e.distance<t.threshold,i=e.deltaTime<t.time;if(this.reset(),e.eventType&de&&0===this.count)return this.failTimeout();if(r&&i&&n){if(e.eventType!=he)return this.failTimeout();var o=!this.pTime||e.timeStamp-this.pTime<t.interval,a=!this.pCenter||S(this.pCenter,e.center)<t.posThreshold;if(this.pTime=e.timeStamp,this.pCenter=e.center,a&&o?this.count+=1:this.count=1,this._input=e,0===this.count%t.taps)return this.hasRequireFailures()?(this._timer=u(function(){this.state=8,this.tryEmit()},t.interval,this),2):8}return 32},failTimeout:function(){return this._timer=u(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){8==this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),Y.VERSION="2.0.8",Y.defaults={domEvents:!1,touchAction:He,enable:!0,inputTarget:null,inputClass:null,preset:[[z,{enable:!1}],[W,{enable:!1},["rotate"]],[V,{direction:we}],[B,{direction:we},["swipe"]],[X],[X,{event:"doubletap",taps:2},["tap"]],[U]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};J.prototype={set:function(e){return G(this.options,e),e.touchAction&&this.touchAction.update(),e.inputTarget&&(this.input.destroy(),this.input.target=e.inputTarget,this.input.init()),this},stop:function(e){this.session.stopped=e?2:1},recognize:function(e){var t=this.session;if(!t.stopped){this.touchAction.preventDefaults(e);var n,r=this.recognizers,i=t.curRecognizer;(!i||i&&8&i.state)&&(i=t.curRecognizer=null);for(var o=0;o<r.length;)n=r[o],2===t.stopped||i&&n!=i&&!n.canRecognizeWith(i)?n.reset():n.recognize(e),!i&&14&n.state&&(i=t.curRecognizer=n),o++}},get:function(e){if(e instanceof P)return e;for(var t=this.recognizers,n=0;n<t.length;n++)if(t[n].options.event==e)return t[n];return null},add:function(e){if(r(e,"add",this))return this;var t=this.get(e.options.event);return t&&this.remove(t),this.recognizers.push(e),(e.manager=this).touchAction.update(),e},remove:function(e){if(r(e,"remove",this))return this;if(e=this.get(e)){var t=this.recognizers,n=v(t,e);-1!==n&&(t.splice(n,1),this.touchAction.update())}return this},on:function(e,t){if(e!==w&&t!==w){var n=this.handlers;return a(h(e),function(e){n[e]=n[e]||[],n[e].push(t)}),this}},off:function(e,t){if(e!==w){var n=this.handlers;return a(h(e),function(e){t?n[e]&&n[e].splice(v(n[e],t),1):delete n[e]}),this}},emit:function(e,t){var n,r,i;this.options.domEvents&&(n=e,r=t,(i=s.createEvent("Event")).initEvent(n,!0,!0),(i.gesture=r).target.dispatchEvent(i));var o=this.handlers[e]&&this.handlers[e].slice();if(o&&o.length){t.type=e,t.preventDefault=function(){t.srcEvent.preventDefault()};for(var a=0;a<o.length;)o[a](t),a++}},destroy:function(){this.element&&K(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},G(Y,{INPUT_START:de,INPUT_MOVE:2,INPUT_END:he,INPUT_CANCEL:ve,STATE_POSSIBLE:ze,STATE_BEGAN:2,STATE_CHANGED:4,STATE_ENDED:8,STATE_RECOGNIZED:8,STATE_CANCELLED:16,STATE_FAILED:32,DIRECTION_NONE:me,DIRECTION_LEFT:ge,DIRECTION_RIGHT:ye,DIRECTION_UP:be,DIRECTION_DOWN:xe,DIRECTION_HORIZONTAL:we,DIRECTION_VERTICAL:_e,DIRECTION_ALL:Te,Manager:J,Input:x,TouchAction:M,TouchInput:D,MouseInput:O,PointerEventInput:N,TouchMouseInput:L,SingleTouchInput:j,Recognizer:P,AttrRecognizer:F,Tap:X,Pan:B,Swipe:V,Pinch:W,Rotate:z,Press:U,on:f,off:p,each:a,merge:oe,extend:ie,assign:G,inherit:n,bindFn:i,prefixed:y}),(void 0!==o?o:"undefined"!=typeof self?self:{}).Hammer=Y,"function"==typeof define&&define.amd?define(function(){return Y}):"undefined"!=typeof module&&module.exports?module.exports=Y:o.Hammer=Y}(window,document),
/*!
 * Vue.js v2.5.17
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Vue=t()}(this,function(){"use strict";
/*  */var g=Object.freeze({});
// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function I(e){return null==e}function M(e){return null!=e}function L(e){return!0===e}
/**
 * Check if value is primitive
 */
function v(e){return"string"==typeof e||"number"==typeof e||
// $flow-disable-line
"symbol"==typeof e||"boolean"==typeof e}
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */function P(e){return null!==e&&"object"==typeof e}
/**
 * Get the raw type string of a value e.g. [object Object]
 */var t=Object.prototype.toString;function f(e){return t.call(e).slice(8,-1)}
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */function c(e){return"[object Object]"===t.call(e)}function i(e){return"[object RegExp]"===t.call(e)}
/**
 * Check if val is a valid array index.
 */function o(e){var t=parseFloat(String(e));return 0<=t&&Math.floor(t)===t&&isFinite(e)}
/**
 * Convert a value to a string that is actually rendered.
 */function n(e){return null==e?"":"object"==typeof e?JSON.stringify(e,null,2):String(e)}
/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */function R(e){var t=parseFloat(e);return isNaN(t)?e:t}
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */function s(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}
/**
 * Check if a tag is a built-in tag.
 */var u=s("slot,component",!0),l=s("key,ref,slot,slot-scope,is");
/**
 * Check if a attribute is a reserved attribute.
 */
/**
 * Remove an item from an array
 */
function p(e,t){if(e.length){var n=e.indexOf(t);if(-1<n)return e.splice(n,1)}}
/**
 * Check whether the object has the property.
 */var r=Object.prototype.hasOwnProperty;function y(e,t){return r.call(e,t)}
/**
 * Create a cached version of a pure function.
 */function e(t){var n=Object.create(null);return function(e){return n[e]||(n[e]=t(e))}}
/**
 * Camelize a hyphen-delimited string.
 */var a=/-(\w)/g,b=e(function(e){return e.replace(a,function(e,t){return t?t.toUpperCase():""})}),d=e(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),h=/\B([A-Z])/g,x=e(function(e){return e.replace(h,"-$1").toLowerCase()});var m=Function.prototype.bind?function(e,t){return e.bind(t)}:
/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */
/* istanbul ignore next */
function(n,r){function e(e){var t=arguments.length;return t?1<t?n.apply(r,arguments):n.call(r,e):n.call(r)}return e._length=n.length,e};
/**
 * Convert an Array-like object to a real Array.
 */function w(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}
/**
 * Mix properties into target object.
 */function _(e,t){for(var n in t)e[n]=t[n];return e}
/**
 * Merge an Array of Objects into a single Object.
 */function T(e){for(var t={},n=0;n<e.length;n++)e[n]&&_(t,e[n]);return t}
/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */function C(e,t,n){}
/**
 * Always return false.
 */var E=function(e,t,n){return!1},k=function(e){return e};
/**
 * Return same value
 */
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function A(t,n){if(t===n)return!0;var e=P(t),r=P(n);if(!e||!r)return!e&&!r&&String(t)===String(n);try{var i=Array.isArray(t),o=Array.isArray(n);if(i&&o)return t.length===n.length&&t.every(function(e,t){return A(e,n[t])});if(i||o)
/* istanbul ignore next */
return!1;var a=Object.keys(t),s=Object.keys(n);return a.length===s.length&&a.every(function(e){return A(t[e],n[e])})}catch(e){
/* istanbul ignore next */
return!1}}function S(e,t){for(var n=0;n<e.length;n++)if(A(e[n],t))return n;return-1}
/**
 * Ensure a function is called only once.
 */function H(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var q="data-server-rendered",$=["component","directive","filter"],O=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured"],F={
/**
   * Option merge strategies (used in core/util/options)
   */
// $flow-disable-line
optionMergeStrategies:Object.create(null),
/**
   * Whether to suppress warnings.
   */
silent:!1,
/**
   * Show production mode tip message on boot?
   */
productionTip:!0,
/**
   * Whether to enable devtools
   */
devtools:!0,
/**
   * Whether to record perf
   */
performance:!1,
/**
   * Error handler for watcher errors
   */
errorHandler:null,
/**
   * Warn handler for watcher warns
   */
warnHandler:null,
/**
   * Ignore certain custom elements
   */
ignoredElements:[],
/**
   * Custom user key aliases for v-on
   */
// $flow-disable-line
keyCodes:Object.create(null),
/**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
isReservedTag:E,
/**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
isReservedAttr:E,
/**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
isUnknownElement:E,
/**
   * Get the namespace of an element
   */
getTagNamespace:C,
/**
   * Parse the real tag name for the specific platform.
   */
parsePlatformTagName:k,
/**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
mustUseProp:E,
/**
   * Exposed for legacy reasons
   */
_lifecycleHooks:O}
/*  */
/**
 * Check if a string starts with $ or _
 */;
/*  */
/**
 * Check if a string starts with $ or _
 */
function N(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}
/**
 * Define a property.
 */function j(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}
/**
 * Parse simple path.
 */var D=/[^\w.$]/;
/*  */
// can we use __proto__?
var B,W="__proto__"in{},U="undefined"!=typeof window,z="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,V=z&&WXEnvironment.platform.toLowerCase(),X=U&&window.navigator.userAgent.toLowerCase(),Y=X&&/msie|trident/.test(X),J=X&&0<X.indexOf("msie 9.0"),K=X&&0<X.indexOf("edge/"),G=(X&&X.indexOf("android"),X&&/iphone|ipad|ipod|ios/.test(X)||"ios"===V),Z=X&&/chrome\/\d+/.test(X)&&!K,Q={}.watch,ee=!1;
// Browser environment sniffing
if(U)try{var te={};Object.defineProperty(te,"passive",{get:function(){
/* istanbul ignore next */
ee=!0}}),// https://github.com/facebook/flow/issues/285
window.addEventListener("test-passive",null,te)}catch(e){}
// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var ne=function(){return void 0===B&&(
/* istanbul ignore if */
B=!U&&!z&&"undefined"!=typeof global&&"server"===global.process.env.VUE_ENV),B},re=U&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
// detect devtools
/* istanbul ignore next */
function ie(e){return"function"==typeof e&&/native code/.test(e.toString())}var oe,ae="undefined"!=typeof Symbol&&ie(Symbol)&&"undefined"!=typeof Reflect&&ie(Reflect.ownKeys);
/* istanbul ignore if */ // $flow-disable-line
// use native Set when available.
oe="undefined"!=typeof Set&&ie(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}()
/*  */;var se=C,ue=C,ce=C,le=C,fe="undefined"!=typeof console,pe=/(?:^|[-_])(\w)/g;se=function(e,t){var n=t?ce(t):"";F.warnHandler?F.warnHandler.call(null,e,t,n):fe&&!F.silent&&console.error("[Vue warn]: "+e+n)},ue=function(e,t){fe&&!F.silent&&console.warn("[Vue tip]: "+e+(t?ce(t):""))},le=function(e,t){if(e.$root===e)return"<Root>";var n="function"==typeof e&&null!=e.cid?e.options:e._isVue?e.$options||e.constructor.options:e||{},r=n.name||n._componentTag,i=n.__file;if(!r&&i){var o=i.match(/([^/\\]+)\.vue$/);r=o&&o[1]}return(r?"<"+r.replace(pe,function(e){return e.toUpperCase()}).replace(/[-_]/g,"")+">":"<Anonymous>")+(i&&!1!==t?" at "+i:"")};ce=function(e){if(e._isVue&&e.$parent){for(var t=[],n=0;e;){if(0<t.length){var r=t[t.length-1];if(r.constructor===e.constructor){n++,e=e.$parent;continue}0<n&&(t[t.length-1]=[r,n],n=0)}t.push(e),e=e.$parent}return"\n\nfound in\n\n"+t.map(function(e,t){return""+(0===t?"---\x3e ":function(e,t){for(var n="";t;)t%2==1&&(n+=e),1<t&&(e+=e),t>>=1;return n}(" ",5+2*t))+(Array.isArray(e)?le(e[0])+"... ("+e[1]+" recursive calls)":le(e))}).join("\n")}return"\n\n(found in "+le(e)+")"};
/*  */
var de=0,he=function(){this.id=de++,this.subs=[]};
/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */he.prototype.addSub=function(e){this.subs.push(e)},he.prototype.removeSub=function(e){p(this.subs,e)},he.prototype.depend=function(){he.target&&he.target.addDep(this)},he.prototype.notify=function(){for(
// stabilize the subscriber list first
var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},
// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
he.target=null;var ve=[];function me(e){he.target&&ve.push(he.target),he.target=e}function ge(){he.target=ve.pop()}
/*  */var ye=function(e,t,n,r,i,o,a,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},be={child:{configurable:!0}};
// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
be.child.get=function(){return this.componentInstance},Object.defineProperties(ye.prototype,be);var xe=function(e){void 0===e&&(e="");var t=new ye;return t.text=e,t.isComment=!0,t};function we(e){return new ye(void 0,void 0,void 0,String(e))}
// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function _e(e){var t=new ye(e.tag,e.data,e.children,e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.isCloned=!0,t}
/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */var Te=Array.prototype,Ce=Object.create(Te);
/**
 * Intercept mutating methods and emit events
 */
["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(o){
// cache original method
var a=Te[o];j(Ce,o,function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var n,r=a.apply(this,e),i=this.__ob__;switch(o){case"push":case"unshift":n=e;break;case"splice":n=e.slice(2)}return n&&i.observeArray(n),
// notify change
i.dep.notify(),r})});
/*  */
var ke=Object.getOwnPropertyNames(Ce),Ae=!0;
/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */function Ee(e){Ae=e}
/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */var Se=function(e){(this.value=e,this.dep=new he,this.vmCount=0,j(e,"__ob__",this),Array.isArray(e))?((W?$e:Oe)(e,Ce,ke),this.observeArray(e)):this.walk(e)};
/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
// helpers
/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function $e(e,t,n){
/* eslint-disable no-proto */
e.__proto__=t;
/* eslint-enable no-proto */}
/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */function Oe(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];j(e,o,t[o])}}
/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */function Ne(e,t){var n;if(P(e)&&!(e instanceof ye))return y(e,"__ob__")&&e.__ob__ instanceof Se?n=e.__ob__:Ae&&!ne()&&(Array.isArray(e)||c(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new Se(e)),t&&n&&n.vmCount++,n}
/**
 * Define a reactive property on an Object.
 */function je(n,e,r,i,o){var a=new he,t=Object.getOwnPropertyDescriptor(n,e);if(!t||!1!==t.configurable){
// cater for pre-defined getter/setters
var s=t&&t.get;s||2!==arguments.length||(r=n[e]);var u=t&&t.set,c=!o&&Ne(r);Object.defineProperty(n,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(n):r;return he.target&&(a.depend(),c&&(c.dep.depend(),Array.isArray(e)&&
/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function e(t){for(var n=void 0,r=0,i=t.length;r<i;r++)(n=t[r])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&e(n)}
/*  */
/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */(e))),e},set:function(e){var t=s?s.call(n):r;
/* eslint-disable no-self-compare */e===t||e!=e&&t!=t||(
/* eslint-enable no-self-compare */
i&&i(),u?u.call(n,e):r=e,c=!o&&Ne(e),a.notify())}})}}
/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */function De(e,t,n){if((I(e)||v(e))&&se("Cannot set reactive property on undefined, null, or primitive value: "+e),Array.isArray(e)&&o(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n;var r=e.__ob__;return e._isVue||r&&r.vmCount?(se("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."),n):r?(je(r.value,t,n),r.dep.notify(),n):e[t]=n}
/**
 * Delete a property and trigger change if necessary.
 */function Le(e,t){if((I(e)||v(e))&&se("Cannot delete reactive property on undefined, null, or primitive value: "+e),Array.isArray(e)&&o(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount?se("Avoid deleting properties on a Vue instance or its root $data - just set it to null."):y(e,t)&&(delete e[t],n&&n.dep.notify())}}Se.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)je(e,t[n])},
/**
 * Observe a list of Array items.
 */
Se.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Ne(e[t])};var Ie=F.optionMergeStrategies;
/**
 * Options with restrictions
 */
/**
 * Helper that recursively merges two data objects together.
 */
function Me(e,t){if(!t)return e;for(var n,r,i,o=Object.keys(t),a=0;a<o.length;a++)r=e[n=o[a]],i=t[n],y(e,n)?c(r)&&c(i)&&Me(r,i):De(e,n,i);return e}
/**
 * Data
 */function Pe(n,r,i){return i?function(){
// instance merge
var e="function"==typeof r?r.call(i,i):r,t="function"==typeof n?n.call(i,i):n;return e?Me(e,t):t}:
// in a Vue.extend merge, both should be functions
r?n?function(){return Me("function"==typeof r?r.call(this,this):r,"function"==typeof n?n.call(this,this):n)}:r:n}
/**
 * Hooks and props are merged as arrays.
 */
function Re(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}
/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function He(e,t,n,r){var i=Object.create(e||null);return t?(Be(r,t,n),_(i,t)):i}Ie.el=Ie.propsData=function(e,t,n,r){return n||se('option "'+r+'" can only be used during instance creation with the `new` keyword.'),qe(e,t)},Ie.data=function(e,t,n){return n?Pe(e,t,n):t&&"function"!=typeof t?(se('The "data" option should be a function that returns a per-instance value in component definitions.',n),e):Pe(e,t)},O.forEach(function(e){Ie[e]=Re}),$.forEach(function(e){Ie[e+"s"]=He}),
/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
Ie.watch=function(e,t,n,r){
/* istanbul ignore if */
if(
// work around Firefox's Object.prototype.watch...
e===Q&&(e=void 0),t===Q&&(t=void 0),!t)return Object.create(e||null);if(Be(r,t,n),!e)return t;var i={};for(var o in _(i,e),t){var a=i[o],s=t[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},
/**
 * Other object hashes.
 */
Ie.props=Ie.methods=Ie.inject=Ie.computed=function(e,t,n,r){if(t&&Be(r,t,n),!e)return t;var i=Object.create(null);return _(i,e),t&&_(i,t),i},Ie.provide=Pe;
/**
 * Default strategy.
 */
var qe=function(e,t){return void 0===t?e:t};
/**
 * Validate component names
 */function Fe(e){/^[a-zA-Z][\w-]*$/.test(e)||se('Invalid component name: "'+e+'". Component names can only contain alphanumeric characters and the hyphen, and must start with a letter.'),(u(e)||F.isReservedTag(e))&&se("Do not use built-in or reserved HTML elements as component id: "+e)}
/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */function Be(e,t,n){c(t)||se('Invalid value for option "'+e+'": expected an Object, but got '+f(t)+".",n)}
/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */function We(n,r,i){!function(e){for(var t in e.components)Fe(t)}(r),"function"==typeof r&&(r=r.options),function(e,t){var n=e.props;if(n){var r,i,o={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(i=n[r])?o[b(i)]={type:null}:se("props must be strings when using array syntax.");else if(c(n))for(var a in n)i=n[a],o[b(a)]=c(i)?i:{type:i};else se('Invalid value for option "props": expected an Array or an Object, but got '+f(n)+".",t);e.props=o}}
/**
 * Normalize all injections into Object-based format
 */(r,i),function(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(c(n))for(var o in n){var a=n[o];r[o]=c(a)?_({from:o},a):{from:a}}else se('Invalid value for option "inject": expected an Array or an Object, but got '+f(n)+".",t)}}
/**
 * Normalize raw function directives into object format.
 */(r,i),function(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}(r);var e=r.extends;if(e&&(n=We(n,e,i)),r.mixins)for(var t=0,o=r.mixins.length;t<o;t++)n=We(n,r.mixins[t],i);var a,s={};for(a in n)u(a);for(a in r)y(n,a)||u(a);function u(e){var t=Ie[e]||qe;s[e]=t(n[e],r[e],i,e)}return s}
/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */function Ue(e,t,n,r){
/* istanbul ignore if */
if("string"==typeof n){var i=e[t];
// check local registration variations first
if(y(i,n))return i[n];var o=b(n);if(y(i,o))return i[o];var a=d(o);if(y(i,a))return i[a];
// fallback to prototype chain
var s=i[n]||i[o]||i[a];return r&&!s&&se("Failed to resolve "+t.slice(0,-1)+": "+n,e),s}}
/*  */function ze(e,t,n,r){var i=t[e],o=!y(n,e),a=n[e],s=Ke(Boolean,i.type);if(-1<s)if(o&&!y(i,"default"))a=!1;else if(""===a||a===x(e)){
// only cast empty string / same name to boolean if
// boolean has higher priority
var u=Ke(String,i.type);(u<0||s<u)&&(a=!0)}
// check default value
if(void 0===a){a=
/**
 * Get the default value of a prop.
 */
function(e,t,n){
// no default, return undefined
if(!y(t,"default"))return;var r=t.default;
// warn against non-factory defaults for Object & Array
P(r)&&se('Invalid default value for prop "'+n+'": Props with type Object/Array must use a factory function to return the default value.',e);
// the raw prop value was also undefined from previous render,
// return previous default value to avoid unnecessary watcher trigger
if(e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n])return e._props[n];
// call factory function for non-Function types
// a value is Function if its prototype is function even across different execution context
return"function"==typeof r&&"Function"!==Ye(t.type)?r.call(e):r}
/**
 * Assert whether a prop is valid.
 */(r,i,e);
// since the default value is a fresh copy,
// make sure to observe it.
var c=Ae;Ee(!0),Ne(a),Ee(c)}return function(e,t,n,r,i){if(e.required&&i)return se('Missing required prop: "'+t+'"',r);if(null==n&&!e.required)return;var o=e.type,a=!o||!0===o,s=[];if(o){Array.isArray(o)||(o=[o]);for(var u=0;u<o.length&&!a;u++){var c=Xe(n,o[u]);s.push(c.expectedType||""),a=c.valid}}if(!a)return se('Invalid prop: type check failed for prop "'+t+'". Expected '+s.map(d).join(", ")+", got "+f(n)+".",r);var l=e.validator;l&&(l(n)||se('Invalid prop: custom validator check failed for prop "'+t+'".',r))}(i,e,a,r,o),a}var Ve=/^(String|Number|Boolean|Function|Symbol)$/;function Xe(e,t){var n,r=Ye(t);if(Ve.test(r)){var i=typeof e;
// for primitive wrapper objects
(n=i===r.toLowerCase())||"object"!==i||(n=e instanceof t)}else n="Object"===r?c(e):"Array"===r?Array.isArray(e):e instanceof t;return{valid:n,expectedType:r}}
/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */function Ye(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function Je(e,t){return Ye(e)===Ye(t)}function Ke(e,t){if(!Array.isArray(t))return Je(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(Je(t[n],e))return n;return-1}
/*  */function Ge(e,t,n){if(t)for(var r=t;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{if(!1===i[o].call(r,e,t,n))return}catch(e){Ze(e,r,"errorCaptured hook")}}Ze(e,t,n)}function Ze(e,t,n){if(F.errorHandler)try{return F.errorHandler.call(null,e,t,n)}catch(e){Qe(e,null,"config.errorHandler")}Qe(e,t,n)}function Qe(e,t,n){
/* istanbul ignore else */
if(se("Error in "+n+': "'+e.toString()+'"',t),!U&&!z||"undefined"==typeof console)throw e;console.error(e)}
/*  */
/* globals MessageChannel */var et,tt,nt=[],rt=!1;function it(){rt=!1;for(var e=nt.slice(0),t=nt.length=0;t<e.length;t++)e[t]()}
// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var ot,at,st=!1;
// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */if("undefined"!=typeof setImmediate&&ie(setImmediate))tt=function(){setImmediate(it)};else if("undefined"==typeof MessageChannel||!ie(MessageChannel)&&
// PhantomJS
"[object MessageChannelConstructor]"!==MessageChannel.toString())
/* istanbul ignore next */
tt=function(){setTimeout(it,0)};else{var ut=new MessageChannel,ct=ut.port2;ut.port1.onmessage=it,tt=function(){ct.postMessage(1)}}
// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */if("undefined"!=typeof Promise&&ie(Promise)){var lt=Promise.resolve();et=function(){lt.then(it),
// in problematic UIWebViews, Promise.then doesn't completely break, but
// it can get stuck in a weird state where callbacks are pushed into the
// microtask queue but the queue isn't being flushed, until the browser
// needs to do some other work, e.g. handle a timer. Therefore we can
// "force" the microtask queue to be flushed by adding an empty timer.
G&&setTimeout(C)}}else
// fallback to macro
et=tt;
/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */function ft(e,t){var n;
// $flow-disable-line
if(nt.push(function(){if(e)try{e.call(t)}catch(e){Ge(e,t,"nextTick")}else n&&n(t)}),rt||(rt=!0,st?tt():et()),!e&&"undefined"!=typeof Promise)return new Promise(function(e){n=e})}
/*  */var pt,dt=U&&window.performance;
/* istanbul ignore if */dt&&dt.mark&&dt.measure&&dt.clearMarks&&dt.clearMeasures&&(ot=function(e){return dt.mark(e)},at=function(e,t,n){dt.measure(e,t,n),dt.clearMarks(t),dt.clearMarks(n),dt.clearMeasures(e)});var ht=s("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,require"),vt=function(e,t){se('Property or method "'+t+'" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',e)},mt="undefined"!=typeof Proxy&&ie(Proxy);if(mt){var gt=s("stop,prevent,self,ctrl,shift,alt,meta,exact");F.keyCodes=new Proxy(F.keyCodes,{set:function(e,t,n){return gt(t)?(se("Avoid overwriting built-in modifier in config.keyCodes: ."+t),!1):(e[t]=n,!0)}})}var yt={has:function(e,t){var n=t in e,r=ht(t)||"_"===t.charAt(0);return n||r||vt(e,t),n||!r}},bt={get:function(e,t){return"string"!=typeof t||t in e||vt(e,t),e[t]}};pt=function(e){if(mt){
// determine which proxy handler to use
var t=e.$options,n=t.render&&t.render._withStripped?bt:yt;e._renderProxy=new Proxy(e,n)}else e._renderProxy=e};
/*  */
var xt=new oe;
/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */function wt(e){!function e(t,n){var r,i;var o=Array.isArray(t);if(!o&&!P(t)||Object.isFrozen(t)||t instanceof ye)return;if(t.__ob__){var a=t.__ob__.dep.id;if(n.has(a))return;n.add(a)}if(o)for(r=t.length;r--;)e(t[r],n);else for(i=Object.keys(t),r=i.length;r--;)e(t[i[r]],n)}
/*  */(e,xt),xt.clear()}var _t,Tt=e(function(e){var t="&"===e.charAt(0),n="~"===(e=t?e.slice(1):e).charAt(0),r="!"===(// Prefixed last, checked first
e=n?e.slice(1):e).charAt(0);return{name:e=r?e.slice(1):e,once:n,capture:r,passive:t}});function Ct(e){function i(){var e=arguments,t=i.fns;if(!Array.isArray(t))
// return handler return value for single handlers
return t.apply(null,arguments);for(var n=t.slice(),r=0;r<n.length;r++)n[r].apply(null,e)}return i.fns=e,i}function kt(e,t,n,r,i){var o,a,s,u;for(o in e)a=e[o],s=t[o],u=Tt(o),
/* istanbul ignore if */
I(a)?se('Invalid handler for event "'+u.name+'": got '+String(a),i):I(s)?(I(a.fns)&&(a=e[o]=Ct(a)),n(u.name,a,u.once,u.capture,u.passive,u.params)):a!==s&&(s.fns=a,e[o]=s);for(o in t)I(e[o])&&r((u=Tt(o)).name,t[o],u.capture)}
/*  */function At(e,t,n){var r;e instanceof ye&&(e=e.data.hook||(e.data.hook={}));var i=e[t];function o(){n.apply(this,arguments),
// important: remove merged hook to ensure it's called only once
// and prevent memory leak
p(r.fns,o)}I(i)?
// no existing hook
r=Ct([o]):
/* istanbul ignore if */
M(i.fns)&&L(i.merged)?(
// already a merged invoker
r=i).fns.push(o):
// existing plain hook
r=Ct([i,o]),r.merged=!0,e[t]=r}
/*  */function Et(e,t,n,r,i){if(M(t)){if(y(t,n))return e[n]=t[n],i||delete t[n],!0;if(y(t,r))return e[n]=t[r],i||delete t[r],!0}return!1}
/*  */
// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:
// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function St(e){return v(e)?[we(e)]:Array.isArray(e)?function e(t,n){var r=[];var i,o,a,s;for(i=0;i<t.length;i++)I(o=t[i])||"boolean"==typeof o||(a=r.length-1,s=r[a],
//  nested
Array.isArray(o)?0<o.length&&(
// merge adjacent text nodes
$t((o=e(o,(n||"")+"_"+i))[0])&&$t(s)&&(r[a]=we(s.text+o[0].text),o.shift()),r.push.apply(r,o)):v(o)?$t(s)?
// merge adjacent text nodes
// this is necessary for SSR hydration because text nodes are
// essentially merged when rendered to HTML strings
r[a]=we(s.text+o):""!==o&&
// convert primitive to vnode
r.push(we(o)):$t(o)&&$t(s)?
// merge adjacent text nodes
r[a]=we(s.text+o.text):(
// default key for nested array children (likely generated by v-for)
L(t._isVList)&&M(o.tag)&&I(o.key)&&M(n)&&(o.key="__vlist"+n+"_"+i+"__"),r.push(o)));return r}
/*  */(e):void 0}function $t(e){return M(e)&&M(e.text)&&!1===e.isComment}function Ot(e,t){return(e.__esModule||ae&&"Module"===e[Symbol.toStringTag])&&(e=e.default),P(e)?t.extend(e):e}
/*  */
function Nt(e){return e.isComment&&e.asyncFactory}
/*  */function jt(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(M(n)&&(M(n.componentOptions)||Nt(n)))return n}}
/*  */
/*  */function Dt(e,t,n){n?_t.$once(e,t):_t.$on(e,t)}function Lt(e,t){_t.$off(e,t)}function It(e,t,n){kt(t,n||{},Dt,Lt,_t=e),_t=void 0}
/*  */
/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function Mt(e,t){var n={};if(!e)return n;for(var r=0,i=e.length;r<i;r++){var o=e[r],a=o.data;
// named slots should only be respected if the vnode was rendered in the
// same context.
if(
// remove slot attribute if the node is resolved as a Vue slot node
a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==t&&o.fnContext!==t||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=a.slot,u=n[s]||(n[s]=[]);"template"===o.tag?u.push.apply(u,o.children||[]):u.push(o)}}
// ignore slots that contains only whitespace
for(var c in n)n[c].every(Pt)&&delete n[c];return n}function Pt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Rt(e,// see flow/vnode
t){t=t||{};for(var n=0;n<e.length;n++)Array.isArray(e[n])?Rt(e[n],t):t[e[n].key]=e[n].fn;return t}
/*  */var Ht=null,qt=!1;function Ft(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function Bt(e,t){if(t){if(e._directInactive=!1,Ft(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Bt(e.$children[n]);Wt(e,"activated")}}function Wt(t,n){
// #7573 disable dep collection when invoking lifecycle hooks
me();var e=t.$options[n];if(e)for(var r=0,i=e.length;r<i;r++)try{e[r].call(t)}catch(e){Ge(e,t,n+" hook")}t._hasHookEvent&&t.$emit("hook:"+n),ge()}
/*  */var Ut=100,zt=[],Vt=[],Xt={},Yt={},Jt=!1,Kt=!1,Gt=0;
/**
 * Flush both queues and run the watchers.
 */
function Zt(){var e,t;
// Sort queue before flush.
// This ensures that:
// 1. Components are updated from parent to child. (because parent is always
//    created before the child)
// 2. A component's user watchers are run before its render watcher (because
//    user watchers are created before the render watcher)
// 3. If a component is destroyed during a parent component's watcher run,
//    its watchers can be skipped.
// do not cache length because more watchers might be pushed
// as we run existing watchers
for(Kt=!0,zt.sort(function(e,t){return e.id-t.id}),Gt=0;Gt<zt.length;Gt++)
// in dev build, check and stop circular updates.
if(t=(e=zt[Gt]).id,Xt[t]=null,e.run(),null!=Xt[t]&&(Yt[t]=(Yt[t]||0)+1,Yt[t]>Ut)){se("You may have an infinite update loop "+(e.user?'in watcher with expression "'+e.expression+'"':"in a component render function."),e.vm);break}
// keep copies of post queues before resetting state
var n=Vt.slice(),r=zt.slice();Gt=zt.length=Vt.length=0,Xt={},Jt=Kt=!(Yt={}),
// call component updated and activated hooks
function(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Bt(e[t],!0/* true */)}
/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */(n),function(e){var t=e.length;for(;t--;){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&Wt(r,"updated")}}
/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */(r),
// devtool hook
/* istanbul ignore if */
re&&F.devtools&&re.emit("flush")}
/*  */
var Qt=0,en=function(e,t,n,r,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),
// options
r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Qt,// uid for batching
this.active=!0,this.dirty=this.lazy,// for lazy watchers
this.deps=[],this.newDeps=[],this.depIds=new oe,this.newDepIds=new oe,this.expression=t.toString(),
// parse expression for getter
"function"==typeof t?this.getter=t:(this.getter=function(e){if(!D.test(e)){var n=e.split(".");return function(e){for(var t=0;t<n.length;t++){if(!e)return;e=e[n[t]]}return e}}}(t),this.getter||(this.getter=function(){},se('Failed watching path: "'+t+'" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.',e))),this.value=this.lazy?void 0:this.get()};
/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
/**
 * Evaluate the getter, and re-collect dependencies.
 */
en.prototype.get=function(){var e;me(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(e){if(!this.user)throw e;Ge(e,t,'getter for watcher "'+this.expression+'"')}finally{
// "touch" every property so they are all tracked as
// dependencies for deep watching
this.deep&&wt(e),ge(),this.cleanupDeps()}return e},
/**
 * Add a dependency to this directive.
 */
en.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},
/**
 * Clean up for dependency collection.
 */
en.prototype.cleanupDeps=function(){for(var e=this.deps.length;e--;){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},
/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
en.prototype.update=function(){
/* istanbul ignore else */
this.lazy?this.dirty=!0:this.sync?this.run():function(e){var t=e.id;if(null==Xt[t]){if(Xt[t]=!0,Kt){for(
// if already flushing, splice the watcher based on its id
// if already past its id, it will be run next immediately.
var n=zt.length-1;Gt<n&&zt[n].id>e.id;)n--;zt.splice(n+1,0,e)}
// queue the flush
else zt.push(e);Jt||(Jt=!0,ft(Zt))}}(this)},
/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
en.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||
// Deep watchers and watchers on Object/Arrays should fire even
// when the value is the same, because the value may
// have mutated.
P(e)||this.deep){
// set new value
var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){Ge(e,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,t)}}},
/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
en.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},
/**
 * Depend on all deps collected by this watcher.
 */
en.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()},
/**
 * Remove self from all dependencies' subscriber list.
 */
en.prototype.teardown=function(){if(this.active){
// remove self from vm's watcher list
// this is a somewhat expensive operation so we skip it
// if the vm is being destroyed.
this.vm._isBeingDestroyed||p(this.vm._watchers,this);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1}};
/*  */
var tn={enumerable:!0,configurable:!0,get:C,set:C};function nn(e,t,n){tn.get=function(){return this[t][n]},tn.set=function(e){this[t][n]=e},Object.defineProperty(e,n,tn)}function rn(e){e._watchers=[];var t=e.$options;t.props&&function(r,i){var o=r.$options.propsData||{},a=r._props={},s=r.$options._propKeys=[];
// root instance props should be converted
r.$parent&&Ee(!1);var e=function(e){s.push(e);var t=ze(e,i,o,r),n=x(e);
/* istanbul ignore else */(l(n)||F.isReservedAttr(n))&&se('"'+n+'" is a reserved attribute and cannot be used as component prop.',r),je(a,e,t,function(){r.$parent&&!qt&&se("Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: \""+e+'"',r)}),
// static props are already proxied on the component's prototype
// during Vue.extend(). We only need to proxy props defined at
// instantiation here.
e in r||nn(r,"_props",e)};for(var t in i)e(t);Ee(!0)}(e,t.props),t.methods&&function(e,t){var n=e.$options.props;for(var r in t)null==t[r]&&se('Method "'+r+'" has an undefined value in the component definition. Did you reference the function correctly?',e),n&&y(n,r)&&se('Method "'+r+'" has already been defined as a prop.',e),r in e&&N(r)&&se('Method "'+r+'" conflicts with an existing Vue instance method. Avoid defining component methods that start with _ or $.'),e[r]=null==t[r]?C:m(t[r],e)}(e,t.methods),t.data?function(e){var t=e.$options.data;c(t=e._data="function"==typeof t?function(e,t){
// #7573 disable dep collection when invoking data getters
me();try{return e.call(t,t)}catch(e){return Ge(e,t,"data()"),{}}finally{ge()}}(t,e):t||{})||(t={},se("data functions should return an object:\nhttps://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function",e));
// proxy data on instance
var n=Object.keys(t),r=e.$options.props,i=e.$options.methods,o=n.length;for(;o--;){var a=n[o];i&&y(i,a)&&se('Method "'+a+'" has already been defined as a data property.',e),r&&y(r,a)?se('The data property "'+a+'" is already declared as a prop. Use prop default value instead.',e):N(a)||nn(e,"_data",a)}
// observe data
Ne(t,!0/* asRootData */)}(e):Ne(e._data={},!0/* asRootData */),t.computed&&function(e,t){
// $flow-disable-line
var n=e._computedWatchers=Object.create(null),r=ne();
// computed properties are just getters during SSR
for(var i in t){var o=t[i],a="function"==typeof o?o:o.get;null==a&&se('Getter is missing for computed property "'+i+'".',e),r||(
// create internal watcher for the computed property.
n[i]=new en(e,a||C,C,on)),
// component-defined computed properties are already defined on the
// component prototype. We only need to define computed properties defined
// at instantiation here.
i in e?i in e.$data?se('The computed property "'+i+'" is already defined in data.',e):e.$options.props&&i in e.$options.props&&se('The computed property "'+i+'" is already defined as a prop.',e):an(e,i,o)}}(e,t.computed),t.watch&&t.watch!==Q&&function(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)un(e,n,r[i]);else un(e,n,r)}}(e,t.watch)}var on={lazy:!0};function an(e,t,n){var r=!ne();"function"==typeof n?(tn.get=r?sn(t):n,tn.set=C):(tn.get=n.get?r&&!1!==n.cache?sn(t):n.get:C,tn.set=n.set?n.set:C),tn.set===C&&(tn.set=function(){se('Computed property "'+t+'" was assigned to but it has no setter.',this)}),Object.defineProperty(e,t,tn)}function sn(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),he.target&&e.depend(),e.value}}function un(e,t,n,r){return c(n)&&(n=(r=n).handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}function cn(t,e){if(t){for(
// inject is :any because flow is not smart enough to figure out cached
var n=Object.create(null),r=ae?Reflect.ownKeys(t).filter(function(e){
/* istanbul ignore next */
return Object.getOwnPropertyDescriptor(t,e).enumerable}):Object.keys(t),i=0;i<r.length;i++){for(var o=r[i],a=t[o].from,s=e;s;){if(s._provided&&y(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[o]){var u=t[o].default;n[o]="function"==typeof u?u.call(e):u}else se('Injection "'+o+'" not found',e)}return n}}
/*  */
/**
 * Runtime helper for rendering v-for lists.
 */function ln(e,t){var n,r,i,o,a;if(Array.isArray(e)||"string"==typeof e)for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r);else if("number"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(P(e))for(o=Object.keys(e),n=new Array(o.length),r=0,i=o.length;r<i;r++)a=o[r],n[r]=t(e[a],a,r);return M(n)&&(n._isVList=!0),n}
/*  */
/**
 * Runtime helper for rendering <slot>
 */function fn(e,t,n,r){var i,o=this.$scopedSlots[e];if(o)// scoped slot
n=n||{},r&&(P(r)||se("slot v-bind without argument expects an Object",this),n=_(_({},r),n)),i=o(n)||t;else{var a=this.$slots[e];
// warn duplicate slot usage
a&&(a._rendered&&se('Duplicate presence of slot "'+e+'" found in the same render tree - this will likely cause render errors.',this),a._rendered=!0),i=a||t}var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}
/*  */
/**
 * Runtime helper for resolving filters
 */function pn(e){return Ue(this.$options,"filters",e,!0)||k}
/*  */function dn(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}
/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */function hn(e,t,n,r,i){var o=F.keyCodes[t]||n;return i&&r&&!F.keyCodes[t]?dn(i,r):o?dn(o,e):r?x(r)!==t:void 0}
/*  */
/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */function vn(n,r,i,o,a){if(i)if(P(i)){var s;Array.isArray(i)&&(i=T(i));var e=function(t){if("class"===t||"style"===t||l(t))s=n;else{var e=n.attrs&&n.attrs.type;s=o||F.mustUseProp(r,e,t)?n.domProps||(n.domProps={}):n.attrs||(n.attrs={})}t in s||(s[t]=i[t],a&&((n.on||(n.on={}))["update:"+t]=function(e){i[t]=e}))};for(var t in i)e(t)}else se("v-bind without argument expects an Object or Array value",this);return n}
/*  */
/**
 * Runtime helper for rendering static trees.
 */function mn(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];
// if has already-rendered static tree and not inside v-for,
// we can reuse the same tree.
return r&&!t||yn(
// otherwise, render a fresh tree.
r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),"__static__"+e,!1),r}
/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */function gn(e,t,n){return yn(e,"__once__"+t+(n?"_"+n:""),!0),e}function yn(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&bn(e[r],t+"_"+r,n);else bn(e,t,n)}function bn(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}
/*  */function xn(e,t){if(t)if(c(t)){var n=e.on=e.on?_({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else se("v-on without argument expects an Object value",this);return e}
/*  */function wn(e){e._o=gn,e._n=R,e._s=n,e._l=ln,e._t=fn,e._q=A,e._i=S,e._m=mn,e._f=pn,e._k=hn,e._b=vn,e._v=we,e._e=xe,e._u=Rt,e._g=xn}
/*  */function _n(e,t,n,o,r){var a,s=r.options;
// ensure the createElement function in functional components
// gets a unique context - this is necessary for correct named slot check
y(o,"_uid")?
// $flow-disable-line
(a=Object.create(o))._original=o:
// $flow-disable-line
o=(
// the context vm passed in is a functional context as well.
// in this case we want to make sure we are able to get a hold to the
// real context instance.
a=o)._original;var i=L(s._compiled),u=!i;this.data=e,this.props=t,this.children=n,this.parent=o,this.listeners=e.on||g,this.injections=cn(s.inject,o),this.slots=function(){return Mt(n,o)},
// support for compiled functional template
i&&(
// exposing $options for renderStatic()
this.$options=s,
// pre-resolve slots for renderSlot()
this.$slots=this.slots(),this.$scopedSlots=e.scopedSlots||g),s._scopeId?this._c=function(e,t,n,r){var i=On(a,e,t,n,r,u);return i&&!Array.isArray(i)&&(i.fnScopeId=s._scopeId,i.fnContext=o),i}:this._c=function(e,t,n,r){return On(a,e,t,n,r,u)}}function Tn(e,t,n,r){
// #7817 clone node before setting fnContext, otherwise if the node is reused
// (e.g. it was from a cached normal slot) the fnContext causes named slots
// that should not be matched to match.
var i=_e(e);return i.fnContext=n,i.fnOptions=r,t.slot&&((i.data||(i.data={})).slot=t.slot),i}function Cn(e,t){for(var n in t)e[b(n)]=t[n]}
/*  */
// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.
// Updates the state of the component to weex native render engine.
/*  */
// https://github.com/Hanks10100/weex-native-directive/tree/master/component
// listening on native callback
/*  */
/*  */
// inline hooks to be invoked on component VNodes during patch
wn(_n.prototype);var kn={init:function(e,t,n,r){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){
// kept-alive components, treat as a patch
var i=e;// work around flow
kn.prepatch(i,i)}else{(e.componentInstance=function(e,// we know it's MountedComponentVNode but flow doesn't
t,// activeInstance in lifecycle state
n,r){var i={_isComponent:!0,parent:t,_parentVnode:e,_parentElm:n||null,_refElm:r||null},o=e.data.inlineTemplate;
// check inline-template render functions
M(o)&&(i.render=o.render,i.staticRenderFns=o.staticRenderFns);return new e.componentOptions.Ctor(i)}(e,Ht,n,r)).$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions;!function(e,t,n,r,i){qt=!0;
// determine whether component has slot children
// we need to do this before overwriting $options._renderChildren
var o=!!(i||// has new static slots
e.$options._renderChildren||// has old static slots
r.data.scopedSlots||// has new scoped slots
e.$scopedSlots!==g);
// update props
if(e.$options._parentVnode=r,e.$vnode=r,// update vm's placeholder node without re-render
e._vnode&&(// update child tree's parent
e._vnode.parent=r),e.$options._renderChildren=i,
// update $attrs and $listeners hash
// these are also reactive so they may trigger child update if the child
// used them during render
e.$attrs=r.data.attrs||g,e.$listeners=n||g,t&&e.$options.props){Ee(!1);for(var a=e._props,s=e.$options._propKeys||[],u=0;u<s.length;u++){var c=s[u],l=e.$options.props;// wtf flow?
a[c]=ze(c,l,t,e)}Ee(!0),
// keep a copy of raw propsData
e.$options.propsData=t}
// update listeners
n=n||g;var f=e.$options._parentListeners;e.$options._parentListeners=n,It(e,n,f),
// resolve slots + force update if has children
o&&(e.$slots=Mt(i,r.context),e.$forceUpdate()),qt=!1}(t.componentInstance=e.componentInstance,n.propsData,// updated props
n.listeners,// updated listeners
t,// new parent vnode
n.children)},insert:function(e){var t,n=e.context,r=e.componentInstance;r._isMounted||(r._isMounted=!0,Wt(r,"mounted")),e.data.keepAlive&&(n._isMounted?(
// vue-router#1212
// During updates, a kept-alive component's child components may
// change, so directly walking the tree here may call activated hooks
// on incorrect children. Instead we push them into a queue which will
// be processed after the whole patch process ended.
// setting _inactive to false here so that a render function can
// rely on checking whether it's in an inactive tree (e.g. router-view)
(t=r)._inactive=!1,Vt.push(t)):Bt(r,!0/* direct */))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?function e(t,n){if(!(n&&(t._directInactive=!0,Ft(t))||t._inactive)){t._inactive=!0;for(var r=0;r<t.$children.length;r++)e(t.$children[r]);Wt(t,"deactivated")}}(t,!0/* direct */):t.$destroy())}},An=Object.keys(kn);function En(e,t,n,r,i){if(!I(e)){var o=n.$options._base;
// plain options object: turn it into a constructor
// if at this stage it's not a constructor or an async component factory,
// reject.
if(P(e)&&(e=o.extend(e)),"function"==typeof e){
// async component
var a,s,u,c,l,f,p;if(I(e.cid)&&void 0===(e=function(t,n,e){if(L(t.error)&&M(t.errorComp))return t.errorComp;if(M(t.resolved))return t.resolved;if(L(t.loading)&&M(t.loadingComp))return t.loadingComp;if(!M(t.contexts)){var r=t.contexts=[e],i=!0,o=function(){for(var e=0,t=r.length;e<t;e++)r[e].$forceUpdate()},a=H(function(e){
// cache resolved
t.resolved=Ot(e,n),
// invoke callbacks only if this is not a synchronous resolve
// (async resolves are shimmed as synchronous during SSR)
i||o()}),s=H(function(e){se("Failed to resolve async component: "+String(t)+(e?"\nReason: "+e:"")),M(t.errorComp)&&(t.error=!0,o())}),u=t(a,s);
// return in case resolved synchronously
return P(u)&&("function"==typeof u.then?
// () => Promise
I(t.resolved)&&u.then(a,s):M(u.component)&&"function"==typeof u.component.then&&(u.component.then(a,s),M(u.error)&&(t.errorComp=Ot(u.error,n)),M(u.loading)&&(t.loadingComp=Ot(u.loading,n),0===u.delay?t.loading=!0:setTimeout(function(){I(t.resolved)&&I(t.error)&&(t.loading=!0,o())},u.delay||200)),M(u.timeout)&&setTimeout(function(){I(t.resolved)&&s("timeout ("+u.timeout+"ms)")},u.timeout))),i=!1,t.loading?t.loadingComp:t.resolved}
// already pending
t.contexts.push(e)}(a=e,o,n)))
// return a placeholder node for async component, which is rendered
// as a comment node but preserves all the raw information for the node.
// the information will be used for async server-rendering and hydration.
return s=a,u=t,c=n,l=r,f=i,(p=xe()).asyncFactory=s,p.asyncMeta={data:u,context:c,children:l,tag:f},p;t=t||{},
// resolve constructor options in case global mixins are applied after
// component constructor creation
Hn(e),
// transform component v-model data into props & events
M(t.model)&&
// transform component v-model info (value and callback) into
// prop and event handler respectively.
function(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.props||(t.props={}))[n]=t.model.value;var i=t.on||(t.on={});M(i[r])?i[r]=[t.model.callback].concat(i[r]):i[r]=t.model.callback}
/*  */(e.options,t);
// extract props
var d=function(e,t,n){
// we are only extracting raw values here.
// validation and default values are handled in the child
// component itself.
var r=t.options.props;if(!I(r)){var i={},o=e.attrs,a=e.props;if(M(o)||M(a))for(var s in r){var u=x(s),c=s.toLowerCase();s!==c&&o&&y(o,c)&&ue('Prop "'+c+'" is passed to component '+le(n||t)+', but the declared prop name is "'+s+'". Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM templates. You should probably use "'+u+'" instead of "'+s+'".'),Et(i,a,s,u,!0)||Et(i,o,s,u,!1)}return i}}(t,e,i);
// functional component
if(L(e.options.functional))return function(e,t,n,r,i){var o=e.options,a={},s=o.props;if(M(s))for(var u in s)a[u]=ze(u,s,t||g);else M(n.attrs)&&Cn(a,n.attrs),M(n.props)&&Cn(a,n.props);var c=new _n(n,a,i,r,e),l=o.render.call(null,c._c,c);if(l instanceof ye)return Tn(l,n,c.parent,o);if(Array.isArray(l)){for(var f=St(l)||[],p=new Array(f.length),d=0;d<f.length;d++)p[d]=Tn(f[d],n,c.parent,o);return p}}(e,d,t,n,r);
// extract listeners, since these needs to be treated as
// child component listeners instead of DOM listeners
var h=t.on;
// replace with listeners with .native modifier
// so it gets processed during parent component patch.
if(t.on=t.nativeOn,L(e.options.abstract)){
// abstract components do not keep anything
// other than props & listeners & slot
// work around flow
var v=t.slot;t={},v&&(t.slot=v)}
// install component management hooks onto the placeholder node
!function(e){for(var t=e.hook||(e.hook={}),n=0;n<An.length;n++){var r=An[n];t[r]=kn[r]}}(t);
// return a placeholder vnode
var m=e.options.name||i;
// Weex specific: invoke recycle-list optimized @render function for
// extracting cell-slot template.
// https://github.com/Hanks10100/weex-native-directive/tree/master/component
/* istanbul ignore if */
return new ye("vue-component-"+e.cid+(m?"-"+m:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:d,listeners:h,tag:i,children:r},a)}se("Invalid Component definition: "+String(e),n)}}var Sn=1,$n=2;
// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function On(e,t,n,r,i,o){return(Array.isArray(n)||v(n))&&(i=r,r=n,n=void 0),L(o)&&(i=$n),function(e,t,n,r,i){if(M(n)&&M(n.__ob__))return se("Avoid using observed data object as vnode data: "+JSON.stringify(n)+"\nAlways create fresh vnode data objects in each render!",e),xe();
// object syntax in v-bind
M(n)&&M(n.is)&&(t=n.is);if(!t)
// in case of component :is set to falsy value
return xe();
// warn against non-primitive key
M(n)&&M(n.key)&&!v(n.key)&&se("Avoid using non-primitive value as key, use string/number value instead.",e);
// support single function children as default scoped slot
Array.isArray(r)&&"function"==typeof r[0]&&((n=n||{}).scopedSlots={default:r[0]},r.length=0);i===$n?r=St(r):i===Sn&&(r=function(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}(r));var o,a;if("string"==typeof t){var s;a=e.$vnode&&e.$vnode.ns||F.getTagNamespace(t),
// platform built-in elements
o=F.isReservedTag(t)?new ye(F.parsePlatformTagName(t),n,r,void 0,void 0,e):M(s=Ue(e.$options,"components",t))?En(s,n,e,r,t):new ye(t,n,r,void 0,void 0,e)}else
// direct component options / constructor
o=En(t,n,e,r);return Array.isArray(o)?o:M(o)?(M(a)&&function e(t,n,r){t.ns=n;"foreignObject"===t.tag&&(r=!(
// use default namespace inside foreignObject
n=void 0));if(M(t.children))for(var i=0,o=t.children.length;i<o;i++){var a=t.children[i];M(a.tag)&&(I(a.ns)||L(r)&&"svg"!==a.tag)&&e(a,n,r)}}
// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
(o,a),M(n)&&function(e){P(e.style)&&wt(e.style);P(e.class)&&wt(e.class)}
/*  */(n),o):xe()}(e,t,n,r,i)}
/*  */
var Nn,jn,Dn,Ln,In,Mn,Pn,Rn=0;function Hn(e){var t=e.options;if(e.super){var n=Hn(e.super);if(n!==e.superOptions){
// super option changed,
// need to resolve new options.
e.superOptions=n;
// check if there are any late-modified/attached options (#4976)
var r=function(e){var t,n=e.options,r=e.extendOptions,i=e.sealedOptions;for(var o in n)n[o]!==i[o]&&(t||(t={}),t[o]=qn(n[o],r[o],i[o]));return t}(e);
// update base extend options
r&&_(e.extendOptions,r),(t=e.options=We(n,e.extendOptions)).name&&(t.components[t.name]=e)}}return t}function qn(e,t,n){
// compare latest and sealed to ensure lifecycle hooks won't be duplicated
// between merges
if(Array.isArray(e)){var r=[];n=Array.isArray(n)?n:[n],t=Array.isArray(t)?t:[t];for(var i=0;i<e.length;i++)
// push original options and not sealed options to exclude duplicated options
(0<=t.indexOf(e[i])||n.indexOf(e[i])<0)&&r.push(e[i]);return r}return e}function Fn(e){this instanceof Fn||se("Vue is a constructor and should be called with the `new` keyword"),this._init(e)}
/*  */
function Bn(e){
/**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
e.cid=0;var a=1;
/**
   * Class inheritance
   */e.extend=function(e){e=e||{};var t=this,n=t.cid,r=e._Ctor||(e._Ctor={});if(r[n])return r[n];var i=e.name||t.options.name;i&&Fe(i);var o=function(e){this._init(e)};return((o.prototype=Object.create(t.prototype)).constructor=o).cid=a++,o.options=We(t.options,e),o.super=t,
// For props and computed properties, we define the proxy getters on
// the Vue instances at extension time, on the extended prototype. This
// avoids Object.defineProperty calls for each instance created.
o.options.props&&function(e){var t=e.options.props;for(var n in t)nn(e.prototype,"_props",n)}(o),o.options.computed&&function(e){var t=e.options.computed;for(var n in t)an(e.prototype,n,t[n])}
/*  */(o),
// allow further extension/mixin/plugin usage
o.extend=t.extend,o.mixin=t.mixin,o.use=t.use,
// create asset registers, so extended classes
// can have their private assets too.
$.forEach(function(e){o[e]=t[e]}),
// enable recursive self-lookup
i&&(o.options.components[i]=o),
// keep a reference to the super options at extension time.
// later at instantiation we can check if Super's options have
// been updated.
o.superOptions=t.options,o.extendOptions=e,o.sealedOptions=_({},o.options),
// cache constructor
r[n]=o}}
/*  */
function Wn(e){return e&&(e.Ctor.options.name||e.tag)}function Un(e,t){return Array.isArray(e)?-1<e.indexOf(t):"string"==typeof e?-1<e.split(",").indexOf(t):!!i(e)&&e.test(t)
/* istanbul ignore next */}function zn(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var a=n[o];if(a){var s=Wn(a.componentOptions);s&&!t(s)&&Vn(n,o,r,i)}}}function Vn(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,p(n,t)}Fn.prototype._init=function(e){var t,n,r,i,o,a,s=this;
// a uid
s._uid=Rn++,
/* istanbul ignore if */
F.performance&&ot&&(t="vue-perf-start:"+s._uid,n="vue-perf-end:"+s._uid,ot(t)),
// a flag to avoid this being observed
s._isVue=!0,
// merge options
e&&e._isComponent?
// optimize internal component instantiation
// since dynamic options merging is pretty slow, and none of the
// internal component options needs special treatment.
function(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;
// doing this because it's faster than dynamic enumeration.
n.parent=t.parent,n._parentVnode=r,n._parentElm=t._parentElm,n._refElm=t._refElm;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}(s,e):s.$options=We(Hn(s.constructor),e||{},s)
/* istanbul ignore else */,pt(s),function(e){var t=e.$options,n=t.parent;
// locate first non-abstract parent
if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}(
// expose real self
s._self=s),function(e){e._events=Object.create(null),e._hasHookEvent=!1;
// init parent attached events
var t=e.$options._parentListeners;t&&It(e,t)}(s),function(i){i._vnode=null,// the root of the child tree
i._staticTrees=null;// v-once cached trees
var e=i.$options,t=i.$vnode=e._parentVnode,n=t&&t.context;i.$slots=Mt(e._renderChildren,n),i.$scopedSlots=g,
// bind the createElement fn to this instance
// so that we get proper render context inside it.
// args order: tag, data, children, normalizationType, alwaysNormalize
// internal version is used by render functions compiled from templates
i._c=function(e,t,n,r){return On(i,e,t,n,r,!1)},
// normalization is always applied for the public version, used in
// user-written render functions.
i.$createElement=function(e,t,n,r){return On(i,e,t,n,r,!0)};
// $attrs & $listeners are exposed for easier HOC creation.
// they need to be reactive so that HOCs using them are always updated
var r=t&&t.data;
/* istanbul ignore else */je(i,"$attrs",r&&r.attrs||g,function(){!qt&&se("$attrs is readonly.",i)},!0),je(i,"$listeners",e._parentListeners||g,function(){!qt&&se("$listeners is readonly.",i)},!0)}(s),Wt(s,"beforeCreate"),(i=cn((r=s).$options.inject,r))&&(Ee(!1),Object.keys(i).forEach(function(e){je(r,e,i[e],function(){se('Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. injection being mutated: "'+e+'"',r)})}),Ee(!0)),// resolve injections before data/props
rn(s),(a=(o=s).$options.provide)&&(o._provided="function"==typeof a?a.call(o):a),// resolve provide after data/props
Wt(s,"created"),
/* istanbul ignore if */
F.performance&&ot&&(s._name=le(s,!1),ot(n),at("vue "+s._name+" init",t,n)),s.$options.el&&s.$mount(s.$options.el)},Nn=Fn,Dn={get:function(){return this._props}},(jn={get:function(){return this._data}}).set=function(e){se("Avoid replacing instance root $data. Use nested data properties instead.",this)},Dn.set=function(){se("$props is readonly.",this)},Object.defineProperty(Nn.prototype,"$data",jn),Object.defineProperty(Nn.prototype,"$props",Dn),Nn.prototype.$set=De,Nn.prototype.$delete=Le,Nn.prototype.$watch=function(e,t,n){if(c(t))return un(this,e,t,n);(n=n||{}).user=!0;var r=new en(this,e,t,n);return n.immediate&&t.call(this,r.value),function(){r.teardown()}},In=/^hook:/,(Ln=Fn).prototype.$on=function(e,t){if(Array.isArray(e))for(var n=0,r=e.length;n<r;n++)this.$on(e[n],t);else(this._events[e]||(this._events[e]=[])).push(t),
// optimize hook:event cost by using a boolean flag marked at registration
// instead of a hash lookup
In.test(e)&&(this._hasHookEvent=!0);return this},Ln.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},Ln.prototype.$off=function(e,t){var n=this;
// all
if(!arguments.length)return n._events=Object.create(null),n;
// array of events
if(Array.isArray(e)){for(var r=0,i=e.length;r<i;r++)this.$off(e[r],t);return n}
// specific event
var o=n._events[e];if(!o)return n;if(!t)return n._events[e]=null,n;if(t)for(
// specific handler
var a,s=o.length;s--;)if((a=o[s])===t||a.fn===t){o.splice(s,1);break}return n},Ln.prototype.$emit=function(t){var n=this,e=t.toLowerCase();e!==t&&n._events[e]&&ue('Event "'+e+'" is emitted in component '+le(n)+' but the handler is registered for "'+t+'". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "'+x(t)+'" instead of "'+t+'".');var r=n._events[t];if(r){r=1<r.length?w(r):r;for(var i=w(arguments,1),o=0,a=r.length;o<a;o++)try{r[o].apply(n,i)}catch(e){Ge(e,n,'event handler for "'+t+'"')}}return n},(Mn=Fn).prototype._update=function(e,t){var n=this;n._isMounted&&Wt(n,"beforeUpdate");var r=n.$el,i=n._vnode,o=Ht;(Ht=n)._vnode=e,
// Vue.prototype.__patch__ is injected in entry points
// based on the rendering backend used.
i?
// updates
n.$el=n.__patch__(i,e):(
// initial render
n.$el=n.__patch__(n.$el,e,t,!1/* removeOnly */,n.$options._parentElm,n.$options._refElm),
// no need for the ref nodes after initial patch
// this prevents keeping a detached DOM tree in memory (#5851)
n.$options._parentElm=n.$options._refElm=null),Ht=o,
// update __vue__ reference
r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),
// if parent is an HOC, update its $el as well
n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},Mn.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},Mn.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Wt(e,"beforeDestroy"),e._isBeingDestroyed=!0;
// remove self from parent
var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||p(t.$children,e),
// teardown watchers
e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();
// remove reference from data ob
// frozen object may not have observer.
e._data.__ob__&&e._data.__ob__.vmCount--,
// call the last hook...
e._isDestroyed=!0,
// invoke destroy hooks on current rendered tree
e.__patch__(e._vnode,null),
// fire destroyed hook
Wt(e,"destroyed"),
// turn off all instance listeners.
e.$off(),
// remove __vue__ reference
e.$el&&(e.$el.__vue__=null),
// release circular reference (#6759)
e.$vnode&&(e.$vnode.parent=null)}},
// install runtime convenience helpers
wn((Pn=Fn).prototype),Pn.prototype.$nextTick=function(e){return ft(e,this)},Pn.prototype._render=function(){var t,n=this,e=n.$options,r=e.render,i=e._parentVnode;for(var o in n.$slots)
// $flow-disable-line
n.$slots[o]._rendered=!1;i&&(n.$scopedSlots=i.data.scopedSlots||g),
// set parent vnode. this allows render functions to have access
// to the data on the placeholder node.
n.$vnode=i;try{t=r.call(n._renderProxy,n.$createElement)}catch(e){if(Ge(e,n,"render"),n.$options.renderError)try{t=n.$options.renderError.call(n._renderProxy,n.$createElement,e)}catch(e){Ge(e,n,"renderError"),t=n._vnode}else t=n._vnode}
// return empty vnode in case the render function errored out
return t instanceof ye||(Array.isArray(t)&&se("Multiple root nodes returned from render function. Render function should return a single root node.",n),t=xe()),
// set parent
t.parent=i,t};var Xn,Yn,Jn,Kn=[String,RegExp,Array],Gn={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Kn,exclude:Kn,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Vn(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(t){zn(e,function(e){return Un(t,e)})}),this.$watch("exclude",function(t){zn(e,function(e){return!Un(t,e)})})},render:function(){var e=this.$slots.default,t=jt(e),n=t&&t.componentOptions;if(n){
// check pattern
var r=Wn(n),i=this.include,o=this.exclude;if(
// not included
i&&(!r||!Un(i,r))||
// excluded
o&&r&&Un(o,r))return t;var a=this.cache,s=this.keys,u=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;a[u]?(t.componentInstance=a[u].componentInstance,
// make current key freshest
p(s,u),s.push(u)):(a[u]=t,s.push(u),
// prune oldest entry
this.max&&s.length>parseInt(this.max)&&Vn(a,s[0],s,this._vnode)),t.data.keepAlive=!0}return t||e&&e[0]}}}
/*  */;Xn=Fn,Jn={get:function(){return F},set:function(){se("Do not replace the Vue.config object, set individual fields instead.")}},Object.defineProperty(Xn,"config",Jn),
// exposed util methods.
// NOTE: these are not considered part of the public API - avoid relying on
// them unless you are aware of the risk.
Xn.util={warn:se,extend:_,mergeOptions:We,defineReactive:je},Xn.set=De,Xn.delete=Le,Xn.nextTick=ft,Xn.options=Object.create(null),$.forEach(function(e){Xn.options[e+"s"]=Object.create(null)}),_((
// this is used to identify the "base" constructor to extend all plain-object
// components with in Weex's multi-instance scenarios.
Xn.options._base=Xn).options.components,Gn),Xn.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(-1<t.indexOf(e))return this;
// additional parameters
var n=w(arguments,1);return n.unshift(this),"function"==typeof e.install?e.install.apply(e,n):"function"==typeof e&&e.apply(null,n),t.push(e),this},Xn.mixin=function(e){return this.options=We(this.options,e),this},Bn(Xn),Yn=Xn,
/**
   * Create asset registration methods.
   */
$.forEach(function(n){Yn[n]=function(e,t){return t?(
/* istanbul ignore if */
"component"===n&&Fe(e),"component"===n&&c(t)&&(t.name=t.name||e,t=this.options._base.extend(t)),"directive"===n&&"function"==typeof t&&(t={bind:t,update:t}),this.options[n+"s"][e]=t):this.options[n+"s"][e]}}),Object.defineProperty(Fn.prototype,"$isServer",{get:ne}),Object.defineProperty(Fn.prototype,"$ssrContext",{get:function(){
/* istanbul ignore next */
return this.$vnode&&this.$vnode.ssrContext}}),
// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Fn,"FunctionalRenderContext",{value:_n}),Fn.version="2.5.17";
/*  */
// these are reserved for web because they are directly compiled away
// during template compilation
var Zn=s("style,class"),Qn=s("input,textarea,option,select,progress"),er=function(e,t,n){return"value"===n&&Qn(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},tr=s("contenteditable,draggable,spellcheck"),nr=s("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),rr="http://www.w3.org/1999/xlink",ir=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},or=function(e){return ir(e)?e.slice(6,e.length):""},ar=function(e){return null==e||!1===e};
// attributes that should be using props for binding
/*  */
function sr(e){for(var t=e.data,n=e,r=e;M(r.componentInstance);)(r=r.componentInstance._vnode)&&r.data&&(t=ur(r.data,t));for(;M(n=n.parent);)n&&n.data&&(t=ur(t,n.data));return function(e,t){if(M(e)||M(t))return cr(e,lr(t));
/* istanbul ignore next */return""}(t.staticClass,t.class)}function ur(e,t){return{staticClass:cr(e.staticClass,t.staticClass),class:M(e.class)?[e.class,t.class]:t.class}}function cr(e,t){return e?t?e+" "+t:e:t||""}function lr(e){return Array.isArray(e)?function(e){for(var t,n="",r=0,i=e.length;r<i;r++)M(t=lr(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}(e):P(e)?function(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}
/*  */(e):"string"==typeof e?e:""
/* istanbul ignore next */}var fr={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},pr=s("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),dr=s("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),hr=function(e){return pr(e)||dr(e)};function vr(e){return dr(e)?"svg":
// basic support for MathML
// note it doesn't support other MathML elements being component roots
"math"===e?"math":void 0}var mr=Object.create(null);var gr=s("text,number,password,search,email,tel,url");
/*  */
/**
 * Query an element selector if it's not an element already.
 */function yr(e){if("string"==typeof e){var t=document.querySelector(e);return t||(se("Cannot find element: "+e),document.createElement("div"))}return e}
/*  */var br=Object.freeze({createElement:function(e,t){var n=document.createElement(e);return"select"!==e||
// false or null will remove the attribute but undefined will not
t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n},createElementNS:function(e,t){return document.createElementNS(fr[e],t)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){e.appendChild(t)},parentNode:function(e){return e.parentNode},nextSibling:function(e){return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},setStyleScope:function(e,t){e.setAttribute(t,"")}}),xr={create:function(e,t){wr(t)},update:function(e,t){e.data.ref!==t.data.ref&&(wr(e,!0),wr(t))},destroy:function(e){wr(e,!0)}};
/*  */function wr(e,t){var n=e.data.ref;if(M(n)){var r=e.context,i=e.componentInstance||e.elm,o=r.$refs;t?Array.isArray(o[n])?p(o[n],i):o[n]===i&&(o[n]=void 0):e.data.refInFor?Array.isArray(o[n])?o[n].indexOf(i)<0&&
// $flow-disable-line
o[n].push(i):o[n]=[i]:o[n]=i}}
/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */var _r=new ye("",{},[]),Tr=["create","activate","update","remove","destroy"];function Cr(e,t){return e.key===t.key&&(e.tag===t.tag&&e.isComment===t.isComment&&M(e.data)===M(t.data)&&function(e,t){if("input"!==e.tag)return!0;var n,r=M(n=e.data)&&M(n=n.attrs)&&n.type,i=M(n=t.data)&&M(n=n.attrs)&&n.type;return r===i||gr(r)&&gr(i)}(e,t)||L(e.isAsyncPlaceholder)&&e.asyncFactory===t.asyncFactory&&I(t.asyncFactory.error))}function kr(e,t,n){var r,i,o={};for(r=t;r<=n;++r)M(i=e[r].key)&&(o[i]=r);return o}
/*  */
var Ar={create:Er,update:Er,destroy:function(e){Er(e,_r)}};function Er(e,t){(e.data.directives||t.data.directives)&&function(t,n){var e,r,i,o=t===_r,a=n===_r,s=$r(t.data.directives,t.context),u=$r(n.data.directives,n.context),c=[],l=[];for(e in u)r=s[e],i=u[e],r?(
// existing directive, update
i.oldValue=r.value,Or(i,"update",n,t),i.def&&i.def.componentUpdated&&l.push(i)):(
// new directive, bind
Or(i,"bind",n,t),i.def&&i.def.inserted&&c.push(i));if(c.length){var f=function(){for(var e=0;e<c.length;e++)Or(c[e],"inserted",n,t)};o?At(n,"insert",f):f()}l.length&&At(n,"postpatch",function(){for(var e=0;e<l.length;e++)Or(l[e],"componentUpdated",n,t)});if(!o)for(e in s)u[e]||
// no longer present, unbind
Or(s[e],"unbind",t,t,a)}(e,t)}var Sr=Object.create(null);function $r(e,t){var n,r,i,o=Object.create(null);if(!e)
// $flow-disable-line
return o;for(n=0;n<e.length;n++)(r=e[n]).modifiers||(
// $flow-disable-line
r.modifiers=Sr),(o[(i=r,i.rawName||i.name+"."+Object.keys(i.modifiers||{}).join("."))]=r).def=Ue(t.$options,"directives",r.name,!0);
// $flow-disable-line
return o}function Or(t,n,r,e,i){var o=t.def&&t.def[n];if(o)try{o(r.elm,t,r,e,i)}catch(e){Ge(e,r.context,"directive "+t.name+" "+n+" hook")}}var Nr=[xr,Ar]
/*  */;function jr(e,t){var n=t.componentOptions;if(!(M(n)&&!1===n.Ctor.options.inheritAttrs||I(e.data.attrs)&&I(t.data.attrs))){var r,i,o=t.elm,a=e.data.attrs||{},s=t.data.attrs||{};for(r in
// clone observed objects, as the user probably wants to mutate it
M(s.__ob__)&&(s=t.data.attrs=_({},s)),s)i=s[r],a[r]!==i&&Dr(o,r,i);
// #4391: in IE9, setting type can reset value for input[type=radio]
// #6666: IE/Edge forces progress value down to 1 before setting a max
/* istanbul ignore if */for(r in(Y||K)&&s.value!==a.value&&Dr(o,"value",s.value),a)I(s[r])&&(ir(r)?o.removeAttributeNS(rr,or(r)):tr(r)||o.removeAttribute(r))}}function Dr(e,t,n){-1<e.tagName.indexOf("-")?Lr(e,t,n):nr(t)?
// set attribute for blank value
// e.g. <option disabled>Select one</option>
ar(n)?e.removeAttribute(t):(
// technically allowfullscreen is a boolean attribute for <iframe>,
// but Flash expects a value of "true" when used on <embed> tag
n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):tr(t)?e.setAttribute(t,ar(n)||"false"===n?"false":"true"):ir(t)?ar(n)?e.removeAttributeNS(rr,or(t)):e.setAttributeNS(rr,t,n):Lr(e,t,n)}function Lr(t,e,n){if(ar(n))t.removeAttribute(e);else{
// #7138: IE10 & 11 fires input event when setting placeholder on
// <textarea>... block the first input event and remove the blocker
// immediately.
/* istanbul ignore if */
if(Y&&!J&&"TEXTAREA"===t.tagName&&"placeholder"===e&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),
// $flow-disable-line
t.__ieph=!0}t.setAttribute(e,n)}}var Ir={create:jr,update:jr}
/*  */;function Mr(e,t){var n=t.elm,r=t.data,i=e.data;if(!(I(r.staticClass)&&I(r.class)&&(I(i)||I(i.staticClass)&&I(i.class)))){var o=sr(t),a=n._transitionClasses;
// handle transition classes
M(a)&&(o=cr(o,lr(a))),
// set the class
o!==n._prevClass&&(n.setAttribute("class",o),n._prevClass=o)}}var Pr,Rr,Hr,qr,Fr,Br,Wr,Ur={create:Mr,update:Mr}
/*  */,zr=/[\w).+\-_$\]]/;function Vr(e){var t,n,r,i,o,a=!1,s=!1,u=!1,c=!1,l=0,f=0,p=0,d=0;for(r=0;r<e.length;r++)if(n=t,t=e.charCodeAt(r),a)39===t&&92!==n&&(a=!1);else if(s)34===t&&92!==n&&(s=!1);else if(u)96===t&&92!==n&&(u=!1);else if(c)47===t&&92!==n&&(c=!1);else if(124!==t||// pipe
124===e.charCodeAt(r+1)||124===e.charCodeAt(r-1)||l||f||p){switch(t){case 34:s=!0;break;// "
case 39:a=!0;break;// '
case 96:u=!0;break;// `
case 40:p++;break;// (
case 41:p--;break;// )
case 91:f++;break;// [
case 93:f--;break;// ]
case 123:l++;break;// {
case 125:l--;// }
}if(47===t){
// find first non-whitespace prev char
for(// /
var h=r-1,v=void 0;0<=h&&" "===(v=e.charAt(h));h--);v&&zr.test(v)||(c=!0)}}else void 0===i?(
// first filter, end of expression
d=r+1,i=e.slice(0,r).trim()):m();function m(){(o||(o=[])).push(e.slice(d,r).trim()),d=r+1}if(void 0===i?i=e.slice(0,r).trim():0!==d&&m(),o)for(r=0;r<o.length;r++)i=Xr(i,o[r]);return i}function Xr(e,t){var n=t.indexOf("(");if(n<0)
// _f: resolveFilter
return'_f("'+t+'")('+e+")";var r=t.slice(0,n),i=t.slice(n+1);return'_f("'+r+'")('+e+(")"!==i?","+i:i)}
/*  */function Yr(e){console.error("[Vue compiler]: "+e)}function Jr(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function Kr(e,t,n){(e.props||(e.props=[])).push({name:t,value:n}),e.plain=!1}function Gr(e,t,n){(e.attrs||(e.attrs=[])).push({name:t,value:n}),e.plain=!1}
// add a raw attr (use this in preTransforms)
function Zr(e,t,n){e.attrsMap[t]=n,e.attrsList.push({name:t,value:n})}function Qr(e,t,n,r,i,o){var a;r=r||g,
// warn prevent and passive modifier
/* istanbul ignore if */
o&&r.prevent&&r.passive&&o("passive and prevent can't be used together. Passive handler can't prevent default event."),
// check capture modifier
r.capture&&(delete r.capture,t="!"+t),r.once&&(delete r.once,t="~"+t)
/* istanbul ignore if */,r.passive&&(delete r.passive,t="&"+t),
// normalize click.right and click.middle since they don't actually fire
// this is technically browser-specific, but at least for now browsers are
// the only target envs that have right/middle clicks.
"click"===t&&(r.right?(t="contextmenu",delete r.right):r.middle&&(t="mouseup")),r.native?(delete r.native,a=e.nativeEvents||(e.nativeEvents={})):a=e.events||(e.events={});var s={value:n.trim()};r!==g&&(s.modifiers=r);var u=a[t];
/* istanbul ignore if */Array.isArray(u)?i?u.unshift(s):u.push(s):a[t]=u?i?[s,u]:[u,s]:s,e.plain=!1}function ei(e,t,n){var r=ti(e,":"+t)||ti(e,"v-bind:"+t);if(null!=r)return Vr(r);if(!1!==n){var i=ti(e,t);if(null!=i)return JSON.stringify(i)}}
// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function ti(e,t,n){var r;if(null!=(r=e.attrsMap[t]))for(var i=e.attrsList,o=0,a=i.length;o<a;o++)if(i[o].name===t){i.splice(o,1);break}return n&&delete e.attrsMap[t],r}
/*  */
/**
 * Cross-platform code generation for component v-model
 */function ni(e,t,n){var r=n||{},i=r.number,o="$$v";r.trim&&(o="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(o="_n("+o+")");var a=ri(t,o);e.model={value:"("+t+")",expression:'"'+t+'"',callback:"function ($$v) {"+a+"}"}}
/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */function ri(e,t){var n=function(e){if(
// Fix https://github.com/vuejs/vue/pull/7730
// allow v-model="obj.val " (trailing whitespace)
e=e.trim(),Pr=e.length,e.indexOf("[")<0||e.lastIndexOf("]")<Pr-1)return-1<(qr=e.lastIndexOf("."))?{exp:e.slice(0,qr),key:'"'+e.slice(qr+1)+'"'}:{exp:e,key:null};Rr=e,qr=Fr=Br=0;for(;!oi();)
/* istanbul ignore if */
ai(Hr=ii())?ui(Hr):91===Hr&&si(Hr);return{exp:e.slice(0,Fr),key:e.slice(Fr+1,Br)}}(e);return null===n.key?e+"="+t:"$set("+n.exp+", "+n.key+", "+t+")"}
/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */function ii(){return Rr.charCodeAt(++qr)}function oi(){return Pr<=qr}function ai(e){return 34===e||39===e}function si(e){var t=1;for(Fr=qr;!oi();)if(ai(e=ii()))ui(e);else if(91===e&&t++,93===e&&t--,0===t){Br=qr;break}}function ui(e){for(var t=e;!oi()&&(e=ii())!==t;);}
/*  */
// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var ci,li="__r",fi="__c";function pi(e,t,n,r,i){var o,a,s,u,c;t=(o=t)._withTask||(o._withTask=function(){st=!0;var e=o.apply(null,arguments);return st=!1,e}),n&&(a=t,s=e,u=r,c=ci,t=function e(){null!==a.apply(null,arguments)&&di(s,e,u,c)}),ci.addEventListener(e,t,ee?{capture:r,passive:i}:r)}function di(e,t,n,r){(r||ci).removeEventListener(e,t._withTask||t,n)}function hi(e,t){if(!I(e.data.on)||!I(t.data.on)){var n=t.data.on||{},r=e.data.on||{};ci=t.elm,
/*  */
// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function(e){
/* istanbul ignore if */
if(M(e[li])){
// IE input[type=range] only supports `change` event
var t=Y?"change":"input";e[t]=[].concat(e[li],e[t]||[]),delete e[li]}
// This was originally intended to fix #4521 but no longer necessary
// after 2.5. Keeping it for backwards compat with generated code from < 2.4
/* istanbul ignore if */M(e[fi])&&(e.change=[].concat(e[fi],e.change||[]),delete e[fi])}(n),kt(n,r,pi,di,t.context),ci=void 0}}var vi={create:hi,update:hi}
/*  */;function mi(e,t){if(!I(e.data.domProps)||!I(t.data.domProps)){var n,r,i,o,a=t.elm,s=e.data.domProps||{},u=t.data.domProps||{};for(n in
// clone observed objects, as the user probably wants to mutate it
M(u.__ob__)&&(u=t.data.domProps=_({},u)),s)I(u[n])&&(a[n]="");for(n in u){
// ignore children if the node has textContent or innerHTML,
// as these will throw away existing DOM nodes and cause removal errors
// on subsequent patches (#3360)
if(r=u[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),r===s[n])continue;
// #6601 work around Chrome version <= 55 bug where single textNode
// replaced by innerHTML/textContent retains its parentNode property
1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===n){
// avoid resetting cursor position when value is the same
var c=I(
// store value as _value as well since
// non-string values will be stringified
a._value=r)?"":String(r);o=c,(i=a).composing||"OPTION"!==i.tagName&&!function(e,t){
// return true when textbox (.number and .trim) loses focus and its value is
// not equal to the updated value
var n=!0;
// #6157
// work around IE bug when accessing document.activeElement in an iframe
try{n=document.activeElement!==e}catch(e){}return n&&e.value!==t}(i,o)&&!function(e,t){var n=e.value,r=e._vModifiers;// injected by v-model runtime
if(M(r)){if(r.lazy)
// inputs with lazy should only be updated when not in focus
return!1;if(r.number)return R(n)!==R(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}(i,o)||(a.value=c)}else a[n]=r}}}
// check platforms/web/util/attrs.js acceptValue
var gi={create:mi,update:mi}
/*  */,yi=e(function(e){var n={},r=/:(.+)/;return e.split(/;(?![^(]*\))/g).forEach(function(e){if(e){var t=e.split(r);1<t.length&&(n[t[0].trim()]=t[1].trim())}}),n});
// merge static and dynamic style data on the same vnode
function bi(e){var t=xi(e.style);
// static style is pre-processed into an object during compilation
// and is always a fresh object, so it's safe to merge into it
return e.staticStyle?_(e.staticStyle,t):t}
// normalize possible array / string values into Object
function xi(e){return Array.isArray(e)?T(e):"string"==typeof e?yi(e):e}
/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
/*  */
var wi,_i=/^--/,Ti=/\s*!important$/,Ci=function(e,t,n){
/* istanbul ignore if */
if(_i.test(t))e.style.setProperty(t,n);else if(Ti.test(n))e.style.setProperty(t,n.replace(Ti,""),"important");else{var r=Ai(t);if(Array.isArray(n))
// Support values array created by autoprefixer, e.g.
// {display: ["-webkit-box", "-ms-flexbox", "flex"]}
// Set them one by one, and the browser will only set those it can recognize
for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},ki=["Webkit","Moz","ms"],Ai=e(function(e){if(wi=wi||document.createElement("div").style,"filter"!==(e=b(e))&&e in wi)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<ki.length;n++){var r=ki[n]+t;if(r in wi)return r}});function Ei(e,t){var n=t.data,r=e.data;if(!(I(n.staticStyle)&&I(n.style)&&I(r.staticStyle)&&I(r.style))){var i,o,a=t.elm,s=r.staticStyle,u=r.normalizedStyle||r.style||{},c=s||u,l=xi(t.data.style)||{};
// store normalized style under a different key for next diff
// make sure to clone it if it's reactive, since the user likely wants
// to mutate it.
t.data.normalizedStyle=M(l.__ob__)?_({},l):l;var f=function(e,t){var n,r={};if(t)for(var i=e;i.componentInstance;)(i=i.componentInstance._vnode)&&i.data&&(n=bi(i.data))&&_(r,n);(n=bi(e.data))&&_(r,n);for(var o=e;o=o.parent;)o.data&&(n=bi(o.data))&&_(r,n);return r}(t,!0);for(o in c)I(f[o])&&Ci(a,o,"");for(o in f)(i=f[o])!==c[o]&&
// ie9 setting to null has no effect, must use empty string
Ci(a,o,null==i?"":i)}}var Si={create:Ei,update:Ei}
/*  */
/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */;function $i(t,e){
/* istanbul ignore if */
if(e&&(e=e.trim()))
/* istanbul ignore else */
if(t.classList)-1<e.indexOf(" ")?e.split(/\s+/).forEach(function(e){return t.classList.add(e)}):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}
/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */function Oi(t,e){
/* istanbul ignore if */
if(e&&(e=e.trim()))
/* istanbul ignore else */
if(t.classList)-1<e.indexOf(" ")?e.split(/\s+/).forEach(function(e){return t.classList.remove(e)}):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{for(var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";0<=n.indexOf(r);)n=n.replace(r," ");(n=n.trim())?t.setAttribute("class",n):t.removeAttribute("class")}}
/*  */function Ni(e){if(e){
/* istanbul ignore else */
if("object"==typeof e){var t={};return!1!==e.css&&_(t,ji(e.name||"v")),_(t,e),t}return"string"==typeof e?ji(e):void 0}}var ji=e(function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}}),Di=U&&!J,Li="transition",Ii="animation",Mi="transition",Pi="transitionend",Ri="animation",Hi="animationend";Di&&(
/* istanbul ignore if */
void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Mi="WebkitTransition",Pi="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ri="WebkitAnimation",Hi="webkitAnimationEnd"));
// binding to window is necessary to make hot reload work in IE in strict mode
var qi=U?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:/* istanbul ignore next */function(e){return e()};function Fi(e){qi(function(){qi(e)})}function Bi(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),$i(e,t))}function Wi(e,t){e._transitionClasses&&p(e._transitionClasses,t),Oi(e,t)}function Ui(t,e,n){var r=Vi(t,e),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===Li?Pi:Hi,u=0,c=function(){t.removeEventListener(s,l),n()},l=function(e){e.target===t&&++u>=a&&c()};setTimeout(function(){u<a&&c()},o+1),t.addEventListener(s,l)}var zi=/\b(transform|all)(,|$)/;function Vi(e,t){var n,r=window.getComputedStyle(e),i=r[Mi+"Delay"].split(", "),o=r[Mi+"Duration"].split(", "),a=Xi(i,o),s=r[Ri+"Delay"].split(", "),u=r[Ri+"Duration"].split(", "),c=Xi(s,u),l=0,f=0;
/* istanbul ignore if */
return t===Li?0<a&&(n=Li,l=a,f=o.length):t===Ii?0<c&&(n=Ii,l=c,f=u.length):f=(n=0<(l=Math.max(a,c))?c<a?Li:Ii:null)?n===Li?o.length:u.length:0,{type:n,timeout:l,propCount:f,hasTransform:n===Li&&zi.test(r[Mi+"Property"])}}function Xi(n,e){
/* istanbul ignore next */
for(;n.length<e.length;)n=n.concat(n);return Math.max.apply(null,e.map(function(e,t){return Yi(e)+Yi(n[t])}))}function Yi(e){return 1e3*Number(e.slice(0,-1))}
/*  */function Ji(n,e){var r=n.elm;
// call leave callback now
M(r._leaveCb)&&(r._leaveCb.cancelled=!0,r._leaveCb());var t=Ni(n.data.transition);if(!I(t)&&!M(r._enterCb)&&1===r.nodeType)
/* istanbul ignore if */
{for(var i=t.css,o=t.type,a=t.enterClass,s=t.enterToClass,u=t.enterActiveClass,c=t.appearClass,l=t.appearToClass,f=t.appearActiveClass,p=t.beforeEnter,d=t.enter,h=t.afterEnter,v=t.enterCancelled,m=t.beforeAppear,g=t.appear,y=t.afterAppear,b=t.appearCancelled,x=t.duration,w=Ht,_=Ht.$vnode;_&&_.parent;)w=(_=_.parent).context;var T=!w._isMounted||!n.isRootInsert;if(!T||g||""===g){var C=T&&c?c:a,k=T&&f?f:u,A=T&&l?l:s,E=T&&m||p,S=T&&"function"==typeof g?g:d,$=T&&y||h,O=T&&b||v,N=R(P(x)?x.enter:x);null!=N&&Gi(N,"enter",n);var j=!1!==i&&!J,D=Qi(S),L=r._enterCb=H(function(){j&&(Wi(r,A),Wi(r,k)),L.cancelled?(j&&Wi(r,C),O&&O(r)):$&&$(r),r._enterCb=null});n.data.show||
// remove pending leave element on enter by injecting an insert hook
At(n,"insert",function(){var e=r.parentNode,t=e&&e._pending&&e._pending[n.key];t&&t.tag===n.tag&&t.elm._leaveCb&&t.elm._leaveCb(),S&&S(r,L)}),
// start enter transition
E&&E(r),j&&(Bi(r,C),Bi(r,k),Fi(function(){Wi(r,C),L.cancelled||(Bi(r,A),D||(Zi(N)?setTimeout(L,N):Ui(r,o,L)))})),n.data.show&&(e&&e(),S&&S(r,L)),j||D||L()}}}function Ki(e,t){var n=e.elm;
// call enter callback now
M(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=Ni(e.data.transition);if(I(r)||1!==n.nodeType)return t();
/* istanbul ignore if */if(!M(n._leaveCb)){var i=r.css,o=r.type,a=r.leaveClass,s=r.leaveToClass,u=r.leaveActiveClass,c=r.beforeLeave,l=r.leave,f=r.afterLeave,p=r.leaveCancelled,d=r.delayLeave,h=r.duration,v=!1!==i&&!J,m=Qi(l),g=R(P(h)?h.leave:h);M(g)&&Gi(g,"leave",e);var y=n._leaveCb=H(function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),v&&(Wi(n,s),Wi(n,u)),y.cancelled?(v&&Wi(n,a),p&&p(n)):(t(),f&&f(n)),n._leaveCb=null});d?d(b):b()}function b(){
// the delayed leave may have already been cancelled
y.cancelled||(
// record leaving element
e.data.show||((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),c&&c(n),v&&(Bi(n,a),Bi(n,u),Fi(function(){Wi(n,a),y.cancelled||(Bi(n,s),m||(Zi(g)?setTimeout(y,g):Ui(n,o,y)))})),l&&l(n,y),v||m||y())}}
// only used in dev mode
function Gi(e,t,n){"number"!=typeof e?se("<transition> explicit "+t+" duration is not a valid number - got "+JSON.stringify(e)+".",n.context):isNaN(e)&&se("<transition> explicit "+t+" duration is NaN - the duration expression might be incorrect.",n.context)}function Zi(e){return"number"==typeof e&&!isNaN(e)}
/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */function Qi(e){if(I(e))return!1;var t=e.fns;return M(t)?Qi(Array.isArray(t)?t[0]:t):1<(e._length||e.length)}function eo(e,t){!0!==t.data.show&&Ji(t)}var to=function(e){var r,t,y={},n=e.modules,b=e.nodeOps;for(r=0;r<Tr.length;++r)for(y[Tr[r]]=[],t=0;t<n.length;++t)M(n[t][Tr[r]])&&y[Tr[r]].push(n[t][Tr[r]]);function o(e){var t=b.parentNode(e);
// element may have already been removed due to v-html / v-text
M(t)&&b.removeChild(t,e)}function m(t,e){return!e&&!t.ns&&!(F.ignoredElements.length&&F.ignoredElements.some(function(e){return i(e)?e.test(t.tag):e===t.tag}))&&F.isUnknownElement(t.tag)}var l=0;function x(e,t,n,r,i,o,a){// for transition enter check
if(M(e.elm)&&M(o)&&(
// This vnode was used in a previous render!
// now it's used as a new node, overwriting its elm would cause
// potential patch errors down the road when it's used as an insertion
// reference node. Instead, we clone the node on-demand before creating
// associated DOM element for it.
e=o[a]=_e(e)),e.isRootInsert=!i,!function(e,t,n,r){var i=e.data;if(M(i)){var o=M(e.componentInstance)&&i.keepAlive;
// after calling the init hook, if the vnode is a child component
// it should've created a child instance and mounted it. the child
// component also has set the placeholder vnode's elm.
// in that case we can just return the element and be done.
if(M(i=i.hook)&&M(i=i.init)&&i(e,!1/* hydrating */,n,r),M(e.componentInstance))return g(e,t),L(o)&&function(e,t,n,r){for(var i,o=e
// hack for #4339: a reactivated component with inner transition
// does not trigger because the inner node's created hooks are not called
// again. It's not ideal to involve module-specific logic in here but
// there doesn't seem to be a better way to do it.
;o.componentInstance;)if(o=o.componentInstance._vnode,M(i=o.data)&&M(i=i.transition)){for(i=0;i<y.activate.length;++i)y.activate[i](_r,o);t.push(o);break}
// unlike a newly created component,
// a reactivated keep-alive component doesn't insert itself
f(n,e.elm,r)}(e,t,n,r),!0}}(e,t,n,r)){var s=e.data,u=e.children,c=e.tag;M(c)?(s&&s.pre&&l++,m(e,l)&&se("Unknown custom element: <"+c+'> - did you register the component correctly? For recursive components, make sure to provide the "name" option.',e.context),e.elm=e.ns?b.createElementNS(e.ns,c):b.createElement(c,e),p(e),w(e,u,t),M(s)&&T(e,t),f(n,e.elm,r),s&&s.pre&&l--):(L(e.isComment)?e.elm=b.createComment(e.text):e.elm=b.createTextNode(e.text),f(n,e.elm,r))}}function g(e,t){M(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,_(e)?(T(e,t),p(e)):(
// empty component root.
// skip all element-related modules except for ref (#3455)
wr(e),
// make sure to invoke the insert hook
t.push(e))}function f(e,t,n){M(e)&&(M(n)?n.parentNode===e&&b.insertBefore(e,t,n):b.appendChild(e,t))}function w(e,t,n){if(Array.isArray(t)){E(t);for(var r=0;r<t.length;++r)x(t[r],n,e.elm,null,!0,t,r)}else v(e.text)&&b.appendChild(e.elm,b.createTextNode(String(e.text)))}function _(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return M(e.tag)}function T(e,t){for(var n=0;n<y.create.length;++n)y.create[n](_r,e);// Reuse variable
M(r=e.data.hook)&&(M(r.create)&&r.create(_r,e),M(r.insert)&&t.push(e))}
// set scope id attribute for scoped CSS.
// this is implemented as a special case to avoid the overhead
// of going through the normal attribute patching process.
function p(e){var t;if(M(t=e.fnScopeId))b.setStyleScope(e.elm,t);else for(var n=e;n;)M(t=n.context)&&M(t=t.$options._scopeId)&&b.setStyleScope(e.elm,t),n=n.parent;
// for slot content they should also get the scopeId from the host instance.
M(t=Ht)&&t!==e.context&&t!==e.fnContext&&M(t=t.$options._scopeId)&&b.setStyleScope(e.elm,t)}function C(e,t,n,r,i,o){for(;r<=i;++r)x(n[r],o,e,t,!1,n,r)}function k(e){var t,n,r=e.data;if(M(r))for(M(t=r.hook)&&M(t=t.destroy)&&t(e),t=0;t<y.destroy.length;++t)y.destroy[t](e);if(M(t=e.children))for(n=0;n<e.children.length;++n)k(e.children[n])}function A(e,t,n,r){for(;n<=r;++n){var i=t[n];M(i)&&(M(i.tag)?(a(i),k(i)):// Text node
o(i.elm))}}function a(e,t){if(M(t)||M(e.data)){var n,r=y.remove.length+1;for(M(t)?
// we have a recursively passed down rm callback
// increase the listeners count
t.listeners+=r:
// directly removing
t=function(e,t){function n(){0==--n.listeners&&o(e)}return n.listeners=t,n}(e.elm,r),
// recursively invoke hooks on child component root node
M(n=e.componentInstance)&&M(n=n._vnode)&&M(n.data)&&a(n,t),n=0;n<y.remove.length;++n)y.remove[n](e,t);M(n=e.data.hook)&&M(n=n.remove)?n(e,t):t()}else o(e.elm)}function E(e){for(var t={},n=0;n<e.length;n++){var r=e[n],i=r.key;M(i)&&(t[i]?se("Duplicate keys detected: '"+i+"'. This may cause an update error.",r.context):t[i]=!0)}}function S(e,t,n,r){for(var i=n;i<r;i++){var o=t[i];if(M(o)&&Cr(e,o))return i}}function $(e,t,n,r){if(e!==t){var i=t.elm=e.elm;if(L(e.isAsyncPlaceholder))M(t.asyncFactory.resolved)?D(e.elm,t,n):t.isAsyncPlaceholder=!0;else
// reuse element for static trees.
// note we only do this if the vnode is cloned -
// if the new node is not cloned it means the render functions have been
// reset by the hot-reload-api and we need to do a proper re-render.
if(L(t.isStatic)&&L(e.isStatic)&&t.key===e.key&&(L(t.isCloned)||L(t.isOnce)))t.componentInstance=e.componentInstance;else{var o,a=t.data;M(a)&&M(o=a.hook)&&M(o=o.prepatch)&&o(e,t);var s=e.children,u=t.children;if(M(a)&&_(t)){for(o=0;o<y.update.length;++o)y.update[o](e,t);M(o=a.hook)&&M(o=o.update)&&o(e,t)}I(t.text)?M(s)&&M(u)?s!==u&&function(e,t,n,r,i){var o,a,s,u=0,c=0,l=t.length-1,f=t[0],p=t[l],d=n.length-1,h=n[0],v=n[d],m=!i;for(E(n);u<=l&&c<=d;)I(f)?f=t[++u]:I(p)?p=t[--l]:Cr(f,h)?($(f,h,r),f=t[++u],h=n[++c]):Cr(p,v)?($(p,v,r),p=t[--l],v=n[--d]):Cr(f,v)?(// Vnode moved right
$(f,v,r),m&&b.insertBefore(e,f.elm,b.nextSibling(p.elm)),f=t[++u],v=n[--d]):(Cr(p,h)?(// Vnode moved left
$(p,h,r),m&&b.insertBefore(e,p.elm,f.elm),p=t[--l]):(I(o)&&(o=kr(t,u,l)),I(a=M(h.key)?o[h.key]:S(h,t,u,l))?// New element
x(h,r,e,f.elm,!1,n,c):Cr(s=t[a],h)?($(s,h,r),t[a]=void 0,m&&b.insertBefore(e,s.elm,f.elm)):
// same key but different element. treat as new element
x(h,r,e,f.elm,!1,n,c)),h=n[++c]);l<u?C(e,I(n[d+1])?null:n[d+1].elm,n,c,d,r):d<c&&A(0,t,u,l)}(i,s,u,n,r):M(u)?(M(e.text)&&b.setTextContent(i,""),C(i,null,u,0,u.length-1,n)):M(s)?A(0,s,0,s.length-1):M(e.text)&&b.setTextContent(i,""):e.text!==t.text&&b.setTextContent(i,t.text),M(a)&&M(o=a.hook)&&M(o=o.postpatch)&&o(e,t)}}}function O(e,t,n){
// delay insert hooks for component root nodes, invoke them after the
// element is really inserted
if(L(n)&&M(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}var N=!1,j=s("attrs,class,staticClass,staticStyle,key");
// list of modules that can skip create hook during hydration because they
// are already rendered on the client or has no need for initialization
// Note: style is excluded because it relies on initial clone for future
// deep updates (#7063).
// Note: this is a browser-only function so we can assume elms are DOM nodes.
function D(e,t,n,r){var i,o,a,s,u=t.tag,c=t.data,l=t.children;if(r=r||c&&c.pre,t.elm=e,L(t.isComment)&&M(t.asyncFactory))return t.isAsyncPlaceholder=!0;
// assert node match
if(o=e,s=r,!(M((a=t).tag)?0===a.tag.indexOf("vue-component")||!m(a,s)&&a.tag.toLowerCase()===(o.tagName&&o.tagName.toLowerCase()):o.nodeType===(a.isComment?8:3)))return!1;if(M(c)&&(M(i=c.hook)&&M(i=i.init)&&i(t,!0/* hydrating */),M(i=t.componentInstance)))
// child component. it should have hydrated its own tree.
return g(t,n),!0;if(M(u)){if(M(l))
// empty element, allow client to pick up and populate children
if(e.hasChildNodes())
// v-html and domProps: innerHTML
if(M(i=c)&&M(i=i.domProps)&&M(i=i.innerHTML)){if(i!==e.innerHTML)
/* istanbul ignore if */
return"undefined"==typeof console||N||(N=!0,console.warn("Parent: ",e),console.warn("server innerHTML: ",i),console.warn("client innerHTML: ",e.innerHTML)),!1}else{for(
// iterate and compare children lists
var f=!0,p=e.firstChild,d=0;d<l.length;d++){if(!p||!D(p,l[d],n,r)){f=!1;break}p=p.nextSibling}
// if childNode is not null, it means the actual childNodes list is
// longer than the virtual children list.
if(!f||p)
/* istanbul ignore if */
return"undefined"==typeof console||N||(N=!0,console.warn("Parent: ",e),console.warn("Mismatching childNodes vs. VNodes: ",e.childNodes,l)),!1}else w(t,l,n);if(M(c)){var h=!1;for(var v in c)if(!j(v)){h=!0,T(t,n);break}!h&&c.class&&
// ensure collecting deps for deep class bindings for future updates
wt(c.class)}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,r,i,o){if(!I(t)){var a,s=!1,u=[];if(I(e))
// empty mount (likely as component), create new root element
s=!0,x(t,u,i,o);else{var c=M(e.nodeType);if(!c&&Cr(e,t))
// patch existing root node
$(e,t,u,r);else{if(c){if(
// mounting to a real element
// check if this is server-rendered content and if we can perform
// a successful hydration.
1===e.nodeType&&e.hasAttribute(q)&&(e.removeAttribute(q),n=!0),L(n)){if(D(e,t,u))return O(t,u,!0),e;se("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.")}
// either not server-rendered, or hydration failed.
// create an empty node and replace it
a=e,e=new ye(b.tagName(a).toLowerCase(),{},[],void 0,a)}
// replacing existing element
var l=e.elm,f=b.parentNode(l);
// update parent placeholder node element, recursively
if(
// create new node
x(t,u,
// extremely rare edge case: do not insert if old element is in a
// leaving transition. Only happens when combining transition +
// keep-alive + HOCs. (#4590)
l._leaveCb?null:f,b.nextSibling(l)),M(t.parent))for(var p=t.parent,d=_(t);p;){for(var h=0;h<y.destroy.length;++h)y.destroy[h](p);if(p.elm=t.elm,d){for(var v=0;v<y.create.length;++v)y.create[v](_r,p);
// #6513
// invoke insert hooks that may have been merged by create hooks.
// e.g. for directives that uses the "inserted" hook.
var m=p.data.hook.insert;if(m.merged)
// start at index 1 to avoid re-invoking component mounted hook
for(var g=1;g<m.fns.length;g++)m.fns[g]()}else wr(p);p=p.parent}
// destroy old node
M(f)?A(0,[e],0,0):M(e.tag)&&k(e)}}return O(t,u,s),t.elm}M(e)&&k(e)}}({nodeOps:br,modules:[Ir,Ur,vi,gi,Si,U?{create:eo,activate:eo,remove:function(e,t){
/* istanbul ignore else */
!0!==e.data.show?Ki(e,t):t()}}:{}].concat(Nr)});
/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */
/* istanbul ignore if */
J&&
// http://www.matts411.com/post/internet-explorer-9-oninput/
document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&co(e,"input")});var no={inserted:function(e,t,n,r){"select"===n.tag?(
// #6903
r.elm&&!r.elm._vOptions?At(n,"postpatch",function(){no.componentUpdated(e,t,n)}):ro(e,t,n.context),e._vOptions=[].map.call(e.options,ao)):("textarea"===n.tag||gr(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",so),e.addEventListener("compositionend",uo),
// Safari < 10.2 & UIWebView doesn't fire compositionend when
// switching focus before confirming composition choice
// this also fixes the issue where some browsers e.g. iOS Chrome
// fires "change" instead of "input" on autocomplete.
e.addEventListener("change",uo),
/* istanbul ignore if */
J&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){ro(e,t,n.context);
// in case the options rendered by v-for have changed,
// it's possible that the value is out-of-sync with the rendered options.
// detect such cases and filter out values that no longer has a matching
// option in the DOM.
var r=e._vOptions,i=e._vOptions=[].map.call(e.options,ao);if(i.some(function(e,t){return!A(e,r[t])}))(e.multiple?t.value.some(function(e){return oo(e,i)}):t.value!==t.oldValue&&oo(t.value,i))&&co(e,"change")}}};function ro(e,t,n){io(e,t,n),
/* istanbul ignore if */
(Y||K)&&setTimeout(function(){io(e,t,n)},0)}function io(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,u=e.options.length;s<u;s++)if(a=e.options[s],i)o=-1<S(r,ao(a)),a.selected!==o&&(a.selected=o);else if(A(ao(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}else se('<select multiple v-model="'+t.expression+'"> expects an Array value for its binding, but got '+Object.prototype.toString.call(r).slice(8,-1),n)}function oo(t,e){return e.every(function(e){return!A(e,t)})}function ao(e){return"_value"in e?e._value:e.value}function so(e){e.target.composing=!0}function uo(e){
// prevent triggering an input event for no reason
e.target.composing&&(e.target.composing=!1,co(e.target,"input"))}function co(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}
/*  */
// recursively search for possible transition defined inside the component root
function lo(e){return!e.componentInstance||e.data&&e.data.transition?e:lo(e.componentInstance._vnode)}var fo={model:no,show:{bind:function(e,t,n){var r=t.value,i=(n=lo(n)).data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,Ji(n,function(){e.style.display=o})):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value;
/* istanbul ignore if */
!r!=!t.oldValue&&((n=lo(n)).data&&n.data.transition?(n.data.show=!0,r?Ji(n,function(){e.style.display=e.__vOriginalDisplay}):Ki(n,function(){e.style.display="none"})):e.style.display=r?e.__vOriginalDisplay:"none")},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}}},po={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};
// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function ho(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?ho(jt(t.children)):e}function vo(e){var t={},n=e.$options;
// props
for(var r in n.propsData)t[r]=e[r];
// events.
// extract listeners and pass them directly to the transition methods
var i=n._parentListeners;for(var o in i)t[b(o)]=i[o];return t}function mo(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}var go={name:"transition",props:po,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(
// filter out text nodes (possible whitespaces)
n=n.filter(function(e){return e.tag||Nt(e)})).length)
/* istanbul ignore if */
{
// warn multiple elements
1<n.length&&se("<transition> can only be used on a single element. Use <transition-group> for lists.",this.$parent);var r=this.mode;
// warn invalid mode
r&&"in-out"!==r&&"out-in"!==r&&se("invalid <transition> mode: "+r,this.$parent);var i=n[0];
// if this is a component root node and the component's
// parent container node also has transition, skip.
if(function(e){for(;e=e.parent;)if(e.data.transition)return!0}(this.$vnode))return i;
// apply transition data to child
// use getRealChild() to ignore abstract components e.g. keep-alive
var o=ho(i);
/* istanbul ignore if */if(!o)return i;if(this._leaving)return mo(e,i);
// ensure a key that is unique to the vnode type and to this transition
// component instance. This key will be used to remove pending leaving nodes
// during entering.
var a="__transition-"+this._uid+"-";o.key=null==o.key?o.isComment?a+"comment":a+o.tag:v(o.key)?0===String(o.key).indexOf(a)?o.key:a+o.key:o.key;var s,u,c=(o.data||(o.data={})).transition=vo(this),l=this._vnode,f=ho(l);if(
// mark v-show
// so that the transition module can hand over the control to the directive
o.data.directives&&o.data.directives.some(function(e){return"show"===e.name})&&(o.data.show=!0),f&&f.data&&(s=o,(u=f).key!==s.key||u.tag!==s.tag)&&!Nt(f)&&(!f.componentInstance||!f.componentInstance._vnode.isComment)){
// replace old child transition data with fresh one
// important for dynamic transitions!
var p=f.data.transition=_({},c);
// handle transition mode
if("out-in"===r)
// return placeholder node and queue update when leave finishes
return this._leaving=!0,At(p,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),mo(e,i);if("in-out"===r){if(Nt(o))return l;var d,h=function(){d()};At(c,"afterEnter",h),At(c,"enterCancelled",h),At(p,"delayLeave",function(e){d=e})}}return i}}},yo=_({tag:String,moveClass:String},po);
/*  */
// Provides transition support for list items.
// supports move transitions using the FLIP technique.
// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.
function bo(e){
/* istanbul ignore if */
e.elm._moveCb&&e.elm._moveCb()
/* istanbul ignore if */,e.elm._enterCb&&e.elm._enterCb()}function xo(e){e.data.newPos=e.elm.getBoundingClientRect()}function wo(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}delete yo.mode;var _o={Transition:go,TransitionGroup:{props:yo,render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=vo(this),s=0;s<i.length;s++){var u=i[s];if(u.tag)if(null!=u.key&&0!==String(u.key).indexOf("__vlist"))o.push(u),((n[u.key]=u).data||(u.data={})).transition=a;else{var c=u.componentOptions,l=c?c.Ctor.options.name||c.tag||"":u.tag;se("<transition-group> children must be keyed: <"+l+">")}}if(r){for(var f=[],p=[],d=0;d<r.length;d++){var h=r[d];h.data.transition=a,h.data.pos=h.elm.getBoundingClientRect(),n[h.key]?f.push(h):p.push(h)}this.kept=e(t,null,f),this.removed=p}return e(t,null,o)},beforeUpdate:function(){
// force removing pass
this.__patch__(this._vnode,this.kept,!1,// hydrating
!0),this._vnode=this.kept},updated:function(){var e=this.prevChildren,r=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,r)&&(
// we divide the work into three loops to avoid mixing DOM reads and writes
// in each iteration - which helps prevent layout thrashing.
e.forEach(bo),e.forEach(xo),e.forEach(wo),
// force reflow to put everything in position
// assign to this to avoid being removed in tree-shaking
// $flow-disable-line
this._reflow=document.body.offsetHeight,e.forEach(function(e){if(e.data.moved){var n=e.elm,t=n.style;Bi(n,r),t.transform=t.WebkitTransform=t.transitionDuration="",n.addEventListener(Pi,n._moveCb=function e(t){t&&!/transform$/.test(t.propertyName)||(n.removeEventListener(Pi,e),n._moveCb=null,Wi(n,r))})}}))},methods:{hasMove:function(e,t){
/* istanbul ignore if */
if(!Di)return!1;
/* istanbul ignore if */if(this._hasMove)return this._hasMove;
// Detect whether an element with the move class applied has
// CSS transitions. Since the element may be inside an entering
// transition at this very moment, we make a clone of it and remove
// all other transition classes applied to ensure only the move class
// is applied.
var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(e){Oi(n,e)}),$i(n,t),n.style.display="none",this.$el.appendChild(n);var r=Vi(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};
/*  */
// install platform specific utils
Fn.config.mustUseProp=er,Fn.config.isReservedTag=hr,Fn.config.isReservedAttr=Zn,Fn.config.getTagNamespace=vr,Fn.config.isUnknownElement=function(e){
/* istanbul ignore if */
if(!U)return!0;if(hr(e))return!1;
/* istanbul ignore if */
if(e=e.toLowerCase(),null!=mr[e])return mr[e];var t=document.createElement(e);return-1<e.indexOf("-")?mr[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:mr[e]=/HTMLUnknownElement/.test(t.toString())},
// install platform runtime directives & components
_(Fn.options.directives,fo),_(Fn.options.components,_o),
// install platform patch function
Fn.prototype.__patch__=U?to:C,
// public mount method
Fn.prototype.$mount=function(e,t){return e=e&&U?yr(e):void 0,n=e,a=t,(o=this).$el=n,o.$options.render||(o.$options.render=xe,
/* istanbul ignore if */
o.$options.template&&"#"!==o.$options.template.charAt(0)||o.$options.el||n?se("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.",o):se("Failed to mount component: template or render function not defined.",o)),Wt(o,"beforeMount"),
/* istanbul ignore if */
r=F.performance&&ot?function(){var e=o._name,t=o._uid,n="vue-perf-start:"+t,r="vue-perf-end:"+t;ot(n);var i=o._render();ot(r),at("vue "+e+" render",n,r),ot(n),o._update(i,a),ot(r),at("vue "+e+" patch",n,r)}:function(){o._update(o._render(),a)},
// we set this to vm._watcher inside the watcher's constructor
// since the watcher's initial patch may call $forceUpdate (e.g. inside child
// component's mounted hook), which relies on vm._watcher being already defined
new en(o,r,C,null,!0/* isRenderWatcher */),a=!1,
// manually mounted instance, call mounted on self
// mounted is called for render-created child components in its inserted hook
null==o.$vnode&&(o._isMounted=!0,Wt(o,"mounted")),o;var o,n,a,r},
// devtools global hook
/* istanbul ignore next */
U&&setTimeout(function(){F.devtools&&(re?re.emit("init",Fn):Z&&console[console.info?"info":"log"]("Download the Vue Devtools extension for a better development experience:\nhttps://github.com/vuejs/vue-devtools")),!1!==F.productionTip&&"undefined"!=typeof console&&console[console.info?"info":"log"]("You are running Vue in development mode.\nMake sure to turn on production mode when deploying for production.\nSee more tips at https://vuejs.org/guide/deployment.html")},0)
/*  */;var To=/\{\{((?:.|\n)+?)\}\}/g,Co=/[-.*+?^${}()|[\]\/\\]/g,ko=e(function(e){var t=e[0].replace(Co,"\\$&"),n=e[1].replace(Co,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")});function Ao(e,t){var n=t?ko(t):To;if(n.test(e)){for(var r,i,o,a=[],s=[],u=n.lastIndex=0;r=n.exec(e);){
// push text token
u<(i=r.index)&&(s.push(o=e.slice(u,i)),a.push(JSON.stringify(o)));
// tag token
var c=Vr(r[1].trim());a.push("_s("+c+")"),s.push({"@binding":c}),u=i+r[0].length}return u<e.length&&(s.push(o=e.slice(u)),a.push(JSON.stringify(o))),{expression:a.join("+"),tokens:s}}}
/*  */var Eo={staticKeys:["staticClass"],transformNode:function(e,t){var n=t.warn||Yr,r=ti(e,"class");r&&Ao(r,t.delimiters)&&n('class="'+r+'": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div class="{{ val }}">, use <div :class="val">.'),r&&(e.staticClass=JSON.stringify(r));var i=ei(e,"class",!1/* getStatic */);i&&(e.classBinding=i)},genData:function(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}}
/*  */;var So,$o={staticKeys:["staticStyle"],transformNode:function(e,t){var n=t.warn||Yr,r=ti(e,"style");r&&(Ao(r,t.delimiters)&&n('style="'+r+'": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div style="{{ val }}">, use <div :style="val">.'),e.staticStyle=JSON.stringify(yi(r)));var i=ei(e,"style",!1/* getStatic */);i&&(e.styleBinding=i)},genData:function(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}}
/*  */,Oo=function(e){return(So=So||document.createElement("div")).innerHTML=e,So.textContent}
/*  */,No=s("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),jo=s("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),Do=s("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),Lo=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,Io="[a-zA-Z_][\\w\\-\\.]*",Mo="((?:"+Io+"\\:)?"+Io+")",Po=new RegExp("^<"+Mo),Ro=/^\s*(\/?)>/,Ho=new RegExp("^<\\/"+Mo+"[^>]*>"),qo=/^<!DOCTYPE [^>]+>/i,Fo=/^<!\--/,Bo=/^<!\[/,Wo=!1;"x".replace(/x(.)?/g,function(e,t){Wo=""===t});
// Special Elements (can contain anything)
var Uo=s("script,style,textarea",!0),zo={},Vo={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t"},Xo=/&(?:lt|gt|quot|amp);/g,Yo=/&(?:lt|gt|quot|amp|#10|#9);/g,Jo=s("pre,textarea",!0),Ko=function(e,t){return e&&Jo(e)&&"\n"===t[0]};
/*  */
var Go,Zo,Qo,ea,ta,na,ra,ia,oa=/^@|^v-on:/,aa=/^v-|^@|^:/,sa=/([^]*?)\s+(?:in|of)\s+([^]*)/,ua=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,ca=/^\(|\)$/g,la=/:(.*)$/,fa=/^:|^v-bind:/,pa=/\.[^.]+/g,da=e(Oo);function ha(e,t,n){return{type:1,tag:e,attrsList:t,attrsMap:function(e){for(var t={},n=0,r=e.length;n<r;n++)!t[e[n].name]||Y||K||Go("duplicate attribute: "+e[n].name),t[e[n].name]=e[n].value;return t}
// for script (e.g. type="x/template") or style, do not decode content
(t),parent:n,children:[]}}
/**
 * Convert HTML string to AST.
 */function va(i,d){Go=d.warn||Yr,na=d.isPreTag||E,ra=d.mustUseProp||E,ia=d.getTagNamespace||E,Qo=Jr(d.modules,"transformNode"),ea=Jr(d.modules,"preTransformNode"),ta=Jr(d.modules,"postTransformNode"),Zo=d.delimiters;var h,v,m=[],o=!1!==d.preserveWhitespace,g=!1,y=!1,t=!1;function b(e){t||(t=!0,Go(e))}function x(e){
// check pre state
e.pre&&(g=!1),na(e.tag)&&(y=!1);
// apply post-transforms
for(var t=0;t<ta.length;t++)ta[t](e,d)}return function(i,d){for(var e,h,v=[],m=d.expectHTML,g=d.isUnaryTag||E,y=d.canBeLeftOpenTag||E,a=0;i;){
// Make sure we're not in a plaintext content element like script/style
if(e=i,h&&Uo(h)){var r=0,o=h.toLowerCase(),t=zo[o]||(zo[o]=new RegExp("([\\s\\S]*?)(</"+o+"[^>]*>)","i")),n=i.replace(t,function(e,t,n){return r=n.length,Uo(o)||"noscript"===o||(t=t.replace(/<!\--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),Ko(o,t)&&(t=t.slice(1)),d.chars&&d.chars(t),""});a+=i.length-n.length,i=n,A(o,a-r,a)}else{var s=i.indexOf("<");if(0===s){
// Comment:
if(Fo.test(i)){var u=i.indexOf("--\x3e");if(0<=u){d.shouldKeepComment&&d.comment(i.substring(4,u)),T(u+3);continue}}
// http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
if(Bo.test(i)){var c=i.indexOf("]>");if(0<=c){T(c+2);continue}}
// Doctype:
var l=i.match(qo);if(l){T(l[0].length);continue}
// End tag:
var f=i.match(Ho);if(f){var p=a;T(f[0].length),A(f[1],p,a);continue}
// Start tag:
var b=C();if(b){k(b),Ko(h,i)&&T(1);continue}}var x=void 0,w=void 0,_=void 0;if(0<=s){for(w=i.slice(s);!(Ho.test(w)||Po.test(w)||Fo.test(w)||Bo.test(w)||(
// < in plain text, be forgiving and treat it as text
_=w.indexOf("<",1))<0);)s+=_,w=i.slice(s);x=i.substring(0,s),T(s)}s<0&&(x=i,i=""),d.chars&&x&&d.chars(x)}if(i===e){d.chars&&d.chars(i),!v.length&&d.warn&&d.warn('Mal-formatted tag at end of template: "'+i+'"');break}}
// Clean up any remaining tags
function T(e){a+=e,i=i.substring(e)}function C(){var e=i.match(Po);if(e){var t,n,r={tagName:e[1],attrs:[],start:a};for(T(e[0].length);!(t=i.match(Ro))&&(n=i.match(Lo));)T(n[0].length),r.attrs.push(n);if(t)return r.unarySlash=t[1],T(t[0].length),r.end=a,r}}function k(e){var t=e.tagName,n=e.unarySlash;m&&("p"===h&&Do(t)&&A(h),y(t)&&h===t&&A(t));for(var r,i,o,a=g(t)||!!n,s=e.attrs.length,u=new Array(s),c=0;c<s;c++){var l=e.attrs[c];
// hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
Wo&&-1===l[0].indexOf('""')&&(""===l[3]&&delete l[3],""===l[4]&&delete l[4],""===l[5]&&delete l[5]);var f=l[3]||l[4]||l[5]||"",p="a"===t&&"href"===l[1]?d.shouldDecodeNewlinesForHref:d.shouldDecodeNewlines;u[c]={name:l[1],value:(r=f,i=p,o=i?Yo:Xo,r.replace(o,function(e){return Vo[e]}))}}a||(v.push({tag:t,lowerCasedTag:t.toLowerCase(),attrs:u}),h=t),d.start&&d.start(t,u,a,e.start,e.end)}function A(e,t,n){var r,i;
// Find the closest opened tag of the same type
if(null==t&&(t=a),null==n&&(n=a),e&&(i=e.toLowerCase()),e)for(r=v.length-1;0<=r&&v[r].lowerCasedTag!==i;r--);else
// If no tag name is provided, clean shop
r=0;if(0<=r){
// Close all the open elements, up the stack
for(var o=v.length-1;r<=o;o--)(r<o||!e)&&d.warn&&d.warn("tag <"+v[o].tag+"> has no matching end tag."),d.end&&d.end(v[o].tag,t,n);
// Remove the open elements from the stack
v.length=r,h=r&&v[r-1].tag}else"br"===i?d.start&&d.start(e,[],!0,t,n):"p"===i&&(d.start&&d.start(e,[],!1,t,n),d.end&&d.end(e,t,n))}A()}(i,{warn:Go,expectHTML:d.expectHTML,isUnaryTag:d.isUnaryTag,canBeLeftOpenTag:d.canBeLeftOpenTag,shouldDecodeNewlines:d.shouldDecodeNewlines,shouldDecodeNewlinesForHref:d.shouldDecodeNewlinesForHref,shouldKeepComment:d.comments,start:function(e,t,n){
// check namespace.
// inherit parent ns if there is one
var r=v&&v.ns||ia(e);
// handle IE svg bug
/* istanbul ignore if */Y&&"svg"===r&&(t=
/* istanbul ignore next */
function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];xa.test(r.name)||(r.name=r.name.replace(wa,""),t.push(r))}return t}(t));var i,o,a,s,u,c=ha(e,t,v);r&&(c.ns=r),"style"!==(i=c).tag&&("script"!==i.tag||i.attrsMap.type&&"text/javascript"!==i.attrsMap.type)||ne()||(c.forbidden=!0,Go("Templates should only be responsible for mapping the state to the UI. Avoid placing tags with side-effects in your templates, such as <"+e+">, as they will not be parsed."));
// apply pre-transforms
for(var l=0;l<ea.length;l++)c=ea[l](c,d)||c;function f(e){"slot"!==e.tag&&"template"!==e.tag||b("Cannot use <"+e.tag+"> as component root element because it may contain multiple nodes."),e.attrsMap.hasOwnProperty("v-for")&&b("Cannot use v-for on stateful component root element because it renders multiple elements.")}
// tree management
if(g||(null!=ti(o=c,"v-pre")&&(o.pre=!0),c.pre&&(g=!0)),na(c.tag)&&(y=!0),g?function(e){var t=e.attrsList.length;if(t)for(var n=e.attrs=new Array(t),r=0;r<t;r++)n[r]={name:e.attrsList[r].name,value:JSON.stringify(e.attrsList[r].value)};else e.pre||(
// non root node in pre blocks with no attributes
e.plain=!0)}(c):c.processed||(
// structural directives
ga(c),function(e){var t=ti(e,"v-if");if(t)e.if=t,ya(e,{exp:t,block:e});else{null!=ti(e,"v-else")&&(e.else=!0);var n=ti(e,"v-else-if");n&&(e.elseif=n)}}(c),null!=ti(a=c,"v-once")&&(a.once=!0),
// element-scope stuff
ma(c,d)),h?m.length||(
// allow root elements with v-if, v-else-if and v-else
h.if&&(c.elseif||c.else)?(f(c),ya(h,{exp:c.elseif,block:c})):b("Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.")):f(h=c),v&&!c.forbidden)if(c.elseif||c.else)s=c,(u=function(e){var t=e.length;for(;t--;){if(1===e[t].type)return e[t];" "!==e[t].text&&Go('text "'+e[t].text.trim()+'" between v-if and v-else(-if) will be ignored.'),e.pop()}}(v.children))&&u.if?ya(u,{exp:s.elseif,block:s}):Go("v-"+(s.elseif?'else-if="'+s.elseif+'"':"else")+" used on element <"+s.tag+"> without corresponding v-if.");else if(c.slotScope){// scoped slot
v.plain=!1;var p=c.slotTarget||'"default"';(v.scopedSlots||(v.scopedSlots={}))[p]=c}else v.children.push(c),c.parent=v;n?x(c):(v=c,m.push(c))},end:function(){
// remove trailing whitespace
var e=m[m.length-1],t=e.children[e.children.length-1];t&&3===t.type&&" "===t.text&&!y&&e.children.pop(),
// pop stack
m.length-=1,v=m[m.length-1],x(e)},chars:function(e){if(v){
// IE textarea placeholder bug
/* istanbul ignore if */
if(!Y||"textarea"!==v.tag||v.attrsMap.placeholder!==e){var t,n,r=v.children;if(e=y||e.trim()?"script"===(t=v).tag||"style"===t.tag?e:da(e):o&&r.length?" ":"")!g&&" "!==e&&(n=Ao(e,Zo))?r.push({type:2,expression:n.expression,tokens:n.tokens,text:e}):" "===e&&r.length&&" "===r[r.length-1].text||r.push({type:3,text:e})}}else e===i?b("Component template requires a root element, rather than just text."):(e=e.trim())&&b('text "'+e+'" outside root element will be ignored.')},comment:function(e){v.children.push({type:3,text:e,isComment:!0})}}),h}function ma(e,t){var n,r,i,o;(r=ei(n=e,"key"))&&("template"===n.tag&&Go("<template> cannot be keyed. Place the key on real elements instead."),n.key=r),
// determine whether this is a plain element after
// removing structural attributes
e.plain=!e.key&&!e.attrsList.length,(o=ei(i=e,"ref"))&&(i.ref=o,i.refInFor=function(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}(i)),function(e){if("slot"===e.tag)e.slotName=ei(e,"name"),e.key&&Go("`key` does not work on <slot> because slots are abstract outlets and can possibly expand into multiple elements. Use the key on a wrapping element instead.");else{var t;"template"===e.tag?(
/* istanbul ignore if */
(t=ti(e,"scope"))&&Go('the "scope" attribute for scoped slots have been deprecated and replaced by "slot-scope" since 2.5. The new "slot-scope" attribute can also be used on plain elements in addition to <template> to denote scoped slots.',!0),e.slotScope=t||ti(e,"slot-scope")):(t=ti(e,"slot-scope"))&&(
/* istanbul ignore if */
e.attrsMap["v-for"]&&Go("Ambiguous combined usage of slot-scope and v-for on <"+e.tag+"> (v-for takes higher priority). Use a wrapper <template> for the scoped slot to make it clearer.",!0),e.slotScope=t);var n=ei(e,"slot");n&&(e.slotTarget='""'===n?'"default"':n,
// preserve slot as an attribute for native shadow DOM compat
// only for non-scoped slots.
"template"===e.tag||e.slotScope||Gr(e,"slot",n))}}(e),function(e){var t;(t=ei(e,"is"))&&(e.component=t);null!=ti(e,"inline-template")&&(e.inlineTemplate=!0)}(e);for(var a=0;a<Qo.length;a++)e=Qo[a](e,t)||e;!function(e){var t,n,r,i,o,a,s,u=e.attrsList;for(t=0,n=u.length;t<n;t++)if(r=i=u[t].name,o=u[t].value,aa.test(r))if(
// mark element as dynamic
e.hasBindings=!0,(
// modifiers
a=ba(r))&&(r=r.replace(pa,"")),fa.test(r))// v-bind
r=r.replace(fa,""),o=Vr(o),s=!1,a&&(a.prop&&(s=!0,"innerHtml"===(r=b(r))&&(r="innerHTML")),a.camel&&(r=b(r)),a.sync&&Qr(e,"update:"+b(r),ri(o,"$event"))),s||!e.component&&ra(e.tag,e.attrsMap.type,r)?Kr(e,r,o):Gr(e,r,o);else if(oa.test(r))// v-on
r=r.replace(oa,""),Qr(e,r,o,a,!1,Go);else{
// parse arg
var c=(// normal directives
r=r.replace(aa,"")).match(la),l=c&&c[1];l&&(r=r.slice(0,-(l.length+1))),d=r,h=i,v=o,m=l,g=a,((p=e).directives||(p.directives=[])).push({name:d,rawName:h,value:v,arg:m,modifiers:g}),p.plain=!1,"model"===r&&_a(e,o)}else{var f=Ao(o,Zo);f&&Go(r+'="'+o+'": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div id="{{ val }}">, use <div :id="val">.'),Gr(e,r,JSON.stringify(o)),
// #6887 firefox doesn't update muted state if set via attribute
// even immediately after element creation
!e.component&&"muted"===r&&ra(e.tag,e.attrsMap.type,r)&&Kr(e,r,"true")}var p,d,h,v,m,g}(e)}function ga(e){var t;if(t=ti(e,"v-for")){var n=function(e){var t=e.match(sa);if(!t)return;var n={};n.for=t[2].trim();var r=t[1].trim().replace(ca,""),i=r.match(ua);i?(n.alias=r.replace(ua,""),n.iterator1=i[1].trim(),i[2]&&(n.iterator2=i[2].trim())):n.alias=r;return n}(t);n?_(e,n):Go("Invalid v-for expression: "+t)}}function ya(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function ba(e){var t=e.match(pa);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}var xa=/^xmlns:NS\d+/,wa=/^NS\d+:/;function _a(e,t){for(var n=e;n;)n.for&&n.alias===t&&Go("<"+e.tag+' v-model="'+t+'">: You are binding v-model directly to a v-for iteration alias. This will not be able to modify the v-for source array because writing to the alias is like modifying a function local variable. Consider using an array of objects and use v-model on an object property instead.'),n=n.parent}
/*  */
/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */function Ta(e){return ha(e.tag,e.attrsList.slice(),e.parent)}var Ca=[Eo,$o,{preTransformNode:function(e,t){if("input"===e.tag){var n,r=e.attrsMap;if(!r["v-model"])return;if((r[":type"]||r["v-bind:type"])&&(n=ei(e,"type")),r.type||n||!r["v-bind"]||(n="("+r["v-bind"]+").type"),n){var i=ti(e,"v-if",!0),o=i?"&&("+i+")":"",a=null!=ti(e,"v-else",!0),s=ti(e,"v-else-if",!0),u=Ta(e);
// process for on the main node
ga(u),Zr(u,"type","checkbox"),ma(u,t),u.processed=!0,// prevent it from double-processed
u.if="("+n+")==='checkbox'"+o,ya(u,{exp:u.if,block:u});
// 2. add radio else-if condition
var c=Ta(e);ti(c,"v-for",!0),Zr(c,"type","radio"),ma(c,t),ya(u,{exp:"("+n+")==='radio'"+o,block:c});
// 3. other
var l=Ta(e);return ti(l,"v-for",!0),Zr(l,":type",n),ma(l,t),ya(u,{exp:i,block:l}),a?u.else=!0:s&&(u.elseif=s),u}}}}]
/*  */;var ka,Aa,Ea,Sa={expectHTML:!0,modules:Ca,directives:{model:function(e,t,n){Wr=n;var r,i,o,a,s,u,c,l,f,p,d,h,v,m,g,y,b=t.value,x=t.modifiers,w=e.tag,_=e.attrsMap.type;if(
// inputs with type="file" are read only and setting the input's
// value will throw an error.
"input"===w&&"file"===_&&Wr("<"+e.tag+' v-model="'+b+'" type="file">:\nFile inputs are read only. Use a v-on:change listener instead.'),e.component)
// component v-model doesn't need extra runtime
return ni(e,b,x),!1;
// ensure runtime directive metadata
if("select"===w)v=e,m=b,y=(y='var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+((g=x)&&g.number?"_n(val)":"val")+"});")+" "+ri(m,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),Qr(v,"change",y,null,!0);else if("input"===w&&"checkbox"===_)u=e,c=b,f=(l=x)&&l.number,p=ei(u,"value")||"null",d=ei(u,"true-value")||"true",h=ei(u,"false-value")||"false",Kr(u,"checked","Array.isArray("+c+")?_i("+c+","+p+")>-1"+("true"===d?":("+c+")":":_q("+c+","+d+")")),Qr(u,"change","var $$a="+c+",$$el=$event.target,$$c=$$el.checked?("+d+"):("+h+");if(Array.isArray($$a)){var $$v="+(f?"_n("+p+")":p)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+ri(c,"$$a.concat([$$v])")+")}else{$$i>-1&&("+ri(c,"$$a.slice(0,$$i).concat($$a.slice($$i+1))")+")}}else{"+ri(c,"$$c")+"}",null,!0);else if("input"===w&&"radio"===_)r=e,i=b,a=(o=x)&&o.number,s=ei(r,"value")||"null",Kr(r,"checked","_q("+i+","+(s=a?"_n("+s+")":s)+")"),Qr(r,"change",ri(i,s),null,!0);else if("input"===w||"textarea"===w)!function(e,t,n){var r=e.attrsMap.type,i=e.attrsMap["v-bind:value"]||e.attrsMap[":value"],o=e.attrsMap["v-bind:type"]||e.attrsMap[":type"];
// warn if v-bind:value conflicts with v-model
// except for inputs with v-bind:type
if(i&&!o){var a=e.attrsMap["v-bind:value"]?"v-bind:value":":value";Wr(a+'="'+i+'" conflicts with v-model on the same element because the latter already expands to a value binding internally')}var s=n||{},u=s.lazy,c=s.number,l=s.trim,f=!u&&"range"!==r,p=u?"change":"range"===r?li:"input",d="$event.target.value";l&&(d="$event.target.value.trim()"),c&&(d="_n("+d+")");var h=ri(t,d);f&&(h="if($event.target.composing)return;"+h),Kr(e,"value","("+t+")"),Qr(e,p,h,null,!0),(l||c)&&Qr(e,"blur","$forceUpdate()")}(e,b,x);else{if(!F.isReservedTag(w))
// component v-model doesn't need extra runtime
return ni(e,b,x),!1;Wr("<"+e.tag+' v-model="'+b+"\">: v-model is not supported on this element type. If you are working with contenteditable, it's recommended to wrap a library dedicated for that purpose inside a custom component.")}return!0},text:function(e,t){t.value&&Kr(e,"textContent","_s("+t.value+")")}
/*  */,html:function(e,t){t.value&&Kr(e,"innerHTML","_s("+t.value+")")}}
/*  */,isPreTag:function(e){return"pre"===e},isUnaryTag:No,mustUseProp:er,canBeLeftOpenTag:jo,isReservedTag:hr,getTagNamespace:vr,staticKeys:(ka=Ca,ka.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(","))},$a=e(function(e){return s("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(e?","+e:""))});
/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function Oa(e,t){e&&(Aa=$a(t.staticKeys||""),Ea=t.isReservedTag||E,
// first pass: mark all non-static nodes.
function e(t){t.static=function(e){if(2===e.type)// expression
return!1;if(3===e.type)// text
return!0;return!(!e.pre&&(e.hasBindings||e.if||e.for||u(e.tag)||// not a built-in
!Ea(e.tag)||function(e){for(;e.parent;){if("template"!==(e=e.parent).tag)return!1;if(e.for)return!0}return!1}
/*  */(e)||!Object.keys(e).every(Aa)))}(t);if(1===t.type){
// do not make component slot content static. this avoids
// 1. components not able to mutate slot nodes
// 2. static slot content fails for hot-reloading
if(!Ea(t.tag)&&"slot"!==t.tag&&null==t.attrsMap["inline-template"])return;for(var n=0,r=t.children.length;n<r;n++){var i=t.children[n];e(i),i.static||(t.static=!1)}if(t.ifConditions)for(var o=1,a=t.ifConditions.length;o<a;o++){var s=t.ifConditions[o].block;e(s),s.static||(t.static=!1)}}}(e),
// second pass: mark static roots.
function e(t,n){if(1===t.type){
// For a node to qualify as a static root, it should have children that
// are not just static text. Otherwise the cost of hoisting out will
// outweigh the benefits and it's better off to just always render it fresh.
if((t.static||t.once)&&(t.staticInFor=n),t.static&&t.children.length&&(1!==t.children.length||3!==t.children[0].type))return void(t.staticRoot=!0);if(t.staticRoot=!1,t.children)for(var r=0,i=t.children.length;r<i;r++)e(t.children[r],n||!!t.for);if(t.ifConditions)for(var o=1,a=t.ifConditions.length;o<a;o++)e(t.ifConditions[o].block,n)}}(e,!1))}var Na=/^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,ja=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,Da={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},La={esc:"Escape",tab:"Tab",enter:"Enter",space:" ",
// #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete"]},Ia=function(e){return"if("+e+")return null;"},Ma={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:Ia("$event.target !== $event.currentTarget"),ctrl:Ia("!$event.ctrlKey"),shift:Ia("!$event.shiftKey"),alt:Ia("!$event.altKey"),meta:Ia("!$event.metaKey"),left:Ia("'button' in $event && $event.button !== 0"),middle:Ia("'button' in $event && $event.button !== 1"),right:Ia("'button' in $event && $event.button !== 2")};function Pa(e,t,n){var r=t?"nativeOn:{":"on:{";for(var i in e)r+='"'+i+'":'+Ra(i,e[i])+",";return r.slice(0,-1)+"}"}function Ra(t,e){if(!e)return"function(){}";if(Array.isArray(e))return"["+e.map(function(e){return Ra(t,e)}).join(",")+"]";var n=ja.test(e.value),r=Na.test(e.value);if(e.modifiers){var i="",o="",a=[];for(var s in e.modifiers)if(Ma[s])o+=Ma[s],
// left/right
Da[s]&&a.push(s);else if("exact"===s){var u=e.modifiers;o+=Ia(["ctrl","shift","alt","meta"].filter(function(e){return!u[e]}).map(function(e){return"$event."+e+"Key"}).join("||"))}else a.push(s);
/* istanbul ignore if */
return a.length&&(i+="if(!('button' in $event)&&"+a.map(Ha).join("&&")+")return null;"),
// Make sure modifiers like prevent and stop get executed after key filtering
o&&(i+=o),"function($event){"+i+(n?"return "+e.value+"($event)":r?"return ("+e.value+")($event)":e.value)+"}"}return n||r?e.value:"function($event){"+e.value+"}"
/* istanbul ignore if */}function Ha(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=Da[e],r=La[e];return"_k($event.keyCode,"+JSON.stringify(e)+","+JSON.stringify(n)+",$event.key,"+JSON.stringify(r)+")"}
/*  */
/*  */
var qa={on:function(e,t){t.modifiers&&se("v-on without argument does not support modifiers."),e.wrapListeners=function(e){return"_g("+e+","+t.value+")"}}
/*  */,bind:function(t,n){t.wrapData=function(e){return"_b("+e+",'"+t.tag+"',"+n.value+","+(n.modifiers&&n.modifiers.prop?"true":"false")+(n.modifiers&&n.modifiers.sync?",true":"")+")"}},cloak:C}
/*  */,Fa=function(e){this.options=e,this.warn=e.warn||Yr,this.transforms=Jr(e.modules,"transformCode"),this.dataGenFns=Jr(e.modules,"genData"),this.directives=_(_({},qa),e.directives);var t=e.isReservedTag||E;this.maybeComponent=function(e){return!t(e.tag)},this.onceId=0,this.staticRenderFns=[]};function Ba(e,t){var n=new Fa(t);return{render:"with(this){return "+(e?Wa(e,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function Wa(e,t){if(e.staticRoot&&!e.staticProcessed)return Ua(e,t);if(e.once&&!e.onceProcessed)return za(e,t);if(e.for&&!e.forProcessed)return function(e,t,n,r){var i=e.for,o=e.alias,a=e.iterator1?","+e.iterator1:"",s=e.iterator2?","+e.iterator2:"";t.maybeComponent(e)&&"slot"!==e.tag&&"template"!==e.tag&&!e.key&&t.warn("<"+e.tag+' v-for="'+o+" in "+i+'">: component lists rendered with v-for should have explicit keys. See https://vuejs.org/guide/list.html#key for more info.',!0/* tip */);// avoid recursion
return e.forProcessed=!0,(r||"_l")+"(("+i+"),function("+o+a+s+"){return "+(n||Wa)(e,t)+"})"}(e,t);if(e.if&&!e.ifProcessed)return Va(e,t);if("template"!==e.tag||e.slotTarget){if("slot"===e.tag)return function(e,t){var n=e.slotName||'"default"',r=Ja(e,t),i="_t("+n+(r?","+r:""),o=e.attrs&&"{"+e.attrs.map(function(e){return b(e.name)+":"+e.value}).join(",")+"}",a=e.attrsMap["v-bind"];!o&&!a||r||(i+=",null");o&&(i+=","+o);a&&(i+=(o?"":",null")+","+a);return i+")"}
// componentName is el.component, take it as argument to shun flow's pessimistic refinement
(e,t);
// component or element
var n;if(e.component)a=e.component,u=t,c=(s=e).inlineTemplate?null:Ja(s,u,!0),n="_c("+a+","+Xa(s,u)+(c?","+c:"")+")";else{var r=e.plain?void 0:Xa(e,t),i=e.inlineTemplate?null:Ja(e,t,!0);n="_c('"+e.tag+"'"+(r?","+r:"")+(i?","+i:"")+")"}
// module transforms
for(var o=0;o<t.transforms.length;o++)n=t.transforms[o](e,n);return n}return Ja(e,t)||"void 0";var a,s,u,c}
// hoist static sub-trees out
function Ua(e,t){return e.staticProcessed=!0,t.staticRenderFns.push("with(this){return "+Wa(e,t)+"}"),"_m("+(t.staticRenderFns.length-1)+(e.staticInFor?",true":"")+")"}
// v-once
function za(e,t){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return Va(e,t);if(e.staticInFor){for(var n="",r=e.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+Wa(e,t)+","+t.onceId+++","+n+")":(t.warn("v-once can only be used inside v-for that is keyed. "),Wa(e,t))}return Ua(e,t)}function Va(e,t,n,r){// avoid recursion
return e.ifProcessed=!0,function e(t,n,r,i){if(!t.length)return i||"_e()";var o=t.shift();return o.exp?"("+o.exp+")?"+a(o.block)+":"+e(t,n,r,i):""+a(o.block);
// v-if with v-once should generate code like (a)?_m(0):_m(1)
function a(e){return r?r(e,n):e.once?za(e,n):Wa(e,n)}}(e.ifConditions.slice(),t,n,r)}function Xa(e,t){var n,r,i="{",o=function(e,t){var n=e.directives;if(!n)return;var r,i,o,a,s="directives:[",u=!1;for(r=0,i=n.length;r<i;r++){o=n[r],a=!0;var c=t.directives[o.name];c&&(
// compile-time directive that manipulates AST.
// returns true if it also needs a runtime counterpart.
a=!!c(e,o,t.warn)),a&&(u=!0,s+='{name:"'+o.name+'",rawName:"'+o.rawName+'"'+(o.value?",value:("+o.value+"),expression:"+JSON.stringify(o.value):"")+(o.arg?',arg:"'+o.arg+'"':"")+(o.modifiers?",modifiers:"+JSON.stringify(o.modifiers):"")+"},")}if(u)return s.slice(0,-1)+"]"}(e,t);
// directives first.
// directives may mutate the el's other properties before they are generated.
o&&(i+=o+","),
// key
e.key&&(i+="key:"+e.key+","),
// ref
e.ref&&(i+="ref:"+e.ref+","),e.refInFor&&(i+="refInFor:true,"),
// pre
e.pre&&(i+="pre:true,"),
// record original tag name for components using "is" attribute
e.component&&(i+='tag:"'+e.tag+'",');
// module data generation functions
for(var a=0;a<t.dataGenFns.length;a++)i+=t.dataGenFns[a](e);
// attributes
// inline-template
if(e.attrs&&(i+="attrs:{"+Za(e.attrs)+"},"),
// DOM props
e.props&&(i+="domProps:{"+Za(e.props)+"},"),
// event handlers
e.events&&(i+=Pa(e.events,!1,t.warn)+","),e.nativeEvents&&(i+=Pa(e.nativeEvents,!0,t.warn)+","),
// slot target
// only for non-scoped slots
e.slotTarget&&!e.slotScope&&(i+="slot:"+e.slotTarget+","),
// scoped slots
e.scopedSlots&&(i+=(n=e.scopedSlots,r=t,"scopedSlots:_u(["+Object.keys(n).map(function(e){return Ya(e,n[e],r)}).join(",")+"]),")),
// component v-model
e.model&&(i+="model:{value:"+e.model.value+",callback:"+e.model.callback+",expression:"+e.model.expression+"},"),e.inlineTemplate){var s=function(e,t){var n=e.children[0];1===e.children.length&&1===n.type||t.warn("Inline-template components must have exactly one child element.");if(1===n.type){var r=Ba(n,t.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}(e,t);s&&(i+=s+",")}return i=i.replace(/,$/,"")+"}",
// v-bind data wrap
e.wrapData&&(i=e.wrapData(i)),
// v-on data wrap
e.wrapListeners&&(i=e.wrapListeners(i)),i}function Ya(e,t,n){return t.for&&!t.forProcessed?(r=e,o=n,a=(i=t).for,s=i.alias,u=i.iterator1?","+i.iterator1:"",c=i.iterator2?","+i.iterator2:"",i.forProcessed=!0,"_l(("+a+"),function("+s+u+c+"){return "+Ya(r,i,o)+"})"):"{key:"+e+",fn:"+("function("+String(t.slotScope)+"){return "+("template"===t.tag?t.if?t.if+"?"+(Ja(t,n)||"undefined")+":undefined":Ja(t,n)||"undefined":Wa(t,n))+"}")+"}";var r,i,o,a,s,u,c}function Ja(e,t,n,r,i){var o=e.children;if(o.length){var a=o[0];
// optimize single v-for
if(1===o.length&&a.for&&"template"!==a.tag&&"slot"!==a.tag)return(r||Wa)(a,t);var s=n?
// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function(e,t){for(var n=0,r=0;r<e.length;r++){var i=e[r];if(1===i.type){if(Ka(i)||i.ifConditions&&i.ifConditions.some(function(e){return Ka(e.block)})){n=2;break}(t(i)||i.ifConditions&&i.ifConditions.some(function(e){return t(e.block)}))&&(n=1)}}return n}(o,t.maybeComponent):0,u=i||Ga;return"["+o.map(function(e){return u(e,t)}).join(",")+"]"+(s?","+s:"")}}function Ka(e){return void 0!==e.for||"template"===e.tag||"slot"===e.tag}function Ga(e,t){return 1===e.type?Wa(e,t):3===e.type&&e.isComment?(r=e,"_e("+JSON.stringify(r.text)+")"):"_v("+(2===(n=e).type?n.expression:Qa(JSON.stringify(n.text)))+")";var n,r}function Za(e){for(var t="",n=0;n<e.length;n++){var r=e[n];
/* istanbul ignore if */t+='"'+r.name+'":'+Qa(r.value)+","}return t.slice(0,-1)}
// #3895, #4268
function Qa(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}
/*  */
// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var es=new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),ts=new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)"),ns=/'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
// these unary operators should not be used as property/method names
// detect problematic expressions in a template
function rs(e){var t=[];return e&&function e(t,n){if(1===t.type){for(var r in t.attrsMap)if(aa.test(r)){var i=t.attrsMap[r];i&&("v-for"===r?os(t,'v-for="'+i+'"',n):oa.test(r)?is(i,r+'="'+i+'"',n):ss(i,r+'="'+i+'"',n))}if(t.children)for(var o=0;o<t.children.length;o++)e(t.children[o],n)}else 2===t.type&&ss(t.expression,t.text,n)}(e,t),t}function is(e,t,n){var r=e.replace(ns,""),i=r.match(ts);i&&"$"!==r.charAt(i.index-1)&&n.push('avoid using JavaScript unary operator as property name: "'+i[0]+'" in expression '+t.trim()),ss(e,t,n)}function os(e,t,n){ss(e.for||"",t,n),as(e.alias,"v-for alias",t,n),as(e.iterator1,"v-for iterator",t,n),as(e.iterator2,"v-for iterator",t,n)}function as(t,n,r,i){if("string"==typeof t)try{new Function("var "+t+"=_")}catch(e){i.push("invalid "+n+' "'+t+'" in expression: '+r.trim())}}function ss(t,n,r){try{new Function("return "+t)}catch(e){var i=t.replace(ns,"").match(es);i?r.push('avoid using JavaScript keyword as property name: "'+i[0]+'"\n  Raw expression: '+n.trim()):r.push("invalid expression: "+e.message+" in\n\n    "+t+"\n\n  Raw expression: "+n.trim()+"\n")}}
/*  */function us(t,n){try{return new Function(t)}catch(e){return n.push({err:e,code:t}),C}}
/*  */
// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var cs,ls,fs=(cs=function(e,t){var n=va(e.trim(),t);!1!==t.optimize&&Oa(n,t);var r=Ba(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}},function(s){function e(e,t){var n=Object.create(s),r=[],i=[];if(n.warn=function(e,t){(t?i:r).push(e)},t)
// copy other options
for(var o in
// merge custom modules
t.modules&&(n.modules=(s.modules||[]).concat(t.modules)),
// merge custom directives
t.directives&&(n.directives=_(Object.create(s.directives||null),t.directives)),t)"modules"!==o&&"directives"!==o&&(n[o]=t[o]);var a=cs(e,n);return r.push.apply(r,rs(a.ast)),a.errors=r,a.tips=i,a}return{compile:e,compileToFunctions:(u=e,c=Object.create(null),function(e,t,n){var r=(t=_({},t)).warn||se;delete t.warn;
// detect possible CSP restriction
try{new Function("return 1")}catch(e){e.toString().match(/unsafe-eval|CSP/)&&r("It seems you are using the standalone build of Vue.js in an environment with Content Security Policy that prohibits unsafe-eval. The template compiler cannot work in this environment. Consider relaxing the policy to allow unsafe-eval or pre-compiling your templates into render functions.")}
// check cache
var i=t.delimiters?String(t.delimiters)+e:e;if(c[i])return c[i];
// compile
var o=u(e,t);
// check compilation errors/tips
o.errors&&o.errors.length&&r("Error compiling template:\n\n"+e+"\n\n"+o.errors.map(function(e){return"- "+e}).join("\n")+"\n",n),o.tips&&o.tips.length&&o.tips.forEach(function(e){return ue(e,n)});
// turn code into functions
var a={},s=[];return a.render=us(o.render,s),a.staticRenderFns=o.staticRenderFns.map(function(e){return us(e,s)}),o.errors&&o.errors.length||!s.length||r("Failed to generate render function:\n\n"+s.map(function(e){var t=e.err,n=e.code;return t.toString()+" in\n\n"+n+"\n"}).join("\n"),n),c[i]=a})};var u,c;
/*  */})(Sa).compileToFunctions;
/*  */function ps(e){return(ls=ls||document.createElement("div")).innerHTML=e?'<a href="\n"/>':'<div a="\n"/>',0<ls.innerHTML.indexOf("&#10;")}
// #3663: IE encodes newlines inside attribute values while other browsers don't
var ds=!!U&&ps(!1),hs=!!U&&ps(!0),vs=e(function(e){var t=yr(e);return t&&t.innerHTML}),ms=Fn.prototype.$mount;
// #6828: chrome encodes content in a[href]
return Fn.prototype.$mount=function(e,t){
/* istanbul ignore if */
if((e=e&&yr(e))===document.body||e===document.documentElement)return se("Do not mount Vue to <html> or <body> - mount to normal elements instead."),this;var n=this.$options;
// resolve template/el and convert to render function
if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(
/* istanbul ignore if */
(r=vs(r))||se("Template element not found or is empty: "+n.template,this));else{if(!r.nodeType)return se("invalid template option:"+r,this),this;r=r.innerHTML}else e&&(r=
/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function(e){{if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}}(e));if(r){
/* istanbul ignore if */
F.performance&&ot&&ot("compile");var i=fs(r,{shouldDecodeNewlines:ds,shouldDecodeNewlinesForHref:hs,delimiters:n.delimiters,comments:n.comments},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a,
/* istanbul ignore if */
F.performance&&ot&&(ot("compile end"),at("vue "+this._name+" compile","compile","compile end"))}}return ms.call(this,e,t)},Fn.compile=fs,Fn});
//# sourceMappingURL=lib.js.map