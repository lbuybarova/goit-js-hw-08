function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,o=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var r,i,a,o,u,f,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,a=i;return r=i=void 0,l=t,o=e.apply(a,n)}function T(e){return l=e,u=setTimeout(h,t),c?y(e):o}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=a}function h(){var e=g();if(j(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-f);return s?d(n,a-(e-l)):n}(e))}function w(e){return u=void 0,v&&r?y(e):(r=i=void 0,o)}function O(){var e=g(),n=j(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return T(f);if(s)return u=setTimeout(h,t),y(f)}return void 0===u&&(u=setTimeout(h,t)),o}return t=b(t)||0,p(n)&&(c=!!n.leading,a=(s="maxWait"in n)?m(b(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=i=u=void 0},O.flush=function(){return void 0===u?o:w(g())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||o.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:r,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form"),T={};y.addEventListener("input",e(t)((e=>{T.email=y.elements.email.value,T.message=y.elements.message.value,T[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(T))}),500)),function(){const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);void 0===t.email&&(t.email=""),void 0===t.message&&(t.message=""),y.elements.email.value=t.email,y.elements.message.value=t.message}}(),y.addEventListener("submit",(e=>{e.preventDefault();const t={};t[e.currentTarget.elements[0].name]=e.currentTarget.elements[0].value,t[e.currentTarget.elements[1].name]=e.currentTarget.elements[1].value,e.currentTarget.elements[0].value&&e.currentTarget.elements[1].value?(console.log(t),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")):alert("Enter email and message")}));
//# sourceMappingURL=03-feedback.c9f7c0a5.js.map
