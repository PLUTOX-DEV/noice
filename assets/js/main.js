
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
  document.getElementById('pdfModal').classList.remove('hidden'); document.documentElement.classList.add('modal-open');
}
function openCardModal(){ document.getElementById('cardModal').classList.remove('hidden'); document.documentElement.classList.add('modal-open'); }
function closeModal(id){ document.getElementById(id).classList.add('hidden'); document.documentElement.classList.remove('modal-open'); document.body.style.removeProperty('overflow'); if(id==='pdfModal') document.getElementById('pdfFrame').src=''; }
function toggleMenu(){
  const m = document.getElementById('mobileMenu');
  if (!m) return;
  const isOpening = m.classList.contains('hidden');
  m.classList.toggle('hidden', !isOpening);

  // The mobile navigation is a dropdown, not a modal. Never lock page scrolling for it.
  document.body.style.removeProperty('overflow');

  const h1 = document.getElementById('ham1');
  const h2 = document.getElementById('ham2');
  const h3 = document.getElementById('ham3');
  if (h1) { h1.classList.toggle('rotate-45', isOpening); h1.classList.toggle('translate-y-1.5', isOpening); }
  if (h2) h2.classList.toggle('opacity-0', isOpening);
  if (h3) { h3.classList.toggle('-rotate-45', isOpening); h3.classList.toggle('-translate-y-1.5', isOpening); }
}
// Actual TikTok video cards: load public thumbnail metadata and link each image to the original video.
const feedData = [
  { url: 'https://www.tiktok.com/@cbcnews/video/7593869264092679425' },
  { url: 'https://www.tiktok.com/@cbcnews/video/7600822292976782647' }
];
let feedRequestId = 0;

function buildVideoCard(video, metadata) {
  const card = document.createElement('a');
  card.href = video.url;
  card.target = '_blank';
  card.rel = 'noopener noreferrer';
  card.className = 'feed-video-card group block rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0f] card-hover';
  card.setAttribute('aria-label', 'Watch ' + (metadata.title || 'video') + ' on TikTok');

  const media = document.createElement('div');
  media.className = 'feed-video-media';
  if (metadata.thumbnail_url && /^https:\/\//i.test(metadata.thumbnail_url)) {
    const image = document.createElement('img');
    image.src = metadata.thumbnail_url;
    image.alt = metadata.title ? 'Video thumbnail: ' + metadata.title : 'TikTok video thumbnail';
    image.loading = 'lazy';
    image.referrerPolicy = 'no-referrer';
    image.className = 'feed-video-thumbnail';
    image.addEventListener('error', () => {
      image.remove();
      media.classList.add('feed-video-no-thumbnail');
      const fallback = document.createElement('div');
      fallback.className = 'feed-video-fallback';
      fallback.textContent = 'PREVIEW UNAVAILABLE';
      media.prepend(fallback);
    }, { once: true });
    media.appendChild(image);
  } else {
    media.classList.add('feed-video-no-thumbnail');
    const fallback = document.createElement('div');
    fallback.className = 'feed-video-fallback';
    fallback.textContent = 'PREVIEW UNAVAILABLE';
    media.appendChild(fallback);
  }

  const shade = document.createElement('div');
  shade.className = 'feed-video-shade';
  const copy = document.createElement('div');
  copy.className = 'feed-video-copy';
  const creator = document.createElement('p');
  creator.className = 'text-[10px] font-bold tracking-[0.16em] text-[#3CCFFF] uppercase';
  creator.textContent = metadata.author_name ? '@' + metadata.author_name : 'TIKTOK VIDEO';
  const title = document.createElement('h3');
  title.className = 'mt-2 text-base md:text-lg font-black leading-snug';
  title.textContent = metadata.title || 'Watch this video on TikTok';
  const action = document.createElement('span');
  action.className = 'mt-4 inline-flex items-center gap-2 px-4 py-2.5 bg-[#FF2D7B] rounded-full text-[10px] font-black tracking-widest group-hover:bg-white group-hover:text-black transition-colors';
  action.textContent = 'WATCH ON TIKTOK ↗';
  copy.append(creator, title, action);
  media.append(shade, copy);
  card.appendChild(media);
  return card;
}

async function loadVideoMetadata(video) {
  try {
    const response = await fetch('https://www.tiktok.com/oembed?url=' + encodeURIComponent(video.url), {
      headers: { accept: 'application/json' },
      cache: 'no-store'
    });
    if (!response.ok) throw new Error('TikTok preview request failed');
    const metadata = await response.json();
    return {
      thumbnail_url: metadata.thumbnail_url || '',
      title: metadata.title || '',
      author_name: metadata.author_name || ''
    };
  } catch (error) {
    return { thumbnail_url: '', title: '', author_name: '' };
  }
}

async function renderFeed() {
  const grid = document.getElementById('tiktokGrid');
  if (!grid) return;
  const requestId = ++feedRequestId;
  grid.setAttribute('aria-busy', 'true');
  grid.innerHTML = '';
  const loading = document.createElement('p');
  loading.className = 'col-span-full py-5 text-xs text-white/45';
  loading.textContent = 'Loading video previews…';
  grid.appendChild(loading);

  const cards = await Promise.all(feedData.map(async video => {
    const metadata = await loadVideoMetadata(video);
    return buildVideoCard(video, metadata);
  }));
  if (requestId !== feedRequestId) return;
  grid.innerHTML = '';
  cards.forEach(card => grid.appendChild(card));
  grid.setAttribute('aria-busy', 'false');
}

function refreshFeed() {
  const grid = document.getElementById('tiktokGrid');
  if (!grid) return;
  grid.style.opacity = '0.55';
  renderFeed().finally(() => {
    grid.style.transition = 'opacity .2s ease';
    grid.style.opacity = '1';
  });
}
function startCountdown(){
  const target=new Date('2026-10-02T00:00:00Z').getTime(); const el=document.getElementById('countdown'); if(!el) return;
  function tick(){ const now=Date.now(); const diff=target-now; if(diff<=0){ el.textContent='LIVE NOW 🔥'; return; } const d=Math.floor(diff/86400000), h=Math.floor((diff%86400000)/3600000), m=Math.floor((diff%3600000)/60000), s=Math.floor((diff%60000)/1000); el.textContent=`LAUNCH IN: ${d}D : ${String(h).padStart(2,'0')}H : ${String(m).padStart(2,'0')}M : ${String(s).padStart(2,'0')}S`; }
  tick(); setInterval(tick,1000);
}
document.addEventListener('DOMContentLoaded',()=>{ renderFeed(); startCountdown(); refreshTokenChart(); tokenChartRefreshTimer = setInterval(refreshTokenChart, 60000); });
document.addEventListener('keydown',e=>{ if(e.key==='Escape'){ closeModal('cardModal'); closeModal('pdfModal'); const mm=document.getElementById('mobileMenu'); if(mm && !mm.classList.contains('hidden')){ mm.classList.add('hidden'); document.body.style.removeProperty('overflow'); } } });


// Custom Solana candlestick chart powered by GeckoTerminal's public on-chain pool/OHLCV API.
const NOICE_TOKEN_MINT = 'Exyiv42pjmJtvEi24D3saJJnRCVFwGuj2SVYrCg5moon';
const GECKO_API = 'https://api.geckoterminal.com/api/v2';
const CHART_INTERVALS = {
  '5m': { timeframe: 'minute', aggregate: 5 },
  '15m': { timeframe: 'minute', aggregate: 15 },
  '1h': { timeframe: 'hour', aggregate: 1 },
  '4h': { timeframe: 'hour', aggregate: 4 }
};
let tokenChartRefreshTimer = null;
let tokenChartRequest = 0;
let activeChartInterval = '5m';
let activePoolAddress = '';
let activePoolAttributes = null;
let noiceChart = null;
let noiceCandleSeries = null;
let chartResizeObserver = null;

function formatUsd(value) {
  if (value === null || value === undefined || value === '' || !Number.isFinite(Number(value))) return '—';
  const n = Number(value);
  if (Math.abs(n) >= 1) return '$' + n.toLocaleString('en-US', { maximumFractionDigits: 4 });
  if (n === 0) return '$0';
  return '$' + n.toLocaleString('en-US', { maximumSignificantDigits: 4 });
}
function formatCompactUsd(value) {
  if (value === null || value === undefined || value === '' || !Number.isFinite(Number(value))) return '—';
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', notation: 'compact', maximumFractionDigits: 2 }).format(Number(value));
}
function setTokenChartStatus(message) {
  const status = document.getElementById('chartStatus');
  if (status) status.textContent = message;
}
function setTokenMetric(id, value, className) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = value;
  if (className) el.className = className;
}
async function chartFetch(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 14000);
  try {
    const response = await fetch(url, {
      headers: { accept: 'application/json', 'accept-version': '20230203' },
      signal: controller.signal,
      cache: 'no-store'
    });
    if (!response.ok) throw new Error('Market data returned HTTP ' + response.status);
    return await response.json();
  } finally {
    clearTimeout(timeout);
  }
}
function showChartFallback(title, message) {
  const frame = document.getElementById('tokenChartFrame');
  if (!frame) return;
  frame.innerHTML = '';
  const placeholder = document.createElement('div');
  placeholder.className = 'chart-placeholder';
  const mark = document.createElement('div');
  mark.className = 'chart-placeholder-mark';
  mark.textContent = 'N';
  const heading = document.createElement('p');
  heading.className = 'mt-4 font-black tracking-widest';
  heading.textContent = title;
  const detail = document.createElement('p');
  detail.className = 'mt-2 max-w-md text-xs text-white/45 leading-relaxed';
  detail.textContent = message;
  const actions = document.createElement('div');
  actions.className = 'mt-5 flex flex-wrap justify-center gap-2';
  const links = [
    { text: 'OPEN BIRDEYE ↗', href: 'https://birdeye.so/token/' + encodeURIComponent(NOICE_TOKEN_MINT) + '?chain=solana' },
    { text: 'OPEN DEX SCREENER ↗', href: 'https://dexscreener.com/solana/' + encodeURIComponent(NOICE_TOKEN_MINT) }
  ];
  links.forEach(item => {
    const link = document.createElement('a');
    link.href = item.href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'inline-flex px-4 py-3 rounded-full bg-white text-black text-[10px] font-black';
    link.textContent = item.text;
    actions.appendChild(link);
  });
  placeholder.append(mark, heading, detail, actions);
  frame.appendChild(placeholder);
}
function initNoiceChart() {
  const frame = document.getElementById('tokenChartFrame');
  if (!frame || noiceChart) return;
  if (!window.LightweightCharts) {
    showChartFallback('CHART LIBRARY UNAVAILABLE', 'The chart could not load in this browser. Open the token on Birdeye to view its live chart.');
    return;
  }
  frame.innerHTML = '';
  const host = document.createElement('div');
  host.id = 'noiceCandleChart';
  frame.appendChild(host);
  noiceChart = LightweightCharts.createChart(host, {
    width: Math.max(320, frame.clientWidth),
    height: Math.max(360, frame.clientHeight),
    layout: { background: { type: 'solid', color: '#07070a' }, textColor: '#a7a7b4', fontFamily: 'Space Grotesk, sans-serif' },
    grid: { vertLines: { color: 'rgba(255,255,255,0.045)' }, horzLines: { color: 'rgba(255,255,255,0.045)' } },
    rightPriceScale: { borderColor: 'rgba(255,255,255,0.10)' },
    timeScale: { borderColor: 'rgba(255,255,255,0.10)', timeVisible: true, secondsVisible: false },
    crosshair: { vertLine: { color: 'rgba(60,207,255,0.35)' }, horzLine: { color: 'rgba(60,207,255,0.35)' } },
    handleScroll: true,
    handleScale: true
  });
  noiceCandleSeries = noiceChart.addCandlestickSeries({
    upColor: '#22c55e',
    downColor: '#ff477e',
    borderUpColor: '#22c55e',
    borderDownColor: '#ff477e',
    wickUpColor: '#22c55e',
    wickDownColor: '#ff477e',
    priceLineVisible: true,
    lastValueVisible: true
  });
  if (window.ResizeObserver) {
    chartResizeObserver = new ResizeObserver(() => {
      if (noiceChart && frame.clientWidth) noiceChart.applyOptions({
        width: frame.clientWidth,
        height: Math.max(360, frame.clientHeight)
      });
    });
    chartResizeObserver.observe(frame);
  } else {
    window.addEventListener('resize', resizeNoiceChart);
  }
}
function resizeNoiceChart() {
  const frame = document.getElementById('tokenChartFrame');
  if (noiceChart && frame) noiceChart.applyOptions({ width: frame.clientWidth, height: Math.max(360, frame.clientHeight) });
}
async function resolveNoicePool() {
  const url = GECKO_API + '/networks/solana/tokens/' + encodeURIComponent(NOICE_TOKEN_MINT) + '/pools?include=base_token,quote_token';
  const result = await chartFetch(url);
  const pools = Array.isArray(result.data) ? result.data : [];
  const candidates = pools.map(pool => {
    const attrs = pool.attributes || {};
    const baseId = pool.relationships?.base_token?.data?.id || '';
    const quoteId = pool.relationships?.quote_token?.data?.id || '';
    const isBase = baseId.endsWith('_' + NOICE_TOKEN_MINT) || baseId === 'solana_' + NOICE_TOKEN_MINT;
    const isQuote = quoteId.endsWith('_' + NOICE_TOKEN_MINT) || quoteId === 'solana_' + NOICE_TOKEN_MINT;
    return { pool, attrs, isBase, isQuote, liquidity: Number(attrs.reserve_in_usd || 0) };
  }).filter(item => item.attrs.address && (item.isBase || item.isQuote));
  candidates.sort((a, b) => b.liquidity - a.liquidity);
  if (!candidates.length) return null;
  const selected = candidates[0];
  activePoolAddress = selected.attrs.address;
  activePoolAttributes = { ...selected.attrs, tokenIsBase: selected.isBase };
  return selected;
}
function updatePoolMetrics(selected) {
  const attrs = selected.attrs;
  const isBase = selected.isBase;
  const price = isBase ? attrs.base_token_price_usd : attrs.quote_token_price_usd;
  const change = attrs.price_change_percentage?.h24;
  const changeNumber = change === null || change === undefined ? NaN : Number(change);
  const changeText = Number.isFinite(changeNumber) ? (changeNumber > 0 ? '+' : '') + changeNumber.toFixed(2) + '%' : '—';
  const changeClass = 'mt-2 text-xl md:text-2xl font-black ' + (changeNumber > 0 ? 'text-emerald-400' : changeNumber < 0 ? 'text-rose-400' : '');
  setTokenMetric('tokenPrice', formatUsd(price));
  setTokenMetric('tokenChange', changeText, changeClass);
  setTokenMetric('tokenLiquidity', formatCompactUsd(attrs.reserve_in_usd));
  setTokenMetric('tokenVolume', formatCompactUsd(attrs.volume_usd?.h24));
}
async function loadNoiceCandles(requestId) {
  if (!activePoolAddress) throw new Error('No pool has been selected');
  const interval = CHART_INTERVALS[activeChartInterval] || CHART_INTERVALS['5m'];
  const query = new URLSearchParams({
    aggregate: String(interval.aggregate),
    limit: '180',
    currency: 'usd',
    token: NOICE_TOKEN_MINT
  });
  const url = GECKO_API + '/networks/solana/pools/' + encodeURIComponent(activePoolAddress) + '/ohlcv/' + interval.timeframe + '?' + query.toString();
  const response = await chartFetch(url);
  if (requestId !== tokenChartRequest) return;
  const raw = response.data?.attributes?.ohlcv_list;
  if (!Array.isArray(raw) || !raw.length) throw new Error('No historical candles are available for this pool yet');
  const candles = raw.map(row => ({
    time: Number(row[0]),
    open: Number(row[1]),
    high: Number(row[2]),
    low: Number(row[3]),
    close: Number(row[4])
  })).filter(c => Number.isFinite(c.time) && Number.isFinite(c.open) && Number.isFinite(c.high) && Number.isFinite(c.low) && Number.isFinite(c.close) && c.low > 0 && c.high > 0)
    .sort((a, b) => a.time - b.time)
    .filter((c, i, list) => i === 0 || c.time !== list[i - 1].time);
  if (!candles.length) throw new Error('No valid candles were returned');
  initNoiceChart();
  if (!noiceCandleSeries) throw new Error('Chart library did not initialize');
  noiceCandleSeries.setData(candles);
  noiceChart.timeScale().fitContent();
  setTokenChartStatus('Live pool candles · GeckoTerminal · ' + activeChartInterval.toUpperCase() + ' · refreshed ' + new Date().toLocaleTimeString());
}
async function refreshTokenChart(forceResolvePool = false) {
  const requestId = ++tokenChartRequest;
  const frame = document.getElementById('tokenChartFrame');
  const link = document.getElementById('chartOpenLink');
  if (!frame) return;
  if (link) link.href = 'https://birdeye.so/token/' + encodeURIComponent(NOICE_TOKEN_MINT) + '?chain=solana';
  setTokenChartStatus('Loading real pool history…');
  try {
    if (forceResolvePool || !activePoolAddress) {
      const selected = await resolveNoicePool();
      if (requestId !== tokenChartRequest) return;
      if (!selected) {
        setTokenMetric('tokenPrice', '—');
        setTokenMetric('tokenChange', '—');
        setTokenMetric('tokenLiquidity', '—');
        setTokenMetric('tokenVolume', '—');
        showChartFallback('NO INDEXED POOL FOUND', 'No public pool with historical candles was returned for this mint. The chart will not invent price history. Try the Birdeye or DEX Screener market pages.');
        setTokenChartStatus('No indexed pool found for this token address.');
        return;
      }
      updatePoolMetrics(selected);
    } else if (activePoolAttributes) {
      updatePoolMetrics({ attrs: activePoolAttributes, isBase: activePoolAttributes.tokenIsBase });
    }
    await loadNoiceCandles(requestId);
  } catch (error) {
    if (requestId !== tokenChartRequest) return;
    const message = error && error.name === 'AbortError'
      ? 'The market-data request timed out.'
      : 'The public market-data source could not return chart candles.';
    setTokenChartStatus(message + ' Open Birdeye for its own live chart, or retry here.');
    if (!noiceCandleSeries || !noiceChart) {
      showChartFallback('LIVE CANDLES UNAVAILABLE', message + ' This can happen when a token has no indexed pool or the public API is temporarily unavailable.');
    }
  }
}
function setChartInterval(nextInterval) {
  if (!CHART_INTERVALS[nextInterval] || activeChartInterval === nextInterval) return;
  activeChartInterval = nextInterval;
  document.querySelectorAll('[data-chart-interval]').forEach(button => {
    const active = button.dataset.chartInterval === nextInterval;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  refreshTokenChart();
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-chart-interval]').forEach(button => {
    button.addEventListener('click', () => setChartInterval(button.dataset.chartInterval));
  });
});
