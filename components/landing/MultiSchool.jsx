'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Building2, 
  Lock, 
  Server, 
  ShieldCheck, 
  Layers, 
  ArrowRight, 
  CheckCircle,
  Database
} from 'lucide-react';

export default function MultiSchool() {
  const router = useRouter();
  const [activeTenant, setActiveTenant] = useState(0);

  const tenants = [
    {
      name: "Beaconhouse Public School",
      type: "Primary & Secondary Campus",
      students: "1,450 Students",
      status: "Active & Isolated",
      db: "Cluster Alpha — Tenant #01"
    },
    {
      name: "The City Grammar Academy",
      type: "Higher Secondary Campus",
      students: "980 Students",
      status: "Active & Isolated",
      db: "Cluster Alpha — Tenant #02"
    },
    {
      name: "Al-Suffah Foundation School",
      type: "Comprehensive Campus",
      students: "2,100 Students",
      status: "Active & Isolated",
      db: "Cluster Alpha — Tenant #03"
    }
  ];

  const current = tenants[activeTenant];

  const points = [
    {
      icon: <Building2 className="w-5 h-5 text-[#0077F5]" />,
      title: "Independent School Accounts",
      desc: "Each school receives its own account and school-specific management dashboard."
    },
    {
      icon: <Lock className="w-5 h-5 text-indigo-600" />,
      title: "Private School Data",
      desc: "Student information, teacher records, attendance, fees, and examination data are isolated through school-level access controls."
    },
    {
      icon: <Server className="w-5 h-5 text-emerald-600" />,
      title: "Centralized SaaS Platform",
      desc: "Multiple schools can operate through one centralized software platform without requiring separate software installations."
    },
    {
      icon: <Layers className="w-5 h-5 text-purple-600" />,
      title: "Independent Administration",
      desc: "Every school manages its own students, teachers, classes, fee records, attendance, and examination activities."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-600" />,
      title: "Centralized Super Admin",
      desc: "The platform administrator can manage registered schools, school accounts, and subscription operations from the central administration panel."
    }
  ];

  return (
    <section className="relative py-6 lg:py-10 bg-white text-[#12151C] overflow-hidden border-t border-gray-200/60">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header (Center Aligned) */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#12151C] leading-[1.12]">
            One Platform. Multiple Schools. <span className="text-[#0077F5]">Independent Management.</span>
          </h2>

          <p className="text-gray-700 text-base sm:text-lg font-medium leading-relaxed pt-2">
            DevNixEdu is designed as a multi-school SaaS management platform that allows multiple educational institutions to use the same software while maintaining independent school accounts and private records.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Every registered school gets its own management environment, allowing administrators to manage their institution without accessing another school's information.
          </p>
        </div>

        {/* Main Grid: Features List & Interactive Tenant Simulation (Balanced Top Alignment) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: 5 Key Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((item, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-2xl border border-gray-200/80 bg-white hover:border-[#0077F5] transition-all duration-300 shadow-sm flex flex-col justify-between ${index === 4 ? 'sm:col-span-2 bg-gradient-to-r from-blue-50/30 to-white' : ''}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-4 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#12151C] mb-1.5">{item.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button 
                onClick={() => router.push('/login')}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#0077F5] hover:bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-[#0077F5]/25 transition-all duration-300 hover:-translate-y-0.5 text-sm group"
              >
                <span>Learn About Multi-School Management</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Multi-Tenant Sandbox Mockup (Aligned to Top) */}
          <div className="lg:col-span-5">
            <div className="bg-[#12151C] rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-gray-800 sticky top-28">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-[#0077F5]" />
                  <span className="text-xs font-mono font-bold text-gray-300">Live Tenant Isolation Engine</span>
                </div>
                <span className="text-[10px] bg-emerald-950/60 text-emerald-400 font-mono px-2 py-0.5 rounded border border-emerald-800/50">
                  Secure SaaS
                </span>
              </div>

              {/* School Switcher Tabs */}
              <div className="space-y-2 mb-6">
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Select Active School Environment:</div>
                {tenants.map((t, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTenant(idx)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition flex items-center justify-between ${activeTenant === idx ? 'bg-[#0077F5] text-white shadow-md' : 'bg-gray-900/80 text-gray-300 hover:bg-gray-800 border border-gray-800'}`}
                  >
                    <span>{t.name}</span>
                    <CheckCircle className={`w-3.5 h-3.5 ${activeTenant === idx ? 'text-white' : 'text-transparent'}`} />
                  </button>
                ))}
              </div>

              {/* Active Tenant Details Box */}
              <div className="bg-gray-900/90 rounded-2xl p-4 border border-gray-800 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">Database Partition:</span>
                  <span className="text-xs font-mono text-[#0077F5]">{current.db}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">Campus Type:</span>
                  <span className="text-xs text-white font-medium">{current.type}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">Total Enrolled:</span>
                  <span className="text-xs text-emerald-400 font-bold">{current.students}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-800">
                  <span className="text-xs text-gray-400">Data Privacy:</span>
                  <span className="text-[10px] bg-blue-950/60 text-blue-300 px-2 py-0.5 rounded border border-blue-800/50 font-mono">
                    100% Isolated 🔒
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}