export function getTagColor(tag: string) {
  const t = tag.toLowerCase();
  
  if (t === 'open source' || t === 'foss') return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
  if (t === 'free') return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
  if (t === 'learning' || t === 'guide') return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
  if (t === 'software' || t === 'tools' || t === 'tool') return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
  if (t === 'ai') return 'bg-pink-500/10 text-pink-400 border-pink-500/20';
  if (t === 'download' || t === 'torrent') return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
  if (t === 'privacy' || t === 'security') return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
  if (t === 'streaming' || t === 'video') return 'bg-red-500/10 text-red-400 border-red-500/20';
  if (t === 'gaming' || t === 'game') return 'bg-violet-500/10 text-violet-400 border-violet-500/20';
  if (t === 'audio' || t === 'music') return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
  if (t === 'reading' || t === 'book') return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';

  const colors = [
    'bg-zinc-800 text-zinc-300 border-zinc-700/50',
    'bg-slate-800 text-slate-300 border-slate-700/50',
    'bg-stone-800 text-stone-300 border-stone-700/50',
  ];
  
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  return colors[Math.abs(hash) % colors.length];
}
