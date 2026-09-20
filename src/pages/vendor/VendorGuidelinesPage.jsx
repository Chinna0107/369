import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ShieldCheck, Download } from 'lucide-react';

export function VendorGuidelinesPage() {
  return (
    <div className="bg-[#fcfcfc] min-h-screen flex flex-col font-sans text-gray-800">
      <Header variant="back" title="Vendor Guidelines" />

      <main className="flex-1 max-w-[1000px] w-full mx-auto px-6 py-12 md:py-16">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-orange/10 mb-6">
            <ShieldCheck className="w-8 h-8 text-brand-orange" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#022A21] mb-4 font-serif">
            Vendor Registration & Operational Guidelines
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The purpose of these guidelines is to ensure that every vendor understands their responsibilities regarding stock accuracy, product quality, timely dispatch, correct order fulfilment, packaging, customer service and responsible business practices from the time of registration.
          </p>
        </div>

        <div className="space-y-8">
          
          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#022A21] mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center text-sm shrink-0">1</span>
              Stock Accuracy & Availability
            </h3>
            <p className="text-gray-600 leading-relaxed ml-11">
              Vendors must fulfil orders using the exact stock and product specifications displayed on the platform. If a product becomes unavailable, the vendor must immediately update it as “Out of Stock.”
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#022A21] mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center text-sm shrink-0">2</span>
              Quality Assurance
            </h3>
            <p className="text-gray-600 leading-relaxed ml-11">
              Vendors must maintain the quality represented on the platform and inspect products before dispatch to ensure they are free from defects or damage.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#022A21] mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center text-sm shrink-0">3</span>
              Timely Order Processing & Dispatch
            </h3>
            <p className="text-gray-600 leading-relaxed ml-11">
              Vendors should verify and process every order promptly and hand it over to the designated delivery/logistics partner within the agreed SLA timeframe.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#022A21] mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center text-sm shrink-0">4</span>
              Correct Product Shipment
            </h3>
            <p className="text-gray-600 leading-relaxed ml-11">
              The product, size, colour, quantity, variant and specifications supplied must match the customer's order.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#022A21] mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center text-sm shrink-0">5</span>
              Secure & Professional Packaging
            </h3>
            <p className="text-gray-600 leading-relaxed ml-11">
              Products must be packed properly using suitable protective materials to minimize damage during transportation.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#022A21] mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center text-sm shrink-0">6</span>
              Accurate Product Information
            </h3>
            <p className="text-gray-600 leading-relaxed ml-11">
              Product name, description, images, dimensions, weight, colour, material, specifications, variants and other relevant information must accurately represent the actual product.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#022A21] mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center text-sm shrink-0">7</span>
              Genuine & Legally Permitted Products
            </h3>
            <p className="text-gray-600 leading-relaxed ml-11">
              Vendors must list and sell genuine and legally permitted products. Counterfeit, duplicate or unauthorized products should not be permitted.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#022A21] mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center text-sm shrink-0">8</span>
              Returns & Replacements
            </h3>
            <p className="text-gray-600 leading-relaxed ml-11">
              Vendors must cooperate with the applicable ULMGH-369 return, replacement and refund policies, particularly in cases of damaged, incorrect or quality-mismatched products.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#022A21] mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center text-sm shrink-0">9</span>
              Communication & Responsiveness
            </h3>
            <p className="text-gray-600 leading-relaxed ml-11">
              Vendors should respond promptly and professionally to customer queries, ULMGH-369 support requests and administrative communications.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#022A21] mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center text-sm shrink-0">10</span>
              Customer Data Privacy
            </h3>
            <p className="text-gray-600 leading-relaxed ml-11">
              Customer information obtained through ULMGH-369 must be used only for legitimate order fulfilment and related customer service and must not be misused.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#022A21] mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center text-sm shrink-0">11</span>
              Fair & Transparent Business Practices
            </h3>
            <p className="text-gray-600 leading-relaxed ml-11">
              Vendors must provide truthful product information and transparent pricing and must not engage in misleading or deceptive practices.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#022A21] mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center text-sm shrink-0">12</span>
              Legal & Regulatory Compliance
            </h3>
            <p className="text-gray-600 leading-relaxed ml-11">
              Vendors are responsible for complying with applicable laws, tax requirements, licences and other regulatory requirements relating to their products and business.
            </p>
          </section>

        </div>

        <div className="mt-16 text-center border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-bold text-[#022A21] mb-4 font-serif">ULMGH-369</h2>
          <p className="text-lg text-gray-600 font-medium italic mb-2">
            “Your Product. Your Quality. Your Responsibility. Our Shared Trust.”
          </p>
          <div className="text-brand-orange font-bold uppercase tracking-widest mb-6">Local to Global</div>
          
          <button onClick={() => window.print()} className="inline-flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors shadow-sm font-medium mx-auto">
            <Download className="w-4 h-4" /> Download as PDF
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
