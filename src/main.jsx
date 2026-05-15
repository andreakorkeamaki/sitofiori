import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const phone = "0761344066";
const displayPhone = "0761 344066";
const address = "Via Francesco Baracca, 7/d, 01100 Viterbo VT";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Fiorilandia%20di%20Sanna%20Stefania%20Via%20Francesco%20Baracca%207%2Fd%20Viterbo";

const images = {
  hero:
    "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=1600&q=85",
  shop:
    "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=1200&q=85",
  bouquet:
    "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=900&q=80",
  roses:
    "https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=900&q=80",
  flowers:
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80",
};

const copy = {
  it: {
    langLabel: "English version",
    nav: ["Il negozio", "Servizi", "Recensioni", "Contatti"],
    hero: {
      eyebrow: "Fioreria artigianale a Viterbo",
      title: "Fiori, bouquet e composizioni curate per ogni occasione",
      subtitle:
        "A Viterbo, Fiorilandia realizza bouquet, corone di alloro, composizioni floreali e addobbi con attenzione, esperienza e gusto personale.",
      call: "Chiama ora",
      directions: "Indicazioni",
      imageAlt: "Bouquet floreale elegante su un banco da fioreria",
    },
    shop: {
      eyebrow: "Il negozio",
      title: "Una fioreria di quartiere con cura sartoriale",
      body:
        "Fiorilandia è una fioreria di Viterbo dove ogni composizione viene preparata con cura, ascoltando l'occasione, il gusto e le esigenze del cliente. Dalle lauree ai bouquet, dalle ricorrenze ai piccoli pensieri floreali, ogni lavoro nasce con attenzione e disponibilità.",
      imageAlt: "Interno accogliente di una fioreria con fiori freschi",
    },
    gallery: [
      "Bouquet su misura",
      "Rose fresche",
      "Composizioni floreali",
      "Negozio di fiori",
    ],
    servicesIntro: {
      eyebrow: "Servizi",
      title: "Soluzioni floreali per piccoli gesti e grandi momenti",
    },
    services: [
      ["Bouquet e composizioni", "Creazioni fresche, armoniose e pensate per emozionare."],
      ["Corone di alloro per lauree", "Dettagli curati per celebrare un traguardo importante."],
      ["Fiori per cerimonie e occasioni speciali", "Addobbi floreali eleganti per momenti da ricordare."],
      ["Piante e fiori freschi", "Selezioni stagionali per la casa, un dono o un pensiero."],
      ["Consegna a domicilio", "Un servizio comodo per far arrivare i fiori dove servono."],
      ["Consigli personalizzati", "Supporto nella scelta di colori, stile e composizione."],
    ],
    reviewsIntro: {
      eyebrow: "Recensioni",
      title: "Parole semplici da chi ha scelto Fiorilandia",
    },
    reviews: [
      "Estro, gentilezza e disponibilità fuori dal comune. Un bouquet oltre le aspettative.",
      "Professionalità, gentilezza e disponibilità anche per un'occasione importante.",
      "Fiori sempre freschi, composizioni curate e ottimi consigli.",
    ],
    why: {
      eyebrow: "Perché scegliere Fiorilandia",
      title: "Attenzione, freschezza e gusto personale in ogni composizione",
      imageAlt: "Rose e fiori freschi in composizione elegante",
      reasons: [
        "Composizioni personalizzate",
        "Fiori freschi e selezionati",
        "Esperienza e attenzione al dettaglio",
        "Consigli per ogni occasione",
        "Consegna a domicilio",
      ],
    },
    contact: {
      eyebrow: "Contatti",
      address: "Indirizzo",
      phone: "Telefono",
      hours: "Orari",
      hoursText: "Verifica gli orari aggiornati su Google",
      call: "Chiama",
      directions: "Indicazioni",
      maps: "Apri su Google Maps",
      info: "Richiedi informazioni",
      imageAlt: "Fiori colorati freschi in esposizione",
      whatsappText: "Buongiorno, vorrei richiedere informazioni a Fiorilandia.",
    },
    footer: "Demo sito realizzata da",
  },
  en: {
    langLabel: "Versione italiana",
    nav: ["The shop", "Services", "Reviews", "Contact"],
    hero: {
      eyebrow: "Artisan flower shop in Viterbo",
      title: "Flowers, bouquets and arrangements crafted for every occasion",
      subtitle:
        "In Viterbo, Fiorilandia creates bouquets, laurel wreaths, floral arrangements and decorations with care, experience and a personal touch.",
      call: "Call now",
      directions: "Directions",
      imageAlt: "Elegant floral bouquet on a flower shop counter",
    },
    shop: {
      eyebrow: "The shop",
      title: "A local flower shop with a tailored sense of care",
      body:
        "Fiorilandia is a flower shop in Viterbo where every arrangement is prepared with care, listening to the occasion, taste and needs of each customer. From graduations to bouquets, from special dates to small floral gifts, every piece is made with attention and availability.",
      imageAlt: "Welcoming flower shop interior with fresh flowers",
    },
    gallery: [
      "Tailored bouquets",
      "Fresh roses",
      "Floral arrangements",
      "Flower shop",
    ],
    servicesIntro: {
      eyebrow: "Services",
      title: "Floral ideas for simple gestures and meaningful moments",
    },
    services: [
      ["Bouquets and arrangements", "Fresh, balanced creations designed to make an impression."],
      ["Laurel wreaths for graduations", "Carefully finished details for an important achievement."],
      ["Flowers for ceremonies and special occasions", "Elegant floral styling for moments worth remembering."],
      ["Plants and fresh flowers", "Seasonal selections for the home, a gift or a thoughtful gesture."],
      ["Home delivery", "A convenient service to send flowers exactly where they are needed."],
      ["Personal advice", "Guidance on colors, style and the right arrangement for the occasion."],
    ],
    reviewsIntro: {
      eyebrow: "Reviews",
      title: "Simple words from people who chose Fiorilandia",
    },
    reviews: [
      "Creativity, kindness and rare availability. A bouquet beyond expectations.",
      "Professionalism, kindness and availability for an important occasion.",
      "Always fresh flowers, carefully made arrangements and excellent advice.",
    ],
    why: {
      eyebrow: "Why choose Fiorilandia",
      title: "Care, freshness and personal taste in every arrangement",
      imageAlt: "Fresh roses and flowers in an elegant arrangement",
      reasons: [
        "Personalized arrangements",
        "Fresh, selected flowers",
        "Experience and attention to detail",
        "Advice for every occasion",
        "Home delivery",
      ],
    },
    contact: {
      eyebrow: "Contact",
      address: "Address",
      phone: "Phone",
      hours: "Hours",
      hoursText: "Check updated opening hours on Google",
      call: "Call",
      directions: "Directions",
      maps: "Open in Google Maps",
      info: "Request information",
      imageAlt: "Fresh colorful flowers on display",
      whatsappText: "Hello, I would like to request information from Fiorilandia.",
    },
    footer: "Demo website created by",
  },
};

function App() {
  const [locale, setLocale] = useState("it");
  const t = copy[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = document.querySelectorAll("[data-reveal]");

    if (!reduceMotion) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
      );

      revealItems.forEach((item) => observer.observe(item));

      const updateScrollProgress = () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
        document.documentElement.style.setProperty("--scroll-progress", progress.toString());
      };

      updateScrollProgress();
      window.addEventListener("scroll", updateScrollProgress, { passive: true });

      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", updateScrollProgress);
      };
    }

    revealItems.forEach((item) => item.classList.add("is-visible"));
  }, []);

  return (
    <main className="min-h-screen bg-warm text-stone-900">
      <ScrollProgress />
      <Header locale={locale} setLocale={setLocale} t={t} />
      <Hero t={t.hero} />
      <ShopSection t={t.shop} />
      <GalleryMarquee labels={t.gallery} />
      <ServicesSection intro={t.servicesIntro} services={t.services} />
      <ReviewsSection intro={t.reviewsIntro} reviews={t.reviews} />
      <WhySection t={t.why} />
      <ContactSection t={t.contact} />
      <Footer text={t.footer} />
      <MobileStickyActions t={t.contact} />
    </main>
  );
}

function ScrollProgress() {
  return <div className="scroll-progress" aria-hidden="true" />;
}

function LanguageToggle({ locale, setLocale, label }) {
  return (
    <div className="language-toggle" aria-label={label}>
      {["it", "en"].map((lang) => (
        <button
          aria-pressed={locale === lang}
          className={locale === lang ? "is-active" : ""}
          key={lang}
          onClick={() => setLocale(lang)}
          type="button"
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function Header({ locale, setLocale, t }) {
  return (
    <header className="absolute left-0 right-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <a className="font-serif text-xl font-semibold tracking-wide text-white" href="#top">
          Fiorilandia
        </a>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-7 rounded-full border border-white/25 bg-white/15 px-5 py-3 text-sm font-medium text-white backdrop-blur-md md:flex">
            <a href="#negozio">{t.nav[0]}</a>
            <a href="#servizi">{t.nav[1]}</a>
            <a href="#recensioni">{t.nav[2]}</a>
            <a href="#contatti">{t.nav[3]}</a>
          </nav>
          <LanguageToggle label={t.langLabel} locale={locale} setLocale={setLocale} />
        </div>
      </div>
    </header>
  );
}

function Hero({ t }) {
  return (
    <section id="top" className="relative min-h-[92svh] overflow-hidden text-white">
      <img className="hero-media absolute inset-0 h-full w-full object-cover" src={images.hero} alt={t.imageAlt} />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(55,20,26,.78),rgba(55,20,26,.38),rgba(55,20,26,.12))]" />
      <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-7xl items-end px-5 pb-16 pt-28 sm:px-8 lg:pb-20">
        <div className="max-w-3xl">
          <p className="hero-kicker mb-5 inline-flex rounded-full border border-white/25 bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-md">
            {t.eyebrow}
          </p>
          <h1 className="hero-title font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
            {t.title}
          </h1>
          <p className="hero-copy mt-6 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
            {t.subtitle}
          </p>
          <div className="hero-actions mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn btn-light" href={`tel:${phone}`}>
              {t.call}
            </a>
            <a className="btn btn-glass" href={mapsUrl} target="_blank" rel="noreferrer">
              {t.directions}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShopSection({ t }) {
  return (
    <section id="negozio" className="section-pad">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_.82fr] lg:items-center">
        <div data-reveal>
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="section-title">{t.title}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">{t.body}</p>
        </div>
        <div className="image-card motion-card aspect-[4/3]" data-reveal style={{ "--delay": "120ms" }}>
          <img src={images.shop} alt={t.imageAlt} />
        </div>
      </div>
    </section>
  );
}

function GalleryMarquee({ labels }) {
  const sources = [images.bouquet, images.roses, images.flowers, images.shop];
  const galleryItems = labels.map((label, index) => [label, sources[index]]);
  const loopItems = [...galleryItems, ...galleryItems];

  return (
    <section className="overflow-hidden border-y border-sage/15 bg-white py-8">
      <div className="marquee-track">
        {loopItems.map(([label, src], index) => (
          <figure className="marquee-item" key={`${label}-${index}`} aria-hidden={index >= galleryItems.length}>
            <img src={src} alt={index < galleryItems.length ? label : ""} />
            <figcaption>{label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function ServicesSection({ intro, services }) {
  return (
    <section id="servizi" className="section-pad bg-blush/45">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl" data-reveal>
          <p className="eyebrow">{intro.eyebrow}</p>
          <h2 className="section-title">{intro.title}</h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, text], index) => (
            <article
              className="service-card motion-card"
              data-reveal
              key={title}
              style={{ "--delay": `${(index % 3) * 90}ms` }}
            >
              <div className="service-image">
                <img src={[images.bouquet, images.roses, images.flowers][index % 3]} alt="" aria-hidden="true" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-2xl font-semibold text-bordeaux">{title}</h3>
                <p className="mt-3 leading-7 text-stone-700">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection({ intro, reviews }) {
  return (
    <section id="recensioni" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl" data-reveal>
          <p className="eyebrow">{intro.eyebrow}</p>
          <h2 className="section-title">{intro.title}</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {reviews.map((review, index) => (
            <figure
              className="motion-card rounded-[1.4rem] border border-sage/20 bg-white p-6 shadow-soft"
              data-reveal
              key={review}
              style={{ "--delay": `${index * 90}ms` }}
            >
              <div className="mb-5 text-bordeaux">★★★★★</div>
              <blockquote className="text-lg leading-8 text-stone-700">"{review}"</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection({ t }) {
  return (
    <section className="section-pad bg-sage text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.85fr_1fr] lg:items-center">
        <div className="image-card motion-card aspect-[4/5] max-h-[580px]" data-reveal>
          <img src={images.roses} alt={t.imageAlt} />
        </div>
        <div data-reveal style={{ "--delay": "120ms" }}>
          <p className="eyebrow text-white/75">{t.eyebrow}</p>
          <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-5xl">{t.title}</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {t.reasons.map((reason) => (
              <div className="reason-pill flex items-center gap-3 rounded-2xl bg-white/12 p-4 backdrop-blur-sm" key={reason}>
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-sm font-bold text-sage">
                  ✓
                </span>
                <span className="font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ t }) {
  const whatsappUrl = `https://wa.me/390761344066?text=${encodeURIComponent(t.whatsappText)}`;

  return (
    <section id="contatti" className="section-pad pb-28 md:pb-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-[1fr_.8fr]">
        <div className="motion-card rounded-[1.8rem] bg-bordeaux p-7 text-white shadow-soft sm:p-10" data-reveal>
          <p className="text-sm font-semibold uppercase tracking-[.22em] text-white/70">{t.eyebrow}</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-5xl">
            Fiorilandia di Sanna Stefania
          </h2>
          <div className="mt-8 grid gap-5 text-lg leading-8 text-white/88">
            <p>
              <span className="block text-sm font-semibold uppercase tracking-[.18em] text-white/60">
                {t.address}
              </span>
              {address}
            </p>
            <p>
              <span className="block text-sm font-semibold uppercase tracking-[.18em] text-white/60">
                {t.phone}
              </span>
              {displayPhone}
            </p>
            <p>
              <span className="block text-sm font-semibold uppercase tracking-[.18em] text-white/60">
                {t.hours}
              </span>
              {t.hoursText}
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className="btn btn-light" href={`tel:${phone}`}>
              {t.call}
            </a>
            <a className="btn btn-glass" href={mapsUrl} target="_blank" rel="noreferrer">
              {t.maps}
            </a>
            <a className="btn btn-glass" href={whatsappUrl} target="_blank" rel="noreferrer">
              {t.info}
            </a>
          </div>
        </div>
        <div className="image-card motion-card min-h-[360px]" data-reveal style={{ "--delay": "120ms" }}>
          <img src={images.flowers} alt={t.imageAlt} />
        </div>
      </div>
    </section>
  );
}

function Footer({ text }) {
  return (
    <footer className="border-t border-sage/20 bg-white px-5 py-8 text-center text-sm text-stone-600 sm:px-8">
      {text}{" "}
      <a
        className="font-semibold text-bordeaux underline-offset-4 hover:underline"
        href="https://www.andreakorkeamaki.com/"
        target="_blank"
        rel="noreferrer"
      >
        Andrea Korkeamaki
      </a>
    </footer>
  );
}

function MobileStickyActions({ t }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-3 border-t border-sage/20 bg-warm/95 p-3 shadow-[0_-12px_35px_rgba(49,38,32,.12)] backdrop-blur md:hidden">
      <a className="btn btn-primary justify-center" href={`tel:${phone}`}>
        {t.call}
      </a>
      <a className="btn btn-secondary justify-center" href={mapsUrl} target="_blank" rel="noreferrer">
        {t.directions}
      </a>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
