import { Language, Resource, Category } from '../types';
import { ExternalLink, Copy, Check, Bookmark, Sparkles, ChevronDown, Share2, Heart } from 'lucide-react';
import React, { useState, useMemo } from 'react';
import { getTagColor, findSimilarResources } from '../utils';

interface ResourceCardProps {
  resource: Resource;
  language: Language;
  isBookmarked: boolean;
  onToggleBookmark: (url: string) => void;
  breadcrumb?: string;
  allCategories?: Category[];
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ 
  resource, 
  language,
  isBookmarked,
  onToggleBookmark,
  breadcrumb,
  allCategories = []
}) => {
  const [copied, setCopied] = useState(false);
  const [showSimilar, setShowSimilar] = useState(false);
  const [likes, setLikes] = useState<number>(() => {
    const saved = localStorage.getItem(`likes-${resource.url}`);
    return saved ? parseInt(saved) : Math.floor(Math.random() * 20); // Simulated initial likes
  });
  const [isLiked, setIsLiked] = useState(() => localStorage.getItem(`isLiked-${resource.url}`) === 'true');

  const toggleLike = () => {
    const newIsLiked = !isLiked;
    setIsLiked(newIsLiked);
    const newLikes = newIsLiked ? likes + 1 : likes - 1;
    setLikes(newLikes);
    localStorage.setItem(`isLiked-${resource.url}`, String(newIsLiked));
    localStorage.setItem(`likes-${resource.url}`, String(newLikes));
  };

  const isNew = useMemo(() => {
    if (!resource.updatedAt) return false;
    const updateDate = new Date(resource.updatedAt);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - updateDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 14;
  }, [resource.updatedAt]);

  const copyUrl = async () => {
    await navigator.clipboard.writeText(resource.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const shareResource = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: resource.title,
          text: resource.description[language] || resource.description.en,
          url: resource.url,
        });
      } catch {}
    } else {
      copyUrl();
    }
  };

  const similarResources = showSimilar ? findSimilarResources(resource, allCategories).slice(0, 4) : [];
  const isAr = language === 'ar';

  return (
    <div className="group relative w-full max-w-full overflow-hidden">
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800/60 dark:border-zinc-800/60 light:border-zinc-200 bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white backdrop-blur-sm transition-all duration-300 hover:border-zinc-700/80 dark:hover:border-zinc-700/80 light:hover:border-emerald-500/30 hover:bg-zinc-900/60 dark:hover:bg-zinc-900/60 light:hover:bg-white shadow-sm light:shadow-zinc-200/50">
        {/* subtle gradient accent */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-violet-500/5" />
        </div>
        
        <div className="relative p-3.5 sm:p-5 w-full">
          <div className="flex items-start gap-3 w-full min-w-0">
            <div className="flex-1 min-w-0 w-full overflow-hidden">
              {breadcrumb && (
                <div className="mb-2 flex items-center gap-1.5">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-zinc-800/60 dark:bg-zinc-800/60 light:bg-zinc-100 border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 text-[10px] font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-500 max-w-full truncate">
                    {breadcrumb}
                  </span>
                </div>
              )}
              
              <h3 className="flex items-start gap-1.5 mb-1.5 w-full min-w-0">
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[14px] sm:text-[15px] font-semibold leading-snug text-zinc-100 dark:text-zinc-100 light:text-zinc-900 hover:text-emerald-400 transition-colors break-words hyphens-auto flex-1 min-w-0"
                  style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
                >
                  {resource.title}
                </a>
                {isNew && (
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-bold uppercase tracking-wider text-emerald-400 shrink-0">
                    {isAr ? 'جديد' : 'New'}
                  </span>
                )}
                <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-600 group-hover:text-zinc-400 mt-0.5 shrink-0 transition-colors" />
              </h3>
              
              <p className="text-[12px] sm:text-[13px] leading-[1.5] text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mb-2.5 break-words" style={{ overflowWrap: 'anywhere', wordBreak: 'break-word', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {resource.description[language] || resource.description.en}
              </p>
              
              <div className="flex flex-wrap items-center gap-1.5">
                {resource.tags.slice(0, 4).map(tag => (
                  <span key={tag} className={`inline-flex items-center px-2 py-1 rounded-lg text-[11px] font-medium border backdrop-blur-sm ${getTagColor(tag)}`}>
                    {tag}
                  </span>
                ))}
                {resource.tags.length > 4 && (
                  <span className="text-[11px] text-zinc-600">+{resource.tags.length - 4}</span>
                )}
                
                {allCategories.length > 0 && (
                  <button 
                    onClick={() => setShowSimilar(!showSimilar)}
                    className="ms-auto inline-flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-500 light:text-zinc-400 hover:text-zinc-300 dark:hover:text-zinc-300 light:hover:text-zinc-600 transition-colors"
                  >
                    <Sparkles className="w-3 h-3" />
                    {isAr ? 'مشابه' : 'Similar'}
                    <ChevronDown className={`w-3 h-3 transition-transform ${showSimilar ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>
            </div>

            {/* Actions - larger touch targets for mobile */}
            <div className="flex sm:flex-col items-center gap-1.5 shrink-0 -me-1">
              <button
                onClick={toggleLike}
                className={`group/like w-9 h-9 sm:w-8 sm:h-8 flex flex-col items-center justify-center rounded-xl sm:rounded-lg border transition-all active:scale-95 touch-manipulation ${
                  isLiked 
                    ? 'bg-rose-500/15 border-rose-500/30 text-rose-400' 
                    : 'bg-zinc-800/70 dark:bg-zinc-800/70 light:bg-zinc-100 border-zinc-700/50 dark:border-zinc-700/50 light:border-zinc-200 text-zinc-400 dark:text-zinc-400 light:text-zinc-500 hover:text-rose-400 hover:border-rose-500/30'
                }`}
                aria-label="Like"
              >
                <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-current' : 'group-hover/like:fill-rose-400/20'}`} />
                <span className="text-[9px] font-bold mt-0.5">{likes}</span>
              </button>

              <button
                onClick={() => onToggleBookmark(resource.url)}
                className={`w-9 h-9 sm:w-8 sm:h-8 grid place-items-center rounded-xl sm:rounded-lg border transition-all active:scale-95 touch-manipulation ${
                  isBookmarked 
                    ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400' 
                    : 'bg-zinc-800/70 dark:bg-zinc-800/70 light:bg-zinc-100 border-zinc-700/50 dark:border-zinc-700/50 light:border-zinc-200 text-zinc-400 dark:text-zinc-400 light:text-zinc-500 hover:text-zinc-200 dark:hover:text-zinc-200 light:hover:text-zinc-900 hover:border-zinc-600 dark:hover:border-zinc-600 light:hover:border-zinc-300 active:bg-zinc-700'
                }`}
                aria-label="Bookmark"
              >
                <Bookmark className="w-4 h-4 sm:w-3.5 sm:h-3.5" fill={isBookmarked ? "currentColor" : "none"} />
              </button>
              <button 
                onClick={shareResource}
                className="w-9 h-9 sm:w-8 sm:h-8 grid place-items-center rounded-xl sm:rounded-lg bg-zinc-800/70 dark:bg-zinc-800/70 light:bg-zinc-100 border border-zinc-700/50 dark:border-zinc-700/50 light:border-zinc-200 text-zinc-400 dark:text-zinc-400 light:text-zinc-500 hover:text-zinc-200 dark:hover:text-zinc-200 light:hover:text-zinc-900 hover:border-zinc-600 dark:hover:border-zinc-600 light:hover:border-zinc-300 active:bg-zinc-700 transition-all active:scale-95 touch-manipulation sm:hidden"
                aria-label="Share"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button 
                onClick={copyUrl}
                className="w-9 h-9 sm:w-8 sm:h-8 grid place-items-center rounded-xl sm:rounded-lg bg-zinc-800/70 dark:bg-zinc-800/70 light:bg-zinc-100 border border-zinc-700/50 dark:border-zinc-700/50 light:border-zinc-200 text-zinc-400 dark:text-zinc-400 light:text-zinc-500 hover:text-zinc-200 dark:hover:text-zinc-200 light:hover:text-zinc-900 hover:border-zinc-600 dark:hover:border-zinc-600 light:hover:border-zinc-300 active:bg-zinc-700 transition-all active:scale-95 touch-manipulation"
                aria-label="Copy"
              >
                {copied ? <Check className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-emerald-400" /> : <Copy className="w-4 h-4 sm:w-3.5 sm:h-3.5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Similar resources */}
      {showSimilar && similarResources.length > 0 && (
        <div className="mt-2 ms-3 sm:ms-6 me-0 p-3 rounded-xl border border-zinc-800/50 dark:border-zinc-800/50 light:border-zinc-200 bg-zinc-950/80 dark:bg-zinc-950/80 light:bg-zinc-100 backdrop-blur-xl animate-in slide-in-from-top-1 duration-200">
          <div className="grid sm:grid-cols-2 gap-2">
            {similarResources.map((sim, i) => (
              <a 
                key={i} 
                href={sim.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/sim flex items-start gap-2 p-2.5 rounded-lg hover:bg-zinc-900 dark:hover:bg-zinc-900 light:hover:bg-zinc-200 transition-colors"
              >
                <div className="w-1 h-1 rounded-full bg-zinc-700 group-hover/sim:bg-emerald-500 mt-2 shrink-0 transition-colors" />
                <div className="min-w-0 flex-1">
                  <div className="text-[13px] font-medium text-zinc-300 dark:text-zinc-300 light:text-zinc-700 group-hover/sim:text-white dark:group-hover/sim:text-white light:group-hover/sim:text-emerald-600 truncate">{sim.title}</div>
                  <div className="text-[11px] text-zinc-600 line-clamp-1">{sim.description[language] || sim.description.en}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
