import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "6281234567890";
  const message = encodeURIComponent("Halo, saya ingin konsultasi mengenai layanan di Brown Clinic.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-[#128C7E] transition-all duration-300 hover:-translate-y-1 group"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-medium hidden sm:inline-block">Chat WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
