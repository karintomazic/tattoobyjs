"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function ContactCard({ title, icon, children, href }) {
  const CardContent = (
    <div className="rounded-2xl bg-gray-50 p-10 transition-transform duration-200 hover:scale-101 hover:shadow-lg cursor-pointer h-full">
      <h3 className="flex items-center gap-4 text-2xl font-semibold text-gray-900">
        {icon && <span className="text-xl text-[#FF6F61]">{icon}</span>}
        {title}
      </h3>
      <dl className="space-y-1 text-base text-gray-600 mt-8">{children}</dl>
    </div>
  );

  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="block h-full"
    >
      {CardContent}
    </a>
  ) : (
    CardContent
  );
}

export default function Kontakt() {
  return (
    <section id="kontakt">
      <div className="mx-auto max-w-7xl py-24 px-6 lg:px-8">
        <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl mb-4">
          Kontakt
        </h2>
        <div className="mx-auto max-w-2xl divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-10 pb-16 pt-4 lg:grid-cols-3">
            <ContactCard
              title="Email"
              icon={<FontAwesomeIcon icon={faEnvelope} />}
              href="mailto:tattoostudiobyjs@gmail.com"
            >
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <p className="mb-2"><span className="font-bold">Imate vprašanje?</span> Ali se želite naročiti na termin</p>
                  <p className="font-bold">Pisite nam na:</p>
                  <span className="email text-[#FF6F61] font-semibold no-underline border-b pb-1 leading-8">
                  tattoostudiobyjs@gmail.com
                  </span>
                </dd>
              </div>
            </ContactCard>
            <ContactCard
              title="Lokacija"
              icon={<FontAwesomeIcon icon={faMapMarkerAlt} />}
              href="https://www.google.com/maps/search/?api=1&query=Ulica+heroja+Šaranoviča+27,+2000+Maribor"
            >
              <div>
                <dt className="sr-only">Lokacija</dt>
                <dd>
                  <p className="mb-2"><span className="font-bold">Tattoo studio by JS,</span> tetoviranje, Jernej Sirc s.p.</p>
                  <span className="font-semibold text-[#FF6F61] no-underline border-b pb-1 leading-8">
                    Ulica heroja Šaranoviča 27, 2000 Maribor
                  </span>
                </dd>
              </div>
            </ContactCard>
            <ContactCard
              title="Odpiralni čas"
              icon={<FontAwesomeIcon icon={faClock} />}
            >
              <div>
                <dt className="sr-only">Odpiralni čas</dt>
                <dd>
                  <span className="font-semibold">Po dogovoru</span>
                </dd>
              </div>
            </ContactCard>
          </div>
        </div>
      </div>
    </section>
  );
}
