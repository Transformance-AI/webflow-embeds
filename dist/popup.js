(()=>{var v=`
:host{
  --tf-red:#ff5043;
  --tf-grad:linear-gradient(90deg,#FF8308 0%,#FF5043 55%,#392BD5 100%);
  --tf-ink:#0a0a0a;
  --tf-ink-soft:#4a4a4a;
  --tf-ink-faint:#888;
  --tf-line-soft:#f0f0f0;
  --tf-white:#fff;
  --tf-font:"Geist",-apple-system,system-ui,sans-serif;
  position:fixed;
  bottom:24px;
  right:24px;
  z-index:9990;
  pointer-events:none;
}
:host([data-state="visible"]){
  pointer-events:auto;
}
.card{
  width:360px;
  max-width:calc(100vw - 32px);
  background:var(--tf-white);
  border-radius:14px;
  box-shadow:0 2px 4px rgba(0,0,0,0.05),0 24px 56px rgba(0,0,0,0.12);
  padding:22px 24px 20px;
  position:relative;
  border-top:3px solid var(--tf-red);
  font-family:var(--tf-font);
  color:var(--tf-ink);
  font-feature-settings:"ss01","ss03";
  -webkit-font-smoothing:antialiased;
  box-sizing:border-box;
  opacity:0;
  transform:translateX(20px);
  transition:opacity 320ms cubic-bezier(0.2,0.8,0.2,1),transform 320ms cubic-bezier(0.2,0.8,0.2,1);
}
:host([data-state="visible"]) .card{
  opacity:1;
  transform:translateX(0);
}
.card *,.card *::before,.card *::after{box-sizing:border-box;}
.x{
  position:absolute;
  top:12px;
  right:12px;
  width:28px;
  height:28px;
  background:transparent;
  border:0;
  border-radius:6px;
  cursor:pointer;
  color:var(--tf-ink-faint);
  font-size:18px;
  line-height:1;
  display:flex;
  align-items:center;
  justify-content:center;
  transition:background 120ms,color 120ms;
  font-family:inherit;
  padding:0;
}
.x:hover{
  background:var(--tf-line-soft);
  color:var(--tf-ink);
}
.author{
  display:flex;
  align-items:center;
  gap:10px;
  margin-bottom:14px;
  padding-right:28px;
}
.avatar{
  width:40px;
  height:40px;
  border-radius:50%;
  flex-shrink:0;
  background:linear-gradient(135deg,#d4d4d4 0%,#a8a8a8 100%);
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:14px;
  font-weight:600;
  letter-spacing:-0.01em;
  overflow:hidden;
}
.avatar img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
}
.author-meta{
  display:flex;
  flex-direction:column;
  line-height:1.25;
}
.author-name{
  font-size:13px;
  font-weight:600;
  color:var(--tf-ink);
}
.author-role{
  font-size:12px;
  color:var(--tf-ink-faint);
}
.headline{
  font-size:17px;
  font-weight:600;
  line-height:1.3;
  letter-spacing:-0.011em;
  margin:0 0 8px;
  color:var(--tf-ink);
  padding-right:28px;
}
.body{
  font-size:14px;
  line-height:1.45;
  color:var(--tf-ink-soft);
  margin:0 0 16px;
}
.cta-primary{
  display:block;
  width:100%;
  background:var(--tf-ink);
  color:#fff;
  text-decoration:none;
  text-align:center;
  font-size:14px;
  font-weight:500;
  padding:11px 16px;
  border-radius:8px;
  margin-bottom:10px;
  border:0;
  cursor:pointer;
  transition:background 120ms;
  font-family:inherit;
}
.cta-primary:hover{background:var(--tf-ink-soft);}
.cta-secondary{
  display:block;
  text-align:center;
  font-size:13px;
  color:var(--tf-ink-soft);
  text-decoration:none;
  padding:4px 0;
  transition:color 120ms;
}
.cta-secondary:hover{color:var(--tf-ink);}
.cta-secondary[hidden]{display:none;}

/* Mobile: full-width slide-up bottom-sheet */
@media (max-width:767px){
  :host{
    bottom:16px;
    right:16px;
    left:16px;
  }
  .card{
    width:auto;
    max-width:none;
    transform:translateY(20px);
  }
  :host([data-state="visible"]) .card{
    transform:translateY(0);
  }
}
`;var s={"cash-forecast":{headline:"Forecast cash 90 days out at 95% accuracy. Across AR and AP.",body:"Multi-horizon models. Confidence ranges, not point estimates. FX-aware.",ctaPrimary:"Book a 15-min call",ctaPrimaryUrl:"/meeting",ctaSecondary:"Visit CashPulse \u2192",ctaSecondaryUrl:"/solutions/cash-flow-forecasting"},"cash-app":{headline:"Match 95% of payments straight-through. No templates.",body:"Vision LLMs read any remittance format. 99.7% extraction accuracy. Live in 4 to 8 weeks.",ctaPrimary:"Book a 15-min call",ctaPrimaryUrl:"/meeting",ctaSecondary:"Visit ClearMatch \u2192",ctaSecondaryUrl:"/solutions/cash-application"},collections:{headline:"Cut DSO by 8 to 15 days with autonomous AI collectors.",body:"70+ languages. 15 to 20 calls per hour per agent versus 15 to 20 per day for a human.",ctaPrimary:"Book a 15-min call",ctaPrimaryUrl:"/meeting",ctaSecondary:"Visit CollectPulse \u2192",ctaSecondaryUrl:"/solutions/collections"},deductions:{headline:"Resolve deductions 6\xD7 faster at 97% accuracy.",body:"Six-category auto-classification. Graph-based investigation. Audit trail built in.",ctaPrimary:"Book a 15-min call",ctaPrimaryUrl:"/meeting",ctaSecondary:"Visit ClaimIQ \u2192",ctaSecondaryUrl:"/solutions/deductions"},vero:{headline:"One AI agent across cash app, deductions, collections, and forecasting.",body:"Persistent memory. Learns your ops over time. Deploys inside your cloud.",ctaPrimary:"Book a 15-min call",ctaPrimaryUrl:"/meeting",ctaSecondary:"Meet Vero \u2192",ctaSecondaryUrl:"/solutions/vero-agent"},o2c:{headline:"Run the full O2C cycle on one AI-native platform.",body:"ClearMatch, ClaimIQ, CollectPulse, CashPulse. Unified by Vero. Deploys in 4 to 8 weeks.",ctaPrimary:"Book a 15-min call",ctaPrimaryUrl:"/meeting",ctaSecondary:"See Solutions \u2192",ctaSecondaryUrl:"/solutions"},"vendor-comparison":{headline:"An AI-native alternative built for execution, not reporting.",body:"Most AR suites surface insights. Transformance acts on them. See the difference in 4 to 8 weeks.",ctaPrimary:"Book a 15-min call",ctaPrimaryUrl:"/meeting",ctaSecondary:"See Solutions \u2192",ctaSecondaryUrl:"/solutions"},default:{headline:"Fix your AR data. The forecast fixes itself.",body:"AI-native O2C automation. Cash app, deductions, collections, forecasting. One agent, four products.",ctaPrimary:"Book a 15-min call",ctaPrimaryUrl:"/meeting",ctaSecondary:"See Solutions \u2192",ctaSecondaryUrl:"/solutions"}},c={name:"Paul, founder",role:"Transformance",imageUrl:"https://cdn.prod.website-files.com/684931abb239b84984296d93/68494720f0211b2372893faf_Profile%20Picture.avif",imageAlt:"Paul Hanke, Co-Founder of Transformance"};function b(t){return s[t]||s.default}var f=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-variant","data-state","data-suppress-secondary"]}attributeChangedCallback(){this.shadowRoot.firstChild&&this._render()}connectedCallback(){this.hasAttribute("data-state")||this.setAttribute("data-state","hidden"),this._render()}show(){requestAnimationFrame(()=>{this.setAttribute("data-state","visible")})}hide(){this.setAttribute("data-state","hidden")}_render(){let e=this.getAttribute("data-variant")||"default",a=b(e),o=this.getAttribute("data-suppress-secondary")==="true",i=`
      <style>${v}</style>
      <div class="card" role="dialog" aria-label="Talk to Transformance">
        <button class="x" aria-label="Dismiss" data-action="dismiss">\xD7</button>
        <div class="author">
          <div class="avatar">${c.imageUrl?`<img src="${n(c.imageUrl)}" alt="${n(c.imageAlt||"")}">`:"<span>PH</span>"}</div>
          <div class="author-meta">
            <span class="author-name">${n(c.name)}</span>
            <span class="author-role">${n(c.role)}</span>
          </div>
        </div>
        <h4 class="headline">${n(a.headline)}</h4>
        <p class="body">${n(a.body)}</p>
        <a class="cta-primary" href="${n(a.ctaPrimaryUrl||"/meeting")}" data-action="cta-primary">${n(a.ctaPrimary)}</a>
        <a class="cta-secondary" href="${n(a.ctaSecondaryUrl||"/solutions")}" data-action="cta-secondary"${o?" hidden":""}>${n(a.ctaSecondary)}</a>
      </div>
    `;this.shadowRoot.innerHTML=i,this.shadowRoot.querySelector('[data-action="dismiss"]').addEventListener("click",u=>{u.preventDefault(),this.dispatchEvent(new CustomEvent("tf-popup-dismiss",{bubbles:!0,composed:!0}))}),this.shadowRoot.querySelector('[data-action="cta-primary"]').addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("tf-popup-cta",{bubbles:!0,composed:!0,detail:{kind:"primary",href:a.ctaPrimaryUrl}}))}),this.shadowRoot.querySelector('[data-action="cta-secondary"]').addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("tf-popup-cta",{bubbles:!0,composed:!0,detail:{kind:"secondary",href:a.ctaSecondaryUrl}}))})}};function n(t){return String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}customElements.get("transformance-popup")||customElements.define("transformance-popup",f);var k="tf_popup_dismissed_",U=30*24*60*60*1e3,C=35,_=25*1e3,E={"/solutions/cash-flow-forecasting":"cash-forecast","/solutions/cash-application":"cash-app","/solutions/collections":"collections","/solutions/claims-and-deductions":"deductions","/solutions/deductions":"deductions","/solutions/vero-agent":"vero","/solutions":"o2c"},x={"cash-forecasting":"cash-forecast","cash-flow-forecasting":"cash-forecast","cash-flow":"cash-forecast",forecasting:"cash-forecast","cash-application":"cash-app","cash-app":"cash-app",collections:"collections",collection:"collections","ar-collections":"collections",deductions:"deductions",deduction:"deductions",claims:"deductions","claims-and-deductions":"deductions",vero:"vero",o2c:"o2c","order-to-cash":"o2c","order-to-cash-broad":"o2c","general-o2c":"o2c","invoice-to-cash":"o2c","ar-automation":"o2c","ai-in-finance":"o2c","ai-finance":"o2c","vendor-comparison":"vendor-comparison","vendor-comparisons":"vendor-comparison",comparisons:"vendor-comparison",competitors:"vendor-comparison"};function w(t){if(!t)return null;let e=String(t).trim().toLowerCase().replace(/\s+/g,"-");return s[e]?e:x[e]?x[e]:null}function L(t){return t?/^ar-cash-forecasting|^13-week|cash-flow-forecast|automated-cash-flow|why-are-most-cash-flow/.test(t)?"cash-forecast":/cash-application|cash-app|payment-reconciliation|auto-cash/.test(t)?"cash-app":/collections|dunning|reducing-dso|best-tools-for-reducing-dso/.test(t)?"collections":/deduction|claim|partial-payments/.test(t)?"deductions":/highradius|billtrust|blackline|competitors|alternatives|kyriba|tesorio/.test(t)?"vendor-comparison":/order-to-cash|o2c|invoice-to-cash|accounts-receivable-automation|what-is-order/.test(t)?"o2c":"default":"default"}function T(){let t=window.location.pathname.replace(/\/+$/,"");for(let[e,a]of Object.entries(E))if(t===e)return{variant:a,kind:"solution",slug:e};if(t.startsWith("/blog-posts/")){let e=document.querySelector('meta[name="tf-blog-category"]'),a=w(e&&e.getAttribute("content")),o=t.split("/").pop()||"";return{variant:a||L(o),kind:"blog",slug:o}}if(t.startsWith("/glossary/")&&t!=="/glossary"){let e=document.querySelector('meta[name="tf-glossary-cluster"]'),a=w(e&&e.getAttribute("content")),o=t.split("/").pop()||"";return{variant:a||"default",kind:"glossary",slug:o}}return null}function R(t){try{let e=localStorage.getItem(k+t);if(!e)return!1;let a=Number(e);return Number.isFinite(a)&&Date.now()-a<U}catch{return!1}}function O(t){try{localStorage.setItem(k+t,String(Date.now()))}catch{}}function m(t,e){try{window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:t,...e})}catch{}}function I(){return document.querySelector("article")||document.querySelector('[role="main"]')||document.querySelector("main")||document.body}function D(t){let e=t.getBoundingClientRect(),a=t===document.body?document.documentElement.scrollHeight:t.scrollHeight,o=window.innerHeight,i=window.scrollY-(t.offsetTop||0);return a<=o?100:(i+o)/a*100}var S=!1,M=(()=>{try{return/[?&]tf_debug=1/.test(window.location.search)||localStorage.getItem("tf_popup_debug")==="1"}catch{return!1}})();function d(...t){M&&console.log("[tf-popup]",...t)}function h(){if(S)return;S=!0,d("installPopup() called",{path:window.location.pathname});let t=T();if(!t){d("no ctx \u2014 exiting (not a blog or solution page)");return}if(d("resolved ctx",t),R(t.variant)){d("dismissed within 30 days \u2014 exiting",{key:"tf_popup_dismissed_"+t.variant});return}let e=s[t.variant]||s.default,a=e&&e.ctaSecondaryUrl&&window.location.pathname.replace(/\/+$/,"")===e.ctaSecondaryUrl.replace(/\/+$/,""),o=document.createElement("transformance-popup");o.setAttribute("data-variant",t.variant),o.setAttribute("data-state","hidden"),a&&o.setAttribute("data-suppress-secondary","true"),document.body.appendChild(o);let i=!1,u=0,l,p,g=r=>{i||(i=!0,u=Date.now(),P(),o.show(),d("popup shown",{source:r,variant:t.variant}),m("popup_shown",{variant:t.variant,slug:t.slug,kind:t.kind,trigger:r}))},P=()=>{l&&(window.removeEventListener("scroll",l,{passive:!0}),l=null),p&&(clearTimeout(p),p=null)},A=I(),y=0;l=()=>{let r=Date.now();r-y<100||(y=r,D(A)>=C&&g("scroll"))},window.addEventListener("scroll",l,{passive:!0}),p=setTimeout(()=>g("timer"),_),o.addEventListener("tf-popup-dismiss",()=>{o.hide(),O(t.variant),m("popup_dismissed",{variant:t.variant,slug:t.slug,time_visible_ms:Date.now()-u}),setTimeout(()=>o.remove(),400)}),o.addEventListener("tf-popup-cta",r=>{m("popup_cta_clicked",{variant:t.variant,slug:t.slug,cta:r.detail.kind,target_url:r.detail.href})})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",h,{once:!0}):h();})();
