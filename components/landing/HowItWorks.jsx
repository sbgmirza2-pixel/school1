'use client';
import { useRouter } from 'next/navigation';
import { 
  Building, 
  Sliders, 
  LayoutDashboard, 
  ArrowRight,
  Sparkles 
} from 'lucide-react';

export default function HowItWorks() {
  const router = useRouter();

  const steps = [
    {
      step: "01",
      icon: <Building className="w-6 h-6 text-[#0077F5]" />,
      title: "Register Your School",
      desc: "Get your school registered on DevNixEdu and establish your school's dedicated account."
    },
    {
      step: "02",
      icon: <Sliders className="w-6 h-6 text-indigo-600" />,
      title: "Set Up Your School",
      desc: "Configure classes, sections, teachers, students, and fee structures according to your school's requirements."
    },
    {
      step: "03",
      icon: <LayoutDashboard className="w-6 h-6 text-emerald-600" />,
      title: "Manage Your School",
      desc: "Start organizing attendance, fee collection, examinations, student information, and everyday administrative activities through your school dashboard."
    }
  ];

  return (
    <section className="relative py-16 lg:py-20 bg-white text-[#12151C] overflow-hidden border-t border-gray-200/60">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header (Center Aligned) */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0077F5] text-xs font-bold tracking-wider uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> HOW IT WORKS
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#12151C] leading-[1.12]">
            Get Started with DevNixEdu in <span className="text-[#0077F5]">Three Simple Steps</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed pt-1">
            Managing your school's operations can be easier with a structured digital system.
          </p>
        </div>

        {/* 3 Steps Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative">
          {steps.map((item, index) => (
            <div 
              key={index}
              className="p-8 rounded-3xl border border-gray-200/80 bg-white hover:border-[#0077F5] hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-mono font-extrabold text-gray-200 group-hover:text-[#0077F5] transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#12151C] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-400">
                <span>Step {item.step} of 03</span>
                <span className="text-[#0077F5]">DevNixEdu Workflow</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button 
            onClick={() => router.push('/login')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0077F5] hover:bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-[#0077F5]/25 transition-all duration-300 hover:-translate-y-0.5 text-sm group"
          >
            <span>Request Your Product Demo</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}