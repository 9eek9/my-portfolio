import { experience } from "@/data/experience";

export default function Experience() {
    return (
        <section id="experience" className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-semibold border-l-4 border-blue-600 pl-3">Experience</h2>
            <p className="mt-2 text-zinc-400">
                Enterprise experience with strong delivery ownership, now extended with applied AI/ML work.
            </p>

            <div className="mt-6 space-y-4">
                {experience.map((e) => (
                    <div
                        key={`${e.company}-${e.period}`}
                        className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6"
                    >
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <h3 className="text-base font-medium text-zinc-100">
                                    {e.title}
                                </h3>
                                <p className="mt-1 text-sm text-zinc-300">
                                    <span className="text-zinc-200">{e.company}</span> • {e.location}
                                </p>
                            </div>
                            <p className="text-sm text-zinc-400">{e.period}</p>
                        </div>

                        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                            {e.bullets.map((b) => (
                                <li key={b}>{b}</li>
                            ))}
                        </ul>

                        {e.tech?.length ? (
                            <div className="mt-4 flex flex-wrap gap-2">
                                {e.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full border border-zinc-800 bg-zinc-950/40 px-2 py-1 text-xs text-zinc-300"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
        </section>
    );
}
