export type Language = 'en' | 'ar' | 'fr';

export interface Resource {
  title: string;
  description: {
    en: string;
    ar: string;
    fr?: string;
  };
  url: string;
  tags: string[];
  updatedAt?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

export interface SubCategory {
  id: string;
  title: {
    en: string;
    ar: string;
    fr?: string;
  };
  resources: Resource[];
}

export interface Category {
  id: string;
  title: {
    en: string;
    ar: string;
    fr?: string;
  };
  iconName: string;
  subcategories?: SubCategory[];
}
