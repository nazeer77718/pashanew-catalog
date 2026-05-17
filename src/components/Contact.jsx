import SectionHeading from './SectionHeading';
import ContactCard from './ContactCard';

const PHONE = '+919912941865';
const PHONE_DISPLAY = '+91 9912941865';

const icons = {
  location: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  ),
  phone: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  ),
  clock: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
};

const Contact = () => (
  <section id="contact" className="bg-slate-900 py-20 text-white sm:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        dark
        label="Contact"
        title="Let's Build Your Next Project"
        subtitle="Visit our workshop in Kuravi or call Pasha directly for quotes and custom fabrication."
      />

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
        <ContactCard icon={icons.location} title="Workshop Address">
          <address className="not-italic">
            <p className="font-medium text-white">Pasha Engineering Works</p>
            <p className="mt-2">Kuravi, Nerada Road</p>
            <p>Mahabubabad District, Telangana</p>
          </address>
        </ContactCard>

        <ContactCard icon={icons.phone} title="Contact Details">
          <p className="text-slate-400">
            Owner: <span className="font-medium text-white">Pasha</span>
          </p>
          <p className="mt-4">
            <span className="block text-sm text-slate-500">Phone</span>
            <a
              href={`tel:${PHONE}`}
              className="mt-1 inline-block text-lg font-semibold text-white transition hover:text-amber-400"
            >
              {PHONE_DISPLAY}
            </a>
          </p>
          <p className="mt-4">
            <a
              href={`https://wa.me/${PHONE.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-amber-400 transition hover:text-amber-300"
            >
              Message on WhatsApp
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </p>
        </ContactCard>

        <ContactCard icon={icons.clock} title="Working Hours">
          <p className="font-medium text-white">Monday to Saturday</p>
          <p className="mt-3 text-2xl font-semibold tracking-tight text-amber-400 sm:text-3xl">
            9:00 AM – 6:00 PM
          </p>
          <p className="mt-4 text-sm text-slate-500">Closed on Sundays</p>
        </ContactCard>
      </div>
    </div>
  </section>
);

export default Contact;
