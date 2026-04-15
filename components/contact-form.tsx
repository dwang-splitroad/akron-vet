"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Clock, Mail, Send, CheckCircle, AlertCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Have questions or need to schedule an appointment? We&apos;re here to help!
          </p>
        </div>

        {/* Appointment Policy Banner */}
        <div className="mx-auto mt-8 max-w-4xl rounded-xl border-2 border-primary bg-primary/5 p-5">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
            <div>
              <p className="font-bold text-foreground text-lg">
                📞 Calling is Highly Recommended to Schedule Your Appointment
              </p>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                <strong className="text-foreground">All patients are seen by appointment ONLY</strong> — this ensures we allot the proper amount of time for each and every client, answer all of your questions, and deliver a professional diagnosis for your pet.
              </p>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Appointments are scheduled by <strong className="text-foreground">triage — based on need or urgency</strong>. We work diligently to get urgent cases in as soon as possible. Surgery scheduling is handled separately. Please call us so we can find a time that is convenient for <em>both</em> your schedule and ours.
              </p>
              <a
                href="tel:574-893-4028"
                className="mt-3 inline-flex items-center gap-2 rounded-lg border-2 border-primary bg-primary px-5 py-2.5 font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                <Phone className="h-4 w-4" />
                Call (574) 893-4028
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Akron, Indiana
                </CardDescription>
                <a
                  href="https://maps.google.com/?q=Akron+Veterinary+Clinic+Akron+Indiana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded-lg border-2 border-[oklch(0.52_0.18_145)] bg-[oklch(0.52_0.18_145)] px-4 py-2 text-sm font-bold text-white shadow-md transition-all hover:bg-[oklch(0.45_0.18_145)] hover:shadow-lg"
                >
                  <MapPin className="h-4 w-4" />
                  Get Directions / Map
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Phone className="h-5 w-5 text-primary" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  <a href="tel:574-893-4028" className="text-foreground hover:text-primary hover:underline font-semibold text-lg">
                    (574) 893-4028
                  </a>
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="h-5 w-5 text-primary" />
                  Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="space-y-1 text-base">
                  <p><span className="font-medium text-foreground">Monday – Wednesday:</span> 8:00 AM – 5:00 PM</p>
                  <p><span className="font-medium text-foreground">Thursday:</span> Closed</p>
                  <p><span className="font-medium text-foreground">Friday:</span> 8:00 AM – 5:00 PM</p>
                  <p><span className="font-medium text-foreground">Saturday:</span> 8:00 AM – 1:00 PM</p>
                  <p><span className="font-medium text-foreground">Sunday:</span> Closed</p>
                  <p className="mt-2 text-sm italic text-muted-foreground">After-hours phone consults available for established clients.</p>
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Send Us a Message
              </CardTitle>
              <CardDescription>
                Have a question? Send us a message below. <strong>To schedule an appointment, please call us directly</strong> — calling is the fastest and best way to get on our schedule at a time that works for everyone.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="flex flex-col items-center gap-4 py-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Thank You!</h3>
                    <p className="mt-2 text-muted-foreground">
                      Your message has been sent. We&apos;ll be in touch soon!
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Need an appointment sooner? Call us at{" "}
                      <a href="tel:574-893-4028" className="font-semibold text-primary hover:underline">(574) 893-4028</a>.
                    </p>
                  </div>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" required placeholder="John" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" required placeholder="Smith" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required placeholder="john@example.com" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="(574) 555-1234" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="petName">Pet&apos;s Name</Label>
                    <Input id="petName" name="petName" placeholder="Buddy" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="How can we help you? (For appointments, please call us directly for the fastest response.)"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="mt-2 gap-2 font-bold" disabled={isLoading}>
                    {isLoading ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
