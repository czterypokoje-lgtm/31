import { business } from "@/lib/business";

export function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={business.phoneHref}
      className={`inline-flex items-center justify-center rounded-sm bg-signal-orange px-6 py-3 text-on-orange text-label font-semibold hover:bg-orange-hover transition-colors ${className}`}
    >
      Anrufen {business.phoneDisplay}
    </a>
  );
}
