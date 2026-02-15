import { timeline } from "@/lib/data";

export function CareerTimeline() {
  return (
    <section className="animate-fade-in-up animation-delay-300 py-16">
      <h2 className="mb-10 text-2xl font-bold text-foreground">Experience</h2>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute top-0 left-[7px] h-full w-px bg-border md:left-1/2 md:-translate-x-px" />

        <div className="flex flex-col gap-10">
          {timeline.map((item, index) => (
            <div
              key={`${item.company}-${item.period}`}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute top-1 left-0 z-10 md:left-1/2 md:-translate-x-1/2">
                <div
                  className={`h-[15px] w-[15px] rounded-full border-2 ${
                    item.current
                      ? "border-foreground bg-foreground"
                      : "border-muted-foreground bg-background"
                  }`}
                />
              </div>

              {/* Content */}
              <div
                className={`ml-8 w-full md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <div className="rounded-xl border border-border bg-card p-5">
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-medium text-muted-foreground">
                        {item.period}
                      </span>
                      {item.current && (
                        <span className="rounded-full bg-foreground px-2 py-0.5 text-xs font-medium text-background">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {item.company}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      {item.role}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
