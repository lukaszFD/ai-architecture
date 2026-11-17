# CLAUDE.md

## Kontekst repozytorium
Notatki, materiały i projekty ze studiów podyplomowych „Architektura AI w Organizacji”:
projektowanie rozwiązań AI w przedsiębiorstwie, wdrożenia, bezpieczeństwo, governance.

Właściciel: Team Lead / senior engineer (automatyzacja, IAM, PAM) w sektorze bankowym.
Perspektywa: praktyczna, enterprise, z naciskiem na bezpieczeństwo i tożsamość (w tym tożsamości agentów AI).

## Struktura
Repo jest podzielone per przedmiot (`NN-<KOD>-<nazwa>/`), a wewnątrz per zjazd:

```
<NN-KOD-przedmiot>/
├── README.md                 # kod, prowadzący, ECTS
├── zjazd-01_2026-11-07/      # zjazd-<NN>_<data pierwszego dnia zjazdu>
│   ├── notatki.md            # notatka z zajęć (format niżej)
│   ├── homework/             # praca domowa ZADANA na tym zjeździe
│   ├── materialy/            # materiały od prowadzącego – tylko do odczytu, nie edytuj
│   └── <ćwiczenie>/          # ćwiczenia z zajęć, np. test-inteligencji/
└── projekt/                  # projekt zaliczeniowy przedmiotu (jeśli jest), z własnym README.md
```

- Folder zjazdu zakładamy dopiero, gdy przedmiot faktycznie miał zajęcia na tym zjeździe (bez pustych folderów na zapas).
- Homework trafia do zjazdu, na którym został **zadany**, nie oddany.
- `glossary.md` (root) – słownik pojęć (AI governance, MLOps, RAG, agenci itp.)

Przedmioty: `01-ASAI-LLM01` fundamenty LLM · `02-ASAI-GENAI02` RAG/agenci · `03-ASAI-INT03` integracja enterprise ·
`04-ASAI-PM04` zarządzanie projektami · `05-ASAI-EVAL05` ewaluacja i koszty · `06-ASAI-SDLC06` AI w SDLC ·
`07-ASAI-OPS07` LLMOps · `08-ASAI-SEC08` security i governance · `09-ASAI-PROJ09` projekt końcowy.

### Harmonogram zjazdów
| Zjazd | Folder | Daty |
|---|---|---|
| I | `zjazd-01_2026-11-07` | 7–8 listopada 2026 |
| II | `zjazd-02_2026-11-21` | 21–22 listopada 2026 |
| III | `zjazd-03_2026-12-05` | 5–6 grudnia 2026 |
| IV | `zjazd-04_2026-12-19` | 19–20 grudnia 2026 |
| V | `zjazd-05_2027-01-09` | 9–10 stycznia 2027 |
| VI | `zjazd-06_2027-01-23` | 23–24 stycznia 2027 |
| VII | `zjazd-07_2027-03-06` | 6–7 marca 2027 (semestr 2) |
| VIII | `zjazd-08_2027-03-20` | 20–21 marca 2027 |
| IX | `zjazd-09_2027-04-10` | 10–11 kwietnia 2027 |
| X | `zjazd-10_2027-04-24` | 24–25 kwietnia 2027 |
| XI | `zjazd-11_2027-05-15` | 15–16 maja 2027 |
| XII | `zjazd-12_2027-06-05` | 5–6 czerwca 2027 |

## Zasady pracy
- Notatki piszemy po polsku; terminy techniczne zostawiamy po angielsku (np. RAG, guardrails, ITDR).
- Komentarze w kodzie po angielsku.
- Nie zmieniaj istniejących notatek ani kodu bez pytania – najpierw opisz, co chcesz zmienić i dlaczego.
- Nie refaktoruj kodu bez wyraźnej zgody.
- Nie ruszaj plików w `materials/`.
- Przy nowych pojęciach dopisuj je do `glossary.md` (krótka definicja + link do notatki, w której się pojawiły).
- Unikaj nadmiaru linków w dokumentacji – tylko te, które naprawdę coś wnoszą.
- Preferuj praktyczne, gotowe do użycia rozwiązania zamiast teorii.

## Format notatek
- Nagłówek: przedmiot, data, prowadzący.
- Sekcje: Kluczowe tezy / Szczegóły / Odniesienie do praktyki w banku (IAM, compliance, ryzyko) / Pytania otwarte.
- Diagramy w Mermaid, bezpośrednio w pliku .md.

## Git
- Commity małe i opisowe, po polsku, np. `notatki: zjazd 3 – governance modeli`.
- Nie commituj niczego, co zawiera dane firmowe lub poufne.
