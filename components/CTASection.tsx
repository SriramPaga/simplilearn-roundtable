'use client'

import { useState } from 'react';
import { Button } from './Button';
import { submitRSVP } from '@/lib/actions';

export const CTASection = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData();
    formData.append('email', email);

    const result = await submitRSVP(formData);

    if (result.success) {
      setMessage({ type: 'success', text: 'Thank you for your RSVP! We look forward to seeing you.' });
      setEmail('');
    } else {
      setMessage({ type: 'error', text: result.error || 'Something went wrong. Please try again.' });
    }

    setLoading(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A1E42] via-[#0D2952] to-[#0A1E42] relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/images/venue.jpg)' }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Space is limited.
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          This event is for senior executives only.
        </p>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email to confirm your attendance"
              required
              className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-[#00D9FF] transition-colors"
            />
            <Button
              type="submit"
              disabled={loading}
              className="uppercase tracking-wider whitespace-nowrap"
            >
              {loading ? 'Submitting...' : 'RSVP Now'}
            </Button>
          </div>

          {message && (
            <div
              className={`mt-4 p-4 rounded-lg ${
                message.type === 'success'
                  ? 'bg-green-500/20 border border-green-500/50 text-green-100'
                  : 'bg-red-500/20 border border-red-500/50 text-red-100'
              }`}
            >
              {message.text}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
