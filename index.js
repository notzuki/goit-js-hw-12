import{a as p,S as m,i as c}from"./assets/vendor-5YrzWRhu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y="51729015-e356512e01098e6cfb5d1c735",h="https://pixabay.com/api/",g=15;async function L(s,t){const o={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:g};return(await p.get(h,{params:o})).data}const l=document.querySelector(".gallery"),u=document.querySelector(".loader");document.querySelector(".load-more");const S=new m(".gallery a",{captionsData:"alt",captionDelay:250});function q(s){const t=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:r,views:i,comments:d,downloads:f})=>`
 <li>
 <a href="${n}">
 <img src="${o}" alt="${e}" />
 </a>
 <div class="info">
 <p>Likes: ${r}</p>
 <p>Views: ${i}</p>
 <p>Comments: ${d}</p>
 <p>Downloads: ${f}</p>
 </div>
 </li>
 `).join("");l.insertAdjacentHTML("beforeend",t),S.refresh()}function E(){l.innerHTML=""}function P(){u.classList.remove("hidden")}function b(){u.classList.add("hidden")}const a=document.querySelector(".form"),v=a.querySelector('input[name="search-text"]');a.addEventListener("submit",s=>{s.preventDefault();const t=v.value.trim();if(!t){c.error({title:"Error",message:"Please enter a search query!"});return}E(),P(),L(t).then(o=>{if(!o.hits.length){c.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}),a.reset();return}q(o.hits),a.reset()}).catch(o=>{c.error({title:"Error",message:"Something went wrong. Please try again later."}),console.error(o)}).finally(()=>{b()})});
//# sourceMappingURL=index.js.map
