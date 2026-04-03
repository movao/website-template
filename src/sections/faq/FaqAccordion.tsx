'use client';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

interface FAQItem {
  _id: string;
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs?: FAQItem[];
  heading?: string;
  subheading?: string;
}

export default function FaqAccordion({
  faqs = [],
  heading = 'Häufige Fragen',
  subheading = 'Antworten auf die wichtigsten Fragen',
}: FaqAccordionProps) {
  return (
    <section id="faq" className="section-alt">
      <div className="container-narrow">
        <div className="section-header" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div className="max-w-3xl mx-auto" data-animate="fade-up">
          <Accordion className="space-y-3">
            {faqs.map((faq) => (
              <AccordionItem key={faq._id} value={faq._id} className="bg-card rounded-xl border border-border overflow-hidden px-6">
                <AccordionTrigger className="py-5 text-body-lg font-medium text-foreground hover:text-primary transition-colors no-underline hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
