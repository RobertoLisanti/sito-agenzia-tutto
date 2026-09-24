# sito-agenzia-tutto (Agenzia TUTTO)

Portale di servizi dell'Agenzia. Due tipi di servizio:

- **catalogo** (oggi: Magliette, collezioni Beer&VIP e Beer&FILM) - si sceglie la maglia,
  taglia e quantita', si riempie il carrello e l'ordine parte come **messaggio WhatsApp**
  gia' scritto verso il numero `WA_ORDINI` in `config.js`. **Nessuno stock**: si raccolgono
  gli ordini e poi si manda in stampa. **Pagamento a mano al ritiro**.
- **scheda** (oggi: Informatica, Eventi, Preparazione atletica, Serramenti, Palestra, Krav Maga)
  - la pagina di chi fa quel mestiere, con la bolla WhatsApp. Niente acquisto dal sito.

Repo **pubblico** `RobertoLisanti/sito-agenzia-tutto`, live su
https://robertolisanti.github.io/sito-agenzia-tutto/ (GitHub Pages da `main`, auto-deploy al push).

**Sito statico, senza backend** (dal 24/09/2026; prima c'era Supabase, tolto per liberare
uno dei due progetti gratuiti). **Architettura (come)** -> skill `sito-web-statico` (nel repo
di config, `.claude\skills\`).

## Struttura

- `index.html` + `app.js` (router hash + tutte le viste) + `catalogo.js` (**tutto il
  contenuto**: servizi, schede delle persone, collezioni, maglie, prezzi) + `styles.css` +
  `config.js` (numero WhatsApp degli ordini).
- `img/prodotti/<collezione>/<slug>-1.jpg` (foto maglie), `icons/` + `manifest.webmanifest`.
- `devserver/` mini server statico C# per i test locali (porta 5501).

Rotte: `#/` home servizi, `#/<servizio>` collezioni, `#/<servizio>/<collezione>` maglie,
`#/<servizio>/<collezione>/<slug>` dettaglio, `#/carrello`, `#/checkout`, `#/ordine-inviato`.

## Amministrazione

Niente account e niente database: prezzi, maglie, schede e collezioni si cambiano in
`catalogo.js` (una collezione con `attiva: false` non compare e non si ordina). Il carrello
vive nel browser (localStorage). Gli ordini arrivano su WhatsApp. Ogni modifica e' un
commit, quindi passa da `dev` e arriva in produzione solo col merge su `main`.
Se si ritocca una foto tenendo lo stesso nome, alzare `APP_VER` in `app.js` (e i `?v=` in
`index.html`), altrimenti i browser tengono la vecchia in cache.

Questo repo e' **pubblico**: i fatti specifici e lo stato "fatto / da fare" NON stanno qui
ma in un file locale mai committato (vedi `.gitignore`):

@.claude/local.md
