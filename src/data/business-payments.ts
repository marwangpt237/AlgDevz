import { SubCategory } from '../types';

export const subcategories: SubCategory[] = [
  {
    id: 'local_banking',
    title: {
      en: 'Local Banking',
      ar: 'الخدمات البنكية المحلية',
    },
    resources: [
      {
        title: 'CCP Business Cashless (Algerie Poste)',
        url: 'https://www.poste.dz/',
        description: {
          en: 'A fully digital commercial checking account by Algerie Poste for merchants and professionals to facilitate cashless transactions. It enables secure and fast fund management and payment reception through electronic channels.',
          ar: 'حساب جاري تجاري رقمي بالكامل مقدم من بريد الجزائر، مخصص للتجار والمهنيين لتسهيل المعاملات غير النقدية. يتيح إدارة الأموال واستقبال المدفوعات بشكل آمن وسريع عبر القنوات الإلكترونية.'
        },
        tags: ['banking', 'local', 'free', 'no-cc'],
        difficulty: 'beginner',
        metadata: {
          availableForAlgerians: 'Fully Available',
          recommendedFor: ['Freelancer', 'Developer', 'Digital Entrepreneur'],
          useCases: ['Opening a local bank account', 'DZD transfers', 'Local payments'],
          _confidenceLabel: 'official_verified',
          _evidenceSources: ['https://www.linkedin.com/posts/algeriatech_for-the-first-time-in-its-24-year-history-activity-7450100390370480128-WNtv'],
          _lastVerified: '2026-06-09'
        }
      },
      {
        title: 'BaridiMob Merchant',
        url: 'https://www.poste.dz/',
        description: {
          en: 'A mobile payment service by Algerie Poste that allows merchants to receive instant payments via QR codes. It is an ideal solution for small daily payments due to its large user base.',
          ar: 'خدمة دفع عبر الهاتف المحمول تابعة لبريد الجزائر تتيح للتجار استقبال المدفوعات فورياً عبر رمز الاستجابة السريعة (QR Code). تعتبر الحل الأمثل للمدفوعات اليومية الصغيرة بفضل قاعدتها الجماهيرية الواسعة.'
        },
        tags: ['banking', 'local', 'free', 'no-cc'],
        difficulty: 'beginner',
        metadata: {
          availableForAlgerians: 'Fully Available',
          recommendedFor: ['Freelancer', 'Developer', 'Digital Entrepreneur'],
          useCases: ['Opening a local bank account', 'DZD transfers', 'Local payments'],
          _confidenceLabel: 'official_verified',
          _evidenceSources: ['https://www.linkedin.com/posts/algeriatech_algerias-biggest-payment-base-just-opened-activity-7459331561847590913-xymN'],
          _lastVerified: '2026-06-09'
        }
      }
    ]
  },
  {
    id: 'payment_processing',
    title: {
      en: 'Payment Processing',
      ar: 'معالجة المدفوعات',
    },
    resources: [
      {
        title: 'SATIM / GIE Monétique',
        url: 'https://www.satim.dz/',
        description: {
          en: 'The interbank electronic payment network in Algeria, managing CIB and Edahabia card operations. It provides the necessary infrastructure for accepting online payments on local commercial websites.',
          ar: 'الشركة المسؤولة عن شبكة الدفع الإلكتروني بين البنوك في الجزائر، تدير عمليات البطاقات البنكية (CIB) والذهبية. توفر البنية التحتية اللازمة لقبول الدفع عبر الإنترنت في المواقع التجارية المحلية.'
        },
        tags: ['payments', 'international', 'freemium', 'cc-unknown'],
        difficulty: 'intermediate',
        metadata: {
          availableForAlgerians: 'Fully Available',
          recommendedFor: ['Developer', 'SaaS Builder'],
          useCases: ['Processing international card payments', 'Merchant accounts'],
          _confidenceLabel: 'official_verified',
          _evidenceSources: ['https://www.satim.dz/'],
          _lastVerified: '2026-06-09'
        }
      },
      {
        title: 'Paddle',
        url: 'https://www.paddle.com/',
        description: {
          en: 'A specialized infrastructure platform for selling SaaS and digital products globally with full tax and compliance management. It supports Algerian developers in selling to international markets and receiving hard currency.',
          ar: 'منصة بنية تحتية مخصصة لبيع برمجيات SaaS والمنتجات الرقمية عالمياً مع إدارة كاملة للضرائب والامتثال. تدعم المطورين في الجزائر لبيع منتجاتهم في الأسواق الدولية واستلام العوائد بالعملة الصعبة.'
        },
        tags: ['saas', 'international', 'freemium', 'cc-unknown'],
        difficulty: 'advanced',
        metadata: {
          availableForAlgerians: 'Fully Available',
          recommendedFor: ['SaaS Builder', 'Developer'],
          useCases: ['Selling SaaS globally', 'Subscription billing', 'MRR collection'],
          _confidenceLabel: 'official_verified',
          _evidenceSources: ['https://developer.paddle.com/concepts/sell/supported-countries-locales/'],
          _lastVerified: '2026-06-09'
        }
      },
      {
        title: 'Lemon Squeezy',
        url: 'https://www.lemonsqueezy.com/',
        description: {
          en: 'An all-in-one platform for selling digital products and subscriptions, featuring ease of use and automatic tax management. It supports direct payouts to Algerian bank accounts.',
          ar: 'منصة متكاملة لبيع المنتجات الرقمية والاشتراكات، تتميز بسهولة الاستخدام وإدارة الضرائب التلقائية. تدعم الدفع المباشر إلى الحسابات البنكية في الجزائر، مما يسهل عمل المبدعين المستقلين.'
        },
        tags: ['digital-products', 'international', 'freemium', 'no-cc'],
        difficulty: 'beginner',
        metadata: {
          availableForAlgerians: 'Fully Available',
          recommendedFor: ['Digital Entrepreneur', 'Developer', 'Freelancer'],
          useCases: ['Selling e-books or templates', 'Digital downloads', 'Course selling'],
          _confidenceLabel: 'official_verified',
          _evidenceSources: ['https://docs.lemonsqueezy.com/help/getting-started/supported-countries'],
          _lastVerified: '2026-06-09'
        }
      }
    ]
  },
  {
    id: 'legal_tax',
    title: {
      en: 'Legal & Tax',
      ar: 'القانون والضرائب',
    },
    resources: [
      {
        title: 'DGI Moussahamatic',
        url: 'https://moussahamatic.dz/',
        description: {
          en: 'The official electronic portal of the General Directorate of Taxes in Algeria, allowing taxpayers to declare and pay their obligations remotely. It aims to simplify administrative procedures.',
          ar: 'البوابة الإلكترونية الرسمية للمديرية العامة للضرائب في الجزائر، تتيح للمكلفين بالضريبة التصريح ودفع التزاماتهم عن بُعد. تهدف إلى تبسيط الإجراءات الإدارية وتحسين الشفافية الجبائية للمؤسسات.'
        },
        tags: ['tax', 'local', 'free', 'no-cc'],
        difficulty: 'intermediate',
        metadata: {
          availableForAlgerians: 'Fully Available',
          recommendedFor: ['Freelancer', 'Digital Entrepreneur', 'Startup Founder'],
          useCases: ['Filing taxes', 'Understanding IFU obligations', 'VAT compliance'],
          _confidenceLabel: 'official_verified',
          _evidenceSources: ['https://moussahamatic.dz/'],
          _lastVerified: '2026-06-09'
        }
      },
      {
        title: 'Zoho Books',
        url: 'https://www.zoho.com/books/',
        description: {
          en: 'A powerful cloud accounting software that helps businesses manage finances, track inventory, and issue invoices. It supports specific tax settings for Algeria for local compliance.',
          ar: 'برنامج محاسبة سحابي قوي يساعد الشركات على إدارة شؤونها المالية ومتابعة المخزون وإصدار الفواتير. يدعم إعدادات الضرائب الخاصة بالجزائر، مما يجعله مناسباً للامتثال المالي المحلي.'
        },
        tags: ['accounting', 'software', 'freemium', 'no-cc'],
        difficulty: 'beginner',
        metadata: {
          availableForAlgerians: 'Fully Available',
          recommendedFor: ['Freelancer', 'Startup Founder', 'Digital Entrepreneur'],
          useCases: ['Managing accounts', 'Expense tracking', 'Financial reporting'],
          _confidenceLabel: 'official_verified',
          _evidenceSources: ['https://www.zoho.com/books/help/settings/tax-algeria.html'],
          _lastVerified: '2026-06-09'
        }
      },
      {
        title: 'CASNOS Damancom',
        url: 'https://damancom.casnos.dz/',
        description: {
          en: 'The digital platform for the National Social Security Fund for Non-Employees, allowing professionals and employers to declare activity and pay contributions for social coverage.',
          ar: 'المنصة الرقمية للصندوق الوطني للضمان الاجتماعي لغير الأجراء، تتيح للمهنيين وأصحاب العمل التصريح بنشاطهم ودفع اشتراكاتهم. تضمن التغطية الاجتماعية والتقاعد للعاملين لحسابهم الخاص.'
        },
        tags: ['legal', 'local', 'free', 'no-cc'],
        difficulty: 'advanced',
        metadata: {
          availableForAlgerians: 'Fully Available',
          recommendedFor: ['Startup Founder', 'Freelancer'],
          useCases: ['Understanding business law', 'Contract compliance', 'Legal entity requirements'],
          _confidenceLabel: 'official_verified',
          _evidenceSources: ['https://damancom.casnos.dz/'],
          _lastVerified: '2026-06-09'
        }
      }
    ]
  },
  {
    id: 'funding_support',
    title: {
      en: 'Funding & Support',
      ar: 'التمويل والدعم',
    },
    resources: [
      {
        title: 'ANGEM',
        url: 'https://www.angem.dz/',
        description: {
          en: 'The National Agency for Micro-credit Management, aiming to fight unemployment by providing interest-free loans for small projects and home-based income-generating activities.',
          ar: 'الوكالة الوطنية لتسيير القرض المصغر، تهدف إلى محاربة البطالة من خلال تقديم قروض بدون فوائد لتمويل المشاريع الصغيرة. تدعم المبادرات الفردية والأنشطة المنزلية المدرة للدخل.'
        },
        tags: ['funding', 'local', 'free', 'no-cc'],
        difficulty: 'advanced',
        metadata: {
          availableForAlgerians: 'Fully Available',
          recommendedFor: ['Startup Founder', 'SaaS Builder'],
          useCases: ['Securing seed funding', 'Applying for grants', 'Accessing public loans'],
          _confidenceLabel: 'official_verified',
          _evidenceSources: ['https://www.angem.dz/'],
          _lastVerified: '2026-06-09'
        }
      },
      {
        title: 'FGAR',
        url: 'https://www.fgar.dz/',
        description: {
          en: 'The SME Loan Guarantee Fund, acting as a guarantor for projects with commercial banks to facilitate financing. It reduces lending risks and encourages private sector investment.',
          ar: 'صندوق ضمان القروض للمؤسسات الصغيرة والمتوسطة، يعمل كضامن للمشاريع لدى البنوك التجارية لتسهيل الحصول على التمويل. يقلل من مخاطر الإقراض ويشجع الاستثمار في القطاع الخاص.'
        },
        tags: ['funding', 'local', 'free', 'no-cc'],
        difficulty: 'advanced',
        metadata: {
          availableForAlgerians: 'Fully Available',
          recommendedFor: ['Startup Founder', 'SaaS Builder'],
          useCases: ['Securing seed funding', 'Applying for grants', 'Accessing public loans'],
          _confidenceLabel: 'official_verified',
          _evidenceSources: ['https://www.fgar.dz/'],
          _lastVerified: '2026-06-09'
        }
      }
    ]
  },
  {
    id: 'startup_ecosystem',
    title: {
      en: 'Startup Ecosystem',
      ar: 'بيئة المؤسسات الناشئة',
    },
    resources: [
      {
        title: 'ANADE (ex-ANSEJ)',
        url: 'https://www.anade.dz/',
        description: {
          en: 'The National Agency for Support and Development of Entrepreneurship, providing financial support and guidance for young project holders to create micro-enterprises.',
          ar: 'الوكالة الوطنية لدعم وتنمية المقاولاتية، توفر الدعم المالي والمرافقة للشباب حاملي المشاريع لإنشاء مؤسساتهم المصغرة. تقدم امتيازات ضريبية وتمويلات مشتركة مع البنوك.'
        },
        tags: ['incubator', 'local', 'free', 'no-cc'],
        difficulty: 'intermediate',
        metadata: {
          availableForAlgerians: 'Fully Available',
          recommendedFor: ['Startup Founder'],
          useCases: ['Getting mentorship', 'Early-stage support', 'Building MVP'],
          _confidenceLabel: 'official_verified',
          _evidenceSources: ['https://www.anade.dz/'],
          _lastVerified: '2026-06-09'
        }
      },
      {
        title: 'CNAC',
        url: 'https://www.cnac.dz/',
        description: {
          en: 'The National Unemployment Insurance Fund, offering a special program to support unemployed individuals in creating their own enterprises through funding and technical follow-up.',
          ar: 'الصندوق الوطني للتأمين عن البطالة، يقدم برنامجاً خاصاً لدعم العاطلين عن العمل في إنشاء مؤسساتهم الخاصة. يشمل الدعم التمويل والمتابعة التقنية لضمان استمرارية المشاريع.'
        },
        tags: ['incubator', 'local', 'free', 'no-cc'],
        difficulty: 'intermediate',
        metadata: {
          availableForAlgerians: 'Fully Available',
          recommendedFor: ['Startup Founder'],
          useCases: ['Getting mentorship', 'Early-stage support', 'Building MVP'],
          _confidenceLabel: 'official_verified',
          _evidenceSources: ['https://www.cnac.dz/en/dispositif-de-soutien-a-creation-et-a-lextension-dactivites-par-les-chomeurs-promoteurs-ages-de-30-a-55-ans'],
          _lastVerified: '2026-06-09'
        }
      },
      {
        title: 'Algeria Venture (A-Venture)',
        url: 'https://aventure.dz/',
        description: {
          en: 'The first state-owned startup accelerator in Algeria, providing an integrated innovation environment including mentoring, funding, and market access for scalable businesses.',
          ar: 'أول مسرعة عمومية للمؤسسات الناشئة في الجزائر، توفر بيئة متكاملة للابتكار تشمل التوجيه، التمويل، والوصول إلى الأسواق. تهدف إلى تحويل الأفكار المبتكرة إلى شركات قابلة للتوسع عالمياً.'
        },
        tags: ['accelerator', 'local', 'free', 'no-cc'],
        difficulty: 'intermediate',
        metadata: {
          availableForAlgerians: 'Fully Available',
          recommendedFor: ['Startup Founder', 'SaaS Builder'],
          useCases: ['Getting mentorship', 'Growth acceleration', 'Accessing funding'],
          _confidenceLabel: 'official_verified',
          _evidenceSources: ['https://aventure.dz/'],
          _lastVerified: '2026-06-09'
        }
      },
      {
        title: 'Founder Institute Algiers',
        url: 'https://fi.co/s/algiers',
        description: {
          en: 'The local chapter of the global Founder Institute, a pre-seed accelerator program helping entrepreneurs build successful technology companies with international expertise.',
          ar: 'الفرع المحلي لمعهد المؤسسين العالمي، وهو برنامج تسريع لمرحلة ما قبل التأسيس يساعد ريادي الأعمال على بناء شركات تقنية ناجحة. يوفر شبكة من الموجهين والخبرات الدولية.'
        },
        tags: ['accelerator', 'local', 'free', 'no-cc'],
        difficulty: 'intermediate',
        metadata: {
          availableForAlgerians: 'Fully Available',
          recommendedFor: ['Early-stage Founders', 'Aspiring Entrepreneurs'],
          useCases: ['Building a tech startup', 'Accessing global network'],
          _confidenceLabel: 'official_verified',
          _evidenceSources: ['https://fi.co/apply/algiers'],
          _lastVerified: '2026-06-09'
        }
      },
      {
        title: 'Algeria Startup Challenge',
        url: 'https://algeriastartupchallenge.com/',
        description: {
          en: 'An annual national competition to discover and support top talent and innovative projects in Algeria across various fields like fintech, agriculture, and energy.',
          ar: 'مسابقة وطنية سنوية تهدف إلى اكتشاف ودعم أفضل المواهب والمشاريع المبتكرة في الجزائر. تشمل تحديات في مجالات مختلفة مثل التكنولوجيا المالية، الزراعة، والطاقة، مع جوائز وفرص تمويل.'
        },
        tags: ['competition', 'local', 'free', 'no-cc'],
        difficulty: 'intermediate',
        metadata: {
          availableForAlgerians: 'Fully Available',
          recommendedFor: ['Innovative Startups', 'Students'],
          useCases: ['Winning prizes', 'Gaining visibility', 'Networking'],
          _confidenceLabel: 'official_verified',
          _evidenceSources: ['https://algeriastartupchallenge.com/'],
          _lastVerified: '2026-06-09'
        }
      }
    ]
  },
  {
    id: 'freelance_remote',
    title: {
      en: 'Freelance & Remote Work',
      ar: 'العمل الحر وعن بعد',
    },
    resources: [
      {
        title: 'Mostaql / Khamsat (Hsoub)',
        url: 'https://mostaql.com/',
        description: {
          en: 'The largest Arabic freelancing platforms, connecting freelancers and project owners across the Arab world with a secure environment for payments and rights.',
          ar: 'أكبر المنصات العربية للعمل الحر، تجمع بين المستقلين وأصحاب المشاريع من مختلف أنحاء العالم العربي. توفر بيئة آمنة لضمان الحقوق والمدفوعات، وتدعم المستخدمين في الجزائر بشكل واسع.'
        },
        tags: ['freelancing', 'international', 'free', 'no-cc'],
        difficulty: 'beginner',
        metadata: {
          availableForAlgerians: 'Fully Available',
          recommendedFor: ['Arabic-speaking Freelancers', 'Designers', 'Developers'],
          useCases: ['Finding freelance work', 'Selling digital services'],
          _confidenceLabel: 'implicitly_available',
          _evidenceSources: ['https://mostaql.com/'],
          _lastVerified: '2026-06-09'
        }
      },
      {
        title: 'Malt',
        url: 'https://www.malt.com/',
        description: {
          en: 'A leading European freelancing platform focusing on high-level tech and creative skills, allowing Algerian freelancers to build professional profiles and work with international firms.',
          ar: 'منصة أوروبية رائدة للعمل الحر تركز على المهارات التقنية والإبداعية العالية. تتيح للمستقلين في الجزائر بناء ملفات شخصية مهنية والتعامل مع شركات دولية مع ضمان استلام المستحقات.'
        },
        tags: ['freelancing', 'international', 'free', 'no-cc'],
        difficulty: 'beginner',
        metadata: {
          availableForAlgerians: 'Fully Available',
          recommendedFor: ['Tech Freelancers', 'Creative Professionals'],
          useCases: ['Finding international clients', 'Building professional brand'],
          _confidenceLabel: 'implicitly_available',
          _evidenceSources: ['https://www.malt.com/'],
          _lastVerified: '2026-06-09'
        }
      },
      {
        title: 'Western Union / MoneyGram (Algeria)',
        url: 'https://www.westernunion.com/dz/',
        description: {
          en: 'Global money transfer services available in Algeria through a wide network of local banks, allowing individuals and freelancers to receive international transfers quickly.',
          ar: 'خدمات عالمية لتحويل الأموال تتوفر في الجزائر عبر شبكة واسعة من البنوك المحلية مثل بنك التنمية المحلية (BDL). تتيح استقبال الحوالات الدولية بسرعة وسهولة للأفراد والمهنيين.'
        },
        tags: ['money-transfer', 'international', 'freemium', 'no-cc'],
        difficulty: 'beginner',
        metadata: {
          availableForAlgerians: 'Fully Available',
          recommendedFor: ['Freelancers', 'Individuals'],
          useCases: ['Receiving international funds', 'Quick cash withdrawals'],
          _confidenceLabel: 'implicitly_available',
          _evidenceSources: ['https://www.westernunion.com/dz/en/home.html'],
          _lastVerified: '2026-06-09'
        }
      },
      {
        title: 'SeedLegals',
        url: 'https://seedlegals.com/',
        description: {
          en: 'A leading platform for automating legal documents and funding processes for startups, helping entrepreneurs issue professional contracts according to international standards.',
          ar: 'منصة رائدة لأتمتة الوثائق القانونية وعمليات التمويل للمؤسسات الناشئة. تساعد ريادي الأعمال على إصدار عقود العمل واتفاقيات المساهمين بشكل احترافي وسريع وفق المعايير الدولية.'
        },
        tags: ['contracts', 'legal', 'freemium', 'no-cc'],
        difficulty: 'intermediate',
        metadata: {
          availableForAlgerians: 'Fully Available',
          recommendedFor: ['Startups', 'SaaS Builders'],
          useCases: ['Generating legal contracts', 'Managing equity'],
          _confidenceLabel: 'implicitly_available',
          _evidenceSources: ['https://seedlegals.com/legal-documents/'],
          _lastVerified: '2026-06-09'
        }
      },
      {
        title: 'Gumroad',
        url: 'https://gumroad.com/',
        description: {
          en: 'A simple e-commerce platform allowing creators to sell works directly to their audience. It requires specific withdrawal methods or a linked PayPal for payouts in Algeria.',
          ar: 'منصة تجارة إلكترونية بسيطة تتيح للمبدعين بيع أعمالهم مباشرة إلى جمهورهم. توفر خيارات دفع متعددة، وتتطلب حساب PayPal مفعل أو طرق سحب محددة لاستلام الأموال في الجزائر.'
        },
        tags: ['digital-products', 'international', 'freemium', 'no-cc'],
        difficulty: 'beginner',
        metadata: {
          availableForAlgerians: 'Partial Access',
          recommendedFor: ['Digital Creators', 'Artists', 'Writers'],
          useCases: ['Selling digital assets', 'Accepting international payments'],
          _confidenceLabel: 'partial_access',
          _evidenceSources: ['https://www.shareuhack.com/en/posts/digital-product-platform-comparison-asia-2026'],
          _lastVerified: '2026-06-09'
        }
      }
    ]
  }
];
