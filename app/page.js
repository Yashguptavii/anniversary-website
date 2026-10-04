const storyHighlights = [
  {
    title: 'The First Hello',
    text: 'It all started with a simple hello that turned into a forever kind of connection.',
  },
  {
    title: 'The Unforgettable Journey',
    text: 'Together we have laughed louder, loved deeper, and grown stronger with every chapter.',
  },
  {
    title: 'Forever More',
    text: 'Every year with you feels like a beautiful new beginning, filled with warmth and wonder.',
  },
]

const memories = [
  'The way you make ordinary days feel magical.',
  'Your laughter that turns even the quietest moments into joy.',
  'The love we have built, one beautiful memory at a time.',
  'The future we are creating, hand in hand, heart to heart.',
]

const timeline = [
  { year: '2018', label: 'Our story began', description: 'A chance meeting turned into something unforgettable.' },
  { year: '2020', label: 'Love deepened', description: 'Every day brought us closer and made our bond stronger.' },
  { year: '2024', label: 'A lifetime of happiness', description: 'We realized love is the best adventure we could ever take.' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 text-slate-800">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.25),transparent_45%)]" />
        <div className="mx-auto max-w-6xl px-6 py-10 md:py-16">
          <header className="flex items-center justify-between">
            <div className="text-lg font-semibold tracking-[0.25em] text-rose-700 uppercase">
              Forever
            </div>
            <nav className="hidden gap-8 text-sm font-medium text-slate-700 md:flex">
              <a href="#story">Our Story</a>
              <a href="#gallery">Memories</a>
              <a href="#celebration">Celebration</a>
            </nav>
          </header>

          <div className="mt-14 grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-rose-500">
                11 October
              </p>
              <h1 className="font-serif text-5xl leading-tight text-slate-900 md:text-7xl">
                Yash <span className="text-rose-500">&</span> Vandana
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Every heartbeat, every smile, every moment together has brought us closer to the beautiful life we are building. Happy anniversary, my love.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#celebration"
                  className="rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-600"
                >
                  Celebrate With Us
                </a>
                <a
                  href="#story"
                  className="rounded-full border border-rose-200 bg-white/70 px-6 py-3 text-sm font-semibold text-rose-700 transition hover:border-rose-300"
                >
                  Read Our Story
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-rose-200 blur-3xl" />
              <div className="absolute -right-4 bottom-8 h-24 w-24 rounded-full bg-pink-200 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/50 p-3 shadow-[0_30px_80px_rgba(244,114,182,0.12)] backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80"
                  alt="Romantic anniversary couple"
                  className="h-[520px] w-full rounded-[1.5rem] object-cover"
                />
                <div className="absolute inset-x-8 bottom-8 rounded-2xl bg-white/80 px-5 py-4 shadow-lg backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-rose-500">Together</p>
                  <p className="mt-2 font-serif text-3xl text-slate-900">Forever & Always</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rose-500">Our Story</p>
          <h2 className="mt-4 font-serif text-4xl text-slate-900 md:text-5xl">A love that keeps growing</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {storyHighlights.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-rose-100 bg-white/80 p-8 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-lg text-rose-600">
                ♥
              </div>
              <h3 className="font-serif text-2xl text-slate-900">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="bg-white/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rose-500">Memories</p>
            <h2 className="mt-4 font-serif text-4xl text-slate-900 md:text-5xl">Little moments, big love</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80',
              'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
              'https://images.unsplash.com/photo-1517841905240-472988c2477d?auto=format&fit=crop&w=900&q=80',
              'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=900&q=80',
            ].map((src, index) => (
              <div key={src} className="group overflow-hidden rounded-[2rem] border border-rose-100 bg-rose-50 shadow-sm">
                <img
                  src={src}
                  alt={`Anniversary memory ${index + 1}`}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] border border-rose-100 bg-gradient-to-br from-rose-100 to-pink-50 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rose-500">Promise</p>
            <h3 className="mt-4 font-serif text-4xl text-slate-900">To love, laugh, and stay</h3>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              With each passing year, my love for you grows stronger. Thank you for being my home, my comfort, and my greatest joy.
            </p>
          </div>

          <div className="space-y-6">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-6 rounded-[2rem] border border-rose-100 bg-white/70 p-6 shadow-sm">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-rose-100 font-serif text-2xl text-rose-600">
                  {item.year}
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-rose-500">{item.label}</p>
                  <p className="mt-2 leading-7 text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="celebration" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rose-300">Celebration</p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">Happy anniversary, my love.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Here&apos;s to all the memories we&apos;ve made and all the beautiful moments still waiting for us. May our love continue to bloom in every season of life.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.35em] text-rose-300">Love Notes</p>
              <ul className="mt-6 space-y-4 text-lg leading-7 text-slate-200">
                {memories.map((memory) => (
                  <li key={memory} className="flex items-start gap-3">
                    <span className="mt-1 text-rose-300">✦</span>
                    <span>{memory}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
