# CLAUDE.md

## Kontekst repozytorium
Notatki, materiały i projekty ze studiów podyplomowych „Architektura AI w Organizacji”:
projektowanie rozwiązań AI w przedsiębiorstwie, wdrożenia, bezpieczeństwo, governance.

Właściciel: Team Lead / senior engineer (automatyzacja, IAM, PAM) w sektorze bankowym.
Perspektywa: praktyczna, enterprise, z naciskiem na bezpieczeństwo i tożsamość (w tym tożsamości agentów AI).

## Struktura
- `notes/` – notatki z zajęć, jeden plik na zjazd/przedmiot: `notes/<przedmiot>/<RRRR-MM-DD>-<temat>.md`
- `materials/` – materiały od prowadzących (PDF, slajdy) – tylko do odczytu, nie edytuj
- `projects/` – projekty zaliczeniowe, każdy w osobnym folderze z własnym README.md
- `glossary.md` – słownik pojęć (AI governance, MLOps, RAG, agenci itp.)

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
