'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, ArrowLeft, HelpCircle } from 'lucide-react';

export default function AllFAQsPage() {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState(0);

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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Back to Home Button */}
        <button 
          onClick={() => router.push('/')}
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-[#0077F5] mb-8 transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        {/* Page Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0077F5] text-xs font-bold tracking-wider uppercase shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" /> Complete Knowledge Base
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#12151C]">
            Frequently Asked <span className="text-[#0077F5]">Questions</span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Explore all common questions and detailed answers regarding DevNixEdu features, multi-tenant architecture, and school onboarding.
          </p>
        </div>

        {/* Full FAQ Accordion List */}
        <div className="space-y-4">
          {allFaqs.map((faq, index) => {
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
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
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

      </div>
    </main>
  );
}