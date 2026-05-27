export function RoadmapSection() {
  const steps = [
    {
      month: "Bulan 1",
      title: "Dasar",
      desc: "Bangun fondasi",
      items: ["Hangul", "Vocabulary dasar", "Grammar dasar", "Tes level awal"],
      color: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      month: "Bulan 2",
      title: "Penguatan",
      desc: "Mulai memahami soal",
      items: ["Reading", "Listening", "Kalimat", "Partikel"],
      color: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      month: "Bulan 3",
      title: "Persiapan Ujian",
      desc: "Simulasi & latihan",
      items: ["Mini test", "Latihan EPS-TOPIK", "Soal ujian", "Tryout Full"],
      color: "bg-purple-50 text-purple-700 border-purple-200"
    }
  ];

  return (
    <section className="py-20 bg-white border-y border-gray-100 overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Belajar Secara Bertahap & Terarah
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Belajar bahasa Korea akan lebih efektif jika dilakukan secara bertahap.
            Di sini, kamu bisa mengikuti alur belajar yang terstruktur dari dasar hingga siap ujian.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Timeline connecting line */}
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-1 bg-gray-100 rounded-full" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center">
              <div className={`w-20 h-20 rounded-full border-4 flex items-center justify-center font-bold text-lg mb-6 shadow-sm ${step.color} bg-white`}>
                {step.month}
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-500 font-medium mb-4">{step.desc}</p>
                <ul className="space-y-2 text-left">
                  {step.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
