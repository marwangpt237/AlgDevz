import { Language, Resource, Category } from '../types';
import { ExternalLink, Copy, Check, Bookmark, Sparkles, ChevronDown, Share2 } from 'lucide-react';
import React, { useState } from 'react';
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
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700/80 hover:bg-zinc-900/60">
        {/* subtle gradient accent */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-violet-500/5" />
        </div>
        
        <div className="relative p-3.5 sm:p-5 w-full">
          <div className="flex items-start gap-3 w-full min-w-0">
            <div className="flex-1 min-w-0 w-full overflow-hidden">
              {breadcrumb && (
                <div className="mb-2 flex items-center gap-1.5">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-zinc-800/60 border border-zinc-800 text-[10px] font-medium uppercase tracking-wider text-zinc-400 max-w-full truncate">
                    {breadcrumb}
                  </span>
                </div>
              )}
              
              <h3 className="flex items-start gap-1.5 mb-1.5 w-full min-w-0">
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[14px] sm:text-[15px] font-semibold leading-snug text-zinc-100 hover:text-emerald-400 transition-colors break-words hyphens-auto flex-1 min-w-0"
                  style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
                >
                  {resource.title}
                </a>
                <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-600 group-hover:text-zinc-400 mt-0.5 shrink-0 transition-colors" />
              </h3>
              
              <p className="text-[12px] sm:text-[13px] leading-[1.5] text-zinc-400 mb-2.5 break-words" style={{ overflowWrap: 'anywhere', wordBreak: 'break-word', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
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
                    className="ms-auto inline-flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-zinc-500 hover:text-zinc-300 transition-colors"
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
                onClick={() => onToggleBookmark(resource.url)}
                className={`w-9 h-9 sm:w-8 sm:h-8 grid place-items-center rounded-xl sm:rounded-lg border transition-all active:scale-95 touch-manipulation ${
                  isBookmarked 
                    ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400' 
                    : 'bg-zinc-800/70 border-zinc-700/50 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600 active:bg-zinc-700'
                }`}
                aria-label="Bookmark"
              >
                <Bookmark className="w-4 h-4 sm:w-3.5 sm:h-3.5" fill={isBookmarked ? "currentColor" : "none"} />
              </button>
              <button 
                onClick={shareResource}
                className="w-9 h-9 sm:w-8 sm:h-8 grid place-items-center rounded-xl sm:rounded-lg bg-zinc-800/70 border border-zinc-700/50 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600 active:bg-zinc-700 transition-all active:scale-95 touch-manipulation sm:hidden"
                aria-label="Share"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button 
                onClick={copyUrl}
                className="w-9 h-9 sm:w-8 sm:h-8 grid place-items-center rounded-xl sm:rounded-lg bg-zinc-800/70 border border-zinc-700/50 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600 active:bg-zinc-700 transition-all active:scale-95 touch-manipulation"
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
        <div className="mt-2 ms-3 sm:ms-6 me-0 p-3 rounded-xl border border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl animate-in slide-in-from-top-1 duration-200">
          <div className="grid sm:grid-cols-2 gap-2">
            {similarResources.map((sim, i) => (
              <a 
                key={i} 
                href={sim.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/sim flex items-start gap-2 p-2.5 rounded-lg hover:bg-zinc-900 transition-colors"
              >
                <div className="w-1 h-1 rounded-full bg-zinc-700 group-hover/sim:bg-emerald-500 mt-2 shrink-0 transition-colors" />
                <div className="min-w-0 flex-1">
                  <div className="text-[13px] font-medium text-zinc-300 group-hover/sim:text-white truncate">{sim.title}</div>
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
