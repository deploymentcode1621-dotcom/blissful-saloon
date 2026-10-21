"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { BOOKING_EVENT_TYPES, getWhatsAppLink } from "@/data/siteConfig";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  eventType: "",
  eventDate: "",
  venue: "",
  time: "",
  message: "",
};

const inputClasses =
  "w-full border-b border-plum/25 bg-transparent pb-3 pt-1 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-plum focus:outline-none transition-colors";

export default function BookingForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend is wired up yet — this simply confirms receipt locally and
    // hands the details to WhatsApp so the studio can respond immediately.
    setSubmitted(true);
  };

  const whatsappMessage = `Hello Blissful Makeup Studio, I would like to enquire about an appointment.
Name: ${form.name}
Phone: ${form.phone}
Event: ${form.eventType || "Not specified"}
Date: ${form.eventDate || "Not specified"}
Venue: ${form.venue || "Not specified"}`;

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 border border-plum/15 bg-blush/30 p-8">
        <CheckCircle2 className="text-rose" size={32} />
        <h3 className="font-display text-2xl text-plum">Request received</h3>
        <p className="max-w-sm text-sm leading-relaxed text-charcoal/70">
          Thank you, {form.name || "there"}. We&rsquo;ve noted your request and
          will get back to you shortly. For a faster response, message us
          directly on WhatsApp with the same details.
        </p>
        <a
          href={getWhatsAppLink(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="eyebrow inline-flex items-center gap-2 bg-plum px-6 py-3.5 text-ivory transition-colors hover:bg-charcoal"
        >
          Continue on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-7 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label htmlFor="name" className="eyebrow text-charcoal/50">Full Name</label>
        <input id="name" required value={form.name} onChange={update("name")} className={`${inputClasses} mt-2`} placeholder="Your full name" />
      </div>

      <div>
        <label htmlFor="phone" className="eyebrow text-charcoal/50">Phone Number</label>
        <input id="phone" type="tel" required value={form.phone} onChange={update("phone")} className={`${inputClasses} mt-2`} placeholder="+91 00000 00000" />
      </div>

      <div>
        <label htmlFor="email" className="eyebrow text-charcoal/50">Email</label>
        <input id="email" type="email" value={form.email} onChange={update("email")} className={`${inputClasses} mt-2`} placeholder="you@email.com" />
      </div>

      <div>
        <label htmlFor="eventType" className="eyebrow text-charcoal/50">Event Type</label>
        <select id="eventType" required value={form.eventType} onChange={update("eventType")} className={`${inputClasses} mt-2 appearance-none`}>
          <option value="" disabled>Select an event type</option>
          {BOOKING_EVENT_TYPES.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="eventDate" className="eyebrow text-charcoal/50">Event Date</label>
        <input id="eventDate" type="date" value={form.eventDate} onChange={update("eventDate")} className={`${inputClasses} mt-2`} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="venue" className="eyebrow text-charcoal/50">Venue / Location</label>
        <input id="venue" value={form.venue} onChange={update("venue")} className={`${inputClasses} mt-2`} placeholder="Venue name or area" />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="time" className="eyebrow text-charcoal/50">Preferred Appointment Time</label>
        <input id="time" type="time" value={form.time} onChange={update("time")} className={`${inputClasses} mt-2`} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="eyebrow text-charcoal/50">Message</label>
        <textarea id="message" rows={4} value={form.message} onChange={update("message")} className={`${inputClasses} mt-2 resize-none`} placeholder="Tell us a little about your event" />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="eyebrow group inline-flex items-center gap-2.5 bg-plum px-7 py-3.5 text-ivory transition-colors hover:bg-charcoal"
        >
          Request Appointment
          <Send size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </form>
  );
}
