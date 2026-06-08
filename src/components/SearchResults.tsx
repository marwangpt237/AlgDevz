import { Category, Language, Resource } from '../types';
import { SearchX } from 'lucide-react';
import { ResourceCard } from './ResourceCard';

interface SearchResultsProps {
  query: string;
  categories: Category[];
  language: Language;
  bookmarks: Set<string>;
  toggleBookmark: (url: string) => void;
}

export function SearchResults({ query, categories, language, bookmarks, toggleBookmark }: SearchResultsProps) {
  const isAr = language === 'ar';
  
  const searchTerms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  
  const results: { categoryId: string, subTitle: string, resource: Resource }[] = [];
  
  if (searchTerms.length > 0) {
    for (const category of categories) {
      if (!category.subcategories) continue;
      for (const sub of category.subcategories) {
        for (const resource of sub.resources) {
          const match = searchTerms.every(term => {
            return resource.title.toLowerCase().includes(term) ||
                   resource.description.en.toLowerCase().includes(term) ||
                   resource.description.ar.toLowerCase().includes(term) ||
                   resource.tags.some(tag => tag.toLowerCase().includes(term));
          });

          if (match) {
            results.push({
              categoryId: category.id,
              subTitle: sub.title[language] || sub.title.en,
              resource
            });
            if (results.length >= 50) break;
          }
        }
        if (results.length >= 50) break;
      }
      if (results.length >= 50) break;
    }
  }

  return (
    <div className="py-6 sm:py-8">
      <div className="mb-6">
        <h1 className="text-[22px] sm:text-[26px] font-bold text-white">
          {isAr ? 'نتائج البحث' : 'Search results'}
        </h1>
        <p className="mt-1 text-[14px] text-zinc-500">
          {results.length} {isAr ? 'نتيجة لـ' : 'results for'} <span className="text-zinc-300">"{query}"</span>
        </p>
      </div>

      {results.length === 0 ? (
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