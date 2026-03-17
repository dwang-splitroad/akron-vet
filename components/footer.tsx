import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin, ExternalLink } from "lucide-react"

const quickLinks = [
  {
    label: "Care Credit",
    href: "https://www.carecredit.com/go/VPS549",
    external: true,
  },
  {
    label: "New Client Form",
    href: "https://web.archive.org/web/20211204005746/http://akronvetclinic.com/wp-content/uploads/2019/12/AVCNewClientAcct.pdf",
    external: true,
  },
  {
    label: "Vet Store",
    href: "https://akronvetclinic.myvetstoreonline.pharmacy",
    external: true,
  },
  {
    label: "Contact Us",
    href: "#contact",
    external: false,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Akron Veterinary Clinic"
                width={180}
                height={54}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-md text-muted-foreground">
              Providing compassionate veterinary care for your beloved pets since 1970. Your pet&apos;s health and happiness is our mission.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                    {link.external && <ExternalLink className="h-3 w-3" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>3128 S. Arlington Rd.<br />Akron, Ohio 44312</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="tel:330-644-1178" className="hover:text-primary hover:underline">
                  (330) 644-1178
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Akron Veterinary Clinic, Inc. All rights reserved.</p>
          <p>Made with care for pets everywhere.</p>
        </div>
      </div>
    </footer>
  )
}
