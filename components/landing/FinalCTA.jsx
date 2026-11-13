'use client';
import { useRouter } from 'next/navigation';
import { ArrowRight, Sparkles, MessageSquare } from 'lucide-react';

export default function FinalCTA() {
  const router = useRouter();

  return (
    <section className="relative py-16 lg:py-24 bg-white text-[#12151C] overflow-hidden border-t border-gray-200/60">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/70 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main CTA Card Container */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#12151C] to-[#1a202c] text-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden text-center">
          
          {/* Subtle Decorative Glow inside Card */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0077F5]/20 rounded-full blur-3xl pointer-events-none"></div>

          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-[#0077F5] text-xs font-bold tracking-wider uppercase shadow-sm mb-6">
            <Sparkles className="w-3.5 h-3.5" /> START YOUR JOURNEY
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-[1.12]">
            Ready to Simplify <span className="text-[#0077F5]">Your School Management?</span>
          </h2>

          {/* Subtitle Paragraphs */}
          <p className="text-gray-300 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto mb-3">
            Bring your school's essential operations together with DevNixEdu.
          </p>

          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto mb-8">
            Manage students, teachers, attendance, fees, and examinations through one organized school management platform. Start building a smarter and more efficient school management experience.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            
            {/* Primary CTA */}
            <button 
              onClick={() => router.push('/login')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0077F5] hover:bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-[#0077F5]/30 transition-all duration-300 hover:-translate-y-0.5 text-sm group"
            >
              <span>Request a Free Demo</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Secondary CTA */}
            <button 
              onClick={() => router.push('/contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-800/80 hover:bg-gray-700 text-white font-bold rounded-2xl border border-gray-700 shadow-sm transition-all duration-300 text-sm group"
            >
              <MessageSquare className="w-4 h-4 text-[#0077F5]" />
              <span>Contact Our Team</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}