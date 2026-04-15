import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, Syringe, Scissors, HeartPulse, FlaskConical, Zap, Baby, Shield, Microscope } from "lucide-react"

const services = [
  {
    icon: Syringe,
    title: "Vaccines",
    description: "Age-appropriate vaccinations to protect your pet and your family from preventable diseases.",
    color: "green" as const,
  },
  {
    icon: Scissors,
    title: "Spay & Neuter",
    description: "Prevention of unwanted litters and extension of your pet's life — sometimes even doubling their lifespan.",
    color: "red" as const,
  },
  {
    icon: Baby,
    title: "Prenatal & Caesarian",
    description: "Expert care for expectant mothers and assisted delivery when needed.",
    color: "green" as const,
  },
  {
    icon: Zap,
    title: "Cold Therapy Laser",
    description: "Non-invasive laser therapy to reduce pain, inflammation, and speed healing.",
    color: "red" as const,
  },
  {
    icon: Stethoscope,
    title: "General & Laser Surgery",
    description: "From routine procedures to advanced soft tissue surgeries, performed with precision and care.",
    color: "green" as const,
  },
  {
    icon: Microscope,
    title: "Diagnostic Blood Analyses",
    description: "Pre-surgical and sick-animal blood panels for accurate diagnoses and faster treatment plans.",
    color: "red" as const,
  },
  {
    icon: FlaskConical,
    title: "Digital X-ray",
    description: "State-of-the-art digital radiography for clear, fast diagnostic imaging.",
    color: "green" as const,
  },
  {
    icon: HeartPulse,
    title: "After-Hours Consults",
    description: "Dr. Howard offers limited after-hours phone consults for established clients. We do not provide emergency walk-in services — see the Emergency Resources notice for area emergency centers.",
    color: "red" as const,
  },
  {
    icon: Shield,
    title: "Euthanasia & Cremation",
    description: "Compassionate end-of-life services to give your pet a peaceful, dignified farewell.",
    color: "green" as const,
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Veterinary Services
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Akron Veterinary Clinic is a full-service small animal facility — including some exotics such as rats, rabbits, and pot belly pigs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const isGreen = service.color === "green"
            return (
              <Card
                key={service.title}
                className={`group transition-all hover:shadow-md ${
                  isGreen
                    ? "hover:border-green/60"
                    : "hover:border-primary/50"
                }`}
              >
                <CardHeader>
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg transition-colors ${
                      isGreen
                        ? "bg-green/10 group-hover:bg-green/20"
                        : "bg-primary/10 group-hover:bg-primary/20"
                    }`}
                  >
                    <service.icon
                      className={`h-6 w-6 ${isGreen ? "text-green" : "text-primary"}`}
                    />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
