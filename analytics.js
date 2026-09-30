(function(){
  'use strict';

  var root=document.getElementById('sculp-site');
  if(!root)return;

  var gaId=(document.querySelector('meta[name="sculp-ga4-id"]')||{}).content||'';
  var clarityId=(document.querySelector('meta[name="sculp-clarity-id"]')||{}).content||'';
  var debug=new URLSearchParams(window.location.search).get('analytics_debug')==='1';
  var debugEvents=[];
  window.sculpAnalyticsEvents=debugEvents;

  window.dataLayer=window.dataLayer||[];
  window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};

  if(gaId){
    var ga=document.createElement('script');
    ga.async=true;
    ga.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(gaId);
    document.head.appendChild(ga);
    window.gtag('js',new Date());
    window.gtag('config',gaId,{send_page_view:false});
  }

  if(clarityId){
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window,document,'clarity','script',clarityId);
  }

  function clean(value,max){
    return String(value||'').replace(/\s+/g,' ').trim().slice(0,max||80);
  }
  function route(){
    return (window.location.hash||'#home').replace(/^#/,'').split(/[?&]/)[0]||'home';
  }
  function send(name,params){
    var payload=Object.assign({site_variant:'afterdark',route:route()},params||{});
    if(debug){debugEvents.push({name:name,params:payload});console.info('[SCULP analytics]',name,payload)}
    if(gaId)window.gtag('event',name,payload);
  }

  var routeStarted=Date.now();
  var lastRoute='';
  var sentDepths={};
  var seenSections={};

  function finishRoute(reason){
    if(!lastRoute)return;
    var seconds=Math.max(0,Math.round((Date.now()-routeStarted)/1000));
    if(seconds>=2)send('route_engagement',{route:lastRoute,engagement_seconds:seconds,exit_reason:reason});
  }
  function pageView(){
    var next=route();
    if(lastRoute&&next!==lastRoute)finishRoute('navigation');
    lastRoute=next;routeStarted=Date.now();sentDepths={};
    send('page_view',{
      page_title:document.title,
      page_location:window.location.href.split('?')[0],
      page_path:'/#'+next
    });
    if(clarityId&&window.clarity)window.clarity('set','sculp_page',next);
  }

  function scrollDepth(){
    var height=Math.max(document.documentElement.scrollHeight-window.innerHeight,1);
    var percent=Math.round(Math.min(1,Math.max(0,window.scrollY/height))*100);
    [25,50,75,90].forEach(function(depth){
      if(percent>=depth&&!sentDepths[depth]){
        sentDepths[depth]=true;send('scroll_depth',{percent_scrolled:depth});
      }
    });
  }
  var scrollQueued=false;
  window.addEventListener('scroll',function(){
    if(scrollQueued)return;scrollQueued=true;
    requestAnimationFrame(function(){scrollDepth();scrollQueued=false});
  },{passive:true});

  root.addEventListener('click',function(event){
    var target=event.target.closest('a,button');
    if(!target)return;
    var label=clean(target.getAttribute('aria-label')||target.textContent,70);
    if(target.closest('.view[data-page="portfolio"] .photo')){
      send('portfolio_open',{item_label:label});return;
    }
    var destination=target.getAttribute('href')||'';
    if(target.matches('.button')||target.closest('.actions,.nav,.about-next-links,.team-next-links')){
      send('cta_click',{cta_label:label,cta_destination:clean(destination,120)});
    }
  });

  root.querySelectorAll('.concierge-option').forEach(function(button){
    button.addEventListener('click',function(){send('service_interest',{service_path:this.dataset.concierge||clean(this.textContent,40)})});
  });

  var form=root.querySelector('#sculp-form');
  if(form){
    var formStarted=false;
    form.addEventListener('focusin',function(){
      if(formStarted)return;formStarted=true;send('form_start',{form_name:'enquiry'});
    });
    form.addEventListener('submit',function(){
      if(form.checkValidity())send('form_submit',{form_name:'enquiry',delivery_method:'mailto'});
    });
  }

  if('IntersectionObserver' in window){
    var sectionObserver=new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        var page=entry.target.closest('.view');
        if(!entry.isIntersecting||!page||page.hidden)return;
        var key=route()+'|'+entry.target.id;
        if(seenSections[key])return;seenSections[key]=true;
        send('section_view',{section_id:entry.target.id});
      });
    },{threshold:.35});
    root.querySelectorAll('.view section[id]').forEach(function(section){sectionObserver.observe(section)});
  }

  window.addEventListener('hashchange',function(){requestAnimationFrame(pageView)});
  window.addEventListener('pagehide',function(){finishRoute('pagehide')});
  pageView();
})();
