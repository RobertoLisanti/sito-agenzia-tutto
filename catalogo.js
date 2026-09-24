/* ============================================================
   Agenzia TUTTO - catalogo

   Tutto il contenuto del sito sta qui: servizi, schede delle persone,
   collezioni e maglie. Niente database: per cambiare un prezzo, aggiungere
   una maglia o accendere una collezione si modifica questo file.

   - servizi[].stato: 'attivo' (si entra), 'in_arrivo' (card grigia),
     'nascosto' (non compare).
   - collezioni[].attiva: false = non compare e non si ordina.
   - maglie: [slug, nome, riferimento]. Foto in
     img/prodotti/<collezione>/<slug>-1.jpg, prezzo e taglie di default
     della collezione (si possono sovrascrivere con un quarto elemento,
     es. { prezzo_cent: 3500 }).
   - Se ritocchi una foto tenendo lo stesso nome, alza APP_VER in app.js.
   ============================================================ */
'use strict';

(function () {
  const TAGLIE = ['S', 'M', 'L', 'XL', 'XXL'];

  const servizi = [
    {
      id: 'magliette', nome: 'Magliette', tipo: 'catalogo', stato: 'attivo', icona: 'tshirt',
      descrizione: 'Le maglie fatte da noi. Ordini qui, paghi al ritiro.',
    },
    {
      id: 'informatica', nome: 'Informatica', tipo: 'scheda', stato: 'attivo', icona: 'codice',
      descrizione: 'Siti, gestionali e automazioni: se ne occupa Roberto.',
      scheda: {
        persona: 'Roberto Lisanti', iniziali: 'RL', ruolo: 'Informatica e siti web',
        intro: "Roberto tiene insieme la parte digitale dell'Agenzia: questo sito lo ha costruito lui, lavorando in coppia con l'intelligenza artificiale. Se ti serve un sito, un gestionale su misura o qualcuno che ti tolga di mezzo un lavoro ripetitivo, chiedi a lui.",
        cosa_fa: [
          "Siti web e vetrine online (questo e' opera sua)",
          'Piccoli gestionali e app su misura',
          'Automazioni: far fare al computer le cose noiose e ripetitive',
          'Una mano quando la tecnologia fa i capricci',
        ],
        come_lavora: "Raccontagli il problema, non la soluzione: si parte da una chiacchierata e da un preventivo onesto su quanto ci vuole davvero.",
        whatsapp: '393333460084',
        messaggio: 'Ciao Roberto! Ti scrivo da Agenzia TUTTO per una cosa di informatica.',
      },
    },
    {
      id: 'eventi', nome: 'Eventi', tipo: 'scheda', stato: 'attivo', icona: 'calendar',
      descrizione: 'Serate, tavolate e trasferte: le organizza Mascio.',
      scheda: {
        persona: 'Luca Masciadri', iniziali: 'LM', ruolo: 'Eventi e serate',
        intro: "Per tutti e' Mascio. Se c'e' da mettere in piedi una serata, una tavolata o una trasferta, se ne occupa lui: locale, gruppo, tempi e conti.",
        cosa_fa: [
          'Serate e feste: locale, musica, lista',
          'Tavolate e cene di gruppo',
          'Trasferte e gite organizzate',
          'Compleanni, addii al celibato e al nubilato',
          "Prenotazioni e conti del gruppo, cosi' non ci pensi tu",
        ],
        come_lavora: "Scrivigli su WhatsApp con la data, quante persone siete e che aria volete: ti dice cosa si puo' fare e quanto viene.",
        whatsapp: '393488157072',
        messaggio: 'Ciao Mascio! Ti scrivo da Agenzia TUTTO per organizzare un evento.',
      },
    },
    {
      id: 'preparazione-atletica', nome: 'Preparazione atletica', tipo: 'scheda', stato: 'attivo', icona: 'cronometro',
      descrizione: 'Allenamento e preparazione con Davide.',
      scheda: {
        persona: 'Davide Fumagalli', iniziali: 'DF', ruolo: 'Preparatore atletico',
        intro: "Davide e' preparatore atletico: costruisce l'allenamento intorno a te e all'obiettivo che hai, invece di darti la solita scheda uguale per tutti.",
        cosa_fa: [
          'Programmi di allenamento su misura',
          'Preparazione specifica per il tuo sport',
          'Rimessa in moto per chi riparte da zero',
          'Valutazione dei progressi nel tempo',
        ],
        come_lavora: 'Si parte da due domande: dove sei adesso e dove vuoi arrivare. Poi il programma, e si aggiusta strada facendo.',
        messaggio: 'Ciao Davide! Ti scrivo da Agenzia TUTTO per la preparazione atletica.',
      },
    },
    {
      id: 'serramenti', nome: 'Serramenti', tipo: 'scheda', stato: 'attivo', icona: 'finestra',
      descrizione: 'Porte, finestre e zanzariere: se ne occupa Ivan, uno di noi.',
      scheda: {
        persona: 'Ivan Garofoli', iniziali: 'IG', ruolo: 'Serramentista e cofondatore',
        intro: "Ivan e' uno dei fondatori dell'Agenzia e di mestiere fa serramenti. Se hai una finestra che non chiude piu', una porta da cambiare o una casa intera da rifare, e' la persona giusta.",
        cosa_fa: [
          'Finestre e porte-finestre in PVC, alluminio e legno',
          'Zanzariere, persiane, tapparelle e cassonetti',
          'Porte blindate e porte da interno',
          'Sostituzione di serramenti vecchi',
          'Riparazioni e regolazioni: maniglie, cerniere, guarnizioni',
        ],
        come_lavora: "Si parte da un sopralluogo e da un preventivo, senza impegno. Scrivigli su WhatsApp: piu' gli spieghi (e piu' foto gli mandi), piu' la risposta e' precisa.",
        whatsapp: '393488149274',
        messaggio: 'Ciao Ivan! Ti scrivo da Agenzia TUTTO per un preventivo sui serramenti.',
      },
    },
    {
      id: 'palestra', nome: 'Palestra', tipo: 'scheda', stato: 'attivo', icona: 'manubrio',
      descrizione: 'Mind Your Body a Orsenigo, la palestra di Andrea.',
      scheda: {
        persona: 'Andrea Galimberti', iniziali: 'AG', ruolo: 'Mind Your Body — Orsenigo',
        intro: 'Andrea ha la palestra Mind Your Body, a Orsenigo. Se cerchi un posto dove allenarti sul serio senza sentirti un numero, passa a trovarlo.',
        cosa_fa: [
          'Sala attrezzi e allenamento guidato',
          'Percorsi seguiti, non schede fotocopiate',
          'Un ambiente dove ti chiamano per nome',
        ],
        come_lavora: "Il modo migliore e' passare in palestra a vederla: due parole con Andrea e capisci se fa per te.",
        messaggio: 'Ciao Andrea! Ti scrivo da Agenzia TUTTO per la palestra.',
      },
    },
    {
      id: 'krav-maga', nome: 'Krav Maga', tipo: 'scheda', stato: 'attivo', icona: 'scudo',
      descrizione: 'Difesa personale con Andrea, istruttore KMA.',
      scheda: {
        persona: 'Andrea Galimberti', iniziali: 'AG', ruolo: 'Istruttore Krav Maga — KMA',
        intro: 'Andrea insegna Krav Maga con KMA: difesa personale, quella pratica, pensata per situazioni vere e non per la gara.',
        cosa_fa: [
          'Corsi di Krav Maga per principianti e non',
          'Difesa personale applicata a situazioni reali',
          'Lezioni di gruppo e percorsi individuali',
        ],
        come_lavora: "Il primo passo e' provare una lezione: si capisce in un'ora se fa per te.",
        link_url: 'https://kma.it/istruttore/andrea-galimberti/',
        link_testo: 'La scheda di Andrea su kma.it',
        messaggio: 'Ciao Andrea! Ti scrivo da Agenzia TUTTO per il Krav Maga.',
      },
    },
  ];

  const collezioni = [
    {
      slug: 'beer-film', servizio_id: 'magliette', nome: 'Beer&FILM', anno: 2026,
      descrizione: 'Locandine di film riscritte a birra. La collezione 2026.',
      cover: 'img/collezioni/beer-film.svg', formato: '35 / 51',
      attiva: false,   // non ancora uscita: la accende Roberto quando e' ora
      prezzo_cent: 4000,
      maglie: [
        ['lord-of-the-beer', 'Lord of the Beer', 'The Lord of the Rings'],
        ['the-beer-of-wall-street', 'The Beer of Wall Street', 'The Wolf of Wall Street'],
        ['beerglorious-bastards', 'Beerglorious Bastards', 'Inglourious Basterds'],
        ['jurassic-beer', 'Jurassic Beer', 'Jurassic Park'],
        ['the-walking-beer', 'The Walking Beer', 'The Walking Dead'],
        ['beer-of-thrones', 'Beer of Thrones', 'Game of Thrones'],
        ['stranger-beers', 'Stranger Beers', 'Stranger Things'],
        ['breaking-beers', 'Breaking Beers', 'Breaking Bad'],
        ['the-beerfather', 'The Beerfather', 'The Godfather'],
        ['john-beer', 'John Beer', 'John Wick'],
        ['beer-and-furious', 'Beer and Furious', 'Fast & Furious'],
        ['the-expendabeers', 'The Expendabeers', 'The Expendables'],
        ['beerminator', 'Beerminator 2', 'Terminator 2: Judgment Day'],
        ['beer-has-fallen', 'Beer Has Fallen', 'Olympus Has Fallen'],
      ],
    },
    {
      slug: 'beer-vip', servizio_id: 'magliette', nome: 'Beer&VIP', anno: 2025,
      descrizione: 'Vip e birre fusi in un gioco di parole. La collezione 2025, quella che ha sfondato.',
      cover: 'img/collezioni/beer-vip.svg', formato: '1 / 1',
      attiva: true,
      prezzo_cent: 4000,
      maglie: [
        ['dua-ipa', 'Dua Ipa', 'Dua Lipa × IPA'],
        ['beerlusconi', 'Beerlusconi', 'Silvio Berlusconi × beer'],
        ['tony-leffe', 'Tony Leffe', 'Tony Effe × Leffe'],
        ['william-shakesbeer', 'William Shakesbeer', 'William Shakespeare × beer'],
        ['messina-denaro', 'Messina Denaro', 'Matteo Messina Denaro × Messina'],
        ['raffo-ella-carra', 'Raffo Ella Carrà', 'Raffaella Carrà × Raffo'],
        ['fabrizio-corona', 'Fabrizio Corona', 'Fabrizio Corona × Corona'],
        ['tiger-woods', 'Tiger Woods', 'Tiger Woods × Tiger'],
        ['coma-kozel', 'Coma Kozel', 'Coma_Cose × Kozel'],
        ['ana-menabrea', 'Ana Menabrea', 'Ana Mena × Menabrea'],
        ['bud-spencer', 'Bud Spencer', 'Bud Spencer × Bud'],
        ['florentino-ceres', 'Florentino Ceres', 'Florentino Pérez × Ceres'],
        ['ale-pacino', 'Ale Pacino', 'Al Pacino × Ale'],
        ['rye-misteryo', 'Rye Misteryo', 'Rey Mysterio × Rye'],
        ['freddy-krueg', 'Freddy Krueg', 'Freddy Krueger × Krug'],
        ['ichmusha', 'Ichmusha', 'Ichnusa × Musah'],
        ['david-becksam', "David Beck'Sam", "David Beckham × Beck's"],
      ],
    },
  ];

  // dalle righe compatte agli oggetti che usa app.js
  const prodotti = [];
  collezioni.forEach((c) => {
    c.id = c.slug;
    c.maglie.forEach(([slug, nome, riferimento, extra], i) => {
      prodotti.push(Object.assign({
        id: c.slug + '/' + slug,
        collezione_id: c.id,
        slug, nome, riferimento,
        descrizione: null,
        prezzo_cent: c.prezzo_cent,
        taglie: TAGLIE,
        immagini: ['img/prodotti/' + c.slug + '/' + slug + '-1.jpg'],
        ordine: i + 1,
      }, extra || {}));
    });
    delete c.maglie;
  });

  window.CATALOGO = { servizi, collezioni, prodotti };
})();
