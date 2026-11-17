// Question bank shared by index.html and results.html
const QUESTIONS = [
  { id: "q1", area: "Logika", type: "choice",
    text: "Wszystkie A są B. Niektóre B są C. Czy na pewno niektóre A są C?",
    options: ["Tak", "Nie, żadne A nie jest C", "Nie da się tego stwierdzić"], answer: "Nie da się tego stwierdzić" },
  { id: "q2", area: "Logika", type: "choice",
    text: "Jeśli pada deszcz, ulica jest mokra. Ulica jest mokra. Co wynika?",
    options: ["Pada deszcz", "Nie pada deszcz", "Nie wiadomo, czy padało"], answer: "Nie wiadomo, czy padało" },
  { id: "q3", area: "Wzorce", type: "number", text: "Jaka liczba jest następna: 2, 6, 12, 20, 30, ?", answer: 42 },
  { id: "q4", area: "Wzorce", type: "number", text: "Jaka liczba jest następna: 1, 1, 2, 3, 5, 8, ?", answer: 13 },
  { id: "q5", area: "Język", type: "choice", text: "Ptak : gniazdo = pszczoła : ?",
    options: ["kwiat", "ul", "miód", "łąka"], answer: "ul" },
  { id: "q6", area: "Język", type: "choice", text: "Które słowo nie pasuje do pozostałych?",
    options: ["jabłko", "gruszka", "marchew", "śliwka"], answer: "marchew" },
  { id: "q7", area: "Praktyka", type: "number",
    text: "Kij i piłka kosztują razem 110 zł. Kij jest o 100 zł droższy od piłki. Ile kosztuje piłka (zł)?", answer: 5 },
  { id: "q8", area: "Praktyka", type: "number",
    text: "5 maszyn robi 5 detali w 5 minut. Ile minut potrzebuje 100 maszyn na 100 detali?", answer: 5 },
];
