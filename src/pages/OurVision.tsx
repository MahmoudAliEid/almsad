import { motion } from "framer-motion";
import { Target, Eye, Rocket, Heart, Shield, Lightbulb, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { SEO } from "../components/SEO";
import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils";


export default function OurVision() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === "ar";

    return (
        <div className="min-h-screen bg-background">
            <SEO
                title={t("vision.title")}
                description={t("vision.subtitle")}
            />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/vision-bg.png"
                        alt={t("vision.title")}
                        className="w-full h-full object-cover opacity-30 scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-background" />
                </div>

                <div className="container relative z-10 px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
                            {t("vision.title")}
                        </h1>
                        <div className="h-2 w-32 bg-accent mx-auto rounded-full mb-8 shadow-[0_0_20px_rgba(255,193,7,0.5)]" />
                        <p className="text-2xl md:text-3xl text-white/90 font-bold max-w-3xl mx-auto leading-relaxed">
                            {t("vision.subtitle")}
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container px-4 py-32 space-y-40">

                {/* Mission & Vision Cards */}
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="relative p-12 rounded-[3rem] bg-white border-4 border-primary/5 shadow-2xl overflow-hidden h-full text-start">
                            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
                                <Target className="w-64 h-64" />
                            </div>
                            <div className="relative z-10 space-y-8">
                                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-xl">
                                    <Rocket className="h-10 w-10 text-accent" />
                                </div>
                                <h2 className="text-4xl font-black text-primary italic">
                                    {t("vision.mission_title")}
                                </h2>
                                <p className="text-xl leading-relaxed text-foreground font-bold">
                                    {t("vision.mission_text")}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="relative p-12 rounded-[3rem] bg-primary text-white shadow-2xl overflow-hidden h-full text-start">
                            <div className="absolute top-0 right-0 p-12 opacity-[0.05] group-hover:scale-110 transition-transform duration-700">
                                <Eye className="w-64 h-64" />
                            </div>
                            <div className="relative z-10 space-y-8">
                                <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center shadow-xl">
                                    <Target className="h-10 w-10 text-primary" />
                                </div>
                                <h2 className="text-4xl font-black text-accent italic">
                                    {t("vision.vision_title")}
                                </h2>
                                <p className="text-xl leading-relaxed text-white/90 font-bold">
                                    {t("vision.vision_text")}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Core Values */}
                <section className="space-y-20">
                    <div className="text-center space-y-6">
                        <h2 className="text-5xl md:text-7xl font-black text-primary tracking-tight">
                            {t("vision.values_title")}
                        </h2>
                        <div className="h-2 w-48 bg-accent mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Shield, title: t("vision.value1_title"), text: t("vision.value1_text"), color: "bg-blue-50 text-blue-600" },
                            { icon: Heart, title: t("vision.value2_title"), text: t("vision.value2_text"), color: "bg-red-50 text-red-600" },
                            { icon: Lightbulb, title: t("vision.value3_title"), text: t("vision.value3_text"), color: "bg-yellow-50 text-yellow-600" },
                            { icon: CheckCircle2, title: t("vision.value4_title"), text: t("vision.value4_text"), color: "bg-green-50 text-green-600" }
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="border-none shadow-xl rounded-[2.5rem] hover:-translate-y-2 transition-all duration-300 h-full">
                                    <CardContent className="p-10 text-center space-y-6">
                                        <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                                            <value.icon className="h-8 w-8" />
                                        </div>
                                        <h3 className="text-2xl font-black text-primary">
                                            {value.title}
                                        </h3>
                                        <p className="text-md font-bold text-muted-foreground leading-relaxed">
                                            {value.text}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Philosophy/Approach */}
                <section className="relative rounded-[4rem] bg-muted/50 p-12 md:p-24 overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 text-start">
                            <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight">
                                {t("vision.philosophy_title")}
                            </h2>
                            <p className="text-xl md:text-2xl text-foreground font-bold leading-relaxed">
                                {t("vision.philosophy_text")}
                            </p>
                            <div className="space-y-4">
                                {[
                                    t("vision.philosophy_item1"),
                                    t("vision.philosophy_item2"),
                                    t("vision.philosophy_item3")
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-primary font-black text-lg">
                                        <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
                                <img
                                    src="/philosophy-bg.png"
                                    alt={t("vision.philosophy_title")}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 w-24 h-24 bg-accent rounded-2xl flex items-center justify-center shadow-2xl z-20 -end-6">
                                <Lightbulb className="h-12 w-12 text-primary" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
