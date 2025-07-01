// constants/projects.ts

// 1. إزالة استيراد الأيقونات غير الضرورية
export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    year: string;
    client: string;
    technologies: string[];
    challenges: string[];
    solutions: string[];
    // 2. تغيير نوع الأيقونات إلى string بدلاً من JSX.Element
    results: { metric: string; value: string; icon: string }[];
    gallery: { type: string; url: string; caption: string }[];
    testimonials: { name: string; position: string; content: string; avatar: string }[];
    liveUrl: string;
    githubUrl?: string;
    overview: string;
    goal: string;
    duration: string;
}

export const projects: Project[] = [
    {
        id: 'ecommerce-platform',
        title: 'منصة التجارة الإلكترونية المتطورة',
        description: 'حل متكامل للتجارة الإلكترونية يدمج تقنيات الذكاء الاصطناعي لتقديم تجربة تسوق شخصية فريدة',
        category: 'web',
        year: '2023',
        client: 'شركة التقنية الرائدة',
        technologies: ['Next.js', 'Node.js', 'MongoDB', 'TensorFlow', 'Stripe', 'TailwindCSS'],
        challenges: [
            'معالجة أكثر من 1000 طلب في الدقيقة',
            'تخصيص تجربة المستخدم بناءً على سلوك التصفح',
            'دمج أنظمة دفع متعددة',
            'تحسين أداء التحميل لسرعة أقل من 0.5 ثانية'
        ],
        solutions: [
            'نظام معالجة طلبات موزع على خوادم متعددة',
            'محرك توصيات مدعوم بالذكاء الاصطناعي',
            'تكامل مع أنظمة دفع محلية ودولية',
            'تحسينات متقدمة لتقنية التخزين المؤقت'
        ],
        results: [
            // 3. استخدام أسماء الأيقونات بدلاً من عناصر JSX
            { metric: 'زيادة المبيعات', value: '150%', icon: 'FaChartLine' },
            { metric: 'معدل التحويل', value: '12.5%', icon: 'FaUsers' },
            { metric: 'سرعة التحميل', value: '0.3s', icon: 'FaCode' },
            { metric: 'رضا العملاء', value: '98%', icon: 'FaLightbulb' }
        ],
        gallery: [
            // 4. إضافة مسارات صور افتراضية
            { type: 'image', url: '/project1-1.jpg', caption: 'الصفحة الرئيسية' },
            { type: 'image', url: '/project1-2.jpg', caption: 'صفحة المنتج' },
            { type: 'image', url: '/project1-3.jpg', caption: 'لوحة التحكم' },
            { type: 'video', url: '/project-video.mp4', caption: 'جولة في المنصة' }
        ],
        testimonials: [
            {
                name: 'أحمد السعدي',
                position: 'مدير العمليات',
                content: 'هذه المنصة غيرت مفهومنا للتجارة الإلكترونية. لم نتوقع هذا المستوى من التطور والسلاسة في الأداء.',
                avatar: '/avatar1.jpg'
            },
            {
                name: 'سارة محمد',
                position: 'مديرة التسويق',
                content: 'محرك التوصيات الذكي زاد من مبيعاتنا بنسبة 40% في الشهر الأول. العمل مع هذا الفريق كان تجربة استثنائية.',
                avatar: '/avatar2.jpg'
            }
        ],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/example',
        overview: 'منصة التجارة الإلكترونية المتطورة هي حل شامل مصمم لتحويل تجربة التسوق عبر الإنترنت. باستخدام أحدث تقنيات الويب والذكاء الاصطناعي، تقدم المنصة تجربة مستخدم شخصية ومخصصة لكل زائر. تم تطوير النظام لمعالجة أكثر من 10,000 طلب في الساعة مع الحفاظ على سرعة تحميل أقل من نصف ثانية. يحتوي النظام على لوحة تحكم متقدمة تمكن مسؤولي المتجر من إدارة المنتجات والعروض والمستخدمين بسهولة.',
        goal: 'إنشاء منصة تجارة إلكترونية قابلة للتطوير مع تجربة مستخدم استثنائية',
        duration: '6 أشهر من التطوير والاختبار'
    },
    {
        id: 'fitness-app',
        title: 'تطبيق اللياقة البدنية الذكي',
        description: 'تطبيق جوال متكامل للياقة البدنية يقدم خطط تدريب شخصية وتتبع التقدم باستخدام الذكاء الاصطناعي',
        category: 'mobile',
        year: '2023',
        client: 'شركة اللياقة المتقدمة',
        technologies: ['React Native', 'Firebase', 'Redux', 'AI Integration', 'HealthKit'],
        challenges: [
            'تتبع الحركات الرياضية بدقة',
            'تخصيص خطط التدريب بناءً على القدرات البدنية',
            'تكامل مع أجهزة اللياقة المختلفة',
            'تحسين استهلاك البطارية'
        ],
        solutions: [
            'نظام تتبع حركات باستخدام الذكاء الاصطناعي',
            'محرك توصيات لخطط التدريب',
            'تكامل مع أكثر من 20 جهاز لياقة',
            'تحسينات متقدمة لاستهلاك الطاقة'
        ],
        results: [
            { metric: 'عدد المستخدمين', value: '500K+', icon: 'FaUsers' },
            { metric: 'معدل الاستخدام اليومي', value: '25 دقيقة', icon: 'FaChartLine' },
            { metric: 'تقييم التطبيق', value: '4.9/5', icon: 'FaMobileAlt' },
            { metric: 'نسبة الاحتفاظ', value: '75%', icon: 'FaLightbulb' }
        ],
        gallery: [
            { type: 'image', url: '/project2-1.jpg', caption: 'واجهة التدريب' },
            { type: 'image', url: '/project2-2.jpg', caption: 'تتبع التقدم' },
            { type: 'image', url: '/project2-3.jpg', caption: 'المجتمع الرياضي' },
            { type: 'video', url: '/project-video2.mp4', caption: 'جولة في التطبيق' }
        ],
        testimonials: [
            {
                name: 'محمد الخالد',
                position: 'مدير المنتج',
                content: 'التطبيق غير حياة آلاف المستخدمين. نحن نرى قصص نجاح يومية لأشخاص حققوا أهدافهم الصحية بفضل هذا التطبيق.',
                avatar: '/avatar3.jpg'
            },
            {
                name: 'لينا عبد الرحمن',
                position: 'مدربة لياقة',
                content: 'سهولة الاستخدام والدقة في تتبع التمارين جعلت هذا التطبيق الأفضل في السوق. أنا أوصي به لجميع عملائي.',
                avatar: '/avatar4.jpg'
            }
        ],
        liveUrl: 'https://fitnessapp.com',
        githubUrl: 'https://github.com/fitnessapp',
        overview: 'تطبيق اللياقة البدنية الذكي هو منصة متكاملة تجمع بين تكنولوجيا الذكاء الاصطناعي وخبرة المدربين المحترفين لتقديم تجربة لياقة بدنية شخصية لكل مستخدم. التطبيق يتتبع أكثر من 50 نوعاً من التمارين الرياضية ويحلل أداء المستخدم ليقترح تحسينات فورية.',
        goal: 'تمكين المستخدمين من تحقيق أهدافهم الصحية بطرق علمية وممتعة',
        duration: '8 أشهر من التطوير والاختبار'
    },
    {
        id: 'brand-identity',
        title: 'هوية بصرية لشركة التقنية',
        description: 'تصميم هوية بصرية متكاملة لشركة تقنية ناشئة تشمل الشعار والألوان والمواد الترويجية',
        category: 'design',
        year: '2022',
        client: 'شركة المستقبل التقنية',
        technologies: ['Adobe Illustrator', 'Photoshop', 'Brand Guidelines', 'Typography'],
        challenges: [
            'تمثيل القيم التقنية في تصميم بسيط',
            'إنشاء نظام مرئي متكامل',
            'تصميم يناسب جميع الوسائط',
            'التوازن بين الحداثة والاحترافية'
        ],
        solutions: [
            'شعار ديناميكي يعبر عن الابتكار',
            'نظام ألوان متكامل مع معاني نفسية',
            'دليل هوية شامل لجميع الاستخدامات',
            'تصميم متجاوب مع جميع الأحجام'
        ],
        results: [
            { metric: 'زيادة الاعتراف بالعلامة', value: '70%', icon: 'FaPalette' },
            { metric: 'رضا العميل', value: '95%', icon: 'FaUsers' },
            { metric: 'جوائز تصميم', value: '3', icon: 'FaLightbulb' },
            { metric: 'وقت التطوير', value: '8 أسابيع', icon: 'FaChartLine' }
        ],
        gallery: [
            { type: 'image', url: '/project3-1.jpg', caption: 'الشعار الرئيسي' },
            { type: 'image', url: '/project3-2.jpg', caption: 'بطاقات العمل' },
            { type: 'image', url: '/project3-3.jpg', caption: 'المواد الترويجية' },
            { type: 'image', url: '/project3-4.jpg', caption: 'التطبيقات الرقمية' }
        ],
        testimonials: [
            {
                name: 'خالد الفهد',
                position: 'المدير التنفيذي',
                content: 'الهوية البصرية التي صممتموها لنا نقلت علامتنا التجارية إلى مستوى جديد تماماً. نحن الآن نتميز عن المنافسين بشكل واضح.',
                avatar: '/avatar5.jpg'
            },
            {
                name: 'نورا السليم',
                position: 'مديرة التسويق',
                content: 'دليل الهوية الشامل سهل علينا عملية التوحيد البصري عبر جميع منصاتنا. العمل مع فريقكم كان احترافياً من البداية للنهاية.',
                avatar: '/avatar6.jpg'
            }
        ],
        liveUrl: 'https://techbrand.com',
        overview: 'هوية بصرية متكاملة لشركة تقنية ناشئة، تجمع بين الحداثة والاحترافية. صممنا شعاراً ديناميكياً يعكس روح الابتكار، ونظام ألوان متكامل يحفز الثقة والإبداع، مع خطوط عصرية تناسب الوسائط الرقمية والمطبوعة.',
        goal: 'إنشاء هوية بصرية مميزة تعكس قيم الشركة وتجذب العملاء المستهدفين',
        duration: '8 أسابيع من التصميم والتطوير'
    }
  ];