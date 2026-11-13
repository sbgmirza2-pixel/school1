'use client';
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();

  return (
    <section id="pricing" className="py-20 bg-white border-t border-gray-200 text-[#12151C]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#12151C]">Flexible Pricing for Every School</h2>
          <p className="text-gray-600 text-sm mt-2 font-medium">Simple plans with no hidden setup fees.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#12151C]">Standard Plan</h3>
              <div className="text-3xl font-extrabold text-gray-900 mt-4 mb-2">Rs. 4,999 <span className="text-xs text-gray-500 font-normal">/month</span></div>
              <p className="text-xs text-gray-500 mb-6">Up to 300 Students</p>
              <ul className="space-y-3 text-xs text-gray-600 font-medium">
                <li className="flex items-center gap-2">✓ Student Directory & Admissions</li>
                <li className="flex items-center gap-2">✓ Fee Challan Generator</li>
                <li className="flex items-center gap-2">✓ Daily Attendance Portal</li>
              </ul>
            </div>
            <button onClick={() => router.push('/login')} className="w-full py-3 mt-8 bg-gray-100 hover:bg-gray-200 text-[#12151C] font-bold rounded-xl text-xs transition">
              Start 14-Day Free Trial
            </button>
          </div>

          <div className="bg-white border-2 border-[#0077F5] p-8 rounded-3xl shadow-xl flex flex-col justify-between relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0077F5] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#12151C]">Pro Plan</h3>
              <div className="text-3xl font-extrabold text-[#0077F5] mt-4 mb-2">Rs. 9,999 <span className="text-xs text-gray-500 font-normal">/month</span></div>
              <p className="text-xs text-gray-500 mb-6">Up to 1,000 Students</p>
              <ul className="space-y-3 text-xs text-gray-600 font-medium">
                <li className="flex items-center gap-2">✓ All Standard Features</li>
                <li className="flex items-center gap-2">✓ Parent & Teacher Portals</li>
                <li className="flex items-center gap-2">✓ SMS Alert Notifications</li>
                <li className="flex items-center gap-2">✓ Exam Marks & Report Cards</li>
              </ul>
            </div>
            <button onClick={() => router.push('/login')} className="w-full py-3 mt-8 bg-[#0077F5] hover:bg-blue-600 text-white font-bold rounded-xl text-xs shadow-md transition">
              Get Started Now
            </button>
          </div>

          <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#12151C]">Enterprise</h3>
              <div className="text-3xl font-extrabold text-gray-900 mt-4 mb-2">Custom</div>
              <p className="text-xs text-gray-500 mb-6">Unlimited Students / Multiple Campuses</p>
              <ul className="space-y-3 text-xs text-gray-600 font-medium">
                <li className="flex items-center gap-2">✓ Dedicated Multi-Campus Database</li>
                <li className="flex items-center gap-2">✓ Custom Domain Setup</li>
                <li className="flex items-center gap-2">✓ 24/7 Priority Support</li>
              </ul>
            </div>
            <button onClick={() => router.push('/login')} className="w-full py-3 mt-8 bg-gray-100 hover:bg-gray-200 text-[#12151C] font-bold rounded-xl text-xs transition">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}