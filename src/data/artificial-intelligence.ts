import { SubCategory } from '../types';

export const subcategories: SubCategory[] = [
  {
    "id": "official_model_sites",
    "title": {
      "en": "Official Model Sites",
      "ar": "مواقع النماذج الرسمية"
    },
    "resources": [
      {
        "title": "Qwen",
        "description": {
          "en": "Chat interface for Alibaba's Qwen family of language models. Supports general conversation, coding, reasoning, and image generation across multiple languages. Useful for developers and students needing a capable free or low-cost AI for multilingual and technical tasks.",
          "ar": "واجهة دردشة لعائلة نماذج اللغة Qwen من Alibaba. تدعم المحادثات العامة والبرمجة والاستدلال وتوليد الصور عبر لغات متعددة. مفيدة للمطورين والطلاب الذين يحتاجون ذكاء اصطناعي قادر مجاني أو منخفض التكلفة للمهام التقنية ومتعددة اللغات."
        },
        "url": "https://chat.qwen.ai/",
        "tags": ["ai", "llm", "chatbot", "free-tier", "multilingual", "coding", "image-generation"],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": ["Developer", "Student", "Freelancer"],
          "useCases": ["Coding assistance", "Multilingual content creation", "Learning and research", "Quick prototyping"],
          "_confidenceLabel": "community_verified",
          "_lastVerified": "2026-06-09"
        }
      },
      {
        "title": "DeepSeek",
        "description": {
          "en": "Access to DeepSeek's models focused on coding, mathematics, and technical reasoning. Offers fast and more capable modes on the free tier. Commonly used by programmers for debugging, algorithm help, and learning new technical concepts.",
          "ar": "وصول إلى نماذج DeepSeek المتخصصة في البرمجة والرياضيات والاستدلال التقني. توفر أوضاع سريعة وأكثر قدرة في الطبقة المجانية. يستخدمها المبرمجون عادة لتصحيح الأخطاء ومساعدة الخوارزميات وتعلم المفاهيم التقنية الجديدة."
        },
        "url": "https://chat.deepseek.com/",
        "tags": ["ai", "llm", "coding", "free-tier", "reasoning", "math"],
        "updatedAt": "2026-06-07",
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": ["Developer", "Student"],
          "useCases": ["Code debugging and explanation", "Algorithm practice", "Technical research", "Learning programming concepts"],
          "_confidenceLabel": "community_verified",
          "_lastVerified": "2026-06-09"
        }
      },
      {
        "title": "Google AI Studio",
        "description": {
          "en": "Google's platform for accessing and experimenting with Gemini models. Allows prompt engineering, content generation, and building with AI features. The associated web chat offers free tiers suitable for daily use and learning.",
          "ar": "منصة Google للوصول إلى نماذج Gemini والتجربة معها. تسمح بهندسة الـ prompts وتوليد المحتوى وبناء ميزات AI. الدردشة المصاحبة على الويب توفر طبقات مجانية مناسبة للاستخدام اليومي والتعلم."
        },
        "url": "https://aistudio.google.com/app/prompts/new_chat",
        "tags": ["ai", "llm", "google", "free-tier", "prompt-engineering", "api"],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": ["Developer", "Student", "Freelancer"],
          "useCases": ["Research and summarization", "Content drafting", "Prompt engineering practice", "Learning AI capabilities"],
          "_confidenceLabel": "official_verified",
          "_lastVerified": "2026-06-09"
        }
      },
      {
        "title": "Gemini",
        "description": {
          "en": "Google's conversational AI powered by Gemini models. Provides free access to advanced reasoning and multimodal capabilities. Suitable for research, writing, coding help, and general questions with daily usage limits on the free plan.",
          "ar": "الذكاء الاصطناعي الحواري من Google المدعوم بنماذج Gemini. يوفر وصولاً مجانياً إلى قدرات استدلال متقدمة ومتعددة الوسائط. مناسب للبحث والكتابة ومساعدة البرمجة والأسئلة العامة مع حدود استخدام يومية في الخطة المجانية."
        },
        "url": "https://gemini.google.com/",
        "tags": ["ai", "llm", "google", "free-tier", "multimodal"],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": ["Developer", "Student", "Freelancer"],
          "useCases": ["Daily research and writing", "Coding and technical help", "Learning and education", "Multimodal tasks (text + images)"],
          "_confidenceLabel": "official_verified",
          "_lastVerified": "2026-06-09"
        }
      },
      {
        "title": "Kimi",
        "description": {
          "en": "AI chat from Moonshot AI with strong long-context handling and reasoning. Supports document analysis and extended conversations. Popular among users who need to process large amounts of text or complex problems.",
          "ar": "دردشة AI من Moonshot AI مع معالجة سياق طويل واستدلال قوي. تدعم تحليل الوثائق والمحادثات الممتدة. شائعة بين المستخدمين الذين يحتاجون معالجة كميات كبيرة من النص أو مشاكل معقدة."
        },
        "url": "https://www.kimi.com/",
        "tags": ["ai", "llm", "long-context", "free-tier", "document-analysis"],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": ["Developer", "Student", "Researcher"],
          "useCases": ["Analyzing long documents", "Complex reasoning tasks", "Research assistance", "Extended technical discussions"],
          "_confidenceLabel": "community_verified",
          "_lastVerified": "2026-06-09"
        }
      },
      {
        "title": "Meta AI",
        "description": {
          "en": "Meta's conversational AI with image generation and general assistance capabilities. Available through multiple Meta platforms with generous free usage. Good for creative tasks and everyday questions.",
          "ar": "الذكاء الاصطناعي الحواري من Meta مع قدرات توليد الصور والمساعدة العامة. متاح عبر منصات Meta متعددة مع استخدام مجاني سخي. جيد للمهام الإبداعية والأسئلة اليومية."
        },
        "url": "https://www.meta.ai/",
        "tags": ["ai", "llm", "image-generation", "free-tier", "creative"],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": ["Student", "Freelancer", "Creator"],
          "useCases": ["Creative image and text generation", "Everyday questions and research", "Learning and brainstorming"],
          "_confidenceLabel": "official_verified",
          "_lastVerified": "2026-06-09"
        }
      },
      {
        "title": "ChatGPT",
        "description": {
          "en": "OpenAI's widely used conversational AI. The free tier provides access to capable models for general use, coding, writing, and learning. Additional features and higher limits available on paid plans.",
          "ar": "الذكاء الاصطناعي الحواري الشائع من OpenAI. الطبقة المجانية توفر وصولاً إلى نماذج قادرة للاستخدام العام والبرمجة والكتابة والتعلم. ميزات إضافية وحدود أعلى متاحة في الخطط المدفوعة."
        },
        "url": "https://chatgpt.com/",
        "tags": ["ai", "llm", "chatgpt", "free-tier", "general-purpose"],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": ["Developer", "Student", "Freelancer"],
          "useCases": ["General conversation and research", "Writing and editing assistance", "Coding help and debugging", "Learning new topics"],
          "_confidenceLabel": "official_verified",
          "_lastVerified": "2026-06-09"
        }
      },
      {
        "title": "Claude",
        "description": {
          "en": "Anthropic's AI assistant known for strong reasoning, writing quality, and safety focus. Free tier available with usage limits. Popular for detailed analysis, coding, and producing high-quality written content.",
          "ar": "مساعد AI من Anthropic معروف باستدلال قوي وجودة كتابة عالية وتركيز على السلامة. الطبقة المجانية متاحة مع حدود استخدام. شائع للتحليل المفصل والبرمجة وإنتاج محتوى مكتوب عالي الجودة."
        },
        "url": "https://claude.ai/",
        "tags": ["ai", "llm", "claude", "free-tier", "writing", "reasoning"],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": ["Developer", "Student", "Writer"],
          "useCases": ["High-quality writing and editing", "Detailed analysis and research", "Complex coding and reasoning tasks"],
          "_confidenceLabel": "official_verified",
          "_lastVerified": "2026-06-09"
        }
      },
      {
        "title": "Mistral",
        "description": {
          "en": "Chat interface for Mistral AI models. Offers capable open and proprietary models for general use, coding, and multilingual tasks. The console provides API access for developers.",
          "ar": "واجهة دردشة لنماذج Mistral AI. توفر نماذج قادرة مفتوحة وخاصة للاستخدام العام والبرمجة والمهام متعددة اللغات. توفر الكونسول وصول API للمطورين."
        },
        "url": "https://chat.mistral.ai",
        "tags": ["ai", "llm", "mistral", "free-tier", "api", "multilingual"],
        "difficulty": "beginner",
        "metadata": {
          "availableForAlgerians": "Fully Available",
          "recommendedFor": ["Developer", "Student"],
          "useCases": ["General AI assistance", "Coding and technical tasks", "API integration for projects"],
          "_confidenceLabel": "official_verified",
          "_lastVerified": "2026-06-09"
        }
      }
    ]
  }
  // Note: Remaining subcategories in this file still need full description rewrites and metadata additions following the same standards.
  // Apply the same process (research site, write factual 40-80 word description, add recommendedFor/useCases/difficulty/tags/availability/confidence) to all other entries.
];
