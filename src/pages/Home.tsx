import { Hero } from "@/components/Hero";
import { SEO } from "@/components/SEO";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Wrench, ShieldCheck, Truck, ArrowLeft, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    return (
        <div className="flex flex-col min-h-screen">
            <SEO
                title="الرئيسية"
                description="مركز المساعد المبدع بالرياض - رائدون في صيانة المعدات الثقيلة والهيدروليك. نقدم أفضل حلول الإصلاح بمنتهى الدقة والاحترافية."
            />
            <Hero />

            {/* About Section Snippet */}
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
                            <motion.div variants={itemVariants} className="space-y-6">
                                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary font-bold text-sm border border-primary/10">
                                    مسيرتنا وخبرتنا
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-primary leading-tight">
                                    نحن الشريك الذي <br />تثق به في صيانة <span className="text-accent underline decoration-8 underline-offset-[12px]">المعدات</span>
                                </h2>
                                <p className="text-xl text-foreground/80 leading-loose font-bold">
                                    مركز المساعد المبدع هو ورشة متخصصة في صيانة وإصلاح المعدات الثقيلة،
                                    نقدم خدمات فنية عالية الجودة بأيدي فنيين ذوي خبرة، مع الالتزام
                                    بالدقة والسرعة وتقديم ضمان على جميع الأعمال المنفذة.
                                </p>
                                <div className="flex items-center gap-8 pt-4">
                                    <div className="text-center">
                                        <div className="text-3xl font-black text-primary">+1500</div>
                                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">مشروع منجز</div>
                                    </div>
                                    <div className="text-center border-r pr-8 border-border">
                                        <div className="text-3xl font-black text-primary">+20</div>
                                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">عام من الخبرة</div>
                                    </div>
                                </div>
                                <div className="pt-6">
                                    <Button variant="outline" size="lg" className="rounded-xl px-10 h-14 border-primary/20 hover:border-primary text-primary font-bold group" asChild>
                                        <Link to="/about">
                                            <span>اكتشف المزيد عنا</span>
                                            <ArrowLeft className="mr-3 h-5 w-5 group-hover:-translate-x-2 transition-transform" />
                                        </Link>
                                    </Button>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="relative">
                                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative group border border-primary/10">
                                    <img
                                        src="/precision-bg.png"
                                        alt="Precision Diagnostics"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                    <div className="absolute bottom-8 right-8 left-8 p-6 bg-white/20 backdrop-blur-2xl rounded-2xl border border-white/30 shadow-2xl">
                                        <div className="text-white font-black text-2xl mb-1 drop-shadow-md">دقة في الأداء</div>
                                        <div className="text-white-90 text-md font-bold">نستخدم أحدث أجهزة الفحص والبرمجة العالمية</div>
                                    </div>
                                </div>
                                {/* Floating element */}
                                <div className="absolute top-4 left-4 md:-top-6 md:-left-6 w-20 h-20 md:w-24 md:h-24 bg-accent rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(255,193,7,0.4)] rotate-12 hover:rotate-0 transition-transform cursor-default z-20">
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
                        <h2 className="text-4xl md:text-6xl font-black text-primary mb-6">خدماتنا المميزة</h2>
                        <p className="text-2xl text-foreground/80 font-bold">حلول متكاملة لجميع أنواع المعدات الثقيلة</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <ServiceCard
                            index={0}
                            title="صيانة الهيدروليك"
                            description="صيانة وإصلاح الطرمبات والبساتم الهيدروليكية بأحدث التقنيات."
                            icon={Wrench}
                            items={["إصلاح الطرمبات", "إصلاح البساتم", "صيانة الكنترول"]}
                        />
                        <ServiceCard
                            index={1}
                            title="كهرباء المعدات"
                            description="فحص وإصلاح الأنظمة الكهربائية والإلكترونية للمعدات وسيارات الديزل."
                            icon={BadgeCheck}
                            items={["فحص كمبيوتر", "إصلاح الظفائر", "أنظمة التشغيل"]}
                        />
                        <ServiceCard
                            index={2}
                            title="الصيانة المتنقلة"
                            description="ورشة متنقلة تصلك في موقع المشروع لتقليل وقت التوقف."
                            icon={Truck}
                            items={["سرعة الاستجابة", "تغطية شاملة", "معدات جاهزة"]}
                        />
                    </div>

                    <div className="mt-16 text-center">
                        <Button size="lg" className="group text-lg px-8 py-6" asChild>
                            <Link to="/services">
                                عرض جميع الخدمات
                                <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
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
                        نضمن لك الجودة <span className="text-accent underline decoration-8 underline-offset-[16px]">والاحترافية</span> في كل حركة
                    </h2>
                    <p className="max-w-4xl text-2xl md:text-3xl text-white font-bold mb-14 leading-relaxed drop-shadow-lg">
                        نحن لا نصلح المعدات فحسب، بل نعيد إليها كفاءتها القصوى. التزامنا بالجودة يبدأ من التشخيص الدقيق وينتهي بضمان شامل يمنحك راحة البال.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <Button variant="accent" size="lg" className="h-16 px-12 text-xl font-bold shadow-2xl shadow-accent/20 hover:scale-105 active:scale-95 transition-all" asChild>
                            <Link to="/contact">احصل على استشارة مجانية</Link>
                        </Button>
                        <div className="flex items-center gap-4 px-6 border-r border-white/20 sm:mr-6 text-white/60">
                            <Phone className="h-6 w-6 text-accent" />
                            <div className="text-right">
                                <div className="text-xs font-bold uppercase tracking-wider">اتصل بنا مباشرة</div>
                                <div className="text-lg font-black text-white" dir="ltr">+966 50 000 0000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
