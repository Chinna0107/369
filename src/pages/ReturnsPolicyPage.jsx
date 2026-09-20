import React from 'react';
import { Header } from '../components/Header';
import { 
  Calendar, AlertCircle, Ban, ArrowRightLeft, Truck, 
  CreditCard, XCircle, ShieldCheck, MapPin, CheckCircle, 
  Activity, Info
} from 'lucide-react';

export function ReturnsPolicyPage() {
  const policies = [
    {
      id: 1,
      title: "Return Window",
      icon: <Calendar className="w-6 h-6 text-brand-orange" />,
      content: "Please note our 7-day return policy for most eligible products, calculated from the date of delivery. The applicable return conditions are clearly displayed on the respective product page."
    },
    {
      id: 2,
      title: "Damaged / Defective / Wrong / Missing Products",
      icon: <AlertCircle className="w-6 h-6 text-brand-orange" />,
      content: "If you receive a damaged, defective, incorrect, incomplete, or missing product, please report the issue within 24–48 hours of delivery. You can upload photographs and/or an unboxing video where required. Our support team and the vendor will verify the issue and process the applicable replacement, exchange, refund, or other resolution."
    },
    {
      id: 3,
      title: "Non-Returnable Products",
      icon: <Ban className="w-6 h-6 text-brand-orange" />,
      content: "Product-specific return eligibility applies. Examples of non-returnable items include perishable goods, certain personal-care/hygiene products, hazardous materials, certain electronics after activation/installation, customized products, and products specifically marked as non-returnable on the product page."
    },
    {
      id: 4,
      title: "Exchange Facility",
      icon: <ArrowRightLeft className="w-6 h-6 text-brand-orange" />,
      content: (
        <>
          <p className="mb-2">For eligible products, customers can request an exchange for reasons such as:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Wrong size</li>
            <li>Wrong colour</li>
            <li>Wrong product received</li>
            <li>Damaged or defective product</li>
          </ul>
          <p>Exchanges are subject to product availability and the applicable product-specific policy.</p>
        </>
      )
    },
    {
      id: 5,
      title: "Return Pickup & Shipping Charges",
      icon: <Truck className="w-6 h-6 text-brand-orange" />,
      content: "For verified damaged, defective, wrong, or incomplete products, return pickup will generally be provided free of charge. For eligible customer-initiated returns, such as a change of mind or certain size-related returns, an applicable return shipping/handling fee may be charged. Any applicable fee will be clearly communicated before confirming the return request."
    },
    {
      id: 6,
      title: "Refund Processing",
      icon: <CreditCard className="w-6 h-6 text-brand-orange" />,
      content: "For approved prepaid returns, refunds are generally processed to the original payment method. For COD orders, refunds are processed through your verified Bank Account or UPI ID. Please note that refund processing generally takes 5–7 business days after approval/verification, subject to your payment gateway and banking provider."
    },
    {
      id: 7,
      title: "Order Cancellation",
      icon: <XCircle className="w-6 h-6 text-brand-orange" />,
      content: "Customers can request a cancellation before dispatch, subject to order status and product-specific conditions. Once an order has been dispatched, cancellation may not be available and the applicable return process should be followed after delivery."
    },
    {
      id: 8,
      title: "Manufacturer Warranty",
      icon: <ShieldCheck className="w-6 h-6 text-brand-orange" />,
      content: "For products covered by a manufacturer warranty, the applicable manufacturer warranty terms apply. Our platform provides suitable support and contact options for customers to approach the seller or manufacturer where required."
    },
    {
      id: 9,
      title: "Customer Return Journey",
      icon: <MapPin className="w-6 h-6 text-brand-orange" />,
      content: (
        <>
          <p className="mb-2 font-semibold">Initiating a return is simple:</p>
          <div className="bg-orange-50/50 p-3 rounded-lg border border-orange-100 text-[#022A21] font-medium text-center shadow-sm">
            My Account → My Orders → Select Order → Request Return / Exchange → Select Reason → Upload Photos/Video if Required → Submit Request → Return Pickup / Resolution
          </div>
          <p className="mt-2">You can view the status of your return/exchange request directly from the order details page.</p>
        </>
      )
    },
    {
      id: 10,
      title: "Vendor / Seller Responsibility",
      icon: <CheckCircle className="w-6 h-6 text-brand-orange" />,
      content: "Since ULMGH-369 is a multi-vendor marketplace, return, exchange, replacement, refund, and warranty conditions may vary according to the product category and seller. Sellers have full control over defining the return eligibility and window for their products."
    },
    {
      id: 11,
      title: "Admin & Vendor Monitoring",
      icon: <Activity className="w-6 h-6 text-brand-orange" />,
      content: "All return and exchange requests are closely monitored by our Administration and Vendor Teams to ensure prompt resolution, transparency, and high customer satisfaction."
    },
    {
      id: 12,
      title: "Final Implementation Scope",
      icon: <Info className="w-6 h-6 text-brand-orange" />,
      content: "This Returns & Exchanges Policy applies uniformly across the ULMGH-369 Website, Android Application, and iOS Application."
    }
  ];

  return (
    <div className="bg-[#f9f9f9] min-h-screen pb-24 md:pb-16 font-sans">
      <Header title="Returns & Exchanges Policy" />
      
      {/* Top Banner */}
      <div className="bg-[#022A21] text-white py-12 md:py-16 px-4 shadow-md">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 font-serif">Returns & Exchanges Policy</h1>
          <p className="text-sm md:text-lg text-gray-200 max-w-2xl mx-auto">
            A clear, transparent, simple, and user-friendly return, exchange, replacement, and refund process for our multi-vendor platform.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-12 space-y-10">
          
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
