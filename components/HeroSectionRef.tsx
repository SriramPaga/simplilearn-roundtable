"use client";

import { useState } from "react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { submitRSVP } from "@/lib/actions";

export const HeroSectionRef = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData();
    formData.append("email", email);

    const result = await submitRSVP(formData);

    if (result.success) {
      setMessage({
        type: "success",
        text: "Thank you for your RSVP! We look forward to seeing you.",
      });
      setEmail("");
    } else {
      setMessage({
        type: "error",
        text: result.error || "Something went wrong. Please try again.",
      });
    }

    setLoading(false);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0A1E42] via-[#0D2952] to-[#0A1E42] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 right-0 w-full h-full bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
        />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Logo />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12">
          {/* Left Column - Content */}

          <div className="text-white space-y-8">
            <div className="flex items-center gap-4 text-white text-sm">
              <span className="hidden md:inline">Invite-Only</span>
              <span className="bg-[#00D9FF] text-[#0A1E42] px-3 py-1 rounded-full text-xs font-semibold">
                An Executive Roundtable · Lunch
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-[#FF8C00]">
                The Skills That Matter Next:
              </span>
              <br />
              <span className="text-white">
                Preparing Your Workforce & Leaders
              </span>
              <br />
              <span className="text-white">for the AI Era</span>
            </h1>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-lg">
                <svg
                  className="w-6 h-6 text-[#00D9FF]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-semibold">February 20, 2026</span>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <svg
                  className="w-6 h-6 text-[#00D9FF]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Chamberlain's Steak & Fish House, Dallas</span>
              </div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              AI is accelerating change across every operational layer. Roles
              are shifting. Leadership models are collapsing and reforming.
              Frontline and mid-level managers will soon lead teams of people
              and intelligent agents.
            </p>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <p className="text-xl font-semibold mb-2">
                But even the most advanced enterprises are asking the same
                question:
              </p>
              <p className="text-2xl font-bold text-[#FF8C00]">
                Which capabilities will matter most, and how do we build them at
                scale?
              </p>
            </div>

            <p className="text-gray-300">
              This invite-only roundtable gathers CHROs, CLOs, and enterprise
              workforce leaders for a candid, senior-level discussion on what's
              coming next.
            </p>
          </div>

          {/* Right Column - RSVP Form */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">
              Reserve Your Seat
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Enter your work email to confirm your attendance
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@company.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-[#00D9FF] transition-colors"
                />
              </div>

              {message && (
                <div
                  className={`p-4 rounded-lg ${
                    message.type === "success"
                      ? "bg-green-500/20 border border-green-500/50 text-green-100"
                      : "bg-red-500/20 border border-red-500/50 text-red-100"
                  }`}
                >
                  {message.text}
                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full uppercase tracking-wider"
              >
                {loading ? "Submitting..." : "RSVP Now"}
              </Button>

              <p className="text-white/60 text-sm text-center">
                Space is limited. This event is for senior executives only.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00D9FF] rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#FF8C00] rounded-full filter blur-3xl opacity-10"></div>
    </section>
  );
};
