import{S as b,i as C}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();const S=document.querySelector(".gallery"),E=[];function w(c){for(const r of c){const a=document.createElement("li");a.classList.add("gallery-item");const t=document.createElement("a");t.classList.add("gallery-link"),t.href=r.largeImageURL;const e=document.createElement("img");e.classList.add("gallery-image"),e.setAttribute("src",r.webformatURL),e.setAttribute("alt",r.tags);const n=document.createElement("div");n.classList.add("gallery-descr-container");const o=document.createElement("div"),y=document.createElement("div"),h=document.createElement("div"),L=document.createElement("div"),s=document.createElement("p"),l=document.createElement("p"),i=document.createElement("p"),d=document.createElement("p"),m=document.createElement("p"),u=document.createElement("p"),p=document.createElement("p"),g=document.createElement("p");s.classList.add("gallery-descr"),l.classList.add("gallery-descr"),i.classList.add("gallery-descr"),d.classList.add("gallery-descr"),m.classList.add("gallery-descr"),u.classList.add("gallery-descr"),p.classList.add("gallery-descr"),g.classList.add("gallery-descr"),s.textContent="Likes",m.textContent=`${r.likes}`,l.textContent="Views",u.textContent=`${r.views}`,i.textContent="Comments",p.textContent=`${r.comments}`,d.textContent="Downloads",g.textContent=`${r.downloads}`,t.append(e),o.append(s,m),y.append(l,u),h.append(i,p),L.append(d,g),n.append(o,y,h,L),t.append(n),a.append(t),E.push(a)}S.append(...E),new b(".gallery a",{captionDelay:250,captionsData:"alt"})}const v=document.querySelector("#search-field");let f;function x(){const c=v.value.trim();if(!c)return;const a=`https://pixabay.com/api/?${new URLSearchParams({key:"47410848-ca90cbe53fb16c342854d4794",q:c,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;fetch(a).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(f=t.hits,!f.length){C.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red"});return}w(f)}).catch(t=>console.log(t))}const q=document.querySelector("button");q.addEventListener("click",x);
//# sourceMappingURL=index.js.map