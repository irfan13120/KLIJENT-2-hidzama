# KLIJENT 2 — Hidžama Sarajevo

> **Živa stranica:** https://irfan13120.github.io/KLIJENT-2-hidzama/
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
| Telefon | `+387 61 234 567` | `index.html` → pretraga `61234567` i `61 234 567` (13 mjesta) |
| Adresa | `Ferhadija 12, 71000 Sarajevo` | `index.html` (nav, hero, kontakt, footer) |
| E-mail | `info@hidzama-sarajevo.ba` | `index.html` (kontakt, footer) |
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
