import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from 'react';
import { motion } from "framer-motion";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ElementType;
    items?: string[];
    index?: number;
}

export function ServiceCard({ title, description, icon: Icon, items, index = 0 }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
        >
            <Card className="flex flex-col h-full bg-white/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 border-primary/5 hover:border-accent/30 group overflow-hidden relative rounded-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -mr-8 -mt-8 transition-all duration-500 group-hover:bg-accent/10 group-hover:scale-110" />

                <CardHeader className="pb-6 relative z-10 p-8">
                    <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-primary/20">
                        <Icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl font-black text-primary group-hover:text-primary/90 transition-colors">{title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 relative z-10 px-8 pb-8">
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-medium">{description}</p>
                    {items && items.length > 0 && (
                        <ul className="space-y-4">
                            {items.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-sm font-bold text-foreground/70 group-hover:text-foreground transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform shadow-sm shadow-accent/50" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    );
}
