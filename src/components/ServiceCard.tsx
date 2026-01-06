import { motion } from "framer-motion";
import { type LucideIcon, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "../lib/utils";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    items: string[];
    index: number;
}

export function ServiceCard({ title, description, icon: Icon, items, index }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="h-full"
        >
            <Card className="h-full border-none shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 rounded-[2.5rem] overflow-hidden group bg-white">
                <CardContent className="p-10 flex flex-col h-full space-y-6">
                    <div className={cn(
                        "w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110",
                        index % 3 === 0 ? "bg-primary text-white" :
                            index % 3 === 1 ? "bg-accent text-primary" : "bg-muted text-primary"
                    )}>
                        <Icon className="h-10 w-10" />
                    </div>

                    <div className="space-y-4 text-start">
                        <h3 className="text-3xl font-black text-primary leading-tight group-hover:text-accent transition-colors">
                            {title}
                        </h3>
                        <p className="text-lg text-muted-foreground font-bold leading-relaxed">
                            {description}
                        </p>
                    </div>

                    <div className="space-y-3 pt-4 mt-auto">
                        {items.map((item, i) => (
                            <div key={i} className="flex items-center gap-3 font-bold text-foreground/80 flex-row">
                                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
