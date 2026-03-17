import { Check } from "lucide-react"

const features = [
  "Dr. Bill Howard practicing since 1994",
  "Small animals & select exotics welcome",
  "Cold therapy laser treatment",
  "Digital X-ray & in-house diagnostics",
  "Affordable payment options with CareCredit",
  "Emergency call available for established clients",
]

export function About() {
  return (
    <section className="bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/Papa-Bill-268x300.png"
                alt="Dr. Bill Howard with his dog outdoors"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 aspect-square w-2/5 overflow-hidden rounded-xl border-4 border-background shadow-lg sm:-bottom-8 sm:-right-8">
              <img
                src="/veterinarian-with-french-bulldog-150x150.png"
                alt="Dr. Bill Howard holding a French Bulldog puppy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Akron Vet Clinic?
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Dr. Bill Howard has been practicing veterinary medicine since 1994. His practice focuses on small animals and some exotics. Dr. Howard and his team have served the people of Akron and surrounding towns for over a decade with a goal of providing excellent veterinary care in a compassionate, friendly, and relaxed atmosphere.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              While Akron Vet Clinic is not the least expensive clinic in the area, they are considered by many to be the most thorough vet practice around. Your pet&apos;s experience at our facility is our top priority.
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
