let ctx: AudioContext | null = null;

function play(frequency = 880, duration = 0.05) {
  if (typeof window === "undefined") return;
  try {
    ctx ??= new (window.AudioContext || (window as any).webkitAudioContext)();
    if (ctx.state === "suspended") ctx.resume();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = frequency;
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch {
    // Web Audio unavailable — fail silently, sound is a non-essential enhancement.
  }
}

export function useClickSound() {
  return {
    playAdd: () => play(880, 0.05),
    playTap: () => play(600, 0.04),
    playSuccess: () => {
      play(660, 0.08);
      setTimeout(() => play(990, 0.1), 90);
    },
    playRemove: () => play(320, 0.06),
  };
}
