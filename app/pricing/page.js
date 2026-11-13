'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  Calculator, 
  ShieldCheck, 
  HelpCircle, 
  ChevronDown,
  MessageSquare,
  Building2
} from 'lucide-react';

export default function PricingPage() {
  const router = useRouter();
  
  // Calculator States
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'
  const [selectedPackage, setSelectedPackage] = useState('Standard');
  const [students, setStudents] = useState(400);
  const [teachers, setTeachers] = useState(40);

  // FAQ state
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Pricing Matrix
  const plans = [
    {
      name: "Basic",
      tagline: "For Small Schools",
      monthlyPrice: "PKR 1,999",
      yearlyPrice: "PKR 21,589",
      studentCap: "Up to 150 Students",
      teacherCap: "Up to 15 Teachers",
      desc: "A suitable starting package for small schools looking to organize their daily academic and administrative activities.",
      popular: false,
      features: [
        "Student Management",
        "Teacher Management",
        "Classes & Sections",
        "Attendance Management",
        "Fee Management",
        "Examination & Results",
        "Basic Reports",
        "School Admin Dashboard",
        "Up to 150 Student Accounts",
        "Up to 15 Teacher Accounts",
        "Standard User Access"
      ]
    },
    {
      name: "Standard",
      tagline: "For Growing Schools",
      monthlyPrice: "PKR 3,499",
      yearlyPrice: "PKR 37,789",
      studentCap: "Up to 400 Students",
      teacherCap: "Up to 40 Teachers",
      desc: "A flexible package for growing educational institutions that need additional student and teacher capacity.",
      popular: true,
      features: [
        "Everything in Basic, Plus:",
        "Up to 400 Student Accounts",
        "Up to 40 Teacher Accounts",
        "Complete Fee Tracking",
        "Attendance Reports",
        "Fee Collection Reports",
        "Examination & Result Management",
        "Expanded User Access",
        "Standard Support"
      ]
    },
    {
      name: "Premium",
      tagline: "For Large Schools",
      monthlyPrice: "PKR 5,999",
      yearlyPrice: "PKR 64,789",
      studentCap: "Up to 800 Students",
      teacherCap: "Up to 80 Teachers",
      desc: "A higher-capacity package for established schools managing larger student populations and administrative requirements.",
      popular: false,
      features: [
        "Everything in Standard, Plus:",
        "Up to 800 Student Accounts",
        "Up to 80 Teacher Accounts",
        "Comprehensive School Reports",
        "Higher Account Capacity",
        "Expanded User Access",
        "Priority Support (subject to availability)"
      ]
    },
    {
      name: "Custom",
      tagline: "For Large Institutions and School Groups",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      studentCap: "800+ Students",
      teacherCap: "Additional Capacity",
      desc: "Need more than 800 students or additional capacity? Contact our team to discuss a customized subscription.",
      popular: false,
      features: [
        "Custom Student & Teacher Capacity",
        "Tailored Multi-School Modules",
        "Dedicated Account Management",
        "Advanced Security & Controls",
        "Custom Reporting Integration",
        "Priority 24/7 Support"
      ]
    }
  ];

  const comparisonData = [
    { feature: "Student Management", basic: true, standard: true, premium: true },
    { feature: "Teacher Management", basic: true, standard: true, premium: true },
    { feature: "Classes & Sections", basic: true, standard: true, premium: true },
    { feature: "Attendance Management", basic: true, standard: true, premium: true },
    { feature: "Fee Management", basic: true, standard: true, premium: true },
    { feature: "Examination & Results", basic: true, standard: true, premium: true },
    { feature: "School Dashboard", basic: true, standard: true, premium: true },
    { feature: "Basic Reports", basic: true, standard: true, premium: true },
    { feature: "Student Capacity", basic: "150", standard: "400", premium: "800" },
    { feature: "Teacher Capacity", basic: "15", standard: "40", premium: "80" },
    { feature: "Fee Collection Reports", basic: true, standard: true, premium: true },
    { feature: "Examination Reports", basic: true, standard: true, premium: true },
    { feature: "User Access", basic: "Standard", standard: "Expanded", premium: "Expanded" },
    { feature: "Support", basic: "Standard", standard: "Standard", premium: "Priority*" }
  ];

  const whyPricing = [
    { title: "Affordable Packages", desc: "Choose a subscription that matches your school's size and requirements." },
    { title: "Essential Features Included", desc: "Access the core school management modules according to your selected plan." },
    { title: "Flexible Billing", desc: "Choose monthly or annual subscriptions with a 10% discount on yearly plans." },
    { title: "Scalable Capacity", desc: "Select a student and teacher capacity that suits your institution." },
    { title: "Centralized Management", desc: "Manage essential school operations through one centralized platform." },
    { title: "Independent School Accounts", desc: "Every registered school gets its own account and school-specific data environment." }
  ];

  const faqs = [
    {
      q: "How much does DevNixEdu cost?",
      a: "DevNixEdu's proposed subscription plans start at PKR 1,999 per month for up to 150 students. Higher-capacity plans are available according to school requirements."
    },
    {
      q: "What is included in the Basic Plan?",
      a: "The Basic Plan includes student management, teacher management, attendance, fees, examinations, classes, sections, and basic reports within the specified account limits."
    },
    {
      q: "What is the difference between Basic, Standard, and Premium?",
      a: "The primary differences are student capacity, teacher capacity, and additional reporting and support provisions."
    },
    {
      q: "Can I pay annually?",
      a: "Yes. DevNixEdu plans to offer annual subscriptions with a proposed 10% discount compared to monthly billing."
    },
    {
      q: "Can I upgrade my subscription?",
      a: "Schools can request an upgrade when their student or teacher capacity exceeds their current plan limits, subject to the applicable upgrade terms."
    },
    {
      q: "What happens if my school has more than 800 students?",
      a: "You can contact our team to request a customized subscription based on your institution's requirements."
    },
    {
      q: "Can multiple schools register on DevNixEdu?",
      a: "Yes. DevNixEdu is designed as a multi-school SaaS platform. Each school operates through its own account and school-specific data environment."
    },
    {
      q: "Is there a separate setup fee?",
      a: "Any applicable onboarding or setup charges will be communicated before subscription confirmation."
    },
    {
      q: "Can I request a product demonstration?",
      a: "Yes. Schools can contact our team to request a demonstration before choosing a subscription."
    },
    {
      q: "Are mobile apps included?",
      a: "The current proposed plans focus on the web-based school management platform. Mobile application availability and pricing will be announced separately if introduced."
    }
  ];

  return (
    <main className="min-h-screen bg-white text-[#12151C] selection:bg-blue-100 selection:text-[#0077F5]">
      
      {/* Navbar Integration */}
      <Navbar />

      {/* SECTION 01 – HERO SECTION */}
      <section className="relative pt-24 pb-16 lg:pt-16 lg:pb-12 bg-gradient-to-b from-gray-50/80 to-white overflow-hidden border-b border-gray-100">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-blue-50/70 rounded-full blur-3xl pointer-events-none -z-10"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0077F5] text-xs font-bold tracking-wider uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> FLEXIBLE & AFFORDABLE PRICING
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#12151C] leading-[1.12]">
            Transparent Pricing <span className="text-[#0077F5]">That Fits Your School</span>
          </h1>

          <p className="text-gray-800 text-lg sm:text-xl font-bold tracking-tight">
            Affordable school management software plans designed for schools of every size.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            Choose a subscription according to your school's student capacity, teacher requirements, and management needs. Get access to essential school management tools without unnecessary complexity.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <button 
              onClick={() => router.push('/login')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0077F5] hover:bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-[#0077F5]/25 transition-all text-sm group"
            >
              <span>Explore Pricing Plans</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button 
              onClick={() => router.push('/contact')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-[#12151C] font-bold rounded-2xl border border-gray-300 transition-all text-sm shadow-sm"
            >
              <span>Request a Demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 04 – MONTHLY & YEARLY BILLING TOGGLE */}
      <section className="py-12 bg-gray-50/50 border-b border-gray-200/60">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#12151C]">Flexible Subscription Options</h2>
          <p className="text-gray-600 text-xs sm:text-sm">Choose the billing cycle that works best for your school.</p>
          
          <div className="inline-flex items-center bg-gray-200/80 p-1.5 rounded-2xl">
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${billingCycle === 'monthly' ? 'bg-white text-[#12151C] shadow-sm' : 'text-gray-600 hover:text-black'}`}
            >
              Monthly Subscription
            </button>
            <button 
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${billingCycle === 'yearly' ? 'bg-[#0077F5] text-white shadow-md' : 'text-gray-600 hover:text-black'}`}
            >
              <span>Annual Subscription</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${billingCycle === 'yearly' ? 'bg-white text-[#0077F5]' : 'bg-blue-100 text-[#0077F5]'}`}>Save 10%</span>
            </button>
          </div>
          <p className="text-[11px] text-gray-500">Annual subscriptions are billed in advance. Applicable taxes, if any, will be communicated before purchase.</p>
        </div>
      </section>

      {/* SECTION 03 – SUBSCRIPTION PLANS GRID */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#12151C]">
            Choose the Right Plan <span className="text-[#0077F5]">for Your School</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Simple and flexible subscription plans to help your institution manage everyday school operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular 
                  ? 'bg-gradient-to-b from-[#12151C] to-gray-900 text-white shadow-2xl border-2 border-[#0077F5] lg:-translate-y-2' 
                  : 'bg-white text-[#12151C] border border-gray-200/80 shadow-sm hover:border-[#0077F5]/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#0077F5] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                  MOST POPULAR
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-[#0077F5] mb-1">{plan.name} Plan</h3>
                  <h4 className={`text-lg font-extrabold ${plan.popular ? 'text-white' : 'text-[#12151C]'}`}>{plan.tagline}</h4>
                </div>

                <div className="py-2">
                  <div className="text-3xl font-extrabold tracking-tight">
                    {billingCycle === 'yearly' && plan.name !== 'Custom' ? plan.yearlyPrice : plan.monthlyPrice}
                  </div>
                  <div className={`text-xs font-medium ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                    {billingCycle === 'yearly' && plan.name !== 'Custom' ? 'Per Year (Billed Annually)' : plan.name === 'Custom' ? 'Tailored Pricing' : 'Per Month'}
                  </div>
                </div>

                <div className={`p-3 rounded-2xl text-xs font-semibold ${plan.popular ? 'bg-gray-800 text-blue-300' : 'bg-blue-50 text-[#0077F5]'}`}>
                  {plan.studentCap} • {plan.teacherCap}
                </div>

                <p className={`text-xs leading-relaxed ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                  {plan.desc}
                </p>

                <div className="pt-4 border-t border-gray-200/20">
                  <h5 className={`text-[11px] font-bold uppercase tracking-wider mb-3 ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                    {plan.name === 'Basic' ? "What's Included:" : plan.name === 'Custom' ? "Key Highlights:" : "Everything in Basic, Plus:"}
                  </h5>
                  <ul className="space-y-2.5">
                    {plan.features.map((feat, i) => (
                      <li key={i} className={`text-xs flex items-start gap-2 ${plan.popular ? 'text-gray-300' : 'text-gray-700'}`}>
                        <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${plan.popular ? 'text-[#0077F5]' : 'text-emerald-600'}`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <button 
                  onClick={() => router.push(plan.name === 'Custom' ? '/contact' : '/login')}
                  className={`w-full py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-sm ${
                    plan.popular
                      ? 'bg-[#0077F5] hover:bg-blue-600 text-white shadow-[#0077F5]/30'
                      : 'bg-gray-100 hover:bg-[#0077F5] hover:text-white text-[#12151C]'
                  }`}
                >
                  {plan.name === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 02 – CUSTOM PACKAGE CALCULATOR */}
      <section className="py-16 bg-gray-50/50 border-t border-b border-gray-200/60">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0077F5] text-xs font-bold uppercase">
              <Calculator className="w-3.5 h-3.5" /> Interactive Estimator
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#12151C]">
              Find the Right Package for Your School
            </h2>
            <p className="text-gray-600 text-sm">
              Choose your student capacity, teacher limit, and preferred billing cycle to find a suitable DevNixEdu subscription.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200/80 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Select Package Type */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#12151C] uppercase tracking-wider">Select Package Tier</label>
                <div className="grid grid-cols-4 gap-2">
                  {['Basic', 'Standard', 'Premium', 'Custom'].map((pkg) => (
                    <button
                      key={pkg}
                      onClick={() => setSelectedPackage(pkg)}
                      className={`py-2.5 px-2 rounded-xl text-xs font-bold border transition-all ${selectedPackage === pkg ? 'bg-[#0077F5] text-white border-[#0077F5] shadow-sm' : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300'}`}
                    >
                      {pkg}
                    </button>
                  ))}
                </div>
              </div>

              {/* Number of Students Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-[#12151C]">
                  <span>Number of Students</span>
                  <span className="text-[#0077F5] font-mono">{students} Students</span>
                </div>
                <input 
                  type="range" 
                  min="50" 
                  max="1000" 
                  step="25"
                  value={students}
                  onChange={(e) => setStudents(Number(e.target.value))}
                  className="w-full accent-[#0077F5] cursor-pointer"
                />
              </div>

              {/* Number of Teachers Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-[#12151C]">
                  <span>Number of Teachers</span>
                  <span className="text-[#0077F5] font-mono">{teachers} Teachers</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="100" 
                  step="5"
                  value={teachers}
                  onChange={(e) => setTeachers(Number(e.target.value))}
                  className="w-full accent-[#0077F5] cursor-pointer"
                />
              </div>

            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 bg-gray-900 text-white p-6 rounded-2xl flex flex-col justify-between space-y-6 shadow-inner">
              <div className="space-y-4">
                <h3 className="text-xs font-bold font-mono tracking-wider text-[#0077F5] uppercase">Your Subscription Summary</h3>
                
                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between border-b border-gray-800 pb-2">
                    <span className="text-gray-400">Selected Package:</span>
                    <span className="font-bold text-white">{selectedPackage} Plan</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-800 pb-2">
                    <span className="text-gray-400">Student Capacity:</span>
                    <span className="font-bold text-white">{students} Students</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-800 pb-2">
                    <span className="text-gray-400">Teacher Capacity:</span>
                    <span className="font-bold text-white">{teachers} Teachers</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-800 pb-2">
                    <span className="text-gray-400">Billing Cycle:</span>
                    <span className="font-bold text-white capitalize">{billingCycle}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-gray-400 font-bold">Estimated Cost:</span>
                    <span className="font-extrabold text-[#0077F5] text-sm">
                      {selectedPackage === 'Custom' ? 'Custom Quote' : billingCycle === 'yearly' ? 'PKR 37,789 / Year' : 'PKR 3,499 / Month'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={() => router.push('/login')}
                  className="w-full py-3.5 bg-[#0077F5] hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-[#0077F5]/30 transition-all text-xs sm:text-sm flex items-center justify-center gap-2"
                >
                  <span>Continue to Registration</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-gray-400 text-center">
                  Need a customized package? <span className="text-[#0077F5] underline cursor-pointer" onClick={() => router.push('/contact')}>Contact our team</span> for a personalized quotation.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 05 – FEATURE COMPARISON MATRIX */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#12151C]">
            Compare DevNixEdu <span className="text-[#0077F5]">Subscription Plans</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Choose the package that matches your school's requirements.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50/80">
                <th className="p-4 text-xs font-bold uppercase tracking-wider text-[#12151C]">Features</th>
                <th className="p-4 text-xs font-bold uppercase tracking-wider text-center text-[#0077F5]">Basic</th>
                <th className="p-4 text-xs font-bold uppercase tracking-wider text-center text-[#0077F5]">Standard</th>
                <th className="p-4 text-xs font-bold uppercase tracking-wider text-center text-[#0077F5]">Premium</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
              {comparisonData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50/50 transition">
                  <td className="p-4 font-semibold text-[#12151C]">{row.feature}</td>
                  <td className="p-4 text-center text-gray-700">
                    {typeof row.basic === 'boolean' ? (
                      row.basic ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : '-'
                    ) : (
                      <span className="font-bold text-[#12151C]">{row.basic}</span>
                    )}
                  </td>
                  <td className="p-4 text-center text-gray-700 bg-blue-50/30">
                    {typeof row.standard === 'boolean' ? (
                      row.standard ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : '-'
                    ) : (
                      <span className="font-bold text-[#0077F5]">{row.standard}</span>
                    )}
                  </td>
                  <td className="p-4 text-center text-gray-700">
                    {typeof row.premium === 'boolean' ? (
                      row.premium ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : '-'
                    ) : (
                      <span className="font-bold text-[#12151C]">{row.premium}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-[11px] text-gray-500 mt-3">* Priority support is subject to the finalized support policy.</p>
        </div>
      </section>

      {/* SECTION 06 – WHY CHOOSE OUR PRICING? */}
      <section className="py-16 bg-gray-50/50 border-t border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#12151C]">
              More Value for <span className="text-[#0077F5]">Your School</span>
            </h2>
            <p className="text-gray-600 text-sm">
              Designed to provide transparent, reliable, and scalable value to educational institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPricing.map((item, index) => (
              <div key={index} className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0077F5] flex items-center justify-center font-bold text-sm">
                  0{index + 1}
                </div>
                <h3 className="text-base font-extrabold text-[#12151C]">{item.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 07 – CUSTOM SCHOOL PACKAGES BANNER */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-6">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#12151C] to-gray-900 text-white relative overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0077F5]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="lg:col-span-8 space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-[#0077F5] text-xs font-bold uppercase">
              <Building2 className="w-3.5 h-3.5" /> Enterprise & Large Institutions
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Need a Customized School Management Package?
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
              Every institution has different student capacities and management requirements. If your school has more than 800 students or requires additional account capacity, our team can help you choose a suitable subscription. Tell us about your institution and receive a customized pricing proposal.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 relative z-10">
            <button 
              onClick={() => router.push('/contact')}
              className="w-full py-4 bg-[#0077F5] hover:bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-[#0077F5]/30 transition-all text-xs sm:text-sm text-center"
            >
              Request a Custom Quote
            </button>
            <button 
              onClick={() => router.push('/contact')}
              className="w-full py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-2xl border border-gray-700 transition-all text-xs sm:text-sm text-center"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 08 – FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 bg-gray-50/50 border-t border-gray-200/60">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#12151C]">
              Frequently Asked Questions <span className="text-[#0077F5]">About Pricing</span>
            </h2>
            <p className="text-gray-600 text-sm">
              Got questions about DevNixEdu pricing plans? Find clear answers below.
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

      {/* SECTION 09 – FINAL CALL TO ACTION */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6 p-8 sm:p-14 bg-gradient-to-b from-[#12151C] to-gray-900 text-white rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0077F5]/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Start Managing Your School <span className="text-[#0077F5]">Smarter Today</span>
          </h2>

          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Choose a DevNixEdu subscription that fits your school's needs. Organize student records, manage attendance, track fees, and maintain examination information through one centralized school management system.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => router.push('/login')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0077F5] hover:bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-[#0077F5]/30 transition-all text-xs sm:text-sm group"
            >
              <span>Choose Your Plan</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button 
              onClick={() => router.push('/contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-2xl border border-gray-700 transition-all text-xs sm:text-sm"
            >
              <span>Request a Demo</span>
            </button>
          </div>

          <p className="text-xs text-gray-400 pt-2">
            Need help selecting a package? <span className="text-[#0077F5] underline cursor-pointer" onClick={() => router.push('/contact')}>Contact our team</span>.
          </p>
        </div>
      </section>

      {/* Footer Integration */}
      <Footer />

    </main>
  );
}