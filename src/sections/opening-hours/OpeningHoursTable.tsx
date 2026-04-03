'use client';

import { cn } from '@/lib/utils';

interface OpeningHour {
  _id: string;
  day: string;
  dayOrder: number;
  from: string;
  to: string;
  closed: boolean;
}

interface OpeningHoursTableProps {
  hours?: OpeningHour[];
  heading?: string;
  subheading?: string;
}

export default function OpeningHoursTable({
  hours = [],
  heading = 'Öffnungszeiten',
  subheading = 'Wir sind für Sie da',
}: OpeningHoursTableProps) {
  const today = new Date().getDay();
  const todayOrder = today === 0 ? 7 : today;

  return (
    <section id="hours" className="section-alt">
      <div className="container-narrow">
        <div className="max-w-lg mx-auto" data-animate="fade-up">
          <div className="section-header mb-10">
            <h2 className="section-heading">{heading}</h2>
            <p className="section-subheading mx-auto">{subheading}</p>
          </div>

          <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
            {hours.map((item) => {
              const isToday = item.dayOrder === todayOrder;

              return (
                <div
                  key={item._id}
                  className={cn(
                    'flex items-center justify-between px-6 py-4 border-b border-border/50 last:border-0',
                    isToday && 'bg-muted',
                  )}
                >
                  <div className="flex flex-col">
                    <span className={cn('text-base font-medium', isToday ? 'text-primary' : 'text-foreground')}>
                      {item.day}
                    </span>
                    {isToday && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full w-fit mt-0.5">
                        Heute
                      </span>
                    )}
                  </div>

                  <span
                    className={cn(
                      'text-base',
                      item.closed ? 'text-muted-foreground italic' : 'text-muted-foreground',
                    )}
                  >
                    {item.closed ? 'Geschlossen' : `${item.from} – ${item.to} Uhr`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
