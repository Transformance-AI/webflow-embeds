(()=>{var c=()=>location.pathname.startsWith("/de/")||location.pathname==="/de";var n={css:"",cssFor:null,stories:{},locale:"en"};function d({css:s,cssFor:t,stories:e,locale:a}){n.css=s||"",n.cssFor=t||null,n.stories=e,n.locale=a||"en",customElements.get("transformance-story")||customElements.define("transformance-story",o)}var h=":host(.tf-off) *{animation-play-state:paused!important}",o=class extends HTMLElement{connectedCallback(){if(this._wired)return;this._wired=!0;let t=this.getAttribute("data-story")||"";if(this._id=t,n.locale==="en"&&c()){this.style.display="none";return}if(!n.stories[t]){console.warn("[transformance-story] unknown story:",t,"(locale "+n.locale+")");return}this._html=n.stories[t],this.style.display="block";let a=window.matchMedia("(max-width: 1023px)").matches&&this.getAttribute("data-h-sm")||this.getAttribute("data-h")||560;if(this.style.minHeight=a+"px",!("IntersectionObserver"in window)){this._mount();return}let r=new IntersectionObserver(i=>{if(!i.some(p=>p.isIntersecting))return;r.disconnect();let l=()=>this._mount();"requestIdleCallback"in window?requestIdleCallback(l,{timeout:600}):requestAnimationFrame(()=>setTimeout(l,0))},{rootMargin:"400px 0px"});r.observe(this)}disconnectedCallback(){this._vis&&(this._vis.disconnect(),this._vis=null)}_mount(){if(this._mounted)return;this._mounted=!0;let t=this.attachShadow({mode:"open"}),e=document.createElement("style"),a=n.cssFor&&n.cssFor[this._id]||n.css;e.textContent=a+h,t.appendChild(e),t.appendChild(document.createRange().createContextualFragment(this._html)),this.style.minHeight="",this._vis=new IntersectionObserver(r=>{r.forEach(i=>this.classList.toggle("tf-off",!i.isIntersecting))},{rootMargin:"100px 0px"}),this._vis.observe(this)}};var g={"homev2-vero-loop":`<style>
        @keyframes vlRing  { 0%{transform:scale(.9);opacity:.5;} 70%{transform:scale(1.55);opacity:0;} 100%{transform:scale(1.55);opacity:0;} }
        @keyframes vlPulse { 0%,100%{opacity:1;} 50%{opacity:.3;} }

        
        @keyframes vlSig0 {
          0%,3%       { opacity:0; transform: translateX(-10px); }
          9%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes vlLead0 {
          0%,5%    { stroke-dashoffset:100; opacity:0; }
          7%       { opacity:1; }
          14%,100% { stroke-dashoffset:0; opacity:1; }
        }
        @keyframes vlSig1 {
          0%,8%       { opacity:0; transform: translateX(-10px); }
          14%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes vlLead1 {
          0%,10%    { stroke-dashoffset:100; opacity:0; }
          12%       { opacity:1; }
          19%,100% { stroke-dashoffset:0; opacity:1; }
        }
        @keyframes vlSig2 {
          0%,13%       { opacity:0; transform: translateX(-10px); }
          19%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes vlLead2 {
          0%,15%    { stroke-dashoffset:100; opacity:0; }
          17%       { opacity:1; }
          24%,100% { stroke-dashoffset:0; opacity:1; }
        }
        @keyframes vlSig3 {
          0%,18%       { opacity:0; transform: translateX(-10px); }
          24%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes vlLead3 {
          0%,20%    { stroke-dashoffset:100; opacity:0; }
          22%       { opacity:1; }
          29%,100% { stroke-dashoffset:0; opacity:1; }
        }

        
        @keyframes vlRow0 {
          0%,26%       { opacity:0; transform: translateX(12px); }
          32%,100% { opacity:1; transform: none; }
        }
        @keyframes vlRow1 {
          0%,32%       { opacity:0; transform: translateX(12px); }
          38%,100% { opacity:1; transform: none; }
        }
        @keyframes vlRow2 {
          0%,38%       { opacity:0; transform: translateX(12px); }
          44%,100% { opacity:1; transform: none; }
        }
        @keyframes vlRow3 {
          0%,44%       { opacity:0; transform: translateX(12px); }
          50%,100% { opacity:1; transform: none; }
        }
        @keyframes vlHead  { 0%,20%{opacity:0;} 26%,100%{opacity:1;} }
        @keyframes vlTotal { 0%,50%{opacity:0;transform:translateY(6px);} 58%,100%{opacity:1;transform:none;} }

        @keyframes vlBtn {
          0%,56%   { transform:scale(1); box-shadow:0 0 0 0 rgba(15,23,42,0); }
          62%      { transform:scale(1); box-shadow:0 0 0 0 rgba(15,23,42,.3); }
          67%      { transform:scale(1); box-shadow:0 0 0 8px rgba(15,23,42,0); }
          68%      { transform:scale(.96); }
          72%,100% { transform:scale(1); box-shadow:0 0 0 0 rgba(15,23,42,0); }
        }
        @keyframes vlCursor {
          0%,54%   { transform: translate(-46px,26px); opacity:0; }
          58%      { transform: translate(-46px,26px); opacity:1; }
          66%      { transform: translate(-6px,4px); opacity:1; }
          68%      { transform: translate(-6px,4px) scale(.82); opacity:1; }
          71%      { transform: translate(-6px,4px); opacity:1; }
          80%      { transform: translate(-6px,4px); opacity:0; }
          100%     { transform: translate(-46px,26px); opacity:0; }
        }
        @keyframes vlBtnA { 0%,68.5%{opacity:1;} 69%,100%{opacity:0;} }
        @keyframes vlBtnB { 0%,68.5%{opacity:0;} 69%,100%{opacity:1;} }

        @keyframes vlSt1 { 0%,16%{opacity:1;} 18%,100%{opacity:0;} }
        @keyframes vlSt2 { 0%,18%{opacity:0;} 20%,48%{opacity:1;} 50%,100%{opacity:0;} }
        @keyframes vlSt3 { 0%,50%{opacity:0;} 52%,68%{opacity:1;} 69.5%,100%{opacity:0;} }
        @keyframes vlSt4 { 0%,69.5%{opacity:0;} 71%,100%{opacity:1;} }

        .vl-ring  { animation: vlRing 2.6s ease-out infinite; }
        .vl-ring2 { animation: vlRing 2.6s ease-out infinite; animation-delay:1.3s; }
        .vl-pulse { animation: vlPulse 1.4s ease-in-out infinite; }
        
        .vl-sig0  { animation: vlSig0 10s ease-out infinite; opacity:0; }
        .vl-lead0 { animation: vlLead0 10s ease-out infinite; opacity:0; }
        .vl-sig1  { animation: vlSig1 10s ease-out infinite; opacity:0; }
        .vl-lead1 { animation: vlLead1 10s ease-out infinite; opacity:0; }
        .vl-sig2  { animation: vlSig2 10s ease-out infinite; opacity:0; }
        .vl-lead2 { animation: vlLead2 10s ease-out infinite; opacity:0; }
        .vl-sig3  { animation: vlSig3 10s ease-out infinite; opacity:0; }
        .vl-lead3 { animation: vlLead3 10s ease-out infinite; opacity:0; }
        
        .vl-row0 { animation: vlRow0 10s ease-out infinite; opacity:0; }
        .vl-row1 { animation: vlRow1 10s ease-out infinite; opacity:0; }
        .vl-row2 { animation: vlRow2 10s ease-out infinite; opacity:0; }
        .vl-row3 { animation: vlRow3 10s ease-out infinite; opacity:0; }
        .vl-head  { animation: vlHead 10s ease-out infinite; opacity:0; }
        .vl-total { animation: vlTotal 10s ease-out infinite; opacity:0; }
        .vl-btn   { animation: vlBtn 10s ease-out infinite; }
        .vl-cursor{ animation: vlCursor 10s cubic-bezier(.4,0,.2,1) infinite; opacity:0; }
        .vl-a { animation: vlBtnA 10s linear infinite; }
        .vl-b { animation: vlBtnB 10s linear infinite; opacity:0; }
        .vl-s1 { animation: vlSt1 10s linear infinite; }
        .vl-s2 { animation: vlSt2 10s linear infinite; opacity:0; }
        .vl-s3 { animation: vlSt3 10s linear infinite; opacity:0; }
        .vl-s4 { animation: vlSt4 10s linear infinite; opacity:0; }
      </style><div class="tf-cardonly"><div class="tf-card relative w-[640px] shrink-0" style="--card-w:640px"><div class="bg-white rounded-2xl shadow-xl border border-gray-100/80 p-6"><div class="flex items-center gap-3 pb-3.5 mb-3 border-b border-gray-100"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:30px;height:30px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:12.6px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">0</span><span style="width:1ch;text-align:center;display:inline-block">0</span></div></div><span class="relative block h-[24px] w-[300px] min-w-0"><span class="vl-s1 absolute inset-0 text-base font-bold text-gray-900 leading-[24px] whitespace-nowrap">Reading the whole book</span><span class="vl-s2 absolute inset-0 text-base font-bold text-gray-900 leading-[24px] whitespace-nowrap">Predicting what lands, and when</span><span class="vl-s3 absolute inset-0 text-base font-bold text-gray-900 leading-[24px] whitespace-nowrap">Ready for you</span><span class="vl-s4 absolute inset-0 text-base font-bold text-emerald-800 leading-[24px] whitespace-nowrap">312 actions released</span></span><span class="ml-auto inline-flex items-center gap-1.5 shrink-0 text-sm font-bold text-slate-800"><span class="vl-pulse w-2 h-2 rounded-full bg-slate-800"></span> Live</span></div><div class="relative" style="height:230px"><svg class="absolute inset-0 pointer-events-none" width="245" height="230" fill="none" aria-hidden="true"><path class="vl-lead0" d="M140,24 C159.8,24 153.2,105 171,105" stroke="#0f172a" stroke-opacity="0.35" stroke-width="2" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path><path class="vl-lead1" d="M140,74 C159.8,74 153.2,105 171,105" stroke="#0f172a" stroke-opacity="0.35" stroke-width="2" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path><path class="vl-lead2" d="M140,124 C159.8,124 153.2,105 171,105" stroke="#0f172a" stroke-opacity="0.35" stroke-width="2" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path><path class="vl-lead3" d="M140,180 C159.8,180 153.2,105 171,105" stroke="#0f172a" stroke-opacity="0.7" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path></svg><div class="vl-sig0 absolute left-0 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2" style="top:4px;width:140px;height:40px"><span class="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database h-4 w-4"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg></span><span class="text-xs font-semibold text-gray-700 leading-tight">Your ERP</span></div><div class="vl-sig1 absolute left-0 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2" style="top:54px;width:140px;height:40px"><span class="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-landmark h-4 w-4"><line x1="3" x2="21" y1="22" y2="22"></line><line x1="6" x2="6" y1="18" y2="11"></line><line x1="10" x2="10" y1="18" y2="11"></line><line x1="14" x2="14" y1="18" y2="11"></line><line x1="18" x2="18" y1="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg></span><span class="text-xs font-semibold text-gray-700 leading-tight">Your banks</span></div><div class="vl-sig2 absolute left-0 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2" style="top:104px;width:140px;height:40px"><span class="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-4 w-4"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></span><span class="text-xs font-semibold text-gray-700 leading-tight">Your inbox</span></div><div class="vl-sig3 absolute left-0 flex items-center gap-2 rounded-xl border-2 border-slate-300 bg-white px-2 shadow-sm" style="top:154px;width:140px;height:52px"><span class="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain h-4 w-4"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-[10px] font-bold uppercase tracking-wider text-slate-500">Model</span><span class="block text-xs font-bold text-gray-900 truncate">Pay dates</span><span class="block text-[10px] text-gray-400 truncate">AR and AP, daily</span></span></div><div class="absolute" style="left:205px;top:105px;transform:translate(-50%,-50%);z-index:20"><div class="relative flex items-center justify-center"><span class="vl-ring absolute w-[76px] h-[76px] rounded-full" style="box-shadow:0 0 0 2px rgba(15,23,42,.35)"></span><span class="vl-ring2 absolute w-[76px] h-[76px] rounded-full" style="box-shadow:0 0 0 2px rgba(15,23,42,.35)"></span><div class="relative w-[64px] h-[64px] rounded-full bg-white border-2 border-slate-200 shadow-lg flex items-center justify-center"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:34px;height:34px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:14.28px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">1</span><span style="width:1ch;text-align:center;display:inline-block">0</span></div></div></div></div></div><div class="vl-head absolute top-0 px-1" style="left:245px;right:0"><span class="text-xs font-semibold uppercase tracking-wider text-gray-400">Prepared overnight</span></div><div class="vl-row0 absolute flex items-center gap-2.5 rounded-xl border bg-white px-3" style="left:245px;right:0;top:22px;height:46px;border-color:#7c3aed33"><span class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-violet-100 text-violet-700"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-call h-4 w-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg></span><span class="min-w-0 truncate text-sm font-bold text-gray-900">41 accounts to chase</span><span class="ml-auto shrink-0 text-xs font-bold" style="color:#7c3aed">CollectPulse</span></div><div class="vl-row1 absolute flex items-center gap-2.5 rounded-xl border bg-white px-3" style="left:245px;right:0;top:76px;height:46px;border-color:#16a34a33"><span class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-emerald-100 text-emerald-700"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-banknote h-4 w-4"><rect width="20" height="12" x="2" y="6" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg></span><span class="min-w-0 truncate text-sm font-bold text-gray-900">\u20AC2.4M ready to apply</span><span class="ml-auto shrink-0 text-xs font-bold" style="color:#16a34a">ClearMatch</span></div><div class="vl-row2 absolute flex items-center gap-2.5 rounded-xl border bg-white px-3" style="left:245px;right:0;top:130px;height:46px;border-color:#d9770633"><span class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-amber-100 text-amber-700"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scale h-4 w-4"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg></span><span class="min-w-0 truncate text-sm font-bold text-gray-900">18 deductions to dispute</span><span class="ml-auto shrink-0 text-xs font-bold" style="color:#d97706">ClaimIQ</span></div><div class="vl-row3 absolute flex items-center gap-2.5 rounded-xl border bg-white px-3" style="left:245px;right:0;top:184px;height:46px;border-color:#4f46e533"><span class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-indigo-100 text-indigo-700"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up h-4 w-4"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg></span><span class="min-w-0 truncate text-sm font-bold text-gray-900">A week 6 gap to close</span><span class="ml-auto shrink-0 text-xs font-bold" style="color:#4f46e5">CashPulse</span></div></div><div class="vl-total mt-4 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4" style="height:62px"><span class="min-w-0 leading-tight"><span class="block text-sm font-semibold text-gray-500">Waiting for you at 8am</span><span class="block text-2xl font-bold text-gray-900 tabular-nums">312 actions</span></span><span class="relative ml-auto shrink-0"><span class="vl-btn relative block h-[40px] w-[150px] rounded-xl"><span class="vl-a absolute inset-0 inline-flex items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">Release all</span><span class="vl-b absolute inset-0 inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-50 text-sm font-bold text-emerald-700 ring-1 ring-emerald-200"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-4 w-4"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Released</span></span><svg class="vl-cursor absolute pointer-events-none" style="right:8px;bottom:-2px;width:20px;height:20px;z-index:40" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 3l14 8.5-6.2 1.2L10 19 5 3z" fill="#111827" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"></path></svg></span></div></div></div></div>`,"homev2-clearmatch-loop":`<style>
        @keyframes calRing  { 0%{transform:scale(.9);opacity:.5;} 70%{transform:scale(1.5);opacity:0;} 100%{transform:scale(1.5);opacity:0;} }
        @keyframes calPulse { 0%,100%{opacity:1;} 50%{opacity:.3;} }

        
        @keyframes calSig0 {
          0%,3%       { opacity:0; transform: translateX(-10px); }
          9%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes calLead0 {
          0%,5%    { stroke-dashoffset:100; opacity:0; }
          7%       { opacity:1; }
          14%,100% { stroke-dashoffset:0; opacity:1; }
        }
        @keyframes calSig1 {
          0%,7%       { opacity:0; transform: translateX(-10px); }
          13%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes calLead1 {
          0%,9%    { stroke-dashoffset:100; opacity:0; }
          11%       { opacity:1; }
          18%,100% { stroke-dashoffset:0; opacity:1; }
        }
        @keyframes calSig2 {
          0%,11%       { opacity:0; transform: translateX(-10px); }
          17%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes calLead2 {
          0%,13%    { stroke-dashoffset:100; opacity:0; }
          15%       { opacity:1; }
          22%,100% { stroke-dashoffset:0; opacity:1; }
        }
        @keyframes calSig3 {
          0%,15%       { opacity:0; transform: translateX(-10px); }
          21%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes calLead3 {
          0%,17%    { stroke-dashoffset:100; opacity:0; }
          19%       { opacity:1; }
          26%,100% { stroke-dashoffset:0; opacity:1; }
        }

        /* each match lands, already tied together */
        
        @keyframes calRow0 {
          0%,26%       { opacity:0; transform: translateX(12px); background:#ffffff; border-color:#e5e7eb; }
          31%      { opacity:1; transform:none; background:#f0fdf4; border-color:#86efac; }
          38%,100%{ opacity:1; transform:none; background:#ffffff; border-color:#d1fae5; }
        }
        @keyframes calLink0 {
          0%,28%   { opacity:0; transform:scale(.5); }
          33%,100% { opacity:1; transform:scale(1); }
        }
        @keyframes calRow1 {
          0%,36%       { opacity:0; transform: translateX(12px); background:#ffffff; border-color:#e5e7eb; }
          41%      { opacity:1; transform:none; background:#f0fdf4; border-color:#86efac; }
          48%,100%{ opacity:1; transform:none; background:#ffffff; border-color:#d1fae5; }
        }
        @keyframes calLink1 {
          0%,38%   { opacity:0; transform:scale(.5); }
          43%,100% { opacity:1; transform:scale(1); }
        }
        @keyframes calRow2 {
          0%,46%       { opacity:0; transform: translateX(12px); background:#ffffff; border-color:#e5e7eb; }
          51%      { opacity:1; transform:none; background:#f0fdf4; border-color:#86efac; }
          58%,100%{ opacity:1; transform:none; background:#ffffff; border-color:#d1fae5; }
        }
        @keyframes calLink2 {
          0%,48%   { opacity:0; transform:scale(.5); }
          53%,100% { opacity:1; transform:scale(1); }
        }
        @keyframes calHead { 0%,20%{opacity:0;} 26%,100%{opacity:1;} }

        /* the rate Vero expects to clear on its own, stated up front */
        @keyframes calRate { 0%,16%{opacity:0;} 24%,100%{opacity:1;} }

        /* one approve-and-post, by a person */
        @keyframes calBtn {
          0%,58%   { transform:scale(1); box-shadow:0 0 0 0 rgba(22,163,74,0); }
          66%      { transform:scale(1); box-shadow:0 0 0 0 rgba(22,163,74,.35); }
          74%      { transform:scale(1); box-shadow:0 0 0 8px rgba(22,163,74,0); }
          78%      { transform:scale(.96); }
          82%,100% { transform:scale(1); box-shadow:0 0 0 0 rgba(22,163,74,0); }
        }
        @keyframes calCursor {
          0%,62%   { transform: translate(-46px,26px) scale(1); opacity:0; }
          66%      { transform: translate(-46px,26px) scale(1); opacity:1; }
          75%      { transform: translate(-6px,4px) scale(1); opacity:1; }
          78%      { transform: translate(-6px,4px) scale(.82); opacity:1; }
          81%      { transform: translate(-6px,4px) scale(1); opacity:1; }
          88%      { transform: translate(-6px,4px) scale(1); opacity:0; }
          100%     { transform: translate(-46px,26px) scale(1); opacity:0; }
        }
        @keyframes calBtnA { 0%,79%{opacity:1;} 81%,100%{opacity:0;} }
        @keyframes calBtnB { 0%,79%{opacity:0;} 81%,100%{opacity:1;} }
        @keyframes calSt1 { 0%,14%{opacity:1;} 16%,100%{opacity:0;} }
        @keyframes calSt2 { 0%,16%{opacity:0;} 18%,54%{opacity:1;} 56%,100%{opacity:0;} }
        @keyframes calSt3 { 0%,56%{opacity:0;} 58%,78%{opacity:1;} 80%,100%{opacity:0;} }
        @keyframes calSt4 { 0%,80%{opacity:0;} 82%,100%{opacity:1;} }

        .cal-ring  { animation: calRing 2.6s ease-out infinite; }
        .cal-ring2 { animation: calRing 2.6s ease-out infinite; animation-delay:1.3s; }
        .cal-pulse { animation: calPulse 1.4s ease-in-out infinite; }
        
        .cal-sig0  { animation: calSig0 10s ease-out infinite; opacity:0; }
        .cal-lead0 { animation: calLead0 10s ease-out infinite; opacity:0; }
        .cal-sig1  { animation: calSig1 10s ease-out infinite; opacity:0; }
        .cal-lead1 { animation: calLead1 10s ease-out infinite; opacity:0; }
        .cal-sig2  { animation: calSig2 10s ease-out infinite; opacity:0; }
        .cal-lead2 { animation: calLead2 10s ease-out infinite; opacity:0; }
        .cal-sig3  { animation: calSig3 10s ease-out infinite; opacity:0; }
        .cal-lead3 { animation: calLead3 10s ease-out infinite; opacity:0; }
        
        .cal-row0  { animation: calRow0 10s ease-out infinite; opacity:0; }
        .cal-link0 { animation: calLink0 10s cubic-bezier(.3,1.5,.5,1) infinite; opacity:0; }
        .cal-row1  { animation: calRow1 10s ease-out infinite; opacity:0; }
        .cal-link1 { animation: calLink1 10s cubic-bezier(.3,1.5,.5,1) infinite; opacity:0; }
        .cal-row2  { animation: calRow2 10s ease-out infinite; opacity:0; }
        .cal-link2 { animation: calLink2 10s cubic-bezier(.3,1.5,.5,1) infinite; opacity:0; }
        .cal-head { animation: calHead 10s ease-out infinite; opacity:0; }
        .cal-rate { animation: calRate 10s ease-out infinite; opacity:0; }
        .cal-btn  { animation: calBtn 10s ease-out infinite; }
        .cal-cursor { animation: calCursor 10s cubic-bezier(.4,0,.2,1) infinite; opacity:0; }
        .cal-a { animation: calBtnA 10s linear infinite; }
        .cal-b { animation: calBtnB 10s linear infinite; opacity:0; }
        .cal-s1 { animation: calSt1 10s linear infinite; }
        .cal-s2 { animation: calSt2 10s linear infinite; opacity:0; }
        .cal-s3 { animation: calSt3 10s linear infinite; opacity:0; }
        .cal-s4 { animation: calSt4 10s linear infinite; opacity:0; }
      </style><div class="tf-cardonly"><div class="tf-card relative w-[620px] shrink-0" style="--card-w:620px"><div class="bg-white rounded-2xl shadow-xl border border-gray-100/80 p-6"><div class="flex items-center gap-3 pb-3.5 mb-3 border-b border-gray-100"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:30px;height:30px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:12.6px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">1</span><span style="width:1ch;text-align:center;display:inline-block">0</span></div></div><span class="relative block h-[24px] w-[280px] min-w-0"><span class="cal-s1 absolute inset-0 text-base font-bold text-gray-900 leading-[24px] whitespace-nowrap">Reading today\u2019s bank feed</span><span class="cal-s2 absolute inset-0 text-base font-bold text-gray-900 leading-[24px] whitespace-nowrap">Matching against open items</span><span class="cal-s3 absolute inset-0 text-base font-bold text-gray-900 leading-[24px] whitespace-nowrap">Ready for your approval</span><span class="cal-s4 absolute inset-0 text-base font-bold text-emerald-800 leading-[24px] whitespace-nowrap">Posted to your ERP</span></span><span class="ml-auto inline-flex items-center gap-1.5 shrink-0 text-sm font-bold text-emerald-700"><span class="cal-pulse w-2 h-2 rounded-full bg-emerald-500"></span> Live</span></div><div class="relative" style="height:208px"><svg class="absolute inset-0 pointer-events-none" width="236" height="208" fill="none" aria-hidden="true"><path class="cal-lead0" d="M132,26 C146.4,26 141.6,104 154,104" stroke="#16a34a" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path><path class="cal-lead1" d="M132,74 C146.4,74 141.6,104 154,104" stroke="#16a34a" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path><path class="cal-lead2" d="M132,122 C146.4,122 141.6,104 154,104" stroke="#16a34a" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path><path class="cal-lead3" d="M132,176 C146.4,176 141.6,104 154,104" stroke="#16a34a" stroke-opacity="0.8" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path></svg><div class="cal-sig0 absolute left-0 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2" style="top:6px;width:132px;height:40px"><span class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-landmark h-4 w-4"><line x1="3" x2="21" y1="22" y2="22"></line><line x1="6" x2="6" y1="18" y2="11"></line><line x1="10" x2="10" y1="18" y2="11"></line><line x1="14" x2="14" y1="18" y2="11"></line><line x1="18" x2="18" y1="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg></span><span class="text-xs font-semibold text-gray-700 leading-tight">128 payments in</span></div><div class="cal-sig1 absolute left-0 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2" style="top:54px;width:132px;height:40px"><span class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-search h-4 w-4"><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"></path><path d="m9 18-1.5-1.5"></path><circle cx="5" cy="14" r="3"></circle></svg></span><span class="text-xs font-semibold text-gray-700 leading-tight">Remittances read</span></div><div class="cal-sig2 absolute left-0 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2" style="top:102px;width:132px;height:40px"><span class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text h-4 w-4"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></span><span class="text-xs font-semibold text-gray-700 leading-tight">1,284 open items</span></div><div class="cal-sig3 absolute left-0 flex items-center gap-2 rounded-xl border-2 border-emerald-300 bg-white px-2 shadow-sm" style="top:150px;width:132px;height:52px"><span class="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain h-4 w-4"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-[10px] font-bold uppercase tracking-wider text-emerald-600">Model</span><span class="block text-xs font-bold text-gray-900 truncate">Match rate</span><span class="block text-[10px] text-gray-400 truncate">what will clear</span></span></div><div class="absolute" style="left:186px;top:104px;transform:translate(-50%,-50%);z-index:20"><div class="relative flex items-center justify-center"><span class="cal-ring absolute w-[70px] h-[70px] rounded-full" style="box-shadow:0 0 0 2px rgba(22,163,74,.45)"></span><span class="cal-ring2 absolute w-[70px] h-[70px] rounded-full" style="box-shadow:0 0 0 2px rgba(22,163,74,.45)"></span><div class="relative w-[60px] h-[60px] rounded-full bg-white border-2 border-emerald-200 shadow-lg flex items-center justify-center"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:32px;height:32px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:13.44px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">1</span><span style="width:1ch;text-align:center;display:inline-block">1</span></div></div></div></div></div><div class="cal-head absolute top-0 flex items-center justify-between px-1" style="left:236px;right:0"><span class="text-xs font-semibold uppercase tracking-wider text-gray-400">Matched</span><span class="cal-rate text-xs font-bold text-emerald-700">94% expected to auto-clear</span></div><div class="cal-row0 absolute flex items-center gap-2.5 rounded-xl border px-3" style="left:236px;right:0;top:24px;height:56px"><span class="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-banknote h-5 w-5"><rect width="20" height="12" x="2" y="6" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg></span><span class="text-sm font-bold text-gray-900 tabular-nums shrink-0">\u20AC12,480</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link2 cal-link0 h-4 w-4 text-emerald-600 shrink-0"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg><span class="min-w-0 leading-tight"><span class="block font-mono text-sm font-bold text-gray-900 truncate">INV-4471</span><span class="block text-xs text-gray-400">1 invoice</span></span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check cal-link0 ml-auto h-5 w-5 text-emerald-600 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div><div class="cal-row1 absolute flex items-center gap-2.5 rounded-xl border px-3" style="left:236px;right:0;top:88px;height:56px"><span class="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-banknote h-5 w-5"><rect width="20" height="12" x="2" y="6" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg></span><span class="text-sm font-bold text-gray-900 tabular-nums shrink-0">\u20AC9,300</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link2 cal-link1 h-4 w-4 text-emerald-600 shrink-0"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg><span class="min-w-0 leading-tight"><span class="block font-mono text-sm font-bold text-gray-900 truncate">INV-4488</span><span class="block text-xs text-gray-400">1 invoice</span></span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check cal-link1 ml-auto h-5 w-5 text-emerald-600 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div><div class="cal-row2 absolute flex items-center gap-2.5 rounded-xl border px-3" style="left:236px;right:0;top:152px;height:56px"><span class="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-banknote h-5 w-5"><rect width="20" height="12" x="2" y="6" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg></span><span class="text-sm font-bold text-gray-900 tabular-nums shrink-0">\u20AC21,140</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link2 cal-link2 h-4 w-4 text-emerald-600 shrink-0"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg><span class="min-w-0 leading-tight"><span class="block font-mono text-sm font-bold text-gray-900 truncate">INV-4512 +1</span><span class="block text-xs text-gray-400">2 invoices</span></span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check cal-link2 ml-auto h-5 w-5 text-emerald-600 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div></div><div class="mt-4 flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/70 px-4" style="height:62px"><span class="min-w-0 leading-tight"><span class="block text-sm font-bold text-gray-900">120 matched \xB7 8 need you</span><span class="block text-sm text-gray-500">\u20AC2.34M ready to post</span></span><span class="relative ml-auto shrink-0"><span class="cal-btn relative block h-[40px] w-[158px] rounded-xl"><span class="cal-a absolute inset-0 inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 text-sm font-bold text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-4 w-4"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Approve &amp; post</span><span class="cal-b absolute inset-0 inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-50 text-sm font-bold text-emerald-700 ring-1 ring-emerald-200"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-4 w-4"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Posted</span></span><svg class="cal-cursor absolute pointer-events-none" style="right:8px;bottom:-2px;width:20px;height:20px;z-index:40" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 3l14 8.5-6.2 1.2L10 19 5 3z" fill="#111827" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"></path></svg></span></div></div></div></div>`,"homev2-collections-loop":`<style>
        @keyframes cldRing  { 0%{transform:scale(.9);opacity:.5;} 70%{transform:scale(1.5);opacity:0;} 100%{transform:scale(1.5);opacity:0;} }
        @keyframes cldPulse { 0%,100%{opacity:1;} 50%{opacity:.3;} }

        /* signals arrive, and their leaders draw into the agent */
        
        @keyframes cldSig0 {
          0%,3%       { opacity:0; transform: translateX(-10px); }
          9%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes cldLead0 {
          0%,5%    { stroke-dashoffset:100; opacity:0; }
          7%       { opacity:1; }
          14%,100% { stroke-dashoffset:0; opacity:1; }
        }
        @keyframes cldSig1 {
          0%,7%       { opacity:0; transform: translateX(-10px); }
          13%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes cldLead1 {
          0%,9%    { stroke-dashoffset:100; opacity:0; }
          11%       { opacity:1; }
          18%,100% { stroke-dashoffset:0; opacity:1; }
        }
        @keyframes cldSig2 {
          0%,11%       { opacity:0; transform: translateX(-10px); }
          17%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes cldLead2 {
          0%,13%    { stroke-dashoffset:100; opacity:0; }
          15%       { opacity:1; }
          22%,100% { stroke-dashoffset:0; opacity:1; }
        }
        @keyframes cldSig3 {
          0%,15%       { opacity:0; transform: translateX(-10px); }
          21%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes cldLead3 {
          0%,17%    { stroke-dashoffset:100; opacity:0; }
          19%       { opacity:1; }
          26%,100% { stroke-dashoffset:0; opacity:1; }
        }

        /* the ranked worklist appears, highest risk first */
        
        @keyframes cldRow0 {
          0%,18%   { opacity:0; transform: translateX(12px); }
          25%,30% { opacity:1; transform:none; background:#ffffff; border-color:#e5e7eb; }
          34%        { opacity:1; background:#ecfdf5; border-color:#86efac; }
          41%       { opacity:1; background:#ecfdf5; border-color:#86efac; transform:none; }
          47%,100%  { opacity:0; transform: translateY(20px) scale(.94); }
        }
        @keyframes cldRisk0 { 0%,30%{opacity:1;} 33%,100%{opacity:0;} }
        @keyframes cldOut0  { 0%,31%{opacity:0;} 35%,100%{opacity:1;} }
        @keyframes cldTile0 {
          0%,30%        { transform:scale(1); }
          33%       { transform:scale(1.16); }
          38%,100%  { transform:scale(1); }
        }
        @keyframes cldRow1 {
          0%,20%   { opacity:0; transform: translateX(12px); }
          27%,44% { opacity:1; transform:none; background:#ffffff; border-color:#e5e7eb; }
          48%        { opacity:1; background:#ecfdf5; border-color:#86efac; }
          55%       { opacity:1; background:#ecfdf5; border-color:#86efac; transform:none; }
          61%,100%  { opacity:0; transform: translateY(20px) scale(.94); }
        }
        @keyframes cldRisk1 { 0%,44%{opacity:1;} 47%,100%{opacity:0;} }
        @keyframes cldOut1  { 0%,45%{opacity:0;} 49%,100%{opacity:1;} }
        @keyframes cldTile1 {
          0%,44%        { transform:scale(1); }
          47%       { transform:scale(1.16); }
          52%,100%  { transform:scale(1); }
        }
        @keyframes cldRow2 {
          0%,22%   { opacity:0; transform: translateX(12px); }
          29%,58% { opacity:1; transform:none; background:#ffffff; border-color:#e5e7eb; }
          62%        { opacity:1; background:#ecfdf5; border-color:#86efac; }
          69%       { opacity:1; background:#ecfdf5; border-color:#86efac; transform:none; }
          75%,100%  { opacity:0; transform: translateY(20px) scale(.94); }
        }
        @keyframes cldRisk2 { 0%,58%{opacity:1;} 61%,100%{opacity:0;} }
        @keyframes cldOut2  { 0%,59%{opacity:0;} 63%,100%{opacity:1;} }
        @keyframes cldTile2 {
          0%,58%        { transform:scale(1); }
          61%       { transform:scale(1.16); }
          66%,100%  { transform:scale(1); }
        }
        @keyframes cldRow3 {
          0%,24%   { opacity:0; transform: translateX(12px); }
          31%,72% { opacity:1; transform:none; background:#ffffff; border-color:#e5e7eb; }
          76%        { opacity:1; background:#ecfdf5; border-color:#86efac; }
          83%       { opacity:1; background:#ecfdf5; border-color:#86efac; transform:none; }
          89%,100%  { opacity:0; transform: translateY(20px) scale(.94); }
        }
        @keyframes cldRisk3 { 0%,72%{opacity:1;} 75%,100%{opacity:0;} }
        @keyframes cldOut3  { 0%,73%{opacity:0;} 77%,100%{opacity:1;} }
        @keyframes cldTile3 {
          0%,72%        { transform:scale(1); }
          75%       { transform:scale(1.16); }
          80%,100%  { transform:scale(1); }
        }
        /* the worklist header only makes sense once there is a list */
        @keyframes cldHead { 0%,16%{opacity:0;} 24%,100%{opacity:1;} }
        @keyframes cldEmpty { 0%,88%{opacity:0;} 94%,100%{opacity:1;} }

        @keyframes cldC0{0%{opacity:1;}33%{opacity:1;}34.5%{opacity:0;}100%{opacity:0;}}@keyframes cldC1{0%{opacity:0;}33.5%{opacity:0;}35%{opacity:1;}47%{opacity:1;}48.5%{opacity:0;}100%{opacity:0;}}@keyframes cldC2{0%{opacity:0;}47.5%{opacity:0;}49%{opacity:1;}61%{opacity:1;}62.5%{opacity:0;}100%{opacity:0;}}@keyframes cldC3{0%{opacity:0;}61.5%{opacity:0;}63%{opacity:1;}75%{opacity:1;}76.5%{opacity:0;}100%{opacity:0;}}@keyframes cldC4{0%{opacity:0;}75.5%{opacity:0;}77%{opacity:1;}100%{opacity:1;}}
        @keyframes cldBarGlow {
          0%,74%   { box-shadow:0 0 0 0 rgba(22,163,74,0); }
          82%      { box-shadow:0 0 0 6px rgba(22,163,74,.13); }
          90%,100% { box-shadow:0 0 0 0 rgba(22,163,74,0); }
        }
        /* what the agent is doing, in words, under its own name */
        @keyframes cldSt1 { 0%,16%{opacity:1;} 18%,100%{opacity:0;} }
        @keyframes cldSt2 { 0%,18%{opacity:0;} 20%,26%{opacity:1;} 28%,100%{opacity:0;} }
        @keyframes cldSt3 { 0%,28%{opacity:0;} 30%,84%{opacity:1;} 86%,100%{opacity:0;} }
        @keyframes cldSt4 { 0%,86%{opacity:0;} 88%,100%{opacity:1;} }

        .cld-ring  { animation: cldRing 2.6s ease-out infinite; }
        .cld-ring2 { animation: cldRing 2.6s ease-out infinite; animation-delay:1.3s; }
        .cld-pulse { animation: cldPulse 1.4s ease-in-out infinite; }
        
        .cld-sig0  { animation: cldSig0 10s ease-out infinite; opacity:0; }
        .cld-lead0 { animation: cldLead0 10s ease-out infinite; opacity:0; }
        .cld-sig1  { animation: cldSig1 10s ease-out infinite; opacity:0; }
        .cld-lead1 { animation: cldLead1 10s ease-out infinite; opacity:0; }
        .cld-sig2  { animation: cldSig2 10s ease-out infinite; opacity:0; }
        .cld-lead2 { animation: cldLead2 10s ease-out infinite; opacity:0; }
        .cld-sig3  { animation: cldSig3 10s ease-out infinite; opacity:0; }
        .cld-lead3 { animation: cldLead3 10s ease-out infinite; opacity:0; }
        
        .cld-row0  { animation: cldRow0 10s ease-out infinite; opacity:0; }
        .cld-risk0 { animation: cldRisk0 10s linear infinite; }
        .cld-out0  { animation: cldOut0 10s ease-out infinite; opacity:0; }
        .cld-tile0 { animation: cldTile0 10s ease-out infinite; }
        .cld-row1  { animation: cldRow1 10s ease-out infinite; opacity:0; }
        .cld-risk1 { animation: cldRisk1 10s linear infinite; }
        .cld-out1  { animation: cldOut1 10s ease-out infinite; opacity:0; }
        .cld-tile1 { animation: cldTile1 10s ease-out infinite; }
        .cld-row2  { animation: cldRow2 10s ease-out infinite; opacity:0; }
        .cld-risk2 { animation: cldRisk2 10s linear infinite; }
        .cld-out2  { animation: cldOut2 10s ease-out infinite; opacity:0; }
        .cld-tile2 { animation: cldTile2 10s ease-out infinite; }
        .cld-row3  { animation: cldRow3 10s ease-out infinite; opacity:0; }
        .cld-risk3 { animation: cldRisk3 10s linear infinite; }
        .cld-out3  { animation: cldOut3 10s ease-out infinite; opacity:0; }
        .cld-tile3 { animation: cldTile3 10s ease-out infinite; }
        .cld-head  { animation: cldHead 10s ease-out infinite; opacity:0; }
        .cld-empty { animation: cldEmpty 10s ease-out infinite; opacity:0; }
        .cld-c0{animation:cldC0 10s linear infinite;}.cld-c1{animation:cldC1 10s linear infinite;opacity:0;}.cld-c2{animation:cldC2 10s linear infinite;opacity:0;}.cld-c3{animation:cldC3 10s linear infinite;opacity:0;}.cld-c4{animation:cldC4 10s linear infinite;opacity:0;}
        .cld-bar { animation: cldBarGlow 10s ease-out infinite; }
        .cld-s1 { animation: cldSt1 10s linear infinite; }
        .cld-s2 { animation: cldSt2 10s linear infinite; opacity:0; }
        .cld-s3 { animation: cldSt3 10s linear infinite; opacity:0; }
        .cld-s4 { animation: cldSt4 10s linear infinite; opacity:0; }
      </style><div class="tf-cardonly"><div class="tf-card relative w-[620px] shrink-0" style="--card-w:620px"><div class="bg-white rounded-2xl shadow-xl border border-gray-100/80 p-6"><div class="flex items-center gap-3 pb-3.5 mb-3 border-b border-gray-100"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:30px;height:30px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:12.6px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">1</span><span style="width:1ch;text-align:center;display:inline-block">1</span></div></div><span class="relative block h-[24px] w-[290px] min-w-0"><span class="cld-s1 absolute inset-0 text-base font-bold text-gray-900 leading-[24px] whitespace-nowrap">Reading the book</span><span class="cld-s2 absolute inset-0 text-base font-bold text-gray-900 leading-[24px] whitespace-nowrap">Ranking by what will slip</span><span class="cld-s3 absolute inset-0 text-base font-bold text-gray-900 leading-[24px] whitespace-nowrap">Working the list, top down</span><span class="cld-s4 absolute inset-0 text-base font-bold text-emerald-800 leading-[24px] whitespace-nowrap">Book cleared for today</span></span><span class="ml-auto inline-flex items-center gap-1.5 shrink-0 text-sm font-bold text-violet-700"><span class="cld-pulse w-2 h-2 rounded-full bg-violet-500"></span> Live</span></div><div class="relative" style="height:256px"><svg class="absolute inset-0 pointer-events-none" width="236" height="256" fill="none" aria-hidden="true"><path class="cld-lead0" d="M132,47 C146.4,47 141.6,128 154,128" stroke="#7c3aed" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path><path class="cld-lead1" d="M132,97 C146.4,97 141.6,128 154,128" stroke="#7c3aed" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path><path class="cld-lead2" d="M132,147 C146.4,147 141.6,128 154,128" stroke="#7c3aed" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path><path class="cld-lead3" d="M132,203 C146.4,203 141.6,128 154,128" stroke="#7c3aed" stroke-opacity="0.8" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path></svg><div class="cld-sig0 absolute left-0 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2" style="top:27px;width:132px;height:40px"><span class="w-7 h-7 rounded-lg bg-violet-50 text-violet-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text h-4 w-4"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></span><span class="text-xs font-semibold text-gray-700 leading-tight">1,284 open invoices</span></div><div class="cld-sig1 absolute left-0 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2" style="top:77px;width:132px;height:40px"><span class="w-7 h-7 rounded-lg bg-violet-50 text-violet-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-coins h-4 w-4"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path><path d="m2 16 6 6"></path><circle cx="16" cy="9" r="2.9"></circle><circle cx="6" cy="5" r="3"></circle></svg></span><span class="text-xs font-semibold text-gray-700 leading-tight">92 promises given</span></div><div class="cld-sig2 absolute left-0 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2" style="top:127px;width:132px;height:40px"><span class="w-7 h-7 rounded-lg bg-violet-50 text-violet-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-down h-4 w-4"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline><polyline points="16 17 22 17 22 11"></polyline></svg></span><span class="text-xs font-semibold text-gray-700 leading-tight">Paying 9 days slower</span></div><div class="cld-sig3 absolute left-0 flex items-center gap-2 rounded-xl border-2 border-violet-300 bg-white px-2 shadow-sm" style="top:177px;width:132px;height:52px"><span class="w-8 h-8 rounded-lg bg-violet-600 text-white flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain h-4 w-4"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-[10px] font-bold uppercase tracking-wider text-violet-600">Model</span><span class="block text-xs font-bold text-gray-900 truncate">Risk score</span><span class="block text-[10px] text-gray-400 truncate">who will slip</span></span></div><div class="absolute" style="left:186px;top:128px;transform:translate(-50%,-50%);z-index:20"><div class="relative flex items-center justify-center"><span class="cld-ring absolute w-[70px] h-[70px] rounded-full" style="box-shadow:0 0 0 2px rgba(124,58,237,.45)"></span><span class="cld-ring2 absolute w-[70px] h-[70px] rounded-full" style="box-shadow:0 0 0 2px rgba(124,58,237,.45)"></span><div class="relative w-[60px] h-[60px] rounded-full bg-white border-2 border-violet-200 shadow-lg flex items-center justify-center"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:32px;height:32px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:13.44px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">1</span><span style="width:1ch;text-align:center;display:inline-block">0</span></div></div></div></div></div><div class="absolute top-0" style="left:236px;right:0"><div class="cld-head flex items-center justify-between px-1 mb-1"><span class="text-xs font-semibold uppercase tracking-wider text-gray-400">Today\u2019s worklist</span><span class="text-xs font-semibold uppercase tracking-wider text-gray-400">Risk</span></div><span class="cld-empty absolute inset-x-0 top-[86px] text-center text-sm font-semibold text-gray-400">Nothing left to work</span></div><div class="cld-row0 absolute flex items-center gap-2.5 rounded-xl border px-2.5" style="left:236px;right:0;top:24px;height:52px"><span class="cld-tile0 w-9 h-9 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag h-5 w-5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg></span><span class="text-sm font-bold text-gray-900 truncate">Merrick</span><span class="relative ml-auto block h-[24px] w-[132px] shrink-0"><span class="cld-risk0 absolute inset-0 flex items-center justify-end gap-1.5"><span class="text-sm font-bold text-gray-900 tabular-nums">94</span><span class="rounded-full bg-rose-50 px-2 py-0.5 text-xs font-bold text-rose-600">Will slip</span></span><span class="cld-out0 absolute inset-0 flex items-center justify-end gap-1.5 text-sm font-bold text-emerald-700 whitespace-nowrap"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-4 w-4 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Promised \u20AC274k</span></span></div><div class="cld-row1 absolute flex items-center gap-2.5 rounded-xl border px-2.5" style="left:236px;right:0;top:84px;height:52px"><span class="cld-tile1 w-9 h-9 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-factory h-5 w-5"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M17 18h1"></path><path d="M12 18h1"></path><path d="M7 18h1"></path></svg></span><span class="text-sm font-bold text-gray-900 truncate">Halvex</span><span class="relative ml-auto block h-[24px] w-[132px] shrink-0"><span class="cld-risk1 absolute inset-0 flex items-center justify-end gap-1.5"><span class="text-sm font-bold text-gray-900 tabular-nums">88</span><span class="rounded-full bg-rose-50 px-2 py-0.5 text-xs font-bold text-rose-600">Will slip</span></span><span class="cld-out1 absolute inset-0 flex items-center justify-end gap-1.5 text-sm font-bold text-emerald-700 whitespace-nowrap"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-4 w-4 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Paid \u20AC96k</span></span></div><div class="cld-row2 absolute flex items-center gap-2.5 rounded-xl border px-2.5" style="left:236px;right:0;top:144px;height:52px"><span class="cld-tile2 w-9 h-9 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck h-5 w-5"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg></span><span class="text-sm font-bold text-gray-900 truncate">Kestrel</span><span class="relative ml-auto block h-[24px] w-[132px] shrink-0"><span class="cld-risk2 absolute inset-0 flex items-center justify-end gap-1.5"><span class="text-sm font-bold text-gray-900 tabular-nums">71</span><span class="rounded-full bg-rose-50 px-2 py-0.5 text-xs font-bold text-rose-600">At risk</span></span><span class="cld-out2 absolute inset-0 flex items-center justify-end gap-1.5 text-sm font-bold text-emerald-700 whitespace-nowrap"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-4 w-4 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Promised \u20AC151k</span></span></div><div class="cld-row3 absolute flex items-center gap-2.5 rounded-xl border px-2.5" style="left:236px;right:0;top:204px;height:52px"><span class="cld-tile3 w-9 h-9 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-store h-5 w-5"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path><path d="M2 7h20"></path><path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"></path></svg></span><span class="text-sm font-bold text-gray-900 truncate">Brookq</span><span class="relative ml-auto block h-[24px] w-[132px] shrink-0"><span class="cld-risk3 absolute inset-0 flex items-center justify-end gap-1.5"><span class="text-sm font-bold text-gray-900 tabular-nums">64</span><span class="rounded-full bg-rose-50 px-2 py-0.5 text-xs font-bold text-rose-600">Watch</span></span><span class="cld-out3 absolute inset-0 flex items-center justify-end gap-1.5 text-sm font-bold text-emerald-700 whitespace-nowrap"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-4 w-4 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Paid \u20AC118k</span></span></div></div><div class="cld-bar mt-4 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4" style="height:60px"><span class="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-5 w-5"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></span><span class="text-sm font-semibold text-emerald-700/80">Collected today</span><span class="relative ml-auto block h-[30px] w-[130px] shrink-0"><span class="cld-c0 absolute inset-0 text-right text-2xl font-bold text-emerald-800 tabular-nums leading-[30px]">\u20AC0</span><span class="cld-c1 absolute inset-0 text-right text-2xl font-bold text-emerald-800 tabular-nums leading-[30px]">\u20AC274k</span><span class="cld-c2 absolute inset-0 text-right text-2xl font-bold text-emerald-800 tabular-nums leading-[30px]">\u20AC370k</span><span class="cld-c3 absolute inset-0 text-right text-2xl font-bold text-emerald-800 tabular-nums leading-[30px]">\u20AC521k</span><span class="cld-c4 absolute inset-0 text-right text-2xl font-bold text-emerald-800 tabular-nums leading-[30px]">\u20AC639k</span></span></div></div></div></div>`,"homev2-claimiq-loop":`<style>
        @keyframes clqRing  { 0%{transform:scale(.9);opacity:.5;} 70%{transform:scale(1.5);opacity:0;} 100%{transform:scale(1.5);opacity:0;} }
        @keyframes clqPulse { 0%,100%{opacity:1;} 50%{opacity:.3;} }

        
        @keyframes clqSig0 {
          0%,3%       { opacity:0; transform: translateX(-10px); }
          9%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes clqLead0 {
          0%,5%    { stroke-dashoffset:100; opacity:0; }
          7%       { opacity:1; }
          14%,100% { stroke-dashoffset:0; opacity:1; }
        }
        @keyframes clqSig1 {
          0%,7%       { opacity:0; transform: translateX(-10px); }
          13%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes clqLead1 {
          0%,9%    { stroke-dashoffset:100; opacity:0; }
          11%       { opacity:1; }
          18%,100% { stroke-dashoffset:0; opacity:1; }
        }
        @keyframes clqSig2 {
          0%,11%       { opacity:0; transform: translateX(-10px); }
          17%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes clqLead2 {
          0%,13%    { stroke-dashoffset:100; opacity:0; }
          15%       { opacity:1; }
          22%,100% { stroke-dashoffset:0; opacity:1; }
        }
        @keyframes clqSig3 {
          0%,15%       { opacity:0; transform: translateX(-10px); }
          21%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes clqLead3 {
          0%,17%    { stroke-dashoffset:100; opacity:0; }
          19%       { opacity:1; }
          26%,100% { stroke-dashoffset:0; opacity:1; }
        }

        
        @keyframes clqRow0 {
          0%,26%        { opacity:0; transform: translateX(12px); }
          32%,100%  { opacity:1; transform:none; }
        }
        @keyframes clqAmt0 {
          0%,29%    { opacity:0; transform:scale(.7); }
          34%,100%  { opacity:1; transform:scale(1); }
        }
        @keyframes clqRow1 {
          0%,34%        { opacity:0; transform: translateX(12px); }
          40%,100%  { opacity:1; transform:none; }
        }
        @keyframes clqAmt1 {
          0%,37%    { opacity:0; transform:scale(.7); }
          42%,100%  { opacity:1; transform:scale(1); }
        }
        @keyframes clqRow2 {
          0%,42%        { opacity:0; transform: translateX(12px); }
          48%,100%  { opacity:1; transform:none; }
        }
        @keyframes clqAmt2 {
          0%,45%    { opacity:0; transform:scale(.7); }
          50%,100%  { opacity:1; transform:scale(1); }
        }
        @keyframes clqRow3 {
          0%,50%        { opacity:0; transform: translateX(12px); }
          56%,100%  { opacity:1; transform:none; }
        }
        @keyframes clqAmt3 {
          0%,53%    { opacity:0; transform:scale(.7); }
          58%,100%  { opacity:1; transform:scale(1); }
        }
        @keyframes clqHead { 0%,20%{opacity:0;} 26%,100%{opacity:1;} }
        @keyframes clqTotal { 0%,56%{opacity:0;transform:translateY(6px);} 64%,100%{opacity:1;transform:none;} }

        @keyframes clqBtn {
          0%,62%   { transform:scale(1); box-shadow:0 0 0 0 rgba(217,119,6,0); }
          70%      { transform:scale(1); box-shadow:0 0 0 0 rgba(217,119,6,.35); }
          78%      { transform:scale(1); box-shadow:0 0 0 8px rgba(217,119,6,0); }
          82%      { transform:scale(.96); }
          86%,100% { transform:scale(1); box-shadow:0 0 0 0 rgba(217,119,6,0); }
        }
        @keyframes clqCursor {
          0%,66%   { transform: translate(-46px,26px) scale(1); opacity:0; }
          70%      { transform: translate(-46px,26px) scale(1); opacity:1; }
          79%      { transform: translate(-6px,4px) scale(1); opacity:1; }
          82%      { transform: translate(-6px,4px) scale(.82); opacity:1; }
          85%      { transform: translate(-6px,4px) scale(1); opacity:1; }
          92%      { transform: translate(-6px,4px) scale(1); opacity:0; }
          100%     { transform: translate(-46px,26px) scale(1); opacity:0; }
        }
        @keyframes clqBtnA { 0%,83%{opacity:1;} 85%,100%{opacity:0;} }
        @keyframes clqBtnB { 0%,83%{opacity:0;} 85%,100%{opacity:1;} }
        @keyframes clqSt1 { 0%,14%{opacity:1;} 16%,100%{opacity:0;} }
        @keyframes clqSt2 { 0%,16%{opacity:0;} 18%,56%{opacity:1;} 58%,100%{opacity:0;} }
        @keyframes clqSt3 { 0%,58%{opacity:0;} 60%,82%{opacity:1;} 84%,100%{opacity:0;} }
        @keyframes clqSt4 { 0%,84%{opacity:0;} 86%,100%{opacity:1;} }

        .clq-ring  { animation: clqRing 2.6s ease-out infinite; }
        .clq-ring2 { animation: clqRing 2.6s ease-out infinite; animation-delay:1.3s; }
        .clq-pulse { animation: clqPulse 1.4s ease-in-out infinite; }
        
        .clq-sig0  { animation: clqSig0 10s ease-out infinite; opacity:0; }
        .clq-lead0 { animation: clqLead0 10s ease-out infinite; opacity:0; }
        .clq-sig1  { animation: clqSig1 10s ease-out infinite; opacity:0; }
        .clq-lead1 { animation: clqLead1 10s ease-out infinite; opacity:0; }
        .clq-sig2  { animation: clqSig2 10s ease-out infinite; opacity:0; }
        .clq-lead2 { animation: clqLead2 10s ease-out infinite; opacity:0; }
        .clq-sig3  { animation: clqSig3 10s ease-out infinite; opacity:0; }
        .clq-lead3 { animation: clqLead3 10s ease-out infinite; opacity:0; }
        
        .clq-row0 { animation: clqRow0 10s ease-out infinite; opacity:0; }
        .clq-amt0 { animation: clqAmt0 10s cubic-bezier(.3,1.5,.5,1) infinite; opacity:0; }
        .clq-row1 { animation: clqRow1 10s ease-out infinite; opacity:0; }
        .clq-amt1 { animation: clqAmt1 10s cubic-bezier(.3,1.5,.5,1) infinite; opacity:0; }
        .clq-row2 { animation: clqRow2 10s ease-out infinite; opacity:0; }
        .clq-amt2 { animation: clqAmt2 10s cubic-bezier(.3,1.5,.5,1) infinite; opacity:0; }
        .clq-row3 { animation: clqRow3 10s ease-out infinite; opacity:0; }
        .clq-amt3 { animation: clqAmt3 10s cubic-bezier(.3,1.5,.5,1) infinite; opacity:0; }
        .clq-head  { animation: clqHead 10s ease-out infinite; opacity:0; }
        .clq-total { animation: clqTotal 10s ease-out infinite; opacity:0; }
        .clq-btn   { animation: clqBtn 10s ease-out infinite; }
        .clq-cursor{ animation: clqCursor 10s cubic-bezier(.4,0,.2,1) infinite; opacity:0; }
        .clq-a { animation: clqBtnA 10s linear infinite; }
        .clq-b { animation: clqBtnB 10s linear infinite; opacity:0; }
        .clq-s1 { animation: clqSt1 10s linear infinite; }
        .clq-s2 { animation: clqSt2 10s linear infinite; opacity:0; }
        .clq-s3 { animation: clqSt3 10s linear infinite; opacity:0; }
        .clq-s4 { animation: clqSt4 10s linear infinite; opacity:0; }
      </style><div class="tf-cardonly"><div class="tf-card relative w-[620px] shrink-0" style="--card-w:620px"><div class="bg-white rounded-2xl shadow-xl border border-gray-100/80 p-6"><div class="flex items-center gap-3 pb-3.5 mb-3 border-b border-gray-100"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:30px;height:30px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:12.6px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">0</span><span style="width:1ch;text-align:center;display:inline-block">0</span></div></div><span class="relative block h-[24px] w-[280px] min-w-0"><span class="clq-s1 absolute inset-0 text-base font-bold text-gray-900 leading-[24px] whitespace-nowrap">Reading this week\u2019s short pays</span><span class="clq-s2 absolute inset-0 text-base font-bold text-gray-900 leading-[24px] whitespace-nowrap">Sorting them by reason</span><span class="clq-s3 absolute inset-0 text-base font-bold text-gray-900 leading-[24px] whitespace-nowrap">Ready to dispute</span><span class="clq-s4 absolute inset-0 text-base font-bold text-emerald-800 leading-[24px] whitespace-nowrap">178 disputes opened</span></span><span class="ml-auto inline-flex items-center gap-1.5 shrink-0 text-sm font-bold text-amber-700"><span class="clq-pulse w-2 h-2 rounded-full bg-amber-500"></span> Live</span></div><div class="relative" style="height:256px"><svg class="absolute inset-0 pointer-events-none" width="236" height="256" fill="none" aria-hidden="true"><path class="clq-lead0" d="M132,47 C146.4,47 141.6,128 154,128" stroke="#d97706" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path><path class="clq-lead1" d="M132,97 C146.4,97 141.6,128 154,128" stroke="#d97706" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path><path class="clq-lead2" d="M132,147 C146.4,147 141.6,128 154,128" stroke="#d97706" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path><path class="clq-lead3" d="M132,203 C146.4,203 141.6,128 154,128" stroke="#d97706" stroke-opacity="0.8" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path></svg><div class="clq-sig0 absolute left-0 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2" style="top:27px;width:132px;height:40px"><span class="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-x h-4 w-4"><path d="m13.5 8.5-5 5"></path><path d="m8.5 8.5 5 5"></path><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg></span><span class="text-xs font-semibold text-gray-700 leading-tight">214 short pays</span></div><div class="clq-sig1 absolute left-0 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2" style="top:77px;width:132px;height:40px"><span class="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tags h-4 w-4"><path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"></path><path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="6.5" cy="9.5" r=".5" fill="currentColor"></circle></svg></span><span class="text-xs font-semibold text-gray-700 leading-tight">Your reason codes</span></div><div class="clq-sig2 absolute left-0 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2" style="top:127px;width:132px;height:40px"><span class="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-search h-4 w-4"><path d="M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"></path><path d="m21 21-1.9-1.9"></path><circle cx="17" cy="17" r="3"></circle></svg></span><span class="text-xs font-semibold text-gray-700 leading-tight">Contracts &amp; PODs</span></div><div class="clq-sig3 absolute left-0 flex items-center gap-2 rounded-xl border-2 border-amber-300 bg-white px-2 shadow-sm" style="top:177px;width:132px;height:52px"><span class="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain h-4 w-4"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-[10px] font-bold uppercase tracking-wider text-amber-600">Model</span><span class="block text-xs font-bold text-gray-900 truncate">Validity</span><span class="block text-[10px] text-gray-400 truncate">what stands up</span></span></div><div class="absolute" style="left:186px;top:128px;transform:translate(-50%,-50%);z-index:20"><div class="relative flex items-center justify-center"><span class="clq-ring absolute w-[70px] h-[70px] rounded-full" style="box-shadow:0 0 0 2px rgba(217,119,6,.45)"></span><span class="clq-ring2 absolute w-[70px] h-[70px] rounded-full" style="box-shadow:0 0 0 2px rgba(217,119,6,.45)"></span><div class="relative w-[60px] h-[60px] rounded-full bg-white border-2 border-amber-200 shadow-lg flex items-center justify-center"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:32px;height:32px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:13.44px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">0</span><span style="width:1ch;text-align:center;display:inline-block">0</span></div></div></div></div></div><div class="clq-head absolute top-0 flex items-center justify-between px-1" style="left:236px;right:0"><span class="text-xs font-semibold uppercase tracking-wider text-gray-400">Sorted by reason</span><span class="text-xs font-semibold uppercase tracking-wider text-gray-400">Recoverable</span></div><div class="clq-row0 absolute flex items-center gap-2.5 rounded-xl border px-3 border-amber-200 bg-amber-50/50" style="left:236px;right:0;top:24px;height:52px"><span class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-amber-100 text-amber-700"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package-x h-5 w-5"><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path><path d="m7.5 4.27 9 5.15"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" x2="12" y1="22" y2="12"></line><path d="m17 13 5 5m-5 0 5-5"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm font-bold text-gray-900 truncate">Shortage</span><span class="block text-sm text-gray-500">84 claims</span></span><span class="clq-amt0 ml-auto shrink-0 text-sm font-bold tabular-nums text-amber-700">\u20AC62k</span></div><div class="clq-row1 absolute flex items-center gap-2.5 rounded-xl border px-3 border-amber-200 bg-amber-50/50" style="left:236px;right:0;top:84px;height:52px"><span class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-amber-100 text-amber-700"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-percent h-5 w-5"><line x1="19" x2="5" y1="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm font-bold text-gray-900 truncate">Pricing</span><span class="block text-sm text-gray-500">51 claims</span></span><span class="clq-amt1 ml-auto shrink-0 text-sm font-bold tabular-nums text-amber-700">\u20AC48k</span></div><div class="clq-row2 absolute flex items-center gap-2.5 rounded-xl border px-3 border-amber-200 bg-amber-50/50" style="left:236px;right:0;top:144px;height:52px"><span class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-amber-100 text-amber-700"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-percent h-5 w-5"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m15 9-6 6"></path><path d="M9 9h.01"></path><path d="M15 15h.01"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm font-bold text-gray-900 truncate">Promotion</span><span class="block text-sm text-gray-500">43 claims</span></span><span class="clq-amt2 ml-auto shrink-0 text-sm font-bold tabular-nums text-amber-700">\u20AC51k</span></div><div class="clq-row3 absolute flex items-center gap-2.5 rounded-xl border px-3 border-gray-200 bg-gray-50/70" style="left:236px;right:0;top:204px;height:52px"><span class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-gray-200 text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check h-5 w-5"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm font-bold text-gray-900 truncate">Damage</span><span class="block text-sm text-gray-500">36 claims</span></span><span class="clq-amt3 ml-auto shrink-0 text-sm font-bold tabular-nums text-gray-400">Valid</span></div></div><div class="clq-total mt-4 flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4" style="height:62px"><span class="min-w-0 leading-tight"><span class="block text-sm font-semibold text-amber-700/80">Recoverable this week</span><span class="block text-2xl font-bold text-amber-900 tabular-nums">\u20AC161k</span></span><span class="relative ml-auto shrink-0"><span class="clq-btn relative block h-[40px] w-[150px] rounded-xl"><span class="clq-a absolute inset-0 inline-flex items-center justify-center gap-1.5 rounded-xl bg-amber-600 text-sm font-bold text-white">Start disputes</span><span class="clq-b absolute inset-0 inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-50 text-sm font-bold text-emerald-700 ring-1 ring-emerald-200"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-4 w-4"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Started</span></span><svg class="clq-cursor absolute pointer-events-none" style="right:8px;bottom:-2px;width:20px;height:20px;z-index:40" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 3l14 8.5-6.2 1.2L10 19 5 3z" fill="#111827" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"></path></svg></span></div></div></div></div>`,"homev2-cashpulse-loop":`<style>
        @keyframes cpRing  { 0%{transform:scale(.9);opacity:.5;} 70%{transform:scale(1.55);opacity:0;} 100%{transform:scale(1.55);opacity:0;} }
        @keyframes cpPulse { 0%,100%{opacity:1;} 50%{opacity:.3;} }

        
        @keyframes cpSig0 {
          0%,3%       { opacity:0; transform: translateX(-10px); }
          9%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes cpLead0 {
          0%,5%    { stroke-dashoffset:100; opacity:0; }
          7%       { opacity:1; }
          14%,100% { stroke-dashoffset:0; opacity:1; }
        }
        @keyframes cpSig1 {
          0%,8%       { opacity:0; transform: translateX(-10px); }
          14%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes cpLead1 {
          0%,10%    { stroke-dashoffset:100; opacity:0; }
          12%       { opacity:1; }
          19%,100% { stroke-dashoffset:0; opacity:1; }
        }
        @keyframes cpSig2 {
          0%,13%       { opacity:0; transform: translateX(-10px); }
          19%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes cpLead2 {
          0%,15%    { stroke-dashoffset:100; opacity:0; }
          17%       { opacity:1; }
          24%,100% { stroke-dashoffset:0; opacity:1; }
        }
        @keyframes cpSig3 {
          0%,18%       { opacity:0; transform: translateX(-10px); }
          24%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes cpLead3 {
          0%,20%    { stroke-dashoffset:100; opacity:0; }
          22%       { opacity:1; }
          29%,100% { stroke-dashoffset:0; opacity:1; }
        }

        /* the cone opens, then tightens once the gap is closed */
        @keyframes cpConeIn    { 0%,22%{opacity:0;} 30%,100%{opacity:1;} }
        @keyframes cpConeWide  { 0%,60%{opacity:1;} 70%,100%{opacity:0;} }
        @keyframes cpConeTight { 0%,60%{opacity:0;} 70%,100%{opacity:1;} }
        @keyframes cpP50In { 0%,24%{stroke-dashoffset:400;opacity:0;} 27%{opacity:1;} 38%,100%{stroke-dashoffset:0;opacity:1;} }
        @keyframes cpDipOut{ 0%,60%{opacity:1;} 68%,100%{opacity:0;} }
        @keyframes cpGhost { 0%,60%{opacity:0;} 70%,100%{opacity:.45;} }
        @keyframes cpFixIn { 0%,62%{stroke-dashoffset:400;opacity:0;} 65%{opacity:1;} 76%,100%{stroke-dashoffset:0;opacity:1;} }

        /* the gap is spotted, named, then closed */
        @keyframes cpFlag { 0%,38%{opacity:0;transform:scale(.6);} 44%,62%{opacity:1;transform:scale(1);} 68%,100%{opacity:0;transform:scale(.6);} }
        @keyframes cpRisk { 0%,42%{opacity:0;transform:translateY(6px);} 48%,60%{opacity:1;transform:none;} 66%,100%{opacity:0;transform:translateY(-6px);} }
        @keyframes cpAct  { 0%,62%{opacity:0;transform:translateY(6px);} 70%,100%{opacity:1;transform:none;} }
        @keyframes cpVal1 { 0%,64%{opacity:1;} 68%,100%{opacity:0;} }
        @keyframes cpVal2 { 0%,64%{opacity:0;} 68%,100%{opacity:1;} }

        /* one human decision, on a real button, with a real cursor */
        @keyframes cpBtn {
          0%,48%   { transform:scale(1); box-shadow:0 0 0 0 rgba(79,70,229,0); }
          54%      { transform:scale(1); box-shadow:0 0 0 0 rgba(79,70,229,.35); }
          60%      { transform:scale(1); box-shadow:0 0 0 8px rgba(79,70,229,0); }
          62%      { transform:scale(.96); }
          66%,100% { transform:scale(1); box-shadow:0 0 0 0 rgba(79,70,229,0); }
        }
        @keyframes cpCursor {
          0%,48%   { transform: translate(-46px,26px); opacity:0; }
          52%      { transform: translate(-46px,26px); opacity:1; }
          60%      { transform: translate(-6px,4px); opacity:1; }
          62%      { transform: translate(-6px,4px) scale(.82); opacity:1; }
          66%      { transform: translate(-6px,4px); opacity:1; }
          74%      { transform: translate(-6px,4px); opacity:0; }
          100%     { transform: translate(-46px,26px); opacity:0; }
        }
        @keyframes cpBtnA { 0%,63%{opacity:1;} 65%,100%{opacity:0;} }
        @keyframes cpBtnB { 0%,63%{opacity:0;} 65%,100%{opacity:1;} }

        @keyframes cpSt1 { 0%,18%{opacity:1;} 20%,100%{opacity:0;} }
        @keyframes cpSt2 { 0%,20%{opacity:0;} 22%,38%{opacity:1;} 40%,100%{opacity:0;} }
        @keyframes cpSt3 { 0%,40%{opacity:0;} 42%,62%{opacity:1;} 64%,100%{opacity:0;} }
        @keyframes cpSt4 { 0%,64%{opacity:0;} 66%,100%{opacity:1;} }

        .cp-ring  { animation: cpRing 2.6s ease-out infinite; }
        .cp-ring2 { animation: cpRing 2.6s ease-out infinite; animation-delay:1.3s; }
        .cp-pulse { animation: cpPulse 1.4s ease-in-out infinite; }
        
        .cp-sig0  { animation: cpSig0 10s ease-out infinite; opacity:0; }
        .cp-lead0 { animation: cpLead0 10s ease-out infinite; opacity:0; }
        .cp-sig1  { animation: cpSig1 10s ease-out infinite; opacity:0; }
        .cp-lead1 { animation: cpLead1 10s ease-out infinite; opacity:0; }
        .cp-sig2  { animation: cpSig2 10s ease-out infinite; opacity:0; }
        .cp-lead2 { animation: cpLead2 10s ease-out infinite; opacity:0; }
        .cp-sig3  { animation: cpSig3 10s ease-out infinite; opacity:0; }
        .cp-lead3 { animation: cpLead3 10s ease-out infinite; opacity:0; }
        .cp-conein    { animation: cpConeIn 10s ease-out infinite; opacity:0; }
        .cp-conewide  { animation: cpConeWide 10s ease-out infinite; }
        .cp-conetight { animation: cpConeTight 10s ease-out infinite; opacity:0; }
        .cp-p50   { animation: cpP50In 10s ease-out infinite, cpDipOut 10s ease-out infinite; }
        .cp-ghost { animation: cpGhost 10s ease-out infinite; opacity:0; }
        .cp-fix   { animation: cpFixIn 10s ease-out infinite; opacity:0; }
        .cp-flag  { animation: cpFlag 10s ease-out infinite; opacity:0; }
        .cp-risk  { animation: cpRisk 10s ease-out infinite; opacity:0; }
        .cp-act   { animation: cpAct 10s ease-out infinite; opacity:0; }
        .cp-v1    { animation: cpVal1 10s linear infinite; }
        .cp-v2    { animation: cpVal2 10s linear infinite; opacity:0; }
        .cp-btn   { animation: cpBtn 10s ease-out infinite; }
        .cp-cursor{ animation: cpCursor 10s cubic-bezier(.4,0,.2,1) infinite; opacity:0; }
        .cp-a { animation: cpBtnA 10s linear infinite; }
        .cp-b { animation: cpBtnB 10s linear infinite; opacity:0; }
        .cp-s1 { animation: cpSt1 10s linear infinite; }
        .cp-s2 { animation: cpSt2 10s linear infinite; opacity:0; }
        .cp-s3 { animation: cpSt3 10s linear infinite; opacity:0; }
        .cp-s4 { animation: cpSt4 10s linear infinite; opacity:0; }
      </style><div class="tf-cardonly"><div class="tf-card relative w-[640px] shrink-0" style="--card-w:640px"><div class="bg-white rounded-2xl shadow-xl border border-gray-100/80 p-6"><div class="flex items-center gap-3 pb-3.5 mb-3 border-b border-gray-100"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:30px;height:30px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:12.6px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">0</span><span style="width:1ch;text-align:center;display:inline-block">1</span></div></div><span class="min-w-0 leading-tight"><span class="block text-base font-bold text-gray-900">Cash position, next 90 days</span><span class="relative block h-[20px] w-[250px]"><span class="cp-s1 absolute inset-0 text-sm text-gray-500 leading-[20px]">Reading the book</span><span class="cp-s2 absolute inset-0 text-sm text-gray-500 leading-[20px]">Pricing when each one pays</span><span class="cp-s3 absolute inset-0 text-sm font-semibold text-rose-600 leading-[20px]">Short \u20AC274k in week 6</span><span class="cp-s4 absolute inset-0 text-sm font-semibold text-emerald-700 leading-[20px]">Gap closed</span></span></span><span class="ml-auto inline-flex items-center gap-1.5 shrink-0 text-sm font-bold text-indigo-700"><span class="cp-pulse w-2 h-2 rounded-full bg-indigo-500"></span> Live</span></div><div class="relative" style="height:212px"><svg class="absolute inset-0 pointer-events-none" width="592" height="212" fill="none" aria-hidden="true"><path class="cp-lead0" d="M140,24 C159.8,24 153.2,105 171,105" stroke="#4f46e5" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path><path class="cp-lead1" d="M140,74 C159.8,74 153.2,105 171,105" stroke="#4f46e5" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path><path class="cp-lead2" d="M140,124 C159.8,124 153.2,105 171,105" stroke="#4f46e5" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path><path class="cp-lead3" d="M140,180 C159.8,180 153.2,105 171,105" stroke="#4f46e5" stroke-opacity="0.8" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path><g class="cp-conein"><path class="cp-conewide" d="M245,105 L592,43 L592,171 Z" fill="#4f46e5" fill-opacity="0.10"></path><path class="cp-conetight" d="M245,105 L592,65 L592,135 Z" fill="#16a34a" fill-opacity="0.12"></path><path d="M245,29 V185" stroke="#d1d5db" stroke-width="1.5" stroke-dasharray="3 4"></path><path class="cp-p50" d="M245,105 C300,97 330,139 380,135 C440,131 500,111 592,107" stroke="#4f46e5" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="400" pathLength="400"></path><path class="cp-ghost" d="M245,105 C300,97 330,139 380,135 C440,131 500,111 592,107" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-dasharray="4 5"></path><path class="cp-fix" d="M245,105 C300,95 330,89 380,85 C440,81 500,75 592,71" stroke="#16a34a" stroke-width="3" stroke-linecap="round" stroke-dasharray="400" pathLength="400"></path></g><g class="cp-flag"><circle cx="380" cy="135" r="14" fill="#e11d48" fill-opacity="0.12"></circle><circle cx="380" cy="135" r="7" fill="#fff" stroke="#e11d48" stroke-width="2.5"></circle></g></svg><div class="cp-sig0 absolute left-0 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2" style="top:4px;width:140px;height:40px"><span class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text h-4 w-4"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></span><span class="text-xs font-semibold text-gray-700 leading-tight">1,284 invoices</span></div><div class="cp-sig1 absolute left-0 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2" style="top:54px;width:140px;height:40px"><span class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-landmark h-4 w-4"><line x1="3" x2="21" y1="22" y2="22"></line><line x1="6" x2="6" y1="18" y2="11"></line><line x1="10" x2="10" y1="18" y2="11"></line><line x1="14" x2="14" y1="18" y2="11"></line><line x1="18" x2="18" y1="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg></span><span class="text-xs font-semibold text-gray-700 leading-tight">Bank balances</span></div><div class="cp-sig2 absolute left-0 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2" style="top:104px;width:140px;height:40px"><span class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-receipt h-4 w-4"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17.5v-11"></path></svg></span><span class="text-xs font-semibold text-gray-700 leading-tight">Payments out</span></div><div class="cp-sig3 absolute left-0 flex items-center gap-2 rounded-xl border-2 border-indigo-300 bg-white px-2 shadow-sm" style="top:154px;width:140px;height:52px"><span class="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain h-4 w-4"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-[10px] font-bold uppercase tracking-wider text-indigo-600">Model</span><span class="block text-xs font-bold text-gray-900 truncate">Pay date</span><span class="block text-[10px] text-gray-400 truncate">when cash lands</span></span></div><div class="absolute" style="left:205px;top:105px;transform:translate(-50%,-50%);z-index:20"><div class="relative flex items-center justify-center"><span class="cp-ring absolute w-[76px] h-[76px] rounded-full" style="box-shadow:0 0 0 2px rgba(79,70,229,.45)"></span><span class="cp-ring2 absolute w-[76px] h-[76px] rounded-full" style="box-shadow:0 0 0 2px rgba(79,70,229,.45)"></span><div class="relative w-[64px] h-[64px] rounded-full bg-white border-2 border-indigo-200 shadow-lg flex items-center justify-center"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:34px;height:34px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:14.28px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">0</span><span style="width:1ch;text-align:center;display:inline-block">0</span></div></div></div></div></div><span class="absolute text-xs font-semibold text-gray-400" style="left:233px;top:198px">today</span><span class="absolute text-xs font-semibold text-gray-400" style="left:366px;top:198px">week 6</span><span class="absolute text-xs font-semibold text-gray-400" style="right:0;top:198px">+90d</span></div><div class="relative mt-2" style="height:62px"><div class="cp-risk absolute inset-0 flex items-center gap-3 rounded-xl border border-rose-200 bg-rose-50 px-3.5"><span class="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert h-5 w-5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm font-bold text-gray-900">Merrick \xB7 \u20AC274k due 14 Sep</span><span class="block text-sm text-gray-500">Two broken promises, paying 11 days slower</span></span></div><div class="cp-act absolute inset-0 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-3.5"><span class="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-call h-5 w-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm font-bold text-emerald-900">Chased and dated</span><span class="block text-sm text-emerald-700/80">\u20AC274k committed for 9 Sep</span></span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check ml-auto h-5 w-5 shrink-0 text-emerald-600"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div></div><div class="mt-3 flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50/70 px-4" style="height:62px"><span class="min-w-0 leading-tight"><span class="block text-sm font-semibold text-gray-500">Expected in 90 days</span><span class="relative block h-[30px] w-[120px]"><span class="cp-v1 absolute inset-0 text-2xl font-bold text-gray-900 tabular-nums leading-[30px]">\u20AC4.10M</span><span class="cp-v2 absolute inset-0 text-2xl font-bold text-emerald-700 tabular-nums leading-[30px]">\u20AC4.37M</span></span></span><span class="relative ml-auto shrink-0"><span class="cp-btn relative block h-[40px] w-[150px] rounded-xl"><span class="cp-a absolute inset-0 inline-flex items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold text-white">Close the gap</span><span class="cp-b absolute inset-0 inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-50 text-sm font-bold text-emerald-700 ring-1 ring-emerald-200"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-4 w-4"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Closed</span></span><svg class="cp-cursor absolute pointer-events-none" style="right:8px;bottom:-2px;width:20px;height:20px;z-index:40" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 3l14 8.5-6.2 1.2L10 19 5 3z" fill="#111827" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"></path></svg></span></div></div></div></div>`,"homev2-home-stack":`<style>
        @keyframes hsPulse { 0%,100%{opacity:1;} 50%{opacity:.3;} }

        
        @keyframes hsTile_sap {
          0%,6%       { opacity:0; transform: translateY(-8px); }
          13%,100% { opacity:1; transform: none; }
        }
        @keyframes hsPipe_sap {
          0%,22%    { stroke-dashoffset:100; opacity:0; }
          24%       { opacity:1; }
          32%,100%  { stroke-dashoffset:0; opacity:1; }
        }
        @keyframes hsTile_oracle {
          0%,11%       { opacity:0; transform: translateY(-8px); }
          18%,100% { opacity:1; transform: none; }
        }
        @keyframes hsPipe_oracle {
          0%,27%    { stroke-dashoffset:100; opacity:0; }
          29%       { opacity:1; }
          37%,100%  { stroke-dashoffset:0; opacity:1; }
        }
        @keyframes hsTile_dyn {
          0%,16%       { opacity:0; transform: translateY(-8px); }
          23%,100% { opacity:1; transform: none; }
        }
        @keyframes hsPipe_dyn {
          0%,32%    { stroke-dashoffset:100; opacity:0; }
          34%       { opacity:1; }
          42%,100%  { stroke-dashoffset:0; opacity:1; }
        }

        @keyframes hsBus { 0%,34%{opacity:0;transform:translateY(8px);} 42%,100%{opacity:1;transform:none;} }
        
        @keyframes hsChip_mig {
          0%,44%       { opacity:0; transform: translateY(6px); }
          51%,100% { opacity:1; transform: none; }
        }
        @keyframes hsChip_proc {
          0%,48%       { opacity:0; transform: translateY(6px); }
          55%,100% { opacity:1; transform: none; }
        }
        @keyframes hsChip_ro {
          0%,52%       { opacity:0; transform: translateY(6px); }
          59%,100% { opacity:1; transform: none; }
        }
        @keyframes hsFoot { 0%,56%{opacity:0;transform:translateY(6px);} 64%,100%{opacity:1;transform:none;} }

        @keyframes hsSt1 { 0%,32%{opacity:1;} 34%,100%{opacity:0;} }
        @keyframes hsSt2 { 0%,34%{opacity:0;} 36%,56%{opacity:1;} 58%,100%{opacity:0;} }
        @keyframes hsSt3 { 0%,58%{opacity:0;} 60%,100%{opacity:1;} }

        .hs-pulse { animation: hsPulse 1.4s ease-in-out infinite; }
        
        .hs-tile-sap { animation: hsTile_sap 10s ease-out infinite; opacity:0; }
        .hs-pipe-sap { animation: hsPipe_sap 10s ease-out infinite; opacity:0; }
        .hs-tile-oracle { animation: hsTile_oracle 10s ease-out infinite; opacity:0; }
        .hs-pipe-oracle { animation: hsPipe_oracle 10s ease-out infinite; opacity:0; }
        .hs-tile-dyn { animation: hsTile_dyn 10s ease-out infinite; opacity:0; }
        .hs-pipe-dyn { animation: hsPipe_dyn 10s ease-out infinite; opacity:0; }
        .hs-bus { animation: hsBus 10s ease-out infinite; opacity:0; }
        
        .hs-chip-mig { animation: hsChip_mig 10s ease-out infinite; opacity:0; }
        .hs-chip-proc { animation: hsChip_proc 10s ease-out infinite; opacity:0; }
        .hs-chip-ro { animation: hsChip_ro 10s ease-out infinite; opacity:0; }
        .hs-foot { animation: hsFoot 10s ease-out infinite; opacity:0; }
        .hs-s1 { animation: hsSt1 10s linear infinite; }
        .hs-s2 { animation: hsSt2 10s linear infinite; opacity:0; }
        .hs-s3 { animation: hsSt3 10s linear infinite; opacity:0; }
      </style><div class="tf-cardonly"><div class="tf-card relative w-[640px] shrink-0" style="--card-w:640px"><div class="bg-white rounded-2xl shadow-xl border border-gray-100/80 p-6"><div class="flex items-center gap-3 pb-3.5 mb-4 border-b border-gray-100"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:30px;height:30px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:12.6px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">1</span><span style="width:1ch;text-align:center;display:inline-block">0</span></div></div><span class="relative block h-[24px] w-[320px] min-w-0"><span class="hs-s1 absolute inset-0 text-base font-bold text-gray-900 leading-[24px] whitespace-nowrap">Whatever you already run</span><span class="hs-s2 absolute inset-0 text-base font-bold text-gray-900 leading-[24px] whitespace-nowrap">Connected where the data sits</span><span class="hs-s3 absolute inset-0 text-base font-bold text-emerald-800 leading-[24px] whitespace-nowrap">Nothing moved, nothing rebuilt</span></span><span class="ml-auto inline-flex items-center gap-1.5 shrink-0 text-sm font-bold text-violet-700"><span class="hs-pulse w-2 h-2 rounded-full bg-violet-600"></span> Live</span></div><div class="relative" style="height:204px"><svg class="absolute inset-0 pointer-events-none" width="592" height="204" fill="none" aria-hidden="true"><path class="hs-pipe-sap" d="M94,64 V96" stroke="#6d28d9" stroke-opacity="0.45" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path><path class="hs-pipe-oracle" d="M296,64 V96" stroke="#6d28d9" stroke-opacity="0.45" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path><path class="hs-pipe-dyn" d="M498,64 V96" stroke="#6d28d9" stroke-opacity="0.45" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path></svg><span class="hs-tile-sap absolute flex items-center justify-center rounded-xl border border-gray-200 bg-white" style="left:0;top:0;width:188px;height:64px"><img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxuczp4PSJuc19leHRlbmQ7IiB4bWxuczppPSJuc19haTsiIHhtbG5zOmdyYXBoPSJuc19ncmFwaHM7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDkxIDQ1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5MSA0NTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KICAuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6dXJsKCNTVkdJRF8xXyk7fQoJLnN0MXtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNGRkZGRkY7fQogPC9zdHlsZT4KIDxtZXRhZGF0YT4KICA8c2Z3IHhtbG5zPSJuc19zZnc7Ij4KICAgPHNsaWNlcz4KICAgPC9zbGljZXM+CiAgIDxzbGljZVNvdXJjZUJvdW5kcyBib3R0b21MZWZ0T3JpZ2luPSJ0cnVlIiBoZWlnaHQ9IjQ1IiB3aWR0aD0iOTEiIHg9IjAiIHk9IjAiPgogICA8L3NsaWNlU291cmNlQm91bmRzPgogIDwvc2Z3PgogPC9tZXRhZGF0YT4KIDxnPgogIDxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNDUuNDgzIiB5MT0iNDYiIHgyPSI0NS40ODMiIHkyPSIxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNDYpIj4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBBRUVGIj4KICAgPC9zdG9wPgogICA8c3RvcCBvZmZzZXQ9IjAuMjEyIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA5N0RDIj4KICAgPC9zdG9wPgogICA8c3RvcCBvZmZzZXQ9IjAuNTE5IiBzdHlsZT0ic3RvcC1jb2xvcjojMDA3Q0M1Ij4KICAgPC9zdG9wPgogICA8c3RvcCBvZmZzZXQ9IjAuNzkyIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA2Q0I4Ij4KICAgPC9zdG9wPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDY2QjMiPgogICA8L3N0b3A+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMCw0NWg0Nkw5MSwwSDBWNDUiPgogIDwvcGF0aD4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTQsOWgtOWwwLDIxLjFMMzcuMiw5aC03LjhsLTYuNywxNy43Yy0wLjctNC41LTUuNC02LTktNy4yYy0yLjQtMC44LTUtMS45LTQuOS0zLjJjMC0xLDEuNC0yLDQuMS0xLjkKCQljMS44LDAuMSwzLjQsMC4yLDYuNiwxLjhsMy4xLTUuNGMtMi45LTEuNS02LjktMi40LTEwLjEtMi40aDBjLTMuOCwwLTcsMS4yLTksMy4zYy0xLjQsMS40LTIuMSwzLjItMi4xLDUuMmMwLDIuNywxLDQuNywzLjEsNi4zCgkJYzEuOCwxLjMsNC4xLDIuMiw2LjEsMi44YzIuNSwwLjgsNC41LDEuNCw0LjUsMi45YzAsMC41LTAuMiwxLTAuNiwxLjRjLTAuNiwwLjYtMS42LDAuOS0yLjksMC45QzguOSwzMS4xLDcsMzAuNyw0LDI5bC0yLjgsNS41CgkJYzMsMS43LDYuMiwyLjYsOS44LDIuNmwwLjgsMGMzLjEtMC4xLDUuNy0wLjgsNy43LTIuNGMwLjEtMC4xLDAuMi0wLjIsMC4zLTAuM0wxOS42LDM2bDcuNiwwbDEuNC0zLjVjMS40LDAuNSwzLjEsMC44LDQuOCwwLjgKCQljMS43LDAsMy4zLTAuMyw0LjctMC43bDAuOSwzLjRsMTMuNiwwbDAtNy45aDIuOWM3LDAsMTEuMS0zLjYsMTEuMS05LjVDNjYuNiwxMS45LDYyLjUsOSw1NCw5eiBNMzMuMywyNy4xYy0xLDAtMi0wLjItMi45LTAuNQoJCWwyLjgtOWgwLjFsMi44LDlDMzUuMywyNi45LDM0LjMsMjcuMSwzMy4zLDI3LjFMMzMuMywyNy4xeiBNNTQuNSwyMS45aC0ydi03LjJoMmMyLjYsMCw0LjcsMC45LDQuNywzLjYKCQlDNTkuMiwyMSw1Ny4xLDIxLjksNTQuNSwyMS45Ij4KICA8L3BhdGg+CiA8L2c+Cjwvc3ZnPg==" alt="SAP" style="max-height:30px;max-width:62px"/></span><span class="hs-tile-oracle absolute flex items-center justify-center rounded-xl border border-gray-200 bg-white" style="left:202px;top:0;width:188px;height:64px"><img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxuczp4PSJuc19leHRlbmQ7IiB4bWxuczppPSJuc19haTsiIHhtbG5zOmdyYXBoPSJuc19ncmFwaHM7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ2MS42IDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NjEuNiA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KICAuc3Qwe2ZpbGw6I0M3NDYzNDt9CiA8L3N0eWxlPgogPG1ldGFkYXRhPgogIDxzZncgeG1sbnM9Im5zX3NmdzsiPgogICA8c2xpY2VzPgogICA8L3NsaWNlcz4KICAgPHNsaWNlU291cmNlQm91bmRzIGJvdHRvbUxlZnRPcmlnaW49InRydWUiIGhlaWdodD0iNjAiIHdpZHRoPSI0NjEuNiIgeD0iLTMwLjQiIHk9Ii0yMzAuNSI+CiAgIDwvc2xpY2VTb3VyY2VCb3VuZHM+CiAgPC9zZnc+CiA8L21ldGFkYXRhPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5OS43LDM5aDMwLjRsLTE2LjEtMjZsLTI5LjYsNDYuOWgtMTMuNGwzNi01Ni4zYzIuNy0zLjksOC4xLTQuOCwxMS45LTIuMWMwLjgsMC42LDEuNSwxLjIsMi4xLDJsMzYuMSw1Ni40CgloLTEzLjRsLTYuMy0xMC41aC0zMC44TDE5OS43LDM5IE0zMzkuNSw0OS41VjAuNmgtMTEuNHY1My43YzAsMS41LDAuNiwzLDEuNyw0YzEuMSwxLjEsMi42LDEuNyw0LjIsMS43aDUxLjlsNi44LTEwLjVMMzM5LjUsNDkuNQoJIE0xNTAuNiw0MC43YzExLjEsMCwyMC4xLTksMjAuMS0yMC4xcy05LTIwLjEtMjAuMS0yMC4xaC00OS45djU5LjRIMTEyVjExLjFoMzcuOGM1LjMsMCw5LjYsNC4zLDkuNiw5LjZzLTQuMyw5LjYtOS42LDkuNmgtMzIuMgoJbDM0LjEsMjkuNmgxNi42bC0yMi45LTE5LjJIMTUwLjYgTTMwLjUsNTkuOUg2NWMxNi40LTAuNCwyOS4zLTE0LjEsMjguOS0zMC40QzkzLjUsMTMuNyw4MC43LDEsNjUsMC42SDMwLjUKCUMxNC4xLDAuMiwwLjQsMTMuMSwwLDI5LjVzMTIuNSwzMCwyOC45LDMwLjRDMjkuNCw2MCwyOS45LDYwLDMwLjUsNTkuOSBNNjQuMiw0OS41aC0zM2MtMTAuNi0wLjMtMTguOS05LjItMTguNi0xOS44CgljMC4zLTEwLjEsOC41LTE4LjMsMTguNi0xOC42aDMzYzEwLjYtMC4zLDE5LjUsOCwxOS44LDE4LjZjMC4zLDEwLjYtOCwxOS41LTE4LjYsMTkuOEM2NSw0OS41LDY0LjYsNDkuNSw2NC4yLDQ5LjUgTTI4MC45LDU5LjkKCWgzNS4ybDYuNy0xMC40aC00MS4xYy0xMC42LDAuMy0xOS41LTgtMTkuOC0xOC42Yy0wLjMtMTAuNiw4LTE5LjUsMTguNi0xOS44YzAuNCwwLDAuOCwwLDEuMiwwaDMzLjVsNi44LTEwLjVoLTQxCgljLTE2LjQtMC40LTMwLDEyLjUtMzAuNCwyOC45Yy0wLjQsMTYuNCwxMi41LDMwLDI4LjksMzAuNEMyNzkuOSw2MCwyODAuNCw2MCwyODAuOSw1OS45IE00MjAuNSw0OS41Yy04LjYsMC0xNi4yLTUuNy0xOC41LTE0aDQ4LjgKCWw2LjctMTAuNUg0MDJjMi4zLTguMyw5LjktMTQsMTguNS0xNEg0NTRsNi43LTEwLjVoLTQxQzQwMy4zLDEsMzkwLjQsMTQuNiwzOTAuOCwzMWMwLjQsMTUuOCwxMy4xLDI4LjUsMjguOSwyOC45aDM1LjJsNi43LTEwLjQKCUw0MjAuNSw0OS41Ij4KIDwvcGF0aD4KPC9zdmc+" alt="Oracle" style="max-height:20px;max-width:140px"/></span><span class="hs-tile-dyn absolute flex items-center justify-center rounded-xl border border-gray-200 bg-white" style="left:404px;top:0;width:188px;height:64px"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAACYVBMVEVMaXFvbcUAUtOMmfNbVbkAaedjdNAbWdCCiepvf/EHaucAUssDUckBU9J3e9szb9pxlfR4jPE3W8efk/IAZucAUtBBdNlxW7iknPZwUK9Dc+hAVb9pjPBjdOYlatmWke8KVc+ml/dXVr0ibugeU8VTVr1jUbYWYNQJa+cZUsQtUsFUUbhNUrs4U8EdceURb+hNhvNgU7gEVMwHVs5GUr4idOp2deYRWcyUd9hnUraAd+cFbe2QgOmglPBxVLExU8EGauZfUrhZkfhAge9oc+YFaud5ivCjlPOCeemfkfKFeOY+buZbkvemlPNTYtJXfO0AUssAUskAUs1KUrtPUbpFUrw4Ur8zUsBAUr5VUrkAaOdaUrgBUsdfUbYAUtAobecQa+cebOcAaugAU9MnUsI8Ur+OkfWTkvSEkPUrUsIXUsQdUsOYkvSJkPUvUsEwbeciUsNoUbQAa+d/j/VkUbU4buiMfemDfOmfk/RtUbNFcOcPUsYHUsZ9d+c/b+hLcedRcudXc+hcc+eHiO5vge91d+iYfudceutQe+xxUbAAbvZldOdbgu6ck/SPjvBhc+drdeeBjPBwdecAVtlDfe96fesAV92WhuxxifF0UK2snv9oeupweupFdutfVcA4d+uehO2Phex5hu1ih/AAbPBwSqJyTKcAV+BVVsRlf/BIVscwV8wudOs8VslYjfWdje6jkPFxU7aJfvV6nP9+gfEyefgAcvidoP8zbOZTefdIU8AZdvcfVs6Qnv9PU75rmf+IZsUPV9CGnf9pVb5xVr11V7s7beZ/W7V5WMAnZuFnZdQlWvMRAAAAuXRSTlMADPtfMfwTAgEEh/yhpCIyYv5b+/z8HV9e4YO1/XtD/tX+f32cmP5tyvz7/N71W6/+zu648/r8hf7z6fmONLXZ4OPt5vvvVaRu3rv7p8L89f///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////pTFajYAAAAJcEhZcwAACxMAAAsTAQCanBgAAAWtSURBVHiclZfpVxNXGIffpElmhiU0LCJi2RQBAQUX3LXWurY9h2AkBAhtDSAuUakRUUgrZIMQozEJBEgwLLJjgIJFsYob9s/quXNnAiQxy+8Dh+HwPPe9772Z3AuAQ0JORsaBOBKAoAiIPBTEj1mtY9yMnE0AQBBkpAICYse4XK6ie4y7d5cAGSN0EEigUCiQo3tPbBoHgIxoKgQjUChqkpIU3daM7WlURO0gGEENnaQyRTeXbWl4UyEgtpuL6ZqasrKy0ugyhTV6L25pOA4CYruTWBoJSkujo0sV1j174wVAhtFSAgvKaL4URSwWi6OrxQrFnphwWkoggXdwjKNUt7aK37/POBBHIUeQMgiItSb50dXVra0t1/Ly3ry5fSKHF7QdBMRYozfQNN7Scu3a9eu3a2uvTk3tTI0P0lKCFWwcHNEIv3lTKpXOzBSmxuNd+jWB2EtXr9EYLy8vr6uomJwsyE6jgCACC8Qsz5aOBt+JBsd4xaVLl15Pvi3IEoCfgYAYBS3wLf3mlLS8vI6hL168KJFI3o4X8PwMBC3w9u22d+aFqSdmZlhcIpFIZLL8/IGTm4D0F7T6Di6Vls/EgyA+dd/kazy4TCaTVVVVyQeyfUsgIEbRwgxeW3vV27c6ulhhVsE4xqsQLpfvOCT0KYGAmPd56xeNpisqKnhAoQ8CJ3s8Hw8ul8tVKtWnZKB8BNvf5DGDM12vQxN/TVdAEgRkDWB6h0rV2NgYUFC7vnSmbW+ZfhMkVTzA0vfv3/8cQDC1k95vGxeNFQAFyR+9eGdnYIF03YZhF40VkCA81MjinaMrm/0E2VOFvjsGdX1NIEiZw3Rv7+jzWX9BXOHMBppZtDUBJ2WOxZ8f7PMVAAlxqfsm2Q3j3THyDYLOXoSPftFn+guAJOk9Nz4uyWcGR2u2Y4MADf5lRT87mxBAAPRnVJhVLBsfyMe4SqVqXN+D0ee9Kwfdsx6PJ+Gfb/wFACR695K8rOKqtSXHAvQNw0lZOah3u91uj8eTHlgAzIuT4mWf/PiRXrI5HpD0C5k4dlTvduv1PT09PZ70rwsAbVsSgJN8/NCnz3P/FVMk+kfh5l8y+/QoSNATVAB46wMIko+nHOehyW8+m9DXlzmr1zc1NQ0ODg6azebgAmC+R0gOCdSxs+f7+jITEppnEU8bzGbzv6EEQFLoq+TY0fOZNI1C85omjUYTWkDQEz93oWm+uZnBmx813aOj0Wg0yhACkgTOmQuH5+fvqdMfsbmB+YUFjcZiCS4gQXiUptVqtfnRDTb31Gq73W5fGLJYLB+CCUgQHp63l5QgXm328lfUOp3dbh8aGhoKIaDg3EJJiQ7HfMUbnU7ndDqRQST68G1QwXcLT9lovHy97qnT6XRqtdohkejvEALtj0+YaK7Us3E+6e/v79dqtQ5HGIIuJhovr3zS1YUNDocjlGDiMRtLvRKnXtn1+LHBYJiYmNBu3RpS0M7GwvBKpaW9vd1gMBhME8OhBa/a2IiUDThK7cO2tjYkMA0Pb30XXLDl1UM2IoZvaGhDjx0dHSaTKQzBX2wcDXfoNBgeoMcO2jA8HFLwgI0D43cM9JPL5cKGd2eCC2w//YmzSgscpger9KPL5bLZOopML34Q+p9yvKFgy+LqXZwl0x3RsGt1aQk/Pnv2zGazFRW9+Nn3hLI+FGxbXLrFZMl1l/311q3paWxABYQQ/Bo400hhKzoVF2QCgATLvwfO/v3Ti4untmwKygMFUcu/Bc7y8v7duwSBDprrQ0HUS/4fPuHz+SMvj+RuQ8flUBchyl/A5182jnwfFeYdiGIElZWV9A9EG0/vZq4dYVx/KCSoZIJKNx5BEw9dOhsKooyJDJ44Yrycuy0O/TXM6xusCRIT6YlHeIFkBYmJlSPG07t3RXyFxQeuI8YRIz83B53JIyjdGxLScnPDXbP/AXB/CjMRj4zmAAAAAElFTkSuQmCC" alt="Microsoft Dynamics" style="max-height:34px;max-width:34px"/></span><div class="hs-bus absolute left-0 right-0 flex items-center gap-3 rounded-xl bg-violet-700 px-4" style="top:96px;height:56px"><span class="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:26px;height:26px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:10.92px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">0</span><span style="width:1ch;text-align:center;display:inline-block">0</span></div></div></span><span class="min-w-0 leading-tight"><span class="block text-base font-bold text-white">Vero, on your data</span><span class="block text-sm text-violet-100">Reads the open items, writes the entries back</span></span><span class="ml-auto shrink-0 rounded-full bg-white/15 px-2.5 py-1 text-xs font-bold text-white">In place</span></div><span class="hs-chip-mig absolute inline-flex items-center justify-center gap-1.5 rounded-full bg-white px-2.5 text-sm font-bold text-gray-700 ring-1 ring-gray-200" style="left:0;top:168px;width:188px;height:36px"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ban h-4 w-4 text-violet-700"><circle cx="12" cy="12" r="10"></circle><path d="m4.9 4.9 14.2 14.2"></path></svg> No migration</span><span class="hs-chip-proc absolute inline-flex items-center justify-center gap-1.5 rounded-full bg-white px-2.5 text-sm font-bold text-gray-700 ring-1 ring-gray-200" style="left:202px;top:168px;width:188px;height:36px"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-ccw h-4 w-4 text-violet-700"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg> No new process</span><span class="hs-chip-ro absolute inline-flex items-center justify-center gap-1.5 rounded-full bg-white px-2.5 text-sm font-bold text-gray-700 ring-1 ring-gray-200" style="left:404px;top:168px;width:188px;height:36px"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye h-4 w-4 text-violet-700"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg> Read-only to start</span></div><div class="hs-foot mt-3 flex items-center gap-3 rounded-xl border border-violet-200 bg-violet-50/70 px-4" style="height:66px"><span class="w-10 h-10 rounded-xl bg-violet-700 text-white flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plug h-5 w-5"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm font-semibold text-violet-800/80">Time to first connection</span><span class="block text-2xl font-bold text-violet-900 tabular-nums">3 days</span></span><span class="ml-auto shrink-0 rounded-full bg-white px-3 py-1.5 text-sm font-bold text-violet-800 ring-1 ring-violet-200">and 20 more, NetSuite and Sage included</span></div></div></div></div>`},w={"homev2-vero-loop":`/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --color-amber-50: oklch(98.7% 0.022 95.277);
    --color-amber-100: oklch(96.2% 0.059 95.617);
    --color-amber-300: oklch(87.9% 0.169 91.605);
    --color-amber-500: oklch(76.9% 0.188 70.08);
    --color-amber-600: oklch(66.6% 0.179 58.318);
    --color-amber-700: oklch(55.5% 0.163 48.998);
    --color-amber-800: oklch(47.3% 0.137 46.201);
    --color-emerald-50: oklch(97.9% 0.021 166.113);
    --color-emerald-100: oklch(95% 0.052 163.051);
    --color-emerald-200: oklch(90.5% 0.093 164.15);
    --color-emerald-600: oklch(59.6% 0.145 163.225);
    --color-emerald-700: oklch(50.8% 0.118 165.612);
    --color-emerald-800: oklch(43.2% 0.095 166.913);
    --color-emerald-900: oklch(37.8% 0.077 168.94);
    --color-indigo-100: oklch(93% 0.034 272.788);
    --color-indigo-700: oklch(45.7% 0.24 277.023);
    --color-violet-100: oklch(94.3% 0.029 294.588);
    --color-violet-700: oklch(49.1% 0.27 292.581);
    --color-rose-50: oklch(96.9% 0.015 12.422);
    --color-rose-100: oklch(94.1% 0.03 12.58);
    --color-rose-200: oklch(89.2% 0.058 10.001);
    --color-rose-600: oklch(58.6% 0.253 17.585);
    --color-rose-700: oklch(51.4% 0.222 16.935);
    --color-slate-50: oklch(98.4% 0.003 247.858);
    --color-slate-100: oklch(96.8% 0.007 247.896);
    --color-slate-200: oklch(92.9% 0.013 255.508);
    --color-slate-300: oklch(86.9% 0.022 252.894);
    --color-slate-500: oklch(55.4% 0.046 257.417);
    --color-slate-700: oklch(37.2% 0.044 257.287);
    --color-slate-800: oklch(27.9% 0.041 260.031);
    --color-slate-900: oklch(20.8% 0.042 265.755);
    --color-gray-50: oklch(98.5% 0.002 247.839);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-200: oklch(92.8% 0.006 264.531);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-gray-600: oklch(44.6% 0.03 256.802);
    --color-gray-700: oklch(37.3% 0.034 259.733);
    --color-gray-900: oklch(21% 0.034 264.665);
    --color-white: #fff;
    --spacing: 0.25rem;
    --container-md: 28rem;
    --text-xs: 0.75rem;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-base: 1rem;
    --text-base--line-height: calc(1.5 / 1);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --text-5xl: 3rem;
    --text-5xl--line-height: 1;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --tracking-wider: 0.05em;
    --leading-tight: 1.25;
    --leading-relaxed: 1.625;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
}
@layer utilities {
  .pointer-events-none {
    pointer-events: none;
  }
  .visible {
    visibility: visible;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .inset-0 {
    inset: calc(var(--spacing) * 0);
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .top-\\[10px\\] {
    top: 10px;
  }
  .top-\\[76px\\] {
    top: 76px;
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .left-1\\/2 {
    left: calc(1/2 * 100%);
  }
  .z-10 {
    z-index: 10;
  }
  .mx-auto {
    margin-inline: auto;
  }
  .mt-2 {
    margin-top: calc(var(--spacing) * 2);
  }
  .mt-3 {
    margin-top: calc(var(--spacing) * 3);
  }
  .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .mb-1 {
    margin-bottom: calc(var(--spacing) * 1);
  }
  .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .mb-6 {
    margin-bottom: calc(var(--spacing) * 6);
  }
  .ml-auto {
    margin-left: auto;
  }
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .h-1\\.5 {
    height: calc(var(--spacing) * 1.5);
  }
  .h-2 {
    height: calc(var(--spacing) * 2);
  }
  .h-3 {
    height: calc(var(--spacing) * 3);
  }
  .h-4 {
    height: calc(var(--spacing) * 4);
  }
  .h-5 {
    height: calc(var(--spacing) * 5);
  }
  .h-6 {
    height: calc(var(--spacing) * 6);
  }
  .h-7 {
    height: calc(var(--spacing) * 7);
  }
  .h-8 {
    height: calc(var(--spacing) * 8);
  }
  .h-9 {
    height: calc(var(--spacing) * 9);
  }
  .h-10 {
    height: calc(var(--spacing) * 10);
  }
  .h-\\[20px\\] {
    height: 20px;
  }
  .h-\\[22px\\] {
    height: 22px;
  }
  .h-\\[24px\\] {
    height: 24px;
  }
  .h-\\[26px\\] {
    height: 26px;
  }
  .h-\\[32px\\] {
    height: 32px;
  }
  .h-\\[40px\\] {
    height: 40px;
  }
  .h-\\[64px\\] {
    height: 64px;
  }
  .h-\\[72px\\] {
    height: 72px;
  }
  .h-\\[76px\\] {
    height: 76px;
  }
  .min-h-screen {
    min-height: 100vh;
  }
  .w-2 {
    width: calc(var(--spacing) * 2);
  }
  .w-3 {
    width: calc(var(--spacing) * 3);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-5 {
    width: calc(var(--spacing) * 5);
  }
  .w-6 {
    width: calc(var(--spacing) * 6);
  }
  .w-7 {
    width: calc(var(--spacing) * 7);
  }
  .w-8 {
    width: calc(var(--spacing) * 8);
  }
  .w-9 {
    width: calc(var(--spacing) * 9);
  }
  .w-10 {
    width: calc(var(--spacing) * 10);
  }
  .w-14 {
    width: calc(var(--spacing) * 14);
  }
  .w-\\[2px\\] {
    width: 2px;
  }
  .w-\\[22px\\] {
    width: 22px;
  }
  .w-\\[64px\\] {
    width: 64px;
  }
  .w-\\[72px\\] {
    width: 72px;
  }
  .w-\\[76px\\] {
    width: 76px;
  }
  .w-\\[92px\\] {
    width: 92px;
  }
  .w-\\[104px\\] {
    width: 104px;
  }
  .w-\\[110px\\] {
    width: 110px;
  }
  .w-\\[150px\\] {
    width: 150px;
  }
  .w-\\[280px\\] {
    width: 280px;
  }
  .w-\\[300px\\] {
    width: 300px;
  }
  .w-\\[330px\\] {
    width: 330px;
  }
  .w-\\[640px\\] {
    width: 640px;
  }
  .max-w-\\[1300px\\] {
    max-width: 1300px;
  }
  .max-w-md {
    max-width: var(--container-md);
  }
  .min-w-0 {
    min-width: calc(var(--spacing) * 0);
  }
  .flex-1 {
    flex: 1;
  }
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .-translate-x-1\\/2 {
    --tw-translate-x: calc(calc(1/2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .items-baseline {
    align-items: baseline;
  }
  .items-center {
    align-items: center;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .gap-1 {
    gap: calc(var(--spacing) * 1);
  }
  .gap-1\\.5 {
    gap: calc(var(--spacing) * 1.5);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-2\\.5 {
    gap: calc(var(--spacing) * 2.5);
  }
  .gap-3 {
    gap: calc(var(--spacing) * 3);
  }
  .gap-12 {
    gap: calc(var(--spacing) * 12);
  }
  .gap-16 {
    gap: calc(var(--spacing) * 16);
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .rounded-2xl {
    border-radius: var(--radius-2xl);
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-xl {
    border-radius: var(--radius-xl);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-2 {
    border-style: var(--tw-border-style);
    border-width: 2px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-dashed {
    --tw-border-style: dashed;
    border-style: dashed;
  }
  .border-amber-300 {
    border-color: var(--color-amber-300);
  }
  .border-emerald-200 {
    border-color: var(--color-emerald-200);
  }
  .border-gray-100 {
    border-color: var(--color-gray-100);
  }
  .border-gray-100\\/80 {
    border-color: color-mix(in srgb, oklch(96.7% 0.003 264.542) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-gray-100) 80%, transparent);
    }
  }
  .border-gray-200 {
    border-color: var(--color-gray-200);
  }
  .border-gray-300 {
    border-color: var(--color-gray-300);
  }
  .border-rose-200 {
    border-color: var(--color-rose-200);
  }
  .border-slate-200 {
    border-color: var(--color-slate-200);
  }
  .border-slate-300 {
    border-color: var(--color-slate-300);
  }
  .border-slate-900 {
    border-color: var(--color-slate-900);
  }
  .border-white {
    border-color: var(--color-white);
  }
  .bg-amber-50\\/70 {
    background-color: color-mix(in srgb, oklch(98.7% 0.022 95.277) 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-amber-50) 70%, transparent);
    }
  }
  .bg-amber-100 {
    background-color: var(--color-amber-100);
  }
  .bg-amber-500 {
    background-color: var(--color-amber-500);
  }
  .bg-amber-600 {
    background-color: var(--color-amber-600);
  }
  .bg-emerald-50 {
    background-color: var(--color-emerald-50);
  }
  .bg-emerald-50\\/60 {
    background-color: color-mix(in srgb, oklch(97.9% 0.021 166.113) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-emerald-50) 60%, transparent);
    }
  }
  .bg-emerald-100 {
    background-color: var(--color-emerald-100);
  }
  .bg-emerald-600 {
    background-color: var(--color-emerald-600);
  }
  .bg-gray-50\\/70 {
    background-color: color-mix(in srgb, oklch(98.5% 0.002 247.839) 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-50) 70%, transparent);
    }
  }
  .bg-gray-100 {
    background-color: var(--color-gray-100);
  }
  .bg-gray-200 {
    background-color: var(--color-gray-200);
  }
  .bg-indigo-100 {
    background-color: var(--color-indigo-100);
  }
  .bg-rose-50 {
    background-color: var(--color-rose-50);
  }
  .bg-rose-100 {
    background-color: var(--color-rose-100);
  }
  .bg-slate-50 {
    background-color: var(--color-slate-50);
  }
  .bg-slate-100 {
    background-color: var(--color-slate-100);
  }
  .bg-slate-300 {
    background-color: var(--color-slate-300);
  }
  .bg-slate-800 {
    background-color: var(--color-slate-800);
  }
  .bg-slate-900 {
    background-color: var(--color-slate-900);
  }
  .bg-violet-100 {
    background-color: var(--color-violet-100);
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .bg-white\\/10 {
    background-color: color-mix(in srgb, #fff 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 10%, transparent);
    }
  }
  .p-3\\.5 {
    padding: calc(var(--spacing) * 3.5);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .px-1 {
    padding-inline: calc(var(--spacing) * 1);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-2\\.5 {
    padding-inline: calc(var(--spacing) * 2.5);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-3\\.5 {
    padding-inline: calc(var(--spacing) * 3.5);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .px-16 {
    padding-inline: calc(var(--spacing) * 16);
  }
  .py-1 {
    padding-block: calc(var(--spacing) * 1);
  }
  .py-1\\.5 {
    padding-block: calc(var(--spacing) * 1.5);
  }
  .py-20 {
    padding-block: calc(var(--spacing) * 20);
  }
  .pb-3\\.5 {
    padding-bottom: calc(var(--spacing) * 3.5);
  }
  .text-right {
    text-align: right;
  }
  .text-2xl {
    font-size: var(--text-2xl);
    line-height: var(--tw-leading, var(--text-2xl--line-height));
  }
  .text-5xl {
    font-size: var(--text-5xl);
    line-height: var(--tw-leading, var(--text-5xl--line-height));
  }
  .text-base {
    font-size: var(--text-base);
    line-height: var(--tw-leading, var(--text-base--line-height));
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xl {
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .text-\\[10px\\] {
    font-size: 10px;
  }
  .leading-\\[20px\\] {
    --tw-leading: 20px;
    line-height: 20px;
  }
  .leading-\\[24px\\] {
    --tw-leading: 24px;
    line-height: 24px;
  }
  .leading-\\[32px\\] {
    --tw-leading: 32px;
    line-height: 32px;
  }
  .leading-relaxed {
    --tw-leading: var(--leading-relaxed);
    line-height: var(--leading-relaxed);
  }
  .leading-tight {
    --tw-leading: var(--leading-tight);
    line-height: var(--leading-tight);
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .tracking-wider {
    --tw-tracking: var(--tracking-wider);
    letter-spacing: var(--tracking-wider);
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .text-amber-700 {
    color: var(--color-amber-700);
  }
  .text-amber-800 {
    color: var(--color-amber-800);
  }
  .text-emerald-600 {
    color: var(--color-emerald-600);
  }
  .text-emerald-700 {
    color: var(--color-emerald-700);
  }
  .text-emerald-700\\/80 {
    color: color-mix(in srgb, oklch(50.8% 0.118 165.612) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-emerald-700) 80%, transparent);
    }
  }
  .text-emerald-800 {
    color: var(--color-emerald-800);
  }
  .text-emerald-900 {
    color: var(--color-emerald-900);
  }
  .text-gray-300 {
    color: var(--color-gray-300);
  }
  .text-gray-400 {
    color: var(--color-gray-400);
  }
  .text-gray-500 {
    color: var(--color-gray-500);
  }
  .text-gray-600 {
    color: var(--color-gray-600);
  }
  .text-gray-700 {
    color: var(--color-gray-700);
  }
  .text-gray-900 {
    color: var(--color-gray-900);
  }
  .text-indigo-700 {
    color: var(--color-indigo-700);
  }
  .text-rose-600 {
    color: var(--color-rose-600);
  }
  .text-rose-700 {
    color: var(--color-rose-700);
  }
  .text-rose-700\\/80 {
    color: color-mix(in srgb, oklch(51.4% 0.222 16.935) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-rose-700) 80%, transparent);
    }
  }
  .text-slate-300 {
    color: var(--color-slate-300);
  }
  .text-slate-500 {
    color: var(--color-slate-500);
  }
  .text-slate-700 {
    color: var(--color-slate-700);
  }
  .text-slate-800 {
    color: var(--color-slate-800);
  }
  .text-slate-900 {
    color: var(--color-slate-900);
  }
  .text-violet-700 {
    color: var(--color-violet-700);
  }
  .text-white {
    color: var(--color-white);
  }
  .uppercase {
    text-transform: uppercase;
  }
  .tabular-nums {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .shadow {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-lg {
    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-sm {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-xl {
    --tw-shadow: 0 20px 25px -5px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 8px 10px -6px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-1 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-emerald-200 {
    --tw-ring-color: var(--color-emerald-200);
  }
  .ring-gray-200 {
    --tw-ring-color: var(--color-gray-200);
  }
  .ring-slate-200 {
    --tw-ring-color: var(--color-slate-200);
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, visibility, content-visibility, overlay, pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .ease-in-out {
    --tw-ease: var(--ease-in-out);
    transition-timing-function: var(--ease-in-out);
  }
  .ease-out {
    --tw-ease: var(--ease-out);
    transition-timing-function: var(--ease-out);
  }
}
@property --tw-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-z {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-tracking {
  syntax: "*";
  inherits: false;
}
@property --tw-ordinal {
  syntax: "*";
  inherits: false;
}
@property --tw-slashed-zero {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-figure {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-spacing {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-fraction {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-border-style: solid;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-tracking: initial;
      --tw-ordinal: initial;
      --tw-slashed-zero: initial;
      --tw-numeric-figure: initial;
      --tw-numeric-spacing: initial;
      --tw-numeric-fraction: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ease: initial;
    }
  }
}
@layer base {
  *,*::before,*::after{box-sizing:border-box;border:0 solid;margin:0;padding:0}
  svg{display:block}
  img{max-width:100%;height:auto}
}
:host{all:initial;display:block;contain:layout style;
  font-family:var(--font-sans);font-size:16px;line-height:1.5;
  -webkit-font-smoothing:antialiased;color:var(--color-gray-900);text-align:left}

/* Below the two-column breakpoint the copy stacks above the card, and the card
   keeps its intrinsic width inside a swipeable rail. It is drawn at fixed pixel
   geometry, so scaling it to a phone would put 14px body text at 8px. A rail
   keeps it legible and is the same pattern any wide table uses. */
@media (max-width: 1023px) {
  .tf-wrap{padding-left:1.25rem;padding-right:1.25rem;padding-top:3rem;padding-bottom:3rem}
  .tf-row{flex-direction:column;align-items:stretch;gap:2rem}
  .tf-row > div:first-child{max-width:none}
  .tf-row > div:first-child h2{font-size:2rem;line-height:1.15}
  .tf-row > div:first-child p{font-size:1.0625rem}
  .tf-card{overflow-x:auto;overflow-y:hidden;max-width:100%;width:auto;
    -webkit-overflow-scrolling:touch;scrollbar-width:none;
    padding-bottom:1.25rem}
  .tf-card::-webkit-scrollbar{display:none}
  .tf-card > *{width:var(--card-w,640px);flex:none}
  /* Do NOT re-width the card here. Its internals are absolutely positioned
     against a fixed inner width, so squeezing it to a round number silently
     truncates every lane inside. The rail scrolls; the card keeps its size. */
}
`,"homev2-clearmatch-loop":`/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --color-amber-100: oklch(96.2% 0.059 95.617);
    --color-amber-200: oklch(92.4% 0.12 95.746);
    --color-amber-700: oklch(55.5% 0.163 48.998);
    --color-emerald-50: oklch(97.9% 0.021 166.113);
    --color-emerald-100: oklch(95% 0.052 163.051);
    --color-emerald-200: oklch(90.5% 0.093 164.15);
    --color-emerald-300: oklch(84.5% 0.143 164.978);
    --color-emerald-500: oklch(69.6% 0.17 162.48);
    --color-emerald-600: oklch(59.6% 0.145 163.225);
    --color-emerald-700: oklch(50.8% 0.118 165.612);
    --color-emerald-800: oklch(43.2% 0.095 166.913);
    --color-gray-50: oklch(98.5% 0.002 247.839);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-200: oklch(92.8% 0.006 264.531);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-gray-600: oklch(44.6% 0.03 256.802);
    --color-gray-700: oklch(37.3% 0.034 259.733);
    --color-gray-900: oklch(21% 0.034 264.665);
    --color-white: #fff;
    --spacing: 0.25rem;
    --container-md: 28rem;
    --text-xs: 0.75rem;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-base: 1rem;
    --text-base--line-height: calc(1.5 / 1);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --text-3xl: 1.875rem;
    --text-3xl--line-height: calc(2.25 / 1.875);
    --text-5xl: 3rem;
    --text-5xl--line-height: 1;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --tracking-wider: 0.05em;
    --leading-tight: 1.25;
    --leading-relaxed: 1.625;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
}
@layer utilities {
  .pointer-events-none {
    pointer-events: none;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .inset-0 {
    inset: calc(var(--spacing) * 0);
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .left-3 {
    left: calc(var(--spacing) * 3);
  }
  .z-10 {
    z-index: 10;
  }
  .mx-auto {
    margin-inline: auto;
  }
  .mt-1\\.5 {
    margin-top: calc(var(--spacing) * 1.5);
  }
  .mt-2 {
    margin-top: calc(var(--spacing) * 2);
  }
  .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .mt-5 {
    margin-top: calc(var(--spacing) * 5);
  }
  .mb-1 {
    margin-bottom: calc(var(--spacing) * 1);
  }
  .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .mb-6 {
    margin-bottom: calc(var(--spacing) * 6);
  }
  .ml-auto {
    margin-left: auto;
  }
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .table {
    display: table;
  }
  .h-1\\.5 {
    height: calc(var(--spacing) * 1.5);
  }
  .h-2 {
    height: calc(var(--spacing) * 2);
  }
  .h-3 {
    height: calc(var(--spacing) * 3);
  }
  .h-3\\.5 {
    height: calc(var(--spacing) * 3.5);
  }
  .h-4 {
    height: calc(var(--spacing) * 4);
  }
  .h-5 {
    height: calc(var(--spacing) * 5);
  }
  .h-6 {
    height: calc(var(--spacing) * 6);
  }
  .h-7 {
    height: calc(var(--spacing) * 7);
  }
  .h-8 {
    height: calc(var(--spacing) * 8);
  }
  .h-9 {
    height: calc(var(--spacing) * 9);
  }
  .h-10 {
    height: calc(var(--spacing) * 10);
  }
  .h-\\[3px\\] {
    height: 3px;
  }
  .h-\\[22px\\] {
    height: 22px;
  }
  .h-\\[24px\\] {
    height: 24px;
  }
  .h-\\[26px\\] {
    height: 26px;
  }
  .h-\\[30px\\] {
    height: 30px;
  }
  .h-\\[40px\\] {
    height: 40px;
  }
  .h-\\[60px\\] {
    height: 60px;
  }
  .h-\\[70px\\] {
    height: 70px;
  }
  .h-auto {
    height: auto;
  }
  .h-full {
    height: 100%;
  }
  .min-h-screen {
    min-height: 100vh;
  }
  .w-1\\.5 {
    width: calc(var(--spacing) * 1.5);
  }
  .w-2 {
    width: calc(var(--spacing) * 2);
  }
  .w-3 {
    width: calc(var(--spacing) * 3);
  }
  .w-3\\.5 {
    width: calc(var(--spacing) * 3.5);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-5 {
    width: calc(var(--spacing) * 5);
  }
  .w-6 {
    width: calc(var(--spacing) * 6);
  }
  .w-7 {
    width: calc(var(--spacing) * 7);
  }
  .w-8 {
    width: calc(var(--spacing) * 8);
  }
  .w-9 {
    width: calc(var(--spacing) * 9);
  }
  .w-10 {
    width: calc(var(--spacing) * 10);
  }
  .w-\\[60px\\] {
    width: 60px;
  }
  .w-\\[70px\\] {
    width: 70px;
  }
  .w-\\[76px\\] {
    width: 76px;
  }
  .w-\\[92px\\] {
    width: 92px;
  }
  .w-\\[130px\\] {
    width: 130px;
  }
  .w-\\[132px\\] {
    width: 132px;
  }
  .w-\\[158px\\] {
    width: 158px;
  }
  .w-\\[240px\\] {
    width: 240px;
  }
  .w-\\[280px\\] {
    width: 280px;
  }
  .w-\\[560px\\] {
    width: 560px;
  }
  .w-\\[600px\\] {
    width: 600px;
  }
  .w-\\[620px\\] {
    width: 620px;
  }
  .w-auto {
    width: auto;
  }
  .max-w-\\[1300px\\] {
    max-width: 1300px;
  }
  .max-w-md {
    max-width: var(--container-md);
  }
  .min-w-0 {
    min-width: calc(var(--spacing) * 0);
  }
  .flex-1 {
    flex: 1;
  }
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .gap-1 {
    gap: calc(var(--spacing) * 1);
  }
  .gap-1\\.5 {
    gap: calc(var(--spacing) * 1.5);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-2\\.5 {
    gap: calc(var(--spacing) * 2.5);
  }
  .gap-3 {
    gap: calc(var(--spacing) * 3);
  }
  .gap-16 {
    gap: calc(var(--spacing) * 16);
  }
  .gap-20 {
    gap: calc(var(--spacing) * 20);
  }
  .space-y-2\\.5 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .rounded-2xl {
    border-radius: var(--radius-2xl);
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-md {
    border-radius: var(--radius-md);
  }
  .rounded-xl {
    border-radius: var(--radius-xl);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-2 {
    border-style: var(--tw-border-style);
    border-width: 2px;
  }
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-emerald-200 {
    border-color: var(--color-emerald-200);
  }
  .border-emerald-300 {
    border-color: var(--color-emerald-300);
  }
  .border-gray-100 {
    border-color: var(--color-gray-100);
  }
  .border-gray-100\\/80 {
    border-color: color-mix(in srgb, oklch(96.7% 0.003 264.542) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-gray-100) 80%, transparent);
    }
  }
  .border-gray-200 {
    border-color: var(--color-gray-200);
  }
  .bg-amber-100 {
    background-color: var(--color-amber-100);
  }
  .bg-emerald-50 {
    background-color: var(--color-emerald-50);
  }
  .bg-emerald-100 {
    background-color: var(--color-emerald-100);
  }
  .bg-emerald-500 {
    background-color: var(--color-emerald-500);
  }
  .bg-emerald-600 {
    background-color: var(--color-emerald-600);
  }
  .bg-gray-50\\/70 {
    background-color: color-mix(in srgb, oklch(98.5% 0.002 247.839) 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-50) 70%, transparent);
    }
  }
  .bg-gray-50\\/80 {
    background-color: color-mix(in srgb, oklch(98.5% 0.002 247.839) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-50) 80%, transparent);
    }
  }
  .bg-gray-100 {
    background-color: var(--color-gray-100);
  }
  .bg-gray-200 {
    background-color: var(--color-gray-200);
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .object-contain {
    object-fit: contain;
  }
  .p-3 {
    padding: calc(var(--spacing) * 3);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .px-1 {
    padding-inline: calc(var(--spacing) * 1);
  }
  .px-1\\.5 {
    padding-inline: calc(var(--spacing) * 1.5);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-2\\.5 {
    padding-inline: calc(var(--spacing) * 2.5);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-3\\.5 {
    padding-inline: calc(var(--spacing) * 3.5);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .px-16 {
    padding-inline: calc(var(--spacing) * 16);
  }
  .py-0\\.5 {
    padding-block: calc(var(--spacing) * 0.5);
  }
  .py-1 {
    padding-block: calc(var(--spacing) * 1);
  }
  .py-2\\.5 {
    padding-block: calc(var(--spacing) * 2.5);
  }
  .py-3 {
    padding-block: calc(var(--spacing) * 3);
  }
  .py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
  .py-20 {
    padding-block: calc(var(--spacing) * 20);
  }
  .pt-5 {
    padding-top: calc(var(--spacing) * 5);
  }
  .pr-2\\.5 {
    padding-right: calc(var(--spacing) * 2.5);
  }
  .pb-2 {
    padding-bottom: calc(var(--spacing) * 2);
  }
  .pb-3\\.5 {
    padding-bottom: calc(var(--spacing) * 3.5);
  }
  .pl-1\\.5 {
    padding-left: calc(var(--spacing) * 1.5);
  }
  .text-right {
    text-align: right;
  }
  .font-mono {
    font-family: var(--font-mono);
  }
  .text-2xl {
    font-size: var(--text-2xl);
    line-height: var(--tw-leading, var(--text-2xl--line-height));
  }
  .text-3xl {
    font-size: var(--text-3xl);
    line-height: var(--tw-leading, var(--text-3xl--line-height));
  }
  .text-5xl {
    font-size: var(--text-5xl);
    line-height: var(--tw-leading, var(--text-5xl--line-height));
  }
  .text-base {
    font-size: var(--text-base);
    line-height: var(--tw-leading, var(--text-base--line-height));
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xl {
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .text-\\[10px\\] {
    font-size: 10px;
  }
  .leading-\\[22px\\] {
    --tw-leading: 22px;
    line-height: 22px;
  }
  .leading-\\[24px\\] {
    --tw-leading: 24px;
    line-height: 24px;
  }
  .leading-\\[30px\\] {
    --tw-leading: 30px;
    line-height: 30px;
  }
  .leading-none {
    --tw-leading: 1;
    line-height: 1;
  }
  .leading-relaxed {
    --tw-leading: var(--leading-relaxed);
    line-height: var(--leading-relaxed);
  }
  .leading-tight {
    --tw-leading: var(--leading-tight);
    line-height: var(--leading-tight);
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .tracking-wider {
    --tw-tracking: var(--tracking-wider);
    letter-spacing: var(--tracking-wider);
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .text-amber-700 {
    color: var(--color-amber-700);
  }
  .text-emerald-600 {
    color: var(--color-emerald-600);
  }
  .text-emerald-700 {
    color: var(--color-emerald-700);
  }
  .text-emerald-700\\/70 {
    color: color-mix(in srgb, oklch(50.8% 0.118 165.612) 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-emerald-700) 70%, transparent);
    }
  }
  .text-emerald-800 {
    color: var(--color-emerald-800);
  }
  .text-gray-300 {
    color: var(--color-gray-300);
  }
  .text-gray-400 {
    color: var(--color-gray-400);
  }
  .text-gray-500 {
    color: var(--color-gray-500);
  }
  .text-gray-600 {
    color: var(--color-gray-600);
  }
  .text-gray-700 {
    color: var(--color-gray-700);
  }
  .text-gray-900 {
    color: var(--color-gray-900);
  }
  .text-white {
    color: var(--color-white);
  }
  .uppercase {
    text-transform: uppercase;
  }
  .tabular-nums {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .shadow-lg {
    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-sm {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-xl {
    --tw-shadow: 0 20px 25px -5px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 8px 10px -6px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-1 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-amber-200 {
    --tw-ring-color: var(--color-amber-200);
  }
  .ring-emerald-200 {
    --tw-ring-color: var(--color-emerald-200);
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, visibility, content-visibility, overlay, pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .ease-in-out {
    --tw-ease: var(--ease-in-out);
    transition-timing-function: var(--ease-in-out);
  }
  .ease-out {
    --tw-ease: var(--ease-out);
    transition-timing-function: var(--ease-out);
  }
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-tracking {
  syntax: "*";
  inherits: false;
}
@property --tw-ordinal {
  syntax: "*";
  inherits: false;
}
@property --tw-slashed-zero {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-figure {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-spacing {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-fraction {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-space-y-reverse: 0;
      --tw-border-style: solid;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-tracking: initial;
      --tw-ordinal: initial;
      --tw-slashed-zero: initial;
      --tw-numeric-figure: initial;
      --tw-numeric-spacing: initial;
      --tw-numeric-fraction: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ease: initial;
    }
  }
}
@layer base {
  *,*::before,*::after{box-sizing:border-box;border:0 solid;margin:0;padding:0}
  svg{display:block}
  img{max-width:100%;height:auto}
}
:host{all:initial;display:block;contain:layout style;
  font-family:var(--font-sans);font-size:16px;line-height:1.5;
  -webkit-font-smoothing:antialiased;color:var(--color-gray-900);text-align:left}

/* Below the two-column breakpoint the copy stacks above the card, and the card
   keeps its intrinsic width inside a swipeable rail. It is drawn at fixed pixel
   geometry, so scaling it to a phone would put 14px body text at 8px. A rail
   keeps it legible and is the same pattern any wide table uses. */
@media (max-width: 1023px) {
  .tf-wrap{padding-left:1.25rem;padding-right:1.25rem;padding-top:3rem;padding-bottom:3rem}
  .tf-row{flex-direction:column;align-items:stretch;gap:2rem}
  .tf-row > div:first-child{max-width:none}
  .tf-row > div:first-child h2{font-size:2rem;line-height:1.15}
  .tf-row > div:first-child p{font-size:1.0625rem}
  .tf-card{overflow-x:auto;overflow-y:hidden;max-width:100%;width:auto;
    -webkit-overflow-scrolling:touch;scrollbar-width:none;
    padding-bottom:1.25rem}
  .tf-card::-webkit-scrollbar{display:none}
  .tf-card > *{width:var(--card-w,640px);flex:none}
  /* Do NOT re-width the card here. Its internals are absolutely positioned
     against a fixed inner width, so squeezing it to a round number silently
     truncates every lane inside. The rail scrolls; the card keeps its size. */
}
`,"homev2-collections-loop":`/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --color-amber-50: oklch(98.7% 0.022 95.277);
    --color-amber-100: oklch(96.2% 0.059 95.617);
    --color-amber-200: oklch(92.4% 0.12 95.746);
    --color-amber-500: oklch(76.9% 0.188 70.08);
    --color-amber-600: oklch(66.6% 0.179 58.318);
    --color-amber-700: oklch(55.5% 0.163 48.998);
    --color-emerald-50: oklch(97.9% 0.021 166.113);
    --color-emerald-100: oklch(95% 0.052 163.051);
    --color-emerald-200: oklch(90.5% 0.093 164.15);
    --color-emerald-500: oklch(69.6% 0.17 162.48);
    --color-emerald-600: oklch(59.6% 0.145 163.225);
    --color-emerald-700: oklch(50.8% 0.118 165.612);
    --color-emerald-800: oklch(43.2% 0.095 166.913);
    --color-violet-50: oklch(96.9% 0.016 293.756);
    --color-violet-100: oklch(94.3% 0.029 294.588);
    --color-violet-200: oklch(89.4% 0.057 293.283);
    --color-violet-300: oklch(81.1% 0.111 293.571);
    --color-violet-400: oklch(70.2% 0.183 293.541);
    --color-violet-500: oklch(60.6% 0.25 292.717);
    --color-violet-600: oklch(54.1% 0.281 293.009);
    --color-violet-700: oklch(49.1% 0.27 292.581);
    --color-rose-50: oklch(96.9% 0.015 12.422);
    --color-rose-100: oklch(94.1% 0.03 12.58);
    --color-rose-200: oklch(89.2% 0.058 10.001);
    --color-rose-600: oklch(58.6% 0.253 17.585);
    --color-rose-700: oklch(51.4% 0.222 16.935);
    --color-gray-50: oklch(98.5% 0.002 247.839);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-200: oklch(92.8% 0.006 264.531);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-gray-600: oklch(44.6% 0.03 256.802);
    --color-gray-700: oklch(37.3% 0.034 259.733);
    --color-gray-800: oklch(27.8% 0.033 256.848);
    --color-gray-900: oklch(21% 0.034 264.665);
    --color-black: #000;
    --color-white: #fff;
    --spacing: 0.25rem;
    --container-md: 28rem;
    --text-xs: 0.75rem;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-base: 1rem;
    --text-base--line-height: calc(1.5 / 1);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --text-5xl: 3rem;
    --text-5xl--line-height: 1;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --tracking-wider: 0.05em;
    --leading-tight: 1.25;
    --leading-relaxed: 1.625;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
}
@layer utilities {
  .pointer-events-none {
    pointer-events: none;
  }
  .visible {
    visibility: visible;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .inset-0 {
    inset: calc(var(--spacing) * 0);
  }
  .inset-x-0 {
    inset-inline: calc(var(--spacing) * 0);
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .top-\\[3px\\] {
    top: 3px;
  }
  .top-\\[86px\\] {
    top: 86px;
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .right-1\\.5 {
    right: calc(var(--spacing) * 1.5);
  }
  .right-2 {
    right: calc(var(--spacing) * 2);
  }
  .right-2\\.5 {
    right: calc(var(--spacing) * 2.5);
  }
  .right-\\[3px\\] {
    right: 3px;
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .left-2 {
    left: calc(var(--spacing) * 2);
  }
  .left-2\\.5 {
    left: calc(var(--spacing) * 2.5);
  }
  .z-10 {
    z-index: 10;
  }
  .mx-auto {
    margin-inline: auto;
  }
  .mt-1 {
    margin-top: calc(var(--spacing) * 1);
  }
  .mt-1\\.5 {
    margin-top: calc(var(--spacing) * 1.5);
  }
  .mt-3 {
    margin-top: calc(var(--spacing) * 3);
  }
  .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .mt-6 {
    margin-top: calc(var(--spacing) * 6);
  }
  .-mb-0\\.5 {
    margin-bottom: calc(var(--spacing) * -0.5);
  }
  .mb-1 {
    margin-bottom: calc(var(--spacing) * 1);
  }
  .mb-2 {
    margin-bottom: calc(var(--spacing) * 2);
  }
  .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
  .mb-3\\.5 {
    margin-bottom: calc(var(--spacing) * 3.5);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .mb-5 {
    margin-bottom: calc(var(--spacing) * 5);
  }
  .mb-6 {
    margin-bottom: calc(var(--spacing) * 6);
  }
  .ml-auto {
    margin-left: auto;
  }
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .h-1\\.5 {
    height: calc(var(--spacing) * 1.5);
  }
  .h-2 {
    height: calc(var(--spacing) * 2);
  }
  .h-2\\.5 {
    height: calc(var(--spacing) * 2.5);
  }
  .h-3 {
    height: calc(var(--spacing) * 3);
  }
  .h-3\\.5 {
    height: calc(var(--spacing) * 3.5);
  }
  .h-4 {
    height: calc(var(--spacing) * 4);
  }
  .h-5 {
    height: calc(var(--spacing) * 5);
  }
  .h-6 {
    height: calc(var(--spacing) * 6);
  }
  .h-7 {
    height: calc(var(--spacing) * 7);
  }
  .h-8 {
    height: calc(var(--spacing) * 8);
  }
  .h-9 {
    height: calc(var(--spacing) * 9);
  }
  .h-10 {
    height: calc(var(--spacing) * 10);
  }
  .h-\\[18px\\] {
    height: 18px;
  }
  .h-\\[20px\\] {
    height: 20px;
  }
  .h-\\[22px\\] {
    height: 22px;
  }
  .h-\\[24px\\] {
    height: 24px;
  }
  .h-\\[26px\\] {
    height: 26px;
  }
  .h-\\[30px\\] {
    height: 30px;
  }
  .h-\\[34px\\] {
    height: 34px;
  }
  .h-\\[38px\\] {
    height: 38px;
  }
  .h-\\[60px\\] {
    height: 60px;
  }
  .h-\\[70px\\] {
    height: 70px;
  }
  .h-\\[560px\\] {
    height: 560px;
  }
  .h-full {
    height: 100%;
  }
  .min-h-screen {
    min-height: 100vh;
  }
  .w-1\\.5 {
    width: calc(var(--spacing) * 1.5);
  }
  .w-2 {
    width: calc(var(--spacing) * 2);
  }
  .w-2\\.5 {
    width: calc(var(--spacing) * 2.5);
  }
  .w-3 {
    width: calc(var(--spacing) * 3);
  }
  .w-3\\.5 {
    width: calc(var(--spacing) * 3.5);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-5 {
    width: calc(var(--spacing) * 5);
  }
  .w-6 {
    width: calc(var(--spacing) * 6);
  }
  .w-7 {
    width: calc(var(--spacing) * 7);
  }
  .w-8 {
    width: calc(var(--spacing) * 8);
  }
  .w-9 {
    width: calc(var(--spacing) * 9);
  }
  .w-10 {
    width: calc(var(--spacing) * 10);
  }
  .w-\\[18px\\] {
    width: 18px;
  }
  .w-\\[20px\\] {
    width: 20px;
  }
  .w-\\[34px\\] {
    width: 34px;
  }
  .w-\\[38px\\] {
    width: 38px;
  }
  .w-\\[42px\\] {
    width: 42px;
  }
  .w-\\[46px\\] {
    width: 46px;
  }
  .w-\\[60px\\] {
    width: 60px;
  }
  .w-\\[64px\\] {
    width: 64px;
  }
  .w-\\[70px\\] {
    width: 70px;
  }
  .w-\\[74px\\] {
    width: 74px;
  }
  .w-\\[86px\\] {
    width: 86px;
  }
  .w-\\[96px\\] {
    width: 96px;
  }
  .w-\\[112px\\] {
    width: 112px;
  }
  .w-\\[130px\\] {
    width: 130px;
  }
  .w-\\[132px\\] {
    width: 132px;
  }
  .w-\\[150px\\] {
    width: 150px;
  }
  .w-\\[290px\\] {
    width: 290px;
  }
  .w-\\[440px\\] {
    width: 440px;
  }
  .w-\\[560px\\] {
    width: 560px;
  }
  .w-\\[600px\\] {
    width: 600px;
  }
  .w-\\[620px\\] {
    width: 620px;
  }
  .w-full {
    width: 100%;
  }
  .max-w-\\[190px\\] {
    max-width: 190px;
  }
  .max-w-\\[1300px\\] {
    max-width: 1300px;
  }
  .max-w-md {
    max-width: var(--container-md);
  }
  .min-w-0 {
    min-width: calc(var(--spacing) * 0);
  }
  .flex-1 {
    flex: 1;
  }
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .flex-col {
    flex-direction: column;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .gap-1 {
    gap: calc(var(--spacing) * 1);
  }
  .gap-1\\.5 {
    gap: calc(var(--spacing) * 1.5);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-2\\.5 {
    gap: calc(var(--spacing) * 2.5);
  }
  .gap-3 {
    gap: calc(var(--spacing) * 3);
  }
  .gap-16 {
    gap: calc(var(--spacing) * 16);
  }
  .gap-20 {
    gap: calc(var(--spacing) * 20);
  }
  .gap-\\[3px\\] {
    gap: 3px;
  }
  .space-y-3\\.5 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 3.5) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 3.5) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .rounded-2xl {
    border-radius: var(--radius-2xl);
  }
  .rounded-\\[2px\\] {
    border-radius: 2px;
  }
  .rounded-\\[3px\\] {
    border-radius: 3px;
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-md {
    border-radius: var(--radius-md);
  }
  .rounded-xl {
    border-radius: var(--radius-xl);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-2 {
    border-style: var(--tw-border-style);
    border-width: 2px;
  }
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-amber-100 {
    border-color: var(--color-amber-100);
  }
  .border-emerald-200 {
    border-color: var(--color-emerald-200);
  }
  .border-gray-100 {
    border-color: var(--color-gray-100);
  }
  .border-gray-100\\/80 {
    border-color: color-mix(in srgb, oklch(96.7% 0.003 264.542) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-gray-100) 80%, transparent);
    }
  }
  .border-gray-200 {
    border-color: var(--color-gray-200);
  }
  .border-gray-200\\/70 {
    border-color: color-mix(in srgb, oklch(92.8% 0.006 264.531) 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-gray-200) 70%, transparent);
    }
  }
  .border-rose-100 {
    border-color: var(--color-rose-100);
  }
  .border-violet-100 {
    border-color: var(--color-violet-100);
  }
  .border-violet-200 {
    border-color: var(--color-violet-200);
  }
  .border-violet-300 {
    border-color: var(--color-violet-300);
  }
  .bg-amber-50 {
    background-color: var(--color-amber-50);
  }
  .bg-amber-50\\/40 {
    background-color: color-mix(in srgb, oklch(98.7% 0.022 95.277) 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-amber-50) 40%, transparent);
    }
  }
  .bg-amber-100 {
    background-color: var(--color-amber-100);
  }
  .bg-amber-500 {
    background-color: var(--color-amber-500);
  }
  .bg-emerald-50 {
    background-color: var(--color-emerald-50);
  }
  .bg-emerald-100 {
    background-color: var(--color-emerald-100);
  }
  .bg-emerald-500 {
    background-color: var(--color-emerald-500);
  }
  .bg-emerald-600 {
    background-color: var(--color-emerald-600);
  }
  .bg-gray-50\\/60 {
    background-color: color-mix(in srgb, oklch(98.5% 0.002 247.839) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-50) 60%, transparent);
    }
  }
  .bg-gray-100 {
    background-color: var(--color-gray-100);
  }
  .bg-gray-200 {
    background-color: var(--color-gray-200);
  }
  .bg-rose-50 {
    background-color: var(--color-rose-50);
  }
  .bg-rose-50\\/40 {
    background-color: color-mix(in srgb, oklch(96.9% 0.015 12.422) 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-rose-50) 40%, transparent);
    }
  }
  .bg-rose-100 {
    background-color: var(--color-rose-100);
  }
  .bg-violet-50 {
    background-color: var(--color-violet-50);
  }
  .bg-violet-50\\/40 {
    background-color: color-mix(in srgb, oklch(96.9% 0.016 293.756) 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-violet-50) 40%, transparent);
    }
  }
  .bg-violet-50\\/60 {
    background-color: color-mix(in srgb, oklch(96.9% 0.016 293.756) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-violet-50) 60%, transparent);
    }
  }
  .bg-violet-100 {
    background-color: var(--color-violet-100);
  }
  .bg-violet-400 {
    background-color: var(--color-violet-400);
  }
  .bg-violet-500 {
    background-color: var(--color-violet-500);
  }
  .bg-violet-600 {
    background-color: var(--color-violet-600);
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .p-3\\.5 {
    padding: calc(var(--spacing) * 3.5);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .p-8 {
    padding: calc(var(--spacing) * 8);
  }
  .px-1 {
    padding-inline: calc(var(--spacing) * 1);
  }
  .px-1\\.5 {
    padding-inline: calc(var(--spacing) * 1.5);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-2\\.5 {
    padding-inline: calc(var(--spacing) * 2.5);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-3\\.5 {
    padding-inline: calc(var(--spacing) * 3.5);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .px-16 {
    padding-inline: calc(var(--spacing) * 16);
  }
  .py-0\\.5 {
    padding-block: calc(var(--spacing) * 0.5);
  }
  .py-1 {
    padding-block: calc(var(--spacing) * 1);
  }
  .py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
  .py-20 {
    padding-block: calc(var(--spacing) * 20);
  }
  .pt-4 {
    padding-top: calc(var(--spacing) * 4);
  }
  .pt-5 {
    padding-top: calc(var(--spacing) * 5);
  }
  .pr-1 {
    padding-right: calc(var(--spacing) * 1);
  }
  .pr-2\\.5 {
    padding-right: calc(var(--spacing) * 2.5);
  }
  .pr-4 {
    padding-right: calc(var(--spacing) * 4);
  }
  .pb-3\\.5 {
    padding-bottom: calc(var(--spacing) * 3.5);
  }
  .pb-4 {
    padding-bottom: calc(var(--spacing) * 4);
  }
  .pl-1 {
    padding-left: calc(var(--spacing) * 1);
  }
  .pl-2 {
    padding-left: calc(var(--spacing) * 2);
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-2xl {
    font-size: var(--text-2xl);
    line-height: var(--tw-leading, var(--text-2xl--line-height));
  }
  .text-5xl {
    font-size: var(--text-5xl);
    line-height: var(--tw-leading, var(--text-5xl--line-height));
  }
  .text-base {
    font-size: var(--text-base);
    line-height: var(--tw-leading, var(--text-base--line-height));
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xl {
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .text-\\[10px\\] {
    font-size: 10px;
  }
  .leading-\\[18px\\] {
    --tw-leading: 18px;
    line-height: 18px;
  }
  .leading-\\[24px\\] {
    --tw-leading: 24px;
    line-height: 24px;
  }
  .leading-\\[26px\\] {
    --tw-leading: 26px;
    line-height: 26px;
  }
  .leading-\\[30px\\] {
    --tw-leading: 30px;
    line-height: 30px;
  }
  .leading-none {
    --tw-leading: 1;
    line-height: 1;
  }
  .leading-relaxed {
    --tw-leading: var(--leading-relaxed);
    line-height: var(--leading-relaxed);
  }
  .leading-tight {
    --tw-leading: var(--leading-tight);
    line-height: var(--leading-tight);
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
  .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .tracking-wider {
    --tw-tracking: var(--tracking-wider);
    letter-spacing: var(--tracking-wider);
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .text-amber-600 {
    color: var(--color-amber-600);
  }
  .text-amber-700 {
    color: var(--color-amber-700);
  }
  .text-emerald-600 {
    color: var(--color-emerald-600);
  }
  .text-emerald-700 {
    color: var(--color-emerald-700);
  }
  .text-emerald-700\\/80 {
    color: color-mix(in srgb, oklch(50.8% 0.118 165.612) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-emerald-700) 80%, transparent);
    }
  }
  .text-emerald-800 {
    color: var(--color-emerald-800);
  }
  .text-gray-300 {
    color: var(--color-gray-300);
  }
  .text-gray-400 {
    color: var(--color-gray-400);
  }
  .text-gray-500 {
    color: var(--color-gray-500);
  }
  .text-gray-600 {
    color: var(--color-gray-600);
  }
  .text-gray-700 {
    color: var(--color-gray-700);
  }
  .text-gray-800 {
    color: var(--color-gray-800);
  }
  .text-gray-900 {
    color: var(--color-gray-900);
  }
  .text-rose-600 {
    color: var(--color-rose-600);
  }
  .text-rose-700 {
    color: var(--color-rose-700);
  }
  .text-violet-400 {
    color: var(--color-violet-400);
  }
  .text-violet-600 {
    color: var(--color-violet-600);
  }
  .text-violet-700 {
    color: var(--color-violet-700);
  }
  .text-white {
    color: var(--color-white);
  }
  .uppercase {
    text-transform: uppercase;
  }
  .tabular-nums {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .shadow {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-lg {
    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-sm {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-xl {
    --tw-shadow: 0 20px 25px -5px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 8px 10px -6px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-1 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-2 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-amber-200 {
    --tw-ring-color: var(--color-amber-200);
  }
  .ring-black\\/10 {
    --tw-ring-color: color-mix(in srgb, #000 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-black) 10%, transparent);
    }
  }
  .ring-emerald-200 {
    --tw-ring-color: var(--color-emerald-200);
  }
  .ring-rose-200 {
    --tw-ring-color: var(--color-rose-200);
  }
  .ring-violet-200 {
    --tw-ring-color: var(--color-violet-200);
  }
  .ring-violet-500 {
    --tw-ring-color: var(--color-violet-500);
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, visibility, content-visibility, overlay, pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .ease-in-out {
    --tw-ease: var(--ease-in-out);
    transition-timing-function: var(--ease-in-out);
  }
  .ease-out {
    --tw-ease: var(--ease-out);
    transition-timing-function: var(--ease-out);
  }
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-tracking {
  syntax: "*";
  inherits: false;
}
@property --tw-ordinal {
  syntax: "*";
  inherits: false;
}
@property --tw-slashed-zero {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-figure {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-spacing {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-fraction {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-space-y-reverse: 0;
      --tw-border-style: solid;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-tracking: initial;
      --tw-ordinal: initial;
      --tw-slashed-zero: initial;
      --tw-numeric-figure: initial;
      --tw-numeric-spacing: initial;
      --tw-numeric-fraction: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ease: initial;
    }
  }
}
@layer base {
  *,*::before,*::after{box-sizing:border-box;border:0 solid;margin:0;padding:0}
  svg{display:block}
  img{max-width:100%;height:auto}
}
:host{all:initial;display:block;contain:layout style;
  font-family:var(--font-sans);font-size:16px;line-height:1.5;
  -webkit-font-smoothing:antialiased;color:var(--color-gray-900);text-align:left}

/* Below the two-column breakpoint the copy stacks above the card, and the card
   keeps its intrinsic width inside a swipeable rail. It is drawn at fixed pixel
   geometry, so scaling it to a phone would put 14px body text at 8px. A rail
   keeps it legible and is the same pattern any wide table uses. */
@media (max-width: 1023px) {
  .tf-wrap{padding-left:1.25rem;padding-right:1.25rem;padding-top:3rem;padding-bottom:3rem}
  .tf-row{flex-direction:column;align-items:stretch;gap:2rem}
  .tf-row > div:first-child{max-width:none}
  .tf-row > div:first-child h2{font-size:2rem;line-height:1.15}
  .tf-row > div:first-child p{font-size:1.0625rem}
  .tf-card{overflow-x:auto;overflow-y:hidden;max-width:100%;width:auto;
    -webkit-overflow-scrolling:touch;scrollbar-width:none;
    padding-bottom:1.25rem}
  .tf-card::-webkit-scrollbar{display:none}
  .tf-card > *{width:var(--card-w,640px);flex:none}
  /* Do NOT re-width the card here. Its internals are absolutely positioned
     against a fixed inner width, so squeezing it to a round number silently
     truncates every lane inside. The rail scrolls; the card keeps its size. */
}
`,"homev2-claimiq-loop":`/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --color-amber-50: oklch(98.7% 0.022 95.277);
    --color-amber-100: oklch(96.2% 0.059 95.617);
    --color-amber-200: oklch(92.4% 0.12 95.746);
    --color-amber-300: oklch(87.9% 0.169 91.605);
    --color-amber-500: oklch(76.9% 0.188 70.08);
    --color-amber-600: oklch(66.6% 0.179 58.318);
    --color-amber-700: oklch(55.5% 0.163 48.998);
    --color-amber-900: oklch(41.4% 0.112 45.904);
    --color-emerald-50: oklch(97.9% 0.021 166.113);
    --color-emerald-100: oklch(95% 0.052 163.051);
    --color-emerald-200: oklch(90.5% 0.093 164.15);
    --color-emerald-300: oklch(84.5% 0.143 164.978);
    --color-emerald-500: oklch(69.6% 0.17 162.48);
    --color-emerald-600: oklch(59.6% 0.145 163.225);
    --color-emerald-700: oklch(50.8% 0.118 165.612);
    --color-emerald-800: oklch(43.2% 0.095 166.913);
    --color-emerald-900: oklch(37.8% 0.077 168.94);
    --color-gray-50: oklch(98.5% 0.002 247.839);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-200: oklch(92.8% 0.006 264.531);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-gray-600: oklch(44.6% 0.03 256.802);
    --color-gray-700: oklch(37.3% 0.034 259.733);
    --color-gray-800: oklch(27.8% 0.033 256.848);
    --color-gray-900: oklch(21% 0.034 264.665);
    --color-white: #fff;
    --spacing: 0.25rem;
    --container-md: 28rem;
    --text-xs: 0.75rem;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-base: 1rem;
    --text-base--line-height: calc(1.5 / 1);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --text-3xl: 1.875rem;
    --text-3xl--line-height: calc(2.25 / 1.875);
    --text-5xl: 3rem;
    --text-5xl--line-height: 1;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --tracking-wider: 0.05em;
    --leading-tight: 1.25;
    --leading-relaxed: 1.625;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
}
@layer utilities {
  .pointer-events-none {
    pointer-events: none;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .inset-0 {
    inset: calc(var(--spacing) * 0);
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .right-2\\.5 {
    right: calc(var(--spacing) * 2.5);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .left-2\\.5 {
    left: calc(var(--spacing) * 2.5);
  }
  .z-10 {
    z-index: 10;
  }
  .mx-auto {
    margin-inline: auto;
  }
  .mt-3 {
    margin-top: calc(var(--spacing) * 3);
  }
  .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .mt-5 {
    margin-top: calc(var(--spacing) * 5);
  }
  .mb-0\\.5 {
    margin-bottom: calc(var(--spacing) * 0.5);
  }
  .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .mb-6 {
    margin-bottom: calc(var(--spacing) * 6);
  }
  .ml-auto {
    margin-left: auto;
  }
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .h-2 {
    height: calc(var(--spacing) * 2);
  }
  .h-2\\.5 {
    height: calc(var(--spacing) * 2.5);
  }
  .h-3\\.5 {
    height: calc(var(--spacing) * 3.5);
  }
  .h-4 {
    height: calc(var(--spacing) * 4);
  }
  .h-5 {
    height: calc(var(--spacing) * 5);
  }
  .h-7 {
    height: calc(var(--spacing) * 7);
  }
  .h-8 {
    height: calc(var(--spacing) * 8);
  }
  .h-9 {
    height: calc(var(--spacing) * 9);
  }
  .h-10 {
    height: calc(var(--spacing) * 10);
  }
  .h-\\[18px\\] {
    height: 18px;
  }
  .h-\\[24px\\] {
    height: 24px;
  }
  .h-\\[26px\\] {
    height: 26px;
  }
  .h-\\[36px\\] {
    height: 36px;
  }
  .h-\\[38px\\] {
    height: 38px;
  }
  .h-\\[40px\\] {
    height: 40px;
  }
  .h-\\[42px\\] {
    height: 42px;
  }
  .h-\\[60px\\] {
    height: 60px;
  }
  .h-\\[70px\\] {
    height: 70px;
  }
  .min-h-screen {
    min-height: 100vh;
  }
  .w-2 {
    width: calc(var(--spacing) * 2);
  }
  .w-3\\.5 {
    width: calc(var(--spacing) * 3.5);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-5 {
    width: calc(var(--spacing) * 5);
  }
  .w-7 {
    width: calc(var(--spacing) * 7);
  }
  .w-8 {
    width: calc(var(--spacing) * 8);
  }
  .w-9 {
    width: calc(var(--spacing) * 9);
  }
  .w-10 {
    width: calc(var(--spacing) * 10);
  }
  .w-\\[2px\\] {
    width: 2px;
  }
  .w-\\[60px\\] {
    width: 60px;
  }
  .w-\\[70px\\] {
    width: 70px;
  }
  .w-\\[72px\\] {
    width: 72px;
  }
  .w-\\[92px\\] {
    width: 92px;
  }
  .w-\\[104px\\] {
    width: 104px;
  }
  .w-\\[148px\\] {
    width: 148px;
  }
  .w-\\[150px\\] {
    width: 150px;
  }
  .w-\\[178px\\] {
    width: 178px;
  }
  .w-\\[280px\\] {
    width: 280px;
  }
  .w-\\[300px\\] {
    width: 300px;
  }
  .w-\\[600px\\] {
    width: 600px;
  }
  .w-\\[620px\\] {
    width: 620px;
  }
  .max-w-\\[1300px\\] {
    max-width: 1300px;
  }
  .max-w-md {
    max-width: var(--container-md);
  }
  .min-w-0 {
    min-width: calc(var(--spacing) * 0);
  }
  .flex-1 {
    flex: 1;
  }
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .flex-col {
    flex-direction: column;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .gap-1 {
    gap: calc(var(--spacing) * 1);
  }
  .gap-1\\.5 {
    gap: calc(var(--spacing) * 1.5);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-2\\.5 {
    gap: calc(var(--spacing) * 2.5);
  }
  .gap-3 {
    gap: calc(var(--spacing) * 3);
  }
  .gap-16 {
    gap: calc(var(--spacing) * 16);
  }
  .gap-20 {
    gap: calc(var(--spacing) * 20);
  }
  .space-y-2\\.5 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .rounded-2xl {
    border-radius: var(--radius-2xl);
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-md {
    border-radius: var(--radius-md);
  }
  .rounded-xl {
    border-radius: var(--radius-xl);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-2 {
    border-style: var(--tw-border-style);
    border-width: 2px;
  }
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-amber-200 {
    border-color: var(--color-amber-200);
  }
  .border-amber-300 {
    border-color: var(--color-amber-300);
  }
  .border-emerald-200 {
    border-color: var(--color-emerald-200);
  }
  .border-emerald-300 {
    border-color: var(--color-emerald-300);
  }
  .border-gray-100 {
    border-color: var(--color-gray-100);
  }
  .border-gray-100\\/80 {
    border-color: color-mix(in srgb, oklch(96.7% 0.003 264.542) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-gray-100) 80%, transparent);
    }
  }
  .border-gray-200 {
    border-color: var(--color-gray-200);
  }
  .border-gray-200\\/70 {
    border-color: color-mix(in srgb, oklch(92.8% 0.006 264.531) 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-gray-200) 70%, transparent);
    }
  }
  .border-white {
    border-color: var(--color-white);
  }
  .bg-amber-50 {
    background-color: var(--color-amber-50);
  }
  .bg-amber-50\\/50 {
    background-color: color-mix(in srgb, oklch(98.7% 0.022 95.277) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-amber-50) 50%, transparent);
    }
  }
  .bg-amber-100 {
    background-color: var(--color-amber-100);
  }
  .bg-amber-500 {
    background-color: var(--color-amber-500);
  }
  .bg-amber-600 {
    background-color: var(--color-amber-600);
  }
  .bg-emerald-50 {
    background-color: var(--color-emerald-50);
  }
  .bg-emerald-100 {
    background-color: var(--color-emerald-100);
  }
  .bg-emerald-500 {
    background-color: var(--color-emerald-500);
  }
  .bg-emerald-600 {
    background-color: var(--color-emerald-600);
  }
  .bg-gray-50 {
    background-color: var(--color-gray-50);
  }
  .bg-gray-50\\/50 {
    background-color: color-mix(in srgb, oklch(98.5% 0.002 247.839) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-50) 50%, transparent);
    }
  }
  .bg-gray-50\\/60 {
    background-color: color-mix(in srgb, oklch(98.5% 0.002 247.839) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-50) 60%, transparent);
    }
  }
  .bg-gray-50\\/70 {
    background-color: color-mix(in srgb, oklch(98.5% 0.002 247.839) 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-50) 70%, transparent);
    }
  }
  .bg-gray-100 {
    background-color: var(--color-gray-100);
  }
  .bg-gray-200 {
    background-color: var(--color-gray-200);
  }
  .bg-gray-300 {
    background-color: var(--color-gray-300);
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .p-4 {
    padding: calc(var(--spacing) * 4);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .px-1 {
    padding-inline: calc(var(--spacing) * 1);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-2\\.5 {
    padding-inline: calc(var(--spacing) * 2.5);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-3\\.5 {
    padding-inline: calc(var(--spacing) * 3.5);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .px-16 {
    padding-inline: calc(var(--spacing) * 16);
  }
  .py-1 {
    padding-block: calc(var(--spacing) * 1);
  }
  .py-1\\.5 {
    padding-block: calc(var(--spacing) * 1.5);
  }
  .py-3 {
    padding-block: calc(var(--spacing) * 3);
  }
  .py-20 {
    padding-block: calc(var(--spacing) * 20);
  }
  .pt-5 {
    padding-top: calc(var(--spacing) * 5);
  }
  .pb-3\\.5 {
    padding-bottom: calc(var(--spacing) * 3.5);
  }
  .text-right {
    text-align: right;
  }
  .text-2xl {
    font-size: var(--text-2xl);
    line-height: var(--tw-leading, var(--text-2xl--line-height));
  }
  .text-3xl {
    font-size: var(--text-3xl);
    line-height: var(--tw-leading, var(--text-3xl--line-height));
  }
  .text-5xl {
    font-size: var(--text-5xl);
    line-height: var(--tw-leading, var(--text-5xl--line-height));
  }
  .text-base {
    font-size: var(--text-base);
    line-height: var(--tw-leading, var(--text-base--line-height));
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xl {
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .text-\\[10px\\] {
    font-size: 10px;
  }
  .leading-\\[18px\\] {
    --tw-leading: 18px;
    line-height: 18px;
  }
  .leading-\\[24px\\] {
    --tw-leading: 24px;
    line-height: 24px;
  }
  .leading-\\[26px\\] {
    --tw-leading: 26px;
    line-height: 26px;
  }
  .leading-\\[36px\\] {
    --tw-leading: 36px;
    line-height: 36px;
  }
  .leading-relaxed {
    --tw-leading: var(--leading-relaxed);
    line-height: var(--leading-relaxed);
  }
  .leading-tight {
    --tw-leading: var(--leading-tight);
    line-height: var(--leading-tight);
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .tracking-wider {
    --tw-tracking: var(--tracking-wider);
    letter-spacing: var(--tracking-wider);
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .text-amber-600 {
    color: var(--color-amber-600);
  }
  .text-amber-700 {
    color: var(--color-amber-700);
  }
  .text-amber-700\\/80 {
    color: color-mix(in srgb, oklch(55.5% 0.163 48.998) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-amber-700) 80%, transparent);
    }
  }
  .text-amber-900 {
    color: var(--color-amber-900);
  }
  .text-emerald-700 {
    color: var(--color-emerald-700);
  }
  .text-emerald-700\\/80 {
    color: color-mix(in srgb, oklch(50.8% 0.118 165.612) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-emerald-700) 80%, transparent);
    }
  }
  .text-emerald-800 {
    color: var(--color-emerald-800);
  }
  .text-emerald-900 {
    color: var(--color-emerald-900);
  }
  .text-gray-400 {
    color: var(--color-gray-400);
  }
  .text-gray-500 {
    color: var(--color-gray-500);
  }
  .text-gray-600 {
    color: var(--color-gray-600);
  }
  .text-gray-700 {
    color: var(--color-gray-700);
  }
  .text-gray-800 {
    color: var(--color-gray-800);
  }
  .text-gray-900 {
    color: var(--color-gray-900);
  }
  .text-white {
    color: var(--color-white);
  }
  .uppercase {
    text-transform: uppercase;
  }
  .tabular-nums {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .shadow-lg {
    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-sm {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-xl {
    --tw-shadow: 0 20px 25px -5px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 8px 10px -6px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-1 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-amber-200 {
    --tw-ring-color: var(--color-amber-200);
  }
  .ring-emerald-200 {
    --tw-ring-color: var(--color-emerald-200);
  }
  .ring-gray-200 {
    --tw-ring-color: var(--color-gray-200);
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, visibility, content-visibility, overlay, pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .ease-in-out {
    --tw-ease: var(--ease-in-out);
    transition-timing-function: var(--ease-in-out);
  }
  .ease-out {
    --tw-ease: var(--ease-out);
    transition-timing-function: var(--ease-out);
  }
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-tracking {
  syntax: "*";
  inherits: false;
}
@property --tw-ordinal {
  syntax: "*";
  inherits: false;
}
@property --tw-slashed-zero {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-figure {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-spacing {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-fraction {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-space-y-reverse: 0;
      --tw-border-style: solid;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-tracking: initial;
      --tw-ordinal: initial;
      --tw-slashed-zero: initial;
      --tw-numeric-figure: initial;
      --tw-numeric-spacing: initial;
      --tw-numeric-fraction: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ease: initial;
    }
  }
}
@layer base {
  *,*::before,*::after{box-sizing:border-box;border:0 solid;margin:0;padding:0}
  svg{display:block}
  img{max-width:100%;height:auto}
}
:host{all:initial;display:block;contain:layout style;
  font-family:var(--font-sans);font-size:16px;line-height:1.5;
  -webkit-font-smoothing:antialiased;color:var(--color-gray-900);text-align:left}

/* Below the two-column breakpoint the copy stacks above the card, and the card
   keeps its intrinsic width inside a swipeable rail. It is drawn at fixed pixel
   geometry, so scaling it to a phone would put 14px body text at 8px. A rail
   keeps it legible and is the same pattern any wide table uses. */
@media (max-width: 1023px) {
  .tf-wrap{padding-left:1.25rem;padding-right:1.25rem;padding-top:3rem;padding-bottom:3rem}
  .tf-row{flex-direction:column;align-items:stretch;gap:2rem}
  .tf-row > div:first-child{max-width:none}
  .tf-row > div:first-child h2{font-size:2rem;line-height:1.15}
  .tf-row > div:first-child p{font-size:1.0625rem}
  .tf-card{overflow-x:auto;overflow-y:hidden;max-width:100%;width:auto;
    -webkit-overflow-scrolling:touch;scrollbar-width:none;
    padding-bottom:1.25rem}
  .tf-card::-webkit-scrollbar{display:none}
  .tf-card > *{width:var(--card-w,640px);flex:none}
  /* Do NOT re-width the card here. Its internals are absolutely positioned
     against a fixed inner width, so squeezing it to a round number silently
     truncates every lane inside. The rail scrolls; the card keeps its size. */
}
`,"homev2-cashpulse-loop":`/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --color-amber-50: oklch(98.7% 0.022 95.277);
    --color-amber-300: oklch(87.9% 0.169 91.605);
    --color-amber-700: oklch(55.5% 0.163 48.998);
    --color-amber-800: oklch(47.3% 0.137 46.201);
    --color-emerald-50: oklch(97.9% 0.021 166.113);
    --color-emerald-100: oklch(95% 0.052 163.051);
    --color-emerald-200: oklch(90.5% 0.093 164.15);
    --color-emerald-300: oklch(84.5% 0.143 164.978);
    --color-emerald-600: oklch(59.6% 0.145 163.225);
    --color-emerald-700: oklch(50.8% 0.118 165.612);
    --color-emerald-800: oklch(43.2% 0.095 166.913);
    --color-emerald-900: oklch(37.8% 0.077 168.94);
    --color-indigo-50: oklch(96.2% 0.018 272.314);
    --color-indigo-100: oklch(93% 0.034 272.788);
    --color-indigo-200: oklch(87% 0.065 274.039);
    --color-indigo-300: oklch(78.5% 0.115 274.713);
    --color-indigo-500: oklch(58.5% 0.233 277.117);
    --color-indigo-600: oklch(51.1% 0.262 276.966);
    --color-indigo-700: oklch(45.7% 0.24 277.023);
    --color-indigo-900: oklch(35.9% 0.144 278.697);
    --color-rose-50: oklch(96.9% 0.015 12.422);
    --color-rose-100: oklch(94.1% 0.03 12.58);
    --color-rose-200: oklch(89.2% 0.058 10.001);
    --color-rose-600: oklch(58.6% 0.253 17.585);
    --color-gray-50: oklch(98.5% 0.002 247.839);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-200: oklch(92.8% 0.006 264.531);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-gray-600: oklch(44.6% 0.03 256.802);
    --color-gray-700: oklch(37.3% 0.034 259.733);
    --color-gray-800: oklch(27.8% 0.033 256.848);
    --color-gray-900: oklch(21% 0.034 264.665);
    --color-white: #fff;
    --spacing: 0.25rem;
    --container-md: 28rem;
    --text-xs: 0.75rem;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-base: 1rem;
    --text-base--line-height: calc(1.5 / 1);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --text-5xl: 3rem;
    --text-5xl--line-height: 1;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --tracking-wide: 0.025em;
    --tracking-wider: 0.05em;
    --leading-tight: 1.25;
    --leading-relaxed: 1.625;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
}
@layer utilities {
  .pointer-events-none {
    pointer-events: none;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .inset-0 {
    inset: calc(var(--spacing) * 0);
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .right-1 {
    right: calc(var(--spacing) * 1);
  }
  .bottom-0 {
    bottom: calc(var(--spacing) * 0);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .z-10 {
    z-index: 10;
  }
  .mx-auto {
    margin-inline: auto;
  }
  .mt-2 {
    margin-top: calc(var(--spacing) * 2);
  }
  .mt-3 {
    margin-top: calc(var(--spacing) * 3);
  }
  .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .mt-5 {
    margin-top: calc(var(--spacing) * 5);
  }
  .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .mb-6 {
    margin-bottom: calc(var(--spacing) * 6);
  }
  .ml-auto {
    margin-left: auto;
  }
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .h-2 {
    height: calc(var(--spacing) * 2);
  }
  .h-3 {
    height: calc(var(--spacing) * 3);
  }
  .h-4 {
    height: calc(var(--spacing) * 4);
  }
  .h-5 {
    height: calc(var(--spacing) * 5);
  }
  .h-7 {
    height: calc(var(--spacing) * 7);
  }
  .h-8 {
    height: calc(var(--spacing) * 8);
  }
  .h-9 {
    height: calc(var(--spacing) * 9);
  }
  .h-10 {
    height: calc(var(--spacing) * 10);
  }
  .h-\\[2px\\] {
    height: 2px;
  }
  .h-\\[20px\\] {
    height: 20px;
  }
  .h-\\[30px\\] {
    height: 30px;
  }
  .h-\\[38px\\] {
    height: 38px;
  }
  .h-\\[40px\\] {
    height: 40px;
  }
  .h-\\[42px\\] {
    height: 42px;
  }
  .h-\\[64px\\] {
    height: 64px;
  }
  .h-\\[76px\\] {
    height: 76px;
  }
  .h-full {
    height: 100%;
  }
  .min-h-screen {
    min-height: 100vh;
  }
  .w-2 {
    width: calc(var(--spacing) * 2);
  }
  .w-3 {
    width: calc(var(--spacing) * 3);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-5 {
    width: calc(var(--spacing) * 5);
  }
  .w-7 {
    width: calc(var(--spacing) * 7);
  }
  .w-8 {
    width: calc(var(--spacing) * 8);
  }
  .w-9 {
    width: calc(var(--spacing) * 9);
  }
  .w-10 {
    width: calc(var(--spacing) * 10);
  }
  .w-\\[64px\\] {
    width: 64px;
  }
  .w-\\[76px\\] {
    width: 76px;
  }
  .w-\\[120px\\] {
    width: 120px;
  }
  .w-\\[150px\\] {
    width: 150px;
  }
  .w-\\[250px\\] {
    width: 250px;
  }
  .w-\\[260px\\] {
    width: 260px;
  }
  .w-\\[640px\\] {
    width: 640px;
  }
  .w-full {
    width: 100%;
  }
  .max-w-\\[1300px\\] {
    max-width: 1300px;
  }
  .max-w-md {
    max-width: var(--container-md);
  }
  .min-w-0 {
    min-width: calc(var(--spacing) * 0);
  }
  .flex-1 {
    flex: 1;
  }
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .grow {
    flex-grow: 1;
  }
  .transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .items-baseline {
    align-items: baseline;
  }
  .items-center {
    align-items: center;
  }
  .justify-center {
    justify-content: center;
  }
  .gap-1 {
    gap: calc(var(--spacing) * 1);
  }
  .gap-1\\.5 {
    gap: calc(var(--spacing) * 1.5);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-3 {
    gap: calc(var(--spacing) * 3);
  }
  .gap-4 {
    gap: calc(var(--spacing) * 4);
  }
  .gap-16 {
    gap: calc(var(--spacing) * 16);
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .rounded-2xl {
    border-radius: var(--radius-2xl);
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-xl {
    border-radius: var(--radius-xl);
  }
  .rounded-t-md {
    border-top-left-radius: var(--radius-md);
    border-top-right-radius: var(--radius-md);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-2 {
    border-style: var(--tw-border-style);
    border-width: 2px;
  }
  .border-r-2 {
    border-right-style: var(--tw-border-style);
    border-right-width: 2px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-dashed {
    --tw-border-style: dashed;
    border-style: dashed;
  }
  .border-amber-300 {
    border-color: var(--color-amber-300);
  }
  .border-emerald-200 {
    border-color: var(--color-emerald-200);
  }
  .border-emerald-300 {
    border-color: var(--color-emerald-300);
  }
  .border-gray-100 {
    border-color: var(--color-gray-100);
  }
  .border-gray-100\\/80 {
    border-color: color-mix(in srgb, oklch(96.7% 0.003 264.542) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-gray-100) 80%, transparent);
    }
  }
  .border-gray-200 {
    border-color: var(--color-gray-200);
  }
  .border-gray-300 {
    border-color: var(--color-gray-300);
  }
  .border-indigo-200 {
    border-color: var(--color-indigo-200);
  }
  .border-indigo-300 {
    border-color: var(--color-indigo-300);
  }
  .border-indigo-500 {
    border-color: var(--color-indigo-500);
  }
  .border-rose-200 {
    border-color: var(--color-rose-200);
  }
  .border-white {
    border-color: var(--color-white);
  }
  .bg-amber-50 {
    background-color: var(--color-amber-50);
  }
  .bg-emerald-50 {
    background-color: var(--color-emerald-50);
  }
  .bg-emerald-100 {
    background-color: var(--color-emerald-100);
  }
  .bg-emerald-600 {
    background-color: var(--color-emerald-600);
  }
  .bg-gray-50 {
    background-color: var(--color-gray-50);
  }
  .bg-gray-50\\/70 {
    background-color: color-mix(in srgb, oklch(98.5% 0.002 247.839) 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-50) 70%, transparent);
    }
  }
  .bg-gray-100 {
    background-color: var(--color-gray-100);
  }
  .bg-gray-200 {
    background-color: var(--color-gray-200);
  }
  .bg-gray-800 {
    background-color: var(--color-gray-800);
  }
  .bg-gray-900 {
    background-color: var(--color-gray-900);
  }
  .bg-indigo-50 {
    background-color: var(--color-indigo-50);
  }
  .bg-indigo-50\\/60 {
    background-color: color-mix(in srgb, oklch(96.2% 0.018 272.314) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-indigo-50) 60%, transparent);
    }
  }
  .bg-indigo-100 {
    background-color: var(--color-indigo-100);
  }
  .bg-indigo-500 {
    background-color: var(--color-indigo-500);
  }
  .bg-indigo-600 {
    background-color: var(--color-indigo-600);
  }
  .bg-rose-50 {
    background-color: var(--color-rose-50);
  }
  .bg-rose-100 {
    background-color: var(--color-rose-100);
  }
  .bg-rose-600 {
    background-color: var(--color-rose-600);
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-2\\.5 {
    padding-inline: calc(var(--spacing) * 2.5);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-3\\.5 {
    padding-inline: calc(var(--spacing) * 3.5);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .px-16 {
    padding-inline: calc(var(--spacing) * 16);
  }
  .py-0\\.5 {
    padding-block: calc(var(--spacing) * 0.5);
  }
  .py-1 {
    padding-block: calc(var(--spacing) * 1);
  }
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .py-20 {
    padding-block: calc(var(--spacing) * 20);
  }
  .pb-3\\.5 {
    padding-bottom: calc(var(--spacing) * 3.5);
  }
  .text-center {
    text-align: center;
  }
  .text-2xl {
    font-size: var(--text-2xl);
    line-height: var(--tw-leading, var(--text-2xl--line-height));
  }
  .text-5xl {
    font-size: var(--text-5xl);
    line-height: var(--tw-leading, var(--text-5xl--line-height));
  }
  .text-base {
    font-size: var(--text-base);
    line-height: var(--tw-leading, var(--text-base--line-height));
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xl {
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .text-\\[10px\\] {
    font-size: 10px;
  }
  .leading-\\[20px\\] {
    --tw-leading: 20px;
    line-height: 20px;
  }
  .leading-\\[30px\\] {
    --tw-leading: 30px;
    line-height: 30px;
  }
  .leading-relaxed {
    --tw-leading: var(--leading-relaxed);
    line-height: var(--leading-relaxed);
  }
  .leading-tight {
    --tw-leading: var(--leading-tight);
    line-height: var(--leading-tight);
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .tracking-wide {
    --tw-tracking: var(--tracking-wide);
    letter-spacing: var(--tracking-wide);
  }
  .tracking-wider {
    --tw-tracking: var(--tracking-wider);
    letter-spacing: var(--tracking-wider);
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .text-amber-700 {
    color: var(--color-amber-700);
  }
  .text-amber-800 {
    color: var(--color-amber-800);
  }
  .text-emerald-600 {
    color: var(--color-emerald-600);
  }
  .text-emerald-700 {
    color: var(--color-emerald-700);
  }
  .text-emerald-700\\/80 {
    color: color-mix(in srgb, oklch(50.8% 0.118 165.612) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-emerald-700) 80%, transparent);
    }
  }
  .text-emerald-800 {
    color: var(--color-emerald-800);
  }
  .text-emerald-900 {
    color: var(--color-emerald-900);
  }
  .text-gray-300 {
    color: var(--color-gray-300);
  }
  .text-gray-400 {
    color: var(--color-gray-400);
  }
  .text-gray-500 {
    color: var(--color-gray-500);
  }
  .text-gray-600 {
    color: var(--color-gray-600);
  }
  .text-gray-700 {
    color: var(--color-gray-700);
  }
  .text-gray-900 {
    color: var(--color-gray-900);
  }
  .text-indigo-600 {
    color: var(--color-indigo-600);
  }
  .text-indigo-700 {
    color: var(--color-indigo-700);
  }
  .text-indigo-700\\/80 {
    color: color-mix(in srgb, oklch(45.7% 0.24 277.023) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-indigo-700) 80%, transparent);
    }
  }
  .text-indigo-900 {
    color: var(--color-indigo-900);
  }
  .text-rose-600 {
    color: var(--color-rose-600);
  }
  .text-white {
    color: var(--color-white);
  }
  .uppercase {
    text-transform: uppercase;
  }
  .tabular-nums {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .shadow-lg {
    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-sm {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-xl {
    --tw-shadow: 0 20px 25px -5px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 8px 10px -6px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-1 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-emerald-200 {
    --tw-ring-color: var(--color-emerald-200);
  }
  .ring-indigo-200 {
    --tw-ring-color: var(--color-indigo-200);
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, visibility, content-visibility, overlay, pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .ease-in-out {
    --tw-ease: var(--ease-in-out);
    transition-timing-function: var(--ease-in-out);
  }
  .ease-out {
    --tw-ease: var(--ease-out);
    transition-timing-function: var(--ease-out);
  }
  .last\\:border-r-0 {
    &:last-child {
      border-right-style: var(--tw-border-style);
      border-right-width: 0px;
    }
  }
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-tracking {
  syntax: "*";
  inherits: false;
}
@property --tw-ordinal {
  syntax: "*";
  inherits: false;
}
@property --tw-slashed-zero {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-figure {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-spacing {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-fraction {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-border-style: solid;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-tracking: initial;
      --tw-ordinal: initial;
      --tw-slashed-zero: initial;
      --tw-numeric-figure: initial;
      --tw-numeric-spacing: initial;
      --tw-numeric-fraction: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ease: initial;
    }
  }
}
@layer base {
  *,*::before,*::after{box-sizing:border-box;border:0 solid;margin:0;padding:0}
  svg{display:block}
  img{max-width:100%;height:auto}
}
:host{all:initial;display:block;contain:layout style;
  font-family:var(--font-sans);font-size:16px;line-height:1.5;
  -webkit-font-smoothing:antialiased;color:var(--color-gray-900);text-align:left}

/* Below the two-column breakpoint the copy stacks above the card, and the card
   keeps its intrinsic width inside a swipeable rail. It is drawn at fixed pixel
   geometry, so scaling it to a phone would put 14px body text at 8px. A rail
   keeps it legible and is the same pattern any wide table uses. */
@media (max-width: 1023px) {
  .tf-wrap{padding-left:1.25rem;padding-right:1.25rem;padding-top:3rem;padding-bottom:3rem}
  .tf-row{flex-direction:column;align-items:stretch;gap:2rem}
  .tf-row > div:first-child{max-width:none}
  .tf-row > div:first-child h2{font-size:2rem;line-height:1.15}
  .tf-row > div:first-child p{font-size:1.0625rem}
  .tf-card{overflow-x:auto;overflow-y:hidden;max-width:100%;width:auto;
    -webkit-overflow-scrolling:touch;scrollbar-width:none;
    padding-bottom:1.25rem}
  .tf-card::-webkit-scrollbar{display:none}
  .tf-card > *{width:var(--card-w,640px);flex:none}
  /* Do NOT re-width the card here. Its internals are absolutely positioned
     against a fixed inner width, so squeezing it to a round number silently
     truncates every lane inside. The rail scrolls; the card keeps its size. */
}
`,"homev2-home-stack":`/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --color-amber-50: oklch(98.7% 0.022 95.277);
    --color-amber-200: oklch(92.4% 0.12 95.746);
    --color-amber-300: oklch(87.9% 0.169 91.605);
    --color-amber-500: oklch(76.9% 0.188 70.08);
    --color-amber-700: oklch(55.5% 0.163 48.998);
    --color-emerald-50: oklch(97.9% 0.021 166.113);
    --color-emerald-200: oklch(90.5% 0.093 164.15);
    --color-emerald-500: oklch(69.6% 0.17 162.48);
    --color-emerald-600: oklch(59.6% 0.145 163.225);
    --color-emerald-700: oklch(50.8% 0.118 165.612);
    --color-emerald-800: oklch(43.2% 0.095 166.913);
    --color-violet-50: oklch(96.9% 0.016 293.756);
    --color-violet-100: oklch(94.3% 0.029 294.588);
    --color-violet-200: oklch(89.4% 0.057 293.283);
    --color-violet-300: oklch(81.1% 0.111 293.571);
    --color-violet-600: oklch(54.1% 0.281 293.009);
    --color-violet-700: oklch(49.1% 0.27 292.581);
    --color-violet-800: oklch(43.2% 0.232 292.759);
    --color-violet-900: oklch(38% 0.189 293.745);
    --color-rose-700: oklch(51.4% 0.222 16.935);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-200: oklch(92.8% 0.006 264.531);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-gray-600: oklch(44.6% 0.03 256.802);
    --color-gray-700: oklch(37.3% 0.034 259.733);
    --color-gray-900: oklch(21% 0.034 264.665);
    --color-white: #fff;
    --spacing: 0.25rem;
    --container-md: 28rem;
    --text-xs: 0.75rem;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-base: 1rem;
    --text-base--line-height: calc(1.5 / 1);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --text-5xl: 3rem;
    --text-5xl--line-height: 1;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --tracking-wider: 0.05em;
    --leading-tight: 1.25;
    --leading-snug: 1.375;
    --leading-relaxed: 1.625;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
}
@layer utilities {
  .pointer-events-none {
    pointer-events: none;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .inset-0 {
    inset: calc(var(--spacing) * 0);
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .z-10 {
    z-index: 10;
  }
  .mx-auto {
    margin-inline: auto;
  }
  .mt-0\\.5 {
    margin-top: calc(var(--spacing) * 0.5);
  }
  .mt-1 {
    margin-top: calc(var(--spacing) * 1);
  }
  .mt-2 {
    margin-top: calc(var(--spacing) * 2);
  }
  .mt-3 {
    margin-top: calc(var(--spacing) * 3);
  }
  .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .mb-6 {
    margin-bottom: calc(var(--spacing) * 6);
  }
  .ml-auto {
    margin-left: auto;
  }
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .h-2 {
    height: calc(var(--spacing) * 2);
  }
  .h-3\\.5 {
    height: calc(var(--spacing) * 3.5);
  }
  .h-4 {
    height: calc(var(--spacing) * 4);
  }
  .h-5 {
    height: calc(var(--spacing) * 5);
  }
  .h-7 {
    height: calc(var(--spacing) * 7);
  }
  .h-8 {
    height: calc(var(--spacing) * 8);
  }
  .h-10 {
    height: calc(var(--spacing) * 10);
  }
  .h-\\[2px\\] {
    height: 2px;
  }
  .h-\\[3px\\] {
    height: 3px;
  }
  .h-\\[24px\\] {
    height: 24px;
  }
  .h-\\[32px\\] {
    height: 32px;
  }
  .h-\\[64px\\] {
    height: 64px;
  }
  .h-\\[76px\\] {
    height: 76px;
  }
  .min-h-screen {
    min-height: 100vh;
  }
  .w-2 {
    width: calc(var(--spacing) * 2);
  }
  .w-3\\.5 {
    width: calc(var(--spacing) * 3.5);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-5 {
    width: calc(var(--spacing) * 5);
  }
  .w-7 {
    width: calc(var(--spacing) * 7);
  }
  .w-8 {
    width: calc(var(--spacing) * 8);
  }
  .w-10 {
    width: calc(var(--spacing) * 10);
  }
  .w-\\[64px\\] {
    width: 64px;
  }
  .w-\\[76px\\] {
    width: 76px;
  }
  .w-\\[190px\\] {
    width: 190px;
  }
  .w-\\[210px\\] {
    width: 210px;
  }
  .w-\\[300px\\] {
    width: 300px;
  }
  .w-\\[320px\\] {
    width: 320px;
  }
  .w-\\[330px\\] {
    width: 330px;
  }
  .w-\\[360px\\] {
    width: 360px;
  }
  .w-\\[640px\\] {
    width: 640px;
  }
  .w-px {
    width: 1px;
  }
  .max-w-\\[1300px\\] {
    max-width: 1300px;
  }
  .max-w-md {
    max-width: var(--container-md);
  }
  .min-w-0 {
    min-width: calc(var(--spacing) * 0);
  }
  .flex-1 {
    flex: 1;
  }
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .grow {
    flex-grow: 1;
  }
  .transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .flex-col {
    flex-direction: column;
  }
  .items-baseline {
    align-items: baseline;
  }
  .items-center {
    align-items: center;
  }
  .justify-center {
    justify-content: center;
  }
  .gap-1\\.5 {
    gap: calc(var(--spacing) * 1.5);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-3 {
    gap: calc(var(--spacing) * 3);
  }
  .gap-16 {
    gap: calc(var(--spacing) * 16);
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .rounded-2xl {
    border-radius: var(--radius-2xl);
  }
  .rounded-\\[4px\\] {
    border-radius: 4px;
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-md {
    border-radius: var(--radius-md);
  }
  .rounded-xl {
    border-radius: var(--radius-xl);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-2 {
    border-style: var(--tw-border-style);
    border-width: 2px;
  }
  .border-\\[3px\\] {
    border-style: var(--tw-border-style);
    border-width: 3px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-amber-300 {
    border-color: var(--color-amber-300);
  }
  .border-emerald-200 {
    border-color: var(--color-emerald-200);
  }
  .border-gray-100 {
    border-color: var(--color-gray-100);
  }
  .border-gray-100\\/80 {
    border-color: color-mix(in srgb, oklch(96.7% 0.003 264.542) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-gray-100) 80%, transparent);
    }
  }
  .border-gray-200 {
    border-color: var(--color-gray-200);
  }
  .border-violet-200 {
    border-color: var(--color-violet-200);
  }
  .border-violet-300 {
    border-color: var(--color-violet-300);
  }
  .border-white {
    border-color: var(--color-white);
  }
  .bg-amber-50 {
    background-color: var(--color-amber-50);
  }
  .bg-amber-50\\/70 {
    background-color: color-mix(in srgb, oklch(98.7% 0.022 95.277) 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-amber-50) 70%, transparent);
    }
  }
  .bg-amber-500 {
    background-color: var(--color-amber-500);
  }
  .bg-emerald-50 {
    background-color: var(--color-emerald-50);
  }
  .bg-emerald-50\\/60 {
    background-color: color-mix(in srgb, oklch(97.9% 0.021 166.113) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-emerald-50) 60%, transparent);
    }
  }
  .bg-emerald-500 {
    background-color: var(--color-emerald-500);
  }
  .bg-emerald-600 {
    background-color: var(--color-emerald-600);
  }
  .bg-gray-100 {
    background-color: var(--color-gray-100);
  }
  .bg-gray-300 {
    background-color: var(--color-gray-300);
  }
  .bg-gray-700 {
    background-color: var(--color-gray-700);
  }
  .bg-violet-50 {
    background-color: var(--color-violet-50);
  }
  .bg-violet-50\\/60 {
    background-color: color-mix(in srgb, oklch(96.9% 0.016 293.756) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-violet-50) 60%, transparent);
    }
  }
  .bg-violet-50\\/70 {
    background-color: color-mix(in srgb, oklch(96.9% 0.016 293.756) 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-violet-50) 70%, transparent);
    }
  }
  .bg-violet-100 {
    background-color: var(--color-violet-100);
  }
  .bg-violet-600 {
    background-color: var(--color-violet-600);
  }
  .bg-violet-700 {
    background-color: var(--color-violet-700);
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .bg-white\\/15 {
    background-color: color-mix(in srgb, #fff 15%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 15%, transparent);
    }
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-2\\.5 {
    padding-inline: calc(var(--spacing) * 2.5);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .px-16 {
    padding-inline: calc(var(--spacing) * 16);
  }
  .py-1 {
    padding-block: calc(var(--spacing) * 1);
  }
  .py-1\\.5 {
    padding-block: calc(var(--spacing) * 1.5);
  }
  .py-2\\.5 {
    padding-block: calc(var(--spacing) * 2.5);
  }
  .py-20 {
    padding-block: calc(var(--spacing) * 20);
  }
  .pb-3\\.5 {
    padding-bottom: calc(var(--spacing) * 3.5);
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-2xl {
    font-size: var(--text-2xl);
    line-height: var(--tw-leading, var(--text-2xl--line-height));
  }
  .text-5xl {
    font-size: var(--text-5xl);
    line-height: var(--tw-leading, var(--text-5xl--line-height));
  }
  .text-base {
    font-size: var(--text-base);
    line-height: var(--tw-leading, var(--text-base--line-height));
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xl {
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .text-\\[10px\\] {
    font-size: 10px;
  }
  .leading-\\[24px\\] {
    --tw-leading: 24px;
    line-height: 24px;
  }
  .leading-\\[32px\\] {
    --tw-leading: 32px;
    line-height: 32px;
  }
  .leading-relaxed {
    --tw-leading: var(--leading-relaxed);
    line-height: var(--leading-relaxed);
  }
  .leading-snug {
    --tw-leading: var(--leading-snug);
    line-height: var(--leading-snug);
  }
  .leading-tight {
    --tw-leading: var(--leading-tight);
    line-height: var(--leading-tight);
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .tracking-wider {
    --tw-tracking: var(--tracking-wider);
    letter-spacing: var(--tracking-wider);
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .text-amber-700 {
    color: var(--color-amber-700);
  }
  .text-emerald-700 {
    color: var(--color-emerald-700);
  }
  .text-emerald-800 {
    color: var(--color-emerald-800);
  }
  .text-gray-400 {
    color: var(--color-gray-400);
  }
  .text-gray-500 {
    color: var(--color-gray-500);
  }
  .text-gray-600 {
    color: var(--color-gray-600);
  }
  .text-gray-700 {
    color: var(--color-gray-700);
  }
  .text-gray-900 {
    color: var(--color-gray-900);
  }
  .text-rose-700 {
    color: var(--color-rose-700);
  }
  .text-violet-100 {
    color: var(--color-violet-100);
  }
  .text-violet-700 {
    color: var(--color-violet-700);
  }
  .text-violet-800 {
    color: var(--color-violet-800);
  }
  .text-violet-800\\/80 {
    color: color-mix(in srgb, oklch(43.2% 0.232 292.759) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-violet-800) 80%, transparent);
    }
  }
  .text-violet-900 {
    color: var(--color-violet-900);
  }
  .text-white {
    color: var(--color-white);
  }
  .uppercase {
    text-transform: uppercase;
  }
  .tabular-nums {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .shadow {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-lg {
    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-sm {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-xl {
    --tw-shadow: 0 20px 25px -5px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 8px 10px -6px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-1 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-amber-200 {
    --tw-ring-color: var(--color-amber-200);
  }
  .ring-emerald-200 {
    --tw-ring-color: var(--color-emerald-200);
  }
  .ring-gray-200 {
    --tw-ring-color: var(--color-gray-200);
  }
  .ring-violet-200 {
    --tw-ring-color: var(--color-violet-200);
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, visibility, content-visibility, overlay, pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .ease-in-out {
    --tw-ease: var(--ease-in-out);
    transition-timing-function: var(--ease-in-out);
  }
  .ease-out {
    --tw-ease: var(--ease-out);
    transition-timing-function: var(--ease-out);
  }
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-tracking {
  syntax: "*";
  inherits: false;
}
@property --tw-ordinal {
  syntax: "*";
  inherits: false;
}
@property --tw-slashed-zero {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-figure {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-spacing {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-fraction {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-border-style: solid;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-tracking: initial;
      --tw-ordinal: initial;
      --tw-slashed-zero: initial;
      --tw-numeric-figure: initial;
      --tw-numeric-spacing: initial;
      --tw-numeric-fraction: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ease: initial;
    }
  }
}
@layer base {
  *,*::before,*::after{box-sizing:border-box;border:0 solid;margin:0;padding:0}
  svg{display:block}
  img{max-width:100%;height:auto}
}
:host{all:initial;display:block;contain:layout style;
  font-family:var(--font-sans);font-size:16px;line-height:1.5;
  -webkit-font-smoothing:antialiased;color:var(--color-gray-900);text-align:left}

/* Below the two-column breakpoint the copy stacks above the card, and the card
   keeps its intrinsic width inside a swipeable rail. It is drawn at fixed pixel
   geometry, so scaling it to a phone would put 14px body text at 8px. A rail
   keeps it legible and is the same pattern any wide table uses. */
@media (max-width: 1023px) {
  .tf-wrap{padding-left:1.25rem;padding-right:1.25rem;padding-top:3rem;padding-bottom:3rem}
  .tf-row{flex-direction:column;align-items:stretch;gap:2rem}
  .tf-row > div:first-child{max-width:none}
  .tf-row > div:first-child h2{font-size:2rem;line-height:1.15}
  .tf-row > div:first-child p{font-size:1.0625rem}
  .tf-card{overflow-x:auto;overflow-y:hidden;max-width:100%;width:auto;
    -webkit-overflow-scrolling:touch;scrollbar-width:none;
    padding-bottom:1.25rem}
  .tf-card::-webkit-scrollbar{display:none}
  .tf-card > *{width:var(--card-w,640px);flex:none}
  /* Do NOT re-width the card here. Its internals are absolutely positioned
     against a fixed inner width, so squeezing it to a round number silently
     truncates every lane inside. The rail scrolls; the card keeps its size. */
}
`};d({stories:g,cssFor:w,locale:"en"});})();
