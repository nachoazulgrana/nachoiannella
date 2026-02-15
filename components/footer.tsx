import { Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-4">
          <a
            href="https://twitter.com/niachito"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            aria-label="Twitter profile"
          >
            <Twitter className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/nachoiannella"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          Nacho Iannella &middot; UX Manager &middot; Buenos Aires
        </p>
      </div>
    </footer>
  );
}
