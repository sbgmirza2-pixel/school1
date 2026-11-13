'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle,
  Globe,
  Send
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#12151C] text-gray-400 text-xs sm:text-sm pt-16 pb-8 border-t border-gray-800 relative overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-[#0077F5]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* SECTION 10: Footer Call To Action */}
        <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-gray-900 to-[#1a2234] border border-gray-800 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 text-center lg:text-left">
            <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to Manage Your School Smarter?
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Discover how DevNixEdu can help your institution organize student records, manage attendance, track fees, and simplify academic administration. Start your digital school management journey today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <Link 
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0077F5] hover:bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-[#0077F5]/25 transition-all text-xs sm:text-sm"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-2xl border border-gray-700 transition-all text-xs sm:text-sm"
            >
              <span>Explore Pricing</span>
            </Link>
          </div>
        </div>

        {/* SECTION 6: Newsletter Subscription */}
        <div className="mb-16 p-8 rounded-3xl bg-gray-900/80 border border-gray-800/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-2">
            <h4 className="text-base sm:text-lg font-extrabold text-white">Stay Updated with DevNixEdu</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              Get the latest school management tips, educational technology insights, product updates, and useful resources delivered to your inbox.
            </p>
          </div>
          
          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center gap-3 text-xs sm:text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 text-[#0077F5] shrink-0" />
                <span>Thank you for subscribing to DevNixEdu! You'll receive our latest updates and educational resources.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email Address" 
                  required
                  className="bg-gray-950 border border-gray-800 px-4 py-3.5 rounded-2xl text-white text-xs sm:text-sm focus:outline-none focus:border-[#0077F5] flex-1"
                />
                <button 
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0077F5] hover:bg-blue-600 text-white font-bold rounded-2xl transition-all text-xs sm:text-sm shrink-0"
                >
                  <span>Subscribe Now</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
            <p className="text-[11px] text-gray-500 mt-2">
              Privacy Note: By subscribing, you agree to receive updates from DevNixEdu. You can unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Main Footer Grid (Sections 1, 2, 3, 4, 5, 7, 8, 9) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800/80">
          
          {/* SECTION 1: Main Introduction & Branding (Span 3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 shrink-0">
                <Image 
                  src="/logo.jpg" 
                  alt="DevNixEdu Logo" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain"
                />
              </div>
              <span className="text-base font-extrabold tracking-tight text-white">DevNixEdu</span>
            </div>

            <p className="text-gray-300 text-xs font-bold leading-tight">
              Smarter School Management Starts Here
            </p>

            <p className="text-gray-500 text-xs leading-relaxed">
              DevNixEdu is a multi-school SaaS management platform designed to help educational institutions manage their academic and administrative activities through one centralized system. From student management and teacher records to attendance, fee management, examinations, and reporting, DevNixEdu helps schools move towards smarter digital management.
            </p>

            <div className="pt-2">
              <Link 
                href="/features" 
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0077F5] hover:underline"
              >
                <span>Explore Our Platform</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* SECTION 2: Quick Links (Span 2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold font-mono tracking-wider text-white uppercase">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" className="hover:text-[#0077F5] transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#0077F5] transition">About Us</Link></li>
              <li><Link href="/features" className="hover:text-[#0077F5] transition">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-[#0077F5] transition">Pricing</Link></li>
              <li><Link href="/blog" className="hover:text-[#0077F5] transition">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-[#0077F5] transition">Contact Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#0077F5] transition">Request a Demo</Link></li>
              <li><Link href="/features" className="hover:text-[#0077F5] transition">FAQ</Link></li>
            </ul>
          </div>

          {/* SECTION 3: Our Features (Span 2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold font-mono tracking-wider text-white uppercase">School Features</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/features#student" className="hover:text-[#0077F5] transition">Student Management</Link></li>
              <li><Link href="/features#teacher" className="hover:text-[#0077F5] transition">Teacher Management</Link></li>
              <li><Link href="/features#attendance" className="hover:text-[#0077F5] transition">Attendance Management</Link></li>
              <li><Link href="/features#fee" className="hover:text-[#0077F5] transition">Fee Management</Link></li>
              <li><Link href="/features#exam" className="hover:text-[#0077F5] transition">Examination Management</Link></li>
              <li><Link href="/features#exam" className="hover:text-[#0077F5] transition">Result Management</Link></li>
              <li><Link href="/features#classes" className="hover:text-[#0077F5] transition">Classes & Sections</Link></li>
              <li><Link href="/features#reports" className="hover:text-[#0077F5] transition">School Reports</Link></li>
              <li><Link href="/features#dashboard" className="hover:text-[#0077F5] transition">School Dashboard</Link></li>
              <li><Link href="/features" className="hover:text-[#0077F5] transition">Multi-School Management</Link></li>
            </ul>
          </div>

          {/* SECTION 4 & 8: Resources & Legal (Span 2 Cols) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-3">
              <h4 className="text-xs font-bold font-mono tracking-wider text-white uppercase">Resources</h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="/blog" className="hover:text-[#0077F5] transition">School Management Blog</Link></li>
                <li><Link href="/features" className="hover:text-[#0077F5] transition">Education Tech Insights</Link></li>
                <li><Link href="/contact" className="hover:text-[#0077F5] transition">Help & Support</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold font-mono tracking-wider text-white uppercase">Legal & Policies</h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="/privacy" className="hover:text-[#0077F5] transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-[#0077F5] transition">Terms & Conditions</Link></li>
                <li><Link href="/refund" className="hover:text-[#0077F5] transition">Refund Policy</Link></li>
                <li><Link href="/cookies" className="hover:text-[#0077F5] transition">Cookie Policy</Link></li>
                <li><Link href="/data-protection" className="hover:text-[#0077F5] transition">Data Protection Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* SECTION 5, 7, 9: Contact, Social & Support (Span 3 Cols) */}
          <div className="lg:col-span-3 space-y-5">
            <div className="space-y-3">
              <h4 className="text-xs font-bold font-mono tracking-wider text-white uppercase">Get in Touch</h4>
              <p className="text-gray-500 text-xs">
                Have questions about DevNixEdu? Our team is ready to help you find the right school management solution.
              </p>

              <div className="space-y-2 text-xs">
                <div className="text-gray-300 font-semibold">Company: DevNix Pro</div>
                <div className="text-gray-300 font-semibold">Product: DevNixEdu</div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-3.5 h-3.5 text-[#0077F5] shrink-0" />
                  <span>support@devnixedu.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone className="w-3.5 h-3.5 text-[#0077F5] shrink-0" />
                  <span>+92 319 8018471</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-3.5 h-3.5 text-[#0077F5] shrink-0" />
                  <span>Orangi Town, Karachi, Pakistan (Pakistan)</span>
                </div>
              </div>
            </div>

            {/* SECTION 7: Social Media Links */}
            <div className="space-y-2">
              <h5 className="text-[11px] font-bold text-white uppercase tracking-wider">Follow Us</h5>
              <div className="flex items-center gap-2">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-lg bg-gray-800 hover:bg-[#0077F5] text-white flex items-center justify-center transition text-xs font-bold">Fb</a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-lg bg-gray-800 hover:bg-[#0077F5] text-white flex items-center justify-center transition text-xs font-bold">Ig</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-lg bg-gray-800 hover:bg-[#0077F5] text-white flex items-center justify-center transition text-xs font-bold">In</a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-lg bg-gray-800 hover:bg-[#0077F5] text-white flex items-center justify-center transition text-xs font-bold">Yt</a>
                <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-lg bg-gray-800 hover:bg-[#0077F5] text-white flex items-center justify-center transition text-xs font-bold">Wa</a>
              </div>
            </div>

            {/* SECTION 9: Customer Support Links */}
            <div className="space-y-2">
              <h5 className="text-[11px] font-bold text-white uppercase tracking-wider">Need Assistance?</h5>
              <ul className="space-y-1.5 text-xs">
                <li><Link href="/contact" className="hover:text-[#0077F5] transition">Contact Support & Sales</Link></li>
                <li><Link href="/contact" className="hover:text-[#0077F5] transition">Request a Demo</Link></li>
              </ul>
            </div>

          </div>

        </div>

        {/* SECTION 11: Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>© 2026 DevNixEdu. All Rights Reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-gray-400 font-medium">A Product of DevNix Pro.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <Link href="/privacy" className="hover:text-[#0077F5] transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#0077F5] transition">Terms & Conditions</Link>
            <Link href="/refund" className="hover:text-[#0077F5] transition">Refund Policy</Link>
            <Link href="/cookies" className="hover:text-[#0077F5] transition">Cookie Policy</Link>
            <Link href="/contact" className="hover:text-[#0077F5] transition">Contact Us</Link>
          </div>
        </div>

        {/* Optional Supporting Text */}
        <div className="text-center pt-4 text-[11px] text-gray-600 font-medium">
          Designed to Support Smarter School Management.
        </div>

      </div>
    </footer>
  );
}