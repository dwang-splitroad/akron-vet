import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CherryPaymentWidget } from "@/components/cherry-payment-widget"

export const metadata: Metadata = {
  title: "Financing & Payment Options",
  description:
    "Akron Veterinary Clinic now partners with Cherry to offer flexible, low-cost payment plans for your pet's care. Check your eligibility with no impact to your credit score.",
  alternates: {
    canonical: "/financing",
  },
}

export default function FinancingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-4 py-12 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Financing &amp; Payment Options
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/90 sm:text-lg">
              Akron Veterinary Clinic has partnered with Cherry to make your pet&apos;s
              care more affordable. Choose a payment plan that fits your budget &mdash;
              checking your eligibility takes seconds and won&apos;t affect your credit score.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12">
          <CherryPaymentWidget />
        </section>
      </main>
      <Footer />
    </div>
  )
}
