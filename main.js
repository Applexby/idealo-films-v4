// IDEALO FILMS — main.js v3
const ICONS={instagram:`<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,facebook:`<svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,linkedin:`<svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`};
document.querySelectorAll('[data-social]').forEach(a=>{const t=a.getAttribute('data-social');if(ICONS[t])a.innerHTML=ICONS[t];});

const navbar=document.getElementById('navbar');
if(navbar)window.addEventListener('scroll',()=>navbar.classList.toggle('scrolled',window.scrollY>60));

const hamburger=document.getElementById('hamburger'),navLinks=document.querySelector('.nav-links');
if(hamburger&&navLinks){hamburger.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');const sp=hamburger.querySelectorAll('span');sp[1].style.opacity=open?'0':'';sp[0].style.transform=open?'rotate(45deg) translate(5px,5px)':'';sp[2].style.transform=open?'rotate(-45deg) translate(5px,-5px)':'';});navLinks.querySelectorAll('a').forEach(l=>l.addEventListener('click',()=>{navLinks.classList.remove('open');hamburger.querySelectorAll('span').forEach(s=>{s.style.transform='';s.style.opacity='';});}));}

document.querySelectorAll('.faq-question').forEach(q=>{q.addEventListener('click',()=>{const item=q.parentElement,wasOpen=item.classList.contains('open');document.querySelectorAll('.faq-item').forEach(i=>{i.classList.remove('open');i.querySelector('.faq-question span').textContent='+';});if(!wasOpen){item.classList.add('open');q.querySelector('span').textContent='−';}});});
document.querySelectorAll('.faq-item.open .faq-question span').forEach(s=>s.textContent='−');

document.querySelectorAll('.tab-btn').forEach(btn=>{btn.addEventListener('click',()=>{const t=btn.getAttribute('data-tab');document.querySelectorAll('.tab-btn').forEach(b=>b.classList.toggle('active',b.getAttribute('data-tab')===t));document.querySelectorAll('.proyectos-section').forEach(s=>s.classList.toggle('active',s.id===t));});});

// Video play handler — supports .proyecto-thumb (corporativo) and .reel-video (reels)
// Corporativo/Eventos/Publicitario → open in modal
// Reels → play inline
document.querySelectorAll('.thumb-overlay[data-url]').forEach(overlay=>{
  overlay.addEventListener('click',()=>{
    const url = overlay.getAttribute('data-url');
    const isReel = !!overlay.closest('.reel-video');

    if(isReel){
      // Inline play for reels
      const reel = overlay.closest('.reel-video');
      const iframe = reel.querySelector('iframe.video-embed');
      if(!iframe) return;
      iframe.src = url + (url.includes('?') ? '&' : '?') + 'autoplay=1';
      reel.classList.add('playing');
    } else {
      // Open modal for landscape videos
      const vertical = overlay.getAttribute('data-vertical') === 'true';
      openVideoModal(url + (url.includes('?') ? '&' : '?') + 'autoplay=1', vertical);
    }
  });
});

// Video Modal
function openVideoModal(url, vertical=false){
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('modalIframe');
  const wrap = document.getElementById('modalWrap');
  if(!modal || !iframe) return;
  iframe.src = url;
  wrap.className = 'modal-video-wrap' + (vertical ? ' vertical' : '');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeVideoModal(){
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('modalIframe');
  if(!modal) return;
  modal.classList.remove('open');
  if(iframe) iframe.src = '';
  document.body.style.overflow = '';
}
document.addEventListener('DOMContentLoaded',()=>{
  const modal = document.getElementById('videoModal');
  const closeBtn = document.getElementById('modalClose');
  if(closeBtn) closeBtn.addEventListener('click', closeVideoModal);
  if(modal){
    modal.addEventListener('click', e=>{ if(e.target===modal) closeVideoModal(); });
    document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeVideoModal(); });
  }
});

// ===== LIGHTBOX =====
let lbPhotos=[],lbIdx=0;
function openLb(photos,idx,title){lbPhotos=photos;lbIdx=idx;document.getElementById('lb-title').textContent=title||'';document.getElementById('lightbox').classList.add('open');document.body.style.overflow='hidden';buildThumbs();renderLb();}
function closeLb(){document.getElementById('lightbox').classList.remove('open');document.body.style.overflow='';}
function renderLb(){document.getElementById('lb-img').src=lbPhotos[lbIdx];document.getElementById('lb-counter').textContent=(lbIdx+1)+' / '+lbPhotos.length;document.querySelectorAll('.lb-thumb').forEach((t,i)=>t.classList.toggle('active',i===lbIdx));}
function lbNext(){lbIdx=(lbIdx+1)%lbPhotos.length;renderLb();}
function lbPrev(){lbIdx=(lbIdx-1+lbPhotos.length)%lbPhotos.length;renderLb();}
function buildThumbs(){const c=document.getElementById('lb-thumbs');if(!c)return;c.innerHTML='';lbPhotos.forEach((src,i)=>{const d=document.createElement('div');d.className='lb-thumb'+(i===0?' active':'');d.innerHTML=`<img src="${src}" loading="lazy"/>`;d.addEventListener('click',()=>{lbIdx=i;renderLb();});c.appendChild(d);});}

document.addEventListener('DOMContentLoaded',()=>{
  const lb=document.getElementById('lightbox');
  if(lb){
    document.getElementById('lb-close').addEventListener('click',closeLb);
    document.getElementById('lb-next').addEventListener('click',lbNext);
    document.getElementById('lb-prev').addEventListener('click',lbPrev);
    lb.addEventListener('click',e=>{if(e.target===lb)closeLb();});
    document.addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;if(e.key==='Escape')closeLb();if(e.key==='ArrowRight')lbNext();if(e.key==='ArrowLeft')lbPrev();});
    document.querySelectorAll('.foto-proyecto-card').forEach(card=>{
      const photos=JSON.parse(card.getAttribute('data-photos')||'[]');
      const title=card.getAttribute('data-title')||'';
      card.addEventListener('click',()=>openLb(photos,0,title));
    });
  }
  // Scroll reveal
  const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)';}});},{threshold:.08,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.servicio-card,.resena-card,.paquete-card,.intro-card,.mv-card,.foto-proyecto-card,.proyecto-card').forEach(el=>{el.style.opacity='0';el.style.transform='translateY(18px)';el.style.transition='opacity 0.5s ease,transform 0.5s ease';obs.observe(el);});
});

// TikTok icon patch - add to ICONS object on load
document.addEventListener('DOMContentLoaded', () => {
  const tiktokSVG = `<svg viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`;
  document.querySelectorAll('[data-social="tiktok"]').forEach(a => { a.innerHTML = tiktokSVG; });
});

// ══ DEMO REEL CUSTOM PLAYER ══
function reproducirDemo() {
  const poster = document.getElementById('demoPoster');
  const video = document.getElementById('demoVideo');
  const controls = document.getElementById('demoControls');
  if (!video) return;
  poster.style.display = 'none';
  video.style.display = 'block';
  controls.style.display = 'block';
  video.play();
  document.getElementById('iconPlay').style.display = 'none';
  document.getElementById('iconPause').style.display = 'block';
  iniciarControles();
}

function iniciarControles() {
  const video = document.getElementById('demoVideo');
  if (!video || video._ctrlInit) return;
  video._ctrlInit = true;

  // Progress
  video.addEventListener('timeupdate', () => {
    const pct = (video.currentTime / video.duration) * 100 || 0;
    const fill = document.getElementById('demoProgressFill');
    const thumb = document.getElementById('demoProgressThumb');
    if (fill) fill.style.width = pct + '%';
    if (thumb) thumb.style.right = (100 - pct) + '%';
    actualizarTiempo();
  });

  // Click on progress bar
  const wrap = document.getElementById('demoProgressWrap');
  if (wrap) {
    wrap.addEventListener('click', e => {
      const rect = wrap.getBoundingClientRect();
      const pct = (e.clientX - rect.left) / rect.width;
      video.currentTime = pct * video.duration;
    });
  }

  // Volume slider
  const vol = document.getElementById('demoVolume');
  if (vol) vol.addEventListener('input', () => { video.volume = vol.value; });

  // End of video → show poster again
  video.addEventListener('ended', () => {
    document.getElementById('demoPoster').style.display = 'block';
    video.style.display = 'none';
    document.getElementById('demoControls').style.display = 'none';
    document.getElementById('iconPlay').style.display = 'block';
    document.getElementById('iconPause').style.display = 'none';
    video._ctrlInit = false;
  });
}

function toggleDemo() {
  const video = document.getElementById('demoVideo');
  if (!video) return;
  if (video.paused) {
    video.play();
    document.getElementById('iconPlay').style.display = 'none';
    document.getElementById('iconPause').style.display = 'block';
  } else {
    video.pause();
    document.getElementById('iconPlay').style.display = 'block';
    document.getElementById('iconPause').style.display = 'none';
  }
}

function toggleMute() {
  const video = document.getElementById('demoVideo');
  if (!video) return;
  video.muted = !video.muted;
  document.getElementById('iconVol').style.display = video.muted ? 'none' : 'block';
  document.getElementById('iconMute').style.display = video.muted ? 'block' : 'none';
}

function reiniciarDemo() {
  const video = document.getElementById('demoVideo');
  if (!video) return;
  video.currentTime = 0;
  video.play();
}

function pantallaCompleta() {
  const wrap = document.getElementById('demoPlayer');
  if (!wrap) return;
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    wrap.requestFullscreen && wrap.requestFullscreen();
  }
}

function actualizarTiempo() {
  const video = document.getElementById('demoVideo');
  const el = document.getElementById('demoTime');
  if (!video || !el) return;
  const fmt = s => `${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,'0')}`;
  el.textContent = `${fmt(video.currentTime)} / ${fmt(video.duration || 0)}`;
}

// ══ COUNTER ANIMATION ══
function animarContador(el) {
  const target = parseInt(el.getAttribute('data-count'));
  const prefix = el.getAttribute('data-prefix') || '';
  const suffix = el.getAttribute('data-suffix') || '';
  const duration = 1200; // ms
  const steps = 40;
  const increment = target / steps;
  let current = 0;
  let step = 0;

  // Easing — fast start, slow end
  const ease = t => 1 - Math.pow(1 - t, 3);

  const timer = setInterval(() => {
    step++;
    const progress = ease(step / steps);
    current = Math.round(progress * target);
    el.textContent = prefix + current + suffix;
    if (step >= steps) {
      el.textContent = prefix + target + suffix;
      clearInterval(timer);
    }
  }, duration / steps);
}

// Trigger counters when section enters viewport
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target._counted) {
        entry.target._counted = true;
        animarContador(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => {
    // Reset to 0 initially
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    el.textContent = prefix + '0' + suffix;
    obs.observe(el);
  });
});
