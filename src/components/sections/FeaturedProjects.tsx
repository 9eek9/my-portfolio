import Link from "next/link";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
    const featured = projects.filter((p) => p.featured);

    return (
        <section className="mx-auto max-w-5xl px-6 py-10">
            <div className="flex items-end justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-semibold border-l-4 border-blue-600 pl-3">Featured Projects</h2>
                    <p className="mt-2 text-zinc-400">
                        A few projects that best represent my hybrid skill set.
                    </p>
                </div>
                <Link href="/projects" className="text-sm text-zinc-300 hover:text-white">
                    View all →
                </Link>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {featured.map((p) => (
                    <Link
                        key={p.slug}
                        href={`/projects#${p.slug}`}
                        className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 hover:bg-zinc-900/50"
                    >
                        <h3 className="text-base font-medium">{p.title}</h3>
                        <p className="mt-2 text-sm text-zinc-400">{p.tagline}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {p.stack.slice(0, 4).map((s) => (
                                <span key={s} className="rounded-full border border-zinc-800 px-2 py-1 text-xs text-zinc-300">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
