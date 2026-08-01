import React from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5514997603870";

export function WhatsAppFloat() {
  const message = encodeURIComponent("Olá! Gostaria de tirar dúvidas sobre o PDV.");
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgb(37,211,102,0.6)] hover:scale-105 transition-all duration-300 group"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="text-sm font-semibold pr-1 hidden sm:inline">
        Falar no WhatsApp
      </span>
    </a>
  );
}
