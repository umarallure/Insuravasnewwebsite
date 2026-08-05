import { Phone, CalendarCheck, ArrowRight, FileText, Clock } from "lucide-react";
import type { FeatureCardItem } from "@/features/marketing/types/marketing.types";

/** Planet-horizon rim: warm amber on the left, white at the apex, teal on the right. */
const arcGradient = [
  "linear-gradient(90deg",
  "rgba(120,58,18,0) 2%",
  "rgba(168,80,26,0.40) 10%",
  "rgba(222,118,44,0.88) 20%",
  "rgba(246,166,96,1) 30%",
  "rgba(255,226,201,1) 41%",
  "rgba(255,255,255,1) 50%",
  "rgba(214,245,242,1) 59%",
  "rgba(116,204,195,1) 70%",
  "rgba(58,148,143,0.85) 80%",
  "rgba(28,78,76,0.38) 90%",
  "rgba(18,48,48,0) 98%)"
].join(", ");

const iconMap = {
  "Answers at 2am": Phone,
  "Books the slot": CalendarCheck,
  "Transfers live": ArrowRight,
  "Logs everything": FileText,
  "Never burns a lead": Clock
};

interface AshleySectionProps {
  name: string;
  eyebrow?: string;
  headline: string;
  capabilities: FeatureCardItem[];
}

export function AshleySection({ name, eyebrow, headline, capabilities }: AshleySectionProps) {
  return (
    <section className="border-t border-border bg-[#0A0A0D]">
      <div className="relative overflow-hidden px-8 pb-52 pt-32 text-center md:pb-64 md:pt-40">
        <p className="text-[15px] font-medium leading-none text-[#8D93A0]">{eyebrow || "Meet your AI"}</p>
        <h2
          className="mt-3.5 text-[clamp(3.5rem,6.4vw,6rem)] font-semibold leading-none tracking-[-0.024em] text-[#FAFAFB]"
          style={{ fontSize: "clamp(3.5rem, 6.4vw, 6rem)", lineHeight: 1, letterSpacing: "-0.024em" }}
        >
          {name}
        </h2>
        <p
          className="mx-auto mt-5 max-w-[520px] text-[clamp(1.25rem,2.2vw,1.75rem)] font-medium leading-[1.35] text-[#8D93A0]"
          style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)", lineHeight: 1.35 }}
        >
          {headline}
        </p>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 overflow-hidden md:h-80" aria-hidden="true">
          {/* Diffuse coloured halo sitting above the rim. */}
          <div
            className="absolute left-1/2 top-[54px] h-[560px] w-[120%] max-w-none -translate-x-1/2 rounded-[50%] opacity-40 blur-2xl"
            style={{ background: arcGradient }}
          />
          {/* Rim source, revealed as a thin line by the dark ellipse below. */}
          <div
            className="absolute left-1/2 top-[70px] h-[560px] w-[110%] max-w-none -translate-x-1/2 rounded-[50%]"
            style={{ background: arcGradient }}
          />
          <div className="absolute left-1/2 top-[74px] h-[560px] w-[110%] max-w-none -translate-x-1/2 rounded-[50%] bg-[#0A0A0D]" />
          {/* White bloom concentrated at the apex. */}
          <div
            className="absolute left-1/2 top-[34px] h-[150px] w-[58%] max-w-none -translate-x-1/2 rounded-[50%] blur-2xl"
            style={{
              background: "radial-gradient(closest-side, rgba(255,255,255,0.30), rgba(255,255,255,0) 72%)"
            }}
          />
        </div>
      </div>

      <div className="grid border-t border-[rgba(255,255,255,0.09)] sm:grid-cols-2 lg:grid-cols-5">
        {capabilities.map((item, index) => {
          const Icon = iconMap[item.eyebrow as keyof typeof iconMap] || Phone;
          return (
            <article
              key={item.title}
              className={`border-border p-11 ${index > 0 ? "lg:border-l lg:border-r-0 lg:border-t-0 lg:border-b-0" : ""} ${index >= 1 ? "sm:border-t sm:border-l-0 lg:border-t-0" : ""}`}
            >
              <Icon className="h-5 w-5 text-[#A6ACB8]" aria-hidden="true" />
              <h4 className="mt-11 mb-2 text-[17px] font-medium leading-[1.35] text-[#FAFAFB]">{item.title}</h4>
              <p className="text-[14.5px] leading-[1.5] text-[#8D93A0]">{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
