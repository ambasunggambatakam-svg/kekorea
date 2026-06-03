import { Plus, Search, Edit3, Trash2 } from "lucide-react";

export default function AdminFaqsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">FAQ Manager</h1>
          <p className="text-gray-500 mt-1">Kelola daftar pertanyaan yang sering diajukan (FAQ).</p>
        </div>
        <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-colors">
          <Plus className="h-4 w-4" /> Tambah FAQ
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Cari FAQ..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Pertanyaan</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Status</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[1, 2].map((i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">Apakah simulasi CBT ini berbayar?</div>
                    <div className="text-sm text-gray-500 mt-1 max-w-lg truncate">Kami menyediakan simulasi CBT gratis dan juga versi Premium yang lebih lengkap.</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
                      Aktif
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="text-gray-400 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                        <Edit3 className="h-5 w-5" />
                      </button>
                      <button className="text-gray-400 hover:text-red-600 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
