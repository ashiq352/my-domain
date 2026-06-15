import { useState, useEffect } from 'react'

const LOGO_URL =
  'https://isteam.wsimg.com/genai-assistant/logoagent/customer/2916305d-f163-4f7f-a0b7-fff65184fee9/session/9f3ac873-7422-4e80-9217-38b215a41be2/transparent-f311f71370b570c01a0dfb1860a5fcc8/logo-ak-f311f7.png'

const SUBTITLE = 'Software Engineer · AI-Driven Web Development'

const SERVICES = [
  {
    num: '01',
    title: 'AI-Assisted Development',
    desc: "Using LLMs as engineering partners — for code generation, architecture review, and rapid prototyping. AI isn't a shortcut; it's a force multiplier.",
  },
  {
    num: '02',
    title: 'Modern Web Architecture',
    desc: 'Full-stack systems built with React, TypeScript, and server-side rendering. Performant, accessible, and built to scale from day one.',
  },
  {
    num: '03',
    title: 'Building with LLMs',
    desc: 'Integrating large language models into real products — chat interfaces, intelligent agents, and AI-powered workflows that actually ship.',
  },
]

const PROJECTS = [
  {
    tag: 'Full-Stack',
    title: 'AI-Powered Web Platform',
    desc: 'Production-grade SaaS built with React, TypeScript and LLM-driven features — real-time generation, intelligent workflows, and scalable architecture.',
    tech: ['React', 'TypeScript', 'Node.js', 'OpenAI'],
  },
  {
    tag: 'LLM Integration',
    title: 'Intelligent Chat Interface',
    desc: 'Multi-turn conversational agent with context memory, tool use, and streaming responses — built for real product deployment.',
    tech: ['Next.js', 'Claude API', 'PostgreSQL', 'Tailwind'],
  },
  {
    tag: 'Frontend',
    title: 'Component Design System',
    desc: 'Accessible, themeable UI library with 40+ components using Radix UI primitives and Tailwind CSS — production ready from day one.',
    tech: ['React', 'Radix UI', 'Tailwind', 'Storybook'],
  },
  {
    tag: 'AI Tooling',
    title: 'LLM Dev Workflow',
    desc: 'Custom engineering toolchain integrating LLMs into the development loop — code review, documentation, and architecture decision support.',
    tech: ['TypeScript', 'Claude Code', 'ESLint', 'Vite'],
  },
]

export default function App() {
  const [typed, setTyped] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let i = 0
    const delay = setTimeout(() => {
      const timer = setInterval(() => {
        i++
        setTyped(SUBTITLE.slice(0, i))
        if (i >= SUBTITLE.length) clearInterval(timer)
      }, 55)
      return () => clearInterval(timer)
    }, 800)
    return () => clearTimeout(delay)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif" }}>
      {/* NAV */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(8,8,8,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(255,255,255,0.06)'
            : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          <a href="#hero">
            <img src={LOGO_URL} alt="AK" className="h-9 w-auto" />
          </a>
          <nav className="flex items-center gap-8">
            {[
              { href: '#portfolio', label: 'Portfolio ↗' },
              { href: '#contact', label: 'Contact' },
            ].map(link => (
              <a
                key={link.href}
                href={link.href}
                style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none' }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = '#ffffff')}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = '#9ca3af')}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col overflow-hidden"
        style={{ paddingTop: '64px' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 70% 60%, rgba(0,180,255,0.045) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 15% 25%, rgba(0,180,255,0.03) 0%, transparent 60%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-8 w-full flex-1 flex flex-col py-16">
          {/* Status badge */}
          <div>
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                border: '1px solid rgba(255,255,255,0.14)',
                color: '#9ca3af',
                fontFamily: "'Space Mono', monospace",
                fontSize: '13px',
              }}
            >
              <span
                className="status-dot w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: '#00c8ff' }}
              />
              Available for work
            </span>
          </div>

          {/* Name */}
          <div className="flex-1 flex items-center">
            <h1
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(72px, 11.5vw, 160px)',
                color: '#ffffff',
                letterSpacing: '-0.025em',
                lineHeight: 0.95,
              }}
            >
              Ashiq Khan
            </h1>
          </div>

          {/* Bottom row */}
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <p
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '15px',
                color: '#6b7280',
                letterSpacing: '0.02em',
              }}
            >
              {typed}
              <span className="cursor-blink" style={{ color: '#00c8ff' }}>
                |
              </span>
            </p>

            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href="#portfolio"
                style={{
                  background: '#00c8ff',
                  color: '#080808',
                  padding: '12px 24px',
                  borderRadius: '2px',
                  fontWeight: 600,
                  fontSize: '14px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'opacity 0.15s',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.88')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
              >
                View Portfolio →
              </a>
              <a
                href="#contact"
                style={{
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#ffffff',
                  padding: '12px 24px',
                  borderRadius: '2px',
                  fontWeight: 600,
                  fontSize: '14px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'border-color 0.15s',
                }}
                onMouseEnter={e =>
                  ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.5)')
                }
                onMouseLeave={e =>
                  ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)')
                }
              >
                Get in Touch ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-8 py-28 grid gap-8" style={{ gridTemplateColumns: '160px 1fr' }}>
          <div className="pt-1">
            <span
              style={{
                color: '#00c8ff',
                fontFamily: "'Outfit', sans-serif",
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              About
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <p
              style={{
                fontSize: 'clamp(20px, 2.4vw, 27px)',
                color: '#e5e7eb',
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              I build{' '}
              <span style={{ color: '#00c8ff' }}>fast, intelligent web experiences</span> by
              treating AI as a first-class engineering tool — not an afterthought. My workflow
              lives at the intersection of{' '}
              <span style={{ color: '#00c8ff' }}>modern architecture</span> and{' '}
              <span style={{ color: '#00c8ff' }}>LLM-assisted development</span>, where every
              decision is deliberate and every line of code has a reason.
            </p>
            <p
              style={{
                fontSize: '16px',
                color: '#6b7280',
                lineHeight: 1.75,
                maxWidth: '660px',
              }}
            >
              Currently focused on building production-grade web applications that leverage AI
              methodologies — from intelligent UI generation to automated workflows. The goal is
              always the same: software that feels inevitable.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section
        id="services"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-8 pt-16 pb-24">
          <div className="flex items-center gap-6 mb-14">
            <span
              style={{
                color: '#00c8ff',
                fontFamily: "'Outfit', sans-serif",
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                flexShrink: 0,
              }}
            >
              What I Do
            </span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}
            className="max-md:grid-cols-1"
          >
            {SERVICES.map(s => (
              <div
                key={s.num}
                style={{
                  background: '#0f0f0f',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '8px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  transition: 'border-color 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e =>
                  ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,200,255,0.2)')
                }
                onMouseLeave={e =>
                  ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)')
                }
              >
                <span
                  style={{
                    color: '#00c8ff',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                  }}
                >
                  {s.num}
                </span>
                <h3
                  style={{
                    color: '#ffffff',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '18px',
                    fontWeight: 700,
                    lineHeight: 1.35,
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-8 pt-16 pb-24">
          <div className="flex items-center gap-6 mb-14">
            <span
              style={{
                color: '#00c8ff',
                fontFamily: "'Outfit', sans-serif",
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                flexShrink: 0,
              }}
            >
              Portfolio
            </span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
          </div>

          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}
            className="max-md:grid-cols-1"
          >
            {PROJECTS.map(p => (
              <div
                key={p.title}
                style={{
                  background: '#0f0f0f',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '8px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  transition: 'border-color 0.2s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e =>
                  ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,200,255,0.2)')
                }
                onMouseLeave={e =>
                  ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)')
                }
              >
                <span
                  style={{
                    color: '#00c8ff',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  {p.tag}
                </span>
                <h3 style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700 }}>{p.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.75 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                  {p.tech.map(t => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,200,255,0.07)',
                        border: '1px solid rgba(0,200,255,0.15)',
                        color: '#9ca3af',
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '11px',
                        padding: '4px 12px',
                        borderRadius: '999px',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div
          className="max-w-7xl mx-auto px-8 py-28"
          style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: '32px' }}
        >
          <div className="pt-2">
            <span
              style={{
                color: '#00c8ff',
                fontFamily: "'Outfit', sans-serif",
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              Contact
            </span>
          </div>

          <div>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(32px, 5vw, 56px)',
                color: '#ffffff',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                marginBottom: '24px',
              }}
            >
              Let's build something
              <br />
              <span style={{ color: '#00c8ff' }}>remarkable together.</span>
            </h2>
            <p
              style={{
                fontSize: '17px',
                color: '#6b7280',
                maxWidth: '500px',
                lineHeight: 1.75,
                marginBottom: '40px',
              }}
            >
              Whether it's a greenfield product, an AI integration, or a performance overhaul —
              I'm ready to help. Reach out and let's talk.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="mailto:khanashiq4494@gmail.com"
                style={{
                  background: '#00c8ff',
                  color: '#080808',
                  padding: '14px 28px',
                  borderRadius: '2px',
                  fontWeight: 600,
                  fontSize: '14px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'opacity 0.15s',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.88')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
              >
                Send an Email →
              </a>
              <a
                href="https://github.com/ashiqbyldd"
                target="_blank"
                rel="noreferrer"
                style={{
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#ffffff',
                  padding: '14px 28px',
                  borderRadius: '2px',
                  fontWeight: 600,
                  fontSize: '14px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'border-color 0.15s',
                }}
                onMouseEnter={e =>
                  ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.5)')
                }
                onMouseLeave={e =>
                  ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)')
                }
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div
          className="max-w-7xl mx-auto px-8 py-8 flex items-center justify-between flex-wrap gap-4"
          style={{
            color: '#4b5563',
            fontSize: '12px',
            fontFamily: "'Space Mono', monospace",
          }}
        >
          <span>© {new Date().getFullYear()} Ashiq Khan</span>
          <span>Software Engineer · AI-Driven Web Development</span>
        </div>
      </footer>
    </div>
  )
}
