# ASAI-SDLC06, zjazd 1 – praca domowa 01: poziomy autonomii AI

Treść zadania: `../pracdom 01.md`

## Skala autonomii

| Poziom | Nazwa | Kto co robi |
|---|---|---|
| L1 | Podpowiadanie | AI podpowiada (autocomplete, chat), człowiek pisze i decyduje o wszystkim. |
| L2 | Asystent | AI generuje fragmenty kodu/testów/dokumentacji, człowiek projektuje, składa całość i przegląda każdą linię. |
| L3 | Agent z akceptacją | Agent samodzielnie przygotowuje kompletną zmianę (PR), człowiek ją przegląda i zatwierdza merge/wdrożenie. |
| L4 | Agent autonomiczny w guardrails | Agent sam wdraża zmianę, jeśli przejdzie CI; człowiek audytuje po fakcie. |
| L5 | Pełna autonomia | Brak człowieka w pętli – nie stosuję w żadnej US. |

## Kryteria

1. **Skutek błędu** – pieniądze, dane osobowe, regulator (KNF, DORA, RODO) czy tylko kosmetyka.
2. **Odwracalność** – czy zmianę da się szybko i bezpiecznie wycofać.
3. **Weryfikowalność automatyczna** – czy testy w CI/CD wystarczą, by stwierdzić poprawność.
4. **Dostępność wiedzy domenowej** – czy reguły są jawne w kodzie/testach, czy siedzą w głowie eksperta.
5. **Rozliczalność i tożsamość** – czy DORA/KNF wymaga, by konkretny człowiek odpowiadał za zmianę (agent = tożsamość nieludzka z uprawnieniami, wg CISO).

## Przypisanie

| US | Poziom | Uzasadnienie (jedno zdanie) |
|---|---|---|
| US-01 Etykieta w UI | **L4** | Zmiana kosmetyczna bez wpływu na logikę i API, w pełni weryfikowalna przez CI z regresją wizualną i trywialnie odwracalna, więc agent może ją wdrożyć sam, a człowiek tylko audytuje po fakcie. |
| US-02 Aktualizacja biblioteki (CVE, DORA) | **L3** | Podbicie wersji i uruchomienie testów to powtarzalna praca idealna dla agenta, ale krytyczna podatność, ryzyko złamania integracji z mainframe i wymóg DORA „kto co zmienił” wymagają, by merge zatwierdził i podpisał człowiek. |
| US-03 Automatyczna wypłata przez API | **L2** | Kod realizuje przelewy pieniędzy z kontrolą antyfraudową i śladem audytowym pod nadzorem KNF, więc błąd jest kosztowny i nieodwracalny – AI może pomóc w testach i boilerplate, ale logikę uprawnień, limitów i transakcyjności projektuje i przegląda człowiek. |
| US-04 Schemat bazy pod retencję (RODO) | **L3** | Migrację z UP/DOWN agent może przygotować i przetestować na kopii bazy, bo jest odwracalna i weryfikowalna, ale ryzyko blokad tabel na produkcji z danymi 1,2 mln klientów i danymi medycznymi wymaga decyzji DBA/architekta o wdrożeniu. |
| US-05 Raport Solvency II dla KNF | **L2** | Raport idzie do regulatora i wymaga formalnej akceptacji aktuariusza oraz IOD, a reguły aktuarialne i anonimizacja danych osobowych nie dają się w pełni zweryfikować testami, więc AI tylko wspiera pisanie zapytań i agregacji, a odpowiedzialność za wynik pozostaje przy człowieku. |
| US-06 Refaktoryzacja `LIKWSZK` (COBOL) | **L2** | Program liczy wszystkie wypłaty według 30 lat nieudokumentowanych wyjątków, których jedynym znawcą jest odchodzący na emeryturę Pan Zdzisław, więc AI powinno służyć do objaśniania kodu, dokumentowania reguł i budowy testów porównawczych na 10 000 szkód, a samą zmianę prowadzi człowiek. |

## Do dyskusji

- **US-01 → L4 tylko z guardrails:** agent ma osobną tożsamość z uprawnieniem wyłącznie do plików i18n/szablonów, a każda jego zmiana trafia do audytu (odpowiedź na uwagę CISO).
- **US-06:** największy zwrot z AI (argument dla CFO) to nie przepisanie kodu, tylko przechwycenie wiedzy Pana Zdzisława, zanim odejdzie.
