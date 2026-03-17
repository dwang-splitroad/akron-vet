import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, Syringe, Scissors, HeartPulse, FlaskConical, Dog } from "lucide-react"

const services = [
  {
    icon: Stethoscope,
    title: "Wellness Exams",
    description: "Comprehensive health checkups to keep your pet healthy and catch issues early.",
  },
  {
    icon: Syringe,
    title: "Vaccinations",
    description: "Core and lifestyle vaccines to protect your pet from common diseases.",
  },
  {
    icon: HeartPulse,
    title: "Emergency Care",
    description: "Urgent medical attention when your pet needs it most during clinic hours.",
  },
  {
    icon: Scissors,
    title: "Surgery",
    description: "From spay/neuter to soft tissue surgeries performed with care and precision.",
  },
  {
    icon: FlaskConical,
    title: "Laboratory Services",
    description: "In-house diagnostics for quick results and faster treatment plans.",
  },
  {
    icon: Dog,
    title: "Dental Care",
    description: "Professional cleanings and dental treatments for healthier teeth and gums.",
  },
]

export function Services() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Comprehensive veterinary care for every stage of your pet&apos;s life
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="group transition-all hover:border-primary/50 hover:shadow-md">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
