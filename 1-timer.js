import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as S,i as f}from"./assets/vendor-BbbuE1sJ.js";let s=null;const a=document.querySelector("#datetime-picker"),n=document.querySelector("#Start"),u=document.querySelector("[data-days]"),d=document.querySelector("[data-hours]"),l=document.querySelector("[data-minutes]"),m=document.querySelector("[data-seconds]");function C(t){if(t.length>0){const e=t[0];e>new Date?(s=e,n.disabled=!1):(f.error({title:"Error",message:"Please choose a date in the future"}),n.disabled=!0)}}const x={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:C};S(a,x);function o(t){return String(t).padStart(2,"0")}function b(t){const y=Math.floor(t/864e5),h=Math.floor(t%864e5/36e5),p=Math.floor(t%864e5%36e5/6e4),D=Math.floor(t%864e5%36e5%6e4/1e3);return{days:y,hours:h,minutes:p,seconds:D}}function g(){const t=s-new Date;if(t<=0)u.textContent="00",d.textContent="00",l.textContent="00",m.textContent="00",n.disabled=!1,a.disabled=!1,f.success({title:"Success",message:"Time's up!"});else{const{days:e,hours:r,minutes:i,seconds:c}=b(t);u.textContent=o(e),d.textContent=o(r),l.textContent=o(i),m.textContent=o(c)}}n.addEventListener("click",function(){s&&(n.disabled=!0,a.disabled=!0,setInterval(g,1e3))});
//# sourceMappingURL=1-timer.js.map
