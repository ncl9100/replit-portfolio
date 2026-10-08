import { useEffect } from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Download, Github, Linkedin } from 'lucide-react';

const experiences = [
  {
    index: '01',
    role: 'Data Science Intern',
    org: 'NYU Entrepreneurial Institute',
    dates: 'Nov 2025 — Present',
    theme: 'current',
    points: [
      'Building LLM-assisted classification for 2,600+ startup records.',
      'Shipped five features to a BigQuery / React dashboard spanning 2,600+ annual coaching sessions and 5,000+ visits.',
      'Audited 31 production pipelines: resolved 24 discrepancies and identified seven untracked scripts.',
      'Leading deduplication of ~14,000 CRM entries.',
    ],
  },
  {
    index: '02',
    role: 'Full-Stack AI Developer',
    org: 'Amazon China',
    dates: 'Jun — Aug 2025',
    theme: 'past',
    points: [
      'Built a Flask / React AI trading assistant with scikit-learn price forecasts and sentiment signals.',
      'Wrote 26 pytest / Jest tests.',
    ],
  },
  {
    index: '03',
    role: 'Outreach Coordinator',
    org: 'NYU Data Science Club',
    dates: 'Feb 2026 — Present',
    theme: 'past',
    points: [
      'Co-organized the 2026 Datathon for 50+ people.',
      'Led sponsor outreach.',
    ],
  },
];

const skills = [
  { group: 'Languages', items: 'Python · SQL · R · Java · C/C++ · JavaScript' },
  { group: 'Data & ML', items: 'pandas · NumPy · scikit-learn · XGBoost' },
  { group: 'Platforms', items: 'BigQuery · DuckDB · PostgreSQL · Streamlit · Google Cloud Run' },
];

function SectionLabel({ number, children }: { number: string; children: string }) {
  return <div className="section-label mono"><span>{number}</span><span className="label-rule" aria-hidden="true" /><span>{children}</span></div>;
}

function App() {
  useEffect(() => {
    document.title = 'Nathan Liu — Data, products & applied AI';
    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.setAttribute('name', 'description');
      document.head.appendChild(description);
    }
    description.setAttribute('content', 'Nathan Liu is an NYU computer science and data science student turning messy real-world data into useful products.');
  }, []);

  return (
    <main className="site-shell min-h-[100dvh]">
      <a className="skip-link focus-ring" href="#main-content">Skip to content</a>
      <header className="site-nav top-0 z-50 border-b border-[#d8d0c1]">
        <nav aria-label="Main navigation" className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-10">
          <a className="brand focus-ring flex items-center gap-3 no-underline" href="#top" aria-label="Nathan Liu, home" data-testid="link-home">
            <span className="brand-mark">NL</span><span className="brand-name">Nathan Liu<span className="brand-period">.</span></span>
          </a>
          <div className="nav-links flex items-center gap-7">
            <a className="nav-link mono focus-ring" href="#work" data-testid="link-nav-work">Work</a>
            <a className="nav-link mono focus-ring" href="#projects" data-testid="link-nav-projects">Projects</a>
            <a className="nav-link mono focus-ring" href="#about" data-testid="link-nav-about">About</a>
          </div>
          <a className="nav-resume focus-ring mono" href="/nathan-liu-resume.pdf" download data-testid="link-resume-nav">
            Resume <Download size={14} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <div id="main-content">
        <section className="hero hero-grid" id="top" aria-labelledby="hero-title">
          <div className="hero-inner mx-auto max-w-[1440px] px-5 md:px-10">
            <div className="hero-copy">
              <div className="eyebrow mono reveal"><span className="status-dot" />NYU · New York, NY <span className="eyebrow-divider">/</span> CS + Data Science</div>
              <h1 className="hero-title reveal reveal-delay-1" id="hero-title">I make data<br /> <em>do something.</em></h1>
              <div className="hero-bottom reveal reveal-delay-2">
                <p className="hero-intro">I’m Nathan — a computer science and data science student who turns messy real-world data into useful products. My work spans analytics, applied ML, AI-assisted tools, and full-stack development.</p>
                <div className="hero-cta">
                  <a href="#projects" className="button-link button-primary focus-ring" data-testid="link-explore-projects">Explore selected work <ArrowDownRight size={17} aria-hidden="true" /></a>
                  <a href="/nathan-liu-resume.pdf" className="text-link mono focus-ring" download data-testid="link-resume-hero">Download résumé <Download size={14} aria-hidden="true" /></a>
                </div>
              </div>
            </div>
            <div className="hero-art reveal reveal-delay-3" aria-label="Abstract chart illustration representing data becoming useful">
              <div className="art-top mono"><span>FIELD NOTE 001</span><span>DATA → DECISIONS</span></div>
              <div className="chart-shell">
                <div className="chart-caption mono">Signal / noise</div>
                <div className="chart-number">2,600<span>+</span></div>
                <div className="chart-sub mono">startup records classified</div>
                <svg className="signal-chart" viewBox="0 0 420 130" role="img" aria-label="Illustrative rising data line">
                  <path d="M0 102H420M0 68H420M0 34H420" className="chart-grid-line" />
                  <path d="M0 98 C24 90 36 104 58 78 S91 86 110 62 S147 82 168 56 S201 73 223 42 S251 65 274 51 S311 54 330 25 S366 42 388 14 S405 18 420 8" className="chart-line" />
                  <circle cx="420" cy="8" r="5" className="chart-end" />
                </svg>
                <div className="chart-axis mono"><span>RAW INPUT</span><span>USEFUL OUTPUT</span></div>
              </div>
                  <div className="art-stamp mono"><span className="stamp-cross">+</span>Build<br />with evidence</div>
              <div className="art-corner mono">NYU / 2026</div>
            </div>
            <div className="hero-index mono"><span>SCROLL TO EXPLORE</span><span className="index-line" /><span>40°43′ N — 73°59′ W</span></div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Selected numbers">
          <div className="proof-inner mx-auto max-w-[1440px] px-5 md:px-10">
            <div className="proof-intro mono">Proof, not promises<span>↓</span></div>
            <div className="proof-stat"><strong>31</strong><span>production pipelines<br />audited</span></div>
            <div className="proof-stat"><strong>1.2<span>M</span></strong><span>labor logs in<br />MarginGuard</span></div>
            <div className="proof-stat"><strong>0.723</strong><span>ROC-AUC · ad CTR<br />prediction</span></div>
            <div className="proof-stat"><strong>5</strong><span>dashboard features<br />shipped</span></div>
          </div>
        </section>

        <section className="work-section content-section" id="work" aria-labelledby="work-heading">
          <div className="section-wrap mx-auto max-w-[1440px] px-5 md:px-10">
            <SectionLabel number="01" >Experience</SectionLabel>
            <div className="section-heading-row">
              <h2 className="section-heading" id="work-heading">From data<br /><em>to delivery.</em></h2>
              <p className="section-aside">The through line: finding the signal, making it legible, and shipping something people can use.</p>
            </div>
            <div className="experience-list">
              {experiences.map((job) => (
                <article className="experience-row" key={job.index} data-testid={`experience-${job.index}`}>
                  <div className="exp-number mono">{job.index}</div>
                  <div className="exp-main">
                    <div className="exp-heading">
                      <div><h3>{job.role}</h3><p>{job.org}</p></div>
                      <span className={`exp-period mono ${job.theme === 'current' ? 'period-current' : ''}`}>{job.dates}</span>
                    </div>
                    <ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
                  </div>
                  <ArrowUpRight className="row-arrow" size={19} aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section content-section" id="projects" aria-labelledby="projects-heading">
          <div className="section-wrap mx-auto max-w-[1440px] px-5 md:px-10">
            <SectionLabel number="02">Selected projects</SectionLabel>
            <div className="section-heading-row project-heading-row">
              <h2 className="section-heading" id="projects-heading">A few things<br /><em>made tangible.</em></h2>
              <p className="section-aside">Built around real constraints, measured against outcomes. No demo theater.</p>
            </div>
            <div className="project-grid">
              <article className="project-card project-hot" data-testid="project-hottakes">
                <div className="project-visual hottakes-visual" aria-hidden="true">
                  <div className="visual-meta mono"><span>01 / ENERGY MODEL</span><span>8760 HOURS</span></div>
                  <div className="hot-visual-main">
                    <div className="hot-mark">H<span>/</span>T</div>
                    <div className="hot-chart">
                      <div className="chart-label mono">BUILDING LOAD · SIMULATED</div>
                      <div className="mini-bars">{[31, 52, 38, 65, 49, 78, 43, 61, 89, 53, 74, 42, 67, 95, 56, 71, 46, 83, 59, 100].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div>
                      <div className="chart-label chart-label-bottom mono"><span>00:00</span><span>12:00</span><span>24:00</span></div>
                    </div>
                  </div>
                  <div className="visual-footer mono"><span>HOTTakes</span><span>NYU SUSTAINABILITY HACKATHON</span></div>
                </div>
                <div className="project-body">
                  <div className="project-kicker mono">01 — HACKATHON BUILD</div>
                  <div className="project-title-line"><h3>HotTakes</h3><span className="award-tag">2nd place · NYU Stern Sustainability Hackathon</span></div>
                  <p>Energy forecasting made inspectable: a full-year simulation paired with an assistant that helps interrogate the numbers.</p>
                  <div className="project-metrics">
                    <div><strong>8.5%</strong><span>MAPE · synthetic forecast</span></div>
                    <div><strong>18%</strong><span>WAPE · 7 real buildings</span></div>
                    <div><strong>8,760</strong><span>hours simulated</span></div>
                  </div>
                  <div className="project-stack"><span>Streamlit</span><span>Claude assistant</span><span>Forecasting</span><span>Oct 2026</span></div>
                </div>
              </article>
              <article className="project-card project-ctr" data-testid="project-ctr">
                <div className="project-visual ctr-visual" aria-hidden="true">
                  <div className="visual-meta mono"><span>02 / PREDICTION</span><span>AVAZU DATASET</span></div>
                  <div className="ctr-score mono"><span>ROC—AUC</span><strong>0.723</strong><span className="score-rule" /><span>LOG LOSS <b>0.411</b></span></div>
                  <div className="ctr-curve">
                    <svg viewBox="0 0 360 150" preserveAspectRatio="none">
                      <path d="M0 145H360M0 108H360M0 71H360M0 34H360" className="ctr-gridline" />
                      <path d="M0 145 C22 96 31 54 63 36 C92 20 120 24 153 18 C202 9 240 14 360 8 L360 150 L0 150Z" className="auc-fill" />
                      <path d="M0 145 C22 96 31 54 63 36 C92 20 120 24 153 18 C202 9 240 14 360 8" className="auc-line" />
                    </svg>
                    <span className="mono">MODEL PERFORMANCE</span>
                  </div>
                  <div className="visual-footer mono"><span>1,000,000 IMPRESSIONS</span><span>105 FEATURES</span></div>
                </div>
                <div className="project-body">
                  <div className="project-kicker mono">02 — APPLIED ML</div>
                  <div className="project-title-line"><h3>Ad CTR prediction</h3></div>
                  <p>Click-through prediction trained on one million Avazu ad impressions, with leakage-free feature engineering.</p>
                  <div className="project-metrics compact">
                    <div><strong>1M</strong><span>Avazu impressions</span></div>
                    <div><strong>105</strong><span>leakage-free features</span></div>
                  </div>
                  <div className="project-stack"><span>Python</span><span>scikit-learn</span><span>Feature engineering</span></div>
                </div>
              </article>
              <article className="project-card project-margin" data-testid="project-marginguard">
                <div className="project-visual margin-visual" aria-hidden="true">
                  <div className="visual-meta mono"><span>03 / OPERATIONS</span><span>DUCKDB PIPELINE</span></div>
                  <div className="margin-diagram">
                    <div className="data-stack"><span className="mono">LABOR LOGS</span><strong>1.2M</strong><span className="mini-line" /></div>
                    <span className="flow-arrow"><ArrowRight size={23} /></span>
                    <div className="engine-node"><span className="engine-ring">D</span><span className="mono">DUCKDB</span></div>
                    <span className="flow-arrow"><ArrowRight size={23} /></span>
                    <div className="data-stack output-stack"><span className="mono">BILLING</span><strong>90K</strong><span className="mini-line" /></div>
                  </div>
                  <div className="rank-strip mono"><span>PROJECTS SURFACED</span><b>TOP 3 <span>/ 405</span></b></div>
                  <div className="visual-footer mono"><span>MARGINGUARD</span><span>DATA → RANKED INSIGHT</span></div>
                </div>
                <div className="project-body">
                  <div className="project-kicker mono">03 — DATA ENGINEERING</div>
                  <div className="project-title-line"><h3>MarginGuard</h3><span className="award-tag">Top three of 405</span></div>
                  <p>A DuckDB pipeline joining labor and billing records to rank exposed projects.</p>
                  <div className="project-metrics compact">
                    <div><strong>1.2M</strong><span>labor logs</span></div>
                    <div><strong>90K</strong><span>billing records</span></div>
                    <div><strong>3 / 405</strong><span>ranked projects</span></div>
                  </div>
                  <div className="project-stack"><span>DuckDB</span><span>Data pipeline</span><span>Analytics</span></div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="about-section content-section" id="about" aria-labelledby="about-heading">
          <div className="section-wrap mx-auto max-w-[1440px] px-5 md:px-10">
            <SectionLabel number="03">The toolkit</SectionLabel>
            <div className="about-grid">
              <div className="about-copy">
                <h2 className="section-heading" id="about-heading">Curious by<br /><em>construction.</em></h2>
                <p>I like the part where the data is imperfect, the problem is real, and a clear answer can change what happens next.</p>
                <div className="education-card">
                  <div className="edu-seal">NYU</div>
                  <div><span className="mono edu-label">EDUCATION</span><h3>New York University</h3><p>BA, Computer Science and Data Science</p><div className="edu-meta"><span>Dean’s List</span><span>Expected May 2028</span></div></div>
                </div>
              </div>
              <div className="skills-panel">
                <div className="skills-panel-head mono"><span>TOOLS I REACH FOR</span><span>03 GROUPS</span></div>
                {skills.map((skill, index) => (
                  <div className="skill-row" key={skill.group}>
                    <span className="skill-index mono">0{index + 1}</span>
                    <div><h3>{skill.group}</h3><p>{skill.items}</p></div>
                    <span className="skill-plus" aria-hidden="true">+</span>
                  </div>
                ))}
                <div className="skills-note mono"><span>TOOLS FOLLOW THE QUESTION.</span><span>↗</span></div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer-section" id="contact">
          <div className="footer-wrap mx-auto max-w-[1440px] px-5 md:px-10">
            <SectionLabel number="04">Open channels</SectionLabel>
            <div className="footer-main">
              <h2>Let’s make<br /><em>something useful.</em></h2>
              <div className="footer-links">
                <a href="https://github.com/ncl9100" target="_blank" rel="noreferrer" className="social-link focus-ring" data-testid="link-github"><span><Github size={18} aria-hidden="true" />GitHub</span><ArrowUpRight size={18} aria-hidden="true" /></a>
                <a href="https://www.linkedin.com/in/nathan-ncl-liu/" target="_blank" rel="noreferrer" className="social-link focus-ring" data-testid="link-linkedin"><span><Linkedin size={18} aria-hidden="true" />LinkedIn</span><ArrowUpRight size={18} aria-hidden="true" /></a>
                <a href="/nathan-liu-resume.pdf" download className="social-link focus-ring" data-testid="link-footer-resume"><span><Download size={18} aria-hidden="true" />Résumé PDF</span><ArrowUpRight size={18} aria-hidden="true" /></a>
              </div>
            </div>
            <div className="footer-bottom mono"><span>© 2026 NATHAN LIU</span><a className="focus-ring" href="#top">BACK TO TOP ↑</a><span>BUILT WITH CURIOSITY</span></div>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default App;
