import { motion, type Variants } from "framer-motion";
import { Clock, Users, Award } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils";

export default function About() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === "ar";

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="min-h-screen bg-background pt-16 pb-32">
            <div className="container px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="max-w-6xl mx-auto space-y-32"
                >

                    {/* Powerful Header Section */}
                    <motion.div variants={itemVariants} className="text-center space-y-8">
                        <h1 className="text-6xl md:text-9xl font-black text-primary tracking-tighter">
                            {t("about.title")} <span className="text-accent underline decoration-[12px] underline-offset-[16px]">{t("about.title_accent")}</span>
                        </h1>
                        <div className="h-3 w-40 bg-accent mx-auto rounded-full shadow-[0_0_30px_rgba(255,193,7,0.5)]" />
                        <p className="text-3xl md:text-4xl text-foreground font-black max-w-4xl mx-auto leading-tight">
                            {t("about.subtitle")}
                        </p>
                    </motion.div>

                    {/* Main Content with Heavy Impact */}
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div variants={itemVariants} className="space-y-10 text-start">
                            <p className="text-2xl leading-relaxed text-foreground font-bold">
                                <span className="text-4xl font-black text-primary block mb-6 drop-shadow-sm">{t("about.content_title")}</span>
                                {t("about.content_p1")}
                                <br /><br />
                                {t("about.content_p2")}
                            </p>
                            <p className="text-2xl leading-relaxed text-foreground/90 font-bold py-4 bg-accent/5 border-s-8 border-accent ps-8 rounded-e-3xl">
                                {t("about.content_p3")}
                            </p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="relative group">
                            <div className={cn("absolute inset-0 bg-accent/30 rounded-[3rem] transform group-hover:rotate-0 transition-transform duration-1000 blur-md", isRtl ? "rotate-6" : "-rotate-6")} />
                            <div className="aspect-video rounded-[2.5rem] overflow-hidden border-[10px] border-white shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] relative z-10">
                                <img
                                    src="/about-workshop.png"
                                    alt={t("about.content_title")}
                                    className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent opacity-60" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Stats Cards with Power Theme */}
                    <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-10">
                        {[
                            { title: t("about.card_experience_title"), text: t("about.card_experience_text"), icon: Clock, color: "bg-primary text-white" },
                            { title: t("about.card_elite_title"), text: t("about.card_elite_text"), icon: Users, color: "bg-white border-4 border-primary/5 shadow-2xl" },
                            { title: t("about.card_warranty_title"), text: t("about.card_warranty_text"), icon: Award, color: "bg-white border-4 border-primary/5 shadow-2xl" }
                        ].map((card, i) => (
                            <Card key={i} className={`${card.color} border-none rounded-[3rem] transition-all hover:-translate-y-4 duration-500 overflow-hidden group`}>
                                <CardContent className="p-12 text-center space-y-6 pt-16">
                                    <div className={cn("w-20 h-20 bg-accent rounded-[2rem] flex items-center justify-center mx-auto group-hover:rotate-0 transition-all duration-500 shadow-xl shadow-accent/20", isRtl ? "rotate-6" : "-rotate-6")}>
                                        <card.icon className="h-10 w-10 text-primary" />
                                    </div>
                                    <h3 className={`text-3xl font-black ${card.color.includes('primary') ? 'text-accent' : 'text-primary'}`}>{card.title}</h3>
                                    <p className={`text-lg font-bold ${card.color.includes('primary') ? 'text-white/80' : 'text-foreground/80'}`}>{card.text}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </motion.div>

                </motion.div>
            </div>
        </div>
    );
}
