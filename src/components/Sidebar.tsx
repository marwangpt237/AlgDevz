import { Category, Language } from '../types';
import * as Icons from 'lucide-react';
import { X } from 'lucide-react';

interface SidebarProps {
  categories: Category[];
  selectedId: string;
  onSelect: (id: string) => void;
  language: Language;
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ categories, selectedId, onSelect, language, isOpen, onClose }: SidebarProps) {
  const isAr = language === 'ar';
  
  return (
    <>
      {/* Mobile backdrop */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 lg:top-[64px] inset-y-0 start-0 z-50
        w-[300px] sm:w-[320px] lg:w-[260px] xl:w-[280px]
        h-screen lg:h-[calc(100vh-64px)]
        bg-[#080809] lg:bg-transparent
        border-e border-zinc-800/50
        flex flex-col
        transition-transform duration-300 ease-out
        ${isOpen ? 'translate-x-0' : isAr ? 'translate-x-full lg:translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Mobile header */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-zinc-800/50 h-[64px]">
          <span className="font-semibold text-white">{isAr ? 'التصنيفات' : 'Categories'}</span>
          <button onClick={onClose} className="p-2 -me-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto overscroll-contain px-3 py-4 lg:py-6">
          <nav className="space-y-1">
            {categories.map((category) => {
              const Icon = (Icons as any)[category.iconName] || Icons.Folder;
              const isSelected = selectedId === category.id;
              const count = category.subcategories?.reduce((acc, sub) => acc + sub.resources.length, 0) || 0;
              const hideBadge = category.id === 'home' || category.id === 'about';
              
              return (
                <button
                  key={category.id}
                  onClick={() => onSelect(category.id)}
                  className={`
                    group relative w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] font-medium transition-all text-start
                    ${isSelected 
                      ? 'bg-zinc-900 text-white' 
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60'
                    }
                  `}
                >
                  {isSelected && (
                    <div className="absolute inset-y-1 start-0 w-[3px] bg-emerald-500 rounded-full" />
                  )}
                  <div className={`p-1.5 rounded-lg transition-colors ${isSelected ? 'bg-emerald-500/15 text-emerald-400' : 'bg-zinc-800/50 text-zinc-500 group-hover:bg-zinc-800 group-hover:text-zinc-300'}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="flex-1 truncate">{category.title[language] || category.title.en}</span>
                  {!hideBadge && count > 0 && (
                    <span className={`text-[11px] font-medium px-1.5 py-0.5 rounded-md min-w-[22px] text-center ${isSelected ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-900 text-zinc-500 group-hover:bg-zinc-800'}`}>
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
          
          <div className="mt-8 pt-6 border-t border-zinc-800/50 px-3">
            <div className="text-[11px] font-medium text-zinc-600 uppercase tracking-wider mb-2">
              {isAr ? 'المجتمع' : 'Community'}
            </div>
            <a href="https://github.com/marwangpt237/AlgDevz" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[13px] text-zinc-500 hover:text-zinc-300 transition-colors">
              <Icons.Github className="w-3.5 h-3.5" />
              {isAr ? 'ساهم في المشروع' : 'Contribute on GitHub'}
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
