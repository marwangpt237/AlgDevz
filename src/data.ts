import { Category } from './types';

export const categoriesData: Category[] = [
  {
    id: "adblocking_privacy",
    title: { en: "Adblocking & Privacy", ar: "حجب الإعلانات والخصوصية" },
    iconName: "Shield",
    subcategories: [
      {
        id: "adblockers",
        title: { en: "Adblockers", ar: "مانعات الإعلانات" },
        resources: [
          {
            title: "uBlock Origin",
            description: { en: "The best adblocker out there.", ar: "أفضل مانع إعلانات متاح." },
            url: "https://ublockorigin.com/",
            tags: ["adblock", "extension", "privacy"]
          },
          {
            title: "AdGuard",
            description: { en: "Advanced adblocker for all platforms.", ar: "مانع إعلانات متقدم لجميع المنصات." },
            url: "https://adguard.com/",
            tags: ["adblock", "software", "privacy"]
          }
        ]
      },
      {
        id: "browsers",
        title: { en: "Privacy Browsers", ar: "متصفحات الخصوصية" },
        resources: [
          {
            title: "Brave",
            description: { en: "Privacy-focused browser with built-in adblocker.", ar: "متصفح يركز على الخصوصية مع مانع إعلانات مدمج." },
            url: "https://brave.com/",
            tags: ["browser", "privacy"]
          },
          {
            title: "Firefox Privacy Tools",
            description: { en: "Tools to harden Firefox privacy.", ar: "أدوات لتعزيز خصوصية فايرفوكس." },
            url: "https://privacytools.io/browsers/",
            tags: ["firefox", "privacy", "tools"]
          }
        ]
      }
    ]
  },
  {
    id: "educational",
    title: { en: "Educational & Books", ar: "التعليم والكتب" },
    iconName: "BookOpen",
    subcategories: [
      {
        id: "books",
        title: { en: "Books & Papers", ar: "الكتب والأبحاث" },
        resources: [
          {
            title: "Anna's Archive",
            description: { en: "The largest open library in human history.", ar: "أكبر مكتبة مفتوحة في تاريخ البشرية." },
            url: "https://annas-archive.org/",
            tags: ["books", "library", "piracy"]
          },
          {
            title: "Library Genesis",
            description: { en: "Search engine for articles and books on various topics.", ar: "محرك بحث للمقالات والكتب في مواضيع مختلفة." },
            url: "https://libgen.is/",
            tags: ["books", "academic", "papers"]
          },
          {
            title: "Sci-Hub",
            description: { en: "Bypassing publisher paywalls for research papers.", ar: "تجاوز حواجز الدفع للناشرين للأوراق البحثية." },
            url: "https://sci-hub.se/",
            tags: ["research", "papers", "science"]
          }
        ]
      },
      {
        id: "courses",
        title: { en: "Courses & Tutorials", ar: "الدورات والدروس" },
        resources: [
          {
            title: "FreeCodeCamp",
            description: { en: "Learn to code for free.", ar: "تعلم البرمجة مجاناً." },
            url: "https://www.freecodecamp.org/",
            tags: ["programming", "courses", "free"]
          }
        ]
      }
    ]
  },
  {
    id: "tools",
    title: { en: "Tools & Software", ar: "الأدوات والبرامج" },
    iconName: "Wrench",
    subcategories: [
      {
        id: "software_sites",
        title: { en: "Software Sites", ar: "مواقع البرامج" },
        resources: [
          {
            title: "AlternativeTo",
            description: { en: "Find alternatives to software you know and want to replace.", ar: "ابحث عن بدائل للبرامج التي تعرفها وتريد استبدالها." },
            url: "https://alternativeto.net/",
            tags: ["software", "alternatives"]
          },
          {
            title: "FileCR",
            description: { en: "Safe software downloads.", ar: "تحميلات برامج آمنة." },
            url: "https://filecr.com/",
            tags: ["software", "download"]
          }
        ]
      },
      {
        id: "dev_tools",
        title: { en: "Developer Tools", ar: "أدوات المطورين" },
        resources: [
          {
            title: "CyberChef",
            description: { en: "The Cyber Swiss Army Knife.", ar: "أداة قوية لتحليل وفك تشفير البيانات." },
            url: "https://gchq.github.io/CyberChef/",
            tags: ["tools", "developer", "security"]
          },
          {
            title: "Regex101",
            description: { en: "Regular expression tester and debugger.", ar: "أداة لاختبار وتصحيح التعابير النمطية." },
            url: "https://regex101.com/",
            tags: ["regex", "tools", "developer"]
          }
        ]
      }
    ]
  },
  {
    id: "video",
    title: { en: "Video & Streaming", ar: "الفيديو والبث" },
    iconName: "Video",
    subcategories: [
      {
        id: "streaming",
        title: { en: "Streaming Sites", ar: "مواقع البث" },
        resources: [
          {
            title: "Fmovies",
            description: { en: "Watch movies and TV shows online for free.", ar: "مشاهدة الأفلام والبرامج التلفزيونية عبر الإنترنت مجاناً." },
            url: "https://fmovies.to/",
            tags: ["movies", "streaming", "tv"]
          },
          {
            title: "Stremio",
            description: { en: "Video streaming application, that allows to watch and organize video content.", ar: "تطبيق لبث الفيديو يسمح بمشاهدة وتنظيم المحتوى." },
            url: "https://www.stremio.com/",
            tags: ["software", "streaming", "movies"]
          }
        ]
      }
    ]
  },
  {
    id: "audio",
    title: { en: "Audio & Music", ar: "الصوت والموسيقى" },
    iconName: "Music",
    subcategories: [
      {
        id: "music_streaming",
        title: { en: "Music Streaming & Downloading", ar: "بث وتحميل الموسيقى" },
        resources: [
          {
            title: "SpotiFlyer",
            description: { en: "Download music from Spotify, YouTube, SoundCloud.", ar: "تحميل الموسيقى من سبوتيفاي، يوتيوب، ساوند كلاود." },
            url: "https://github.com/Shabinder/SpotiFlyer",
            tags: ["music", "download", "spotify"]
          },
          {
            title: "Doubledouble",
            description: { en: "Download high quality music.", ar: "تحميل موسيقى عالية الجودة." },
            url: "https://doubledouble.top/",
            tags: ["music", "download", "flac"]
          }
        ]
      }
    ]
  },
  {
    id: "games",
    title: { en: "Games", ar: "الألعاب" },
    iconName: "Gamepad2",
    subcategories: [
      {
        id: "pc_games",
        title: { en: "PC Games", ar: "ألعاب الحاسوب" },
        resources: [
          {
            title: "FitGirl Repacks",
            description: { en: "Highly compressed repacked PC games.", ar: "ألعاب حاسوب مضغوطة بشكل كبير." },
            url: "https://fitgirl-repacks.site/",
            tags: ["games", "repacks", "download"]
          },
          {
            title: "SteamUnlocked",
            description: { en: "Free pre-installed Steam games.", ar: "ألعاب ستيم مجانية مثبتة مسبقاً." },
            url: "https://steamunlocked.net/",
            tags: ["games", "steam", "download"]
          }
        ]
      }
    ]
  },
  {
    id: "torrenting",
    title: { en: "Torrenting", ar: "التورنت" },
    iconName: "Download",
    subcategories: [
      {
        id: "torrent_clients",
        title: { en: "Torrent Clients", ar: "برامج التورنت" },
        resources: [
          {
            title: "qBittorrent",
            description: { en: "The best open-source torrent client.", ar: "أفضل برنامج تورنت مفتوح المصدر." },
            url: "https://www.qbittorrent.org/",
            tags: ["torrent", "software", "open-source"]
          }
        ]
      },
      {
        id: "torrent_sites",
        title: { en: "Torrent Sites", ar: "مواقع التورنت" },
        resources: [
          {
            title: "1337x",
            description: { en: "General purpose torrents site.", ar: "موقع تورنت عام الأغراض." },
            url: "https://1337x.to/",
            tags: ["torrent", "movies", "games"]
          },
          {
            title: "RARBG",
            description: { en: "High quality movies and TV shows torrents (archive).", ar: "تورنت لأفلام وبرامج تلفزيونية عالية الجودة." },
            url: "https://rarbg.to/",
            tags: ["torrent", "movies", "tv"]
          }
        ]
      }
    ]
  },
  {
    id: "storage",
    title: { en: "Storage", ar: "التخزين" },
    iconName: "HardDrive",
    subcategories: [
      {
        id: "file_hosting",
        title: { en: "File Hosting", ar: "استضافة الملفات" },
        resources: [
          {
            title: "AnonFiles",
            description: { en: "Anonymous file uploading.", ar: "رفع ملفات مجهول الهوية." },
            url: "https://anonfiles.com/",
            tags: ["storage", "upload", "anonymous"]
          },
          {
            title: "Gofile",
            description: { en: "Free file sharing and storage platform.", ar: "منصة مجانية لمشاركة وتخزين الملفات." },
            url: "https://gofile.io/",
            tags: ["storage", "sharing"]
          }
        ]
      }
    ]
  },
  {
    id: "linux_macos",
    title: { en: "Linux & macOS", ar: "لينكس وماك" },
    iconName: "Terminal",
    subcategories: [
      {
        id: "mac_apps",
        title: { en: "macOS Apps", ar: "تطبيقات ماك" },
        resources: [
          {
            title: "MacDrop",
            description: { en: "Download cracked macOS apps.", ar: "تحميل تطبيقات ماك مكركة." },
            url: "https://macdrop.net/",
            tags: ["macos", "apps", "download"]
          }
        ]
      },
      {
        id: "linux_tools",
        title: { en: "Linux Tools", ar: "أدوات لينكس" },
        resources: [
          {
            title: "DistroWatch",
            description: { en: "Information and reviews on Linux distributions.", ar: "معلومات ومراجعات حول توزيعات لينكس." },
            url: "https://distrowatch.com/",
            tags: ["linux", "distros"]
          }
        ]
      }
    ]
  },
  {
    id: "ai",
    title: { en: "AI & Machine Learning", ar: "الذكاء الاصطناعي وتعلم الآلة" },
    iconName: "BrainCircuit",
    subcategories: [
      {
        id: "ai_chatbots",
        title: { en: "AI Chatbots & LLMs", ar: "روبوتات الدردشة والنماذج اللغوية الكبيرة" },
        resources: [
          {
            title: "ChatGPT",
            description: { en: "OpenAI's powerful conversational AI.", ar: "الذكاء الاصطناعي الحواري القوي من تشات جي بي تي (OpenAI)." },
            url: "https://chatgpt.com/",
            tags: ["ai", "chat", "llm"]
          },
          {
            title: "Claude",
            description: { en: "Anthropic's advanced AI assistant.", ar: "مساعد الذكاء الاصطناعي المتقدم من أنثروبيك." },
            url: "https://claude.ai/",
            tags: ["ai", "chat", "claude"]
          },
          {
            title: "HuggingChat",
            description: { en: "Open source alternatives to ChatGPT by Hugging Face.", ar: "بدائل مفتوحة المصدر لـ تشات جي بي تي من هجينج فيس." },
            url: "https://huggingface.co/chat/",
            tags: ["ai", "open-source", "chat"]
          },
          {
            title: "DuckDuckGo AI Chat",
            description: { en: "Anonymous access to various LLMs.", ar: "وصول مجهول الهوية لنماذج الذكاء الاصطناعي." },
            url: "https://duckduckgo.com/chat",
            tags: ["ai", "privacy", "chat"]
          }
        ]
      },
      {
        id: "ai_image",
        title: { en: "AI Image & Video Generation", ar: "توليد الصور والفيديو بالذكاء الاصطناعي" },
        resources: [
          {
            title: "Civitai",
            description: { en: "Model-sharing hub for AI image generation.", ar: "مركز لمشاركة نماذج الذكاء الاصطناعي لتوليد الصور." },
            url: "https://civitai.com/",
            tags: ["ai", "images", "models"]
          },
          {
            title: "Craiyon",
            description: { en: "Free online AI image generator from text.", ar: "مولد صور مجاني بالذكاء الاصطناعي من النصوص." },
            url: "https://www.craiyon.com/",
            tags: ["ai", "images", "free"]
          },
          {
            title: "Runway",
            description: { en: "Advanced AI video generation tools.", ar: "أدوات متقدمة لتوليد الفيديو بالذكاء الاصطناعي." },
            url: "https://runwayml.com/",
            tags: ["ai", "video", "generation"]
          }
        ]
      },
      {
        id: "ai_audio",
        title: { en: "AI Audio & Voice", ar: "الصوت بالذكاء الاصطناعي" },
        resources: [
          {
            title: "ElevenLabs",
            description: { en: "Most realistic AI text-to-speech software.", ar: "أكثر برامج تحويل النص إلى كلام بالذكاء الاصطناعي واقعية." },
            url: "https://elevenlabs.io/",
            tags: ["ai", "voice", "tts"]
          },
          {
            title: "Suno",
            description: { en: "Make a song with AI.", ar: "اصنع أغنية متكاملة باستخدام الذكاء الاصطناعي." },
            url: "https://suno.com/",
            tags: ["ai", "music", "audio"]
          }
        ]
      }
    ]
  },
  {
    id: "cloud_hosting",
    title: { en: "Cloud & Hosting", ar: "الاستضافة السحابية" },
    iconName: "Cloud",
    subcategories: [
      {
        id: "free_hosting",
        title: { en: "Free Hosting & PaaS", ar: "استضافة مجانية ومنصات" },
        resources: [
          {
            title: "GitHub Pages",
            description: { en: "Free hosting for static websites directly from a GitHub repository.", ar: "استضافة مجانية للمواقع الثابتة مباشرة من مستودع جيتهاب." },
            url: "https://pages.github.com/",
            tags: ["hosting", "free", "static"]
          },
          {
            title: "Vercel",
            description: { en: "Deploy web frameworks in seconds.", ar: "نشر أطر الويب في ثوانٍ." },
            url: "https://vercel.com/",
            tags: ["hosting", "paas", "frontend"]
          },
          {
            title: "Cloudflare Pages",
            description: { en: "Build and deploy fast sites worldwide.", ar: "بناء ونشر مواقع سريعة حول العالم." },
            url: "https://pages.cloudflare.com/",
            tags: ["hosting", "cloudflare", "free"]
          },
          {
            title: "Render",
            description: { en: "Cloud platform to build and run apps.", ar: "منصة سحابية لبناء وتشغيل التطبيقات." },
            url: "https://render.com/",
            tags: ["hosting", "backend", "paas"]
          }
        ]
      },
      {
        id: "privacy_storage",
        title: { en: "Privacy-focused Cloud Storage", ar: "تخزين سحابي يركز على الخصوصية" },
        resources: [
          {
            title: "Proton Drive",
            description: { en: "End-to-end encrypted Swiss cloud storage.", ar: "تخزين سحابي سويسري مشفر من النهاية إلى النهاية." },
            url: "https://proton.me/drive",
            tags: ["cloud", "storage", "privacy"]
          },
          {
            title: "Mega",
            description: { en: "Generous free tier encrypted cloud storage.", ar: "تخزين سحابي مشفر مع مساحة مجانية كبيرة." },
            url: "https://mega.io/",
            tags: ["cloud", "storage", "mega"]
          }
        ]
      }
    ]
  },
  {
    id: "mobile",
    title: { en: "Android & iOS", ar: "أندرويد وآي أو إس" },
    iconName: "Smartphone",
    subcategories: [
      {
        id: "android_stores",
        title: { en: "Android Alternate Stores", ar: "متاجر أندرويد البديلة" },
        resources: [
          {
            title: "F-Droid",
            description: { en: "Installable catalogue of FOSS applications for Android.", ar: "كتالوج قابل للتثبيت لتطبيقات أندرويد مفتوحة المصدر (FOSS)." },
            url: "https://f-droid.org/",
            tags: ["android", "apps", "open-source"]
          },
          {
            title: "Mobilism",
            description: { en: "Forum for downloading cracked Android apps.", ar: "منتدى لتحميل تطبيقات أندرويد المكركة." },
            url: "https://forum.mobilism.org/",
            tags: ["android", "cracked", "forum"]
          }
        ]
      },
      {
        id: "android_mods",
        title: { en: "Android Mods", ar: "تعديلات أندرويد" },
        resources: [
          {
            title: "ReVanced",
            description: { en: "Patch Android apps to remove ads (like YouTube).", ar: "تعديل تطبيقات أندرويد لإزالة الإعلانات (مثل يوتيوب)." },
            url: "https://revanced.app/",
            tags: ["android", "mods", "youtube"]
          }
        ]
      },
      {
        id: "ios_sideloading",
        title: { en: "iOS Sideloading", ar: "تثبيت التطبيقات الخارجية في iOS" },
        resources: [
          {
            title: "AltStore",
            description: { en: "Sideloading tool for iOS devices.", ar: "أداة لتثبيت التطبيقات الخارجية لأجهزة iOS." },
            url: "https://altstore.io/",
            tags: ["ios", "sideload", "tools"]
          },
          {
            title: "Sideloadly",
            description: { en: "Alternative iOS sideloading tool for Windows/macOS.", ar: "أداة بديلة لتثبيت التطبيقات الخارجية بنظام iOS من الويندوز والماك." },
            url: "https://sideloadly.io/",
            tags: ["ios", "sideload", "tools"]
          }
        ]
      }
    ]
  },
  {
    id: "communities",
    title: { en: "Communities", ar: "المجتمعات" },
    iconName: "Users",
    subcategories: [
      {
        id: "reddit",
        title: { en: "Subreddits", ar: "مجتمعات ريديت" },
        resources: [
          {
            title: "r/Piracy",
            description: { en: "The main Reddit community for piracy.", ar: "مجتمع ريديت الرئيسي للقرصنة." },
            url: "https://reddit.com/r/Piracy",
            tags: ["reddit", "community", "piracy"]
          },
          {
            title: "r/FREEMEDIAHECKYEAH",
            description: { en: "The FMHY subreddit.", ar: "مجتمع FMHY على ريديت." },
            url: "https://reddit.com/r/FREEMEDIAHECKYEAH",
            tags: ["reddit", "community", "fmhy"]
          }
        ]
      }
    ]
  }
];
