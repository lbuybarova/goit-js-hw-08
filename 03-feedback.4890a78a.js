!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return m.Date.now()};function b(e,t,n){var r,a,o,u,l,f,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=r,i=a;return r=a=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,l=setTimeout(h,t),s?b(e):u}function O(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-c>=o}function h(){var e=p();if(O(e))return w(e);l=setTimeout(h,function(e){var n=t-(e-f);return m?g(n,o-(e-c)):n}(e))}function w(e){return l=void 0,d&&r?b(e):(r=a=void 0,u)}function S(){var e=p(),n=O(e);if(r=arguments,a=this,f=e,n){if(void 0===l)return j(f);if(m)return l=setTimeout(h,t),b(f)}return void 0===l&&(l=setTimeout(h,t)),u}return t=T(t)||0,y(n)&&(s=!!n.leading,o=(m="maxWait"in n)?v(T(n.maxWait)||0,t):o,d="trailing"in n?!!n.trailing:d),S.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=f=a=l=void 0},S.flush=function(){return void 0===l?u:w(p())},S}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function T(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var i=u.test(t);return i||l.test(t)?f(t.slice(2),i?2:8):o.test(t)?NaN:+t}t=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),b(e,t,{leading:r,maxWait:t,trailing:a})};var j="feedback-form-state",O=document.querySelector(".feedback-form"),h={};O.addEventListener("input",e(t)((function(e){h.email=O.elements.email.value,h.message=O.elements.message.value,h[e.target.name]=e.target.value,localStorage.setItem(j,JSON.stringify(h))}),500)),function(){var e=localStorage.getItem(j);if(e){var t=JSON.parse(e);void 0===t.email&&(t.email=""),void 0===t.message&&(t.message=""),O.elements.email.value=t.email,O.elements.message.value=t.message}}(),O.addEventListener("submit",(function(e){e.preventDefault();var t={};t[e.currentTarget.elements[0].name]=e.currentTarget.elements[0].value,t[e.currentTarget.elements[1].name]=e.currentTarget.elements[1].value,e.currentTarget.elements[0].value&&e.currentTarget.elements[1].value?(console.log(t),e.currentTarget.reset(),localStorage.removeItem(j)):alert("Enter email and message")}))}();
//# sourceMappingURL=03-feedback.4890a78a.js.map
