import Image from "next/image"
import { ShieldCheck, Truck } from "lucide-react"

export function VetStoreCta() {
  return (
    <section className="bg-primary py-14 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">

        <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
          Online Vet Store &amp; Nutrition
        </p>

        <h2 className="mt-2 text-2xl font-bold text-primary-foreground sm:text-3xl">
          Order Directly — Delivered to Your Door
        </h2>

        <p className="mx-auto mt-2 max-w-xl text-base leading-relaxed text-primary-foreground/80">
          Shop vet-approved flea, tick &amp; heartworm preventatives through our online pharmacy, or order Purina Pro Plan nutrition directly through our clinic account.
        </p>

        {/* Two big logo buttons side by side */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">

          {/* Online Pharmacy */}
          <a
            href="https://akronvetclinic.myvetstoreonline.pharmacy"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center gap-3 rounded-2xl border-4 border-white bg-white px-10 py-6 shadow-2xl transition-all hover:scale-105 hover:shadow-white/30"
          >
            <div className="absolute -inset-1 animate-pulse rounded-2xl bg-white/20 blur-md group-hover:bg-white/30" />
            <Image
              src="/myVetStore-logo.png"
              alt="MyVetStore Online Pharmacy"
              width={200}
              height={70}
              className="relative h-16 w-auto object-contain"
            />
            <span className="relative text-sm font-bold text-primary uppercase tracking-wide">
              Visit Online Pharmacy →
            </span>
          </a>

          {/* Purina Pro Plan Vet Direct */}
          <a
            href="https://www.proplanvetdirect.com/customer/account/create/?to=clinic&clinic-id=3YZEH"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center gap-3 rounded-2xl border-4 border-white bg-white px-10 py-6 shadow-2xl transition-all hover:scale-105 hover:shadow-white/30"
          >
            <div className="absolute -inset-1 animate-pulse rounded-2xl bg-white/20 blur-md group-hover:bg-white/30" />
            <Image
              src="/PPVD_logo_centered.avif"
              alt="Purina Pro Plan Vet Direct"
              width={200}
              height={70}
              className="relative h-16 w-auto object-contain"
            />
            <span className="relative text-sm font-bold text-primary uppercase tracking-wide">
              Order Purina Pro Plan →
            </span>
          </a>

        </div>

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/80">
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
