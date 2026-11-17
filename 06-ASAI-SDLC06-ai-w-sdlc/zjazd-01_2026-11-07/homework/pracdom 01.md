# Wykład 01, zadnia domowe

# Zadanie

Każdej z poniższych *user stories* przypisz jeden z poziomów autonomii AI. Podaj krótkie uzasadnienie, w którym wskaż jakimi kryteriami się kierowałeś. Bądź gotowy na dyskusję.

# Kontekst

**Polaris Towarzystwo Ubezpieczeń S.A.**

| **Profil**    | Polski ubezpieczyciel majątkowy: komunikacja (OC/AC), mieszkania, małe i średnie firmy. Na rynku od 1994 r.                                                                                                               |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Skala**     | ok. 1,2 mln klientów, 2 400 pracowników, ok. 310 tys. zgłoszeń szkód rocznie                                                                                                                                              |
| **IT**        | 180 osób: 120 wewnętrznych i 2 zewnętrznych dostawców. 14 zespołów produktowych i zespół utrzymania mainframe (6 osób, średnia wieku 58 lat)                                                                              |
| **Systemy**   | **Core polisowo-szkodowy na mainframe** (COBOL, lata 90., m.in. program `LIKWSZK`, który liczy wypłaty). **`polaris-claims`**: nowy serwis zgłoszeń szkód w Pythonie (2023). Aplikacja mobilna, portal agentów, infolinia |
| **Regulacje** | Nadzór KNF, **DORA**, **RODO** (zdjęcia szkód, dane medyczne przy szkodach osobowych)                                                                                                                                     |

**Sytuacja wyjściowa:**

- Konkurent uruchomił zgłaszanie szkody w aplikacji „w 15 minut, ze zdjęciami”. W Polaris zgłoszenie trwa średnio 2 dni, a wypłata 19 dni.
- Zarząd ogłosił program „AI w IT” i oczekuje „30% szybszego dostarczania” w ciągu roku.
- Trwa pilotaż: 40 licencji na asystenta AI w IDE. Ankieta pokazała, że **ok. 35% programistów korzysta prywatnie z ChatGPT/Claude** (shadow AI), także przy kodzie produkcyjnym.
- **CFO** jest sceptyczny: „Pokażcie mi zwrot, a nie liczbę linii kodu”.
- **CISO** jest ostrożny: „Każdy agent to nowa tożsamość z uprawnieniami. DORA wymaga, żebym wiedział, kto co zmienił”.
- **Pan Zdzisław**, główny ekspert od `LIKWSZK`, za kilka miesięcy przechodzi na emeryturę.

# User stories

### US-01: Poprawa etykiety w formularzu zgłoszenia szkody (UI)

- **Sformułowanie:** Jako **Agent Ubezpieczeniowy**, **chcę** mieć poprawnie sformułowaną etykietę przycisku w formularzu zgłoszenia szkody w portalu agenta, **aby** nie wprowadzać klientów w błąd i zachować spójność wizualną systemu.

- **Kontekst i Kryteria Akceptacji:**

  - Zmiana dotyczy poprawy literówki w pliku tłumaczeń (i18n) lub szablonie HTML w frontendzie serwisu *polaris-claims*.

  - Modyfikacja nie wpływa na logikę walidacji, strukturę danych ani wywołania API backendowego.

  - Zmiana przechodzi automatyczne testy budowania i regresji wizualnej w potoku CI/CD.

### US-02: Aktualizacja biblioteki w mikroserwisie pod kątem wymogów DORA

- **Sformułowanie:** Jako **Inżynier Bezpieczeństwa / DevOps**, **chcę** zaktualizować zewnętrzną zależność w serwisie *polaris-claims* do wersji wolnej od znanej luki podatności, **aby** spełnić wymogi rozporządzenia DORA i zabezpieczyć proces obsługi 310 tys. szkód rocznie przed cyberatakami.

- **Kontekst i Kryteria Akceptacji:**

  - Zaktualizowanie wersji biblioteki Python w konfiguracji projektu (`pyproject.toml` / `requirements.txt`) w odpowiedzi na alert bezpieczeństwa (CVSS > 9.0).

  - Zapewnienie kompatybilności wstecznej interfejsu integracyjnego łączącego mikroserwis z systemem mainframe.

  - Wszystkie automatyczne testy jednostkowe, integracyjne oraz skanowanie podatności w potoku CI/CD muszą zakończyć się wynikiem pozytywnym.

### US-03: Automatyzacja wypłaty odszkodowania przez API REST

- **Sformułowanie:** Jako **Likwidator Szkód**, **chcę** móc zlecać automatyczną wypłatę odszkodowania poprzez dedykowany endpoint API w serwisie *polaris-claims*, **aby** skrócić czas przekazania środków na konto poszkodowanego w prostych szkodach komunikacyjnych i mieszkaniowych.

- **Kontekst i Kryteria Akceptacji:**

  - Endpoint REST realizuje przelew środków po weryfikacji uprawnień użytkownika, limitów kwotowych oraz poprawności numeru rachunku.

  - Kod zapewnia pełną transakcyjność, walidację antyfraudową oraz zapis śladu audytowego zgodnego z wytycznymi KNF i dyrektywy IDD.

  - Wymagane jest 100% pokrycia kodu testami automatycznymi (dla ścieżki pozytywnej oraz scenariuszy błędów transakcyjnych).

### US-04: Rozszerzenie schematu bazy danych o retencję dokumentacji (RODO / NIS2)

- **Sformułowanie:** Jako **Architekt Danych**, **chcę** rozbudować relacyjny schemat bazy danych obsługującej portal agentów i bazę 1,2 mln klientów, **aby** bezpiecznie przechowywać dokumentację medyczną i zdjęcia szkód zgodnie z zasadami retencji RODO i ustawy o KSC.

- **Kontekst i Kryteria Akceptacji:**

  - Utworzenie nowych tabel, indeksem i kluczy obcych bez zatrzymywania dostępu do bazy (*zero-downtime deployment*).

  - Modyfikacja nie może wywoływać blokad tabel (*table locks*) paraliżujących pracę infolinii i zespołów produktowych w godzinach szczytu.

  - Przygotowanie i przetestowanie dwukierunkowego skryptu migracji (skrypt *UP* oraz skrypt wycofujący *DOWN*).

### US-05: Generowanie sprawozdania Solvency II dla regulatora (KNF)

- **Sformułowanie:** Jako **Oficer Compliance / Aktuariusz**, **chcę** generować zagregowany raport rezerw techniczno-ubezpieczeniowych na podstawie danych z mainframe oraz serwisu *polaris-claims*, **aby** terminowo dostarczyć sprawozdanie do KNF i uniknąć kar finansowych.

- **Kontekst i Kryteria Akceptacji:**

  - Zagregowanie i zaanonimizowanie danych historycznych i bieżących dotyczących 310 tys. szkód rocznie.

  - Zapewnienie pełnej spójności obliczeń z regułami aktuaryjnymi oraz wymogami ochrony danych osobowych (RODO).

  - Wynik działania zapytania/raportu musi zostać formalnie zweryfikowany i zaakceptowany przez aktuariusza oraz inspektora ochrony danych przed przekazaniem do organu nadzoru.

### US-06: Refaktoryzacja modułu obliczeniowego `LIKWSZK` na Mainframe

- **Sformułowanie:** Jako **Programista Mainframe**, **chcę** zrefaktoryzować kod programu `LIKWSZK` w języku COBOL, **aby** poprawić czytelność i wydajność wyliczania kwot odszkodowań przy zachowaniu 100% zgodności dotychczasowej logiki biznesowej.

- **Kontekst i Kryteria Akceptacji:**

  - Zachowanie identycznych wyników obliczeń dla wszystkich reguł i wyjątków taryfowych tworzonych od lat 90.

  - Brak naruszenia stabilności przetwarzania wsadowego (*batch processing*) oraz integracji z Pythonowym serwisem *polaris-claims*.

  - Pozytywna weryfikacja wyników na zbiorze porównawczym obejmującym próbkę min. 10 000 historycznych szkód.


