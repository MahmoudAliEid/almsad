import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useEffect } from "react";
import { cn } from "../lib/utils";

export function Layout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const isHome = pathname === "/";

    return (
        <div className="flex flex-col min-h-screen font-sans bg-background text-foreground antialiased selection:bg-accent/30">
            <div className="relative flex flex-col min-h-screen">
                <Navbar />
                <main className={cn("flex-1", !isHome && "pt-28")}>
                    <Outlet />
                </main>
                <Footer />
            </div>
            {/* <WhatsAppButton /> */}
        </div>
    );
}
