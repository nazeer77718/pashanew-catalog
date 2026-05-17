import SectionHeading from './SectionHeading';

const features = [
  {
    title: 'Custom Fabrication',
    text: 'Every design is built to your measurements — gates, doors, grills, and specialty metalwork.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.59m6.837-5.59l-3.03 2.496a2.548 2.548 0 01-3.586 0" />
    ),
  },
  {
    title: 'Quality Materials',
    text: 'Durable steel, powder coating, and finishes chosen to withstand weather and daily use.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    ),
  },
  {
    title: 'On-Time Delivery',
    text: 'Clear timelines from design approval to installation, with updates at every stage.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
];

const About = () => (
  <section id="about" className="bg-white py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <SectionHeading
        label="About Us"
        title="Trusted Metal Engineering Since Day One"
        subtitle="Pasha Engineering Works delivers fabrication and design solutions for residential and commercial clients — from elegant main gates to precision auto body modifications."
      />
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((item, i) => (
          <div
            key={item.title}
            className="group rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg animate-fade-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="mb-4 inline-flex rounded-xl bg-amber-100 p-3 text-amber-700">
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {item.icon}
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-900">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;

