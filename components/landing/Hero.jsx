'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  Zap, 
  ArrowRight, 
  Play, 
  Check, 
  LayoutDashboard, 
  GraduationCap, 
  CreditCard, 
  X 
} from 'lucide-react';

export default function Hero() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:pt-10 lg:pb-24 bg-gradient-to-b from-blue-50/40 via-white to-white text-[#12151C]">
      
      {/* Main Container with Entrance Animation */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 animate-hero-entrance">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow Text */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0077F5] text-xs font-bold tracking-wider uppercase shadow-sm">
              <Zap className="w-3.5 h-3.5 fill-[#0077F5]" />
              <span>SMART SCHOOL MANAGEMENT SOFTWARE</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#12151C] leading-[1.15]">
              Manage Your School Smarter with <span className="text-[#0077F5]">DevNixEdu</span>
            </h1>

            {/* Subtitle / Core Description */}
            <p className="text-gray-700 text-sm sm:text-base font-semibold leading-relaxed">
              A Complete School Management System to Simplify Your Daily School Operations.
            </p>

            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Manage students, teachers, attendance, fee collection, examinations, and academic records through one centralized platform. DevNixEdu brings essential school management tools together, helping educational institutions reduce paperwork, organize information, and manage everyday activities more efficiently.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button 
                onClick={() => router.push('/login')}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#0077F5] hover:bg-blue-600 font-bold rounded-xl shadow-xl shadow-[#0077F5]/20 transition-all duration-300 hover:-translate-y-0.5 text-sm text-white inline-flex items-center justify-center gap-2"
              >
                <span>Request a Free Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-gray-50 font-bold rounded-xl border border-gray-300 shadow-sm transition-all duration-300 hover:-translate-y-0.5 text-sm text-[#12151C] flex items-center justify-center gap-2"
              >
                <span className="w-6 h-6 rounded-full bg-blue-50 text-[#0077F5] flex items-center justify-center border border-blue-200">
                  <Play className="w-3 h-3 fill-[#0077F5] ml-0.5" />
                </span>
                <span>Watch video</span>
              </button>
            </div>

            {/* Supporting Highlights Badges */}
            <div className="pt-4 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-2.5 text-xs font-medium text-gray-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0077F5] stroke-[2.5] shrink-0" />
                  <span>Complete School Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0077F5] stroke-[2.5] shrink-0" />
                  <span>Multi-School SaaS Platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0077F5] stroke-[2.5] shrink-0" />
                  <span>Centralized School Dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0077F5] stroke-[2.5] shrink-0" />
                  <span>Role-Based User Access</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive Dashboard Mockup */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/5 transition-transform duration-500 hover:scale-[1.01]">
              
              {/* Browser Window Header */}
              <div className="bg-[#12151C] px-4 py-3 flex items-center justify-between border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500 inline-block shadow-inner"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block shadow-inner"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block shadow-inner"></span>
                </div>
                <div className="bg-gray-800/90 px-4 py-1 rounded-md text-[11px] text-gray-300 font-mono tracking-wide border border-gray-700/50">
                  devnixedu.pk/admin/dashboard
                </div>
                <div className="w-4"></div>
              </div>

              {/* Dashboard Inner Screen */}
              <div className="flex bg-[#0F172A] text-left h-[350px] overflow-hidden select-none">
                
                {/* Mini Sidebar */}
                <div className="w-40 bg-[#12151C] border-r border-gray-800 p-3.5 flex flex-col justify-between hidden sm:flex shrink-0">
                  <div className="space-y-3">
                    
                    {/* Public Logo Integration */}
                    <div className="flex items-center gap-2.5 pb-3 border-b border-gray-800">
                      <div className="w-7 h-7 rounded-lg overflow-hidden bg-white flex items-center justify-center shrink-0 border border-gray-700">
                        <Image src="/logo.jpg" alt="Logo" width={28} height={28} className="object-cover" />
                      </div>
                      <div>
                        <span className="text-xs font-extrabold text-white block leading-none">DevNixEdu</span>
                        <span className="text-[9px] text-[#0077F5] font-semibold">Enterprise SaaS</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <button 
                        onClick={() => setActiveTab('overview')} 
                        className={`w-full flex items-center gap-2 text-left text-[11px] px-2.5 py-1.5 rounded-lg font-medium transition ${activeTab === 'overview' ? 'bg-[#0077F5] text-white font-bold shadow-sm' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'}`}
                      >
                        <LayoutDashboard className="w-3.5 h-3.5 shrink-0" />
                        <span>Overview</span>
                      </button>
                      <button 
                        onClick={() => setActiveTab('students')} 
                        className={`w-full flex items-center gap-2 text-left text-[11px] px-2.5 py-1.5 rounded-lg font-medium transition ${activeTab === 'students' ? 'bg-[#0077F5] text-white font-bold shadow-sm' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'}`}
                      >
                        <GraduationCap className="w-3.5 h-3.5 shrink-0" />
                        <span>Students</span>
                      </button>
                      <button 
                        onClick={() => setActiveTab('fees')} 
                        className={`w-full flex items-center gap-2 text-left text-[11px] px-2.5 py-1.5 rounded-lg font-medium transition ${activeTab === 'fees' ? 'bg-[#0077F5] text-white font-bold shadow-sm' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'}`}
                      >
                        <CreditCard className="w-3.5 h-3.5 shrink-0" />
                        <span>Fee Challans</span>
                      </button>
                    </div>
                  </div>

                  <div className="text-[9px] text-emerald-400 bg-emerald-950/40 px-2 py-1 rounded border border-emerald-800/50 flex items-center justify-center gap-1.5 font-medium animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
                    <span>Active System</span>
                  </div>
                </div>

                {/* Main Viewport */}
                <div className="flex-1 p-4 bg-gray-50 text-gray-800 overflow-y-auto">
                  
                  {/* Top Bar */}
                  <div className="flex justify-between items-center mb-3 bg-white p-2.5 rounded-xl border border-gray-200/80 shadow-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-[11px] font-bold text-gray-900">Bright Future School</span>
                    </div>
                    <span className="text-[10px] bg-blue-50 text-[#0077F5] px-2.5 py-0.5 rounded-full font-bold border border-blue-100">Super Admin</span>
                  </div>

                  {activeTab === 'overview' && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-white p-2.5 rounded-xl border border-gray-200 shadow-sm">
                          <div className="text-[9px] text-gray-500 font-medium">Total Students</div>
                          <div className="text-sm font-extrabold text-gray-900 mt-0.5">1,248</div>
                        </div>
                        <div className="bg-white p-2.5 rounded-xl border border-gray-200 shadow-sm">
                          <div className="text-[9px] text-gray-500 font-medium">Teachers</div>
                          <div className="text-sm font-extrabold text-emerald-600 mt-0.5">84</div>
                        </div>
                        <div className="bg-white p-2.5 rounded-xl border border-gray-200 shadow-sm">
                          <div className="text-[9px] text-gray-500 font-medium">Attendance</div>
                          <div className="text-sm font-extrabold text-[#0077F5] mt-0.5">94.5%</div>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm">
                        <div className="text-[10px] font-bold text-gray-900 mb-2 flex justify-between items-center">
                          <span>Recent Academic Activity</span>
                          <span className="text-[9px] text-[#0077F5] cursor-pointer">Live Feed</span>
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex justify-between items-center text-[10px] bg-gray-50 p-2 rounded-lg border border-gray-100">
                            <span className="font-semibold text-gray-800">Class 6 Attendance Marked</span>
                            <span className="text-emerald-600 font-bold text-[9px]">Completed</span>
                          </div>
                          <div className="flex justify-between items-center text-[10px] bg-gray-50 p-2 rounded-lg border border-gray-100">
                            <span className="font-semibold text-gray-800">November Fee Challans</span>
                            <span className="text-[#0077F5] font-bold text-[9px]">Generated</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'students' && (
                    <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm space-y-2">
                      <div className="text-[11px] font-bold text-gray-900 mb-1">Student Directory</div>
                      <div className="space-y-1.5 text-[10px]">
                        <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg border border-gray-100">
                          <span className="font-medium">Ayaan Ahmed (ADM-2025-001)</span> 
                          <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">Enrolled</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg border border-gray-100">
                          <span className="font-medium">Fatima Noor (ADM-2025-002)</span> 
                          <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">Enrolled</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'fees' && (
                    <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm space-y-2">
                      <div className="text-[11px] font-bold text-gray-900 mb-1">Automated Fee Collection</div>
                      <div className="space-y-1.5 text-[10px]">
                        <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg border border-gray-100">
                          <span>Voucher #CH-9928 — Class 6</span> 
                          <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">Paid</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg border border-gray-100">
                          <span>Voucher #CH-9929 — Class 7</span> 
                          <span className="text-amber-600 font-bold bg-amber-50 px-2 py-0.5 rounded">Pending</span>
                        </div>
                      </div>
                    </div>
                  )}

                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Video Demo Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-4 overflow-hidden shadow-2xl relative">
            <div className="flex justify-between items-center mb-3 px-2">
              <h3 className="text-sm font-bold text-[#12151C]">DevNixEdu System Walkthrough</h3>
              <button 
                onClick={() => setIsVideoOpen(false)} 
                className="text-gray-500 hover:text-black p-1 rounded-lg hover:bg-gray-100 transition"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center text-white text-xs">
              [ Video Demo Player — DevNixEdu School Management Platform ]
            </div>
          </div>
        </div>
      )}

    </section>
  );
}