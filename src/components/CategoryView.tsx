import { Category, Language } from '../types';
import { Bookmark, ChevronDown, ChevronUp, Filter, X } from 'lucide-react';
import { categoriesData } from '../data';
import { ResourceCard } from './ResourceCard';
import { useState, useMemo } from 'react';

interface CategoryViewProps {
  category: Category;
  language: Language;
  bookmarks: string[];
  toggleBookmark: (url: string) => void;
}

export function CategoryView({ category, language, bookmarks, toggleBookmark }: CategoryViewProps) {
  const isAr = language === 'ar';
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Track which subcategories are expanded - reset when category changes
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [visibleCount, setVisibleCount] = useState<Record<string, number>>({});

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    category.subcategories.forEach(sub => {
      sub.resources.forEach(res => {
        res.tags.forEach(tag => tags.add(tag));
      });
    });
    return Array.from(tags).sort();
  }, [category]);

  const filteredSubcategories = useMemo(() => {
    if (selectedTags.length === 0) return category.subcategories;
    return category.subcategories.map(sub => ({
      ...sub,
      resources: sub.resources.filter(res => 
        selectedTags.every(tag => res.tags.includes(tag))
      )
    })).filter(sub => sub.resources.length > 0);
  }, [category, selectedTags]);

  const isEmpty = filteredSubcategories.length === 0;
  const total = filteredSubcategories.reduce((a, s) => a + s.resources.length, 0);

  // Reset when category changes - critical for mobile performance
  useMemo(() => {
    const initial: Record<string, boolean> = {};
    // Only open first subcategory by default, like Hosting & Cloud
    if (category.subcategories[0]) {
      initial[category.subcategories[0].id] = true;
    }
    setExpanded(initial);
    setVisibleCount({});
    setSelectedTags([]);
    // Scroll to top on category change
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [category.id]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const toggleSub = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const loadMore = (id: string, current: number) => {
    setVisibleCount(prev => ({ ...prev, [id]: current + 24 }));
  };

  return (
    <div className="py-6 sm:py-8">
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-3">
          <h1 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold tracking-tight text-white leading-tight">
            {category.title[language] || category.title.en}
          </h1>
          {total > 0 && (
            <span className="text-[12px] sm:text-[13px] font-medium px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 shrink-0">
              {total.toLocaleString()} {isAr ? 'مورد' : ''}
            </span>
          )}
        </div>
        
        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 mb-6">
            <div className="flex items-center gap-2 me-2 text-zinc-500 text-[12px] font-medium">
              <Filter className="w-3.5 h-3.5" />
              {isAr ? 'تصفية:' : 'Filter:'}
            </div>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all border ${
                  selectedTags.includes(tag)
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                    : 'bg-zinc-900/50 border-zinc-800 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300'
                }`}
              >
                {tag}
              </button>
            ))}
            {selectedTags.length > 0 && (
              <button
                onClick={() => setSelectedTags([])}
                className="px-2.5 py-1 rounded-lg text-[11px] font-medium text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                <X className="w-3 h-3" />
                {isAr ? 'مسح الكل' : 'Clear all'}
              </button>
            )}
          </div>
        )}

        <div className="h-px w-full bg-gradient-to-r from-emerald-500/30 via-zinc-800 to-transparent" />
      </div>

      {isEmpty ? (
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/20 p-8 sm:p-12 text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
            <Bookmark className="w-5 h-5 text-zinc-600" />
          </div>
          <h3 className="text-[15px] font-medium text-zinc-200 mb-1">
            {isAr ? 'لا توجد موارد محفوظة' : 'No saved resources yet'}
          </h3>
          <p className="text-[13px] text-zinc-500 max-w-sm mx-auto">
            {isAr ? 'انقر على أيقونة الإشارة المرجعية لحفظ مواردك المفضلة.' : 'Click the bookmark icon on any resource to save it here.'}
          </p>
        </div>
      ) : (
        <div className="space-y-4 sm:space-y-6">
          {filteredSubcategories.map((sub) => {
            if (sub.resources.length === 0) return null;
            
            const isExpanded = expanded[sub.id] ?? false;
            const showCount = visibleCount[sub.id] ?? 12;
            const visibleResources = isExpanded ? sub.resources.slice(0, showCount) : [];
            const hasMore = showCount < sub.resources.length;

            return (
              <section key={sub.id} className="scroll-mt-24" id={sub.id}>
                {/* Subcategory header - always visible, tappable */}
                <button
                  onClick={() => toggleSub(sub.id)}
                  className="w-full group flex items-center gap-3 p-3 -mx-3 rounded-xl hover:bg-zinc-900/50 transition-colors text-start"
                >
                  <div className={`p-1.5 rounded-lg transition-all ${isExpanded ? 'bg-emerald-500/15 text-emerald-400 rotate-180' : 'bg-zinc-800/50 text-zinc-500 group-hover:bg-zinc-800 group-hover:text-zinc-300'}`}>
                    <ChevronDown className="w-3.5 h-3.5 transition-transform" />
                  </div>
                  <h2 className="text-[15px] sm:text-[16px] font-semibold text-zinc-100 flex-1 text-start">
                    {sub.title[language] || sub.title.en}
                  </h2>
                  <span className="text-[11px] sm:text-[12px] px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-500 font-medium shrink-0">
                    {sub.resources.length}
                  </span>
                </button>
                
                {/* Resources - only render when expanded */}
                {isExpanded && (
                  <div className="mt-3 ps-0 sm:ps-2">
                    <div className="grid gap-2.5 sm:gap-3">
                      {visibleResources.map((resource) => (
                        <ResourceCard 
                          key={resource.url} 
                          resource={resource} 
                          language={language} 
                          isBookmarked={bookmarks.includes(resource.url)}
                          onToggleBookmark={toggleBookmark}
                          allCategories={categoriesData}
                        />
                      ))}
                    </div>
                    
                    {hasMore && (
                      <button
                        onClick={() => loadMore(sub.id, showCount)}
                        className="mt-4 w-full sm:w-auto mx-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-[13px] font-medium text-zinc-300 hover:text-white transition-all active:scale-[0.98]"
                      >
                        {isAr ? 'عرض المزيد' : 'Load more'}
                        <span className="text-[11px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400">
                          +{Math.min(24, sub.resources.length - showCount)}
                        </span>
                      </button>
                    )}
                    
                    <div className="mt-3 text-[11px] text-zinc-600 text-center sm:text-start">
                      {isAr 
                        ? `عرض ${visibleResources.length} من ${sub.resources.length}`
                        : `Showing ${visibleResources.length} of ${sub.resources.length}`}
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}