"use client"

import { useState } from "react"
import { AlertTriangle, Bug, ExternalLink, X } from "lucide-react"
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

      {/* Emergency Hours Update */}
      {!emergencyDismissed && (
        <div className="bg-red-50 border-b border-red-200">
          <div className="mx-auto flex max-w-6xl items-start justify-between gap-4 px-4 py-3">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
              <div className="text-sm text-red-900">
                <span className="font-semibold">Emergency Hours Update:</span>
                {" "}Emergency services are now available to{" "}
                <span className="font-medium">current clients in good standing only</span>.
                {" "}Dr. Howard and staff remain committed to providing the best care possible for your pets.
              </div>
            </div>
            <button
              onClick={() => setEmergencyDismissed(true)}
              aria-label="Dismiss emergency hours notice"
              className="shrink-0 rounded p-0.5 text-red-600 hover:bg-red-100"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
