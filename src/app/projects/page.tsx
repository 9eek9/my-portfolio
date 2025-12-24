import { projects } from "@/data/projects";

export default function ProjectsPage() {
    return (
        <main className="mx-auto max-w-5xl px-6 py-16">
            <h1 className="text-3xl font-semibold">Projects</h1>
            <p className="mt-2 text-zinc-400">
                Selected projects across full-stack delivery and applied AI/ML.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {projects.map((p) => (
                    <article
                        key={p.slug}
                        id={p.slug}
                        className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6"
                    >
                        <h2 className="text-base font-medium">{p.title}</h2>
                        <p className="mt-2 text-sm text-zinc-400">{p.tagline}</p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {p.stack.map((s) => (
                                <span key={s} className="rounded-full border border-zinc-800 px-2 py-1 text-xs text-zinc-300">
                                    {s}
                                </span>
                            ))}
                        </div>

                        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                            {p.highlights.map((h) => (
                                <li key={h}>{h}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </main>
    );
}
