import { useState, useEffect } from 'react';
import { Language, Category } from './types';
import { categoriesData } from './data';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { CategoryView } from './components/CategoryView';
import { SearchResults } from './components/SearchResults';
import { SuggestModal } from './components/SuggestModal';

export default function App() {
  const [language, setLanguage] = useState<Language>('ar');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState(false);

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

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSidebarOpen]);

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
      const totalResources = categoriesData.reduce((acc, c) => acc + c.subcategories.reduce((a, s) => a + s.resources.length, 0), 0);
      
      return (
        <div className="py-8 sm:py-12">
          {/* Hero */}
          <div className="relative overflow-hidden rounded-[28px] border border-zinc-800/50 bg-gradient-to-b from-zinc-900/50 to-zinc-950/50 p-8 sm:p-12 mb-10">
            <div className="absolute inset-0">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px]" />
            </div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {language === 'ar' ? 'محدث يومياً' : 'Updated daily'}
              </div>
              <h1 className="text-[32px] sm:text-[44px] font-bold tracking-tight leading-[1.1] mb-4">
                <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                  {language === 'ar' ? 'دليل المطور الجزائري' : 'Algerian Dev Directory'}
                </span>
              </h1>
              <p className="text-[15px] sm:text-[17px] leading-relaxed text-zinc-400 max-w-2xl">
                {language === 'ar' 
                  ? "مجموعة منتقاة بعناية من أفضل الأدوات والموارد والمنصات للمطورين. كل شيء في مكان واحد، سريع وبدون إعلانات." 
                  : "Carefully curated tools, resources, and platforms for developers. Everything in one place — fast, clean, and ad-free."}
              </p>
              <div className="flex items-center gap-6 mt-6 text-sm">
                <div>
                  <div className="font-semibold text-white">{totalResources}+</div>
                  <div className="text-zinc-500 text-xs">{language === 'ar' ? 'مورد' : 'resources'}</div>
                </div>
                <div className="w-px h-8 bg-zinc-800" />
                <div>
                  <div className="font-semibold text-white">{categoriesData.length}</div>
                  <div className="text-zinc-500 text-xs">{language === 'ar' ? 'تصنيف' : 'categories'}</div>
                </div>
                <div className="w-px h-8 bg-zinc-800" />
                <div>
                  <div className="font-semibold text-white">100%</div>
                  <div className="text-zinc-500 text-xs">{language === 'ar' ? 'مجاني' : 'free'}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-[13px] font-semibold uppercase tracking-wider text-zinc-500 mb-4 px-1">
              {language === 'ar' ? 'تصفح حسب الفئة' : 'Browse by category'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
               {categoriesData.map(c => {
                  const count = c.subcategories.reduce((acc, sub) => acc + sub.resources.length, 0);
                  return (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCategoryId(c.id)}
                      className="group relative overflow-hidden text-start p-[1px] rounded-2xl bg-gradient-to-b from-zinc-800 to-zinc-800/50 hover:from-zinc-700 hover:to-zinc-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20"
                    >
                      <div className="relative h-full bg-[#0c0c0e] rounded-2xl p-5">
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/[0.03] to-violet-500/[0.03]" />
                        </div>
                        <div className="relative flex items-start justify-between gap-4">
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-[15px] text-zinc-100 group-hover:text-white mb-1.5">{c.title[language] || c.title.en}</h3>
                            <p className="text-[13px] text-zinc-500">{count} {language === 'ar' ? 'مورد' : 'resources'}</p>
                          </div>
                          <div className="w-8 h-8 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 flex items-center justify-center text-zinc-600 group-hover:text-zinc-400 transition-colors shrink-0">
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                          </div>
                        </div>
                      </div>
                    </button>
                  )
               })}
            </div>
          </div>
        </div>
      );
    }
    
    if (selectedCategoryId === 'about') {
      return (
        <div className="max-w-3xl mx-auto py-12 px-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="mb-10 text-center md:text-start">
            <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-4 tracking-tight">
              {language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
            </h1>
            <p className="text-zinc-400 text-lg">
               {language === 'ar' ? "تواصل معي في أي وقت بخصوص المشروع أو أي استفسار." : "Feel free to reach out anytime regarding the project or queries."}
            </p>
          </div>
          
          <div className="space-y-4">
             <a href="mailto:contact@marwan-naili.me" className="flex items-center gap-4 text-zinc-300 bg-zinc-900/50 p-5 rounded-2xl border border-zinc-800/60 hover:bg-zinc-900 hover:border-zinc-700 transition-all group">
               <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 group-hover:text-zinc-200">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
               </div>
               <div>
                  <div className="text-sm text-zinc-500 mb-1">{language === 'ar' ? 'البريد الإلكتروني للأعمال' : 'Business Email'}</div>
                  <div className="font-medium text-zinc-200">contact@marwan-naili.me</div>
               </div>
             </a>

             <a href="mailto:marwannaili.23.07@gmail.com" className="flex items-center gap-4 text-zinc-300 bg-zinc-900/50 p-5 rounded-2xl border border-zinc-800/60 hover:bg-zinc-900 hover:border-zinc-700 transition-all group">
               <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 group-hover:text-zinc-200">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/></svg>
               </div>
               <div>
                  <div className="text-sm text-zinc-500 mb-1">{language === 'ar' ? 'الجيميل الشخصي' : 'Personal Gmail'}</div>
                  <div className="font-medium text-zinc-200">marwannaili.23.07@gmail.com</div>
               </div>
             </a>

             <a href="https://t.me/mr1labs" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-zinc-300 bg-zinc-900/50 p-5 rounded-2xl border border-zinc-800/60 hover:bg-zinc-900 hover:border-zinc-700 transition-all group">
               <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 group-hover:text-zinc-200">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
               </div>
               <div>
                  <div className="text-sm text-zinc-500 mb-1">{language === 'ar' ? 'تيليجرام' : 'Telegram'}</div>
                  <div className="font-medium text-zinc-200" dir="ltr">@mr1labs</div>
               </div>
             </a>

             <a href="tel:+213792431470" className="flex items-center gap-4 text-zinc-300 bg-zinc-900/50 p-5 rounded-2xl border border-zinc-800/60 hover:bg-zinc-900 hover:border-zinc-700 transition-all group">
               <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 group-hover:text-zinc-200">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
               </div>
               <div>
                  <div className="text-sm text-zinc-500 mb-1">{language === 'ar' ? 'رقم الهاتف' : 'Phone'}</div>
                  <div className="font-medium text-zinc-200" dir="ltr">+213 792 431 470</div>
               </div>
             </a>
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
    <div className={`min-h-screen bg-[#050507] text-zinc-100 selection:bg-emerald-500/20 selection:text-emerald-100 overflow-x-hidden ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
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
        onSuggestClick={() => setIsSuggestModalOpen(true)}
      />
      
      <div className="mx-auto max-w-[1400px] px-3 sm:px-4 lg:px-6 xl:px-8 w-full overflow-x-hidden">
        <div className="flex items-start gap-0 lg:gap-6 xl:gap-8 pt-[84px] md:pt-[72px] w-full min-w-0">
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
          
          <main className="flex-1 min-w-0 pb-16 w-full max-w-full overflow-x-hidden">
            {renderContent()}
          </main>
        </div>
      </div>
      
      <SuggestModal 
        isOpen={isSuggestModalOpen}
        onClose={() => setIsSuggestModalOpen(false)}
        language={language}
      />
    </div>
  );
}
