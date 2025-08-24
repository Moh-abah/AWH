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
        // {
        //     id: 'gas',
        //     title: 'تطبيق الغاز المحلي ',
        //     description: 'تطبيق جوال متكامل واول تطبيق لتوزيع الغاز المنزلي الى كل منزل ',
        //     category: 'mobile',
        //     year: '2025',
        //     client: 'شركه AWH',
        //     technologies: ['flutter ', 'Firebase', 'render', 'java ', 'python ', 'getX ', 'dart '],
        //     challenges: [
        //         'تتبع الطلبات بدقه ',
        //         'توصيل الى المنزل باسعار منافسه في السوق المحلي',
        //         'موثوقيه تامه ',
        //         //'تحسين استهلاك البطارية'
        //     ],
        //     solutions: [
        //         'نضام تتبع للخريطه بطريقه ذكيه',
        //         //'محرك توصيات لخطط التدريب',
        //         'توصيل الى جميع الاماكن البعيده خارج العاصمه ',
        //         //'تحسينات متقدمة لاستهلاك الطاقة'
        //     ],
        //     results: [
        //         { metric: 'عدد المستخدمين', value: '500K+', icon: 'FaUsers' },
        //         { metric: 'معدل الاستخدام اليومي', value: '25 دقيقة', icon: 'FaChartLine' },
        //         { metric: 'تقييم التطبيق', value: '4.7/5', icon: 'FaMobileAlt' },
        //         { metric: 'نسبة الاحتفاظ', value: '90%', icon: 'FaLightbulb' }
        //     ],
        //     gallery: [
        //         { type: 'image', url: '/images/projects/homeorder-1.jpg', caption: ' واجهه الطلب وارسال الطلب ' },
        //         { type: 'image', url: '/images/projects/orderhistory-2.jpg', caption: ' متابعه الطلب ' },
        //     // { type: 'image', url: '/project2-3.jpg', caption: 'المجتمع الرياضي' },
        //         //{ type: 'video', url: '/project-video2.mp4', caption: 'جولة في التطبيق' }
        //     ],
        //     testimonials: [
                
        //     ],
        //     liveUrl: 'https://fitnessapp.com',
        //     githubUrl: 'https://github.com/fitnessapp',
        //     overview: 'تطبيق الغاز للطلبات في اي وقت ومن اي مكان هو عباره عن تطبيق متكامل يجمع بين تكنولوجيا الذكي للتطور التكنولوجي ومواكب للتطور التكنولوجي الحديث  .',
        //     goal: 'تمكين المستخدمين من ارسال واستلام طلباتهم بكل سهوله ومرونه ',
        //     duration: '8 أشهر من التطوير والاختبار'
        // },


        
    
        // {
        //     id: 'nabdhak2000',
        //     title: 'نبذك – أرشيف الذكريات',
        //     description: 'موقع ويب مصمم بعناية لعرض ذكريات من عام 2000 بطريقة تفاعلية وبصرية مؤثرة، باستخدام تصميم عاطفي يستهدف الحنين.',
        //     category: 'web',
        //     year: '2024',
        //     client: 'مشروع شخصي',
        //     technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        //     challenges: [
        //         'إحياء تجربة الماضي بشكل بصري عصري',
        //         'دمج الصور والذكريات مع واجهة حديثة',
        //         'ضبط الأداء رغم كثافة المحتوى',
        //         'تصميم متجاوب لجميع الأجهزة'
        //     ],
        //     solutions: [
        //         'إنشاء واجهة زمنية بتسلسل أحداث تفاعلي',
        //         'تطبيق رسوميات متحركة بتقنية Framer Motion',
        //         'تحسين الصور وضغطها للأداء العالي',
        //         'بناء تصميم متجاوب بالكامل'
        //     ],
        //     results: [
        //         { metric: 'تفاعل الزوار', value: '80%', icon: 'FaSmile' },
        //         { metric: 'معدل الرجوع للموقع', value: '60%', icon: 'FaRedo' },
        //         { metric: 'مدة بقاء المستخدم', value: '5 دقائق', icon: 'FaClock' },
        //         { metric: 'عدد الذكريات المضافة', value: '200+', icon: 'FaBookOpen' }
        //     ],
        //     gallery: [
        //         { type: 'image', url: '/images/projects/nabdak.png', caption: 'الصفحة الرئيسية' }
              
        //     ],
        //     testimonials: [
        //         // {
        //         //     name: 'أحمد عبدالملك',
        //         //     position: 'مستخدم',
        //         //     content: 'الموقع لمس قلبي فعلاً، عشت من جديد لحظات قديمة كنت ناسيها. شكراً لهذا العمل الإبداعي.',
        //         //     avatar: '/avatar1.jpg'
        //         // }
        //     ],
        //     liveUrl: 'https://nabdhak.vercel.app',
        //     overview: 'منصة رقمية لإحياء ذكريات عام 2000، مصممة لتجمع بين الحنين والحداثة من خلال واجهة غنية بالمشاعر والمحتوى التفاعلي.',
        //     goal: 'خلق تجربة مستخدم عاطفية تجذب الزائر وتبقيه متصلاً بذكرياته القديمة.',
        //     duration: '4 أسابيع من التطوير والتصميم'
        // },

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
                { type: 'image', url: '/images/projects/sport.png', caption: 'الصفحة الرئيسية' }
                
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
            title: '   هويات بصريه  ',
            description: 'نقدم لك خدمة تصميم الهوية البصرية المتكاملة، المصممة خصيصًا لتعكس شخصية علامتك التجارية وتُعزز حضورها في السوق.',
            category: 'identity',
            year: '2024',
            client: ' هويات بصريه',
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
                { type: 'image', url: '/images/projects/latef.jpg', caption: 'لطيف شركه انسانيه' },
                { type: 'image', url: '/images/projects/pixel.jpg', caption: 'شركه رقميه' },
                { type: 'image', url: '/images/projects/shabki.jpg', caption: 'شبكه امنيه' },
                { type: 'image', url: '/images/projects/mahara.jpg', caption: 'مهاره' },
                { type: 'image', url: '/images/projects/nohba.jpg', caption: ' شركه النخبه' }
            ],
            testimonials: [
                
            ],
            liveUrl: 'https://nondesign.com', // إذا مش متوفر احذف السطر
            overview: 'تصميمات الهويات البصريه يمثل الهوية التجاريه للجهه ويعتبر بأسلوب مرن وواضح، مناسب للفعاليات والمعارض.',
            goal: 'عرض بيانات المصمم وهوية العلامة التجارية بطريقة بسيطة وجذابة في المساحات العامة.',
            duration: '3 أيام'
        },

        
        

        {
            id: 'mokhtalif-elnekhaaba',
            title: 'عقارات      ',
            description: 'تصميم شعار وهوية لشركة مستقل النخبة المتخصصة في التطوير والاستثمار العقاري.',
            category: 'social',
            year: '2025',
            client: 'مستقل النخبة',
            technologies: ['Illustrator', 'Photoshop'],
            challenges: ['إبراز الجانب العقاري والاحترافي في الهوية المرجعية'],
            solutions: ['شعار يحتوي على رمز مبنى بسيط وألوان رسمية'],
            results: [
                { metric: 'رضا العميل', value: '100%', icon: 'FaSmile' },
                { metric: 'مدة التنفيذ', value: '1 أسبوع', icon: 'FaClock' }
            ],
            gallery: [
                { type: 'image', url: '/images/projects/agar.jpg', caption: ' سوشسال ميديا ' },
                { type: 'image', url: '/images/projects/agar1.jpg', caption: ' سوشسال ميديا ' },
                { type: 'image', url: '/images/projects/agar2.jpg', caption: ' سوشسال ميديا ' },
                { type: 'image', url: '/images/projects/agar3.jpg', caption: ' سوشسال ميديا ' },
                { type: 'image', url: '/images/projects/agar4.jpg', caption: ' سوشسال ميديا ' }
            ],
            testimonials: [],
            overview: 'هوية تعكس الاحترافية في مجال العقارات.',
            goal: 'بناء هوية موثوقة وجذابة للشركة.',
            duration: '1 أسبوع',
            liveUrl: ""
        },


        {
            id: 'larin-medical-center',
            title: 'مركز اسنان ',
            description: 'منشورات ترويجية وتعريفية للمجمع الطبي تخصص طب الأسنان.',
            category: 'social',
            year: '2025',
            client: 'مراكز اسنان الطبيه',
            technologies: ['Canva', 'Photoshop'],
            challenges: ['عرض الخدمات الطبية والثقة بالعيادة'],
            solutions: ['منشورات تحتوي صور حالات قبل/بعد وشهادات عملاء', 'ألوان هادئة طبية'],
            results: [
                { metric: 'زيادة الحجوزات', value: '25%', icon: 'FaTooth' }
            ],
            gallery: [

                { type: 'image', url: '/images/projects/laren.jpg', caption: ' اسنان' },
                { type: 'image', url: '/images/projects/laren1.jpg', caption: 'توصيات العملاء' },
                { type: 'image', url: '/images/projects/laren2.jpg', caption: 'توصيات العملاء' },
                { type: 'image', url: '/images/projects/laren3.jpg', caption: 'توصيات العملاء' }
            ],
            testimonials: [],
            overview: 'عرض خدمات طب الأسنان وزيادة ثقة الجمهور.',
            goal: 'رفع الوعي وزيادة الحجوزات.',
            duration: 'شهر',
            liveUrl: ""
        },
        {
            id: 'al-ahibaa-coffee',
            title: 'للقهوة',
            description: 'منشورات تعريفية وترويجية لمحطة قهوة .',
            category: 'social',
            year: '2025',
            client: ' قهوه',
            technologies: ['Canva', 'Photoshop'],
            challenges: ['عرض جودة القهوة وتڤريد الأصناف'],
            solutions: ['تصميم بوستات فوتوغرافية لأكواب القهوة وروائحها', 'نشر وصفات وقصص عن القهوة'],
            results: [
                { metric: 'معدل التفاعل', value: '45%', icon: 'FaCoffee' }
            ],
            gallery: [
                { type: 'image', url: '/images/projects/bon.jpg', caption: 'فنجان القهوة' }
            ],
            testimonials: [],
            overview: 'تعزيز تواجد علامة القهوة رقمياً وجذب عشاق القهوة.',
            goal: 'رفع الوعي وزيادة المتابعين.',
            duration: 'شهر',
            liveUrl: ""
        },

        
        {
            id: 'banner-beetech',
            title: 'بنرات   ',
            description: 'تصميم مجموعة بنرات لعرض رؤية  التقنية في مجالات متعدده.',
            category: 'banars',
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
                { type: 'image', url: '/images/projects/banner-beetech.jpg', caption: 'البنرات النهائية' },
                { type: 'image', url: '/images/projects/banner-seveninfo.jpg', caption: 'بنرات إعلانية لتوظيف  في شركة إعلامية' },
                { type: 'image', url: '/images/projects/banars2.jpg', caption: 'بنرات إعلانية لتوظيف  في شركة إعلامية' }

            ],
            testimonials: [],
            liveUrl: '',
            overview: 'بنرات تقنية توضح رؤية الشركة في مجال تربية النحل باستخدام الحلول الذكية، بأسلوب بصري احترافي.',
            goal: 'عرض خدمات Bee Tech في الفعاليات والمؤتمرات بشكل واضح وراقي.',
            duration: '4 أيام تصميم وتنسيق'
        },


        {
            id: 'awh-digital-campaign',
            title: 'حملة تسويق إلكتروني لشركة AWH',
            description: 'تحليلات وحملات إعلانية باستخدام Google Ads، Console، AdSense، وتحليل الأسهم.',
            category: 'digitalMarketing',
            year: '2025',
            client: 'شركة AWH',
            technologies: ['Google Ads', 'Search Console', 'AdSense', 'Google Analytics'],
            challenges: [
                'تحقيق عائد استثمار إيجابي',
                'تحليل بيانات دقيقة من Google Console وAdSense',
                'استهداف الجمهور المناسب'
            ],
            solutions: [
                'إنشاء حملات Google Ads + تحسين محركات',
                'تحليل بيانات AdSense لتوجيه الإعلانات',
                'تقارير شهرية وتحسين مستمر'
            ],
            results: [
                { metric: 'زيادة النقرات', value: '60%', icon: 'FaChartLine' },
                { metric: 'العائد على الاستثمار (ROI)', value: '120%', icon: 'FaDollarSign' }
            ],
            gallery: [
                { type: 'image', url: '/images/projects/1.jpg', caption: 'تحليل إعلانات Google' },
                { type: 'image', url: '/images/projects/2.jpg', caption: 'تحليل إعلانات Google' },
                { type: 'image', url: '/images/projects/3.jpg', caption: 'تحليل إعلانات Google' },
                { type: 'image', url: '/images/projects/4.jpg', caption: 'تحليل إعلانات Google' },
                { type: 'image', url: '/images/projects/6.jpg', caption: 'تحليل إعلانات Google' },
                { type: 'image', url: '/images/projects/7.jpg', caption: 'تحليل إعلانات Google' },
                { type: 'image', url: '/images/projects/8.jpg', caption: 'تحليل إعلانات Google' },
                { type: 'image', url: '/images/projects/9.jpg', caption: 'تحليل إعلانات Google' },
                { type: 'image', url: '/images/projects/10.jpg', caption: 'تحليل إعلانات Google' },
                { type: 'image', url: '/images/projects/11.jpg', caption: 'تحليل إعلانات Google' },
                { type: 'image', url: '/images/projects/12.jpg', caption: 'تحليل إعلانات Google' },
                { type: 'image', url: '/images/projects/13.jpg', caption: 'تحليل إعلانات Google' },
                { type: 'image', url: '/images/projects/14.jpg', caption: 'تحليل إعلانات Google' },
                { type: 'image', url: '/images/projects/15.jpg', caption: 'تحليل إعلانات Google' },
            ],
            testimonials: [],
            overview: 'حملة تسليط ضوء رقمي ورفع أداء AWH عبر القنوات المختلفة.',
            goal: 'تحقيق نمو ملموس وزيادة في التفاعل والمبيعات.',
            duration: '3 أشهر',
            liveUrl: ""
        },
        {
            id: 'asall',
            title: 'حملة تسويق إلكتروني لمتجر عسل   ',
            description: 'تحليلات وحملات إعلانية باستخدام Google Ads، Console، AdSense، Snapchat ،Tik tok، وتحليل الأسهم.',
            category: 'digitalMarketing',
            year: '2025',
            client: ' متجر عسل',
            technologies: ['Google Ads',  'Snapchat', 'Tik tok', 'Search Console', 'AdSense', 'Google Analytics'],
            challenges: [
                'تحقيق عائد استثمار إيجابي',
                'تحليل بيانات دقيقة من Google Console وAdSense و Tik tok و Snapchat',
                'استهداف الجمهور المناسب'
            ],
            solutions: [
                'إنشاء حملات Google Ads + تحسين محركات',
                'تحليل بيانات AdSense لتوجيه الإعلانات',
                'تقارير شهرية وتحسين مستمر'
            ],
            results: [
                { metric: 'زيادة النقرات', value: '60%', icon: 'FaChartLine' },
                { metric: 'العائد على الاستثمار (ROI)', value: '120%', icon: 'FaDollarSign' }
            ],
            gallery: [
                { type: 'image', url: '/images/projects/m1.jpg', caption: 'تحليل إعلانات Google' },
                { type: 'image', url: '/images/projects/m2.jpg', caption: 'تحليل إعلانات Google' },
                { type: 'image', url: '/images/projects/m3.jpg', caption: 'تحليل إعلانات Google' },
                { type: 'image', url: '/images/projects/m4.jpg', caption: 'تحليل إعلانات Google' },
                { type: 'image', url: '/images/projects/m5.jpg', caption: 'تحليل إعلانات Google' },
                { type: 'image', url: '/images/projects/m6.jpg', caption: 'تحليل إعلانات Google' },
                { type: 'image', url: '/images/projects/m7.jpg', caption: 'تحليل إعلانات Google' },
                { type: 'image', url: '/images/projects/m8.jpg', caption: 'تحليل إعلانات Google' },
                { type: 'image', url: '/images/projects/m9.jpg', caption: 'تحليل إعلانات Google' },
                { type: 'image', url: '/images/projects/m10.jpg', caption: 'تحليل إعلانات Google' },
                { type: 'image', url: '/images/projects/m11.jpg', caption: 'تحليل إعلانات Google' },
                
            ],
            testimonials: [],
            overview: 'حمله تسويق على متجر عسل بحيث زادت مبيعاته 300% ',
            goal: 'تحقيق نمو ملموس وزيادة في التفاعل والمبيعات.',
            duration: ' شهر واحد',
            liveUrl: ""
        },

        // {
        //     id: 'ramadan-guidance-campaign',
        //     title: 'ة',
        //     description: 'منشورات دينية وأدعية بمناسبة رمضان وجمعة مباركة لتعزيز التفاعل والتواصل.',
        //     category: 'social',
        //     year: '2025',
        //     client: 'شركة المناصب',
        //     technologies: ['Canva', 'Photoshop', 'Buffer'],
        //     challenges: ['توفير محتوى جذاب ومتجدد خلال رمضان', 'التصميم بالفيديو والصور الدعوية بشكل لائق'],
        //     solutions: ['تصميم بوستات تجمع بين الصور والنصوص الدينية', 'نشر دوري بموعد مناسب لتعزيز التفاعل'],
        //     results: [
        //         { metric: 'زيادة التفاعل', value: '50%', icon: 'FaComments' },
        //         { metric: 'عدد المنشورات', value: '20+', icon: 'FaCalendar' }
        //     ],
        //     gallery: [
        //         { type: 'image', url: '/projectimagsss/social/ramadan1.jpg', caption: 'تصميم رمضان' },
        //         { type: 'image', url: '/projectimagsss/social/ramadan2.jpg', caption: 'منشور جمعة مباركة' }
        //     ],
        //     testimonials: [],
        //     overview: 'حملة سوشيال متخصصة بالمحتوى الديني لمنصة تجارية.',
        //     goal: 'تعزيز التفاعل وزيادة الوصول خلال رمضان.',
        //     duration: 'شهر رمضان 2025',
        //     liveUrl: ""
        // },


        
        // {
        //     id: 'safaa-water-company',
        //     title: 'تصاميم سوشيال لشركة صفاء للمياه',
        //     description: 'منشورات تعريفية وترويجية لشركة مياه لتعزيز السمعة والجودة.',
        //     category: 'social',
        //     year: '2025',
        //     client: 'صفاء للمياه',
        //     technologies: ['Canva', 'Photoshop'],
        //     challenges: ['عرض جودة المياه والثقة في العلامة'],
        //     solutions: ['منشورات تحتوي شهادات تحليل ومياه نقية', 'استخدام ألوان زرقاء نقية'],
        //     results: [
        //         { metric: 'التفاعل', value: '40%', icon: 'FaComments' }
        //     ],
        //     gallery: [
        //         { type: 'image', url: '/projectimagsss/social/safaa1.jpg', caption: 'تصميم جودة' },
        //         { type: 'image', url: '/projectimagsss/social/safaa2.jpg', caption: 'توصيل رسالة' }
        //     ],
        //     testimonials: [],
        //     overview: 'حملة سوشيال تُبرز جودة ومصداقية شركة المياه.',
        //     goal: 'بناء سمعة رقمية قوية.',
        //     duration: 'شهر',
        //     liveUrl: ""
        // },
       
        // {
        //     id: 'al-methalia-doors',
        //     title: 'سوشيال شركة أبواب المثالية',
        //     description: 'تصاميم منشورات ترويجية لأبواب المثالية.',
        //     category: 'social',
        //     year: '2025',
        //     client: 'أبواب المثالية',
        //     technologies: ['Canva', 'Photoshop'],
        //     challenges: ['عرض التصاميم ومواصفات الأبواب'],
        //     solutions: ['منشورات تحتوي صور أبواب عالية الجودة ومواصفات تقنية'],
        //     results: [
        //         { metric: 'معدل التفاعل', value: '35%', icon: 'FaDoorClosed' }
        //     ],
        //     gallery: [
        //         { type: 'image', url: '/projectimagsss/social/doors1.jpg', caption: 'تصميم باب' }
        //     ],
        //     testimonials: [],
        //     overview: 'عرض منتجات الشركة بوضوح وفائدة.',
        //     goal: 'زيادة المبيعات عبر السوشيال.',
        //     duration: 'شهر',
        //     liveUrl: ""
        // },
        // {
        //     id: 'jawaan-real-estate',
        //     title: 'سوشيال مؤسسة الجوان العصرية للعقارات',
        //     description: 'منشورات ترويجية وتعريفية لمؤسسة الجوان العصرية للعقارات.',
        //     category: 'social',
        //     year: '2025',
        //     client: 'الجوان العصرية',
        //     technologies: ['Canva', 'Photoshop'],
        //     challenges: ['عرض العقارات بشكل محترف وجذاب'],
        //     solutions: ['منشورات احترافية تحتوي صور العقارات ومواقعها'],
        //     results: [
        //         { metric: 'التفاعل', value: '40%', icon: 'FaHome' }
        //     ],
        //     gallery: [
        //         { type: 'image', url: '/projectimagsss/social/jawaan1.jpg', caption: 'تسويق عقاري' }
        //     ],
        //     testimonials: [],
        //     overview: 'تعزيز العلامة الرقمية للعقارات.',
        //     goal: 'زيادة الاهتمام وحجوزات العقارات.',
        //     duration: 'شهر',
        //     liveUrl: ""
        // },
        

    ];