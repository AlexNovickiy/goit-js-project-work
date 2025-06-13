import{a as S,i as g,S as ve}from"./assets/vendor-Cq1ZEsD1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();const r={burgerBtnOpenMenu:document.querySelector(".icon-burger"),burgerBtnCloseMenu:document.querySelector(".icon-close"),headerMenuContainer:document.querySelector(".header-menu-container"),loaderOverlay:document.querySelector(".loader-in"),modalForm:document.querySelector(".feedback-mod"),stars:document.querySelectorAll(".star-rating path"),nameInput:document.querySelector('.feedback-mod [name="name"]'),messageInput:document.querySelector('.feedback-mod [name="message"]'),modalOverlayArtists:document.querySelector(".modal-overlay-artists"),closeBtn:document.querySelector(".close-btn-mod"),feedbackBtn:document.querySelector(".feedback-btn"),menuAnchorAbout:document.querySelector("#menu-anchor-about"),menuAnchorArtists:document.querySelector("#menu-anchor-artists"),menuAnchorReviews:document.querySelector("#menu-anchor-reviews"),artistsGrid:document.getElementById("artists-card-id"),loadMoreBtn:document.getElementById("load-more-btn"),loader:document.querySelector(".modal-loader"),modalOverlay:document.querySelector(".modal-overlay"),body:document.querySelector("body"),closeModalBtn:document.querySelector(".close-btn"),titleName:document.querySelector(".modal-info-title"),aboutArtist:document.querySelector(".modal-info-card"),modalAlboms:document.querySelector(".modal-alboms"),artistsSection:document.querySelector("#artists-card-id")},ge=8,A="https://sound-wave.b.goit.study/api",J="/artists",ye="/genres",he="/albums",Q="/feedbacks";async function be(e=1,t="",s="",n=""){const o={limit:ge,page:e,...t&&{name:t},...s&&{sortName:s},...n&&{genre:n}};try{return(await S.get(`${A}${J}`,{params:o})).data}catch{g.error({title:"Error",message:"Failed to fetch artists.",position:"topRight"})}}async function Le(){try{return(await S.get(`${A}${ye}`)).data}catch{g.error({title:"Error",message:"Failed to fetch genres.",position:"topRight"})}}async function we(e){try{return(await S.get(`${A}${J}/${e}${he}`)).data}catch{g.error({title:"Error",message:"Failed to fetch albums.",position:"topRight"})}}async function Ee(e=1){try{return(await S.get(`${A}${Q}`,{params:{page:e}})).data}catch{g.error({title:"Error",message:"Failed to fetch feedbacks.",position:"topRight"})}}async function ke(e){try{const t=await S.post(`${A}${Q}`,e);return g.success({title:"Success",message:"Feedback submitted successfully.",position:"topRight",timeout:3e3}),t.data}catch{g.error({title:"Error",message:"Failed to submit feedback.",position:"topRight"})}}const{loaderOverlay:X,modalForm:Z,stars:ee,nameInput:Y,messageInput:j,modalOverlay:L,closeBtn:Se,feedbackBtn:Ae}=r;function $e(){X.classList.remove("hidden")}function Me(){X.classList.add("hidden")}let f=0;ee.forEach((e,t)=>{e.addEventListener("mouseenter",()=>{N(t+1)}),e.addEventListener("mouseleave",()=>{N(f)}),e.addEventListener("click",()=>{f=t+1,N(f)})});function N(e){ee.forEach((t,s)=>{s<e?t.setAttribute("fill","#a76cdb"):t.setAttribute("fill","#ffffff")})}function Be(){L.classList.add("is-open"),document.addEventListener("keydown",te)}Ae.addEventListener("click",Be);function q(){L.classList.add("is-close"),setTimeout(()=>{L.classList.remove("is-open","is-close")},300),document.removeEventListener("keydown",te)}Se.addEventListener("click",q);L.addEventListener("click",e=>{e.target===L&&q()});function te(e){e.key==="Escape"&&q()}function Ne(){let e=!0,t=[];return(Y.value.trim().length<2||Y.value.trim().length>16)&&(e=!1,t.push("Name must be between 2 and 16 characters")),(j.value.trim().length<10||j.value.trim().length>512)&&(e=!1,t.push("Message must be between 10 and 512 characters.")),(f<1||f>5)&&(e=!1,t.push("Rating must be between 1 and 5 stars.")),e||t.forEach(s=>{g.error({title:"Error",message:s,position:"topRight",timeout:3e3,pauseOnHover:!0})}),e}function Te(){Z.reset(),N(0),f=0}Z.addEventListener("submit",async e=>{if(e.preventDefault(),!Ne())return;const t={name:Y.value.trim(),rating:f,descr:j.value.trim()};$e(),await ke(t),q(),Te(),Me()});const c="/goit-js-project-work-team-1/assets/sprite-wQKTNHgQ.svg";function qe(e,t=c){const s=Math.floor(e),n=e-s,o=Math.round(n*100);let a="";for(let i=1;i<=5;i++)i<=s?a+=`
          <div class="star">
            <svg class="star-filled"><use href="${t}#star-filled"></use></svg>
          </div>`:i===s+1&&n>0?a+=`
          <div class="star">
            <svg class="star-bg"><use href="${c}#star-filled"></use></svg>
            <svg class="partial-star" style="--percent: ${o}%">
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
      </li>`}function Ie(e,t){const s=e.map(n=>{var l;const o=n.strArtistThumb||"https://via.placeholder.com/350x350?text=No+Image",a=n.genres||[],i=((l=n.genres)==null?void 0:l.map(h=>`<li class="genre-tag">${h}</li>`).join(""))||"",y=n.strBiographyEN||"Короткий опис для цього артиста відсутній.";return`
        <li class="artist-card">
          <img src="${o}" loading="lazy" alt="${n.strArtist}" class="artist-card-image" />
          <div class="artist-card-content">
            <ul class="artist-card-genres">${i}</ul>
            <h3 class="artist-card-name">${n.strArtist}</h3>
            <p class="artist-card-description">${y}</p>
            <button id="learn-more-btn" class="artist-card-link" data-artist-id="${n._id}" data-genres='${JSON.stringify(a)}'>Learn More <svg class="icon-lernmore" width="24" height="24">
      <use href="${c}#icon-caret-arrow-artist-right"></use>
    </svg></button>
          </div>
        </li>
      `}).join("");t.insertAdjacentHTML("beforeend",s)}function Oe(){r.headerMenuContainer.classList.add("is-open"),window.addEventListener("resize",K),r.menuAnchorAbout.addEventListener("click",v),r.menuAnchorArtists.addEventListener("click",v),r.menuAnchorReviews.addEventListener("click",v),document.querySelector("body").classList.add("no-scroll")}function v(){r.headerMenuContainer.classList.remove("is-open"),window.removeEventListener("resize",K),r.menuAnchorAbout.removeEventListener("click",v),r.menuAnchorArtists.removeEventListener("click",v),r.menuAnchorReviews.removeEventListener("click",v),document.querySelector("body").classList.remove("no-scroll")}function K(){window.innerWidth>=768&&(r.headerMenuContainer.classList.remove("is-open"),window.removeEventListener("resize",K),document.querySelector("body").classList.remove("no-scroll"))}function Ce(){r.loader.classList.add("loader")}function se(){r.loader.classList.remove("loader")}r.burgerBtnOpenMenu.addEventListener("click",Oe);r.burgerBtnCloseMenu.addEventListener("click",v);function He({name:e,rating:t,descr:s}){return`
    <div class="swiper-slide">
      <ul class="feedback-stars">${qe(t)}</ul>
      <p class="feedback-text">"${s}"</p>
      <p class="feedback-author">${e}</p>
    </div>
  `}function U(e,t,s){const n=document.querySelector(".swiper-button-prev"),o=document.querySelector(".swiper-button-next");n.classList.toggle("disabled",e===t),o.classList.toggle("disabled",e===s)}async function De(){const{data:e}=await Ee(),t=e.slice(0,30),s=0,n=t.length-1,o=Math.floor(t.length/2);document.querySelector(".swiper-wrapper").innerHTML=t.map(He).join("");const a=new ve(".swiper",{slidesPerView:1,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),i=document.querySelector(".swiper-pagination");i.innerHTML=`
    <span class="swiper-pagination-bullet" data-i="${s}"></span>
    <span class="swiper-pagination-bullet" data-i="${o}"></span>
    <span class="swiper-pagination-bullet" data-i="${n}"></span>`,i.addEventListener("click",l=>{l.target.classList.contains("swiper-pagination-bullet")&&a.slideTo(+l.target.dataset.i)});function y(){const l=a.realIndex;document.querySelectorAll(".swiper-pagination-bullet").forEach(h=>{h.classList.toggle("active",+h.dataset.i===l)}),U(l,s,n)}a.on("slideChange",()=>{y(),U(a.realIndex,s,n)}),y()}De();let d=1,w="",E="",$="";const xe=8,k=document.getElementById("searchInput"),m=document.getElementById("genreDropdown"),I=document.getElementById("genreToggle"),ne=document.getElementById("genreList"),p=document.getElementById("sortingDropdown"),O=document.getElementById("sortingToggle"),Fe=document.getElementById("sortingList"),Pe=document.getElementById("resetBtn"),Re=document.getElementById("resetFiltersBtn"),V=document.querySelector(".icon-chevron"),_e=document.getElementById("artists-card-id"),G=document.querySelector(".spinner"),Ge=r.artistsGrid,T=r.loadMoreBtn,W=document.getElementById("emptyState"),Ye=document.querySelector(".search-and-filters-opener"),z=document.querySelector(".filters-panel"),b=document.querySelector(".scrollBtnUp");function M(){m.classList.remove("open"),p.classList.remove("open")}I.addEventListener("click",()=>{m.classList.contains("open")?(m.classList.remove("open"),m.querySelector(".icon-chevron").innerHTML=`<use href="${c}#icon-chevron-up-arrow"></use>`):(M(),m.classList.add("open"),m.querySelector(".icon-chevron").innerHTML=`<use href="${c}#icon-chevron-down-arrow"></use>`)});O.addEventListener("click",()=>{p.classList.contains("open")?(p.classList.remove("open"),p.querySelector(".icon-chevron").innerHTML=`<use href="${c}#icon-chevron-up-arrow"></use>`):(M(),p.classList.add("open"),p.querySelector(".icon-chevron").innerHTML=`<use href="${c}#icon-chevron-down-arrow"></use>`)});document.addEventListener("click",e=>{!m.contains(e.target)&&!p.contains(e.target)&&M()});Ye.addEventListener("click",()=>{z.classList.toggle("open"),z.classList.contains("open")?V.innerHTML=`<use href="${c}#icon-chevron-down-arrow"></use>`:V.innerHTML=`<use href="${c}#icon-chevron-up-arrow"></use>`});async function je(){const e=await Le();e!=null&&e.length&&(ne.innerHTML='<div class="dropdown-item" data-value="">Default</div>'+e.map(t=>`<div class="dropdown-item" data-value="${t.genre}">${t.genre}</div>`).join(""))}je();Fe.addEventListener("click",e=>{e.target.classList.contains("dropdown-item")&&(E=e.target.dataset.value==="default"?"":e.target.dataset.value,O.querySelector(".dropdown-title").textContent=`${E||"Default"}`,d=1,M(),u(!0))});ne.addEventListener("click",e=>{e.target.classList.contains("dropdown-item")&&(w=e.target.dataset.value==="Default"?"":e.target.dataset.value,I.querySelector(".dropdown-title").textContent=`${w||"Default"}`,d=1,M(),u(!0))});k.addEventListener("keydown",e=>{e.key==="Enter"&&($=k.value.trim(),d=1,u(!0))});z.addEventListener("submit",e=>{e.preventDefault(),$=k.value.trim(),d=1,u(!0)});Pe.addEventListener("click",()=>{w="",E="",$="",k.value="",I.querySelector(".dropdown-title").textContent="Genres",O.querySelector(".dropdown-title").textContent="Sorting",d=1,u(!0)});Re.addEventListener("click",()=>{w="",E="",$="",k.value="",I.querySelector(".dropdown-title").textContent="Genres",O.querySelector(".dropdown-title").textContent="Sorting",d=1,u(!0)});T.addEventListener("click",async()=>{d++,await u(),window.scrollBy({top:document.querySelector(".artist-card").clientHeight*2,behavior:"smooth"})});async function u(e=!1){T.style.display="none",W.classList.add("hidden"),G.classList.remove("hidden"),e&&(document.getElementById("artists-card-id").innerHTML="");const t={page:d,name:$,sortName:E||void 0,genre:w||void 0},s=await be(t.page,t.name,t.sortName,t.genre),n=(s==null?void 0:s.artists)||[];if(e&&n.length===0){W.classList.remove("hidden"),_e.innerHTML="",G.classList.add("hidden");return}Ie(n,Ge),s.page*xe>=s.totalArtists?T.style.display="none":T.style.display="flex",G.classList.add("hidden")}u(!0);function ze(){window.scrollY>(document.body.scrollHeight-window.innerHeight)/2?b.classList.add("visible-scrollBtn"):b.classList.remove("visible-scrollBtn");function e(){window.scrollTo({top:0,behavior:"smooth"})}b.classList.contains("visible-scrollBtn")?b.addEventListener("click",e):b.removeEventListener("click",e)}document.addEventListener("scroll",ze);window.history.scrollRestoration="manual";window.addEventListener("load",()=>{window.scrollTo(0,0)});function re(e){e.target===r.modalOverlayArtists&&C()}function oe(e){r.modalOverlayArtists.classList.contains("is-open")&&e.key==="Escape"&&C()}function Ke(e,t){const s=parseInt(e,10),n=parseInt(t,10);return isNaN(s)&&isNaN(n)?"information missing":!isNaN(s)&&isNaN(n)?`${s}–present`:!isNaN(s)&&!isNaN(n)?`${s}–${n}`:"information missing"}function Ue(e){if(typeof e=="string"){const a=parseInt(e,10);if(isNaN(a))return"N/A";e=a}if(e==null||isNaN(e))return"N/A";const t=Math.floor(e/1e3),s=Math.floor(t/60),n=t%60,o=n<10?`0${n}`:n;return`${s}:${o}`}async function Ve(e,t=[]){Ce();const s=r.aboutArtist.querySelector(".modal-info-description");s&&(s.innerHTML=""),r.modalAlboms.innerHTML="";const n=await we(e),{strArtist:o,strArtistThumb:a,strGender:i,intMembers:y,strCountry:l,strBiographyEN:h,intFormedYear:ae,intDisbandedYear:ie,albumsList:H}=n;r.titleName.textContent=o||"N/A";const ce=Ke(ae,ie);let D="";t&&Array.isArray(t)&&t.length>0&&(D=t.map(B=>`<span class="genre-tag">${B.trim()}</span>`).join(""));const le=` <img class="ph-artist" src="${a}" alt="${o}" />
  <div class="modal-info-description">
            <div class="modal-info-list">
                <div class="wrap-info-item">
                <div class="wrapp">
                    <div class="modal-info-item">
                        <span class="detail-label">Years active</span>
                        <span class="detail-value">${ce}</span>
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
            ${D?`<div class="genres">${D}</div>`:""}
            </div>`;r.aboutArtist.innerHTML=le;let x="";H&&H.length>0?H.forEach(B=>{const ue=B.strAlbum||"Unknown Album",F=B.tracks;let P="";F&&F.length>0?F.forEach((R,me)=>{const pe=(me+1)%2===0?"albom-track even":"albom-track odd",_=R.movie,fe=typeof _=="string"&&_.trim()!==""?`<a class="link-icon-youtube" href="${_}" target="_blank" rel="noopener noreferrer" aria-label="Watch on YouTube">
                                <svg class="icon-you-tube">
                                    <use href="${c}#icon-you-tube"></use>
                                </svg>
                            </a>`:'<span class="youtube-link-placeholder"></span>';P+=`
                            <li class="${pe}">
                                <span>${R.strTrack||"No track name"}</span>
                                <span>${Ue(R.intDuration)}</span>
                                ${fe}
                            </li>
                        `}):P='<li class="albom-track no-tracks">No tracks available for this album.</li>',x+=`
                    <ul class="modal-alboms-list-item">
                        <li class="albom-list-title">
                            <span class="albom-title">${ue}</span>
                        </li>
                        <li class="track-info">
                            <span>Track</span>
                            <span>Time</span>
                            <span>Link</span>
                        </li>
                        ${P}
                    </ul>
                `}):x='<p class="no-albums-message">No albums found for this artist.</p>',r.modalAlboms.insertAdjacentHTML("beforeend",x),r.modalOverlayArtists.classList.add("is-open");const de=window.scrollY||window.pageYOffset;r.body.style.top=`-${de}px`,r.body.classList.add("no-scroll"),r.closeModalBtn.addEventListener("click",C),r.modalOverlayArtists.addEventListener("click",re),document.addEventListener("keydown",oe),se()}function C(){r.modalOverlayArtists.classList.remove("is-open");const e=parseInt(r.body.style.top||"0")*-1;r.body.classList.remove("no-scroll"),r.body.style.top="",window.scrollTo(0,e),r.closeModalBtn.removeEventListener("click",C),r.modalOverlayArtists.removeEventListener("click",re),document.removeEventListener("keydown",oe),se()}r.artistsSection?r.artistsSection.addEventListener("click",e=>{const t=e.target.closest(".artist-card-link");if(t){const s=t.dataset.artistId;let n=[];const o=t.dataset.genres;if(o)try{n=JSON.parse(o)}catch(a){console.error("Error parsing genres from data attribute:",a),n=[]}Ve(s,n)}}):console.warn('Виконавців з ID "artists-card-id" не знайдено.');
//# sourceMappingURL=index.js.map
