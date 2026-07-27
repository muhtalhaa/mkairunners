import Link from "next/link";

const LOGO_ASPECT_RATIO = 564 / 260;

interface SiteLogoProps {
  height?: number;
  className?: string;
}

export function SiteLogo({ height = 32, className = "" }: SiteLogoProps) {
  const width = Math.round(height * LOGO_ASPECT_RATIO);

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center pixel-transition ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo-mkai-runners.png"
        alt="MKAI Runners"
        width={width}
        height={height}
        className="block max-w-none"
        style={{ height: `${height}px`, width: `${width}px` }}
      />
    </Link>
  );
}
