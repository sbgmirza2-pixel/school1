'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Users, 
  CreditCard, 
  FileSpreadsheet, 
  ShieldCheck, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';

export default function Overview() {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState(null);

  const featuresList = [
    {
      icon: <Users className="w-5 h-5 text-[#0077F5]" />,
      title: "Student Lifecycle Management",
      desc: "From admissions to alumni tracking, handle records effortlessly."
    },
    {
      icon: <CreditCard className="w-5 h-5 text-emerald-600" />,
      title: "Automated Fee Collection",
      desc: "Generate challans and track digital payments seamlessly."
    },
    {
      icon: <FileSpreadsheet className="w-5 h-5 text-purple-600" />,
      title: "Examinations & Grading",
      desc: "Custom grading scales, term reports, and automated transcripts."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-600" />,
      title: "Multi-Campus Security",
      desc: "Role-based access control with bank-grade data encryption."
    }
  ];

  return (
    <section id="about" className="relative py-8 lg:py-10 bg-gradient-to-b from-white via-gray-50/50 to-white text-[#12151C] overflow-hidden">
      
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid: Left Content, Right Interactive Feature Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Story */}
          <div className="lg:col-span-6 space-y-6">

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#12151C] leading-[1.12]">
              Everything Your School Needs in <span className="text-[#0077F5]">One Platform</span>
            </h2>

            <p className="text-gray-700 text-base sm:text-lg font-medium leading-relaxed">
              Running a school involves managing students, teachers, attendance, fees, examinations, and countless administrative responsibilities.
            </p>

            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-[#12151C]">DevNixEdu</strong> simplifies these operations through an easy-to-use school management software solution. From student admissions to examination results, schools can organize their essential records and daily activities through one centralized digital platform.
              </p>
              <p className="text-xs sm:text-sm text-gray-500 font-medium italic border-l-2 border-[#0077F5] pl-3">
                Whether you manage a growing school or multiple educational institutions, DevNixEdu provides a structured way to manage school operations.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button 
                onClick={() => router.push('/login')}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#0077F5] hover:bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-[#0077F5]/25 transition-all duration-300 hover:-translate-y-0.5 text-sm group"
              >
                <span>Discover DevNixEdu</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

          {/* Right Column: Modern Interactive Stack */}
          <div className="lg:col-span-6 space-y-4">
            {featuresList.map((item, index) => (
              <div 
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 bg-white ${hoveredCard === index ? 'border-[#0077F5] shadow-xl shadow-blue-500/5 -translate-y-1 bg-gradient-to-r from-blue-50/30 to-white' : 'border-gray-200/80 shadow-sm'}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 shadow-sm">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#12151C] flex items-center gap-2">
                    {item.title}
                    <CheckCircle2 className={`w-4 h-4 transition-colors ${hoveredCard === index ? 'text-[#0077F5]' : 'text-gray-300'}`} />
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Bottom Mini Badge */}
            <div className="p-4 rounded-xl bg-[#12151C] text-white flex items-center justify-between shadow-lg mt-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#0077F5]">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold">Multi-Campus SaaS Architecture Ready</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}