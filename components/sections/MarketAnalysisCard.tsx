"use client";

import { useMemo, useState } from "react";

export interface Candle {
  o: number;
  h: number;
  l: number;
  c: number;
}

export interface PeriodData {
  candles: Candle[];
  xLabels: string[];
}

export interface MarketAnalysisCardProps {
  title?: string;
  price?: string;
  change?: string;
  positive?: boolean;
  periods?: string[];
  data?: Record<string, PeriodData>;
}

function generateCandleData(n: number, offset: number): Candle[] {
  const candles: Candle[] = [];
  let price = 0.52 + (offset % 5) * 0.02;

  for (let i = 0; i < n; i++) {
    const t = i / n;

    let trend = 0;
    if (t < 0.18) trend = 0.009;
    else if (t < 0.28) trend = 0.002;
    else if (t < 0.78) trend = -0.007;
    else trend = 0.005;

    const s1 = ((i + offset) * 7 + 13) % 97;
    const s2 = ((i + offset) * 11 + 7) % 83;
    const noise = (s1 / 97) * 0.06 - 0.03;
    const wickAmp = (s2 / 83) * 0.025;

    const o = Math.max(0.04, Math.min(0.96, price));
    const c = Math.max(0.04, Math.min(0.96, price + trend + noise));
    const h = Math.min(0.98, Math.max(o, c) + wickAmp);
    const l = Math.max(0.02, Math.min(o, c) - wickAmp * 0.6);

    candles.push({ o, h, l, c });
    price = c;
  }
  return candles;
}

const DEFAULT_DATA: Record<string, PeriodData> = {
  "1H": {
    candles: generateCandleData(56, 0),
    xLabels: [
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
    ],
  },
  "4H": {
    candles: generateCandleData(56, 3),
    xLabels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
  },
  "1D": {
    candles: generateCandleData(56, 7),
    xLabels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  },
  "1W": {
    candles: generateCandleData(56, 11),
    xLabels: ["2024", "Q1", "Q2", "Q3", "Q4", "2025", "Q2", "Q3"],
  },
};

export default function MarketAnalysisCard({
  title = "Market Analysis Terminal",
  price = "$0.1250",
  change = "+4.20%",
  positive = true,
  periods = ["1H", "4H", "1D", "1W"],
  data = DEFAULT_DATA,
}: MarketAnalysisCardProps) {
  const [period, setPeriod] = useState(periods[0]);

  const { candles, xLabels } = useMemo(
    () => data[period] ?? DEFAULT_DATA["1H"],
    [data, period],
  );

  // SVG layout
  const W = 460,
    H = 210;
  const pad = { t: 12, r: 44, b: 28, l: 6 };
  const pw = W - pad.l - pad.r;
  const ph = H - pad.t - pad.b;

  const minP = Math.min(...candles.map((c) => c.l));
  const maxP = Math.max(...candles.map((c) => c.h));
  const range = maxP - minP || 0.01;

  const py = (p: number) => pad.t + ph * (1 - (p - minP) / range);
  const cw = pw / candles.length;
  const bw = Math.max(2, cw * 0.55);

  const gridLines = Array.from({ length: 5 }, (_, i) => ({
    y: pad.t + (ph / 4) * i,
    price: maxP - (range / 4) * i,
  }));

  const xLabelStep = Math.floor(candles.length / (xLabels.length - 1));

  return (
    <div className="relative w-full flex flex-col">
      {/* Glow */}
      <div className="absolute -inset-1 bg-gold/10 rounded-3xl sm:rounded-[2.5rem] blur-xl opacity-40" />

      <div className="relative flex flex-col h-full bg-[#0d0d0d]/90 backdrop-blur-2xl border border-white/10 rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-7 shadow-2xl gap-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-5 h-5 rounded-full bg-gold shrink-0" />
            <span className="text-white font-heading font-bold text-base sm:text-lg leading-none truncate">
              {title}
            </span>
          </div>
          <div className="flex gap-1 bg-white/5 border border-white/10 rounded-full p-1 shrink-0 font-heading">
            {periods.map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide transition-all ${
                  period === p
                    ? "bg-gold text-black shadow"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-3">
          <span className="text-white text-3xl sm:text-4xl font-heading font-bold leading-none">
            {price}
          </span>
          <span
            className={`text-[11px] px-2 py-0.5 rounded-full font-bold text-white ${
              positive ? "bg-[#8C6107]" : "bg-red-800"
            }`}
          >
            {change}
          </span>
        </div>

        {/* Chart */}
        <div className="flex-1 min-h-0">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            width="100%"
            height="100%"
            preserveAspectRatio="none"
          >
            {/* Horizontal grid lines */}
            {gridLines.map((gl, i) => (
              <g key={i}>
                <line
                  x1={pad.l}
                  y1={gl.y}
                  x2={W - pad.r}
                  y2={gl.y}
                  stroke="rgba(255,255,255,0.07)"
                  strokeWidth="1"
                />
                <text
                  x={W - pad.r + 4}
                  y={gl.y + 4}
                  fill="rgba(255,255,255,0.35)"
                  fontSize="9"
                  fontFamily="monospace"
                >
                  ${(0.09 + gl.price * 0.08).toFixed(4)}
                </text>
              </g>
            ))}

            {/* Vertical grid lines + X labels */}
            {xLabels.map((label, i) => {
              const x = pad.l + cw * (i * xLabelStep) + cw / 2;
              return (
                <g key={i}>
                  <line
                    x1={x}
                    y1={pad.t}
                    x2={x}
                    y2={H - pad.b}
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="1"
                  />
                  <text
                    x={x}
                    y={H - 6}
                    fill="rgba(255,255,255,0.35)"
                    fontSize="8.5"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    {label}
                  </text>
                </g>
              );
            })}

            {/* Candlesticks */}
            {candles.map((candle, i) => {
              const cx = pad.l + cw * i + cw / 2;
              const bodyTop = py(Math.max(candle.o, candle.c));
              const bodyBot = py(Math.min(candle.o, candle.c));
              const bodyH = Math.max(1, bodyBot - bodyTop);
              return (
                <g key={i}>
                  {/* Wick */}
                  <line
                    x1={cx}
                    y1={py(candle.h)}
                    x2={cx}
                    y2={py(candle.l)}
                    stroke="#E8A921"
                    strokeWidth="1"
                  />
                  {/* Body */}
                  <rect
                    x={cx - bw / 2}
                    y={bodyTop}
                    width={bw}
                    height={bodyH}
                    fill="#E8A921"
                    rx="0.5"
                  />
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}

