import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */function a(t,e){return new Promise((s,i)=>{const r=Math.random()>.3;setTimeout(()=>{r?s({position:t,delay:e}):i({position:t,delay:e})},e)})}const l=document.querySelector(".form");l.addEventListener("submit",t=>{t.preventDefault();const e=new FormData(t.target),s=Number(e.get("delay")),i=Number(e.get("step")),r=Number(e.get("amount"));let m=1,n=s;for(;m<=r;)a(m,n).then(o=>{iziToast.success({title:"Promise fulfilled",message:`✅ Fulfilled promise ${o.position} in ${o.delay}ms`,position:"topCenter"})}).catch(o=>{iziToast.error({title:"Promise rejected",message:`❌ Rejected promise ${o.position} in ${o.delay}ms`,position:"topCenter"})}),m+=1,n+=i;l.reset()});
//# sourceMappingURL=commonHelpers3.js.map