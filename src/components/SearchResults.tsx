import { Language } from '../types';
import { SearchX, Loader2 } from 'lucide-react';
import { ResourceCard } from './ResourceCard';
import { useEffect, useState } from 'react';
import { trackSearch } from '../lib/analytics';
import { searchAllCategories, SearchResult } from '../lib/search';

interface SearchResultsProps {
  query: string;
  language: Language;
  bookmarks: Set<string>;
  toggleBookmark: (url: string) => void;
}

export function SearchResults({ query, language, bookmarks, toggleBookmark }: SearchResultsProps) {
  const isAr = language === 'ar';
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    let isMounted = true;
    
    async function performSearch() {
      if (!query.trim()) {
        setResults([]);
        return;
      }

      setIsSearching(true);
      const searchResults = await searchAllCategories(query, language);
      
      if (isMounted) {
        setResults(searchResults);
        setIsSearching(false);
        trackSearch(query, searchResults.length, language);
      }
    }

    performSearch();

    return () => {
      isMounted = false;
    };
  }, [query, language]);

  return (
    <div className="py-6 sm:py-8">
      <div className="mb-6">
        <h1 className="text-[22px] sm:text-[26px] font-bold text-white">
          {isAr ? 'نتائج البحث' : 'Search results'}
        </h1>
        <p className="mt-1 text-[14px] text-zinc-500">
          {isSearching ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-3 h-3 animate-spin" />
              {isAr ? 'جاري البحث...' : 'Searching...'}
            </span>
          ) : (
            <>
              {results.length} {isAr ? 'نتيجة لـ' : 'results for'} <span className="text-zinc-300">"{query}"</span>
            </>
          )}
        </p>
      </div>

      {!isSearching && results.length === 0 ? (
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/20 p-12 text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
            <SearchX className="w-5 h-5 text-zinc-600" />
          </div>
          <h3 className="text-[15px] font-medium text-zinc-200 mb-1">
            {isAr ? 'لا توجد نتائج' : 'No results'}
          </h3>
          <p className="text-[13px] text-zinc-500 max-w-sm mx-auto">
            {isAr 
              ? 'جرب كلمات مختلفة أو تصفح التصنيفات' 
              : 'Try different keywords or browse categories'}
          </p>
        </div>
      ) : (
        <div className="grid gap-3">
          {results.map((result, i) => (
            <ResourceCard 
              key={result.resource.url + i}
              resource={result.resource} 
              language={language} 
              isBookmarked={bookmarks.has(result.resource.url)}
              onToggleBookmark={toggleBookmark}
              breadcrumb={result.subTitle}
            />
          ))}
        </div>
      )}
    </div>
  );
}
