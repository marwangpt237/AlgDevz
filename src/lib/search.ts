import { Category, Resource, SubCategory } from '../types';
import { categoriesData } from '../data/index';

export interface SearchResult {
  categoryId: string;
  subTitle: string;
  resource: Resource;
}

/**
 * Searches through all categories by dynamically importing their data files.
 * This ensures search works even with lazy-loaded data.
 */
export async function searchAllCategories(query: string, language: string): Promise<SearchResult[]> {
  const searchTerms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (searchTerms.length === 0) return [];

  const results: SearchResult[] = [];
  
  // We search through all categories defined in the metadata
  const searchPromises = categoriesData.map(async (category) => {
    try {
      // Dynamic import of the category data
      const module = await import(`../data/${category.id}.ts`);
      const subcategories: SubCategory[] = module.subcategories;

      for (const sub of subcategories) {
        for (const resource of sub.resources) {
          const match = searchTerms.every(term => {
            return resource.title.toLowerCase().includes(term) ||
                   resource.description.en.toLowerCase().includes(term) ||
                   resource.description.ar.toLowerCase().includes(term) ||
                   (resource.description.fr && resource.description.fr.toLowerCase().includes(term)) ||
                   resource.tags.some(tag => tag.toLowerCase().includes(term));
          });

          if (match) {
            results.push({
              categoryId: category.id,
              subTitle: sub.title[language as any] || sub.title.en,
              resource
            });
            if (results.length >= 50) return; // Limit results
          }
        }
      }
    } catch (err) {
      console.error(`Failed to load category data for ${category.id}:`, err);
    }
  });

  await Promise.all(searchPromises);
  return results.slice(0, 50);
}
