import { useState, useEffect } from 'react';
import { Language, Category } from './types';
import { categoriesData } from './data';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { CategoryView } from './components/CategoryView';
import { SearchResults } from './components/SearchResults';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('home');
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

  const specialCategories: Category[] = [
    {
      id: 'home',
      title: { en: 'Home', ar: 'الرئيسية' },
      iconName: 'Home',
      subcategories: []
    },
    {
      id: 'about',
      title: { en: 'About', ar: 'حول الموقع' },
      iconName: 'Info',
      subcategories: []
    }
  ];

  const allCategories = [...specialCategories, bookmarksCategory, ...categoriesData];

  const isSearching = searchQuery.trim().length > 0;
  const currentCategory = allCategories.find(c => c.id === selectedCategoryId) || specialCategories[0];

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const renderContent = () => {
    if (isSearching) {
       return <SearchResults 
          query={searchQuery} 
          categories={categoriesData} 
          language={language} 
          bookmarks={bookmarks}
          toggleBookmark={toggleBookmark}
        />;
    }
    
    if (selectedCategoryId === 'home') {
      return (
        <div className="flex flex-col items-center justify-center py-20 text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-indigo-500 bg-clip-text text-transparent mb-6 tracking-tight">
            AlgDevs Resources
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mb-10 leading-relaxed font-medium">
            {language === 'ar' 
              ? "مرحباً بكم في AlgDevs، الدليل الشامل لأهم الموارد الرقمية وأدوات التطوير المجمعة بعناية لخدمة مجتمع المطورين." 
              : "Welcome to AlgDevs, the ultimate directory for digital resources and developer tools, carefully curated for the developer community."}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl w-full">
             {categoriesData.slice(0, 6).map(c => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategoryId(c.id)}
                  className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-emerald-500/50 hover:bg-zinc-800/80 transition-all text-start"
                >
                  <h3 className="font-semibold text-lg text-zinc-200 mb-2">{c.title[language] || c.title.en}</h3>
                  <p className="text-sm text-zinc-500">{c.subcategories.reduce((acc, sub) => acc + sub.resources.length, 0)} {language === 'ar' ? 'موارد' : 'Resources'}</p>
                </button>
             ))}
          </div>
        </div>
      );
    }
    
    if (selectedCategoryId === 'about') {
      return (
        <div className="max-w-3xl mx-auto py-12 px-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 sm:p-12 text-center md:text-start flex flex-col md:flex-row gap-8 items-center md:items-start">
             <div className="flex-1 space-y-6 w-full">
                <h2 className="text-3xl font-bold text-zinc-100">
                  {language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
                </h2>
                <div className="pt-4 space-y-4">
                  <div className="flex items-center gap-4 text-zinc-300 bg-zinc-950 p-4 rounded-xl border border-zinc-800/50">
                    <span className="font-mono text-emerald-400 font-semibold px-2 py-1 bg-emerald-500/10 rounded w-28 shrink-0 text-start">Email</span>
                    <a href="mailto:contact@marwan-naili.me" className="hover:text-emerald-400 transition-colors truncate">contact@marwan-naili.me</a>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-300 bg-zinc-950 p-4 rounded-xl border border-zinc-800/50">
                    <span className="font-mono text-blue-400 font-semibold px-2 py-1 bg-blue-500/10 rounded w-28 shrink-0 text-start">Gmail</span>
                    <a href="mailto:marwannaili.23.07@gmail.com" className="hover:text-blue-400 transition-colors truncate">marwannaili.23.07@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-300 bg-zinc-950 p-4 rounded-xl border border-zinc-800/50">
                    <span className="font-mono text-cyan-400 font-semibold px-2 py-1 bg-cyan-500/10 rounded w-28 shrink-0 text-start">Telegram</span>
                    <a href="https://t.me/mr1labs" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors truncate">@mr1labs</a>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-300 bg-zinc-950 p-4 rounded-xl border border-zinc-800/50">
                    <span className="font-mono text-purple-400 font-semibold px-2 py-1 bg-purple-500/10 rounded w-28 shrink-0 text-start">Phone</span>
                    <a href="tel:+213792431470" className="hover:text-purple-400 transition-colors truncate" dir="ltr">+213 792 431 470</a>
                  </div>
                </div>
             </div>
          </div>
        </div>
      );
    }
    
    return (
      <CategoryView 
        category={currentCategory} 
        language={language} 
        bookmarks={bookmarks}
        toggleBookmark={toggleBookmark}
      />
    );
  };

  return (
    <div className={`min-h-screen bg-[#111113] text-zinc-200 selection:bg-emerald-500/30 font-sans ${language === 'ar' ? 'font-arabic' : ''}`}>
      <Header 
        language={language}
        onLanguageChange={setLanguage}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        onHomeClick={() => {
          setSelectedCategoryId('home');
          setSearchQuery('');
        }}
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
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
