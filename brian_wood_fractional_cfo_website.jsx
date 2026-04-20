export default function BrianWoodWebsite() {
  const services = [
    {
      title: "CFO Diagnostic Sprint",
      price: "$7,500",
      description:
        "A focused review of cash flow, reporting, process gaps, and financial visibility issues, ending with a practical ninety-day action roadmap.",
      bullets: ["Cash flow review", "Reporting gap analysis", "Priority risk areas", "Ninety-day action plan"],
    },
    {
      title: "Monthly Fractional CFO",
      price: "$5,000 / $7,500 / $10,000",
      description:
        "Ongoing financial leadership for companies that need executive-level insight without the cost of a full-time CFO.",
      bullets: ["Monthly financial review", "Forecasting and cash planning", "KPI dashboards", "Owner strategy calls"],
    },
    {
      title: "Cleanup and Stabilization Projects",
      price: "Starting at $15,000",
      description:
        "For businesses dealing with unreliable books, delayed reporting, broken processes, or financial systems that no longer support growth.",
      bullets: ["Books cleanup", "Close process repair", "System improvement", "Decision-ready reporting"],
    },
  ];

  const problems = [
    "Cash is tighter than it should be, despite solid revenue",
    "Financial reports arrive late or cannot be trusted",
    "Growth has outpaced process, systems, or internal controls",
    "Margins are slipping and nobody can clearly explain why",
    "The owner lacks visibility into what is really happening",
    "The business needs CFO-level guidance without a full-time hire",
  ];

  const industries = [
    "Construction and trades",
    "Healthcare and multi-location service groups",
    "Agencies and professional services firms",
    "E-commerce and growth-stage businesses",
    "Family-owned and founder-led companies",
  ];

  const differentiators = [
    "Over forty years of accounting and finance leadership",
    "Controller-level depth with CFO-level strategic perspective",
    "Hands-on execution, not theory or generic advice",
    "Deep experience cleaning up messy environments",
    "Remote-friendly support with practical, direct communication",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
                Brian Wood | Fractional CFO and Financial Cleanup Advisor
              </p>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Straightforward financial help, stronger cash flow, and better decisions without the cost of a full-time CFO.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
                I help growing businesses untangle messy finances, improve cash flow, understand their numbers, and build practical systems that support profitable growth.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-2xl bg-slate-950 px-6 py-3 text-center text-base font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
                >
                  Schedule a Consultation
                </a>
                <a
                  href="#services"
                  className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-center text-base font-semibold text-slate-900 transition hover:-translate-y-0.5"
                >
                  View Services
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">Who I Help</h2>
              <p className="mt-3 text-slate-700">
                Founder-led and growing companies that have outgrown basic bookkeeping, need dependable financial insight, and want experienced guidance without the expense of a full-time executive hire.
              </p>
              <div className="mt-6 grid gap-3">
                {industries.map((industry) => (
                  <div key={industry} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800">
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-16 grid gap-8 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Why I Chose This Work</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Built for owner-led businesses, not bureaucracy.</h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              I built my career in fast-paced operating environments where results mattered. Over time, I realized I did my best work helping business owners solve problems, improve systems, and move faster — not sitting inside layers of management where simple decisions took months.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              That is why I focus on growing and founder-led companies today. Smart changes can make an immediate difference, and owners deserve practical advice that improves the business instead of adding noise.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Why Clients Value Working With Me</p>
            <div className="mt-4 grid gap-3">
              {[
                "Direct, honest communication",
                "Fast diagnosis of financial issues",
                "Calm support in messy situations",
                "Practical fixes instead of theory",
                "Deep experience across many industries",
                "Focused on outcomes, not appearances",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800">{item}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Common Problems</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              I step in when the financial side of the business is causing stress, confusion, or missed opportunities.
            </h2>
            <div className="mt-8 grid gap-4">
              {problems.map((problem) => (
                <div key={problem} className="rounded-2xl border border-slate-200 p-4 shadow-sm">
                  <p className="text-base text-slate-800">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Why Work With Brian</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Deep experience, practical judgment, and honest support for owners who need real answers.
            </h2>
            <div className="mt-8 grid gap-4">
              {differentiators.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-base text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Services</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Flexible ways to engage based on what your business needs right now.
            </h2>
            <p className="mt-4 text-lg text-slate-700">
              Whether you need an immediate diagnostic, monthly strategic support, or a cleanup project to restore
              order, each engagement is built around financial clarity and practical execution.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
                    {service.price}
                  </span>
                </div>
                <p className="mt-4 leading-7 text-slate-700">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-800">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 rounded-3xl border border-slate-200 bg-slate-50 p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Who This Is Built For</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Best fit for owners who want real progress, not endless meetings.</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-sm">Growing businesses that need stronger reporting and cash flow discipline.</div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">Owners frustrated by unclear numbers or slow internal processes.</div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">Companies needing CFO-level insight without a full-time hire.</div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">Leaders who value honesty, speed, and practical solutions.</div>
          </div>
        </div>
        <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">What You Can Expect</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">Experienced, down-to-earth finance support that helps owners move forward with confidence.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-950">Clear Communication</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                You will understand what is happening financially, what needs attention first, and what decisions make sense.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-950">Practical Priorities</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                I focus on the issues that materially improve cash flow, reporting quality, and owner visibility.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-950">Hands-On Insight</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                This is not generic consulting. It is practical guidance from someone who has worked through real operating challenges for decades.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-950">Scalable Support</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Engagements are designed to fit growing businesses that need structure now and stronger systems later.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-14 rounded-3xl border border-slate-200 bg-slate-50 p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Real Results and Proof</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Trusted by owners. Proven in the real world.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Helped grow one client from 1 location to 24 locations.",
              "Eliminated business debt within six months for a client.",
              "Retained by a founder for twenty-five years.",
              "Recommended by a CEO for integrity and execution.",
              "Built systems teams trusted and relied upon daily.",
              "Known for simplifying messy financial environments.",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-white p-5 shadow-sm text-slate-800">{item}</div>
            ))}
          </div>
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Client and Executive Reviews</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">What people say after working with Brian.</h2>
            <div className="mt-6 grid gap-4">
              {[
                "“Brian quickly identifies issues that have been draining time or money.”",
                "“Brian brings calm and structure to messy situations.”",
                "“Brian explains financial matters in plain English.”",
                "“Brian creates practical improvements that last.”",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 p-5 text-slate-800">{item}</div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Frequently Asked Questions</p>
            <div className="mt-6 space-y-5">
              <div><h3 className="font-semibold text-slate-950">Do I need a full-time CFO?</h3><p className="mt-2 text-sm leading-6 text-slate-700">Not always. Many growing businesses benefit from experienced part-time leadership before they need a full-time executive.</p></div>
              <div><h3 className="font-semibold text-slate-950">Do you work remotely?</h3><p className="mt-2 text-sm leading-6 text-slate-700">Yes. I work remotely with clients efficiently and can support teams in multiple locations.</p></div>
              <div><h3 className="font-semibold text-slate-950">What if our books are behind or messy?</h3><p className="mt-2 text-sm leading-6 text-slate-700">That is often when I am most helpful. Cleanup, stabilization, and restoring confidence in the numbers are common engagements.</p></div>
              <div><h3 className="font-semibold text-slate-950">What size businesses do you help?</h3><p className="mt-2 text-sm leading-6 text-slate-700">Usually owner-led or growing companies that need stronger reporting, cash flow clarity, and experienced financial guidance.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold text-slate-600">Founder Review</p>
            <p className="mt-4 text-sm leading-7 text-slate-700">Brian was instrumental in helping build our fractional accounting business. Clients trusted him, coworkers valued him, and he was the person people relied on when something needed to be fixed.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold text-slate-600">Client Outcome</p>
            <p className="mt-4 text-sm leading-7 text-slate-700">Within two years we grew from one location to twenty-four locations. Debt was eliminated quickly, systems improved, and the business was later sold profitably.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold text-slate-600">CEO Recommendation</p>
            <p className="mt-4 text-sm leading-7 text-slate-700">Brian brings order to complexity, communicates directly, works independently, and demonstrates complete integrity with confidential information and money matters.</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">What Happens on the First Call</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Straightforward conversation. No pressure. No sales routine.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">We will discuss what is working, what is not, where the numbers feel unclear, and whether I am the right fit to help. If I can help, I will explain the best next step clearly.</p>
          <p className="mt-6 text-base font-medium text-slate-800">Engagements range from focused projects to ongoing monthly advisory support, depending on need and complexity.</p>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Start the Conversation</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            If your business needs clearer numbers, cleaner reporting, or stronger cash flow, let’s talk.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Schedule an introductory call and we will talk honestly about what is working, what is not, and the best next step for your business.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://calendly.com/brianwood_fractional_cfo"
              className="rounded-2xl bg-white px-6 py-3 text-base font-semibold text-slate-950 shadow-sm transition hover:-translate-y-0.5"
            >
              Book a Straightforward Consultation
            </a>
            <a
              href="mailto:contact@brianwwoodcb.com"
              className="rounded-2xl border border-slate-700 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5"
            >
              Email Brian Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
