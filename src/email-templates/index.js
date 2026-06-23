/**
 * <transformance-email-templates> custom element.
 *
 * Renders a set of copy-paste email templates as inbox-style preview cards,
 * each with Copy + open-in-(Mail/Outlook/Gmail) actions, plus a gradient
 * "Download all (.docx)" CTA top and bottom.
 *
 * Usage (Webflow rich-text HTML embed, sanitizer-safe — no <script>, no children needed):
 *
 *   <transformance-email-templates data-set="dunning"
 *       data-docx="https://.../dunning-email-templates.docx"></transformance-email-templates>
 *
 * Template sets are baked into the bundle (like tour configs) so the markup
 * stays a single sanitizer-proof tag. Everything renders in Shadow DOM, so the
 * email cards are ALWAYS light/white regardless of the reader's page theme — a
 * previewed email must look like a real email.
 */

const DUNNING = [
  {"name":"Pre-Due Reminder","day":"Day -3","subject":"Friendly reminder: Invoice [INV-####] due [Due Date]","body":"Hi [First Name],\n\nJust a quick note that Invoice [INV-####] for [Amount] is due on [Due Date]. Please let us know if you have any questions or need the invoice resent.\n\nThank you,\n[Your Name]\n[Company] | Accounts Receivable"},
  {"name":"First Reminder","day":"Day 1-3 Past Due","subject":"Invoice [INV-####] is now past due","body":"Hi [First Name],\n\nInvoice [INV-####] for [Amount] was due on [Due Date] and doesn't appear to have been settled yet. If payment has already been sent, please disregard this message.\n\nIf not, a quick update on expected timing would be appreciated. You can reach us at [email] or [phone].\n\nThank you,\n[Your Name]\n[Company] | Accounts Receivable"},
  {"name":"Second Notice","day":"Day 8-14 Past Due","subject":"Second notice: Invoice [INV-####] outstanding [X] days","body":"Hi [First Name],\n\nWe're following up on Invoice [INV-####] for [Amount], now [X] days overdue. We haven't received payment or a response to our earlier message.\n\nPlease confirm payment status or let us know if there's a question about this invoice. Continued delay may affect your credit terms with us.\n\n[Your Name]\n[Company] | Accounts Receivable"},
  {"name":"Firm Notice","day":"Day 15-30 Past Due","subject":"Urgent: Invoice [INV-####] requires immediate attention","body":"Dear [First Name],\n\nInvoice [INV-####] for [Amount] is now [X] days past due. This is our [X]th attempt to contact you about this balance.\n\nPer our agreed payment terms, we require payment by [Response Deadline] to avoid a formal escalation, which may include a credit hold or referral to our collections team. Please contact us immediately to arrange payment or flag any dispute.\n\n[Your Name]\n[Company] | Accounts Receivable\n[Direct contact]"},
  {"name":"Escalation Notice","day":"Day 31-45 Past Due","subject":"Final notice before escalation: Invoice [INV-####]","body":"Dear [First Name],\n\nDespite multiple attempts to contact you, Invoice [INV-####] for [Amount] remains unpaid at [X] days past due.\n\nEffective immediately, your account has been placed on credit hold. No new orders will be processed until this balance is resolved. If we do not receive payment or a written payment proposal by [Response Deadline], this balance will be referred to [our legal team / a third-party collections agency].\n\nTo resolve this matter, contact [Name] at [email/phone] today.\n\n[Your Name]\n[Company] | Accounts Receivable"},
  {"name":"Final Demand","day":"Day 46+","subject":"Final demand: Invoice [INV-####], [Amount] outstanding","body":"Dear [First Name],\n\nThis is a formal final demand for payment of Invoice [INV-####] in the amount of [Amount], now [X] days outstanding.\n\nThis balance will be forwarded to [our legal counsel / a collections agency] on [Response Deadline] if full payment or a signed payment plan is not received by that deadline. Additional recovery costs may be added.\n\nTo avoid further action, contact [Name] at [email/phone] immediately.\n\n[Your Name]\n[Company] | Accounts Receivable"}
];
const SETS = { dunning: DUNNING };

const IC = {
  gmail: '<svg viewBox="0 49.4 512 399.42"><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><path fill="#4285f4" d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"/><path fill="#34a853" d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"/><path fill="#fbbc04" d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"/></g><path fill="#ea4335" d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"/><path fill="#c5221f" fill-rule="nonzero" d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"/></g></svg>',
  outlook: '<svg viewBox="0 0 24 24"><rect x="2.5" y="4.5" width="19" height="15" rx="3.2" fill="#0F6CBD"/><circle cx="12" cy="12" r="4.6" fill="none" stroke="#fff" stroke-width="2.1"/></svg>',
  mail: '<svg viewBox="0 0 24 24"><rect x="2.5" y="5" width="19" height="14" rx="2.4" fill="none" stroke="#0EA5A5" stroke-width="1.9"/><path d="M3.5 7l8.5 6 8.5-6" fill="none" stroke="#0EA5A5" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  dl: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16"/></svg>'
};

const STYLES = `
:host{display:block;color-scheme:light;font-family:"Geist","Geist Fallback",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
  --ink:#0A0A0A;--mut:#5F5E5A;--green:#0E9F73;--teal:#0EA5A5;--line:rgba(10,10,10,.10)}
*{box-sizing:border-box}
.wrap{margin:14px 0}
.dl{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;text-decoration:none;cursor:pointer;
  color:#fff;font-weight:600;font-size:15.5px;padding:15px 22px;border-radius:14px;border:0;font-family:inherit;
  background:linear-gradient(135deg,#0E9F73 0%,#0EA5A5 55%,#1FB8C4 100%);
  box-shadow:0 10px 26px rgba(14,159,115,.30);transition:transform .14s ease,box-shadow .14s ease}
.dl:hover{transform:translateY(-2px);box-shadow:0 16px 36px rgba(14,159,115,.42)}
.dl svg{width:19px;height:19px;flex:none}
.tmpl{background:#fff;border:1px solid var(--line);border-radius:16px;margin:16px 0;overflow:hidden;
  box-shadow:0 1px 2px rgba(10,10,10,.04),0 8px 24px rgba(10,10,10,.06);color:var(--ink)}
.head{display:flex;align-items:center;gap:10px;padding:13px 18px;background:linear-gradient(180deg,#fbfbf9,#f3f2ee);border-bottom:1px solid var(--line)}
.bucket{font-weight:600;font-size:15px}
.day{font-size:11.5px;background:rgba(14,159,115,.10);color:#0b7d5b;padding:3px 10px;border-radius:20px;font-weight:600;letter-spacing:.01em}
.mail{padding:8px 18px 2px;background:#fff}
.mrow{display:flex;gap:10px;font-size:13px;padding:6px 0;border-bottom:1px dashed rgba(10,10,10,.08)}
.mrow .ml{color:var(--mut);width:60px;flex:none}
.mrow .mv{color:#1b1b1a}
.mrow.subj .mv{font-weight:600}
.body{white-space:pre-wrap;font-size:14px;color:#1b1b1a;padding:14px 2px 16px;line-height:1.62;background:#fff}
.acts{display:flex;gap:8px;flex-wrap:wrap;padding:0 16px 16px;background:#fff}
.btn{font:inherit;font-size:13px;font-weight:600;padding:8px 13px;border-radius:10px;cursor:pointer;text-decoration:none;
  display:inline-flex;align-items:center;gap:7px;border:1px solid var(--line);background:#fff;color:var(--ink)}
.btn:hover{background:#f3f2ee}
.btn.copy{background:var(--green);color:#fff;border-color:var(--green)}
.btn.copy:hover{background:#0b8a64}
.btn.copy.done{background:#0b7d5b}
.btn svg{width:16px;height:16px;flex:none}
.toast{position:fixed;left:50%;bottom:24px;transform:translateX(-50%) translateY(16px);opacity:0;pointer-events:none;
  background:#0A0A0A;color:#fff;font-size:13px;padding:10px 16px;border-radius:10px;transition:.2s;z-index:2147483000}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
@media(max-width:520px){.acts .btn{flex:1 1 auto;justify-content:center}}
`;

function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function enc(s){return encodeURIComponent(s);}

class TransformanceEmailTemplates extends HTMLElement {
  connectedCallback(){ if(this._m) return; this._m=true; this._render(); }
  _render(){
    const items = SETS[(this.dataset.set||'dunning')];
    if(!items || !items.length){ this.style.display='none'; return; }
    const docx = this.dataset.docx || '';
    const cta = docx
      ? `<a class="dl" href="${esc(docx)}" download>${IC.dl} Download all ${items.length} templates (.docx)</a>` : '';
    const cards = items.map((t,i)=>{
      const s=enc(t.subject), b=enc(t.body);
      const mailto=`mailto:?subject=${s}&body=${b}`;
      const otlk=`https://outlook.office.com/mail/deeplink/compose?subject=${s}&body=${b}`;
      const gml=`https://mail.google.com/mail/?view=cm&fs=1&su=${s}&body=${b}`;
      return `<div class="tmpl">
        <div class="head"><span class="bucket">${esc(t.name)}</span><span class="day">${esc(t.day)}</span></div>
        <div class="mail">
          <div class="mrow"><span class="ml">To</span><span class="mv">[First Name] &lt;customer@company.com&gt;</span></div>
          <div class="mrow subj"><span class="ml">Subject</span><span class="mv">${esc(t.subject)}</span></div>
          <div class="body">${esc(t.body)}</div>
        </div>
        <div class="acts">
          <button class="btn copy" data-i="${i}">Copy text</button>
          <a class="btn" target="_blank" rel="noopener" href="${mailto}">${IC.mail}Mail</a>
          <a class="btn" target="_blank" rel="noopener" href="${otlk}">${IC.outlook}Outlook</a>
          <a class="btn" target="_blank" rel="noopener" href="${gml}">${IC.gmail}Gmail</a>
        </div></div>`;
    }).join('');
    const sr = this.attachShadow({mode:'open'});
    sr.innerHTML = `<style>${STYLES}</style><div class="wrap">${cta}${cards}${cta}</div><div class="toast"></div>`;
    const toast = sr.querySelector('.toast');
    const flash = (m)=>{ toast.textContent=m; toast.classList.add('show'); setTimeout(()=>toast.classList.remove('show'),1400); };
    sr.querySelectorAll('.btn.copy').forEach(btn=>{
      btn.addEventListener('click',()=>{
        const t=items[+btn.dataset.i];
        navigator.clipboard.writeText(t.subject+"\n\n"+t.body).then(()=>{
          btn.textContent='Copied'; btn.classList.add('done'); flash('Copied to clipboard');
          setTimeout(()=>{btn.textContent='Copy text'; btn.classList.remove('done');},1600);
        });
      });
    });
  }
}
if(!customElements.get('transformance-email-templates'))
  customElements.define('transformance-email-templates', TransformanceEmailTemplates);
