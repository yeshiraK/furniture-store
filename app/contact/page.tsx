"use client"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendContactForm } from "@/lib/actions"

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formError, setFormError] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    setFormStatus("submitting")
    setFormError(null)

    try {
      await sendContactForm(formData)
      setFormStatus("success")
    } catch (error) {
      setFormStatus("error")
      setFormError("There was an error submitting your message. Please try again.")
    }
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl font-light mb-8 text-center">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-light mb-6">Get in Touch</h2>
          <p className="text-neutral-600 mb-8">
            We'd love to hear from you. Whether you have a question about our products, showrooms, or anything else, our
            team is ready to answer all your questions.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-neutral-700 mt-0.5" />
              <div>
                <h3 className="font-medium">Headquarters</h3>
                <p className="text-neutral-600">123 Design District</p>
                <p className="text-neutral-600">New York, NY 10001</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-neutral-700 mt-0.5" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-neutral-600">+1 (212) 555-7890</p>
                <p className="text-neutral-600">Mon-Fri: 9am-6pm EST</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-neutral-700 mt-0.5" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-neutral-600">info@marbleandwood.com</p>
                <p className="text-neutral-600">support@marbleandwood.com</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-light mb-4">Showroom Hours</h3>
            <table className="w-full text-neutral-600">
              <tbody>
                <tr className="border-b border-neutral-200">
                  <td className="py-2">Monday - Friday</td>
                  <td className="py-2">10:00 AM - 7:00 PM</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="py-2">Saturday</td>
                  <td className="py-2">11:00 AM - 6:00 PM</td>
                </tr>
                <tr>
                  <td className="py-2">Sunday</td>
                  <td className="py-2">12:00 PM - 5:00 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
          <h2 className="text-2xl font-light mb-6">Send Us a Message</h2>

          {formStatus === "success" ? (
            <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-md mb-6">
              <p className="font-medium">Thank you for your message!</p>
              <p>We've received your inquiry and will get back to you as soon as possible.</p>
            </div>
          ) : (
            <form action={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                    First Name
                  </label>
                  <Input id="firstName" name="firstName" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                    Last Name
                  </label>
                  <Input id="lastName" name="lastName" required />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input id="email" name="email" type="email" required />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone (optional)
                </label>
                <Input id="phone" name="phone" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <Input id="subject" name="subject" required />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea id="message" name="message" rows={5} required />
              </div>

              {formError && (
                <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-md">{formError}</div>
              )}

              <Button type="submit" className="w-full" disabled={formStatus === "submitting"}>
                {formStatus === "submitting" ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>
      </div>

      {/* Map */}
      <div className="mt-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-light mb-6">Our Location</h2>
        <div className="aspect-[16/9] bg-neutral-100 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343077!2d-74.0059418!3d40.7127847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Manhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1680322790428!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

