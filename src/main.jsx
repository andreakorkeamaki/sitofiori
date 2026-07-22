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
      eyebrow: "A Viterbo dal 1997",
      title: "Ogni bouquet comincia da una persona",
      subtitle:
        "Da Fiorilandia, Stefania prepara bouquet, mazzi e composizioni per le persone e i momenti che contano.",
      call: "Chiama 0761 344066",
      directions: "Indicazioni",
      note: "Tutto comincia da una domanda semplice: per chi sono questi fiori?",
      imageAlt: "Bouquet naturale su banco da fiorista con atmosfera calda",
    },
    introCards: [
      ["Dal 1997", "Una piccola bottega di Viterbo che accompagna ricorrenze, sorprese e gesti quotidiani."],
      ["C'è Stefania", "È lei ad ascoltare la richiesta, consigliare e preparare ogni composizione."],
      ["Fatto per te", "Ogni mazzo parte da una persona, da un'occasione e da quello che vuoi dire."],
    ],
    story: {
      eyebrow: "La bottega di Stefania",
      title: "Un luogo caldo e familiare dove ogni mazzo è diverso",
      body:
        "Fiorilandia nasce dall'idea di una terra dei fiori: una bottega semplice, curata e personale dove scegliere un omaggio floreale con calma. Stefania segue direttamente il negozio, ascolta la richiesta e prepara ogni composizione con attenzione.",
      imageAlt: "Interno luminoso di una fioreria con fiori freschi",
    },
    gallery: ["Carta kraft", "Bouquet naturale", "Fiori di stagione", "Bottega floreale"],
    servicesIntro: {
      eyebrow: "Quello che puoi chiedere",
      title: "Un bouquet, una corona, un pensiero da far arrivare",
      body:
        "Basta raccontare l'occasione e dare qualche indicazione. Stefania ti aiuta a trovare la soluzione giusta.",
      imageAlt: "Bouquet chiaro preparato in fioreria",
    },
    services: [
      ["Bouquet e mazzi di fiori", "Per dire auguri, grazie, ti penso o semplicemente fare una sorpresa."],
      ["Omaggi floreali a distanza", "Racconti a Stefania a chi vuoi mandare i fiori e lei ti aiuta a scegliere."],
      ["Corone di alloro", "Preparazioni per lauree e traguardi importanti, curate nei dettagli."],
      ["Piante e fiori freschi", "Un regalo per la casa, una ricorrenza o un piccolo pensiero quotidiano."],
      ["Consegna a domicilio", "Per far arrivare i fiori anche quando non puoi consegnarli di persona."],
      ["Un consiglio sincero", "Se non sai cosa scegliere, Stefania parte dalla persona e dall'occasione."],
    ],
    guide: {
      eyebrow: "Da dove si comincia",
      title: "Bastano poche parole per scegliere insieme",
      steps: [
        ["Per chi è", "Racconta qualcosa della persona che riceverà i fiori."],
        ["L'occasione", "Un compleanno, una laurea, un anniversario o un gesto spontaneo."],
        ["Un colore", "Può essere il colore preferito, un ricordo o semplicemente una sensazione."],
        ["Un fiore", "Se ce n'è uno a cui tieni, Stefania parte da lì e ti propone le possibilità."],
      ],
    },
    seasonality: {
      eyebrow: "La scelta si fa insieme",
      title: "Non serve conoscere i nomi dei fiori",
      body:
        "Puoi partire da un colore, da una persona, da un'occasione o dal budget che hai in mente. Stefania ti mostra cosa c'è in negozio e ti aiuta a mettere insieme una composizione che abbia senso per te.",
      cards: ["Ascolto della richiesta", "Proposte chiare", "Cura nel confezionamento", "Un risultato personale"],
      imageAlt: "Fiori freschi disponibili in negozio",
    },
    reviewsIntro: {
      eyebrow: "Recensioni",
      title: "Cura e disponibilità, raccontate dai clienti",
    },
    reviews: [
      {
        name: "CatS",
        quote: "Stefania è unica. Estro, gentilezza e disponibilità fuori dal comune. Un bouquet oltre le aspettative.",
      },
      {
        name: "Angelica Di Leone",
        quote: "Professionalità, gentilezza e disponibilità anche a poche ore da una laurea. Un bellissimo serto.",
      },
      {
        name: "Amedeo Franza",
        quote: "Abitando a Latina mi sono affidato totalmente a Stefania con una semplice telefonata.",
      },
      {
        name: "Roberto Ottaviani",
        quote: "Sempre ben fornito di fiori freschi e belle piante. Preziosi anche i consigli.",
      },
      {
        name: "Claudia Favetta",
        quote: "Sono anni che mi rivolgo a questa fioraia e sono sempre soddisfatta dei miei acquisti.",
      },
      {
        name: "Maria Assunta Matteucci",
        quote: "Mi affido sempre ai suggerimenti di Stefania e non sbaglio mai!",
      },
    ],
    delivery: {
      eyebrow: "Anche da lontano",
      title: "Una telefonata e il tuo pensiero prende forma",
      body:
        "Anche chi vive fuori Viterbo può chiamare Fiorilandia per mandare dei fiori a una persona cara. Stefania ascolta la richiesta, aiuta nella scelta e verifica direttamente tempi e modalità di consegna.",
      cta: "Chiama 0761 344066",
      bullets: ["Una persona con cui parlare", "Scelta guidata al telefono", "Consegna da concordare"],
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
  },
  en: {
    langLabel: "Versione italiana",
    nav: ["Stefania", "Bouquets", "How to order", "Contact"],
    hero: {
      eyebrow: "In Viterbo since 1997",
      title: "Every bouquet begins with a person",
      subtitle:
        "At Fiorilandia, Stefania prepares bouquets and arrangements for the people and moments that matter.",
      call: "Call 0761 344066",
      directions: "Directions",
      note: "It all starts with a simple question: who are these flowers for?",
      imageAlt: "Natural bouquet on a flower shop workbench with a warm atmosphere",
    },
    introCards: [
      ["Since 1997", "A small Viterbo flower shop for celebrations, surprises and everyday gestures."],
      ["Meet Stefania", "She listens, offers advice and personally prepares every arrangement."],
      ["Made for you", "Every bouquet begins with a person, an occasion and something you want to say."],
    ],
    story: {
      eyebrow: "Stefania's flower shop",
      title: "A warm, familiar place where every bouquet is different",
      body:
        "Fiorilandia comes from the idea of a land of flowers: a simple, carefully kept and personal shop where people can choose a floral gift at their own pace. Stefania runs the shop directly, listens to each request and prepares every arrangement with care.",
      imageAlt: "Bright flower shop interior with fresh flowers",
    },
    gallery: ["Kraft paper", "Natural bouquet", "Seasonal flowers", "Flower shop"],
    servicesIntro: {
      eyebrow: "What you can ask for",
      title: "A bouquet, a laurel wreath, a thoughtful gift delivered",
      body:
        "Tell Stefania about the occasion and share a few details. She will help you find the right solution.",
      imageAlt: "Light-colored bouquet prepared in the flower shop",
    },
    services: [
      ["Bouquets and flower bunches", "To say happy birthday, thank you, I am thinking of you, or simply to surprise someone."],
      ["Floral gifts from a distance", "Tell Stefania who the flowers are for and she will help you choose."],
      ["Laurel wreaths", "Prepared for graduations and important achievements, with care in every detail."],
      ["Plants and fresh flowers", "A gift for the home, a celebration or a thoughtful everyday gesture."],
      ["Home delivery", "To send flowers even when you cannot deliver them in person."],
      ["Honest advice", "If you are unsure what to choose, Stefania starts from the person and the occasion."],
    ],
    guide: {
      eyebrow: "Where to begin",
      title: "A few words are enough to choose together",
      steps: [
        ["Who it is for", "Share something about the person who will receive the flowers."],
        ["The occasion", "A birthday, graduation, anniversary or a spontaneous gesture."],
        ["A color", "It may be a favorite color, a memory or simply a feeling."],
        ["A flower", "If there is one you care about, Stefania starts there and explains the options."],
      ],
    },
    seasonality: {
      eyebrow: "Choosing together",
      title: "You do not need to know the names of flowers",
      body:
        "You can begin with a color, a person, an occasion or the budget you have in mind. Stefania shows you what is in the shop and helps put together an arrangement that feels right for you.",
      cards: ["Listening first", "Clear suggestions", "Careful wrapping", "A personal result"],
      imageAlt: "Fresh flowers available in the shop",
    },
    reviewsIntro: {
      eyebrow: "Reviews",
      title: "Care and helpful advice, in our customers' words",
    },
    reviews: [
      {
        name: "CatS",
        quote: "Stefania is unique. Creativity, kindness and rare availability. A bouquet beyond expectations.",
      },
      {
        name: "Angelica Di Leone",
        quote: "Professionalism, kindness and availability even just a few hours before a graduation. A beautiful laurel wreath.",
      },
      {
        name: "Amedeo Franza",
        quote: "Living in Latina, I relied entirely on Stefania with a simple phone call.",
      },
      {
        name: "Roberto Ottaviani",
        quote: "Always well stocked with fresh flowers and beautiful plants. The advice is valuable too.",
      },
      {
        name: "Claudia Favetta",
        quote: "I have been coming to this flower shop for years and I am always happy with my purchases.",
      },
      {
        name: "Maria Assunta Matteucci",
        quote: "I always trust Stefania's suggestions and I never go wrong!",
      },
    ],
    delivery: {
      eyebrow: "Even from far away",
      title: "One phone call and your thoughtful gift takes shape",
      body:
        "People living outside Viterbo can also call Fiorilandia to send flowers to someone they care about. Stefania listens, helps with the choice and confirms delivery timing and arrangements directly.",
      cta: "Call 0761 344066",
      bullets: ["A real person to speak with", "Guidance by phone", "Delivery to be arranged"],
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
  },
};

function App() {
  const [locale, setLocale] = useState("it");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const t = copy[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    let frame = null;

    const updateScrollEffects = () => {
      frame = null;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      const heroShift = Math.min(window.scrollY * 0.1, 72);

      document.documentElement.style.setProperty("--scroll-progress", progress.toString());
      document.documentElement.style.setProperty("--hero-shift", `${heroShift}px`);
      setIsScrolled(window.scrollY > 28);
      setShowSticky(window.scrollY > window.innerHeight * 0.68);
    };

    const requestScrollUpdate = () => {
      if (frame === null) frame = window.requestAnimationFrame(updateScrollEffects);
    };

    updateScrollEffects();
    window.addEventListener("scroll", requestScrollUpdate, { passive: true });

    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestScrollUpdate);
    };
  }, []);

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

      return () => {
        observer.disconnect();
      };
    }

    revealItems.forEach((item) => item.classList.add("is-visible"));
  }, [locale]);

  return (
    <main className="min-h-screen bg-warm text-earth">
      <ScrollProgress />
      <Header isScrolled={isScrolled} locale={locale} setLocale={setLocale} t={t} />
      <Hero t={t.hero} />
      <Highlights cards={t.introCards} />
      <StorySection t={t.story} />
      <GalleryMarquee labels={t.gallery} />
      <ServicesSection intro={t.servicesIntro} services={t.services} />
      <GuideSection t={t.guide} />
      <SeasonalitySection t={t.seasonality} />
      <ReviewsSection intro={t.reviewsIntro} reviews={t.reviews} />
      <DeliverySection t={t.delivery} />
      <ContactSection t={t.contact} />
      <Footer />
      <MobileStickyActions isVisible={showSticky} t={t.contact} />
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

function Header({ isScrolled, locale, setLocale, t }) {
  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="site-header-inner mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
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

function Hero({ t }) {
  return (
    <section id="top" className="hero-section relative overflow-hidden text-white">
      <img className="hero-media absolute inset-0 h-full w-full object-cover" src={images.hero} alt={t.imageAlt} />
      <div className="hero-shade absolute inset-0" />
      <div className="hero-inner relative z-10 mx-auto flex max-w-7xl flex-col justify-end px-5 pb-12 pt-28 sm:px-8 lg:pb-16">
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
        <p className="hero-note mt-9 max-w-xl border-l-2 border-petal pl-4 text-sm leading-6 text-white/82">
          {t.note}
        </p>
      </div>
    </section>
  );
}

function Highlights({ cards }) {
  return (
    <section className="highlights-wrap" aria-label="Fiorilandia in breve">
      <div className="highlights-grid mx-auto max-w-7xl px-5 sm:px-8">
        {cards.map(([title, body], index) => (
          <article
            className="highlight-item"
            data-reveal
            key={title}
            style={{ "--delay": `${index * 90}ms` }}
          >
            <span aria-hidden="true">0{index + 1}</span>
            <div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function StorySection({ t }) {
  return (
    <section id="stefania" className="section-pad texture-band">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_.84fr] lg:items-center">
        <div data-reveal="left">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="section-title">{t.title}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-earth/78">{t.body}</p>
        </div>
        <div className="image-card motion-card aspect-[4/3]" data-reveal="scale" style={{ "--delay": "120ms" }}>
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
        <div className="services-showcase mt-10">
          <figure className="service-feature image-card motion-card" data-reveal="scale">
            <img src={images.bouquet} alt={intro.imageAlt} />
            <figcaption>{intro.eyebrow}</figcaption>
          </figure>
          <div className="services-grid">
            {services.map(([title, text], index) => (
              <article
                className="service-card motion-card"
                data-reveal
                key={title}
                style={{
                  "--accent": ["#4f6f52", "#b46a4c", "#c08a96"][index % 3],
                  "--delay": `${(index % 2) * 90}ms`,
                }}
              >
                <div className="p-6">
                  <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-serif text-2xl font-semibold text-leaf">{title}</h3>
                  <p className="mt-3 leading-7 text-earth/76">{text}</p>
                </div>
              </article>
            ))}
          </div>
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
        <div className="image-card motion-card aspect-[4/5] max-h-[580px]" data-reveal="scale">
          <img src={images.seasonal} alt={t.imageAlt} />
        </div>
        <div data-reveal="right" style={{ "--delay": "120ms" }}>
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
  const reviewLoop = [...reviews, ...reviews];

  return (
    <section id="recensioni" className="section-pad texture-band">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl" data-reveal>
          <p className="eyebrow">{intro.eyebrow}</p>
          <h2 className="section-title">{intro.title}</h2>
        </div>
      </div>
      <div className="reviews-viewport mt-10" data-reveal>
        <div className="reviews-track">
          {reviewLoop.map((review, index) => (
            <figure
              className="review-card motion-card"
              aria-hidden={index >= reviews.length}
              key={`${review.name}-${index}`}
            >
              <div className="review-stars" aria-hidden="true">★★★★★</div>
              <blockquote>“{review.quote}”</blockquote>
              <figcaption>
                <strong>{review.name}</strong>
                <span><b aria-hidden="true">G</b> Recensione Google</span>
              </figcaption>
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
        <div className="order-panel motion-card" data-reveal="left">
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
        <div className="image-card motion-card min-h-[420px]" data-reveal="scale" style={{ "--delay": "120ms" }}>
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
        <div className="contact-card motion-card" data-reveal="left">
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
        <div className="image-card motion-card min-h-[360px]" data-reveal="scale" style={{ "--delay": "120ms" }}>
          <img src={images.roses} alt={t.imageAlt} />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer border-t border-leaf/18 bg-ivory px-5 py-8 text-center text-sm text-earth/72 sm:px-8">
      <strong className="font-bold text-earth">Fiorilandia di Sanna Stefania</strong>
      <span className="mx-2 text-earth/35">·</span>
      <a className="underline-offset-4 hover:underline" href={mapsUrl} target="_blank" rel="noreferrer">
        {address}
      </a>
      <span className="mx-2 text-earth/35">·</span>
      <a className="font-bold text-leaf underline-offset-4 hover:underline" href={`tel:${phone}`}>
        {displayPhone}
      </a>
    </footer>
  );
}

function MobileStickyActions({ isVisible, t }) {
  return (
    <div className={`mobile-sticky-actions ${isVisible ? "is-visible" : ""}`}>
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
