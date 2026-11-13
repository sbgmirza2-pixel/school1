'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function FAQ() {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState(0);

  // All FAQs list
  const allFaqs = [
    {
      q: "What is DevNixEdu?",
      a: "DevNixEdu is a school management software solution designed to help educational institutions manage students, teachers, attendance, fees, examinations, and academic records through one centralized platform."
    },
    {
      q: "What is a multi-school SaaS school management system?",
      a: "A multi-school SaaS system allows multiple schools to use the same software platform through independent accounts, with their respective records protected through school-level access controls."
    },
    {
      q: "Can multiple schools use DevNixEdu?",
      a: "Yes. DevNixEdu is designed to support multiple schools through one centralized SaaS platform."
    },
    {
      q: "Can each school manage its own students and teachers?",
      a: "Yes. Each school can manage its own student and teacher records within its authorized school account."
    },
    {
      q: "Does DevNixEdu support student attendance?",
      a: "Yes. The attendance module is designed to manage daily student attendance and attendance records."
    },
    {
      q: "Can schools manage student fees?",
      a: "Yes. The fee management module supports fee records, payment tracking, receipts, and outstanding dues."
    },
    {
      q: "Can we manage examinations and student results?",
      a: "Yes. Schools can manage examination records, subject-wise marks, grades, and student result cards."
    },
    {
      q: "Does DevNixEdu provide different user accounts?",
      a: "The platform is designed with separate roles for Super Admin, School Admin, Teachers, and Accountants."
    },
    {
      q: "Can we access DevNixEdu through a web browser?",
      a: "DevNixEdu is being developed as a web-based school management platform. Access requirements and supported devices will be confirmed in the product release."
    },
    {
      q: "How can our school get started?",
      a: "Contact the DevNixEdu team to request a product demonstration and discuss school registration and onboarding."
    }
  ];

  // Show only top 3 FAQs on home page
  const homeFaqs = allFaqs.slice(0, 3);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-12 lg:py-16 bg-gray-50/50 text-[#12151C] overflow-hidden border-t border-gray-200/60">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Main Container with Symmetric Padding & Margins */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#12151C] leading-[1.12]">
            Frequently Asked Questions <span className="text-[#0077F5]">About DevNixEdu</span>
          </h2>

         
        </div>

        {/* FAQ Accordion List (Top 3 Only) */}
        <div className="space-y-4 mb-10">
          {homeFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden transition-all duration-300 shadow-sm hover:border-[#0077F5]/50"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-extrabold text-[#12151C] text-sm sm:text-base focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-xl bg-blue-50 text-[#0077F5] flex items-center justify-center text-xs font-mono shrink-0">
                      0{index + 1}
                    </span>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#0077F5]' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-gray-100 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Read More / View All FAQs Button */}
        <div className="text-center">
          <button 
            onClick={() => router.push('/faqs')}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-gray-300 hover:border-[#0077F5] text-[#12151C] hover:text-[#0077F5] font-bold rounded-2xl shadow-sm transition-all duration-300 text-xs sm:text-sm group"
          >
            <span>Read More FAQs</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}