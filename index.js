import{a as b,i as p,S as me}from"./assets/vendor-Cq1ZEsD1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();const r={burgerBtnOpenMenu:document.querySelector(".icon-burger"),burgerBtnCloseMenu:document.querySelector(".icon-close"),headerMenuContainer:document.querySelector(".header-menu-container"),loaderOverlay:document.querySelector(".loader-in"),modalForm:document.querySelector(".feedback-mod"),stars:document.querySelectorAll(".star-rating path"),nameInput:document.querySelector('.feedback-mod [name="name"]'),messageInput:document.querySelector('.feedback-mod [name="message"]'),modalOverlayArtists:document.querySelector(".modal-overlay-artists"),closeBtn:document.querySelector(".close-btn-mod"),feedbackBtn:document.querySelector(".feedback-btn"),menuAnchorAbout:document.querySelector("#menu-anchor-about"),menuAnchorArtists:document.querySelector("#menu-anchor-artists"),menuAnchorReviews:document.querySelector("#menu-anchor-reviews"),artistsGrid:document.getElementById("artists-card-id"),loadMoreBtn:document.getElementById("load-more-btn"),loader:document.querySelector(".modal-loader"),modalOverlay:document.querySelector(".modal-overlay"),body:document.querySelector("body"),closeModalBtn:document.querySelector(".close-btn"),titleName:document.querySelector(".modal-info-title"),aboutArtist:document.querySelector(".modal-info-card"),modalAlboms:document.querySelector(".modal-alboms"),artistsSection:document.querySelector("#artists-card-id")},pe=8,L="https://sound-wave.b.goit.study/api",U="/artists",fe="/genres",ve="/albums",J="/feedbacks";async function ge(e=1,t="",n="",s=""){const a={limit:pe,page:e,...t&&{name:t},...n&&{sortName:n},...s&&{genre:s}};try{return(await b.get(`${L}${U}`,{params:a})).data}catch{p.error({title:"Error",message:"Failed to fetch artists.",position:"topRight"})}}async function he(){try{return(await b.get(`${L}${fe}`)).data}catch{p.error({title:"Error",message:"Failed to fetch genres.",position:"topRight"})}}async function ye(e){try{return(await b.get(`${L}${U}/${e}${ve}`)).data}catch{p.error({title:"Error",message:"Failed to fetch albums.",position:"topRight"})}}async function be(e=1){try{return(await b.get(`${L}${J}`,{params:{page:e}})).data}catch{p.error({title:"Error",message:"Failed to fetch feedbacks.",position:"topRight"})}}async function Le(e){try{return(await b.post(`${L}${J}`,e)).data}catch{p.error({title:"Error",message:"Failed to submit feedback.",position:"topRight"})}}const{loaderOverlay:Q,modalForm:X,stars:Z,nameInput:_,messageInput:G,modalOverlay:M,closeBtn:Ee,feedbackBtn:ke}=r;function Ae(){Q.classList.remove("hidden")}function we(){Q.classList.add("hidden")}let u=0;Z.forEach((e,t)=>{e.addEventListener("mouseenter",()=>{$(t+1)}),e.addEventListener("mouseleave",()=>{$(u)}),e.addEventListener("click",()=>{u=t+1,$(u)})});function $(e){Z.forEach((t,n)=>{n<e?t.setAttribute("fill","#a76cdb"):t.setAttribute("fill","#ffffff")})}function $e(){M.classList.add("is-open")}ke.addEventListener("click",$e);function N(){M.classList.remove("is-open")}Ee.addEventListener("click",N);M.addEventListener("click",e=>{e.target===M&&N()});document.addEventListener("keydown",e=>{e.key==="Escape"&&N()});function Se(){let e=!0,t=[];return(_.value.trim().length<2||_.value.trim().length>16)&&(e=!1,t.push("Name must be between 2 and 16 characters")),(G.value.trim().length<10||G.value.trim().length>512)&&(e=!1,t.push("Message must be between 10 and 512 characters.")),(u<1||u>5)&&(e=!1,t.push("Rating must be between 1 and 5 stars.")),e||t.forEach(n=>{p.error({title:"Error",message:n,position:"topRight",timeout:3e3,pauseOnHover:!0})}),e}function Me(){X.reset(),$(0),u=0}X.addEventListener("submit",async e=>{if(e.preventDefault(),!Se())return;const t={name:_.value.trim(),rating:u,descr:G.value.trim()};Ae(),await Le(t),N(),Me(),we()});const c="/goit-js-project-work-team-1/assets/sprite-HoBOwdhp.svg";function Ne(e,t=c){const n=Math.floor(e),s=e-n,a=Math.round(s*100);let o="";for(let i=1;i<=5;i++)i<=n?o+=`
          <div class="star">
            <svg class="star-filled"><use href="${t}#star-filled"></use></svg>
          </div>`:i===n+1&&s>0?o+=`
          <div class="star">
            <svg class="star-bg"><use href="${c}#star-filled"></use></svg>
            <svg class="partial-star" style="--percent: ${a}%">
              <use href="${c}#star-filled"></use>
            </svg>
          </div>`:o+=`
          <div class="star">
            <svg class="star-bg"><use href="${c}#star-filled"></use></svg>
          </div>`;return`
      <li class="star-svg">
        <div class="star-container">
          ${o}
        </div>
      </li>`}function Be(e,t){const n=e.map(s=>{var A;const a=s.strArtistThumb||"https://via.placeholder.com/350x350?text=No+Image",o=s.genres||[],i=((A=s.genres)==null?void 0:A.map(q=>`<li class="genre-tag">${q}</li>`).join(""))||"",T=s.strBiographyEN||"Короткий опис для цього артиста відсутній.";return`
        <li class="artist-card">
          <img src="${a}" alt="${s.strArtist}" class="artist-card-image" />
          <div class="artist-card-content">
            <ul class="artist-card-genres">${i}</ul>
            <h3 class="artist-card-name">${s.strArtist}</h3>
            <p class="artist-card-description">${T}</p>
            <button id="learn-more-btn" class="artist-card-link" data-artist-id="${s._id}" data-genres='${JSON.stringify(o)}'>Learn More <svg class="icon-lernmore" width="24" height="24">
      <use href="${c}#icon-caret-arrow-artist-right"></use>
    </svg></button>
          </div>
        </li>
      `}).join("");t.insertAdjacentHTML("beforeend",n)}function Ie(){r.headerMenuContainer.classList.add("is-open"),window.addEventListener("resize",j),r.menuAnchorAbout.addEventListener("click",m),r.menuAnchorArtists.addEventListener("click",m),r.menuAnchorReviews.addEventListener("click",m)}function m(){r.headerMenuContainer.classList.remove("is-open"),window.removeEventListener("resize",j),r.menuAnchorAbout.removeEventListener("click",m),r.menuAnchorArtists.removeEventListener("click",m),r.menuAnchorReviews.removeEventListener("click",m)}function j(){window.innerWidth>=768&&(r.headerMenuContainer.classList.remove("is-open"),window.removeEventListener("resize",j))}function Oe(){r.loader.classList.add("loader")}function ee(){r.loader.classList.remove("loader")}r.burgerBtnOpenMenu.addEventListener("click",Ie);r.burgerBtnCloseMenu.addEventListener("click",m);function Te({name:e,rating:t,descr:n}){return`
    <li class="swiper-slide">
      <ul class="feedback-stars">${Ne(t)}</ul>
      <p class="feedback-text">"${n}"</p>
      <p class="feedback-author">${e}</p>
    </li>
  `}async function qe(){const{data:e}=await be(),t=e[0],n=e[e.length-1],s=e.length>2?Math.floor(Math.random()*e.slice(1,e.length-1).length):0,a=e[s],o=e.length===2?[t,n]:[t,a,n],i=document.querySelector(".swiper-wrapper");i.innerHTML=o.map(Te).join(""),new me(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active"},slidesPerView:1,loop:!0})}qe();let l=1,g="",h="",E="";const Ce=8,y=document.getElementById("searchInput"),f=document.getElementById("genreDropdown"),B=document.getElementById("genreToggle"),te=document.getElementById("genreList"),v=document.getElementById("sortingDropdown"),I=document.getElementById("sortingToggle"),De=document.getElementById("sortingList"),Fe=document.getElementById("resetBtn"),Pe=document.getElementById("resetFiltersBtn"),Y=document.querySelector(".icon-chevron"),Re=document.getElementById("artists-card-id"),z=document.querySelector(".spinner"),V=r.artistsGrid,S=r.loadMoreBtn,W=document.getElementById("emptyState"),xe=document.querySelector(".search-and-filters-opener"),K=document.querySelector(".filters-panel");function k(){f.classList.remove("open"),v.classList.remove("open")}B.addEventListener("click",()=>{f.classList.contains("open")?f.classList.remove("open"):(k(),f.classList.add("open"))});I.addEventListener("click",()=>{v.classList.contains("open")?v.classList.remove("open"):(k(),v.classList.add("open"))});document.addEventListener("click",e=>{!f.contains(e.target)&&!v.contains(e.target)&&k()});xe.addEventListener("click",()=>{K.classList.toggle("open"),K.classList.contains("open")?Y.innerHTML=`<use href="${c}#icon-chevron-down-arrow"></use>`:Y.innerHTML=`<use href="${c}#icon-chevron-up-arrow"></use>`});async function He(){const e=await he();e!=null&&e.length&&(te.innerHTML='<div class="dropdown-item" data-value="">Default</div>'+e.map(t=>`<div class="dropdown-item" data-value="${t.genre}">${t.genre}</div>`).join(""))}He();te.addEventListener("click",e=>{e.target.classList.contains("dropdown-item")&&(g=e.target.dataset.value,B.textContent=g||"Default",l=1,k(),d(!0))});De.addEventListener("click",e=>{e.target.classList.contains("dropdown-item")&&(h=e.target.dataset.value,I.textContent=h||"Default",l=1,k(),d(!0))});y.addEventListener("keydown",e=>{e.key==="Enter"&&(E=y.value.trim(),l=1,d(!0))});document.querySelector(".icon-search").addEventListener("click",()=>{E=y.value.trim(),l=1,d(!0)});Fe.addEventListener("click",()=>{g="",h="",E="",y.value="",B.textContent="Default",I.textContent="Default",l=1,d(!0)});Pe.addEventListener("click",()=>{g="",h="",E="",y.value="",B.textContent="Default",I.textContent="Default",l=1,d(!0)});S.addEventListener("click",()=>{l++,d()});async function d(e=!1){S.style.display="none",W.classList.add("hidden"),z.classList.remove("hidden"),e&&(V.innerHTML="");const t={page:l,name:E,sortName:h,genre:g},n=await ge(t.page,t.name,t.sortName,t.genre),s=(n==null?void 0:n.artists)||[];if(e&&s.length===0){W.classList.remove("hidden"),Re.innerHTML="";return}Be(s,V),s.length===Ce?S.style.display="flex":S.style.display="none",z.classList.add("hidden")}d(!0);function se(e){e.target===r.modalOverlayArtists&&O()}function ne(e){r.modalOverlayArtists.classList.contains("is-open")&&e.key==="Escape"&&O()}function _e(e,t){const n=parseInt(e,10),s=parseInt(t,10);return isNaN(n)&&isNaN(s)?"information missing":!isNaN(n)&&isNaN(s)?`${n}–present`:!isNaN(n)&&!isNaN(s)?`${n}–${s}`:"information missing"}function Ge(e){if(typeof e=="string"){const o=parseInt(e,10);if(isNaN(o))return"N/A";e=o}if(e==null||isNaN(e))return"N/A";const t=Math.floor(e/1e3),n=Math.floor(t/60),s=t%60,a=s<10?`0${s}`:s;return`${n}:${a}`}async function je(e,t=[]){Oe();const n=r.aboutArtist.querySelector(".modal-info-description");n&&(n.innerHTML=""),r.modalAlboms.innerHTML="";const s=await ye(e),{strArtist:a,strArtistThumb:o,strGender:i,intMembers:T,strCountry:A,strBiographyEN:q,intFormedYear:re,intDisbandedYear:ae,albumsList:C}=s;r.titleName.textContent=a||"N/A";const oe=_e(re,ae);let D="";t&&Array.isArray(t)&&t.length>0&&(D=t.map(w=>`<span class="genre-tag">${w.trim()}</span>`).join(""));const ie=` <img class="ph-artist" src="${o}" alt="${a}" />
  <div class="modal-info-description">
            <div class="modal-info-list">
                <div class="wrap-info-item">
                <div class="wrapp">
                    <div class="modal-info-item">
                        <span class="detail-label">Years active</span>
                        <span class="detail-value">${oe}</span>
                    </div>
                    <div class="modal-info-item">
                      <span class="detail-label">Sex</span>
                       <span class="detail-value">${i||"N/A"}</span>
                    </div>
                    </div>
                    <div class="wrapp">
                    <div class="modal-info-item">
                        <span class="detail-label">Members</span>
                        <span class="detail-value">${T||"N/A"}</span>
                    </div>
                    <div class="modal-info-item">
                        <span class="detail-label">Country</span>
                        <span class="detail-value">${A||"N/A"}</span>
                    </div>
                    </div>
                </div>
            </div>
            <div class="biography">
                <h5 class="detail-label">Biography</h5>
                <p class="modal-info-bio">
                    ${q||"No biography available."}
                </p>
            </div>
            ${D?`<div class="genres">${D}</div>`:""}
            </div>`;r.aboutArtist.innerHTML=ie;let F="";C&&C.length>0?C.forEach(w=>{const ce=w.strAlbum||"Unknown Album",P=w.tracks;let R="";P&&P.length>0?P.forEach((x,le)=>{const de=(le+1)%2===0?"albom-track even":"albom-track odd",H=x.movie,ue=typeof H=="string"&&H.trim()!==""?`<a class="link-icon-youtube" href="${H}" target="_blank" rel="noopener noreferrer" aria-label="Watch on YouTube">
                                <svg class="icon-you-tube">
                                    <use href="${c}#icon-you-tube"></use>
                                </svg>
                            </a>`:'<span class="youtube-link-placeholder"></span>';R+=`
                            <li class="${de}">
                                <span>${x.strTrack||"No track name"}</span>
                                <span>${Ge(x.intDuration)}</span>
                                ${ue}
                            </li>
                        `}):R='<li class="albom-track no-tracks">No tracks available for this album.</li>',F+=`
                    <ul class="modal-alboms-list-item">
                        <li class="albom-list-title">
                            <span class="albom-title">${ce}</span>
                        </li>
                        <li class="track-info">
                            <span>Track</span>
                            <span>Time</span>
                            <span>Link</span>
                        </li>
                        ${R}
                    </ul>
                `}):F='<p class="no-albums-message">No albums found for this artist.</p>',r.modalAlboms.insertAdjacentHTML("beforeend",F),r.modalOverlayArtists.classList.add("is-open"),r.body.classList.add("no-scroll"),r.closeModalBtn.addEventListener("click",O),r.modalOverlayArtists.addEventListener("click",se),document.addEventListener("keydown",ne),ee()}function O(){r.modalOverlayArtists.classList.remove("is-open"),r.body.classList.remove("no-scroll"),r.closeModalBtn.removeEventListener("click",O),r.modalOverlayArtists.removeEventListener("click",se),document.removeEventListener("keydown",ne),ee()}r.artistsSection?r.artistsSection.addEventListener("click",e=>{const t=e.target.closest(".artist-card-link");if(t){const n=t.dataset.artistId;let s=[];const a=t.dataset.genres;if(a)try{s=JSON.parse(a)}catch(o){console.error("Error parsing genres from data attribute:",o),s=[]}je(n,s)}}):console.warn('Виконавців з ID "artists-card-id" не знайдено.');
//# sourceMappingURL=index.js.map
