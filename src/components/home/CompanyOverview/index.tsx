'use client';

import Intro from './Intro';
import FeaturesGrid from './FeaturesGrid';
import Counters from './Counters';
    import ServicesList from './ServicesList';
import Workside from './workamazi';

import WhyUs from './WhyUs';

import CTA from '@/components/ui/CTA';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function CompanyOverviews() {
    return (
        <section >
           
                
                <Intro />
                <FeaturesGrid />
                <Counters />
                <ServicesList />
                <Workside /> 
                
                <WhyUs /> 
                
                
                <CTA />
                
                
          
        </section>
    );
}
