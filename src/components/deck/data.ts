// Placeholders — replace with real data.
export const TEAM = [
  { name: "[Имя Фамилия 1]", role: "Team Lead · Fullstack" },
  { name: "[Имя Фамилия 2]", role: "Backend" },
  { name: "[Имя Фамилия 3]", role: "Backend" },
  { name: "[Имя Фамилия 4]", role: "Design · Frontend" },
];

export const TEAM_NAME = "[TEAM_NAME]";
export const CASE_TITLE = "[Название кейса]";
export const CASE_TEXT = "[Короткое описание задачи кейса: что требовалось решить и для кого — 1–2 предложения.]";

export const TECH = [
  { k: "01", t: "[Сбор аудио]", d: "[Захват потока с микрофона]" },
  { k: "02", t: "[ASR-модель]", d: "[Распознавание речи в реальном времени]" },
  { k: "03", t: "[Обработка]", d: "[NLP / постобработка текста]" },
  { k: "04", t: "[Вывод]", d: "[Интерфейс и интеграции]" },
];

export const SOLUTIONS = [
  { t: "[Решение 1]", d: "[Что сделали и почему это работает]", m: "[XX%]" },
  { t: "[Решение 2]", d: "[Что сделали и почему это работает]", m: "[XX ms]" },
  { t: "[Решение 3]", d: "[Что сделали и почему это работает]", m: "[XX×]" },
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
