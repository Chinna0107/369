import React from 'react';
import { Header } from '../components/Header';
import { 
  Truck, Clock, MapPin, AlertCircle, Package, 
  Boxes, CreditCard, Banknote, Navigation, Info, 
  Headphones, Globe, ShieldAlert, ArrowRightLeft
} from 'lucide-react';

export function ShippingPolicyPage() {
  const policies = [
    {
      id: 1,
      title: "Order Processing & Dispatch",
      icon: <Clock className="w-6 h-6 text-brand-orange" />,
      content: "Vendors should process and dispatch orders within the applicable processing period of 1–2 business days, wherever applicable. Customers should receive appropriate order confirmation and dispatch notifications through Email, SMS, and/or App Push Notifications, as applicable."
    },
    {
      id: 2,
      title: "Multi-Vendor Shipments",
      icon: <Boxes className="w-6 h-6 text-brand-orange" />,
      content: "Products purchased from different vendors in a single checkout may be dispatched from different locations and may arrive separately. Separate tracking information should be displayed for each shipment wherever applicable."
    },
    {
      id: 3,
      title: "Shipping Charges & Delivery Estimates",
      icon: <Truck className="w-6 h-6 text-brand-orange" />,
      content: "Shipping charges and estimated delivery dates should be calculated and displayed at checkout based on relevant factors, including product details, vendor location, customer pin code, package weight/dimensions, selected delivery method, and logistics partner availability."
    },
    {
      id: 4,
      title: "Cash on Delivery (COD)",
      icon: <Banknote className="w-6 h-6 text-brand-orange" />,
      content: "Cash on Delivery should be available only for eligible products and serviceable pin codes. Any applicable COD or convenience fee should be clearly displayed to the customer before order confirmation."
    },
    {
      id: 5,
      title: "Order Tracking",
      icon: <Navigation className="w-6 h-6 text-brand-orange" />,
      content: "Customers should be able to track their shipments smoothly through the My Orders section, with courier tracking links and shipment status updates wherever supported by the logistics partner."
    },
    {
      id: 6,
      title: "Address Accuracy & Undeliverable Orders",
      icon: <MapPin className="w-6 h-6 text-brand-orange" />,
      content: "Customers are responsible for providing accurate and complete delivery details. Where an order becomes undeliverable due to an incorrect/incomplete address, repeated failed delivery attempts, or customer refusal to accept the shipment, applicable re-shipping charges may be collected in accordance with the applicable policy."
    },
    {
      id: 7,
      title: "Damaged, Missing, or Incorrect Products",
      icon: <AlertCircle className="w-6 h-6 text-brand-orange" />,
      content: (
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>If a customer receives a damaged, missing, incorrect, or incomplete product, the customer should report the issue to ULMGH-369 Customer Support within 48 hours of delivery.</li>
          <li>ULMGH-369 Customer Support should record the complaint and coordinate with the concerned vendor/seller and, where applicable, the logistics partner for verification and resolution.</li>
          <li>Customers should be encouraged to provide clear photographs and, where possible, an unboxing video as supporting evidence.</li>
          <li>Any applicable replacement, refund, or claim should be processed in accordance with the Return, Refund & Cancellation Policy and the relevant product/vendor terms.</li>
        </ul>
      )
    },
    {
      id: 8,
      title: "Delivery Delays",
      icon: <Clock className="w-6 h-6 text-brand-orange" />,
      content: "The system and policy should accommodate reasonable delivery delays caused by severe weather, festivals, public holidays, transportation disruptions, high order volumes, or other circumstances beyond the reasonable control of ULMGH-369, vendors, or logistics partners."
    },
    {
      id: 9,
      title: "International Shipping",
      icon: <Globe className="w-6 h-6 text-brand-orange" />,
      content: "At present, ULMGH-369 supports shipping within India only. International shipping options may be introduced in the future, subject to applicable laws, regulations, logistics arrangements, customs requirements, and business policies."
    },
    {
      id: 10,
      title: "Return/Replacement Shipping Charges",
      icon: <ArrowRightLeft className="w-6 h-6 text-brand-orange" />,
      content: "Shipping charges relating to returns, replacements, or re-delivery should be handled according to the applicable Return & Refund Policy and the verified reason for the return."
    },
    {
      id: 11,
      title: "Customer Support Integration",
      icon: <Headphones className="w-6 h-6 text-brand-orange" />,
      content: "The website and mobile applications should provide clear and direct access to ULMGH-369 Customer Support for shipping-related complaints and assistance."
    },
    {
      id: 12,
      title: "Important Multi-Vendor Responsibility Disclaimer",
      icon: <Info className="w-6 h-6 text-brand-orange" />,
      content: "Please ensure that the system and policy clearly state that ULMGH-369 functions as an online marketplace/platform and customer-support coordination point. The respective vendor/seller remains responsible for applicable product fulfilment, product quality, packaging, and seller-side obligations, while logistics partners are responsible for transportation and physical delivery services, as applicable."
    }
  ];

  return (
    <div className="bg-[#f9f9f9] min-h-screen pb-24 md:pb-16 font-sans">
      <Header title="Shipping & Delivery Policy" />
      
      {/* Top Banner */}
      <div className="bg-[#022A21] text-white py-12 md:py-16 px-4 shadow-md">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 font-serif">Shipping & Delivery Policy</h1>
          <p className="text-sm md:text-lg text-gray-200 max-w-2xl mx-auto">
            Everything you need to know about how we deliver your orders safely and on time across our multi-vendor platform.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-12 space-y-10">
          
          <div className="bg-orange-50 border border-brand-orange/20 p-4 md:p-6 rounded-xl flex items-start gap-4">
            <ShieldAlert className="w-8 h-8 text-brand-orange shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-[#022A21] mb-2">Multi-Vendor Marketplace Notice</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Since ULMGH-369 is a multi-vendor marketplace, this Shipping & Delivery Policy clearly distinguishes the responsibilities of customers, vendors/sellers, ULMGH-369, and logistics partners.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            {policies.map((policy) => (
              <section key={policy.id} className="relative pl-0 md:pl-12">
                <div className="hidden md:flex absolute left-0 top-0 w-10 h-10 bg-gray-50 rounded-full border border-gray-100 items-center justify-center">
                  {policy.icon}
                </div>
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="md:hidden">
                    {policy.icon}
                  </div>
                  <h2 className="text-xl font-bold text-[#022A21] font-serif">
                    {policy.id}. {policy.title}
                  </h2>
                </div>
                <div className="text-gray-600 text-sm leading-relaxed">
                  {policy.content}
                </div>
              </section>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
