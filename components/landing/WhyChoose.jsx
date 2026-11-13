'use client';
import { 
  Layers, 
  FolderCheck, 
  Clock, 
  Calculator, 
  ShieldCheck, 
  Building2, 
  LayoutDashboard, 
  TrendingUp,
  Sparkles 
} from 'lucide-react';

export default function WhyChoose() {
  const benefits = [
    {
      icon: <Layers className="w-6 h-6 text-[#0077F5]" />,
      title: "Simplified Administration",
      desc: "Manage important school records and daily administrative activities through one centralized system."
    },
    {
      icon: <FolderCheck className="w-6 h-6 text-indigo-600" />,
      title: "Better Organization",
      desc: "Keep student, teacher, attendance, fee, and examination records organized and accessible."
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-600" />,
      title: "Time-Saving Management",
      desc: "Reduce repetitive paperwork and simplify routine school management activities."
    },
    {
      icon: <Calculator className="w-6 h-6 text-purple-600" />,
      title: "Financial Tracking",
      desc: "Monitor fee collection, payment records, receipts, and outstanding student dues."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
      title: "Role-Based Access",
      desc: "Provide different users with access according to their assigned responsibilities."
    },
    {
      icon: <Building2 className="w-6 h-6 text-cyan-600" />,
      title: "Multi-School Architecture",
      desc: "Manage multiple educational institutions through one centralized SaaS platform while maintaining school-level data isolation."
    },
    {
      icon: <LayoutDashboard className="w-6 h-6 text-rose-600" />,
      title: "Convenient Information Access",
      desc: "Access important school information through an organized dashboard."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      title: "Designed for Growing Institutions",
      desc: "Build your school's digital management foundation with a platform designed to support multiple schools."
    }
  ];

  return (
    <section className="relative py-12 lg:py-16 bg-gray-50/50 text-[#12151C] overflow-hidden border-t border-gray-200/60">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header (Center Aligned with single-line heading & reduced top margin) */}
        <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0077F5] text-xs font-bold tracking-wider uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> WHY CHOOSE DEVNIXEDU?
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#12151C] leading-[1.12] whitespace-nowrap">
            A Smarter Way to Manage <span className="text-[#0077F5]">Your School</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed pt-1">
            DevNixEdu brings essential school management activities together in one organized platform.
          </p>
        </div>

        {/* 8 Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-3xl border border-gray-200/80 bg-white hover:border-[#0077F5] hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>

                <h3 className="text-base font-extrabold text-[#12151C] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}