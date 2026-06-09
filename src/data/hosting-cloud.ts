import { SubCategory } from '../types';

export const subcategories: SubCategory[] = [
  {
    id: "cloud_providers",
    title: {
      en: "Cloud Providers",
      ar: "مزودي الخدمات السحابية"
    },
    resources: [
      {
        title: "Vercel",
        description: {
          en: "Platform for deploying frontend frameworks and static sites with automatic Git integration and global CDN. The free tier is sufficient for most personal projects and small sites without requiring a credit card.",
          ar: "منصة لنشر أطر عمل الواجهات الأمامية والمواقع الثابتة مع تكامل Git تلقائي وشبكة توصيل محتوى عالمية. الطبقة المجانية كافية لمعظم المشاريع الشخصية والمواقع الصغيرة بدون الحاجة إلى بطاقة ائتمان."
        },
        url: "https://vercel.com/",
        tags: ["hosting", "static", "frontend", "free-tier", "cdn", "git-deploy"],
        updatedAt: "2026-06-05",
        difficulty: "beginner",
        metadata: {
          availableForAlgerians: "Fully Available",
          recommendedFor: ["Developer", "Student", "Freelancer"],
          useCases: ["Deploying Next.js or React sites", "Static site hosting with previews", "Quick client project delivery"],
          _confidenceLabel: "official_verified",
          _lastVerified: "2026-06-09"
        }
      },
      {
        title: "Netlify",
        description: {
          en: "Service for building, deploying, and scaling modern web projects. Offers generous free bandwidth and build minutes. Popular for static sites and Jamstack applications.",
          ar: "خدمة لبناء ونشر وتوسيع مشاريع الويب الحديثة. توفر نطاق ترددي مجاني كبير ودقائق بناء. شائعة للمواقع الثابتة وتطبيقات Jamstack."
        },
        url: "https://www.netlify.com/",
        tags: ["hosting", "static", "jamstack", "free-tier", "cdn"],
        difficulty: "beginner",
        metadata: {
          availableForAlgerians: "Fully Available",
          recommendedFor: ["Developer", "Student"],
          useCases: ["Hosting static sites", "Form handling and serverless functions", "Continuous deployment from Git"],
          _confidenceLabel: "official_verified",
          _lastVerified: "2026-06-09"
        }
      },
      {
        title: "Cloudflare Pages",
        description: {
          en: "Static site hosting on Cloudflare's global network with unlimited bandwidth on the free plan. Strong performance and security features included by default.",
          ar: "استضافة مواقع ثابتة على شبكة Cloudflare العالمية مع نطاق ترددي غير محدود في الخطة المجانية. أداء وأمان قويان بشكل افتراضي."
        },
        url: "https://pages.cloudflare.com/",
        tags: ["hosting", "static", "cdn", "free-tier", "security"],
        difficulty: "beginner",
        metadata: {
          availableForAlgerians: "Fully Available",
          recommendedFor: ["Developer", "Student", "Freelancer"],
          useCases: ["High-traffic static sites", "Sites needing strong DDoS protection", "Free unlimited bandwidth projects"],
          _confidenceLabel: "official_verified",
          _lastVerified: "2026-06-09"
        }
      },
      {
        title: "GitHub Pages",
        description: {
          en: "Free static site hosting directly from a GitHub repository. Simple to set up with custom domains supported. Good for documentation, portfolios, and personal sites.",
          ar: "استضافة مجانية للمواقع الثابتة مباشرة من مستودع GitHub. سهلة الإعداد مع دعم النطاقات المخصصة. مناسبة للتوثيق والملفات الشخصية والمواقع الشخصية."
        },
        url: "https://pages.github.com/",
        tags: ["hosting", "static", "github", "free-tier", "documentation"],
        difficulty: "beginner",
        metadata: {
          availableForAlgerians: "Fully Available",
          recommendedFor: ["Developer", "Student"],
          useCases: ["Project documentation", "Personal portfolios", "Open source project sites"],
          _confidenceLabel: "official_verified",
          _lastVerified: "2026-06-09"
        }
      },
      {
        title: "Render",
        description: {
          en: "Platform offering free static site hosting and limited hours for web services and databases. Includes automatic SSL and Git-based deploys.",
          ar: "منصة توفر استضافة مجانية للمواقع الثابتة وساعات محدودة للخدمات الويب وقواعد البيانات. تشمل SSL تلقائي ونشر من Git."
        },
        url: "https://render.com/",
        tags: ["hosting", "static", "backend", "free-tier", "paas"],
        difficulty: "beginner",
        metadata: {
          availableForAlgerians: "Fully Available",
          recommendedFor: ["Developer", "Student"],
          useCases: ["Full-stack apps on free tier", "Static sites with occasional backend needs", "Learning deployment"],
          _confidenceLabel: "official_verified",
          _lastVerified: "2026-06-09"
        }
      },
      {
        title: "Firebase Hosting",
        description: {
          en: "Google's hosting solution with global CDN and integration with other Firebase services. Free tier available for static content and basic dynamic features.",
          ar: "حل استضافة من Google مع شبكة توصيل محتوى عالمية وتكامل مع خدمات Firebase الأخرى. طبقة مجانية متاحة للمحتوى الثابت والميزات الديناميكية الأساسية."
        },
        url: "https://firebase.google.com/products/hosting",
        tags: ["hosting", "static", "google", "free-tier", "cdn"],
        difficulty: "beginner",
        metadata: {
          availableForAlgerians: "Fully Available",
          recommendedFor: ["Developer", "Student"],
          useCases: ["Firebase-integrated apps", "Static sites with simple backend", "Quick prototypes"],
          _confidenceLabel: "official_verified",
          _lastVerified: "2026-06-09"
        }
      },
      {
        title: "Static.run",
        description: {
          en: "Simple drag-and-drop static hosting that requires no login for basic use. Limited number of sites on the free plan.",
          ar: "استضافة ثابتة بسيطة بالسحب والإفلات لا تتطلب تسجيل الدخول للاستخدام الأساسي. عدد محدود من المواقع في الخطة المجانية."
        },
        url: "https://static.run/",
        tags: ["hosting", "static", "simple", "free-tier", "no-login"],
        difficulty: "beginner",
        metadata: {
          availableForAlgerians: "Fully Available",
          recommendedFor: ["Student", "Freelancer"],
          useCases: ["Quick one-off sites", "Testing static HTML", "No-account deployments"],
          _confidenceLabel: "community_verified",
          _lastVerified: "2026-06-09"
        }
      },
      {
        title: "Surge.sh",
        description: {
          en: "Command-line tool for deploying static sites. Basic usage works without an account; paid plans add custom domains and more features.",
          ar: "أداة سطر أوامر لنشر المواقع الثابتة. الاستخدام الأساسي يعمل بدون حساب؛ الخطط المدفوعة تضيف نطاقات مخصصة وميزات إضافية."
        },
        url: "https://surge.sh/",
        tags: ["hosting", "static", "cli", "free-tier"],
        difficulty: "intermediate",
        metadata: {
          availableForAlgerians: "Fully Available",
          recommendedFor: ["Developer"],
          useCases: ["CLI-based deployments", "Simple static sites from terminal", "Quick sharing of builds"],
          _confidenceLabel: "community_verified",
          _lastVerified: "2026-06-09"
        }
      },
      {
        title: "Koyeb",
        description: {
          en: "Edge deployment platform with a free tier for one service. Supports containers and git deploys with global distribution.",
          ar: "منصة نشر على الحافة مع طبقة مجانية لخدمة واحدة. تدعم الحاويات والنشر من Git مع توزيع عالمي."
        },
        url: "https://www.koyeb.com/",
        tags: ["hosting", "serverless", "edge", "free-tier", "containers"],
        difficulty: "intermediate",
        metadata: {
          availableForAlgerians: "Fully Available",
          recommendedFor: ["Developer", "SaaS Builder"],
          useCases: ["Global edge applications", "Containerized services on free tier", "Serverless backends"],
          _confidenceLabel: "official_verified",
          _lastVerified: "2026-06-09"
        }
      },
      {
        title: "Fly.io",
        description: {
          en: "Platform for deploying full applications close to users with a free allowance of VMs and storage. Good for global apps that need low latency.",
          ar: "منصة لنشر التطبيقات الكاملة قريباً من المستخدمين مع حصة مجانية من الآلات الافتراضية والتخزين. جيدة للتطبيقات العالمية التي تحتاج زمن استجابة منخفض."
        },
        url: "https://fly.io/",
        tags: ["hosting", "paas", "global", "free-tier", "vms"],
        difficulty: "intermediate",
        metadata: {
          availableForAlgerians: "Fully Available",
          recommendedFor: ["Developer"],
          useCases: ["Low-latency global apps", "Docker-based deployments", "Persistent services on free tier"],
          _confidenceLabel: "official_verified",
          _lastVerified: "2026-06-09"
        }
      },
      {
        title: "Glitch",
        description: {
          en: "Online environment for building and hosting full-stack web apps with instant previews. Free tier includes public projects and some resource limits.",
          ar: "بيئة عبر الإنترنت لبناء واستضافة تطبيقات ويب كاملة مع معاينات فورية. الطبقة المجانية تشمل مشاريع عامة وبعض حدود الموارد."
        },
        url: "https://glitch.com/",
        tags: ["hosting", "fullstack", "ide", "free-tier", "prototyping"],
        difficulty: "beginner",
        metadata: {
          availableForAlgerians: "Fully Available",
          recommendedFor: ["Student", "Developer"],
          useCases: ["Rapid prototyping", "Learning full-stack development", "Small collaborative projects"],
          _confidenceLabel: "official_verified",
          _lastVerified: "2026-06-09"
        }
      },
      {
        title: "Replit",
        description: {
          en: "Browser-based IDE with built-in hosting and deployment. Free tier allows running and sharing projects with some compute limits.",
          ar: "بيئة تطوير متكاملة في المتصفح مع استضافة ونشر مدمجين. الطبقة المجانية تسمح بتشغيل ومشاركة المشاريع مع بعض حدود الحوسبة."
        },
        url: "https://replit.com/",
        tags: ["hosting", "ide", "fullstack", "free-tier", "education"],
        difficulty: "beginner",
        metadata: {
          availableForAlgerians: "Fully Available",
          recommendedFor: ["Student", "Developer"],
          useCases: ["Learning to code", "Quick prototypes and demos", "Collaborative coding sessions"],
          _confidenceLabel: "official_verified",
          _lastVerified: "2026-06-09"
        }
      },
      {
        title: "Oracle Cloud Always Free",
        description: {
          en: "Oracle's always-free tier includes two ARM VMs with significant RAM and storage, plus other services. Useful for persistent servers and learning infrastructure.",
          ar: "الطبقة المجانية الدائمة من Oracle تشمل جهازين افتراضيين ARM مع ذاكرة وتخزين كبيرين، بالإضافة إلى خدمات أخرى. مفيدة للخوادم الدائمة وتعلم البنية التحتية."
        },
        url: "https://www.oracle.com/cloud/free/",
        tags: ["cloud", "vps", "free-tier", "always-free", "arm", "infrastructure"],
        difficulty: "intermediate",
        metadata: {
          availableForAlgerians: "Fully Available",
          recommendedFor: ["Developer", "Student"],
          useCases: ["Always-on personal servers", "Hosting databases or services", "Learning cloud and Linux administration"],
          _confidenceLabel: "official_verified",
          _lastVerified: "2026-06-09"
        }
      },
      {
        title: "Serv00.com",
        description: {
          en: "Free hosting with SSH access, support for Node.js, Python, PHP, and multiple databases. Includes a generous storage and site allowance with no credit card required.",
          ar: "استضافة مجانية مع وصول SSH، دعم Node.js وPython وPHP وقواعد بيانات متعددة. تشمل مساحة تخزين وعدد مواقع سخية بدون الحاجة إلى بطاقة ائتمان."
        },
        url: "https://serv00.com/",
        tags: ["hosting", "vps", "ssh", "free-tier", "no-cc", "student-friendly"],
        difficulty: "intermediate",
        metadata: {
          availableForAlgerians: "Fully Available",
          recommendedFor: ["Student", "Developer"],
          useCases: ["Learning server administration", "Hosting personal projects with SSH", "Running scripts and small services"],
          _confidenceLabel: "community_verified",
          _lastVerified: "2026-06-09"
        }
      },
      {
        title: "HelioHost",
        description: {
          en: "Non-profit free hosting community that has been running since 2005. Offers cPanel, no ads, and reliable service supported by volunteers.",
          ar: "مجتمع استضافة مجانية غير ربحي يعمل منذ 2005. يوفر cPanel وبدون إعلانات وخدمة موثوقة مدعومة من المتطوعين."
        },
        url: "https://heliohost.org/",
        tags: ["hosting", "cpanel", "free-tier", "nonprofit", "no-cc"],
        difficulty: "beginner",
        metadata: {
          availableForAlgerians: "Fully Available",
          recommendedFor: ["Student", "Freelancer"],
          useCases: ["Traditional cPanel hosting for free", "PHP and MySQL projects", "Long-term free personal sites"],
          _confidenceLabel: "community_verified",
          _lastVerified: "2026-06-09"
        }
      },
      {
        title: "InfinityFree",
        description: {
          en: "Unlimited free hosting with PHP, MySQL, and no forced ads. Includes a control panel and is popular for simple websites and learning.",
          ar: "استضافة مجانية غير محدودة مع PHP وMySQL وبدون إعلانات قسرية. تشمل لوحة تحكم وشائعة للمواقع البسيطة والتعلم."
        },
        url: "https://www.infinityfree.com/",
        tags: ["hosting", "php", "mysql", "free-tier", "unlimited", "no-cc"],
        difficulty: "beginner",
        metadata: {
          availableForAlgerians: "Fully Available",
          recommendedFor: ["Student", "Freelancer"],
          useCases: ["Simple PHP websites", "Learning web hosting basics", "Personal blogs or portfolios"],
          _confidenceLabel: "community_verified",
          _lastVerified: "2026-06-09"
        }
      },
      {
        title: "Neocities",
        description: {
          en: "Free static hosting focused on creative and personal websites. Includes 1GB of storage and a simple editor. Popular for portfolios and experimental sites.",
          ar: "استضافة ثابتة مجانية تركز على المواقع الإبداعية والشخصية. تشمل 1 جيجابايت تخزين ومحرر بسيط. شائعة للملفات الشخصية والمواقع التجريبية."
        },
        url: "https://neocities.org/",
        tags: ["hosting", "static", "creative", "free-tier", "portfolios"],
        difficulty: "beginner",
        metadata: {
          availableForAlgerians: "Fully Available",
          recommendedFor: ["Student", "Freelancer", "Designer"],
          useCases: ["Personal portfolios", "Creative or experimental sites", "Learning basic web development"],
          _confidenceLabel: "official_verified",
          _lastVerified: "2026-06-09"
        }
      },
      {
        title: "Supabase",
        description: {
          en: "Open-source Firebase alternative providing a free Postgres database, authentication, and storage. Useful for building full-stack applications quickly.",
          ar: "بديل مفتوح المصدر لـ Firebase يوفر قاعدة بيانات Postgres مجانية ومصادقة وتخزين. مفيد لبناء تطبيقات كاملة بسرعة."
        },
        url: "https://supabase.com/",
        tags: ["backend", "database", "auth", "free-tier", "postgres"],
        difficulty: "intermediate",
        metadata: {
          availableForAlgerians: "Fully Available",
          recommendedFor: ["Developer", "Startup Founder"],
          useCases: ["Building MVPs with database and auth", "Replacing Firebase for Postgres users", "Full-stack prototypes"],
          _confidenceLabel: "official_verified",
          _lastVerified: "2026-06-09"
        }
      }
    ]
  }
];
