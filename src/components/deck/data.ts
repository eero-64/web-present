// Placeholders — replace with real data.
export const TEAM = [
  { name: "Пономарев Лев Николаевич", role: "Team Lead · Fullstack" },
  { name: "Антонов Артем Эдуардович", role: "Backend" },
  { name: "Петр Голов Павлович", role: "Backend" },
  { name: "Ворошилова Лика Сергеевна", role: "Design · Frontend" },
];

export const TEAM_NAME = "MIK CODERS";
export const CASE_TITLE = "Обработка аудио в текст в реальном времени";
export const CASE_TEXT = "Android-приложение для локальной расшифровки диалогов с разделением по спикерам и таймкодам.";

export const TECH = [
  { k: "01", t: "[Сбор аудио]", d: "[Захват потока с микрофона]" },
  { k: "02", t: "[ASR-модель]", d: "[Распознавание речи в реальном времени]" },
  { k: "03", t: "[Обработка]", d: "[NLP / постобработка текста]" },
  { k: "04", t: "[Вывод]", d: "[Интерфейс и интеграции]" },
];

export const SOLUTIONS = [
  {
    t: "100% On-Device тракт",
    d: "VAD, ASR (Zipformer-ru int8) и диаризация работают полностью на телефоне в авиарежиме. Ни одного байта звука в облако.",
    m: "0 B в сеть",
  },
  {
    t: "Диаризация до 6 спикеров",
    d: "pyannote 3.0 + 3D-Speaker ERes2Net с кластеризацией реплик и точными миллисекундными таймкодами (start_ms / end_ms).",
    m: "K ≤ 6",
  },
  {
    t: "Локальная LLM + RTF 0.12",
    d: "Qwen2-0.5B (GGUF через llama.cpp) расставляет интонационную пунктуацию без искажения слов; обработка в 8.5× быстрее аудио.",
    m: "0.12 RTF",
  },
];


// Fallback lines for the live-transcript box when the browser has no speech recognition.
export const FAKE_TRANSCRIPT = [
  "Добрый день, мы команда [TEAM_NAME].",
  "Сейчас я покажу, как работает наше решение.",
  "Модель распознаёт речь в реальном времени.",
  "Давайте пригласим кого-нибудь на сцену.",
  "Обратите внимание на задержку — она минимальна.",
  "Теперь немного о технологии под капотом.",
  "Спасибо за внимание!",
];

// Checkpoints: id, label, duration in seconds (total ≈ 105s).
export const CHECKPOINTS = [
  { id: "qr", label: "QR", dur: 10 },
  { id: "team", label: "Команда", dur: 11 },
  { id: "case", label: "Кейс", dur: 11 },
  { id: "tester", label: "Тестер", dur: 9 },
  { id: "demo", label: "Демо", dur: 24 },
  { id: "tech", label: "Технология", dur: 16 },
  { id: "solutions", label: "Решения", dur: 16 },
  { id: "end", label: "Финал", dur: 7 },
] as const;

// Phrase from the live transcript that morphs into an audio track on the tech slide.
export const TRACK_PHRASE = "Модель распознаёт речь в реальном времени";
export const TRACK_TEXT = "[Объяснение: текст снова превращается в звук — как модель разбирает аудиодорожку и восстанавливает из неё слова.]";
