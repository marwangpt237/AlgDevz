import { Category } from './types';

export const categoriesData: Category[] = [
  {
    id: "communities",
    title: { en: "Communities & Groups", ar: "المجتمعات والمجموعات" },
    iconName: "Users",
    subcategories: [
      {
        id: "facebook",
        title: { en: "Facebook Groups", ar: "مجموعات فيسبوك" },
        resources: [
          {
            title: "Algerian Developers",
            description: {
              en: "The largest Facebook group for Algerian developers to share knowledge and ask questions.",
              ar: "أكبر مجموعة على فيسبوك للمطورين الجزائريين لتبادل المعرفة وطرح الأسئلة."
            },
            url: "#",
            tags: ["facebook", "community", "general"]
          },
          {
            title: "Algerian AI Community",
            description: {
              en: "A community focused on Artificial Intelligence and Machine Learning in Algeria.",
              ar: "مجتمع يركز على الذكاء الاصطناعي وتعلم الآلة في الجزائر."
            },
            url: "#",
            tags: ["facebook", "ai", "machine-learning"]
          }
        ]
      },
      {
        id: "discord_slack",
        title: { en: "Discord & Slack", ar: "ديسكورد وسلاك" },
        resources: [
          {
            title: "DzNodes",
            description: {
              en: "A popular Discord server for Algerian tech enthusiasts and developers.",
              ar: "خادم ديسكورد شهير لعشاق التكنولوجيا والمطورين الجزائريين."
            },
            url: "#",
            tags: ["discord", "community", "chat"]
          }
        ]
      }
    ]
  },
  {
    id: "open_source",
    title: { en: "Open Source Projects", ar: "مشاريع مفتوحة المصدر" },
    iconName: "Github",
    subcategories: [
      {
        id: "tools",
        title: { en: "Tools & Libraries", ar: "أدوات ومكتبات" },
        resources: [
          {
            title: "Dzair APIs",
            description: {
              en: "Various APIs for Algerian data (wilayas, communes, zip codes).",
              ar: "واجهات برمجة تطبيقات مختلفة للبيانات الجزائرية (الولايات، البلديات، الرموز البريدية)."
            },
            url: "#",
            tags: ["api", "data", "algeria"]
          }
        ]
      }
    ]
  },
  {
    id: "learning",
    title: { en: "Learning & Tutorials", ar: "التعلم والدروس" },
    iconName: "BookOpen",
    subcategories: [
      {
        id: "youtube",
        title: { en: "YouTube Channels", ar: "قنوات يوتيوب" },
        resources: [
          {
            title: "Darija Coding",
            description: {
              en: "Programming concepts explained in Algerian Darja.",
              ar: "مفاهيم البرمجة مشروحة بالدارجة الجزائرية."
            },
            url: "#",
            tags: ["youtube", "video", "darja"]
          }
        ]
      }
    ]
  },
  {
    id: "jobs",
    title: { en: "Job Boards", ar: "منصات التوظيف" },
    iconName: "Briefcase",
    subcategories: [
      {
        id: "platforms",
        title: { en: "Job Platforms", ar: "منصات العمل" },
        resources: [
          {
            title: "Emploitic",
            description: {
              en: "The leading job board in Algeria for tech and non-tech jobs.",
              ar: "منصة التوظيف الرائدة في الجزائر للوظائف التقنية وغير التقنية."
            },
            url: "#",
            tags: ["jobs", "local", "portal"]
          }
        ]
      }
    ]
  }
];
