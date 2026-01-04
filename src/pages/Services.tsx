import { ServiceCard } from "@/components/ServiceCard";
import { Wrench, Zap, Settings, ShoppingBag, Shield, Truck } from "lucide-react";
import { motion, type Variants } from "framer-motion";

export default function Services() {
    const services = [
        {
            title: "صيانة الهيدروليك",
            description: "خدمات شاملة للأنظمة الهيدروليكية لضمان أعلى قوة وأداء.",
            icon: Wrench,
            items: [
                "صيانة وإصلاح الطرمبات الهيدروليك",
                "إصلاح البساتم الهيدروليك",
                "صيانة الكنترول (Control Valves)",
                "كبس وصيانة الليّات الهيدروليك",
                "معالجة التسريبات ورفع كفاءة الأنظمة",
            ],
        },
        {
            title: "كهرباء المعدات و الديزل",
            description: "تشخيص وإصلاح الأعطال الكهربائية بأجهزة متطورة.",
            icon: Zap,
            items: [
                "صيانة كهرباء المعدات الثقيلة",
                "فحص الأعطال الإلكترونية",
                "إصلاح أنظمة التشغيل والشحن",
                "كهرباء سيارات الديزل والمولدات",
            ],
        },
        {
            title: "ميكانيكا المعدات الثقيلة",
            description: "عمرات وصيانة عامة للمحركات وأنظمة الحركة.",
            icon: Settings,
            items: [
                "صيانة محركات المعدات الثقيلة",
                "القير والدفرنس",
                "أنظمة الفرامل",
                "الصيانة الدورية والوقائية",
            ],
        },
        {
            title: "بيع قطع الغيار",
            description: "توفير قطع الغيار اللازمة بأفضل الأسعار.",
            icon: ShoppingBag,
            items: [
                "توفير قطع غيار أصلية وبديلة",
                "جودة مضمونة",
                "أسعار منافسة",
            ],
        },
        {
            title: "الضمان",
            description: "راحة البال مع ضمان شامل على خدماتنا.",
            icon: Shield,
            items: [
                "ضمان على جميع أعمال الصيانة",
                "التزام بالمواعيد",
                "متابعة بعد التسليم",
            ],
        },
        {
            title: "الصيانة المتنقلة",
            description: "نصلك أينما كنت لتقليل التكاليف ووقت التوقف.",
            icon: Truck,
            items: [
                "خدمة الصيانة المتنقلة في مواقع المشاريع",
                "تقليل التوقف وزيادة الإنتاجية",
                "فريق جاهز للطوارئ",
            ],
        },
    ];

    const containerVariants: Variants = {
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
            <div className="container px-4">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-24 space-y-6"
                >
                    <h1 className="text-5xl md:text-8xl font-black text-primary tracking-tighter">خدماتنا <span className="text-accent italic">المتميزة</span></h1>
                    <div className="h-2 w-48 bg-accent mx-auto rounded-full mb-8 shadow-[0_0_20px_rgba(255,193,7,0.4)]" />
                    <p className="text-2xl md:text-3xl text-foreground font-bold max-w-4xl mx-auto leading-relaxed">
                        نقدم مجموعة متكاملة من خدمات الصيانة والإصلاح لجميع أنواع المعدات الثقيلة،
                        مع التركيز المطلق على الجودة والسرعة الفائقة.
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
