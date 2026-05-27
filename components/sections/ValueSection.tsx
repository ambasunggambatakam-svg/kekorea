import { CheckCircle2 } from "lucide-react";

export function ValueSection() {
  const benefits = [
    "Latihan interaktif langsung (bukan hanya teori)",
    "Simulasi soal seperti ujian asli",
    "Lebih fleksibel dibanding buku fisik",
    "Bisa belajar kapan saja & di mana saja",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Cara Belajar yang Lebih Efektif & Interaktif
          </h2>
          <p className="text-lg text-gray-600">
            Tinggalkan cara lama. Mulai biasakan diri dengan sistem belajar yang modern dan efektif.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-start gap-4 p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
              <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
              <p className="font-medium text-gray-800 text-lg leading-relaxed">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
