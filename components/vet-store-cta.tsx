import { ShoppingBag, ExternalLink, ShieldCheck, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VetStoreCta() {
  return (
    <section className="bg-primary py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">

        <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
          Online Vet Store
        </p>

        <h2 className="mt-2 text-xl font-bold text-primary-foreground sm:text-2xl">
          Shop Flea, Tick &amp; Heartworm Preventatives
        </h2>

        <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-primary-foreground/75">
          Order vet-approved medications directly from Akron Vet Clinic&apos;s online pharmacy — fast, convenient, and delivered to your door.
        </p>

        {/* CTA Button */}
        <div className="mt-8 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-2 animate-pulse rounded-2xl bg-white/30 blur-md" />
            <Button
              asChild
              className="relative gap-4 bg-white text-primary shadow-2xl shadow-black/40 hover:bg-white/90 hover:shadow-black/50 font-extrabold text-2xl sm:text-3xl px-16 py-10 h-auto rounded-2xl"
            >
              <a
                href="https://akronvetclinic.myvetstoreonline.pharmacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShoppingBag className="h-8 w-8" />
                Visit the Vet Store
                <ExternalLink className="h-6 w-6 opacity-60" />
              </a>
            </Button>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-sm text-primary-foreground/70">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-primary-foreground" />
            Vet-approved products
          </span>
          <span className="flex items-center gap-1.5">
            <Truck className="h-4 w-4 text-primary-foreground" />
            Ships to your door
          </span>
        </div>

      </div>
    </section>
  )
}
