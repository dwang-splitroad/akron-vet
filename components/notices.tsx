"use client"

import { useState } from "react"
import { AlertTriangle, Bug, ExternalLink, X, Phone } from "lucide-react"
import Link from "next/link"

export function Notices() {
  const [fleaDismissed, setFleaDismissed] = useState(false)
  const [emergencyDismissed, setEmergencyDismissed] = useState(false)

  if (fleaDismissed && emergencyDismissed) return null

  return (
    <div className="flex flex-col gap-0">
      {/* Flea & Tick Alert */}
      {!fleaDismissed && (
        <div className="bg-amber-50 border-b border-amber-200">
          <div className="mx-auto flex max-w-6xl items-start justify-between gap-4 px-4 py-3">
            <div className="flex items-start gap-3">
              <Bug className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
              <div className="text-sm text-amber-900">
                <span className="font-semibold">!! Flea &amp; Tick Alert !!</span>
                {" "}We are seeing a rise in flea &amp; tick activity in our region despite the colder weather.{" "}
                <Link
                  href="https://akronvetclinic.myvetstoreonline.pharmacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium underline underline-offset-2 hover:text-amber-700"
                >
                  Check Out Preventatives
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </div>
            <button
              onClick={() => setFleaDismissed(true)}
              aria-label="Dismiss flea and tick alert"
              className="shrink-0 rounded p-0.5 text-amber-600 hover:bg-amber-100"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Emergency Resources — we do NOT offer emergency services */}
      {!emergencyDismissed && (
        <div className="bg-blue-50 border-b border-blue-200">
          <div className="mx-auto flex max-w-6xl items-start justify-between gap-4 px-4 py-3">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
              <div className="text-sm text-blue-900">
                <span className="font-semibold">Emergency Services:</span>
                {" "}Akron Vet Clinic does <span className="font-semibold">not</span> provide emergency walk-in services.
                {" "}Dr. Howard does offer <span className="font-medium">limited after-hours phone consults for established clients</span>.
                {" "}For emergencies, please contact one of our recommended emergency centers:
                <span className="ml-1 inline-flex flex-wrap gap-x-4 gap-y-1">
                  <span className="inline-flex items-center gap-1">
                    <Phone className="h-3 w-3" />
                    <strong>VCA Animal Emergency &amp; Referral Center</strong> — (574) 232-6280 — Mishawaka, IN
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Phone className="h-3 w-3" />
                    <strong>Animal Emergency &amp; Critical Care Center</strong> — (260) 248-4533 — Fort Wayne, IN
                  </span>
                </span>
              </div>
            </div>
            <button
              onClick={() => setEmergencyDismissed(true)}
              aria-label="Dismiss emergency resources notice"
              className="shrink-0 rounded p-0.5 text-blue-700 hover:bg-blue-100"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
