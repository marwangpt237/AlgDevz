import React from 'react';

export function CategorySkeleton() {
  return (
    <div className="py-6 sm:py-8 animate-pulse">
      {/* Header Skeleton */}
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-3">
          <div className="h-8 sm:h-10 w-48 bg-zinc-800 rounded-lg"></div>
          <div className="h-6 w-16 bg-zinc-900 rounded-lg border border-zinc-800"></div>
        </div>
        <div className="flex gap-2 mt-4 mb-6">
          <div className="h-6 w-20 bg-zinc-900 rounded-lg border border-zinc-800"></div>
          <div className="h-6 w-24 bg-zinc-900 rounded-lg border border-zinc-800"></div>
          <div className="h-6 w-16 bg-zinc-900 rounded-lg border border-zinc-800"></div>
        </div>
        <div className="h-px w-full bg-zinc-800" />
      </div>

      {/* Resource Cards Skeleton */}
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-zinc-800 rounded-lg"></div>
              <div className="h-5 w-40 bg-zinc-800 rounded-lg"></div>
            </div>
            <div className="grid gap-3">
              {[1, 2, 3].map((j) => (
                <div key={j} className="h-24 w-full bg-zinc-900/40 rounded-2xl border border-zinc-800/60"></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
