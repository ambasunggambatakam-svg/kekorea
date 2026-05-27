import Link from "next/link";
import { ArrowRight, Target, BookOpen, PenTool, ClipboardCheck } from "lucide-react";

export function QuickActionSection() {
  const actions = [
    {
      title: "Cek Level Bahasa Korea",
      desc: "Ketahui kemampuan kamu dalam 2 menit — gratis",
      icon: <Target className="h-6 w-6 text-blue-600" />,
      href: "#cek-level",
      color: "bg-blue-50"
    },
    {
      title: "Latihan Vocabulary",
      desc: "Perbanyak kosakata penting untuk ujian",
      icon: <BookOpen className="h-6 w-6 text-emerald-600" />,
      href: "#vocab",
      color: "bg-emerald-50"
    },
    {
      title: "Latihan Grammar",
      desc: "Pelajari pola kalimat yang sering keluar di TOPIK",
      icon: <PenTool className="h-6 w-6 text-purple-600" />,
      href: "#grammar",
      color: "bg-purple-50"
    },
    {
      title: "Mini Test TOPIK",
      desc: "Coba simulasi soal seperti ujian — gratis",
      icon: <ClipboardCheck className="h-6 w-6 text-orange-600" />,
      href: "#minitest",
      color: "bg-orange-50"
    }
  ];

  return (
    <section id="quick-action" className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Mulai Sekarang <span className="text-blue-600">(Gratis & Langsung Bisa Digunakan)</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pilih jenis latihan yang ingin kamu kerjakan hari ini. Tanpa perlu mendaftar, langsung mulai!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, i) => (
            <Link 
              key={i} 
              href={action.href}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${action.color}`}>
                {action.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                {action.title}
              </h3>
              <p className="text-sm text-gray-600 flex-1 mb-6">
                {action.desc}
              </p>
              <div className="text-sm font-bold text-blue-600 flex items-center mt-auto">
                Mulai <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
