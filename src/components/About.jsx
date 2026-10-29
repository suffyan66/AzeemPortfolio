import { GraduationCap, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-light py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900">
              More <span className="gradient-text">About Me</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-[auto_1fr] gap-10 items-start">
            
            {/* Public folder ki picture */}
            <div className="mx-auto w-full max-w-xs">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white/40">
                <img 
                  src="/profile.png" 
                  alt="Azeem Zulfiqar" 
                  className="w-full h-full object-cover object-top" 
                />
              </div>
            </div>

            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                I'm <strong className="text-slate-900">Azeem Zulfiqar</strong>, a
                Digital Marketing Specialist from Pakistan with 3+ years of
                hands-on experience in Social Media Marketing, Paid Advertising,
                Lead Generation, and Search Engine Marketing. I love working on
                projects where creativity and strategy come together to help
                businesses build their online presence.
              </p>
              <p>
                My journey started with Social Media Marketing and grew into
                paid advertising and performance marketing. I specialize in{" "}
                <strong className="text-slate-900">
                  Meta Ads, Snapchat Ads, and TikTok Ads
                </strong>{" "}
                with a focus on lead generation, client acquisition, brand
                awareness, and campaign optimization.
              </p>
              <p>
                Alongside ads, I have strong experience in{" "}
                <strong className="text-slate-900">
                  Graphic Design and Video Editing
                </strong>{" "}
                — creating scroll-stopping creatives for social media and paid
                campaigns.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <GraduationCap className="text-primary shrink-0 mt-0.5" size={22} />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      BBA (In Progress)
                    </div>
                    <div className="text-xs text-slate-500">
                      Virtual University of Pakistan
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <Award className="text-primary shrink-0 mt-0.5" size={22} />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      Digital Marketing — A1 Grade
                    </div>
                    <div className="text-xs text-slate-500">Aptech Pakistan</div>
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