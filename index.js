import{a as L,i as p,S as pe}from"./assets/vendor-Cq1ZEsD1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();const r={burgerBtnOpenMenu:document.querySelector(".icon-burger"),burgerBtnCloseMenu:document.querySelector(".icon-close"),headerMenuContainer:document.querySelector(".header-menu-container"),loaderOverlay:document.querySelector(".loader-in"),modalForm:document.querySelector(".feedback-mod"),stars:document.querySelectorAll(".star-rating path"),nameInput:document.querySelector('.feedback-mod [name="name"]'),messageInput:document.querySelector('.feedback-mod [name="message"]'),modalOverlayArtists:document.querySelector(".modal-overlay-artists"),closeBtn:document.querySelector(".close-btn-mod"),feedbackBtn:document.querySelector(".feedback-btn"),menuAnchorAbout:document.querySelector("#menu-anchor-about"),menuAnchorArtists:document.querySelector("#menu-anchor-artists"),menuAnchorReviews:document.querySelector("#menu-anchor-reviews"),artistsGrid:document.getElementById("artists-card-id"),loadMoreBtn:document.getElementById("load-more-btn"),loader:document.querySelector(".modal-loader"),modalOverlay:document.querySelector(".modal-overlay"),body:document.querySelector("body"),closeModalBtn:document.querySelector(".close-btn"),titleName:document.querySelector(".modal-info-title"),aboutArtist:document.querySelector(".modal-info-card"),modalAlboms:document.querySelector(".modal-alboms"),artistsSection:document.querySelector("#artists-card-id")},fe=8,E="https://sound-wave.b.goit.study/api",J="/artists",ve="/genres",ge="/albums",Q="/feedbacks";async function he(e=1,t="",n="",s=""){const a={limit:fe,page:e,...t&&{name:t},...n&&{sortName:n},...s&&{genre:s}};try{return(await L.get(`${E}${J}`,{params:a})).data}catch{p.error({title:"Error",message:"Failed to fetch artists.",position:"topRight"})}}async function ye(){try{return(await L.get(`${E}${ve}`)).data}catch{p.error({title:"Error",message:"Failed to fetch genres.",position:"topRight"})}}async function be(e){try{return(await L.get(`${E}${J}/${e}${ge}`)).data}catch{p.error({title:"Error",message:"Failed to fetch albums.",position:"topRight"})}}async function Le(e=1){try{return(await L.get(`${E}${Q}`,{params:{page:e}})).data}catch{p.error({title:"Error",message:"Failed to fetch feedbacks.",position:"topRight"})}}async function Ee(e){try{return(await L.post(`${E}${Q}`,e)).data}catch{p.error({title:"Error",message:"Failed to submit feedback.",position:"topRight"})}}const{loaderOverlay:X,modalForm:Z,stars:ee,nameInput:j,messageInput:Y,modalOverlay:N,closeBtn:ke,feedbackBtn:we}=r;function Ae(){X.classList.remove("hidden")}function $e(){X.classList.add("hidden")}let u=0;ee.forEach((e,t)=>{e.addEventListener("mouseenter",()=>{S(t+1)}),e.addEventListener("mouseleave",()=>{S(u)}),e.addEventListener("click",()=>{u=t+1,S(u)})});function S(e){ee.forEach((t,n)=>{n<e?t.setAttribute("fill","#a76cdb"):t.setAttribute("fill","#ffffff")})}function Se(){N.classList.add("is-open")}we.addEventListener("click",Se);function B(){N.classList.remove("is-open")}ke.addEventListener("click",B);N.addEventListener("click",e=>{e.target===N&&B()});document.addEventListener("keydown",e=>{e.key==="Escape"&&B()});function Me(){let e=!0,t=[];return(j.value.trim().length<2||j.value.trim().length>16)&&(e=!1,t.push("Name must be between 2 and 16 characters")),(Y.value.trim().length<10||Y.value.trim().length>512)&&(e=!1,t.push("Message must be between 10 and 512 characters.")),(u<1||u>5)&&(e=!1,t.push("Rating must be between 1 and 5 stars.")),e||t.forEach(n=>{p.error({title:"Error",message:n,position:"topRight",timeout:3e3,pauseOnHover:!0})}),e}function Ne(){Z.reset(),S(0),u=0}Z.addEventListener("submit",async e=>{if(e.preventDefault(),!Me())return;const t={name:j.value.trim(),rating:u,descr:Y.value.trim()};Ae(),await Ee(t),B(),Ne(),$e()});const l="/goit-js-project-work-team-1/assets/sprite-wQKTNHgQ.svg";function Be(e,t=l){const n=Math.floor(e),s=e-n,a=Math.round(s*100);let o="";for(let i=1;i<=5;i++)i<=n?o+=`
          <div class="star">
            <svg class="star-filled"><use href="${t}#star-filled"></use></svg>
          </div>`:i===n+1&&s>0?o+=`
          <div class="star">
            <svg class="star-bg"><use href="${l}#star-filled"></use></svg>
            <svg class="partial-star" style="--percent: ${a}%">
              <use href="${l}#star-filled"></use>
            </svg>
          </div>`:o+=`
          <div class="star">
            <svg class="star-bg"><use href="${l}#star-filled"></use></svg>
          </div>`;return`
      <li class="star-svg">
        <div class="star-container">
          ${o}
        </div>
      </li>`}function Te(e,t){const n=e.map(s=>{var A;const a=s.strArtistThumb||"https://via.placeholder.com/350x350?text=No+Image",o=s.genres||[],i=((A=s.genres)==null?void 0:A.map(C=>`<li class="genre-tag">${C}</li>`).join(""))||"",O=s.strBiographyEN||"Короткий опис для цього артиста відсутній.";return`
        <li class="artist-card">
          <img src="${a}" alt="${s.strArtist}" class="artist-card-image" />
          <div class="artist-card-content">
            <ul class="artist-card-genres">${i}</ul>
            <h3 class="artist-card-name">${s.strArtist}</h3>
            <p class="artist-card-description">${O}</p>
            <button id="learn-more-btn" class="artist-card-link" data-artist-id="${s._id}" data-genres='${JSON.stringify(o)}'>Learn More <svg class="icon-lernmore" width="24" height="24">
      <use href="${l}#icon-caret-arrow-artist-right"></use>
    </svg></button>
          </div>
        </li>
      `}).join("");t.insertAdjacentHTML("beforeend",n)}function Ie(){r.headerMenuContainer.classList.add("is-open"),window.addEventListener("resize",K),r.menuAnchorAbout.addEventListener("click",m),r.menuAnchorArtists.addEventListener("click",m),r.menuAnchorReviews.addEventListener("click",m)}function m(){r.headerMenuContainer.classList.remove("is-open"),window.removeEventListener("resize",K),r.menuAnchorAbout.removeEventListener("click",m),r.menuAnchorArtists.removeEventListener("click",m),r.menuAnchorReviews.removeEventListener("click",m)}function K(){window.innerWidth>=768&&(r.headerMenuContainer.classList.remove("is-open"),window.removeEventListener("resize",K))}function qe(){r.loader.classList.add("loader")}function te(){r.loader.classList.remove("loader")}r.burgerBtnOpenMenu.addEventListener("click",Ie);r.burgerBtnCloseMenu.addEventListener("click",m);function Oe({name:e,rating:t,descr:n}){return`
    <li class="swiper-slide">
      <ul class="feedback-stars">${Be(t)}</ul>
      <p class="feedback-text">"${n}"</p>
      <p class="feedback-author">${e}</p>
    </li>
  `}async function Ce(){const{data:e}=await Le(),t=e[0],n=e[e.length-1],s=e.length>2?Math.floor(Math.random()*e.slice(1,e.length-1).length):0,a=e[s],o=e.length===2?[t,n]:[t,a,n],i=document.querySelector(".swiper-wrapper");i.innerHTML=o.map(Oe).join(""),new pe(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active"},slidesPerView:1,loop:!0})}Ce();let c=1,h="",y="",k="";const De=8,b=document.getElementById("searchInput"),v=document.getElementById("genreDropdown"),T=document.getElementById("genreToggle"),se=document.getElementById("genreList"),g=document.getElementById("sortingDropdown"),I=document.getElementById("sortingToggle"),Fe=document.getElementById("sortingList"),He=document.getElementById("resetBtn"),Pe=document.getElementById("resetFiltersBtn"),U=document.querySelector(".icon-chevron"),Re=document.getElementById("artists-card-id"),G=document.querySelector(".spinner"),V=r.artistsGrid,M=r.loadMoreBtn,W=document.getElementById("emptyState"),xe=document.querySelector(".search-and-filters-opener"),z=document.querySelector(".filters-panel"),f=document.querySelector(".scrollBtnUp");function w(){v.classList.remove("open"),g.classList.remove("open")}T.addEventListener("click",()=>{v.classList.contains("open")?v.classList.remove("open"):(w(),v.classList.add("open"))});I.addEventListener("click",()=>{g.classList.contains("open")?g.classList.remove("open"):(w(),g.classList.add("open"))});document.addEventListener("click",e=>{!v.contains(e.target)&&!g.contains(e.target)&&w()});xe.addEventListener("click",()=>{z.classList.toggle("open"),z.classList.contains("open")?U.innerHTML=`<use href="${l}#icon-chevron-down-arrow"></use>`:U.innerHTML=`<use href="${l}#icon-chevron-up-arrow"></use>`});async function _e(){const e=await ye();e!=null&&e.length&&(se.innerHTML='<div class="dropdown-item" data-value="">Default</div>'+e.map(t=>`<div class="dropdown-item" data-value="${t.genre}">${t.genre}</div>`).join(""))}_e();Fe.addEventListener("click",e=>{e.target.classList.contains("dropdown-item")&&(y=e.target.dataset.value==="default"?"":e.target.dataset.value,I.textContent=y||"Default",c=1,w(),d(!0))});se.addEventListener("click",e=>{e.target.classList.contains("dropdown-item")&&(h=e.target.dataset.value==="Default"?"":e.target.dataset.value,T.textContent=h||"Default",c=1,w(),d(!0))});b.addEventListener("keydown",e=>{e.key==="Enter"&&(k=b.value.trim(),c=1,d(!0))});z.addEventListener("submit",e=>{e.preventDefault(),k=b.value.trim(),c=1,d(!0)});He.addEventListener("click",()=>{h="",y="",k="",b.value="",T.textContent="Default",I.textContent="Default",c=1,d(!0)});Pe.addEventListener("click",()=>{h="",y="",k="",b.value="",T.textContent="Default",I.textContent="Default",c=1,d(!0)});M.addEventListener("click",()=>{c++,d()});async function d(e=!1){M.style.display="none",W.classList.add("hidden"),G.classList.remove("hidden"),e&&(V.innerHTML="");const t={page:c,name:k,sortName:y||void 0,genre:h||void 0},n=await he(t.page,t.name,t.sortName,t.genre),s=(n==null?void 0:n.artists)||[];if(e&&s.length===0){W.classList.remove("hidden"),Re.innerHTML="",G.classList.add("hidden");return}Te(s,V),s.length===De?M.style.display="flex":M.style.display="none",G.classList.add("hidden")}d(!0);function Ge(){window.scrollY>(document.body.scrollHeight-window.innerHeight)/2?f.classList.add("visible-scrollBtn"):f.classList.remove("visible-scrollBtn");function e(){window.scrollTo({top:0,behavior:"smooth"})}f.classList.contains("visible-scrollBtn")?f.addEventListener("click",e):f.removeEventListener("click",e)}document.addEventListener("scroll",Ge);function ne(e){e.target===r.modalOverlayArtists&&q()}function re(e){r.modalOverlayArtists.classList.contains("is-open")&&e.key==="Escape"&&q()}function je(e,t){const n=parseInt(e,10),s=parseInt(t,10);return isNaN(n)&&isNaN(s)?"information missing":!isNaN(n)&&isNaN(s)?`${n}–present`:!isNaN(n)&&!isNaN(s)?`${n}–${s}`:"information missing"}function Ye(e){if(typeof e=="string"){const o=parseInt(e,10);if(isNaN(o))return"N/A";e=o}if(e==null||isNaN(e))return"N/A";const t=Math.floor(e/1e3),n=Math.floor(t/60),s=t%60,a=s<10?`0${s}`:s;return`${n}:${a}`}async function ze(e,t=[]){qe();const n=r.aboutArtist.querySelector(".modal-info-description");n&&(n.innerHTML=""),r.modalAlboms.innerHTML="";const s=await be(e),{strArtist:a,strArtistThumb:o,strGender:i,intMembers:O,strCountry:A,strBiographyEN:C,intFormedYear:ae,intDisbandedYear:oe,albumsList:D}=s;r.titleName.textContent=a||"N/A";const ie=je(ae,oe);let F="";t&&Array.isArray(t)&&t.length>0&&(F=t.map($=>`<span class="genre-tag">${$.trim()}</span>`).join(""));const le=` <img class="ph-artist" src="${o}" alt="${a}" />
  <div class="modal-info-description">
            <div class="modal-info-list">
                <div class="wrap-info-item">
                <div class="wrapp">
                    <div class="modal-info-item">
                        <span class="detail-label">Years active</span>
                        <span class="detail-value">${ie}</span>
                    </div>
                    <div class="modal-info-item">
                      <span class="detail-label">Sex</span>
                       <span class="detail-value">${i||"N/A"}</span>
                    </div>
                    </div>
                    <div class="wrapp">
                    <div class="modal-info-item">
                        <span class="detail-label">Members</span>
                        <span class="detail-value">${O||"N/A"}</span>
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
                    ${C||"No biography available."}
                </p>
            </div>
            ${F?`<div class="genres">${F}</div>`:""}
            </div>`;r.aboutArtist.innerHTML=le;let H="";D&&D.length>0?D.forEach($=>{const ce=$.strAlbum||"Unknown Album",P=$.tracks;let R="";P&&P.length>0?P.forEach((x,de)=>{const ue=(de+1)%2===0?"albom-track even":"albom-track odd",_=x.movie,me=typeof _=="string"&&_.trim()!==""?`<a class="link-icon-youtube" href="${_}" target="_blank" rel="noopener noreferrer" aria-label="Watch on YouTube">
                                <svg class="icon-you-tube">
                                    <use href="${l}#icon-you-tube"></use>
                                </svg>
                            </a>`:'<span class="youtube-link-placeholder"></span>';R+=`
                            <li class="${ue}">
                                <span>${x.strTrack||"No track name"}</span>
                                <span>${Ye(x.intDuration)}</span>
                                ${me}
                            </li>
                        `}):R='<li class="albom-track no-tracks">No tracks available for this album.</li>',H+=`
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
                `}):H='<p class="no-albums-message">No albums found for this artist.</p>',r.modalAlboms.insertAdjacentHTML("beforeend",H),r.modalOverlayArtists.classList.add("is-open"),r.body.classList.add("no-scroll"),r.closeModalBtn.addEventListener("click",q),r.modalOverlayArtists.addEventListener("click",ne),document.addEventListener("keydown",re),te()}function q(){r.modalOverlayArtists.classList.remove("is-open"),r.body.classList.remove("no-scroll"),r.closeModalBtn.removeEventListener("click",q),r.modalOverlayArtists.removeEventListener("click",ne),document.removeEventListener("keydown",re),te()}r.artistsSection?r.artistsSection.addEventListener("click",e=>{const t=e.target.closest(".artist-card-link");if(t){const n=t.dataset.artistId;let s=[];const a=t.dataset.genres;if(a)try{s=JSON.parse(a)}catch(o){console.error("Error parsing genres from data attribute:",o),s=[]}ze(n,s)}}):console.warn('Виконавців з ID "artists-card-id" не знайдено.');
//# sourceMappingURL=index.js.map
