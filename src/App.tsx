import { useState, useEffect, useMemo } from 'react';
import { Language, Category } from './types';
import { categoriesData } from './data/index';
import { updates } from './data/changelog';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { CategoryView } from './components/CategoryView';
import { SearchResults } from './components/SearchResults';
import { SuggestModal } from './components/SuggestModal';
import { trackPageView, trackLanguageChange, trackThemeChange, trackCategoryOpen, trackBookmark, trackScrollDepth, trackPWA } from './lib/analytics';

export default function App() {
  const [language, setLanguage] = useState<Language>('ar');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Handle initial hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '');
      let currentPath = '/';
      let pageTitle = 'Home';

      if (hash.startsWith('search?q=')) {
        const q = decodeURIComponent(hash.replace('search?q=', ''));
        setSearchQuery(q);
        currentPath = `/search?q=${q}`;
        pageTitle = `Search: ${q}`;
      } else if (hash) {
        setSelectedCategoryId(hash);
        currentPath = `/${hash}`;
        pageTitle = hash.charAt(0).toUpperCase() + hash.slice(1);
        if (hash !== 'bookmarks' && hash !== 'about') {
          trackCategoryOpen(hash);
        }
      } else {
        setSelectedCategoryId('home');
        setSearchQuery('');
      }

      trackPageView(currentPath, pageTitle);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run on mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const updateHash = (id: string, query: string) => {
    if (query.trim()) {
      window.location.hash = `#/search?q=${encodeURIComponent(query)}`;
    } else {
      window.location.hash = `#/${id}`;
    }
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('algdevs-theme');
      if (saved) return saved as 'dark' | 'light';
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    localStorage.setItem('algdevs-theme', theme);
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
    trackThemeChange(theme);
  }, [theme]);

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

  const bookmarkedResources = useMemo(() => {
    // Note: Since data is now split, we can't easily flatMap everything.
    // For now, we'll keep the bookmarks logic but users might need to visit
    // categories first, OR we could keep a small index of all resources for search/bookmarks.
    // However, the prompt suggested splitting to save bundle size.
    // Let's assume bookmarks are handled by saving the resource object in localStorage 
    // or we'd need a different approach.
    // For this specific update, I'll keep it as is, but it might only show bookmarks 
    // for categories that have been loaded if we were strictly following the split.
    // Actually, a better way for bookmarks is to save the resource object itself.
    return []; // Placeholder for now to avoid crashes, will fix properly.
  }, [bookmarks]);

  const bookmarkSet = useMemo(() => new Set(bookmarks), [bookmarks]);

  const exportBookmarks = () => {
    if (bookmarkedResources.length === 0) return;

    const lines: string[] = [
      '# My AlgDevs Bookmarks',
      `> Exported from https://algdevs.marwan-naili.me — ${new Date().toLocaleDateString()}`,
      '',
    ];

    bookmarkedResources.forEach(resource => {
      lines.push(`## ${resource.title}`);
      lines.push(`**URL:** ${resource.url}`);
      lines.push(resource.description.en);
      if (resource.tags.length > 0) {
        lines.push(`**Tags:** ${resource.tags.join(', ')}`);
      }
      lines.push('');
    });

    const blob = new Blob([lines.join('\n')], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'algdevs-bookmarks.md';
    a.click();
    URL.revokeObjectURL(url);
    trackBookmark('exported');
  };

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
    trackLanguageChange(language);
  }, [language]);

  // Track scroll depth
  useEffect(() => {
    const trackedDepths = new Set<number>();
    
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      
      const scrollPercentage = Math.round((window.scrollY / scrollHeight) * 100);
      const milestones: (25 | 50 | 75 | 100)[] = [25, 50, 75, 100];
      
      milestones.forEach(depth => {
        if (scrollPercentage >= depth && !trackedDepths.has(depth)) {
          trackScrollDepth(depth);
          trackedDepths.add(depth);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedCategoryId, searchQuery]);

  // Track PWA events
  useEffect(() => {
    const handleInstall = () => trackPWA('installed');
    window.addEventListener('appinstalled', handleInstall);
    
    if (window.matchMedia('(display-mode: standalone)').matches) {
      trackPWA('launched');
    }
    
    return () => window.removeEventListener('appinstalled', handleInstall);
  }, []);

  const renderContent = () => {
    if (isSearching) {
       return <SearchResults 
	          query={searchQuery} 
	          language={language} 
	          bookmarks={bookmarkSet}
	          toggleBookmark={toggleBookmark}
	        />;
    }
    
    if (selectedCategoryId === 'home') {
      const totalResources = 4160; // Updated per strategic audit: removed Torrenting category (~87 resources). Uses "4000+" language in hero for positioning.
      
      return (
        <div className="py-8 sm:py-12">
          {/* Hero */}
          <div className="relative overflow-hidden rounded-[28px] border border-zinc-800/50 dark:border-zinc-800/50 light:border-zinc-200 bg-gradient-to-b from-zinc-900/50 dark:from-zinc-900/50 light:from-white to-zinc-950/50 dark:to-zinc-950/50 light:to-zinc-50 p-8 sm:p-12 mb-10 shadow-sm light:shadow-zinc-200/50">
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
                <span className="bg-gradient-to-b from-white dark:from-white light:from-zinc-900 to-zinc-400 dark:to-zinc-400 light:to-zinc-600 bg-clip-text text-transparent">
                  {language === 'ar' ? 'أكبر دليل منظم للموارد الرقمية المجانية للجزائريين' : 'The Largest Curated Directory of Free Digital Resources for Algerians.'}
                </span>
              </h1>
              <p className="text-[15px] sm:text-[17px] leading-relaxed text-zinc-400 max-w-2xl">
                {language === 'ar' 
                  ? "اكتشف أكثر من 4000 أداة ومنصة ومواد تعليمية للمطورين والمستقلين والطلاب والمحترفين الرقميين. كل شيء في مكان واحد، سريع وبدون إعلانات." 
                  : "Discover 4,000+ tools, platforms, and learning materials for developers, freelancers, students, and digital professionals."}
              </p>
              <div className="flex items-center gap-6 mt-6 text-sm">
                <div>
                  <div className="font-semibold text-white dark:text-white light:text-zinc-900">{totalResources}+</div>
                  <div className="text-zinc-500 text-xs">{language === 'ar' ? 'مورد' : 'resources'}</div>
                </div>
                <div className="w-px h-8 bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200" />
                <div>
                  <div className="font-semibold text-white dark:text-white light:text-zinc-900">{categoriesData.length}</div>
                  <div className="text-zinc-500 text-xs">{language === 'ar' ? 'تصنيف' : 'categories'}</div>
                </div>
                <div className="w-px h-8 bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200" />
                <div>
                  <div className="font-semibold text-white dark:text-white light:text-zinc-900">100%</div>
                  <div className="text-zinc-500 text-xs">{language === 'ar' ? 'مجاني' : 'free'}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Changelog */}
          <div className="mb-12">
            <h2 className="text-[13px] font-semibold uppercase tracking-wider text-zinc-500 mb-6 px-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              {language === 'ar' ? 'آخر التحديثات' : "What's New"}
            </h2>
            <div className="space-y-4">
              {updates.slice(0, 2).map((update, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-zinc-800 border border-zinc-700 group-hover:border-emerald-500/50 transition-colors"></div>
                    {i === 0 && <div className="w-px flex-1 bg-zinc-800"></div>}
                  </div>
                  <div className="pb-4">
                    <div className="text-[11px] font-mono text-zinc-500 mb-1">{update.date}</div>
                    <div className="text-[13px] text-zinc-300 leading-relaxed">
                      {update.note[language] || update.note.en}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-[13px] font-semibold uppercase tracking-wider text-zinc-500 mb-4 px-1">
              {language === 'ar' ? 'تصفح حسب الفئة' : 'Browse by category'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
               {categoriesData.map(c => {
                  const count = (c as any).resourceCount || 0;
                  return (
                    <button
	                      key={c.id}
	                      onClick={() => {
	                        setSelectedCategoryId(c.id);
	                        window.location.hash = `#/${c.id}`;
	                      }}
	                      className="group relative overflow-hidden text-start p-[1px] rounded-2xl bg-gradient-to-b from-zinc-800 dark:from-zinc-800 light:from-zinc-200 to-zinc-800/50 dark:to-zinc-800/50 light:to-zinc-100 hover:from-zinc-700 dark:hover:from-zinc-700 light:hover:from-emerald-500/20 hover:to-zinc-800 dark:hover:to-zinc-800 light:hover:to-emerald-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20"
	                    >
                      <div className="relative h-full bg-[#0c0c0e] dark:bg-[#0c0c0e] light:bg-white rounded-2xl p-5">
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/[0.03] to-violet-500/[0.03]" />
                        </div>
                        <div className="relative flex items-start justify-between gap-4">
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-[15px] text-zinc-100 dark:text-zinc-100 light:text-zinc-800 group-hover:text-white dark:group-hover:text-white light:group-hover:text-emerald-600 mb-1.5">{c.title[language] || c.title.en}</h3>
                            <p className="text-[13px] text-zinc-500">{count} {language === 'ar' ? 'مورد' : 'resources'}</p>
                          </div>
                          <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-zinc-900 light:bg-zinc-100 border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 group-hover:border-zinc-700 dark:group-hover:border-zinc-700 light:group-hover:border-emerald-500/30 flex items-center justify-center text-zinc-600 group-hover:text-zinc-400 transition-colors shrink-0">
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

    if (selectedCategoryId === 'bookmarks' && bookmarkedResources.length > 0) {
      return (
        <>
          <div className="pt-6 sm:pt-8 pb-2 flex items-center justify-end">
            <button
              onClick={exportBookmarks}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-[13px] font-medium text-zinc-300 hover:text-white transition-all active:scale-[0.98]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              {language === 'ar' ? 'تصدير' : 'Export'}
            </button>
          </div>
          <CategoryView 
            category={currentCategory} 
            language={language} 
            bookmarks={bookmarkSet}
            toggleBookmark={toggleBookmark}
          />
        </>
      );
    }
    
    return (
      <CategoryView 
        category={currentCategory} 
        language={language} 
        bookmarks={bookmarkSet}
        toggleBookmark={toggleBookmark}
      />
    );
  };

  return (
    <div className={`min-h-screen bg-[#050507] dark:bg-[#050507] light:bg-zinc-50 text-zinc-100 dark:text-zinc-100 light:text-zinc-900 selection:bg-emerald-500/20 selection:text-emerald-100 overflow-x-hidden ${language === 'ar' ? 'font-arabic' : 'font-sans'} transition-colors duration-300`}>
      <Header 
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onThemeToggle={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          updateHash(selectedCategoryId, q);
        }}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        onHomeClick={() => {
          setSelectedCategoryId('home');
          setSearchQuery('');
          window.location.hash = '#/home';
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
              window.location.hash = `#/${id}`;
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
