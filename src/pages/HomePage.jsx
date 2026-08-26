import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShieldCheck, Truck, Award, Headset, Percent, Smartphone, Shirt, Monitor, Sofa, Sparkles, Zap, Calendar, RefreshCw } from 'lucide-react';
import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';
import { AdBanner } from '../components/AdBanner';
import { useStoreData } from '../store/useStoreData';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import imgHeroBanner from '../assets/hero_banner.png';
import imgHeroBannerPremium from '../assets/hero_banner_premium.jpg';
import imgAarti from '../assets/story_aarti.png';

export function HomePage() {
  const container = useRef(null);
  const navigate = useNavigate();
  const { products, categories, loading } = useStoreData();
  const [banners, setBanners] = React.useState([]);
  const [vendors, setVendors] = React.useState([
    { id: 'v1', business_name: 'ULMGH369 Silks', store_image: 'https://vaarahisilks.com/cdn/shop/articles/Home_Banner_B_1080_x_1650_FHD_49daaf56-8dd9-4544-934c-f17ec4672e1c.jpg?v=1765869118' },
    { id: 'v2', business_name: 'Kavya Creations', store_image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&q=80' },
    { id: 'v3', business_name: 'The Loom Story', store_image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&q=80' },
    { id: 'v4', business_name: 'Ethnic Aura', store_image: 'https://vaarahisilks.com/cdn/shop/articles/Home_Banner_B_1080_x_1650_FHD_49daaf56-8dd9-4544-934c-f17ec4672e1c.jpg?v=1765869118' },
  ]);

  React.useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000/api";
    fetch(`${url}/general/banners`)
      .then(r => r.json())
      .then(d => { if (d.banners) setBanners(d.banners); })
      .catch(e => console.error(e));

    fetch(`${url}/general/vendors`)
      .then(r => r.json())
      .then(d => { if (d.vendors && d.vendors.length > 0) setVendors(d.vendors); })
      .catch(e => console.error(e));
  }, []);

  useGSAP(() => {
    if (!loading) {
      gsap.from('.animate-section', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        clearProps: 'all'
      });
    }
  }, { scope: container, dependencies: [loading] });

  return (
    <div ref={container} className="bg-gray-50/50 min-h-screen pb-20 font-sans">
      <Header variant="home" />

      <div className="max-w-lg mx-auto md:max-w-6xl w-full">
      {/* 1. Hero Banner: Big Saving Days */}
      <div className="animate-section px-3 mt-4">
        <div className="bg-[#122e5a] rounded-2xl p-4 sm:p-6 text-white relative overflow-hidden flex shadow-sm min-h-[160px]">
          <div className="z-10 w-[55%] flex flex-col justify-center">
            <span className="bg-[#fcd34d] text-gray-900 text-[10px] font-bold px-2 py-0.5 rounded-full self-start mb-2 uppercase tracking-wide">Best Deals</span>
            <h2 className="text-[26px] sm:text-3xl font-extrabold leading-tight mb-2 tracking-tight">
              Big Saving<br />Days
            </h2>
            <p className="text-white/80 text-[11px] sm:text-sm mb-4 leading-tight">
              Grab Best Deals<br />On Top Brands
            </p>
            <button className="bg-white text-gray-900 text-[11px] font-bold py-2 px-3 rounded-md self-start flex items-center gap-1 hover:bg-gray-100 shadow-sm transition-transform active:scale-95">
              Shop Now <span className="text-sm font-black leading-none">→</span>
            </button>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-[55%] bg-gradient-to-l from-white/10 to-transparent"></div>
          {/* Dummy image representation with devices */}
          <div className="w-[45%] flex items-center justify-end z-10 relative pr-2">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              <div className="w-[70px] h-[90px] bg-[#3b82f6] border-2 border-gray-800 rounded-xl relative z-10 shadow-lg translate-x-2 -translate-y-1">
                 <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gray-800"></div>
                 <div className="absolute top-5 right-2 w-2 h-2 rounded-full bg-gray-800"></div>
              </div>
              <div className="w-[45px] h-[55px] bg-gray-900 rounded-lg absolute bottom-2 right-12 z-20 shadow-lg border border-gray-700 flex flex-col items-center justify-center">
                 <div className="text-[8px] text-white">10:09</div>
                 <div className="w-4 h-4 rounded bg-[#ef4444] mt-1 grid grid-cols-2 gap-0.5 p-0.5">
                   <div className="bg-white/50 rounded-full"></div><div className="bg-white/50 rounded-full"></div>
                   <div className="bg-white/50 rounded-full"></div><div className="bg-white/50 rounded-full"></div>
                 </div>
              </div>
            </div>
          </div>
          {/* Carousel dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
             <div className="w-2 h-2 rounded-full bg-white"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
          </div>
        </div>
      </div>

      {/* 2. Categories Ribbon */}
      <div className="animate-section mt-6 mb-4">
        <div className="flex justify-between items-center px-4 mb-3">
          <h3 className="text-[16px] md:text-xl font-extrabold text-gray-900 tracking-tight">Shop by Category</h3>
          <Link to="/category/all" className="text-blue-600 hover:text-blue-700 text-[12px] md:text-sm font-bold flex items-center gap-1 transition-colors">See All <span className="text-[14px] font-black leading-none">→</span></Link>
        </div>
        <div className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar px-4 pb-3 snap-x">
          {categories.map((cat, idx) => {
            const bgColors = ['bg-[#fff1e6]', 'bg-[#eef2ff]', 'bg-[#ecfdf5]', 'bg-[#eff6ff]', 'bg-[#fffbeb]', 'bg-[#fdf2f8]'];
            const bg = bgColors[idx % bgColors.length];
            return (
              <Link key={cat.id || idx} to={`/category/${cat.id}`} className="flex flex-col items-center gap-1.5 shrink-0 cursor-pointer group snap-start w-16 md:w-20">
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full ${bg} flex items-center justify-center transition-transform group-hover:scale-105 shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden p-2.5`}>
                  {cat.image_url ? (
                    <img src={cat.image_url} alt={cat.name} className="w-full h-full object-contain mix-blend-multiply transition-transform group-hover:scale-110" />
                  ) : (
                    <Sparkles className="w-6 h-6 text-gray-400" />
                  )}
                </div>
                <span className="text-[11px] md:text-[12px] font-semibold text-gray-800 text-center leading-tight line-clamp-2">{cat.name}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 3. Info Cards Grid */}
      <div className="animate-section px-3 mt-6">
        <div className="flex gap-3 overflow-x-auto hide-scrollbar snap-x pb-2">
          {/* SuperCoin */}
          <div className="shrink-0 snap-start w-[175px] md:w-[200px] bg-white border border-gray-100 rounded-[20px] p-4 shadow-sm relative group hover:shadow-md transition-all flex flex-col justify-between min-h-[115px]">
            <div className="relative z-10 pr-8">
              <div className="flex items-center gap-1.5 mb-2.5">
                <div className="w-4 h-4 bg-[#ffc107] rounded-full flex items-center justify-center shrink-0">
                  <Zap className="w-3 h-3 text-white fill-white" strokeWidth={3} />
                </div>
                <span className="text-[14px] font-extrabold text-[#0f172a] tracking-tight truncate">SuperCoin</span>
              </div>
              <p className="text-[13px] text-gray-600 font-semibold mb-2">Earned <span className="text-[#16a34a] font-extrabold">120</span></p>
            </div>
            <p className="text-[13px] text-[#2563eb] font-semibold cursor-pointer relative z-10">Use Now</p>
            
            <div className="absolute right-3 bottom-3 w-[42px] h-[42px] bg-gradient-to-br from-[#ffcd38] to-[#ffb300] rounded-full shadow-sm flex items-center justify-center transform group-hover:scale-105 transition-transform overflow-hidden z-0">
               <Zap className="w-5 h-5 text-white fill-white transform -rotate-12" strokeWidth={2} />
               <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-white/60 rounded-full blur-[1px]"></div>
            </div>
          </div>

          {/* No Cost EMI */}
          <div className="shrink-0 snap-start w-[175px] md:w-[200px] bg-white border border-gray-100 rounded-[20px] p-4 shadow-sm relative group hover:shadow-md transition-all flex flex-col justify-between min-h-[115px]">
            <div className="relative z-10 pr-8">
              <div className="flex items-center gap-1.5 mb-2.5">
                <Calendar className="w-4 h-4 text-[#16a34a] shrink-0" strokeWidth={2.5} />
                <span className="text-[14px] font-extrabold text-[#0f172a] tracking-tight truncate">No Cost EMI</span>
              </div>
              <p className="text-[13px] text-gray-600 font-semibold mb-2 leading-tight">Up to 12 Months</p>
            </div>
            <p className="text-[13px] text-[#2563eb] font-semibold cursor-pointer relative z-10">Explore Now</p>
            
            <div className="absolute right-3 bottom-3 w-[42px] h-[42px] bg-[#16a34a] rounded-[12px] flex items-center justify-center transform group-hover:scale-105 transition-transform shadow-sm z-0">
               <Calendar className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
          </div>

          {/* Exchange Offer */}
          <div className="shrink-0 snap-start w-[175px] md:w-[200px] bg-white border border-gray-100 rounded-[20px] p-4 shadow-sm relative group hover:shadow-md transition-all flex flex-col justify-between min-h-[115px]">
            <div className="relative z-10 pr-10">
              <div className="flex items-center gap-1.5 mb-2.5">
                <RefreshCw className="w-4 h-4 text-[#f97316] shrink-0" strokeWidth={2.5} />
                <span className="text-[14px] font-extrabold text-[#0f172a] tracking-tight truncate">Exchange Offer</span>
              </div>
              <p className="text-[13px] text-gray-600 font-semibold mb-0.5 leading-tight">Up to ₹15,000 Off</p>
              <p className="text-[13px] text-gray-900 font-semibold leading-tight">On Old Devices</p>
            </div>
            
            <div className="absolute right-3 bottom-3 w-[42px] h-[42px] flex items-center justify-center transform group-hover:scale-105 transition-transform z-0">
               <RefreshCw className="w-8 h-8 text-[#f97316]" strokeWidth={3} />
            </div>
          </div>
        </div>
      </div>

      {/* 4. Deal of the Day */}
      <div className="animate-section px-3 mt-6 mb-6">
        <div className="bg-white border border-gray-100 rounded-xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] py-3 px-1">
          <div className="flex items-center justify-between mb-3 px-2">
            <div className="flex items-center gap-3">
              <h3 className="text-[15px] font-extrabold text-gray-900 tracking-tight">Deal of the Day</h3>
              <div className="flex items-center bg-[#ffebeb] text-[#ef4444] font-black text-[11px] px-1.5 py-0.5 rounded shadow-sm tracking-widest border border-red-100">
                12 <span className="text-red-300 px-0.5 animate-pulse">:</span> 45 <span className="text-red-300 px-0.5 animate-pulse">:</span> 30
              </div>
            </div>
            <Link to="/offers" className="text-blue-600 text-[12px] font-bold px-2 py-1 rounded hover:bg-blue-50 transition-colors">View All</Link>
          </div>

          <div className="flex gap-3 overflow-x-auto hide-scrollbar px-2 pb-2 snap-x">
            {products.length > 0 ? products.slice(0, 5).map((p, idx) => {
              const discounts = [40, 18, 50, 25, 30];
              const off = discounts[idx] || 20;
              const originalPrice = p.price * (1 + (off / 100));
              return (
                <div key={p.id} className="w-[140px] shrink-0 snap-start border border-gray-100 rounded-lg p-2 hover:shadow-md transition-shadow relative bg-white flex flex-col group cursor-pointer" onClick={() => navigate(`/product/${p.id}`)}>
                  <div className="absolute top-2 left-2 bg-green-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm z-10">
                    {off}% OFF
                  </div>
                  <div className="h-[130px] bg-white rounded-md mb-2 p-2 flex items-center justify-center relative overflow-hidden group-hover:bg-gray-50 transition-colors">
                    {p.image_url ? (
                      <img src={p.image_url} alt={p.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform" />
                    ) : (
                       <div className="w-16 h-16 bg-gray-100 rounded-full"></div>
                    )}
                  </div>
                  <h4 className="text-[12px] font-semibold text-gray-800 line-clamp-1 mb-1">{p.name}</h4>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="text-[13px] font-extrabold text-gray-900">₹{p.price}</span>
                    <span className="text-[10px] text-gray-400 font-medium line-through">₹{Math.round(originalPrice)}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[9px] font-bold text-blue-600 border border-blue-100 bg-blue-50 w-fit px-1 py-0.5 rounded-sm">
                    <ShieldCheck className="w-3 h-3 fill-blue-600 text-white" /> Assured
                  </div>
                </div>
              );
            }) : (
              <div className="w-full text-center py-8 text-gray-500 text-sm">Loading deals...</div>
            )}
          </div>
        </div>
      </div>

      {/* 5. Sponsored Banner */}
      <div className="animate-section px-3 mb-10">
        <div className="bg-gradient-to-r from-[#0d9488] to-[#14b8a6] rounded-xl p-4 text-white relative overflow-hidden flex items-center shadow-[0_4px_15px_rgba(20,184,166,0.3)]">
           <div className="absolute top-1 left-2 text-white/60 text-[9px] uppercase font-bold tracking-widest">Sponsored</div>
           <div className="z-10 w-[60%] pt-3">
             <h3 className="text-[15px] sm:text-lg font-extrabold leading-tight mb-2 tracking-tight">Extra 10% Off<br/>On ICICI Bank Cards</h3>
             <button className="text-white text-[11px] font-bold flex items-center gap-1 hover:underline">
               Shop Now <span className="font-black">→</span>
             </button>
           </div>
           <div className="w-[40%] flex justify-end z-10 relative">
              <div className="w-24 h-14 bg-gradient-to-br from-[#f97316] to-[#dc2626] rounded-lg shadow-xl flex flex-col justify-center px-2 transform -rotate-6 border border-white/20">
                 <div className="flex items-center gap-1 mb-0.5">
                    <div className="w-2 h-2 bg-yellow-400 rounded-sm"></div>
                    <span className="text-[8px] font-extrabold italic tracking-wider">ICICI Bank</span>
                 </div>
                 <div className="flex gap-1 opacity-50">
                   <div className="w-3 h-1 bg-white rounded-full"></div>
                   <div className="w-3 h-1 bg-white rounded-full"></div>
                   <div className="w-3 h-1 bg-white rounded-full"></div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      <div className="animate-section px-3 mb-12 flex flex-col gap-8 md:gap-10">
          {/* Best Sellers */}
          {products.filter(p => p.is_bestseller).length > 0 && (
            <div>
              <div className="flex justify-between items-center px-4 py-4 mb-4 border-b border-gray-100 bg-white rounded-t-2xl shadow-sm">
                <h3 className="text-xl md:text-2xl font-bold text-[#022A21] tracking-tight font-serif">Best Selling</h3>
                <Link to="/collection/best-sellers" className="text-brand-orange hover:text-orange-700 text-sm md:text-base font-semibold flex items-center gap-2 transition-colors">View All →</Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                {products.filter(p => p.is_bestseller).slice(0, 6).map(product => (
                  <div key={product.id} className="hover:-translate-y-2 transition-transform duration-300 h-full">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Middle Advertisement Block */}
          <div className="rounded-[1.5rem] overflow-hidden bg-white shadow-sm border border-gray-100">
            <AdBanner
              imageUrl={imgAarti}
              altText="Middle Ad"
              link="/category/all"
            />
          </div>

          {/* Trending */}
          {products.filter(p => p.is_trending).length > 0 && (
            <div>
              <div className="flex justify-between items-end mb-4">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-[#E57E25]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight font-serif mb-0">Trending Now</h3>
                </div>
                <Link to="/collection/trending" className="text-[#88313A] hover:text-red-900 text-sm font-medium transition-colors">See all {'>'}</Link>
              </div>
              <div className="flex overflow-x-auto gap-4 md:gap-6 hide-scrollbar pb-4 snap-x">
                {products.filter(p => p.is_trending).slice(0, 8).map(product => (
                  <div key={product.id} className="w-[160px] md:w-[220px] flex-shrink-0 snap-start h-full hover:-translate-y-1 transition-transform duration-300">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Beautiful Collections */}
          <div className="pt-2">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-[#E57E25]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight font-serif mb-0">Beautiful Collections</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Collection 1 */}
              <Link to="/collection/wedding" className="relative group overflow-hidden rounded-[2rem] aspect-[3/4] bg-gray-100 block">
                <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80" alt="Wedding Collection" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 md:p-6">
                  <h4 className="text-white font-serif font-bold text-lg md:text-xl leading-tight">Wedding Collection</h4>
                  <div className="mt-3 inline-flex">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-brand-orange text-white text-[11px] font-black uppercase tracking-wider rounded-full shadow-lg group-hover:bg-orange-600 transition-all">Shop now <span className="group-hover:translate-x-1 transition-transform text-sm leading-none">→</span></span>
                  </div>
                </div>
              </Link>

              {/* Collection 2 */}
              <Link to="/collection/festival" className="relative group overflow-hidden rounded-[2rem] aspect-[3/4] bg-gray-100 block">
                <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80" alt="Festival Collection" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 md:p-6">
                  <h4 className="text-white font-serif font-bold text-lg md:text-xl leading-tight">Festival Collection</h4>
                  <div className="mt-3 inline-flex">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-brand-orange text-white text-[11px] font-black uppercase tracking-wider rounded-full shadow-lg group-hover:bg-orange-600 transition-all">Shop now <span className="group-hover:translate-x-1 transition-transform text-sm leading-none">→</span></span>
                  </div>
                </div>
              </Link>

              {/* Collection 3 */}
              <Link to="/collection/office" className="relative group overflow-hidden rounded-[2rem] aspect-[3/4] bg-gray-100 block">
                <img src="https://images.unsplash.com/photo-1583391733958-d25e07fac04f?w=800&q=80" alt="Office Wear" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 md:p-6">
                  <h4 className="text-white font-serif font-bold text-lg md:text-xl leading-tight">Office Wear</h4>
                  <div className="mt-3 inline-flex">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-brand-orange text-white text-[11px] font-black uppercase tracking-wider rounded-full shadow-lg group-hover:bg-orange-600 transition-all">Shop now <span className="group-hover:translate-x-1 transition-transform text-sm leading-none">→</span></span>
                  </div>
                </div>
              </Link>

              {/* Collection 4 */}
              <Link to="/collection/casual" className="relative group overflow-hidden rounded-[2rem] aspect-[3/4] bg-gray-100 block">
                <img src="https://images.unsplash.com/photo-1606902965551-dce093cda6e7?w=800&q=80" alt="Casual Wear" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 md:p-6">
                  <h4 className="text-white font-serif font-bold text-lg md:text-xl leading-tight">Casual Wear</h4>
                  <div className="mt-3 inline-flex">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-brand-orange text-white text-[11px] font-black uppercase tracking-wider rounded-full shadow-lg group-hover:bg-orange-600 transition-all">Shop now <span className="group-hover:translate-x-1 transition-transform text-sm leading-none">→</span></span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Recommended for You */}
          {products.length > 6 && (
            <div className="pt-2">
              <div className="flex justify-between items-end mb-4">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-[#E57E25]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight font-serif mb-0">Recommended for You</h3>
                </div>
                <Link to="/collection/recommended" className="text-[#88313A] hover:text-red-900 text-sm font-medium transition-colors">See all {'>'}</Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                {products.filter(p => !p.is_trending).slice(0, 6).map(product => (
                  <div key={`rec-${product.id}`} className="hover:-translate-y-2 transition-transform duration-300 h-full">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Categories horizontally scrolling products */}
          {categories.map((cat) => {
            const catProducts = products.filter(p => p.category === cat.name);
            if (catProducts.length === 0) return null;
            return (
              <div key={cat.id}>
                <div className="flex justify-between items-center px-2 py-4 mb-4 border-b border-gray-100">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#022A21] tracking-tight font-serif">{cat.name}</h3>
                  <Link to={`/category/${cat.id}`} className="text-brand-orange hover:text-orange-700 text-sm md:text-base font-semibold flex items-center gap-2 transition-colors">View All →</Link>
                </div>
                <div className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar pb-4 snap-x">
                  {catProducts.slice(0, 8).map(product => (
                    <div key={product.id} className="w-[160px] md:w-[220px] shrink-0 snap-start hover:-translate-y-2 transition-transform duration-300 h-full">
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Customer Reviews */}
          <div className="mb-2 mt-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#022A21] mb-2 font-serif" style={{ fontFamily: 'Georgia, serif' }}>What Our Customers Say</h3>
              <p className="text-gray-500">Trusted by thousands of happy shoppers.</p>
            </div>

            <div className="flex gap-6 overflow-x-auto snap-x hide-scrollbar pb-4 px-2">
              {[
                { name: "Priya Sharma", rating: 5, review: "Absolutely in love with the silk saree I bought! The quality is top-notch and the delivery was super fast." },
                { name: "Anjali Verma", rating: 5, review: "The festive collection is amazing. Bought a lehenga for my sister's wedding and everyone complimented it." },
                { name: "Sneha Reddy", rating: 4, review: "Great products and good prices. The cotton kurti fits perfectly and is very comfortable." },
                { name: "Riya Kapoor", rating: 5, review: "ULMGH369 never disappoints. The app is so easy to use and the customer service is excellent." }
              ].map((rev, idx) => (
                <div key={idx} className="w-[280px] shrink-0 snap-start bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 mb-3 text-brand-orange text-lg">
                      {'★'.repeat(rev.rating)}{'☆'.repeat(5 - rev.rating)}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed italic">"{rev.review}"</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="font-bold text-gray-900 text-sm">{rev.name}</p>
                    <p className="text-xs text-gray-400">Verified Buyer</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Features Block (Free Delivery, etc) */}
          <div className="bg-white py-6 px-4 md:p-8 rounded-2xl mt-0 mb-0 shadow-sm border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x-0 md:divide-x divide-gray-100">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 px-4 text-center md:text-left">
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 text-2xl border border-emerald-100">✈️</div>
                <div>
                  <h4 className="text-gray-900 font-semibold">Free Delivery</h4>
                  <p className="text-gray-500 text-xs md:text-sm">On orders over $50</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 px-4 text-center md:text-left">
                <div className="w-12 h-12 rounded-full bg-[#022A21]/10 flex items-center justify-center text-[#022A21] text-2xl border border-[#022A21]/20">🔄</div>
                <div>
                  <h4 className="text-gray-900 font-semibold">Easy Replacements</h4>
                  <p className="text-gray-500 text-xs md:text-sm">30 days replacement policy</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 px-4 text-center md:text-left">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-500 text-2xl border border-green-100">🔒</div>
                <div>
                  <h4 className="text-gray-900 font-semibold">Secure Payments</h4>
                  <p className="text-gray-500 text-xs md:text-sm">100% secure checkout</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 px-4 text-center md:text-left">
                <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-500 text-2xl border border-yellow-100">🏆</div>
                <div>
                  <h4 className="text-gray-900 font-semibold">Best Prices</h4>
                  <p className="text-gray-500 text-xs md:text-sm">Guaranteed deals</p>
                </div>
              </div>
            </div>
          </div>
      </div>

      </div>

    </div>
  );
}
