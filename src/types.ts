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
  metadata?: {
    pricing?: string;
    availableForAlgerians?: 'Fully Available' | 'Partially Available' | 'Not Available';
    requirements?: string;
    advantages?: string;
    limitations?: string;
    status?: string;
    lastVerifiedDate?: string;
    recommendedFor?: string[];
    useCases?: string[];
  };
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
