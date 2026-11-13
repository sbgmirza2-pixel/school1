'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  UserCheck, 
  Briefcase, 
  CalendarCheck, 
  CreditCard, 
  FileText, 
  Layers, 
  BarChart3, 
  LayoutDashboard, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function Features() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: "01",
      icon: <UserCheck className="w-6 h-6 text-[#0077F5]" />,
      title: "Student Management",
      desc1: "Manage student admissions, registrations, personal profiles, academic information, class assignments, and student records from one centralized system.",
      desc2: "Keep student information organized and easily accessible to authorized school administrators.",
      cta: "Explore Student Management",
      route: "/login"
    },
    {
      id: "02",
      icon: <Briefcase className="w-6 h-6 text-indigo-600" />,
      title: "Teacher & Staff Management",
      desc1: "Maintain organized teacher and staff records, personal information, professional details, and assigned responsibilities.",
      desc2: "Keep your school's teaching team information organized and accessible.",
      cta: "Explore Teacher Management",
      route: "/login"
    },
    {
      id: "03",
      icon: <CalendarCheck className="w-6 h-6 text-emerald-600" />,
      title: "Attendance Management",
      desc1: "Record and manage daily student attendance with an organized attendance system.",
      desc2: "Monitor present, absent, and attendance records while accessing useful attendance summaries and reports.",
      cta: "Explore Attendance Management",
      route: "/login"
    },
    {
      id: "04",
      icon: <CreditCard className="w-6 h-6 text-purple-600" />,
      title: "Fee Management",
      desc1: "Simplify school fee administration with centralized fee records and payment tracking.",
      desc2: "Manage fee structures, record student payments, generate payment receipts, track outstanding balances, and identify students with pending fees.",
      cta: "Explore Fee Management",
      route: "/login"
    },
    {
      id: "05",
      icon: <FileText className="w-6 h-6 text-amber-600" />,
      title: "Examination & Results",
      desc1: "Organize school examinations and manage student academic performance.",
      desc2: "Create examination records, enter subject-wise marks, manage grades, and generate student result cards.",
      cta: "Explore Examination Management",
      route: "/login"
    },
    {
      id: "06",
      icon: <Layers className="w-6 h-6 text-cyan-600" />,
      title: "Classes & Sections Management",
      desc1: "Organize academic classes, sections, subjects, and student assignments.",
      desc2: "Maintain a structured academic setup and manage student placement within the appropriate classes and sections.",
      cta: "Explore Academic Management",
      route: "/login"
    },
    {
      id: "07",
      icon: <BarChart3 className="w-6 h-6 text-rose-600" />,
      title: "Reports & Analytics",
      desc1: "Access organized school information through useful reports and dashboard summaries.",
      desc2: "Monitor student records, attendance, fee collection, outstanding dues, and examination performance to support informed decisions.",
      cta: "Explore Reports",
      route: "/login"
    },
    {
      id: "08",
      icon: <LayoutDashboard className="w-6 h-6 text-[#0077F5]" />,
      title: "Centralized Admin Dashboard",
      desc1: "Manage important school activities from one centralized dashboard.",
      desc2: "Get a convenient overview of students, teachers, attendance, fee records, and examination information through an organized administrative interface.",
      cta: "Request a Demo",
      route: "/login"
    }
  ];

  const current = features[activeTab];

  return (
    <section id="features" className="relative py-8 lg:py-12 bg-gray-50/70 text-[#12151C] overflow-hidden border-t border-gray-200/60">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0077F5] text-xs font-bold tracking-wider uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> CORE MODULES
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#12151C] leading-[1.15]">
            Powerful Features for Smarter <span className="text-[#0077F5]">School Management</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Everything you need to organize your school's essential academic and administrative activities.
          </p>
        </div>

        {/* Unique Interactive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Feature Selector List */}
          <div className="lg:col-span-5 space-y-2 bg-white p-3 rounded-2xl border border-gray-200/80 shadow-sm">
            {features.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left px-4 py-3.5 rounded-xl transition-all duration-300 flex items-center justify-between group ${activeTab === index ? 'bg-[#0077F5] text-white shadow-md shadow-blue-500/20 font-bold' : 'hover:bg-gray-50 text-gray-700 font-semibold'}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-mono font-bold ${activeTab === index ? 'text-blue-200' : 'text-gray-400'}`}>
                    {item.id}
                  </span>
                  <span className="text-sm">{item.title}</span>
                </div>
                <ArrowRight className={`w-4 h-4 transition-transform ${activeTab === index ? 'translate-x-1 text-white' : 'text-gray-300 group-hover:translate-x-1 group-hover:text-gray-600'}`} />
              </button>
            ))}
          </div>

          {/* Right Column: Dynamic Detailed Display Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[420px]">
              
              {/* Top Accent Watermark */}
              <div className="absolute top-6 right-8 text-7xl font-mono font-extrabold text-gray-100 select-none pointer-events-none">
                {current.id}
              </div>

              <div className="space-y-6 relative z-10">
                {/* Icon & Title */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-sm">
                    {current.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-[#0077F5] uppercase">Module {current.id}</span>
                    <h3 className="text-2xl font-extrabold text-[#12151C]">{current.title}</h3>
                  </div>
                </div>

                {/* Description Paragraphs */}
                <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed pt-2 border-t border-gray-100">
                  <p>{current.desc1}</p>
                  <p className="text-gray-500 text-xs sm:text-sm font-medium">{current.desc2}</p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8 relative z-10">
                <button 
                  onClick={() => router.push(current.route)}
                  className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#12151C] hover:bg-[#0077F5] text-white font-bold rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-sm group"
                >
                  <span>{current.cta}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}