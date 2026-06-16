import { useState } from 'react';
import { site } from '@/data/site';
import PageHeader from '@/components/ui/PageHeader';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlassPanel from '@/components/ui/GlassPanel';
import SocialLinks from '@/components/ui/SocialLinks';
import { Mail, MapPin, Clock } from '@/components/ui/icons';

const fieldClass =
  'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-bone outline-none transition-colors duration-300 placeholder:text-bone-dim focus:border-white/35';
const labelClass = 'mb-2 block text-[0.65rem] uppercase tracking-cinematic text-bone-muted';

const { contact } = site;

function ContactInfo() {
  return (
    <div className="flex flex-col gap-4">
      <a
        href={`mailto:${site.email}`}
        className="group glass flex items-center gap-4 rounded-2xl p-6 transition-colors duration-500 hover:border-white/25"
      >
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-bone">
          <Mail className="h-5 w-5" />
        </span>
        <span className="flex min-w-0 flex-col">
          <span className="label">Email</span>
          <span className="truncate text-bone transition-colors group-hover:text-white">
            {site.email}
          </span>
        </span>
      </a>

      <div className="grid gap-4 sm:grid-cols-2">
        <GlassPanel className="flex items-center gap-4 rounded-2xl p-6">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-bone">
            <MapPin className="h-5 w-5" />
          </span>
          <span className="flex flex-col">
            <span className="label">Based in</span>
            <span className="text-bone">{site.location}</span>
          </span>
        </GlassPanel>

        <GlassPanel className="flex items-center gap-4 rounded-2xl p-6">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-bone">
            <Clock className="h-5 w-5" />
          </span>
          <span className="flex flex-col">
            <span className="label">Response</span>
            <span className="text-bone">{contact.responseTime}</span>
          </span>
        </GlassPanel>
      </div>

      <div className="mt-2 flex flex-col gap-4 px-1">
        <span className="label">Elsewhere</span>
        <SocialLinks variant="list" />
      </div>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  // No backend (fully static): compose a pre-filled email the visitor sends
  // from their own mail client.
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New enquiry from ${form.name || 'your website'}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? `\n${form.email}` : ''}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <GlassPanel strong className="rounded-3xl p-6 sm:p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={update('name')}
              placeholder="Your name"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={update('email')}
              placeholder="you@example.com"
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={form.message}
            onChange={update('message')}
            placeholder="Tell me about your project…"
            className={`${fieldClass} resize-none`}
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit" size="lg" withArrow>
            Send message
          </Button>
          <p className="text-xs text-bone-dim">Opens in your email app — no account needed.</p>
        </div>
      </form>
    </GlassPanel>
  );
}

export default function Contact() {
  return (
    <>
      <PageHeader title={contact.headline}>
        <p
          className="mt-6 max-w-xl animate-fade-up text-lg text-bone-muted"
          style={{ animationDelay: '120ms' }}
        >
          {contact.intro}
        </p>
      </PageHeader>

      <Container className="py-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <ScrollReveal>
            <ContactInfo />
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </Container>
    </>
  );
}
