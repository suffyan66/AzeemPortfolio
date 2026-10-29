const experience = [
  { company: "Theta x Tech (SMC-PVT) LTD", role: "Sales & Marketing Specialist", period: "Present", current: true },
  { company: "Thirdot", role: "Digital Marketing Specialist", period: "Past" },
  { company: "Fixkar Solutions", role: "Digital Marketing Specialist", period: "Past" },
  { company: "Optimizers Pakistan", role: "Digital Marketing", period: "Past" },
  { company: "Sky Guru", role: "Social Media Marketing", period: "Past" },
];

export default function Experience() {
  return (
    <section id="experience" className="section-dark py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-heading font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 text-lg">
            3+ years of hands-on experience across agencies and tech companies.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-10">
            {experience.map((item, idx) => (
              <div key={idx} className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-4 border-surface-dark transform -translate-x-1/2 z-10 
                  ${item.current ? 'bg-primary animate-pulse shadow-[0_0_15px_rgba(14,165,233,0.8)]' : 'bg-slate-500'}"
                  style={{ left: window.innerWidth < 768 ? '1.5rem' : '50%' }}
                />

                {/* Card Container */}
                <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="group bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="text-xs font-bold tracking-wider text-primary uppercase mb-2 flex items-center gap-2">
                      {item.period} {item.current && <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white mb-1">
                      {item.role}
                    </h3>
                    <div className="text-sm text-slate-400 font-medium">{item.company}</div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}