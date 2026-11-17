# Prompt dla agenta AI: ankieta online Wielbłądex

Prompt przeznaczony dla agenta kodującego (np. Claude Code). Zawiera cel, pytania, wymagania RODO, technologię i oczekiwane rezultaty, dzięki czemu agent nie musi zgadywać.

```
Jesteś doświadczonym programistą full-stack. Zbuduj prostą ankietę online dla biura
podróży Wielbłądex, które organizuje wyprawy po Afryce w małych grupach (do 10 osób)
z polskojęzycznym pilotem i oferuje usługę Travel Concierge.

CEL ANKIETY
Dowiedzieć się, o czym marzą klienci planujący idealną podróż do Afryki i czego
oczekują od biura. Wypełnienie ma zająć maksymalnie 5 minut.

PYTANIA (w tej kolejności, jedna strona, pasek postępu)
1. Który styl wyprawy jest Ci najbliższy? (jednokrotny wybór)
   - Rowerem przez Afrykę (aktywnie, cały kontynent)
   - Z plecakiem w Serengeti (piesze trasy, obozy)
   - Afryka w obiektywie (fotosafari w Parku Krugera)
   - Afryka codziennie (życie z Masajami w Kenii)
   - Żaden z powyższych
2. Jakie tempo wyprawy preferujesz? (skala 1–5: spokojne → intensywne)
3. Ile dni chcesz podróżować? (do 7 / 8–10 / 11–14 / ponad 14)
4. Z kim podróżujesz? (sam/sama, z partnerem, z rodziną z dziećmi, z przyjaciółmi)
5. Jaki nocleg wybierasz? (namiot pod gwiazdami / lodge / hotel / mieszanka)
6. Jaki budżet na osobę bez lotów? (przedziały: do 8 tys., 8–12, 12–18, ponad 18 tys. zł)
7. W jakim okresie chcesz wyjechać? (wielokrotny wybór: kwartały)
8. Które usługi Travel Concierge są dla Ciebie ważne? (wielokrotny wybór: wizy
   i szczepienia, ubezpieczenie, loty i transfery, rezerwacje niespodzianek,
   kontakt 24/7 telefon/WhatsApp)
9. Jak bardzo prawdopodobne jest, że skorzystasz z Travel Concierge? (0–10)
10. Co najbardziej powstrzymuje Cię przed wyjazdem do Afryki? (wielokrotny wybór:
    bezpieczeństwo, zdrowie, koszt, organizacja, bariera językowa, inne)
11. [otwarte] Opisz w 2–3 zdaniach swoją wymarzoną podróż.
12. [otwarte] Czego oczekujesz od biura, żeby czuć się zaopiekowanym?
13. Przedział wieku (opcjonalnie).

RODO I PRYWATNOŚĆ
- Ankieta jest domyślnie anonimowa: nie zbieraj imienia, adresu IP ani ciasteczek
  śledzących. Bez zewnętrznych skryptów analitycznych.
- Na początku pokaż krótką klauzulę informacyjną i wymagaj zgody (checkbox).
- Na końcu opcjonalne pole e-mail „chcę dostać propozycję wyprawy” z osobną zgodą.
  E-mail zapisuj w OSOBNEJ tabeli, bez powiązania z odpowiedziami.
- W polach otwartych pokaż podpowiedź, żeby nie wpisywać danych osobowych.
- Odpowiedzi przechowuj maksymalnie 12 miesięcy (skrypt do usuwania starszych).

TECHNOLOGIA
- Backend: Python + FastAPI, baza SQLite. Frontend: jeden plik HTML + CSS + czysty JS.
- Kolorystyka zgodna z ulotką (piaskowy, pomarańczowy, ciemna zieleń).
- Wersja mobilna jako priorytet, dostępność (etykiety, kontrast, obsługa klawiaturą).
- Walidacja po stronie klienta i serwera, ochrona przed spamem (pole honeypot,
  limit zapytań).
- Panel administratora chroniony hasłem z pliku .env: liczba odpowiedzi
  i eksport do CSV (osobno odpowiedzi, osobno e-maile).
- Uruchomienie jednym poleceniem: docker compose up.

DO DOSTARCZENIA
- Kod, plik README (uruchomienie, konfiguracja, eksport), testy pytest
  zapisu odpowiedzi i walidacji.
- Plik sample_data.csv z 50 przykładowymi, fikcyjnymi odpowiedziami do testu analizy.

Zanim zaczniesz kodować, przedstaw krótki plan i strukturę katalogów.
Komentarze w kodzie po angielsku.
```

## Dlaczego prompt tak wygląda

| Element promptu | Uzasadnienie |
|---|---|
| Rola i kontekst biura | agent rozumie, dla kogo i po co buduje ankietę |
| Pełna lista pytań | agent nie wymyśla treści merytorycznych, tylko je implementuje |
| Sekcja RODO | prywatność jest wymaganiem, a nie dodatkiem na końcu |
| Konkretna technologia | prosty, łatwy do uruchomienia i sprawdzenia stos |
| Fikcyjne dane testowe | można przetestować analizę, zanim spłyną prawdziwe odpowiedzi |
| Plan przed kodowaniem | człowiek może skorygować kierunek, zanim agent napisze kod |
