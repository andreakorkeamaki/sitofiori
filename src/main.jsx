import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import PrivacyPolicy from "./PrivacyPolicy";
import "./styles.css";

const phone = "0761344066";
const displayPhone = "0761 344066";
const address = "Via Francesco Baracca, 7/d, 01100 Viterbo VT";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Fiorilandia%20di%20Sanna%20Stefania%20Via%20Francesco%20Baracca%207%2Fd%20Viterbo";

const images = {
  hero: "/images/fiorilandia-hero.webp",
  contact: "/images/fiorilandia-contact.webp",
  story: "/images/fiorilandia-story.webp",
  bouquet: "/images/fiorilandia-service.webp",
  seasonal: "/images/fiorilandia-seasonal.webp",
  delivery: "/images/fiorilandia-delivery.webp",
};

const galleryPhoto = (id) => `/images/gallery/${id}.webp`;

const galleryCategoryDefinitions = [
  {
    key: "bouquets",
    cover: galleryPhoto("042"),
    photos: [
      "001", "002", "003", "011", "016", "017", "020", "021", "022", "023", "024", "033",
      "035", "036", "038", "040", "041", "042", "044", "045", "050", "051", "052", "053",
      "056", "058", "059", "063", "064", "065", "066", "067", "068", "070", "071",
      "072", "073", "074", "075", "076", "078", "079", "080", "081", "082", "014",
      "025", "026", "034", "039", "062",
    ].map(galleryPhoto),
  },
  {
    key: "arrangements",
    cover: galleryPhoto("043"),
    photos: [
      "008", "009", "010", "013", "018", "027", "028", "031", "043", "047", "048",
      "049", "060", "077", "083", "061", "030", "037", "057",
    ].map(galleryPhoto),
  },
  {
    key: "weddings",
    cover: galleryPhoto("089"),
    photos: [
      ...["019", "046", "054", "055", "084", "085", "086", "087", "088", "089"].map(galleryPhoto),
      "/images/gallery/wedding-4993.webp",
      "/images/gallery/wedding-4791.webp",
      "/images/gallery/wedding-013802.webp",
      "/images/gallery/wedding-4028.webp",
      "/images/gallery/wedding-101927.webp",
      "/images/gallery/wedding-3982.webp",
      "/images/gallery/wedding-3096.webp",
      "/images/gallery/wedding-121556.webp",
    ],
  },
  {
    key: "plants",
    cover: galleryPhoto("032"),
    photos: ["007", "015", "029", "032"].map(galleryPhoto),
  },
];

const copy = {
  it: {
    langLabel: "English version",
    nav: ["Stefania", "Bouquet", "Come ordinare", "Contatti"],
    hero: {
      eyebrow: "A Viterbo dal 1997",
      title: "Con un fiore regali un’emozione",
      subtitle:
        "Da Fiorilandia, Stefania prepara bouquet, mazzi e composizioni per tutte le occasioni speciali o semplicemente per sorprendere qualcuno, anche quando l’occasione non c’è.",
      call: "Chiama 0761 344066",
      directions: "Indicazioni",
      note: "Regalare un fiore significa “ti ho pensato”: regalare un fiore significa regalare un’emozione.",
      imageAlt: "Composizioni floreali rosa realizzate da Fiorilandia",
    },
    introCards: [
      ["Dal 1997", "Una piccola bottega di Viterbo che accompagna ricorrenze, sorprese e gesti quotidiani."],
      ["C'è Stefania", "È lei ad ascoltare la richiesta, consigliare e preparare ogni composizione."],
      ["Fatto per te", "Ogni mazzo parte da una persona, da un'occasione e da quello che vuoi dire."],
    ],
    quickAnswers: {
      eyebrow: "Risposte rapide",
      title: "Cosa cerchi da una fioreria a Viterbo?",
      items: [
        ["Un bouquet o una composizione?", "Fiorilandia prepara bouquet e composizioni su misura partendo da occasione, colori e budget.", "#bouquet-e-composizioni", "Vai ai bouquet e alle composizioni"],
        ["Vuoi far consegnare dei fiori?", "La consegna a Viterbo è da concordare direttamente con Stefania in base a indirizzo e disponibilità.", "#consegna-a-domicilio", "Come funziona la consegna"],
        ["Non sai quali fiori scegliere?", "Non serve conoscere i nomi dei fiori: bastano la persona, l'occasione, un colore o il budget.", "#guida", "Scopri come scegliere insieme"],
      ],
    },
    story: {
      eyebrow: "La bottega di Stefania",
      title: "Una piccola bottega piena di colori e profumi",
      body:
        "Da Fiorilandia potrai scegliere un omaggio floreale. Stefania trasformerà i fiori in meravigliose idee da regalare e da vivere. Segue direttamente il negozio, ascolta la richiesta e crea ogni composizione in maniera accurata.",
      imageAlt: "Interno caldo e familiare di una fioreria piena di fiori e piante fresche",
    },
    gallery: {
      labels: ["Bouquet su misura", "Composizioni floreali", "Matrimoni e cerimonie", "Piante e coroncine"],
      eyebrow: "Le creazioni di Fiorilandia",
      open: "Apri la raccolta",
      close: "Chiudi la galleria",
      photoCount: "foto",
      dragHint: "Trascina per esplorare",
    },
    servicesIntro: {
      eyebrow: "Quello che puoi chiedere",
      title: "Un bouquet, una pianta, un pensiero da far arrivare",
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
      source: "Selezione di recensioni pubblicate su Google Maps",
      sourceLink: "Vai alle recensioni su Google Maps",
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
      imageAlt: "Grande composizione floreale realizzata da Fiorilandia",
    },
  },
  en: {
    langLabel: "Versione italiana",
    nav: ["Stefania", "Bouquets", "How to order", "Contact"],
    hero: {
      eyebrow: "In Viterbo since 1997",
      title: "With a flower, you give an emotion",
      subtitle:
        "At Fiorilandia, Stefania prepares bouquets, flower bunches and arrangements for every special occasion, or simply to surprise someone when there is no occasion at all.",
      call: "Call 0761 344066",
      directions: "Directions",
      note: "Giving a flower means saying “I thought of you”: giving a flower means giving an emotion.",
      imageAlt: "Pink floral arrangements created by Fiorilandia",
    },
    introCards: [
      ["Since 1997", "A small Viterbo flower shop for celebrations, surprises and everyday gestures."],
      ["Meet Stefania", "She listens, offers advice and personally prepares every arrangement."],
      ["Made for you", "Every bouquet begins with a person, an occasion and something you want to say."],
    ],
    quickAnswers: {
      eyebrow: "Quick answers",
      title: "What do you need from a florist in Viterbo?",
      items: [
        ["A bouquet or arrangement?", "Fiorilandia makes bouquets and arrangements to order, guided by the occasion, colors and budget.", "#bouquet-e-composizioni", "Go to bouquets and arrangements"],
        ["Would you like flowers delivered?", "Delivery in Viterbo is arranged directly with Stefania according to the address and availability.", "#consegna-a-domicilio", "How delivery works"],
        ["Not sure which flowers to choose?", "You do not need to know flower names: begin with the person, the occasion, a color or your budget.", "#guida", "See how to choose together"],
      ],
    },
    story: {
      eyebrow: "Stefania's flower shop",
      title: "A small flower shop filled with colors and scents",
      body:
        "At Fiorilandia you can choose a floral gift. Stefania transforms flowers into wonderful ideas to give and enjoy. She runs the shop herself, listens to every request and creates each arrangement with great care.",
      imageAlt: "Warm, familiar flower shop interior filled with fresh flowers and plants",
    },
    gallery: {
      labels: ["Made-to-order bouquets", "Floral arrangements", "Weddings and ceremonies", "Plants and wreaths"],
      eyebrow: "Fiorilandia creations",
      open: "Open collection",
      close: "Close gallery",
      photoCount: "photos",
      dragHint: "Drag to explore",
    },
    servicesIntro: {
      eyebrow: "What you can ask for",
      title: "A bouquet, a plant, a thoughtful gift delivered",
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
      source: "A selection of reviews published on Google Maps",
      sourceLink: "View the reviews on Google Maps",
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
      imageAlt: "Large floral arrangement created by Fiorilandia",
    },
  },
};

function App() {
  const [locale, setLocale] = useState("it");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [isPrivacyPage, setIsPrivacyPage] = useState(window.location.hash === "#privacy");
  const t = copy[locale];

  useEffect(() => {
    const updatePage = () => {
      setIsPrivacyPage(window.location.hash === "#privacy");
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    window.addEventListener("hashchange", updatePage);
    return () => window.removeEventListener("hashchange", updatePage);
  }, []);

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

  if (isPrivacyPage) {
    return <PrivacyPolicy address={address} displayPhone={displayPhone} phone={phone} />;
  }

  return (
    <main className="min-h-screen bg-warm text-earth">
      <ScrollProgress />
      <Header isScrolled={isScrolled} locale={locale} setLocale={setLocale} t={t} />
      <Hero t={t.hero} />
      <Highlights cards={t.introCards} />
      <StorySection t={t.story} />
      <GalleryMarquee t={t.gallery} />
      <QuickAnswers t={t.quickAnswers} />
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
      <img
        className="hero-media absolute inset-0 h-full w-full object-cover"
        src={images.hero}
        alt={t.imageAlt}
        fetchPriority="high"
      />
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

function QuickAnswers({ t }) {
  return (
    <section className="quick-answers section-pad" aria-labelledby="quick-answers-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2 className="section-title" id="quick-answers-title">{t.title}</h2>
        <div className="quick-answers-grid mt-10">
          {t.items.map(([question, answer, href, label]) => (
            <article className="quick-answer-card" key={href}>
              <h3>{question}</h3>
              <p>{answer}</p>
              <a href={href}>{label} <span aria-hidden="true">→</span></a>
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
        <div data-reveal="left">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="section-title">{t.title}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-earth/78">{t.body}</p>
        </div>
        <div className="image-card motion-card aspect-[3/4]" data-reveal="scale" style={{ "--delay": "120ms" }}>
          <img src={images.story} alt={t.imageAlt} loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function GalleryMarquee({ t }) {
  const [activeCategoryKey, setActiveCategoryKey] = useState(null);
  const closeButtonRef = useRef(null);
  const lastTriggerRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const suppressClickUntilRef = useRef(0);
  const galleryItems = galleryCategoryDefinitions.map((category, index) => ({
    ...category,
    label: t.labels[index],
  }));
  const loopItems = [...galleryItems, ...galleryItems];
  const activeCategory = galleryItems.find((category) => category.key === activeCategoryKey);

  const closeGallery = () => {
    setActiveCategoryKey(null);
    window.requestAnimationFrame(() => lastTriggerRef.current?.focus());
  };

  const openGallery = (event, categoryKey) => {
    if (performance.now() < suppressClickUntilRef.current) {
      event.preventDefault();
      return;
    }

    lastTriggerRef.current = event.currentTarget;
    setActiveCategoryKey(categoryKey);
  };

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const motion = {
      x: 0,
      loopWidth: 0,
      velocity: 0,
      dragging: false,
      gliding: false,
      paused: false,
      dragged: false,
      captured: false,
      pointerId: null,
      startClientX: 0,
      startX: 0,
      lastClientX: 0,
      lastPointerTime: 0,
      lastFrameTime: performance.now(),
      resumeTimer: null,
      wheelTimer: null,
      frame: 0,
    };

    const normalize = () => {
      if (!motion.loopWidth) return;
      while (motion.x <= -motion.loopWidth) motion.x += motion.loopWidth;
      while (motion.x > 0) motion.x -= motion.loopWidth;
    };

    const render = () => {
      normalize();
      track.style.transform = `translate3d(${motion.x}px, 0, 0)`;
    };

    const measure = () => {
      const items = track.querySelectorAll(".marquee-item");
      const firstOriginal = items[0];
      const firstDuplicate = items[galleryItems.length];
      motion.loopWidth = firstOriginal && firstDuplicate
        ? firstDuplicate.offsetLeft - firstOriginal.offsetLeft
        : track.scrollWidth / 2;
      render();
    };

    const clearResumeTimer = () => {
      if (motion.resumeTimer) window.clearTimeout(motion.resumeTimer);
      motion.resumeTimer = null;
    };

    const pause = () => {
      motion.paused = true;
      clearResumeTimer();
    };

    const resumeAfter = (delay = 1100) => {
      clearResumeTimer();
      motion.resumeTimer = window.setTimeout(() => {
        motion.paused = false;
      }, delay);
    };

    const animate = (now) => {
      const elapsed = Math.min((now - motion.lastFrameTime) / 1000, 0.05);
      motion.lastFrameTime = now;

      if (motion.gliding && !motion.dragging) {
        motion.x += motion.velocity * elapsed;
        motion.velocity *= Math.exp(-5.2 * elapsed);
        if (Math.abs(motion.velocity) < 9) {
          motion.velocity = 0;
          motion.gliding = false;
          resumeAfter();
        }
        render();
      } else if (!motion.paused && !motion.dragging && !prefersReducedMotion) {
        motion.x -= 38 * elapsed;
        render();
      }

      motion.frame = window.requestAnimationFrame(animate);
    };

    const beginDrag = (event) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      pause();
      motion.dragging = true;
      motion.gliding = false;
      motion.dragged = false;
      motion.captured = false;
      motion.pointerId = event.pointerId;
      motion.startClientX = event.clientX;
      motion.startX = motion.x;
      motion.lastClientX = event.clientX;
      motion.lastPointerTime = performance.now();
    };

    const drag = (event) => {
      if (!motion.dragging || event.pointerId !== motion.pointerId) return;
      const deltaX = event.clientX - motion.startClientX;
      motion.x = motion.startX + deltaX;

      const now = performance.now();
      const elapsed = Math.max(now - motion.lastPointerTime, 8);
      const nextVelocity = ((event.clientX - motion.lastClientX) / elapsed) * 1000;
      motion.velocity = motion.velocity * 0.35 + nextVelocity * 0.65;
      motion.lastClientX = event.clientX;
      motion.lastPointerTime = now;

      if (!motion.dragged && Math.abs(deltaX) > 5) {
        motion.dragged = true;
        motion.captured = true;
        viewport.classList.add("is-dragging");
        viewport.setPointerCapture?.(event.pointerId);
      }
      render();
    };

    const endDrag = (event) => {
      if (!motion.dragging || event.pointerId !== motion.pointerId) return;
      if (motion.captured && viewport.hasPointerCapture?.(event.pointerId)) {
        viewport.releasePointerCapture(event.pointerId);
      }
      motion.dragging = false;
      motion.captured = false;
      motion.pointerId = null;
      viewport.classList.remove("is-dragging");

      if (motion.dragged) suppressClickUntilRef.current = performance.now() + 260;

      motion.velocity = Math.max(-2200, Math.min(2200, motion.velocity));
      if (!prefersReducedMotion && Math.abs(motion.velocity) > 55) {
        motion.gliding = true;
      } else {
        motion.velocity = 0;
        resumeAfter();
      }
    };

    const handleWheel = (event) => {
      const horizontalIntent = Math.abs(event.deltaX) > Math.abs(event.deltaY);
      if (!horizontalIntent && !event.shiftKey) return;

      event.preventDefault();
      pause();
      motion.gliding = false;
      const wheelDelta = horizontalIntent ? event.deltaX : event.deltaY;
      motion.x -= wheelDelta;
      render();

      if (motion.wheelTimer) window.clearTimeout(motion.wheelTimer);
      motion.wheelTimer = window.setTimeout(() => resumeAfter(900), 140);
    };

    const handleKeyDown = (event) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      pause();
      const firstItem = track.querySelector(".marquee-item");
      const styles = window.getComputedStyle(track);
      const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
      const step = (firstItem?.getBoundingClientRect().width || 320) + gap;
      motion.x += event.key === "ArrowLeft" ? step : -step;
      render();
      resumeAfter(1400);
    };

    const handleMouseLeave = () => resumeAfter(800);
    const handleFocusOut = () => resumeAfter(800);

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);
    viewport.addEventListener("pointerdown", beginDrag);
    viewport.addEventListener("pointermove", drag);
    viewport.addEventListener("pointerup", endDrag);
    viewport.addEventListener("pointercancel", endDrag);
    viewport.addEventListener("wheel", handleWheel, { passive: false });
    viewport.addEventListener("keydown", handleKeyDown);
    viewport.addEventListener("mouseenter", pause);
    viewport.addEventListener("mouseleave", handleMouseLeave);
    viewport.addEventListener("focusin", pause);
    viewport.addEventListener("focusout", handleFocusOut);

    measure();
    motion.frame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(motion.frame);
      clearResumeTimer();
      if (motion.wheelTimer) window.clearTimeout(motion.wheelTimer);
      resizeObserver.disconnect();
      viewport.removeEventListener("pointerdown", beginDrag);
      viewport.removeEventListener("pointermove", drag);
      viewport.removeEventListener("pointerup", endDrag);
      viewport.removeEventListener("pointercancel", endDrag);
      viewport.removeEventListener("wheel", handleWheel);
      viewport.removeEventListener("keydown", handleKeyDown);
      viewport.removeEventListener("mouseenter", pause);
      viewport.removeEventListener("mouseleave", handleMouseLeave);
      viewport.removeEventListener("focusin", pause);
      viewport.removeEventListener("focusout", handleFocusOut);
    };
  }, []);

  useEffect(() => {
    if (!activeCategory) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveCategoryKey(null);
        window.requestAnimationFrame(() => lastTriggerRef.current?.focus());
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCategoryKey]);

  return (
    <>
      <section className="gallery-strip border-y border-leaf/14 bg-ivory">
        <div
          aria-label={t.dragHint}
          className="gallery-viewport"
          ref={viewportRef}
          role="region"
          tabIndex={0}
        >
          <div className="marquee-track" ref={trackRef}>
          {loopItems.map((category, index) => {
            const isDuplicate = index >= galleryItems.length;

            return (
              <button
                aria-haspopup="dialog"
                aria-hidden={isDuplicate || undefined}
                aria-label={`${t.open}: ${category.label}`}
                className="marquee-item gallery-category-card"
                key={`${category.key}-${index}`}
                onClick={(event) => openGallery(event, category.key)}
                tabIndex={isDuplicate ? -1 : 0}
                type="button"
              >
                <img src={category.cover} alt="" />
                <span className="gallery-count">{category.photos.length} {t.photoCount}</span>
                <span className="marquee-caption">{category.label}</span>
              </button>
            );
          })}
          </div>
          <p className="gallery-drag-hint" aria-hidden="true">
            <span>←</span> {t.dragHint} <span>→</span>
          </p>
        </div>
      </section>

      {activeCategory && (
        <div
          className="gallery-modal"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeGallery();
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-modal-title"
        >
          <div className="gallery-modal-panel">
            <header className="gallery-modal-header">
              <div>
                <p className="eyebrow">{t.eyebrow}</p>
                <h2 id="gallery-modal-title">{activeCategory.label}</h2>
                <p>{activeCategory.photos.length} {t.photoCount}</p>
              </div>
              <button
                aria-label={t.close}
                className="gallery-modal-close"
                onClick={closeGallery}
                ref={closeButtonRef}
                type="button"
              >
                <span aria-hidden="true">×</span>
              </button>
            </header>
            <div className="gallery-modal-grid">
              {activeCategory.photos.map((src, index) => (
                <figure key={src}>
                  <img
                    src={src}
                    alt={`${activeCategory.label} ${index + 1}`}
                    decoding="async"
                    loading="lazy"
                  />
                  <span className="gallery-photo-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </figure>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ServicesSection({ intro, services }) {
  const serviceIds = ["bouquet-e-composizioni", null, "corone-di-alloro", null, null, null];

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
                id={serviceIds[index] || undefined}
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
  const guideRef = useRef(null);

  useEffect(() => {
    const section = guideRef.current;
    if (!section) return undefined;

    const journey = section.querySelector(".guide-journey");
    const steps = [...section.querySelectorAll(".guide-step")];
    if (!journey) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = null;

    const setLineProgress = (progress) => {
      section.style.setProperty("--guide-progress", progress.toFixed(4));
    };

    const setStepProgress = (step, progress) => {
      const direction = step.classList.contains("guide-step--left") ? -1 : 1;
      step.style.setProperty("--step-opacity", String(0.18 + progress * 0.82));
      step.style.setProperty("--step-translate", `${direction * (1 - progress) * 112}px`);
      step.style.setProperty("--step-scale", String(0.96 + progress * 0.04));
      step.style.setProperty("--connector-progress", String(progress));
      step.style.setProperty("--marker-scale", String(0.5 + progress * 0.5));
      step.style.setProperty("--ring-opacity", String(progress * 0.78));
      step.style.setProperty("--ring-scale", String(0.72 + progress * 0.28));
    };

    const updateGuideProgress = () => {
      frame = null;
      if (reduceMotion) {
        setLineProgress(1);
        steps.forEach((step) => setStepProgress(step, 1));
        return;
      }

      const journeyRect = journey.getBoundingClientRect();
      const lineStart = window.innerHeight * 0.82;
      const lineTravel = Math.max(journeyRect.height - window.innerHeight * 0.3, 1);
      const lineProgress = Math.max(0, Math.min(1, (lineStart - journeyRect.top) / lineTravel));
      setLineProgress(lineProgress);

      steps.forEach((step) => {
        const stepRect = step.getBoundingClientRect();
        const entranceDistance = Math.max(window.innerHeight * 0.3, 210);
        const stepProgress = Math.max(
          0,
          Math.min(1, (window.innerHeight * 0.84 - stepRect.top) / entranceDistance),
        );
        setStepProgress(step, stepProgress);
      });
    };

    const requestGuideUpdate = () => {
      if (frame === null) frame = window.requestAnimationFrame(updateGuideProgress);
    };

    updateGuideProgress();
    window.addEventListener("scroll", requestGuideUpdate, { passive: true });
    window.addEventListener("resize", requestGuideUpdate);

    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestGuideUpdate);
      window.removeEventListener("resize", requestGuideUpdate);
    };
  }, []);

  return (
    <section id="guida" className="guide-section bg-warm" ref={guideRef}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="guide-heading max-w-3xl" data-reveal>
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="section-title">{t.title}</h2>
        </div>
        <div className="guide-journey">
          <div className="guide-path" aria-hidden="true">
            <span className="guide-path-line" />
          </div>
          {t.steps.map(([title, body], index) => (
            <article
              className={`guide-step guide-step-${index + 1} guide-step--${index % 2 === 0 ? "left" : "right"}`}
              key={title}
            >
              <span className="guide-number"><b>{index + 1}</b></span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
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
          <p className="reviews-source mt-4">
            {intro.source}.{" "}
            <a href={mapsUrl} target="_blank" rel="noreferrer">
              {intro.sourceLink}
            </a>
          </p>
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
                <a href={mapsUrl} target="_blank" rel="noreferrer"><b aria-hidden="true">G</b> Google Maps</a>
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
    <section className="section-pad bg-kraft/22" id="consegna-a-domicilio">
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
    <section id="contatti" className="contact-section">
      <img className="contact-background" src={images.contact} alt={t.imageAlt} loading="lazy" />
      <div className="contact-backdrop" aria-hidden="true" />
      <div className="contact-inner mx-auto flex max-w-7xl items-end px-5 sm:px-8">
        <div className="contact-content" data-reveal="left">
          <p className="text-sm font-bold uppercase tracking-[.22em] text-white/70">{t.eyebrow}</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-6xl">
            Fiorilandia di Sanna Stefania
          </h2>
          <div className="contact-details mt-8 text-lg leading-8 text-white/88">
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
      <span className="mx-2 text-earth/35">·</span>
      <a className="font-bold text-leaf underline-offset-4 hover:underline" href="#privacy">
        Privacy e Cookie
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
