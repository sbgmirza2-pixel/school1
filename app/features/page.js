'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { 
  GraduationCap, 
  Users, 
  ShieldCheck, 
  FileText, 
  BookOpen, 
  Layers, 
  LayoutDashboard, 
  BarChart3, 
  Workflow, 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight 
} from 'lucide-react';

export default function FeaturesPage() {
  const router = useRouter();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const coreFeatures = [
    {
      id: "student",
      title: "1. Student Management System",
      subtitle: "Manage student information through a centralized student management module.",
      desc: "Keep important student records organized and accessible to authorized school users.",
      icon: <GraduationCap className="w-6 h-6 text-[#0077F5]" />,
      capabilities: [
        "Maintain student profiles and records.",
        "Organize students according to classes and sections.",
        "View and manage student information.",
        "Keep student records organized in one place."
      ]
    },
    {
      id: "teacher",
      title: "2. Teacher Management System",
      subtitle: "Manage teacher information and maintain organized staff records.",
      desc: "The teacher management module helps school administrators maintain essential teacher information within the platform.",
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      capabilities: [
        "Create and manage teacher profiles.",
        "Maintain teacher information.",
        "Organize teacher records.",
        "Provide relevant access according to user permissions."
      ]
    },
    {
      id: "attendance",
      title: "3. Student Attendance Management",
      subtitle: "Record and monitor student attendance through a centralized attendance management system.",
      desc: "Keep attendance information organized and make it easier for authorized users to review attendance records.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      capabilities: [
        "Record student attendance.",
        "Maintain attendance records.",
        "Review attendance information.",
        "Organize attendance by relevant academic groups."
      ]
    },
    {
      id: "fee",
      title: "4. School Fee Management System",
      subtitle: "Simplify fee administration by managing student fee records, receipts, and outstanding dues in one place.",
      desc: "DevNixEdu helps school administrators and accountants maintain organized financial records related to student fees.",
      icon: <FileText className="w-6 h-6 text-purple-600" />,
      capabilities: [
        "Manage student fee records.",
        "Generate fee receipts.",
        "Track pending fee dues.",
        "Review fee-related information.",
        "Maintain organized fee records."
      ]
    },
    {
      id: "exam",
      title: "5. Examination and Result Management",
      subtitle: "Organize examination information and manage student academic results through a dedicated module.",
      desc: "Maintain examination records and student marks in a structured environment.",
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      capabilities: [
        "Manage examination records.",
        "Enter and maintain student marks.",
        "Organize examination information.",
        "Maintain student result records."
      ]
    },
    {
      id: "classes",
      title: "6. Classes, Sections and Subject Management",
      subtitle: "Organize your school's academic structure through a centralized system.",
      desc: "Manage classes, sections, and subjects to maintain a structured academic environment.",
      icon: <Layers className="w-6 h-6 text-amber-600" />,
      capabilities: [
        "Manage school classes.",
        "Organize class sections.",
        "Maintain subject information.",
        "Structure academic records."
      ]
    },
    {
      id: "dashboard",
      title: "7. School Dashboard",
      subtitle: "Get an overview of important school information through a centralized dashboard.",
      desc: "The dashboard provides a convenient starting point for authorized users to access relevant information and manage their daily activities.",
      icon: <LayoutDashboard className="w-6 h-6 text-teal-600" />,
      capabilities: [
        "Centralized dashboard interface.",
        "Overview of relevant school information.",
        "Convenient access to available modules.",
        "Role-based access to relevant information."
      ]
    },
    {
      id: "reports",
      title: "8. Reports and Record Management",
      subtitle: "Keep important school information organized and review available records through the reporting functionality.",
      desc: "Reports help school management review relevant academic and administrative information.",
      icon: <BarChart3 className="w-6 h-6 text-rose-600" />,
      capabilities: [
        "Access available school reports.",
        "Review student-related information.",
        "Monitor attendance records.",
        "Review fee-related records.",
        "Access examination and result information."
      ]
    }
  ];

  const roles = [
    { role: "Super Admin", desc: "Manage the overall software platform and school accounts." },
    { role: "School Admin", desc: "Manage school operations, information, and authorized users." },
    { role: "Teacher", desc: "Access relevant academic and student-related information according to assigned permissions." },
    { role: "Accountant", desc: "Manage fee records, receipts, and pending dues according to assigned permissions." }
  ];

  const whyPoints = [
    { title: "Organized School Administration", desc: "Keep essential school records and administrative activities in one platform." },
    { title: "Centralized Information", desc: "Manage important student, teacher, attendance, fee, and examination information through a common system." },
    { title: "Role-Based Access", desc: "Provide different user roles with access relevant to their responsibilities." },
    { title: "Simplified Daily Operations", desc: "Reduce dependence on scattered records and make routine management more organized." },
    { title: "Multi-School Platform", desc: "Support multiple schools through a centralized SaaS architecture with individual school accounts." }
  ];

  const faqs = [
    {
      q: "What is DevNixEdu?",
      a: "DevNixEdu is a school management system developed by DevNix Pro to help educational institutions manage student records, teachers, attendance, fees, examinations, and other essential school activities."
    },
    {
      q: "What features are included in DevNixEdu?",
      a: "DevNixEdu includes student management, teacher management, attendance management, fee management, examination and result management, classes and sections, dashboard, and reports."
    },
    {
      q: "Can multiple schools use DevNixEdu?",
      a: "Yes. DevNixEdu is designed with a multi-school SaaS architecture that allows multiple schools to use the centralized platform through their individual school accounts."
    },
    {
      q: "Which user roles are supported?",
      a: "The platform is designed for Super Admin, School Admin, Teacher, and Accountant roles, with access based on assigned permissions."
    },
    {
      q: "Who develops DevNixEdu?",
      a: "DevNixEdu is a software product developed by DevNix Pro."
    },
    {
      q: "Is DevNixEdu suitable for schools?",
      a: "DevNixEdu is designed to support school administration and academic record management through its core management modules."
    }
  ];

  return (
    <main className="min-h-screen bg-white text-[#12151C] selection:bg-blue-100 selection:text-[#0077F5]">
      
      {/* Navbar Integration */}
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative pt-24 pb-16 lg:pt-16 lg:pb-12 bg-gradient-to-b from-gray-50/80 to-white overflow-hidden border-b border-gray-100">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-blue-50/70 rounded-full blur-3xl pointer-events-none -z-10"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#12151C] leading-[1.12]">
            DevNixEdu <span className="text-[#0077F5]">Features</span>
          </h1>

          {/* Sub-heading */}
          <p className="text-gray-800 text-lg sm:text-xl font-bold tracking-tight">
            Everything Your School Needs to Manage Daily Operations
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            DevNixEdu is a school management system designed to simplify academic and administrative activities through one centralized platform. Manage student records, teacher information, attendance, fees, examinations, and academic reports in an organized digital environment. With dedicated access for different school roles, DevNixEdu helps institutions manage their everyday operations more efficiently.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <button 
              onClick={() => router.push('/login')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0077F5] hover:bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-[#0077F5]/25 transition-all text-sm group"
            >
              <span>Explore DevNixEdu</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button 
              onClick={() => router.push('/contact')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-[#12151C] font-bold rounded-2xl border border-gray-300 transition-all text-sm shadow-sm"
            >
              <span>Contact Our Team</span>
            </button>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#12151C]">
            Core Features of <span className="text-[#0077F5]">DevNixEdu</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Comprehensive modules designed to handle all aspects of school administration and academic tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreFeatures.map((feat) => (
            <div 
              key={feat.id}
              id={feat.id}
              className="p-8 rounded-3xl border border-gray-200/80 bg-white hover:border-[#0077F5]/60 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  {feat.icon}
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#12151C] mb-1">{feat.title}</h3>
                  <p className="text-xs font-bold text-[#0077F5]">{feat.subtitle}</p>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{feat.desc}</p>
                
                <div className="pt-2 border-t border-gray-100">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Key Capabilities:</h4>
                  <ul className="space-y-2">
                    {feat.capabilities.map((cap, i) => (
                      <li key={i} className="text-xs sm:text-sm text-gray-700 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#0077F5] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Designed for Different School Users & Multi-School SaaS */}
      <section className="py-16 bg-gray-50/50 border-t border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          
          {/* Roles */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#12151C]">
                Designed for <span className="text-[#0077F5]">Different School Users</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                DevNixEdu provides role-based access to help different users perform their relevant responsibilities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {roles.map((r, i) => (
                <div key={i} className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0077F5] flex items-center justify-center font-bold text-sm">
                    0{i + 1}
                  </div>
                  <h3 className="text-base font-extrabold text-[#12151C]">{r.role}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Multi-School Architecture */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#12151C] to-gray-900 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0077F5]/20 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-[#0077F5] text-xs font-bold uppercase">
                  <Workflow className="w-3.5 h-3.5" /> SaaS Architecture
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  One Platform. <span className="text-[#0077F5]">Separate School Accounts.</span>
                </h2>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  DevNixEdu is designed as a multi-school SaaS platform that allows multiple educational institutions to use one centralized software system. Each school operates through its own account and accesses its own school information according to assigned permissions.
                </p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  This architecture provides a structured way to manage multiple schools without mixing their operational records.
                </p>
              </div>

              <div className="lg:col-span-5 bg-gray-950/60 border border-gray-800 p-6 rounded-2xl space-y-3">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Key Benefits:</h3>
                <ul className="space-y-2.5 text-xs text-gray-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0077F5]" /> Centralized software platform.</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0077F5]" /> Individual school accounts.</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0077F5]" /> School-specific access permissions.</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0077F5]" /> Organized school information.</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0077F5]" /> A platform designed to support multiple institutions.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose DevNixEdu */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#12151C]">
            Why Choose <span className="text-[#0077F5]">DevNixEdu?</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Built with precision to provide a seamless, secure, and highly reliable administrative experience for educational institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {whyPoints.map((wp, i) => (
            <div key={i} className="p-6 rounded-3xl border border-gray-200/80 bg-white shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0077F5] flex items-center justify-center font-bold text-sm">
                0{i + 1}
              </div>
              <h3 className="text-sm font-extrabold text-[#12151C]">{wp.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed">{wp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 bg-gray-50/50 border-t border-gray-200/60">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#12151C]">
              Frequently Asked <span className="text-[#0077F5]">Questions</span>
            </h2>
            <p className="text-gray-600 text-sm">
              Got questions about DevNixEdu features? Find clear answers below.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-extrabold text-[#12151C] text-sm sm:text-base focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#0077F5]' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-gray-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Manage Your School with DevNixEdu - Final CTA */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6 p-8 sm:p-14 bg-gradient-to-b from-[#12151C] to-gray-900 text-white rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0077F5]/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Manage Your School <span className="text-[#0077F5]">with DevNixEdu</span>
          </h2>

          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Bring your essential school management activities together with a centralized digital solution. Whether you want to organize student records, manage attendance, track fee dues, or maintain examination information, DevNixEdu provides essential tools to support your school's daily operations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => router.push('/login')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0077F5] hover:bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-[#0077F5]/30 transition-all text-xs sm:text-sm group"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button 
              onClick={() => router.push('/contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-2xl border border-gray-700 transition-all text-xs sm:text-sm"
            >
              <span>Contact DevNix Pro</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer Integration */}
      <Footer />

    </main>
  );
}