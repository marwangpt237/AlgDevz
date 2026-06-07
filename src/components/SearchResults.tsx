import { Category, Language, Resource } from '../types';
import { ExternalLink, Copy, Check, SearchX, Bookmark } from 'lucide-react';
import { useState } from 'react';
import { getTagColor } from '../utils';

interface SearchResultsProps {
  query: string;
  categories: Category[];
  language: Language;
  bookmarks: string[];
  toggleBookmark: (url: string) => void;
}

export function SearchResults({ query, categories, language, bookmarks, toggleBookmark }: SearchResultsProps) {
  const isAr = language === 'ar';
  
  // Simple case-insensitive search
  const lowerQuery = query.toLowerCase();
  
  const results: { categoryId: string, subTitle: string, resource: Resource }[] = [];
  
  categories.forEach(category => {
    category.subcategories.forEach(sub => {
      sub.resources.forEach(resource => {
        const matchesTitle = resource.title.toLowerCase().includes(lowerQuery);
        const matchesDesc = resource.description.en.toLowerCase().includes(lowerQuery) || 
                            resource.description.ar.toLowerCase().includes(lowerQuery);
        const matchesTag = resource.tags.some(tag => tag.toLowerCase().includes(lowerQuery));

        if (matchesTitle || matchesDesc || matchesTag) {
          results.push({
            categoryId: category.id,
            subTitle: sub.title[language],
            resource
          });
        }
      });
    });
  });

  return (
    <div className="py-8 animate-in fade-in duration-300">
      <h1 className="text-2xl font-bold text-zinc-100 mb-2">
        {isAr ? 'نتائج البحث عن' : 'Search results for'} <span className="text-emerald-400">"{query}"</span>
      </h1>
      <p className="text-zinc-500 mb-8">
        {isAr ? `تم العثور على ${results.length} نتيجة` : `Found ${results.length} results`}
      </p>

      {results.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-zinc-800 rounded-2xl">
          <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center mb-4">
            <SearchX className="w-8 h-8 text-zinc-600" />
          </div>
          <h3 className="text-lg font-medium text-zinc-300 mb-1">
            {isAr ? 'لا توجد نتائج' : 'No results found'}
          </h3>
          <p className="text-zinc-500 max-w-sm">
            {isAr 
              ? 'لم نتمكن من العثور على أي موارد تطابق بحثك. جرب كلمات مفتاحية مختلفة.' 
              : 'We couldn\'t find any resources matching your search. Try different keywords.'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {results.map((result, i) => (
            <div key={i} className="relative">
              <div className="text-xs font-medium text-emerald-500/70 mb-1.5 ms-4 uppercase tracking-wider">
                {result.subTitle}
              </div>
              <SearchResultItem 
                resource={result.resource} 
                language={language} 
                isBookmarked={bookmarks.includes(result.resource.url)}
                onToggleBookmark={toggleBookmark}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SearchResultItem({ 
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
    <div className="group flex flex-col sm:flex-row gap-2 sm:gap-4 items-start p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-800/40 hover:border-zinc-700 transition-all">
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
            <span key={tag} className={`px-2 py-0.5 text-xs font-medium rounded-md border ${getTagColor(tag)}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 transition-opacity mt-2 sm:mt-0">
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
