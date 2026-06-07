import { Category, Language, Resource } from '../types';
import { Bookmark } from 'lucide-react';
import { categoriesData } from '../data';
import { ResourceCard } from './ResourceCard';

interface CategoryViewProps {
  category: Category;
  language: Language;
  bookmarks: string[];
  toggleBookmark: (url: string) => void;
}

export function CategoryView({ category, language, bookmarks, toggleBookmark }: CategoryViewProps) {
  const isEmpty = category.subcategories.every(sub => sub.resources.length === 0);
  const total = category.subcategories.reduce((a, s) => a + s.resources.length, 0);

  return (
    <div className="py-6 sm:py-8">
      <div className="mb-8">
        <div className="flex items-baseline gap-3 mb-2">
          <h1 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-white">
            {category.title[language] || category.title.en}
          </h1>
          {total > 0 && (
            <span className="text-[13px] font-medium px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400">
              {total}
            </span>
          )}
        </div>
        <div className="h-px w-full bg-gradient-to-r from-emerald-500/50 via-zinc-800 to-transparent" />
      </div>

      {isEmpty ? (
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/20 p-12 text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/5 to-transparent" />
          <div className="relative">
            <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
              <Bookmark className="w-5 h-5 text-zinc-600" />
            </div>
            <h3 className="text-[15px] font-medium text-zinc-200 mb-1">
              {language === 'ar' ? 'لا توجد موارد محفوظة' : 'No saved resources yet'}
            </h3>
            <p className="text-[13px] text-zinc-500 max-w-sm mx-auto">
              {language === 'ar' ? 'انقر على أيقونة الإشارة المرجعية لحفظ مواردك المفضلة.' : 'Click the bookmark icon on any resource to save it here.'}
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-10">
          {category.subcategories.map((sub) => {
            if (sub.resources.length === 0) return null;
            return (
              <section key={sub.id} className="scroll-mt-24" id={sub.id}>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-[17px] font-semibold text-zinc-100">
                    {sub.title[language] || sub.title.en}
                  </h2>
                  <div className="h-px flex-1 bg-zinc-800/50" />
                  <span className="text-[11px] text-zinc-600 font-medium">{sub.resources.length}</span>
                </div>
                
                <div className="grid gap-3">
                  {sub.resources.map((resource, i) => (
                    <ResourceCard 
                      key={resource.url + i} 
                      resource={resource} 
                      language={language} 
                      isBookmarked={bookmarks.includes(resource.url)}
                      onToggleBookmark={toggleBookmark}
                      allCategories={categoriesData}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}

