"use client";

import { useState } from "react";
import { submitRSVP } from "@/lib/actions";

export const InviteSectionRef = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return;

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
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-20 py-24">
        {/* Email + RSVP Row */}
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-6 mb-4">
            {/* Email Input */}
            <div className="flex items-center gap-4 w-[720px] h-[64px] border border-gray-300 rounded-lg px-5">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0L12 13.5 2.25 6.75"
                />
              </svg>

              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email to confirm your attendance"
                className="w-full h-full outline-none text-[16px] placeholder:text-gray-400"
              />
            </div>

            {/* RSVP Button */}
            <button
              type="submit"
              disabled={loading}
              className="
                h-[64px]
                px-12
                bg-[#E7B25A]
                text-white
                text-[20px]
                font-semibold
                rounded-lg
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
            >
              {loading ? "Submitting..." : "RSVP Now"}
            </button>
          </div>
        </form>

        {/* Success / Error Message */}
        {message && (
          <p
            className={`mb-12 text-[16px] ${
              message.type === "success"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {message.text}
          </p>
        )}

        {/* Paragraph 1 */}
        <p className="text-[20px] leading-[1.7] text-black max-w-[1100px] mb-12">
          AI is accelerating change across every operational layer. Roles are
          shifting. Leadership models are collapsing and reforming. Frontline and
          mid-level managers will soon lead teams of people and intelligent
          agents.
        </p>

        {/* Paragraph 2 */}
        <p className="text-[20px] leading-[1.7] text-black max-w-[1100px] mb-16">
          But even the most advanced enterprises are asking the same question:
        </p>

        {/* Highlight Question */}
        <h2 className="text-center text-black font-black text-[36px] leading-[1.3] max-w-[900px] mx-auto mb-16">
          Which capabilities will matter most,
          <br />
          and how do we build them at scale?
        </h2>

        {/* Paragraph 3 */}
        <p className="text-[20px] leading-[1.7] text-black max-w-[1100px]">
          This invite-only roundtable gathers CHROs, CLOs, and enterprise
          workforce leaders for a candid, senior-level discussion on what’s
          coming next.
        </p>
      </div>
    </section>
  );
};
