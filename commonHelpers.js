import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const o=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),l=document.querySelector("body");let t=null;e.disabled=!0;function d(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,0)}`}o.addEventListener("click",()=>{t===null&&(o.disabled=!0,e.disabled=!1,t=setInterval(()=>{const r=d();l.style.backgroundColor=r},1e3))});e.addEventListener("click",()=>{t!==null&&(clearInterval(t),t=null,o.disabled=!1,e.disabled=!0)});
//# sourceMappingURL=commonHelpers.js.map
