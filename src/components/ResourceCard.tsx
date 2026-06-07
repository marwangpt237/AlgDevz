import { Language, Resource, Category } from '../types';
import { ExternalLink, Copy, Check, Bookmark, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
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

  const copyUrl = () => {
    navigator.clipboard.writeText(resource.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const similarResources = showSimilar ? findSimilarResources(resource, allCategories) : [];

  return (
    <div className="relative flex flex-col gap-0">
      <div className="group relative flex flex-col sm:flex-row gap-2 sm:gap-4 items-start p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-800/40 hover:border-zinc-700 transition-all z-10">
        <div className="flex-1 min-w-0 w-full">
          {breadcrumb && (
            <div className="text-xs font-medium text-emerald-500/70 mb-1.5 uppercase tracking-wider">
              {breadcrumb}
            </div>
          )}
          <div className="flex items-center gap-2 mb-1 w-full min-w-0">
            <a 
              href={resource.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-medium text-base sm:text-lg hover:underline underline-offset-4 decoration-emerald-500/30 flex items-center gap-1.5 break-words [line-break:anywhere]"
            >
              {resource.title}
            </a>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed mb-3 break-words [overflow-wrap:anywhere] whitespace-pre-wrap">
            {resource.description[language] || resource.description.en}
          </p>
          <div className="flex flex-wrap gap-2 items-center">
            {resource.tags.map(tag => (
              <span key={tag} className={`px-2 py-0.5 text-xs font-medium rounded-md border ${getTagColor(tag)}`}>
                {tag}
              </span>
            ))}
            
            {allCategories.length > 0 && (
              <button 
                onClick={() => setShowSimilar(!showSimilar)}
                className={`flex items-center gap-1.5 px-2 py-0.5 text-xs font-medium rounded-md border transition-colors ms-auto sm:ms-0 mt-2 sm:mt-0 ${
                  showSimilar 
                    ? 'bg-zinc-800 text-emerald-400 border-zinc-700' 
                    : 'bg-zinc-900/50 text-zinc-500 border-zinc-800 hover:bg-zinc-800 hover:text-zinc-300'
                }`}
              >
                <Sparkles className="w-3 h-3" />
                {language === 'ar' ? 'موارد مشابهة' : 'Similar'}
                {showSimilar ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center sm:opacity-0 group-hover:opacity-100 transition-opacity mt-4 sm:mt-0 self-end sm:self-auto gap-1">
          <button
            onClick={() => onToggleBookmark(resource.url)}
            className={`p-2 rounded-lg transition-colors ${
              isBookmarked 
                ? 'text-emerald-500 hover:bg-emerald-500/10' 
                : 'text-zinc-500 hover:text-emerald-400 hover:bg-emerald-500/10'
            }`}
            title={isBookmarked ? "Remove Bookmark" : "Add Bookmark"}
          >
            <Bookmark className="w-4 h-4" fill={isBookmarked ? "currentColor" : "none"} />
          </button>
          <button 
            onClick={copyUrl}
            className="p-2 text-zinc-500 hover:text-zinc-200 hover:bg-zinc-700/50 rounded-lg transition-colors"
            title="Copy Link"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
          </button>
          <a 
            href={resource.url}
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-zinc-500 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-colors"
            title="Visit Link"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {showSimilar && (
        <div className="px-4 sm:ps-8 sm:pe-4 pt-4 pb-2 border-x-2 border-b-2 border-zinc-800/40 rounded-b-xl -mt-2 bg-zinc-900/10 animate-in slide-in-from-top-2 fade-in duration-200">
          <div className="text-xs font-semibold text-zinc-500 mb-3 flex items-center gap-2">
            <Sparkles className="w-3 h-3" /> 
            {language === 'ar' ? 'ربما يعجبك أيضاً' : 'You might also like'}
          </div>
          {similarResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
              {similarResources.map((sim, i) => (
                <a 
                  key={i} 
                  href={sim.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-800 hover:border-zinc-700 transition-colors group/sim block"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-emerald-400 font-medium text-sm group-hover/sim:underline underline-offset-2 decoration-emerald-500/30 truncate pr-2">
                      {sim.title}
                    </span>
                    <ExternalLink className="w-3 h-3 text-zinc-600 group-hover/sim:text-emerald-500 shrink-0" />
                  </div>
                  <p className="text-zinc-500 text-xs line-clamp-1">
                    {sim.description[language] || sim.description.en}
                  </p>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-zinc-500 text-sm italic mb-2">
              {language === 'ar' ? 'لم يتم العثور على موارد مشابهة' : 'No similar resources found'}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
