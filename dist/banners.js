(()=>{var f=`
:host{
  --tf-canvas:#f6f1ea;
  --tf-canvas-2:#efe6da;
  --tf-ink:#0a0a0a;
  --tf-ink70:rgba(10,10,10,0.7);
  --tf-ink60:rgba(10,10,10,0.6);
  --tf-ink10:rgba(10,10,10,0.08);
  --tf-white:#fff;
  --tf-coral:#FF5043;
  --tf-orange:#FF8308;
  --tf-blue:#392BD5;
  --tf-grad:linear-gradient(90deg,#FF8308 0%,#FF5043 55%,#392BD5 100%);
  --tf-font:"Geist",-apple-system,system-ui,sans-serif;
  --tf-mono:"Geist Mono",ui-monospace,"SF Mono",Menlo,monospace;
  display:block;
  margin:32px auto;
  max-width:1100px;
}
.tfb{
  position:relative;
  display:flex;flex-direction:column;
  background:
    radial-gradient(ellipse 480px 320px at 8% 10%, rgba(255,131,8,0.10) 0%, transparent 60%),
    radial-gradient(ellipse 520px 360px at 95% 95%, rgba(57,43,213,0.08) 0%, transparent 60%),
    linear-gradient(160deg, var(--tf-canvas) 0%, var(--tf-canvas-2) 100%);
  border:1px solid var(--tf-ink10);
  padding:36px;
  border-radius:16px;
  font-family:var(--tf-font);
  color:var(--tf-ink);
  box-sizing:border-box;
  box-shadow:
    0 1px 2px rgba(10,10,10,0.04),
    0 12px 32px -8px rgba(10,10,10,0.08),
    inset 0 1px 0 rgba(255,255,255,0.5);
  overflow:hidden;
}
.tfb *,.tfb *::before,.tfb *::after{box-sizing:border-box}
.tfb__header{margin-bottom:28px}
.tfb__eyebrow{
  display:inline-block;
  font-family:var(--tf-mono);
  font-size:11px;font-weight:500;
  letter-spacing:0.10em;text-transform:uppercase;
  color:var(--tf-ink70);
  background:rgba(10,10,10,0.04);
  border:1px solid var(--tf-ink10);
  border-radius:999px;
  padding:6px 12px;
  margin-bottom:14px;
}
.tfb__headline{
  font-size:clamp(24px,2.4vw,32px);
  font-weight:600;
  letter-spacing:-0.02em;
  line-height:1.12;
  margin:0;
  max-width:800px;
}
.tfb__grad{
  background:var(--tf-grad);
  -webkit-background-clip:text;background-clip:text;
  -webkit-text-fill-color:transparent;
  color:transparent;
  display:inline;
}
.tfb__body{
  display:grid;
  /* Image column caps at 320px so the product mockup doesn't dominate at
     blog content widths (~600-800px). Text/claims/CTA get the rest. */
  grid-template-columns:minmax(0,320px) minmax(0,1fr);
  gap:32px;
  align-items:center;
}
/* Single-column layout when no image is provided */
.tfb__body.tfb__body--no-image{
  grid-template-columns:1fr;
}
.tfb__shot{width:100%;border-radius:12px;overflow:hidden}
.tfb__shot img{width:100%;height:auto;max-height:260px;display:block;object-fit:contain}
.tfb__right{display:flex;flex-direction:column;gap:24px;min-width:0}
.tfb__claims{
  list-style:none;padding:0;margin:0;
  display:flex;flex-direction:column;gap:21px;
}
.tfb__claims li{
  display:flex;align-items:center;gap:14px;
  font-size:17.5px;font-weight:500;
  letter-spacing:-0.005em;line-height:1.4;
  color:var(--tf-ink);
}
.tfb__icon{
  width:22px;height:22px;flex-shrink:0;
  stroke:currentColor;opacity:0.75;
  fill:none;stroke-width:2;
  stroke-linecap:round;stroke-linejoin:round;
}
.tfb__cta{
  display:inline-flex;align-items:center;gap:8px;
  padding:12px 22px;border-radius:999px;
  background:var(--tf-grad);
  background-size:200% 100%;
  background-position:0% 50%;
  color:#fff;
  font-family:var(--tf-font);
  font-size:14px;font-weight:500;
  letter-spacing:-0.005em;
  text-decoration:none;border:0;
  line-height:1;width:fit-content;
  box-shadow:0 6px 16px -4px rgba(255,80,67,0.35),0 1px 2px rgba(10,10,10,0.08);
  transition:background-position 0.3s ease,transform 0.15s ease,box-shadow 0.2s ease;
}
.tfb__cta:hover{background-position:100% 50%;transform:translateY(-1px);box-shadow:0 10px 22px -4px rgba(255,80,67,0.45),0 2px 4px rgba(10,10,10,0.1)}
.tfb__cta-arrow{display:inline-block}
@media (max-width:760px){
  .tfb{padding:22px}
  .tfb__body{grid-template-columns:1fr;gap:22px}
  .tfb__header{margin-bottom:18px}
  .tfb__headline{font-size:20px}
  .tfb__claims li{font-size:15px}
}
`;var p=()=>location.pathname.startsWith("/de/")||location.pathname==="/de";var b={"cash-app":{eyebrow:"PRODUCT \xB7 CLEARMATCH",headline:"Cash application that matches payments to invoices, <grad>without templates.</grad>",claims:[{icon:"sparkles",text:">95% extraction accuracy out of the box"},{icon:"chart-up",text:">90% straight-through processing (STP)"},{icon:"check-circle",text:"Deploy in 4-8 weeks, not 4-8 months"}],ctaText:"See ClearMatch",href:"/solutions/cash-application",imageUrl:"https://cdn.prod.website-files.com/684931abb239b84984296d93/69df9ed7814b30f551626c60_e57293d5e53a3981daeaa229a2ec9fad_card-cash-app.avif",imageAlt:"ClearMatch cash application dashboard"},collections:{eyebrow:"PRODUCT \xB7 COLLECTPULSE",headline:"Collections agents that <grad>actually call</grad> - in 30+ languages.",claims:[{icon:"phone",text:"Autonomous AI calling agent in 30+ languages"},{icon:"chart-up",text:"Cut DSO without growing the team"},{icon:"brain",text:"Vero remembers every customer interaction"}],ctaText:"See CollectPulse",href:"/solutions/collections",imageUrl:"https://cdn.prod.website-files.com/684931abb239b84984296d93/69df9effac59f55ed2162c5c_89904a67e2dbf13e9bdb59df36357cc2_card-collections.avif",imageAlt:"CollectPulse collections dashboard"},deductions:{eyebrow:"PRODUCT \xB7 CLAIMIQ",headline:"Deductions resolution from <grad>investigation to recovery.</grad>",claims:[{icon:"sparkles",text:"AI drives investigations where rules hit a wall"},{icon:"chart-up",text:"Recovery rates >85% on autopilot"},{icon:"receipt",text:"Trade promo, chargebacks, disputes in one queue"}],ctaText:"See ClaimIQ",href:"/solutions/deductions",imageUrl:"https://cdn.prod.website-files.com/684931abb239b84984296d93/69df9f1d00e7328a348be73d_641b78d95aecfce017fced10a3f3b5e4_card-ded-dash.avif",imageAlt:"ClaimIQ deductions dashboard"},"cash-forecast":{eyebrow:"PRODUCT \xB7 CASHPULSE",headline:"Net cash forecasting from <grad>real AR + AP data,</grad> not bank-balance history.",claims:[{icon:"clock",text:"Multi-horizon: 13-week, quarterly, full-year"},{icon:"chart-up",text:"90-95% accurate with confidence ranges, not point guesses"},{icon:"wallet",text:"Real AR + AP data, not historical bank balances"}],ctaText:"See CashPulse",href:"/solutions/cash-flow-forecasting",imageUrl:"https://cdn.prod.website-files.com/684931abb239b84984296d93/69df9feacd0cbc06fa2894ef_1070a6ecf388ba7555d1f167ef194969_card-cashpulse.avif",imageAlt:"CashPulse cash flow forecast with 13-week prediction"},vero:{eyebrow:"AGENT \xB7 VERO",headline:"Vero is the AI agent <grad>that remembers everything.</grad>",claims:[{icon:"brain",text:"Customer 360: every customer detail, including ops hidden in emails + spreadsheets"},{icon:"sparkles",text:"Acts autonomously within your rules + security policies"},{icon:"layers",text:"Works across cash app, collections, deductions, forecasting"}],ctaText:"Meet Vero",href:"/solutions/vero-agent",imageUrl:"https://cdn.prod.website-files.com/684931abb239b84984296d93/69dfa29f0775fd254511fbd0_fbbe4ebdc1f2e22cbb6b2a6f0819e1cd_card-vero.avif",imageAlt:"Vero AI agent dashboard"},"dso-calc":{eyebrow:"FREE TOOL \xB7 DSO CALCULATOR",eyebrowColor:"#ff5043",headline:"See exactly how much cash <grad>your DSO is trapping.</grad>",claims:[{icon:"calculator",text:"Plug in revenue + AR, get your DSO in seconds"},{icon:"chart-up",text:"Run your numbers + scenarios to see impact live"},{icon:"dollar",text:"See trapped cash in dollars, not just days"}],ctaText:"Open the calculator",href:"/tools/dso-calculator",imageUrl:"https://cdn.prod.website-files.com/684931abb239b84984296d93/69eb8c31e3a4b8fa9eba9a77_dso-excel-preview-1.png",imageAlt:"DSO calculator preview"},"cf-template":{eyebrow:"FREE TOOL \xB7 13-WEEK CALCULATOR",eyebrowColor:"#ff5043",headline:"See your runway and tightest week, <grad>in seconds.</grad>",claims:[{icon:"clock",text:"Live runway + tightest week"},{icon:"dollar",text:'"Pay 5 days faster" what-if slider'},{icon:"globe",text:"Top-10 currencies supported"}],ctaText:"Open the calculator",href:"/tools/cash-flow-forecasting-tool",imageUrl:"https://cdn.prod.website-files.com/684931abb239b84984296d93/69ed0d37c19ca8bf38192eee_cash-forecast-excel-preview-1.png",imageAlt:"13-week cash flow forecast template preview"},demo:{eyebrow:"BOOK A CALL",headline:"30 minutes to see if <grad>Transformance fits</grad> your O2C.",claims:[{icon:"clock",text:"30 minutes with a finance ops specialist"},{icon:"sparkles",text:"Open conversation about your O2C challenges + bottlenecks"},{icon:"check-circle",text:"We walk through how we help companies like yours"}],ctaText:"Book a Call",href:"/meeting",imageUrl:"https://cdn.prod.website-files.com/684931abb239b84984296d93/68494720f0211b2372893faf_Profile%20Picture.avif",imageAlt:"Paul Hanke, Co-Founder of Transformance"}},a="https://cdn.prod.website-files.com/684931abb239b84984296d93/",g={"cash-app":{eyebrow:"PRODUKT \xB7 CLEARMATCH",headline:"Cash Application, die Zahlungen den Rechnungen zuordnet, <grad>ganz ohne manuelle Nacharbeit.</grad>",claims:[{icon:"sparkles",text:">95 % Extraktionsgenauigkeit, standardm\xE4\xDFig"},{icon:"chart-up",text:">90 % Dunkelverarbeitung (STP)"},{icon:"check-circle",text:"Einsatzbereit in 4 bis 8 Wochen statt 4 bis 8 Monaten"}],ctaText:"ClearMatch ansehen",href:"/de/solutions/cash-application",imageUrl:a+"6a575eee8943ea0f7c4b6925_platform-cash-application-de.avif",imageAlt:"ClearMatch Cash-Application-Dashboard"},collections:{eyebrow:"PRODUKT \xB7 COLLECTPULSE",headline:"Collections-Agenten, die <grad>wirklich anrufen</grad>, in \xFCber 30 Sprachen.",claims:[{icon:"phone",text:"Autonomer KI-Telefonagent in \xFCber 30 Sprachen"},{icon:"chart-up",text:"DSO senken, ohne das Team zu vergr\xF6\xDFern"},{icon:"brain",text:"Vero merkt sich jede Kundeninteraktion"}],ctaText:"CollectPulse ansehen",href:"/de/solutions/collections",imageUrl:a+"6a575ef0afd1f079e1d378a9_collections-dashboard-de.avif",imageAlt:"CollectPulse Forderungsmanagement-Dashboard"},deductions:{eyebrow:"PRODUKT \xB7 CLAIMIQ",headline:"Abz\xFCge kl\xE4ren, von der <grad>Untersuchung bis zur R\xFCckforderung.</grad>",claims:[{icon:"sparkles",text:"KI treibt Untersuchungen voran, wo Regeln an Grenzen sto\xDFen"},{icon:"chart-up",text:"R\xFCckforderungsquoten \xFCber 85 %, vollautomatisch"},{icon:"receipt",text:"Trade-Promo, R\xFCckbelastungen, Streitf\xE4lle in einer Queue"}],ctaText:"ClaimIQ ansehen",href:"/de/solutions/deductions",imageUrl:a+"6a575ef3022891107fc48753_deductions-dashboard-de.avif",imageAlt:"ClaimIQ Abzugsmanagement-Dashboard"},"cash-forecast":{eyebrow:"PRODUKT \xB7 CASHPULSE",headline:"Netto-Cashflow-Prognose aus <grad>echten Debitoren- und Kreditorendaten,</grad> nicht aus Kontostandshistorie.",claims:[{icon:"clock",text:"Mehrere Horizonte: 13 Wochen, Quartal, Gesamtjahr"},{icon:"chart-up",text:"90 bis 95 % Genauigkeit mit Konfidenzb\xE4ndern statt Punktsch\xE4tzungen"},{icon:"wallet",text:"Echte Debitoren- und Kreditorendaten, keine historischen Kontost\xE4nde"}],ctaText:"CashPulse ansehen",href:"/de/solutions/cash-flow-forecasting",imageUrl:a+"69df9feacd0cbc06fa2894ef_1070a6ecf388ba7555d1f167ef194969_card-cashpulse.avif",imageAlt:"CashPulse Cashflow-Prognose mit 13-Wochen-Vorhersage"},vero:{eyebrow:"AGENT \xB7 VERO",headline:"Vero ist der KI-Agent, <grad>der sich alles merkt.</grad>",claims:[{icon:"brain",text:"Customer 360: jedes Kundendetail, auch Vorg\xE4nge, die in E-Mails und Tabellen verborgen sind"},{icon:"sparkles",text:"Handelt autonom im Rahmen Ihrer Regeln und Sicherheitsrichtlinien"},{icon:"layers",text:"Funktioniert \xFCber Cash Application, Collections, Abz\xFCge und Prognose hinweg"}],ctaText:"Vero kennenlernen",href:"/de/solutions/vero-agent",imageUrl:a+"69dfa29f0775fd254511fbd0_fbbe4ebdc1f2e22cbb6b2a6f0819e1cd_card-vero.avif",imageAlt:"Vero KI-Agent-Dashboard"},"dso-calc":{eyebrow:"GRATIS-TOOL \xB7 DSO-RECHNER",eyebrowColor:"#ff5043",headline:"Sehen Sie genau, wie viel Liquidit\xE4t <grad>Ihr DSO bindet.</grad>",claims:[{icon:"calculator",text:"Umsatz und Forderungen eingeben, DSO in Sekunden erhalten"},{icon:"chart-up",text:"Zahlen und Szenarien durchrechnen, Wirkung live sehen"},{icon:"dollar",text:"Gebundene Liquidit\xE4t in Euro sehen, nicht nur in Tagen"}],ctaText:"Rechner \xF6ffnen",href:"/de/tools/dso-calculator",imageUrl:a+"69eb8c31e3a4b8fa9eba9a77_dso-excel-preview-1.png",imageAlt:"Vorschau DSO-Rechner"},"cf-template":{eyebrow:"GRATIS-TOOL \xB7 13-WOCHEN-RECHNER",eyebrowColor:"#ff5043",headline:"Sehen Sie Ihre Liquidit\xE4tsreichweite und knappste Woche, <grad>in Sekunden.</grad>",claims:[{icon:"clock",text:"Live-Reichweite und knappste Woche"},{icon:"dollar",text:'Was-w\xE4re-wenn-Regler \u201E5 Tage fr\xFCher zahlen"'},{icon:"globe",text:"Top-10-W\xE4hrungen unterst\xFCtzt"}],ctaText:"Rechner \xF6ffnen",href:"/de/tools/cash-flow-forecasting-tool",imageUrl:a+"69ed0d37c19ca8bf38192eee_cash-forecast-excel-preview-1.png",imageAlt:"Vorschau 13-Wochen-Cashflow-Prognosevorlage"},demo:{eyebrow:"TERMIN BUCHEN",headline:"30 Minuten, um zu sehen, ob <grad>Transformance zu Ihrem Debitorenmanagement (O2C) passt.</grad>",claims:[{icon:"clock",text:"30 Minuten mit einem Finance-Ops-Spezialisten"},{icon:"sparkles",text:"Offenes Gespr\xE4ch \xFCber Ihre O2C-Herausforderungen und Engp\xE4sse"},{icon:"check-circle",text:"Wir zeigen, wie wir Unternehmen wie Ihres unterst\xFCtzen"}],ctaText:"Termin buchen",href:"/de/meeting",imageUrl:a+"68494720f0211b2372893faf_Profile%20Picture.avif",imageAlt:"Paul Hanke, Mitgr\xFCnder von Transformance"}};function u(e){return p()&&g[e]?g[e]:b[e]||null}function m(){return Object.keys(b)}var x={clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',"chart-up":'<path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/>',dollar:'<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',"check-circle":'<circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',zap:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',globe:'<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',sparkles:'<path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/><path d="M19 13l.75 2.25L22 16l-2.25.75L19 19l-.75-2.25L16 16l2.25-.75L19 13z"/>',calculator:'<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="8" y2="10"/><line x1="12" y1="10" x2="12" y2="10"/><line x1="16" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="8" y2="14"/><line x1="12" y1="14" x2="12" y2="14"/><line x1="16" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="8" y2="18"/><line x1="12" y1="18" x2="12" y2="18"/><line x1="16" y1="18" x2="16" y2="18"/>',phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>',receipt:'<path d="M16 2H8a2 2 0 0 0-2 2v18l3-2 3 2 3-2 3 2V4a2 2 0 0 0-2-2z"/><line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="15" y2="11"/>',wallet:'<path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2"/><path d="M21 12V7H6a2 2 0 0 1 0-4h13"/>',brain:'<path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0 0 8v3a4 4 0 1 0 8 0v-3a4 4 0 0 0 0-8V6a4 4 0 0 0-4-4z"/>'};function y(e){return`<svg class="tfb__icon" viewBox="0 0 24 24">${x[e]||x["check-circle"]}</svg>`}function S(e){return String(e).replace(/<grad>([\s\S]*?)<\/grad>/gi,'<span class="tfb__grad">$1</span>')}function o(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var l=class extends HTMLElement{connectedCallback(){this._mounted||(this._mounted=!0,this._render())}static get observedAttributes(){return["data-topic","data-headline","data-cta-text","data-href","data-image-url","data-image-alt"]}attributeChangedCallback(){this._mounted&&this._render()}_render(){let r=this.dataset.topic,t=u(r);if(!t){console.warn(`[transformance-banner] Unknown topic "${r}". Available: ${m().join(", ")}`),this.style.display="none";return}let c=this.dataset.headline||t.headline,i=this.dataset.ctaText||t.ctaText,s=this.dataset.href||t.href,n=this.dataset.imageUrl||t.imageUrl,v=this.dataset.imageAlt||t.imageAlt||`${t.eyebrow} preview`,k=t.eyebrowColor?` style="color:${o(t.eyebrowColor)}"`:"",d=(t.claims||[]).map(h=>`<li>${y(h.icon)}<span>${h.text}</span></li>`).join(""),C=S(c),T=n?`
        <div class="tfb__shot">
          <img src="${o(n)}" alt="${o(v)}" loading="lazy" decoding="async"/>
        </div>
        <div class="tfb__right">
          <ul class="tfb__claims">${d}</ul>
          <a class="tfb__cta" href="${o(s)}">${i} <span class="tfb__cta-arrow">\u2192</span></a>
        </div>`:`
        <div class="tfb__right">
          <ul class="tfb__claims">${d}</ul>
          <a class="tfb__cta" href="${o(s)}">${i} <span class="tfb__cta-arrow">\u2192</span></a>
        </div>`,A=n?"tfb__body":"tfb__body tfb__body--no-image";this.shadowRoot||this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
      <style>${f}</style>
      <div class="tfb">
        <div class="tfb__header">
          <div class="tfb__eyebrow"${k}>${t.eyebrow}</div>
          <h3 class="tfb__headline">${C}</h3>
        </div>
        <div class="${A}">${T}</div>
      </div>
    `}};customElements.get("transformance-banner")||customElements.define("transformance-banner",l);var O=/^\s*\[tf-banner:\s*([a-z0-9-]+)\s*\]\s*$/i;function w(e){if(!e)return;e.querySelectorAll("p").forEach(t=>{let c=(t.textContent||"").trim(),i=O.exec(c);if(!i)return;let s=i[1].toLowerCase(),n=document.createElement("transformance-banner");n.setAttribute("data-topic",s),t.replaceWith(n)})}function _(){let e=document.querySelectorAll(".w-richtext");if(!e.length){w(document.body);return}e.forEach(w)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",_):_();})();
