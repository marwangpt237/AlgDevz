/**
 * AlgDevs Analytics Utility Layer
 * Centralizes all Umami tracking logic for consistency and maintainability.
 */

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, any>) => void;
    };
  }
}

// Event Names Constants
export const ANALYTICS_EVENTS = {
  PAGE_VIEW: 'page_view',
  SEARCH_USED: 'search_used',
  SEARCH_NO_RESULTS: 'search_no_results',
  RESOURCE_OPENED: 'resource_opened',
  BOOKMARK_ADDED: 'bookmark_added',
  BOOKMARK_REMOVED: 'bookmark_removed',
  BOOKMARK_EXPORTED: 'bookmark_exported',
  LANGUAGE_CHANGED: 'language_changed',
  THEME_CHANGED: 'theme_changed',
  CATEGORY_OPENED: 'category_opened',
  SCROLL_DEPTH: 'scroll_depth',
  RESOURCE_COPIED: 'resource_copied',
  RESOURCE_SHARED: 'resource_shared',
  SUGGESTION_SUBMITTED: 'suggestion_submitted',
  PWA_INSTALLED: 'pwa_installed',
  PWA_LAUNCHED: 'pwa_launched',
} as const;

/**
 * Core tracking function that safely calls Umami
 */
export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.umami) {
    try {
      window.umami.track(eventName, eventData);
    } catch (error) {
      console.error('Analytics Error:', error);
    }
  }
};

/**
 * Track page views for hash-based routing
 */
export const trackPageView = (url: string, title?: string) => {
  trackEvent(ANALYTICS_EVENTS.PAGE_VIEW, { url, title });
};

/**
 * Track search usage with metadata
 */
export const trackSearch = (query: string, resultCount: number, language: string) => {
  if (!query.trim()) return;
  
  const eventName = resultCount === 0 ? ANALYTICS_EVENTS.SEARCH_NO_RESULTS : ANALYTICS_EVENTS.SEARCH_USED;
  
  trackEvent(eventName, {
    query: query.toLowerCase(),
    query_length: query.length,
    result_count: resultCount,
    language
  });
};

/**
 * Track when a resource link is clicked
 */
export const trackResourceOpen = (resourceName: string, category: string, language: string) => {
  trackEvent(ANALYTICS_EVENTS.RESOURCE_OPENED, {
    resource_name: resourceName,
    category,
    language
  });
};

/**
 * Track bookmark actions
 */
export const trackBookmark = (action: 'added' | 'removed' | 'exported', resourceName?: string, category?: string) => {
  const eventName = 
    action === 'added' ? ANALYTICS_EVENTS.BOOKMARK_ADDED :
    action === 'removed' ? ANALYTICS_EVENTS.BOOKMARK_REMOVED :
    ANALYTICS_EVENTS.BOOKMARK_EXPORTED;

  trackEvent(eventName, {
    resource_name: resourceName,
    category
  });
};

/**
 * Track language preference changes
 */
export const trackLanguageChange = (language: string) => {
  trackEvent(ANALYTICS_EVENTS.LANGUAGE_CHANGED, { language });
};

/**
 * Track theme preference changes
 */
export const trackThemeChange = (theme: 'dark' | 'light') => {
  trackEvent(ANALYTICS_EVENTS.THEME_CHANGED, { theme });
};

/**
 * Track category navigation
 */
export const trackCategoryOpen = (categoryName: string) => {
  trackEvent(ANALYTICS_EVENTS.CATEGORY_OPENED, { category: categoryName });
};

/**
 * Track scroll depth milestones
 */
export const trackScrollDepth = (depth: 25 | 50 | 75 | 100) => {
  trackEvent(ANALYTICS_EVENTS.SCROLL_DEPTH, { depth: `${depth}%` });
};

/**
 * Track resource-specific actions (Copy/Share)
 */
export const trackResourceAction = (action: 'copy' | 'share', resourceName: string) => {
  const eventName = action === 'copy' ? ANALYTICS_EVENTS.RESOURCE_COPIED : ANALYTICS_EVENTS.RESOURCE_SHARED;
  trackEvent(eventName, { resource_name: resourceName });
};

/**
 * Track suggestion form submission
 */
export const trackSuggestion = (status: 'success' | 'error') => {
  trackEvent(ANALYTICS_EVENTS.SUGGESTION_SUBMITTED, { status });
};

/**
 * Track PWA related events
 */
export const trackPWA = (event: 'installed' | 'launched') => {
  const eventName = event === 'installed' ? ANALYTICS_EVENTS.PWA_INSTALLED : ANALYTICS_EVENTS.PWA_LAUNCHED;
  trackEvent(eventName);
};
