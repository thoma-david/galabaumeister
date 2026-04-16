import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/25",
  secondary:
    "bg-white text-emerald-700 border-2 border-emerald-600 hover:bg-emerald-50",
  dark: "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/25",
  ghost: "text-emerald-700 hover:bg-emerald-50",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  to,
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
