import { ServiceCard } from "../components/ServiceCard";
import { Wrench, Zap, Settings, ShoppingBag, Shield, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { useTranslation } from "react-i18next";

export default function Services() {
    const { t } = useTranslation();

    const services = [
        {
            title: t("services.hydraulic.title"),
            description: t("services.hydraulic.desc"),
            icon: Wrench,
            items: [
                t("services.hydraulic.item1"),
                t("services.hydraulic.item2"),
                t("services.hydraulic.item3"),
                t("services.hydraulic.item4"),
                t("services.hydraulic.item5"),
            ],
        },
        {
            title: t("services.electrical.title"),
            description: t("services.electrical.desc"),
            icon: Zap,
            items: [
                t("services.electrical.item1"),
                t("services.electrical.item2"),
                t("services.electrical.item3"),
                t("services.electrical.item4"),
            ],
        },
        {
            title: t("services.mechanical.title"),
            description: t("services.mechanical.desc"),
            icon: Settings,
            items: [
                t("services.mechanical.item1"),
                t("services.mechanical.item2"),
                t("services.mechanical.item3"),
                t("services.mechanical.item4"),
            ],
        },
        {
            title: t("services.parts.title"),
            description: t("services.parts.desc"),
            icon: ShoppingBag,
            items: [
                t("services.parts.item1"),
                t("services.parts.item2"),
                t("services.parts.item3"),
            ],
        },
        {
            title: t("services.warranty_card.title"),
            description: t("services.warranty_card.desc"),
            icon: Shield,
            items: [
                t("services.warranty_card.item1"),
                t("services.warranty_card.item2"),
                t("services.warranty_card.item3"),
            ],
        },
        {
            title: t("services.mobile_service.title"),
            description: t("services.mobile_service.desc"),
            icon: Truck,
            items: [
                t("services.mobile_service.item1"),
                t("services.mobile_service.item2"),
                t("services.mobile_service.item3"),
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen bg-background pt-12 pb-24">
            <SEO
                title={t("services.title")}
                description={t("services.subtitle")}
            />
            <div className="container px-4">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-24 space-y-6"
                >
                    <h1 className="text-5xl md:text-8xl font-black text-primary tracking-tighter">
                        {t("services.title")} <span className="text-accent italic">{t("services.title_accent")}</span>
                    </h1>
                    <div className="h-2 w-48 bg-accent mx-auto rounded-full mb-8 shadow-[0_0_20px_rgba(255,193,7,0.4)]" />
                    <p className="text-2xl md:text-3xl text-foreground font-bold max-w-4xl mx-auto leading-relaxed">
                        {t("services.subtitle")}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} index={index} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
