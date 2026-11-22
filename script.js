const navToggle=document.querySelector('.nav-toggle');
const navMenu=document.querySelector('#nav-menu');
navToggle?.addEventListener('click',()=>{const open=navMenu.classList.toggle('open');navToggle.setAttribute('aria-expanded',String(open))});
navMenu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navMenu.classList.remove('open');navToggle.setAttribute('aria-expanded','false')}));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&navMenu?.classList.contains('open')){navMenu.classList.remove('open');navToggle.setAttribute('aria-expanded','false');navToggle.focus()}});
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
let filter='all';
const search=document.querySelector('#publication-search');
const publications=[...document.querySelectorAll('.publication')];
function filterPublications(){
  const query=(search?.value||'').trim().toLocaleLowerCase();
  let count=0;
  publications.forEach(p=>{
    const match=(filter==='all'||p.dataset.group===filter)&&(p.dataset.search||p.textContent).toLocaleLowerCase().includes(query);
    p.hidden=!match;
    if(match)count++;
  });
  document.querySelectorAll('.publication-group').forEach(g=>{
    g.hidden=![...g.querySelectorAll('.publication')].some(p=>!p.hidden);
  });
  const counter=document.querySelector('#publication-count');
  if(counter)counter.textContent=`${count} record${count===1?'':'s'}`;
  const empty=document.querySelector('#no-results');
  if(empty)empty.hidden=count!==0;
}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  filter=button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  filterPublications();
}));
search?.addEventListener('input',filterPublications);
filterPublications();
// Existing GIF assets play automatically when visible. Reduced-motion users get
// the unaltered first frame. Pause shows that poster, not a simulated freeze frame.
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
const mediaStates=new Map();
function renderMedia(state){const running=state.visible&&!state.paused;const source=running?state.img.dataset.gif:state.img.dataset.poster;if(state.img.getAttribute('src')!==source)state.img.src=source;state.button.textContent=state.paused?'Play motion':'Pause motion';state.button.setAttribute('aria-pressed',String(state.paused));state.button.setAttribute('aria-label',`${state.paused?'Play':'Pause'} ${state.name}`);}
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{const state=mediaStates.get(entry.target);state.visible=entry.isIntersecting;renderMedia(state)}),{rootMargin:'100px'});
document.querySelectorAll('.research-media').forEach((figure,index)=>{const state={img:figure.querySelector('.research-gif'),button:figure.querySelector('.media-toggle'),visible:false,paused:reducedMotion.matches,name:index===0?'EBSD research GIF':'RVE research GIF'};mediaStates.set(figure,state);state.button.addEventListener('click',()=>{state.paused=!state.paused;renderMedia(state)});renderMedia(state);observer.observe(figure)});
reducedMotion.addEventListener('change',event=>{mediaStates.forEach(state=>{state.paused=event.matches;renderMedia(state)})});
