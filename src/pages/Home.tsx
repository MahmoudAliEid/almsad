import { Hero } from "../components/Hero";
import { SEO } from "../components/SEO";
import { ServiceCard } from "../components/ServiceCard";
import { Button } from "../components/ui/button";
import { BadgeCheck, Wrench, ShieldCheck, Truck, ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Home() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === "ar";

    return (
        <div className="flex flex-col min-h-screen">
            <SEO
                title={t("home.seo.title")}
                description={t("home.seo.description")}
            />
            <Hero />

            {/* About Section Snippet */}
            <section className="py-24 md:py-40 bg-background relative overflow-hidden overflow-x-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -z-0 -translate-x-1/2 translate-y-1/2"></div>

                <div className="container px-4 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="max-w-5xl mx-auto"
                    >
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <motion.div variants={itemVariants} className="space-y-6 text-start">
                                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary font-bold text-sm border border-primary/10">
                                    {t("home.hero.badge")}
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-primary leading-tight">
                                    {t("home.hero.title_part1")} <br />{t("home.hero.title_part2")} <span className="text-accent underline decoration-8 underline-offset-[12px]">{t("home.hero.title_accent")}</span>
                                </h2>
                                <p className="text-xl text-foreground/80 leading-loose font-bold">
                                    {t("home.hero.description")}
                                </p>
                                <div className="flex items-center gap-8 pt-4">
                                    <div className="text-center">
                                        <div className="text-3xl font-black text-primary">+1500</div>
                                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">{t("home.hero.projects_completed")}</div>
                                    </div>
                                    <div className="text-center border-border border-s ps-8">
                                        <div className="text-3xl font-black text-primary">+20</div>
                                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">{t("home.hero.years_experience")}</div>
                                    </div>
                                </div>
                                <div className="pt-6">
                                    <Button variant="outline" size="lg" className="rounded-xl px-10 h-14 border-primary/20 hover:border-primary text-primary font-bold group" asChild>
                                        <Link to="/about">
                                            <span>{t("home.hero.explore_more")}</span>
                                            {isRtl ? (
                                                <ArrowLeft className="mr-3 h-5 w-5 group-hover:-translate-x-2 transition-transform" />
                                            ) : (
                                                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                                            )}
                                        </Link>
                                    </Button>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="relative">
                                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative group border border-primary/10">
                                    <img
                                        src="/precision-bg.png"
                                        alt={t("home.hero.precision_title")}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                    <div className="absolute bottom-8 right-8 left-8 p-6 bg-white/20 backdrop-blur-2xl rounded-2xl border border-white/30 shadow-2xl text-start">
                                        <div className="text-white font-black text-2xl mb-1 drop-shadow-md">{t("home.hero.precision_title")}</div>
                                        <div className="text-white-90 text-md font-bold">{t("home.hero.precision_desc")}</div>
                                    </div>
                                </div>
                                {/* Floating element */}
                                <div className={cn("absolute top-4 w-20 h-20 md:w-24 md:h-24 bg-accent rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(255,193,7,0.4)] rotate-12 hover:rotate-0 transition-transform cursor-default z-20", isRtl ? "left-4 md:-top-6 md:-left-6" : "right-4 md:-top-6 md:-right-6")}>
                                    <BadgeCheck className="h-10 w-10 md:h-12 md:w-12 text-primary" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Services Highlights */}
            <section className="py-20 md:py-32 bg-muted/50 relative">
                <div className="container px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-primary mb-6">{t("home.services_highlight.title")}</h2>
                        <p className="text-2xl text-foreground/80 font-bold">{t("home.services_highlight.subtitle")}</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <ServiceCard
                            index={0}
                            title={t("services.hydraulic.title")}
                            description={t("services.hydraulic.desc")}
                            icon={Wrench}
                            items={[t("services.hydraulic.item1"), t("services.hydraulic.item2"), t("services.hydraulic.item3")]}
                        />
                        <ServiceCard
                            index={1}
                            title={t("services.electrical.title")}
                            description={t("services.electrical.desc")}
                            icon={BadgeCheck}
                            items={[t("services.electrical.item1"), t("services.electrical.item2"), t("services.electrical.item3")]}
                        />
                        <ServiceCard
                            index={2}
                            title={t("services.mobile_service.title")}
                            description={t("services.mobile_service.desc")}
                            icon={Truck}
                            items={[t("services.mobile_service.item1"), t("services.mobile_service.item2"), t("services.mobile_service.item3")]}
                        />
                    </div>

                    <div className="mt-16 text-center">
                        <Button size="lg" className="group text-lg px-8 py-6" asChild>
                            <Link to="/services">
                                {t("home.services_highlight.view_all")}
                                {isRtl ? (
                                    <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                                ) : (
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                )}
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Warranty / Trust */}
            <section className="py-28 bg-primary relative overflow-hidden">
                {/* Visual texture */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                {/* Abstract shapes */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

                <div className="container px-4 flex flex-col items-center text-center relative z-10">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="w-24 h-24 bg-accent rounded-[2rem] flex items-center justify-center mb-10 rotate-6 hover:rotate-0 transition-all duration-500 shadow-[0_0_40px_rgba(255,193,7,0.4)]"
                    >
                        <ShieldCheck className="h-12 w-12 text-primary" />
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-black text-white mb-10 leading-tight max-w-5xl drop-shadow-2xl">
                        {t("home.warranty.title_part1")} <span className="text-accent underline decoration-8 underline-offset-[16px]">{t("home.warranty.title_accent")}</span> {t("home.warranty.title_part2")}
                    </h2>
                    <p className="max-w-4xl text-2xl md:text-3xl text-white font-bold mb-14 leading-relaxed drop-shadow-lg">
                        {t("home.warranty.description")}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <Button variant="accent" size="lg" className="h-16 px-12 text-xl font-bold shadow-2xl shadow-accent/20 hover:scale-105 active:scale-95 transition-all" asChild>
                            <Link to="/contact">{t("home.warranty.free_consultation")}</Link>
                        </Button>
                        <div className="flex items-center gap-4 px-6 border-white/20 sm:me-6 text-white/60 border-e">
                            <Phone className="h-6 w-6 text-accent" />
                            <div className="text-start">
                                <div className="text-xs font-bold uppercase tracking-wider">{t("home.warranty.call_us")}</div>
                                <div className="text-lg font-black text-white" dir="ltr">+966 50 000 0000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

