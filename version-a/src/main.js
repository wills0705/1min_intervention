import './styles.css'

const root = document.getElementById('root')
root.innerHTML = `
  <header class="nav">
    <div class="container nav-inner">
      <div class="brand"><span class="brand-mark">⏱</span>One Minute Fitness</div>
      <nav class="nav-links"><a href="#how">How it works</a><a href="#examples">Examples</a><a href="#waitlist" class="cta small">Join Waitlist</a></nav>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <span class="eyebrow">Daily one-minute challenges</span>
          <h1>Never Miss a Workout Day Again</h1>
          <p class="sub">Get one-minute fitness challenges that help you stay active, maintain momentum, and keep your streak alive—even on your busiest days.</p>
          <div class="hero-ctas">
            <a href="#waitlist" class="cta primary">Join the Waitlist</a>
            <a href="#examples" class="cta ghost">See Example Challenges</a>
          </div>
          <ul class="hero-meta">
            <li>No equipment</li>
            <li>One minute a day</li>
            <li>Keep your streak</li>
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
                      <div class="noti-title">30s Mobility Reset</div>
                      <div class="noti-text">Tap to start your 1‑minute challenge</div>
                    </div>
                  </div>
                </div>
                <div class="rot-item">
                  <div class="noti">
                    <div class="noti-icon">⏱️</div>
                    <div class="noti-body">
                      <div class="noti-top"><span class="noti-app">One Minute Fitness</span><span class="noti-time">now</span></div>
                      <div class="noti-title">10 push-ups</div>
                      <div class="noti-text">Tap to start your 1‑minute challenge</div>
                    </div>
                  </div>
                </div>
                <div class="rot-item">
                  <div class="noti">
                    <div class="noti-icon">⏱️</div>
                    <div class="noti-body">
                      <div class="noti-top"><span class="noti-app">One Minute Fitness</span><span class="noti-time">now</span></div>
                      <div class="noti-title">20 squats</div>
                      <div class="noti-text">Tap to start your 1‑minute challenge</div>
                    </div>
                  </div>
                </div>
                <div class="rot-item">
                  <div class="noti">
                    <div class="noti-icon">⏱️</div>
                    <div class="noti-body">
                      <div class="noti-top"><span class="noti-app">One Minute Fitness</span><span class="noti-time">now</span></div>
                      <div class="noti-title">30‑second stretch</div>
                      <div class="noti-text">Tap to start your 1‑minute challenge</div>
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
        <h2>Why consistency fails</h2>
        <p class="lead">Busy days, travel, low energy, and schedule changes often break workout streaks. Missing one day makes it easier to miss the next.</p>
      </div>
      <div class="problem-grid">
        <div class="card"><span class="card-ico">💼</span><span class="card-label">Busy workdays</span></div>
        <div class="card"><span class="card-ico">✈️</span><span class="card-label">Travel &amp; hotel stays</span></div>
        <div class="card"><span class="card-ico">😴</span><span class="card-label">Low energy mornings</span></div>
        <div class="card"><span class="card-ico">👨‍👩‍👧</span><span class="card-label">Family &amp; life interruptions</span></div>
      </div>
    </section>

    <section id="how" class="how container">
      <div class="section-head">
        <span class="eyebrow">How it works</span>
        <h2>Stay consistent in three steps</h2>
      </div>
      <div class="how-grid">
        <div class="how-step">
          <div class="step-badge">1</div>
          <div class="icon">📩</div>
          <h3>Receive a one-minute challenge</h3>
          <p class="muted">Delivered at a time that fits your day.</p>
        </div>
        <div class="how-step">
          <div class="step-badge">2</div>
          <div class="icon">🏃‍♂️</div>
          <h3>Complete it anywhere</h3>
          <p class="muted">No equipment, no setup — just one minute.</p>
        </div>
        <div class="how-step">
          <div class="step-badge">3</div>
          <div class="icon">🔥</div>
          <h3>Keep your momentum alive</h3>
          <p class="muted">Maintain streaks and small wins every day.</p>
        </div>
      </div>
    </section>

    <section id="examples" class="examples container">
      <div class="section-head">
        <span class="eyebrow">Examples</span>
        <h2>Example challenges</h2>
      </div>
      <div class="examples-grid">
        <div class="example-card"><span class="ex-tag">10 reps</span><span class="ex-text">Push-ups</span></div>
        <div class="example-card"><span class="ex-tag">20 reps</span><span class="ex-text">Squats</span></div>
        <div class="example-card"><span class="ex-tag">30 sec</span><span class="ex-text">Full-body stretch</span></div>
        <div class="example-card"><span class="ex-tag">1 min</span><span class="ex-text">Mobility reset</span></div>
      </div>
    </section>

    <section id="waitlist" class="waitlist container">
      <div class="waitlist-card">
        <div class="waitlist-aside">
          <span class="eyebrow on-dark">Early access</span>
          <h2>Join the waitlist</h2>
          <p>Be first to keep your streak alive with one-minute challenges that fit any day.</p>
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
            <label for="wl-level">Fitness level</label>
            <select id="wl-level" name="level">
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <button class="cta primary block" type="submit">Join the Waitlist</button>
          <p class="small muted">We won't spam you — just early access updates.</p>
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
          <summary>Is this a replacement for workouts?</summary>
          <p>No. These are micro-challenges to keep you consistent between workouts, not a full program.</p>
        </details>
        <details class="faq-item">
          <summary>Is one minute enough?</summary>
          <p>One minute keeps momentum and helps you avoid skipping the day — it's a nudge, not a full session.</p>
        </details>
        <details class="faq-item">
          <summary>Who is this for?</summary>
          <p>Anyone who cares about staying consistent — runners, gym-goers, and busy professionals.</p>
        </details>
      </div>
    </section>

    <section class="final-cta container">
      <div class="final-panel">
        <h2>Don’t let a busy day become a missed day.</h2>
        <p>Keep your streak alive with one-minute challenges built for real life.</p>
        <a href="#waitlist" class="cta light large">Join the Waitlist</a>
      </div>
    </section>

    <footer class="container footer">
      <p class="muted">Early access · One Minute Fitness · Not a launched product</p>
    </footer>
  </main>
`

// Simple form handler to show a message
const form = document.getElementById('waitlistForm')
const msg = document.getElementById('msg')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const fd = new FormData(form)
  const name = fd.get('name')
  msg.textContent = `Thanks, ${name}! We'll email you soon.`
  form.reset()
})
