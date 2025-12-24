export default function Education() {
    return (
        <section id="education" className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-semibold border-l-4 border-blue-600 pl-3">Education</h2>

            <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
                    <h3 className="text-base font-medium">
                        Fanshawe College — Graduate Certificate (AI & ML)
                    </h3>
                    <p className="mt-1 text-sm text-zinc-400">
                        London, Ontario • Jan 2025 - Dec 2025
                    </p>
                    <p className="mt-3 text-sm text-zinc-300">
                        GPA: 4.2 • Dean's Honour Roll
                    </p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
                    <h3 className="text-base font-medium">
                        Singapore Polytechnic — Specialist Diploma (Mobile Apps Development)
                    </h3>
                    <p className="mt-1 text-sm text-zinc-400">2017 - 2018</p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
                    <h3 className="text-base font-medium">
                        University of Computer Studies, Yangon — B.C.Sc (Hons.)
                    </h3>
                    <p className="mt-1 text-sm text-zinc-400">2001 - 2004</p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
                    <h3 className="text-base font-medium">Certifications</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                        <li>Microsoft Azure DevOps (Mar 2025)</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
