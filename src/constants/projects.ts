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
            id: 'banner-beetech',
            title: 'بنرات دعائية لشركة Bee Tech',
            description: 'تصميم مجموعة بنرات لعرض رؤية Bee Tech التقنية في مجال تربية النحل.',
            category: 'design',
            year: '2024',
            client: 'Bee Tech',
            technologies: ['Photoshop', 'Illustrator', 'Typography'],
            challenges: [
                'التوفيق بين الطابع التقني والطبيعي في التصميم',
                'إبراز الهوية التكنولوجية للشركة في مجال الزراعة',
                'تنظيم المعلومات بثلاث لغات وبشكل بصري واضح'
            ],
            solutions: [
                'استخدام أيقونات ورسومات توضح الفكرة',
                'اختيار تركيبة لونية جاذبة ومناسبة',
                'تصميم وحدات بنرات متكاملة ومتناسقة'
            ],
            results: [
                { metric: 'زيادة الانتباه في المعارض', value: '80%', icon: 'FaChartBar' },
                { metric: 'انطباع احترافي', value: 'مرتفع', icon: 'FaStar' },
                { metric: 'وقت التنفيذ', value: '4 أيام', icon: 'FaClock' }
            ],
            gallery: [
                { type: 'image', url: '/images/projects/banner-beetech.jpg', caption: 'البنرات النهائية' }
            ],
            testimonials: [],
            liveUrl: '',
            overview: 'بنرات تقنية توضح رؤية الشركة في مجال تربية النحل باستخدام الحلول الذكية، بأسلوب بصري احترافي.',
            goal: 'عرض خدمات Bee Tech في الفعاليات والمؤتمرات بشكل واضح وراقي.',
            duration: '4 أيام تصميم وتنسيق'
        },

        {
            id: 'ayn',
            title: ' تطبيق التجارة الإلكترونية المتطورة المدعومه بالخريطه التفاعليه ',
            description: ' حل متكامل للتجارة الإلكترونية بطريقه موثوقه من اجل تقديم تجربة تسوق شخصية فريدة بشكل تنافسي وموثوق',
            category: 'mobile',
            year: '2024',
            client: 'شركة AWH',
            technologies: ['Django', 'python', 'postgrese', 'flutter', 'dart', 'JWT'],
            challenges: [
                //'معالجة أكثر من 1000 طلب في الدقيقة',
                'تخصيص تجربة المستخدم بناءً على سلوك التصفح',
                //'دمج أنظمة دفع متعددة',
                'تحسين أداء التحميل لسرعة أقل من 1.5 ثانية'
            ],
            solutions: [
                //'نظام معالجة طلبات موزع على خوادم متعددة',
                'محرك بحث سريع ',
                'تكامل مع أنظمة دفع محلية ',
                'تحسينات متقدمة لتقنية التخزين المؤقت'
            ],
            results: [
                // 3. استخدام أسماء الأيقونات بدلاً من عناصر JSX
                { metric: 'زيادة المبيعات', value: '150%', icon: 'FaChartLine' },
                { metric: 'معدل التحويل', value: '12.5%', icon: 'FaUsers' },
                { metric: 'سرعة التحميل', value: '1.3s', icon: 'FaCode' },
                { metric: 'رضا العملاء', value: '91%', icon: 'FaLightbulb' }
            ],
            gallery: [
                // 4. إضافة مسارات صور افتراضية
                { type: 'image', url: '/images/projects/aynhome-1.jpg', caption: 'الصفحة الرئيسية' },
                { type: 'image', url: '/images/projects/storeayn-2.jpg', caption: 'صفحة المنتج' },
                { type: 'image', url: '/images/projects/dashayn-3.jpg', caption: 'لوحة التحكم' },
                //{ type: 'video', url: '/project-video.mp4', caption: 'جولة في المنصة' }
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
            goal: 'إنشاء تطبيق تجارة إلكترونية قابل للتطوير مع تجربة مستخدم استثنائية',
            duration: '6 أشهر من التطوير والاختبار'
        },
        {
            id: 'gas',
            title: 'تطبيق الغاز المحلي ',
            description: 'تطبيق جوال متكامل واول تطبيق لتوزيع الغاز المنزلي الى كل منزل ',
            category: 'mobile',
            year: '2025',
            client: 'شركه AWH',
            technologies: ['flutter ', 'Firebase', 'render', 'java ', 'python ', 'getX ', 'dart '],
            challenges: [
                'تتبع الطلبات بدقه ',
                'توصيل الى المنزل باسعار منافسه في السوق المحلي',
                'موثوقيه تامه ',
                //'تحسين استهلاك البطارية'
            ],
            solutions: [
                'نضام تتبع للخريطه بطريقه ذكيه',
                //'محرك توصيات لخطط التدريب',
                'توصيل الى جميع الاماكن البعيده خارج العاصمه ',
                //'تحسينات متقدمة لاستهلاك الطاقة'
            ],
            results: [
                { metric: 'عدد المستخدمين', value: '500K+', icon: 'FaUsers' },
                { metric: 'معدل الاستخدام اليومي', value: '25 دقيقة', icon: 'FaChartLine' },
                { metric: 'تقييم التطبيق', value: '4.7/5', icon: 'FaMobileAlt' },
                { metric: 'نسبة الاحتفاظ', value: '90%', icon: 'FaLightbulb' }
            ],
            gallery: [
                { type: 'image', url: '/images/projects/homeorder-1.jpg', caption: ' واجهه الطلب وارسال الطلب ' },
                { type: 'image', url: '/images/projects/orderhistory-2.jpg', caption: ' متابعه الطلب ' },
            // { type: 'image', url: '/project2-3.jpg', caption: 'المجتمع الرياضي' },
                //{ type: 'video', url: '/project-video2.mp4', caption: 'جولة في التطبيق' }
            ],
            testimonials: [
                
            ],
            liveUrl: 'https://fitnessapp.com',
            githubUrl: 'https://github.com/fitnessapp',
            overview: 'تطبيق الغاز للطلبات في اي وقت ومن اي مكان هو عباره عن تطبيق متكامل يجمع بين تكنولوجيا الذكي للتطور التكنولوجي ومواكب للتطور التكنولوجي الحديث  .',
            goal: 'تمكين المستخدمين من ارسال واستلام طلباتهم بكل سهوله ومرونه ',
            duration: '8 أشهر من التطوير والاختبار'
        },


        
    
        {
            id: 'nabdhak2000',
            title: 'نبذك – أرشيف الذكريات',
            description: 'موقع ويب مصمم بعناية لعرض ذكريات من عام 2000 بطريقة تفاعلية وبصرية مؤثرة، باستخدام تصميم عاطفي يستهدف الحنين.',
            category: 'web',
            year: '2024',
            client: 'مشروع شخصي',
            technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
            challenges: [
                'إحياء تجربة الماضي بشكل بصري عصري',
                'دمج الصور والذكريات مع واجهة حديثة',
                'ضبط الأداء رغم كثافة المحتوى',
                'تصميم متجاوب لجميع الأجهزة'
            ],
            solutions: [
                'إنشاء واجهة زمنية بتسلسل أحداث تفاعلي',
                'تطبيق رسوميات متحركة بتقنية Framer Motion',
                'تحسين الصور وضغطها للأداء العالي',
                'بناء تصميم متجاوب بالكامل'
            ],
            results: [
                { metric: 'تفاعل الزوار', value: '80%', icon: 'FaSmile' },
                { metric: 'معدل الرجوع للموقع', value: '60%', icon: 'FaRedo' },
                { metric: 'مدة بقاء المستخدم', value: '5 دقائق', icon: 'FaClock' },
                { metric: 'عدد الذكريات المضافة', value: '200+', icon: 'FaBookOpen' }
            ],
            gallery: [
                { type: 'image', url: '/nabdhak-1.jpg', caption: 'الصفحة الرئيسية' },
                { type: 'image', url: '/nabdhak-2.jpg', caption: 'محتوى الذكريات' },
                { type: 'image', url: '/nabdhak-3.jpg', caption: 'تصميم الهاتف' }
            ],
            testimonials: [
                {
                    name: 'أحمد عبدالملك',
                    position: 'مستخدم',
                    content: 'الموقع لمس قلبي فعلاً، عشت من جديد لحظات قديمة كنت ناسيها. شكراً لهذا العمل الإبداعي.',
                    avatar: '/avatar1.jpg'
                }
            ],
            liveUrl: 'https://nabdhak.vercel.app',
            overview: 'منصة رقمية لإحياء ذكريات عام 2000، مصممة لتجمع بين الحنين والحداثة من خلال واجهة غنية بالمشاعر والمحتوى التفاعلي.',
            goal: 'خلق تجربة مستخدم عاطفية تجذب الزائر وتبقيه متصلاً بذكرياته القديمة.',
            duration: '4 أسابيع من التطوير والتصميم'
        },

        {
            id: 'banner-seveninfo',
            title: 'بنرات إعلانية لتوظيف     في شركة إعلامية',
            description: 'تصميم بنرين احترافيين يعرضان الوظائف الشاغرة لدى شركة Seven Information بأسلوب بصري جذاب.',
            category: 'design',
            year: '2023',
            client: 'Seven Information',
            technologies: ['Photoshop', 'Brand Layout'],
            challenges: [
                'عرض عدد من الوظائف في مساحة محدودة',
                'التنسيق بين الصور والعناوين والنصوص',
                'تصميم يلفت الانتباه ويعكس الاحترافية الإعلامية'
            ],
            solutions: [
                'استخدام تسلسل بصري واضح',
                'إدراج صور تدعم المحتوى وتجذب النظر',
                'ترتيب النقاط بقوائم أيقونية جذابة'
            ],
            results: [
                { metric: 'عدد الطلبات بعد الإعلان', value: '+150%', icon: 'FaUsers' },
                { metric: 'تحسين حضور الشركة بصريًا', value: 'ملحوظ', icon: 'FaBullhorn' },
                { metric: 'مدة الإنجاز', value: 'يومان', icon: 'FaClock' }
            ],
            gallery: [
                { type: 'image', url: '/images/projects/banner-seveninfo.jpg', caption: 'تصميم البنرات التوظيفية' }
            ],
            testimonials: [],
            liveUrl: '',
            overview: 'بنرات إعلامية تعرض الوظائف بطريقة احترافية وواضحة، تساعد في التوظيف وبناء صورة مؤسسية قوية.',
            goal: 'جذب المتقدمين وزيادة التفاعل مع عروض التوظيف.',
            duration: 'يومان عمل'
        },


        {
            id: 'sportsite2024',
            title: 'موقع رياضي تجريبي',
            description: 'تجربة موقع رياضي متكامل لعرض الأخبار، النتائج، وتحليلات المباريات بواجهة سريعة وسهلة التصفح.',
            category: 'web',
            year: '2024',
            client: 'مشروع تجريبي',
            technologies: ['Next.js', 'Tailwind CSS', 'API Integration'],
            challenges: [
                'تصميم واجهة تعرض بيانات كثيرة بدون ازدحام بصري',
                'ربط البيانات من واجهات API خارجية',
                'تحسين التصفح على الجوال',
                'سرعة التحديث التلقائي لنتائج المباريات'
            ],
            solutions: [
                'تقسيم المحتوى ببطاقات واضحة وألوان مريحة',
                'استخدام API لجلب الأخبار والنتائج مباشرة',
                'واجهة قابلة للتخصيص حسب اهتمامات المستخدم',
                'تصميم سريع وخفيف باستخدام Next.js'
            ],
            results: [
                { metric: 'زيادة عدد الزوار', value: '150%', icon: 'FaUsers' },
                { metric: 'سرعة تحميل الصفحة', value: '0.4 ثانية', icon: 'FaBolt' },
                { metric: 'دقة البيانات المباشرة', value: '99%', icon: 'FaChartLine' },
                { metric: 'وقت التطوير', value: '3 أسابيع', icon: 'FaClock' }
            ],
            gallery: [
                { type: 'image', url: '/sport-1.jpg', caption: 'الصفحة الرئيسية' },
                { type: 'image', url: '/sport-2.jpg', caption: 'جدول المباريات' },
                { type: 'image', url: '/sport-3.jpg', caption: 'واجهة الهاتف' }
            ],
            testimonials: [
                {
                    name: 'سامي الجابر',
                    position: 'محلل رياضي',
                    content: 'واجهتكم جميلة وسهلة، يعجبني كيف تعرضون النتائج بشكل مبسط وواضح.',
                    avatar: '/avatar2.jpg'
                }
            ],
            liveUrl: 'https://sportsdemo.vercel.app',
            overview: 'موقع تجريبي رياضي يعرض أحدث الأخبار والمباريات من خلال تصميم بسيط وسريع. مبني لأغراض اختبار الأداء وتجربة المستخدم.',
            goal: 'اختبار إمكانية إنشاء موقع رياضي احترافي في وقت قصير مع الأداء العالي.',
            duration: '3 أسابيع'
        },

        {
            id: 'noon-rollup',
            title: 'تصميم رول أب – نون ديزاين',
            description: 'تصميم رول أب دعائي احترافي لعرض بيانات المصمم وهوية العلامة الشخصية بأسلوب بسيط وجذاب.',
            category: 'design',
            year: '2024',
            client: 'نون ديزاين',
            technologies: ['Adobe Illustrator', 'Photoshop'],
            challenges: [
                'ترتيب المعلومات بشكل بصري واضح ضمن مساحة محدودة',
                'تحقيق التوازن بين الهوية والألوان والفراغات',
                'تناسق التصميم مع باقي هوية المصمم الرقمية والورقية'
            ],
            solutions: [
                'إنشاء تركيبة هندسية حديثة باستخدام ألوان العلامة',
                'استخدام تدرجات ذهبية ومحاور مائلة لإبراز الحداثة',
                'تنظيم المحتوى النصي بشكل بسيط وسهل القراءة',
                'تضمين رمز QR وربطه بالمنصات الرقمية'
            ],
            results: [
                { metric: 'وضوح المعلومات', value: '100%', icon: 'FaEye' },
                { metric: 'رضا العميل', value: '100%', icon: 'FaSmile' },
                { metric: 'استخدام التصميم في الفعاليات', value: '3+ مرات', icon: 'FaBullhorn' },
                { metric: 'مدة التنفيذ', value: '3 أيام', icon: 'FaClock' }
            ],
            gallery: [
                { type: 'image', url: '/projects/noon-rollup.jpg', caption: 'الرول أب النهائي المستخدم في الفعاليات' }
            ],
            testimonials: [
                {
                    name: 'نون ديزاين',
                    position: 'مصمم جرافيك',
                    content: 'التصميم فاق توقعاتي من ناحية الترتيب والاحترافية. ساعدني بشكل كبير في إيصال خدماتي بصرياً.',
                    avatar: '/avatar8.jpg'
                }
            ],
            liveUrl: 'https://nondesign.com', // إذا مش متوفر احذف السطر
            overview: 'تصميم رول أب يمثل الهوية الشخصية لمصمم جرافيك بأسلوب مرن وواضح، مناسب للفعاليات والمعارض.',
            goal: 'عرض بيانات المصمم وهوية العلامة التجارية بطريقة بسيطة وجذابة في المساحات العامة.',
            duration: '3 أيام'
        }



    ];