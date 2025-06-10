import{a as f,i as v,S as W}from"./assets/vendor-Cq1ZEsD1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const s={burgerBtnOpenMenu:document.querySelector(".icon-burger"),burgerBtnCloseMenu:document.querySelector(".icon-close"),headerMenuContainer:document.querySelector(".header-menu-container"),loaderOverlay:document.querySelector(".loader-in"),modalForm:document.querySelector(".feedback-mod"),stars:document.querySelectorAll(".star-rating path"),nameInput:document.querySelector('.feedback-mod [name="name"]'),messageInput:document.querySelector('.feedback-mod [name="message"]'),modalOverlayArtists:document.querySelector(".modal-overlay-artists"),closeBtn:document.querySelector(".close-btn-mod"),feedbackBtn:document.querySelector(".feedback-btn"),menuAnchorAbout:document.querySelector("#menu-anchor-about"),menuAnchorArtists:document.querySelector("#menu-anchor-artists"),menuAnchorReviews:document.querySelector("#menu-anchor-reviews"),artistsGrid:document.getElementById("artists-card-id"),loadMoreBtn:document.getElementById("load-more-btn"),loader:document.querySelector(".modal-loader"),modalOverlay:document.querySelector(".modal-overlay"),body:document.querySelector("body"),closeModalBtn:document.querySelector(".close-btn"),titlePhoto:document.querySelector(".ph-artist"),titleName:document.querySelector(".modal-info-title"),aboutArtist:document.querySelector(".modal-info-card"),modalAlboms:document.querySelector(".modal-alboms"),artistsSection:document.querySelector("#artists-card-id")},b="https://sound-wave.b.goit.study/api",I="/artists",K="/albums",C="/feedbacks";async function U(e){try{return(await f.get(`${b}${I}/${e}${K}`)).data}catch{v.error({title:"Error",message:"Failed to fetch albums.",position:"topRight"})}}async function V(e=1){try{return(await f.get(`${b}${C}`,{params:{page:e}})).data}catch{v.error({title:"Error",message:"Failed to fetch feedbacks.",position:"topRight"})}}async function J(e){try{return(await f.post(`${b}${C}`,e)).data}catch{v.error({title:"Error",message:"Failed to submit feedback.",position:"topRight"})}}async function Q(e,t){try{return(await f.get(`${b}${I}`,{params:{page:e,limit:t}})).data.artists||[]}catch(r){return console.error("Не вдалося завантажити артистів:",r),[]}}const{loaderOverlay:T,modalForm:P,stars:D,nameInput:S,messageInput:M,modalOverlay:p,closeBtn:X,feedbackBtn:Z}=s;function ee(){T.classList.remove("hidden")}function te(){T.classList.add("hidden")}let l=0;D.forEach((e,t)=>{e.addEventListener("mouseenter",()=>{m(t+1)}),e.addEventListener("mouseleave",()=>{m(l)}),e.addEventListener("click",()=>{l=t+1,m(l)})});function m(e){D.forEach((t,r)=>{r<e?t.setAttribute("fill","#a76cdb"):t.setAttribute("fill","#ffffff")})}function se(){p.classList.add("is-open")}Z.addEventListener("click",se);function h(){p.classList.remove("is-open")}X.addEventListener("click",h);p.addEventListener("click",e=>{e.target===p&&h()});document.addEventListener("keydown",e=>{e.key==="Escape"&&h()});function re(){let e=!0,t=[];return(S.value.trim().length<2||S.value.trim().length>16)&&(e=!1,t.push("Name must be between 2 and 16 characters")),(M.value.trim().length<10||M.value.trim().length>512)&&(e=!1,t.push("Message must be between 10 and 512 characters.")),(l<1||l>5)&&(e=!1,t.push("Rating must be between 1 and 5 stars.")),e||t.forEach(r=>{v.error({title:"Error",message:r,position:"topRight",timeout:3e3,pauseOnHover:!0})}),e}function ae(){P.reset(),m(0),l=0}P.addEventListener("submit",async e=>{if(e.preventDefault(),!re())return;const t={name:S.value.trim(),rating:l,descr:M.value.trim()};ee(),await J(t),h(),ae(),te()});const d="/goit-js-project-work-team-1/assets/sprite-HoBOwdhp.svg";function ne(e,t=d){const r=Math.floor(e),a=e-r,n=Math.round(a*100);let o="";for(let i=1;i<=5;i++)i<=r?o+=`
          <div class="star">
            <svg class="star-filled"><use href="${t}#star-filled"></use></svg>
          </div>`:i===r+1&&a>0?o+=`
          <div class="star">
            <svg class="star-bg"><use href="${d}#star-filled"></use></svg>
            <svg class="partial-star" style="--percent: ${n}%">
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
      </li>`}function oe(e,t){const r=e.map(a=>{var u;const n=a.strArtistThumb||"https://via.placeholder.com/350x350?text=No+Image",o=((u=a.genres)==null?void 0:u.map(g=>`<li class="genre-tag">${g}</li>`).join(""))||"",i=a.strBiographyEN||"Короткий опис для цього артиста відсутній.";return`
        <li class="artist-card">
          <img src="${n}" alt="${a.strArtist}" class="artist-card-image" />
          <div class="artist-card-content">
            <ul class="artist-card-genres">${o}</ul>
            <h3 class="artist-card-name">${a.strArtist}</h3>
            <p class="artist-card-description">${i}</p>
            <button id="learn-more-btn" class="artist-card-link" data-artist-id="${a._id}">Learn More <svg class="icon-lernmore" width="24" height="24">
      <use href="${d}#icon-caret-arrow-artist-right"></use>
    </svg></button>
          </div>
        </li>
      `}).join("");t.insertAdjacentHTML("beforeend",r)}function ie(){s.headerMenuContainer.classList.add("is-open"),window.addEventListener("resize",N),s.menuAnchorAbout.addEventListener("click",c),s.menuAnchorArtists.addEventListener("click",c),s.menuAnchorReviews.addEventListener("click",c)}function c(){s.headerMenuContainer.classList.remove("is-open"),window.removeEventListener("resize",N),s.menuAnchorAbout.removeEventListener("click",c),s.menuAnchorArtists.removeEventListener("click",c),s.menuAnchorReviews.removeEventListener("click",c)}function N(){window.innerWidth>=768&&(s.headerMenuContainer.classList.remove("is-open"),window.removeEventListener("resize",N))}function le(){s.loader.classList.add("loader")}function ce(){s.loader.classList.remove("loader")}s.burgerBtnOpenMenu.addEventListener("click",ie);s.burgerBtnCloseMenu.addEventListener("click",c);function de({name:e,rating:t,descr:r}){return`
    <li class="swiper-slide">
      <ul class="feedback-stars">${ne(t)}</ul>
      <p class="feedback-text">"${r}"</p>
      <p class="feedback-author">${e}</p>
    </li>
  `}async function ue(){const{data:e}=await V(),t=e[0],r=e[e.length-1],a=e.length>2?Math.floor(Math.random()*e.slice(1,e.length-1).length):0,n=e[a],o=e.length===2?[t,r]:[t,n,r],i=document.querySelector(".swiper-wrapper");i.innerHTML=o.map(de).join(""),new W(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active"},slidesPerView:1,loop:!0})}ue();let O=1;const q=8;document.addEventListener("DOMContentLoaded",()=>{const e=s.artistsGrid,t=s.loadMoreBtn;async function r(){t.disabled=!0;const a=document.getElementById("spinner");a.classList.remove("hidden");const n=await Q(O,q);a.classList.add("hidden"),n.length>0?(oe(n,e),O++,n.length<q?t.style.display="none":t.style.display="flex"):t.style.display="none",t.disabled=!1}t.addEventListener("click",r),r()});function F(e){e.target===s.modalOverlayArtists&&y()}function R(e){s.modalOverlayArtists.classList.contains("is-open")&&e.key==="Escape"&&y()}function me(e,t){const r=parseInt(e,10),a=parseInt(t,10);return isNaN(r)&&isNaN(a)?"information missing":!isNaN(r)&&isNaN(a)?`${r}–present`:!isNaN(r)&&!isNaN(a)?`${r}–${a}`:"information missing"}function pe(e){if(typeof e=="string"){const o=parseInt(e,10);if(isNaN(o))return"N/A";e=o}if(e==null||isNaN(e))return"N/A";const t=Math.floor(e/1e3),r=Math.floor(t/60),a=t%60,n=a<10?`0${a}`:a;return`${r}:${n}`}async function fe(e){le();const t=s.aboutArtist.querySelector(".modal-info-description");t&&t.remove(),s.modalAlboms.innerHTML="";const r=await U(e),{strArtist:a,strArtistThumb:n,strGender:o,intMembers:i,strCountry:u,strBiographyEN:g,intFormedYear:_,intDisbandedYear:x,albumsList:A}=r;s.titleName.textContent=a||"N/A",s.titlePhoto.src=n||"",s.titlePhoto.alt=a||"Artist photo";const H=`<div class="modal-info-description">
            <div class="modal-info-list">
                <div class="wrap-info-item">
                <div class="wrapp">
                    <div class="modal-info-item">
                        <span class="detail-label">Years active</span>
                        <span class="detail-value">${me(_,x)}</span>
                    </div>
                    <div class="modal-info-item">
                      <span class="detail-label">Sex</span>
                       <span class="detail-value">${o||"N/A"}</span>
                    </div>
                    </div>
                    <div class="wrapp">
                    <div class="modal-info-item">
                        <span class="detail-label">Members</span>
                        <span class="detail-value">${i||"N/A"}</span>
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
                    ${g||"No biography available."}
                </p>
            </div>
        </div>`;s.aboutArtist.insertAdjacentHTML("beforeend",H);let L="";A&&A.length>0?A.forEach(B=>{const j=B.strAlbum||"Unknown Album",k=B.tracks;let w="";k&&k.length>0?k.forEach((E,Y)=>{const z=(Y+1)%2===0?"albom-track even":"albom-track odd",$=E.movie,G=typeof $=="string"&&$.trim()!==""?`<a class="link-icon-youtube" href="${$}" target="_blank" rel="noopener noreferrer" aria-label="Watch on YouTube">
                                <svg class="icon-you-tube">
                                    <use href="${d}#icon-you-tube"></use>
                                </svg>
                            </a>`:'<span class="youtube-link-placeholder"></span>';w+=`
                            <li class="${z}">
                                <span>${E.strTrack||"No track name"}</span>
                                <span>${pe(E.intDuration)}</span>
                                ${G}
                            </li>
                        `}):w='<li class="albom-track no-tracks">No tracks available for this album.</li>',L+=`
                    <ul class="modal-alboms-list-item">
                        <li class="albom-list-title">
                            <span class="albom-title">${j}</span>
                        </li>
                        <li class="track-info">
                            <span>Track</span>
                            <span>Time</span>
                            <span>Link</span>
                        </li>
                        ${w}
                    </ul>
                `}):L='<p class="no-albums-message">No albums found for this artist.</p>',s.modalAlboms.insertAdjacentHTML("beforeend",L),s.modalOverlayArtists.classList.add("is-open"),s.body.classList.add("no-scroll"),s.closeModalBtn.addEventListener("click",y),s.modalOverlayArtists.addEventListener("click",F),document.addEventListener("keydown",R),ce()}function y(){s.modalOverlayArtists.classList.remove("is-open"),s.body.classList.remove("no-scroll"),s.closeModalBtn.removeEventListener("click",y),s.modalOverlayArtists.removeEventListener("click",F),document.removeEventListener("keydown",R)}s.artistsSection?s.artistsSection.addEventListener("click",e=>{const t=e.target.closest(".artist-card-link");if(t){const r=t.dataset.artistId;fe(r)}}):console.warn('Виконавців з ID "artists-card-id" не знайдено.');
//# sourceMappingURL=index.js.map
