import { Search, Download, Filter } from "lucide-react";

export default function AdminLeadsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Leads & Kontak</h1>
          <p className="text-gray-500 mt-1">Daftar kontak pengunjung yang masuk dari Landing Page.</p>
        </div>
        <button className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-xl font-medium transition-colors">
          <Download className="h-4 w-4" /> Export CSV
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Cari berdasarkan nama atau email..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-gray-600 font-medium hover:bg-gray-50 transition-colors">
            <Filter className="h-4 w-4" /> Filter Status
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Nama & Kontak</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Pesan</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Status</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Tanggal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[1, 2, 3].map((i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">John Doe</div>
                    <div className="text-sm text-gray-500">john@example.com</div>
                    <div className="text-sm text-gray-500">08123456789</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">
                    Saya tertarik untuk mencoba simulasi CBT, bagaimana cara daftarnya?
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
                      New
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">Hari ini, 10:00</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
