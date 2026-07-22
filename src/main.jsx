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
    "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=1800&q=88",
  workbench:
    "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=1200&q=84",
  bouquet:
    "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=1000&q=84",
  roses:
    "https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=1000&q=84",
  seasonal:
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=84",
  delivery:
    "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1000&q=84",
};

const copy = {
  it: {
    langLabel: "English version",
    nav: ["Stefania", "Bouquet", "Come ordinare", "Contatti"],
    hero: {
      eyebrow: "Bottega floreale dal 1997",
      title: "Fiori naturali, preparati con cura a Viterbo",
      subtitle:
        "Bouquet, mazzi e omaggi floreali realizzati da Stefania con attenzione artigianale, stile rustico e amore per la bellezza naturale dei fiori.",
      call: "Chiama 0761 344066",
      directions: "Indicazioni",
      note: "Ogni bouquet nasce dai fiori disponibili, dalla stagione e dal messaggio da comunicare.",
      imageAlt: "Bouquet naturale su banco da fiorista con atmosfera calda",
    },
    introCards: [
      ["Dal 1997", "Una bottega tradizionale di Viterbo seguita personalmente da Stefania."],
      ["Stile naturale", "Fiori freschi, materiali semplici, composizioni spontanee e mai artificiali."],
      ["Su misura", "Consiglio discreto in base a occasione, colori, fiore desiderato e gusto."],
    ],
    story: {
      eyebrow: "La terra dei fiori di Stefania",
      title: "Un luogo caldo e familiare dove ogni mazzo è diverso",
      body:
        "Fiorilandia nasce dall'idea di una terra dei fiori: una bottega semplice, curata e personale dove scegliere un omaggio floreale con calma. Stefania segue direttamente il negozio, ascolta la richiesta e prepara composizioni naturali, stagionali e non standardizzate.",
      quote: "La bellezza dei fiori resta protagonista: niente effetti artificiali, niente eccessi, solo cura e buon gusto.",
      imageAlt: "Interno luminoso di una fioreria con fiori freschi",
    },
    gallery: ["Carta kraft", "Bouquet naturale", "Fiori di stagione", "Bottega floreale"],
    servicesIntro: {
      eyebrow: "Bouquet, mazzi e omaggi floreali",
      title: "Il lavoro quotidiano del negozio, pensato per ricorrenze e messaggi personali",
      body:
        "Non un catalogo rigido, ma composizioni preparate in base ai fiori del momento e a cio che vuoi comunicare.",
    },
    services: [
      ["Bouquet e mazzi di fiori", "Composizioni naturali per compleanni, anniversari, inviti e piccoli pensieri."],
      ["Omaggi floreali a distanza", "Per inviare un pensiero a una persona cara anche quando non puoi passare in negozio."],
      ["Corone di alloro", "Soluzioni curate per lauree e traguardi, con dettagli sobri e naturali."],
      ["Piante e fiori freschi", "Scelte stagionali per casa, regali e ricorrenze quotidiane."],
      ["Consegna a domicilio", "Un servizio svolto con serieta e discrezione, da confermare in base alla richiesta."],
      ["Consiglio personalizzato", "Aiuto nella scelta di colori, stile e fiori adatti all'occasione."],
    ],
    guide: {
      eyebrow: "Come scegliere il bouquet giusto",
      title: "Poche informazioni aiutano Stefania a preparare un mazzo piu personale",
      steps: [
        ["Occasione", "Compleanno, anniversario, laurea, ringraziamento o pensiero spontaneo."],
        ["Messaggio", "Romantico, allegro, delicato, sobrio, elegante o familiare."],
        ["Colori", "Toni chiari, caldi, naturali, romantici o preferenze della persona che riceve."],
        ["Fiore desiderato", "Se c'e un fiore preferito, Stefania verifica disponibilita e alternative stagionali."],
      ],
    },
    seasonality: {
      eyebrow: "Fiori di stagione",
      title: "La disponibilita cambia, ed e proprio questo che rende ogni composizione autentica",
      body:
        "Alcuni fiori non sono sempre disponibili. Fiorilandia valorizza cio che la stagione offre, proponendo alternative naturali e coerenti con il gusto richiesto.",
      cards: ["Fiori freschi e selezionati", "Colori reali, non artificiali", "Materiali naturali", "Composizioni mai identiche"],
      imageAlt: "Fiori freschi stagionali in colori naturali",
    },
    reviewsIntro: {
      eyebrow: "Recensioni",
      title: "Clienti che hanno apprezzato cura, disponibilita e consiglio",
    },
    reviews: [
      "Estro, gentilezza e disponibilita fuori dal comune. Un bouquet oltre le aspettative.",
      "Professionalita, gentilezza e disponibilita anche per un'occasione importante.",
      "Fiori sempre freschi, composizioni curate e ottimi consigli.",
    ],
    delivery: {
      eyebrow: "Ordini e consegne",
      title: "Per chi ordina da vicino o a distanza",
      body:
        "Per un omaggio floreale a domicilio, la cosa migliore e chiamare il negozio: Stefania puo capire occasione, destinatario, gusto e disponibilita del momento. Le modalita operative, i tempi e le zone di consegna vanno confermati al telefono.",
      cta: "Chiama 0761 344066",
      bullets: ["Consiglio prima dell'ordine", "Discrezione nella consegna", "Soluzioni in base alla stagione"],
      imageAlt: "Mazzo di fiori pronto per la consegna",
    },
    contact: {
      eyebrow: "Contatta Fiorilandia",
      address: "Indirizzo",
      phone: "Telefono",
      hours: "Orari",
      hoursText: "Verifica gli orari aggiornati su Google",
      call: "Chiama",
      directions: "Indicazioni",
      maps: "Apri su Google Maps",
      info: "Richiedi informazioni",
      imageAlt: "Dettaglio di fiori freschi su fondo naturale",
    },
    footer: "Demo sito realizzata da",
  },
  en: {
    langLabel: "Versione italiana",
    nav: ["Stefania", "Bouquets", "How to order", "Contact"],
    hero: {
      eyebrow: "Flower shop since 1997",
      title: "Natural flowers, prepared with care in Viterbo",
      subtitle:
        "Bouquets, flower bunches and floral gifts made by Stefania with artisan care, rustic style and love for the natural beauty of flowers.",
      call: "Call 0761 344066",
      directions: "Directions",
      note: "Every bouquet starts from the flowers available, the season and the message you want to send.",
      imageAlt: "Natural bouquet on a flower shop workbench with a warm atmosphere",
    },
    introCards: [
      ["Since 1997", "A traditional Viterbo flower shop personally run by Stefania."],
      ["Natural style", "Fresh flowers, simple materials, spontaneous arrangements and no artificial effects."],
      ["Made to measure", "Discreet advice based on occasion, colors, preferred flower and personal taste."],
    ],
    story: {
      eyebrow: "Stefania's land of flowers",
      title: "A warm, familiar place where every bouquet is different",
      body:
        "Fiorilandia comes from the idea of a land of flowers: a simple, carefully kept and personal shop where people can choose a floral gift with calm. Stefania runs the shop directly, listens to each request and prepares natural, seasonal and non-standardized arrangements.",
      quote: "The beauty of flowers stays at the center: no artificial effects, no excess, just care and good taste.",
      imageAlt: "Bright flower shop interior with fresh flowers",
    },
    gallery: ["Kraft paper", "Natural bouquet", "Seasonal flowers", "Flower shop"],
    servicesIntro: {
      eyebrow: "Bouquets, bunches and floral gifts",
      title: "The shop's everyday work, created for occasions and personal messages",
      body:
        "Not a fixed catalogue, but arrangements prepared from the flowers of the moment and from what you want to communicate.",
    },
    services: [
      ["Bouquets and flower bunches", "Natural arrangements for birthdays, anniversaries, invitations and thoughtful gestures."],
      ["Floral gifts from a distance", "For sending a thought to someone dear even when you cannot visit the shop."],
      ["Laurel wreaths", "Carefully finished options for graduations and achievements, with sober natural details."],
      ["Plants and fresh flowers", "Seasonal choices for the home, gifts and everyday occasions."],
      ["Home delivery", "A serious and discreet service, confirmed according to each request."],
      ["Personal advice", "Help choosing colors, style and flowers suited to the occasion."],
    ],
    guide: {
      eyebrow: "How to choose the right bouquet",
      title: "A few details help Stefania prepare something more personal",
      steps: [
        ["Occasion", "Birthday, anniversary, graduation, thank-you gift or a spontaneous thought."],
        ["Message", "Romantic, cheerful, delicate, sober, elegant or familiar."],
        ["Colors", "Light, warm, natural, romantic tones or the recipient's preferences."],
        ["Preferred flower", "If there is a favorite flower, Stefania checks availability and seasonal alternatives."],
      ],
    },
    seasonality: {
      eyebrow: "Seasonal flowers",
      title: "Availability changes, and that is what makes every arrangement authentic",
      body:
        "Some flowers are not always available. Fiorilandia values what the season offers, suggesting natural alternatives that match the requested taste.",
      cards: ["Fresh selected flowers", "Real, non-artificial colors", "Natural materials", "No two arrangements are identical"],
      imageAlt: "Fresh seasonal flowers in natural colors",
    },
    reviewsIntro: {
      eyebrow: "Reviews",
      title: "Customers who appreciated care, availability and advice",
    },
    reviews: [
      "Creativity, kindness and rare availability. A bouquet beyond expectations.",
      "Professionalism, kindness and availability for an important occasion.",
      "Always fresh flowers, carefully made arrangements and excellent advice.",
    ],
    delivery: {
      eyebrow: "Orders and delivery",
      title: "For people ordering nearby or from a distance",
      body:
        "For a floral gift delivered at home, the best option is to call the shop: Stefania can understand the occasion, recipient, taste and current availability. Operating details, timing and delivery areas should be confirmed by phone.",
      cta: "Call 0761 344066",
      bullets: ["Advice before ordering", "Discretion on delivery", "Solutions based on the season"],
      imageAlt: "Flower bunch ready for delivery",
    },
    contact: {
      eyebrow: "Contact Fiorilandia",
      address: "Address",
      phone: "Phone",
      hours: "Hours",
      hoursText: "Check updated opening hours on Google",
      call: "Call",
      directions: "Directions",
      maps: "Open in Google Maps",
      info: "Request information",
      imageAlt: "Detail of fresh flowers on a natural background",
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
  }, [locale]);

  return (
    <main className="min-h-screen bg-warm text-earth">
      <ScrollProgress />
      <Header locale={locale} setLocale={setLocale} t={t} />
      <Hero t={t.hero} cards={t.introCards} />
      <StorySection t={t.story} />
      <GalleryMarquee labels={t.gallery} />
      <ServicesSection intro={t.servicesIntro} services={t.services} />
      <GuideSection t={t.guide} />
      <SeasonalitySection t={t.seasonality} />
      <ReviewsSection intro={t.reviewsIntro} reviews={t.reviews} />
      <DeliverySection t={t.delivery} />
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
        <a className="brand-mark text-white" href="#top" aria-label="Fiorilandia home">
          <span>Fiorilandia</span>
        </a>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-7 rounded-full border border-white/25 bg-white/15 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md md:flex">
            <a href="#stefania">{t.nav[0]}</a>
            <a href="#servizi">{t.nav[1]}</a>
            <a href="#guida">{t.nav[2]}</a>
            <a href="#contatti">{t.nav[3]}</a>
          </nav>
          <LanguageToggle label={t.langLabel} locale={locale} setLocale={setLocale} />
        </div>
      </div>
    </header>
  );
}

function Hero({ t, cards }) {
  return (
    <section id="top" className="hero-section relative min-h-[96svh] overflow-hidden text-white">
      <img className="hero-media absolute inset-0 h-full w-full object-cover" src={images.hero} alt={t.imageAlt} />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(55,39,28,.82),rgba(55,39,28,.45),rgba(55,39,28,.16))]" />
      <div className="relative z-10 mx-auto flex min-h-[96svh] max-w-7xl flex-col justify-end px-5 pb-10 pt-28 sm:px-8 lg:pb-14">
        <div className="max-w-3xl">
          <p className="hero-kicker mb-5 inline-flex rounded-full border border-white/25 bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-md">
            {t.eyebrow}
          </p>
          <h1 className="hero-title font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
            {t.title}
          </h1>
          <p className="hero-copy mt-6 max-w-2xl text-lg leading-8 text-white/92 sm:text-xl">{t.subtitle}</p>
          <div className="hero-actions mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn btn-light" href={`tel:${phone}`}>
              {t.call}
            </a>
            <a className="btn btn-glass" href={mapsUrl} target="_blank" rel="noreferrer">
              {t.directions}
            </a>
          </div>
        </div>
        <div className="hero-note mt-10 grid gap-3 md:grid-cols-[1.1fr_repeat(3,1fr)]" data-reveal>
          <p className="rounded-lg border border-white/18 bg-white/13 p-4 text-sm leading-6 text-white/88 backdrop-blur-md">
            {t.note}
          </p>
          {cards.map(([title, body]) => (
            <article className="rounded-lg border border-white/18 bg-white/13 p-4 backdrop-blur-md" key={title}>
              <h3 className="font-serif text-2xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/82">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StorySection({ t }) {
  return (
    <section id="stefania" className="section-pad texture-band">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_.84fr] lg:items-center">
        <div data-reveal>
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="section-title">{t.title}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-earth/78">{t.body}</p>
          <blockquote className="mt-8 border-l-4 border-terracotta bg-kraft/18 px-5 py-4 font-serif text-2xl leading-9 text-earth">
            {t.quote}
          </blockquote>
        </div>
        <div className="image-card motion-card aspect-[4/3]" data-reveal style={{ "--delay": "120ms" }}>
          <img src={images.workbench} alt={t.imageAlt} />
        </div>
      </div>
    </section>
  );
}

function GalleryMarquee({ labels }) {
  const sources = [images.delivery, images.bouquet, images.seasonal, images.workbench];
  const galleryItems = labels.map((label, index) => [label, sources[index]]);
  const loopItems = [...galleryItems, ...galleryItems];

  return (
    <section className="overflow-hidden border-y border-leaf/14 bg-ivory py-8">
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
    <section id="servizi" className="section-pad bg-sage-light/42">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-5 lg:grid-cols-[.85fr_1fr] lg:items-end" data-reveal>
          <div>
            <p className="eyebrow">{intro.eyebrow}</p>
            <h2 className="section-title">{intro.title}</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-earth/76">{intro.body}</p>
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
                <img src={[images.bouquet, images.delivery, images.roses][index % 3]} alt="" aria-hidden="true" />
              </div>
              <div className="p-5">
                <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-leaf">{title}</h3>
                <p className="mt-3 leading-7 text-earth/76">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GuideSection({ t }) {
  return (
    <section id="guida" className="section-pad bg-warm">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl" data-reveal>
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="section-title">{t.title}</h2>
        </div>
        <div className="guide-grid mt-12">
          {t.steps.map(([title, body], index) => (
            <article className="guide-step motion-card" data-reveal key={title} style={{ "--delay": `${index * 80}ms` }}>
              <span>{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeasonalitySection({ t }) {
  return (
    <section className="section-pad bg-leaf text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.86fr_1fr] lg:items-center">
        <div className="image-card motion-card aspect-[4/5] max-h-[580px]" data-reveal>
          <img src={images.seasonal} alt={t.imageAlt} />
        </div>
        <div data-reveal style={{ "--delay": "120ms" }}>
          <p className="eyebrow text-white/72">{t.eyebrow}</p>
          <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-5xl">{t.title}</h2>
          <p className="mt-6 text-lg leading-8 text-white/82">{t.body}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {t.cards.map((card) => (
              <div className="reason-pill flex items-center gap-3 rounded-lg bg-white/12 p-4 backdrop-blur-sm" key={card}>
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ivory text-sm font-bold text-leaf">
                  ✓
                </span>
                <span className="font-semibold">{card}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsSection({ intro, reviews }) {
  return (
    <section id="recensioni" className="section-pad texture-band">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl" data-reveal>
          <p className="eyebrow">{intro.eyebrow}</p>
          <h2 className="section-title">{intro.title}</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {reviews.map((review, index) => (
            <figure
              className="review-card motion-card"
              data-reveal
              key={review}
              style={{ "--delay": `${index * 90}ms` }}
            >
              <div className="mb-5 text-terracotta">★★★★★</div>
              <blockquote className="text-lg leading-8 text-earth/76">"{review}"</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliverySection({ t }) {
  return (
    <section className="section-pad bg-kraft/22">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_.9fr] lg:items-center">
        <div className="order-panel motion-card" data-reveal>
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="section-title">{t.title}</h2>
          <p className="mt-6 text-lg leading-8 text-earth/76">{t.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {t.bullets.map((item) => (
              <span className="rounded-full bg-ivory px-4 py-2 text-sm font-bold text-leaf" key={item}>
                {item}
              </span>
            ))}
          </div>
          <a className="btn btn-primary mt-8" href={`tel:${phone}`}>
            {t.cta}
          </a>
        </div>
        <div className="image-card motion-card min-h-[420px]" data-reveal style={{ "--delay": "120ms" }}>
          <img src={images.delivery} alt={t.imageAlt} />
        </div>
      </div>
    </section>
  );
}

function ContactSection({ t }) {
  return (
    <section id="contatti" className="section-pad pb-28 md:pb-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-[1fr_.8fr]">
        <div className="contact-card motion-card" data-reveal>
          <p className="text-sm font-bold uppercase tracking-[.22em] text-white/70">{t.eyebrow}</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-5xl">
            Fiorilandia di Sanna Stefania
          </h2>
          <div className="mt-8 grid gap-5 text-lg leading-8 text-white/88">
            <p>
              <span className="block text-sm font-bold uppercase tracking-[.18em] text-white/60">{t.address}</span>
              {address}
            </p>
            <p>
              <span className="block text-sm font-bold uppercase tracking-[.18em] text-white/60">{t.phone}</span>
              {displayPhone}
            </p>
            <p>
              <span className="block text-sm font-bold uppercase tracking-[.18em] text-white/60">{t.hours}</span>
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
            <a className="btn btn-glass" href={`tel:${phone}`}>
              {t.info}
            </a>
          </div>
        </div>
        <div className="image-card motion-card min-h-[360px]" data-reveal style={{ "--delay": "120ms" }}>
          <img src={images.roses} alt={t.imageAlt} />
        </div>
      </div>
    </section>
  );
}

function Footer({ text }) {
  return (
    <footer className="border-t border-leaf/18 bg-ivory px-5 py-8 text-center text-sm text-earth/72 sm:px-8">
      {text}{" "}
      <a
        className="font-bold text-terracotta underline-offset-4 hover:underline"
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
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-3 border-t border-leaf/18 bg-warm/95 p-3 shadow-[0_-12px_35px_rgba(49,38,32,.12)] backdrop-blur md:hidden">
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
