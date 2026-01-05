import { Link } from "react-router-dom";
import { Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground mt-auto">
            <div className="py-12 md:py-16 px-4 md:px-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {/* About */}
                    <div>
                        <Link to="/" className="inline-block mb-8 group">
                            <img
                                src="/logo.png"
                                alt="مركز المساعد المبدع"
                                className="h-24 md:h-32 lg:h-36 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-2xl mix-blend-screen"
                            />
                        </Link>
                        <p className="text-primary-foreground/80 leading-relaxed text-sm">
                            ورشة متخصصة في صيانة وإصلاح المعدات الثقيلة، نقدم خدمات فنية عالية
                            الجودة بأيدي فنيين ذوي خبرة.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about" className="hover:text-accent transition-colors">من نحن</Link></li>
                            <li><Link to="/services" className="hover:text-accent transition-colors">خدماتنا</Link></li>
                            <li><Link to="/vision" className="hover:text-accent transition-colors">رؤيتنا</Link></li>
                            <li><Link to="/contact" className="hover:text-accent transition-colors">تواصل معنا</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">معلومات التواصل</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <MapPin className="h-5 w-5 text-accent shrink-0" />
                                <span>المملكة العربية السعودية<br />الرياض، المنطقة الصناعية</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-5 w-5 text-accent shrink-0" />
                                <a href="tel:+966500000000" className="hover:text-accent text-left" dir="ltr">+966 50 000 0000</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-5 w-5 text-accent shrink-0" />
                                <a href="mailto:info@almsad.com" className="hover:text-accent">info@almsad.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">تابعنا</h3>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/almsa_dalmbd" target="_blank" rel="noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="https://x.com/almsa_dalmbd" target="_blank" rel="noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            {/* Add more as needed */}
                        </div>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
                    <p>© {new Date().getFullYear()} مركز المساعد المبدع. جميع الحقوق محفوظة.</p>
                    <p className="flex items-center gap-1.5 font-medium">
                        تم التطوير والتصميم بواسطة
                        <a
                            href="https://shimaamohamed.bio.link/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:text-white transition-colors font-bold"
                        >
                            Soft Masters
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
