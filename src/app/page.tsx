import Hero from "@/components/Hero";
import AboutSection from "@/components/home/AboutSection";
import CompanyOverview from "@/components/home/CompanyOverview/index";
import Image from "next/image";
import WorkPage from "./projects/page";
import AnimatedBackground from "@/components/AnimatedBackground";



export default function Home() {
    return (
        <>
            <Hero />
            <AnimatedBackground/>
           
            <CompanyOverview />
           
            
            {/* ممكن نضيف باقي الأقسام هنا لاحقًا مثل الخدمات أو المعرض */}
        </>
      );
 
}

