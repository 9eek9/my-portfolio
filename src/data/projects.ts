export type Project = {
    slug: string;
    title: string;
    tagline: string;
    stack: string[];
    highlights: string[];
    links?: {
        github?: string;
        demo?: string;
    };
    featured?: boolean;
};

export const projects: Project[] = [
    {
        slug: "smart-travel-system",
        title: "Smart Travel System",
        tagline:
            "AI-powered trip planning platform using LLMs + real-world APIs for itineraries, sentiment insights, and language support.",
        stack: ["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL", "Gemini LLM", "Google Places API"],
        highlights: [
            "Designed a modular backend architecture that separates API, services, and AI orchestration layers to support scalability and future feature expansion.",
            "Integrated Gemini (2.5 Flash) for itinerary generation, travel Q&A, and language buddy features.",
            "Built REST APIs with FastAPI + PostgreSQL and connected end-to-end UI → API → AI output.",
            "Implemented review-based sentiment insights from destination data to support better decisions.",
        ],
        featured: true,
    },
    {
        slug: "bike-sharing-forecasting",
        title: "Bike Sharing Demand Forecasting",
        tagline: "End-to-end time-series forecasting with GRU + Optuna optimization + SHAP explainability.",
        stack: ["Python", "TensorFlow/Keras", "Optuna", "SHAP", "Pandas", "NumPy"],
        highlights: [
            "Built hourly forecasting pipeline with lag features and time encodings, evaluated with RMSE/MAE/R²/sMAPE.",
            "Optimized hyperparameters using Optuna (Random Search + TPE) and compared performance across trials.",
            "Explained global + local predictions using SHAP for interpretability and trust.",
        ],
        featured: true,
    },
    {
        slug: "fashion-image-classification",
        title: "Fashion Product Image Classification (CNN vs ViT)",
        tagline: "Computer vision comparison of CNN and Vision Transformer architectures in TensorFlow.",
        stack: ["Python", "TensorFlow/Keras", "CNN", "Vision Transformer (ViT)"],
        highlights: [
            "Implemented custom CNN and ViT models and compared accuracy, training efficiency, and generalization.",
            "Created preprocessing + augmentation workflow and analyzed trade-offs between architectures.",
            "Demonstrated where attention-based models can outperform CNNs on subtle category differences.",
        ],
        featured: false,
    },
    {
        slug: "en-fr-translation",
        title: "English → French Machine Translation",
        tagline: "NLP translation using Seq2Seq and Transformer approaches with BLEU evaluation.",
        stack: ["Python", "Seq2Seq (GRU/LSTM)", "Transformers", "HuggingFace", "BLEU"],
        highlights: [
            "Built Seq2Seq translation baselines and experimented with Transformer-based approaches.",
            "Evaluated translation quality using BLEU and performed error review.",
            "Benchmarked against pre-trained HuggingFace translation models for comparison.",
        ],
        featured: false,
    },
];
