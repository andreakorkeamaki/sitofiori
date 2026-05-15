import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const phone = "0761344066";
const displayPhone = "0761 344066";
const address = "Via Francesco Baracca, 7/d, 01100 Viterbo VT";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Fiorilandia%20di%20Sanna%20Stefania%20Via%20Francesco%20Baracca%207%2Fd%20Viterbo";
const whatsappUrl =
  "https://wa.me/390761344066?text=Buongiorno%2C%20vorrei%20richiedere%20informazioni%20a%20Fiorilandia.";

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

const galleryItems = [
  ["Bouquet su misura", images.bouquet],
  ["Rose fresche", images.roses],
  ["Composizioni floreali", images.flowers],
  ["Negozio di fiori", images.shop],
];

const services = [
  ["Bouquet e composizioni", "Creazioni fresche, armoniose e pensate per emozionare."],
  ["Corone di alloro per lauree", "Dettagli curati per celebrare un traguardo importante."],
  ["Fiori per cerimonie e occasioni speciali", "Addobbi floreali eleganti per momenti da ricordare."],
  ["Piante e fiori freschi", "Selezioni stagionali per la casa, un dono o un pensiero."],
  ["Consegna a domicilio", "Un servizio comodo per far arrivare i fiori dove servono."],
  ["Consigli personalizzati", "Supporto nella scelta di colori, stile e composizione."],
];

const reviews = [
  "Estro, gentilezza e disponibilità fuori dal comune. Un bouquet oltre le aspettative.",
  "Professionalità, gentilezza e disponibilità anche per un'occasione importante.",
  "Fiori sempre freschi, composizioni curate e ottimi consigli.",
];

const reasons = [
  "Composizioni personalizzate",
  "Fiori freschi e selezionati",
  "Esperienza e attenzione al dettaglio",
  "Consigli per ogni occasione",
  "Consegna a domicilio",
];

function App() {
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
      <Header />
      <Hero />
      <ShopSection />
      <GalleryMarquee />
      <ServicesSection />
      <ReviewsSection />
      <WhySection />
      <ContactSection />
      <Footer />
      <MobileStickyActions />
    </main>
  );
}

function ScrollProgress() {
  return <div className="scroll-progress" aria-hidden="true" />;
}

function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a className="font-serif text-xl font-semibold tracking-wide text-white" href="#top">
          Fiorilandia
        </a>
        <nav className="hidden items-center gap-7 rounded-full border border-white/25 bg-white/15 px-5 py-3 text-sm font-medium text-white backdrop-blur-md md:flex">
          <a href="#negozio">Il negozio</a>
          <a href="#servizi">Servizi</a>
          <a href="#recensioni">Recensioni</a>
          <a href="#contatti">Contatti</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[92svh] overflow-hidden text-white">
      <img
        className="hero-media absolute inset-0 h-full w-full object-cover"
        src={images.hero}
        alt="Bouquet floreale elegante su un banco da fioreria"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(55,20,26,.78),rgba(55,20,26,.38),rgba(55,20,26,.12))]" />
      <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-7xl items-end px-5 pb-16 pt-28 sm:px-8 lg:pb-20">
        <div className="max-w-3xl">
          <p className="hero-kicker mb-5 inline-flex rounded-full border border-white/25 bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-md">
            Fioreria artigianale a Viterbo
          </p>
          <h1 className="hero-title font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
            Fiori, bouquet e composizioni curate per ogni occasione
          </h1>
          <p className="hero-copy mt-6 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
            A Viterbo, Fiorilandia realizza bouquet, corone di alloro, composizioni floreali e
            addobbi con attenzione, esperienza e gusto personale.
          </p>
          <div className="hero-actions mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn btn-light" href={`tel:${phone}`}>
              Chiama ora
            </a>
            <a className="btn btn-glass" href={mapsUrl} target="_blank" rel="noreferrer">
              Indicazioni
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShopSection() {
  return (
    <section id="negozio" className="section-pad">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_.82fr] lg:items-center">
        <div data-reveal>
          <p className="eyebrow">Il negozio</p>
          <h2 className="section-title">Una fioreria di quartiere con cura sartoriale</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
            Fiorilandia è una fioreria di Viterbo dove ogni composizione viene preparata con cura,
            ascoltando l'occasione, il gusto e le esigenze del cliente. Dalle lauree ai bouquet,
            dalle ricorrenze ai piccoli pensieri floreali, ogni lavoro nasce con attenzione e
            disponibilità.
          </p>
        </div>
        <div className="image-card motion-card aspect-[4/3]" data-reveal style={{ "--delay": "120ms" }}>
          <img src={images.shop} alt="Interno accogliente di una fioreria con fiori freschi" />
        </div>
      </div>
    </section>
  );
}

function GalleryMarquee() {
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

function ServicesSection() {
  return (
    <section id="servizi" className="section-pad bg-blush/45">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl" data-reveal>
          <p className="eyebrow">Servizi</p>
          <h2 className="section-title">Soluzioni floreali per piccoli gesti e grandi momenti</h2>
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
                <img
                  src={[images.bouquet, images.roses, images.flowers][index % 3]}
                  alt=""
                  aria-hidden="true"
                />
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

function ReviewsSection() {
  return (
    <section id="recensioni" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl" data-reveal>
          <p className="eyebrow">Recensioni</p>
          <h2 className="section-title">Parole semplici da chi ha scelto Fiorilandia</h2>
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

function WhySection() {
  return (
    <section className="section-pad bg-sage text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.85fr_1fr] lg:items-center">
        <div className="image-card motion-card aspect-[4/5] max-h-[580px]" data-reveal>
          <img src={images.roses} alt="Rose e fiori freschi in composizione elegante" />
        </div>
        <div data-reveal style={{ "--delay": "120ms" }}>
          <p className="eyebrow text-white/75">Perché scegliere Fiorilandia</p>
          <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-5xl">
            Attenzione, freschezza e gusto personale in ogni composizione
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {reasons.map((reason) => (
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

function ContactSection() {
  return (
    <section id="contatti" className="section-pad pb-28 md:pb-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-[1fr_.8fr]">
        <div className="motion-card rounded-[1.8rem] bg-bordeaux p-7 text-white shadow-soft sm:p-10" data-reveal>
          <p className="text-sm font-semibold uppercase tracking-[.22em] text-white/70">Contatti</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-5xl">
            Fiorilandia di Sanna Stefania
          </h2>
          <div className="mt-8 grid gap-5 text-lg leading-8 text-white/88">
            <p>
              <span className="block text-sm font-semibold uppercase tracking-[.18em] text-white/60">
                Indirizzo
              </span>
              {address}
            </p>
            <p>
              <span className="block text-sm font-semibold uppercase tracking-[.18em] text-white/60">
                Telefono
              </span>
              {displayPhone}
            </p>
            <p>
              <span className="block text-sm font-semibold uppercase tracking-[.18em] text-white/60">
                Orari
              </span>
              Verifica gli orari aggiornati su Google
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className="btn btn-light" href={`tel:${phone}`}>
              Chiama
            </a>
            <a className="btn btn-glass" href={mapsUrl} target="_blank" rel="noreferrer">
              Apri su Google Maps
            </a>
            <a className="btn btn-glass" href={whatsappUrl} target="_blank" rel="noreferrer">
              Richiedi informazioni
            </a>
          </div>
        </div>
        <div className="image-card motion-card min-h-[360px]" data-reveal style={{ "--delay": "120ms" }}>
          <img src={images.flowers} alt="Fiori colorati freschi in esposizione" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-sage/20 bg-white px-5 py-8 text-center text-sm text-stone-600 sm:px-8">
      Demo sito realizzata da{" "}
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

function MobileStickyActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-3 border-t border-sage/20 bg-warm/95 p-3 shadow-[0_-12px_35px_rgba(49,38,32,.12)] backdrop-blur md:hidden">
      <a className="btn btn-primary justify-center" href={`tel:${phone}`}>
        Chiama
      </a>
      <a className="btn btn-secondary justify-center" href={mapsUrl} target="_blank" rel="noreferrer">
        Indicazioni
      </a>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
