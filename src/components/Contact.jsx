import { Globe, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-dark py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 leading-relaxed max-w-xl mx-auto">
            I'm always open to connecting with business owners, marketers,
            agencies, and entrepreneurs for new projects, collaborations, and
            opportunities in Digital Marketing, Advertising, Branding, and
            Business Growth.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/azeem-zulfiqar-marketer/"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-cta inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white hover:opacity-90 transition-opacity"
            >
              <Globe size={18} /> Connect on LinkedIn
            </a>
            
            {/* Email Link Updated Here */}
            <a
              href="mailto:azeemzulfiqarofficial@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/5 transition-colors"
            >
              <Mail size={18} /> Send an Email
            </a>
          </div>

          <div className="pt-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
              <MessageCircle size={14} /> Currently open to new opportunities
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}