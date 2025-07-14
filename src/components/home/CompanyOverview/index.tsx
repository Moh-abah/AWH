'use client';

import Intro from './Intro';
import FeaturesGrid from './FeaturesGrid';
import Counters from './Counters';
    import ServicesList from './ServicesList';
import Workside from './workamazi';
// import ClientsSection from './ClientsSection';
// import WhyUs from './WhyUs';
import Testimonials from './Testimonials';  
import CTA from '@/components/ui/CTA';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function CompanyOverview() {
    return (
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-6 relative overflow-hidden">
            <AnimatedBackground />
            {/* زخارف */}
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-indigo-200/30 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-blue-200/30 blur-3xl animate-pulse"></div>
            
            <div className="max-w-6xl mx-auto space-y-16 relative z-10">
                
                <Intro />
                <FeaturesGrid />
                <Counters />
                <ServicesList />
                <Workside />
                
               {/* //<WhyUs /> */}
                {/* <Testimonials /> */}
                {/* <ClientsSection /> */}
                <CTA />
                
                
            </div>
        </section>
    );
}
