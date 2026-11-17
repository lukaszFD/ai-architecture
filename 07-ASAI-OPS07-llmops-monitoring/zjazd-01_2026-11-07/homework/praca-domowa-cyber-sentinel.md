# ASAI-OPS07, zjazd 1 – praca domowa: projekt Cyber Sentinel

- Przedmiot: LLMOps, ewaluacja jakości, monitoring i utrzymanie systemów AI
- Prowadzący: Mieczysław Suska
- Autor: Łukasz Dejko
- Forma: zgodnie z ustaleniem z prowadzącym, zamiast przygotowania środowiska – opis własnego projektu

## Czym jest Cyber Sentinel

**Cyber Sentinel** to mój projekt open source: zautomatyzowany, oparty na AI system bezpieczeństwa sieci, który zamienia surowy ruch DNS w decyzje.
Każda nowa domena widziana w sieci jest wzbogacana danymi threat intelligence (VirusTotal, abuse.ch, Shodan, urlscan.io, RDAP, crt.sh), oceniana regułami i przez agenta AI, a następnie – jeśli jest złośliwa – blokowana w Pi-hole i zgłaszana mailem.
System działa produkcyjnie na Raspberry Pi 5, wdrażany jest przez Ansible i Docker Compose, a sekrety trzyma w HashiCorp Vault.

## AI pipeline i RAG

- **AI pipeline (n8n):** workflow uruchamiany co minutę: konfiguracja z bazy → wybór obserwabla → bramka VirusTotal → enrichment CTI → deterministyczny scoring regułowy w PostgreSQL → **agent AI (Google Gemini)** → zapis werdyktu → akcja (blokada / alert).
- **RAG:** agent korzysta z narzędzia `historical_verdicts` – wyszukiwania podobieństwa w **pgvector** po wcześniejszych werdyktach (embeddingi Gemini), więc ocenia nową domenę w kontekście historii, a nie „od zera”.
- **Guardrails:** AI może skorygować wynik reguł tylko o ograniczoną wartość (`ai_max_deviation`), odpowiada w stałym schemacie JSON, a przy awarii modelu system zapisuje wynik regułowy (fallback).
- **Kolejni agenci:** Deep Recon (ponowna analiza podejrzanych domen na podstawie RDAP, historii certyfikatów i skanu strony – treść strony traktowana jako dane, nie instrukcje, ochrona przed prompt injection) oraz agent klasyfikujący domeny telemetryczne do publicznych blocklist.

## Odniesienie do LLMOps (elementy z wykładu)

| Element LLMOps | Jak to robię w Cyber Sentinel |
|---|---|
| Wybór modeli i dostępu | Gemini przez API, klucze w Vault, temperatura i model w konfiguracji |
| Zarządzanie promptami | Wersjonowane prompty w bazie (dokładnie jeden aktywny), diff w UI „AI Config” |
| Monitoring i obserwowalność | Prometheus + Grafana, log każdego wywołania API (`api_call_log`) |
| Ewaluacja | Audyt werdyktów: wynik reguł vs wynik AI, powód odchylenia, model i wersja promptu |
| Koszty | Budżet dzienny VirusTotal/API, alert przy 80% limitu |
| Bezpieczeństwo | Vault, least-privilege role w bazie, ochrona przed prompt injection, CodeQL, Trivy, OpenSSF Scorecard |
| Nadzór i zarządzanie | Append-only log zmian konfiguracji, Failure Guard wyłączający workflow po 10 błędach z rzędu |
| Wdrażanie i CI/CD | Ansible (jeden master playbook), Docker Compose z obrazami przypiętymi po digest, GitHub Actions |

## Rozwój

Projekt cały czas rozwijam (aktualnie wersja **v2.3.0**) i dodaję kolejne funkcje agentów AI – m.in. planowany jest agent monitorujący stan hosta (health agent) na bazie metryk z Prometheusa. Zagadnienia z tego przedmiotu (ewaluacja promptów, obserwowalność, kontrola kosztów) chcę wdrażać w nim na bieżąco.

## Linki

- Dokumentacja: https://lukaszfd.github.io/cyber-sentinel/
- Architektura: https://lukaszfd.github.io/cyber-sentinel/architecture/
- Repozytorium: https://github.com/lukaszFD/cyber-sentinel
- Workflowy n8n (AI pipeline): https://github.com/lukaszFD/cyber-sentinel/tree/main/config/n8n/workflows
