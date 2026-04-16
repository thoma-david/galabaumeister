export default function Card({ children, className = "", hover = true }) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 md:p-8 border border-slate-100 ${hover ? "hover:shadow-xl hover:-translate-y-1 transition-all duration-300" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
