export default function App() {
  const services = [
    {
      title: 'CFO Diagnostic Sprint',
      price: '$7,500',
      description:
        'A focused review of cash flow, reporting, process gaps, and financial visibility issues, ending with a practical ninety-day action roadmap.',
      bullets: ['Cash flow review', 'Reporting gap analysis', 'Priority risk areas', 'Ninety-day action plan'],
    },
    {
      title: 'Monthly Fractional CFO',
      price: '$5,000 / $7,500 / $10,000',
      description:
        'Ongoing financial leadership for companies that need executive-level insight without the cost of a full-time CFO.',
      bullets: ['Monthly financial review', 'Forecasting and cash planning', 'KPI dashboards', 'Owner strategy calls'],
    },
    {
      title: 'Cleanup and Stabilization Projects',
      price: 'Starting at $15,000',
      description:
        'For businesses dealing with unreliable books, delayed reporting, broken processes, or financial systems that no longer support growth.',
      bullets: ['Books cleanup', 'Close process repair', 'System improvement', 'Decision-ready reporting'],
    },
  ]

  const problems = [
    'Cash is tighter than it should be, despite solid revenue',
    'Financial reports arrive late or cannot be trusted',
    'Growth has outpaced process, systems, or internal controls',
    'Margins are slipping and nobody can clearly explain why',
    'The owner lacks visibility into what is really happening',
    'The business needs CFO-level guidance without a full-time hire',
  ]

  const industries = [
    'Construction and trades',
    'Healthcare and multi-location service groups',
    'Agencies and professional services firms',
    'E-commerce and growth-stage businesses',
    'Family-owned and founder-led companies',
  ]

  const differentiators = [
    'Over forty years of accounting and finance leadership',
    'Controller-level depth with CFO-level strategic perspective',
    'Hands-on execution, not theory or generic advice',
    'Deep experience cleaning up messy environments',
    'Remote-friendly support with practical, direct communication',
  ]

  const founderValues = [
    'Direct, honest communication',
    'Fast diagnosis of financial issues',
    'Calm support in messy situations',
    'Practical fixes instead of theory',
    'Deep experience across many industries',
    'Focused on outcomes, not appearances',
  ]

  const proofPoints = [
    'Helped grow one client from 1 location to 24 locations.',
    'Eliminated business debt within six months for a client.',
    'Retained by a founder for twenty-five years.',
    'Recommended by a CEO for integrity and execution.',
    'Built systems teams trusted and relied upon daily.',
    'Known for simplifying messy financial environments.',
  ]

  const reviewSnippets = [
    '“Brian quickly identifies issues that have been draining time or money.”',
    '“Brian brings calm and structure to messy situations.”',
    '“Brian explains financial matters in plain English.”',
    '“Brian creates practical improvements that last.”',
  ]

  return (
    <div>
      <section className="hero-band">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Brian Wood | Fractional CFO and Financial Cleanup Advisor</p>
            <h1>Straightforward financial help, stronger cash flow, and better decisions without the cost of a full-time CFO.</h1>
            <p className="lead">
              I help growing businesses untangle messy finances, improve cash flow, understand their numbers, and build practical systems that support profitable growth.
            </p>
            <div className="button-row">
              <a href="#contact" className="button button-dark">Book a Straightforward Consultation</a>
              <a href="#services" className="button button-light">View Services</a>
            </div>
          </div>

          <div className="card">
            <h2>Who I Help</h2>
            <p>
              Founder-led and growing companies that have outgrown basic bookkeeping, need dependable financial insight, and want experienced guidance without the expense of a full-time executive hire.
            </p>
            <div className="pill-grid">
              {industries.map((industry) => (
                <div key={industry} className="pill">{industry}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container story-grid card card-large">
          <div>
            <p className="eyebrow">Why I Chose This Work</p>
            <h2>Built for owner-led businesses, not bureaucracy.</h2>
            <p>
              I built my career in fast-paced operating environments where results mattered. Over time, I realized I did my best work helping business owners solve problems, improve systems, and move faster — not sitting inside layers of management where simple decisions took months.
            </p>
            <p>
              That is why I focus on growing and founder-led companies today. Smart changes can make an immediate difference, and owners deserve practical advice that improves the business instead of adding noise.
            </p>
          </div>
          <div>
            <p className="eyebrow">Why Clients Value Working With Me</p>
            <div className="pill-grid">
              {founderValues.map((item) => (
                <div key={item} className="pill">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Common Problems</p>
            <h2>I step in when the financial side of the business is causing stress, confusion, or missed opportunities.</h2>
            <div className="stack">
              {problems.map((problem) => (
                <div key={problem} className="card small-card"><p>{problem}</p></div>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">Why Work With Brian</p>
            <h2>Deep experience, practical judgment, and honest support for owners who need real answers.</h2>
            <div className="stack">
              {differentiators.map((item) => (
                <div key={item} className="soft-card"><p>{item}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section soft-band">
        <div className="container">
          <div className="narrow">
            <p className="eyebrow">Services</p>
            <h2>Flexible ways to engage based on what your business needs right now.</h2>
            <p>
              Whether you need an immediate diagnostic, monthly strategic support, or a cleanup project to restore order, each engagement is built around financial clarity and practical execution.
            </p>
          </div>
          <div className="three-col">
            {services.map((service) => (
              <div key={service.title} className="card service-card">
                <div className="service-head">
                  <h3>{service.title}</h3>
                  <span className="badge">{service.price}</span>
                </div>
                <p>{service.description}</p>
                <div className="stack">
                  {service.bullets.map((bullet) => (
                    <div key={bullet} className="soft-card compact"><p>{bullet}</p></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container audience card card-large soft-background">
          <p className="eyebrow">Who This Is Built For</p>
          <h2>Best fit for owners who want real progress, not endless meetings.</h2>
          <div className="two-col top-gap">
            <div className="card small-card"><p>Growing businesses that need stronger reporting and cash flow discipline.</p></div>
            <div className="card small-card"><p>Owners frustrated by unclear numbers or slow internal processes.</p></div>
            <div className="card small-card"><p>Companies needing CFO-level insight without a full-time hire.</p></div>
            <div className="card small-card"><p>Leaders who value honesty, speed, and practical solutions.</p></div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container feature-grid card card-large">
          <div>
            <p className="eyebrow">What You Can Expect</p>
            <h2>Experienced, down-to-earth finance support that helps owners move forward with confidence.</h2>
          </div>
          <div className="two-col">
            <div className="soft-card"><h3>Clear Communication</h3><p>You will understand what is happening financially, what needs attention first, and what decisions make sense.</p></div>
            <div className="soft-card"><h3>Practical Priorities</h3><p>I focus on the issues that materially improve cash flow, reporting quality, and owner visibility.</p></div>
            <div className="soft-card"><h3>Hands-On Insight</h3><p>This is not generic consulting. It is practical guidance from someone who has worked through real operating challenges for decades.</p></div>
            <div className="soft-card"><h3>Scalable Support</h3><p>Engagements are designed to fit growing businesses that need structure now and stronger systems later.</p></div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container proof-band soft-background card card-large">
          <p className="eyebrow">Real Results and Proof</p>
          <h2>Trusted by owners. Proven in the real world.</h2>
          <div className="three-col top-gap">
            {proofPoints.map((item) => (
              <div key={item} className="card small-card"><p>{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container two-col">
          <div className="card card-large">
            <p className="eyebrow">Client and Executive Reviews</p>
            <h2>What people say after working with Brian.</h2>
            <div className="stack top-gap">
              {reviewSnippets.map((item) => (
                <div key={item} className="soft-card"><p>{item}</p></div>
              ))}
            </div>
          </div>
          <div className="card card-large soft-background">
            <p className="eyebrow">Frequently Asked Questions</p>
            <div className="faq-list top-gap">
              <div>
                <h3>Do I need a full-time CFO?</h3>
                <p>Not always. Many growing businesses benefit from experienced part-time leadership before they need a full-time executive.</p>
              </div>
              <div>
                <h3>Do you work remotely?</h3>
                <p>Yes. I work remotely with clients efficiently and can support teams in multiple locations.</p>
              </div>
              <div>
                <h3>What if our books are behind or messy?</h3>
                <p>That is often when I am most helpful. Cleanup, stabilization, and restoring confidence in the numbers are common engagements.</p>
              </div>
              <div>
                <h3>What size businesses do you help?</h3>
                <p>Usually owner-led or growing companies that need stronger reporting, cash flow clarity, and experienced financial guidance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials-pad-top">
        <div className="container three-col">
          <div className="card card-large">
            <p className="eyebrow-muted">Founder Review</p>
            <p>
              Brian was instrumental in helping build our fractional accounting business. Clients trusted him, coworkers valued him, and he was the person people relied on when something needed to be fixed.
            </p>
          </div>
          <div className="card card-large">
            <p className="eyebrow-muted">Client Outcome</p>
            <p>
              Within two years we grew from one location to twenty-four locations. Debt was eliminated quickly, systems improved, and the business was later sold profitably.
            </p>
          </div>
          <div className="card card-large">
            <p className="eyebrow-muted">CEO Recommendation</p>
            <p>
              Brian brings order to complexity, communicates directly, works independently, and demonstrates complete integrity with confidential information and money matters.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft-band center-text">
        <div className="container narrow">
          <p className="eyebrow">What Happens on the First Call</p>
          <h2>Straightforward conversation. No pressure. No sales routine.</h2>
          <p>
            We will discuss what is working, what is not, where the numbers feel unclear, and whether I am the right fit to help. If I can help, I will explain the best next step clearly.
          </p>
          <p className="emphasis">Engagements range from focused projects to ongoing monthly advisory support, depending on need and complexity.</p>
        </div>
      </section>

      <section id="contact" className="dark-band">
        <div className="container narrow center-text">
          <p className="eyebrow-dark">Start the Conversation</p>
          <h2>If your business needs clearer numbers, cleaner reporting, or stronger cash flow, let’s talk.</h2>
          <p className="lead-dark">
            Schedule an introductory call and we will talk honestly about what is working, what is not, and the best next step for your business.
          </p>
          <div className="button-row centered">
            <a href="https://calendly.com/brianwood_fractional_cfo" className="button button-white">Book a Straightforward Consultation</a>
            <a href="mailto:contact@brianwwoodcb.com" className="button button-outline">Email Brian Directly</a>
          </div>
        </div>
      </section>
    </div>
  )
}
