interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  accentColor?: "rose" | "gold";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  accentColor = "rose",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const accentBg = accentColor === "rose" ? "bg-rose" : "bg-gold";
  const marginAuto = align === "center" ? "mx-auto" : "";

  return (
    <div className={`mb-12 ${alignClass}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brown mb-4 text-balance">
        {title}
      </h2>
      <div
        className={`w-16 h-0.5 ${accentBg} ${marginAuto} mb-4`}
        role="presentation"
      />
      {subtitle && (
        <p className="text-charcoal/70 text-lg max-w-2xl mx-auto font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
}
