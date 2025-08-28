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
            title: 'تطبيقات التجارة الإلكترونية المدعومه بالخريطه',
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
            id: 'sportsite2024',
            title: 'تطوير تطبيقات الويب موقع رياضي ',
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
            title: 'هوية بصرية بطابع ملفت',
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
            title: 'عقارات    تصاميم سوشيال للعقارات',
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
            title: 'تصميم سوشيال لعيادة اسنان',
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
            title: 'تصاميم سوشيال ميديا ',
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
            title: 'بنرات  بتصاميم عصرية وفاخرة  ',
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
            title: 'حملة تسويق إلكتروني لمتجر عسل ',
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

        

    ];