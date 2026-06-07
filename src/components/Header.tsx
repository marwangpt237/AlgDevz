import { Search, Globe, Menu, Github } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  toggleSidebar: () => void;
  onHomeClick?: () => void;
  onSuggestClick?: () => void;
}

export function Header({ language, onLanguageChange, searchQuery, onSearchChange, toggleSidebar, onHomeClick, onSuggestClick }: HeaderProps) {
  const isAr = language === 'ar';

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#111113]/80 backdrop-blur-md border-b border-zinc-800 z-50">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleSidebar}
            className="lg:hidden p-2 -ms-2 text-zinc-400 hover:text-zinc-100 rounded-md cursor-pointer"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <button onClick={onHomeClick} className="flex items-center gap-2 cursor-pointer outline-none">
            <div className="w-8 h-8 rounded bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
              <Github className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight hidden sm:block text-zinc-100">
              AlgDevs
            </span>
          </button>
        </div>

        <div className="flex-1 max-w-xl">
          <div className="relative group">
            <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-emerald-500 transition-colors">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={isAr ? "البحث في الموارد..." : "Search resources..."}
              className="w-full bg-zinc-900/50 border border-zinc-800 text-sm rounded-lg focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 block ps-10 p-2.5 text-zinc-200 placeholder-zinc-500 outline-none transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          {onSuggestClick && (
            <button
              onClick={onSuggestClick}
              className="hidden sm:flex items-center gap-2 px-3 py-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 rounded-lg transition-colors cursor-pointer"
            >
              <span className="hidden md:block w-4 h-4 text-center leading-none">+</span>
              {isAr ? 'اقتراح مورد' : 'Suggest'}
            </button>
          )}

          <button
            onClick={() => onLanguageChange(isAr ? 'en' : 'ar')}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors cursor-pointer"
            title={isAr ? "Switch to English" : "التبديل للعربية"}
          >
            <Globe className="w-4 h-4" />
            <span className="hidden sm:block">{isAr ? 'English' : 'العربية'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
