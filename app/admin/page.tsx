import { FileText, MessageSquare, HelpCircle, Users } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { name: "Total Artikel", value: "24", change: "+3 bulan ini", icon: FileText },
    { name: "Total Testimoni", value: "156", change: "+12 bulan ini", icon: MessageSquare },
    { name: "Total FAQs", value: "18", change: "Updated", icon: HelpCircle },
    { name: "Leads Masuk", value: "89", change: "+15 minggu ini", icon: Users },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Landing Page</h1>
        <p className="text-gray-500 mt-1">Ringkasan konten dan performa Landing Page.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.name} className="bg-white overflow-hidden shadow-sm rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-blue-50 p-3 rounded-xl">
                <item.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">{item.value}</div>
                    <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                      {item.change}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="bg-white shadow-sm rounded-2xl border border-gray-100 p-6 h-96 flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Leads Terbaru</h3>
          <div className="flex-1 flex flex-col items-center justify-center">
            <Users className="h-12 w-12 text-gray-200 mb-2" />
            <p className="text-gray-400 font-medium">Belum ada leads baru hari ini.</p>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-2xl border border-gray-100 p-6 h-96 flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Draft Artikel</h3>
          <div className="flex-1 flex flex-col items-center justify-center">
            <FileText className="h-12 w-12 text-gray-200 mb-2" />
            <p className="text-gray-400 font-medium">Semua draft artikel sudah dipublikasi.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
