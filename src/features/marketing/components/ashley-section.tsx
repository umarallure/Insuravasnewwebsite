import { Phone, CalendarCheck, ArrowRight, FileText, Clock } from "lucide-react";
import type { FeatureCardItem } from "@/features/marketing/types/marketing.types";

const arcGradient =
  "linear-gradient(90deg, #f0a032 0%, #ee5a8a 20%, #a855f7 42%, #8456ff 58%, #4385ff 78%, #22d3ee 100%)";

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

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 md:h-80" aria-hidden="true">
          <div
            className="absolute left-1/2 top-16 h-[560px] w-[190%] max-w-none -translate-x-1/2 rounded-[50%] opacity-45 blur-3xl"
            style={{ background: arcGradient }}
          />
          <div
            className="absolute left-1/2 top-[76px] h-[560px] w-[170%] max-w-none -translate-x-1/2 rounded-[50%]"
            style={{ background: arcGradient }}
          />
          <div className="absolute left-1/2 top-[82px] h-[560px] w-[170%] max-w-none -translate-x-1/2 rounded-[50%] bg-[#0A0A0D]" />
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
