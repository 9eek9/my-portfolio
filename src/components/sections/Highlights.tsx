const items = [
    {
        title: "10+ years enterprise experience",
        desc: "Delivered production-grade systems across finance, telecom, and logistics with strong ownership and reliability.",
    },
    {
        title: "Full-stack delivery",
        desc: "API-driven architecture with C#/.NET or FastAPI, React/Next.js UI, and SQL/PostgreSQL data layers.",
    },
    {
        title: "Applied AI/ML",
        desc: "Forecasting, CV, NLP, and LLM integration with measurable evaluation and explainable outputs.",
    },
    {
        title: "Cloud & DevOps mindset",
        desc: "Azure exposure, GitHub, CI/CD fundamentals, and Docker-based workflows (project-based).",
    },
];

export default function Highlights() {
    return (
        <section className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-semibold border-l-4 border-blue-600 pl-3">Highlights</h2>
            <p className="mt-2 text-zinc-400">
                A hybrid profile: enterprise software engineering + practical AI/ML implementation.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {items.map((x) => (
                    <div key={x.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
                        <h3 className="text-base font-medium">{x.title}</h3>
                        <p className="mt-2 text-sm text-zinc-400">{x.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
