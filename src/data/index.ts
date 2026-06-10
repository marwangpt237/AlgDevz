import { Category } from '../types';
import { subcategories as aiSubcategories } from './artificial-intelligence';
export const categoriesData: Category[] = [
  // Core Tools (أدوات أساسية) - Promoted per strategic audit
  {
    "id": "artificial-intelligence",
    "title": {
      "en": "Artificial Intelligence",
      "ar": "الذكاء الاصطناعي"
    },
    "iconName": "Sparkles",
    "subcategories": aiSubcategories,
    "resourceCount": 105
  },
  {
    "id": "hosting-cloud",
    "title": {
      "en": "Hosting & Cloud",
      "ar": "الاستضافة والخدمات السحابية"
    },
    "iconName": "Cloud",
    "resourceCount": 29
  },
  {
    id: 'business-payments',
    title: {
      en: 'Business & Payments',
      ar: 'الأعمال والمدفوعات',
    },
    iconName: 'Briefcase',
    resourceCount: 24,
  },
  {
    "id": "reading",
    "title": {
      "en": "Reading",
      "ar": "الكتب والقراءة"
    },
    "iconName": "Book",
    "resourceCount": 790
  },
  // Productivity & Utilities (أدوات الإنتاجية)
  {
    "id": "adblock",
    "title": {
      "en": "Adblock",
      "ar": "حجب الإعلانات"
    },
    "iconName": "ShieldBan",
    "resourceCount": 327
  },
  {
    "id": "downloading",
    "title": {
      "en": "Downloading",
      "ar": "التحميل"
    },
    "iconName": "Download",
    "resourceCount": 125
  },
  // Leisure & Lifestyle (أسلوب حياة) - De-emphasized (shown lower in nav/grid)
  {
    "id": "streaming",
    "title": {
      "en": "Streaming",
      "ar": "البث المباشر"
    },
    "iconName": "Film",
    "resourceCount": 896
  },
  {
    "id": "gaming",
    "title": {
      "en": "Gaming",
      "ar": "الألعاب"
    },
    "iconName": "Gamepad",
    "resourceCount": 852
  },
  {
    "id": "music",
    "title": {
      "en": "Music",
      "ar": "الموسيقى"
    },
    "iconName": "Music",
    "resourceCount": 793
  },
];
