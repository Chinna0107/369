import React from 'react';
import { Header } from '../../components/Header';
import { ShieldCheck, FileText, Download } from 'lucide-react';

export function VendorGuidelinesPage() {
  return (
    <div className="bg-[#fcfcfc] min-h-screen pb-20 md:pb-0 font-sans text-gray-800">
      <Header variant="back" title="Vendor Guidelines" />

      <div className="max-w-[1000px] mx-auto px-6 py-12 md:py-16">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-orange/10 mb-6">
            <ShieldCheck className="w-8 h-8 text-brand-orange" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#022A21] mb-4 font-serif">
            Vendor Registration & Operational Guidelines
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The purpose of these guidelines is to establish a trusted, transparent, responsible, and customer-focused multi-vendor marketplace, while ensuring that every vendor understands and accepts their responsibilities before listing and selling products on ULMGH-369.
          </p>
        </div>

        <div className="space-y-12">
          
          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#022A21] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center text-sm">1</span>
              Stock Accuracy & Availability
            </h3>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-600 leading-relaxed">
              <li>Vendors must ensure that the stock quantity and availability displayed on ULMGH-369 are accurate and up to date.</li>
              <li>Vendors must immediately mark products as “Out of Stock” when inventory is unavailable.</li>
              <li>Listing products without available inventory or knowingly accepting orders that cannot be fulfilled should not be permitted.</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#022A21] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center text-sm">2</span>
              Product Quality & Accuracy
            </h3>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-600 leading-relaxed">
              <li>Vendors must supply products that exactly match the description, images, specifications, size, colour, quantity, and other information displayed on the platform.</li>
              <li>Any material difference between the listed product and the delivered product will be the responsibility of the vendor.</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#022A21] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center text-sm">3</span>
              Product Authenticity
            </h3>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-600 leading-relaxed">
              <li>Vendors must list and sell only genuine, lawful, and properly sourced products.</li>
              <li>Counterfeit, duplicate, misleading, prohibited, or unauthorized products must not be listed on ULMGH-369.</li>
              <li>Where applicable, vendors must maintain valid invoices, licences, certificates, brand authorizations, or other supporting documents.</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#022A21] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center text-sm">4</span>
              Order Acceptance & Fulfilment
            </h3>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-600 leading-relaxed">
              <li>Vendors are responsible for accepting and fulfilling customer orders accurately and within the agreed operational timelines.</li>
              <li>Repeated cancellation of confirmed orders due to vendor-side reasons may result in appropriate action under the ULMGH-369 vendor policy.</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#022A21] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center text-sm">5</span>
              Packaging & Dispatch
            </h3>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-600 leading-relaxed">
              <li>Vendors must ensure that products are properly packed and protected before dispatch.</li>
              <li>Products must be handed over to the designated logistics/delivery partner within the agreed dispatch timeline.</li>
              <li>The vendor is responsible for ensuring that the correct product and quantity are packed for every order.</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#022A21] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center text-sm">6</span>
              Returns, Refunds & Customer Complaints
            </h3>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-600 leading-relaxed">
              <li>Vendors must cooperate with ULMGH-369 regarding returns, replacements, refunds, and customer complaints in accordance with the platform's applicable policies.</li>
              <li>Where a return, replacement, or refund is attributable to incorrect, defective, damaged, counterfeit, or materially misrepresented products, the vendor may be held responsible as per the applicable policy and law.</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#022A21] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center text-sm">7</span>
              Pricing & Product Information
            </h3>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-600 leading-relaxed">
              <li>Vendors must provide accurate product pricing, specifications, images, descriptions, applicable taxes, and other required information.</li>
              <li>Any misleading pricing, product information, promotional claim, or representation is prohibited.</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#022A21] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center text-sm">8</span>
              Customer Privacy & Data Protection
            </h3>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-600 leading-relaxed">
              <li>Vendors must protect customer information received through ULMGH-369.</li>
              <li>Customer personal information must be used only for legitimate order fulfilment and related purposes and must not be sold, shared, misused, or retained unlawfully.</li>
              <li>Vendors must comply with applicable data protection and privacy requirements.</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#022A21] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center text-sm">9</span>
              Communication & Responsiveness
            </h3>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-600 leading-relaxed">
              <li>Vendors must maintain accurate contact information and respond to ULMGH-369 communications within the required timeframe.</li>
              <li>Vendors should promptly respond to order-related, customer-service, return, quality, and operational queries.</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#022A21] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center text-sm">10</span>
              Legal & Regulatory Compliance
            </h3>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-600 leading-relaxed">
              <li>Every vendor is responsible for complying with all applicable laws, rules, regulations, tax requirements, product standards, licensing requirements, and other statutory obligations applicable to their business and products.</li>
              <li>ULMGH-369 should have the right to request relevant compliance documents whenever required.</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#022A21] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center text-sm">11</span>
              Vendor Responsibility & Platform Trust
            </h3>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-600 leading-relaxed">
              <li>Every vendor is responsible for the products they list, the information they provide, the quality of the products supplied, and the fulfilment of orders accepted through the platform.</li>
              <li>ULMGH-369 aims to build long-term trust between customers, vendors, delivery partners, and the platform.</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#022A21] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center text-sm">12</span>
              Vendor Acceptance of Guidelines
            </h3>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-600 leading-relaxed">
              <li>Before completing vendor registration and/or activating product listings, the vendor should be required to confirm acceptance of the ULMGH-369 Vendor Registration & Operational Guidelines through a mandatory digital checkbox/acceptance mechanism.</li>
              <li>The vendor should not be permitted to proceed without accepting the applicable guidelines.</li>
            </ul>
          </section>

        </div>

        <div className="mt-16 text-center border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-bold text-[#022A21] mb-4 font-serif">ULMGH-369</h2>
          <p className="text-lg text-gray-600 font-medium italic mb-2">
            Your Product. Your Quality. Your Responsibility. Our Shared Trust.
          </p>
          <div className="text-brand-orange font-bold uppercase tracking-widest mb-6">Local to Global</div>
          
          <button className="inline-flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors shadow-sm font-medium mx-auto">
            <Download className="w-4 h-4" /> Download as PDF
          </button>
        </div>

      </div>
    </div>
  );
}
