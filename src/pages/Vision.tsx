import { Target, Lightbulb, Users, CheckCircle2, Award, Zap } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { SEO } from "@/components/SEO";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    }
};

export default function Vision() {
    return (
        <div className="min-h-screen bg-background w-full pb-32">
            <SEO
                title="رؤيتنا ورسالتنا"
                description="اكتشف رؤية مركز المساعد المبدع نحو الريادة في صيانة المعدات الثقيلة بالمملكة العربية السعودية، والتزامنا الراسخ بالجودة والاحترافية الصناعية."
                keywords="رؤية 2030، صيانة معدات ثقيلة، ريادة صناعية، المساعد المبدع، جودة عالمية"
            />
            {/* Powerful Hero Header - Balanced Height */}
            <section className="relative h-[55vh] min-h-[550px] flex items-center justify-center overflow-hidden bg-primary">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/about-workshop.png"
                        alt="Vision Facility"
                        className="w-full h-full object-cover grayscale-[0.2] brightness-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-background" />
                    <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 text-center container px-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white mb-8 tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                            رؤيتنا <span className="text-accent">&</span> رسالتنا
                        </h1>
                        <div className="h-2 md:h-3 w-40 md:w-64 bg-accent mx-auto rounded-full mb-10 shadow-[0_0_40px_rgba(255,193,7,0.7)]" />
                        <p className="text-2xl md:text-3xl lg:text-4xl text-white max-w-5xl mx-auto font-black leading-tight drop-shadow-2xl">
                            نصيغ مستقبل صيانة المعدات الثقيلة برؤية طموحة تلبي تطلعات رؤية المملكة 2030
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            <div className="container px-4 py-24 relative z-20 overflow-x-hidden max-w-7xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-40"
                >
                    {/* Vision Section - Extreme Contrast */}
                    <motion.section variants={itemVariants} className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-10 order-2 lg:order-1">
                            <div className="inline-flex items-center gap-4 px-8 py-3 rounded-full bg-accent text-primary font-black text-lg shadow-[0_15px_30px_rgba(255,193,7,0.3)] hover:scale-105 transition-transform cursor-default">
                                <Lightbulb className="h-6 w-6" />
                                طموح الريادة
                            </div>
                            <h2 className="text-6xl md:text-8xl font-black text-primary leading-none tracking-tighter">
                                رؤيتنا نحو <br /><span className="text-accent underline decoration-[12px] underline-offset-[16px]">الريادة</span> المطلقة
                            </h2>
                            <p className="text-2xl text-foreground font-bold leading-relaxed">
                                أن نكون القوة الدافعة والشريك الأول في قطاع صيانة المعدات الثقيلة،
                                متبنين أعلى معايير الابتكار التقني لنرسخ مكانتنا كمرجع عالمي في الجودة والاحترافية الصناعية.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    'قيادة التحول الصناعي في السوق السعودي',
                                    'توطين أحدث حلول الصيانة العالمية',
                                    'تمكين الكوادر الوطنية بأعلى معايير الخبرة'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-5 text-2xl font-black text-primary group">
                                        <div className="bg-accent p-1.5 rounded-full group-hover:rotate-12 transition-transform shadow-lg shadow-accent/20">
                                            <CheckCircle2 className="h-8 w-8 text-primary" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative group order-1 lg:order-2">
                            <div className="absolute inset-0 bg-accent/40 rounded-[4.5rem] -rotate-6 transform group-hover:rotate-0 transition-transform duration-1000 blur-md" />
                            <div className="aspect-square lg:aspect-[4/5] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] border-[8px] md:border-[12px] border-white relative z-10">
                                <img
                                    src="/about-workshop.png"
                                    alt="Vision Progress"
                                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-[2000ms]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-80" />
                            </div>
                            {/* Decorative Badge */}
                            <div className="absolute bottom-4 left-10 md:-bottom-10 md:-left-1 w-28 h-28 md:w-40 md:h-40 bg-primary rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-8 flex flex-col items-center justify-center text-white shadow-2xl z-20 rotate-12 group-hover:rotate-0 transition-transform duration-500 border-4 border-accent">
                                <div className="text-2xl md:text-4xl font-black text-accent">2030</div>
                                <div className="text-[10px] md:text-xs font-bold text-center mt-1">رؤية المستقبل</div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Mission Section - Heavy Industrial */}
                    <motion.section variants={itemVariants} className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-primary/40 rounded-[4.5rem] rotate-6 transform group-hover:rotate-0 transition-transform duration-1000 blur-md" />
                            <div className="aspect-square lg:aspect-[4/5] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] border-[8px] md:border-[12px] border-white relative z-10">
                                <img
                                    src="/precision-bg.png"
                                    alt="Mission Excellence"
                                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-[2000ms]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-accent/50 via-transparent to-transparent opacity-80" />
                            </div>
                            {/* Decorative Badge */}
                            <div className="absolute top-4 z-20 right-4 md:-top-10 md:-right-1 w-28 h-28 md:w-40 md:h-40 bg-accent rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-8 flex flex-col items-center justify-center text-primary shadow-2xl z-20 -rotate-12 group-hover:rotate-0 transition-transform duration-500 border-4 border-primary">
                                <Zap className="h-8 w-8 md:h-12 md:w-12 mb-2 animate-pulse" />
                                <div className="text-[10px] md:text-sm font-black text-center">أعلى جودة</div>
                            </div>
                        </div>
                        <div className="space-y-10">
                            <div className="inline-flex items-center gap-4 px-8 py-3 rounded-full bg-primary text-white font-black text-lg shadow-[0_15px_30px_rgba(0,0,50,0.3)] hover:scale-105 transition-transform cursor-default">
                                <Target className="h-6 w-6" />
                                التزام التميز
                            </div>
                            <h2 className="text-6xl md:text-8xl font-black text-primary leading-none tracking-tighter">
                                رسالتنا هي <br /><span className="text-accent underline decoration-[12px] underline-offset-[16px]">الاحتراف</span> الفائق
                            </h2>
                            <p className="text-2xl text-foreground font-bold leading-relaxed">
                                تقديم حلول صيانة استباقية ومبتكرة تضمن لعملائنا كفاءة تشغيلية غير مسبوقة،
                                مع الالتزام المطلق بالدقة الزمنية والشفافية التقنية في كل عملية إصلاح.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                                <div className="p-10 rounded-[3rem] bg-white border-4 border-primary/5 shadow-2xl hover:bg-primary hover:text-white transition-all duration-500 group">
                                    <div className="bg-accent/10 p-4 rounded-2xl w-fit mb-6 group-hover:bg-white/10 transition-colors">
                                        <Zap className="h-10 w-10 text-accent" />
                                    </div>
                                    <div className="text-2xl font-black mb-3">سرعة الإنجاز</div>
                                    <div className="text-lg font-bold opacity-80">نحقق المستحيل لنختصر الوقت من أجلكم.</div>
                                </div>
                                <div className="p-10 rounded-[3rem] bg-white border-4 border-primary/5 shadow-2xl hover:bg-primary hover:text-white transition-all duration-500 group">
                                    <div className="bg-accent/10 p-4 rounded-2xl w-fit mb-6 group-hover:bg-white/10 transition-colors">
                                        <Award className="h-10 w-10 text-accent" />
                                    </div>
                                    <div className="text-2xl font-black mb-3">دقة مطلقة</div>
                                    <div className="text-lg font-bold opacity-80">لا مكان للخطأ في معاييرنا الهندسية.</div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Values Section - Ultra Impact */}
                    <motion.section variants={itemVariants} className="bg-primary rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,50,0.6)]">
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-500/15 rounded-full blur-[200px] translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10 max-w-6xl mx-auto">
                            <div className="p-8 bg-white/10 backdrop-blur-3xl rounded-[3rem] w-32 h-32 flex items-center justify-center mx-auto mb-12 border border-white/20 shadow-inner group transition-transform hover:scale-110 duration-500">
                                <Users className="h-16 w-16 text-accent group-hover:animate-bounce" />
                            </div>
                            <h2 className="text-7xl md:text-9xl font-black text-white mb-10 tracking-tighter drop-shadow-2xl">قيمنا الجوهرية</h2>
                            <p className="text-3xl text-white mb-24 font-bold max-w-3xl mx-auto leading-relaxed">الأسس الفولاذية التي نبني عليها ريادتنا وشراكاتنا المستدامة.</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-10">
                                {[
                                    { name: 'الجودة', icon: '💎', color: 'bg-blue-600' },
                                    { name: 'الأمانة', icon: '🤝', color: 'bg-emerald-600' },
                                    { name: 'الالتزام', icon: '⏳', color: 'bg-amber-600' },
                                    { name: 'التطوير', icon: '🚀', color: 'bg-purple-600' },
                                    { name: 'الرضا', icon: '😊', color: 'bg-rose-600' }
                                ].map((val, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -20, scale: 1.05 }}
                                        className="bg-white/10 backdrop-blur-3xl p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] border border-white/10 hover:bg-white/20 transition-all group shadow-2xl relative overflow-hidden"
                                    >
                                        <div className={`absolute inset-0 ${val.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                                        <div className="text-5xl md:text-7xl mb-6 md:mb-8 group-hover:scale-125 transition-transform duration-700 drop-shadow-2xl">{val.icon}</div>
                                        <div className="font-black text-accent text-2xl md:text-3xl tracking-tight drop-shadow-sm">{val.name}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>
                </motion.div>
            </div>
        </div>
    );
}
