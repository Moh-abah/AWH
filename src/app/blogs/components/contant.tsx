



import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

// إنشاء مكونات Motion مخصصة
const MotionH1 = (props: any) => <motion.h1 {...props} />;
const MotionH2 = (props: any) => <motion.h2 {...props} />;
const MotionH3 = (props: any) => <motion.h3 {...props} />;
const MotionP = (props: any) => <motion.p {...props} />;
const MotionUl = (props: any) => <motion.ul {...props} />;
const MotionOl = (props: any) => <motion.ol {...props} />;
const MotionLi = (props: any) => <motion.li {...props} />;
const MotionBlockquote = (props: any) => <motion.blockquote {...props} />;
const MotionDiv = (props: any) => <motion.div {...props} />;

// مكون الرابط المخصص
const MotionLink = ({ children, ...props }: any) => {
    return (
        <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-blue-600 hover:text-blue-800 font-medium underline transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
        >
            {children}
        </motion.a>
    );
};

const StrapiContentRenderer = ({ content }: { content: any[] }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        return () => setIsVisible(false);
    }, []);

    if (!content || !Array.isArray(content)) {
        return <div className="text-red-500 p-4">المحتوى غير متوفر أو غير صحيح</div>;
    }

    // استخراج النص من كائنات الأطفال
    const extractText = (children: any[]): string => {
        if (!children || !Array.isArray(children)) return '';
        return children.map(child => child?.text || '').join('').trim();
    };

    // دالة لتحويل المحتوى إلى Markdown
    const convertToMarkdown = (content: any[]): string => {
        let markdown = '';

        content.forEach(block => {
            if (!block || !block.children) return;

            const text = extractText(block.children);
            if (!text) return;

            markdown += text + '\n\n';
        });

        return markdown;
    };

    // تأثيرات الحركة للعناصر مع تحسينات
    const getMotionProps = (index: number) => ({
        initial: { opacity: 0, y: 20 },
        whileInView: {
            opacity: 1,
            y: 0,
        },
        transition: {
            duration: 0.6,
            delay: index * 0.05,
            ease: "easeOut" as const
        },
        viewport: { once: true, margin: "-10% 0px -10% 0px" }
    });

    // تحويل المحتوى إلى Markdown
    const markdownContent = convertToMarkdown(content);

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="prose prose-lg max-w-none relative"
            >
                {/* تأثير خلفي متدرج */}
                <div className="absolute inset-0 -z-10 opacity-5">
                    <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
                    <div className="absolute top-0 left-0 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
                </div>

                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        // تخصيص مكونات Markdown بمظهر فاخر
                        h1: ({ node, ...props }) => (
                            <MotionH1
                                {...getMotionProps(0)}
                                className="text-4xl md:text-5xl font-bold text-slate-800 mt-16 mb-8 pb-4 border-b border-slate-200"
                                {...props}
                            />
                        ),
                        h2: ({ node, ...props }) => (
                            <MotionH2
                                {...getMotionProps(1)}
                                className="text-3xl md:text-4xl font-semibold text-slate-800 mt-14 mb-6 pb-3 border-b border-slate-200"
                                {...props}
                            />
                        ),
                        h3: ({ node, ...props }) => (
                            <MotionH3
                                {...getMotionProps(2)}
                                className="text-2xl md:text-3xl font-medium text-slate-800 mt-12 mb-5"
                                {...props}
                            />
                        ),
                        p: ({ node, ...props }) => (
                            <MotionP
                                {...getMotionProps(3)}
                                className="text-justify text-slate-700 leading-relaxed text-lg my-6 tracking-normal"
                                {...props}
                            />
                        ),
                        ul: ({ node, ...props }) => (
                            <MotionUl
                                {...getMotionProps(4)}
                                className="list-disc list-inside space-y-2 my-8 text-slate-700 bg-slate-50 p-6 rounded-xl"
                                {...props}
                            />
                        ),
                        ol: ({ node, ...props }) => (
                            <MotionOl
                                {...getMotionProps(5)}
                                className="list-decimal list-inside space-y-2 my-8 text-slate-700 bg-blue-50 p-6 rounded-xl"
                                {...props}
                            />
                        ),
                        li: ({ node, ...props }) => (
                            <MotionLi
                                className="py-2 text-lg text-slate-700"
                                {...props}
                            />
                        ),
                        strong: ({ node, ...props }) => (
                            <strong className="font-semibold text-slate-900" {...props} />
                        ),
                        em: ({ node, ...props }) => (
                            <em className="italic text-slate-600" {...props} />
                        ),
                        a: ({ node, ...props }) => (
                            <MotionLink {...props} />
                        ),
                        hr: ({ node, ...props }) => (
                            <MotionDiv
                                {...getMotionProps(6)}
                                className="relative my-12"
                            >
                                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
                            </MotionDiv>
                        ),
                        blockquote: ({ node, ...props }) => (
                            <MotionBlockquote
                                {...getMotionProps(7)}
                                className="border-l-4 border-blue-400 bg-blue-50/50 pl-6 pr-4 py-4 my-8 rounded-r-xl italic text-slate-700"
                                {...props}
                            />
                        ),
                        code: (props: any) => {
                            const { node, inline, ...restProps } = props;
                            return inline
                                ? <code className="bg-slate-800 text-amber-300 px-2 py-1 rounded text-sm font-mono" {...restProps} />
                                : <MotionDiv
                                    {...getMotionProps(8)}
                                    className="bg-slate-900 text-slate-100 p-4 rounded-xl overflow-x-auto my-6 font-mono text-sm"
                                >
                                    <code {...restProps} />
                                </MotionDiv>
                        },
                        // تخصيص الجداول
                        table: ({ node, ...props }) => (
                            <div className="overflow-x-auto my-8 rounded-lg shadow-sm border border-slate-200">
                                <table className="min-w-full divide-y divide-slate-200" {...props} />
                            </div>
                        ),
                        th: ({ node, ...props }) => (
                            <th className="px-4 py-3 bg-slate-100 text-right text-sm font-medium text-slate-700 uppercase tracking-wider" {...props} />
                        ),
                        td: ({ node, ...props }) => (
                            <td className="px-4 py-3 text-sm text-slate-700 border-t border-slate-200" {...props} />
                        ),
                    }}
                >
                    {markdownContent}
                </ReactMarkdown>

                {/* عناصر تفاعلية إضافية */}
                <MotionDiv
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 text-center"
                >
                    <h3 className="text-2xl font-semibold text-slate-800 mb-3">استفدت من هذا المحتوى؟</h3>
                    <p className="text-slate-600 mb-4">شاركه مع الآخرين أو اترك تعليقك أدناه</p>
                    <div className="flex justify-center space-x-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-5 py-2.5 bg-blue-600 text-white rounded-full font-medium shadow-sm hover:bg-blue-700 transition-colors"
                        >
                            مشاركة على تويتر
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-5 py-2.5 bg-slate-700 text-white rounded-full font-medium shadow-sm hover:bg-slate-800 transition-colors"
                        >
                            نسخ الرابط
                        </motion.button>
                    </div>
                </MotionDiv>
            </motion.div>
        </div>
    );
};

export default StrapiContentRenderer;





// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
// import rehypeRaw from 'rehype-raw';

// // إنشاء مكونات Motion مخصصة باستخدام motion.create
// const MotionH1 = motion.create('h1');
// const MotionH2 = motion.create('h2');
// const MotionH3 = motion.create('h3');
// const MotionP = motion.create('p');
// const MotionUl = motion.create('ul');
// const MotionOl = motion.create('ol');
// const MotionLi = motion.create('li');
// const MotionBlockquote = motion.create('blockquote');
// const MotionDiv = motion.create('div');

// // مكون الرابط يحتاج معالجة خاصة
// const MotionLink = ({ children, ...props }: any) => {
//   return (
//     <motion.a
//       whileHover={{ scale: 1.02 }}
//       whileTap={{ scale: 0.98 }}
//       className="text-blue-600 hover:text-blue-800 font-medium underline transition-colors duration-200"
//       target="_blank"
//       rel="noopener noreferrer"
//       {...props}
//     >
//       {children}
//     </motion.a>
//   );
// };

// const StrapiContentRenderer = ({ content }: { content: any[] }) => {
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         setIsVisible(true);
//         return () => setIsVisible(false);
//     }, []);

//     if (!content || !Array.isArray(content)) {
//         return <div className="text-red-500 p-4">المحتوى غير متوفر أو غير صحيح</div>;
//     }

//     // استخراج النص من كائنات الأطفال
//     const extractText = (children: any[]): string => {
//         if (!children || !Array.isArray(children)) return '';
//         return children.map(child => child?.text || '').join('').trim();
//     };

//     // دالة لتحويل المحتوى إلى Markdown
//     const convertToMarkdown = (content: any[]): string => {
//         let markdown = '';

//         content.forEach(block => {
//             if (!block || !block.children) return;

//             const text = extractText(block.children);
//             if (!text) return;

//             markdown += text + '\n\n';
//         });

//         return markdown;
//     };

//     // تأثيرات الحركة للعناصر مع تحسينات
//     const getMotionProps = (index: number) => ({
//         initial: { opacity: 0, y: 20 },
//         whileInView: {
//             opacity: 1,
//             y: 0,
//         },
//         transition: {
//             duration: 0.6,
//             delay: index * 0.05,
//             ease: "easeOut"
//         },
//         viewport: { once: true, margin: "-10% 0px -10% 0px" }
//     });

//     // تحويل المحتوى إلى Markdown
//     const markdownContent = convertToMarkdown(content);

//     return (
//         <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isVisible ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//                 className="prose prose-lg max-w-none relative"
//             >
//                 {/* تأثير خلفي متدرج */}
//                 <div className="absolute inset-0 -z-10 opacity-5">
//                     <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
//                     <div className="absolute top-0 left-0 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
//                     <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
//                 </div>

//                 <ReactMarkdown
//                     remarkPlugins={[remarkGfm]}
//                     rehypePlugins={[rehypeRaw]}
//                     components={{
//                         // تخصيص مكونات Markdown بمظهر فاخر
//                         h1: ({ node, ...props }) => (
//                             <MotionH1
//                                 {...getMotionProps(0)}
//                                 className="text-4xl md:text-5xl font-bold text-slate-800 mt-16 mb-8 pb-4 border-b border-slate-200"
//                                 {...props}
//                             />
//                         ),
//                         h2: ({ node, ...props }) => (
//                             <MotionH2
//                                 {...getMotionProps(1)}
//                                 className="text-3xl md:text-4xl font-semibold text-slate-800 mt-14 mb-6 pb-3 border-b border-slate-200"
//                                 {...props}
//                             />
//                         ),
//                         h3: ({ node, ...props }) => (
//                             <MotionH3
//                                 {...getMotionProps(2)}
//                                 className="text-2xl md:text-3xl font-medium text-slate-800 mt-12 mb-5"
//                                 {...props}
//                             />
//                         ),
//                         p: ({ node, ...props }) => (
//                             <MotionP
//                                 {...getMotionProps(3)}
//                                 className="text-justify text-slate-700 leading-relaxed text-lg my-6 tracking-normal"
//                                 {...props}
//                             />
//                         ),
//                         ul: ({ node, ...props }) => (
//                             <MotionUl
//                                 {...getMotionProps(4)}
//                                 className="list-disc list-inside space-y-2 my-8 text-slate-700 bg-slate-50 p-6 rounded-xl"
//                                 {...props}
//                             />
//                         ),
//                         ol: ({ node, ...props }) => (
//                             <MotionOl
//                                 {...getMotionProps(5)}
//                                 className="list-decimal list-inside space-y-2 my-8 text-slate-700 bg-blue-50 p-6 rounded-xl"
//                                 {...props}
//                             />
//                         ),
//                         li: ({ node, ...props }) => (
//                             <MotionLi
//                                 className="py-2 text-lg text-slate-700"
//                                 {...props}
//                             />
//                         ),
//                         strong: ({ node, ...props }) => (
//                             <strong className="font-semibold text-slate-900" {...props} />
//                         ),
//                         em: ({ node, ...props }) => (
//                             <em className="italic text-slate-600" {...props} />
//                         ),
//                         a: ({ node, ...props }) => (
//                             <MotionLink {...props} />
//                         ),
//                         hr: ({ node, ...props }) => (
//                             <MotionDiv
//                                 {...getMotionProps(6)}
//                                 className="relative my-12"
//                             >
//                                 <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
//                             </MotionDiv>
//                         ),
//                         blockquote: ({ node, ...props }) => (
//                             <MotionBlockquote
//                                 {...getMotionProps(7)}
//                                 className="border-l-4 border-blue-400 bg-blue-50/50 pl-6 pr-4 py-4 my-8 rounded-r-xl italic text-slate-700"
//                                 {...props}
//                             />
//                         ),
//                         code: ({ node, inline, ...props }) => (
//                             inline
//                                 ? <code className="bg-slate-800 text-amber-300 px-2 py-1 rounded text-sm font-mono" {...props} />
//                                 : <MotionDiv
//                                     {...getMotionProps(8)}
//                                     className="bg-slate-900 text-slate-100 p-4 rounded-xl overflow-x-auto my-6 font-mono text-sm"
//                                 >
//                                     <code {...props} />
//                                 </MotionDiv>
//                         ),
//                         // تخصيص الجداول
//                         table: ({ node, ...props }) => (
//                             <div className="overflow-x-auto my-8 rounded-lg shadow-sm border border-slate-200">
//                                 <table className="min-w-full divide-y divide-slate-200" {...props} />
//                             </div>
//                         ),
//                         th: ({ node, ...props }) => (
//                             <th className="px-4 py-3 bg-slate-100 text-right text-sm font-medium text-slate-700 uppercase tracking-wider" {...props} />
//                         ),
//                         td: ({ node, ...props }) => (
//                             <td className="px-4 py-3 text-sm text-slate-700 border-t border-slate-200" {...props} />
//                         ),
//                     }}
//                 >
//                     {markdownContent}
//                 </ReactMarkdown>

//                 {/* عناصر تفاعلية إضافية */}
//                 <MotionDiv
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ delay: 0.5, duration: 0.8 }}
//                     viewport={{ once: true }}
//                     className="mt-16 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 text-center"
//                 >
//                     <h3 className="text-2xl font-semibold text-slate-800 mb-3">استفدت من هذا المحتوى؟</h3>
//                     <p className="text-slate-600 mb-4">شاركه مع الآخرين أو اترك تعليقك أدناه</p>
//                     <div className="flex justify-center space-x-4">
//                         <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="px-5 py-2.5 bg-blue-600 text-white rounded-full font-medium shadow-sm hover:bg-blue-700 transition-colors"
//                         >
//                             مشاركة على تويتر
//                         </motion.button>
//                         <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="px-5 py-2.5 bg-slate-700 text-white rounded-full font-medium shadow-sm hover:bg-slate-800 transition-colors"
//                         >
//                             نسخ الرابط
//                         </motion.button>
//                     </div>
//                 </MotionDiv>
//             </motion.div>
//         </div>
//     );
// };

// export default StrapiContentRenderer;

