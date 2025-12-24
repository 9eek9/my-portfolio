export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-zinc-800 bg-zinc-950">
            <div className="mx-auto max-w-5xl px-6 py-10">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm font-medium text-zinc-100">Ei Ei Khaing</p>
                        <p className="mt-1 text-sm text-zinc-400">
                            Full-Stack Software Engineer (.NET, React) | Applied AI/ML
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <a
                            href="mailto:ellenkhaing@gmail.com"
                            className="rounded-lg border border-zinc-800 px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-900/40 hover:text-white"
                        >
                            Email
                        </a>
                        <a
                            href="https://github.com/9eek9/"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg border border-zinc-800 px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-900/40 hover:text-white"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ei-ei-khaing-42595028//"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg border border-zinc-800 px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-900/40 hover:text-white"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-2 border-t border-zinc-800 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {year} Ei Ei Khaing. All rights reserved.</p>
                    <p className="text-zinc-500">Built with Next.js + TypeScript + Tailwind</p>
                </div>
            </div>
        </footer>
    );
}
