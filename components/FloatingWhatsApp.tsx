import { site } from "@/lib/site";
import { WhatsApp } from "./Icons";

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
        "Hi VRP Interiors, I'd like to discuss a project."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-4 text-white shadow-[0_18px_40px_-12px_rgba(37,211,102,0.7)] transition-transform hover:-translate-y-1"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <WhatsApp className="relative h-7 w-7" />
      <span className="relative hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-500 group-hover:max-w-[140px] sm:inline">
        Chat with us
      </span>
    </a>
  );
}
