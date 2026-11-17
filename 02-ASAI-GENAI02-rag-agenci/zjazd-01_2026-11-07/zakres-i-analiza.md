# Zakres zbieranych danych i sposób analizy wyników

## 1. Kogo pytamy

Obecnych i potencjalnych klientów Wielbłądexu:
- osoby z newslettera,
- odwiedzających stronę www,
- uczestników bezpłatnych konsultacji w biurze.

## 2. Jakie dane zbieramy i po co

| Pytania | Typ | Co nam mówi |
|---|---|---|
| 1–7 | zamknięte | które wyprawy promować, jak je uszyć (długość, noclegi, termin, cena) |
| 8–9 | zamknięte | które usługi Concierge eksponować i czy klienci chcą za nie płacić |
| 10 | zamknięte | jakie obawy rozwiać w komunikacji |
| 11–12 | otwarte | język marzeń klientów do reklam, pomysły na nowe wyprawy |
| 13 | opcjonalne | segmentacja |

Pełna lista pytań znajduje się w pliku [prompt.md](prompt.md).

## 3. Gdzie trafiają odpowiedzi

- Baza SQLite w aplikacji ankiety.
- Eksport do CSV z panelu administratora: odpowiedzi i e-maile w osobnych plikach.
- Analiza w arkuszu albo w notebooku Pythona.

## 4. RODO i minimalizacja danych

- Zbieramy tylko to, co potrzebne do oferty. Bez imion, adresów IP i ciasteczek śledzących.
- Zgoda na przetwarzanie z klauzulą informacyjną na początku ankiety.
- E-mail jest dobrowolny, z osobną zgodą, i przechowywany oddzielnie, bez powiązania z odpowiedziami.
- Odpowiedzi są przechowywane maksymalnie 12 miesięcy.
- **Uwaga:** odpowiedzi otwarte mogą przypadkiem zawierać dane osobowe (imiona, telefony). Przed przekazaniem ich do LLM trzeba je wyczyścić. Trzeba też pamiętać, że **pseudonimizacja to nie anonimizacja**: jeśli zostaje jakikolwiek klucz pozwalający powiązać dane z osobą, nadal podlegają one RODO.
- Do analizy nie używamy darmowych planów API, w których dostawca może wykorzystywać przesłane dane do ulepszania swoich modeli.

## 5. Wskaźniki

| Wskaźnik | Jak liczymy | Do jakiej decyzji |
|---|---|---|
| Popularność wypraw | % wyborów każdego stylu; krzyżowo styl × z kim podróżujesz | które wyprawy promować i dla kogo |
| Ważność usług Concierge | % wskazań każdej usługi | co eksponować w ofercie Concierge |
| Skłonność do Concierge | jak w NPS: % odpowiedzi 9–10 minus % odpowiedzi 0–6 | czy rozwijać usługę |
| Budżet i długość | rozkład w podziale na style | czy ceny i długości wypraw trafiają w oczekiwania |
| Bariery | ranking wskazań | jakie obawy rozwiać w komunikacji |

## 6. Analiza odpowiedzi otwartych z pomocą LLM

1. Model proponuje 6–10 kategorii tematycznych na podstawie wszystkich odpowiedzi, np. „dzikie zwierzęta”, „kontakt z ludźmi”, „cisza i natura”, „komfort”.
2. Model przypisuje każdą odpowiedź do kategorii.
3. Człowiek sprawdza losowe 20 odpowiedzi i poprawia kategorie, jeśli trzeba.
4. Z każdej kategorii wybieramy 2–3 cytaty klientów do materiałów marketingowych.

## 7. Prezentacja wniosków

Jedna strona dla właściciela biura:
- 3–4 wykresy: popularność wypraw, usługi Concierge, bariery, budżet,
- lista konkretnych rekomendacji, np. „rodziny z dziećmi wybierają lodge, a nie namiot, więc warto dodać wariant rodzinny wyprawy do Serengeti”.
