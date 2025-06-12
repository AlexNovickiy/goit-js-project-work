import{a as S,i as g,S as ge}from"./assets/vendor-Cq1ZEsD1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();const r={burgerBtnOpenMenu:document.querySelector(".icon-burger"),burgerBtnCloseMenu:document.querySelector(".icon-close"),headerMenuContainer:document.querySelector(".header-menu-container"),loaderOverlay:document.querySelector(".loader-in"),modalForm:document.querySelector(".feedback-mod"),stars:document.querySelectorAll(".star-rating path"),nameInput:document.querySelector('.feedback-mod [name="name"]'),messageInput:document.querySelector('.feedback-mod [name="message"]'),modalOverlayArtists:document.querySelector(".modal-overlay-artists"),closeBtn:document.querySelector(".close-btn-mod"),feedbackBtn:document.querySelector(".feedback-btn"),menuAnchorAbout:document.querySelector("#menu-anchor-about"),menuAnchorArtists:document.querySelector("#menu-anchor-artists"),menuAnchorReviews:document.querySelector("#menu-anchor-reviews"),artistsGrid:document.getElementById("artists-card-id"),loadMoreBtn:document.getElementById("load-more-btn"),loader:document.querySelector(".modal-loader"),modalOverlay:document.querySelector(".modal-overlay"),body:document.querySelector("body"),closeModalBtn:document.querySelector(".close-btn"),titleName:document.querySelector(".modal-info-title"),aboutArtist:document.querySelector(".modal-info-card"),modalAlboms:document.querySelector(".modal-alboms"),artistsSection:document.querySelector("#artists-card-id")},ye=8,A="https://sound-wave.b.goit.study/api",Q="/artists",he="/genres",be="/albums",X="/feedbacks";async function Le(e=1,t="",s="",n=""){const o={limit:ye,page:e,...t&&{name:t},...s&&{sortName:s},...n&&{genre:n}};try{return(await S.get(`${A}${Q}`,{params:o})).data}catch{g.error({title:"Error",message:"Failed to fetch artists.",position:"topRight"})}}async function we(){try{return(await S.get(`${A}${he}`)).data}catch{g.error({title:"Error",message:"Failed to fetch genres.",position:"topRight"})}}async function Ee(e){try{return(await S.get(`${A}${Q}/${e}${be}`)).data}catch{g.error({title:"Error",message:"Failed to fetch albums.",position:"topRight"})}}async function ke(e=1){try{return(await S.get(`${A}${X}`,{params:{page:e}})).data}catch{g.error({title:"Error",message:"Failed to fetch feedbacks.",position:"topRight"})}}async function Se(e){try{const t=await S.post(`${A}${X}`,e);return g.success({title:"Success",message:"Feedback submitted successfully.",position:"topRight",timeout:3e3}),t.data}catch{g.error({title:"Error",message:"Failed to submit feedback.",position:"topRight"})}}const{loaderOverlay:Z,modalForm:ee,stars:te,nameInput:j,messageInput:z,modalOverlay:L,closeBtn:Ae,feedbackBtn:$e}=r;function Me(){Z.classList.remove("hidden")}function Te(){Z.classList.add("hidden")}let f=0;te.forEach((e,t)=>{e.addEventListener("mouseenter",()=>{B(t+1)}),e.addEventListener("mouseleave",()=>{B(f)}),e.addEventListener("click",()=>{f=t+1,B(f)})});function B(e){te.forEach((t,s)=>{s<e?t.setAttribute("fill","#a76cdb"):t.setAttribute("fill","#ffffff")})}function Be(){L.classList.add("is-open"),document.addEventListener("keydown",se)}$e.addEventListener("click",Be);function I(){L.classList.add("is-close"),setTimeout(()=>{L.classList.remove("is-open","is-close")},300),document.removeEventListener("keydown",se)}Ae.addEventListener("click",I);L.addEventListener("click",e=>{e.target===L&&I()});function se(e){e.key==="Escape"&&I()}function Ne(){let e=!0,t=[];return(j.value.trim().length<2||j.value.trim().length>16)&&(e=!1,t.push("Name must be between 2 and 16 characters")),(z.value.trim().length<10||z.value.trim().length>512)&&(e=!1,t.push("Message must be between 10 and 512 characters.")),(f<1||f>5)&&(e=!1,t.push("Rating must be between 1 and 5 stars.")),e||t.forEach(s=>{g.error({title:"Error",message:s,position:"topRight",timeout:3e3,pauseOnHover:!0})}),e}function qe(){ee.reset(),B(0),f=0}ee.addEventListener("submit",async e=>{if(e.preventDefault(),!Ne())return;const t={name:j.value.trim(),rating:f,descr:z.value.trim()};Me(),await Se(t),I(),qe(),Te()});const c="/goit-js-project-work-team-1/assets/sprite-wQKTNHgQ.svg";function Ie(e,t=c){const s=Math.floor(e),n=e-s,o=Math.round(n*100);let a="";for(let i=1;i<=5;i++)i<=s?a+=`
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
      </li>`}function Oe(e,t){const s=e.map(n=>{var l;const o=n.strArtistThumb||"https://via.placeholder.com/350x350?text=No+Image",a=n.genres||[],i=((l=n.genres)==null?void 0:l.map(h=>`<li class="genre-tag">${h}</li>`).join(""))||"",y=n.strBiographyEN||"Короткий опис для цього артиста відсутній.";return`
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
      `}).join("");t.insertAdjacentHTML("beforeend",s)}function Ce(){r.headerMenuContainer.classList.add("is-open"),window.addEventListener("resize",U),r.menuAnchorAbout.addEventListener("click",v),r.menuAnchorArtists.addEventListener("click",v),r.menuAnchorReviews.addEventListener("click",v),document.querySelector("body").classList.add("no-scroll")}function v(){r.headerMenuContainer.classList.remove("is-open"),window.removeEventListener("resize",U),r.menuAnchorAbout.removeEventListener("click",v),r.menuAnchorArtists.removeEventListener("click",v),r.menuAnchorReviews.removeEventListener("click",v),document.querySelector("body").classList.remove("no-scroll")}function U(){window.innerWidth>=768&&(r.headerMenuContainer.classList.remove("is-open"),window.removeEventListener("resize",U),document.querySelector("body").classList.remove("no-scroll"))}function He(){r.loader.classList.add("loader")}function ne(){r.loader.classList.remove("loader")}r.burgerBtnOpenMenu.addEventListener("click",Ce);r.burgerBtnCloseMenu.addEventListener("click",v);function De({name:e,rating:t,descr:s}){return`
    <div class="swiper-slide">
      <ul class="feedback-stars">${Ie(t)}</ul>
      <p class="feedback-text">"${s}"</p>
      <p class="feedback-author">${e}</p>
    </div>
  `}function V(e,t,s){const n=document.querySelector(".swiper-button-prev"),o=document.querySelector(".swiper-button-next");n.classList.toggle("disabled",e===t),o.classList.toggle("disabled",e===s)}async function xe(){const{data:e}=await ke(),t=e.slice(0,30),s=0,n=t.length-1,o=Math.floor(t.length/2);document.querySelector(".swiper-wrapper").innerHTML=t.map(De).join("");const a=new ge(".swiper",{slidesPerView:1,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),i=document.querySelector(".swiper-pagination");i.innerHTML=`
    <span class="swiper-pagination-bullet" data-i="${s}"></span>
    <span class="swiper-pagination-bullet" data-i="${o}"></span>
    <span class="swiper-pagination-bullet" data-i="${n}"></span>`,i.addEventListener("click",l=>{l.target.classList.contains("swiper-pagination-bullet")&&a.slideTo(+l.target.dataset.i)});function y(){const l=a.realIndex;document.querySelectorAll(".swiper-pagination-bullet").forEach(h=>{h.classList.toggle("active",+h.dataset.i===l)}),V(l,s,n)}a.on("slideChange",()=>{y(),V(a.realIndex,s,n)}),y()}xe();let d=1,w="",E="",$="";const Fe=8,k=document.getElementById("searchInput"),m=document.getElementById("genreDropdown"),O=document.getElementById("genreToggle"),re=document.getElementById("genreList"),p=document.getElementById("sortingDropdown"),C=document.getElementById("sortingToggle"),Pe=document.getElementById("sortingList"),Re=document.getElementById("resetBtn"),_e=document.getElementById("resetFiltersBtn"),W=document.querySelector(".icon-chevron"),Ge=document.getElementById("artists-card-id"),Y=document.querySelector(".spinner"),q=r.artistsGrid,N=r.loadMoreBtn,J=document.getElementById("emptyState"),Ye=document.querySelector(".search-and-filters-opener"),K=document.querySelector(".filters-panel"),b=document.querySelector(".scrollBtnUp");function M(){m.classList.remove("open"),p.classList.remove("open")}O.addEventListener("click",()=>{m.classList.contains("open")?(m.classList.remove("open"),m.querySelector(".icon-chevron").innerHTML=`<use href="${c}#icon-chevron-up-arrow"></use>`):(M(),m.classList.add("open"),m.querySelector(".icon-chevron").innerHTML=`<use href="${c}#icon-chevron-down-arrow"></use>`)});C.addEventListener("click",()=>{p.classList.contains("open")?(p.classList.remove("open"),p.querySelector(".icon-chevron").innerHTML=`<use href="${c}#icon-chevron-up-arrow"></use>`):(M(),p.classList.add("open"),p.querySelector(".icon-chevron").innerHTML=`<use href="${c}#icon-chevron-down-arrow"></use>`)});document.addEventListener("click",e=>{!m.contains(e.target)&&!p.contains(e.target)&&M()});Ye.addEventListener("click",()=>{K.classList.toggle("open"),K.classList.contains("open")?W.innerHTML=`<use href="${c}#icon-chevron-down-arrow"></use>`:W.innerHTML=`<use href="${c}#icon-chevron-up-arrow"></use>`});async function je(){const e=await we();e!=null&&e.length&&(re.innerHTML='<div class="dropdown-item" data-value="">Default</div>'+e.map(t=>`<div class="dropdown-item" data-value="${t.genre}">${t.genre}</div>`).join(""))}je();Pe.addEventListener("click",e=>{e.target.classList.contains("dropdown-item")&&(E=e.target.dataset.value==="default"?"":e.target.dataset.value,C.querySelector(".dropdown-title").textContent=`${E||"Default"}`,d=1,M(),u(!0))});re.addEventListener("click",e=>{e.target.classList.contains("dropdown-item")&&(w=e.target.dataset.value==="Default"?"":e.target.dataset.value,O.querySelector(".dropdown-title").textContent=`${w||"Default"}`,d=1,M(),u(!0))});k.addEventListener("keydown",e=>{e.key==="Enter"&&($=k.value.trim(),d=1,u(!0))});K.addEventListener("submit",e=>{e.preventDefault(),$=k.value.trim(),d=1,u(!0)});Re.addEventListener("click",()=>{w="",E="",$="",k.value="",O.querySelector(".dropdown-title").textContent="Genres",C.querySelector(".dropdown-title").textContent="Sorting",d=1,u(!0)});_e.addEventListener("click",()=>{w="",E="",$="",k.value="",O.querySelector(".dropdown-title").textContent="Genres",C.querySelector(".dropdown-title").textContent="Sorting",d=1,u(!0)});N.addEventListener("click",async()=>{d++,await u(),window.scrollTo({top:q.offsetTop+q.offsetHeight,behavior:"smooth"})});async function u(e=!1){N.style.display="none",J.classList.add("hidden"),Y.classList.remove("hidden"),e&&(q.innerHTML="");const t={page:d,name:$,sortName:E||void 0,genre:w||void 0},s=await Le(t.page,t.name,t.sortName,t.genre),n=(s==null?void 0:s.artists)||[];if(e&&n.length===0){J.classList.remove("hidden"),Ge.innerHTML="",Y.classList.add("hidden");return}Oe(n,q),s.page*Fe>=s.totalArtists?N.style.display="none":N.style.display="flex",Y.classList.add("hidden")}u(!0);function ze(){window.scrollY>(document.body.scrollHeight-window.innerHeight)/2?b.classList.add("visible-scrollBtn"):b.classList.remove("visible-scrollBtn");function e(){window.scrollTo({top:0,behavior:"smooth"})}b.classList.contains("visible-scrollBtn")?b.addEventListener("click",e):b.removeEventListener("click",e)}document.addEventListener("scroll",ze);window.history.scrollRestoration="manual";window.addEventListener("load",()=>{window.scrollTo(0,0)});function oe(e){e.target===r.modalOverlayArtists&&H()}function ae(e){r.modalOverlayArtists.classList.contains("is-open")&&e.key==="Escape"&&H()}function Ke(e,t){const s=parseInt(e,10),n=parseInt(t,10);return isNaN(s)&&isNaN(n)?"information missing":!isNaN(s)&&isNaN(n)?`${s}–present`:!isNaN(s)&&!isNaN(n)?`${s}–${n}`:"information missing"}function Ue(e){if(typeof e=="string"){const a=parseInt(e,10);if(isNaN(a))return"N/A";e=a}if(e==null||isNaN(e))return"N/A";const t=Math.floor(e/1e3),s=Math.floor(t/60),n=t%60,o=n<10?`0${n}`:n;return`${s}:${o}`}async function Ve(e,t=[]){He();const s=r.aboutArtist.querySelector(".modal-info-description");s&&(s.innerHTML=""),r.modalAlboms.innerHTML="";const n=await Ee(e),{strArtist:o,strArtistThumb:a,strGender:i,intMembers:y,strCountry:l,strBiographyEN:h,intFormedYear:ie,intDisbandedYear:ce,albumsList:D}=n;r.titleName.textContent=o||"N/A";const le=Ke(ie,ce);let x="";t&&Array.isArray(t)&&t.length>0&&(x=t.map(T=>`<span class="genre-tag">${T.trim()}</span>`).join(""));const de=` <img class="ph-artist" src="${a}" alt="${o}" />
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
            ${x?`<div class="genres">${x}</div>`:""}
            </div>`;r.aboutArtist.innerHTML=de;let F="";D&&D.length>0?D.forEach(T=>{const me=T.strAlbum||"Unknown Album",P=T.tracks;let R="";P&&P.length>0?P.forEach((_,pe)=>{const fe=(pe+1)%2===0?"albom-track even":"albom-track odd",G=_.movie,ve=typeof G=="string"&&G.trim()!==""?`<a class="link-icon-youtube" href="${G}" target="_blank" rel="noopener noreferrer" aria-label="Watch on YouTube">
                                <svg class="icon-you-tube">
                                    <use href="${c}#icon-you-tube"></use>
                                </svg>
                            </a>`:'<span class="youtube-link-placeholder"></span>';R+=`
                            <li class="${fe}">
                                <span>${_.strTrack||"No track name"}</span>
                                <span>${Ue(_.intDuration)}</span>
                                ${ve}
                            </li>
                        `}):R='<li class="albom-track no-tracks">No tracks available for this album.</li>',F+=`
                    <ul class="modal-alboms-list-item">
                        <li class="albom-list-title">
                            <span class="albom-title">${me}</span>
                        </li>
                        <li class="track-info">
                            <span>Track</span>
                            <span>Time</span>
                            <span>Link</span>
                        </li>
                        ${R}
                    </ul>
                `}):F='<p class="no-albums-message">No albums found for this artist.</p>',r.modalAlboms.insertAdjacentHTML("beforeend",F),r.modalOverlayArtists.classList.add("is-open");const ue=window.scrollY||window.pageYOffset;r.body.style.top=`-${ue}px`,r.body.classList.add("no-scroll"),r.closeModalBtn.addEventListener("click",H),r.modalOverlayArtists.addEventListener("click",oe),document.addEventListener("keydown",ae),ne()}function H(){r.modalOverlayArtists.classList.remove("is-open");const e=parseInt(r.body.style.top||"0")*-1;r.body.classList.remove("no-scroll"),r.body.style.top="",window.scrollTo(0,e),r.closeModalBtn.removeEventListener("click",H),r.modalOverlayArtists.removeEventListener("click",oe),document.removeEventListener("keydown",ae),ne()}r.artistsSection?r.artistsSection.addEventListener("click",e=>{const t=e.target.closest(".artist-card-link");if(t){const s=t.dataset.artistId;let n=[];const o=t.dataset.genres;if(o)try{n=JSON.parse(o)}catch(a){console.error("Error parsing genres from data attribute:",a),n=[]}Ve(s,n)}}):console.warn('Виконавців з ID "artists-card-id" не знайдено.');
//# sourceMappingURL=index.js.map
