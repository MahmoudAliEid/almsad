import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const links = [
    { name: "الصفحة الرئيسية", href: "/" },
    { name: "من نحن", href: "/about" },
    { name: "خدماتنا", href: "/services" },
    { name: "رؤيتنا", href: "/vision" },
    { name: "تواصل معنا", href: "/contact" },
];

export function Navbar() {
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
                    ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-2"
                    : isHome
                        ? "bg-transparent border-transparent py-4 text-white"
                        : "bg-background/50 backdrop-blur-sm border-b border-transparent py-4"
            )}
        >
            <div className="container flex items-center justify-between px-4 md:px-8">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="h-10 w-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
                        M
                    </div>
                    <span className={cn(
                        "text-xl font-bold transition-colors",
                        (isScrolled || !isHome) ? "text-primary" : "text-white"
                    )}>
                        مركز المساعد المبدع
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className={cn(
                    "hidden md:flex md:items-center md:gap-1 p-1 rounded-full border transition-all",
                    (isScrolled || !isHome)
                        ? "bg-muted/50 border-border"
                        : "bg-white/5 backdrop-blur-sm border-white/10"
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
                                        ? (isScrolled || !isHome) ? "text-primary font-bold" : "text-accent font-bold"
                                        : (isScrolled || !isHome) ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className={cn(
                                            "absolute inset-0 rounded-full",
                                            (isScrolled || !isHome) ? "bg-primary/10" : "bg-white/20"
                                        )}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </Link>
                        );
                    })}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <Button variant="accent" className="font-bold shadow-lg shadow-accent/10 hover:shadow-accent/20" asChild>
                        <Link to="/contact">اطلب خدمة</Link>
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="flex items-center gap-2 md:hidden">
                    <Button variant="ghost" size="icon" asChild className={cn((isScrolled || !isHome) ? "text-primary" : "text-white")}>
                        <a href="tel:+966500000000"><Phone className="h-5 w-5" /></a>
                    </Button>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className={cn((isScrolled || !isHome) ? "text-primary" : "text-white")}>
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px]">
                            <div className="flex flex-col gap-8 py-8">
                                <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2" onClick={() => setIsOpen(false)}>
                                    <div className="h-10 w-10 bg-primary text-white rounded-lg flex items-center justify-center text-lg">M</div>
                                    المساعد المبدع
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
                                            {location.pathname === link.href && <ArrowLeft className="h-4 w-4" />}
                                        </Link>
                                    ))}
                                    <Button variant="accent" size="lg" className="w-full mt-6 font-bold" asChild onClick={() => setIsOpen(false)}>
                                        <Link to="/contact">اطلب خدمة الآن</Link>
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
