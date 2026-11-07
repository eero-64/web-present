/** Empty live-transcript window (placeholder for the real ASR output). */
export function Transcript({ visible }: { visible: boolean }) {
  return (
    <div
      id="asr-box"
      className="fixed right-6 top-6 z-40 w-80 border border-neon/40 bg-background/70 p-4 backdrop-blur transition-all duration-700"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(-12px)" }}
    >
      <div className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em]">
        <span className="flex items-center gap-2 text-neon">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon glow" />
          ASR
        </span>
        <span className="text-muted-foreground">ru-RU</span>
      </div>
      <p className="min-h-[3rem] font-mono text-sm leading-relaxed text-muted-foreground">
        тут распознанный текст<span className="caret text-neon">▍</span>
      </p>
    </div>
  );
}
