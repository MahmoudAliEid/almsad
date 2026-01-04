import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";

export default function Contact() {
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" }
        })
    };

    return (
        <div className="min-h-screen bg-background pt-16 pb-24">
            <div className="container px-4">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-24 space-y-6"
                >
                    <h1 className="text-6xl md:text-9xl font-black text-primary tracking-tighter">تواصل <span className="text-accent underline decoration-[12px] underline-offset-[16px]">معنا</span></h1>
                    <div className="h-3 w-40 bg-accent mx-auto rounded-full shadow-[0_0_30px_rgba(255,193,7,0.5)]" />
                    <p className="text-3xl md:text-4xl text-foreground font-black max-w-4xl mx-auto leading-tight">
                        نحن جاهزون للاستجابة لاتصالاتكم وتقديم الدعم الفني الفوري.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-16">

                    {/* Contact Info Side with Heavy Power */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        custom={1}
                        className="lg:col-span-12 xl:col-span-5 space-y-10"
                    >
                        <div className="bg-primary text-white rounded-[3.5rem] p-12 md:p-16 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)] space-y-12 relative overflow-hidden group">
                            {/* Decorative background circle */}
                            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-accent/20 transition-colors duration-700" />

                            <div className="space-y-12 relative z-10">
                                <div className="flex items-start gap-8">
                                    <div className="p-5 bg-accent rounded-3xl text-primary shadow-xl shadow-accent/20 rotate-6 group-hover:rotate-0 transition-all duration-500">
                                        <MapPin className="h-10 w-10" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-black text-3xl text-accent mb-3">الموقع الرئيسي</h3>
                                        <p className="text-2xl text-white font-bold leading-relaxed mb-4">المملكة العربية السعودية، الرياض، المنطقة الصناعية</p>
                                        <Button variant="accent" className="rounded-2xl h-14 px-8 font-black text-lg shadow-2xl hover:scale-105 active:scale-95 transition-all" asChild>
                                            <a href="https://maps.app.goo.gl/tncrcjbBewwxuT346" target="_blank" rel="noreferrer">
                                                فتح خرائط جوجل <Send className="mr-3 h-5 w-5" />
                                            </a>
                                        </Button>
                                    </div>
                                </div>

                                <div className="flex items-start gap-8 border-t border-white/10 pt-12">
                                    <div className="p-5 bg-accent rounded-3xl text-primary shadow-xl shadow-accent/20 -rotate-6 group-hover:rotate-0 transition-all duration-500">
                                        <Phone className="h-10 w-10" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-black text-3xl text-accent mb-3">اتصال مباشر</h3>
                                        <a href="tel:+966500000000" dir="ltr" className="text-4xl font-black hover:text-accent transition-colors block text-left mb-2 drop-shadow-lg">
                                            +966 50 000 0000
                                        </a>
                                        <p className="text-white/70 font-bold">مهندس/ محمود علي - المدير الفني</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-8 border-t border-white/10 pt-12">
                                    <div className="p-5 bg-accent rounded-3xl text-primary shadow-xl shadow-accent/20 rotate-12 group-hover:rotate-0 transition-all duration-500">
                                        <Mail className="h-10 w-10" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-black text-3xl text-accent mb-3">المراسلة</h3>
                                        <a href="mailto:info@almsad.com" className="text-2xl font-black text-white hover:text-accent transition-colors underline decoration-4 underline-offset-8">
                                            info@almsad.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-8 border-t border-white/10 pt-12">
                                    <div className="p-5 bg-accent rounded-3xl text-primary shadow-xl shadow-accent/20 -rotate-12 group-hover:rotate-0 transition-all duration-500">
                                        <Clock className="h-10 w-10" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-black text-3xl text-accent mb-3">أوقات العمل</h3>
                                        <p className="text-2xl text-white font-bold leading-relaxed">السبت - الخميس: 8:00 صباحاً - 6:00 مساءً</p>
                                        <div className="inline-block mt-4 px-6 py-2 bg-destructive/20 border border-destructive/30 rounded-full text-destructive font-black text-lg">الجمعة: مغلق</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Map Side with Professional Frame */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        custom={2}
                        className="lg:col-span-12 xl:col-span-7"
                    >
                        <div className="h-[600px] lg:h-[850px] w-full bg-muted rounded-[4rem] overflow-hidden border-[16px] border-white shadow-[0_60px_100px_-20px_rgba(0,0,0,0.3)] relative group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14498.055866657924!2d46.7725925!3d24.7132955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f012457805179%3A0xe542617f18579979!2z2KfZhNix2YrYp9i2!5e0!3m2!1sar!2ssa!4v1700000000000!5m2!1sar!2ssa"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale-[30%] hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                            ></iframe>

                            <div className="absolute top-10 left-10 bg-white p-8 rounded-[3rem] shadow-2xl max-w-md hidden md:block border-b-[8px] border-accent">
                                <div className="text-2xl font-black text-primary mb-4">نحن في خدمتك</div>
                                <p className="text-xl text-foreground/80 font-bold leading-relaxed">تفضل بزيارة ورشتنا المتطورة في المنطقة الصناعية واحصل على فحص مجاني لمعداتك من قبل خبراءنا.</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
