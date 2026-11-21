const libraryList=document.getElementById('game-list');
const shelf=document.getElementById('grid');
const panel=document.getElementById('sidebar-panel');
const previousButton=document.getElementById('carousel-prev');
const nextButton=document.getElementById('carousel-next');
function syncLibrary(){
 const cards=Array.from(shelf.children);
 const links=cards.map(card=>{const link=document.createElement('a');link.className='list-game';link.href=card.href;link.target='_blank';link.rel='noopener noreferrer';const img=document.createElement('img');img.src=card.querySelector('img').getAttribute('src');img.alt='';const label=document.createElement('span');label.textContent=card.querySelector('h3').textContent;link.append(img,label);link.setAttribute('aria-label','Jogar '+label.textContent+' — abre em outra aba');return link});
 links.sort((a,b)=>a.textContent.localeCompare(b.textContent,'pt-BR'));
 libraryList.replaceChildren(...links);
 const summary=panel.querySelector('summary span');summary.textContent=cards.length;
 requestAnimationFrame(updateCarousel);
}
function updateCarousel(){previousButton.disabled=shelf.scrollLeft<=2;nextButton.disabled=shelf.scrollLeft+shelf.clientWidth>=shelf.scrollWidth-2;}
function moveShelf(direction){shelf.scrollBy({left:direction*Math.max(240,shelf.clientWidth*.75),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})}
previousButton.addEventListener('click',()=>moveShelf(-1));nextButton.addEventListener('click',()=>moveShelf(1));
shelf.addEventListener('scroll',updateCarousel,{passive:true});window.addEventListener('resize',updateCarousel);
shelf.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();moveShelf(event.key==='ArrowRight'?1:-1)}});
new MutationObserver(syncLibrary).observe(shelf,{childList:true});
panel.open=!matchMedia('(max-width: 760px)').matches;
syncLibrary();
