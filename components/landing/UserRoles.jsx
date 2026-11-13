'use client';
import { useRouter } from 'next/navigation';
import { 
  ShieldAlert, 
  LayoutDashboard, 
  GraduationCap, 
  Calculator, 
  ArrowRight,
  Lock
} from 'lucide-react';

export default function UserRoles() {
  const router = useRouter();

  const roles = [
    {
      icon: <ShieldAlert className="w-6 h-6 text-[#0077F5]" />,
      title: "Super Admin",
      badge: "Platform Level",
      desc: "Manage the overall DevNixEdu platform, registered schools, school accounts, and subscription operations."
    },
    {
      icon: <LayoutDashboard className="w-6 h-6 text-indigo-600" />,
      title: "School Administrator",
      badge: "Campus Level",
      desc: "Manage school operations, students, teachers, classes, attendance, fees, and examinations through a centralized dashboard."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-emerald-600" />,
      title: "Teachers",
      badge: "Academic Level",
      desc: "Access assigned classes, student information, attendance management, and examination-related responsibilities according to their permissions."
    },
    {
      icon: <Calculator className="w-6 h-6 text-purple-600" />,
      title: "Accountant",
      badge: "Financial Level",
      desc: "Manage student fee records, payment entries, receipts, outstanding dues, and financial reports."
    }
  ];

  return (
    <section className="relative py-16 lg:py-20 bg-gray-50/50 text-[#12151C] overflow-hidden border-t border-gray-200/60">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header (Center Aligned) */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0077F5] text-xs font-bold tracking-wider uppercase shadow-sm">
            🔒 ROLE-BASED ACCESS CONTROL
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#12151C] leading-[1.12]">
            Designed for Everyone Involved in <span className="text-[#0077F5]">School Management</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed pt-1">
            DevNixEdu provides role-based access so that every user can access the tools and information relevant to their responsibilities.
          </p>
        </div>

        {/* Roles 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {roles.map((role, index) => (
            <div 
              key={index}
              className="p-8 rounded-3xl border border-gray-200/80 bg-white hover:border-[#0077F5] hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    {role.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-gray-100 text-gray-600 px-3 py-1 rounded-full border border-gray-200">
                    {role.badge}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#12151C] mb-3">{role.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{role.desc}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-gray-400">
                <Lock className="w-3.5 h-3.5 text-[#0077F5]" />
                <span>Secure Permission-Based Access</span>
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
            <span>Explore User Management</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}