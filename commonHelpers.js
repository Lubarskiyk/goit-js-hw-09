(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l="/goit-js-hw-09/assets/gallery-Dtf2kSdX.png",c="/goit-js-hw-09/assets/form-BL2zT2Mt.png";document.querySelector("#app").innerHTML=`
<h1 class="home-title">Welcom to Homework 9</h1>
<ul class="home-img">
      <li>
        <a href="./1-gallery.html"
          ><img src="${l}" alt="Gallery" width="400"
        /></a>
      </li>
      <li>
        <a href="./2-form.html"><img src="${c}" alt="Form"  width="400"/></a>
      </li>
    </ul>
`;
//# sourceMappingURL=commonHelpers.js.map
