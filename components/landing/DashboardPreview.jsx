'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  CalendarCheck, 
  CreditCard, 
  FileText, 
  ArrowRight,
  Sparkles,
  Search,
  Bell,
  Mail,
  ChevronDown
} from 'lucide-react';

export default function DashboardPreview() {
  const router = useRouter();
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  // Counter State for smooth count-up animation
  const [counts, setCounts] = useState({
    total: 0,
    active: 0,
    admissions: 0,
    fee: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          let duration = 1200; // Animation duration in ms
          let steps = 40;
          let stepTime = duration / steps;
          let currentStep = 0;

          let timer = setInterval(() => {
            currentStep++;
            let progress = currentStep / steps;

            setCounts({
              total: Math.floor(progress * 1248),
              active: Math.floor(progress * 1186),
              admissions: Math.floor(progress * 42),
              fee: Math.floor(progress * 92)
            });

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounts({ total: 1248, active: 1186, admissions: 42, fee: 92 });
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const studentsList = [
    { name: "Ayaan Ahmed", adm: "ADM-2025-001", cls: "Class 6", sec: "A", roll: "12", father: "Imran Ahmed", status: "Active" },
    { name: "Fatima Noor", adm: "ADM-2025-002", cls: "Class 7", sec: "B", roll: "15", father: "Sajid Noor", status: "Active" },
    { name: "Muhammad Ali", adm: "ADM-2025-003", cls: "Class 8", sec: "A", roll: "08", father: "Naseer Ali", status: "Active" },
    { name: "Sarah Khan", adm: "ADM-2025-004", cls: "Class 5", sec: "C", roll: "21", father: "Faisal Khan", status: "Active" },
  ];

  return (
    <section ref={sectionRef} className="relative py-12 lg:py-16 bg-white text-[#12151C] overflow-hidden border-t border-gray-200/60">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header (Center Aligned, Single Line Heading) */}
        <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0077F5] text-xs font-bold tracking-wider uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> DASHBOARD PREVIEW
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#12151C] leading-[1.12] whitespace-nowrap">
            Your School Information. <span className="text-[#0077F5]">All in One Dashboard.</span>
          </h2>

          <p className="text-gray-700 text-base sm:text-lg font-medium leading-relaxed pt-1">
            Get a centralized view of your school's essential operations with the DevNixEdu administrative dashboard.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Monitor student information, teacher records, attendance summaries, fee collections, pending dues, and examination activities from one organized interface.
          </p>
        </div>

        {/* Dashboard Mockup Container (Symmetric Padding & Centered) */}
        <div className="max-w-6xl mx-auto bg-[#f8fafc] rounded-3xl border border-gray-300 shadow-2xl mb-12 overflow-hidden mx-6 sm:mx-auto">
          
          {/* Top Navbar */}
          <div className="bg-[#12151C] text-white px-5 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Simple Direct Logo Without Box or Extra Text */}
              <div className="flex items-center gap-2.5">
                <div className="relative w-10 h-10 shrink-0">
                  <Image 
                    src="/logo.jpg" 
                    alt="DevNixEdu Logo" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain"
                  />
                </div>
                
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-gray-800/80 px-3.5 py-2 rounded-xl border border-gray-700 w-80 text-xs text-gray-300 gap-2">
              <Search className="w-3.5 h-3.5 text-gray-400" />
              <span>Search students, teachers, classes...</span>
            </div>

            {/* Right User Info */}
            <div className="flex items-center gap-3">
              <Bell className="w-4 h-4 text-gray-300 cursor-pointer" />
              <Mail className="w-4 h-4 text-gray-300 cursor-pointer" />
              <div className="flex items-center gap-2 pl-3 border-l border-gray-800">
                <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white">
                  AK
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-xs font-bold leading-tight">Ahmed Khan</div>
                  <div className="text-[9px] text-gray-400">Principal</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            
            {/* Dark Sidebar */}
            <div className="hidden lg:block lg:col-span-3 bg-[#12151C] text-gray-300 p-4 space-y-1 text-xs border-t border-gray-800">
              <div className="text-[9px] font-mono font-bold text-gray-500 uppercase tracking-widest px-2 mb-2">Main Menu</div>
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-[#0077F5] text-white font-bold shadow">
                <LayoutDashboard className="w-4 h-4" /> Dashboard
              </div>
              <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-800/60 cursor-pointer text-gray-300">
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-[#0077F5]" /> Students
                </div>
                <ChevronDown className="w-3 h-3 text-gray-500" />
              </div>
              <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-800/60 cursor-pointer">
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="w-4 h-4" /> Teachers & Staff
                </div>
              </div>
              <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-800/60 cursor-pointer">
                <div className="flex items-center gap-2.5">
                  <CalendarCheck className="w-4 h-4" /> Attendance
                </div>
              </div>
              <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-800/60 cursor-pointer">
                <div className="flex items-center gap-2.5">
                  <CreditCard className="w-4 h-4" /> Fees
                </div>
              </div>
              <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-800/60 cursor-pointer">
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4" /> Exams & Results
                </div>
              </div>
            </div>

            {/* Light Dashboard Content */}
            <div className="lg:col-span-9 p-4 sm:p-6 space-y-6 bg-gray-50">
              
              {/* Header inside Dashboard */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-4 rounded-2xl border border-gray-200 shadow-sm gap-3">
                <div>
                  <h3 className="text-lg font-extrabold text-[#12151C]">Students</h3>
                  <p className="text-xs text-gray-500">Manage your students, view profiles, track progress and more.</p>
                </div>
                <button className="px-4 py-2 bg-[#0077F5] text-white text-xs font-bold rounded-xl shadow-md hover:bg-blue-600 transition">
                  + Add New Student
                </button>
              </div>

              {/* Stats Cards Row with Live Counters */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm space-y-1">
                  <div className="text-[11px] text-gray-500 font-medium">Total Students</div>
                  <div className="text-xl font-extrabold text-[#12151C]">{counts.total.toLocaleString()}</div>
                  <div className="text-[10px] text-emerald-600 font-bold">↑ 12% vs. last month</div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm space-y-1">
                  <div className="text-[11px] text-gray-500 font-medium">Active Students</div>
                  <div className="text-xl font-extrabold text-[#12151C]">{counts.active.toLocaleString()}</div>
                  <div className="text-[10px] text-emerald-600 font-bold">↑ 10% vs. last month</div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm space-y-1">
                  <div className="text-[11px] text-gray-500 font-medium">New Admissions</div>
                  <div className="text-xl font-extrabold text-[#12151C]">{counts.admissions}</div>
                  <div className="text-[10px] text-emerald-600 font-bold">↑ 35% vs. last month</div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm space-y-1">
                  <div className="text-[11px] text-gray-500 font-medium">Fee Collection</div>
                  <div className="text-xl font-extrabold text-emerald-600">{counts.fee}%</div>
                  <div className="text-[10px] text-amber-600 font-bold">Pending: {100 - counts.fee}%</div>
                </div>
              </div>

              {/* Mini Students Table Preview */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50/50">
                  <span className="text-xs font-bold text-[#12151C]">All Students Directory</span>
                  <span className="text-[10px] text-[#0077F5] font-bold cursor-pointer">View All →</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-gray-100/70 text-gray-600 font-semibold border-b border-gray-200">
                      <tr>
                        <th className="p-3">Student Name</th>
                        <th className="p-3">Admission No.</th>
                        <th className="p-3">Class</th>
                        <th className="p-3">Father Name</th>
                        <th className="p-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-gray-700">
                      {studentsList.map((s, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition">
                          <td className="p-3 font-bold text-[#12151C]">{s.name}</td>
                          <td className="p-3 font-mono text-gray-500">{s.adm}</td>
                          <td className="p-3">{s.cls} - {s.sec}</td>
                          <td className="p-3">{s.father}</td>
                          <td className="p-3">
                            <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold border border-emerald-200">
                              {s.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button 
            onClick={() => router.push('/login')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0077F5] hover:bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-[#0077F5]/25 transition-all duration-300 hover:-translate-y-0.5 text-sm group"
          >
            <span>Request a Live Demo</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}