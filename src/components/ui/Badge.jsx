export default function Badge({
  children,
  variant = "primary",
  className = "",
}) {
  const variants = {
    primary: "bg-emerald-100 text-emerald-800",
    dark: "bg-slate-100 text-slate-700",
    white: "bg-white/20 text-white backdrop-blur-sm",
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
