import { Button } from "@/components/ui/button"
import { Heart, Calendar, Phone } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-secondary to-background">
      {/* Decorative paw prints */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <svg className="absolute left-10 top-20 h-16 w-16 rotate-12 text-primary" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10.5c-1.5 0-2.5 1.5-2.5 3s1 3 2.5 3 2.5-1.5 2.5-3-1-3-2.5-3zm-4.5-2c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm9 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-6.5-3c-.83 0-1.5.67-1.5 1.5S9.17 8.5 10 8.5s1.5-.67 1.5-1.5S10.83 5.5 10 5.5zm4 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
        </svg>
        <svg className="absolute right-20 top-40 h-20 w-20 -rotate-12 text-primary" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10.5c-1.5 0-2.5 1.5-2.5 3s1 3 2.5 3 2.5-1.5 2.5-3-1-3-2.5-3zm-4.5-2c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm9 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-6.5-3c-.83 0-1.5.67-1.5 1.5S9.17 8.5 10 8.5s1.5-.67 1.5-1.5S10.83 5.5 10 5.5zm4 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
        </svg>
        <svg className="absolute bottom-20 left-1/4 h-12 w-12 rotate-45 text-primary" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10.5c-1.5 0-2.5 1.5-2.5 3s1 3 2.5 3 2.5-1.5 2.5-3-1-3-2.5-3zm-4.5-2c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm9 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-6.5-3c-.83 0-1.5.67-1.5 1.5S9.17 8.5 10 8.5s1.5-.67 1.5-1.5S10.83 5.5 10 5.5zm4 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24 lg:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" fill="currentColor" />
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                Serving Akron, Indiana &amp; Surrounding Towns
              </span>
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Your Pet&apos;s Health Is{" "}
              <span className="text-primary">Our Priority</span>
            </h1>
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Dr. Bill Howard and his team have served the people of Akron and surrounding towns for over a decade. We provide excellent veterinary care in a compassionate, friendly, and relaxed atmosphere.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="gap-2">
                <a href="tel:574-893-4028">
                  <Phone className="h-4 w-4" />
                  Call (574) 893-4028
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link href="#contact">
                  <Calendar className="h-4 w-4" />
                  Schedule a Visit
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl bg-secondary shadow-xl">
              <img
                src="/veterinarian-surgeon.png"
                alt="Dr. Bill Howard performing surgery at Akron Vet Clinic"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 rounded-xl border border-border bg-card p-4 shadow-lg sm:-bottom-8 sm:-left-8 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" fill="currentColor" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">Since&nbsp;&#8217;94</p>
                  <p className="text-sm text-muted-foreground">Practicing Since 1994</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
