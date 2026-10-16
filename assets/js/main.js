
const PDF_B64 = `JVBERi0xLjQKJZOMi54gUmVwb3J0TGFiIEdlbmVyYXRlZCBQREYgZG9jdW1lbnQgaHR0cDovL3d3dy5yZXBvcnRsYWIuY29tCjEgMCBvYmoKPDwKL0YxIDIgMCBSIC9GMiAzIDAgUgo+PgplbmRvYmoKMiAwIG9iago8PAovQmFzZUZvbnQgL0hlbHZldGljYSAvRW5jb2RpbmcgL1dpbkFuc2lFbmNvZGluZyAvTmFtZSAvRjEgL1N1YnR5cGUgL1R5cGUxIC9UeXBlIC9Gb250Cj4+CmVuZG9iagozIDAgb2JqCjw8Ci9CYXNlRm9udCAvSGVsdmV0aWNhLUJvbGQgL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcgL05hbWUgL0YyIC9TdWJ0eXBlIC9UeXBlMSAvVHlwZSAvRm9udAo+PgplbmRvYmoKNCAwIG9iago8PAovQ29udGVudHMgOCAwIFIgL01lZGlhQm94IFsgMCAwIDYxMiA3OTIgXSAvUGFyZW50IDcgMCBSIC9SZXNvdXJjZXMgPDwKL0ZvbnQgMSAwIFIgL1Byb2NTZXQgWyAvUERGIC9UZXh0IC9JbWFnZUIgL0ltYWdlQyAvSW1hZ2VJIF0KPj4gL1JvdGF0ZSAwIC9UcmFucyA8PAoKPj4gCiAgL1R5cGUgL1BhZ2UKPj4KZW5kb2JqCjUgMCBvYmoKPDwKL1BhZ2VNb2RlIC9Vc2VOb25lIC9QYWdlcyA3IDAgUiAvVHlwZSAvQ2F0YWxvZwo+PgplbmRvYmoKNiAwIG9iago8PAovQXV0aG9yIChhbm9ueW1vdXMpIC9DcmVhdGlvbkRhdGUgKEQ6MjAyNjA5MTQwNzU5MDIrMDgnMDAnKSAvQ3JlYXRvciAoUmVwb3J0TGFiIFBERiBMaWJyYXJ5IC0gd3d3LnJlcG9ydGxhYi5jb20pIC9LZXl3b3JkcyAoKSAvTW9kRGF0ZSAoRDoyMDI2MDkxNDA3NTkwMiswOCcwMCcpIC9Qcm9kdWNlciAoUmVwb3J0TGFiIFBERiBMaWJyYXJ5IC0gd3d3LnJlcG9ydGxhYi5jb20pIAogIC9TdWJqZWN0ICh1bnNwZWNpZmllZCkgL1RpdGxlICh1bnRpdGxlZCkgL1RyYXBwZWQgL0ZhbHNlCj4+CmVuZG9iago3IDAgb2JqCjw8Ci9Db3VudCAxIC9LaWRzIFsgNCAwIFIgXSAvVHlwZSAvUGFnZXMKPj4KZW5kb2JqCjggMCBvYmoKPDwKL0ZpbHRlciBbIC9BU0NJSTg1RGVjb2RlIC9GbGF0ZURlY29kZSBdIC9MZW5ndGggMTA5NAo+PgpzdHJlYW0KR2F0VTI5bEpjRyZBQDcuYlE8LF5NYVM6a0lGdTRaPWErQDRZUjx0Uzc9XFdWTTNjZGRVbUltP3AmPWR0LkNrYXNXaWlyZkAqNFotaE9Cb2w2UEp0WjZlbGxkIidoYm5tSzNKJjVlNy40SDZLKS4wTVRrVVQxaV5EJS9WblFfTUVebGNAanBsai1GM2dKNz5hM0hVYmRxOEs5KGVMPnVZVU5VMlE1NCtQLFVmWUolOG11Z0VLTSc/am5KXStrR0U7b2BeMHRXamotJSk0OXJlQUo0X1wvOUE1QiMkSjJpcktDb1c/cURtJ1tycCQoXlM8KWgvKkExQGI4ckpVI3UwNUtYMUprcWRyMi5DQScyMGpHJmhfMyxWMmRELD9WRyQsc3VJLGtIWG49Zl9AZE1QbXJbWDltUCxtXDVDTCRLQTEiTUo3OSRpVm4tQ2g3WWc8OVAtcW0nVkZwKVEnVlhJMCNjUSFpMUYyTVZMQlgnXDRXPWBmPms0L1EtLlNjJU9LS1U3MTBkIms2YjRPUW0wa2tPb0s5KEZWKmE3b2lQREdTJlpnXUQlJHVWTUFsJVAqKVc2MlhmaDdlTywyNWlGLGFvTmhzUFxAKUdzZ1s3NCxiLFNaLiQ6alhYLEZxQEAiJXFcWFRQa146JWEyJmdBISsyYW5la1NuUSU3OSQtLlJjKCc3TGcpI1lwNDpAZ1N1RnBDNV1cZzJnTjVVJCM8XmBEJW5iNkFdSDIlYE5ZR2YsQnVlPixMbU9UZmU/OmRWZ1R1KFBqMCY3NV8+Vy5KN19ibC0hNDZqWz9cQzZQblhCPEttbTxnNi1cQWFbSDs4clNaWSM0YS47THNQWXM9I09haWVBMypyQTttJyluNUMic09MIiFqWS1qUlZtNEZGZWxXQzdiJExNLjJhISdfOkFhTS4vcjxmImstLThgNFVPOFIkQlRTOnN0RVZIZmVXLlwjLmlvN0s1Vkg/MVFFJmZgOSgyamonYilWQDcpYypCKDs6M2VsMnMuPilxND01WGVUWjBNS2ZfLzs2OzEoTEM5V0IqISQmImAmMW9sTEgzM2Qya0g4Nk5oLE5FOUVbZW8tP00vVjRfKWFWKVBtXGJvMi0pVzZeSE9mbklWNXErcTgvaWtJRVMvJ3E8Z3JET049dVZNRVItQCE7Nl5SRTxGPE5YYF0hOD9kZFlJPD9XR3Vecm84Ly9VKSNkQVxPS09MJCpKJkNjMzhbS1p0bHBAVUdiKEAxdFkvLmhmJ2FFIWhbajtSOmphTSdBaChFL05Qa2VLIStGT0kyaUtdLl1EOypkOWV1cEpvMjMrNUtyT25cOjAsJ0ZwYWs9TWJlUWo/VlU6aC1MY1pfQTdYLEpLX1pnRy8lQWErays1Zj9JbmM6KD02WE5VNUAjbCpccGhBdFZZOilCJihAU1VdPT1LaDokNmMtIzc+Kk4hTHEqSicqfj5lbmRzdHJlYW0KZW5kb2JqCnhyZWYKMCA5CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDA3MyAwMDAwMCBuIAowMDAwMDAwMTE0IDAwMDAwIG4gCjAwMDAwMDAyMjEgMDAwMDAgbiAKMDAwMDAwMDMzMyAwMDAwMCBuIAowMDAwMDAwNTI2IDAwMDAwIG4gCjAwMDAwMDA1OTQgMDAwMDAgbiAKMDAwMDAwMDg5MCAwMDAwMCBuIAowMDAwMDAwOTQ5IDAwMDAwIG4gCnRyYWlsZXIKPDwKL0lEIApbPDE3NGE4MzVkNzg0MDZhMzBjZWI5OTNmMGE5YmIzOTYyPjwxNzRhODM1ZDc4NDA2YTMwY2ViOTkzZjBhOWJiMzk2Mj5dCiUgUmVwb3J0TGFiIGdlbmVyYXRlZCBQREYgZG9jdW1lbnQgLS0gZGlnZXN0IChodHRwOi8vd3d3LnJlcG9ydGxhYi5jb20pCgovSW5mbyA2IDAgUgovUm9vdCA1IDAgUgovU2l6ZSA5Cj4+CnN0YXJ0eHJlZgoyMTM0CiUlRU9GCg==`;
function downloadPDF(){
  try{
    const bin=atob(PDF_B64); const bytes=new Uint8Array(bin.length);
    for(let i=0;i<bin.length;i++) bytes[i]=bin.charCodeAt(i);
    const blob=new Blob([bytes],{type:'application/pdf'});
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a'); a.href=url; a.download='Know_Your_Rights_NOICE.pdf'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(url),1000);
  }catch(e){ window.open('assets/pdf/Know_Your_Rights_NOICE.pdf','_blank'); }
}
function openPDFModal(){
  try{ const bin=atob(PDF_B64); const bytes=new Uint8Array(bin.length); for(let i=0;i<bin.length;i++) bytes[i]=bin.charCodeAt(i); const blob=new Blob([bytes],{type:'application/pdf'}); const url=URL.createObjectURL(blob); document.getElementById('pdfFrame').src=url; }catch(e){}
  document.getElementById('pdfModal').classList.remove('hidden'); document.body.style.overflow='hidden';
}
function openCardModal(){ document.getElementById('cardModal').classList.remove('hidden'); document.body.style.overflow='hidden'; }
function closeModal(id){ document.getElementById(id).classList.add('hidden'); document.body.style.overflow=''; if(id==='pdfModal') document.getElementById('pdfFrame').src=''; }
function toggleMenu(){
  const m=document.getElementById('mobileMenu'); const isHidden=m.classList.contains('hidden');
  if(isHidden){ m.classList.remove('hidden'); document.body.style.overflow='hidden'; } else { m.classList.add('hidden'); document.body.style.overflow=''; }
  const h1=document.getElementById('ham1'), h2=document.getElementById('ham2'), h3=document.getElementById('ham3');
  if(h1){ h1.classList.toggle('rotate-45'); h1.classList.toggle('translate-y-1.5'); } if(h2){ h2.classList.toggle('opacity-0'); } if(h3){ h3.classList.toggle('-rotate-45'); h3.classList.toggle('-translate-y-1.5'); }
}
const feedData=[
  {id:'7593869264092679425',title:'GAS STATION CONFRONTATION',likes:'2.9M',icon:'⛽',grad:'from-red-500/20 to-orange-500/20',accent:'text-red-400'},
  {id:'7600822292976782647',title:'PASSPORT CHECK - KNOW YOUR RIGHTS',likes:'1.2M',icon:'🛂',grad:'from-blue-500/20 to-cyan-500/20',accent:'text-blue-400'},
  {id:'7593869264092679425',title:'ICE RAID - WITNESS',likes:'890K',icon:'👁️',grad:'from-pink-500/20 to-rose-500/20',accent:'text-pink-400'},
  {id:'7600822292976782647',title:'NO ICE NO FEAR - PROTEST',likes:'2.1M',icon:'✊',grad:'from-yellow-500/20 to-orange-500/20',accent:'text-yellow-400'},
  {id:'7593869264092679425',title:'CONSTITUTIONAL RIGHTS - RECORD',likes:'1.5M',icon:'📹',grad:'from-green-500/20 to-emerald-500/20',accent:'text-green-400'},
  {id:'7600822292976782647',title:'SOLIDARITY IS PROTOCOL',likes:'3.3M',icon:'🤝',grad:'from-purple-500/20 to-violet-500/20',accent:'text-purple-400'},
];
function refreshFeed(){
  const grid=document.getElementById('tiktokGrid'); if(!grid) return;
  grid.style.opacity='0'; grid.style.transform='scale(0.98)';
  setTimeout(()=>{ feedData.sort(()=>Math.random()-0.5); renderFeed(); grid.style.opacity='1'; grid.style.transform='scale(1)'; },200);
}
function renderFeed(){
  const grid=document.getElementById('tiktokGrid'); if(!grid) return;
  grid.innerHTML=feedData.map(f=>`
    <a href="https://www.tiktok.com/@cbcnews/video/${f.id}" target="_blank" rel="noopener" class="group relative rounded-2xl overflow-hidden bg-[#0a0a0f] border border-white/10 card-hover block">
      <div class="relative aspect-[9/16] overflow-hidden bg-gradient-to-br ${f.grad}">
        <div class="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.15),transparent_60%)]"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div class="absolute inset-0 p-4 flex flex-col justify-between">
          <div class="flex justify-between items-start">
            <span class="text-2xl bg-black/60 backdrop-blur px-2.5 py-1 rounded-full border border-white/10">${f.icon}</span>
            <span class="text-[10px] px-2.5 py-1 rounded-full bg-white/10 ${f.accent} border border-white/10 backdrop-blur font-bold">${f.likes} ♡</span>
          </div>
          <div class="space-y-4">
            <div class="flex justify-center"><div class="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-200"><svg width="22" height="22" fill="black" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div></div>
            <div>
              <p class="font-black text-[13px] leading-tight tracking-tight">${f.title}</p>
              <p class="text-[9px] text-white/60 mt-1 tracking-widest">LIVE ON TIKTOK • VERIFIED</p>
              <div class="mt-3 inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF2D7B] rounded-full text-[11px] font-black tracking-widest group-hover:bg-white group-hover:text-black transition-colors">WATCH NOW ↗</div>
            </div>
          </div>
        </div>
      </div>
    </a>
  `).join('');
}
function startCountdown(){
  const target=new Date('2026-10-02T00:00:00Z').getTime(); const el=document.getElementById('countdown'); if(!el) return;
  function tick(){ const now=Date.now(); const diff=target-now; if(diff<=0){ el.textContent='LIVE NOW 🔥'; return; } const d=Math.floor(diff/86400000), h=Math.floor((diff%86400000)/3600000), m=Math.floor((diff%3600000)/60000), s=Math.floor((diff%60000)/1000); el.textContent=`LAUNCH IN: ${d}D : ${String(h).padStart(2,'0')}H : ${String(m).padStart(2,'0')}M : ${String(s).padStart(2,'0')}S`; }
  tick(); setInterval(tick,1000);
}
document.addEventListener('DOMContentLoaded',()=>{ renderFeed(); startCountdown(); });
document.addEventListener('keydown',e=>{ if(e.key==='Escape'){ closeModal('cardModal'); closeModal('pdfModal'); const mm=document.getElementById('mobileMenu'); if(mm && !mm.classList.contains('hidden')){ mm.classList.add('hidden'); document.body.style.overflow=''; } } });
