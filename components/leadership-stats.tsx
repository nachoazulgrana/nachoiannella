import { stats } from "@/lib/data";

export function LeadershipStats() {
  return (
    <section className="animate-fade-in-up animation-delay-200 py-12">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-border bg-card p-6 text-center"
          >
            <p className="font-display text-4xl font-bold text-foreground">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
