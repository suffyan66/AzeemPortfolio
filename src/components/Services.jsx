import { Megaphone, Target, Users, Search, PenTool, Video } from "lucide-react";

const services = [
  { icon: Megaphone, title: "Social Media Marketing", description: "Content strategy, page management, and audience engagement across Facebook, Instagram, and TikTok." },
  { icon: Target, title: "Paid Advertising", description: "Meta Ads, Snapchat Ads, and TikTok Ads focused on lead generation, sales, and campaign optimization." },
  { icon: Users, title: "Lead Generation", description: "Full-funnel B2B & B2C lead generation systems that deliver qualified prospects consistently." },
  { icon: Search, title: "Search Engine Marketing", description: "Search ads and organic visibility strategies that bring high-intent traffic to your business." },
  { icon: PenTool, title: "Graphic Design", description: "Scroll-stopping ad creatives and social media visuals designed to convert." },
  { icon: Video, title: "Video Editing", description: "Short-form video content for Reels, TikTok, and YouTube ads — optimized for retention." },
];

export default function Services() {
  return (
    <section id="services" className="section-dark py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-heading font-bold mb-4">
            What I <span className="gradient-text">Do Best</span>
          </h2>
          <p className="text-slate-400 text-lg">
            A complete digital marketing toolkit to grow your brand — from strategy to execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm overflow-hidden"
              >
                {/* Hover Glow inside card */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg shadow-primary/20">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}