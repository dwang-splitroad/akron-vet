"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, Clock, ExternalLink, FileText, ShoppingBag, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"

const navItems = [
  {
    label: "Care Credit",
    href: "https://www.carecredit.com/go/VPS549",
    external: true,
    icon: CreditCard,
  },
  {
    label: "New Client Form",
    href: "https://web.archive.org/web/20211204005746/http://akronvetclinic.com/wp-content/uploads/2019/12/AVCNewClientAcct.pdf",
    external: true,
    icon: FileText,
  },
  {
    label: "Contact",
    href: "#contact",
    external: false,
    icon: Phone,
  },
  {
    label: "Vet Store",
    href: "https://akronvetclinic.myvetstoreonline.pharmacy",
    external: true,
    icon: ShoppingBag,
  },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-4 py-2 text-sm sm:justify-between">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <a href="tel:330-644-1178" className="hover:underline">
              (330) 644-1178
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Mon-Fri: 8AM-6PM | Sat: 8AM-12PM</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Akron Veterinary Clinic"
            width={200}
            height={60}
            className="h-12 w-auto sm:h-14"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
              {item.external && <ExternalLink className="h-3 w-3 opacity-50" />}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-card">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-6 pt-6">
              <Link href="/" className="flex justify-center" onClick={() => setIsOpen(false)}>
                <Image
                  src="/logo.png"
                  alt="Akron Veterinary Clinic"
                  width={180}
                  height={54}
                  className="h-14 w-auto"
                />
              </Link>
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.label}>
                    <Link
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 rounded-md px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
                    >
                      <item.icon className="h-5 w-5" />
                      {item.label}
                      {item.external && <ExternalLink className="ml-auto h-4 w-4 opacity-50" />}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="border-t border-border pt-4">
                <p className="px-4 text-sm text-muted-foreground">
                  Call us: <a href="tel:330-644-1178" className="font-medium text-primary hover:underline">(330) 644-1178</a>
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
