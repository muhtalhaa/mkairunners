const MKAI_RUNNERS_ASPECT_RATIO = 564 / 260;

export function SiteFooter() {
  const mkaiRunnersHeight = 40;
  const mkaiRunnersWidth = Math.round(
    mkaiRunnersHeight * MKAI_RUNNERS_ASPECT_RATIO
  );

  return (
    <footer className="border-t-2 border-tosca-muted/50 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo-mkai-runners.png"
          alt="MKAI Runners"
          width={mkaiRunnersWidth}
          height={mkaiRunnersHeight}
          className="block max-w-none"
          style={{
            height: `${mkaiRunnersHeight}px`,
            width: `${mkaiRunnersWidth}px`,
          }}
        />
        <p className="text-center font-sans text-xs leading-relaxed text-text-muted md:text-sm">
          Created by Muawin Sadr IT PPMKAI · Managed by Sehat Jasmani PPMKAI
        </p>
      </div>
    </footer>
  );
}
