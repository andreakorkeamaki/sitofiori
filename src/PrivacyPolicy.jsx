import { useEffect } from "react";

const lastUpdated = "22 agosto 2026";

export default function PrivacyPolicy({ address, displayPhone, phone }) {
  useEffect(() => {
    const previousTitle = document.title;
    const previousLanguage = document.documentElement.lang;
    document.title = "Privacy e Cookie | Fiorilandia";
    document.documentElement.lang = "it";

    return () => {
      document.title = previousTitle;
      document.documentElement.lang = previousLanguage;
    };
  }, []);

  return (
    <main className="privacy-page text-earth">
      <header className="privacy-header">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <a className="privacy-brand" href="#top" aria-label="Torna alla pagina iniziale">
            Fiorilandia
          </a>
          <a className="privacy-back-link" href="#top">
            Torna al sito
          </a>
        </div>
      </header>

      <article className="privacy-content">
        <p className="privacy-eyebrow">Informativa per gli utenti del sito</p>
        <h1>Privacy e Cookie</h1>
        <p className="privacy-summary">
          Questo sito non usa strumenti di analisi, pixel pubblicitari, cookie, localStorage o altri
          identificatori nel browser. I soli dati trattati durante la visita sono quelli tecnici necessari
          a mostrare e proteggere il sito tramite il servizio di hosting.
        </p>
        <p>Ultimo aggiornamento: {lastUpdated}.</p>

        <h2>1. Titolare del trattamento</h2>
        <p>
          Il titolare del trattamento è <strong>Fiorilandia di Sanna Stefania</strong>, contattabile presso{" "}
          {address}. Per richieste relative alla privacy è possibile scrivere all’indirizzo indicato oppure
          telefonare al <a href={`tel:${phone}`}>{displayPhone}</a>.
        </p>

        <h2>2. Dati trattati attraverso il sito</h2>
        <p>Durante la semplice consultazione possono essere trattati:</p>
        <ul>
          <li>
            dati tecnici di navigazione, come indirizzo IP, data e ora della richiesta, pagina richiesta,
            informazioni sul browser e sul dispositivo e dati utili alla sicurezza del servizio;
          </li>
          <li>
            i dati che l’utente sceglie di comunicare telefonicamente, per esempio nome, recapito,
            informazioni sulla richiesta o sull’ordine e dati necessari alla consegna.
          </li>
          <li>
            nome pubblico o pseudonimo e testo di alcune recensioni riferite a Fiorilandia, reperite dalla
            scheda dell’attività pubblicamente accessibile su Google Maps e riproposte nella sezione recensioni
            del sito.
          </li>
        </ul>
        <p>
          Il sito non contiene moduli di contatto, newsletter, registrazione di account o sistemi di acquisto
          online e non raccoglie direttamente dati attraverso questi strumenti.
        </p>

        <h2>3. Finalità e basi giuridiche</h2>
        <ul>
          <li>
            <strong>Visualizzazione, funzionamento e sicurezza del sito:</strong> i dati tecnici sono trattati
            per fornire la pagina richiesta, prevenire abusi e mantenere sicuro il servizio. La base giuridica
            è il legittimo interesse del titolare al corretto funzionamento e alla sicurezza del sito
            (art. 6, par. 1, lett. f GDPR).
          </li>
          <li>
            <strong>Richieste telefoniche e ordini:</strong> i dati comunicati volontariamente sono usati per
            rispondere, formulare proposte e dare esecuzione alla richiesta dell’utente. La base giuridica è
            l’esecuzione di misure precontrattuali o di un contratto richieste dall’interessato
            (art. 6, par. 1, lett. b GDPR) e, quando applicabile, l’adempimento di obblighi di legge
            (art. 6, par. 1, lett. c GDPR).
          </li>
          <li>
            <strong>Pubblicazione delle recensioni:</strong> una selezione delle recensioni rese pubbliche dagli
            autori su Google Maps è mostrata per presentare esperienze relative all’attività. La base giuridica
            è il legittimo interesse del titolare a documentare la qualità dei propri servizi
            (art. 6, par. 1, lett. f GDPR), nel rispetto del diritto dell’autore di opporsi e chiederne la
            rimozione dal sito.
          </li>
        </ul>

        <h2>4. Hosting, destinatari e trasferimenti</h2>
        <p>
          Il sito è ospitato sull’infrastruttura di <strong>Vercel Inc.</strong>, che può ricevere dati tecnici
          degli utenti finali, inclusi indirizzo IP, localizzazione ricavata dall’IP e configurazione del
          sistema. Questi dati possono essere trattati anche fuori dallo Spazio Economico Europeo.
        </p>
        <p>
          Il progetto utilizza un piano Vercel Pro. Il Data Processing Addendum di Vercel si applica ai clienti
          Pro e qualifica Vercel come responsabile del trattamento per i dati trattati per conto del cliente;
          per i trasferimenti internazionali prevede, nei casi indicati, le clausole contrattuali standard.
          Maggiori informazioni sono disponibili nella{" "}
          <a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noreferrer">
            Privacy Notice di Vercel
          </a>{" "}
          e nel relativo{" "}
          <a href="https://vercel.com/legal/dpa" target="_blank" rel="noreferrer">
            Data Processing Addendum
          </a>.
        </p>
        <p>
          I dati possono essere comunicati alle autorità nei casi previsti dalla legge.
        </p>

        <h2>5. Conservazione</h2>
        <p>
          I dati tecnici sono conservati per il tempo necessario al funzionamento e alla sicurezza del sito,
          secondo la configurazione e le condizioni del servizio di hosting utilizzato. I dati comunicati per
          telefono sono conservati per il tempo necessario a rispondere e gestire la richiesta o il rapporto
          contrattuale e, in seguito, per gli ulteriori periodi richiesti dalla normativa applicabile.
          Le recensioni sono mantenute sul sito finché risultano pubblicamente disponibili su Google Maps o
          fino a una precedente richiesta di rimozione dell’autore.
        </p>

        <h2>6. Conferimento dei dati</h2>
        <p>
          Il trattamento dei dati tecnici è necessario per visitare il sito. Comunicare dati per telefono è
          facoltativo, ma la mancata comunicazione delle informazioni necessarie può impedire di rispondere alla
          richiesta, preparare un ordine o organizzare una consegna.
        </p>

        <h2>7. Cookie e servizi esterni</h2>
        <p>
          Il sito non installa né legge cookie, non usa strumenti di analytics o profilazione e non memorizza
          identificatori in localStorage o sessionStorage. I caratteri tipografici sono ospitati sullo stesso
          dominio del sito. Per questo, allo stato attuale, non viene mostrato un banner di consenso.
        </p>
        <p>
          I collegamenti al telefono e a Google Maps attivano il relativo servizio solo dopo una scelta
          dell’utente. Una volta aperto un sito esterno, il trattamento è regolato dall’informativa del relativo
          fornitore.
        </p>
        <p>
          I testi delle recensioni visualizzati nella pagina sono copie statiche di contenuti pubblicamente
          accessibili su Google Maps: per mostrarli il browser non contatta Google. La fonte è indicata accanto
          alla sezione e il collegamento a Google Maps viene aperto solamente su scelta dell’utente.
        </p>

        <h2>8. Diritti dell’interessato</h2>
        <p>
          Nei casi previsti dal GDPR, l’interessato può chiedere accesso, rettifica, cancellazione, limitazione
          del trattamento e portabilità dei dati, nonché opporsi al trattamento basato sul legittimo interesse.
          Quando un trattamento si basa sul consenso, può revocarlo in qualsiasi momento senza pregiudicare la
          liceità del trattamento precedente. Le richieste possono essere inviate ai recapiti del titolare
          indicati sopra. L’autore di una recensione può in particolare chiedere in qualsiasi momento che il
          proprio nome e il relativo testo non siano più mostrati su questo sito.
        </p>
        <p>
          È inoltre possibile proporre reclamo al{" "}
          <a
            href="https://www.garanteprivacy.it/diritti/come-agire-per-tutelare-i-tuoi-dati-personali/reclamo"
            target="_blank"
            rel="noreferrer"
          >
            Garante per la protezione dei dati personali
          </a>.
        </p>

        <h2>9. Aggiornamenti</h2>
        <p>
          Questa informativa sarà aggiornata se cambieranno le funzioni del sito, i fornitori utilizzati o le
          modalità di trattamento. La data riportata in alto permette di riconoscere la versione più recente.
        </p>

      </article>
    </main>
  );
}
