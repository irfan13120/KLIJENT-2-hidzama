# KLIJENT 2 — Hidžama Sarajevo

> **🌐 Živa stranica (javna, dostupna svima):** https://irfan13120.github.io/KLIJENT-2-hidzama/
> **🔗 Kratki link za dijeljenje:** https://tinyurl.com/hidzama-sarajevo
> **Repozitorij:** https://github.com/irfan13120/KLIJENT-2-hidzama
> Status: objavljeno na GitHub Pages (grana `main`, root folder)

Moderna, potpuno responzivna **one-page web stranica** za centar za hidžamu u Sarajevu.
Ručno napisan HTML + CSS + JavaScript (bez frameworka i bez vanjskih zavisnosti), s vlastitim
fontovima i optimizovanim slikama — sve radi i offline.

---

## ✨ Šta stranica sadrži

| Sekcija | Sadržaj |
|---|---|
| **Hero** | Velika naslovna fotografija, brza rezervacija, osnovne informacije i dva CTA dugmeta |
| **Brojke** | Iskustvo, broj terapija, ocjena klijenata, sterilnost (animirani brojači) |
| **Šta je hidžama** | Objašnjenje metode, razlika suha/vlažna, 4 mini-kartice, citat hadisa |
| **Blagodati** | 6 kartica sa ikonicama (cirkulacija, imunitet, bol, stres, probava, san) |
| **Parallax traka** | Prirodni preparati (crni kim, maslinovo i arganovo ulje) |
| **Usluge i cijene** | 6 jasno definisanih tretmana u KM, istaknuta „najtraženija“ usluga, način plaćanja |
| **Za koga je** | Lista stanja + jasna lista kontraindikacija (sigurnost na prvom mjestu) |
| **Proces** | 5 koraka od dolaska do upute nakon terapije + „prije i poslije“ uputstva |
| **Galerija** | 13 slika u različitim formatima (panorama, portret, kvadrat) sa filterima i lightboxom |
| **Zašto mi** | 7 razloga za povjerenje + ocjena klijenata |
| **Iskustva** | 3 recenzije klijenata (bez fotografija osoba) |
| **FAQ** | 8 najčešćih pitanja u harmonici (uključujući kontraindikacije i privatnost) |
| **Rezervacija** | Forma (ime, telefon, usluga, datum, vrijeme), kontakt, radno vrijeme i mapa |
| **Footer** | Navigacija, cijene, kontakt, društvene mreže, pravna napomena |

**Dizajn:** tamnozelena + zlatna paleta, ornamenti islamskog geometrijskog uzorka, tipografija
*Cormorant Garamond* (naslovi) + *Inter* (tekst) — sve self-hostovano u `assets/fonts/`.

**Responzivnost:** prilagođeno za mobilne telefone (≤640px), tablete (≤1024px) i desktop/laptop.
Na mobilnom postoji fiksna donja traka **Pozovi / WhatsApp / Termin**.

---

## 📁 Struktura

```
KLIJENT 2- hidzama/
├── index.html                 ← glavna stranica (objaviti ovo)
├── index-jedan-fajl.html      ← ista stranica s ugrađenim slikama/fontovima (radi offline, za dijeljenje)
├── assets/
│   ├── fonts/                 ← 5 fajlova fontova (woff2, ~236 KB)
│   └── img/                   ← 16 optimizovanih slika (panorama / portret / kvadrat)
├── robots.txt
├── sitemap.xml
└── .nojekyll                  ← potrebno za GitHub Pages
```

---

## 🚀 Objava na GitHub (repozitorij: **KLIJENT 2- hidzama**)

Ako već imaš ovaj folder na računaru, u terminalu pokreni:

```bash
cd "KLIJENT 2- hidzama"

# ako repozitorij još nije inicijalizovan:
git init -b main
git add .
git commit -m "Hidžama Sarajevo — web stranica"

# poveži sa repozitorijem na GitHubu (zamijeni KORISNIK svojim imenom):
git remote add origin https://github.com/KORISNIK/KLIJENT-2-hidzama.git
git push -u origin main
```

> GitHub imena repozitorija automatski zamjenjuje razmake crticama, pa će folder
> `KLIJENT 2- hidzama` na GitHubu biti dostupan kao `KLIJENT-2-hidzama`.

**Besplatno hostanje (GitHub Pages):**
1. Otvori repozitorij → **Settings** → **Pages**
2. *Source*: `Deploy from a branch` → *Branch*: `main` + `/ (root)` → **Save**
3. Za 1–2 minute stranica je dostupna na `https://KORISNIK.github.io/KLIJENT-2-hidzama/`

---

## ✏️ Šta obavezno zamijeniti prije objave

Svi podaci ispod su **privremeni (demo)** — zamijeni ih stvarnim:

| Podatak | Trenutno (demo) | Gdje se nalazi |
|---|---|---|
| ✅ Telefon / Viber | `061 588 107` — **ispravljeno** (poziv + Viber) | `index.html` → pretraga `61588107` (10 tel: linkova, 7 Viber linkova) |
| Adresa | `Ferhadija 12, 71000 Sarajevo` | `index.html` (nav, hero, kontakt, footer) |
| ✅ E-mail | uklonjen sa stranice — kontakt ide samo pozivom i Viberom | — |
| Radno vrijeme | Pon–Pet 09–20, Sub 10–17 | hero kartica, kontakt, footer |
| Cijene | 40 / 55 / 60 / 160 KM | sekcija „Usluge & cijene“ + footer |
| Instagram / Facebook | `https://instagram.com`, `https://facebook.com` | footer (`socials`) |
| Mapa | OpenStreetMap embed (Ferhadija) | sekcija „Rezervacija“ → `iframe` |
| Canonical / OG URL | `https://hidzama-sarajevo.ba/` | `<head>` + `robots.txt` + `sitemap.xml` |

**Forma za rezervaciju** trenutno radi kao front-end validacija (bez servera) i prikazuje
poruku o uspjehu. Za pravo slanje upita poveži je sa servisom kao što su **Formspree**,
**Web3Forms** ili **EmailJS** — u `index.html` nađi `form.addEventListener('submit'` i
pošalji podatke na svoj endpoint.

---

## 🖼️ Slike

- Sve fotografije su **AI-generisane ilustracije** (licenca: slobodno korištenje za ovaj projekat)
  i pripremljene u više formata (panorama 16:9, portret 3:4, kvadrat 1:1) da bi raspored
  galerije bio raznovrstan.
- **Na nijednoj slici nema ženskih osoba** — provjereno sliku po sliku.
- Ako klijent dostavi svoje fotografije, dovoljno ih je zamijeniti u `assets/img/`
  pod istim imenima (npr. `hero.jpg`, `soba-portrait.jpg`, `cups-square.jpg`).

---

## ⚡ Performanse i SEO

- Nema vanjskih zahtjeva (fontovi i slike su lokalni) → brzo učitavanje, radi offline.
- `loading="lazy"` na svim slikama osim hero slike (`fetchpriority="high"`).
- Meta opis, Open Graph / Twitter kartice, semantički HTML, `alt` tekstovi na bosanskom.
- Pristupačnost: `aria` oznake, fokus stilovi, poštovanje `prefers-reduced-motion`.

---

## 🧪 Lokalno otvaranje

```bash
python3 -m http.server 8080
# zatim otvori http://localhost:8080
```

Za pregled bez servera samo otvori `index-jedan-fajl.html` dvoklikom.

---

## ⚠️ Napomena

Sadržaj stranice je informativnog karaktera. Hidžama je komplementarna metoda i ne zamjenjuje
medicinsku dijagnostiku i terapiju. Prije objave preporučuje se da tekstove o zdravstvenim
efektima pregleda stručno lice (ljekar/farmaceut).

---

## 📧 Rezervacije na e-mail (kako radi)

Forma za rezervaciju šalje **svaku rezervaciju na e-mail `irhad1100@gmail.com`** preko besplatnog
servisa [FormSubmit](https://formsubmit.co) — bez servera, bez baze podataka za održavanje.

**Šta stiže u e-mailu (za svaku rezervaciju):**

| Polje | Primjer |
|---|---|
| Ime i prezime | Amir Hodžić |
| Telefon | 061 588 107 |
| E-mail klijenta | (opcionalno, ako ga upiše) |
| Usluga | Hidžama cijelog tijela (kompletan tretman) |
| Željeni datum | 20.10.2026 |
| Željeno vrijeme | Popodne (15:00 – 18:00) |
| Napomena | tekst koji klijent upiše |
| Poslano | datum i vrijeme slanja |
| Stranica | link stranice sa koje je poslano |

### ⚠️ Jednokratna aktivacija (obavezno!)

FormSubmit traži da **jednom** potvrdiš e-mail prije nego počne prosljeđivati rezervacije:

1. Otvori sandučić **irhad1100@gmail.com** (provjeri i **Spam / Promocije**)
2. Nađi e-mail od **FormSubmit** — naslov sadrži *„Activate Form"*
3. Klikni **Activate Form** — od tog trenutka sve rezervacije stižu automatski

> Dok se ne aktivira, stranica klijentu prikazuje poruku: *„Pošalji Viberom / pozovi 061 588 107"* —
> tako da se **nijedan upit ne izgubi**.

Testirano: servis odgovara ispravno i traži aktivaciju (potvrđeno 16.10.2026).

---

## 🗄️ Baza podataka rezervacija (opcionalno — Google Sheets)

Ako želiš da se **sve rezervacije automatski upisuju u tabelu** (prava baza: datum, ime, telefon,
usluga, napomena — i možeš filtrirati, štampati, izvesti u Excel), napravi ovo u 5 minuta:

1. Idi na [sheets.new](https://sheets.new) i napravi novu tabelu (npr. „Rezervacije Hidžama")
2. **Extensions → Apps Script** → obriši sve i zalijepi ovaj kod:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var d = JSON.parse(e.postData.contents);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Vrijeme upisa','Ime i prezime','Telefon','E-mail','Usluga',
                     'Željeni datum','Željeno vrijeme','Napomena','Poslano','Stranica']);
  }
  sheet.appendRow([new Date(), d['Ime i prezime']||'', d['Telefon']||'', d['E-mail']||'',
                   d['Usluga']||'', d['Zeljeni datum']||'', d['Zeljeno vrijeme']||'',
                   d['Napomena']||'', d['Poslano']||'', d['Stranica']||'']);
  return ContentService.createTextOutput('OK');
}
```

3. **Deploy → New deployment → Web app**
   - *Execute as:* **Me**
   - *Who has access:* **Anyone**
   - Klikni **Deploy** i kopiraj **Web app URL** (izgleda kao `https://script.google.com/macros/s/AKfy.../exec`)
4. U `index.html` nađi liniju (u `<script>` na dnu):
   ```javascript
   const SHEETS_WEBHOOK='';   // opcionalno: Google Sheets baza
   ```
   i zalijepi svoj URL između navodnika:
   ```javascript
   const SHEETS_WEBHOOK='https://script.google.com/macros/s/AKfy.../exec';
   ```
5. Sačuvaj i objavi — od sada se svaka rezervacija upisuje **i u e-mail i u tabelu**.

---

## 📱 Kontakt na stranici (trenutno stanje)

- **Poziv:** `061 588 107` → `tel:+38761588107` (10 mjesta: navigacija, hero, kontakt, CTA, footer, mobilna traka)
- **Viber:** `viber://chat?number=%2B38761588107` (7 mjesta — radi na telefonu gdje je Viber instaliran)
- **Bez WhatsAppa i bez e-mail adrese na stranici** — kontakt ide isključivo pozivom i Viberom
