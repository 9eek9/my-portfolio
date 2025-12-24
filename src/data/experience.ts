export type ExperienceItem = {
    company: string;
    location: string;
    title: string;
    period: string;
    bullets: string[];
    tech?: string[];
};

export const experience: ExperienceItem[] = [
    {
        company: "Ernst & Young (EY)",
        location: "Singapore",
        title: "Senior Application Consultant",
        period: "Sep 2019 – Dec 2024",
        bullets: [
            "Led development of enterprise-scale C#/.NET applications for corporate tax and financial automation systems.",
            "Designed and enhanced backend services, business logic layers, and API integrations to improve maintainability and reliability.",
            "Integrated OCR/document intelligence solutions (ABBYY FlexiCapture, Microsoft Document Intelligence, GemBox) to reduce manual processing and improve data accuracy.",
            "Implemented CI/CD pipelines using GitHub and Azure to improve deployment reliability and release quality.",
            "Collaborated with business analysts, QA, and finance stakeholders in Agile environments and supported production stability.",
        ],
        tech: ["C#", ".NET", "SQL Server", "Azure", "GitHub", "CI/CD", "ABBYY", "Document Intelligence"],
    },
    {
        company: "StarHub",
        location: "Singapore",
        title: "Senior System Analyst",
        period: "Jun 2018 – Aug 2019",
        bullets: [
            "Developed and optimized SSRS and Power BI dashboards for operational and financial KPIs.",
            "Designed SQL Server data models, stored procedures, and ETL workflows for reporting pipelines.",
            "Translated business reporting needs into scalable backend solutions and improved data reliability.",
        ],
        tech: ["SQL Server", "SSRS", "Power BI", "ETL"],
    },
    {
        company: "Ryder Ascents Logistics",
        location: "Singapore",
        title: "Team Leader, IT",
        period: "Mar 2013 – Jun 2018",
        bullets: [
            "Led development of a Warehouse Management System (WMS) using C#/.NET and SQL to support high-volume operations.",
            "Built B2B integrations with SAP systems via XML/SOA and APIs to ensure reliable data synchronization.",
            "Mentored junior developers and managed release cycles, documentation, and system quality.",
        ],
        tech: ["C#", ".NET", "SQL", "SAP", "XML", "SOA", "APIs"],
    },
];
