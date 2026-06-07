export type Language = 'en' | 'ar';

export interface Resource {
  title: string;
  description: {
    en: string;
    ar: string;
  };
  url: string;
  tags: string[];
}

export interface SubCategory {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  resources: Resource[];
}

export interface Category {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  iconName: string;
  subcategories: SubCategory[];
}
