# Praca domowa 1: ankieta marzeń o podróży

Przedmiot: Architektura systemów AI w organizacji, PJATK
Klient: Wielbłądex, biuro podróży (4 wyprawy po Afryce i usługa Travel Concierge)

## Zadanie

Napisać prompt, który zleci agentowi AI zakodowanie ankiety online: o czym marzą klienci Wielbłądexu, planując idealną podróż, i czego oczekują.

## Do oddania

| Nr | Element | Plik |
|---|---|---|
| 1 | Propozycja promptu | [prompt.md](prompt.md) |
| 2 | Opis zakresu zbieranych danych i sposobu analizy wyników | [zakres-i-analiza.md](zakres-i-analiza.md) |
| 3 | Omówienie pomysłu podczas laboratorium | (prezentacja ustna) |

## Główne założenia

- Ankieta zajmuje maksymalnie 5 minut: 10 pytań zamkniętych, 2 otwarte i 1 opcjonalne.
- Pytania nawiązują bezpośrednio do oferty z ulotki: 4 style wypraw i usługi Travel Concierge.
- RODO jest wpisane w prompt od początku, a nie doklejone na końcu: anonimowość domyślnie, e-mail dobrowolny i przechowywany osobno.
- Odpowiedzi otwarte analizuje LLM, a człowiek weryfikuje wybraną próbkę.
