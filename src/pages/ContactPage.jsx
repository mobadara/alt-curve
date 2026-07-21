import { useState, useRef, useEffect } from 'react';
import { 
  FaEnvelope, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaCheckCircle, 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaComments, 
  FaTimes, 
  FaRobot,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa';

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  // Chatbot State Engine
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello! I am AltCurve AI Assistant. How can I help you today regarding our pathways, 90% scholarship vouchers, or enrollment?'
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);

  // Auto-scroll chat to latest message
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isTyping]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputQuery.trim()) return;

    const userText = inputQuery.trim();
    setChatMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setInputQuery('');
    setIsTyping(true);

    // Automated Chat Bot Intelligence Logic
    setTimeout(() => {
      let botResponse = "Thank you for reaching out! A human advisor from our admissions team can also join us. You can email hello@altcurve.academy directly.";
      const queryLower = userText.toLowerCase();

      if (queryLower.includes('scholarship') || queryLower.includes('voucher') || queryLower.includes('cost') || queryLower.includes('price')) {
        botResponse = "Our Inaugural Launch Cohort offers a 90% scholarship voucher! You can request one directly on our Scholarships page. Full tuition is reduced from $350 USD to just $35 USD.";
      } else if (queryLower.includes('pathway') || queryLower.includes('track') || queryLower.includes('course') || queryLower.includes('program')) {
        botResponse = "We offer two primary pathways: 'Foundation Builders' (ages 6–11) and 'Career Paths' (ages 12–18) covering Software Architecture, Data & Intelligence, Systems & Hardware, and HealthTech.";
      } else if (queryLower.includes('age') || queryLower.includes('child') || queryLower.includes('kid')) {
        botResponse = "Our curriculum is tailored for learners aged 6 to 18. Parents can manage multiple student profiles under a single master account!";
      }

      setChatMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <main className="grow bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 relative min-h-screen">
      <div className="mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-yale-blue text-xs font-bold uppercase tracking-wider mb-4">
            Get in Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-yale-blue tracking-tight">
            We'd Love to Hear From You
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about our academic pathways, launch scholarships, or partnership opportunities? Reach out via phone, WhatsApp, email, or chat with our AI assistant.
          </p>
        </div>

        {/* Regional Phone & WhatsApp Action Row */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* US Region Contact */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-500 bg-orange-50 px-2.5 py-1 rounded">
                  North America & Global
                </span>
                <FaMapMarkerAlt className="text-slate-400 text-sm" />
              </div>
              <h3 className="font-serif text-xl font-bold text-yale-blue">United States Office</h3>
              <p className="text-xs text-slate-500 mt-1">Wyoming, USA • Admissions & Partnerships</p>
              <p className="text-base font-bold text-slate-800 mt-3">+1 (307) 201-9870</p>
            </div>
            
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-100">
              <a
                href="tel:+13072019870"
                className="flex-1 py-2.5 px-4 bg-yale-blue hover:bg-orange-500 text-white rounded-md text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <FaPhoneAlt /> Call Line
              </a>
              <a
                href="https://wa.me/13072019870"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <FaWhatsapp className="text-sm" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Nigeria/Africa Region Contact */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-yale-blue bg-blue-50 px-2.5 py-1 rounded">
                  West Africa Regional Hub
                </span>
                <FaMapMarkerAlt className="text-slate-400 text-sm" />
              </div>
              <h3 className="font-serif text-xl font-bold text-yale-blue">Nigeria Regional Center</h3>
              <p className="text-xs text-slate-500 mt-1">Ibadan & Lagos, Nigeria • Student Support</p>
              <p className="text-base font-bold text-slate-800 mt-3">+234 806 011 1429</p>
            </div>

            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-100">
              <a
                href="tel:+2348060111429"
                className="flex-1 py-2.5 px-4 bg-yale-blue hover:bg-orange-500 text-white rounded-md text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <FaPhoneAlt /> Call Line
              </a>
              <a
                href="https://wa.me/2348060111429"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <FaWhatsapp className="text-sm" /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Form and Contact Info Matrix */}
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          
          {/* Info Side Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 text-yale-blue rounded-xl flex items-center justify-center shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-yale-blue">Email Support</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Responds within 24 hours</p>
                  <a href="mailto:hello@altcurve.academy" className="text-sm font-semibold text-orange-500 hover:underline mt-1 inline-block">
                    hello@altcurve.academy
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center shrink-0">
                  <FaCalendarAlt />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-yale-blue">1-on-1 Consultation</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Book a virtual meeting</p>
                  <a href="https://calendly.com" target="_blank" rel="noreferrer" className="text-sm font-semibold text-yale-blue hover:underline mt-1 inline-block">
                    Book on Calendly →
                  </a>
                </div>
              </div>

              {/* Social Media Links Block */}
              <div className="pt-4 border-t border-slate-100">
                <h4 className="font-serif font-bold text-yale-blue mb-3 text-sm">Follow Our Social Community</h4>
                <div className="flex items-center gap-3">
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:bg-orange-500 hover:text-white flex items-center justify-center transition-colors cursor-pointer">
                    <FaTwitter />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:bg-yale-blue hover:text-white flex items-center justify-center transition-colors cursor-pointer">
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/mobadara" target="_blank" rel="noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-colors cursor-pointer">
                    <FaGithub />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-colors cursor-pointer">
                    <FaInstagram />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors cursor-pointer">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Main Column */}
          <div className="md:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <FaCheckCircle className="text-5xl text-emerald-500 mx-auto" />
                <h3 className="font-serif text-2xl font-bold text-yale-blue">Message Sent!</h3>
                <p className="text-slate-600 text-sm">Thank you for contacting AltCurve Academy. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-yale-blue mb-4">Send us a Message</h3>
                
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-sm bg-white text-slate-800 text-sm focus:outline-none focus:border-yale-blue"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-sm bg-white text-slate-800 text-sm focus:outline-none focus:border-yale-blue"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Inquiry regarding Systems Track"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-sm bg-white text-slate-800 text-sm focus:outline-none focus:border-yale-blue"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Message</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="How can we assist you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 border border-slate-300 rounded-sm bg-white text-slate-800 text-sm focus:outline-none focus:border-yale-blue"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-yale-blue hover:bg-orange-500 text-white font-semibold text-sm rounded-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Send Message</span>
                  <FaPaperPlane className="text-xs" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Regional Location Maps Section */}
        <div className="mt-16">
          <h2 className="font-serif text-2xl font-bold text-yale-blue text-center mb-8">
            Our Regional Operating Hubs
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* US Map Card */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <h4 className="font-serif font-bold text-yale-blue px-2 mb-2">North America Regional Office</h4>
              <p className="text-xs text-slate-500 px-2 mb-4">Sheridan, Wyoming 82801, United States</p>
              <div className="w-full h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                <iframe
                  title="AltCurve US Office Location"
                  src="https://maps.google.com/maps?q=Sheridan%2C%20Wyoming%2C%20USA&t=&z=11&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>

            {/* Nigeria Map Card */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <h4 className="font-serif font-bold text-yale-blue px-2 mb-2">West Africa Innovation Hub</h4>
              <p className="text-xs text-slate-500 px-2 mb-4">Ibadan North / Bodija, Oyo State, Nigeria</p>
              <div className="w-full h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                <iframe
                  title="AltCurve Nigeria Location"
                  src="https://maps.google.com/maps?q=Bodija%2C%20Ibadan%2C%20Nigeria&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Floating Chatbot Widget Trigger Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-orange-500 hover:bg-yale-blue text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none flex items-center justify-center cursor-pointer"
        aria-label="Toggle AltCurve AI Assistant"
      >
        {isChatOpen ? <FaTimes className="text-2xl" /> : <FaComments className="text-2xl" />}
      </button>

      {/* Interactive AI Assistant Drawer Box */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-full max-w-sm bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[480px] animate-in slide-in-from-bottom-5 duration-200">
          
          {/* Chatbot Header */}
          <div className="bg-yale-blue p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-orange-400 text-lg">
                <FaRobot />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm leading-tight">AltCurve AI Assistant</h4>
                <p className="text-[10px] text-emerald-400 font-medium">● Online | Instant Answers</p>
              </div>
            </div>
            <button 
              onClick={() => setIsChatOpen(false)}
              className="text-slate-300 hover:text-white text-sm cursor-pointer focus:outline-none"
            >
              <FaTimes />
            </button>
          </div>

          {/* Chat Messages Stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 text-xs">
            {chatMessages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.sender === 'user'
                      ? 'bg-yale-blue text-white rounded-br-none'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-xs'
                  }`}
                >
                  <p className="leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-bl-none text-slate-400 italic">
                  AltCurve AI is typing...
                </div>
              </div>
            )}
            <div ref={chatBottomRef} />
          </div>

          {/* Chat Input Field */}
          <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-200 bg-white flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask about scholarships, tracks..."
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              className="flex-1 px-3 py-2 border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-yale-blue"
            />
            <button
              type="submit"
              className="p-2.5 bg-orange-500 hover:bg-yale-blue text-white rounded-xl transition-colors cursor-pointer"
            >
              <FaPaperPlane className="text-xs" />
            </button>
          </form>

        </div>
      )}

    </main>
  );
}

export default ContactPage;