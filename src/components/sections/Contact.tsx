export default function Contact() {
    return (
        <section id="contact" className="mx-auto max-w-5xl px-6 py-14">
            <h2 className="text-2xl font-semibold border-l-4 border-blue-600 pl-3">Contact</h2>
            <p className="mt-3 text-zinc-400">
                Want to chat about a role or a project? I'm happy to connect.
            </p>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 mt-5">
                <div className="mt-1 flex flex-wrap gap-3">
                    <a
                        href="mailto:ellenkhaing@gmail.com"
                        className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200"
                    >
                        Get in touch
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ei-ei-khaing-42595028/"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-zinc-900"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/9eek9/"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-zinc-900"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}


