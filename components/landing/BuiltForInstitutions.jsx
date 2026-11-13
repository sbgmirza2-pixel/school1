'use client';
import { useRouter } from 'next/navigation';
import { 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';

export default function BuiltForInstitutions() {
  const router = useRouter();

  const highlights = [
    "Organized system for students & teachers",
    "Centralized financial records & fee tracking",
    "Streamlined daily attendance & academic activities",
    "Transition from manual records to digital foundation"
  ];

  return (
    <section className="relative py-12 lg:py-16 bg-gray-50/50 text-[#12151C] overflow-hidden border-t border-gray-200/60">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header & Content Box (Without Top Badge) */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-200/80 p-8 sm:p-12 shadow-xl shadow-blue-500/5 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-2xl pointer-events-none -z-10"></div>

          <div className="text-center space-y-4 mb-10">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#12151C] leading-[1.12]">
              School Management Software <span className="text-[#0077F5]">Designed for Modern Schools</span>
            </h2>

            <p className="text-gray-700 text-base sm:text-lg font-medium leading-relaxed pt-2 max-w-2xl mx-auto">
              Every school needs an organized system to manage its students, teachers, financial records, attendance, and academic activities.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              DevNixEdu focuses on these essential requirements and brings them together through a centralized management platform. Whether your institution is establishing its first digital management system or moving away from manual record keeping, DevNixEdu provides a structured starting point.
            </p>
          </div>

          {/* Key Bullet Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 pt-4 border-t border-gray-100">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3.5 rounded-2xl bg-gray-50/80 border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-[#0077F5] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <button 
              onClick={() => router.push('/login')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0077F5] hover:bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-[#0077F5]/25 transition-all duration-300 hover:-translate-y-0.5 text-sm group"
            >
              <span>Get Started with DevNixEdu</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}