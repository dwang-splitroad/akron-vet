import { Check } from "lucide-react"

const features = [
  "Experienced, compassionate veterinarians",
  "Modern diagnostic equipment",
  "Convenient appointment scheduling",
  "Affordable payment options with CareCredit",
  "Serving Akron families since 1970",
  "Personalized care for every pet",
]

export function About() {
  return (
    <section className="bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600&h=450&fit=crop"
                alt="Veterinarian examining a cat"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 aspect-square w-2/5 overflow-hidden rounded-xl border-4 border-background shadow-lg sm:-bottom-8 sm:-right-8">
              <img
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=300&h=300&fit=crop&crop=face"
                alt="Happy dog and cat together"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About Akron Veterinary Clinic
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              For over 50 years, Akron Veterinary Clinic has been a trusted partner in pet healthcare for families throughout the Akron area. Our team of dedicated professionals combines years of experience with genuine love for animals.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We believe in building lasting relationships with our clients and their furry family members, providing personalized care that addresses each pet&apos;s unique needs.
            </p>

            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
