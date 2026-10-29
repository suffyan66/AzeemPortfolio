import { ArrowRight, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="section-dark relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary font-medium backdrop-blur-sm">
              <Sparkles size={14} className="animate-pulse" />
              Available for New Projects
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] tracking-tight text-white">
              Turning Ads Into{" "}
              <span className="gradient-text glow-text">Predictable Revenue</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
              3+ years driving growth through <strong className="text-white">Meta Ads, Snapchat, and TikTok</strong>. I help B2B & B2C brands reach the right audience and turn clicks into customers.
            </p>

            <ul className="space-y-4 pt-2">
              {[
                "3+ years of Paid Ads experience",
                "B2B, B2C & E-commerce Campaigns",
                "Lead Gen, Shopify Ads & Brand Awareness"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                  <CheckCircle2 size={18} className="text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="gradient-cta glow-box inline-flex items-center gap-2 rounded-xl px-8 py-4 font-semibold text-white hover:scale-105 transition-transform duration-300"
              >
                Book a Free Call <ArrowRight size={18} />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 font-semibold text-white hover:bg-white/5 transition-colors"
              >
                View My Work
              </a>
            </div>
          </div>

          <div className="relative animate-fade-up lg:ml-auto w-full max-w-md mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-surface-dark-alt/80 backdrop-blur-xl p-8 lg:p-10 shadow-2xl">
              <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <TrendingUp size={14} className="text-green-400" /> ROAS 4.5x
                </div>
              </div>

              <div className="text-center space-y-6 relative z-10 pt-4">
                
                {/* Public folder ki picture */}
                <div className="mx-auto w-36 h-36 rounded-full bg-gradient-to-br from-primary to-primary-light p-[3px] shadow-lg glow-box">
                  <img 
                    src="/profile.png" 
                    alt="Azeem Zulfiqar" 
                    className="w-full h-full rounded-full object-cover object-top bg-surface-dark" 
                  />
                </div>
                
                <div>
                  <div className="text-2xl font-heading font-bold text-white">
                    Azeem Zulfiqar
                  </div>
                  <div className="text-sm text-primary font-medium mt-1">
                    Digital Marketing Specialist
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                  <div className="text-center bg-white/5 rounded-xl p-3">
                    <div className="text-2xl font-bold text-white">3+</div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 mt-1">Years Exp.</div>
                  </div>
                  <div className="text-center bg-white/5 rounded-xl p-3">
                    <div className="text-2xl font-bold text-white">5+</div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 mt-1">Brands</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}