import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Overview from '@/components/landing/Overview';
import MultiSchool from '@/components/landing/MultiSchool';
import UserRoles from '@/components/landing/UserRoles';
import HowItWorks from '@/components/landing/HowItWorks';
import WhyChoose from '@/components/landing/WhyChoose';
import DashboardPreview from '@/components/landing/DashboardPreview';
import BuiltForInstitutions from '@/components/landing/BuiltForInstitutions';
import SecurityPrivacy from '@/components/landing/SecurityPrivacy';
import FAQ from '@/components/landing/FAQ';
import FinalCTA from '@/components/landing/FinalCTA';
import Pricing from '@/components/landing/Pricing';

import Footer from '@/components/landing/Footer';


export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-[#12151C] font-sans selection:bg-[#0077F5] selection:text-white">
      <Navbar />
      <Hero />
      
      <Overview />  
      <Features />
      <MultiSchool />
      <UserRoles />
      <HowItWorks />
      <WhyChoose />
      <DashboardPreview />
      <BuiltForInstitutions />
      <SecurityPrivacy />
      <FAQ />   
    <FinalCTA />  
    
      <Pricing />
      <Footer />
    </main>
  );
}