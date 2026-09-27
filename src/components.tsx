import { FormEvent, ReactNode, useEffect, useState } from "react"
import { images } from "./data"

export function navigate(path: string) {
  window.history.pushState({}, "", path)
  window.dispatchEvent(new Event("app:navigate"))
  window.scrollTo({ top: 0, behavior: "smooth" })
}

export function Link({
  to,
  children,
  className = "",
  onClick,
  ariaLabel,
}: {
  to: string
  children: ReactNode
  className?: string
  onClick?: () => void
  ariaLabel?: string
}) {
  return (
    <a
      href={to}
      aria-label={ariaLabel}
      className={className}
      onClick={(event) => {
        event.preventDefault()
        navigate(to)
        onClick?.()
      }}
    >
      {children}
    </a>
  )
}

export function ButtonLink({
  to,
  children,
  variant = "primary",
  onClick,
}: {
  to: string
  children: ReactNode
  variant?: "primary" | "secondary" | "ghost" | "gold"
  onClick?: () => void
}) {
  return (
    <Link to={to} className={`button button-${variant}`} onClick={onClick}>
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  )
}

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Courses", "/courses"],
  ["Services", "/services"],
  ["Our Work", "/gallery"],
  ["Shop", "/shop"],
  ["Testimonials", "/testimonials"],
  ["Contact", "/contact"],
]

export function Header({ path }: { path: string }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-inner">
          <Link
            to="/"
            className="brand"
            ariaLabel="Kalpana Chawla Tailoring Institute home"
          >
            <img src={images.logo} alt="Kalpana Chawla Tailoring Institute" />
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {nav.map(([label, href]) => (
              <Link
                key={href}
                to={href}
                className={
                  path === href
                    ? "active"
                    : path.startsWith(`${href}/`)
                      ? "active"
                      : ""
                }
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <ButtonLink to="/courses">Join a Course</ButtonLink>
            <button
              className="menu-button"
              aria-label="Open navigation menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {nav.map(([label, href]) => (
            <Link key={href} to={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link to="/faq" onClick={() => setOpen(false)}>
            FAQ
          </Link>
        </nav>
        <ButtonLink to="/courses" onClick={() => setOpen(false)}>
          Join a Course
        </ButtonLink>
        <ButtonLink to="/contact" variant="secondary" onClick={() => setOpen(false)}>
          WhatsApp
        </ButtonLink>
      </div>
    </>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={images.logo} alt="Kalpana Chawla Tailoring Institute" />
          <p>
            Hands-on tailoring and Aari training for women, along with custom
            stitching services and women’s fashion products.
          </p>
        </div>
        <FooterLinks
          title="Quick links"
          links={[
            ["About", "/about"],
            ["Courses", "/courses"],
            ["Services", "/services"],
            ["Our Work", "/gallery"],
            ["Shop", "/shop"],
            ["FAQ", "/faq"],
          ]}
        />
        <FooterLinks
          title="Learn & stitch"
          links={[
            ["Tailoring", "/courses/tailoring-foundations"],
            ["Aari Work", "/courses/aari-work"],
            ["Embroidery", "/courses/embroidery"],
            ["Blouse Stitching", "/services/custom-blouse-stitching"],
            ["Custom Tailoring", "/services"],
          ]}
        />
        <div className="footer-column">
          <h3>Contact</h3>
          <p>Contact details available soon</p>
          <Link to="/contact">Send an enquiry</Link>
          <Link to="/contact">Get directions</Link>
          <div className="social-row" aria-label="Social links">
            <span>Instagram</span>
            <span>Facebook</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <span>
            © 2026 Kalpana Chawla Tailoring Institute. All Rights Reserved.
          </span>
          <span>Learn · Create · Stitch · Grow</span>
        </div>
      </div>
    </footer>
  )
}

function FooterLinks({ title, links }: { title: string links: string[][] }) {
  return (
    <div className="footer-column">
      <h3>{title}</h3>
      {links.map(([label, path]) => (
        <Link key={path + label} to={path}>
          {label}
        </Link>
      ))}
    </div>
  )
}

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
  children,
}: {
  eyebrow: string
  title: string
  copy: string
  image?: string
  children?: ReactNode
}) {
  return (
    <section className="page-hero">
      <div className="container page-hero-grid">
        <div className="page-hero-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{copy}</p>
          {children && <div className="button-row">{children}</div>}
        </div>
        {image && (
          <div className="page-hero-image">
            <img src={image} alt="" />
            <span className="image-stitch" aria-hidden="true" />
          </div>
        )}
      </div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
}: {
  eyebrow?: string
  title: string
  copy?: string
  align?: "left" | "center"
}) {
  return (
    <div className={`section-heading ${align === "center" ? "center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  )
}

export function EmptyState({ children }: { children: ReactNode }) {
  return <div className="empty-state">{children}</div>
}

export function EnquiryForm({
  kind = "general",
  upload = false,
}: {
  kind?: "general" | "service"
  upload?: boolean
}) {
  const [sent, setSent] = useState(false)
  const submit = (event: FormEvent) => {
    event.preventDefault()
    setSent(true)
  }
  return (
    <form className="form-card" onSubmit={submit}>
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input name="name" required placeholder="Your name" />
        </label>
        <label>
          <span>Phone</span>
          <input
            name="phone"
            type="tel"
            required
            placeholder="Your phone number"
          />
        </label>
        {kind === "general" && (
          <>
            <label>
              <span>Email (optional)</span>
              <input name="email" type="email" placeholder="you@example.com" />
            </label>
            <label>
              <span>I am interested in</span>
              <select name="interest" defaultValue="Joining a Course">
                <option>Joining a Course</option>
                <option>Stitching Service</option>
                <option>Shopping</option>
                <option>General Enquiry</option>
              </select>
            </label>
          </>
        )}
        {kind === "service" && (
          <>
            <label>
              <span>Service</span>
              <select name="service">
                <option>Custom Blouse Stitching</option>
                <option>Dress Stitching</option>
                <option>Aari / Embroidery Work</option>
                <option>Other Custom Stitching</option>
              </select>
            </label>
            <label>
              <span>Preferred date</span>
              <input name="date" type="date" />
            </label>
          </>
        )}
        {upload && (
          <label className="full-field upload-field">
            <span>Reference image</span>
            <input name="reference" type="file" accept="image/*" />
            <small>
              Upload a clear image of your preferred design, if available.
            </small>
          </label>
        )}
        <label className="full-field">
          <span>Message</span>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Tell us how we can help"
          />
        </label>
      </div>
      {sent && (
        <p className="form-success" role="status">
          Thank you. Your enquiry has been prepared. Please contact the
          institute to confirm it.
        </p>
      )}
      <button className="button button-primary" type="submit">
        {kind === "service" ? "Request a Quote" : "Send Enquiry"}
        <span aria-hidden="true">→</span>
      </button>
    </form>
  )
}

export function FinalCta({
  title = "Ready to Start Learning?",
  copy = "Take your first step towards learning a practical and creative skill.",
}: {
  title?: string
  copy?: string
}) {
  return (
    <section className="final-cta">
      <div className="container final-cta-inner">
        <div>
          <span className="eyebrow light">Your next step</span>
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
        <div className="button-row">
          <ButtonLink to="/courses" variant="gold">
            Explore Courses
          </ButtonLink>
          <ButtonLink to="/contact" variant="ghost">
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}


