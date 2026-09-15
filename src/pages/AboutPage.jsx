import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Globe, HeartHandshake, Leaf, Rocket, ShieldCheck, Target, Cpu, Users, MapPin, Building2, ShoppingBag } from 'lucide-react';

const coreValues = [
  { icon: <ShieldCheck className="w-8 h-8 text-white" />, title: 'Trust & Authenticity', desc: 'Long-term trust is more valuable than short-term sales. We build trust through transparency and responsible practices.', color: 'from-[#0A3254] to-[#145C8E]' },
  { icon: <Cpu className="w-8 h-8 text-white" />, title: 'Technology & AI', desc: 'Making commerce easier, smarter and more useful. AI-powered capabilities where it creates genuine value.', color: 'from-brand-orange to-yellow-500' },
  { icon: <Users className="w-8 h-8 text-white" />, title: 'Empowering Sellers', desc: 'A digital opportunity for local businesses. From local markets to national and global reach.', color: 'from-[#022A21] to-[#054335]' },
  { icon: <Leaf className="w-8 h-8 text-white" />, title: 'Well-being', desc: 'Bringing together Commerce, Technology, Well-being, and Human Values for personal inner balance.', color: 'from-[#1B5E20] to-[#4CAF50]' }
];

const categories = [
  { name: 'Traditional & Cultural', desc: 'Regional specialties and cultural products' },
  { name: 'Handlooms & Textiles', desc: 'Sarees and traditional weaving' },
  { name: 'Handicrafts', desc: 'Authentic handcrafted items' },
  { name: 'Agriculture & Local', desc: 'Rice, pulses, natural oils, and grains' },
  { name: 'Regional Natural Stone', desc: 'Bethamcherla Granite and local stone' },
  { name: 'Spiritual & Well-being', desc: 'Products for wellness and mindfulness' },
  { name: 'Lifestyle & Everyday', desc: 'Modern living and everyday needs' },
];

export function AboutPage() {
  return (
    <div className="bg-[#fcfcfc] min-h-screen pb-20 md:pb-0 font-sans text-gray-800">
      <Header variant="back" title="About Us" />

      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[550px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80" 
          alt="ULMGH-369 Ecosystem" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#022A21]/95 via-[#022A21]/80 to-transparent flex items-center">
          <div className="max-w-[1400px] w-full mx-auto px-6 md:px-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white font-semibold text-sm tracking-widest uppercase mb-6 backdrop-blur-sm">
                Redefining Local Commerce
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight font-serif">
                Local to <span className="text-brand-orange">Global</span>
              </h1>
              <p className="text-gray-200 text-xl md:text-2xl font-light mb-4">
                Connecting People. Empowering Businesses. Enriching Lives.
              </p>
              <p className="text-gray-300 text-lg max-w-2xl">
                A new-generation digital marketplace connecting authentic local products, trusted businesses, artisans, farmers, and entrepreneurs through technology.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-16 md:py-24 space-y-24">
        
        {/* Our Story & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#022A21] leading-tight font-serif">
              Not Just Another E-commerce Website.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our vision is to build a trusted digital ecosystem where local entrepreneurs can showcase their products and reach customers beyond geographical boundaries. Customers should be able to discover authentic products, trusted sellers, and competitive prices through a convenient digital platform.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-semibold text-[#022A21]">
              Every local product has a story. Every entrepreneur has potential. Every community deserves access to a trusted digital marketplace.
            </p>
            <div className="flex flex-col gap-3 mt-6">
              <div className="flex items-center gap-3 text-gray-700">
                <Target className="w-6 h-6 text-brand-orange" />
                <span className="text-lg font-medium">Bring the local seller closer to the global customer.</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4 h-[500px]"
          >
            <div className="space-y-4 h-full">
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80" alt="Agriculture" className="w-full h-[60%] object-cover rounded-2xl shadow-md" />
              <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80" alt="Technology" className="w-full h-[35%] object-cover rounded-2xl shadow-md" />
            </div>
            <div className="space-y-4 h-full pt-12">
              <img src="https://thumbs.dreamstime.com/b/weaver-using-hand-loom-making-sari-25962390.jpg" alt="Handlooms" className="w-full h-[45%] object-cover rounded-2xl shadow-md" />
              <img src="https://img.magnific.com/free-vector/shopping-e-commerce-concept-isometric-poster_1284-15256.jpg?semt=ais_hybrid&w=740&q=80" alt="Local Commerce" className="w-full h-[50%] object-cover rounded-2xl shadow-md" />
            </div>
          </motion.div>
        </div>

        {/* What We Offer / Multi-Category Focus */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-10 md:p-16 border border-gray-100 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#022A21] mb-6 font-serif">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mb-12">
              ULMGH-369 is envisioned as a multi-category digital marketplace, connecting customers with a diverse range of high-quality authentic products and businesses.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-brand-orange/50 transition-colors">
                  <h4 className="text-lg font-bold text-[#022A21] mb-2">{cat.name}</h4>
                  <p className="text-sm text-gray-600">{cat.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-[#022A21] to-[#054335] rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-bold mb-2 flex items-center gap-2"><MapPin className="w-5 h-5 text-brand-orange"/> Spotlight: Regional Natural Stone</h4>
                <p className="text-gray-200">
                  Recognizing the importance of regional industries, we create opportunities for renowned natural stone and granite resources from the Rayalaseema region (including Bethamcherla) to reach customers globally.
                </p>
              </div>
              <div className="hidden md:block shrink-0 text-right text-sm font-semibold tracking-wide text-brand-orange">
                Kurnool & Rayalaseema <br/>↓<br/> Andhra Pradesh <br/>↓<br/> India <br/>↓<br/> Global
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pillars of Ecosystem */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#022A21] mb-4 font-serif">An Ecosystem of Opportunity</h2>
            <p className="text-lg text-gray-600">Technology should create opportunities for every genuine entrepreneur. We aim to empower small and medium businesses, farmers, artisans, and manufacturers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-brand-orange/40 hover:shadow-xl shadow-md transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${val.color} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-[#022A21] mb-3 font-serif">{val.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Founder Message */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-16 border border-gray-200 text-center max-w-4xl mx-auto"
        >
          <Building2 className="w-12 h-12 text-brand-orange mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#022A21] mb-8 font-serif">Founder's Message</h2>
          <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-8 font-serif">
            "I believe that every local entrepreneur has the potential to reach a much larger market when the right technology, trust and opportunity come together."
          </blockquote>
          <p className="text-lg text-gray-600 mb-6">
            Whether it is a small entrepreneur, farmer, artisan, weaver, manufacturer or emerging business, everyone should have an opportunity to participate in the digital economy. With trust, technology, determination and continuous innovation, small steps can create a much larger impact.
          </p>
          <div className="font-bold text-[#022A21] text-lg">
            K. Laxmi – Umamaheswar
            <div className="text-sm font-medium text-gray-500 mt-1">Founder – ULMGH-369</div>
          </div>
        </motion.div>

        {/* The Promise Footer */}
        <div className="text-center pb-8 border-t border-gray-200 pt-16">
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#022A21] mb-4 font-serif">Our Promise</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            We are not building only an e-commerce website. We are building an ecosystem of opportunity where local businesses can grow, customers can shop with confidence, and local opportunities become global opportunities.
          </p>
          <div className="inline-block p-4 rounded-xl bg-[#022A21] text-white">
            <span className="font-bold tracking-widest text-brand-orange">ULMGH-369</span> – Local to Global
          </div>
        </div>

      </div>
    </div>
  );
}
