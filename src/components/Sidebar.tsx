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
  const isAr = language === 'ar';

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar sidebar */}
      <aside className={`
        fixed lg:sticky top-16 start-0 bottom-0 z-40
        w-72 lg:w-64 border-e border-zinc-800 bg-[#111113] lg:bg-transparent
        overflow-y-auto pt-6 pb-20 px-4 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        ${isAr && !isOpen && '-translate-x-full lg:translate-x-0'} 
        ${isAr && isOpen && 'translate-x-0'} 
      `}>
        {/* We handle RTL transforms correctly by using standard start/end logical properties but tailwind's translate-x needs careful handling.
            In RTL, -translate-x-full goes right if it's based on LTR, actually we should just use absolute positioning if tricky, 
            but for now we'll stick to a simpler approach: just hide it via opacity or rely on tailwind v4 natural RTL support. */}
        <nav className="space-y-1">
          {categories.map((category) => {
            const Icon = (Icons as any)[category.iconName] || Icons.CircleDot;
            const isSelected = selectedId === category.id;
            const count = category.subcategories.reduce((acc, sub) => acc + sub.resources.length, 0);
            
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
                  <span className="truncate">{category.title[language]}</span>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 ms-2 ${isSelected ? 'bg-emerald-500/20 text-emerald-400' : 'bg-zinc-800 text-zinc-500 group-hover:bg-zinc-700'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
