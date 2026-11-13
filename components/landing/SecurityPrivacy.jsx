'use client';
import { 
  ShieldCheck, 
  Lock, 
  Database, 
  KeyRound, 
  Settings2 
} from 'lucide-react';

export default function SecurityPrivacy() {
  const securityPoints = [
    {
      icon: <Database className="w-6 h-6 text-[#0077F5]" />,
      title: "School-Level Data Isolation",
      desc: "Each school operates within its own logical data environment."
    },
    {
      icon: <KeyRound className="w-6 h-6 text-indigo-600" />,
      title: "Role-Based Permissions",
      desc: "User access is controlled according to assigned roles and permissions."
    },
    {
      icon: <Settings2 className="w-6 h-6 text-emerald-600" />,
      title: "Centralized Administration",
      desc: "Platform-level management is separated from individual school administration."
    },
    {
      icon: <Lock className="w-6 h-6 text-purple-600" />,
      title: "Controlled Information Access",
      desc: "Users can access school information according to their assigned responsibilities."
    }
  ];

  return (
    <section className="relative py-12 lg:py-16 bg-white text-[#12151C] overflow-hidden border-t border-gray-200/60">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header (Center Aligned, Single Line Heading) */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#12151C] leading-[1.12] whitespace-nowrap">
            Your School Data <span className="text-[#0077F5]">Deserves Protection</span>
          </h2>

          <p className="text-gray-700 text-base sm:text-lg font-medium leading-relaxed pt-1">
            School records contain important student, teacher, academic, and financial information.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            DevNixEdu is designed around school-level data isolation and role-based access to help ensure that each institution's information remains accessible only to authorized users.
          </p>
        </div>

        {/* 4 Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityPoints.map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-3xl border border-gray-200/80 bg-gray-50/50 hover:border-[#0077F5] hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>

                <h3 className="text-base font-extrabold text-[#12151C] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>

              <div className="pt-4 mt-6 border-t border-gray-200/60 flex items-center gap-2 text-[11px] font-bold text-gray-400">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0077F5]" />
                <span>Enterprise Secure</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}