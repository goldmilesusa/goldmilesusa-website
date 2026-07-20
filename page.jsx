import Header from '../components/Header';
import { SnowflakeIcon, TrailerIcon, ClockIcon, ShieldIcon } from '../components/Icons';

const services = [
  {
    icon: <SnowflakeIcon />,
    title: 'Refrigerated Transportation',
    text: 'Temperature-controlled solutions you can count on.'
  },
  {
    icon: <TrailerIcon />,
    title: 'Dry Van Transportation',
    text: 'Secure, on-time delivery across the United States.'
  },
  {
    icon: <ClockIcon />,
    title: 'Dedicated Solutions',
    text: 'Capacity and consistency tailored to your needs.'
  },
  {
    icon: <ShieldIcon />,
    title: 'Safety First',
    text: 'Committed to professional operating standards.'
  }
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section
          id="home"
          className="relative min-h-[760px] bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-premium.jpg')" }}
        >
          <div className="hero-overlay absolute inset-0" />
          <div className="container-shell relative z-10 flex min-h-[760px] items-center">
            <div className="max-w-[720px] py-20">
              <p className="mb-6 text-sm font-extrabold uppercase tracking-[.18em] text-gold-500 md:text-base">
                Nationwide Freight Transportation
              </p>

              <h1 className="text-[52px] font-black uppercase leading-[.98] tracking-[-.055em] sm:text-[66px] lg:text-[88px]">
                Reliable miles.
                <br />
                <span className="text-gold-500">Stronger partnerships.</span>
              </h1>

              <div className="my-8 h-1 w-24 bg-gold-500" />

              <p className="max-w-[640px] text-lg leading-8 text-white/80 md:text-xl">
                Gold Miles USA delivers refrigerated and dry van freight with dependable equipment,
                clear communication, and a safety-first mindset.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#quote" className="gold-gradient inline-flex min-h-[58px] min-w-[210px] items-center justify-center px-7 font-extrabold uppercase tracking-wide text-black shadow-gold">
                  Get a Quote
                </a>
                <a href="#services" className="inline-flex min-h-[58px] min-w-[210px] items-center justify-center border border-gold-500 bg-black/30 px-7 font-extrabold uppercase tracking-wide text-gold-400">
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-y border-white/10 bg-gradient-to-b from-[#090909] to-[#101010]">
          <div className="container-shell py-8">
            <p className="mb-5 text-sm font-bold uppercase tracking-[.16em] text-gold-500">Our Services</p>

            <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-2 md:divide-x md:divide-y-0 xl:grid-cols-4">
              {services.map((service) => (
                <article key={service.title} className="grid grid-cols-[72px_1fr] gap-5 px-0 py-8 md:px-7">
                  <div className="grid h-16 w-16 place-items-center border-2 border-gold-500 text-gold-500">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold uppercase leading-tight">{service.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-white/60">{service.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="grid grid-cols-1 border-t border-white/10 md:grid-cols-2 xl:grid-cols-4">
              {[
                ['100%', 'Safety Commitment'],
                ['48', 'States Covered'],
                ['24/7', 'Dispatch Support'],
                ['Professional', 'Experienced Team']
              ].map(([value, label]) => (
                <div key={label} className="border-b border-white/10 py-8 md:px-7 xl:border-b-0 xl:border-r xl:last:border-r-0">
                  <strong className="block text-4xl font-black uppercase text-gold-500">{value}</strong>
                  <span className="mt-1 block text-sm font-bold uppercase tracking-[.12em]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-black py-24">
          <div className="container-shell grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[.16em] text-gold-500">About Gold Miles USA</p>
              <h2 className="text-4xl font-black uppercase leading-tight tracking-tight md:text-6xl">
                Transportation that feels controlled from start to finish.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-white/65">
              <p>Gold Miles USA is a Florida-based carrier focused on safe, reliable, and technology-driven transportation across the United States.</p>
              <p>We combine modern equipment, responsive operations, and clear communication to help brokers and shippers move freight with confidence.</p>
            </div>
          </div>
        </section>

        <section id="equipment" className="bg-[#0b0b0b] py-24">
          <div className="container-shell grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">
            <div className="border border-gold-500 bg-gold-500/[.03] p-8 md:p-10">
              <p className="mb-7 text-sm font-bold uppercase tracking-[.16em] text-gold-500">Late-model fleet</p>
              {[
                'Freightliner tractors',
                "53' reefer & dry van trailers",
                'GPS-enabled operations',
                'Preventive maintenance'
              ].map((item) => (
                <div key={item} className="border-b border-white/10 py-5 text-2xl font-bold last:border-b-0">
                  {item}
                </div>
              ))}
            </div>
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[.16em] text-gold-500">Equipment</p>
              <h2 className="text-4xl font-black uppercase leading-tight tracking-tight md:text-6xl">Modern assets. Better execution.</h2>
              <p className="mt-7 text-lg leading-8 text-white/65">
                Our operating model is designed around equipment reliability, shipment visibility, and professional service at every stage of the load.
              </p>
            </div>
          </div>
        </section>

        <section id="safety" className="bg-[#111] py-24">
          <div className="container-shell grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:items-center lg:gap-24">
            <div className="mx-auto flex aspect-square w-full max-w-[390px] flex-col items-center justify-center rounded-full border-[10px] border-gold-500 shadow-gold">
              <span className="text-sm font-bold tracking-[.35em] text-gold-500">SAFETY</span>
              <strong className="text-6xl font-black">FIRST</strong>
              <small className="mt-3 text-white/55">Every load. Every mile.</small>
            </div>
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[.16em] text-gold-500">Safety & Compliance</p>
              <h2 className="text-4xl font-black uppercase leading-tight tracking-tight md:text-6xl">Professional standards are built into every move.</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  ['Driver Qualification', 'Professional standards from day one.'],
                  ['Preventive Maintenance', 'Fleet readiness and reliability.'],
                  ['DOT Compliance', 'Operational discipline and accountability.'],
                  ['Cargo Security', 'Protection from pickup through delivery.']
                ].map(([title, text]) => (
                  <div key={title} className="border border-white/10 p-5">
                    <strong className="block text-lg">{title}</strong>
                    <span className="mt-1 block text-sm text-white/55">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="careers" className="border-y border-gold-500/20 bg-gradient-to-r from-black to-[#171006] py-20">
          <div className="container-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[.16em] text-gold-500">Careers</p>
              <h2 className="text-4xl font-black uppercase leading-tight tracking-tight md:text-6xl">Drive with a company built for the long haul.</h2>
              <p className="mt-5 text-lg text-white/60">Professional drivers deserve clear communication, reliable equipment, and respect.</p>
            </div>
            <a href="mailto:recruiting@goldmilesusa.com?subject=Driver%20Application" className="gold-gradient inline-flex min-h-[58px] min-w-[220px] items-center justify-center px-7 font-extrabold uppercase tracking-wide text-black">
              Apply to Drive
            </a>
          </div>
        </section>

        <section id="quote" className="bg-[#080808] py-24">
          <div id="contact" className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[.16em] text-gold-500">Request a Quote</p>
              <h2 className="text-4xl font-black uppercase leading-tight tracking-tight md:text-6xl">Tell us what needs to move.</h2>
              <p className="mt-6 text-lg leading-8 text-white/60">Share your lane, equipment requirements, pickup date, and shipment details.</p>
              <div className="mt-8 grid gap-2 font-bold text-gold-500">
                <a href="mailto:info@goldmilesusa.com">info@goldmilesusa.com</a>
                <span>Orlando, Florida</span>
                <span>USDOT 4365561</span>
              </div>
            </div>

            <form action="mailto:info@goldmilesusa.com" method="post" encType="text/plain" className="border border-white/10 bg-[#0f0f0f] p-6 md:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-xs font-bold uppercase tracking-wide">
                  Name
                  <input className="border border-white/15 bg-black px-4 py-3 text-white outline-none focus:border-gold-500" name="name" required />
                </label>
                <label className="grid gap-2 text-xs font-bold uppercase tracking-wide">
                  Company
                  <input className="border border-white/15 bg-black px-4 py-3 text-white outline-none focus:border-gold-500" name="company" />
                </label>
                <label className="grid gap-2 text-xs font-bold uppercase tracking-wide">
                  Email
                  <input className="border border-white/15 bg-black px-4 py-3 text-white outline-none focus:border-gold-500" type="email" name="email" required />
                </label>
                <label className="grid gap-2 text-xs font-bold uppercase tracking-wide">
                  Phone
                  <input className="border border-white/15 bg-black px-4 py-3 text-white outline-none focus:border-gold-500" name="phone" />
                </label>
                <label className="grid gap-2 text-xs font-bold uppercase tracking-wide">
                  Origin
                  <input className="border border-white/15 bg-black px-4 py-3 text-white outline-none focus:border-gold-500" name="origin" />
                </label>
                <label className="grid gap-2 text-xs font-bold uppercase tracking-wide">
                  Destination
                  <input className="border border-white/15 bg-black px-4 py-3 text-white outline-none focus:border-gold-500" name="destination" />
                </label>
              </div>
              <label className="mt-4 grid gap-2 text-xs font-bold uppercase tracking-wide">
                Shipment details
                <textarea className="border border-white/15 bg-black px-4 py-3 text-white outline-none focus:border-gold-500" rows="5" name="details" />
              </label>
              <button className="gold-gradient mt-6 min-h-[56px] px-8 font-extrabold uppercase tracking-wide text-black" type="submit">
                Send Request
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black py-10">
        <div className="container-shell grid gap-8 md:grid-cols-[220px_1fr_1fr] md:items-center">
          <img src="/gold-miles-logo.png" alt="Gold Miles USA" className="w-[190px]" />
          <div className="grid">
            <strong>Gold Miles USA LLC</strong>
            <span className="text-white/50">Refrigerated & Dry Van Transportation</span>
          </div>
          <div className="grid md:text-right">
            <a href="mailto:info@goldmilesusa.com" className="text-gold-500">info@goldmilesusa.com</a>
            <span className="text-white/50">USDOT 4365561</span>
          </div>
        </div>
      </footer>
    </>
  );
}
