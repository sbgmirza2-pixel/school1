'use client';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { 
  Building2, 
  Target, 
  Eye, 
  Layers, 
  ShieldCheck, 
  Users, 
  GraduationCap, 
  BookOpen, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Cpu,
  Lock,
  Workflow
} from 'lucide-react';

export default function AboutPage() {
  const router = useRouter();

  const features = [
    {
      title: "Student Management",
      desc: "Maintain organized student records and manage important student information from a centralized system.",
      icon: <GraduationCap className="w-6 h-6 text-[#0077F5]" />
    },
    {
      title: "Teacher Management",
      desc: "Manage teacher profiles and keep staff information organized for school administration.",
      icon: <Users className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Attendance Management",
      desc: "Record and monitor student attendance to maintain organized attendance records.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Fee Management",
      desc: "Manage fee records, generate receipts, and monitor pending dues to make fee administration easier.",
      icon: <FileText className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Examination and Results",
      desc: "Organize examination records, manage marks, and maintain student result information.",
      icon: <BookOpen className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Classes, Sections & Subjects",
      desc: "Organize academic structures, including classes, sections, and subjects efficiently.",
      icon: <Layers className="w-6 h-6 text-amber-600" />
    },
    {
      title: "Reports and Dashboard",
      desc: "Access an overview of important school information and review available reports to support administrative decisions.",
      icon: <Cpu className="w-6 h-6 text-teal-600" />
    }
  ];

  const roles = [
    { role: "Super Admin", desc: "Oversees the overall software platform and school accounts." },
    { role: "School Admin", desc: "Manages school information, users, and administrative activities." },
    { role: "Teacher", desc: "Accesses relevant academic and student-related information." },
    { role: "Accountant", desc: "Handles fee records, receipts, and pending dues." }
  ];

  const principles = [
    { num: "01", title: "Simplicity", desc: "We aim to make everyday school management tasks easier through a clear and organized interface." },
    { num: "02", title: "Centralization", desc: "We bring essential administrative and academic records together in one platform." },
    { num: "03", title: "Practical Innovation", desc: "We focus on useful technology that addresses real operational needs instead of adding unnecessary complexity." }
  ];

  const whyPoints = [
    "Essential school management functions in one platform.",
    "Centralized management of academic and administrative records.",
    "Multi-school SaaS architecture.",
    "Role-based access for different school users.",
    "Organized student, teacher, attendance, fee, and examination records.",
    "A product developed by DevNix Pro."
  ];

  return (
    <main className="min-h-screen bg-white text-[#12151C] selection:bg-blue-100 selection:text-[#0077F5]">
      
      {/* Navbar Integration */}
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative pt-16 pb-12 lg:pt-20 lg:pb-16 bg-gradient-to-b from-gray-50/80 to-white overflow-hidden border-b border-gray-100">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-10"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#12151C]">
            About <span className="text-[#0077F5]">DevNixEdu</span>
          </h1>

          {/* Sub-heading */}
          <p className="text-gray-800 text-base sm:text-lg font-bold tracking-tight">
            Simplifying School Management Through Technology
          </p>

          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-3xl mx-auto pt-1">
            DevNixEdu is a school management system developed by DevNix Pro to help educational institutions manage their daily administrative and academic activities through one centralized digital platform.
          </p>
        </div>
      </section>

      {/* Main Overview & Mission/Vision */}
      <section className="py-12 lg:py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#12151C]">
              Empowering Education Through <span className="text-[#0077F5]">Smart Digital Workflows</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We aim to make school management more organized, efficient, and accessible by bringing essential school operations together in one system. From student and teacher records to attendance, fee management, examinations, and academic reports, DevNixEdu helps schools manage important information with greater convenience.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Our goal is to simplify routine school administration so that school management teams can spend less time handling manual processes and more time focusing on education.
            </p>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#12151C] to-gray-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0077F5]/20 rounded-full blur-3xl pointer-events-none"></div>
            <h3 className="text-xl font-extrabold mb-3 text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#0077F5]" /> Who We Are
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
              DevNixEdu is a software product by DevNix Pro, a technology and digital solutions company. We believe technology should solve real problems and make everyday business and institutional operations easier.
            </p>
            <p className="text-gray-400 text-xs leading-relaxed">
              DevNixEdu represents our commitment to bringing useful technology into the education sector through a structured, accessible, and centralized school management platform.
            </p>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-3xl border border-gray-200/80 bg-gray-50/50 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0077F5]">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-[#12151C]">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our mission is to simplify school administration through reliable and practical software solutions. We aim to help educational institutions organize their records, manage academic activities, monitor daily operations, and improve administrative workflows through technology.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-gray-200/80 bg-gray-50/50 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0077F5]">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-[#12151C]">Our Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our vision is to contribute to a more digitally organized education sector by making school management technology accessible and useful for educational institutions. We want to build solutions that can grow with schools and support their evolving management needs.
            </p>
          </div>
        </div>

        {/* What DevNixEdu Offers */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#12151C]">
              What DevNixEdu <span className="text-[#0077F5]">Offers</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              DevNixEdu brings essential school management activities together in one comprehensive platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, index) => (
              <div 
                key={index}
                className="p-6 rounded-3xl border border-gray-200/80 bg-white hover:border-[#0077F5] hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-extrabold text-[#12151C] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Multi-School Architecture & Roles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          
          <div className="p-8 sm:p-10 rounded-3xl bg-gray-50 border border-gray-200/80 space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-[#0077F5]">
              <Workflow className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-[#12151C]">A Centralized Platform for Multiple Schools</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              DevNixEdu is designed around a multi-school SaaS architecture. This means multiple schools can use the same centralized platform while accessing their own individual school accounts and information.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Each school operates within its assigned environment, with access controlled according to its account and user permissions. This approach helps provide a structured way to manage multiple institutions through one software platform.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-gray-50 border border-gray-200/80 space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-[#0077F5]">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-[#12151C]">Designed for Different School Roles</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Different users have different responsibilities. DevNixEdu supports role-based access for its core user types:
            </p>
            <ul className="space-y-3">
              {roles.map((r, i) => (
                <li key={i} className="text-xs sm:text-sm text-gray-700 flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#0077F5] mt-1.5 shrink-0"></span>
                  <span><strong className="text-[#12151C]">{r.role}:</strong> {r.desc}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Our Approach */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#12151C]">
              Our <span className="text-[#0077F5]">Approach</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              We focus on building software that is practical, organized, and easy to understand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((p, i) => (
              <div key={i} className="p-8 rounded-3xl border border-gray-200/80 bg-white shadow-sm space-y-3 relative">
                <span className="text-4xl font-mono font-extrabold text-blue-100 absolute top-6 right-6">
                  {p.num}
                </span>
                <h3 className="text-lg font-extrabold text-[#12151C]">{p.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why DevNixEdu */}
        <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-blue-50/50 border border-blue-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12151C]">
              Why Choose <span className="text-[#0077F5]">DevNixEdu?</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Built with precision to provide a seamless, secure, and highly reliable administrative experience for educational institutions.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyPoints.map((pt, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-blue-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#0077F5] shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-gray-700">{pt}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Built by DevNix Pro & Final CTA */}
        <div className="max-w-4xl mx-auto text-center space-y-8 p-8 sm:p-14 bg-gradient-to-b from-[#12151C] to-gray-900 text-white rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0077F5]/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Built by <span className="text-[#0077F5]">DevNix Pro</span>
          </h2>

          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            DevNixEdu is part of the technology solutions developed by DevNix Pro. Our focus is on creating digital products that help organizations improve how they manage their everyday operations. Through DevNixEdu, we are bringing that focus to school administration and academic management.
          </p>

          <div className="pt-2">
            <h3 className="text-lg font-bold text-white mb-2">Let's Make School Management More Organized</h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-6 max-w-xl mx-auto">
              Give your institution a more structured way to manage its daily academic and administrative activities. Explore DevNixEdu and discover how a centralized school management system can support your institution.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => router.push('/')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0077F5] hover:bg-blue-650 text-white font-bold rounded-2xl shadow-xl shadow-[#0077F5]/30 transition-all text-xs sm:text-sm group"
              >
                <span>Explore DevNixEdu</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button 
                onClick={() => router.push('/contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-2xl border border-gray-700 transition-all text-xs sm:text-sm"
              >
                <span>Contact Our Team</span>
              </button>
            </div>
          </div>
        </div>

      </section>

      {/* Footer Integration */}
      <Footer />

    </main>
  );
}