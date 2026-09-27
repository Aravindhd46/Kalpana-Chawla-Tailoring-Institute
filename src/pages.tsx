import { useMemo, useState } from "react"
import {
  ButtonLink,
  EmptyState,
  EnquiryForm,
  FinalCta,
  Link,
  PageHero,
  SectionHeading,
} from "./components"
import { courses, faqs, gallery, images, products, services } from "./data"

function CourseCard({ course }: { course: typeof courses[number] }) {
  return (
    <article className="content-card">
      <Link to={`/courses/${course.slug}`} className="card-image">
        <img src={course.image} alt="" />
        <span className="card-tag">{course.category}</span>
      </Link>
      <div className="card-body">
        <div className="card-kicker">{course.level}</div>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <div className="card-meta">
          <span>{course.duration}</span>
          <span>{course.fee}</span>
        </div>
        <ButtonLink to={`/courses/${course.slug}`} variant="secondary">
          View Course
        </ButtonLink>
      </div>
    </article>
  )
}

function ServiceCard({ service }: { service: typeof services[number] }) {
  return (
    <article className="content-card">
      <Link to={`/services/${service.slug}`} className="card-image">
        <img src={service.image} alt="" />
      </Link>
      <div className="card-body">
        <div className="card-kicker">Custom stitching</div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <ButtonLink to={`/services/${service.slug}`} variant="secondary">
          Request Quote
        </ButtonLink>
      </div>
    </article>
  )
}

function ProductCard({ product }: { product: typeof products[number] }) {
  return (
    <article className="product-card">
      <Link to={`/shop/${product.slug}`} className="card-image">
        <img src={product.image} alt="" />
        <span className="availability">Enquire for availability</span>
      </Link>
      <div className="card-body">
        <span className="card-kicker">{product.category}</span>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className="product-actions">
          <ButtonLink to={`/shop/${product.slug}`} variant="secondary">
            View Product
          </ButtonLink>
          <ButtonLink to="/contact">Order via WhatsApp</ButtonLink>
        </div>
      </div>
    </article>
  )
}

export function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              Offline tailoring institute for women
            </span>
            <h1>
              Learn Tailoring.
              <br />
              <em>Create With Confidence.</em>
            </h1>
            <p className="hero-lead">
              Practical, hands-on tailoring and Aari training for women, guided
              by 28 years of experience.
            </p>
            <div className="trust-line">
              <span>100% Offline</span>
              <span>Hands-On Training</span>
              <span>No Age Limit</span>
              <span>No Experience Required</span>
            </div>
            <div className="button-row">
              <ButtonLink to="/courses">Explore Courses</ButtonLink>
              <ButtonLink to="/contact" variant="secondary">
                Contact Us
              </ButtonLink>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-main-image">
              <img
                src={images.hero}
                alt="Woman practising tailoring at a sewing machine"
              />
            </div>
            <div className="experience-seal">
              <strong>28+</strong>
              <span>Years of experience</span>
            </div>
            <div className="hero-note">
              <span className="thread-icon" />
              <div>
                <strong>Learn in person</strong>
                <small>Practice with guidance</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        <div className="container stats-grid">
          {[
            ["28+", "Years experience"],
            ["100%", "Hands-on training"],
            ["No Age", "Limit"],
            ["Beginner", "Friendly"],
            ["Affordable", "Learning"],
          ].map(([value, label]) => (
            <div className="stat" key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section paths-section">
        <div className="container">
          <SectionHeading
            eyebrow="Choose your path"
            title="What can we help you with?"
            copy="Three clear ways to learn, create and find something made for you."
            align="center"
          />
          <div className="path-grid">
            {[
              {
                number: "01",
                label: "LEARN",
                title: "Learn Tailoring & Aari Work",
                copy: "Hands-on offline training designed for beginners and learners at different skill levels.",
                to: "/courses",
                cta: "Explore Courses",
                image: images.machine,
              },
              {
                number: "02",
                label: "STITCH",
                title: "Custom Stitching Services",
                copy: "Get women’s garments stitched according to your requirements and preferred design.",
                to: "/services",
                cta: "Explore Services",
                image: images.blouse,
              },
              {
                number: "03",
                label: "SHOP",
                title: "Sarees & Women’s Wear",
                copy: "Explore our collection of sarees, blouses and selected women’s fashion products.",
                to: "/shop",
                cta: "Visit Shop",
                image: images.saree,
              },
            ].map((item) => (
              <article className="path-card" key={item.label}>
                <div className="path-image">
                  <img src={item.image} alt="" />
                  <span>{item.number}</span>
                </div>
                <div className="path-body">
                  <div className="card-kicker">{item.label}</div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <ButtonLink to={item.to} variant="secondary">
                    {item.cta}
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cream-section">
        <div className="container">
          <SectionHeading
            eyebrow="Why choose us"
            title="Experience that guides every stitch"
            copy="Warm, practical learning built around doing—not just watching."
          />
          <div className="feature-grid">
            {[
              [
                "01",
                "28 Years of Experience",
                "Learn from an experienced tailoring mentor.",
              ],
              [
                "02",
                "Practical Learning",
                "Learn by doing through hands-on training.",
              ],
              [
                "03",
                "Beginner Friendly",
                "No previous tailoring experience is required.",
              ],
              [
                "04",
                "Affordable Courses",
                "Skill-focused learning at accessible prices.",
              ],
            ].map(([number, title, copy]) => (
              <article className="feature-card" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div className="split-image mentor-image">
            <img
              src={images.hands}
              alt="Experienced artisan working carefully with fabric"
            />
            <div className="image-caption">
              <strong>28+</strong>
              <span>Years of practical experience</span>
            </div>
          </div>
          <div className="split-copy">
            <SectionHeading
              eyebrow="Learn from experience"
              title="Guidance grounded in real garment work"
              copy="With 28 years of experience in tailoring and practical garment work, our training focuses on helping learners understand, practise and improve their skills."
            />
            <ul className="check-list">
              <li>Patient, in-person mentor guidance</li>
              <li>Demonstration followed by practice</li>
              <li>Feedback focused on steady improvement</li>
            </ul>
            <ButtonLink to="/about" variant="secondary">
              Meet Our Mentor
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section burgundy-section">
        <div className="container">
          <SectionHeading
            eyebrow="Offline courses"
            title="Learn Skills You Can Create With"
            copy="Choose a practical skill and learn it in person, one step at a time."
          />
          <div className="cards-grid">
            {courses.slice(0, 3).map((course) => (
              <CourseCard course={course} key={course.slug} />
            ))}
          </div>
          <div className="section-action">
            <ButtonLink to="/courses" variant="gold">
              View All Courses
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section skill-section">
        <div className="container split-section reverse-mobile">
          <div className="split-copy">
            <SectionHeading
              eyebrow="Practical outcomes"
              title="Master practical tailoring skills"
              copy="The exact skills covered depend on your selected course. Our approach keeps every lesson grounded in practical application."
            />
            <div className="skill-chips">
              {[
                "Cutting",
                "Measurements",
                "Pattern understanding",
                "Stitching",
                "Garment finishing",
                "Blouse making",
                "Aari work",
                "Embroidery",
              ].map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
          <div className="split-image">
            <img
              src={images.machine}
              alt="Sewing machine ready for practical tailoring"
            />
          </div>
        </div>
      </section>

      <section className="beginner-banner">
        <div className="container beginner-grid">
          <div className="beginner-number">01</div>
          <div>
            <span className="eyebrow">Everyone starts somewhere</span>
            <h2>Never Used a Sewing Machine Before?</h2>
            <p>
              That’s okay. Our training is designed to help beginners learn step
              by step through practical, hands-on sessions.
            </p>
          </div>
          <div className="beginner-actions">
            <span>No previous experience required</span>
            <span>No age limit</span>
            <ButtonLink to="/courses">Start Learning</ButtonLink>
          </div>
        </div>
      </section>

      <GalleryPreview />

      <section className="section cream-section">
        <div className="container split-section">
          <div className="split-image">
            <img
              src={images.blouse}
              alt="Detailed blouse and custom tailoring inspiration"
            />
          </div>
          <div className="split-copy">
            <SectionHeading
              eyebrow="Custom tailoring"
              title="Have Something You Want Stitched?"
              copy="From custom blouses to women’s dresses and other garments, we provide stitching services based on your requirements."
            />
            <p className="muted-note">
              Share your design reference and requirements to begin.
            </p>
            <div className="button-row">
              <ButtonLink to="/services">Request Stitching</ButtonLink>
              <ButtonLink to="/contact" variant="secondary">
                WhatsApp Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="The shop"
            title="Explore Our Collection"
            copy="Discover currently available sarees, blouses and selected women’s wear."
          />
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard product={product} key={product.slug} />
            ))}
          </div>
        </div>
      </section>

      <TestimonialsPreview />
      <FinalCta />
    </>
  )
}

function GalleryPreview() {
  return (
    <section className="section gallery-section">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading
            eyebrow="Our work"
            title="See What We Create"
            copy="A visual look at tailoring, handwork and garment inspiration."
          />
          <ButtonLink to="/gallery" variant="secondary">
            View Our Work
          </ButtonLink>
        </div>
        <div className="gallery-preview">
          {gallery.slice(0, 5).map((item, index) => (
            <figure
              className={`gallery-item item-${index + 1}`}
              key={item.title}
            >
              <img src={item.image} alt={item.title} />
              <figcaption>
                <span>{item.category}</span>
                <strong>{item.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsPreview() {
  return (
    <section className="section cream-section testimonials-section">
      <div className="container">
        <SectionHeading
          eyebrow="Stories & reviews"
          title="What Our Students & Customers Say"
          copy="Verified institute testimonials and Google review information will be shown here when provided."
          align="center"
        />
        <EmptyState>
          <span className="quote-mark">“</span>
          <h3>Real stories deserve real words.</h3>
          <p>
            We do not publish fabricated testimonials, names, ratings or review
            counts.
          </p>
          <ButtonLink to="/testimonials" variant="secondary">
            View Testimonials
          </ButtonLink>
        </EmptyState>
      </div>
    </section>
  )
}

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the institute"
        title="Learn in person. Practise with guidance. Build real skills."
        copy="Kalpana Chawla Tailoring Institute provides offline, hands-on tailoring and Aari training for women in a supportive learning environment."
        image={images.hands}
      >
        <ButtonLink to="/courses">Explore Courses</ButtonLink>
        <ButtonLink to="/contact" variant="secondary">
          Contact Us
        </ButtonLink>
      </PageHero>
      <section className="section">
        <div className="container story-grid">
          <div>
            <span className="large-number">28</span>
            <span className="large-number-label">Years of experience</span>
          </div>
          <div className="story-copy">
            <SectionHeading
              eyebrow="Our story"
              title="A practical approach shaped by experience"
              copy="The institute is built around a simple idea: tailoring is learned best by working with fabric, tools and guidance in person. Our mentor brings 28 years of garment and tailoring experience to every learner’s journey."
            />
            <p>
              We welcome complete beginners, hobby learners and women looking to
              improve an existing skill. There is no age limit and no previous
              experience is required.
            </p>
          </div>
        </div>
      </section>
      <section className="section cream-section">
        <div className="container split-section">
          <div className="split-image mentor-image">
            <img src={images.hero} alt="Woman learning at a sewing machine" />
          </div>
          <div className="split-copy">
            <SectionHeading
              eyebrow="Meet the mentor"
              title="Patient guidance, backed by 28 years of practice"
              copy="Our experienced mentor demonstrates each technique, supports hands-on practice and offers feedback that helps learners understand both the method and the finish."
            />
            <p className="muted-note">
              The mentor’s name and portrait will be added when confirmed by the
              institute.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="How we teach"
            title="A clear, practical learning rhythm"
            align="center"
          />
          <div className="process-grid">
            {[
              ["01", "Observe", "Watch the technique demonstrated clearly."],
              [
                "02",
                "Practise",
                "Work with tools, fabric and guidance in class.",
              ],
              [
                "03",
                "Improve",
                "Receive practical feedback and refine the finish.",
              ],
              ["04", "Create", "Apply your growing skills with confidence."],
            ].map(([n, title, copy]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section burgundy-section">
        <div className="container">
          <SectionHeading
            eyebrow="Who can join"
            title="A welcoming place to begin"
          />
          <div className="audience-grid">
            {[
              "Complete beginners",
              "Homemakers",
              "Students",
              "Working women",
              "Hobby learners",
              "Existing tailors",
              "Women interested in Aari work",
              "Women building practical skills",
            ].map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  )
}

export function CoursesPage() {
  const [filter, setFilter] = useState("All")
  const categories = ["All", "Tailoring", "Aari", "Embroidery", "Advanced"]
  const filtered =
    filter === "All"
      ? courses
      : courses.filter((course) => course.category === filter)
  return (
    <>
      <PageHero
        eyebrow="100% offline learning"
        title="Tailoring & Aari Courses"
        copy="Practical offline training designed for women at different experience levels. Anyone can learn—no previous experience required."
        image={images.machine}
      >
        <ButtonLink to="/contact">Enquire Now</ButtonLink>
      </PageHero>
      <section className="section">
        <div className="container">
          <div className="filter-row" aria-label="Course categories">
            {categories.map((item) => (
              <button
                key={item}
                className={
                  filter === item ? "filter-button active" : "filter-button"
                }
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="cards-grid">
            {filtered.map((course) => (
              <CourseCard course={course} key={course.slug} />
            ))}
          </div>
        </div>
      </section>
      <section className="offline-note">
        <div className="container">
          <strong>This is not an online course platform.</strong>
          <span>Every class is in person, practical and guided.</span>
        </div>
      </section>
      <FinalCta />
    </>
  )
}

export function CourseDetailPage({ slug }: { slug: string }) {
  const course = courses.find((item) => item.slug === slug) || courses[0]
  return (
    <>
      <PageHero
        eyebrow={`${course.category} · Offline course`}
        title={course.title}
        copy={course.description}
        image={course.image}
      >
        <ButtonLink to="/contact">Enquire About This Course</ButtonLink>
        <ButtonLink to="/contact" variant="secondary">
          WhatsApp
        </ButtonLink>
      </PageHero>
      <section className="course-facts">
        <div className="container facts-grid">
          <div>
            <span>Level</span>
            <strong>{course.level}</strong>
          </div>
          <div>
            <span>Duration</span>
            <strong>{course.duration}</strong>
          </div>
          <div>
            <span>Fee</span>
            <strong>{course.fee}</strong>
          </div>
          <div>
            <span>Format</span>
            <strong>100% offline</strong>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container detail-grid">
          <div>
            <SectionHeading
              eyebrow="Course overview"
              title="Who is this course for?"
              copy="This course is for women who want to learn through guided, practical sessions—whether you are starting from the beginning or building on an existing skill."
            />
            <div className="callout">
              <strong>Anyone can learn.</strong>
              <span>No age limit · No previous experience required</span>
            </div>
          </div>
          <div className="detail-panel">
            <h3>What you will learn</h3>
            <ul className="check-list">
              {course.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section cream-section">
        <div className="container">
          <SectionHeading
            eyebrow="Class experience"
            title="How training works"
            align="center"
          />
          <div className="process-grid five">
            {[
              "Mentor guidance",
              "Demonstration",
              "Hands-on practice",
              "Feedback",
              "Skill development",
            ].map((item, index) => (
              <article key={item}>
                <span>0{index + 1}</span>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container detail-grid">
          <div>
            <SectionHeading
              eyebrow="Course information"
              title="Current class details"
              copy="Class schedule, duration, batch availability and fee are shared directly so you receive confirmed, current information."
            />
          </div>
          <div className="contact-card">
            <h3>Ready to ask about this course?</h3>
            <p>
              Tell us the course you are interested in and we will help with the
              next step.
            </p>
            <ButtonLink to="/contact">Send an Enquiry</ButtonLink>
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  )
}

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Made for you"
        title="Custom Tailoring & Stitching Services"
        copy="Bring your design. We’ll help turn it into a finished garment, with requirements discussed before work begins."
        image={images.blouse}
      >
        <ButtonLink to="/contact">Get Stitching Quote</ButtonLink>
      </PageHero>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our services"
            title="Thoughtful stitching for women’s garments"
            copy="Choose a service to share your requirements, design reference and preferred date."
          />
          <div className="cards-grid">
            {services.map((service) => (
              <ServiceCard service={service} key={service.slug} />
            ))}
          </div>
        </div>
      </section>
      <section className="section cream-section">
        <div className="container split-section">
          <div className="split-copy">
            <SectionHeading
              eyebrow="Simple process"
              title="From reference to finished garment"
              copy="No account is needed. Share your requirement, discuss the details and receive a quote before stitching begins."
            />
            <ButtonLink to="/contact">Request a Quote</ButtonLink>
          </div>
          <ol className="vertical-steps">
            {[
              "Share your requirement",
              "Discuss design and measurements",
              "Receive a quote",
              "Stitching and finishing",
              "Final delivery",
            ].map((step, index) => (
              <li key={step}>
                <span>{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <FinalCta
        title="Have a design in mind?"
        copy="Share your reference and let’s discuss your stitching requirement."
      />
    </>
  )
}

export function ServiceDetailPage({ slug }: { slug: string }) {
  const service = services.find((item) => item.slug === slug) || services[0]
  return (
    <>
      <PageHero
        eyebrow="Custom service"
        title={service.title}
        copy={service.description}
        image={service.image}
      >
        <ButtonLink to="#quote">Request a Quote</ButtonLink>
        <ButtonLink to="/contact" variant="secondary">
          WhatsApp Us
        </ButtonLink>
      </PageHero>
      <section className="section">
        <div className="container detail-grid">
          <div>
            <SectionHeading
              eyebrow="What we offer"
              title="Made around your requirement"
              copy="Share your garment type, fabric, preferred design and reference. We will discuss practical details, measurements, timeline and pricing before confirming."
            />
            <ul className="check-list">
              <li>Requirement and design discussion</li>
              <li>Measurement and fit details</li>
              <li>Finish and embellishment preferences</li>
              <li>Quote provided before work begins</li>
            </ul>
          </div>
          <div className="detail-panel">
            <h3>What to bring or share</h3>
            <p>
              Fabric or garment details, a clear design reference and your
              preferred completion date.
            </p>
            <p className="muted-note">
              Pricing is confirmed after reviewing the requirement.
            </p>
          </div>
        </div>
      </section>
      <section className="section cream-section">
        <div className="container">
          <SectionHeading
            eyebrow="How it works"
            title="A clear six-step process"
          />
          <div className="process-grid three">
            {[
              "Share your requirement",
              "Share reference/design",
              "Discuss measurements/details",
              "Receive quote",
              "Stitching",
              "Final delivery",
            ].map((item, index) => (
              <article key={item}>
                <span>0{index + 1}</span>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section" id="quote">
        <div className="container form-layout">
          <SectionHeading
            eyebrow="Request a quote"
            title="Tell us what you’d like stitched"
            copy="Complete the enquiry below. No account or sign-in is required."
          />
          <EnquiryForm kind="service" upload />
        </div>
      </section>
    </>
  )
}

export function GalleryPage() {
  const [category, setCategory] = useState("All")
  const [selected, setSelected] = useState<typeof gallery[number] | null>(null)
  const categories = [
    "All",
    "Blouses",
    "Dresses",
    "Tailoring",
    "Aari Work",
    "Embroidery",
    "Student Work",
    "Custom Work",
  ]
  const visible =
    category === "All"
      ? gallery
      : gallery.filter((item) => item.category === category)
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Our Work"
        copy="Explore examples of tailoring, handwork and fashion inspiration. Institute-owned portfolio images can be added as they are provided."
        image={images.embroidery}
      />
      <section className="section">
        <div className="container">
          <div className="filter-row" aria-label="Gallery categories">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={
                  category === item ? "filter-button active" : "filter-button"
                }
              >
                {item}
              </button>
            ))}
          </div>
          {visible.length ? (
            <div className="masonry-grid">
              {visible.map((item, index) => (
                <button
                  className={`masonry-item height-${(index % 3) + 1}`}
                  key={item.title}
                  onClick={() => setSelected(item)}
                >
                  <img src={item.image} alt={item.title} />
                  <span>
                    <small>{item.category}</small>
                    <strong>{item.title}</strong>
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <EmptyState>
              <h3>Work from this category will be added soon.</h3>
              <p>Only verified institute work will be published.</p>
            </EmptyState>
          )}
        </div>
      </section>
      {selected && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <button className="lightbox-close" aria-label="Close image">
            ×
          </button>
          <img src={selected.image} alt={selected.title} />
          <div>
            <span>{selected.category}</span>
            <strong>{selected.title}</strong>
          </div>
        </div>
      )}
    </>
  )
}

export function ShopPage() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("All")
  const visible = useMemo(
    () =>
      products.filter(
        (product) =>
          (category === "All" || product.category === category) &&
          product.title.toLowerCase().includes(query.toLowerCase()),
      ),
    [query, category],
  )
  return (
    <>
      <PageHero
        eyebrow="The shop"
        title="Sarees, Blouses & Women’s Wear"
        copy="Explore selected products and contact us to confirm current availability, details and pricing."
        image={images.saree}
      >
        <ButtonLink to="/contact">Order via WhatsApp</ButtonLink>
      </PageHero>
      <section className="section">
        <div className="container">
          <div className="shop-tools">
            <label className="search-field">
              <span>Search products</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search the collection"
              />
            </label>
            <label>
              <span>Category</span>
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option>All</option>
                <option>Sarees</option>
                <option>Blouses</option>
                <option>Women’s Wear</option>
              </select>
            </label>
          </div>
          <div className="product-grid">
            {visible.map((product) => (
              <ProductCard product={product} key={product.slug} />
            ))}
          </div>
        </div>
      </section>
      <section className="offline-note">
        <div className="container">
          <strong>Simple, personal ordering</strong>
          <span>
            There is no fake checkout. Contact us to confirm the product and
            place your order.
          </span>
        </div>
      </section>
    </>
  )
}

export function ProductDetailPage({ slug }: { slug: string }) {
  const product = products.find((item) => item.slug === slug) || products[0]
  return (
    <>
      <section className="section product-detail">
        <div className="container product-detail-grid">
          <div className="product-gallery">
            <img src={product.image} alt={product.title} />
            <div className="thumbnail-row">
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
            </div>
          </div>
          <div className="product-info">
            <span className="eyebrow">{product.category}</span>
            <h1>{product.title}</h1>
            <span className="availability-pill">Enquire for availability</span>
            <p>{product.description}</p>
            <dl>
              <div>
                <dt>Price</dt>
                <dd>Enquire for current price</dd>
              </div>
              <div>
                <dt>Material / fabric</dt>
                <dd>Details available on enquiry</dd>
              </div>
              <div>
                <dt>Size</dt>
                <dd>Confirm available options</dd>
              </div>
            </dl>
            <div className="button-row">
              <ButtonLink to="/contact">Order Now</ButtonLink>
              <ButtonLink to="/contact" variant="secondary">
                WhatsApp Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
      <section className="section cream-section">
        <div className="container">
          <SectionHeading
            eyebrow="You may also like"
            title="Related products"
          />
          <div className="product-grid">
            {products
              .filter((item) => item.slug !== product.slug)
              .slice(0, 2)
              .map((item) => (
                <ProductCard product={item} key={item.slug} />
              ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Student & Customer Stories"
        copy="A dedicated space for genuine experiences from women who learn with us and customers who choose our services."
        image={images.hero}
      />
      <section className="section">
        <div className="container">
          <div className="testimonial-tabs">
            <span className="active">Students</span>
            <span>Customers</span>
          </div>
          <EmptyState>
            <span className="quote-mark">“</span>
            <h3>Verified testimonials coming soon</h3>
            <p>
              Names, photos and testimonials will only be published with genuine
              institute-provided content.
            </p>
          </EmptyState>
        </div>
      </section>
      <section className="section cream-section">
        <div className="container review-panel">
          <div>
            <span className="eyebrow">Google reviews</span>
            <h2>Trusted by Our Students & Customers</h2>
            <p>
              Google rating and review counts will appear here when the actual
              business profile data is available.
            </p>
          </div>
          <span className="review-placeholder">Rating not yet connected</span>
        </div>
      </section>
      <FinalCta />
    </>
  )
}

export function FaqPage() {
  const [category, setCategory] = useState("All")
  const categories = [
    "All",
    "Courses",
    "Classes",
    "Stitching",
    "Shop",
    "General",
  ]
  const visible =
    category === "All" ? faqs : faqs.filter((faq) => faq.category === category)
  return (
    <>
      <PageHero
        eyebrow="Helpful information"
        title="Frequently Asked Questions"
        copy="Clear answers about offline classes, course enquiries, stitching services and shopping."
        image={images.machine}
      />
      <section className="section">
        <div className="container faq-layout">
          <div className="faq-categories">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? "active" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="faq-list">
            {visible.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>
                  {faq.question}
                  <span>+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <FinalCta
        title="Still have a question?"
        copy="Send an enquiry and tell us what you would like to know."
      />
    </>
  )
}

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let’s Talk About What You Need"
        copy="Whether you want to join a class, request stitching or ask about a product, choose the path that fits."
        image={images.hands}
      />
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-details">
            <SectionHeading
              eyebrow="Get in touch"
              title="We’re here to help"
              copy="Contact information will be displayed as soon as it is confirmed by the institute."
            />
            {[
              ["Phone", "Number to be confirmed"],
              ["WhatsApp", "Number to be confirmed"],
              ["Email", "Email to be confirmed"],
              ["Working hours", "Hours to be confirmed"],
            ].map(([label, value]) => (
              <div className="contact-detail" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
            <div className="button-row">
              <span className="button button-disabled">Call Us</span>
              <span className="button button-disabled">WhatsApp Us</span>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>
      <section className="section cream-section">
        <div className="container visit-grid">
          <div>
            <SectionHeading
              eyebrow="Visit us"
              title="Learn with us in person"
              copy="The institute’s confirmed address and Google Maps location will appear here."
            />
            <span className="button button-disabled">Get Directions</span>
          </div>
          <div className="map-placeholder">
            <span>Google Maps</span>
            <strong>Location to be confirmed</strong>
          </div>
        </div>
      </section>
    </>
  )
}

export function NotFoundPage() {
  return (
    <section className="section not-found">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>This page is not available.</h1>
        <p>Return home or choose one of our main paths.</p>
        <ButtonLink to="/">Back to Home</ButtonLink>
      </div>
    </section>
  )
}
