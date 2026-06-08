import { Category } from './types';
import { categoriesMetadata } from './data/index';

// We'll keep the variable name categoriesData but it will now point to metadata
// and resources will be loaded lazily in the CategoryView component.
export const categoriesData: Category[] = categoriesMetadata as Category[];

/*
Data has been moved to src/data/ directory for lazy loading and performance.
This file is kept for backward compatibility with components that import categoriesData.
*/
