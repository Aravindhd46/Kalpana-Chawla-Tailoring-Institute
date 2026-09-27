import { useEffect, useState } from "react"
import { Footer, Header } from "./components"
import {
  AboutPage,
  ContactPage,
  CourseDetailPage,
  CoursesPage,
  FaqPage,
  GalleryPage,
  HomePage,
  NotFoundPage,
  ProductDetailPage,
  ServiceDetailPage,
  ServicesPage,
  ShopPage,
  TestimonialsPage,
} from "./pages"

function CurrentPage({ path }: { path: string }) {
  if (path === "/") return <HomePage />
  if (path === "/about") return <AboutPage />
  if (path === "/courses") return <CoursesPage />
  if (path.startsWith("/courses/"))
    return <CourseDetailPage slug={path.split("/")[2]} />
  if (path === "/services") return <ServicesPage />
  if (path.startsWith("/services/"))
    return <ServiceDetailPage slug={path.split("/")[2]} />
  if (path === "/gallery") return <GalleryPage />
  if (path === "/shop") return <ShopPage />
  if (path.startsWith("/shop/"))
    return <ProductDetailPage slug={path.split("/")[2]} />
  if (path === "/testimonials") return <TestimonialsPage />
  if (path === "/faq") return <FaqPage />
  if (path === "/contact") return <ContactPage />
  return <NotFoundPage />
}

export default function App() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const update = () => setPath(window.location.pathname)
    window.addEventListener("popstate", update)
    window.addEventListener("app:navigate", update)
    return () => {
      window.removeEventListener("popstate", update)
      window.removeEventListener("app:navigate", update)
    }
  }, [])

  return (
    <div className="app-shell">
      <Header path={path} />
      <main>
        <CurrentPage path={path} />
      </main>
      <Footer />
    </div>
  )
}
