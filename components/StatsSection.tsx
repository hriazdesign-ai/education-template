import { stats } from "@/lib/content";

export default function StatsSection() {
  return (
    <section className="relative border-y border-primary-light/20 bg-primary">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(245,158,122,0.14)_0%,_transparent_35%,_transparent_65%,_rgba(245,158,122,0.14)_100%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <li key={stat.label} className="text-center lg:text-left">
              <p className="font-serif text-3xl font-medium text-white sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-white/85">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
