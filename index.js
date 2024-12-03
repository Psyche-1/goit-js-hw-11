import{S as w,i as v}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const S=document.querySelector(".gallery");function x(o){S.innerHTML="";const s=[];for(const r of o){const n=document.createElement("li");n.classList.add("gallery-item");const e=document.createElement("a");e.classList.add("gallery-link"),e.href=r.largeImageURL;const t=document.createElement("img");t.classList.add("gallery-image"),t.setAttribute("src",r.webformatURL),t.setAttribute("alt",r.tags);const a=document.createElement("div");a.classList.add("gallery-descr-container");const L=document.createElement("div"),E=document.createElement("div"),b=document.createElement("div"),C=document.createElement("div"),c=document.createElement("p"),l=document.createElement("p"),i=document.createElement("p"),d=document.createElement("p"),u=document.createElement("p"),m=document.createElement("p"),p=document.createElement("p"),g=document.createElement("p");c.classList.add("gallery-descr"),l.classList.add("gallery-descr"),i.classList.add("gallery-descr"),d.classList.add("gallery-descr"),u.classList.add("gallery-descr"),m.classList.add("gallery-descr"),p.classList.add("gallery-descr"),g.classList.add("gallery-descr"),c.textContent="Likes",u.textContent=`${r.likes}`,l.textContent="Views",m.textContent=`${r.views}`,i.textContent="Comments",p.textContent=`${r.comments}`,d.textContent="Downloads",g.textContent=`${r.downloads}`,e.append(t),L.append(c,u),E.append(l,m),b.append(i,p),C.append(d,g),a.append(L,E,b,C),e.append(a),n.append(e),s.push(n)}S.append(...s),new w(".gallery a",{captionDelay:250,captionsData:"alt"})}const q=document.querySelector("#search-field"),y=document.querySelector(".loading"),f=document.querySelector(".gallery");let h;function M(){y.classList.add("visually-hidden");const o=q.value.trim();if(!o)return;const r=`https://pixabay.com/api/?${new URLSearchParams({key:"47410848-ca90cbe53fb16c342854d4794",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;fetch(r).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()}).then(n=>{if(h=n.hits,!h.length){v.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red"}),f.innerHTML="";return}y.classList.remove("visually-hidden"),f.innerHTML="",x(h),y.classList.add("visually-hidden")}).catch(n=>{v.show({message:n,backgroundColor:"red"}),f.innerHTML=""})}const O=document.querySelector("button");O.addEventListener("click",M);
//# sourceMappingURL=index.js.map
