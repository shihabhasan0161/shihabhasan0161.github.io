import { motion } from "motion/react";
import React from "react";

interface ExperienceCardProps {
  logoUrl: string;
  title: string;
  subtitle?: string;
  period: string;
  description?: string[];
}

export default function ExperienceCard({
  logoUrl,
  title,
  subtitle,
  period,
  description,
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <section id="experience">
      <div
        className="flex cursor-pointer gap-4"
        onClick={() => description && setIsExpanded(!isExpanded)}
      >
        <img src={logoUrl} alt={title} className="h-12 w-12 rounded-full" />

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium">{title}</h3>
              {subtitle && <p className="text-xs">{subtitle}</p>}
            </div>
            <span className="text-xs text-zinc-500">{period}</span>
          </div>

          {description && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
              className="mt-2 overflow-hidden text-sm"
            >
              <ul className="list-disc space-y-1 pl-5">
                {description.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
