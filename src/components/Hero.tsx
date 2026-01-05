import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative bg-navy-900 text-white overflow-hidden min-h-[85vh] flex items-center justify-center overflow-hidden">
            {/* Background with overlay and gradient */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-bg.png"
                    alt="Heavy Equipment Maintenance"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-primary via-primary/80 to-transparent" />
                <div className="absolute inset-0 bg-primary/40 backdrop-blur-[4px]" />
                <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center px-4 py-32 md:py-48">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-right space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-bold backdrop-blur-md">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                        </span>
                        مركز المساعد المبدع - خبرة تزيد عن 20 عاماً
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tight leading-tight drop-shadow-2xl">
                        شريكك الأول في <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-accent to-yellow-300">
                            صيانة المعدات
                        </span>
                    </h1>

                    <p className="text-lg md:text-3xl text-white max-w-2xl leading-relaxed font-bold drop-shadow-lg">
                        نقدم حلولاً متكاملة لصيانة المعدات الثقيلة بأعلى معايير الجودة العالمية،
                        مع ضمان حقيقي وسرعة استثنائية في التنفيذ.
                    </p>

                    <div className="flex flex-wrap gap-6 justify-start">
                        {['ضمان شامل', 'فريق محترف', 'خدمة متنقلة'].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-base text-white font-semibold bg-white/10 px-4 py-2 rounded-xl border border-white/20 backdrop-blur-md">
                                <CheckCircle2 className="h-5 w-5 text-accent" />
                                {item}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto pt-6">
                        <Button size="lg" variant="accent" className="font-bold text-lg md:text-xl h-14 md:h-16 px-8 md:px-10 shadow-2xl shadow-accent/30 hover:scale-105 active:scale-95 transition-all" asChild>
                            <Link to="/contact">تواصل معنا الآن</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg md:text-xl h-14 md:h-16 px-8 md:px-10 bg-white/5 backdrop-blur-md text-white border-white/30 hover:bg-white/15 hover:border-white/50 transition-all font-bold group" asChild>
                            <Link to="/services">
                                <span>خدماتنا الفنية</span>
                                <ArrowLeft className="mr-3 h-6 w-6 group-hover:-translate-x-2 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>

                {/* Glass Card Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: -50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10 rounded-3xl overflow-hidden border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.3)] bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl p-8">
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { count: "+2500", label: "عميل سعيد" },
                                { count: "+15", label: "سنة خبرة" },
                                { count: "+50", label: "فني مختص" },
                                { count: "100%", label: "ضمان جودة" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors cursor-default"
                                >
                                    <div className="text-4xl font-black text-accent mb-1 drop-shadow-sm">{stat.count}</div>
                                    <div className="text-sm text-white font-black uppercase tracking-wider">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-16 -left-16 w-32 h-32 bg-accent/30 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"></div>
                </motion.div>

            </div>
        </section>
    );
}
