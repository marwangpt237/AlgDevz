import { Category, Language } from '../types';
import * as Icons from 'lucide-react';

interface SidebarProps {
  categories: Category[];
  selectedId: string;
  onSelect: (id: string) => void;
  language: Language;
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ categories, selectedId, onSelect, language, isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 start-0 z-[70] w-[280px] shrink-0
        lg:sticky lg:top-[64px] lg:z-10 lg:w-64 lg:h-[calc(100vh-64px)]
        border-e border-zinc-800 bg-[#111113]
        overflow-y-auto pt-6 lg:pt-8 pb-20 px-4 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : (language === 'ar' ? 'translate-x-[100%] lg:translate-x-0' : '-translate-x-full lg:translate-x-0')}
        ${!isOpen ? 'max-lg:opacity-0 max-lg:pointer-events-none' : ''}
      `}>
        <nav className="space-y-1">
          {categories.map((category) => {
            const Icon = (Icons as any)[category.iconName] || Icons.CircleDot;
            const isSelected = selectedId === category.id;
            const count = category.subcategories?.reduce((acc, sub) => acc + sub.resources.length, 0) || 0;
            const hideBadge = category.id === 'home' || category.id === 'about';
            
            return (
              <button
                key={category.id}
                onClick={() => onSelect(category.id)}
                className={`
                  w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-colors text-start cursor-pointer group
                  ${isSelected 
                    ? 'bg-emerald-500/10 text-emerald-400' 
                    : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200'
                  }
                `}
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="truncate">{category.title[language] || category.title.en}</span>
                </div>
                {!hideBadge && (
                  <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 ms-2 ${isSelected ? 'bg-emerald-500/20 text-emerald-400' : 'bg-zinc-800 text-zinc-500 group-hover:bg-zinc-700'}`}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
