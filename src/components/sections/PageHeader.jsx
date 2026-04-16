import Container from "../ui/Container";

export default function PageHeader({ title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="pt-32 pb-12 md:pt-44 md:pb-16 bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl" />

      <Container className="relative">
        {breadcrumbs.length > 0 && (
          <nav
            className="mb-4 text-sm text-emerald-300"
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center gap-1.5 flex-wrap">
              {breadcrumbs.map((bc, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  {i > 0 && <span className="text-emerald-500">/</span>}
                  {bc.path ? (
                    <a
                      href={bc.path}
                      className="hover:text-white transition-colors"
                    >
                      {bc.label}
                    </a>
                  ) : (
                    <span className="text-emerald-100">{bc.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">{subtitle}</p>
        )}
      </Container>
    </section>
  );
}
