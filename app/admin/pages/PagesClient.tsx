"use client";

import { useState } from "react";
import { Plus, Search, Edit3, Trash2, X, Save } from "lucide-react";
import { savePage, deletePage } from "./actions";

export function PagesClient({ initialPages }: { initialPages: any[] }) {
  const [pages, setPages] = useState(initialPages);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ slug: '', title: '', category: '', content: '' });

  const handleEdit = (page: any) => {
    setFormData({
      slug: page.slug,
      title: page.title,
      category: page.category || '',
      content: page.content || ''
    });
    setIsEditing(true);
  };

  const handleAddNew = () => {
    setFormData({ slug: '', title: '', category: '', content: '' });
    setIsEditing(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await savePage(formData);
    if (res.success) {
      alert("Berhasil disimpan!");
      setIsEditing(false);
      window.location.reload(); // Simple refresh to get new data
    } else {
      alert("Gagal: " + res.error);
    }
  };

  const handleDelete = async (slug: string) => {
    if (confirm("Yakin ingin menghapus halaman ini?")) {
      const res = await deletePage(slug);
      if (res.success) {
        setPages(pages.filter(p => p.slug !== slug));
      }
    }
  };

  if (isEditing) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Edit Halaman Dinamis</h2>
          <button onClick={() => setIsEditing(false)} className="text-gray-500 hover:text-gray-900"><X /></button>
        </div>
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Slug URL (misal: latihan-huruf)</label>
            <input required value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Judul Halaman</label>
            <input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Kategori</label>
            <input value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Konten (Markdown/Teks)</label>
            <textarea value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} rows={10} className="w-full border p-2 rounded" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"><Save className="w-4 h-4" /> Simpan</button>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kelola Halaman Dinamis</h1>
          <p className="text-gray-500 mt-1">Buat dan atur konten halaman untuk navigasi website.</p>
        </div>
        <button onClick={handleAddNew} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium">
          <Plus className="h-4 w-4" /> Tambah Halaman
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Judul & Slug</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Kategori</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {pages.map((page) => (
                <tr key={page.slug} className="hover:bg-gray-50/50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{page.title}</div>
                    <div className="text-sm text-gray-500">/p/{page.slug}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{page.category || '-'}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => handleEdit(page)} className="text-gray-400 hover:text-blue-600 p-2"><Edit3 className="h-5 w-5" /></button>
                      <button onClick={() => handleDelete(page.slug)} className="text-gray-400 hover:text-red-600 p-2"><Trash2 className="h-5 w-5" /></button>
                    </div>
                  </td>
                </tr>
              ))}
              {pages.length === 0 && (
                <tr><td colSpan={3} className="text-center py-8 text-gray-500">Belum ada halaman. Klik Tambah Halaman untuk memulai.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
