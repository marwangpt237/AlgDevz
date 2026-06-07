import { Category, Language, Resource } from '../types';
import { ExternalLink, Copy, Check, Bookmark } from 'lucide-react';
import { useState } from 'react';

interface CategoryViewProps {
  category: Category;
  language: Language;
  bookmarks: string[];
  toggleBookmark: (url: string) => void;
}

export function CategoryView({ category, language, bookmarks, toggleBookmark }: CategoryViewProps) {
  const isEmpty = category.subcategories.every(sub => sub.resources.length === 0);

  return (
    <div className="py-8 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-2">
        {category.title[language]}
      </h1>
      <div className="h-1 w-20 bg-emerald-500 rounded-full mb-10"></div>

      {isEmpty ? (
        <div className="text-center py-20 border border-dashed border-zinc-800 rounded-2xl bg-zinc-900/10">
          <Bookmark className="w-8 h-8 text-zinc-600 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-zinc-300 mb-1">
            {language === 'ar' ? 'لا توجد موارد محفوظة' : 'No saved resources'}
          </h3>
          <p className="text-zinc-500">
            {language === 'ar' ? 'قم بحفظ بعض الموارد لعرضها هنا.' : 'Save some resources to see them here.'}
          </p>
        </div>
      ) : (
        <div className="space-y-12">
          {category.subcategories.map((sub) => {
            if (sub.resources.length === 0) return null;
            return (
              <div key={sub.id} className="scroll-mt-24" id={sub.id}>
                <h2 className="text-xl sm:text-2xl font-semibold text-zinc-200 mb-6 flex items-center gap-2 relative group">
                  <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity absolute -start-6">#</span>
                  {sub.title[language]}
                </h2>
                
                <div className="space-y-4">
                  {sub.resources.map((resource, i) => (
                    <ResourceItem 
                      key={i} 
                      resource={resource} 
                      language={language} 
                      isBookmarked={bookmarks.includes(resource.url)}
                      onToggleBookmark={toggleBookmark}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function ResourceItem({ 
  resource, 
  language,
  isBookmarked,
  onToggleBookmark
}: { 
  resource: Resource; 
  language: Language;
  isBookmarked: boolean;
  onToggleBookmark: (url: string) => void;
}) {
  const [copied, setCopied] = useState(false);

  const copyUrl = () => {
    navigator.clipboard.writeText(resource.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative flex flex-col sm:flex-row gap-2 sm:gap-4 items-start p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-800/40 hover:border-zinc-700 transition-all">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <a 
            href={resource.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 font-medium text-base sm:text-lg hover:underline underline-offset-4 decoration-emerald-500/30 flex items-center gap-1.5 break-words"
          >
            {resource.title}
          </a>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed mb-3">
          {resource.description[language]}
        </p>
        <div className="flex flex-wrap gap-2">
          {resource.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 text-xs font-medium bg-zinc-800 text-zinc-400 rounded-md border border-zinc-700/50">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 sm:opacity-0 group-hover:opacity-100 transition-opacity mt-4 sm:mt-0">
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
  );
}
