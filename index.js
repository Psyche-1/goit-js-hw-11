import{S,i as v}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();const E=document.querySelector(".gallery"),b=[];function w(s){E.innerHTML="";for(const r of s){const a=document.createElement("li");a.classList.add("gallery-item");const t=document.createElement("a");t.classList.add("gallery-link"),t.href=r.largeImageURL;const e=document.createElement("img");e.classList.add("gallery-image"),e.setAttribute("src",r.webformatURL),e.setAttribute("alt",r.tags);const n=document.createElement("div");n.classList.add("gallery-descr-container");const o=document.createElement("div"),f=document.createElement("div"),h=document.createElement("div"),L=document.createElement("div"),c=document.createElement("p"),l=document.createElement("p"),i=document.createElement("p"),d=document.createElement("p"),m=document.createElement("p"),u=document.createElement("p"),p=document.createElement("p"),g=document.createElement("p");c.classList.add("gallery-descr"),l.classList.add("gallery-descr"),i.classList.add("gallery-descr"),d.classList.add("gallery-descr"),m.classList.add("gallery-descr"),u.classList.add("gallery-descr"),p.classList.add("gallery-descr"),g.classList.add("gallery-descr"),c.textContent="Likes",m.textContent=`${r.likes}`,l.textContent="Views",u.textContent=`${r.views}`,i.textContent="Comments",p.textContent=`${r.comments}`,d.textContent="Downloads",g.textContent=`${r.downloads}`,t.append(e),o.append(c,m),f.append(l,u),h.append(i,p),L.append(d,g),n.append(o,f,h,L),t.append(n),a.append(t),b.push(a)}E.append(...b),new S(".gallery a",{captionDelay:250,captionsData:"alt"})}const x=document.querySelector("#search-field"),C=document.querySelector(".loading"),q=document.querySelector(".gallery");let y;function O(){C.classList.add("visually-hidden");const s=x.value.trim();if(!s)return;const a=`https://pixabay.com/api/?${new URLSearchParams({key:"47410848-ca90cbe53fb16c342854d4794",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;fetch(a).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(y=t.hits,!y.length){v.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red"});return}C.classList.remove("visually-hidden"),q.innerHTML="",w(y)}).catch(t=>console.log(t))}const P=document.querySelector("button");P.addEventListener("click",O);
//# sourceMappingURL=index.js.map
