import { Language, Resource, Category } from '../types';
import { ExternalLink, Copy, Check, Bookmark, Sparkles, ChevronDown, Share2 } from 'lucide-react';
import React, { useState, useMemo } from 'react';
import { getTagColor, findSimilarResources } from '../utils';
import { trackResourceOpen, trackBookmark, trackResourceAction } from '../lib/analytics';

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
    trackResourceAction('copy', resource.title);
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
        trackResourceAction('share', resource.title);
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
                  onClick={() => trackResourceOpen(resource.title, breadcrumb || 'General', language)}
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
                {(resource.metadata?.lastVerifiedDate || resource.metadata?._confidenceLabel === 'official_verified' || resource.metadata?.availableForAlgerians === 'Fully Available') && (
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-bold uppercase tracking-wider text-emerald-400 shrink-0">
                    {isAr ? 'موثق' : 'Verified'}
                  </span>
                )}
                {resource.difficulty && (
                  <span className={`inline-flex items-center px-1.5 py-0.5 rounded-md border text-[9px] font-bold uppercase tracking-wider shrink-0 ${
                    resource.difficulty === 'beginner' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' :
                    resource.difficulty === 'intermediate' ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' :
                    'bg-rose-500/10 border-rose-500/20 text-rose-400'
                  }`}>
                    {resource.difficulty}
                  </span>
                )}
                <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-600 group-hover:text-zinc-400 mt-0.5 shrink-0 transition-colors" />
              </h3>
              
              <p className="text-[12px] sm:text-[13px] leading-[1.5] text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mb-2.5 break-words" style={{ overflowWrap: 'anywhere', wordBreak: 'break-word', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {resource.description[language] || resource.description.en}
              </p>

              {resource.metadata && (
                <div className="mb-3 space-y-2 text-[11px] sm:text-[12px] border-t border-zinc-800/50 dark:border-zinc-800/50 light:border-zinc-100 pt-3">
                  {resource.metadata.availableForAlgerians && (
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-500 font-medium shrink-0">{isAr ? 'التوفر في الجزائر:' : 'Availability in Algeria:'}</span>
                      <span className={`px-1.5 py-0.5 rounded-md font-bold ${
                        resource.metadata.availableForAlgerians === 'Fully Available' ? 'bg-emerald-500/10 text-emerald-400' :
                        resource.metadata.availableForAlgerians === 'Partially Available' ? 'bg-amber-500/10 text-amber-400' :
                        'bg-rose-500/10 text-rose-400'
                      }`}>
                        {resource.metadata.availableForAlgerians}
                      </span>
                    </div>
                  )}
                  {resource.metadata.pricing && (
                    <div className="flex items-start gap-2">
                      <span className="text-zinc-500 font-medium shrink-0">{isAr ? 'التسعير:' : 'Pricing:'}</span>
                      <span className="text-zinc-300 dark:text-zinc-300 light:text-zinc-700">{resource.metadata.pricing}</span>
                    </div>
                  )}
                  {resource.metadata.requirements && (
                    <div className="flex items-start gap-2">
                      <span className="text-zinc-500 font-medium shrink-0">{isAr ? 'المتطلبات:' : 'Requirements:'}</span>
                      <span className="text-zinc-300 dark:text-zinc-300 light:text-zinc-700">{resource.metadata.requirements}</span>
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                    {resource.metadata.advantages && (
                      <div className="space-y-1">
                        <div className="text-emerald-500/80 font-bold uppercase tracking-wider text-[9px]">{isAr ? 'المميزات' : 'Advantages'}</div>
                        <div className="text-zinc-400 leading-relaxed">{resource.metadata.advantages}</div>
                      </div>
                    )}
                    {resource.metadata.limitations && (
                      <div className="space-y-1">
                        <div className="text-rose-500/80 font-bold uppercase tracking-wider text-[9px]">{isAr ? 'القيود' : 'Limitations'}</div>
                        <div className="text-zinc-400 leading-relaxed">{resource.metadata.limitations}</div>
                      </div>
                    )}
                  </div>
                  {resource.metadata.recommendedFor && (
                    <div className="flex flex-wrap items-center gap-1.5 mt-2">
                      <span className="text-zinc-500 font-medium shrink-0">{isAr ? 'ينصح به لـ:' : 'Recommended For:'}</span>
                      {resource.metadata.recommendedFor.map(persona => (
                        <span key={persona} className="px-1.5 py-0.5 rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700">
                          {persona}
                        </span>
                      ))}
                    </div>
                  )}
                  {resource.metadata.useCases && (
                    <div className="flex flex-wrap items-center gap-1.5 mt-2">
                      <span className="text-zinc-500 font-medium shrink-0">{isAr ? 'حالات الاستخدام:' : 'Use Cases:'}</span>
                      {resource.metadata.useCases.map(useCase => (
                        <span key={useCase} className="px-1.5 py-0.5 rounded-md bg-emerald-500/5 text-emerald-500/80 border border-emerald-500/10">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
              
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

            {/* Actions - larger touch targets for mobile (fake likes removed per strategic audit) */}
            <div className="flex sm:flex-col items-center gap-1.5 shrink-0 -me-1">
              <button
                onClick={() => {
                  onToggleBookmark(resource.url);
                  trackBookmark(isBookmarked ? 'removed' : 'added', resource.title, breadcrumb || 'General');
                }}
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
