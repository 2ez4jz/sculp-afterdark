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

})();
