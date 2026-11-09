import { BrandLogo } from "./brand-logo";

const APP_URL = "https://app.plinq.no";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <BrandLogo className="text-xl" />
          <p className="mt-2 text-sm text-text-muted">
            Et produkt fra Nexos AS.
          </p>
        </div>
        <a
          href={APP_URL}
          className="text-sm font-medium text-ocean-mint transition-colors hover:text-[#8aefe4]"
        >
          app.plinq.no
        </a>
      </div>
    </footer>
  );
}
