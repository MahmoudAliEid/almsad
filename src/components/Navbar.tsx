import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "../lib/utils";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === "ar";

    const links = [
        { name: t("nav.home"), href: "/" },
        { name: t("nav.about"), href: "/about" },
        { name: t("nav.services"), href: "/services" },
        { name: t("nav.vision"), href: "/vision" },
        { name: t("nav.contact"), href: "/contact" },
    ];

    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const isHome = location.pathname === "/";

    return (
        <motion.nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "bg-primary shadow-lg border-b border-white/5 py-1"
                    : isHome
                        ? "bg-transparent border-transparent py-3 text-white"
                        : "bg-primary/95 backdrop-blur-sm shadow-md py-2"
            )}
        >
            <div className="container flex items-center justify-between px-4 md:px-8">
                {/* Logo */}
                <Link to="/" className="flex items-center group">
                    <img
                        src="/logo.png"
                        alt={t("nav.home")}
                        className="h-16 sm:h-16 md:h-20 lg:h-24 w-auto object-contain transition-all duration-500 group-hover:scale-105 drop-shadow-xl mix-blend-screen"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className={cn(
                    "hidden md:flex md:items-center md:gap-1 p-1 rounded-full border transition-all",
                    (isScrolled || !isHome)
                        ? "bg-black/80 border-white/20 backdrop-blur-xl shadow-2xl"
                        : "bg-white/10 backdrop-blur-xl border-white/20"
                )}>
                    {links.map((link) => {
                        const isActive = location.pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-medium rounded-full transition-colors",
                                    isActive
                                        ? "text-accent font-bold"
                                        : "text-white"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className={cn(
                                            "absolute inset-0 rounded-full",
                                            "bg-accent/20"
                                        )}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className={cn(
                                    "relative z-10",
                                    isActive && "drop-shadow-[0_0_12px_rgba(255,193,7,0.8)]"
                                )}>{link.name}</span>
                            </Link>
                        );
                    })}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <LanguageSwitcher />
                    <Button variant="accent" className="font-bold shadow-lg shadow-accent/10 hover:shadow-accent/20" asChild>
                        <Link to="/contact">{t("nav.request_service")}</Link>
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="flex items-center gap-2 md:hidden">
                    <LanguageSwitcher />
                    <Button variant="ghost" size="icon" asChild className={cn((isScrolled || !isHome) ? "text-white" : "text-white")}>
                        <a href="tel:+966500000000"><Phone className="h-5 w-5" /></a>
                    </Button>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className={cn((isScrolled || !isHome) ? "text-white" : "text-white")}>
                                <Menu className="h-6 w-6 " />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side={isRtl ? "right" : "left"} className="w-[300px]">
                            <div className="flex flex-col gap-8 py-8">
                                <Link to="/" className="w-fit mb-6" onClick={() => setIsOpen(false)}>
                                    <img
                                        src="/logo.png"
                                        alt={t("nav.home")}
                                        className="h-20 w-auto object-contain drop-shadow-lg mix-blend-screen"
                                    />
                                </Link>
                                <div className="flex flex-col gap-2">
                                    {links.map((link) => (
                                        <Link
                                            key={link.href}
                                            to={link.href}
                                            className={cn(
                                                "text-lg font-medium px-4 py-3 rounded-lg transition-colors flex items-center justify-between group",
                                                location.pathname === link.href
                                                    ? "bg-primary/10 text-primary font-bold"
                                                    : "text-muted-foreground hover:bg-muted"
                                            )}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                            {location.pathname === link.href && (isRtl ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />)}
                                        </Link>
                                    ))}
                                    <Button variant="accent" size="lg" className="w-full mt-6 font-bold" asChild onClick={() => setIsOpen(false)}>
                                        <Link to="/contact">{t("nav.request_service_now")}</Link>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.nav>
    );
}
