const companies = [
  "Theta x Tech",
  "Sky Guru",
  "Optimizers Pakistan",
  "Fixkar Solutions",
  "Thirdot",
];

export default function TrustedBy() {
  return (
    <section className="section-light border-y border-slate-200 py-16">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm uppercase tracking-widest text-slate-500 mb-8">
          Brands I've Worked With
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {companies.map((name) => (
            <div
              key={name}
              className="text-xl sm:text-2xl font-heading font-bold text-slate-400 hover:text-slate-900 transition-colors"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}