import './styles.css'

const root = document.getElementById('root')
root.innerHTML = `
  <header class="nav">
    <div class="container nav-inner">
      <div class="brand"><span class="brand-mark">⏱</span>One Minute Fitness<span class="brand-tag">Research</span></div>
      <nav class="nav-links"><a href="#research">Insight</a><a href="#how">How it works</a><a href="#waitlist" class="cta small">Join Waitlist</a></nav>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <span class="eyebrow">Research-inspired movement</span>
          <h1>The Smallest Workout You’ll Actually Do</h1>
          <p class="sub">Research-inspired one-minute movement prompts designed to help you start small, reduce friction, and build momentum when motivation is low.</p>
          <div class="hero-ctas">
            <a href="#waitlist" class="cta primary">Join the Waitlist</a>
            <a href="#examples" class="cta ghost">Try a Sample Prompt</a>
          </div>
          <ul class="hero-meta">
            <li>No equipment</li>
            <li>One minute a day</li>
            <li>Early access</li>
          </ul>
        </div>
        <div class="hero-visual">
          <div class="phone-mock">
            <div class="screen">
              <div class="rotator" aria-hidden="false">
                <div class="rot-item">
                  <div class="noti">
                    <div class="noti-icon">⏱️</div>
                    <div class="noti-body">
                      <div class="noti-top"><span class="noti-app">One Minute Fitness</span><span class="noti-time">now</span></div>
                      <div class="noti-title">Do one squat</div>
                      <div class="noti-text">A tiny move to start — tap to begin</div>
                    </div>
                  </div>
                </div>
                <div class="rot-item">
                  <div class="noti">
                    <div class="noti-icon">⏱️</div>
                    <div class="noti-body">
                      <div class="noti-top"><span class="noti-app">One Minute Fitness</span><span class="noti-time">now</span></div>
                      <div class="noti-title">Stand &amp; stretch for 30s</div>
                      <div class="noti-text">A tiny move to start — tap to begin</div>
                    </div>
                  </div>
                </div>
                <div class="rot-item">
                  <div class="noti">
                    <div class="noti-icon">⏱️</div>
                    <div class="noti-body">
                      <div class="noti-top"><span class="noti-app">One Minute Fitness</span><span class="noti-time">now</span></div>
                      <div class="noti-title">Walk around the room once</div>
                      <div class="noti-text">A tiny move to start — tap to begin</div>
                    </div>
                  </div>
                </div>
                <div class="rot-item">
                  <div class="noti">
                    <div class="noti-icon">⏱️</div>
                    <div class="noti-body">
                      <div class="noti-top"><span class="noti-app">One Minute Fitness</span><span class="noti-time">now</span></div>
                      <div class="noti-title">Balance on one foot for 20s</div>
                      <div class="noti-text">A tiny move to start — tap to begin</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="problem container">
      <div class="section-head">
        <span class="eyebrow">The problem</span>
        <h2>Why plans fail</h2>
        <p class="lead">Most fitness plans ask for too much when people have too little time or motivation — that’s where tiny prompts help.</p>
      </div>
      <div class="problem-grid">
        <div class="card"><span class="card-ico">🎯</span><span class="card-label">Too ambitious goals</span></div>
        <div class="card"><span class="card-ico">🧭</span><span class="card-label">No clear start</span></div>
        <div class="card"><span class="card-ico">📅</span><span class="card-label">Unpredictable schedules</span></div>
        <div class="card"><span class="card-ico">🔋</span><span class="card-label">Low motivation</span></div>
      </div>
    </section>

    <section id="research" class="research container">
      <div class="section-head">
        <span class="eyebrow">The science</span>
        <h2>Research-backed insights</h2>
        <p class="lead">Small, well-designed prompts work with how motivation actually behaves — not against it.</p>
      </div>
      <div class="insights">
        <div class="insight">
          <div class="insight-num">01</div>
          <h3>Starting is often the hardest part</h3>
          <p>Lowering the cost of the first action makes it far more likely to happen.</p>
        </div>
        <div class="insight">
          <div class="insight-num">02</div>
          <h3>Tiny actions reduce friction</h3>
          <p>A one-minute ask is small enough to do even on a low-motivation day.</p>
        </div>
        <div class="insight">
          <div class="insight-num">03</div>
          <h3>Clear endpoints make success feel achievable</h3>
          <p>A defined finish line turns “exercise” into a win you can actually reach.</p>
        </div>
      </div>
    </section>

    <section id="how" class="how container">
      <div class="section-head">
        <span class="eyebrow">How it works</span>
        <h2>Three steps, one minute</h2>
      </div>
      <div class="how-grid">
        <div class="how-step">
          <div class="step-badge">1</div>
          <div class="icon">🔔</div>
          <h3>Get a one-minute prompt</h3>
          <p class="muted">Delivered simply and clearly.</p>
        </div>
        <div class="how-step">
          <div class="step-badge">2</div>
          <div class="icon">🦵</div>
          <h3>Do one small movement</h3>
          <p class="muted">A tiny, achievable action.</p>
        </div>
        <div class="how-step">
          <div class="step-badge">3</div>
          <div class="icon">✅</div>
          <h3>Feel a small win</h3>
          <p class="muted">Momentum helps you try again tomorrow.</p>
        </div>
      </div>
    </section>

    <section id="examples" class="examples container">
      <div class="section-head">
        <span class="eyebrow">Examples</span>
        <h2>Example prompts</h2>
      </div>
      <div class="examples-grid">
        <div class="example-card"><span class="ex-tag">1 min</span><span class="ex-text">Do one squat</span></div>
        <div class="example-card"><span class="ex-tag">30 sec</span><span class="ex-text">Stand &amp; stretch</span></div>
        <div class="example-card"><span class="ex-tag">1 min</span><span class="ex-text">Walk around the room once</span></div>
        <div class="example-card"><span class="ex-tag">20 sec</span><span class="ex-text">Balance on one foot</span></div>
      </div>
    </section>

    <section id="waitlist" class="waitlist container">
      <div class="waitlist-card">
        <div class="waitlist-aside">
          <span class="eyebrow on-dark">Early access</span>
          <h2>Join the waitlist</h2>
          <p>Be first to try research-informed nudges that make starting effortless.</p>
          <ul class="aside-list">
            <li>Free during early access</li>
            <li>One minute a day</li>
            <li>No spam, ever</li>
          </ul>
        </div>
        <form class="waitlist-form" id="waitlistForm">
          <div class="field">
            <label for="wl-name">Name</label>
            <input id="wl-name" name="name" placeholder="Your name" required />
          </div>
          <div class="field">
            <label for="wl-email">Email</label>
            <input id="wl-email" name="email" placeholder="you@email.com" type="email" required />
          </div>
          <div class="field">
            <label for="wl-freq">How often do you exercise?</label>
            <select id="wl-freq" name="frequency">
              <option value="0">I don't exercise</option>
              <option value="1-2">1-2 times/week</option>
              <option value="3+">3+ times/week</option>
            </select>
          </div>
          <div class="field">
            <label for="wl-barrier">Biggest barrier to exercise</label>
            <input id="wl-barrier" name="barrier" placeholder="e.g. no time, low energy" />
          </div>
          <button class="cta primary block" type="submit">Join the Waitlist</button>
          <p class="small muted">We’ll only email early access updates.</p>
          <div id="msg" class="msg" aria-live="polite"></div>
        </form>
      </div>
    </section>

    <section class="faq container">
      <div class="section-head">
        <span class="eyebrow">FAQ</span>
        <h2>Questions, answered</h2>
      </div>
      <div class="faq-list">
        <details class="faq-item">
          <summary>Is this only for beginners?</summary>
          <p>No. Tiny prompts help people at any level maintain habit momentum.</p>
        </details>
        <details class="faq-item">
          <summary>Can one minute really help?</summary>
          <p>Yes — when it reduces friction to start, it often leads to further activity.</p>
        </details>
        <details class="faq-item">
          <summary>Is this based on research?</summary>
          <p>We draw on behavioral science principles to design prompts.</p>
        </details>
      </div>
    </section>

    <section class="final-cta container">
      <div class="final-panel">
        <h2>Start with one minute.</h2>
        <p>Build momentum with the smallest workout you’ll actually do.</p>
        <a href="#waitlist" class="cta light large">Join the Waitlist</a>
      </div>
    </section>

    <footer class="container footer">
      <p class="muted">Early access · One Minute Fitness · Research-inspired</p>
    </footer>
  </main>
`

const form = document.getElementById('waitlistForm')
const msg = document.getElementById('msg')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const fd = new FormData(form)
  const name = fd.get('name')
  msg.textContent = `Thanks, ${name}! We'll email you about early access.`
  form.reset()
})
