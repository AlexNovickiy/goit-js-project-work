import{a as S,i as g,S as ve}from"./assets/vendor-Cq1ZEsD1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();const o={burgerBtnOpenMenu:document.querySelector(".icon-burger"),burgerBtnCloseMenu:document.querySelector(".icon-close"),headerMenuContainer:document.querySelector(".header-menu-container"),loaderOverlay:document.querySelector(".loader-in"),modalForm:document.querySelector(".feedback-mod"),stars:document.querySelectorAll(".star-rating path"),nameInput:document.querySelector('.feedback-mod [name="name"]'),messageInput:document.querySelector('.feedback-mod [name="message"]'),modalOverlayArtists:document.querySelector(".modal-overlay-artists"),closeBtn:document.querySelector(".close-btn-mod"),feedbackBtn:document.querySelector(".feedback-btn"),menuAnchorAbout:document.querySelector("#menu-anchor-about"),menuAnchorArtists:document.querySelector("#menu-anchor-artists"),menuAnchorReviews:document.querySelector("#menu-anchor-reviews"),artistsGrid:document.getElementById("artists-card-id"),loadMoreBtn:document.getElementById("load-more-btn"),loader:document.querySelector(".modal-loader"),modalOverlay:document.querySelector(".modal-overlay"),body:document.querySelector("body"),closeModalBtn:document.querySelector(".close-btn"),titleName:document.querySelector(".modal-info-title"),aboutArtist:document.querySelector(".modal-info-card"),modalAlboms:document.querySelector(".modal-alboms"),artistsSection:document.querySelector("#artists-card-id")},ge=8,A="https://sound-wave.b.goit.study/api",Q="/artists",ye="/genres",he="/albums",X="/feedbacks";async function be(e=1,t="",n="",s=""){const r={limit:ge,page:e,...t&&{name:t},...n&&{sortName:n},...s&&{genre:s}};try{return(await S.get(`${A}${Q}`,{params:r})).data}catch{g.error({title:"Error",message:"Failed to fetch artists.",position:"topRight"})}}async function Le(){try{return(await S.get(`${A}${ye}`)).data}catch{g.error({title:"Error",message:"Failed to fetch genres.",position:"topRight"})}}async function we(e){try{return(await S.get(`${A}${Q}/${e}${he}`)).data}catch{g.error({title:"Error",message:"Failed to fetch albums.",position:"topRight"})}}async function Ee(e=1){try{return(await S.get(`${A}${X}`,{params:{page:e}})).data}catch{g.error({title:"Error",message:"Failed to fetch feedbacks.",position:"topRight"})}}async function ke(e){try{const t=await S.post(`${A}${X}`,e);return g.success({title:"Success",message:"Feedback submitted successfully.",position:"topRight",timeout:3e3}),t.data}catch{g.error({title:"Error",message:"Failed to submit feedback.",position:"topRight"})}}const{loaderOverlay:Z,modalForm:ee,stars:te,nameInput:j,messageInput:Y,modalOverlay:L,closeBtn:Se,feedbackBtn:Ae}=o;function $e(){Z.classList.remove("hidden")}function Me(){Z.classList.add("hidden")}let f=0;te.forEach((e,t)=>{e.addEventListener("mouseenter",()=>{N(t+1)}),e.addEventListener("mouseleave",()=>{N(f)}),e.addEventListener("click",()=>{f=t+1,N(f)})});function N(e){te.forEach((t,n)=>{n<e?t.setAttribute("fill","#a76cdb"):t.setAttribute("fill","#ffffff")})}function Be(){L.classList.add("is-open"),document.addEventListener("keydown",se)}Ae.addEventListener("click",Be);function T(){L.classList.add("is-close"),setTimeout(()=>{L.classList.remove("is-open","is-close")},300),document.removeEventListener("keydown",se)}Se.addEventListener("click",T);L.addEventListener("click",e=>{e.target===L&&T()});function se(e){e.key==="Escape"&&T()}function Ne(){let e=!0,t=[];return(j.value.trim().length<2||j.value.trim().length>16)&&(e=!1,t.push("Name must be between 2 and 16 characters")),(Y.value.trim().length<10||Y.value.trim().length>512)&&(e=!1,t.push("Message must be between 10 and 512 characters.")),(f<1||f>5)&&(e=!1,t.push("Rating must be between 1 and 5 stars.")),e||t.forEach(n=>{g.error({title:"Error",message:n,position:"topRight",timeout:3e3,pauseOnHover:!0})}),e}function qe(){ee.reset(),N(0),f=0}ee.addEventListener("submit",async e=>{if(e.preventDefault(),!Ne())return;const t={name:j.value.trim(),rating:f,descr:Y.value.trim()};$e(),await ke(t),T(),qe(),Me()});const c="/goit-js-project-work-team-1/assets/sprite-wQKTNHgQ.svg";function Te(e,t=c){const n=Math.floor(e),s=e-n,r=Math.round(s*100);let a="";for(let i=1;i<=5;i++)i<=n?a+=`
          <div class="star">
            <svg class="star-filled"><use href="${t}#star-filled"></use></svg>
          </div>`:i===n+1&&s>0?a+=`
          <div class="star">
            <svg class="star-bg"><use href="${c}#star-filled"></use></svg>
            <svg class="partial-star" style="--percent: ${r}%">
              <use href="${c}#star-filled"></use>
            </svg>
          </div>`:a+=`
          <div class="star">
            <svg class="star-bg"><use href="${c}#star-filled"></use></svg>
          </div>`;return`
      <li class="star-svg">
        <div class="star-container">
          ${a}
        </div>
      </li>`}function Ie(e,t){const n=e.map(s=>{var l;const r=s.strArtistThumb||"https://via.placeholder.com/350x350?text=No+Image",a=s.genres||[],i=((l=s.genres)==null?void 0:l.map(h=>`<li class="genre-tag">${h}</li>`).join(""))||"",y=s.strBiographyEN||"Короткий опис для цього артиста відсутній.";return`
        <li class="artist-card">
          <img src="${r}" loading="lazy" alt="${s.strArtist}" class="artist-card-image" />
          <div class="artist-card-content">
            <ul class="artist-card-genres">${i}</ul>
            <h3 class="artist-card-name">${s.strArtist}</h3>
            <p class="artist-card-description">${y}</p>
            <button id="learn-more-btn" class="artist-card-link" data-artist-id="${s._id}" data-genres='${JSON.stringify(a)}'>Learn More <svg class="icon-lernmore" width="24" height="24">
      <use href="${c}#icon-caret-arrow-artist-right"></use>
    </svg></button>
          </div>
        </li>
      `}).join("");t.insertAdjacentHTML("beforeend",n)}function Oe(){o.headerMenuContainer.classList.add("is-open"),window.addEventListener("resize",K),o.menuAnchorAbout.addEventListener("click",v),o.menuAnchorArtists.addEventListener("click",v),o.menuAnchorReviews.addEventListener("click",v),document.querySelector("body").classList.add("no-scroll")}function v(){o.headerMenuContainer.classList.remove("is-open"),window.removeEventListener("resize",K),o.menuAnchorAbout.removeEventListener("click",v),o.menuAnchorArtists.removeEventListener("click",v),o.menuAnchorReviews.removeEventListener("click",v),document.querySelector("body").classList.remove("no-scroll")}function K(){window.innerWidth>=768&&(o.headerMenuContainer.classList.remove("is-open"),window.removeEventListener("resize",K),document.querySelector("body").classList.remove("no-scroll"))}function Ce(){o.loader.classList.add("loader")}function ne(){o.loader.classList.remove("loader")}o.burgerBtnOpenMenu.addEventListener("click",Oe);o.burgerBtnCloseMenu.addEventListener("click",v);function De({name:e,rating:t,descr:n}){return`
    <div class="swiper-slide">
      <ul class="feedback-stars">${Te(t)}</ul>
      <p class="feedback-text">"${n}"</p>
      <p class="feedback-author">${e}</p>
    </div>
  `}function U(e,t,n){const s=document.querySelector(".swiper-button-prev"),r=document.querySelector(".swiper-button-next");s.classList.toggle("disabled",e===t),r.classList.toggle("disabled",e===n)}async function He(){const{data:e}=await Ee(),t=e.slice(0,30),n=0,s=t.length-1,r=Math.floor(t.length/2);document.querySelector(".swiper-wrapper").innerHTML=t.map(De).join("");const a=new ve(".swiper",{slidesPerView:1,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),i=document.querySelector(".swiper-pagination");i.innerHTML=`
    <span class="swiper-pagination-bullet" data-i="${n}"></span>
    <span class="swiper-pagination-bullet" data-i="${r}"></span>
    <span class="swiper-pagination-bullet" data-i="${s}"></span>`,i.addEventListener("click",l=>{l.target.classList.contains("swiper-pagination-bullet")&&a.slideTo(+l.target.dataset.i)});function y(){const l=a.realIndex;document.querySelectorAll(".swiper-pagination-bullet").forEach(h=>{h.classList.toggle("active",+h.dataset.i===l)}),U(l,n,s)}a.on("slideChange",()=>{y(),U(a.realIndex,n,s)}),y()}He();let d=1,w="",E="",$="";const Fe=8,k=document.getElementById("searchInput"),m=document.getElementById("genreDropdown"),I=document.getElementById("genreToggle"),re=document.getElementById("genreList"),p=document.getElementById("sortingDropdown"),O=document.getElementById("sortingToggle"),xe=document.getElementById("sortingList"),Re=document.getElementById("resetBtn"),Pe=document.getElementById("resetFiltersBtn"),V=document.querySelector(".icon-chevron"),_e=document.getElementById("artists-card-id"),G=document.querySelector(".spinner"),W=o.artistsGrid,q=o.loadMoreBtn,J=document.getElementById("emptyState"),Ge=document.querySelector(".search-and-filters-opener"),z=document.querySelector(".filters-panel"),b=document.querySelector(".scrollBtnUp");function M(){m.classList.remove("open"),p.classList.remove("open")}I.addEventListener("click",()=>{m.classList.contains("open")?(m.classList.remove("open"),m.querySelector(".icon-chevron").innerHTML=`<use href="${c}#icon-chevron-up-arrow"></use>`):(M(),m.classList.add("open"),m.querySelector(".icon-chevron").innerHTML=`<use href="${c}#icon-chevron-down-arrow"></use>`)});O.addEventListener("click",()=>{p.classList.contains("open")?(p.classList.remove("open"),p.querySelector(".icon-chevron").innerHTML=`<use href="${c}#icon-chevron-up-arrow"></use>`):(M(),p.classList.add("open"),p.querySelector(".icon-chevron").innerHTML=`<use href="${c}#icon-chevron-down-arrow"></use>`)});document.addEventListener("click",e=>{!m.contains(e.target)&&!p.contains(e.target)&&M()});Ge.addEventListener("click",()=>{z.classList.toggle("open"),z.classList.contains("open")?V.innerHTML=`<use href="${c}#icon-chevron-down-arrow"></use>`:V.innerHTML=`<use href="${c}#icon-chevron-up-arrow"></use>`});async function je(){const e=await Le();e!=null&&e.length&&(re.innerHTML='<div class="dropdown-item" data-value="">Default</div>'+e.map(t=>`<div class="dropdown-item" data-value="${t.genre}">${t.genre}</div>`).join(""))}je();xe.addEventListener("click",e=>{e.target.classList.contains("dropdown-item")&&(E=e.target.dataset.value==="default"?"":e.target.dataset.value,O.querySelector(".dropdown-title").textContent=`${E||"Default"}`,d=1,M(),u(!0))});re.addEventListener("click",e=>{e.target.classList.contains("dropdown-item")&&(w=e.target.dataset.value==="Default"?"":e.target.dataset.value,I.querySelector(".dropdown-title").textContent=`${w||"Default"}`,d=1,M(),u(!0))});k.addEventListener("keydown",e=>{e.key==="Enter"&&($=k.value.trim(),d=1,u(!0))});z.addEventListener("submit",e=>{e.preventDefault(),$=k.value.trim(),d=1,u(!0)});Re.addEventListener("click",()=>{w="",E="",$="",k.value="",I.querySelector(".dropdown-title").textContent="Genres",O.querySelector(".dropdown-title").textContent="Sorting",d=1,u(!0)});Pe.addEventListener("click",()=>{w="",E="",$="",k.value="",I.querySelector(".dropdown-title").textContent="Genres",O.querySelector(".dropdown-title").textContent="Sorting",d=1,u(!0)});q.addEventListener("click",()=>{d++,u()});async function u(e=!1){q.style.display="none",J.classList.add("hidden"),G.classList.remove("hidden"),e&&(W.innerHTML="");const t={page:d,name:$,sortName:E||void 0,genre:w||void 0},n=await be(t.page,t.name,t.sortName,t.genre),s=(n==null?void 0:n.artists)||[];if(e&&s.length===0){J.classList.remove("hidden"),_e.innerHTML="",G.classList.add("hidden");return}Ie(s,W),s.length===Fe?q.style.display="flex":q.style.display="none",G.classList.add("hidden")}u(!0);function Ye(){window.scrollY>(document.body.scrollHeight-window.innerHeight)/2?b.classList.add("visible-scrollBtn"):b.classList.remove("visible-scrollBtn");function e(){window.scrollTo({top:0,behavior:"smooth"})}b.classList.contains("visible-scrollBtn")?b.addEventListener("click",e):b.removeEventListener("click",e)}document.addEventListener("scroll",Ye);function oe(e){e.target===o.modalOverlayArtists&&C()}function ae(e){o.modalOverlayArtists.classList.contains("is-open")&&e.key==="Escape"&&C()}function ze(e,t){const n=parseInt(e,10),s=parseInt(t,10);return isNaN(n)&&isNaN(s)?"information missing":!isNaN(n)&&isNaN(s)?`${n}–present`:!isNaN(n)&&!isNaN(s)?`${n}–${s}`:"information missing"}function Ke(e){if(typeof e=="string"){const a=parseInt(e,10);if(isNaN(a))return"N/A";e=a}if(e==null||isNaN(e))return"N/A";const t=Math.floor(e/1e3),n=Math.floor(t/60),s=t%60,r=s<10?`0${s}`:s;return`${n}:${r}`}async function Ue(e,t=[]){Ce();const n=o.aboutArtist.querySelector(".modal-info-description");n&&(n.innerHTML=""),o.modalAlboms.innerHTML="";const s=await we(e),{strArtist:r,strArtistThumb:a,strGender:i,intMembers:y,strCountry:l,strBiographyEN:h,intFormedYear:ie,intDisbandedYear:ce,albumsList:D}=s;o.titleName.textContent=r||"N/A";const le=ze(ie,ce);let H="";t&&Array.isArray(t)&&t.length>0&&(H=t.map(B=>`<span class="genre-tag">${B.trim()}</span>`).join(""));const de=` <img class="ph-artist" src="${a}" alt="${r}" />
  <div class="modal-info-description">
            <div class="modal-info-list">
                <div class="wrap-info-item">
                <div class="wrapp">
                    <div class="modal-info-item">
                        <span class="detail-label">Years active</span>
                        <span class="detail-value">${le}</span>
                    </div>
                    <div class="modal-info-item">
                      <span class="detail-label">Sex</span>
                       <span class="detail-value">${i||"N/A"}</span>
                    </div>
                    </div>
                    <div class="wrapp">
                    <div class="modal-info-item">
                        <span class="detail-label">Members</span>
                        <span class="detail-value">${y||"N/A"}</span>
                    </div>
                    <div class="modal-info-item">
                        <span class="detail-label">Country</span>
                        <span class="detail-value">${l||"N/A"}</span>
                    </div>
                    </div>
                </div>
            </div>
            <div class="biography">
                <h5 class="detail-label">Biography</h5>
                <p class="modal-info-bio">
                    ${h||"No biography available."}
                </p>
            </div>
            ${H?`<div class="genres">${H}</div>`:""}
            </div>`;o.aboutArtist.innerHTML=de;let F="";D&&D.length>0?D.forEach(B=>{const ue=B.strAlbum||"Unknown Album",x=B.tracks;let R="";x&&x.length>0?x.forEach((P,me)=>{const pe=(me+1)%2===0?"albom-track even":"albom-track odd",_=P.movie,fe=typeof _=="string"&&_.trim()!==""?`<a class="link-icon-youtube" href="${_}" target="_blank" rel="noopener noreferrer" aria-label="Watch on YouTube">
                                <svg class="icon-you-tube">
                                    <use href="${c}#icon-you-tube"></use>
                                </svg>
                            </a>`:'<span class="youtube-link-placeholder"></span>';R+=`
                            <li class="${pe}">
                                <span>${P.strTrack||"No track name"}</span>
                                <span>${Ke(P.intDuration)}</span>
                                ${fe}
                            </li>
                        `}):R='<li class="albom-track no-tracks">No tracks available for this album.</li>',F+=`
                    <ul class="modal-alboms-list-item">
                        <li class="albom-list-title">
                            <span class="albom-title">${ue}</span>
                        </li>
                        <li class="track-info">
                            <span>Track</span>
                            <span>Time</span>
                            <span>Link</span>
                        </li>
                        ${R}
                    </ul>
                `}):F='<p class="no-albums-message">No albums found for this artist.</p>',o.modalAlboms.insertAdjacentHTML("beforeend",F),o.modalOverlayArtists.classList.add("is-open"),o.body.classList.add("no-scroll"),o.closeModalBtn.addEventListener("click",C),o.modalOverlayArtists.addEventListener("click",oe),document.addEventListener("keydown",ae),ne()}function C(){o.modalOverlayArtists.classList.remove("is-open"),o.body.classList.remove("no-scroll"),o.closeModalBtn.removeEventListener("click",C),o.modalOverlayArtists.removeEventListener("click",oe),document.removeEventListener("keydown",ae),ne()}o.artistsSection?o.artistsSection.addEventListener("click",e=>{const t=e.target.closest(".artist-card-link");if(t){const n=t.dataset.artistId;let s=[];const r=t.dataset.genres;if(r)try{s=JSON.parse(r)}catch(a){console.error("Error parsing genres from data attribute:",a),s=[]}Ue(n,s)}}):console.warn('Виконавців з ID "artists-card-id" не знайдено.');
//# sourceMappingURL=index.js.map
