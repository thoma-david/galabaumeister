import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ } from "../../data/faq";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

export default function FAQSection({ items = FAQ, title, label }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-20 md:py-28">
      <Container narrow>
        <SectionHeader
          label={label || "Häufige Fragen"}
          title={title || "Häufig gestellte Fragen"}
          subtitle="Hier finden Sie Antworten auf die häufigsten Fragen rund um meine Leistungen."
        />

        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900">
                    {item.question || item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
                    <p className="text-slate-600 leading-relaxed">
                      {item.answer || item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
