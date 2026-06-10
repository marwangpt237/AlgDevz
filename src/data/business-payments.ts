import { SubCategory } from '../types';

export const subcategories: SubCategory[] = [
  {
    "id": "payment_processing",
    "title": {
      "en": "Payment Processing",
      "ar": "معالجة المدفوعات"
    },
    "resources": [
      {
        "title": "Chargily ePay",
        "url": "https://epay.chargily.com/",
        "description": {
          "en": "The premier API‑first local payment gateway in Algeria. It allows developers to seamlessly integrate CIB and Edahabia card payments into SaaS, e‑commerce, and mobile apps with comprehensive SDKs for Node.js, PHP, Python, and more.",
          "ar": "بوابة الدفع المحلية الأولى في الجزائر بتقنية API-first. تتيح للمطورين دمج مدفوعات بطاقات CIB والذهبية بسلاسة في تطبيقات SaaS والتجارة الإلكترونية وتطبيقات الهاتف المحمول، مع واجهات برمجة تطبيقات شاملة لـ Node.js و PHP و Python والمزيد."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "Developers",
            "SaaS Builders",
            "E‑commerce Founders"
          ],
          "useCases": [
            "Accepting local payments via Edahabia/CIB",
            "Building local SaaS billing",
            "E‑commerce checkouts"
          ],
          "_evidenceSources": [
            "https://developer.chargily.com/",
            "Extensive developer documentation, active GitHub repositories, and wide adoption by local modern startups."
          ],
          "_lastVerified": "2026-06-10"
        }
      },
      {
        "title": "2Checkout (by Verifone)",
        "url": "https://www.2checkout.com/",
        "description": {
          "en": "A global payment monetization platform that officially supports Algerian merchants for processing international credit cards without needing to incorporate an EU/US entity.",
          "ar": "منصة عالمية لتحقيق الدخل من المدفوعات تدعم رسمياً التجار الجزائريين لقبول مدفوعات البطاقات الائتمانية الدولية دون الحاجة إلى تأسيس كيان في الاتحاد الأوروبي أو الولايات المتحدة."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Partially Available",
          "recommendedFor": [
            "SaaS Builders",
            "Digital Entrepreneurs"
          ],
          "useCases": [
            "Processing international credit cards",
            "Global software sales"
          ],
          "_evidenceSources": [
            "https://knowledgecenter.2checkout.com/Documentation/04_Supported_countries",
            "Algeria explicitly listed in their supported countries/regions documentation for 2Sell and 2Subscribe models."
          ],
          "_lastVerified": "2026-06-10"
        }
      },
      {
        "title": "SATIM / GIE Monétique",
        "url": "https://www.satim.dz/",
        "description": {
          "en": "The interbank electronic payment network in Algeria, managing CIB and Edahabia card operations. It provides the necessary infrastructure for accepting online payments on local commercial websites.",
          "ar": "شبكة الدفع الإلكتروني بين البنوك في الجزائر، تدير عمليات بطاقات CIB والذهبية. توفر البنية التحتية اللازمة لقبول المدفوعات عبر الإنترنت في المواقع التجارية المحلية."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "Developers",
            "SaaS Builders"
          ],
          "useCases": [
            "Processing international card payments",
            "Merchant accounts"
          ],
          "_evidenceSources": [
            "https://www.satim.dz/",
            "Official documentation and widespread use across Algerian banks."
          ],
          "_lastVerified": "2026-06-10"
        }
      },
      {
        "title": "Paddle",
        "url": "https://www.paddle.com/",
        "description": {
          "en": "A specialized infrastructure platform for selling SaaS and digital products globally with full tax and compliance management. It supports Algerian developers in selling to international markets and receiving hard currency.",
          "ar": "منصة بنية تحتية متخصصة لبيع منتجات SaaS والمنتجات الرقمية عالمياً مع إدارة كاملة للضرائب والامتثال. تدعم المطورين الجزائريين لبيع منتجاتهم في الأسواق الدولية واستلام العملة الصعبة."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "SaaS Builders",
            "Developers"
          ],
          "useCases": [
            "Selling SaaS globally",
            "Subscription billing",
            "MRR collection"
          ],
          "_evidenceSources": [
            "https://developer.paddle.com/concepts/sell/supported-countries-locales/",
            "Officially supports Algeria for payouts to local bank accounts."
          ],
          "_lastVerified": "2026-06-10"
        }
      },
      {
        "title": "Lemon Squeezy",
        "url": "https://www.lemonsqueezy.com/",
        "description": {
          "en": "An all‑in‑one platform for selling digital products and subscriptions, featuring ease of use and automatic tax management. It supports direct payouts to Algerian bank accounts.",
          "ar": "منصة متكاملة لبيع المنتجات الرقمية والاشتراكات، تتميز بسهولة الاستخدام وإدارة الضرائب التلقائية. تدعم الدفع المباشر إلى الحسابات البنكية في الجزائر."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "Digital Entrepreneurs",
            "Developers",
            "Freelancers"
          ],
          "useCases": [
            "Selling e‑books or templates",
            "Digital downloads",
            "Course selling"
          ],
          "_evidenceSources": [
            "https://docs.lemonsqueezy.com/help/getting-started/supported-countries",
            "Algeria listed among supported countries for merchant payouts."
          ],
          "_lastVerified": "2026-06-10"
        }
      }
    ]
  },
  {
    "id": "receiving_money",
    "title": {
      "en": "Receiving Money",
      "ar": "استلام الأموال"
    },
    "resources": [
      {
        "title": "Elevate Pay",
        "url": "https://www.elevatepay.co/",
        "description": {
          "en": "A Y Combinator‑backed fintech (W24) providing US‑based FDIC‑insured USD bank accounts specifically tailored for remote workers and freelancers in emerging markets like North Africa and Asia.",
          "ar": "شركة تقنية مالية مدعومة من Y Combinator (W24) تقدم حسابات بنكية بالدولار الأمريكي مؤمنة من FDIC ومخصصة للعاملين عن بُعد والمستقلين في الأسواق الناشئة مثل شمال أفريقيا وآسيا."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "Remote Workers",
            "Freelancers",
            "Agency Owners"
          ],
          "useCases": [
            "Receiving USD payroll",
            "Upwork withdrawals",
            "B2B international wire reception"
          ],
          "_evidenceSources": [
            "https://help.elevatepay.co/en/articles/supported-countries",
            "Confirmed operations in North Africa, partnered with Bangor Savings Bank."
          ],
          "_lastVerified": "2026-06-10"
        }
      },
      {
        "title": "Ruul",
        "url": "https://ruul.io/",
        "description": {
          "en": "A virtual merchant of record and invoicing platform that allows freelancers to issue VAT‑compliant invoices to international clients without having a registered company entity.",
          "ar": "منصة فواتير وتاجر افتراضي تسمح للمستقلين بإصدار فواتير متوافقة مع ضريبة القيمة المضافة للعملاء الدوليين دون الحاجة إلى كيان شركة مسجل."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "Freelancers",
            "Contractors",
            "Consultants"
          ],
          "useCases": [
            "Invoicing EU/US clients without a company",
            "Receiving Swift or crypto payouts"
          ],
          "_evidenceSources": [
            "https://ruul.io/freelancers",
            "Global coverage model, explicitly supports global independent talent invoicing EU/US businesses."
          ],
          "_lastVerified": "2026-06-10"
        }
      },
      {
        "title": "Deel",
        "url": "https://www.deel.com/",
        "description": {
          "en": "A global compliance and payroll platform that allows foreign companies to legally hire and pay independent contractors or full‑time remote workers in Algeria.",
          "ar": "منصة امتثال ورواتب عالمية تسمح للشركات الأجنبية بتوظيف ودفع رواتب المتعاقدين المستقلين أو العاملين عن بُعد بدوام كامل في الجزائر بشكل قانوني."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "Senior Developers",
            "Remote Workers",
            "Agency Owners"
          ],
          "useCases": [
            "Signing international contractor agreements",
            "Receiving compliant global payroll"
          ],
          "_evidenceSources": [
            "https://www.deel.com/employees/algeria",
            "Platform natively supports contractor classification and direct payout rails in Algeria."
          ],
          "_lastVerified": "2026-06-10"
        }
      },
      {
        "title": "RedotPay",
        "url": "https://www.redotpay.com/",
        "description": {
          "en": "A crypto‑backed VISA/Mastercard solution that allows Algerian tech workers to spend USDT globally. It bridges the gap between local banking limits and international digital expenses.",
          "ar": "حل بطاقة VISA/Mastercard مدعوم بالعملات الرقمية يتيح للعاملين في مجال التكنولوجيا بالجزائر إنفاق USDT عالمياً. يسد الفجوة بين القيود المصرفية المحلية والنفقات الرقمية الدولية."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "Developers",
            "SaaS Builders",
            "AI Practitioners"
          ],
          "useCases": [
            "Paying for cloud infrastructure",
            "SaaS subscriptions (OpenAI",
            "Vercel)",
            "Bypassing local banking forex limits"
          ],
          "_evidenceSources": [
            "https://www.redotpay.com/",
            "Highly adopted within DZD developer forums as the primary solution for international digital expenses in 2026."
          ],
          "_lastVerified": "2026-06-10"
        }
      }
    ]
  },
  {
    "id": "local_banking",
    "title": {
      "en": "Local Banking",
      "ar": "الخدمات البنكية المحلية"
    },
    "resources": [
      {
        "title": "Fatoura",
        "url": "https://fatoura.dz/",
        "description": {
          "en": "An Algerian cloud‑based ERP and invoicing SaaS tailored specifically to Algerian commercial law, tax structures (TVA, TAP, Timbre), and business workflows.",
          "ar": "نظام ERP وفوترة سحابي جزائري مصمم خصيصاً للقانون التجاري الجزائري والهياكل الضريبية (TVA، TAP، الطابع) وسير العمل التجاري."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "Startup Founders",
            "Agencies",
            "Local SaaS"
          ],
          "useCases": [
            "Generating localized legal invoices",
            "Stock management",
            "Local fiscal compliance"
          ],
          "_evidenceSources": [
            "https://fatoura.dz/",
            "Built by Algerian developers, heavily used by local SMEs with confirmed alignment to DGI rules."
          ],
          "_lastVerified": "2026-06-10"
        }
      },
      {
        "title": "Yalidine Express / YaliPay",
        "url": "https://yalidine.com/",
        "description": {
          "en": "The dominant logistics network in Algeria providing advanced API infrastructure for Cash‑On‑Delivery (COD) reconciliation and e‑commerce fulfillment.",
          "ar": "شبكة الخدمات اللوجستية المهيمنة في الجزائر التي توفر بنية تحتية متقدمة لواجهات برمجة التطبيقات لتسوية المدفوعات عند الاستلام وتنفيذ التجارة الإلكترونية."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "E‑commerce Founders",
            "Developers"
          ],
          "useCases": [
            "Automating e‑commerce deliveries",
            "COD financial tracking",
            "API webhook integrations for local apps"
          ],
          "_evidenceSources": [
            "https://yalidine.app/",
            "Dominant market share in 58 wilayas with robust developer API portals."
          ],
          "_lastVerified": "2026-06-10"
        }
      },
      {
        "title": "Banxy Bank (by Natixis)",
        "url": "https://www.banxybank.com/",
        "description": {
          "en": "The first pure mobile neo‑bank in Algeria. Allows founders and freelancers to open a bank account completely remotely via video call, delivering multi‑currency accounts and a VISA card without physically visiting a branch.",
          "ar": "أول بنك رقمي بالكامل في الجزائر. يسمح للمؤسسين والمستقلين بفتح حساب بنكي بالكامل عن بُعد عبر مكالمة فيديو،并提供حسابات متعددة العملات وبطاقة VISA دون زيارة الفرع."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "Freelancers",
            "Digital Entrepreneurs",
            "Remote Workers"
          ],
          "useCases": [
            "Remote bank account opening",
            "Managing DZD and foreign currency",
            "Acquiring a classic VISA card"
          ],
          "_evidenceSources": [
            "https://www.banxybank.com/",
            "Backed by Natixis Algérie; extensive active user base in the Algerian tech community."
          ],
          "_lastVerified": "2026-06-10"
        }
      }
    ]
  },
  {
    "id": "local_banking",
    "title": {
      "en": "Local Banking",
      "ar": "Local Banking"
    },
    "resources": [
      {
        "title": "CCP Business Cashless (Algerie Poste)",
        "url": "https://www.poste.dz/",
        "description": {
          "en": "A fully digital commercial checking account by Algerie Poste for merchants and professionals to facilitate cashless transactions. It enables secure and fast fund management and payment reception through electronic channels.",
          "ar": "حساب جاري تجاري رقمي بالكامل من بريد الجزائر للتجار والمهنيين لتسهيل المعاملات غير النقدية. يتيح إدارة الأموال واستلام المدفوعات بشكل آمن وسريع عبر القنوات الإلكترونية."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "Freelancers",
            "Developers",
            "Digital Entrepreneurs"
          ],
          "useCases": [
            "Opening a local bank account",
            "DZD transfers",
            "Local payments"
          ],
          "_evidenceSources": [
            "https://www.linkedin.com/posts/algeriatech_for-the-first-time-in-its-24-year-history-activity-7450100390370480128-WNtv",
            "Official launch announced by Algerie Poste in 2026, widely covered."
          ],
          "_lastVerified": "2026-06-10"
        }
      },
      {
        "title": "BaridiMob Merchant",
        "url": "https://www.poste.dz/",
        "description": {
          "en": "A mobile payment service by Algerie Poste that allows merchants to receive instant payments via QR codes. It is an ideal solution for small daily payments due to its large user base.",
          "ar": "خدمة دفع عبر الهاتف المحمول تابعة لبريد الجزائر تتيح للتجار استقبال المدفوعات فورياً عبر رمز الاستجابة السريعة (QR Code). تعتبر الحل الأمثل للمدفوعات اليومية الصغيرة بفضل قاعدتها الجماهيرية الواسعة.',     },     whyItMatters:       \"BaridiMob turns any smartphone into a POS terminal. With millions of BaridiMob users, this is the most accessible way for small merchants and freelancers to accept contactless DZD payments without expensive hardware.\",     recommendedFor: ['Freelancers', 'Developers', 'Digital Entrepreneurs'],     useCases: ['Opening a local bank account', 'DZD transfers', 'Local payments'],     evidence: 'Integrated into Algerie Poste’s mobile app, actively promoted.',     officialSources: [       'https://www.linkedin.com/posts/algeriatech_algerias-biggest-payment-base-just-opened-activity-7459331561847590913-xymN',     ],     verificationDate: '2026-06-10',   }, ];  // ------------------------------------------------------------------ // 5. LEGAL & TAX // ------------------------------------------------------------------ const legalTax: OSINTResource[] = [   {     name: 'DGI Moussahamatic',     website: 'https://moussahamatic.dz/',     category: 'LEGAL & TAX',     availability: 'Fully Available',     description: {       en: 'The official electronic portal of the General Directorate of Taxes in Algeria, allowing taxpayers to declare and pay their obligations remotely. It aims to simplify administrative procedures.',       ar: 'البوابة الإلكترونية الرسمية للمديرية العامة للضرائب في الجزائر، تتيح للمكلفين بالضريبة التصريح ودفع التزاماتهم عن بُعد. تهدف إلى تبسيط الإجراءات الإدارية وتحسين الشفافية الجبائية."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "Freelancers",
            "Digital Entrepreneurs",
            "Startup Founders"
          ],
          "useCases": [
            "Filing taxes",
            "Understanding IFU obligations",
            "VAT compliance"
          ],
          "_evidenceSources": [
            "https://moussahamatic.dz/",
            "Official government portal with active usage."
          ],
          "_lastVerified": "2026-06-10"
        }
      }
    ]
  },
  {
    "id": "legal_&_tax",
    "title": {
      "en": "Legal & Tax",
      "ar": "Legal & Tax"
    },
    "resources": [
      {
        "title": "Zoho Books",
        "url": "https://www.zoho.com/books/",
        "description": {
          "en": "A powerful cloud accounting software that helps businesses manage finances, track inventory, and issue invoices. It supports specific tax settings for Algeria for local compliance.",
          "ar": "برنامج محاسبة سحابي قوي يساعد الشركات على إدارة شؤونها المالية ومتابعة المخزون وإصدار الفواتير. يدعم إعدادات الضرائب الخاصة بالجزائر، مما يجعله مناسباً للامتثال المالي المحلي."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "Freelancers",
            "Startup Founders",
            "Digital Entrepreneurs"
          ],
          "useCases": [
            "Managing accounts",
            "Expense tracking",
            "Financial reporting"
          ],
          "_evidenceSources": [
            "https://www.zoho.com/books/help/settings/tax-algeria.html",
            "Official Zoho documentation for Algeria tax settings."
          ],
          "_lastVerified": "2026-06-10"
        }
      },
      {
        "title": "CASNOS Damancom",
        "url": "https://damancom.casnos.dz/",
        "description": {
          "en": "The digital platform for the National Social Security Fund for Non-Employees, allowing professionals and employers to declare activity and pay contributions for social coverage.",
          "ar": "المنصة الرقمية للصندوق الوطني للضمان الاجتماعي لغير الأجراء، تتيح للمهنيين وأصحاب العمل التصريح بنشاطهم ودفع اشتراكاتهم. تضمن التغطية الاجتماعية والتقاعد للعاملين لحسابهم الخاص."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "Startup Founders",
            "Freelancers"
          ],
          "useCases": [
            "Understanding business law",
            "Contract compliance",
            "Legal entity requirements"
          ],
          "_evidenceSources": [
            "https://damancom.casnos.dz/",
            "Official CASNOS digital transformation initiative."
          ],
          "_lastVerified": "2026-06-10"
        }
      }
    ]
  },
  {
    "id": "freelancer_business_stack",
    "title": {
      "en": "Freelancer Business Stack",
      "ar": "Freelancer Business Stack"
    },
    "resources": [
      {
        "title": "Xolo Go",
        "url": "https://www.xolo.io/go",
        "description": {
          "en": "Provides a “slice” of a company. Freelancers can use Xolo’s legal entity to invoice cross‑border clients B2B, pay themselves out, and avoid heavy accounting burdens.",
          "ar": "توفر \"جزءاً\" من شركة. يمكن للمستقلين استخدام الكيان القانوني لـ Xolo لإصدار فواتير B2B للعملاء عبر الحدود، ودفع مستحقاتهم بأنفسهم، وتجنب أعباء المحاسبة الثقيلة."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "Freelancers",
            "Digital Nomads"
          ],
          "useCases": [
            "B2B invoicing without a company",
            "VAT handling for EU clients"
          ],
          "_evidenceSources": [
            "https://www.xolo.io/go",
            "Specific “freelance without borders” operational model targeting non‑EU residents billing EU companies."
          ],
          "_lastVerified": "2026-06-10"
        }
      }
    ]
  },
  {
    "id": "freelance_remote",
    "title": {
      "en": "Freelance & Remote Work",
      "ar": "العمل الحر والعمل عن بعد"
    },
    "resources": [
      {
        "title": "Mostaql / Khamsat (Hsoub)",
        "url": "https://mostaql.com/",
        "description": {
          "en": "The largest Arabic freelancing platforms, connecting freelancers and project owners across the Arab world with a secure environment for payments and rights.",
          "ar": "أكبر المنصات العربية للعمل الحر، تجمع بين المستقلين وأصحاب المشاريع من مختلف أنحاء العالم العربي. توفر بيئة آمنة لضمان الحقوق والمدفوعات."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "Arabic‑speaking Freelancers",
            "Designers",
            "Developers"
          ],
          "useCases": [
            "Finding freelance work",
            "Selling digital services"
          ],
          "_evidenceSources": [
            "https://mostaql.com/",
            "Millions of users across MENA, active Algerian community."
          ],
          "_lastVerified": "2026-06-10"
        }
      },
      {
        "title": "Malt",
        "url": "https://www.malt.com/",
        "description": {
          "en": "A leading European freelancing platform focusing on high‑level tech and creative skills, allowing Algerian freelancers to build professional profiles and work with international firms.",
          "ar": "منصة أوروبية رائدة للعمل الحر تركز على المهارات التقنية والإبداعية العالية. تتيح للمستقلين في الجزائر بناء ملفات شخصية مهنية والتعامل مع شركات دولية."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "Tech Freelancers",
            "Creative Professionals"
          ],
          "useCases": [
            "Finding international clients",
            "Building professional brand"
          ],
          "_evidenceSources": [
            "https://www.malt.com/",
            "Open registration for non‑EU freelancers including Algeria."
          ],
          "_lastVerified": "2026-06-10"
        }
      },
      {
        "title": "Western Union / MoneyGram (Algeria)",
        "url": "https://www.westernunion.com/dz/",
        "description": {
          "en": "Global money transfer services available in Algeria through a wide network of local banks, allowing individuals and freelancers to receive international transfers quickly.",
          "ar": "خدمات عالمية لتحويل الأموال تتوفر في الجزائر عبر شبكة واسعة من البنوك المحلية مثل بنك التنمية المحلية (BDL). تتيح استقبال الحوالات الدولية بسرعة وسهولة للأفراد والمهنيين."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "Freelancers",
            "Individuals"
          ],
          "useCases": [
            "Receiving international funds",
            "Quick cash withdrawals"
          ],
          "_evidenceSources": [
            "https://www.westernunion.com/dz/en/home.html",
            "Extensive network of BDL, CPA, and other local banks."
          ],
          "_lastVerified": "2026-06-10"
        }
      },
      {
        "title": "SeedLegals",
        "url": "https://seedlegals.com/",
        "description": {
          "en": "A leading platform for automating legal documents and funding processes for startups, helping entrepreneurs issue professional contracts according to international standards.",
          "ar": "منصة رائدة لأتمتة الوثائق القانونية وعمليات التمويل للمؤسسات الناشئة. تساعد رواد الأعمال على إصدار عقود العمل واتفاقيات المساهمين بشكل احترافي وسريع وفق المعايير الدولية."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "Startups",
            "SaaS Builders"
          ],
          "useCases": [
            "Generating legal contracts",
            "Managing equity"
          ],
          "_evidenceSources": [
            "https://seedlegals.com/legal-documents/",
            "Used by thousands of startups globally; accessible from Algeria."
          ],
          "_lastVerified": "2026-06-10"
        }
      },
      {
        "title": "Gumroad",
        "url": "https://gumroad.com/",
        "description": {
          "en": "A simple e‑commerce platform allowing creators to sell works directly to their audience. It requires specific withdrawal methods or a linked PayPal for payouts in Algeria.",
          "ar": "منصة تجارة إلكترونية بسيطة تتيح للمبدعين بيع أعمالهم مباشرة إلى جمهورهم. تتطلب طرق سحب محددة أو حساب PayPal مرتبط لاستلام الأموال في الجزائر."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Partially Available",
          "recommendedFor": [
            "Digital Creators",
            "Artists",
            "Writers"
          ],
          "useCases": [
            "Selling digital assets",
            "Accepting international payments"
          ],
          "_evidenceSources": [
            "https://www.shareuhack.com/en/posts/digital-product-platform-comparison-asia-2026",
            "Community reports confirm Gumroad works with workarounds."
          ],
          "_lastVerified": "2026-06-10"
        }
      }
    ]
  },
  {
    "id": "legal_tax",
    "title": {
      "en": "Legal & Tax",
      "ar": "القانون والضرائب"
    },
    "resources": [
      {
        "title": "Estonian e-Residency",
        "url": "https://www.e-resident.gov.ee/",
        "description": {
          "en": "A government‑issued digital identity program that allows Algerian entrepreneurs to start and manage an EU‑based company 100% online.",
          "ar": "برنامج هوية رقمية حكومي يسمح لرواد الأعمال الجزائريين بتأسيس وإدارة شركة مقرها الاتحاد الأوروبي بنسبة 100% عبر الإنترنت."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Partially Available",
          "recommendedFor": [
            "SaaS Builders",
            "Global Startups",
            "Agency Owners"
          ],
          "useCases": [
            "Unlocking Stripe",
            "EU company formation",
            "Digital nomad operations"
          ],
          "_evidenceSources": [
            "https://www.e-resident.gov.ee/start-a-company/",
            "https://www.e-resident.gov.ee/become-an-e-resident/",
            "Algerian citizens are fully eligible, but the physical smartcard requires pickup at an embassy (e.g., Paris, Madrid) – hence partial availability."
          ],
          "_lastVerified": "2026-06-10"
        }
      },
      {
        "title": "doola",
        "url": "https://www.doola.com/",
        "description": {
          "en": "A platform that helps non‑US residents incorporate an LLC or C‑Corp in the United States (Wyoming/Delaware), get an EIN, and open a US business bank account.",
          "ar": "منصة تساعد غير المقيمين في الولايات المتحدة على تأسيس شركة ذات مسؤولية محدودة أو شركة C في الولايات المتحدة (وايومنغ/ديلاوير)، والحصول على رقم تعريف صاحب العمل (EIN)، وفتح حساب بنكي تجاري أمريكي."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "SaaS Builders",
            "High‑Growth Startups"
          ],
          "useCases": [
            "US LLC incorporation",
            "Getting a US Employer Identification Number (EIN)",
            "Accessing US VCs"
          ],
          "_evidenceSources": [
            "https://www.doola.com/",
            "Platform is specifically architected for non‑US founders with guaranteed EIN retrieval."
          ],
          "_lastVerified": "2026-06-10"
        }
      },
      {
        "title": "Firstbase.io",
        "url": "https://firstbase.io/",
        "description": {
          "en": "Allows Algerian founders to incorporate a true US Delaware or Wyoming LLC entirely from their laptops.",
          "ar": "تسمح للمؤسسين الجزائريين بتأسيس شركة ذات مسؤولية محدودة حقيقية في ولاية ديلاوير أو وايومنغ الأمريكية بالكامل من خلال حواسيبهم المحمولة."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "SaaS Builders",
            "Global Agency Owners",
            "Startup Founders"
          ],
          "useCases": [
            "US LLC incorporation",
            "Acquiring an EIN",
            "Gaining global banking and Stripe processing"
          ],
          "_evidenceSources": [
            "https://firstbase.io/do-business-in-us",
            "Supports founders residing in Algeria; fully handles IRS EIN generation for non‑US residents via SS‑4."
          ],
          "_lastVerified": "2026-06-10"
        }
      },
      {
        "title": "INAPI (Institut National Algérien de la Propriété Industrielle)",
        "url": "https://www.inapi.org/",
        "description": {
          "en": "The official Algerian state institution for registering trademarks, patents, and protecting intellectual property.",
          "ar": "المؤسسة الرسمية الجزائرية لتسجيل العلامات التجارية وبراءات الاختراع وحماية الملكية الفكرية."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "Startup Founders",
            "SaaS Builders"
          ],
          "useCases": [
            "Trademark registration",
            "Brand protection",
            "Patent filing"
          ],
          "_evidenceSources": [
            "https://www.inapi.org/",
            "Official governmental body with digitized search and filing procedures."
          ],
          "_lastVerified": "2026-06-10"
        }
      }
    ]
  },
  {
    "id": "funding_support",
    "title": {
      "en": "Funding & Support",
      "ar": "التمويل والدعم"
    },
    "resources": [
      {
        "title": "Algerian Startup Fund (ASF)",
        "url": "https://asf.dz/",
        "description": {
          "en": "The official state‑backed Venture Capital fund dedicated exclusively to financing Algerian startups that have obtained the national “Startup Label”.",
          "ar": "صندوق رأس المال الاستثماري الرسمي المدعوم من الدولة والمخصص حصرياً لتمويل الشركات الناشئة الجزائرية الحاصلة على \"وسام الشركة الناشئة\" الوطني."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "Accelerated Startups",
            "Innovative Founders"
          ],
          "useCases": [
            "Seed funding",
            "Series A prep",
            "Scaling operations locally"
          ],
          "_evidenceSources": [
            "https://asf.dz/",
            "Actively funding local startups with state treasury backing."
          ],
          "_lastVerified": "2026-06-10"
        }
      },
      {
        "title": "Flat6Labs",
        "url": "https://www.flat6labs.com/",
        "description": {
          "en": "The leading seed and early‑stage VC firm in the MENA region. While not headquartered in Algiers, they actively scout, fund, and accelerate North African startups including Algerian founders willing to structure regionally.",
          "ar": "شركة رأس المال الاستثماري الرائدة في مرحلة التأسيس وما قبل التأسيس في منطقة الشرق الأوسط وشمال أفريقيا. على الرغم من أن مقرها الرئيسي ليس في الجزائر، إلا أنها تبحث بنشاط عن الشركات الناشئة في شمال أفريقيا وتمولها وتسارعها، بما في ذلك المؤسسين الجزائريين الراغبين في الهيكلة إقليمياً."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "High‑Growth Startups",
            "Tech Founders"
          ],
          "useCases": [
            "Pre‑seed funding ($50k–$120k)",
            "Accessing MENA expansion networks"
          ],
          "_evidenceSources": [
            "https://www.flat6labs.com/apply/",
            "Consistent footprint in North Africa (Tunis/Cairo) and expanding mandates for pan‑Maghreb startups."
          ],
          "_lastVerified": "2026-06-10"
        }
      },
      {
        "title": "ANGEM",
        "url": "https://www.angem.dz/",
        "description": {
          "en": "The National Agency for Micro‑credit Management, aiming to fight unemployment by providing interest‑free loans for small projects and home‑based income‑generating activities.",
          "ar": "الوكالة الوطنية لتسيير القرض المصغر، تهدف إلى محاربة البطالة من خلال تقديم قروض بدون فوائد لتمويل المشاريع الصغيرة. تدعم المبادرات الفردية والأنشطة المنزلية المدرة للدخل."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "Startup Founders",
            "Freelancers"
          ],
          "useCases": [
            "Securing seed funding",
            "Applying for grants",
            "Accessing public loans"
          ],
          "_evidenceSources": [
            "https://www.angem.dz/",
            "Official government agency with transparent application process."
          ],
          "_lastVerified": "2026-06-10"
        }
      },
      {
        "title": "FGAR",
        "url": "https://www.fgar.dz/",
        "description": {
          "en": "The SME Loan Guarantee Fund, acting as a guarantor for projects with commercial banks to facilitate financing. It reduces lending risks and encourages private sector investment.",
          "ar": "صندوق ضمان القروض للمؤسسات الصغيرة والمتوسطة، يعمل كضامن للمشاريع لدى البنوك التجارية لتسهيل الحصول على التمويل. يقلل من مخاطر الإقراض ويشجع الاستثمار في القطاع الخاص."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "Startup Founders",
            "SaaS Builders"
          ],
          "useCases": [
            "Securing bank loans",
            "Accessing debt financing"
          ],
          "_evidenceSources": [
            "https://www.fgar.dz/",
            "Official government guarantee fund with active bank partnerships."
          ],
          "_lastVerified": "2026-06-10"
        }
      }
    ]
  },
  {
    "id": "startup_ecosystem",
    "title": {
      "en": "Startup Ecosystem",
      "ar": "بيئة المؤسسات الناشئة"
    },
    "resources": [
      {
        "title": "ANADE (ex-ANSEJ)",
        "url": "https://www.anade.dz/",
        "description": {
          "en": "The National Agency for Support and Development of Entrepreneurship, providing financial support and guidance for young project holders to create micro‑enterprises.",
          "ar": "الوكالة الوطنية لدعم وتنمية المقاولاتية، توفر الدعم المالي والمرافقة للشباب حاملي المشاريع لإنشاء مؤسساتهم المصغرة. تقدم امتيازات ضريبية وتمويلات مشتركة مع البنوك."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "Startup Founders"
          ],
          "useCases": [
            "Getting mentorship",
            "Early‑stage support",
            "Building MVP"
          ],
          "_evidenceSources": [
            "https://www.anade.dz/",
            "Official government agency with nationwide presence."
          ],
          "_lastVerified": "2026-06-10"
        }
      },
      {
        "title": "CNAC",
        "url": "https://www.cnac.dz/",
        "description": {
          "en": "The National Unemployment Insurance Fund, offering a special program to support unemployed individuals in creating their own enterprises through funding and technical follow‑up.",
          "ar": "الصندوق الوطني للتأمين عن البطالة، يقدم برنامجاً خاصاً لدعم العاطلين عن العمل في إنشاء مؤسساتهم الخاصة. يشمل الدعم التمويل والمتابعة التقنية لضمان استمرارية المشاريع."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "Startup Founders"
          ],
          "useCases": [
            "Getting mentorship",
            "Early‑stage support",
            "Building MVP"
          ],
          "_evidenceSources": [
            "https://www.cnac.dz/en/dispositif-de-soutien-a-creation-et-a-lextension-dactivites-par-les-chomeurs-promoteurs-ages-de-30-a-55-ans",
            "Official program with published success rates."
          ],
          "_lastVerified": "2026-06-10"
        }
      },
      {
        "title": "Algeria Venture (A‑Venture)",
        "url": "https://aventure.dz/",
        "description": {
          "en": "The first state‑owned startup accelerator in Algeria, providing an integrated innovation environment including mentoring, funding, and market access for scalable businesses.",
          "ar": "أول مسرعة عمومية للمؤسسات الناشئة في الجزائر، توفر بيئة متكاملة للابتكار تشمل التوجيه، التمويل، والوصول إلى الأسواق. تهدف إلى تحويل الأفكار المبتكرة إلى شركات قابلة للتوسع عالمياً."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "Startup Founders",
            "SaaS Builders"
          ],
          "useCases": [
            "Getting mentorship",
            "Growth acceleration",
            "Accessing funding"
          ],
          "_evidenceSources": [
            "https://aventure.dz/",
            "Operated by the Ministry of Knowledge Economy."
          ],
          "_lastVerified": "2026-06-10"
        }
      },
      {
        "title": "Founder Institute Algiers",
        "url": "https://fi.co/s/algiers",
        "description": {
          "en": "The local chapter of the global Founder Institute, a pre‑seed accelerator program helping entrepreneurs build successful technology companies with international expertise.",
          "ar": "الفرع المحلي لمعهد المؤسسين العالمي، وهو برنامج تسريع لمرحلة ما قبل التأسيس يساعد ريادي الأعمال على بناء شركات تقنية ناجحة. يوفر شبكة من الموجهين والخبرات الدولية."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "Early‑stage Founders",
            "Aspiring Entrepreneurs"
          ],
          "useCases": [
            "Building a tech startup",
            "Accessing global network"
          ],
          "_evidenceSources": [
            "https://fi.co/apply/algiers",
            "Active local chapter with successful graduates."
          ],
          "_lastVerified": "2026-06-10"
        }
      },
      {
        "title": "Algeria Startup Challenge",
        "url": "https://algeriastartupchallenge.com/",
        "description": {
          "en": "An annual national competition to discover and support top talent and innovative projects in Algeria across various fields like fintech, agriculture, and energy.",
          "ar": "مسابقة وطنية سنوية تهدف إلى اكتشاف ودعم أفضل المواهب والمشاريع المبتكرة في الجزائر. تشمل تحديات في مجالات مختلفة مثل التكنولوجيا المالية، الزراعة، والطاقة، مع جوائز وفرص تمويل."
        },
        "tags": [],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": [
            "Innovative Startups",
            "Students"
          ],
          "useCases": [
            "Winning prizes",
            "Gaining visibility",
            "Networking"
          ],
          "_evidenceSources": [
            "https://algeriastartupchallenge.com/",
            "Annual competition with high government backing."
          ],
          "_lastVerified": "2026-06-10"
        }
      }
    ]
  }
];
