import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    brand: "E-commerce Client",
    tag: "Meta Ads",
    title: "Scaling a Shopify store with paid social",
    description:
      "Built full-funnel Meta Ads campaigns with multiple creative angles, A/B tested audiences, and optimized the sales funnel for a Shopify brand.",
    results: [
      { label: "ROAS", value: "3.8x" },
      { label: "Ad Spend", value: "$15K" },
      { label: "Duration", value: "3 months" },
    ],
    // Unsplash ki real images
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    brand: "B2B Service Client",
    tag: "Lead Generation",
    title: "30+ qualified leads per week",
    description:
      "Built a Meta + LinkedIn lead generation system with landing pages, high-intent creative, and a follow-up funnel for a B2B service business.",
    results: [
      { label: "Leads / Week", value: "30+" },
      { label: "Cost / Lead", value: "$6" },
      { label: "Conversion", value: "22%" },
    ],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    brand: "Local Business",
    tag: "TikTok + Snapchat",
    title: "1M+ impressions in 60 days",
    description:
      "Created short-form video ad creatives and ran awareness campaigns on TikTok and Snapchat to build local brand presence for a service business.",
    results: [
      { label: "Impressions", value: "1M+" },
      { label: "Reach", value: "450K" },
      { label: "Duration", value: "60 days" },
    ],
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    brand: "Retail Brand",
    tag: "Snapchat Ads",
    title: "2.5x ROAS on Snapchat",
    description:
      "Scaled a retail brand's Snapchat Ads with fresh creative angles and a performance-focused audience strategy.",
    results: [
      { label: "ROAS", value: "2.5x" },
      { label: "CTR", value: "4.1%" },
      { label: "Spend", value: "$8K" },
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="section-light py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4 text-slate-900">
            Campaign <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Real campaigns across Meta, Snapchat, and TikTok that delivered
            measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((cs, idx) => (
            <article
              key={idx}
              className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10" />
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Brand Badge & Arrow */}
                <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-slate-800 shadow-sm">
                    {cs.brand}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Tag on Image */}
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="text-[10px] font-bold tracking-wider text-white uppercase bg-primary px-2.5 py-1 rounded-md">
                    {cs.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3 className="text-xl font-heading font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors">
                  {cs.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-2">
                  {cs.description}
                </p>

                {/* Results Grid */}
                <div className="mt-6 grid grid-cols-3 gap-2 pt-5 border-t border-slate-100">
                  {cs.results.map((r, i) => (
                    <div key={i} className="text-center bg-slate-50 rounded-lg p-2">
                      <div className="text-lg font-bold gradient-text">
                        {r.value}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-slate-500 mt-0.5 font-medium">
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}