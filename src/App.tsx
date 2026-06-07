import { useState, useEffect } from 'react';
import { Language, Category } from './types';
import { categoriesData } from './data';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { CategoryView } from './components/CategoryView';
import { SearchResults } from './components/SearchResults';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(categoriesData[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('algdevs-bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('algdevs-bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (url: string) => {
    setBookmarks(prev => 
      prev.includes(url) ? prev.filter(b => b !== url) : [...prev, url]
    );
  };

  const bookmarkedResources = categoriesData.flatMap(c => 
    c.subcategories.flatMap(s => 
      s.resources.filter(r => bookmarks.includes(r.url))
    )
  );

  const bookmarksCategory: Category = {
    id: 'bookmarks',
    title: { en: 'Bookmarks', ar: 'العلامات المرجعية' },
    iconName: 'Bookmark',
    subcategories: [
      {
        id: 'saved_items',
        title: { en: 'Saved Resources', ar: 'الموارد المحفوظة' },
        resources: bookmarkedResources
      }
    ]
  };

  const allCategories = [bookmarksCategory, ...categoriesData];

  const isSearching = searchQuery.trim().length > 0;
  const currentCategory = allCategories.find(c => c.id === selectedCategoryId) || allCategories[0];

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className={`min-h-screen bg-[#111113] text-zinc-200 selection:bg-emerald-500/30 font-sans ${language === 'ar' ? 'font-arabic' : ''}`}>
      <Header 
        language={language}
        onLanguageChange={setLanguage}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      
      <div className="flex max-w-7xl mx-auto items-start relative px-4 sm:px-6 lg:px-8 pt-20">
        <Sidebar 
          categories={allCategories}
          selectedId={selectedCategoryId}
          onSelect={(id) => {
            setSelectedCategoryId(id);
            setSearchQuery('');
            setIsSidebarOpen(false);
          }}
          language={language}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        
        <main className="flex-1 min-w-0 pb-24 lg:ps-12 w-full">
          {isSearching ? (
            <SearchResults 
              query={searchQuery} 
              categories={categoriesData} 
              language={language} 
              bookmarks={bookmarks}
              toggleBookmark={toggleBookmark}
            />
          ) : (
            <CategoryView 
              category={currentCategory} 
              language={language} 
              bookmarks={bookmarks}
              toggleBookmark={toggleBookmark}
            />
          )}
        </main>
      </div>
    </div>
  );
}
