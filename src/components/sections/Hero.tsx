import Link from "next/link";

export default function Hero() {
    return (
        <section className="mx-auto max-w-5xl px-6 pt-16 pb-10">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 shadow-sm">
                <p className="text-sm text-zinc-400">
                    Ontario, Canada • Open to Full-Stack / Backend / AI-enabled roles
                </p>

                <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Ei Ei Khaing
                </h1>

                <p className="mt-3 text-lg text-zinc-200">
                    Full-Stack Software Engineer (C#/.NET + React) with applied AI/ML
                    experience — building production-grade systems and delivering AI-powered
                    features at scale.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                        href="/projects"
                        className="rounded-xl border border-zinc-700 bg-zinc-950/30 hover:bg-zinc-900/40 px-4 py-2 text-sm font-medium text-zinc-200 hover:border-blue-600 hover:text-blue-300"
                    >
                        View Projects
                    </Link>

                    <a
                        href="#contact"
                        className="rounded-xl border border-zinc-700 bg-zinc-950/30 hover:bg-zinc-900/40 px-4 py-2 text-sm font-medium text-zinc-200 hover:border-blue-600 hover:text-blue-300"
                    >
                        Contact Me
                    </a>

                    <a
                        href="/EiEiKhaing_Resume.pdf"
                        className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:ring-offset-0"
                    >
                        Download Resume
                    </a>
                </div>


                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                    <a
                        className="text-blue-400 hover:text-blue-300"
                        href="https://github.com/9eek9/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                    <a
                        className="text-blue-400 hover:text-blue-300"
                        href="https://www.linkedin.com/in/ei-ei-khaing-42595028/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                    <a
                        className="text-blue-400 hover:text-blue-300"
                        href="mailto:ellenkhaing@gmail.com"
                    >
                        Email
                    </a>
                </div>
            </div>
        </section>
    );
}
