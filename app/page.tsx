import { ClockIcon, EyeIcon, UserGroupIcon, BanknotesIcon, ShareIcon, ArrowsRightLeftIcon, MapPinIcon, BriefcaseIcon, CalendarIcon, PaintBrushIcon, HeartIcon, ChatBubbleOvalLeftIcon, PaperAirplaneIcon, BookmarkIcon } from "@heroicons/react/24/outline";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const problemCards = [
    {
      title: "Keine Zeit fürs Marketing",
      text: "Sie stehen auf der Baustelle und nicht vor dem Computer. Social Media bleibt liegen.",
      icon: ClockIcon,
    },
    {
      title: "Zu wenig Sichtbarkeit",
      text: "Ihre guten Projekte sehen nur der Kunde vor Ort – aber nicht neue Interessenten in Ihrer Region.",
      icon: EyeIcon,
    },
    {
      title: "Fachkräftemangel",
      text: "Gute Mitarbeiter und Azubis zu finden, wird immer schwieriger.",
      icon: UserGroupIcon,
    },
    {
      title: "Agenturen zu teuer",
      text: "Mehrere hundert Euro im Monat für eine Marketingagentur sind für viele Betriebe nicht drin.",
      icon: BanknotesIcon,
    },
  ];

  const steps = [
    {
      title: "1. Fotos senden",
      text: "Sie schicken uns Ihre Projektfotos und ein paar Stichworte – per WhatsApp oder Upload.",
    },
    {
      title: "2. KI erstellt Ihre Posts",
      text: "Unsere KI generiert fertige Posts für Facebook, Instagram und Google – inklusive Text, Bildideen & Hashtags.",
    },
    {
      title: "3. Mehr Anfragen & Bewerber",
      text: "Sie veröffentlichen die Posts oder wir posten automatisch – und Sie erhalten mehr Sichtbarkeit, Kunden und Bewerbungen.",
    },
  ];

  const demoPosts = [
    {
      label: "Instagram Post",
      title: "Wohnungsrenovierung – Vorher/Nachher",
      text: "Frischer Anstrich, neuer Look! Diese 3-Zimmer-Wohnung haben wir komplett neu gestaltet – von vergilbt zu modern. Lust auf Veränderung? Jetzt kostenloses Angebot anfragen.",
      image: "/images/before_after_room.png",
    },
    {
      label: "Facebook Post",
      title: "Fassadensanierung in Ihrer Stadt",
      text: "Neue Farbe für diese Hausfassade – witterungsbeständig und langlebig. Wir beraten Sie gerne zu passenden Farbsystemen für Ihr Gebäude.",
      image: "/images/renovating_outside.png",
    },
    {
      label: "Recruiting-Post",
      title: "Wir suchen Maler (m/w/d)",
      text: "Verstärkung gesucht! Du bist Maler oder Lackierer (m/w/d) und hast Lust auf ein familiäres Team? Bewirb dich in nur 2 Minuten per WhatsApp.",
      image: "/images/guy_painting_wall.png",
    },
    {
      label: "Google-Post",
      title: "Tipp: Die richtige Wandfarbe fürs Schlafzimmer",
      text: "Beruhigende Farben wie Blau- und Grautöne sorgen für besseren Schlaf. Wir unterstützen Sie bei der Auswahl und übernehmen den sauberen Anstrich.",
      image: "/images/nice_color_behind_bed.png",
    },
  ];

  const features = [
    {
      title: "Automatische Social-Media-Posts",
      text: "Wir erstellen fertige Texte und Bildideen aus Ihren Projektfotos – optimiert für Facebook & Instagram.",
      icon: ShareIcon,
    },
    {
      title: "Vorher-Nachher-Darstellungen",
      text: "Zeigen Sie Ihre Leistung mit eindrucksvollen Vorher/Nachher-Beiträgen Ihrer Projekte.",
      icon: ArrowsRightLeftIcon,
    },
    {
      title: "Lokale Kundenansprache",
      text: "Beiträge und Werbetexte, die gezielt Kunden in Ihrer Region ansprechen.",
      icon: MapPinIcon,
    },
    {
      title: "Recruiting-Posts",
      text: "Mitarbeiter- und Azubi-Gewinnung mit fertigen Stellen-Posts und Bildideen.",
      icon: BriefcaseIcon,
    },
    {
      title: "Monatlicher Posting-Plan",
      text: "Sie erhalten einen klaren Plan, wann welche Inhalte veröffentlicht werden sollten.",
      icon: CalendarIcon,
    },
    {
      title: "Speziell für Maler & Lackierer",
      text: "Keine generische Marketingsoftware – alle Vorlagen sind auf Malerbetriebe zugeschnitten.",
      icon: PaintBrushIcon,
    },
  ];

  const pricing = [
    {
      name: "Basic",
      price: "49 € / Monat",
      subtitle: "Für kleine Betriebe, die starten wollen.",
      features: ["12 fertige Posts pro Monat", "2 Kanäle (Facebook & Instagram)", "Vorher/Nachher-Posts"],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "99 € / Monat",
      subtitle: "Für Betriebe mit regelmäßig neuen Projekten.",
      features: ["Unbegrenzte Post-Vorlagen", "3 Kanäle (Facebook, Instagram, Google)", "Recruiting-Posts inklusive", "Monatlicher Posting-Plan"],
      highlighted: true,
      badge: "Empfohlen",
    },
  ];

  const testimonials = [
    {
      name: "Malerbetrieb Schneider",
      role: "Inhaber, 5 Mitarbeiter",
      text: "Vorher haben wir gar nichts gepostet. Jetzt laufen die Beiträge von alleine und wir bekommen regelmäßig Anfragen über Instagram und Facebook.",
    },
    {
      name: "Farbdesign Müller",
      role: "Malermeisterbetrieb",
      text: "Die Einrichtung war einfach und wir schicken nur noch Fotos per WhatsApp. Den Rest übernimmt das System.",
    },
    {
      name: "Farbraum Becker",
      role: "Team mit 8 Personen",
      text: "Unsere Projekte bekommen endlich die Aufmerksamkeit, die sie verdienen – und wir sparen jede Woche mehrere Stunden.",
    },
  ];

  const faqs = [
    {
      question: "Muss ich selbst etwas posten?",
      answer: "Nein, wir erstellen alle Beiträge für Sie. Sie können sie mit einem Klick veröffentlichen oder wir übernehmen das automatische Posten.",
    },
    {
      question: "Wie sende ich meine Fotos?",
      answer: "Ganz einfach per WhatsApp, E-Mail oder Upload-Link. Einmal pro Woche oder nach jedem Projekt – wie es für Sie passt.",
    },
    {
      question: "Brauche ich technische Vorkenntnisse?",
      answer: "Nein. Wir richten alles mit Ihnen gemeinsam ein und erklären es in einfachen Schritten.",
    },
    {
      question: "Kann ich jederzeit kündigen?",
      answer: "Ja, das Abo ist monatlich kündbar. Keine lange Vertragsbindung.",
    },
    {
      question: "Was ist, wenn ich keine Zeit habe?",
      answer: "Genau dafür ist der Service gemacht – Sie schicken Fotos, wir machen den Rest.",
    },
  ];

  return (
    <div className="scroll-smooth bg-white text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold text-blue-900">Marker Werbung</div>
          <a
            href="#final-cta"
            className="rounded-full bg-blue-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Jetzt starten
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <section id="hero" className="grid gap-16 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-900">KI-Marketing für Maler</p>
            <h1 className="mt-6 text-4xl font-bold text-blue-900 sm:text-5xl">Mehr Kunden & Bewerber für Ihren Malerbetrieb – automatisch.</h1>
            <p className="mt-4 text-lg text-slate-600">
              Wir verwandeln Ihre Baustellen-Fotos in fertige Social-Media-Posts. Ohne dass Sie selbst Text schreiben oder posten müssen.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              {["Facebook, Instagram & Google-Posts automatisch erstellt", "Speziell für Maler- und Lackiererbetriebe entwickelt", "Ohne zusätzlichen Zeitaufwand für Sie"].map(
                (item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-900" />
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#final-cta"
                className="rounded-full bg-amber-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-amber-500/40 transition hover:bg-amber-400"
              >
                Kostenlose Beispiel-Posts erhalten
              </a>
              <a href="#solution-steps" className="rounded-full border border-blue-200 px-6 py-3 text-base font-semibold text-blue-900 hover:bg-blue-50">
                So funktioniert es
              </a>
            </div>
          </div>
          <div className="max-w-sm rounded-2xl border border-slate-200 bg-white shadow-xl shadow-blue-900/10">
            {/* Instagram Post Header */}
            <div className="flex items-center gap-2 border-b border-slate-200 px-3 py-1.5">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600" />
              <div className="flex-1">
                <p className="text-xs font-semibold text-slate-900">marker werbung</p>
                <p className="text-[10px] text-slate-500">Automatischer Post</p>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-wide text-blue-900">Instagram</span>
            </div>
            
            {/* Instagram Post Image */}
            <div className="h-80 w-full overflow-hidden bg-slate-100">
              <img src="/images/renovating_outside.png" alt="Frischer Fassadenanstrich" className="h-full w-full object-cover" />
            </div>
            
            {/* Instagram Post Actions */}
            <div className="flex items-center gap-3 border-b border-slate-200 px-3 py-1.5">
              <HeartIcon className="h-5 w-5 text-slate-900" />
              <ChatBubbleOvalLeftIcon className="h-5 w-5 text-slate-900" />
              <PaperAirplaneIcon className="h-5 w-5 text-slate-900" />
              <div className="flex-1" />
              <BookmarkIcon className="h-5 w-5 text-slate-900" />
            </div>
            
            {/* Instagram Post Content */}
            <div className="px-3 py-1.5">
              <p className="mb-1 text-xs font-semibold text-slate-900">Gefällt 127 Personen</p>
              <p className="text-xs text-slate-900">
                <span className="font-semibold">marker_werbung</span>{" "}
                <span className="font-semibold">Frischer Fassadenanstrich</span>
                <br />
                <br />
                ✅ 3 Farben | 🏡 EFH in Köln
                <br />
                <br />
                „Neue Fassade, neuer Eindruck. Wir haben diese Altbaufront in nur 5 Tagen renoviert."
              </p>
              <p className="mt-1 text-[10px] text-slate-500">vor 2 Stunden</p>
            </div>
          </div>
        </section>

        <section id="trust-strip" className="my-12 rounded-3xl bg-slate-50 px-6 py-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-900">Entwickelt speziell für Maler & Lackierer</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-600">
            {["Innenräume", "Fassaden", "Böden & Lackierarbeiten", "Privat- und Gewerbekunden"].map((badge) => (
              <span key={badge} className="rounded-full border border-slate-200 px-4 py-2">
                {badge}
              </span>
            ))}
          </div>
        </section>

        <section id="problems" className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-900">Warum Malerbetriebe unser Tool nutzen</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Wir kennen die typischen Herausforderungen im Handwerk.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {problemCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <article key={card.title} className="rounded-2xl border border-slate-100 p-6 shadow-sm shadow-slate-200/60">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                    <IconComponent className="h-6 w-6 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900">{card.title}</h3>
                  <p className="mt-2 text-slate-600">{card.text}</p>
                </article>
              );
            })}
          </div>
          <p className="mt-8 text-center text-lg font-semibold text-slate-800">Deshalb haben wir eine einfache Lösung nur für Malerbetriebe entwickelt.</p>
        </section>

        <section id="solution-steps" className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-900">So einfach funktioniert es</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">In drei Schritten zu mehr Sichtbarkeit.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <article key={step.title} className="rounded-2xl border border-slate-100 p-6 shadow-sm">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-600">
                  {step.title.split(".")[0]}
                </div>
                <h3 className="text-xl font-semibold text-blue-900">{step.title}</h3>
                <p className="mt-2 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="#demo-examples" className="text-base font-semibold text-blue-900 hover:underline">
              Beispiele ansehen →
            </a>
          </div>
        </section>

        <section id="demo-examples" className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-900">So könnten Ihre Beiträge aussehen</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Einige Beispiele aus unserer KI.</h2>
            <p className="mt-3 text-slate-600">Einige Beispiele, wie Ihre Projekte als Social-Media-Posts wirken können – erstellt von unserer KI.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {demoPosts.map((post) => (
              <article key={post.title} className="rounded-3xl border border-slate-100 p-6 shadow-sm">
                <span className="text-xs font-semibold uppercase text-blue-900">{post.label}</span>
                <div className="mt-4 h-64 w-full overflow-hidden rounded-2xl bg-slate-100">
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{post.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{post.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="features" className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-900">Was unser Tool für Maler einzigartig macht</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Mehr als nur eine weitere Marketing-App.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <article key={feature.title} className="rounded-2xl border border-slate-100 p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                    <IconComponent className="h-6 w-6 text-blue-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900">{feature.title}</h3>
                  <p className="mt-2 text-slate-600">{feature.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="pricing" className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-900">Einfaches Preismodell für kleine Betriebe</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Wählen Sie das passende Paket.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {pricing.map((plan) => (
              <article
                key={plan.name}
                className={`relative rounded-3xl border p-8 shadow-lg ${plan.highlighted ? "border-blue-900 bg-blue-900 text-white" : "border-slate-100 bg-white shadow-slate-200/60"}`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 right-6 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-slate-900">{plan.badge}</span>
                )}
                <p className={`text-sm font-semibold uppercase tracking-wide ${plan.highlighted ? "text-amber-200" : "text-blue-900"}`}>{plan.name}</p>
                <h3 className="mt-4 text-4xl font-bold">{plan.price}</h3>
                <p className={`mt-2 text-sm ${plan.highlighted ? "text-blue-100" : "text-slate-600"}`}>{plan.subtitle}</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {plan.features.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${plan.highlighted ? "bg-amber-300" : "bg-blue-900"}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#final-cta"
                  className={`mt-8 block rounded-full px-6 py-3 text-center text-sm font-semibold ${
                    plan.highlighted ? "bg-amber-400 text-slate-900 hover:bg-amber-300" : "border border-blue-200 text-blue-900 hover:bg-blue-50"
                  }`}
                >
                  Kostenlose Beispiel-Posts anfordern
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="testimonials" className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-900">Was andere Maler über uns sagen</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Erfahrungen aus der Praxis.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                <p className="text-slate-600">“{testimonial.text}”</p>
                <div className="mt-6">
                  <p className="text-lg font-semibold text-blue-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-900">Häufige Fragen</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Alles, was Sie wissen müssen.</h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-slate-100 p-5">
                <h3 className="text-lg font-semibold text-blue-900">{faq.question.trim()}</h3>
                <p className="mt-2 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <section id="final-cta" className="bg-blue-900 py-16 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-200">Bereit für mehr Sichtbarkeit Ihres Malerbetriebs?</p>
          <h2 className="mt-4 text-3xl font-bold">Erhalten Sie unverbindlich kostenlose Beispiel-Posts für Ihren Betrieb.</h2>
          <p className="mt-3 text-blue-100">Keine Vertragsbindung. Wir melden uns innerhalb von 24 Stunden.</p>

          <ContactForm />
        </div>
      </section>

      <footer id="footer" className="border-t border-slate-100 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center text-sm text-slate-500 md:flex-row md:justify-between md:text-left">
          <div>
            <p className="text-lg font-semibold text-blue-900">Marker Werbung</p>
            <p>© 2025 Marker Werbung – KI-Marketing für Maler & Lackierer.</p>
          </div>
          <div className="flex gap-6 text-slate-600">
            <a href="#" className="hover:text-blue-900">
              Impressum
            </a>
            <a href="#" className="hover:text-blue-900">
              Datenschutz
            </a>
            <a href="#final-cta" className="hover:text-blue-900">
              Kontakt
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

