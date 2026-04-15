"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, Phone, Clock, ExternalLink, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-4 py-2 text-sm sm:justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <Phone className="h-4 w-4" />
            <a href="tel:574-893-4028" className="hover:underline text-base">
              (574) 893-4028
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Mon–Wed &amp; Fri: 8AM–5PM | Thu: Closed | Sat: 8AM–1PM</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="Akron Veterinary Clinic"
            width={280}
            height={84}
            className="h-20 w-auto sm:h-24"
            priority
          />
        </Link>

        {/* Desktop Navigation — logo buttons */}
        <nav className="hidden items-center gap-3 md:flex flex-wrap justify-end">

          {/* Care Credit logo button */}
          <Link
            href="https://www.carecredit.com/go/VPS549/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-lg border-2 border-primary bg-white px-3 py-2 shadow-md transition-all hover:shadow-lg hover:scale-105 hover:border-primary/80"
            title="Apply for CareCredit"
          >
            <Image
              src="/careCredit-logo.png"
              alt="CareCredit"
              width={110}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Online Pharmacy logo button */}
          <Link
            href="https://akronvetclinic.myvetstoreonline.pharmacy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-lg border-2 border-primary bg-white px-3 py-2 shadow-md transition-all hover:shadow-lg hover:scale-105 hover:border-primary/80"
            title="Visit our Online Pharmacy"
          >
            <Image
              src="/myVetStore-logo.png"
              alt="Online Pharmacy"
              width={110}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Purina Pro Plan Vet Direct logo button */}
          <Link
            href="https://www.proplanvetdirect.com/customer/account/create/?to=clinic&clinic-id=3YZEH"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-lg border-2 border-primary bg-white px-3 py-2 shadow-md transition-all hover:shadow-lg hover:scale-105 hover:border-primary/80"
            title="Purina Pro Plan Vet Direct"
          >
            <Image
              src="/PPVD_logo_centered.avif"
              alt="Purina Pro Plan Vet Direct"
              width={130}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* New Client Form button */}
          <Link
            href="/AVCNewClientAcct.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border-2 border-[oklch(0.52_0.18_145)] bg-[oklch(0.52_0.18_145)] px-4 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:shadow-lg hover:scale-105 hover:bg-[oklch(0.45_0.18_145)]"
          >
            <FileText className="h-4 w-4" />
            New Client Form
            <ExternalLink className="h-3 w-3 opacity-75" />
          </Link>

          {/* Contact / Appointments button */}
          <Link
            href="#contact"
            className="flex items-center gap-2 rounded-lg border-2 border-primary bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-md transition-all hover:shadow-lg hover:scale-105 hover:bg-primary/90"
          >
            <Phone className="h-4 w-4" />
            Contact Us
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[320px] bg-card">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-6 pt-6">
              <Link href="/" className="flex justify-center" onClick={() => setIsOpen(false)}>
                <Image
                  src="/logo.png"
                  alt="Akron Veterinary Clinic"
                  width={220}
                  height={66}
                  className="h-16 w-auto"
                />
              </Link>
              <nav className="flex flex-col gap-3">

                {/* Care Credit */}
                <SheetClose asChild>
                  <Link
                    href="https://www.carecredit.com/go/VPS549/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border-2 border-primary bg-white px-4 py-3 shadow-sm hover:shadow-md"
                  >
                    <Image src="/careCredit-logo.png" alt="CareCredit" width={100} height={36} className="h-9 w-auto object-contain" />
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </SheetClose>

                {/* Online Pharmacy */}
                <SheetClose asChild>
                  <Link
                    href="https://akronvetclinic.myvetstoreonline.pharmacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border-2 border-primary bg-white px-4 py-3 shadow-sm hover:shadow-md"
                  >
                    <Image src="/myVetStore-logo.png" alt="Online Pharmacy" width={100} height={36} className="h-9 w-auto object-contain" />
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </SheetClose>

                {/* Purina Pro Plan */}
                <SheetClose asChild>
                  <Link
                    href="https://www.proplanvetdirect.com/customer/account/create/?to=clinic&clinic-id=3YZEH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border-2 border-primary bg-white px-4 py-3 shadow-sm hover:shadow-md"
                  >
                    <Image src="/PPVD_logo_centered.avif" alt="Purina Pro Plan Vet Direct" width={120} height={36} className="h-9 w-auto object-contain" />
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </SheetClose>

                {/* New Client Form */}
                <SheetClose asChild>
                  <Link
                    href="/AVCNewClientAcct.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border-2 border-[oklch(0.52_0.18_145)] bg-[oklch(0.52_0.18_145)] px-4 py-3 font-bold text-white shadow-sm hover:shadow-md"
                  >
                    <FileText className="h-5 w-5" />
                    New Client Form
                    <ExternalLink className="ml-auto h-4 w-4 opacity-75" />
                  </Link>
                </SheetClose>

                {/* Contact */}
                <SheetClose asChild>
                  <Link
                    href="#contact"
                    className="flex items-center gap-3 rounded-lg border-2 border-primary bg-primary px-4 py-3 font-bold text-primary-foreground shadow-sm hover:shadow-md"
                  >
                    <Phone className="h-5 w-5" />
                    Contact Us
                  </Link>
                </SheetClose>
              </nav>

              <div className="border-t border-border pt-4">
                <p className="px-4 text-sm text-muted-foreground">
                  Call us: <a href="tel:574-893-4028" className="font-bold text-primary hover:underline">(574) 893-4028</a>
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
