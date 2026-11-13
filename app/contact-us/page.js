'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Sparkles, 
  Building2, 
  HelpCircle, 
  ChevronDown 
} from 'lucide-react';
import { FaWhatsapp, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

export default function ContactPage() {
  const router = useRouter();

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    fullName: '',
    schoolName: '',
    email: '',
    phone: '',
    designation: 'School Owner',
    enquiryType: 'General Enquiry',
    students: 'Below 150 Students',
    message: '',
    privacyConsent: false
  });
  const [contactStatus, setContactStatus] = useState(null); // 'success' | 'error' | null

  // Demo Form State
  const [demoForm, setDemoForm] = useState({
    fullName: '',
    schoolName: '',
    email: '',
    phone: '',
    city: '',
    students: 'Below 150',
    teachers: 'Below 10',
    demoDate: '',
    demoTime: 'Morning',
    features: [],
    additionalNotes: ''
  });
  const [demoStatus, setDemoStatus] = useState(null); // 'success' | 'error' | null

  // FAQ state
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Handle Contact Form Submit
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (contactForm.privacyConsent) {
      setContactStatus('success');
      setContactForm({
        fullName: '',
        schoolName: '',
        email: '',
        phone: '',
        designation: 'School Owner',
        enquiryType: 'General Enquiry',
        students: 'Below 150 Students',
        message: '',
        privacyConsent: false
      });
    } else {
      setContactStatus('error');
    }
  };

  // Handle Demo Form Submit
  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setDemoStatus('success');
    setDemoForm({
      fullName: '',
      schoolName: '',
      email: '',
      phone: '',
      city: '',
      students: 'Below 150',
      teachers: 'Below 10',
      demoDate: '',
      demoTime: 'Morning',
      features: [],
      additionalNotes: ''
    });
  };

  // Toggle Feature selection in Demo Form
  const handleFeatureToggle = (feat) => {
    setDemoForm(prev => {
      const exists = prev.features.includes(feat);
      if (exists) {
        return { ...prev, features: prev.features.filter(f => f !== feat) };
      } else {
        return { ...prev, features: [...prev.features, feat] };
      }
    });
  };

  const contactChannels = [
    {
      title: "General Enquiries",
      desc: "For general questions about DevNixEdu, our company, and school management solutions.",
      email: "support@devnixedu.com",
      icon: <Mail className="w-5 h-5 text-[#0077F5]" />
    },
    {
      title: "Sales & Pricing",
      desc: "Interested in our subscription packages or customized school management solutions?",
      email: "sales@devnixedu.com",
      icon: <Building2 className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "Technical Support",
      desc: "Need assistance with your account or an existing software issue?",
      email: "help@devnixedu.com",
      icon: <AlertCircle className="w-5 h-5 text-emerald-600" />
    },
    {
      title: "WhatsApp Support",
      desc: "Connect with our team through WhatsApp for product enquiries and assistance.",
      phone: "+92 319 8018471",
      icon: <FaWhatsapp className="w-5 h-5 text-emerald-500" />
    }
  ];

  const whyContact = [
    { title: "Personalized Assistance", desc: "Get information according to your school's size, requirements, and management needs." },
    { title: "Product Guidance", desc: "Understand the features and capabilities of DevNixEdu before selecting a subscription." },
    { title: "Flexible Subscription Information", desc: "Explore Basic, Standard, Premium, and customized pricing options." },
    { title: "Demo Assistance", desc: "See how the platform works and understand its core management modules." },
    { title: "Customer Support", desc: "Reach the appropriate team for product-related questions and assistance." }
  ];

  const faqs = [
    { q: "How can I contact DevNixEdu?", a: "You can contact our team through the website contact form, official email address, phone number, or WhatsApp." },
    { q: "How can I request a DevNixEdu demonstration?", a: "Fill out the Request a Demo form with your name, school information, contact details, and requirements. Our team will contact you to arrange a demonstration." },
    { q: "Can I get information about DevNixEdu pricing?", a: "Yes. You can visit our Pricing page or submit a sales enquiry to learn about available subscription packages." },
    { q: "Can I request a customized school management package?", a: "Yes. Schools with additional student capacity or specific requirements can contact our sales team to discuss customized subscription options." },
    { q: "How can existing customers get technical support?", a: "Existing customers can contact the technical support team through the designated support email or official support channel." },
    { q: "Can I contact DevNixEdu for business partnerships?", a: "Yes. You can submit a partnership enquiry through our contact form." },
    { q: "What information should I provide when requesting a demo?", a: "We recommend providing your name, school name, contact details, student capacity, and the features you would like to explore." },
    { q: "When will I receive a response?", a: "Our team will respond during official business hours. The expected response time depends on the nature of your enquiry and team availability." },
    { q: "Does DevNixEdu support schools in Pakistan?", a: "DevNixEdu is being positioned for educational institutions in Pakistan. Contact our team to discuss your school's requirements and service availability." }
  ];

  return (
    <main className="min-h-screen bg-white text-[#12151C] selection:bg-blue-100 selection:text-[#0077F5]">
      
      {/* Navbar Integration */}
      <Navbar />

      {/* SECTION 1: PAGE HEADING */}
      <section className="relative pt-24 pb-16 lg:pt-16 lg:pb-12 bg-gradient-to-b from-gray-50/80 to-white overflow-hidden border-b border-gray-100">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-blue-50/70 rounded-full blur-3xl pointer-events-none -z-10"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0077F5] text-xs font-bold tracking-wider uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> Get in Touch with DevNixEdu
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#12151C] leading-[1.12]">
            We're Here to Help Your School <span className="text-[#0077F5]">Move Forward.</span>
          </h1>

          <p className="text-gray-800 text-lg sm:text-xl font-bold tracking-tight">
            Have questions about DevNixEdu, our school management software, subscription plans, or product features? Our team is ready to assist you.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            Whether you want to request a product demonstration, discuss pricing, or learn more about our multi-school management platform, we'd love to hear from you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <a 
              href="#demo-form"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0077F5] hover:bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-[#0077F5]/25 transition-all text-sm group"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#contact-form"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-[#12151C] font-bold rounded-2xl border border-gray-300 transition-all text-sm shadow-sm"
            >
              <span>Send Us a Message</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONTACT INFORMATION CARDS */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#12151C]">
            Contact Our <span className="text-[#0077F5]">Team</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Have a question or need assistance? Reach out to the DevNixEdu team through your preferred contact channel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactChannels.map((ch, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  {ch.icon}
                </div>
                <h3 className="text-base font-extrabold text-[#12151C]">{ch.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{ch.desc}</p>
              </div>
              <div className="pt-4 border-t border-gray-100 font-mono text-xs font-bold text-[#0077F5]">
                {ch.email || ch.phone}
              </div>
            </div>
          ))}
        </div>

        {/* Business Hours Card */}
        <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#0077F5] flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-extrabold text-[#12151C]">Business Hours & Time Zone</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Working Days: Monday – Saturday | Hours: 9:00 AM – 6:00 PM</p>
            </div>
          </div>
          <div className="px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-[#0077F5] text-xs font-bold font-mono">
            Pakistan Standard Time (PKT)
          </div>
        </div>
      </section>

      {/* SECTION 3: MAIN CONTACT FORM */}
      <section id="contact-form" className="py-16 bg-gray-50/50 border-t border-b border-gray-200/60">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#12151C]">
              Send Us a <span className="text-[#0077F5]">Message</span>
            </h2>
            <p className="text-gray-600 text-sm">
              We'd love to hear from you. Fill out the form below and tell us how we can help.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200/80 shadow-xl">
            {contactStatus === 'success' && (
              <div className="mb-8 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3 text-xs sm:text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Thank you for contacting DevNixEdu! Your enquiry has been submitted successfully. Our team will contact you as soon as possible.</span>
              </div>
            )}

            {contactStatus === 'error' && (
              <div className="mb-8 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 flex items-center gap-3 text-xs sm:text-sm font-semibold">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>Something went wrong while submitting your enquiry. Please make sure you agree to the privacy policy and fill in all required fields.</span>
              </div>
            )}

            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#12151C]">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter your full name."
                    value={contactForm.fullName}
                    onChange={(e) => setContactForm({...contactForm, fullName: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:border-[#0077F5]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#12151C]">School / Institution Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter your school or institution name."
                    value={contactForm.schoolName}
                    onChange={(e) => setContactForm({...contactForm, schoolName: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:border-[#0077F5]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#12151C]">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    placeholder="Enter your official email address."
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:border-[#0077F5]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#12151C]">Phone Number *</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="Enter your contact number with country code."
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:border-[#0077F5]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#12151C]">Your Designation *</label>
                  <select 
                    value={contactForm.designation}
                    onChange={(e) => setContactForm({...contactForm, designation: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:border-[#0077F5] bg-white"
                  >
                    <option>School Owner</option>
                    <option>Principal</option>
                    <option>School Administrator</option>
                    <option>Teacher</option>
                    <option>Accountant</option>
                    <option>IT Administrator</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#12151C]">Subject / Enquiry Type *</label>
                  <select 
                    value={contactForm.enquiryType}
                    onChange={(e) => setContactForm({...contactForm, enquiryType: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:border-[#0077F5] bg-white"
                  >
                    <option>General Enquiry</option>
                    <option>Request a Demo</option>
                    <option>Pricing Information</option>
                    <option>Sales Enquiry</option>
                    <option>Technical Support</option>
                    <option>Customized Package</option>
                    <option>Business Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#12151C]">Number of Students *</label>
                  <select 
                    value={contactForm.students}
                    onChange={(e) => setContactForm({...contactForm, students: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:border-[#0077F5] bg-white"
                  >
                    <option>Below 150 Students</option>
                    <option>150–400 Students</option>
                    <option>401–800 Students</option>
                    <option>801–1500 Students</option>
                    <option>More than 1500 Students</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#12151C]">Your Message *</label>
                <textarea 
                  rows="4"
                  required
                  placeholder="Tell us about your requirements or how we can assist you."
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:border-[#0077F5]"
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="privacy"
                  required
                  checked={contactForm.privacyConsent}
                  onChange={(e) => setContactForm({...contactForm, privacyConsent: e.target.checked})}
                  className="mt-1 w-4 h-4 accent-[#0077F5] rounded cursor-pointer"
                />
                <label htmlFor="privacy" className="text-xs text-gray-600 cursor-pointer">
                  I agree to the Privacy Policy and consent to being contacted by the DevNixEdu team regarding my enquiry. *
                </label>
              </div>

              <div>
                <button 
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-[#0077F5] hover:bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-[#0077F5]/25 transition-all text-xs sm:text-sm flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 4: REQUEST A DEMO FORM */}
      <section id="demo-form" className="py-16 lg:py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0077F5] text-xs font-bold uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> Live Demonstration
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#12151C]">
            Experience DevNixEdu in Action
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Request a personalized product demonstration and explore the essential tools available for managing your school.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-gray-200/80 shadow-xl">
          {demoStatus === 'success' && (
            <div className="mb-8 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3 text-xs sm:text-sm font-semibold">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Thank you for your interest in DevNixEdu! Your demo request has been received. Our team will contact you to arrange a suitable demonstration.</span>
            </div>
          )}

          <form onSubmit={handleDemoSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#12151C]">Full Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="Enter your full name."
                  value={demoForm.fullName}
                  onChange={(e) => setDemoForm({...demoForm, fullName: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:border-[#0077F5]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#12151C]">School Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="Enter your school name."
                  value={demoForm.schoolName}
                  onChange={(e) => setDemoForm({...demoForm, schoolName: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:border-[#0077F5]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#12151C]">Email Address *</label>
                <input 
                  type="email" 
                  required
                  placeholder="Official email"
                  value={demoForm.email}
                  onChange={(e) => setDemoForm({...demoForm, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:border-[#0077F5]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#12151C]">Phone Number *</label>
                <input 
                  type="tel" 
                  required
                  placeholder="Phone with country code"
                  value={demoForm.phone}
                  onChange={(e) => setDemoForm({...demoForm, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:border-[#0077F5]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#12151C]">City *</label>
                <input 
                  type="text" 
                  required
                  placeholder="Your city"
                  value={demoForm.city}
                  onChange={(e) => setDemoForm({...demoForm, city: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:border-[#0077F5]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#12151C]">Students *</label>
                <select 
                  value={demoForm.students}
                  onChange={(e) => setDemoForm({...demoForm, students: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:border-[#0077F5] bg-white"
                >
                  <option>Below 150</option>
                  <option>150–400</option>
                  <option>401–800</option>
                  <option>801–1500</option>
                  <option>More than 1500</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#12151C]">Teachers (Optional)</label>
                <select 
                  value={demoForm.teachers}
                  onChange={(e) => setDemoForm({...demoForm, teachers: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:border-[#0077F5] bg-white"
                >
                  <option>Below 10</option>
                  <option>10–25</option>
                  <option>26–50</option>
                  <option>51–100</option>
                  <option>More than 100</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#12151C]">Preferred Date</label>
                <input 
                  type="date"
                  value={demoForm.demoDate}
                  onChange={(e) => setDemoForm({...demoForm, demoDate: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:border-[#0077F5]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#12151C]">Preferred Time</label>
                <select 
                  value={demoForm.demoTime}
                  onChange={(e) => setDemoForm({...demoForm, demoTime: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:border-[#0077F5] bg-white"
                >
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </div>
            </div>

            {/* Checkboxes for features */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#12151C]">Features You Want to Explore (Optional)</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {[
                  "Student Management",
                  "Teacher Management",
                  "Attendance Management",
                  "Fee Management",
                  "Examination & Results",
                  "Classes & Sections",
                  "Reports & Dashboard",
                  "Multi-School Management"
                ].map((feat, idx) => (
                  <div 
                    key={idx}
                    onClick={() => handleFeatureToggle(feat)}
                    className={`p-3 rounded-xl border text-xs font-semibold cursor-pointer transition flex items-center gap-2 ${demoForm.features.includes(feat) ? 'bg-blue-50 border-[#0077F5] text-[#0077F5]' : 'bg-gray-50 border-gray-200 text-gray-700'}`}
                  >
                    <input 
                      type="checkbox" 
                      checked={demoForm.features.includes(feat)} 
                      onChange={() => {}} 
                      className="accent-[#0077F5] cursor-pointer"
                    />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#12151C]">Additional Requirements (Optional)</label>
              <textarea 
                rows="3"
                placeholder="Tell us about your school's requirements."
                value={demoForm.additionalNotes}
                onChange={(e) => setDemoForm({...demoForm, additionalNotes: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:border-[#0077F5]"
              ></textarea>
            </div>

            <div>
              <button 
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-[#0077F5] hover:bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-[#0077F5]/25 transition-all text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <span>Request My Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* SECTION 5: SALES & SUPPORT CONTACT SECTION */}
      <section className="py-16 bg-gray-50/50 border-t border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#12151C]">
              How Can We <span className="text-[#0077F5]">Help You?</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Connect directly with the right department based on your institutional needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-base font-extrabold text-[#12151C]">Sales Enquiries</h3>
                <p className="text-gray-600 text-xs leading-relaxed">Looking for the right school management software? Our sales team can help you understand subscription packages and pricing.</p>
              </div>
              <button onClick={() => router.push('/pricing')} className="text-xs font-bold text-[#0077F5] hover:underline flex items-center gap-1">
                <span>Contact Sales</span> <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-base font-extrabold text-[#12151C]">Product Demonstration</h3>
                <p className="text-gray-600 text-xs leading-relaxed">Want to see how DevNixEdu works before making a decision? Request a personalized product demonstration.</p>
              </div>
              <a href="#demo-form" className="text-xs font-bold text-[#0077F5] hover:underline flex items-center gap-1">
                <span>Book a Demo</span> <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-base font-extrabold text-[#12151C]">Technical Support</h3>
                <p className="text-gray-600 text-xs leading-relaxed">Already using DevNixEdu? Contact our support team for assistance with account access and technical issues.</p>
              </div>
              <a href="#contact-form" className="text-xs font-bold text-[#0077F5] hover:underline flex items-center gap-1">
                <span>Get Technical Support</span> <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-base font-extrabold text-[#12151C]">Customized Packages</h3>
                <p className="text-gray-600 text-xs leading-relaxed">Need more student capacity, teacher accounts, or a customized subscription plan?</p>
              </div>
              <a href="#contact-form" className="text-xs font-bold text-[#0077F5] hover:underline flex items-center gap-1">
                <span>Request Custom Pricing</span> <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-base font-extrabold text-[#12151C]">Business Partnerships</h3>
                <p className="text-gray-600 text-xs leading-relaxed">Interested in collaborating with DevNix Pro or discussing business opportunities related to DevNixEdu?</p>
              </div>
              <a href="#contact-form" className="text-xs font-bold text-[#0077F5] hover:underline flex items-center gap-1">
                <span>Discuss Partnership</span> <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY CONTACT DEVNIXEDU? */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#12151C]">
            We're Ready to <span className="text-[#0077F5]">Support Your School</span>
          </h2>
          <p className="text-gray-600 text-sm">
            Everything you need for a smooth and transparent onboarding experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {whyContact.map((item, idx) => (
            <div key={idx} className="p-6 rounded-3xl border border-gray-200 bg-white shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0077F5] flex items-center justify-center font-bold text-sm">
                0{idx + 1}
              </div>
              <h3 className="text-sm font-extrabold text-[#12151C]">{item.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7 & 8: OFFICE LOCATION & WHATSAPP BANNER */}
      <section className="py-16 bg-gray-50/50 border-t border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Office Location */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0077F5] flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-[#12151C] mb-1">Visit Our Office</h3>
              <p className="text-gray-600 text-xs sm:text-sm">We'd be happy to connect with you and discuss your school's digital management requirements.</p>
            </div>
            <div className="space-y-2 text-xs sm:text-sm text-gray-700">
              <div><strong className="text-[#12151C]">Company:</strong> DevNix Pro</div>
              <div><strong className="text-[#12151C]">Product:</strong> DevNixEdu – School Management Software</div>
              <div><strong className="text-[#12151C]">Office Address:</strong> Orangi Town, Karachi, Pakistan</div>
              <div><strong className="text-[#12151C]">City:</strong> Karachi</div>
              <div><strong className="text-[#12151C]">Country:</strong> Pakistan</div>
              <div><strong className="text-[#12151C]">Business Hours:</strong> Monday – Saturday (9:00 AM – 6:00 PM)</div>
            </div>
          </div>

          {/* WhatsApp Support Banner */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#12151C] to-gray-900 text-white relative overflow-hidden shadow-2xl space-y-6">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <FaWhatsapp className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-extrabold text-white">Need Quick Assistance?</h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Have a quick question about DevNixEdu? Connect with our team through WhatsApp for product enquiries, pricing information, and general assistance. Our team will guide you towards the right solution for your school's requirements.
              </p>
            </div>

            <div>
              <a 
                href="https://whatsapp.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl shadow-lg transition-all text-xs sm:text-sm"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Chat With Us on WhatsApp</span>
              </a>
              <p className="text-[11px] text-gray-400 mt-2">Contact us during our business hours for assistance.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 9: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 lg:py-24 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#12151C]">
            Frequently Asked <span className="text-[#0077F5]">Questions</span>
          </h2>
          <p className="text-gray-600 text-sm">
            Find answers to common questions about contacting DevNixEdu and requesting demos.
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
      </section>

      {/* SECTION 10: FINAL CALL TO ACTION */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6 p-8 sm:p-14 bg-gradient-to-b from-[#12151C] to-gray-900 text-white rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0077F5]/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Let's Build a Smarter School <span className="text-[#0077F5]">Management Experience</span>
          </h2>

          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Every school deserves an organized and efficient way to manage its daily academic and administrative activities. Connect with DevNixEdu and discover how a centralized school management platform can support your institution. Whether you need product information, pricing guidance, a personalized demonstration, or technical assistance, our team is here to help.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="#demo-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0077F5] hover:bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-[#0077F5]/30 transition-all text-xs sm:text-sm group"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a 
              href="#contact-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-2xl border border-gray-700 transition-all text-xs sm:text-sm"
            >
              <span>Contact Our Team</span>
            </a>
          </div>

          <p className="text-xs text-gray-400 pt-2 font-medium">
            DevNixEdu – A Smarter Way to Manage Your School.
          </p>
        </div>
      </section>

      {/* Footer Integration */}
      <Footer />

    </main>
  );
}