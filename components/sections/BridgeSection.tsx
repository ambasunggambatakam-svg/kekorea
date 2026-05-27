import { ArrowRight, CheckCircle2 } from "lucide-react";

export function BridgeSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center space-y-10">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            🔥 Ingin Merasakan Ujian <br className="hidden md:block" /> Seperti Aslinya?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Kami sedang mengembangkan sistem simulasi ujian berbasis CBT yang dirancang untuk merepresentasikan kondisi ujian TOPIK dan EPS-TOPIK secara nyata.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm md:text-base font-medium text-gray-700">
          <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <CheckCircle2 className="h-5 w-5 text-red-600" /> Untuk meningkatkan kesiapan
          </span>
          <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <CheckCircle2 className="h-5 w-5 text-red-600" /> Membangun kepercayaan diri sebelum ujian
          </span>
        </div>

        <div className="pt-4">
          <a 
            href="https://epstopik.id" 
            className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-5 px-10 rounded-2xl shadow-xl shadow-red-600/30 transition-all hover:-translate-y-1 text-lg sm:text-xl"
          >
            Coba Simulasi CBT Sekarang <ArrowRight className="h-6 w-6" />
          </a>
          <p className="mt-4 text-sm text-gray-500 font-medium">
            Dipersembahkan oleh ekosistem <span className="text-blue-600 font-bold">EPSTOPIK.ID</span>
          </p>
        </div>
      </div>
    </section>
  );
}
