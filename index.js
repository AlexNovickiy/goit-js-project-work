import{a as p,i as f,S as W}from"./assets/vendor-JkkhUzpi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();const s={burgerBtnOpenMenu:document.querySelector(".icon-burger"),burgerBtnCloseMenu:document.querySelector(".icon-close"),headerMenuContainer:document.querySelector(".header-menu-container"),loaderOverlay:document.querySelector(".loader-in"),modalForm:document.querySelector(".feedback-mod"),stars:document.querySelectorAll(".star-rating path"),nameInput:document.querySelector('.feedback-mod [name="name"]'),messageInput:document.querySelector('.feedback-mod [name="message"]'),modalOverlayArtists:document.querySelector(".modal-overlay-artists"),closeBtn:document.querySelector(".close-btn-mod"),feedbackBtn:document.querySelector(".feedback-btn"),menuAnchorAbout:document.querySelector("#menu-anchor-about"),menuAnchorArtists:document.querySelector("#menu-anchor-artists"),menuAnchorReviews:document.querySelector("#menu-anchor-reviews"),artistsGrid:document.getElementById("artists-card-id"),loadMoreBtn:document.getElementById("load-more-btn"),loader:document.querySelector(".modal-loader"),modalOverlay:document.querySelector(".modal-overlay"),body:document.querySelector("body"),closeModalBtn:document.querySelector(".close-btn"),titlePhoto:document.querySelector(".ph-artist"),titleName:document.querySelector(".modal-info-title"),aboutArtist:document.querySelector(".modal-info-card"),modalAlboms:document.querySelector(".modal-alboms"),artistsSection:document.querySelector("#artists-card-id")},v="https://sound-wave.b.goit.study/api",q="/artists",K="/albums",I="/feedbacks";async function U(e){try{return(await p.get(`${v}${q}/${e}${K}`)).data}catch{f.error({title:"Error",message:"Failed to fetch albums.",position:"topRight"})}}async function V(e=1){try{return(await p.get(`${v}${I}`,{params:{page:e}})).data}catch{f.error({title:"Error",message:"Failed to fetch feedbacks.",position:"topRight"})}}async function J(e){try{return(await p.post(`${v}${I}`,e)).data}catch{f.error({title:"Error",message:"Failed to submit feedback.",position:"topRight"})}}async function Q(e,t){try{return(await p.get(`${v}${q}`,{params:{page:e,limit:t}})).data.artists||[]}catch(r){return console.error("Не вдалося завантажити артистів:",r),[]}}const{loaderOverlay:C,modalForm:T,stars:D,nameInput:$,messageInput:S,modalOverlay:m,closeBtn:X,feedbackBtn:Z}=s;function ee(){C.classList.remove("hidden")}function te(){C.classList.add("hidden")}let l=0;D.forEach((e,t)=>{e.addEventListener("mouseenter",()=>{u(t+1)}),e.addEventListener("mouseleave",()=>{u(l)}),e.addEventListener("click",()=>{l=t+1,u(l)})});function u(e){D.forEach((t,r)=>{r<e?t.setAttribute("fill","#a76cdb"):t.setAttribute("fill","#ffffff")})}function se(){m.classList.add("is-open")}Z.addEventListener("click",se);function b(){m.classList.remove("is-open")}X.addEventListener("click",b);m.addEventListener("click",e=>{e.target===m&&b()});document.addEventListener("keydown",e=>{e.key==="Escape"&&b()});function re(){let e=!0,t=[];return($.value.trim().length<2||$.value.trim().length>16)&&(e=!1,t.push("Name must be between 2 and 16 characters")),(S.value.trim().length<10||S.value.trim().length>512)&&(e=!1,t.push("Message must be between 10 and 512 characters.")),(l<1||l>5)&&(e=!1,t.push("Rating must be between 1 and 5 stars.")),e||t.forEach(r=>{f.error({title:"Error",message:r,position:"topRight",timeout:3e3,pauseOnHover:!0})}),e}function ne(){T.reset(),u(0),l=0}T.addEventListener("submit",async e=>{if(e.preventDefault(),!re())return;const t={name:$.value.trim(),rating:l,descr:S.value.trim()};ee(),await J(t),b(),ne(),te()});const F="/goit-js-project-work-team-1/assets/sprite-HoBOwdhp.svg";function ae(e,t="../img/sprite.svg?url"){const r=Math.floor(e),n=e-r,a=Math.round(n*100);let o="";for(let i=1;i<=5;i++)i<=r?o+=`
          <div class="star">
            <svg class="star-filled"><use href="${t}#star-filled"></use></svg>
          </div>`:i===r+1&&n>0?o+=`
          <div class="star">
            <svg class="star-bg"><use href="${t}#star-filled"></use></svg>
            <svg class="partial-star" style="--percent: ${a}%">
              <use href="${t}#star-filled"></use>
            </svg>
          </div>`:o+=`
          <div class="star">
            <svg class="star-bg"><use href="${t}#star-filled"></use></svg>
          </div>`;return`
      <li class="star-svg">
        <div class="star-container">
          ${o}
        </div>
      </li>`}function oe(e,t){const r=e.map(n=>{var d;const a=n.strArtistThumb||"https://via.placeholder.com/350x350?text=No+Image",o=((d=n.genres)==null?void 0:d.map(g=>`<li class="genre-tag">${g}</li>`).join(""))||"",i=n.strBiographyEN||"Короткий опис для цього артиста відсутній.";return`
        <li class="artist-card">
          <img src="${a}" alt="${n.strArtist}" class="artist-card-image" />
          <div class="artist-card-content">
            <ul class="artist-card-genres">${o}</ul>
            <h3 class="artist-card-name">${n.strArtist}</h3>
            <p class="artist-card-description">${i}</p>
            <button id="learn-more-btn" class="artist-card-link" data-artist-id="${n._id}">Learn More <svg class="icon-lernmore" width="24" height="24">
      <use href="${F}#icon-caret-arrow-artist-right"></use>
    </svg></button>
          </div>
        </li>
      `}).join("");t.insertAdjacentHTML("beforeend",r)}function ie(){s.headerMenuContainer.classList.add("is-open"),window.addEventListener("resize",M),s.menuAnchorAbout.addEventListener("click",c),s.menuAnchorArtists.addEventListener("click",c),s.menuAnchorReviews.addEventListener("click",c)}function c(){s.headerMenuContainer.classList.remove("is-open"),window.removeEventListener("resize",M),s.menuAnchorAbout.removeEventListener("click",c),s.menuAnchorArtists.removeEventListener("click",c),s.menuAnchorReviews.removeEventListener("click",c)}function M(){window.innerWidth>=768&&(s.headerMenuContainer.classList.remove("is-open"),window.removeEventListener("resize",M))}function le(){s.loader.classList.add("loader")}function ce(){s.loader.classList.remove("loader")}s.burgerBtnOpenMenu.addEventListener("click",ie);s.burgerBtnCloseMenu.addEventListener("click",c);function de({name:e,rating:t,descr:r}){return`
    <li class="swiper-slide">
      <ul class="feedback-stars">${ae(t)}</ul>
      <p class="feedback-text">"${r}"</p>
      <p class="feedback-author">${e}</p>
    </li>
  `}async function ue(){const{data:e}=await V(),t=e[0],r=e[e.length-1],n=e.length>2?Math.floor(Math.random()*e.slice(1,e.length-1).length):0,a=e[n],o=e.length===2?[t,r]:[t,a,r],i=document.querySelector(".swiper-wrapper");i.innerHTML=o.map(de).join(""),new W(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active"},slidesPerView:1,loop:!0})}ue();let B=1;const O=8;document.addEventListener("DOMContentLoaded",()=>{const e=s.artistsGrid,t=s.loadMoreBtn;async function r(){t.disabled=!0;const n=document.getElementById("spinner");n.classList.remove("hidden");const a=await Q(B,O);n.classList.add("hidden"),a.length>0?(oe(a,e),B++,a.length<O?t.style.display="none":t.style.display="flex"):t.style.display="none",t.disabled=!1}t.addEventListener("click",r),r()});function P(e){e.target===s.modalOverlayArtists&&h()}function R(e){s.modalOverlayArtists.classList.contains("is-open")&&e.key==="Escape"&&h()}function me(e,t){const r=parseInt(e,10),n=parseInt(t,10);return isNaN(r)&&isNaN(n)?"information missing":!isNaN(r)&&isNaN(n)?`${r}–present`:!isNaN(r)&&!isNaN(n)?`${r}–${n}`:"information missing"}function pe(e){if(typeof e=="string"){const o=parseInt(e,10);if(isNaN(o))return"N/A";e=o}if(e==null||isNaN(e))return"N/A";const t=Math.floor(e/1e3),r=Math.floor(t/60),n=t%60,a=n<10?`0${n}`:n;return`${r}:${a}`}async function fe(e){le();const t=s.aboutArtist.querySelector(".modal-info-description");t&&t.remove(),s.modalAlboms.innerHTML="";const r=await U(e),{strArtist:n,strArtistThumb:a,strGender:o,intMembers:i,strCountry:d,strBiographyEN:g,intFormedYear:_,intDisbandedYear:x,albumsList:y}=r;s.titleName.textContent=n||"N/A",s.titlePhoto.src=a||"",s.titlePhoto.alt=n||"Artist photo";const H=`<div class="modal-info-description">
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
                        <span class="detail-value">${d||"N/A"}</span>
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
        </div>`;s.aboutArtist.insertAdjacentHTML("beforeend",H);let A="";y&&y.length>0?y.forEach(N=>{const j=N.strAlbum||"Unknown Album",L=N.tracks;let k="";L&&L.length>0?L.forEach((w,Y)=>{const z=(Y+1)%2===0?"albom-track even":"albom-track odd",E=w.movie,G=typeof E=="string"&&E.trim()!==""?`<a class="link-icon-youtube" href="${E}" target="_blank" rel="noopener noreferrer" aria-label="Watch on YouTube">
                                <svg class="icon-you-tube">
                                    <use href="${F}#icon-you-tube"></use>
                                </svg>
                            </a>`:'<span class="youtube-link-placeholder"></span>';k+=`
                            <li class="${z}">
                                <span>${w.strTrack||"No track name"}</span>
                                <span>${pe(w.intDuration)}</span>
                                ${G}
                            </li>
                        `}):k='<li class="albom-track no-tracks">No tracks available for this album.</li>',A+=`
                    <ul class="modal-alboms-list-item">
                        <li class="albom-list-title">
                            <span class="albom-title">${j}</span>
                        </li>
                        <li class="track-info">
                            <span>Track</span>
                            <span>Time</span>
                            <span>Link</span>
                        </li>
                        ${k}
                    </ul>
                `}):A='<p class="no-albums-message">No albums found for this artist.</p>',s.modalAlboms.insertAdjacentHTML("beforeend",A),s.modalOverlayArtists.classList.add("is-open"),s.body.classList.add("no-scroll"),s.closeModalBtn.addEventListener("click",h),s.modalOverlayArtists.addEventListener("click",P),document.addEventListener("keydown",R),ce()}function h(){s.modalOverlayArtists.classList.remove("is-open"),s.body.classList.remove("no-scroll"),s.closeModalBtn.removeEventListener("click",h),s.modalOverlayArtists.removeEventListener("click",P),document.removeEventListener("keydown",R)}s.artistsSection?s.artistsSection.addEventListener("click",e=>{const t=e.target.closest(".artist-card-link");if(t){const r=t.dataset.artistId;fe(r)}}):console.warn('Виконавців з ID "artists-card-id" не знайдено.');
//# sourceMappingURL=index.js.map
