(function(){
var S='.ps-mockup>transformance-story,.hero-anim-right>transformance-story';
function fit(h){
var c=h.parentElement;if(!c)return;
var cw=c.clientWidth,w=parseFloat(getComputedStyle(h).width);
if(!cw||!w)return;
var s=cw/w,t='scale('+s.toFixed(4)+')';
if(h.style.transform!==t)h.style.transform=t;
/* The container's aspect-ratio reserves space BEFORE the card mounts, which is
   what keeps the late mount from shifting the page. Once the card exists we
   replace that estimate with its real scaled height, so a slightly wrong ratio
   costs a few pixels of correction rather than a broken box. */
var k=h.shadowRoot&&h.shadowRoot.querySelector('.bg-white.rounded-2xl');
if(!k)return;
var ch=Math.round(k.getBoundingClientRect().height)+'px';
if(c.style.height===ch)return;
/* Kill the ratio in the SAME breath as writing the height. A box that still
   carries aspect-ratio derives its WIDTH from an explicit height, so writing
   height here would shrink the column, which shrinks the scale, which shortens
   the card, which writes a smaller height - a runaway collapse that only holds
   still when the declared ratio happens to equal the card's true one. It rots
   silently too: the spill check measures the card against this same container,
   so both shrink together and a card that has imploded to 56x36 still reports
   zero spill. Ratio is a pre-mount reserve and nothing more. */
c.style.setProperty('aspect-ratio','auto','important');
c.style.setProperty('height',ch,'important');
}
function all(){return [].slice.call(document.querySelectorAll(S))}
function run(hs){(hs||all()).forEach(fit)}
var q=0;function later(){if(q)return;q=requestAnimationFrame(function(){requestAnimationFrame(function(){q=0;run()})})}
function init(){
var hs=all();if(!hs.length)return;
run(hs);
if(window.ResizeObserver){
var ro=new ResizeObserver(function(es){var seen=[];es.forEach(function(e){var t=e.target,h=t.matches('transformance-story')?t:t.querySelector('transformance-story');if(h&&seen.indexOf(h)<0)seen.push(h)});run(seen)});
hs.forEach(function(h){ro.observe(h.parentElement);ro.observe(h)});
}
/* story.js writes inline styles on the host as it reserves and then mounts, so
   this is how we learn the shadow root has appeared. */
var mo=new MutationObserver(function(ms){ms.forEach(function(m){var h=m.target;if(h.shadowRoot&&!h._tf){h._tf=1;later()}})});
hs.forEach(function(h){mo.observe(h,{attributeFilter:['style']})});
addEventListener('resize',later);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
