export function Hero() {
  return (
    <section className="animate-fade-in-up py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          UX Manager at Despegar
        </p>
        <h2 className="mb-6 text-4xl leading-tight font-bold text-foreground md:text-5xl text-balance">
          Making things happen while helping people grow.
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          I lead a product design team focused on{" "}
          <span className="text-foreground font-medium">
            Packages, Cart & Cross-selling
          </span>{" "}
          at Despegar. Previously designing at{" "}
          <span className="text-foreground font-medium">Mercado Libre</span> and{" "}
          <span className="text-foreground font-medium">Banco Galicia</span>.
          I believe the best products are built when teams grow alongside them.
        </p>
      </div>
    </section>
  );
}
