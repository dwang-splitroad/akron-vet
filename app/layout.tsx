import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://akronvetclinic.com"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Akron Veterinary Clinic | Akron, Indiana',
    template: '%s | Akron Veterinary Clinic',
  },
  description: 'Dr. Bill Howard and his team provide compassionate veterinary care for small animals and exotic pets in Akron, Indiana. Call (574) 893-4028 to schedule a visit.',
  keywords: [
    'veterinarian Akron Indiana',
    'vet clinic Akron IN',
    'Dr Bill Howard vet',
    'small animal vet Fulton County',
    'spay neuter Akron Indiana',
    'pet vaccinations Akron Indiana',
    'exotic pet vet Indiana',
    'veterinarian near Rochester Indiana',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Akron Veterinary Clinic',
    title: 'Akron Veterinary Clinic | Akron, Indiana',
    description: 'Dr. Bill Howard and his team provide compassionate veterinary care for small animals and exotic pets in Akron, Indiana.',
    images: [
      {
        url: '/veterinarian-surgeon.png',
        width: 1200,
        height: 630,
        alt: 'Dr. Bill Howard performing surgery at Akron Vet Clinic',
      },
    ],
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon-light-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
