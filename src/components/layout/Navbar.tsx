"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Education", href: "/#education" },
    { label: "Contact", href: "/#contact" },
];

function classNames(...classes: Array<string | boolean | undefined>) {
    return classes.filter(Boolean).join(" ");
}

function getHashId(href: string) {
    const idx = href.indexOf("#");
    return idx >= 0 ? href.slice(idx + 1) : null;
}

export default function Navbar() {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState<string>("home");

    const isHomePage = pathname === "/";
    const isProjectsPage = pathname === "/projects";

    // Sections we want to highlight while scrolling on Home
    const sectionIds = useMemo(() => ["experience", "education", "contact"], []);

    useEffect(() => {
        // Only do scroll tracking on Home page
        if (!isHomePage) return;

        // Helper: set active to "home" near top
        const handleTop = () => {
            if (window.scrollY < 200) setActiveSection("home");
        };

        // Update from URL hash on load / hash changes
        const setFromHash = () => {
            const hash = window.location.hash?.replace("#", "");
            if (hash && sectionIds.includes(hash)) setActiveSection(hash);
            else handleTop();
        };

        setFromHash();

        const els = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        if (els.length === 0) {
            window.addEventListener("scroll", handleTop, { passive: true });
            return () => window.removeEventListener("scroll", handleTop);
        }

        // IntersectionObserver: choose section that is most visible / closest to top
        const observer = new IntersectionObserver(
            (entries) => {
                // If at top, keep "home"
                if (window.scrollY < 200) {
                    setActiveSection("home");
                    return;
                }

                // Get all intersecting entries and pick the one nearest to the top
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort(
                        (a, b) =>
                            (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0)
                    );

                if (visible.length > 0) {
                    const id = visible[0].target.id;
                    setActiveSection(id);
                }
            },
            {
                // This makes the active section switch a bit before it hits the very top
                root: null,
                threshold: 0.15,
                rootMargin: "-20% 0px -60% 0px",
            }
        );

        els.forEach((el) => observer.observe(el));

        window.addEventListener("hashchange", setFromHash);
        window.addEventListener("scroll", handleTop, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener("hashchange", setFromHash);
            window.removeEventListener("scroll", handleTop);
        };
    }, [isHomePage, sectionIds]);

    return (
        <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/70 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                {/* Brand */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="rounded-lg border border-zinc-800 bg-zinc-900/40 px-2 py-1 text-xs font-semibold text-zinc-200">
                        EK
                    </span>
                    <span className="text-sm font-medium text-zinc-100">Ei Ei Khaing</span>
                </Link>

                {/* Nav */}
                <nav className="hidden items-center gap-1 md:flex">
                    {navItems.map((item) => {
                        const hashId = getHashId(item.href);

                        // Active rules:
                        // - On /projects: Projects active
                        // - On / (Home): Home active when near top; otherwise activeSection highlights experience/education/contact
                        const isActive =
                            (isProjectsPage && item.href === "/projects") ||
                            (isHomePage &&
                                ((item.href === "/" && activeSection === "home") ||
                                    (hashId && activeSection === hashId)));

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={classNames(
                                    "rounded-lg px-3 py-2 text-sm transition",
                                    isActive
                                        ? "bg-blue-600 text-white"
                                        : "text-zinc-300 hover:bg-zinc-900/40 hover:text-white"
                                )}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <a
                        href="https://github.com/9eek9/"
                        target="_blank"
                        rel="noreferrer"
                        className="hidden rounded-lg border border-zinc-800 px-3 py-2 text-sm text-blue-400 hover:border-blue-600 hover:text-blue-300 hover:bg-zinc-900/40 sm:inline-flex"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ei-ei-khaing-42595028/"
                        target="_blank"
                        rel="noreferrer"
                        className="hidden rounded-lg border border-zinc-800 px-3 py-2 text-sm text-blue-400 hover:border-blue-600 hover:text-blue-300 hover:bg-zinc-900/40 sm:inline-flex"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="/#contact"
                        className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-500"
                    >
                        Contact
                    </a>
                </div>
            </div>

            {/* Mobile nav (simple) */}
            <div className="border-t border-zinc-800 md:hidden">
                <div className="mx-auto flex max-w-5xl gap-2 overflow-x-auto px-6 py-3">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="whitespace-nowrap rounded-lg border border-zinc-800 bg-zinc-900/30 px-3 py-2 text-sm text-zinc-200 hover:border-blue-600/50 hover:bg-zinc-900/60"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
