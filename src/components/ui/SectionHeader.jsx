export default function SectionHeader({
  label,
  title,
  subtitle,
  center = true,
  light = false,
}) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? "text-center" : ""}`}>
      {label && (
        <span
          className={`inline-block mb-3 text-sm font-bold tracking-widest uppercase ${light ? "text-emerald-300" : "text-emerald-600"}`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${light ? "text-white" : "text-slate-900"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl ${center ? "mx-auto" : ""} ${light ? "text-slate-300" : "text-slate-600"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
