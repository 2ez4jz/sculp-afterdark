(function(){
  'use strict';
  var root=document.getElementById('sculp-site');
  if(!root)return;
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var progress=document.createElement('div');
  progress.className='sculp-progress';
  progress.setAttribute('aria-hidden','true');
  document.body.appendChild(progress);
  var ticking=false;
  function updateProgress(){
    var max=document.documentElement.scrollHeight-window.innerHeight;
    progress.style.transform='scaleX('+(max>0?Math.max(0,Math.min(1,window.scrollY/max)):0)+')';
    ticking=false;
  }
  window.addEventListener('scroll',function(){
    if(!ticking){requestAnimationFrame(updateProgress);ticking=true}
  },{passive:true});
  window.addEventListener('hashchange',function(){requestAnimationFrame(updateProgress)});
  updateProgress();

  if(!reduce&&'IntersectionObserver' in window){
    var targets=root.querySelectorAll('.view h1,.view h2,.view .photo,.view .price-card,.view .home-service,.view .card,.view .team-person,.view .concierge-ui');
    targets.forEach(function(el){el.classList.add('reveal')});
    var observer=new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}
      });
    },{threshold:.08,rootMargin:'0px 0px 60px 0px'});
    targets.forEach(function(el){observer.observe(el)});
    root.classList.add('motion-ready');
  }

  var gallery=Array.from(root.querySelectorAll('.view[data-page="portfolio"] .photo img'));
  if(!gallery.length)return;
  var modal=document.createElement('div');
  modal.className='sculp-lightbox';
  modal.setAttribute('role','dialog');
  modal.setAttribute('aria-modal','true');
  modal.setAttribute('aria-label','Portfolio image');
  modal.innerHTML='<button class="close" type="button" aria-label="Close image">×</button><button class="prev" type="button" aria-label="Previous image">←</button><img alt=""><button class="next" type="button" aria-label="Next image">→</button><span class="count" aria-live="polite"></span>';
  document.body.appendChild(modal);
  var image=modal.querySelector('img'),count=modal.querySelector('.count'),index=0,lastFocus=null;
  function show(i){
    index=(i+gallery.length)%gallery.length;
    image.src=gallery[index].src;
    image.alt=gallery[index].alt;
    count.textContent=String(index+1).padStart(2,'0')+' / '+String(gallery.length).padStart(2,'0');
  }
  function close(){
    modal.classList.remove('open');
    document.body.style.overflow='';
    image.removeAttribute('src');
    if(lastFocus)lastFocus.focus();
  }
  gallery.forEach(function(img,i){
    var frame=img.parentElement;
    frame.setAttribute('role','button');
    frame.setAttribute('tabindex','0');
    frame.setAttribute('aria-label','Open image '+(i+1)+' of '+gallery.length);
    function open(){
      lastFocus=frame;show(i);modal.classList.add('open');
      document.body.style.overflow='hidden';modal.querySelector('.close').focus();
    }
    frame.addEventListener('click',open);
    frame.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}});
  });
  modal.querySelector('.close').addEventListener('click',close);
  modal.querySelector('.prev').addEventListener('click',function(){show(index-1)});
  modal.querySelector('.next').addEventListener('click',function(){show(index+1)});
  modal.addEventListener('click',function(e){if(e.target===modal)close()});
  window.addEventListener('keydown',function(e){
    if(!modal.classList.contains('open'))return;
    if(e.key==='Escape')close();
    if(e.key==='ArrowLeft')show(index-1);
    if(e.key==='ArrowRight')show(index+1);
    if(e.key==='Tab'){
      var buttons=Array.from(modal.querySelectorAll('button'));
      var at=buttons.indexOf(document.activeElement);
      if(at<0||e.shiftKey&&at===0){e.preventDefault();buttons[buttons.length-1].focus()}
      else if(!e.shiftKey&&at===buttons.length-1){e.preventDefault();buttons[0].focus()}
    }
  });

  if(!reduce&&window.matchMedia('(hover: hover) and (pointer: fine)').matches){
    var cursor=document.createElement('div');
    cursor.className='sculp-cursor';
    cursor.setAttribute('aria-hidden','true');
    document.body.appendChild(cursor);
    root.querySelectorAll('.view[data-page="portfolio"] .photo:has(img)').forEach(function(el){
      el.addEventListener('pointerenter',function(){cursor.classList.add('visible')});
      el.addEventListener('pointerleave',function(){cursor.classList.remove('visible')});
      el.addEventListener('pointermove',function(e){cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});
    });
  }
})();
