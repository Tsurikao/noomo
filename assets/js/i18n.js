/* NOOMO DK — i18n.js
   All interface texts for the three languages: DA | EN | UA (code "uk").
   Default language: DA (Danish). A visitor's choice is stored in localStorage ("noomo-dk-lang");
   ?lang=da / ?lang=en / ?lang=uk in the URL forces a language.
   <html lang> is updated by the language switch in main.js.

   THIS FILE IS THE SOURCE THE SITE READS (works on GitHub Pages and when index.html is
   opened from disk). assets/i18n/*.json are the same texts per language for translators;
   if you edit a JSON file, copy the change into this file too. */
window.NOOMO_I18N = {
  DEFAULT: 'da',
  LANGS: [["da","DA","Dansk"],["en","EN","English"],["uk","UA","Українська"]],
  LOCALE: {"da":"da-DK","en":"en-GB","uk":"uk-UA"},
  I18N: {
    da: {
      "mc_eb": "Skriv til os",
      "mc_hint": "Åbner med emne og besked udfyldt",
      "mc_app": "Mail-app",
      "mc_copy": "Kopiér e-mail",
      "mc_subj": "Emne",
      "su_p": "Projektforespørgsel: noget i stil med {name}",
      "bo_p": "Hej NOOMO, jeg vil gerne have et projekt i stil med {name}. Om min virksomhed: ",
      "su_y": "Ny projektforespørgsel ({cat})",
      "bo_y": "Hej NOOMO, jeg vil gerne drøfte et nyt projekt inden for {cat}. Om min virksomhed: ",
      "su_g": "Forespørgsel fra noomo.dk",
      "your_project": "Dit projekt",
      "your_sub": "Lad os bygge det sammen",
      "nav_work": "Cases",
      "nav_services": "Ydelser",
      "pkg": "Abonnement",
      "nav_about": "Om os",
      "nav_contact": "Kontakt",
      "nav_book": "Gratis rådgivning",
      "cursor_more": "Se mere",
      "hero_eb": "Digitalt studie for B2B · Danmark",
      "hero_eb2": "Shopify · Virksomhedssites · MVP-apps",
      "hero_1": "Webshops.",
      "hero_2": "Hjemmesider og landingssider.",
      "hero_3": "Apps.",
      "hero_tag": "Leveret til tiden, til fast pris.",
      "cta_free": "Book gratis rådgivning",
      "why1_h": "Pakker til fast pris",
      "why1_t": "Du kender den samlede pris, før vi går i gang. Ingen ekstraregninger.",
      "why2_h": "Dit eget webstudie som abonnement",
      "why2_t": "Ét fast månedligt beløb til opdateringer og mindre opgaver.",
      "why3_h": "Betal i rater",
      "why3_t": "Del projektprisen op i 3 månedlige betalinger.",
      "why4_h": "Online på uger, ikke måneder",
      "why4_t": "Klare tidsplaner, så dit nye site hurtigt går live.",
      "work_h": "Udvalgte cases",
      "work_eb": "Live sites, apps og cases",
      "live_website": "Live site",
      "case_study": "Case",
      "view_proto": "Se prototype ↗",
      "want_like": "Jeg vil have noget lignende",
      "live_projects": "Live projekter",
      "svc_h": "Det laver vi",
      "svc_eb": "Tre ydelser og en gratis audit. Fast omfang, fast pris og support efter lancering.",
      "excl_vat": "ekskl. moms",
      "view_details_arrow": "Se detaljer ↗",
      "audit_badge": "Bonus · Gratis",
      "audit_h": "Gratis rådgivning og website-audit",
      "audit_t": "30 minutter med en senior designer. Vi gennemgår dit nuværende website eller din webshop og giver dig en kort skriftlig audit: hurtige gevinster inden for UX, hastighed og SEO, et anbefalet næste skridt og et overslag til fast pris.",
      "free": "0 kr.",
      "min30": "30 minutter",
      "audit_cta": "Få en gratis audit",
      "pkg_eb": "Priser i kr. ekskl. moms. Alle projekter starter med gratis rådgivning og et tilbud til fast pris.",
      "most_popular": "Mest populær",
      "sub_title": "Dit webstudie",
      "total": "I alt",
      "timeline": "Tidsplan",
      "get_quote": "Få et tilbud",
      "view_details": "Se detaljer",
      "sub_q": "Hvad er Dit webstudie?",
      "sub_t": "Ét månedligt abonnement til alle slags opgaver: opdateringer, nye sider og landingssider, bannere og kampagnegrafik, designændringer, SEO, oprettelse af produkter og prioriteret hjælp. Minimum 3 måneder.",
      "about_h": "Om NOOMO",
      "about_eb": "Studiet",
      "stat1": "Specialister",
      "stat2": "År med digitalt design",
      "stat3": "Fast omfang, fast pris",
      "mission_eb": "Vores mission",
      "contact_h": "Lad os tale om dit projekt",
      "selected": "Valgt",
      "f_service": "Ydelse",
      "f_sub": "Abonnement",
      "f_budget": "Budget (kr. ekskl. moms)",
      "f_message": "Besked",
      "sent_eb": "Forespørgsel sendt",
      "sent_msg": "Tak, vi svarer inden for 24 timer.",
      "send_another": "Send en ny forespørgsel",
      "f_time": "Foretrukket tidspunkt",
      "slot_err": "Vælg et tidsrum.",
      "f_topic": "Emne (valgfrit)",
      "call_eb": "Opkald bestilt",
      "call_another": "Bestil et nyt opkald",
      "footer_copy": "© 2026 NOOMO",
      "close_x": "Luk ✕",
      "who": "Til hvem",
      "included": "Det får du",
      "how": "Sådan foregår det",
      "addons": "Tilvalg",
      "related": "Relaterede cases",
      "min3": "Minimum 3 måneder",
      "popup_quote": "Få et tilbud på denne ydelse",
      "close_esc": "Luk · Esc",
      "like_eb": "Jeg vil have noget i stil med",
      "send_req": "Send en forespørgsel",
      "back_work": "← Tilbage til cases",
      "about_body": "NOOMO er et designdrevet digitalt studie med hovedkontor i Aarhus. Vi kombinerer mere end 15 års erfaring med UI/UX og webdesign med et AI-understøttet workflow, så du får design og udvikling i seniorkvalitet, hurtigere og til fast pris. Vi arbejder med detailhandlere, servicevirksomheder og startups i hele Europa.",
      "mission": "Vi gør professionelle digitale produkter tilgængelige for virksomheder i vækst: klare, hurtige og bygget til at sælge.",
      "mission_acc": 6,
      "mission2": "Ingen oppustet bureauproces. Ingen skabeloner solgt som skræddersyet arbejde. Bare et fokuseret team, der leverer.",
      "contact_body": "Fortæl os, hvad du har brug for. Den første rådgivning er gratis, og du får et klart tilbud til fast pris inden for 48 timer.",
      "ph_msg": "Fortæl os, hvad du har brug for",
      "ph_topic": "Hvad vil du gerne tale om?",
      "err_pre": "Forespørgslen blev ikke sendt. Prøv igen, eller skriv til os på",
      "svc_word": "Ydelse",
      "case_want": "Vil du have et projekt som",
      "aria_top": "NOOMO — tilbage til toppen",
      "aria_menu": "Menu",
      "aria_why": "Hvorfor NOOMO",
      "aria_filter": "Filtrér cases efter ydelse",
      "aria_sub": "Dit webstudie",
      "aria_contact_opts": "Kontaktmuligheder",
      "aria_remove": "Fjern valg",
      "aria_close": "Luk",
      "aria_back": "Tilbage til cases",
      "lang_aria": "Sprog",
      "on_request": "Pris efter aftale",
      "cta_live": "Besøg live site ↗",
      "cta_play": "Se på Google Play ↗",
      "aria_view_details": " — se detaljer",
      "aria_open_case": "Åbn case: ",
      "new_tab": " (åbner i en ny fane)",
      "no_fee": "Intet månedligt gebyr",
      "sub_fmt": "Dit webstudie: {name}",
      "tab_form": "Send en forespørgsel",
      "tab_call": "Bestil et opkald",
      "submit": "Send forespørgsel",
      "sending": "Sender…",
      "call_btn": "Bestil et opkald",
      "call_msg": "Tak! Vi ringer til dig {day} mellem kl. {from} og {to}.",
      "like_msg": "Jeg vil gerne have noget i stil med {name}.",
      "f_day": "Foretrukken dag",
      "day_ph": "Vælg en dato",
      "err_day": "Vælg en hverdag (man.–fre.).",
      "prev_month": "Forrige måned",
      "next_month": "Næste måned",
      "cat": {
        "web": "Virksomhedssites og landingssider",
        "ecom": "E-handel",
        "apps": "MVP og apps"
      },
      "blk": {
        "challenge": "Udfordringen",
        "solution": "Det har vi designet",
        "thinking": "Designtanker",
        "impact": "Resultat",
        "role": "Vores rolle",
        "note": "AI-understøttet workflow"
      },
      "meta": {
        "Role": "Rolle",
        "Year": "År",
        "Scope": "Omfang",
        "Platform": "Platform",
        "Status": "Status",
        "Client": "Kunde",
        "Industry": "Branche",
        "Duration": "Varighed",
        "Team": "Team",
        "Location": "Lokation",
        "Type": "Type"
      },
      "store": {
        "Visit live site": "Besøg live site",
        "Open app on Google Play": "Åbn appen på Google Play",
        "Open interactive prototype": "Åbn interaktiv prototype"
      },
      "sub_names": {
        "Not included": "Intet abonnement",
        "Basic": "Start",
        "Growth": "Stable",
        "Pro": "Full Web Studio"
      },
      "plural": [
        "projekt",
        "projekter"
      ],
      "ct": {
        "Email": "E-mail",
        "Phone": "Telefon"
      },
      "svcOpts": {
        "ecom": "E-handel",
        "web": "Virksomhedssites og landingssider",
        "apps": "MVP og app",
        "audit": "Gratis rådgivning og audit",
        "unsure": "Ved ikke"
      },
      "f": {
        "name": "Navn",
        "name_ph": "Dit navn",
        "name_err": "Skriv dit navn.",
        "company": "Virksomhed",
        "company_ph": "Virksomhedens navn",
        "email": "E-mail",
        "email_ph": "navn@virksomhed.dk",
        "email_err": "Skriv en gyldig e-mailadresse.",
        "phone_opt": "Telefon (valgfrit)",
        "phone": "Telefon",
        "phone_err": "Skriv et telefonnummer.",
        "email_opt": "E-mail (valgfrit)",
        "email_err2": "Tjek e-mailadressen."
      },
      "months": [
        "Januar",
        "Februar",
        "Marts",
        "April",
        "Maj",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "December"
      ],
      "wd": [
        "Ma",
        "Ti",
        "On",
        "To",
        "Fr",
        "Lø",
        "Sø"
      ],
      "care": {
        "Basic": [
          "Op til 10 arbejdstimer om måneden",
          "Små rettelser og forbedringer",
          "Justeringer af tekst, billeder og design",
          "Asynkront via Slack eller e-mail"
        ],
        "Growth": [
          "Op til 25 arbejdstimer om måneden",
          "Alt i Start",
          "Løbende opdateringer",
          "Design- og udviklingsopgaver",
          "Flere opgaver parallelt"
        ],
        "Pro": [
          "Op til 48 arbejdstimer om måneden",
          "Alt i Stable",
          "Arbejde på dine øvrige websites",
          "Alle typer opgaver",
          "Prioriteret support"
        ]
      },
      "svc": {
        "ecom": {
          "title": "E-handel",
          "pkgTitle": "Webshop",
          "desc": "Webshops og dagligvarebutikker på Shopify med oprettelse af produkter og løbende support.",
          "priceSub": "Ekskl. moms",
          "timeline": "4–6 uger",
          "who": "Detailhandlere, dagligvare- og specialbutikker, der vil sælge online eller væk fra en langsom platform. Bedst, når sortimentet er klar, og du har brug for en webshop, dit team selv kan drive i hverdagen.",
          "pkgItems": [
            "Opsætning af Shopify-butik og skræddersyet tema",
            "Op til 50 produkter oprettet",
            "Betaling (kort, Apple Pay, Google Pay)",
            "Opsætning af fragt og EU-moms",
            "Mobile-first design",
            "Grundlæggende SEO og analytics",
            "Oplæring af dit team"
          ],
          "includes": [
            "Opsætning af Shopify-butik og skræddersyet tema",
            "Op til 50 produkter oprettet",
            "Betaling (kort, Apple Pay, Google Pay)",
            "Opsætning af fragt og EU-moms",
            "Mobile-first design",
            "Grundlæggende SEO",
            "Analytics",
            "Oplæring af dit team"
          ],
          "steps": [
            [
              "Afklaring",
              "Vi kortlægger sortiment, betaling, fragt og moms."
            ],
            [
              "Design",
              "Et skræddersyet Shopify-tema, designet mobile-first."
            ],
            [
              "Udvikling",
              "Opsætning af butik, produkter, betaling og analytics."
            ],
            [
              "Lancering og support",
              "Oplæring, go-live og valgfrit abonnement på Dit webstudie."
            ]
          ],
          "addons": [
            "50 ekstra produkter",
            "Flersproget webshop",
            "Integrationer (ERP, POS, regnskab)",
            "Produktfotos / AI-visuals"
          ]
        },
        "web": {
          "title": "Virksomhedssites og landingssider",
          "pkgTitle": "Virksomhedssite og landingsside",
          "desc": "Virksomhedssites, landingssider og kampagnesites, der forklarer, hvad I laver, og skaber leads.",
          "priceSub": "Ekskl. moms · Landingsside",
          "altPre": "Virksomhedssite ",
          "timeline": "2–4 uger",
          "who": "Servicevirksomheder, B2B-leverandører og marketingteams, der lancerer en kampagne eller et nyt tilbud. Til virksomheder, hvis nuværende site ikke længere forklarer, hvad de laver.",
          "pkgItems": [
            "UX-struktur og hjælp til tekster",
            "Skræddersyet design",
            "Op til 6 sider (virksomhedssite) eller 1 lang side (landingsside)",
            "CMS",
            "Kontaktformularer",
            "SEO-opsætning",
            "Opsætning af hosting og deploy"
          ],
          "steps": [
            [
              "Afklaring",
              "Mål, målgruppe og de sider, du reelt har brug for."
            ],
            [
              "Struktur og design",
              "Sitemap, hjælp til tekster og et skræddersyet design."
            ],
            [
              "Udvikling",
              "CMS, formularer og SEO-opsætning, testet på alle skærme."
            ],
            [
              "Lancering og support",
              "Hosting, deploy og support efter lancering."
            ]
          ],
          "addons": [
            "Ekstra side",
            "Tekstforfatning",
            "Flere sprog"
          ]
        },
        "apps": {
          "title": "MVP-apps og startups",
          "pkgTitle": "MVP-app og startup",
          "desc": "Klikbare prototyper og lanceringsklare MVP'er til founders, der skal teste, pitche eller lancere.",
          "priceSub": "Ekskl. moms",
          "timeline": "Fra 14 dages MVP-sprint",
          "who": "Founders og innovationsteams, der vil teste en idé med rigtige brugere eller vise investorer et fungerende produkt. Også til virksomheder, der lancerer en ny digital service.",
          "pkgItems": [
            "Afklaringsworkshop",
            "Brugerflows",
            "Klikbar prototype",
            "UI-designsystem",
            "Frontend-udvikling af MVP",
            "Demo klar til investorer",
            "Overdragelse eller videreudvikling"
          ],
          "steps": [
            [
              "Afklaringsworkshop",
              "Problemet, brugerne og det mindste produkt, der er værd at bygge."
            ],
            [
              "Flows og prototype",
              "Brugerflows og en klikbar prototype, der kan testes tidligt."
            ],
            [
              "Design og udvikling",
              "Et UI-designsystem og frontend-udvikling af MVP'en."
            ],
            [
              "Demo og overdragelse",
              "En demo klar til investorer, derefter overdragelse eller videreudvikling."
            ]
          ],
          "addons": [
            "Ekstra brugerflow",
            "Backend / database-opsætning",
            "Løbende udviklingssprints"
          ]
        }
      },
      "cases": {
        "Mintra": {
          "sub": "Hurtig psykisk aflastning og daglig mental restitution",
          "desc": "En daglig app på 5–10 minutter til mental restitution: mindre angst, søvnsporing, affirmationer og åndedrætsøvelser, bygget op omkring funktionen Brain Dump."
        },
        "Poshuk": {
          "sub": "Hurtig hjælp på afstand til eftersøgning af savnede i Ukraine",
          "desc": "Et guidet forløb i 3 trin, der laver klar-til-afsendelse henvendelser og et QR-eftersøgningskort, som alle kan scanne og svare på."
        },
        "Gym App": {
          "sub": "AI-fitnesscoach og platform til personlig træning",
          "desc": "En iOS-fitnessplatform i mørkt design, bygget fra bunden. AI laver personlige 14-dages træningsplaner ud fra mål og form."
        },
        "iFranko": {
          "sub": "Redesign af en Apple-webshop",
          "desc": "Et komplet redesign af iFranko-butikken med et mørkt, produktfokuseret system, fast kategorinavigation og produktsider, der starter med billeder og de vigtigste data."
        },
        "Swiss Insurance": {
          "desc": "En hurtig, intuitiv AI-brugerflade, der gør kompleks logik fra ældre systemer og formularer i flere trin til et klart forløb på 2 minutter, uden at gå på kompromis med compliance."
        },
        "Interactive Social Game Up": {
          "desc": "Hurtig onboarding og letforståelige sociale mekanikker, der får spillerne ind i et live spil på få sekunder."
        },
        "Community App & Site for African Repatriates": {
          "head": "Community-app og website for afrikanske hjemvendte",
          "desc": "En community-platform, der samler dating, venskab og forretningsnetværk i ét økosystem med én profil til alle tre formål."
        },
        "Sefer": {
          "sub": "Musikcommunity til talentspejding og samarbejde",
          "desc": "Et musikcommunity bygget op omkring en offentlig kunstnerprofil, der fungerer som en rigtig portfolio: numre, credits, stil og tilgængelighed samlet ét sted."
        },
        "NxtShop": {
          "sub": "Skønhedsapp med AR-prøvning",
          "desc": "En app til køb af skønhedsprodukter med AR-prøvning: brugerne tester makeup på deres eget ansigt i realtid, før de køber."
        },
        "DPlab": {
          "sub": "Redesign af et digitalbureaus website, Vilnius",
          "desc": "Redesign af websitet for et digitalbureau i Vilnius: design, webudvikling, marketing og SEO."
        },
        "Defend & Carry": {
          "sub": "Webshop for taktisk udstyr og optik",
          "desc": "En webshop for sportsoptik, taktisk og militært udstyr, jagttøj og briller."
        },
        "AGM Global Vision": {
          "sub": "E-handelsplatform for forsvarsteknologi",
          "desc": "En e-handelsplatform for en amerikansk leverandør af termisk udstyr, nattesyn og forsvarsteknologi."
        },
        "Unifood": {
          "sub": "Redesign af unifood.dk",
          "desc": "Et katalogfokuseret redesign for Unifood Import A/S, en dansk fødevaregrossist med over 1.400 produkter. Kunderne finder et produkt med to klik og sender deres afhentningsordre."
        },
        "Kortical": {
          "sub": "Redesign af website",
          "desc": "Vi redesignede forsiden for AI Agents på desktop og mobil samt mobilmenuen, 404-siden og et fælles designsystem."
        },
        "Laurie Handlers": {
          "sub": "Redesign af website for en foredragsholder og forfatter om intimitet",
          "desc": "Et mørkt, filmisk redesign af websitet for en international foredragsholder og bestsellerforfatter om intimitet og parforhold."
        },
        "Subflow": {
          "sub": "Abonnementsapp til creators",
          "desc": "En mobilplatform, hvor creators sælger abonnementer på deres indhold, kurser og communities."
        },
        "Georg Jensen": {
          "sub": "Koncept for en mobil webshop",
          "desc": "Et frit koncept for en mobil Georg Jensen-webshop, bygget op omkring håndlavet 18 karat guld og certificerede, bæredygtige diamanter."
        },
        "Ayvens": {
          "sub": "Koncept for en side med brugte biler",
          "desc": "Et koncept for en produktside til Ayvens brugte biler, der viser hele købet i ét roligt scroll."
        }
      },
      "boot_eb": "Indlæser studiet",
      "hint_scroll": "Scroll for at fortsætte",
      "hint_hover": "Hold musen over for preview",
      "hint_click": "Klik for at åbne",
      "boot_steps": [
        "Initialiserer grid",
        "Indlæser brief",
        "Kortlægger struktur",
        "Sætter typeskala",
        "Tegner wireframes",
        "Retter ind efter grid",
        "Anvender designsystem",
        "Kobler interaktioner",
        "Kører QA",
        "Sender i produktion"
      ],
      "menu": "Menu",
      "m_welcome": "Velkommen til NOOMO",
      "m_type": "Type",
      "m_focus": "Fokus",
      "m_loc": "Lokation",
      "m_loc_v": "Aarhus, Danmark (HQ)",
      "theme_aria": "Mørk tilstand",
      "sb_title": "Abonnement",
      "sb_sub": "Design og udvikling efter behov",
      "sb_ps": "Pr. måned · ekskl. moms · sæt på pause eller opsig når som helst",
      "sb_tl": "48 t pr. opgave **",
      "sb_aria": "Abonnementstype",
      "sb_m1": "Solo",
      "sb_m2": "Team",
      "sb_solo": [
        "Ubegrænsede opgaver og rettelser pr. måned",
        "1 aktiv opgave ad gangen",
        "Hver opgave leveres inden for 48 timer",
        "Asynkron kommunikation i Slack eller e-mail"
      ],
      "sb_team": [
        "Ubegrænsede opgaver og rettelser pr. måned",
        "Op til 3 aktive opgaver parallelt",
        "Designer, udvikler og projektleder",
        "Asynkront + ugentligt møde med projektlederen"
      ],
      "sb_n1": "* Næste opgave starter, så snart den aktuelle er leveret.",
      "sb_n2": "** For de fleste opgaver. Større opgaver deles op i trin på 48 timer.",
      "sb_msg": "Hej NOOMO, jeg er interesseret i abonnementet {plan}.",
      "sb_msg_pk": "Hej NOOMO, jeg er interesseret i ydelsen {plan}.",
      "tiers": {
        "start": {
          "name": "Start",
          "sub": "Landingsside eller lille site",
          "tl": "2–3 uger",
          "items": [
            "Op til 3 sider",
            "Skræddersyet design",
            "CMS og kontaktformular",
            "Grundlæggende SEO"
          ]
        },
        "stable": {
          "name": "Stable",
          "sub": "Webshop eller virksomhedssite",
          "tl": "4–6 uger",
          "items": [
            "Shopify-butik eller op til 8 sider",
            "UX-struktur og skræddersyet design",
            "Betaling, CMS og integrationer",
            "SEO, analytics og 30 dages support"
          ]
        },
        "full": {
          "name": "Full",
          "sub": "App, MVP eller stor platform",
          "tl": "Fra 6 uger",
          "items": [
            "Afklaringsworkshop og prototype",
            "UI-designsystem",
            "Frontend-udvikling og overdragelse",
            "60 dages support"
          ]
        }
      },
      "sb_slots": "Opgaver ad gangen",
      "sb_d1": "Én designer-udvikler arbejder på én opgave ad gangen. Send så mange, du vil; de løses en efter en.",
      "sb_d2": "Et team arbejder på op til 3 opgaver parallelt, og en projektleder holder styr på køen og prioriteterne.",
      "start_from": "Startpris",
      "b2b_h": "Til virksomheder og bureauer",
      "b2b_p": "Til virksomheder og bureauer på løbende basis: vælg Full Web Studio (2.160 kr./md., op til 48 timer), eller lad os aftale særlige vilkår ved større opgavemængder.",
      "b2b_items": [
        "White label for bureauer",
        "Dedikeret team til dit produkt",
        "NDA, kontrakt og månedlig fakturering",
        "Fælles Slack, Jira eller Linear",
        "Designsystem og overdragelse af kode",
        "Prioriteret SLA og fast kontaktperson"
      ],
      "b2b_pl": "Anbefalet plan",
      "b2b_price": "Full Web Studio · 2.160 kr./md.",
      "b2b_ps": "Op til 48 timer · eller særlige vilkår",
      "b2b_cta": "Drøft et samarbejde",
      "b2b_msg": "Hej NOOMO, vi er en virksomhed/et bureau og vil gerne drøfte et løbende samarbejde.",
      "subtiers": {
        "start": {
          "name": "Start",
          "desc": "Til små rettelser og mindre forbedringer af dit site.",
          "tl": "48 t pr. opgave",
          "items": [
            "Ubegrænsede rettelser",
            "1 opgave ad gangen",
            "Sæt på pause eller opsig når som helst",
            "Asynkront via Slack eller e-mail"
          ]
        },
        "stable": {
          "name": "Stable",
          "desc": "Løbende opdateringer samt design- og udviklingsopgaver.",
          "tl": "48 t pr. opgave",
          "items": [
            "Ubegrænsede rettelser",
            "2 opgaver parallelt",
            "Sæt på pause eller opsig når som helst",
            "Asynkront via Slack eller e-mail"
          ]
        },
        "full": {
          "name": "Full Web Studio",
          "desc": "Dit fulde webstudie: forbedringer af dit site, arbejde på dine øvrige websites og alle typer opgaver.",
          "tl": "24–48 t pr. opgave",
          "items": [
            "Ubegrænsede rettelser",
            "3 opgaver parallelt",
            "Sæt på pause eller opsig når som helst",
            "Asynkront via Slack eller e-mail",
            "Prioriteret support"
          ]
        }
      },
      "hero_trust": "Faste priser · Betal i op til 3 rater · Dit eget webstudie fra 740 kr./md.",
      "sub_line": "Abonnement til alle slags opgaver",
      "sub_opt": "Valgfrit tilvalg",
      "care_h": {
        "Basic": "Op til 10 t / md.",
        "Growth": "Op til 25 t / md.",
        "Pro": "Op til 48 t / md."
      },
      "studio_q": "Har du allerede et website?",
      "studio_t": "Få dit eget webstudie fra {price}.",
      "studio_cta": "Vælg en plan",
      "studio_msg": "Hej NOOMO, jeg har allerede et website og er interesseret i abonnementet Dit webstudie.",
      "inst_line": "eller 3 × {price}/md.",
      "inst_note": "Fast pris. Betal på én gang eller i op til 3 månedlige rater.",
      "f_pay": "Betaling (valgfrit)",
      "pay": {
        "full": "Fuld betaling",
        "inst": "Rater (op til 3 måneder)"
      },
      "cta_services": "Se ydelser",
      "cta_studio": "Dit eget webstudie fra 740 kr./md.",
      "svc_note": "Fast pris. Betal på én gang eller i op til 3 månedlige rater.",
      "sb_hrs": "Op til {h} timer om måneden",
      "b2b_cta2": "Vælg Full Web Studio",
      "loc_h": "Vores lokationer",
      "loc_line": "Hovedkontor i Aarhus, Danmark",
      "locs": [
        {
          "n": "Danmark",
          "c": "Aarhus",
          "hq": true
        }
      ],
      "svc_more": "Se detaljer →",
      "audit_b": [
        "Gennemgang af UX, hastighed og SEO",
        "Kort skriftlig audit",
        "Overslag til fast pris"
      ]
    },
    en: {
      "mc_eb": "Write to us",
      "mc_hint": "Opens with the subject and message filled in",
      "mc_app": "Mail app",
      "mc_copy": "Copy email",
      "mc_subj": "Subject",
      "su_p": "Project inquiry: something like {name}",
      "bo_p": "Hi NOOMO, I'd like a project similar to {name}. About my business: ",
      "su_y": "New project inquiry ({cat})",
      "bo_y": "Hi NOOMO, I'd like to discuss a new {cat} project. About my business: ",
      "su_g": "Inquiry from noomo.dk",
      "your_project": "Your project",
      "your_sub": "Let's build it together",
      "nav_work": "Work",
      "nav_services": "Services",
      "pkg": "Subscription",
      "nav_about": "About",
      "nav_contact": "Contact",
      "nav_book": "Free consultation",
      "cursor_more": "See more",
      "hero_eb": "Digital studio for B2B · Denmark",
      "hero_eb2": "Shopify · Corporate sites · MVP apps",
      "hero_1": "Online stores.",
      "hero_2": "Websites & landing pages.",
      "hero_3": "Apps.",
      "hero_tag": "Shipped on time, on a fixed price.",
      "cta_free": "Book a free consultation",
      "why1_h": "Fixed-price packages",
      "why1_t": "You know the full cost before we start, no extras.",
      "why2_h": "Your own web studio, by subscription",
      "why2_t": "One monthly fee for site updates and small tasks.",
      "why3_h": "Pay in installments",
      "why3_t": "Split the project cost into 3 monthly payments.",
      "why4_h": "Launch in weeks, not months",
      "why4_t": "Clear timelines, and your new site goes live fast.",
      "work_h": "Selected work",
      "work_eb": "Live sites, apps and case studies",
      "live_website": "Live website",
      "case_study": "Case study",
      "view_proto": "View prototype ↗",
      "want_like": "I want something like this",
      "live_projects": "Live projects",
      "svc_h": "What we do",
      "svc_eb": "Three services and a free audit. Fixed scope, fixed price, support after launch.",
      "excl_vat": "excl. VAT",
      "view_details_arrow": "View details ↗",
      "audit_badge": "Bonus · Free",
      "audit_h": "Free consultation & website audit",
      "audit_t": "A 30-minute session with a senior designer. We review your current website or store and give you a short written audit: UX, speed and SEO quick wins, plus a recommended next step and fixed-price estimate.",
      "free": "DKK 0",
      "min30": "30 minutes",
      "audit_cta": "Get a free audit",
      "pkg_eb": "Prices in DKK, excl. VAT. Every project starts with a free consultation and a fixed-price proposal.",
      "most_popular": "Most popular",
      "sub_title": "Your web studio",
      "total": "Total",
      "timeline": "Timeline",
      "get_quote": "Get a quote",
      "view_details": "View details",
      "sub_q": "What's Your web studio?",
      "sub_t": "One monthly subscription for any kind of work: updates, new pages and landing pages, banners and campaign graphics, design changes, SEO, product uploads and priority help. Minimum 3 months.",
      "about_h": "About NOOMO",
      "about_eb": "The studio",
      "stat1": "Specialists",
      "stat2": "Years in digital design",
      "stat3": "Fixed scope, fixed price",
      "mission_eb": "Our mission",
      "contact_h": "Let's talk about your project",
      "selected": "Selected",
      "f_service": "Service",
      "f_sub": "Subscription",
      "f_budget": "Budget range (DKK, excl. VAT)",
      "f_message": "Message",
      "sent_eb": "Request sent",
      "sent_msg": "Thanks, we'll reply within 24 hours.",
      "send_another": "Send another request",
      "f_time": "Preferred time",
      "slot_err": "Please pick a time slot.",
      "f_topic": "Topic (optional)",
      "call_eb": "Call requested",
      "call_another": "Request another call",
      "footer_copy": "© 2026 NOOMO",
      "close_x": "Close ✕",
      "who": "Who it's for",
      "included": "What's included",
      "how": "How it works",
      "addons": "Optional add-ons",
      "related": "Related work",
      "min3": "Minimum 3 months",
      "popup_quote": "Get a quote for this service",
      "close_esc": "Close · Esc",
      "like_eb": "I want something like",
      "send_req": "Send a request",
      "back_work": "← Back to work",
      "about_body": "NOOMO is a design-led digital studio headquartered in Aarhus, Denmark. We combine 15+ years of UI/UX and web design experience with an AI-augmented workflow, so you get senior-quality design and development, delivered faster and at a fixed price. We work with retailers, service companies and startups across Europe.",
      "mission": "We make professional digital products accessible to growing businesses: clear, fast and built to sell.",
      "mission_acc": 6,
      "mission2": "No bloated agency process. No templates passed off as custom work. Just a focused team that ships.",
      "contact_body": "Tell us what you need. The first consultation is free, and you get a clear proposal with a fixed price within 48 hours.",
      "ph_msg": "Tell us what you need",
      "ph_topic": "What would you like to talk about?",
      "err_pre": "The request didn't go through. Please try again, or email us at",
      "svc_word": "Service",
      "case_want": "Want a project like",
      "aria_top": "NOOMO — back to top",
      "aria_menu": "Menu",
      "aria_why": "Why NOOMO",
      "aria_filter": "Filter work by service",
      "aria_sub": "Your web studio",
      "aria_contact_opts": "Contact options",
      "aria_remove": "Remove selection",
      "aria_close": "Close",
      "aria_back": "Back to work",
      "lang_aria": "Language",
      "on_request": "Priced on request",
      "cta_live": "Visit live site ↗",
      "cta_play": "View on Google Play ↗",
      "aria_view_details": " — view details",
      "aria_open_case": "Open case study: ",
      "new_tab": " (opens in new tab)",
      "no_fee": "No monthly fee",
      "sub_fmt": "Your web studio: {name}",
      "tab_form": "Send a request",
      "tab_call": "Request a call",
      "submit": "Send request",
      "sending": "Sending…",
      "call_btn": "Request a call",
      "call_msg": "Thanks! We'll call you on {day} between {from} and {to}.",
      "like_msg": "I'd like something similar to {name}.",
      "f_day": "Preferred day",
      "day_ph": "Pick a date",
      "err_day": "Please pick a weekday (Mon–Fri).",
      "prev_month": "Previous month",
      "next_month": "Next month",
      "cat": {
        "web": "Corporate websites & landing pages",
        "ecom": "E-commerce",
        "apps": "MVP & apps"
      },
      "blk": {
        "challenge": "The challenge",
        "solution": "What we designed",
        "thinking": "Design thinking",
        "impact": "Impact",
        "role": "Our role",
        "note": "AI-augmented workflow"
      },
      "meta": {},
      "store": {},
      "sub_names": {
        "Not included": "No subscription",
        "Basic": "Start",
        "Growth": "Stable",
        "Pro": "Full Web Studio"
      },
      "plural": [
        "project",
        "projects"
      ],
      "ct": {
        "Email": "Email",
        "Phone": "Phone"
      },
      "svcOpts": {
        "ecom": "E-commerce",
        "web": "Corporate websites & landing pages",
        "apps": "MVP & app",
        "audit": "Free consultation & audit",
        "unsure": "Not sure"
      },
      "f": {
        "name": "Name",
        "name_ph": "Your name",
        "name_err": "Please add your name.",
        "company": "Company",
        "company_ph": "Company name",
        "email": "Email",
        "email_ph": "name@company.com",
        "email_err": "Please add a valid email.",
        "phone_opt": "Phone (optional)",
        "phone": "Phone",
        "phone_err": "Please add a phone number.",
        "email_opt": "Email (optional)",
        "email_err2": "Please check the email address."
      },
      "months": [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      "wd": [
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa",
        "Su"
      ],
      "care": {
        "Basic": [
          "Up to 10 work hours per month",
          "Small edits and improvements",
          "Text, image and design tweaks",
          "Async via Slack or email"
        ],
        "Growth": [
          "Up to 25 work hours per month",
          "Everything in Start",
          "Regular updates",
          "Design and development tasks",
          "Tasks in parallel"
        ],
        "Pro": [
          "Up to 48 work hours per month",
          "Everything in Stable",
          "Work on your other websites",
          "Any type of task",
          "Priority support"
        ]
      },
      "svc": {
        "ecom": {
          "title": "E-commerce",
          "pkgTitle": "E-commerce Store",
          "desc": "Online stores and grocery shops on Shopify, with product upload and ongoing support.",
          "priceSub": "Excl. VAT",
          "timeline": "4–6 weeks",
          "who": "Retailers, grocery and specialty shops that want to sell online or move off a slow platform. Best when you have a product range ready and need a store your team can run day to day.",
          "pkgItems": [
            "Shopify store setup and custom theme design",
            "Up to 50 products uploaded",
            "Payments (card, Apple Pay, Google Pay)",
            "Shipping and EU VAT settings",
            "Mobile-first design",
            "Basic SEO and analytics",
            "Training session"
          ],
          "includes": [
            "Shopify store setup and custom theme design",
            "Up to 50 products uploaded",
            "Payments (card, Apple Pay, Google Pay)",
            "Shipping and EU VAT settings",
            "Mobile-first design",
            "Basic SEO",
            "Analytics",
            "Training session"
          ],
          "steps": [
            [
              "Discovery",
              "We map your range, payments, shipping and VAT setup."
            ],
            [
              "Design",
              "A custom Shopify theme, designed mobile-first."
            ],
            [
              "Build",
              "Store setup, product upload, payments and analytics."
            ],
            [
              "Launch & support",
              "Training, go-live and optional Your web studio subscription."
            ]
          ],
          "addons": [
            "Extra 50 products",
            "Multilingual store",
            "Integrations (ERP, POS, accounting)",
            "Product photography / AI visuals"
          ]
        },
        "web": {
          "title": "Corporate websites & landing pages",
          "pkgTitle": "Corporate Website & Landing Page",
          "desc": "Company sites, landing pages and campaign sites that explain what you do and bring in leads.",
          "priceSub": "Excl. VAT · Landing page",
          "altPre": "Corporate site ",
          "timeline": "2–4 weeks",
          "who": "Service companies, B2B suppliers and marketing teams launching a campaign or a new offer. For businesses whose current site no longer explains what they do.",
          "pkgItems": [
            "UX structure and copy guidance",
            "Custom design",
            "Up to 6 pages (corporate) or 1 long-scroll page (landing)",
            "CMS",
            "Contact forms",
            "SEO setup",
            "Hosting setup and deploy"
          ],
          "steps": [
            [
              "Discovery",
              "Goals, audience and the pages you actually need."
            ],
            [
              "Structure & design",
              "Sitemap, copy guidance and a custom design."
            ],
            [
              "Build",
              "CMS, forms and SEO setup, tested on every screen."
            ],
            [
              "Launch & support",
              "Hosting, deploy and support after launch."
            ]
          ],
          "addons": [
            "Extra page",
            "Copywriting",
            "Multilingual"
          ]
        },
        "apps": {
          "title": "MVP apps & startups",
          "pkgTitle": "MVP App & Startup",
          "desc": "Clickable prototypes and launch-ready MVPs for founders who need to test, pitch or launch.",
          "priceSub": "Excl. VAT",
          "timeline": "From 14-day MVP sprint",
          "who": "Founders and innovation teams who need to test an idea with real users or show investors a working product. Also for companies adding a new digital service.",
          "pkgItems": [
            "Discovery workshop",
            "User flows",
            "Clickable prototype",
            "UI design system",
            "Front-end MVP build",
            "Investor-ready demo",
            "Handoff or ongoing development"
          ],
          "steps": [
            [
              "Discovery workshop",
              "The problem, the users and the smallest product worth building."
            ],
            [
              "Flows & prototype",
              "User flows and a clickable prototype to test early."
            ],
            [
              "Design & build",
              "A UI design system and a front-end MVP build."
            ],
            [
              "Demo & handoff",
              "An investor-ready demo, then handoff or ongoing development."
            ]
          ],
          "addons": [
            "Extra user flow",
            "Backend / database setup",
            "Ongoing development sprints"
          ]
        }
      },
      "cases": {},
      "boot_eb": "Loading studio",
      "hint_scroll": "Scroll to continue",
      "hint_hover": "Hover to preview",
      "hint_click": "Click to open",
      "boot_steps": [
        "Initialize grid",
        "Load brief",
        "Map structure",
        "Set type scale",
        "Draw wireframes",
        "Snap to grid",
        "Apply design system",
        "Wire interactions",
        "Run QA",
        "Ship to production"
      ],
      "menu": "Menu",
      "m_welcome": "Welcome to NOOMO",
      "m_type": "Type",
      "m_focus": "Focus",
      "m_loc": "Location",
      "m_loc_v": "Aarhus, Denmark (HQ)",
      "theme_aria": "Dark mode",
      "sb_title": "Subscription",
      "sb_sub": "Design & dev on demand",
      "sb_ps": "Per month · excl. VAT · pause or cancel anytime",
      "sb_tl": "48 h per task **",
      "sb_aria": "Subscription type",
      "sb_m1": "Solo",
      "sb_m2": "Team",
      "sb_solo": [
        "Unlimited tasks and edits per month",
        "1 active task at a time",
        "Each task delivered in 48 hours",
        "Async communication in Slack or email"
      ],
      "sb_team": [
        "Unlimited tasks and edits per month",
        "Up to 3 active tasks in parallel",
        "Designer, developer and project manager",
        "Async + weekly call with the project manager"
      ],
      "sb_n1": "* The next task starts as soon as the current one is delivered.",
      "sb_n2": "** For most tasks. Larger ones are split into 48-hour steps.",
      "sb_msg": "Hi NOOMO, I am interested in the {plan} subscription.",
      "sb_msg_pk": "Hi NOOMO, I am interested in the {plan} service.",
      "tiers": {
        "start": {
          "name": "Start",
          "sub": "Landing page or small site",
          "tl": "2–3 weeks",
          "items": [
            "Up to 3 pages",
            "Custom design",
            "CMS and contact form",
            "Basic SEO"
          ]
        },
        "stable": {
          "name": "Stable",
          "sub": "Online store or business site",
          "tl": "4–6 weeks",
          "items": [
            "Shopify store or up to 8 pages",
            "UX structure and custom design",
            "Payments, CMS and integrations",
            "SEO, analytics and 30 days support"
          ]
        },
        "full": {
          "name": "Full",
          "sub": "App, MVP or large platform",
          "tl": "From 6 weeks",
          "items": [
            "Discovery workshop and prototype",
            "UI design system",
            "Front-end build and handoff",
            "60 days support"
          ]
        }
      },
      "sb_slots": "Tasks at a time",
      "sb_d1": "One designer-developer works on one task at a time. Send as many as you like; they are done one after another.",
      "sb_d2": "A team works on up to 3 tasks in parallel, with a project manager keeping the queue and priorities.",
      "start_from": "Starting price",
      "b2b_h": "For business & agencies",
      "b2b_p": "For businesses and agencies on an ongoing basis: choose the Full Web Studio (DKK 2,160/month, up to 48 hours), or let’s agree custom terms for larger volumes.",
      "b2b_items": [
        "White-label for agencies",
        "Dedicated team for your product",
        "NDA, contract and monthly invoicing",
        "Shared Slack, Jira or Linear",
        "Design system and code handoff",
        "Priority SLA and fixed contact person"
      ],
      "b2b_pl": "Recommended plan",
      "b2b_price": "Full Web Studio · DKK 2,160/month",
      "b2b_ps": "Up to 48 hours · or custom terms",
      "b2b_cta": "Discuss collaboration",
      "b2b_msg": "Hi NOOMO, we are a company/agency and want to discuss an ongoing collaboration.",
      "subtiers": {
        "start": {
          "name": "Start",
          "desc": "For small edits and minor improvements to your site.",
          "tl": "48 h per task",
          "items": [
            "Unlimited revisions",
            "1 task at a time",
            "Pause or cancel anytime",
            "Async via Slack or email"
          ]
        },
        "stable": {
          "name": "Stable",
          "desc": "Regular updates, design and development tasks.",
          "tl": "48 h per task",
          "items": [
            "Unlimited revisions",
            "2 tasks in parallel",
            "Pause or cancel anytime",
            "Async via Slack or email"
          ]
        },
        "full": {
          "name": "Full Web Studio",
          "desc": "Your full web studio: improvements to your site, work on your other websites, any type of task.",
          "tl": "24–48 h per task",
          "items": [
            "Unlimited revisions",
            "3 tasks in parallel",
            "Pause or cancel anytime",
            "Async via Slack or email",
            "Priority support"
          ]
        }
      },
      "hero_trust": "Fixed prices · Pay in up to 3 installments · Your own web studio from DKK 740/month",
      "sub_line": "Subscription for any kind of work",
      "sub_opt": "Optional add-on",
      "care_h": {
        "Basic": "Up to 10 h / month",
        "Growth": "Up to 25 h / month",
        "Pro": "Up to 48 h / month"
      },
      "studio_q": "Already have a website?",
      "studio_t": "Get your own web studio from {price}.",
      "studio_cta": "Choose a plan",
      "studio_msg": "Hi NOOMO, I already have a website and I'm interested in Your web studio subscription.",
      "inst_line": "or 3 × {price}/month",
      "inst_note": "Fixed price. Pay at once or in up to 3 monthly payments.",
      "f_pay": "Payment (optional)",
      "pay": {
        "full": "Full payment",
        "inst": "Installments (up to 3 months)"
      },
      "cta_services": "See services",
      "cta_studio": "Your own web studio from DKK 740/month",
      "svc_note": "Fixed price. Pay at once or in up to 3 monthly payments.",
      "sb_hrs": "Up to {h} hours per month",
      "b2b_cta2": "Choose Full Web Studio",
      "loc_h": "Our locations",
      "loc_line": "Headquarters in Aarhus, Denmark",
      "locs": [
        {
          "n": "Denmark",
          "c": "Aarhus",
          "hq": true
        }
      ],
      "svc_more": "View details →",
      "audit_b": [
        "UX, speed and SEO review",
        "Short written audit",
        "Fixed-price estimate"
      ]
    },
    uk: {
      "mc_eb": "Напишіть нам",
      "mc_hint": "Відкриється із заповненими темою та текстом",
      "mc_app": "Поштовий застосунок",
      "mc_copy": "Скопіювати email",
      "mc_subj": "Тема",
      "su_p": "Запит на проєкт: щось подібне до {name}",
      "bo_p": "Вітаю, NOOMO! Хочу проєкт, схожий на {name}. Про мій бізнес: ",
      "su_y": "Запит на новий проєкт ({cat})",
      "bo_y": "Вітаю, NOOMO! Хочу обговорити новий проєкт ({cat}). Про мій бізнес: ",
      "su_g": "Запит із noomo.dk",
      "your_project": "Ваш проєкт",
      "your_sub": "Створімо його разом",
      "nav_work": "Роботи",
      "nav_services": "Послуги",
      "pkg": "Підписка",
      "nav_about": "Про нас",
      "nav_contact": "Контакти",
      "nav_book": "Безкоштовна консультація",
      "cursor_more": "Детальніше",
      "hero_eb": "Цифрова студія для B2B · Данія",
      "hero_eb2": "Shopify · Корпоративні сайти · MVP-застосунки",
      "hero_1": "Онлайн-магазини.",
      "hero_2": "Сайти та лендинги.",
      "hero_3": "Застосунки.",
      "hero_tag": "Вчасно та за фіксованою ціною.",
      "cta_free": "Безкоштовна консультація",
      "why1_h": "Пакети з фіксованою ціною",
      "why1_t": "Ви знаєте повну вартість до старту, без жодних доплат.",
      "why2_h": "Власна вебстудія за підпискою",
      "why2_t": "Одна щомісячна оплата за оновлення та дрібні задачі.",
      "why3_h": "Оплата частинами",
      "why3_t": "Розділіть вартість проєкту на 3 щомісячні платежі.",
      "why4_h": "Запуск за тижні, а не місяці",
      "why4_t": "Чіткі терміни, і ваш новий сайт запрацює дуже швидко.",
      "work_h": "Вибрані роботи",
      "work_eb": "Живі сайти, застосунки та кейси",
      "live_website": "Живий сайт",
      "case_study": "Кейс",
      "view_proto": "Дивитися прототип ↗",
      "want_like": "Хочу так само",
      "live_projects": "Живі проєкти",
      "svc_h": "Що ми робимо",
      "svc_eb": "Три послуги та безкоштовний аудит. Фіксований обсяг, фіксована ціна, підтримка після запуску.",
      "excl_vat": "без ПДВ",
      "view_details_arrow": "Детальніше ↗",
      "audit_badge": "Бонус · Безкоштовно",
      "audit_h": "Безкоштовна консультація й аудит сайту",
      "audit_t": "30-хвилинна сесія із senior-дизайнером. Ми переглянемо ваш сайт чи магазин і надамо короткий письмовий аудит: швидкі покращення UX, швидкості та SEO, а також рекомендований наступний крок і оцінку за фіксованою ціною.",
      "free": "0 кр.",
      "min30": "30 хвилин",
      "audit_cta": "Отримати безкоштовний аудит",
      "pkg_eb": "Ціни в кронах без ПДВ. Кожен проєкт починається з безкоштовної консультації та пропозиції з фіксованою ціною.",
      "most_popular": "Найпопулярніший",
      "sub_title": "Ваша вебстудія",
      "total": "Разом",
      "timeline": "Терміни",
      "get_quote": "Отримати пропозицію",
      "view_details": "Детальніше",
      "sub_q": "Що таке «Ваша вебстудія»?",
      "sub_t": "Одна щомісячна підписка на будь-яку роботу: оновлення, нові сторінки й лендинги, банери та графіка для кампаній, зміни дизайну, SEO, додавання товарів і пріоритетна допомога. Мінімум 3 місяці.",
      "about_h": "Про NOOMO",
      "about_eb": "Студія",
      "stat1": "Фахівців",
      "stat2": "Років у цифровому дизайні",
      "stat3": "Фіксований обсяг, фіксована ціна",
      "mission_eb": "Наша місія",
      "contact_h": "Обговорімо ваш проєкт",
      "selected": "Обрано",
      "f_service": "Послуга",
      "f_sub": "Підписка",
      "f_budget": "Бюджет (кр., без ПДВ)",
      "f_message": "Повідомлення",
      "sent_eb": "Запит надіслано",
      "sent_msg": "Дякуємо! Відповімо протягом 24 годин.",
      "send_another": "Надіслати ще один запит",
      "f_time": "Зручний час",
      "slot_err": "Оберіть, будь ласка, часовий проміжок.",
      "f_topic": "Тема (за бажанням)",
      "call_eb": "Дзвінок замовлено",
      "call_another": "Замовити ще один дзвінок",
      "footer_copy": "© 2026 NOOMO",
      "close_x": "Закрити ✕",
      "who": "Для кого",
      "included": "Що входить",
      "how": "Як ми працюємо",
      "addons": "Додаткові опції",
      "related": "Схожі роботи",
      "min3": "Мінімум 3 місяці",
      "popup_quote": "Отримати пропозицію на цю послугу",
      "close_esc": "Закрити · Esc",
      "like_eb": "Хочу щось подібне до",
      "send_req": "Надіслати запит",
      "back_work": "← Назад до робіт",
      "about_body": "NOOMO — дизайн-орієнтована цифрова студія з головним офісом в Орхусі, Данія. Ми поєднуємо понад 15 років досвіду в UI/UX і вебдизайні з робочим процесом на основі AI, тож ви отримуєте дизайн і розробку рівня senior — швидше й за фіксованою ціною. Працюємо з ритейлерами, сервісними компаніями та стартапами по всій Європі.",
      "mission": "Ми робимо професійні цифрові продукти доступними для бізнесу, що зростає: зрозумілими, швидкими й створеними, щоб продавати.",
      "mission_acc": 6,
      "mission2": "Без громіздких агентських процесів. Без шаблонів під виглядом індивідуальної роботи. Лише сфокусована команда, яка доводить справу до кінця.",
      "contact_body": "Розкажіть, що вам потрібно. Перша консультація безкоштовна, а чітку пропозицію з фіксованою ціною ви отримаєте протягом 48 годин.",
      "ph_msg": "Розкажіть, що вам потрібно",
      "ph_topic": "Про що хочете поговорити?",
      "err_pre": "Запит не надіслано. Спробуйте ще раз або напишіть нам на",
      "svc_word": "Послуга",
      "case_want": "Хочете проєкт, як",
      "aria_top": "NOOMO — на початок",
      "aria_menu": "Меню",
      "aria_why": "Чому NOOMO",
      "aria_filter": "Фільтр робіт за послугою",
      "aria_sub": "Ваша вебстудія",
      "aria_contact_opts": "Способи зв'язку",
      "aria_remove": "Прибрати вибір",
      "aria_close": "Закрити",
      "aria_back": "Назад до робіт",
      "lang_aria": "Мова",
      "on_request": "Ціна за запитом",
      "cta_live": "Відкрити сайт ↗",
      "cta_play": "Відкрити в Google Play ↗",
      "aria_view_details": " — детальніше",
      "aria_open_case": "Відкрити кейс: ",
      "new_tab": " (відкривається в новій вкладці)",
      "no_fee": "Без щомісячної оплати",
      "sub_fmt": "Ваша вебстудія: {name}",
      "tab_form": "Надіслати запит",
      "tab_call": "Замовити дзвінок",
      "submit": "Надіслати запит",
      "sending": "Надсилаємо…",
      "call_btn": "Замовити дзвінок",
      "call_msg": "Дякуємо! Зателефонуємо вам {day} з {from} до {to}.",
      "like_msg": "Хочу щось подібне до {name}.",
      "f_day": "Бажаний день",
      "day_ph": "Оберіть дату",
      "err_day": "Оберіть, будь ласка, робочий день (пн–пт).",
      "prev_month": "Попередній місяць",
      "next_month": "Наступний місяць",
      "cat": {
        "web": "Корпоративні сайти та лендинги",
        "ecom": "E-commerce",
        "apps": "MVP та застосунки"
      },
      "blk": {
        "challenge": "Завдання",
        "solution": "Що ми створили",
        "thinking": "Дизайн-мислення",
        "impact": "Результат",
        "role": "Наша роль",
        "note": "Робочий процес з AI"
      },
      "meta": {
        "Role": "Роль",
        "Year": "Рік",
        "Scope": "Обсяг",
        "Platform": "Платформа",
        "Status": "Статус",
        "Client": "Клієнт",
        "Industry": "Галузь",
        "Duration": "Тривалість",
        "Team": "Команда",
        "Location": "Локація",
        "Type": "Тип"
      },
      "store": {
        "Visit live site": "Відкрити сайт",
        "Open app on Google Play": "Відкрити в Google Play",
        "Open interactive prototype": "Відкрити інтерактивний прототип"
      },
      "sub_names": {
        "Not included": "Без підписки",
        "Basic": "Start",
        "Growth": "Stable",
        "Pro": "Full Web Studio"
      },
      "plural": [
        "проєкт",
        "проєкти",
        "проєктів"
      ],
      "ct": {
        "Email": "Email",
        "Phone": "Телефон"
      },
      "svcOpts": {
        "ecom": "Інтернет-магазин",
        "web": "Корпоративні сайти та лендинги",
        "apps": "MVP і застосунок",
        "audit": "Безкоштовна консультація й аудит",
        "unsure": "Ще не знаю"
      },
      "f": {
        "name": "Ім'я",
        "name_ph": "Ваше ім'я",
        "name_err": "Вкажіть, будь ласка, ім'я.",
        "company": "Компанія",
        "company_ph": "Назва компанії",
        "email": "Email",
        "email_ph": "name@company.com",
        "email_err": "Вкажіть, будь ласка, коректний email.",
        "phone_opt": "Телефон (за бажанням)",
        "phone": "Телефон",
        "phone_err": "Вкажіть, будь ласка, номер телефону.",
        "email_opt": "Email (за бажанням)",
        "email_err2": "Перевірте, будь ласка, адресу email."
      },
      "months": [
        "Січень",
        "Лютий",
        "Березень",
        "Квітень",
        "Травень",
        "Червень",
        "Липень",
        "Серпень",
        "Вересень",
        "Жовтень",
        "Листопад",
        "Грудень"
      ],
      "wd": [
        "Пн",
        "Вт",
        "Ср",
        "Чт",
        "Пт",
        "Сб",
        "Нд"
      ],
      "care": {
        "Basic": [
          "До 10 робочих годин на місяць",
          "Дрібні правки й доопрацювання",
          "Зміни текстів, зображень і дизайну",
          "Асинхронно в Slack або email"
        ],
        "Growth": [
          "До 25 робочих годин на місяць",
          "Усе зі Start",
          "Регулярні оновлення",
          "Задачі з дизайну та розробки",
          "Задачі паралельно"
        ],
        "Pro": [
          "До 48 робочих годин на місяць",
          "Усе зі Stable",
          "Роботи над іншими вашими сайтами",
          "Будь-які види задач",
          "Пріоритетна підтримка"
        ]
      },
      "svc": {
        "ecom": {
          "title": "Інтернет-магазини",
          "pkgTitle": "Інтернет-магазин",
          "desc": "Інтернет-магазини та продуктові магазини на Shopify з додаванням товарів і постійною підтримкою.",
          "priceSub": "Без ПДВ",
          "timeline": "4–6 тижнів",
          "who": "Ритейлери, продуктові та спеціалізовані магазини, які хочуть продавати онлайн або піти з повільної платформи. Найкраще підходить, коли асортимент готовий і потрібен магазин, яким ваша команда зможе керувати щодня.",
          "pkgItems": [
            "Налаштування магазину Shopify та індивідуальний дизайн теми",
            "До 50 товарів",
            "Оплата (картка, Apple Pay, Google Pay)",
            "Налаштування доставки та ПДВ ЄС",
            "Mobile-first дизайн",
            "Базове SEO та аналітика",
            "Навчальна сесія"
          ],
          "includes": [
            "Налаштування магазину Shopify та індивідуальний дизайн теми",
            "До 50 товарів",
            "Оплата (картка, Apple Pay, Google Pay)",
            "Налаштування доставки та ПДВ ЄС",
            "Mobile-first дизайн",
            "Базове SEO",
            "Аналітика",
            "Навчальна сесія"
          ],
          "steps": [
            [
              "Дослідження",
              "Аналізуємо асортимент, оплату, доставку та налаштування ПДВ."
            ],
            [
              "Дизайн",
              "Індивідуальна тема Shopify, спроєктована mobile-first."
            ],
            [
              "Розробка",
              "Налаштування магазину, додавання товарів, оплати й аналітики."
            ],
            [
              "Запуск і підтримка",
              "Навчання, запуск і підписка «Ваша вебстудія» за бажанням."
            ]
          ],
          "addons": [
            "Ще 50 товарів",
            "Багатомовний магазин",
            "Інтеграції (ERP, POS, бухгалтерія)",
            "Фото товарів / AI-візуали"
          ]
        },
        "web": {
          "title": "Корпоративні сайти та лендинги",
          "pkgTitle": "Корпоративний сайт і лендинг",
          "desc": "Сайти компаній і лендинги, які пояснюють, чим ви займаєтеся, і приводять ліди.",
          "priceSub": "Без ПДВ · Лендинг",
          "altPre": "Корпоративний сайт ",
          "timeline": "2–4 тижні",
          "who": "Сервісні компанії, B2B-постачальники та маркетингові команди, які запускають кампанію чи нову пропозицію. Для бізнесу, чий нинішній сайт уже не пояснює, чим він займається.",
          "pkgItems": [
            "UX-структура та рекомендації щодо текстів",
            "Індивідуальний дизайн",
            "До 6 сторінок (корпоративний) або 1 довга сторінка (лендинг)",
            "CMS",
            "Контактні форми",
            "Налаштування SEO",
            "Налаштування хостингу та публікація"
          ],
          "steps": [
            [
              "Дослідження",
              "Цілі, аудиторія та сторінки, які справді потрібні."
            ],
            [
              "Структура і дизайн",
              "Карта сайту, рекомендації щодо текстів та індивідуальний дизайн."
            ],
            [
              "Розробка",
              "CMS, форми та SEO, протестовані на всіх екранах."
            ],
            [
              "Запуск і підтримка",
              "Хостинг, публікація та підтримка після запуску."
            ]
          ],
          "addons": [
            "Додаткова сторінка",
            "Копірайтинг",
            "Багатомовність"
          ]
        },
        "apps": {
          "title": "MVP-застосунки та стартапи",
          "pkgTitle": "MVP-застосунок для стартапу",
          "desc": "Клікабельні прототипи та готові до запуску MVP для засновників, яким треба протестувати, презентувати чи запустити ідею.",
          "priceSub": "Без ПДВ",
          "timeline": "Від 14-денного MVP-спринту",
          "who": "Засновники та інноваційні команди, яким потрібно перевірити ідею на реальних користувачах або показати інвесторам робочий продукт. Також для компаній, що запускають новий цифровий сервіс.",
          "pkgItems": [
            "Discovery-воркшоп",
            "User flows",
            "Клікабельний прототип",
            "UI-дизайн-система",
            "Front-end розробка MVP",
            "Демо для інвесторів",
            "Передача проєкту або подальша розробка"
          ],
          "steps": [
            [
              "Discovery-воркшоп",
              "Проблема, користувачі та найменший продукт, який варто створити."
            ],
            [
              "Флоу і прототип",
              "User flows і клікабельний прототип для ранніх тестів."
            ],
            [
              "Дизайн і розробка",
              "UI-дизайн-система та front-end MVP."
            ],
            [
              "Демо і передача",
              "Демо для інвесторів, далі передача або подальша розробка."
            ]
          ],
          "addons": [
            "Додатковий user flow",
            "Налаштування бекенду та бази даних",
            "Подальші спринти розробки"
          ]
        }
      },
      "cases": {
        "Mintra": {
          "sub": "Швидке психологічне полегшення та щоденне ментальне відновлення",
          "desc": "Щоденний застосунок на 5–10 хвилин для ментального відновлення: зняття тривоги, відстеження сну, афірмації та дихальні вправи, побудований навколо функції Brain Dump."
        },
        "Poshuk": {
          "sub": "Швидка дистанційна допомога в пошуку зниклих безвісти в Україні",
          "desc": "Один покроковий сценарій із 3 кроків, що формує готові до надсилання запити та QR-картку пошуку, яку будь-хто може відсканувати й відгукнутися."
        },
        "Gym App": {
          "sub": "AI-фітнес-коуч і платформа персональних тренувань",
          "desc": "Фітнес-платформа для iOS у темній естетиці, створена з нуля. AI формує персональні 14-денні плани тренувань під ціль і рівень користувача."
        },
        "iFranko": {
          "sub": "Редизайн інтернет-магазину Apple",
          "desc": "Повний редизайн магазину iFranko з темною, продуктово-орієнтованою системою, постійною навігацією за категоріями та сторінками товарів, що починаються з фото й ключових характеристик."
        },
        "Swiss Insurance": {
          "desc": "Швидкий та інтуїтивний AI-інтерфейс, що перетворив складну застарілу логіку й багатокрокові форми на зрозумілий 2-хвилинний сценарій без втрати відповідності вимогам."
        },
        "Interactive Social Game Up": {
          "desc": "Швидкий онбординг і зрозумілі соціальні механіки, що приводять гравців у live-гру за лічені секунди."
        },
        "Community App & Site for African Repatriates": {
          "head": "Застосунок і сайт спільноти для африканців, які повертаються додому",
          "desc": "Платформа спільноти, що поєднує знайомства, дружбу та бізнес-нетворкінг в одній екосистемі, де один профіль працює для всіх трьох цілей."
        },
        "Sefer": {
          "sub": "Музична спільнота для пошуку талантів і співпраці",
          "desc": "Музична спільнота, побудована навколо публічного профілю артиста, що працює як справжнє портфоліо: треки, кредити, стиль і доступність в одному місці."
        },
        "NxtShop": {
          "sub": "Б'юті-застосунок з AR-приміркою",
          "desc": "Застосунок для купівлі косметики з AR-приміркою: користувачі тестують макіяж на власному обличчі в реальному часі ще до покупки."
        },
        "DPlab": {
          "sub": "Редизайн сайту діджитал-агенції, Вільнюс",
          "desc": "Редизайн сайту діджитал-агенції у Вільнюсі: дизайн, веброзробка, маркетинг і SEO."
        },
        "Defend & Carry": {
          "sub": "Інтернет-магазин тактичного спорядження й оптики",
          "desc": "Інтернет-магазин спортивної оптики, тактичного й військового спорядження, мисливського екіпірування та окулярів."
        },
        "AGM Global Vision": {
          "sub": "E-commerce платформа для оборонного обладнання",
          "desc": "E-commerce платформа для американського постачальника тепловізорів, приладів нічного бачення та оборонного обладнання."
        },
        "Unifood": {
          "sub": "Редизайн сайту unifood.dk",
          "desc": "Редизайн сайту з фокусом на каталог для Unifood Import A/S — данського гуртового імпортера продуктів із понад 1 400 товарами. Клієнт знаходить товар у два кліки й надсилає замовлення на самовивіз."
        },
        "Kortical": {
          "sub": "Редизайн сайту",
          "desc": "Ми переробили головну сторінку AI Agents для десктопу й мобільних, а також мобільне меню, сторінку 404 і спільну дизайн-систему."
        },
        "Laurie Handlers": {
          "sub": "Редизайн сайту спікерки та авторки книжок про інтимність",
          "desc": "Темний, кінематографічний редизайн сайту міжнародної спікерки й авторки бестселерів про інтимність і стосунки."
        },
        "Subflow": {
          "sub": "Застосунок підписок для авторів",
          "desc": "Мобільна платформа, де автори продають підписки на свій контент, курси та спільноти."
        },
        "Georg Jensen": {
          "sub": "Концепт мобільного магазину",
          "desc": "Особистий концепт мобільного магазину Georg Jensen, побудований навколо фірмового золота 18 карат ручної роботи та сертифікованих екологічних діамантів."
        },
        "Ayvens": {
          "sub": "Концепт сторінки вживаного авто",
          "desc": "Концепт сторінки товару для вживаних авто Ayvens, що вміщує всю покупку в один спокійний скрол."
        }
      },
      "boot_eb": "Завантаження студії",
      "hint_scroll": "Гортайте далі",
      "hint_hover": "Наведіть для перегляду",
      "hint_click": "Натисніть, щоб відкрити",
      "boot_steps": [
        "Ініціалізація сітки",
        "Завантаження брифу",
        "Структура сторінок",
        "Типографічна шкала",
        "Вайрфрейми",
        "Привʼязка до сітки",
        "Дизайн-система",
        "Взаємодії",
        "Тестування",
        "Запуск"
      ],
      "menu": "Меню",
      "m_welcome": "Вітаємо в NOOMO",
      "m_type": "Тип",
      "m_focus": "Фокус",
      "m_loc": "Локація",
      "m_loc_v": "Орхус, Данія (HQ)",
      "theme_aria": "Темна тема",
      "sb_title": "Підписка",
      "sb_sub": "Дизайн і розробка за запитом",
      "sb_ps": "На місяць · без ПДВ · пауза чи скасування будь-коли",
      "sb_tl": "48 год на задачу **",
      "sb_aria": "Тип підписки",
      "sb_m1": "Соло",
      "sb_m2": "Команда",
      "sb_solo": [
        "Безліміт задач і правок на місяць",
        "1 активна задача за раз",
        "Кожна задача — за 48 годин",
        "Асинхронне спілкування в Slack або email"
      ],
      "sb_team": [
        "Безліміт задач і правок на місяць",
        "До 3 активних задач паралельно",
        "Дизайнер, розробник і проджект-менеджер",
        "Асинхронно + щотижневий дзвінок з менеджером"
      ],
      "sb_n1": "* Наступна задача стартує, щойно поточна здана.",
      "sb_n2": "** Для більшості задач. Великі ділимо на етапи по 48 годин.",
      "sb_msg": "Привіт, NOOMO! Мене цікавить підписка «{plan}».",
      "sb_msg_pk": "Привіт, NOOMO! Мене цікавить послуга {plan}.",
      "tiers": {
        "start": {
          "name": "Start",
          "sub": "Лендинг або невеликий сайт",
          "tl": "2–3 тижні",
          "items": [
            "До 3 сторінок",
            "Індивідуальний дизайн",
            "CMS і форма зв’язку",
            "Базове SEO"
          ]
        },
        "stable": {
          "name": "Stable",
          "sub": "Інтернет-магазин або сайт компанії",
          "tl": "4–6 тижнів",
          "items": [
            "Магазин на Shopify або до 8 сторінок",
            "UX-структура та індивідуальний дизайн",
            "Оплата, CMS та інтеграції",
            "SEO, аналітика і 30 днів підтримки"
          ]
        },
        "full": {
          "name": "Full",
          "sub": "Застосунок, MVP або велика платформа",
          "tl": "Від 6 тижнів",
          "items": [
            "Discovery-воркшоп і прототип",
            "UI-дизайн-система",
            "Front-end і передача",
            "60 днів підтримки"
          ]
        }
      },
      "sb_slots": "Задач одночасно",
      "sb_d1": "Один дизайнер-розробник працює над однією задачею за раз. Надсилайте скільки завгодно — виконуємо по черзі.",
      "sb_d2": "Команда веде до 3 задач паралельно, а проджект-менеджер керує чергою та пріоритетами.",
      "start_from": "Стартова ціна",
      "b2b_h": "Для бізнесу та агенцій",
      "b2b_p": "Для бізнесу та агенцій на постійній основі: оберіть Full Web Studio (2 160 кр./міс., до 48 годин) або домовимося про індивідуальні умови для більших обсягів.",
      "b2b_items": [
        "White-label для агенцій",
        "Виділена команда для вашого продукту",
        "NDA, договір і щомісячні рахунки",
        "Спільний Slack, Jira або Linear",
        "Дизайн-система і передача коду",
        "Пріоритетний SLA і постійний контакт"
      ],
      "b2b_pl": "Рекомендований план",
      "b2b_price": "Full Web Studio · 2 160 кр./міс.",
      "b2b_ps": "До 48 годин · або індивідуальні умови",
      "b2b_cta": "Обговорити співпрацю",
      "b2b_msg": "Привіт, NOOMO! Ми компанія/агенція і хочемо обговорити постійну співпрацю.",
      "subtiers": {
        "start": {
          "name": "Start",
          "desc": "Для дрібних правок і невеликих доопрацювань сайту.",
          "tl": "48 год на задачу",
          "items": [
            "Безліміт правок",
            "1 задача за раз",
            "Пауза чи скасування будь-коли",
            "Асинхронно в Slack або email"
          ]
        },
        "stable": {
          "name": "Stable",
          "desc": "Регулярні оновлення, дизайн і задачі з розробки.",
          "tl": "48 год на задачу",
          "items": [
            "Безліміт правок",
            "2 задачі паралельно",
            "Пауза чи скасування будь-коли",
            "Асинхронно в Slack або email"
          ]
        },
        "full": {
          "name": "Full Web Studio",
          "desc": "Ваша повноцінна вебстудія: доопрацювання сайту, роботи над іншими вашими сайтами, будь-які види задач.",
          "tl": "24–48 год на задачу",
          "items": [
            "Безліміт правок",
            "3 задачі паралельно",
            "Пауза чи скасування будь-коли",
            "Асинхронно в Slack або email",
            "Пріоритетна підтримка"
          ]
        }
      },
      "hero_trust": "Фіксовані ціни · Оплата частинами до 3 платежів · Власна вебстудія від 740 кр./міс.",
      "sub_line": "Підписка на будь-яку роботу",
      "sub_opt": "Опція за бажанням",
      "care_h": {
        "Basic": "До 10 год / міс.",
        "Growth": "До 25 год / міс.",
        "Pro": "До 48 год / міс."
      },
      "studio_q": "Вже маєте сайт?",
      "studio_t": "Отримайте власну вебстудію від {price}",
      "studio_cta": "Обрати план",
      "studio_msg": "Вітаю, NOOMO! У мене вже є сайт, і мене цікавить підписка «Ваша вебстудія».",
      "inst_line": "або 3 × {price}/міс.",
      "inst_note": "Фіксована ціна. Оплата одразу або до 3 щомісячних платежів.",
      "f_pay": "Оплата (за бажанням)",
      "pay": {
        "full": "Повна оплата",
        "inst": "Частинами (до 3 місяців)"
      },
      "cta_services": "Дивитися послуги",
      "cta_studio": "Власна вебстудія від 740 кр./міс.",
      "svc_note": "Фіксована ціна. Оплата одразу або до 3 щомісячних платежів.",
      "sb_hrs": "До {h} годин на місяць",
      "b2b_cta2": "Обрати Full Web Studio",
      "loc_h": "Наші локації",
      "loc_line": "Головний офіс в Орхусі, Данія",
      "locs": [
        {
          "n": "Данія",
          "c": "Орхус",
          "hq": true
        }
      ],
      "svc_more": "Детальніше →",
      "audit_b": [
        "Огляд UX, швидкості та SEO",
        "Короткий письмовий аудит",
        "Оцінка за фіксованою ціною"
      ]
    }
  }
};
