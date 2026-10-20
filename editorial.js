/* Progressive visual and accessibility layer. Business handlers live in index.html. */
(function(){
 'use strict';
 var root=document.getElementById('sculp-site');if(!root)return;
 var reduce=matchMedia('(prefers-reduced-motion: reduce)');
 var main=root.querySelector('main'),nav=root.querySelector('.nav'),toggle=root.querySelector('.mobile-toggle'),foot=root.querySelector('main+footer');
 var seen=new WeakSet(),observer;
 var meta={
  home:['SCULP Studio | Bridal & Beauty Styling Toronto','Toronto beauty studio for bridal, event, commercial and photoshoot styling, plus private and group education. Available for travel.'],
  bridal:['Bridal Makeup & Styling | SCULP Studio Toronto','Explore SCULP bridal trials, wedding-day styling, artist tiers and additional services. Toronto bridal beauty, available for travel.'],
  occasions:['Occasion Styling & Education | SCULP Studio Toronto','Event, personal, commercial and photoshoot styling, plus private and group makeup education. Explore services and enquire with SCULP Studio.'],
  portfolio:['Artist Portfolio | SCULP Studio Toronto','Explore real bridal, editorial and occasion work by the artists of SCULP Studio. Find the artist whose point of view feels right for you.'],
  'artist-portfolios':['Individual Artist Portfolios | SCULP Studio Toronto','Explore each SCULP artist’s individual selection of bridal beauty, wedding-day and editorial styling. Toronto and available for travel.'],
  team:['Meet the Artists | SCULP Studio Toronto','Meet Miranda and the SCULP Studio artist team. Explore their approach, specialties and individual work, then enquire for your date.'],
  about:['About the Studio | SCULP Studio Toronto','Discover the SCULP approach to modern beauty and visit our Markham studio. Find our address, arrival information and enquiry details.'],
  book:['Enquire About Your Date | SCULP Studio Toronto','Tell SCULP Studio about your service, date, location and artist preference. Submit an enquiry and receive a reply within 24 hours.'],
  'enquiry-sent':['Enquiry Sent | SCULP Studio','Thank you for contacting SCULP Studio. Your enquiry has been submitted successfully. We’ll reply within 24 hours.']
 };
 function closeMenu(restore){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');main.inert=false;if(foot)foot.inert=false;if(restore)toggle.focus();}
 toggle.addEventListener('click',function(){
  var open=nav.classList.contains('open');main.inert=open;if(foot)foot.inert=open;
  if(open)nav.querySelector('a').focus();
 });
 document.addEventListener('keydown',function(e){
  if(!nav.classList.contains('open'))return;
  if(e.key==='Escape'){e.preventDefault();closeMenu(true);return;}
  if(e.key==='Tab'){
   var links=[toggle].concat(Array.from(nav.querySelectorAll('a'))),i=links.indexOf(document.activeElement);
   if(e.shiftKey&&i<=0){e.preventDefault();links[links.length-1].focus();}
   else if(!e.shiftKey&&i===links.length-1){e.preventDefault();toggle.focus();}
  }
 });
 document.addEventListener('click',function(e){if(nav.classList.contains('open')&&!e.target.closest('.mast'))closeMenu(false);});
 matchMedia('(min-width:951px)').addEventListener('change',function(e){if(e.matches)closeMenu(false);});
 if('IntersectionObserver' in window){
  observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){
   if(!entry.isIntersecting||entry.target.closest('[hidden]'))return;
   if(!reduce.matches)entry.target.classList.add('is-revealed');
   observer.unobserve(entry.target);
  });},{threshold:.08});
 }
 root.querySelectorAll('.detail-toggle').forEach(function(button){
  button.addEventListener('click',function(){
   var open=this.getAttribute('aria-pressed')!=='true';this.setAttribute('aria-pressed',String(open));this.closest('.photo').classList.toggle('is-inspected',open);
   this.innerHTML=open?'Back to the full look <span aria-hidden="true">−</span>':'Study the detail <span aria-hidden="true">+</span>';
  });
 });
 function onRoute(){
  closeMenu(false);
  var page=root.querySelector('article.view:not([hidden])');if(!page)return;
  var info=meta[page.dataset.page];if(info){document.title=info[0];document.querySelector('meta[name="description"]').content=info[1];}
  page.querySelectorAll('.photo').forEach(function(el){if(!seen.has(el)){seen.add(el);if(observer)observer.observe(el);}});
  var heading=page.querySelector('h1');if(heading)heading.setAttribute('tabindex','-1');
  if(location.hash&&heading)heading.focus({preventScroll:true});
 }
 window.addEventListener('sculp:route-rendered',onRoute);onRoute();
 reduce.addEventListener('change',function(){root.querySelectorAll('.is-revealed').forEach(function(el){el.classList.remove('is-revealed');});});
})();
