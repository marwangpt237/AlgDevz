import { Search, Globe, Menu, Sparkles, Plus, Moon, Sun } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  theme: 'dark' | 'light';
  onThemeToggle: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  toggleSidebar: () => void;
  onHomeClick?: () => void;
  onSuggestClick?: () => void;
}

export function Header({ language, onLanguageChange, theme, onThemeToggle, searchQuery, onSearchChange, toggleSidebar, onHomeClick, onSuggestClick }: HeaderProps) {
  const isAr = language === 'ar';
  const isFr = language === 'fr';

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-zinc-800/50 bg-[#050507]/80 backdrop-blur-2xl">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="flex h-[64px] items-center gap-3">
          {/* Mobile menu */}
          <button 
            onClick={toggleSidebar}
            className="lg:hidden -ms-2 p-2.5 text-zinc-400 hover:text-white hover:bg-zinc-800/60 rounded-xl transition-colors"
            aria-label="Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          {/* Logo */}
          <button onClick={onHomeClick} className="flex items-center gap-2.5 group shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-emerald-500/20 rounded-xl blur-md group-hover:bg-emerald-500/30 transition-all" />
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-[17px] leading-none tracking-tight text-white">AlgDevs</div>
              <div className="text-[11px] text-zinc-500 -mt-0.5 font-medium">{isAr ? 'دليل المطور' : isFr ? 'Annuaire Dev' : 'Dev Directory'}</div>
            </div>
          </button>

          {/* Search - desktop */}
          <div className="hidden md:flex flex-1 max-w-[560px] mx-4 lg:mx-8">
            <div className="relative w-full group">
              <Search className="absolute start-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-emerald-400 transition-colors pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={isAr ? "ابحث عن أدوات، مواقع، موارد..." : isFr ? "Rechercher outils, sites..." : "Search tools, sites, resources..."}
                className="w-full h-10 ps-10 pe-4 bg-zinc-900/60 border border-zinc-800 rounded-xl text-[14px] text-white placeholder-zinc-500 outline-none focus:bg-zinc-900 focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 transition-all"
              />
              <div className="absolute end-2 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 text-[10px] font-medium bg-zinc-800 border border-zinc-700 rounded text-zinc-400">/</kbd>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 ms-auto">
            {onSuggestClick && (
              <button
                onClick={onSuggestClick}
                className="h-9 px-3 sm:px-3.5 inline-flex items-center gap-1.5 text-[13px] font-medium text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Plus className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{isAr ? 'اقترح' : isFr ? 'Suggérer' : 'Suggest'}</span>
              </button>
            )}

            <button
              onClick={onThemeToggle}
              className="h-9 w-9 grid place-items-center text-zinc-400 hover:text-white bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 rounded-xl transition-all"
              title={theme === 'dark' ? (isAr ? "الوضع المضيء" : "Light Mode") : (isAr ? "الوضع الليلي" : "Dark Mode")}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => {
                const next = isAr ? 'en' : language === 'en' ? 'fr' : 'ar';
                onLanguageChange(next as Language);
              }}
              className="h-9 w-9 grid place-items-center text-zinc-400 hover:text-white bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 rounded-xl transition-all"
              title={isAr ? "English" : language === 'en' ? "Français" : "العربية"}
            >
              <span className="text-[11px] font-bold">{language.toUpperCase()}</span>
            </button>
          </div>
        </div>

        {/* Search - mobile */}
        <div className="md:hidden pb-3 -mt-1">
          <div className="relative">
            <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={isAr ? "بحث..." : isFr ? "Recherche..." : "Search..."}
              className="w-full h-10 ps-9 pe-3 bg-zinc-900/80 border border-zinc-800 rounded-xl text-[14px] text-white placeholder-zinc-500 outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/10"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
