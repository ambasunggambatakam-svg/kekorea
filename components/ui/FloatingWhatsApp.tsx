import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 9999 }}>
      <div className="relative flex items-center justify-center">
        {/* The pulsing ring behind the button */}
        <div className="absolute w-full h-full bg-[#25D366] rounded-full animate-ping opacity-75"></div>
        
        {/* The main button */}
        <a
          href="https://wa.me/6282227151339?text=Halo"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#1EBE5D] transition-colors hover:scale-110 active:scale-95"
          aria-label="Chat WhatsApp"
        >
          <MessageCircle className="w-8 h-8 fill-current" />
        </a>
      </div>
    </div>
  );
}
