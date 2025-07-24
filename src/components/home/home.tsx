import Hero from "@/components/Hero";

import CompanyOverview from "@/components/home/CompanyOverview/index";

import AnimatedBackground from "@/components/AnimatedBackground";



export default function Home() {
    return (
        <>
            <Hero />
            <AnimatedBackground />

            <CompanyOverview />


            {/* ممكن نضيف باقي الأقسام هنا لاحقًا مثل الخدمات أو المعرض */}
        </>
    );

}

