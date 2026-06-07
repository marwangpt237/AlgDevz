import { Category, Language, Resource } from '../types';
import { SearchX } from 'lucide-react';
import { ResourceCard } from './ResourceCard';

interface SearchResultsProps {
  query: string;
  categories: Category[];
  language: Language;
  bookmarks: string[];
  toggleBookmark: (url: string) => void;
}

export function SearchResults({ query, categories, language, bookmarks, toggleBookmark }: SearchResultsProps) {
  const isAr = language === 'ar';
  
  const searchTerms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  
  const results: { categoryId: string, subTitle: string, resource: Resource }[] = [];
  
  if (searchTerms.length > 0) {
    categories.forEach(category => {
      if (!category.subcategories) return;
      category.subcategories.forEach(sub => {
        sub.resources.forEach(resource => {
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
          }
        });
      });
    });
  }

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
            <ResourceCard 
              key={i}
              resource={result.resource} 
              language={language} 
              isBookmarked={bookmarks.includes(result.resource.url)}
              onToggleBookmark={toggleBookmark}
              breadcrumb={result.subTitle}
              allCategories={categories}
            />
          ))}
        </div>
      )}
    </div>
  );
}

