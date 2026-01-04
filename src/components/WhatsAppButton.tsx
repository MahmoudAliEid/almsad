import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/966555555555" // Placeholder number
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 left-6 z-50 animate-in fade-in zoom-in duration-300"
        >
            <Button
                size="icon"
                className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg border-2 border-white"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle className="h-8 w-8" />
            </Button>
        </a>
    );
}
