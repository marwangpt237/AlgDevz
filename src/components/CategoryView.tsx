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

  return (
    <div className="py-8 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-2">
        {category.title[language] || category.title.en}
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
                  {sub.title[language] || sub.title.en}
                </h2>
                
                <div className="space-y-4">
                  {sub.resources.map((resource, i) => (
                    <ResourceCard 
                      key={i} 
                      resource={resource} 
                      language={language} 
                      isBookmarked={bookmarks.includes(resource.url)}
                      onToggleBookmark={toggleBookmark}
                      allCategories={categoriesData}
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

