import Header from '../components/Header';
import { SnowflakeIcon, TrailerIcon, ClockIcon, ShieldIcon } from '../components/Icons';

const services = [
  { icon: <SnowflakeIcon />, title: 'Refrigerated Transportation', text: 'Temperature-controlled freight with dependable equipment and shipment visibility.' },
  { icon: <TrailerIcon />, title: 'Dry Van Transportation', text: 'Secure, on-time transportation for a wide range of freight and industries.' },
  { icon: <ClockIcon />, title: 'Dedicated Solutions', text: 'Consistent capacity and tailored transportation solutions for recurring lanes.' },
  { icon: <ShieldIcon />, title: 'Expedited Services', text: 'Responsive support for time-critical freight that cannot afford delays.' }
];

const standards = [
  ['24/7', 'Dispatch Support', 'Responsive communication whenever your load needs attention.'],
  ['48', 'States Covered', 'Nationwide service across the continental United States.'],
  ['100%', 'Safety Commitment', 'Professional operating standards on every shipment.'],
  ['4365561', 'USDOT', 'A fully identified and accountable transportation partner.']
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="home" className="hero-v2">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-shade" aria-hidden="true" />
          <div className="container-shell hero-content">
            <div className="hero-copy">
              <p className="eyebrow">Nationwide Freight Transportation</p>
              <h1>
                Reliable transportation.
                <span>Nationwide excellence.</span>
              </h1>
              <div className="gold-rule" />
              <p className="hero-lead">
                Gold Miles USA delivers refrigerated and dry van freight with dependable equipment,
                clear communication, and a safety-first mindset.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#quote">Get a Quote <span>→</span></a>
                <a className="button button-secondary" href="#services">Our Services <span>→</span></a>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Gold Miles key standards">
          <div className="container-shell trust-grid">
            {standards.map(([value, label, text]) => (
              <article key={label} className="trust-item">
                <strong>{value}</strong>
                <div><h2>{label}</h2><p>{text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section section-light">
          <div className="container-shell">
            <div className="section-heading centered">
              <p className="eyebrow">Our Services</p>
              <h2>Solutions that keep your business moving.</h2>
              <p>Flexible capacity, disciplined execution, and responsive communication from pickup to delivery.</p>
            </div>
            <div className="service-grid">
              {services.map((service, index) => (
                <article key={service.title} className="service-card">
                  <span className="service-number">0{index + 1}</span>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href="#quote">Request capacity <span>→</span></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="equipment" className="section equipment-section">
          <div className="container-shell split-grid">
            <div className="equipment-photo" role="img" aria-label="Gold Miles semi truck on the highway" />
            <div className="section-heading">
              <p className="eyebrow">Modern Equipment</p>
              <h2>Built for dependable execution.</h2>
              <p>
                Our operating model emphasizes equipment reliability, preventive maintenance, shipment visibility,
                and professional service on every mile.
              </p>
              <div className="feature-list">
                {['Late-model Freightliner tractors', "53' reefer and dry van capability", 'GPS-enabled operations', 'Preventive maintenance standards'].map((item) => (
                  <div key={item}><span>✓</span>{item}</div>
                ))}
              </div>
              <a className="text-link" href="#quote">Discuss your freight needs <span>→</span></a>
            </div>
          </div>
        </section>

        <section id="about" className="section section-dark">
          <div className="container-shell about-grid">
            <div>
              <p className="eyebrow">About Gold Miles USA</p>
              <h2>A transportation partner built on trust.</h2>
            </div>
            <div className="about-copy">
              <p>
                Gold Miles USA is a Florida-based transportation company specializing in refrigerated and dry van
                freight across the United States. We combine modern equipment, experienced operations, and a
                customer-focused approach to deliver reliable logistics solutions every day.
              </p>
              <div className="about-values">
                <div><strong>Safety-First</strong><span>Culture</span></div>
                <div><strong>Responsive</strong><span>Operations</span></div>
                <div><strong>Customer</strong><span>Focused</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="safety" className="section safety-section">
          <div className="container-shell safety-grid">
            <div className="safety-badge"><span>Safety</span><strong>First</strong><small>Every load. Every mile.</small></div>
            <div className="section-heading">
              <p className="eyebrow">Safety & Compliance</p>
              <h2>Professional standards are built into every move.</h2>
              <div className="mini-grid">
                {[
                  ['Driver Qualification', 'Professional standards from day one.'],
                  ['Preventive Maintenance', 'Fleet readiness and reliability.'],
                  ['DOT Compliance', 'Operational discipline and accountability.'],
                  ['Cargo Security', 'Protection from pickup through delivery.']
                ].map(([title, text]) => <div key={title}><strong>{title}</strong><span>{text}</span></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="careers" className="cta-band">
          <div className="container-shell cta-grid">
            <div><p className="eyebrow">Careers</p><h2>Drive with a company built for the long haul.</h2></div>
            <a className="button button-primary" href="mailto:recruiting@goldmilesusa.com?subject=Driver%20Application">Apply to Drive <span>→</span></a>
          </div>
        </section>

        <section id="quote" className="section quote-section">
          <div id="contact" className="container-shell quote-grid">
            <div className="section-heading">
              <p className="eyebrow">Request a Quote</p>
              <h2>Tell us what needs to move.</h2>
              <p>Share your lane, equipment requirements, pickup date, and shipment details.</p>
              <div className="contact-block">
                <a href="mailto:info@goldmilesusa.com">info@goldmilesusa.com</a>
                <span>Orlando, Florida</span>
                <span>USDOT 4365561</span>
              </div>
            </div>
            <form action="mailto:info@goldmilesusa.com" method="post" encType="text/plain" className="quote-form">
              <div className="form-grid">
                <label>Name<input name="name" required /></label>
                <label>Company<input name="company" /></label>
                <label>Email<input type="email" name="email" required /></label>
                <label>Phone<input name="phone" /></label>
                <label>Origin<input name="origin" /></label>
                <label>Destination<input name="destination" /></label>
              </div>
              <label>Shipment details<textarea rows="5" name="details" /></label>
              <button className="button button-primary" type="submit">Send Request <span>→</span></button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container-shell footer-grid">
          <img src="/gold-miles-logo.png" alt="Gold Miles USA" />
          <div><strong>Gold Miles USA LLC</strong><span>Refrigerated & Dry Van Transportation</span></div>
          <div><a href="mailto:info@goldmilesusa.com">info@goldmilesusa.com</a><span>USDOT 4365561</span></div>
        </div>
      </footer>
    </>
  );
}
