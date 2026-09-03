(()=>{var x=`
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
`;var p=()=>location.pathname.startsWith("/de/")||location.pathname==="/de",l=t=>!p()||typeof t!="string"||!t.startsWith("/")||t==="/de"||t.startsWith("/de/")?t:"/de"+t,f=t=>t==="/de"?"/":t.startsWith("/de/")?t.slice(3):t;var c={"cash-forecast":{headline:"Forecast cash 90 days out at 95% accuracy. Across AR and AP.",body:"Multi-horizon models. Confidence ranges, not point estimates. FX-aware.",ctaPrimary:"Book a 15-min call",ctaPrimaryUrl:"/meeting",ctaSecondary:"Visit CashPulse \u2192",ctaSecondaryUrl:"/solutions/cash-flow-forecasting"},"cash-app":{headline:"Match 95% of payments straight-through. No templates.",body:"Vision LLMs read any remittance format. 99.7% extraction accuracy. Live in 4 to 8 weeks.",ctaPrimary:"Book a 15-min call",ctaPrimaryUrl:"/meeting",ctaSecondary:"Visit ClearMatch \u2192",ctaSecondaryUrl:"/solutions/cash-application"},collections:{headline:"Cut DSO by 8 to 15 days with autonomous AI collectors.",body:"70+ languages. 15 to 20 calls per hour per agent versus 15 to 20 per day for a human.",ctaPrimary:"Book a 15-min call",ctaPrimaryUrl:"/meeting",ctaSecondary:"Visit CollectPulse \u2192",ctaSecondaryUrl:"/solutions/collections"},deductions:{headline:"Resolve deductions 6\xD7 faster at 97% accuracy.",body:"Six-category auto-classification. Graph-based investigation. Audit trail built in.",ctaPrimary:"Book a 15-min call",ctaPrimaryUrl:"/meeting",ctaSecondary:"Visit ClaimIQ \u2192",ctaSecondaryUrl:"/solutions/deductions"},vero:{headline:"One AI agent across cash app, deductions, collections, and forecasting.",body:"Persistent memory. Learns your ops over time. Deploys inside your cloud.",ctaPrimary:"Book a 15-min call",ctaPrimaryUrl:"/meeting",ctaSecondary:"Meet Vero \u2192",ctaSecondaryUrl:"/solutions/vero-agent"},o2c:{headline:"Run the full O2C cycle on one AI-native platform.",body:"ClearMatch, ClaimIQ, CollectPulse, CashPulse. Unified by Vero. Deploys in 4 to 8 weeks.",ctaPrimary:"Book a 15-min call",ctaPrimaryUrl:"/meeting",ctaSecondary:"See Solutions \u2192",ctaSecondaryUrl:"/solutions"},"vendor-comparison":{headline:"An AI-native alternative built for execution, not reporting.",body:"Most AR suites surface insights. Transformance acts on them. See the difference in 4 to 8 weeks.",ctaPrimary:"Book a 15-min call",ctaPrimaryUrl:"/meeting",ctaSecondary:"See Solutions \u2192",ctaSecondaryUrl:"/solutions"},default:{headline:"Fix your AR data. The forecast fixes itself.",body:"AI-native O2C automation. Cash app, deductions, collections, forecasting. One agent, four products.",ctaPrimary:"Book a 15-min call",ctaPrimaryUrl:"/meeting",ctaSecondary:"See Solutions \u2192",ctaSecondaryUrl:"/solutions"}},S={name:"Paul Hanke, founder",role:"Transformance",imageUrl:"https://cdn.prod.website-files.com/684931abb239b84984296d93/68494720f0211b2372893faf_Profile%20Picture.avif",imageAlt:"Paul Hanke, Co-Founder of Transformance"},w={"cash-forecast":{headline:"Cashflow 90 Tage im Voraus mit 95 % Genauigkeit prognostizieren. F\xFCr Debitoren und Kreditoren.",body:"Modelle f\xFCr mehrere Zeithorizonte. Konfidenzintervalle statt Punktsch\xE4tzungen. W\xE4hrungsrisiken ber\xFCcksichtigt.",ctaPrimary:"Termin buchen",ctaPrimaryUrl:"/meeting",ctaSecondary:"Mehr zu CashPulse \u2192",ctaSecondaryUrl:"/solutions/cash-flow-forecasting"},"cash-app":{headline:"95 % der Zahlungen automatisch zuordnen. Ganz ohne Vorlagen.",body:"Vision-LLMs lesen jedes Avis-Format. 99,7 % Erkennungsgenauigkeit. Live in 4 bis 8 Wochen.",ctaPrimary:"Termin buchen",ctaPrimaryUrl:"/meeting",ctaSecondary:"Mehr zu ClearMatch \u2192",ctaSecondaryUrl:"/solutions/cash-application"},collections:{headline:"DSO mit autonomen KI-Agenten um 8 bis 15 Tage senken.",body:"\xDCber 70 Sprachen. 15 bis 20 Anrufe pro Stunde und Agent, gegen\xFCber 15 bis 20 pro Tag f\xFCr einen Mitarbeiter.",ctaPrimary:"Termin buchen",ctaPrimaryUrl:"/meeting",ctaSecondary:"Mehr zu CollectPulse \u2192",ctaSecondaryUrl:"/solutions/collections"},deductions:{headline:"Abz\xFCge 6\xD7 schneller kl\xE4ren, bei 97 % Genauigkeit.",body:"Automatische Klassifizierung in sechs Kategorien. Graphbasierte Ursachenanalyse. Audit-Trail inklusive.",ctaPrimary:"Termin buchen",ctaPrimaryUrl:"/meeting",ctaSecondary:"Mehr zu ClaimIQ \u2192",ctaSecondaryUrl:"/solutions/deductions"},vero:{headline:"Ein KI-Agent f\xFCr Zahlungsabgleich, Abzugsmanagement, Forderungsmanagement und Liquidit\xE4tsplanung.",body:"Dauerhafter Kontext. Lernt Ihre Abl\xE4ufe mit der Zeit. L\xE4uft in Ihrer eigenen Cloud.",ctaPrimary:"Termin buchen",ctaPrimaryUrl:"/meeting",ctaSecondary:"Vero kennenlernen \u2192",ctaSecondaryUrl:"/solutions/vero-agent"},o2c:{headline:"Den gesamten Order-to-Cash-Zyklus auf einer KI-nativen Plattform abbilden.",body:"ClearMatch, ClaimIQ, CollectPulse, CashPulse. Orchestriert von Vero. Live in 4 bis 8 Wochen.",ctaPrimary:"Termin buchen",ctaPrimaryUrl:"/meeting",ctaSecondary:"L\xF6sungen ansehen \u2192",ctaSecondaryUrl:"/solutions"},"vendor-comparison":{headline:"Eine KI-native Alternative f\xFCr Umsetzung, nicht nur f\xFCr Reporting.",body:"Die meisten Debitorenmanagement-L\xF6sungen zeigen Erkenntnisse. Transformance handelt danach. Live in 4 bis 8 Wochen.",ctaPrimary:"Termin buchen",ctaPrimaryUrl:"/meeting",ctaSecondary:"L\xF6sungen ansehen \u2192",ctaSecondaryUrl:"/solutions"},default:{headline:"Ihre Debitorendaten in Ordnung bringen. Die Prognose stimmt dann von selbst.",body:"KI-native O2C-Automatisierung. Zahlungsabgleich, Abzugsmanagement, Forderungsmanagement, Liquidit\xE4tsplanung. Ein Agent, vier Produkte.",ctaPrimary:"Termin buchen",ctaPrimaryUrl:"/meeting",ctaSecondary:"L\xF6sungen ansehen \u2192",ctaSecondaryUrl:"/solutions"}},_={...S,name:"Paul Hanke, Gr\xFCnder"};function P(t){return p()?w[t]||w.default:c[t]||c.default}function k(){return p()?_:S}var h=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-variant","data-state","data-suppress-secondary"]}attributeChangedCallback(){this.shadowRoot.firstChild&&this._render()}connectedCallback(){this.hasAttribute("data-state")||this.setAttribute("data-state","hidden"),this._render()}show(){requestAnimationFrame(()=>{this.setAttribute("data-state","visible")})}hide(){this.setAttribute("data-state","hidden")}_render(){let e=this.getAttribute("data-variant")||"default",n=P(e),a=k(),i=this.getAttribute("data-suppress-secondary")==="true",u=`
      <style>${x}</style>
      <div class="card" role="dialog" aria-label="Talk to Transformance">
        <button class="x" aria-label="Dismiss" data-action="dismiss">\xD7</button>
        <div class="author">
          <div class="avatar">${a.imageUrl?`<img src="${o(a.imageUrl)}" alt="${o(a.imageAlt||"")}">`:"<span>PH</span>"}</div>
          <div class="author-meta">
            <span class="author-name">${o(a.name)}</span>
            <span class="author-role">${o(a.role)}</span>
          </div>
        </div>
        <h4 class="headline">${o(n.headline)}</h4>
        <p class="body">${o(n.body)}</p>
        <a class="cta-primary" href="${o(l(n.ctaPrimaryUrl||"/meeting"))}" data-action="cta-primary">${o(n.ctaPrimary)}</a>
        <a class="cta-secondary" href="${o(l(n.ctaSecondaryUrl||"/solutions"))}" data-action="cta-secondary"${i?" hidden":""}>${o(n.ctaSecondary)}</a>
      </div>
    `;this.shadowRoot.innerHTML=u,this.shadowRoot.querySelector('[data-action="dismiss"]').addEventListener("click",s=>{s.preventDefault(),this.dispatchEvent(new CustomEvent("tf-popup-dismiss",{bubbles:!0,composed:!0}))}),this.shadowRoot.querySelector('[data-action="cta-primary"]').addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("tf-popup-cta",{bubbles:!0,composed:!0,detail:{kind:"primary",href:l(n.ctaPrimaryUrl||"/meeting")}}))}),this.shadowRoot.querySelector('[data-action="cta-secondary"]').addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("tf-popup-cta",{bubbles:!0,composed:!0,detail:{kind:"secondary",href:l(n.ctaSecondaryUrl||"/solutions")}}))})}};function o(t){return String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}customElements.get("transformance-popup")||customElements.define("transformance-popup",h);var L="tf_popup_dismissed_",z=30*24*60*60*1e3,I=35,D=25*1e3,O={"/solutions/cash-flow-forecasting":"cash-forecast","/solutions/cash-application":"cash-app","/solutions/collections":"collections","/solutions/claims-and-deductions":"deductions","/solutions/deductions":"deductions","/solutions/vero-agent":"vero","/solutions":"o2c"},A={"cash-forecasting":"cash-forecast","cash-flow-forecasting":"cash-forecast","cash-flow":"cash-forecast",forecasting:"cash-forecast","cash-application":"cash-app","cash-app":"cash-app",collections:"collections",collection:"collections","ar-collections":"collections",deductions:"deductions",deduction:"deductions",claims:"deductions","claims-and-deductions":"deductions",vero:"vero",o2c:"o2c","order-to-cash":"o2c","order-to-cash-broad":"o2c","general-o2c":"o2c","invoice-to-cash":"o2c","ar-automation":"o2c","ai-in-finance":"o2c","ai-finance":"o2c","vendor-comparison":"vendor-comparison","vendor-comparisons":"vendor-comparison",comparisons:"vendor-comparison",competitors:"vendor-comparison"};function U(t){if(!t)return null;let e=String(t).trim().toLowerCase().replace(/\s+/g,"-");return c[e]?e:A[e]?A[e]:null}function M(t){return t?/^ar-cash-forecasting|^13-week|cash-flow-forecast|automated-cash-flow|why-are-most-cash-flow/.test(t)?"cash-forecast":/cash-application|cash-app|payment-reconciliation|auto-cash/.test(t)?"cash-app":/collections|dunning|reducing-dso|best-tools-for-reducing-dso/.test(t)?"collections":/deduction|claim|partial-payments/.test(t)?"deductions":/highradius|billtrust|blackline|competitors|alternatives|kyriba|tesorio/.test(t)?"vendor-comparison":/order-to-cash|o2c|invoice-to-cash|accounts-receivable-automation|what-is-order/.test(t)?"o2c":"default":"default"}function R(){let t=f(window.location.pathname.replace(/\/+$/,""));for(let[e,n]of Object.entries(O))if(t===e)return{variant:n,kind:"solution",slug:e};if(t.startsWith("/blog-posts/")){let e=document.querySelector('meta[name="tf-blog-category"]'),n=U(e&&e.getAttribute("content")),a=t.split("/").pop()||"";return{variant:n||M(a),kind:"blog",slug:a}}if(t.startsWith("/glossary/")&&t!=="/glossary"){let e=document.querySelector('meta[name="tf-glossary-cluster"]'),n=U(e&&e.getAttribute("content")),a=t.split("/").pop()||"";return{variant:n||"default",kind:"glossary",slug:a}}return null}function V(t){try{let e=localStorage.getItem(L+t);if(!e)return!1;let n=Number(e);return Number.isFinite(n)&&Date.now()-n<z}catch{return!1}}function H(t){try{localStorage.setItem(L+t,String(Date.now()))}catch{}}function g(t,e){try{window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:t,...e})}catch{}}function F(){return document.querySelector("article")||document.querySelector('[role="main"]')||document.querySelector("main")||document.body}function $(t){let e=t.getBoundingClientRect(),n=t===document.body?document.documentElement.scrollHeight:t.scrollHeight,a=window.innerHeight,i=window.scrollY-(t.offsetTop||0);return n<=a?100:(i+a)/n*100}var C=!1,q=(()=>{try{return/[?&]tf_debug=1/.test(window.location.search)||localStorage.getItem("tf_popup_debug")==="1"}catch{return!1}})();function d(...t){q&&console.log("[tf-popup]",...t)}function y(){if(C)return;C=!0,d("installPopup() called",{path:window.location.pathname});let t=R();if(!t){d("no ctx \u2014 exiting (not a blog or solution page)");return}if(d("resolved ctx",t),V(t.variant)){d("dismissed within 30 days \u2014 exiting",{key:"tf_popup_dismissed_"+t.variant});return}let e=c[t.variant]||c.default,n=e&&e.ctaSecondaryUrl&&f(window.location.pathname.replace(/\/+$/,""))===e.ctaSecondaryUrl.replace(/\/+$/,""),a=document.createElement("transformance-popup");a.setAttribute("data-variant",t.variant),a.setAttribute("data-state","hidden"),n&&a.setAttribute("data-suppress-secondary","true"),document.body.appendChild(a);let i=!1,u=0,s,m,b=r=>{i||(i=!0,u=Date.now(),T(),a.show(),d("popup shown",{source:r,variant:t.variant}),g("popup_shown",{variant:t.variant,slug:t.slug,kind:t.kind,trigger:r}))},T=()=>{s&&(window.removeEventListener("scroll",s,{passive:!0}),s=null),m&&(clearTimeout(m),m=null)},E=F(),v=0;s=()=>{let r=Date.now();r-v<100||(v=r,$(E)>=I&&b("scroll"))},window.addEventListener("scroll",s,{passive:!0}),m=setTimeout(()=>b("timer"),D),a.addEventListener("tf-popup-dismiss",()=>{a.hide(),H(t.variant),g("popup_dismissed",{variant:t.variant,slug:t.slug,time_visible_ms:Date.now()-u}),setTimeout(()=>a.remove(),400)}),a.addEventListener("tf-popup-cta",r=>{g("popup_cta_clicked",{variant:t.variant,slug:t.slug,cta:r.detail.kind,target_url:r.detail.href})})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",y,{once:!0}):y();})();
