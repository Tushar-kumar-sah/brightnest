"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { Users, Zap, Award, ShieldCheck } from "lucide-react";

export interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  useCommas?: boolean;
  className?: string;
}

function formatNumber(val: number, decimals: number, useCommas: boolean): string {
  if (useCommas) {
    return val.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }
  return val.toFixed(decimals);
}

export function parseStatString(raw: string): {
  prefix: string;
  target: number;
  decimals: number;
  suffix: string;
  useCommas: boolean;
  isNumeric: boolean;
} {
  const match = raw.match(/^([^0-9]*?)([0-9][0-9,]*(?:\.[0-9]+)?)(.*)$/);
  if (!match) {
    return { prefix: "", target: 0, decimals: 0, suffix: raw, useCommas: false, isNumeric: false };
  }
  const prefix = match[1] || "";
  const numStr = match[2] || "0";
  const suffix = match[3] || "";
  const useCommas = numStr.includes(",");
  const cleanNumStr = numStr.replace(/,/g, "");
  const target = parseFloat(cleanNumStr);
  const decimalPart = cleanNumStr.split(".")[1];
  const decimals = decimalPart ? decimalPart.length : 0;

  return {
    prefix,
    target: isNaN(target) ? 0 : target,
    decimals,
    suffix,
    useCommas,
    isNumeric: !isNaN(target),
  };
}

export function CountUp({
  to,
  from = 0,
  duration = 2.2,
  delay = 0,
  decimals = 0,
  prefix = "",
  suffix = "",
  useCommas = false,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(from);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;

    let controls: { stop: () => void } | undefined;
    const timeout = setTimeout(() => {
      controls = animate(motionVal, to, {
        duration,
        ease: [0.16, 1, 0.3, 1], // Apple/Stripe exponential ease-out
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = `${prefix}${formatNumber(latest, decimals, useCommas)}${suffix}`;
          }
        },
      });
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      if (controls) controls.stop();
    };
  }, [isInView, to, from, duration, delay, decimals, prefix, suffix, useCommas, motionVal]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatNumber(from, decimals, useCommas)}
      {suffix}
    </span>
  );
}

export function AnimatedStatValue({
  value,
  delay = 0,
  duration = 2.2,
  className = "",
}: {
  value: string;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const parsed = parseStatString(value);
  if (!parsed.isNumeric) {
    return <span className={className}>{value}</span>;
  }
  return (
    <CountUp
      to={parsed.target}
      decimals={parsed.decimals}
      prefix={parsed.prefix}
      suffix={parsed.suffix}
      useCommas={parsed.useCommas}
      delay={delay}
      duration={duration}
      className={className}
    />
  );
}

export interface TelemetryStatItem {
  value?: string;
  target?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  useCommas?: boolean;
  label: string;
  subtext?: string;
  icon?: React.ComponentType<{ className?: string; size?: number }> | string;
}

interface StatsTelemetryStripProps {
  stats: TelemetryStatItem[];
  laserColorClass?: string;
  className?: string;
}

const defaultIcons = [Users, Zap, Award, ShieldCheck];

export function StatsTelemetryStrip({
  stats,
  laserColorClass = "via-[#9266fd]/60",
  className = "",
}: StatsTelemetryStripProps) {
  return (
    <div className={`pt-12 border-t border-white/10 relative ${className}`}>
      {/* Subtle horizontal laser track glow */}
      <div
        className={`absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent ${laserColorClass} to-transparent pointer-events-none`}
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 sm:gap-x-8 relative">
        {stats.map((stat, idx) => {
          const Icon =
            typeof stat.icon === "function"
              ? stat.icon
              : defaultIcons[idx % defaultIcons.length];
          const parsed =
            stat.target !== undefined
              ? {
                  prefix: stat.prefix || "",
                  target: stat.target,
                  decimals: stat.decimals || 0,
                  suffix: stat.suffix || "",
                  useCommas: Boolean(stat.useCommas),
                  isNumeric: true,
                }
              : parseStatString(stat.value || "0");

          return (
            <motion.div
              key={`${stat.label}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="relative px-3 sm:px-6 lg:px-8 py-3 group flex flex-col transition-all duration-300"
            >
              {/* Ambient hover bloom (soft radial spotlight, NO box borders) */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

              {/* Top Row: Micro Icon Badge & Status Beacon */}
              <div className="flex items-center gap-2.5 mb-3.5">
                <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-white/70 group-hover:bg-white animate-pulse transition-colors" />
              </div>

              {/* Hero Metric Number with Animated Counter */}
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-none">
                {parsed.isNumeric ? (
                  <CountUp
                    to={parsed.target}
                    decimals={parsed.decimals}
                    prefix={parsed.prefix}
                    suffix={parsed.suffix}
                    useCommas={parsed.useCommas}
                    delay={idx * 0.15}
                    duration={2.2}
                  />
                ) : (
                  <span>{stat.value}</span>
                )}
              </div>

              {/* Metric Label */}
              <div className="text-sm sm:text-base font-semibold text-white mt-3 group-hover:text-white transition-colors leading-snug">
                {stat.label}
              </div>

              {/* Subtext */}
              {stat.subtext && (
                <div className="text-xs text-white/80 font-light mt-1 leading-relaxed">
                  {stat.subtext}
                </div>
              )}

              {/* Vertical Hairline Divider for Desktop */}
              {idx < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-20 w-[1px] bg-gradient-to-b from-transparent via-white/15 to-transparent pointer-events-none" />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default StatsTelemetryStrip;
