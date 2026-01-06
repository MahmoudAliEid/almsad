import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { SEO } from "../components/SEO";
import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils";

export default function Contact() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === "ar";

    return (
        <div className="min-h-screen bg-background pt-16 pb-32">
            <SEO
                title={t("contact.title")}
                description={t("contact.desc")}
            />
            <div className="container px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20 space-y-6"
                >
                    <h1 className="text-5xl md:text-8xl font-black text-primary tracking-tighter">
                        {t("contact.title")} <span className="text-accent underline decoration-8 underline-offset-8">{t("contact.title_accent")}</span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-foreground/80 font-bold max-w-3xl mx-auto">
                        {t("contact.subtitle")}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="border-none shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden">
                            <CardContent className="p-12 space-y-10">
                                <div className="space-y-2 text-start">
                                    <h2 className="text-3xl font-black text-primary">{t("contact.form_title")}</h2>
                                    <p className="text-lg text-muted-foreground font-bold">{t("contact.form_subtitle")}</p>
                                </div>

                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <label className="text-md font-black text-primary block text-start">{t("contact.form_name")}</label>
                                            <Input placeholder={t("contact.form_name_placeholder")} className="h-14 rounded-2xl bg-muted/50 border-none focus-visible:ring-accent text-lg" />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-md font-black text-primary block text-start">{t("contact.form_phone")}</label>
                                            <Input placeholder={t("contact.form_phone_placeholder")} className="h-14 rounded-2xl bg-muted/50 border-none focus-visible:ring-accent text-lg" />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-md font-black text-primary block text-start">{t("contact.form_service")}</label>
                                        <Input placeholder={t("contact.form_service_placeholder")} className="h-14 rounded-2xl bg-muted/50 border-none focus-visible:ring-accent text-lg" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-md font-black text-primary block text-start">{t("contact.form_message")}</label>
                                        <Textarea placeholder={t("contact.form_message_placeholder")} className="min-h-[150px] rounded-2xl bg-muted/50 border-none focus-visible:ring-accent text-lg resize-none" />
                                    </div>
                                    <Button className="w-full h-16 text-xl font-black rounded-2xl bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 transition-all group">
                                        {t("contact.form_submit")}
                                        <Send className={cn("h-6 w-6 transition-transform group-hover:scale-110 ms-3", isRtl ? "-rotate-45" : "rotate-45")} />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Contact Info & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-10"
                    >
                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { icon: Phone, title: t("contact.call_us"), detail: "+966 50 123 4567", color: "text-blue-600 bg-blue-50" },
                                { icon: Mail, title: t("contact.email_us"), detail: "info@almsad.com", color: "text-red-600 bg-red-50" },
                                { icon: MapPin, title: t("contact.visit_us"), detail: t("contact.address_detail"), color: "text-green-600 bg-green-50" },
                                { icon: Clock, title: t("contact.opening_hours"), detail: t("contact.opening_hours_detail"), color: "text-amber-600 bg-amber-50" }
                            ].map((item, i) => (
                                <Card key={i} className="border-none shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-shadow">
                                    <CardContent className="p-8 flex items-start gap-5">
                                        <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm`}>
                                            <item.icon className="h-7 w-7" />
                                        </div>
                                        <div className={cn("space-y-1", isRtl ? "text-right" : "text-left")}>
                                            <h3 className="font-black text-primary text-lg">{item.title}</h3>
                                            <p className="text-muted-foreground font-bold leading-relaxed">{item.detail}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Map Placeholder */}
                        <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl relative group border-8 border-white">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115933.1952467269!2d46.671392!3d24.7135517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d48939b%3A0x60a96412153ff3bb!2z2KfZhNix2YrYp9i2!5e0!3m2!1sar!2ssa!4v1700000000000"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                            <div className="absolute inset-0 bg-primary/10 pointer-events-none group-hover:opacity-0 transition-opacity" />
                        </div>

                        {/* CTA WhatsApp */}
                        <Button className="w-full h-20 rounded-[2rem] bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl shadow-green-500/20 flex items-center justify-center gap-4 text-2xl font-black group transition-all hover:scale-[1.02]">
                            <MessageSquare className="h-8 w-8 fill-current" />
                            {t("contact.whatsapp_cta")}
                        </Button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
