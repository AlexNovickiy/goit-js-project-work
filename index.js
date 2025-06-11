import{a as v,i as b,S as J}from"./assets/vendor-Cq1ZEsD1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const a={burgerBtnOpenMenu:document.querySelector(".icon-burger"),burgerBtnCloseMenu:document.querySelector(".icon-close"),headerMenuContainer:document.querySelector(".header-menu-container"),loaderOverlay:document.querySelector(".loader-in"),modalForm:document.querySelector(".feedback-mod"),stars:document.querySelectorAll(".star-rating path"),nameInput:document.querySelector('.feedback-mod [name="name"]'),messageInput:document.querySelector('.feedback-mod [name="message"]'),modalOverlayArtists:document.querySelector(".modal-overlay-artists"),closeBtn:document.querySelector(".close-btn-mod"),feedbackBtn:document.querySelector(".feedback-btn"),menuAnchorAbout:document.querySelector("#menu-anchor-about"),menuAnchorArtists:document.querySelector("#menu-anchor-artists"),menuAnchorReviews:document.querySelector("#menu-anchor-reviews"),artistsGrid:document.getElementById("artists-card-id"),loadMoreBtn:document.getElementById("load-more-btn"),loader:document.querySelector(".modal-loader"),modalOverlay:document.querySelector(".modal-overlay"),body:document.querySelector("body"),closeModalBtn:document.querySelector(".close-btn"),titleName:document.querySelector(".modal-info-title"),aboutArtist:document.querySelector(".modal-info-card"),modalAlboms:document.querySelector(".modal-alboms"),artistsSection:document.querySelector("#artists-card-id")},g="https://sound-wave.b.goit.study/api",C="/artists",Q="/albums",P="/feedbacks";async function X(e){try{return(await v.get(`${g}${C}/${e}${Q}`)).data}catch{b.error({title:"Error",message:"Failed to fetch albums.",position:"topRight"})}}async function Z(e=1){try{return(await v.get(`${g}${P}`,{params:{page:e}})).data}catch{b.error({title:"Error",message:"Failed to fetch feedbacks.",position:"topRight"})}}async function ee(e){try{return(await v.post(`${g}${P}`,e)).data}catch{b.error({title:"Error",message:"Failed to submit feedback.",position:"topRight"})}}async function te(e,t){try{return(await v.get(`${g}${C}`,{params:{page:e,limit:t}})).data.artists||[]}catch(s){return console.error("Не вдалося завантажити артистів:",s),[]}}const{loaderOverlay:D,modalForm:R,stars:F,nameInput:O,messageInput:B,modalOverlay:f,closeBtn:se,feedbackBtn:ne}=a;function re(){D.classList.remove("hidden")}function ae(){D.classList.add("hidden")}let l=0;F.forEach((e,t)=>{e.addEventListener("mouseenter",()=>{p(t+1)}),e.addEventListener("mouseleave",()=>{p(l)}),e.addEventListener("click",()=>{l=t+1,p(l)})});function p(e){F.forEach((t,s)=>{s<e?t.setAttribute("fill","#a76cdb"):t.setAttribute("fill","#ffffff")})}function oe(){f.classList.add("is-open")}ne.addEventListener("click",oe);function h(){f.classList.remove("is-open")}se.addEventListener("click",h);f.addEventListener("click",e=>{e.target===f&&h()});document.addEventListener("keydown",e=>{e.key==="Escape"&&h()});function ie(){let e=!0,t=[];return(O.value.trim().length<2||O.value.trim().length>16)&&(e=!1,t.push("Name must be between 2 and 16 characters")),(B.value.trim().length<10||B.value.trim().length>512)&&(e=!1,t.push("Message must be between 10 and 512 characters.")),(l<1||l>5)&&(e=!1,t.push("Rating must be between 1 and 5 stars.")),e||t.forEach(s=>{b.error({title:"Error",message:s,position:"topRight",timeout:3e3,pauseOnHover:!0})}),e}function le(){R.reset(),p(0),l=0}R.addEventListener("submit",async e=>{if(e.preventDefault(),!ie())return;const t={name:O.value.trim(),rating:l,descr:B.value.trim()};re(),await ee(t),h(),le(),ae()});const d="/goit-js-project-work-team-1/assets/sprite-HoBOwdhp.svg";function ce(e,t=d){const s=Math.floor(e),n=e-s,r=Math.round(n*100);let o="";for(let i=1;i<=5;i++)i<=s?o+=`
          <div class="star">
            <svg class="star-filled"><use href="${t}#star-filled"></use></svg>
          </div>`:i===s+1&&n>0?o+=`
          <div class="star">
            <svg class="star-bg"><use href="${d}#star-filled"></use></svg>
            <svg class="partial-star" style="--percent: ${r}%">
              <use href="${d}#star-filled"></use>
            </svg>
          </div>`:o+=`
          <div class="star">
            <svg class="star-bg"><use href="${d}#star-filled"></use></svg>
          </div>`;return`
      <li class="star-svg">
        <div class="star-container">
          ${o}
        </div>
      </li>`}function de(e,t){const s=e.map(n=>{var u;const r=n.strArtistThumb||"https://via.placeholder.com/350x350?text=No+Image",o=n.genres||[],i=((u=n.genres)==null?void 0:u.map(L=>`<li class="genre-tag">${L}</li>`).join(""))||"",A=n.strBiographyEN||"Короткий опис для цього артиста відсутній.";return`
        <li class="artist-card">
          <img src="${r}" alt="${n.strArtist}" class="artist-card-image" />
          <div class="artist-card-content">
            <ul class="artist-card-genres">${i}</ul>
            <h3 class="artist-card-name">${n.strArtist}</h3>
            <p class="artist-card-description">${A}</p>
            <button id="learn-more-btn" class="artist-card-link" data-artist-id="${n._id}" data-genres='${JSON.stringify(o)}'>Learn More <svg class="icon-lernmore" width="24" height="24">
      <use href="${d}#icon-caret-arrow-artist-right"></use>
    </svg></button>
          </div>
        </li>
      `}).join("");t.insertAdjacentHTML("beforeend",s)}function ue(){a.headerMenuContainer.classList.add("is-open"),window.addEventListener("resize",q),a.menuAnchorAbout.addEventListener("click",c),a.menuAnchorArtists.addEventListener("click",c),a.menuAnchorReviews.addEventListener("click",c)}function c(){a.headerMenuContainer.classList.remove("is-open"),window.removeEventListener("resize",q),a.menuAnchorAbout.removeEventListener("click",c),a.menuAnchorArtists.removeEventListener("click",c),a.menuAnchorReviews.removeEventListener("click",c)}function q(){window.innerWidth>=768&&(a.headerMenuContainer.classList.remove("is-open"),window.removeEventListener("resize",q))}function me(){a.loader.classList.add("loader")}function _(){a.loader.classList.remove("loader")}a.burgerBtnOpenMenu.addEventListener("click",ue);a.burgerBtnCloseMenu.addEventListener("click",c);function pe({name:e,rating:t,descr:s}){return`
    <li class="swiper-slide">
      <ul class="feedback-stars">${ce(t)}</ul>
      <p class="feedback-text">"${s}"</p>
      <p class="feedback-author">${e}</p>
    </li>
  `}async function fe(){const{data:e}=await Z(),t=e[0],s=e[e.length-1],n=e.length>2?Math.floor(Math.random()*e.slice(1,e.length-1).length):0,r=e[n],o=e.length===2?[t,s]:[t,r,s],i=document.querySelector(".swiper-wrapper");i.innerHTML=o.map(pe).join(""),new J(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active"},slidesPerView:1,loop:!0})}fe();let I=1;const T=8;document.addEventListener("DOMContentLoaded",()=>{const e=a.artistsGrid,t=a.loadMoreBtn;async function s(){t.disabled=!0;const n=document.getElementById("spinner");n.classList.remove("hidden");const r=await te(I,T);n.classList.add("hidden"),r.length>0?(de(r,e),I++,r.length<T?t.style.display="none":t.style.display="flex"):t.style.display="none",t.disabled=!1}t.addEventListener("click",s),s()});function H(e){e.target===a.modalOverlayArtists&&y()}function x(e){a.modalOverlayArtists.classList.contains("is-open")&&e.key==="Escape"&&y()}function ve(e,t){const s=parseInt(e,10),n=parseInt(t,10);return isNaN(s)&&isNaN(n)?"information missing":!isNaN(s)&&isNaN(n)?`${s}–present`:!isNaN(s)&&!isNaN(n)?`${s}–${n}`:"information missing"}function be(e){if(typeof e=="string"){const o=parseInt(e,10);if(isNaN(o))return"N/A";e=o}if(e==null||isNaN(e))return"N/A";const t=Math.floor(e/1e3),s=Math.floor(t/60),n=t%60,r=n<10?`0${n}`:n;return`${s}:${r}`}async function ge(e,t=[]){me();const s=a.aboutArtist.querySelector(".modal-info-description");s&&(s.innerHTML=""),a.modalAlboms.innerHTML="";const n=await X(e),{strArtist:r,strArtistThumb:o,strGender:i,intMembers:A,strCountry:u,strBiographyEN:L,intFormedYear:j,intDisbandedYear:G,albumsList:k}=n;a.titleName.textContent=r||"N/A";const Y=ve(j,G);let w="";t&&Array.isArray(t)&&t.length>0&&(w=t.map(m=>`<span class="genre-tag">${m.trim()}</span>`).join(""));const z=` <img class="ph-artist" src="${o}" alt="${r}" />
  <div class="modal-info-description">
            <div class="modal-info-list">
                <div class="wrap-info-item">
                <div class="wrapp">
                    <div class="modal-info-item">
                        <span class="detail-label">Years active</span>
                        <span class="detail-value">${Y}</span>
                    </div>
                    <div class="modal-info-item">
                      <span class="detail-label">Sex</span>
                       <span class="detail-value">${i||"N/A"}</span>
                    </div>
                    </div>
                    <div class="wrapp">
                    <div class="modal-info-item">
                        <span class="detail-label">Members</span>
                        <span class="detail-value">${A||"N/A"}</span>
                    </div>
                    <div class="modal-info-item">
                        <span class="detail-label">Country</span>
                        <span class="detail-value">${u||"N/A"}</span>
                    </div>
                    </div>
                </div>
            </div>
            <div class="biography">
                <h5 class="detail-label">Biography</h5>
                <p class="modal-info-bio">
                    ${L||"No biography available."}
                </p>
            </div>
            ${w?`<div class="genres">${w}</div>`:""}
            </div>`;a.aboutArtist.innerHTML=z;let $="";k&&k.length>0?k.forEach(m=>{const W=m.strAlbum||"Unknown Album",E=m.tracks;let S="";E&&E.length>0?E.forEach((M,K)=>{const U=(K+1)%2===0?"albom-track even":"albom-track odd",N=M.movie,V=typeof N=="string"&&N.trim()!==""?`<a class="link-icon-youtube" href="${N}" target="_blank" rel="noopener noreferrer" aria-label="Watch on YouTube">
                                <svg class="icon-you-tube">
                                    <use href="${d}#icon-you-tube"></use>
                                </svg>
                            </a>`:'<span class="youtube-link-placeholder"></span>';S+=`
                            <li class="${U}">
                                <span>${M.strTrack||"No track name"}</span>
                                <span>${be(M.intDuration)}</span>
                                ${V}
                            </li>
                        `}):S='<li class="albom-track no-tracks">No tracks available for this album.</li>',$+=`
                    <ul class="modal-alboms-list-item">
                        <li class="albom-list-title">
                            <span class="albom-title">${W}</span>
                        </li>
                        <li class="track-info">
                            <span>Track</span>
                            <span>Time</span>
                            <span>Link</span>
                        </li>
                        ${S}
                    </ul>
                `}):$='<p class="no-albums-message">No albums found for this artist.</p>',a.modalAlboms.insertAdjacentHTML("beforeend",$),a.modalOverlayArtists.classList.add("is-open"),a.body.classList.add("no-scroll"),a.closeModalBtn.addEventListener("click",y),a.modalOverlayArtists.addEventListener("click",H),document.addEventListener("keydown",x),_()}function y(){a.modalOverlayArtists.classList.remove("is-open"),a.body.classList.remove("no-scroll"),a.closeModalBtn.removeEventListener("click",y),a.modalOverlayArtists.removeEventListener("click",H),document.removeEventListener("keydown",x),_()}a.artistsSection?a.artistsSection.addEventListener("click",e=>{const t=e.target.closest(".artist-card-link");if(t){const s=t.dataset.artistId;let n=[];const r=t.dataset.genres;if(r)try{n=JSON.parse(r)}catch(o){console.error("Error parsing genres from data attribute:",o),n=[]}ge(s,n)}}):console.warn('Виконавців з ID "artists-card-id" не знайдено.');
//# sourceMappingURL=index.js.map
