import{a as N,i as m}from"./assets/vendor-DaFVmZDQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const s={burgerBtnOpenMenu:document.querySelector(".icon-burger"),burgerBtnCloseMenu:document.querySelector(".icon-close"),headerMenuContainer:document.querySelector(".header-menu-container"),loaderOverlay:document.querySelector(".loader-in"),modalForm:document.querySelector(".feedback-mod"),stars:document.querySelectorAll(".star-rating path"),nameInput:document.querySelector('.feedback-mod [name="name"]'),messageInput:document.querySelector('.feedback-mod [name="message"]'),modalOverlayArtists:document.querySelector(".modal-overlay-artists"),closeBtn:document.querySelector(".close-btn-mod"),feedbackBtn:document.querySelector(".feedback-btn"),menuAnchorAbout:document.querySelector("#menu-anchor-about"),menuAnchorArtists:document.querySelector("#menu-anchor-artists"),menuAnchorReviews:document.querySelector("#menu-anchor-reviews"),artistsGrid:document.getElementById("artists-card-id"),loadMoreBtn:document.getElementById("load-more-btn"),loader:document.querySelector(".modal-loader"),modalOverlay:document.querySelector(".modal-overlay"),body:document.querySelector("body"),closeModalBtn:document.querySelector(".close-btn"),titlePhoto:document.querySelector(".ph-artist"),titleName:document.querySelector(".modal-info-title"),aboutArtist:document.querySelector(".modal-info-card"),modalAlboms:document.querySelector(".modal-alboms"),artistsSection:document.querySelector("#artists-card-id")},S="https://sound-wave.b.goit.study/api",q="/artists",G="/albums",Y="/feedbacks";async function K(e){try{return(await N.get(`${S}${q}/${e}${G}`)).data}catch{m.error({title:"Error",message:"Failed to fetch albums.",position:"topRight"})}}async function U(e){try{const t=await N.post(`${S}${Y}`,e);m.success({title:"Success",message:"Feedback submitted successfully!",position:"topRight"})}catch{m.error({title:"Error",message:"Failed to submit feedback.",position:"topRight"})}}async function W(e,t){try{return(await N.get(`${S}${q}`,{params:{page:e,limit:t}})).data.artists||[]}catch(n){return console.error("Не вдалося завантажити артистів:",n),[]}}const{loaderOverlay:I,modalForm:C,stars:T,nameInput:E,messageInput:M,modalOverlay:p,closeBtn:V,feedbackBtn:J}=s;function Q(){I.classList.remove("hidden")}function X(){I.classList.add("hidden")}let c=0;T.forEach((e,t)=>{e.addEventListener("mouseenter",()=>{u(t+1)}),e.addEventListener("mouseleave",()=>{u(c)}),e.addEventListener("click",()=>{c=t+1,u(c)})});function u(e){T.forEach((t,n)=>{n<e?t.setAttribute("fill","#a76cdb"):t.setAttribute("fill","#ffffff")})}function Z(){p.classList.add("is-open")}J.addEventListener("click",Z);function f(){p.classList.remove("is-open")}V.addEventListener("click",f);p.addEventListener("click",e=>{e.target===p&&f()});document.addEventListener("keydown",e=>{e.key==="Escape"&&f()});function ee(){let e=!0,t=[];return(E.value.trim().length<2||E.value.trim().length>16)&&(e=!1,t.push("Name must be between 2 and 16 characters")),(M.value.trim().length<10||M.value.trim().length>512)&&(e=!1,t.push("Message must be between 10 and 512 characters.")),(c<1||c>5)&&(e=!1,t.push("Rating must be between 1 and 5 stars.")),e||t.forEach(n=>{m.error({title:"Error",message:n,position:"topRight",timeout:3e3,pauseOnHover:!0})}),e}function te(){C.reset(),u(0),c=0}C.addEventListener("submit",async e=>{if(e.preventDefault(),!ee())return;const t={name:E.value.trim(),rating:c,descr:M.value.trim()};Q(),await U(t),f(),te(),X()});const se="/goit-js-project-work-team-1/assets/sprite-CxLyF3fO.svg";function ne(e,t){const n=e.map(a=>{var d;const r=a.strArtistThumb||"https://via.placeholder.com/350x350?text=No+Image",o=((d=a.genres)==null?void 0:d.map(b=>`<li class="genre-tag">${b}</li>`).join(""))||"",i=a.strBiographyEN||"Короткий опис для цього артиста відсутній.";return`
        <li class="artist-card">
          <img src="${r}" alt="${a.strArtist}" class="artist-card-image" />
          <div class="artist-card-content">
            <ul class="artist-card-genres">${o}</ul>
            <h3 class="artist-card-name">${a.strArtist}</h3>
            <p class="artist-card-description">${i}</p>
            <button id="learn-more-btn" class="artist-card-link" data-artist-id="${a._id}">Learn More <svg class="icon-lernmore" width="24" height="24">
      <use href="${se}#icon-caret-arrow-artist-right"></use>
    </svg></button>
          </div>
        </li>
      `}).join("");t.insertAdjacentHTML("beforeend",n)}function re(){s.headerMenuContainer.classList.add("is-open"),window.addEventListener("resize",w),s.menuAnchorAbout.addEventListener("click",l),s.menuAnchorArtists.addEventListener("click",l),s.menuAnchorReviews.addEventListener("click",l)}function l(){s.headerMenuContainer.classList.remove("is-open"),window.removeEventListener("resize",w),s.menuAnchorAbout.removeEventListener("click",l),s.menuAnchorArtists.removeEventListener("click",l),s.menuAnchorReviews.removeEventListener("click",l)}function w(){window.innerWidth>=768&&(s.headerMenuContainer.classList.remove("is-open"),window.removeEventListener("resize",w))}function ae(){s.loader.classList.add("loader")}function oe(){s.loader.classList.remove("loader")}s.burgerBtnOpenMenu.addEventListener("click",re);s.burgerBtnCloseMenu.addEventListener("click",l);let B=1;const O=8;document.addEventListener("DOMContentLoaded",()=>{const e=s.artistsGrid,t=s.loadMoreBtn;async function n(){t.disabled=!0;const a=document.getElementById("spinner");a.classList.remove("hidden");const r=await W(B,O);a.classList.add("hidden"),r.length>0?(ne(r,e),B++,r.length<O?t.style.display="none":t.style.display="flex"):t.style.display="none",t.disabled=!1}t.addEventListener("click",n),n()});function P(e){e.target===s.modalOverlayArtists&&v()}function D(e){s.modalOverlayArtists.classList.contains("is-open")&&e.key==="Escape"&&v()}function ie(e,t){const n=parseInt(e,10),a=parseInt(t,10);return isNaN(n)&&isNaN(a)?"information missing":!isNaN(n)&&isNaN(a)?`${n}–present`:!isNaN(n)&&!isNaN(a)?`${n}–${a}`:"information missing"}function ce(e){if(typeof e=="string"){const o=parseInt(e,10);if(isNaN(o))return"N/A";e=o}if(e==null||isNaN(e))return"N/A";const t=Math.floor(e/1e3),n=Math.floor(t/60),a=t%60,r=a<10?`0${a}`:a;return`${n}:${r}`}async function le(e){ae();const t=s.aboutArtist.querySelector(".modal-info-description");t&&t.remove(),s.modalAlboms.innerHTML="";const n=await K(e),{strArtist:a,strArtistThumb:r,strGender:o,intMembers:i,strCountry:d,strBiographyEN:b,intFormedYear:R,intDisbandedYear:F,albumsList:y}=n;s.titleName.textContent=a||"N/A",s.titlePhoto.src=r||"",s.titlePhoto.alt=a||"Artist photo";const _=`<div class="modal-info-description">
            <div class="modal-info-list">
                <div class="wrap-info-item">
                <div class="wrapp">
                    <div class="modal-info-item">
                        <span class="detail-label">Years active</span>
                        <span class="detail-value">${ie(R,F)}</span>
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
                    ${b||"No biography available."}
                </p>
            </div>
        </div>`;s.aboutArtist.insertAdjacentHTML("beforeend",_);let h="";y&&y.length>0?y.forEach($=>{const j=$.strAlbum||"Unknown Album",g=$.tracks;let A="";g&&g.length>0?g.forEach((L,x)=>{const H=(x+1)%2===0?"albom-track even":"albom-track odd",k=L.movie,z=typeof k=="string"&&k.trim()!==""?`<a class="link-icon-youtube" href="${k}" target="_blank" rel="noopener noreferrer" aria-label="Watch on YouTube">
                                <svg class="icon-you-tube">
                                    <use href="/img/sprite.svg#icon-you-tube"></use>
                                </svg>
                            </a>`:'<span class="youtube-link-placeholder"></span>';A+=`
                            <li class="${H}">
                                <span>${L.strTrack||"No track name"}</span>
                                <span>${ce(L.intDuration)}</span>
                                ${z}
                            </li>
                        `}):A='<li class="albom-track no-tracks">No tracks available for this album.</li>',h+=`
                    <ul class="modal-alboms-list-item">
                        <li class="albom-list-title">
                            <span class="albom-title">${j}</span>
                        </li>
                        <li class="track-info">
                            <span>Track</span>
                            <span>Time</span>
                            <span>Link</span>
                        </li>
                        ${A}
                    </ul>
                `}):h='<p class="no-albums-message">No albums found for this artist.</p>',s.modalAlboms.insertAdjacentHTML("beforeend",h),s.modalOverlayArtists.classList.add("is-open"),s.body.classList.add("no-scroll"),s.closeModalBtn.addEventListener("click",v),s.modalOverlayArtists.addEventListener("click",P),document.addEventListener("keydown",D),oe()}function v(){s.modalOverlayArtists.classList.remove("is-open"),s.body.classList.remove("no-scroll"),s.closeModalBtn.removeEventListener("click",v),s.modalOverlayArtists.removeEventListener("click",P),document.removeEventListener("keydown",D)}s.artistsSection?s.artistsSection.addEventListener("click",e=>{const t=e.target.closest(".artist-card-link");if(t){const n=t.dataset.artistId;le(n)}}):console.warn('Виконавців з ID "artists-card-id" не знайдено.');
//# sourceMappingURL=index.js.map
