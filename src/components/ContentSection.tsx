import type { ReactNode } from "react";

export function ContentSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      {eyebrow && <p className="text-eyebrow text-signal-orange mb-2">{eyebrow}</p>}
      {title && <h2 className="text-heading-3 text-frost mb-6">{title}</h2>}
      <div className="space-y-4 text-body text-mist">{children}</div>
    </section>
  );
}
