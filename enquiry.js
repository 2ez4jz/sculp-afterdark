/* Existing lead + email business flow, moved intact apart from native success navigation. */
(function(){'use strict';var root=document.getElementById('sculp-site');if(!root)return;
var form=root.querySelector('#sculp-form');
// Retain only campaign tags for enquiry attribution; do not track personal fields.
var campaign=new URLSearchParams(window.location.search);
var attributionKeys=['utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
var attribution={};
attributionKeys.forEach(function(key){
  var value=campaign.get(key);
  if(value)attribution[key]=value.slice(0,120);
});
try{
  var saved=JSON.parse(sessionStorage.getItem('sculp_campaign')||'{}');
  attribution=Object.assign(saved,attribution);
  sessionStorage.setItem('sculp_campaign',JSON.stringify(attribution));
}catch(e){}
if(form){
  var dateField=form.querySelector('input[name="date"]');
  if(dateField){
    var setDateFloor=function(){
      var d=new Date(), local=new Date(d.getTime()-d.getTimezoneOffset()*60000).toISOString().slice(0,10);
      dateField.min=local;
    };
    setDateFloor();
  }
}

if(form)form.addEventListener('submit',async function(event){
  event.preventDefault();
  if(this.dataset.sending==='true'||!this.reportValidity())return;
  var data=new FormData(this);
  if(data.get('_honey'))return;
  Object.keys(attribution).forEach(function(key){data.set(key,attribution[key]);});
  var button=this.querySelector('button[type="submit"]'),error=root.querySelector('#enquiry-error');
  data.set('_subject','SCULP enquiry — '+data.get('service')+' — '+(data.get('date')||'Date to be confirmed'));
  error.hidden=true;this.dataset.sending='true';button.disabled=true;button.textContent='Sending…';this.setAttribute('aria-busy','true');
  try{
    // Persist a real lead first. FormSubmit email remains as the existing notification.
    var submissionId=this.dataset.submissionId||(this.dataset.submissionId=crypto.randomUUID());
    var leadPayload=Object.fromEntries(data.entries());
    leadPayload.submission_id=submissionId;
    leadPayload.referrer=document.referrer||'';
    var saved=await fetch('https://lztzzdhqghwubygpzcbq.supabase.co/functions/v1/sculp-enquiry',{
      method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(leadPayload)
    });
    if(!saved.ok)throw new Error('database');
    var response=await fetch('https://formsubmit.co/ajax/sculpstudio.ca@gmail.com',{
      method:'POST',headers:{'Accept':'application/json','Content-Type':'application/json'},
      body:JSON.stringify(Object.fromEntries(data.entries()))
    });
    var result=await response.json();
    if(!response.ok||(result.success!==true&&result.success!=='true')){
      throw new Error(/activat/i.test(result.message||'')?'activation':'send');
    }
    this.dispatchEvent(new CustomEvent('sculp:enquiry-sent'));
    this.reset();delete this.dataset.submissionId;
    window.location.assign(new URL('enquiry-sent/',new URL(root.dataset.base||'./',location.href)).href);
  }catch(err){
    error.textContent=err.message==='database'?'We could not save your enquiry. Your details are still here. Please try again or email us directly.':err.message==='activation'
      ?'Our enquiry form is awaiting email verification. Please email sculpstudio.ca@gmail.com directly. Your details have been kept here.'
      :'We could not confirm your submission. Your details have been kept here. Please try again or email sculpstudio.ca@gmail.com directly.';
    error.hidden=false;error.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'});
  }finally{
    this.dataset.sending='false';button.disabled=false;button.textContent='Send enquiry →';this.removeAttribute('aria-busy');
  }
});
})();
