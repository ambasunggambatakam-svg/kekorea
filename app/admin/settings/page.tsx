import { Save } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Pengaturan & SEO</h1>
        <p className="text-gray-500 mt-1">Konfigurasi meta tag dan informasi umum Landing Page.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Nama Website (Title Tag)</label>
              <input 
                type="text" 
                defaultValue="Kekorea - Belajar Bahasa Korea & Epstopik"
                className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">URL Website</label>
              <input 
                type="text" 
                defaultValue="https://kekorea.id"
                className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-gray-50"
                disabled
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Deskripsi Meta (SEO Description)</label>
            <textarea 
              rows={3}
              defaultValue="Platform gratis dengan 100+ latihan interaktif, simulasi ujian, dan panduan lengkap untuk membantu kamu belajar bahasa Korea dan mempersiapkan diri ke Korea."
              className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Kata Kunci SEO (Keywords)</label>
            <input 
              type="text" 
              defaultValue="belajar bahasa korea, epstopik, ujian cbt korea, ubt korea"
              className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
            <p className="text-xs text-gray-500">Pisahkan dengan koma.</p>
          </div>
          
          <div className="space-y-2 pt-4 border-t border-gray-100">
            <label className="text-sm font-semibold text-gray-700">Link WhatsApp Admin</label>
            <input 
              type="text" 
              defaultValue="https://wa.me/6281234567890"
              className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end">
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-medium transition-colors">
            <Save className="h-4 w-4" /> Simpan Pengaturan
          </button>
        </div>
      </div>
    </div>
  );
}
