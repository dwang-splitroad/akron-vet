import { Header } from "@/components/header"
import { Notices } from "@/components/notices"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Notices />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
