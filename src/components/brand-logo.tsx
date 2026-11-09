type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className = "" }: BrandLogoProps) {
  return (
    <span
      className={`inline-flex items-baseline gap-0.5 text-[1.65rem] font-semibold tracking-tight text-text ${className}`}
    >
      plinq
      <span
        className="inline-block h-2 w-2 translate-y-[-2px] rounded-full bg-ocean-mint"
        aria-hidden
      />
    </span>
  );
}
